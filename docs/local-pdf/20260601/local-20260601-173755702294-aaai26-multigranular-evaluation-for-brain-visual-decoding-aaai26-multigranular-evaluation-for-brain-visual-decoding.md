---
title: AAAI26 Multigranular Evaluation for Brain Visual Decoding
title_zh: AAAI26 脑视觉解码的多粒度评估
authors: "Weihao Xia, Cengiz Oztireli"
date: 2026-06-01
pdf: assets/local_pdfs/local-20260601-173755702294-aaai26-multigranular-evaluation-for-brain-visual-decoding.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 6.0 订阅评分
score_label: 订阅评分
evidence: 提供大脑视觉解码的多粒度评估框架
tldr: 现有脑视觉解码评估依赖粗糙指标，忽略模型差异且缺乏神经科学基础，难以捕捉细粒度视觉区别。为此，提出BASIC多粒度评估框架，联合量化结构保真度、推理对齐和上下文连贯性，通过分层分割指标和多模态大模型提取场景语义，提供更判别、可解释且全面的评估基础。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260601-173755702294-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-003.webp\", \"caption\": \"Figure 1: BASIC evaluates decoded reconstructions along two axes: high-level semantic (BASIC-H) and low-level structural (BASIC-L) similarities. For the semantic axis (inferential and contextual), we extract and compare structured representations from reconstructed and ground-truth images. For the structural axis, we compute mask-based matching across fine-grained segmentation types of identified scenes and objects: salient, semantic, instance, and parts.\", \"page\": 3, \"index\": 3, \"width\": 1050, \"height\": 373}, {\"url\": \"assets/figures/local-pdf/local-20260601-173755702294-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-004.webp\", \"caption\": \"Table 2: BASIC-H scores across stimulus-neuroimaging datasets. This metric – along with sub-indicators for Precision (P), Recall (R), and F1, each evaluated over Objects, Attributes, and Relations – provides a quantitative assessment of the high-level semantic correspondence between the reconstructions and the original stimuli. Best and second best are highlighted.\", \"page\": 4, \"index\": 4, \"width\": 1022, \"height\": 746}, {\"url\": \"assets/figures/local-pdf/local-20260601-173755702294-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-005.webp\", \"caption\": \"Table 3: BASIC-L scores across datasets. This metric evaluates low-level structural correspondence between reconstructed and reference images at four granularities: foreground saliency, semantic consistency, instance separation, and part-level delineation.\", \"page\": 5, \"index\": 5, \"width\": 1044, \"height\": 721}, {\"url\": \"assets/figures/local-pdf/local-20260601-173755702294-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-001.webp\", \"caption\": \"Figure 2: BASIC performance.\", \"page\": 6, \"index\": 1, \"width\": 470, \"height\": 365}, {\"url\": \"assets/figures/local-pdf/local-20260601-173755702294-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-002.webp\", \"caption\": \"Figure 3: BASIC demonstrates stable and consistent performance in method evaluation across variations in (a) MLLMs (Liu et al. 2023), (b) prompting strategies, and (c) thresholds for box and text (Ren et al. 2023).\", \"page\": 7, \"index\": 2, \"width\": 1038, \"height\": 229}]"
motivation: 现有评估协议依赖粗糙指标，无法区分模型差异且缺乏神经科学基础。
method: 提出BASIC框架，结合分层分割的结构指标和基于多模态大模型的语义比较。
result: 在多个数据集上基准测试多种解码方法，证明框架更具判别力和解释性。
conclusion: BASIC为脑视觉解码提供了统一、多粒度的评估标准。
---

## 摘要
现有的脑视觉解码评估协议主要依赖粗粒度指标，这些指标掩盖了模型间的差异，缺乏神经科学基础，且无法捕捉细粒度的视觉区别。为解决这些局限，我们提出 BASIC，一个统一的多粒度评估框架，联合量化解码图像与真实图像之间的结构保真度、推理对齐度和上下文连贯性。在结构层面，我们引入了一套基于分割的层次化指标，包括前景、语义、实例和组件掩码，锚定于跨掩码结构的粒度感知对应关系。在语义层面，我们利用多模态大语言模型提取涵盖对象、属性和关系的结构化场景表示，从而能够与真实刺激进行详细、可扩展且上下文丰富的比较。在此统一评估框架内，我们对多个刺激-神经影像数据集上的多种视觉解码方法进行了基准测试。综上，这些标准为评估脑视觉解码方法提供了更具区分度、可解释性和全面性的基础。代码 — https://github.com/weihaox/BASIC

