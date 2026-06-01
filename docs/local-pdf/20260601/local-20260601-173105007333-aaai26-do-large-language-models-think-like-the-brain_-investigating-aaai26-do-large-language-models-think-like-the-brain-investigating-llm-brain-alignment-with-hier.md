---
title: AAAI26 Do Large Language Models Think like the Brain_ Investigating LLM-Brain Alignment with Hierarchical Neural Representations
title_zh: 大型语言模型是否像大脑一样思考？通过层次化神经表征探究LLM与大脑的对齐
authors: "Yu Lei, Xingyang Ge, Yi Zhang, Yiming Yang, Bolei Ma"
date: 2026-06-01
pdf: assets/local_pdfs/local-20260601-173105007333-aaai26-do-large-language-models-think-like-the-brain_-investigating.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 将大语言模型表示与fMRI脑响应对齐
tldr: 本研究探讨大语言模型（LLMs）与人类大脑在句子理解上的计算对齐问题，通过对比14个LLM的层级表征与自然叙述任务的fMRI数据，构建句子级神经预测模型。结果发现，模型性能提升推动其表征架构向大脑层级演化，尤其在高层语义抽象上实现更强的功能与解剖对应，为LLMs作为人类语言处理模型提供了新证据。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260601-173105007333-aaai26-do-large-language-models-think-like-the-brain_-investigating/fig-003.webp\", \"caption\": \"Figure 2: Multi-stage pipeline to analyze the alignment between LLM representations and neural responses during naturalistic language comprehension. The methodology includes auditory stimulus presentation, layer-wise embedding extraction from LLMs, voxel-wise regression modeling, and region-of-interest (ROI)-based brain-model alignment analysis. Panel (a) outlines the neuroimaging data acquisition and preprocessing steps, while panel (b) describes the brain-LLM alignment analysis.\", \"page\": 3, \"index\": 3, \"width\": 785, \"height\": 458}, {\"url\": \"assets/figures/local-pdf/local-20260601-173105007333-aaai26-do-large-language-models-think-like-the-brain_-investigating/fig-004.webp\", \"caption\": \"Figure 4: Correlation between model predictions and brain activity across layers. Shaded areas are 95% confidence intervals.\", \"page\": 5, \"index\": 4, \"width\": 940, \"height\": 559}, {\"url\": \"assets/figures/local-pdf/local-20260601-173105007333-aaai26-do-large-language-models-think-like-the-brain_-investigating/fig-001.webp\", \"caption\": \"Figure 7: Correlation between model performance and activation patterns across LLMs\", \"page\": 6, \"index\": 1, \"width\": 462, \"height\": 300}, {\"url\": \"assets/figures/local-pdf/local-20260601-173105007333-aaai26-do-large-language-models-think-like-the-brain_-investigating/fig-002.webp\", \"caption\": \"Figure 8: (a) illustrates the localization of ROIs in both hemispheres; (b) displays the left-minus-right (LH-RH) correlation differences in ROI-LLM associations; (c) examines the relationship between LH-RH asymmetry and model performance.\", \"page\": 7, \"index\": 2, \"width\": 891, \"height\": 434}]"
motivation: 探究大语言模型的脑相似性是否仅源于规模扩展，还是反映了更深层的语言处理架构对齐。
method: 将14个LLM的层级嵌入与人类听故事的fMRI脑响应对齐，建立句子级编码模型，识别与脑区激活最相关的网络层。
result: 模型性能提升驱动表征层级向大脑样结构进化，在更高语义抽象层取得更强的功能和脑区对应。
conclusion: 大语言模型大脑对齐随语义层级提升而增强，支持其作为人类语言处理计算模型的潜力。
---

## 摘要
理解大型语言模型（LLMs）与人脑是否收敛于相似的计算原理，仍是认知神经科学与人工智能领域的一个根本性重要问题。LLMs中观察到的大脑样模式仅仅源于规模扩展，还是反映了它们与人类语言处理架构更深层的对齐？本研究聚焦于句子层面的语言模型神经机制，系统考察了LLMs的逐层表征如何与人类句子理解过程中的动态神经响应相对齐。通过比较14个公开可用的LLMs的层次化嵌入和参与者在聆听自然叙事故事时采集的功能磁共振成像数据，我们构建了句子级的神经预测模型，以识别与脑区激活最显著相关的模型层。结果表明，模型性能的提升驱动着表征架构向类脑层级结构演化，特别是在更高层次的语义抽象水平上实现了更强的功能和解剖对应关系。这些发现推进了我们对LLMs与人脑计算并行性的理解，突显了LLMs作为人类语言处理模型的潜力。代码 — https://github.com/Lucasuuu02/LLM4Brain

