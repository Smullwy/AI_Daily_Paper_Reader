---
title: AAAI26 Large Connectome Model_ An fMRI Foundation Model of Brain Connectomes with Multi-Phenotype Conditioning
title_zh: AAAI26 大型连接组模型：一种多表型条件脑连接组的功能磁共振基础模型
authors: "Ziquan Wei, Tingting Dan, Guorong Wu"
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-183437341951-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 跨被试无标签fMRI数据上学习的连接组表征基础模型
tldr: 当前fMRI基础模型多采用自监督预训练，但未对齐脑与结果间关系，导致下游任务性能不佳。本文提出大规模连接组基础模型，利用环境变量与人口数据，将脑建模转化为多任务学习，设计多表型条件架构，通过标记脑-环境交互进行多任务预训练，并结合半监督微调，在性别预测、行为识别及自闭症、帕金森、阿尔茨海默病、精神分裂症等早期诊断中取得有希望的结果，有望推动神经影像的临床应用。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-183437341951-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 3000, \"height\": 2100}, {\"url\": \"assets/figures/local-pdf/local-20260606-183437341951-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con/fig-002.webp\", \"caption\": \"\", \"page\": 1, \"index\": 2, \"width\": 1703, \"height\": 1237}, {\"url\": \"assets/figures/local-pdf/local-20260606-183437341951-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con/fig-003.webp\", \"caption\": \"\", \"page\": 3, \"index\": 3, \"width\": 1998, \"height\": 2238}, {\"url\": \"assets/figures/local-pdf/local-20260606-183437341951-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 9077, \"height\": 1978}]"
motivation: 现有fMRI基础模型因自监督学习与脑-结果关系不对齐，在下游疾病预测等任务中性能受限。
method: 提出多任务学习框架，利用脑-环境交互标记进行多任务预训练，并采用伪标签半监督微调。
result: 在性别预测、行为识别及多种精神疾病早期诊断中取得有希望的结果。
conclusion: 该模型展示了促进当前神经影像临床应用的巨大潜力。
---

## 摘要
可靠的功能神经影像基础模型对于推动临床应用至关重要，当前人工智能模型的表现因样本量有限而受到显著制约。为此，研究者们通过可扩展的自监督学习，在海量未标注的功能磁共振数据上进行了大规模模型的预训练。由于自监督学习未必与大脑到结果的对应关系保持一致，多数基础模型对于下游任务（如预测疾病结局）并非最优。通过利用丰富的环境变量和人口统计学数据，并结合空前数量的功能神经影像，我们将脑建模构建为多任务学习，并提出了一种可扩展的模型架构，用于（i）通过将多种脑-环境交互（BEI）标记化进行多任务预训练，以及（ii）通过为预训练的BEI分配伪标签进行半监督微调。我们已在多种应用中评估了该基础模型，包括性别预测、人类行为识别以及自闭症、帕金森病、阿尔茨海默病和精神分裂症的疾病早期诊断，其中令人鼓舞的结果表明，该模型具有巨大潜力，可促进当前神经影像在临床常规中的应用。代码 — https://github.com/Chrisa142857/brain network decoder 扩展版本 — https://arxiv.org/abs/2510.18910

## Abstract
A reliable foundation model of functional neuroimages is crit- ical to promote clinical applications where the performance of current AI models is significantly impeded by a limited sam- ple size. To that end, tremendous efforts have been made to pretraining large models on extensive unlabeled fMRI data us- ing scalable self-supervised learning. Since self-supervision is not necessarily aligned with the brain-to-outcome relationship, most foundation models are suboptimal to the downstream task, such as predicting disease outcomes. By capitalizing on rich environmental variables and demographic data along with an unprecedented amount of functional neuroimages, we form the brain modeling as a multitask learning and present a scalable model architecture for (i) multitask pretraining by tokenizing multiple brain-environment interactions (BEI) and (ii) semi-supervised finetuning by assigning pseudo-labels of pretrained BEI. We have evaluated our foundation model on a variety of applications, including sex prediction, human behavior recognition, and disease early diagnosis of Autism, Parkinson’s disease, Alzheimer’s disease, and Schizophrenia, where promising results indicate the great potential to facilitate current neuroimaging applications in clinical routines. Code — https://github.com/Chrisa142857/brain network decoder Extended version — https://arxiv.org/abs/2510.18910

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议  
- **关联方向**：fMRI 表征、脑解码。  
- **启发与意义**：该工作将 fMRI 基础模型从自监督重建转向多任务表型预测，直接对齐脑‑行为关系，为神经影像表征学习提供了新的训练范式。  
- **可借鉴点**：把非成像变量（人口学、认知状态等）标记化为 BEI 令牌，通过解码器交叉注意力与功能连接矩阵交互，可在其它 fMRI 表征或多视图约束任务中复用。  
- **阅读建议**：适合从事 fMRI 表征学习、脑疾病解码或脑‑行为关联建模的研究者精读。