## Abstract
Existing evaluation protocols for brain visual decoding pre- dominantly rely on coarse metrics that obscure inter-model differences, lack neuroscientific foundation, and fail to cap- ture fine-grained visual distinctions. To address these limita- tions, we introduce BASIC, a unified, multigranular evalua- tion framework that jointly quantifies structural fidelity, in- ferential alignment, and contextual coherence between de- coded and ground-truth images. For the structural level, we introduce a hierarchical suite of segmentation-based met- rics, including foreground, semantic, instance, and compo- nent masks, anchored in granularity-aware correspondence across mask structures. For the semantic level, we extract structured scene representations encompassing objects, at- tributes, and relationships using multimodal large language models, enabling detailed, scalable, and context-rich com- parisons with ground-truth stimuli. We benchmark a diverse set of visual decoding methods across multiple stimulus- neuroimaging datasets within this unified evaluation frame- work. Together, these criteria provide a more discriminative, interpretable, and comprehensive foundation for evaluating brain visual decoding methods. Code — https://github.com/weihaox/BASIC

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：brain decoding、representation alignment、fMRI representation、neural prior。
- **启发与意义**：提出多粒度评估框架，弥补当前脑解码评价在区分度、神经科学基础和细粒度语义上的不足。
- **可借鉴点**：结构化语义匹配与层次分割指标可作为解码模型训练的正则项或辅助损失。
- **阅读建议**：重点阅读 BASIC‑H 的场景图构建与匹配流程，以及 BASIC‑L 的分割层次定义，可迁移到其他脑编码/解码任务的评估设计中。

## 1. 论文的核心问题与整体含义
脑视觉解码旨在从神经激活中重建所感知的视觉刺激，但现有评估协议存在三方面缺陷：
- 粗粒度指标（如像素相关、特征相似度）在先进模型间趋于饱和，丧失区分力；
- 缺乏神经科学基础，难以反映解码结果与人类感知的对齐程度；
- 忽视视觉感知的多层级结构化特性（对象语义、场景理解、上下文推理）。

为此，论文提出统一的多粒度评估框架 **BASIC**，联合衡量重建图像与真实刺激间的**结构保真度、推理对齐度与上下文连贯性**，旨在提供更具判别性、可解释性且全面反映解码质量的评估基准。

## 2. 方法论
BASIC 将评估分解为两大互补模块，分别从高层语义和低层结构刻画对齐程度。

### 2.1 评估维度
基于视觉神经科学，定义五个核心维度：场景、对象、属性、关系和相机参数（视角、运动、光照），这些维度被有机融入结构、推理和上下文相似性计算。

### 2.2 BASIC‑H：高层语义相似性
通过多模态大语言模型（MLLM）提取结构化场景图，联合计算**推理相似性**与**上下文相似性**，流程如下：
1. **详细描述生成**：用 MLLM 对重建图和真值图生成富含语义的稠密描述（内容覆盖场景、对象、属性、关系、相机等）。
2. **语义图构建**：用 T5‑based 事实解析器从描述中抽取结构化三元组：对象、属性、关系，并通过句子合并与指代绑定保持关系连贯。
3. **结构化语义匹配**：分三步对齐抽取的元素——精确匹配、同义匹配（如“building”/“edifice”）和基于语义嵌入的余弦相似度匹配。各对象/属性/关系分别计算 **精度 (P)**、**召回 (R)** 和 **F1**，最终 BASIC‑H 分数由三者 F1 的加权和构成（权重 $\alpha_1,\alpha_2,\alpha_3$）。

### 2.3 BASIC‑L：低层结构相似性
基于层次化分割，按四个粒度计算掩码匹配分数：
1. **语义实例分类**：MLLM 输出结构化注解，标明对象的前景/背景角色、语义类别以及部件级分解（如“头”“树干”）。
2. **渐进式粒度分割**：以分类结果作为提示，使用 Grounded‑SAM 等指代理解模型生成多级分割掩码。
3. **层次分数计算**：在**显著性前景 (F)**、**二值前后景 (B)**、**语义 (S)**、**实例 (I)** 和**部件 (P)** 五级上计算交并比 (IoU) 和平均精度 (AP)。BASIC‑L 为 F、S、I、P 四级 IoU 的加权和（权重 $\beta_1,\beta_2,\beta_3,\beta_4$），着重奖励整体布局与对象级一致，适度纳入细粒度细节。

