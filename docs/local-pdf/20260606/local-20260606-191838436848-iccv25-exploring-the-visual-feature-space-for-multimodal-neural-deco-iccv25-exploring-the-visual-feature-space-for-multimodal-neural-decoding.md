---
title: ICCV25 Exploring The Visual Feature Space for Multimodal Neural Decoding
title_zh: ICCV25 探索视觉特征空间用于多模态神经解码
authors: Weihao Xia; Cengiz Oztireli
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-191838436848-iccv25-exploring-the-visual-feature-space-for-multimodal-neural-deco.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 7.0 订阅评分
score_label: 订阅评分
evidence: 利用MLLM特征空间将脑模态与视觉文本数据对齐
tldr: 当前多模态脑信号解码多限于粗略描述，缺乏对象、位置、属性等细节，导致重建不精确。本文分析多模态大模型中预训练视觉组件的不同特征空间，提出一种零样本多模态脑解码方法，实现多粒度解码，并设计多粒度脑细节理解基准MG-BrainDub，包含详细描述和显著问答任务，以细粒度指标评估解码能力，提升了神经解码精度和准确性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-191838436848-iccv25-exploring-the-visual-feature-space-for-multimodal-neural-deco/page-preview-001.webp\", \"caption\": \"Page 1 preview generated from uploaded PDF.\", \"page\": 1, \"index\": 1, \"width\": 720, \"height\": 932}, {\"url\": \"assets/figures/local-pdf/local-20260606-191838436848-iccv25-exploring-the-visual-feature-space-for-multimodal-neural-deco/page-preview-002.webp\", \"caption\": \"Page 2 preview generated from uploaded PDF.\", \"page\": 2, \"index\": 2, \"width\": 720, \"height\": 932}, {\"url\": \"assets/figures/local-pdf/local-20260606-191838436848-iccv25-exploring-the-visual-feature-space-for-multimodal-neural-deco/page-preview-003.webp\", \"caption\": \"Page 3 preview generated from uploaded PDF.\", \"page\": 3, \"index\": 3, \"width\": 720, \"height\": 932}]"
motivation: 现有脑信号解码方法缺乏细粒度视觉细节，导致重建不精确，需要探索更精细的视觉特征空间以提升解码能力。
method: 利用多模态大语言模型中的预训练视觉组件，提出零样本多模态脑解码方法，并构建多粒度脑细节理解基准MG-BrainDub，以详细描述和问答任务评估解码性能。
result: 方法在多粒度解码上取得更高精度，显著增强了神经解码的细节还原能力。
conclusion: 通过探索最佳视觉特征空间和引入多粒度基准，本研究实现了更精准的脑信号解码，可应用于高级神经解码场景。
---

## 摘要
大脑信号的复杂性推动了利用多模态人工智能将大脑模态与视觉和文本数据对齐以进行可解释描述的研究。然而，大多数现有研究仅限于粗略解释，缺乏对象描述、位置、属性及其关系的基本细节，导致使用这些线索进行视觉解码时重建不精确且模糊。为了解决这一问题，我们分析了多模态大语言模型（MLLMs）中预训练视觉组件的不同视觉特征空间选择，并引入了一种零样本多模态大脑解码方法，该方法与这些模型交互，以在多个粒度级别上进行解码。为了评估模型从大脑信号中解码精细细节的能力，我们提出了多粒度大脑细节理解基准（MG-BrainDub）。该基准包括两个关键任务：详细描述和显著问答，其评估指标突出对象、属性和关系等关键视觉元素。我们的方法提高了神经解码的精度，并支持更准确的神经解码应用。代码可在https://github.com/weihaox/VINDEX获取。

## Abstract
The intrication of brain signals drives research that lever- ages multimodal AI to align brain modalities with visual and textual data for explainable descriptions. However, most existing studies are limited to coarse interpretations, lacking essential details on object descriptions, locations, attributes, and their relationships. This leads to imprecise and am- biguous reconstructions when using such cues for visual decoding. To address this, we analyze different choices of vision feature spaces from pre-trained visual components within Multimodal Large Language Models (MLLMs) and in- troduce a zero-shot multimodal brain decoding method that interacts with these models to decode across multiple levels of granularities. To assess a model’s ability to decode fine details from brain signals, we propose the Multi-Granularity Brain Detail Understanding Benchmark (MG-BrainDub). This benchmark includes two key tasks: detailed descriptions and salient question-answering, with metrics highlighting key visual elements like objects, attributes, and relationships. Our approach enhances neural decoding precision and sup- ports more accurate neuro-decoding applications. Code is available at https://github.com/weihaox/VINDEX.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文直接对应大脑解码、fMRI表征、表征对齐、神经先验等研究方向，探索如何在MLLM的特征空间中对齐大脑信号以实现多粒度零样本解码。
- **启发与意义**：揭示不同视觉特征空间对脑解码粒度的影响，证明稀疏的嵌套特征比稠密聚合特征更适配大脑信号，为神经先验的选择提供了实证指导。
- **可借鉴点**：嵌套视觉token（如9-token下采样）和去噪对齐损失可迁移至其他脑解码模型，MG BrainDub基准可作为细粒度评估的起点。
- **阅读建议**：重点阅读第3节的特征空间设计与第4节的基准构造，结合自身研究评估不同对齐策略和细粒度指标。