## 1. 论文的核心问题与整体含义  
- **核心问题**：现有 fMRI 基础模型多采用自监督预训练（如 MAE、JEPA），其目标“重建原始信号”与下游任务“脑‑结局关系”并不天然一致，导致预训练表示对疾病预测等临床任务不够最优；此外，这些模型通常以 BOLD 信号直接作为输入，而大量证据表明脑连接组（功能连接，FC）在表型预测中更有优势。  
- **整体含义**：论文提出将脑建模转化为**多任务学习**，利用 fMRI 采集时必然附带的环境变量与人口统计学数据（称为脑‑环境交互，BEI）作为监督信号，构建一个大规模连接组基础模型（Large Connectome Model, LCM），从而促使预训练直接学习与临床和认知相关的表征，并在多个疾病和表型预测中验证其有效性。

## 2. 方法论  
- **输入与模型架构**：
  - 输入为功能连接矩阵 $M \in \mathbb{R}^{N \times N}$，由 AAL 模板分区的 BOLD 信号计算得到。
  - 采用**纯解码器 Transformer** 架构，将多类 BEI（如性别、认知状态、疾病标签等）编码为一组可学习的 BEI 令牌 $V \in \mathbb{R}^{P \times E}$。
  - 每层包括：BEI 令牌之间的**多头自注意力**（MHSA）和 FC 矩阵与 BEI 令牌之间的**多头交叉注意力**（MHCA），公式为：
    $$V = \text{Softmax}\left( \frac{(V \bar{\alpha}_h)(V \bar{\beta}_h)^T}{\sqrt{D}} \right) (V \bar{\gamma}_h)$$
    $$V = \text{Softmax}\left( \frac{(M \hat{\alpha}_h)(V \hat{\beta}_h)^T}{\sqrt{D}} \right)^T (M \hat{\gamma}_h)$$
  - 该设计使各层均可更新 $V$，模型易于堆叠扩展。

- **多任务预训练与半监督微调**：
  - 预训练时将各类别 BEI 的令牌片段与真实标签计算交叉熵（分类）或均方误差（回归），总损失为：
    $$\mathcal{L}_{\text{cls}} = \sum_{i=0}^{N_{\text{BEI}}} \text{CELoss}(V_{S_i:S_{i+1}}, \text{GT}_i)$$
  - 微调时，将新任务的令牌拼接到已有令牌上 $\leftarrow [V, \hat{V}]$，并为原有 BEI 令牌赋予伪标签（如默认健康状态“resting-state”），实现半监督扩展。

- **两阶段自适应训练策略**：
  - **第一阶段（动量期）**：前 $m$ 个 epoch 对所有解码器层的输出取平均后计算损失，使模型获得正确的初始化方向。
  - **第二阶段（自适应期）**：后续 epoch 仅对**每个 BEI 在表现最好的那一层**的输出进行监督，让不同表型在不同抽象层次上得到最佳匹配。
  - 此策略解决了不同 BEI 对特征深度需求各异的问题，同时增强了训练稳定性与表征多样性。

## 3. 实验设计  
- **数据集**（共 8 个）：
  - HCP‑Aging（717 名受试，4 种认知任务，4 类分类）
  - HCP‑Young Adult（>1100 名受试，7 种认知任务，7 类分类）
  - ADNI（138 名，含 CN、SMC、EMCI、LMCI、AD，简化为 CN vs AD 二分类）
  - PPMI（209 名，正常、SWEDD、前驱期、PD，4 类分类）
  - ABIDE（1025 名，ASD vs 对照，二分类）
  - Taowu、Neurocon（共 81 名，PD 二分类）
  - 外加一个未见过数据集 SZ（189 名，精神分裂症二分类）用于少样本微调。