## 3. 实验设计
- **数据集与刺激‑神经影像组合**：
  - NSD (fMRI–自然图像)
  - EEG‑Things (EEG–对象图像)
  - CC2017 (fMRI–视频)
  - SEED‑DV (EEG–视频)
  - fMRI‑Shape (fMRI–3D 形状)
  - EEG‑3D (EEG–3D 形状)
- **基准对比方法**（仅部分列举）：SDRecon, BrainDiffuser, MindEye, DREAM, MindEye2, MindBridge, UMBRAE, NeuroPictor, NeuroVLA, SepBrain, UniBrain, STTM, MindTuner, BrainGuard, ATM, CognitionCapturer, MinD‑Video, NeuroClips, DecoFuse, EEG2Video, MinD‑3D, MinD‑3D++, Neuro‑3D。
- **度量**：BASIC‑H（对象/属性/关系 P/R/F1 及加权总分）和 BASIC‑L（各分割级别的 IoU/AP 及加权总分），并绘制二维散点图展示结构‑语义折衷。
- **设置**：默认 MLLM 为 LLaVA‑1.6‑13B，分割工具 Grounded‑SAM2；视频和 3D 数据统一用图像帧/渲染视角评估，保持流水线一致性。

## 4. 资源与算力
实验在单块 **NVIDIA A100 GPU** 上进行。论文未给出总运行时长，其性质为评估框架而非训练模型，主要计算代价来自 MLLM 推理和分割生成。

## 5. 实验数量与充分性
实验覆盖 6 组神经影像‑刺激数据集、20 余种解码方法，提供了详细的指标分解（表2、表3）和多个分析实验：
- **稳定性测试**：验证不同 MLLM 版本（1.5/1.6 不同规模、GPT‑4o）、3 种提示策略、多组框/文本阈值组合下，方法排序保持稳定（图3）。
- **跨模态诊断**：比较 fMRI 与 EEG 解码、图像与视频/3D 重建的性能差异。

实验设计充分，对比全面，多角度验证了指标的稳定性与通用性，评价客观、公平，避免了因单一 MLLM 或分割工具带来的偏差干扰。

## 6. 主要结论与发现
- BASIC 能有效克服传统指标饱和问题，提供更细粒度的模型区分力。
- 不同解码方法在结构和语义维度上存在显著折衷：如 NeuroPictor 结构最优，NeuroVLA 语义最优，STTM 二者均较优。
- 语义维度中，属性预测难度最高，关系次之，对象识别相对容易；结构维度中，实例和部件级细粒度重建仍是瓶颈。
- fMRI‑图像解码整体优于 EEG 解码；视频和 3D 重建仍在语义和结构保真度上大幅落后，亟需更强的语义/几何先验。
- 框架对 MLLM 选择、提示和阈值设定具有鲁棒性，方法间相对排序稳定。

## 7. 优点
- **多粒度覆盖**：同时评估低层结构（五级分割）和高层语义（对象、属性、关系），贴合视觉感知的层次性。
- **神经科学对齐**：评估维度源自视觉认知理论，增强了指标的可解释性。
- **诊断能力**：提供精确的缺失/幻觉反馈（如“漏检对象”、“属性错误”），便于定位模型弱点。
- **统一性与可扩展性**：同一流水线适用于图像、视频、3D 及不同神经影像模态，可作为标准化基准。
- **开源与可复现**：代码公开，使用开放模型，避免闭源 API 的访问与成本障碍。

## 8. 不足与局限
- **依赖外部模型**：对 MLLM 的描述质量和分割工具的精度敏感，可能在极端领域或细节缺失时引入系统性偏差。
- **视频/3D 简化为帧评估**：忽略时间连贯性和三维几何连续性，可能低估动态解码或立体重建的潜在优势。
- **权重固定**：BASIC‑H 和 BASIC‑L 的加权系数基于经验设定，缺少对具体任务或数据集的适应性调优。
- **语言限制**：当前仅支持英语描述，描述生成和解析的跨语言鲁棒性未验证。
- **未涵盖运动、动态属性**：视频解码中的运动线索在评估维度中的权重不足。

## 9. 研究价值与阅读建议
（已作为第一节输出，此处省略）

（完）
