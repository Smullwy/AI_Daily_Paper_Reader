---
title: AAAI26 Multigranular Evaluation for Brain Visual Decoding
title_zh: AAAI26 脑视觉解码的多粒度评估
authors: "Weihao Xia, Cengiz Oztireli"
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-183904305217-aaai26-multigranular-evaluation-for-brain-visual-decoding.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 3.0 订阅评分
score_label: 订阅评分
evidence: 脑视觉解码评估框架，与视觉脑编码模型间接相关
tldr: 针对大脑视觉解码中现有评估指标粗糙、缺乏神经科学依据的问题，本文提出BASIC多粒度评估框架，从结构保真度、推理对齐和上下文连贯性三个层面量化解码图像与真实图像的差异。结构层引入基于分割的层次化指标，语义层利用多模态大模型提取场景表示，实现对视觉解码方法的更精细、可解释和全面的基准测试。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-183904305217-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-001.webp\", \"caption\": \"\", \"page\": 3, \"index\": 1, \"width\": 425, \"height\": 425}, {\"url\": \"assets/figures/local-pdf/local-20260606-183904305217-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-183904305217-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-003.webp\", \"caption\": \"\", \"page\": 3, \"index\": 3, \"width\": 514, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-183904305217-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-004.webp\", \"caption\": \"\", \"page\": 3, \"index\": 4, \"width\": 514, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-183904305217-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-005.webp\", \"caption\": \"\", \"page\": 3, \"index\": 5, \"width\": 514, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-183904305217-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-006.webp\", \"caption\": \"\", \"page\": 3, \"index\": 6, \"width\": 514, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-183904305217-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-007.webp\", \"caption\": \"\", \"page\": 3, \"index\": 7, \"width\": 514, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-183904305217-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-008.webp\", \"caption\": \"\", \"page\": 3, \"index\": 8, \"width\": 514, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-183904305217-aaai26-multigranular-evaluation-for-brain-visual-decoding/fig-009.webp\", \"caption\": \"\", \"page\": 3, \"index\": 9, \"width\": 502, \"height\": 502}]"
motivation: 现有评估协议依赖粗糙指标，忽略模型间细微差异，且缺乏细粒度视觉区分和神经科学基础。
method: 提出BASIC框架，联合评估结构保真度（层次化分割指标）、推理对齐和上下文连贯性（多模态大模型提取的对象、属性、关系）。
result: 在多个刺激-神经影像数据集上基准测试多种解码方法，证明BASIC能提供更具区分力和解释性的评估。
conclusion: 该框架为大脑视觉解码提供了更全面、多粒度的评估基础，有助于推动领域发展。
---

## 摘要
现有的脑视觉解码评估方案主要依赖粗糙的度量指标，这些指标模糊了模型间的差异，缺乏神经科学基础，且无法捕捉细粒度视觉区别。为了解决这些局限性，我们提出 BASIC，一个统一的多粒度评估框架，该框架联合量化了解码图像与真实图像之间的结构保真度、推理对齐性和上下文连贯性。在结构层面，我们引入了一套基于分割的分层度量指标，包括前景、语义、实例和组件掩码，这些度量以跨掩码结构的粒度感知对应为基础。在语义层面，我们利用多模态大语言模型提取包含物体、属性和关系的结构化场景表示，从而能够与真实刺激进行详细、可扩展且上下文丰富的比较。我们在该统一评估框架下，跨多个刺激-神经影像数据集对多种视觉解码方法进行了基准测试。这些标准共同为评估脑视觉解码方法提供了更具判别力、可解释性和全面性的基础。代码 — https://github.com/weihaox/BASIC

