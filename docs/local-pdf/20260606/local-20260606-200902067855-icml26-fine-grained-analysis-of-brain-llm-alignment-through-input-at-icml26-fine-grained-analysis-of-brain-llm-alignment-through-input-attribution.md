---
title: ICML26 Fine-grained Analysis of Brain-LLM Alignment through Input Attribution
title_zh: ICML26：通过输入归因进行大脑-LLM对齐的细粒度分析
authors: Michela Proietti; Roberto Capobianco; Mariya Toneva
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-200902067855-icml26-fine-grained-analysis-of-brain-llm-alignment-through-input-at.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 4.0 订阅评分
score_label: 订阅评分
evidence: 通过输入归因进行脑-LLM对齐的细粒度分析
tldr: 本研究针对大语言模型（LLM）与大脑活动对齐的计算原理，引入精粒度输入归因方法，识别影响对齐的关键词，以探讨大脑对齐（BA）与下一词预测（NWP）的关系争议。发现NWP依赖近因与首因及句法信息，BA侧重语义和话语级信息且具针对性近因效应，揭示了两者特征依赖差异，方法可推广至其他认知任务分析。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-200902067855-icml26-fine-grained-analysis-of-brain-llm-alignment-through-input-at/fig-001.webp\", \"caption\": \"\", \"page\": 3, \"index\": 1, \"width\": 2048, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-200902067855-icml26-fine-grained-analysis-of-brain-llm-alignment-through-input-at/fig-002.webp\", \"caption\": \"\", \"page\": 16, \"index\": 2, \"width\": 912, \"height\": 340}, {\"url\": \"assets/figures/local-pdf/local-20260606-200902067855-icml26-fine-grained-analysis-of-brain-llm-alignment-through-input-at/fig-003.webp\", \"caption\": \"\", \"page\": 16, \"index\": 3, \"width\": 1544, \"height\": 340}, {\"url\": \"assets/figures/local-pdf/local-20260606-200902067855-icml26-fine-grained-analysis-of-brain-llm-alignment-through-input-at/fig-004.webp\", \"caption\": \"\", \"page\": 16, \"index\": 4, \"width\": 935, \"height\": 681}, {\"url\": \"assets/figures/local-pdf/local-20260606-200902067855-icml26-fine-grained-analysis-of-brain-llm-alignment-through-input-at/fig-005.webp\", \"caption\": \"\", \"page\": 16, \"index\": 5, \"width\": 1136, \"height\": 492}, {\"url\": \"assets/figures/local-pdf/local-20260606-200902067855-icml26-fine-grained-analysis-of-brain-llm-alignment-through-input-at/fig-006.webp\", \"caption\": \"\", \"page\": 16, \"index\": 6, \"width\": 1088, \"height\": 340}, {\"url\": \"assets/figures/local-pdf/local-20260606-200902067855-icml26-fine-grained-analysis-of-brain-llm-alignment-through-input-at/fig-007.webp\", \"caption\": \"\", \"page\": 16, \"index\": 7, \"width\": 912, \"height\": 184}, {\"url\": \"assets/figures/local-pdf/local-20260606-200902067855-icml26-fine-grained-analysis-of-brain-llm-alignment-through-input-at/fig-008.webp\", \"caption\": \"\", \"page\": 16, \"index\": 8, \"width\": 992, \"height\": 184}, {\"url\": \"assets/figures/local-pdf/local-20260606-200902067855-icml26-fine-grained-analysis-of-brain-llm-alignment-through-input-at/fig-009.webp\", \"caption\": \"\", \"page\": 16, \"index\": 9, \"width\": 1912, \"height\": 184}]"
motivation: 探究LLM与大脑对齐的争议点，即大脑对齐和下一词预测两种任务的关系是否一致。
method: 提出精粒度输入归因方法，逐词量化其对脑-LLM对齐的重要性。
result: 大脑对齐与下一词预测依赖截然不同的词子集：后者偏向近因/首因和句法，前者侧重语义和话语信息。
conclusion: 该方法揭示了脑对齐与预测的特征差异，深化了对LLM与人类语言处理关系的理解，且具有广泛适用性。
---