## Abstract
Understanding whether large language models (LLMs) and the human brain converge on similar computational principles remains a fundamental and important question in cognitive neuroscience and AI. Do the brain-like patterns observed in LLMs emerge simply from scaling, or do they reflect deeper alignment with the architecture of human language process- ing? This study focuses on the sentence-level neural mecha- nisms of language models, systematically investigating how layer-wise representations in LLMs align with the dynamic neural responses during human sentence comprehension. By comparing hierarchical embeddings from 14 publicly avail- able LLMs with fMRI data collected from participants, who were exposed to a naturalistic narrative story, we constructed sentence-level neural prediction models to identify the model layers most significantly correlated with brain region activa- tions. Results show that improvements in model performance drive the evolution of representational architectures toward brain-like hierarchies, particularly achieving stronger func- tional and anatomical correspondence at higher semantic ab- straction levels. These findings advance our understanding of the computational parallels between LLMs and the human brain, highlighting the potential of LLMs as models for hu- man language processing. Code — https://github.com/Lucasuuu02/LLM4Brain

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文聚焦于 LLM 层级表征与 fMRI 脑响应的对齐，直接关联到你关注的 brain decoding、fMRI representation、representation alignment 等方向。
- **启发与意义**：它提供了一种系统比较不同模型、不同层级的脑编码框架，可启发你将脑解码中的多视图约束或神经先验引入模型评估。
- **可借鉴点**：可借鉴其句子级 GLM 回归、ROI 选择策略以及岭回归编码模型，用于你自己的脑解码实验设计。
- **阅读建议**：阅读时重点关注中间层效应与指令微调的影响，这两点对设计神经先验约束有参考价值；同时留意其未探索更大模型的局限，为后续工作留下空间。

## 1. 核心问题与整体含义
- 大语言模型（LLMs）与人类大脑在语言处理上是否收敛于相似的计算原理？已观察到的脑相似性是否仅源于模型规模增大，还是反映了更深层的架构对齐？
- 本研究聚焦**句子级别的神经机制**，通过对比 14 个公开 LLM 的逐层嵌入与聆听自然叙事时采集的 fMRI 数据，探究 LLM 表征在多大程度上复现人脑句子理解过程中的动态响应。
- 整体目标：识别与脑区激活最相关的模型层级，揭示模型性能提升是否驱动表征向**类脑层级结构**演化。

## 2. 方法论
- **核心思想**：建立句子级神经编码模型，将 LLM 各层的句子嵌入与基于 GLM 估计的 fMRI 体素响应进行线性映射（岭回归），通过逐层相关性评估对齐程度。
- **关键流程**：
  1. **fMRI 预处理与 GLM 建模**：对 34 名被试的聆听《小王子》音频数据进行去噪、空间标准化，使用最小二乘分离（LS‑S）方法逐个句子构建设计矩阵，卷积 HRF，得到句子级 BOLD 响应 $\hat{\beta}$。
  2. **ROI 提取**：采用 Fedorenko 等人验证的语言网络（左右半球的 IFG、IFGorb、MFG、AntTemp、PostTemp、AngG），提取区域平均时间序列或体素级响应。
  3. **LLM 层级句子嵌入**：将英文译本《小王子》的句子输入 14 个模型（BERT 到 Llama‑3.1‑8B‑Instruct 等），提取每层所有 token 的终端隐藏状态，按句子平均得到维度固定的嵌入矩阵 $X$。
  4. **编码模型与相关性**：对每个 ROI 的 fMRI 响应 $y$ 和某层嵌入 $X^{(l)}$，采用岭回归 $ \hat{\beta}^{(l,k)} = (X_{\text{train}}^{(l,k)\top} X_{\text{train}}^{(l,k)} + \alpha I)^{-1} X_{\text{train}}^{(l,k)\top} y_{\text{train}} $，用内部交叉验证选择 $\alpha$，计算测试集上的 Pearson 相关系数 $\rho_l = \frac{1}{K}\sum_{k=1}^K \text{corr}(y_{\text{test}}^{(k)}, X_{\text{test}}^{(l,k)}\hat{\beta}^{(l,k)})$。
  5. **模型性能指标**：设计跨语言语义对齐准确率 CSAA，通过构造五个干扰选项（词序打乱、词性替换、句式变换、信息增删），测试模型能否将中文原句的正确英文翻译选为语义最相似项。