## 1. 论文的核心问题与整体含义
当前从大脑信号进行视觉解码的工作大多停留在概括性描述，缺乏对象的位置、属性、关系等精细信息，导致重建和解释不精确。本文要解决的核心问题是：**如何从fMRI中高效解码多粒度的视觉细节，而无需额外标注**。为此，作者提出VINDEX框架，系统探究了多模态大模型内部不同视觉特征空间的选择，并设计了一种零样本多模态脑解码方法，同时引入多粒度脑细节理解基准MG‑BrainDub以可靠评价模型的细粒度解码能力。

## 2. 方法论
### 2.1 核心思想
利用MLLM（如LLaVA系列）的预训练视觉组件（CLIP、DINOv2、SigLIP等）作为目标特征空间，训练一个脑编码器 $B$，使 $B(s) \approx V(v)$（$s$：fMRI信号，$v$：对应图像）。对齐后的脑特征直接输入MLLM的剩余部分（连接器+LLM），实现零样本的多模态解码。模型无需文本标注、空间标注即可执行详细描述、显著问答、概念定位等任务。

### 2.2 特征空间探索
在脑编码器训练中，选取不同的视觉特征作为对齐目标，共考虑四种空间：
- **单编码器（SE）**：仅用CLIP特征。
- **混合编码器（ME）**：融合CLIP（语义）和DINOv2（空间）特征，通过交错混合token增强空间与语义信息。
- **聚合特征（AF）**：提取SigLIP多层特征，沿通道拼接，形成多层级视觉表征。
- **嵌套特征（NF）**：对CLIP的16×16 patch token进行逐级2×2池化，生成{144, 36, 9, 1}个token的多尺度视觉嵌套表示（类似俄罗斯套娃），从粗到细捕捉不同粒度信息。

### 2.3 去噪对齐策略
传统的回归对齐（MSE损失）容易过拟合且对噪声敏感。为增强对齐的鲁棒性和泛化性，提出去噪优化目标：
$$L_R = \mathbb{E}_{\mathbf{b}\sim \mathbf{B}, \mathbf{v}\sim \mathbf{V}}[\| \mathcal{V}(v) - \mathcal{B}(s) \|_2^2]$$
$$L_D = \mathbb{E}_{\varepsilon, t} \left\| \mathcal{J}_\pi \left( \mathbf{v}_t; \mathbf{b}, t \right) - \varepsilon \right\|^2$$
其中 $\mathbf{v}_t$ 是加噪后的图像特征，$\mathbf{b}$ 是脑预测特征，$\mathcal{J}_\pi$ 为可学习的降噪器（MLP），预测注入的噪声 $\varepsilon$。最终损失为 $L_R + \beta L_D$。在推理时，脑编码器预测干净特征，直接输入MLLM完成后续指令跟随任务。

## 3. 实验设计
### 3.1 数据集与预处理
使用NSD（Natural Scenes Dataset）的fMRI数据，4名被试（sub01、02、05、07）。训练样本24,980例，共享测试样本982例（每张图片重复3次取平均）。对齐目标为对应视觉刺激的特征，无额外文本或位置标注。

### 3.2 基准与评测
- **概念定位（Brain Grounding）**：给定<表达式>预测边界框，评估 acc@0.5 和 IoU。与视觉接地Shikra、基于重建图像的BrainDiffuser、MindEye、DREAM、UMBRAE等比较。
- **简明描述（Concise Captioning）**：使用COCO测试集，指标：BLEU、METEOR、ROUGE、CIDEr、SPICE、CLIP Score、RefCLIP Score。对比SDRecon、OneLLM、BrainCap、NeuroVLA、MindEye2、MEVOX、UMBRAE等。
- **详细描述（Descriptive Captioning）**：在本文构建的MG‑BrainDub上评估，指标包括常规指标及作者新提出的对象、属性、关系的Precision/Recall/F1，以及CAPTURE长文本指标。对比NeuroVLA和自身特征空间消融。
- **复杂推理（Salient QA）**：对显著对象构建多项选择题，评估准确率。考察逻辑推理能力。