- **对比方法**：
  - 领域专用 GNN/Trans former：BrainGNN、BolT、BNT、Graphormer、NAGphormer、NeuroPath。
  - 已有 fMRI 基础模型：BrainLM、BrainMass（SVM/MLP 两种下游头）、Brain‑JEPA，均按其原始设定重新训练。
- **评估指标**：准确率与 F1 分数，以 F1 为主要评判指标；跨被试交叉验证（HCP/ADNI 用 5 折，其余用 10 折），预训练数据始终来自对应折的训练集以防数据泄露。

## 4. 资源与算力  
- 论文未明确说明 GPU 型号、数量及显存配置，仅在图 3 中通过**预训练 GPU 小时**展示了 LCM 不同规模（147M、735M、1175M 参数）相对于 BrainLM (650M)、BrainMass (67M)、BrainJEPA (307M) 的效率优势。从图中可知 LCM‑147M 在极少的 GPU 小时下即达到有竞争力的下游性能，而 LCM‑1175M 效率最优。具体硬件规格需参考代码库或扩展版论文。

## 5. 实验数量与充分性  
- 总计涉及 **8 个数据集**，覆盖任务包括**认知状态识别、性别预测、多种神经疾病诊断**以及一个额外的少样本微调数据集（SZ）。
- 包含**多组消融**：不同 BEI 组合预训练、有无两阶段训练、仅监督最后一层、仅阶段一等，验证了各设计组件的贡献。
- 设置了**模型可扩展性实验**：对比不同深度的 MLP 与 LCM，展示解码器架构在参数量增加时仍能稳定降低损失。
- 还提供了**注意力图可视化**及最佳匹配层分布，从神经生物学角度增强了结果的可解释性。
- 实验设计**客观、公平**，所有模型均在相同交叉验证折叠、相同预处理下比较，基础模型均重新训练或使用官方权重，数据泄露已规避。

## 6. 主要结论与发现  
- 以多任务 BEI 监督替代自监督重建的预训练，使 LCM 在多个下游任务上表现显著优于 BrainLM、BrainMass、Brain‑JEPA 等基线。
- 预训练数据越多、涵盖的疾病表型越广，下游性能越好；即使下游任务未在预训练中见过，预训练依然带来稳定的性能提升。
- 两阶段自适应训练策略对稳定训练和提取多层特征至关重要，不同疾病倾向于依赖不同深度的特征。
- 注意力图显示 LCM 关注到与疾病相关的已知脑网络（如默认模式网络、边缘系统、感觉运动网络等），为模型决策提供了神经科学解释。
- 在少样本微调场景（SZ 数据集）中，LCM 以显著优势超越 BrainMass，证明了模型的强大泛化能力。

## 7. 优点  
- **范式创新**：首次将 fMRI 基础模型建构为有监督多任务学习，直接利用极易获得的表型标签，避开自监督目标与下游任务对齐的难题。
- **架构设计巧妙**：纯解码器结构结合可学习的 BEI 令牌和交叉注意力，使模型天然适应多任务，并具有良好的可扩展性（从 147M 到 1.2B 参数）。
- **训练策略有效**：两阶段自适应训练同时解决了不同表型所需特征层次不同以及解码器训练不稳定的问题，消融实验清晰证实其必要性。
- **实验扎实全面**：在 8 个数据集、多种任务上与 SOTA 模型和主流基础模型进行了系统对比，并辅以可解释性分析。
- **临床实用性高**：使用脑连接组（FC）而非原始 BOLD 信号，并与已知脑网络吻合，更贴近临床诊断场景。

## 8. 不足与局限  
- **计算细节缺失**：未公布 GPU 型号、显存占用、batch size 等详细资源消耗，降低了可复现性。
- **数据依赖非成像变量**：模型的优势依赖于每个受试附带的多类 BEI 标签，若在新数据集中缺乏相应元数据，预训练‑微调流程可能受限。
- **输入为静态 FC**：虽引用了动态 FC 的优势，但本文仅使用静态功能连接，可能丢失时变信息。
- **任务类型有限**：BEI 全为分类或回归任务，未探索生成式或对比式自监督任务的结合可能。
- **跨数据集泛化验证有限**：评估主要在同一数据集的交叉验证内进行，真正跨站点、跨设备的外部验证尚缺系统性分析。

## 9. 研究价值与阅读建议（重复部分按要求已省略，此处按正文要求不再重复展示第一节内容）  
（文章已开头第一节）

（完）
