import html
import importlib.util
import json
import sys
import tempfile
import types
import unittest
from pathlib import Path


class LocalPdfBackendScoringTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        root = Path(__file__).resolve().parents[1]
        src_dir = root / "src"
        if str(src_dir) not in sys.path:
            sys.path.insert(0, str(src_dir))

        fitz_stub = types.ModuleType("fitz")
        fitz_stub.open = lambda *args, **kwargs: None
        sys.modules.setdefault("fitz", fitz_stub)

        paper_figures_stub = types.ModuleType("paper_figures")
        paper_figures_stub.ensure_paper_figures = lambda **kwargs: []
        paper_figures_stub.ensure_paper_figures_from_file = lambda **kwargs: []
        sys.modules.setdefault("paper_figures", paper_figures_stub)

        if "llm" not in sys.modules:
            llm_stub = types.ModuleType("llm")

            class DummyLLMClient:
                def __init__(self, *args, **kwargs):
                    self.kwargs = {}

            class DummyLLMAuthenticationError(Exception):
                pass

            llm_stub.LLMClient = DummyLLMClient
            llm_stub.LLMAuthenticationError = DummyLLMAuthenticationError
            llm_stub.make_task_client = lambda *args, **kwargs: DummyLLMClient()
            sys.modules["llm"] = llm_stub

        spec = importlib.util.spec_from_file_location(
            "local_pdf_backend_mod",
            src_dir / "local_pdf_backend.py",
        )
        cls.mod = importlib.util.module_from_spec(spec)
        assert spec and spec.loader
        spec.loader.exec_module(cls.mod)

    def test_apply_subscription_score_updates_paper_metadata(self):
        paper = {
            "id": "local-paper",
            "llm_score": "local",
            "canonical_evidence": "本地上传 PDF",
            "llm_tags": ["paper:本地PDF", "query:local-pdf"],
        }
        self.mod._apply_subscription_score(
            paper,
            {
                "score": 8.5,
                "canonical_evidence": "匹配当前订阅方向",
                "tldr_cn": "与订阅方向高度相关",
                "matched_query_tag": "query:neural-editing",
                "matched_query_text": "neural image editing",
            },
        )

        self.assertEqual(paper["llm_score"], 8.5)
        self.assertEqual(paper["score_label"], "订阅评分")
        self.assertEqual(paper["canonical_evidence"], "匹配当前订阅方向")
        self.assertEqual(paper["llm_tldr_cn"], "与订阅方向高度相关")
        self.assertIn("query:neural-editing", paper["llm_tags"])
        self.assertEqual(paper["matched_query_text"], "neural image editing")

    def test_local_subscription_keyword_fallback_scores_exact_match(self):
        paper = {
            "id": "local-paper",
            "title": "MoRE-Brain: Routed Mixture of Experts for Interpretable Brain Decoding",
            "abstract": "The method decodes fMRI signals into CLIP representations for visual reconstruction.",
        }
        result = self.mod._score_local_pdf_by_subscription_requirements(
            paper,
            "MoRE-Brain is an interpretable fMRI neural decoding framework.",
            [{"query": "brain decoding", "tag": "query:fclip"}],
        )

        self.assertIsNotNone(result)
        self.assertEqual(result["score"], 9.0)
        self.assertEqual(result["matched_query_tag"], "query:fclip")
        self.assertEqual(result["matched_query_text"], "brain decoding")

    def test_sidebar_entry_writes_subscription_score_label(self):
        with tempfile.TemporaryDirectory() as tmp:
            sidebar = Path(tmp) / "_sidebar.md"
            sidebar.write_text("* Daily Papers\n", encoding="utf-8")

            self.mod._insert_local_sidebar_entry(
                str(sidebar),
                "local-pdf/20260527/demo-paper",
                "Demo Paper",
                "匹配当前订阅方向",
                score=8.5,
                score_label="订阅评分",
            )

            text = sidebar.read_text(encoding="utf-8")
            self.assertIn("data-sidebar-item=", text)
            encoded = text.split('data-sidebar-item="', 1)[1].split('"', 1)[0]
            payload = json.loads(html.unescape(encoded))
            self.assertEqual(payload["score"], "8.5 订阅评分")
            self.assertEqual(payload["evidence"], "匹配当前订阅方向")
            self.assertNotIn("reader_section", payload)


    def test_batch_manifest_loads_ordered_items_under_upload_root(self):
        with tempfile.TemporaryDirectory() as tmp:
            docs = Path(tmp) / "docs"
            batch_dir = docs / "assets" / "local_pdfs" / "uploads" / "batch-1"
            batch_dir.mkdir(parents=True)
            pdf = batch_dir / "001-paper.pdf"
            pdf.write_bytes(b"%PDF-1.4")
            manifest = batch_dir / "manifest.json"
            manifest.write_text(
                json.dumps(
                    {
                        "version": 1,
                        "items": [
                            {
                                "client_id": "item-1",
                                "upload_path": str(pdf),
                                "original_filename": "paper.pdf",
                                "title_override": "Correct Title",
                            }
                        ],
                    }
                ),
                encoding="utf-8",
            )

            _, items = self.mod._load_local_pdf_batch_manifest(
                manifest_path=str(manifest),
                docs_path=docs,
            )

            self.assertEqual(len(items), 1)
            self.assertEqual(items[0]["client_id"], "item-1")
            self.assertEqual(items[0]["filename"], "paper.pdf")
            self.assertEqual(items[0]["title_override"], "Correct Title")
            self.assertEqual(items[0]["upload_path"], pdf.resolve())

    def test_batch_manifest_rejects_paths_outside_upload_root(self):
        with tempfile.TemporaryDirectory() as tmp:
            docs = Path(tmp) / "docs"
            batch_dir = docs / "assets" / "local_pdfs" / "uploads" / "batch-1"
            batch_dir.mkdir(parents=True)
            outside = Path(tmp) / "outside.pdf"
            outside.write_bytes(b"%PDF-1.4")
            manifest = batch_dir / "manifest.json"
            manifest.write_text(
                json.dumps({"items": [{"upload_path": str(outside)}]}),
                encoding="utf-8",
            )

            with self.assertRaises(ValueError):
                self.mod._load_local_pdf_batch_manifest(
                    manifest_path=str(manifest),
                    docs_path=docs,
                )

    def test_batch_manifest_retries_item_until_success(self):
        with tempfile.TemporaryDirectory() as tmp:
            docs = Path(tmp) / "docs"
            batch_dir = docs / "assets" / "local_pdfs" / "uploads" / "batch-1"
            batch_dir.mkdir(parents=True)
            pdf = batch_dir / "paper.pdf"
            pdf.write_bytes(b"%PDF-1.4")
            manifest = batch_dir / "manifest.json"
            manifest.write_text(
                json.dumps(
                    {
                        "items": [
                            {
                                "client_id": "item-1",
                                "upload_path": str(pdf),
                                "original_filename": "paper.pdf",
                            }
                        ],
                    }
                ),
                encoding="utf-8",
            )
            calls = {"count": 0}
            original = self.mod.generate_local_pdf_deep_doc_from_file

            def flaky_generate(**kwargs):
                calls["count"] += 1
                if calls["count"] < 3:
                    raise RuntimeError(f"temporary failure {calls['count']}")
                return {"ok": True, "route": "#/local-pdf/ok"}

            self.mod.generate_local_pdf_deep_doc_from_file = flaky_generate
            try:
                result = self.mod.generate_local_pdf_deep_docs_from_manifest(
                    manifest_path=str(manifest),
                    docs_dir=str(docs),
                    cleanup_uploads=True,
                    max_attempts=3,
                )
            finally:
                self.mod.generate_local_pdf_deep_doc_from_file = original

            self.assertEqual(calls["count"], 3)
            self.assertTrue(result["ok"])
            self.assertEqual(result["succeeded"], 1)
            self.assertEqual(result["failed"], 0)
            self.assertEqual(result["results"][0]["attempts"], 3)
            self.assertEqual(len(result["results"][0]["retry_errors"]), 2)
            self.assertFalse(pdf.exists())
            self.assertFalse(manifest.exists())

    def test_batch_manifest_reports_failure_after_three_attempts(self):
        with tempfile.TemporaryDirectory() as tmp:
            docs = Path(tmp) / "docs"
            batch_dir = docs / "assets" / "local_pdfs" / "uploads" / "batch-1"
            batch_dir.mkdir(parents=True)
            pdf = batch_dir / "paper.pdf"
            pdf.write_bytes(b"%PDF-1.4")
            manifest = batch_dir / "manifest.json"
            manifest.write_text(
                json.dumps(
                    {
                        "items": [
                            {
                                "client_id": "item-1",
                                "upload_path": str(pdf),
                                "original_filename": "paper.pdf",
                            }
                        ],
                    }
                ),
                encoding="utf-8",
            )
            calls = {"count": 0}
            original = self.mod.generate_local_pdf_deep_doc_from_file

            def failing_generate(**kwargs):
                calls["count"] += 1
                raise RuntimeError(f"still failing {calls['count']}")

            self.mod.generate_local_pdf_deep_doc_from_file = failing_generate
            try:
                result = self.mod.generate_local_pdf_deep_docs_from_manifest(
                    manifest_path=str(manifest),
                    docs_dir=str(docs),
                    cleanup_uploads=True,
                    max_attempts=3,
                )
            finally:
                self.mod.generate_local_pdf_deep_doc_from_file = original

            self.assertEqual(calls["count"], 3)
            self.assertFalse(result["ok"])
            self.assertEqual(result["succeeded"], 0)
            self.assertEqual(result["failed"], 1)
            self.assertEqual(result["results"][0]["attempts"], 3)
            self.assertEqual(len(result["results"][0]["retry_errors"]), 3)
            self.assertEqual(result["results"][0]["error"], "still failing 3")
            self.assertTrue(pdf.exists())
            self.assertTrue(manifest.exists())

    def test_local_pdf_basename_parts_are_truncated_before_combining(self):
        title = (
            "NeurIPS25 NOBEL - One Brain, Omni Modalities_ Towards Unified "
            "Non-Invasive Brain Decoding with Large Language Models"
        )
        filename = f"{title}.pdf"
        safe_original = self.mod._safe_asset_key(Path(filename).stem)
        asset_key = self.mod._truncate_safe_key(
            self.mod._safe_asset_key(f"local-20260531-202232335160-{safe_original}"),
            self.mod._LOCAL_PDF_ASSET_KEY_MAX_LEN,
        )
        slug = self.mod._truncate_safe_key(
            self.mod.gen6.slugify(title),
            self.mod._LOCAL_PDF_SLUG_MAX_LEN,
        )
        basename = f"{asset_key}-{slug}"

        self.assertLessEqual(len(asset_key), 96)
        self.assertLessEqual(len(slug), 96)
        self.assertLess(len(f"{basename}.txt".encode("utf-8")), 255)
        self.assertTrue(asset_key.startswith("local-20260531-202232335160-"))



if __name__ == "__main__":
    unittest.main()