## 摘要
理解大型语言模型（LLMs）与人类大脑活动之间的对齐可以揭示语言处理背后的计算原理。我们引入了一种细粒度的输入归因方法，以识别对大脑-LLM对齐最重要的特定词语，并利用它来研究一个有关大脑-LLM对齐的争议性研究问题：大脑对齐（BA）与下一词预测（NWP）之间的关系。我们的发现表明，BA和NWP依赖于很大程度上不同的词语子集：NWP表现出近因和首因偏差，并侧重于句法，而BA优先考虑语义和话语层面的信息，并具有更有针对性的近因效应。这项工作推进了我们对LLMs与人类语言处理关系的理解，并突显了BA和NWP在特征依赖方面的差异。除本研究之外，我们的归因方法可广泛应用于探索多样化语言处理任务中模型预测的认知相关性。

## Abstract
Understanding the alignment between large language models (LLMs) and human brain activity can reveal computational principles underlying language process- ing. We introduce a fine-grained input attribution method to identify the specific words most important for brain-LLM alignment, and leverage it to study a con- tentious research question about brain-LLM alignment: the relationship between brain alignment (BA) and next-word prediction (NWP). Our findings reveal that BA and NWP rely on largely distinct word subsets: NWP exhibits recency and pri- macy biases with a focus on syntax, while BA prioritizes semantic and discourse- level information with a more targeted recency effect. This work advances our understanding of how LLMs relate to human language processing and highlights differences in feature reliance between BA and NWP. Beyond this study, our attri- bution method can be broadly applied to explore the cognitive relevance of model predictions in diverse language processing tasks.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

- **关联方向**：论文直接处理“大脑编码”（brain encoding）中的表示对齐问题，且提出的输入归因方法可用于脑激活解码、fMRI表示分析和多模态约束，与研究方向高度重叠。
- **启发与意义**：揭示了下一词预测与大脑对齐在词级信息依赖上的显著差异，提示仅用预测目标优化的LLM表征无法完全捕获脑信号中重要的语义/话语特征，为设计更贴合大脑的神经先验（neural prior）提供量化依据。
- **可借鉴点**：可借鉴其端到端归因框架，将词级重要性估计移植到其他模态（如语音、视觉）或更复杂的认知任务中，也可结合脑解码模型进行多视角约束归因，分析模型与大脑在细粒度特征上的对齐程度。
- **阅读建议**：重点阅读归因框架实现（第3节）和BA与NWP在词类、位置偏差上的发现（第4节），并思考如何将该分析方法用于读者自身的fMRI表示对齐或脑解码模型解释。

## 1. 论文的核心问题与整体含义

当前研究发现，大型语言模型（LLM）的表征与人类在相同语言输入下的大脑活动显著对齐，但对齐的内在原因仍存争议。具体争议点在于：大脑对齐（Brain Alignment, BA）究竟在多大程度上由下一词预测（Next-Word Prediction, NWP）这一训练目标驱动？先前工作有的显示两者强相关，有的指出BA还依赖句法、语义等额外因素。本文旨在通过词汇级别的输入归因，精细地解剖BA与NWP依赖的语境信息差异，从而揭示LLM与大脑语言处理的对齐本质。整体而言，论文质疑“NWP足以解释BA”的观点，强调BA依赖更高层的语义与话语信息，并提出一个可广泛用于分析认知相关性的归因工具。

## 2. 论文提出的方法论

### 2.1 核心思想
构建一个端到端的梯度归因框架，同时计算BA和NWP任务中每个输入词的重要性，并加以对比。

### 2.2 脑对齐归因
- 使用LLM对每个词构建固定长度上下文（640词），提取层嵌入，按TR聚合并考虑血液动力学延迟（拼接4个TR），得到脑编码模型的输入 $X_m^l \in \mathbb{R}^{K \times 4H}$。
- 用脊回归线性模型 $f: X_m^l \to y_j^i$ 预测体素活动，训练完成后将权重矩阵分解为每TR的线性投影层 $g$。
- 对每个TR，取其对应上下文经LLM得到词级平均嵌入，通过 $g$ 得到预测体素活性，计算均方误差（MSE）作为损失，通过梯度 $\times$ 输入（GXI）或积分梯度（IG）计算每个token的重要性，再汇聚为词级归因分数。

### 2.3 下一词预测归因
- 为公平对比，对每个TR构造扩展上下文（包含4个TR的所有词），使用教师强制方式预测下一个词。
- 对多token词，取平均交叉熵损失作为归因目标，同样计算token级归因并聚合成词级分数。