### 3.3 对比方法
包括有监督方法（使用COCO标注或MLLM伪标注）如OneLLM、BrainCap、NeuroVLA，以及零样本方法如UMBRAE、MEVOX，并包括基于重建图像的间接解码方法。VINDEX有无后缀“-S”区分多被试训练与单被试训练设置。

## 4. 资源与算力
单块A100 GPU。训练CLIP‑224和DINO‑224（batch 128）约8小时；CLIP‑336（batch 64）约23小时；SigLIP‑384（batch 4）约40小时。优化器AdamW，采用one‑cycle学习率调度。去噪器的额外训练时间可以忽略。脑编码器训练成本低于大部分多模态脑解码方法，且跨模型可复用。

## 5. 实验数量与充分性
论文进行了大量实验：
- 4种特征空间的全面对比，包括不同MLLM（7B/13B、版本1.5/1.6）的泛化。
- 概念定位、简明描述、详细描述、复杂推理四个任务，每个任务均与多个基线比较。
- 消融研究：降噪器深度、宽度、权重的不同配置。
- 嵌套特征的token数量（1,9,36,144）的详细分析。
- 所有实验在四名被试上重复，汇报平均值。  
实验设计客观、对比公平，且充分展示了不同特征选择的粒度和成本间权衡。但被试仅为4名，数据集单一（仅NSD），泛化到其他fMRI数据集或真实场景仍需验证。

## 6. 主要结论与发现
- **嵌套特征（NF9）：** 使用9个视觉token作为对齐目标，在详细描述和显著问答任务上达到最佳，优于传统单编码器、混合编码器及稠密聚合特征。过多的视觉token反而因大脑信号的信息有限而引入幻觉，验证了“脑信号仅编码基本视觉元素”的假设。
- **去噪对齐：** 引入去噪损失可在不额外增加训练开销下提升性能、稳定训练，轻微降低过拟合风险。
- **零样本优势：** VINDEX在简明描述、概念定位等任务中超过使用额外文本标注或跨被试训练的方法（如MindEye2），展现出了更强的泛化性和语义保留能力。
- **直接脑解码优于重建：** 概念定位结果证明，直接从脑信号解码空间信息比先重建图像再接地更准确，提示未来重建模型应融合空间定位线索。
- **传统评估指标失效：** 对于详细描述，传统n‑gram指标和CLIP‑Score均不稳定或不可靠，需要像MG‑BrainDub这样关注视觉元素结构的度量。

## 7. 优点
- **系统性的特征空间探索：**首次在脑解码中对比四种视觉特征选择，并提供清晰的粒度-精度-成本分析。
- **零样本多粒度解码：** 无需文本或位置标注，模型即能输出详细描述、回答推理问题，极大降低了数据需求。
- **去噪对齐机制：** 将扩散模型的去噪训练引入到脑-特征对齐，改善了回归的确定性映射的过拟合问题。
- **新基准设计：** MG‑BrainDub通过提取对象、属性、关系进行结构化匹配，填补了细粒度脑解码评估的空白。
- **模型无关性：** 训练好的脑编码器可即插即用于多个MLLM（LLaVA‑1.5/1.6，不同大小），便于社区扩展。

## 8. 不足与局限
- **被试数量与数据局限：** 仅在NSD的4名被试上验证，没有在其他fMRI数据集（如BOLD5000）或不同磁场强度下测试跨数据集的泛化能力。
- **特征空间覆盖有限：** 每种类型仅选择了个别编码器组合（如ME仅用CLIP+DINO），未探索其他专家组合或更复杂的融合方式。
- **嵌套token数量为经验选择：** 最优9 token可能依赖于任务和图像分辨率，缺少理论分析，且未与动态token缩减方法对比。
- **评估自动化的潜在偏差：** MG‑BrainDub依赖T5‑based解析器抽取三元组及词匹配，可能不完美，且未进行人工评分相关性分析。
- **推理任务简单：** 显著QA虽涉及逻辑，但形式为选择题，未测试长篇多轮对话或开放生成的真实应用。

## 9. 研究价值与阅读建议
本章见开头第一节，不重复。

（完）