## Abstract
Existing evaluation protocols for brain visual decoding pre- dominantly rely on coarse metrics that obscure inter-model differences, lack neuroscientific foundation, and fail to cap- ture fine-grained visual distinctions. To address these limita- tions, we introduce BASIC, a unified, multigranular evalua- tion framework that jointly quantifies structural fidelity, in- ferential alignment, and contextual coherence between de- coded and ground-truth images. For the structural level, we introduce a hierarchical suite of segmentation-based met- rics, including foreground, semantic, instance, and compo- nent masks, anchored in granularity-aware correspondence across mask structures. For the semantic level, we extract structured scene representations encompassing objects, at- tributes, and relationships using multimodal large language models, enabling detailed, scalable, and context-rich com- parisons with ground-truth stimuli. We benchmark a diverse set of visual decoding methods across multiple stimulus- neuroimaging datasets within this unified evaluation frame- work. Together, these criteria provide a more discriminative, interpretable, and comprehensive foundation for evaluating brain visual decoding methods. Code — https://github.com/weihaox/BASIC

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本论文属于**脑解码客观评估**，与读者的 **fMRI 表征（representation）、脑编码与解码** 的核心目标**弱相关**，但提供了关键的评估范式支持。
- **启发与意义**：本文揭示了现有低级皮尔逊相关系数等指标的饱和问题，为读者开发新型脑编码模型或表征对齐方法（representation alignment）时，必须采用更细粒度（如语义、实例结构）的验证方式提供了理论基础。
- **可借鉴点**：可直接复用 **BASIC-H (语义结构图匹配)** 和 **BASIC-L (多粒度掩码分割)** 框架，来检验读者设计的编码模型是否在多个层级上对齐了大脑表征，而不仅仅依赖于 CLIP/Top-N 等黑盒高分。
- **阅读建议**：重点关注其**多粒度实验设计范式**（特别是结构-语义双轴），而无需陷于脑解码生成模型的细节描述。

## 1. 论文核心问题与研究动机
该论文针对 **脑视觉解码 (Brain Visual Decoding)** 领域长期存在的**评估缺陷**展开研究。现有的评估方案（如图像像素相关 PixCorr、SSIM、CLIP 相似度）主要面临三大瓶颈：
- **指标饱和且区分度弱**：在 SOTA 模型中指标严重饱和，即使解码质量差异明显，传统指标给出的分数也很接近，难以区分模型优劣。
- **缺乏神经科学基础**：低层级指标忽略场景语义，高层级指标（如 CLIP）常作为"黑盒"混淆了真实的解码能力与预训练生成模型带来的"拼凑误差"（如总是搭配出现的长颈鹿和热带草原）。
- **粒度不足**：无法反映视觉感知的结构化层级，未能从物体语义、场景理解及上下文推理等细粒度维度进行解释。

因此，作者提出了核心问题：**如何设计一套既符合人类感知层级结构，又具备诊断性和科学解释性的脑解码评估框架，以克服现有指标的局限性？**

## 2. 方法论：BASIC 框架
论文提出了 **BASIC (Brain-Aligned Structural, Inferential, and Contextual similarity)**，一个统一的多粒度评估框架，从"结构性、推理性和上下文性"三个维度量化重构图像与真实刺激的差距。

核心思想是将评估拆解为两个互补模块：
- **BASIC-H (高层语义)**：评估**推理对齐**和**上下文连贯性**。
- **BASIC-L (低层结构)**：评估**结构保真度**。

### 2.1 关键技术流程：BASIC-H（高层语义匹配）
该流程基于多模态大模型（MLLM），步骤如下：
1. **详细描述生成**：使用 LLaVA 对不同重构方法和 Ground-Truth (GT) 图像生成富含语义的详细文字描述。
2. **语义图构建**：利用 T5 解析器从描述中提取结构化三元组，包含对象（Object）、属性（Attribute）和关系（Relation）。
3. **结构化语义匹配**：分为三步对齐：
   - 精确匹配（Exact Match）
   - 同义词匹配（Synonym Match，如 building 匹配 edifice）
   - 语义匹配（Semantic Match，计算剩余元素的余弦相似度）
最终计算对象、属性、关系的精确率 $P$、召回率 $R$ 和 $F1$ 分数。总体指标 $BASIC-H$ 由各部分 $F1$ 加权求得，默认权重 $\alpha_1 : \alpha_2 : \alpha_3 = 4:4:2$。

### 2.2 关键技术流程：BASIC-L（低层结构匹配）
该流程基于 Grounded-SAM 进行逐步细化的分割对比：
1. **语义实例分类**：提示 MLLM 生成包含前景/背景、语义类别和部件分解的层次标注。
2. **渐进粒度分割与计算**：利用 Grounded SAM 分别在 $F$ (前景显著性)、$S$ (语义类别)、$I$ (实例个体)、$P$ (子对象部件) 四个粒度上提取掩码，计算 IoU 和 平均精度 (AP)。总体 $BASIC-L$ 由各层级 IoU 的加权和表示，默认权重 $\beta_1 : \beta_2 : \beta_3 : \beta_4 = 3 : 2.5 : 2.5 : 2$。