## 3. 实验设计
- **数据集**：Li et al. (2022) 的《小王子》多语种自然刺激 fMRI 语料库，34 名中文母语被试（15 名女性），9 个约 10 分钟的音频段落，共 1577 句中文句子，对齐有对应英文翻译。
- **模型对比**：14 个 LLM，包括 BERT‑base‑uncased、OPT‑6.7B、Mistral‑7B、Llama‑3.1‑8B、Qwen2.5‑7B、Gemma2‑9B、Baichuan2‑7B、DeepSeek‑R1‑Distill‑Qwen‑7B 等及其指令微调版本。
- **评估基准**：以 12 个 ROI 的脑‑模型相关性作为主要对齐指标，同时用 CSAA 评估语义理解能力，并对比基础模型与指令微调版本。

## 4. 资源与算力
- 论文未明确说明使用的 GPU 型号、数量或训练时长。仅提到分析时“并行化计算……训练 $O(SRL)$ 个模型”（$S$ 为被试数，$R$ 为 ROI 数，$L$ 为层数）。由于编码模型训练仅涉及单个 ROI 的岭回归，其计算量相对较小，作者未给出具体硬件配置。

## 5. 实验数量与充分性
- **实验组数**：
  - 14 个模型的层‑ROI 相关性分析（每模型最少 12 层，最多 40 层，12 个 ROI × 34 被试）；
  - 基础 vs 指令微调模型在神经对齐和 CSAA 上的配对比较；
  - 左右半球不对称性分析（6 对 ROI 的 t 检验）；
  - 模型 CSAA 性能与平均脑相关性之间的线性关系分析。
- **充分性**：实验覆盖了主流的 transformer 架构、不同的参数规模（6.7B–9B）和训练策略，能在给定数据集上较全面地揭示趋势。但局限于单一语料（《小王子》）、单一语言任务（英‑中跨语言），且对多重比较的校正（区域‑层数众多）未做严格 FWE 或 FDR 控制，解释时需谨慎。

## 6. 主要结论与发现
- **中间层高峰**：所有测试的 LLM 均在中间层与脑活动相关性最高，而非最后一层，表明中间层携带的上下文信息最接近人脑句子级处理。
- **指令微调提升对齐**：指令微调模型不仅在 CSAA 语义任务上性能显著提高（$p = 0.03125$），其与脑激活的相关性也呈现一致上升趋势，且模型理解能力与脑对齐呈正相关（$r = 0.601, p = 0.030$）。
- **半球不对称性**：左侧 IFG 和 PostTemp 与 LLM 表征的关联更强（核心语言功能），右侧 MFG 和 AntTemp 更显著（可能关联认知控制与多模态语义），且左侧优势与模型性能呈正相关趋势。

## 7. 优点
- **系统性比较**：首次在同一自然刺激范式下比较 14 个模型的逐层表征，涵盖基础与指令微调版本。
- **句子级分析**：采用 LS‑S 方法精确获得句子级 BOLD 估计，避免传统条件平均方法的信息丢失，更贴合叙事理解特性。
- **跨模态指标**：提出 CSAA 作为语义理解能力的代理，直接与神经对齐关联，为模型评估增加新维度。
- **解剖与功能对应**：独立 ROI 分析揭示了左右半球功能特化与模型性能的关系，增强了神经可解释性。

## 8. 不足与局限
- **受限于单一语料与语言**：仅使用一部文学作品的中文聆听数据，可能无法泛化到其他文体或语言；
- **模型规模范围窄**：仅考察 6.7B–9B 区间模型，未涉及更大模型（>70B）或更小的模型，可能错失规模效应的转折点；
- **未探索时间动态**：仅计算静态的句子嵌入与 BOLD 响应的相关性，未利用 fMRI 的时序信息进行更细粒度的解码；
- **统计严格性**：大量层‑区域比较缺少多重比较校正，部分 p 值（如 $p = 0.055$）适合作为趋势但不宜过度解读；
- **编码模型简化**：采用线性岭回归假设线性映射，现实中的神经编码可能更复杂；且未控制词频、句长等低维混杂因素。

（完）