### 2.4 评估指标
- **Intersection over Union (IoU)**：按归因分数累计阈值 $t\%$ 选取最重要词集，计算BA与NWP集合的交并比。
- **Center of Mass (CoM)**：以距离最近词的位置为索引，计算归因加权位置中心，衡量近因/首因偏向。

## 3. 实验设计

### 3.1 数据集
- **主要数据集**：Harry Potter（HP）fMRI数据集，8名被试阅读同一章节，含5176词，TR=2s。
- **泛化数据集**：Moth Radio Hour（MRH），9名被试阅读10个自传体故事。
- HP额外提供词级语言学标注（语义、句法、话语特征），用于特征分析。

### 3.2 模型与对比
- 5个1–2B参数的开源LLM：3个Transformer（Falcon3-1B, Gemma-2B, Llama3.2-1B）、1个状态空间模型（Mamba-1.4B）、1个混合架构（Zamba2-1.2B）。
- 对每个模型，选取早期、中期、晚期三层中BA最高的层进行归因分析。
- 对比BA和NWP的归因结果，以及不同模型架构之间的差异。

### 3.3 归因方法
- 主要使用Gradient × Input，并使用Integrated Gradients对代表性模型进行稳健性验证。

## 4. 资源与算力
论文在附录J中明确给出了资源细节：
- 所有实验在单块 NVIDIA H100 80GB GPU 上运行。
- 具体耗时：LLM表征提取约2小时（5模型×2数据集），大脑编码训练约219小时，GXI归因约1501小时，IG归因约329小时，NWP归因约3.6小时。花费巨大，但作者解释仅针对1–2B模型并在单卡上执行以兼顾可行性与代表性。未使用多卡并行。

## 5. 实验数量与充分性

### 5.1 主要实验
- 对 HP 和 MRH 两个数据集都进行了IoU、归因分布、CoM对比。
- 在 HP 上分析了词类特征（语义/句法/话语）的归因偏好。
- 对归因方法进行消融：使用IG重复部分实验，验证一致性。
- 对上下文长度做消融（640词 vs. 80词），观察归因模式稳健性。
- 验证Llama3.2-1B的特殊振荡模式在不同模型（Qwen2-1.5B）和不同数据集下是否出现。
- 通过词掩码实验证实归因词的因果重要性。

### 5.2 评估客观性与公平性
- BA和NWP使用相同上下文构造和归因流程，确保可比。
- 对比多个架构，避免仅对Transformer的偏见。
- 统计检验（配对t检验加B-H校正）用于差异显著性。
- 局限：只用了1–2B规模模型，未涉及微调模型。

## 6. 论文的主要结论与发现

- BA和NWP依赖的词子集重叠很低（尤其在严格阈值下），说明两者的信息需求显著不同。
- 归因分布模式随层变化：NWP在早期层比BA需要更多独特词，而BA在中晚期层有更大的归因覆盖，显示BA利用了更分布式、语义丰富的表示。
- 特征偏好：NWP重点依赖句法特征；BA同时重视语义和话语特征，且比NWP更多关注这些高层信息。
- 位置偏向：NWP在所有架构下均表现强烈的近因和首因双峰分布；BA呈现更宽且更集中的近因效应，首因偏向较弱。
- 不同模型架构（Transformer、SSM、混合）在BA上表现相似；Llama3.2-1B存在振荡式归因模式，但此模式是刺激和上下文依赖的，非架构固有。

## 7. 优点

- **方法创新**：首个针对脑对齐的端到端输入归因框架，实现词汇级精细解释。
- **公平对比**：BA和NWP统一归因流程，确保差异源于任务本身。
- **多维度分析**：从集合重叠、归因分布、位置偏差、语言学特征四方面系统对比。
- **多架构验证**：涵盖Transformer、SSM及混合模型，结论普适性强。
- **可推广性**：方法不仅限于当前争议问题，可拓展到其他认知任务。

## 8. 不足与局限

- **梯度归因的局限**：方法可能受到局部非线性和模型光滑度影响，虽通过多方法多模型验证，但未与扰动法比较。
- **话语标注粗糙**：HP数据集的话语特征分类较粗，只能提供初步功能差异洞察。
- **模型规模与训练状态固定**：仅分析冻结的1–2B预训练模型，未探讨更大模型、指令微调或专门为BA优化的模型。
- **因果性验证简单**：虽做掩码实验展示重要性，但未深入分析去除词后归因模式的动态变化。
- **分析限于语言脑区？不明确**，尽管使用了语言ROI，但未深入不同脑区偏好。

（完）