## 3. 实验设计
该实验覆盖了广泛的**模态组合**和**方法集**：
- **数据集**：覆盖了脑解码领域主流的 **6 个刺激-神经影像数据集**。
  - 图像：NSD (fMRI-Image)， EEG-Things (EEG-Image)
  - 视频：CC2017 (fMRI-Video)， SEED-DV (EEG-Video)
  - 3D几何：fMRI-Shape (fMRI-3D)， EEG-3D (EEG-3D)
- **Benchmark 方法**：对比了该领域 **20 种前沿的视觉解码模型**，如 SDRecon、BrainDiffuser、MindEye、DREAM、MindEye2、NeuroPictor、STTM、MinD-3D++、Neuro-3D 等，并对它们的重建结果进行了统一评估。

## 4. 资源与算力
论文在**实现细节**中明确提到：
- **计算硬件**：实验主要基于单张 **NVIDIA A100 GPU** 完成。
- 论文主要关注于"评估已生成的图片"，而非重训模型，因此未列出复杂的模型训练时长。通过利用 LLaVA-1.6-13B 和 Grounded-SAM2 等开源工具，确保了方法的可复现性。

## 5. 实验数量与充分性
实验设计较为充分，具体包括：
- **主实验**：在 6 个数据集上对约 20 种方法生成了完整的 **BASIC-H（对象/属性/关系分表）** 和 **BASIC-L（显著/语义/实例/部件分表）** 评估分数表。
- **消融 / 稳定性实验**：如图 3 所示，作者设计了 4 组对比实验验证指标鲁棒性：
  1. 更换 MLLM 骨干（6种模型，含 7B/13B/34B/GPT-4o）；
  2. 更换提示词策略（3种）；
  3. 检测阈值遍历（9组不同 Text/Box 阈值组合）；
  4. 不同方法在不同设置下的得分趋势验证。
- **公平性**：实验证实了尽管绝对数值随配置小幅波动，但各模型的 **相对排序保持高度一致**，证明了评估框架的客观公平性和稳定性。对视频和 3D 数据均采取了选取代表性帧/视图的统一图像流，避免了多模态工具的偏置。

## 6. 主要结论与发现
1. **更精细的区分度**：BASIC 成功解决了旧指标的“饱和”问题，能够区分在传统低层和高层指标上表现同质化的模型。例如，它发现 NeuroVLA 在语义（高召回率）上更强，而 NeuroPictor 在弱监督的实例/部件结构上最强。
2. **诊断性价值**：BASIC-H 能有效识别“完形填空式”生成导致的幻觉。例如，解码出长颈鹿，预训练模型倾向生成草原背景，而 BASIC 能够分离出背景信息并非直接源于大脑信号这一事实。
3. **跨模态剖析**：fMRI 解码在结构和语义上优于 EEG 解码；视频解码在实例语义上与图像解码相当，但显著物体的结构保真度较差；3D 解码在语义和结构两个维度目前均处于极低水平，揭示了该任务对更优先验模型的迫切需求。

## 7. 优点
- **多粒度融合体系**：首次将结构的细粒度分割（实例/部件级）与大模型的语义关系图谱（属性/交互）紧密结合，实现了全维度解释。
- **神经科学性解释强**：设计的评估维度严格对齐视觉皮层对物体（Object）、属性（Attribute）及空间关系（Relation）的处理机制。
- **开源友好且鲁棒**：通过消融实验证明了指标不受特定 LLM 或超参数噪声的干扰，模型排名一致性好。

## 8. 不足与局限
- **多模态框架依赖**：评估的准确性高度依赖 LLaVA 和 Grounded-SAM 等基础模型的零样本（zero-shot）精度，若基础模型对特定小众刺激识别失败，评估可能引入系统性偏差。
- **静态评估局限**：虽然提出了 3D 和视频的评估方案，但本质上还是停留在“选取单帧/单角度”的图像处理上，并未真正融入时间一致性或 3D 几何保真度的动态评估指标。
- **计算开销与批量**：尽管单卡 A100 可运行，但在大规模脑数据（如数十万帧视频）上进行全部粒度的 LLM 推理和 Grounded-SAM 检索，计算时间成本可能显著高于传统单标量指标。

## 9. 总结建议
该论文是一个优秀的**跨模型评估基石**，它定义了一套模板化的思路，无论未来脑解码框架如何改进，BASIC 所提供的结构图 + 多粒度验证标准都具备长久的参考价值，能帮助研究者诊断模型到底在哪个认知层级上出现了短板。

（完）
