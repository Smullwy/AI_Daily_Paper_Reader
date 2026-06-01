---
title: AAAI26 Large Connectome Model_ An fMRI Foundation Model of Brain Connectomes with Multi-Phenotype Conditioning
title_zh: AAAI26 大型连接组模型：一种具有多表型条件作用的 fMRI 脑连接组基础模型
authors: "Ziquan Wei, Tingting Dan, Guorong Wu"
date: 2026-06-01
pdf: assets/local_pdfs/local-20260601-173414591050-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 7.0 订阅评分
score_label: 订阅评分
evidence: 人口级fMRI基础模型，通过多任务预训练提高泛化能力
tldr: 功能磁共振影像基础模型在临床应用中受限于样本量，现有自监督学习难以对齐大脑与表型的关系。本文利用大量环境与人口数据，将脑建模转化为多任务学习，提出通过标记脑-环境交互进行多任务预训练并结合半监督微调的大型连接组模型。在性别预测、行为识别及自闭症、帕金森等疾病早期诊断上取得优异表现，展示了促进临床神经影像分析的潜力。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260601-173414591050-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con/fig-001.webp\", \"caption\": \"Figure 1: Learning strategies of previous brain foundation models and LCM. The pretraining in (a) previous brain foundation models is a reconstructive representation learning based on the information (info.) bottleneck, while (b) in LCM it is a multitask learning for multiple brain-environment interactions (BEI) token embeddings by a Transformer decoder, where MHSA is multi-head self-attention, MHCA is multihead cross-attention, and FFN is a feedforward network. The finetuning in (c) previous studies is training a relatively small head, e.g., a multilayer perceptron (MLP), for the downstream task. (d) LCM finetunes the BEI tokens along with new tokens representing the downstream task.\", \"page\": 1, \"index\": 1, \"width\": 457, \"height\": 281}, {\"url\": \"assets/figures/local-pdf/local-20260601-173414591050-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con/fig-003.webp\", \"caption\": \"Figure 2: Scalability is demonstrated by model size vs. training loss, where the training is supervised by arbitrary nonbrain-imaging phenotypes as BEIs in our multitask learning.\", \"page\": 2, \"index\": 3, \"width\": 474, \"height\": 342}, {\"url\": \"assets/figures/local-pdf/local-20260601-173414591050-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con/fig-005.webp\", \"caption\": \"Figure 3: LCM surpasses other foundation models, demonstrating outstanding efficiency, on our biggest downstream application, ABIDE (n=1,025), as an example. Even the smallest LCM (147M), achieves comparable performance while being efficient in both parameters and resource usage.\", \"page\": 3, \"index\": 5, \"width\": 446, \"height\": 347}, {\"url\": \"assets/figures/local-pdf/local-20260601-173414591050-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con/fig-004.webp\", \"caption\": \"Figure 4: The architecture of one layer of the LCM.\", \"page\": 3, \"index\": 4, \"width\": 468, \"height\": 356}, {\"url\": \"assets/figures/local-pdf/local-20260601-173414591050-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con/fig-006.webp\", \"caption\": \"Figure 5: Pre-training and finetuning of LCM use a two-stage learning strategy: (1) Getting momentum by computing loss for all layers, and (2) adaptive training for the best layer. Note that ground truth (GT) could be a pseudo-label of the BEI, e.g., subjects are healthy by default in HCP datasets.\", \"page\": 4, \"index\": 6, \"width\": 734, \"height\": 323}, {\"url\": \"assets/figures/local-pdf/local-20260601-173414591050-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con/fig-007.webp\", \"caption\": \"Table 1: Finetune LCM with weights learned from various combination of BEIs. Diverse BEIs contribute differently to LCM\", \"page\": 5, \"index\": 7, \"width\": 872, \"height\": 394}, {\"url\": \"assets/figures/local-pdf/local-20260601-173414591050-aaai26-large-connectome-model_-an-fmri-foundation-model-of-brain-con/fig-002.webp\", \"caption\": \"Figure 6: The average cross-attention map of all test data at the readout layer of LCM on disease-related datasets. The node size indicates the relative attention weight.\", \"page\": 6, \"index\": 2, \"width\": 844, \"height\": 187}]"
motivation: 当前fMRI自监督预训练与下游任务（如疾病预测）存在不匹配，需要融合多表型信息以更好对齐脑-结果关系。
method: 通过标记多个大脑-环境交互（BEI）进行多任务预训练，并采用伪标签进行半监督微调。
result: 模型在性别预测、行为识别以及自闭症、帕金森症、阿尔茨海默症和精神分裂症的早期诊断中均取得有希望的结果。
conclusion: 该大型连接组基础模型有望有效促进fMRI在临床诊疗中的实际应用。
---

## 摘要
可靠的功能神经影像基础模型对于推动临床应用至关重要，因为当前 AI 模型的性能受到有限样本量的严重制约。为此，人们付出了巨大努力，利用可扩展的自监督学习在海量无标签 fMRI 数据上预训练大型模型。由于自监督学习不一定与大脑-结果关系对齐，大多数基础模型对于下游任务（如预测疾病结果）而言并非最优。通过利用丰富的环境变量和人口统计学数据以及前所未有的功能神经影像数量，我们将大脑建模构建为多任务学习，并提出了一种可扩展的模型架构，用于 (i) 通过标记多个脑-环境交互 (BEI) 进行多任务预训练，以及 (ii) 通过为预训练的 BEI 分配伪标签进行半监督微调。我们已在多种应用中评估了基础模型，包括性别预测、人类行为识别以及自闭症、帕金森病、阿尔茨海默病和精神分裂症等疾病的早期诊断，取得了令人鼓舞的结果，表明其在临床常规中促进当前神经影像应用的巨大潜力。代码 — https://github.com/Chrisa142857/brain network decoder 扩展版本 — https://arxiv.org/abs/2510.18910

## Abstract
A reliable foundation model of functional neuroimages is crit- ical to promote clinical applications where the performance of current AI models is significantly impeded by a limited sam- ple size. To that end, tremendous efforts have been made to pretraining large models on extensive unlabeled fMRI data us- ing scalable self-supervised learning. Since self-supervision is not necessarily aligned with the brain-to-outcome relationship, most foundation models are suboptimal to the downstream task, such as predicting disease outcomes. By capitalizing on rich environmental variables and demographic data along with an unprecedented amount of functional neuroimages, we form the brain modeling as a multitask learning and present a scalable model architecture for (i) multitask pretraining by tokenizing multiple brain-environment interactions (BEI) and (ii) semi-supervised finetuning by assigning pseudo-labels of pretrained BEI. We have evaluated our foundation model on a variety of applications, including sex prediction, human behavior recognition, and disease early diagnosis of Autism, Parkinson’s disease, Alzheimer’s disease, and Schizophrenia, where promising results indicate the great potential to facilitate current neuroimaging applications in clinical routines. Code — https://github.com/Chrisa142857/brain network decoder Extended version — https://arxiv.org/abs/2510.18910

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：与读者的“fMRI representation”和“representation alignment”方向强相关，也间接涉及“brain decoding”与“multi-view constraint”。
- **启发与意义**：论文将脑‑环境交互（BEI）显式建模为多任务学习目标，说明结合非成像表型可以更有效地对齐脑表示与下游任务，为跨人群、跨任务的表示对齐提供了新思路。
- **可借鉴点**：可借鉴其“解码器式 Transformer + 多任务预训练 + 半监督微调”的架构，以及利用跨层自适应预测的机制来提升小样本下游任务的泛化能力。
- **阅读建议**：建议重点关注多任务 BEI token 的设计、交叉注意力中脑连接组与表型交互的方式，并思考如何将该范式迁移到脑编码或神经先验约束中。

## 1. 核心问题与整体含义
- 当前 fMRI 基础模型多采用自监督重建（如 MAE、JEPA），但自监督目标并非直接对齐于大脑表型与临床结果的关系，导致下游任务（疾病诊断等）性能欠佳。
- 大量 fMRI 数据天然带有丰富的非影像记录（人口学、认知状态、临床标签等），论文将其定义为脑‑环境交互（BEI）。
- 文章旨在利用 BEI 进行多任务学习，构建一个可扩展的、专为脑连接组（functional connectome, FC）设计的基础模型，提升小样本疾病诊断和行为预测的泛化性与效率。

## 2. 方法论
- **核心思想**：摒弃纯自监督重建，将脑连接组预测多个 BEI 作为预训练目标，使模型学到与神经科学兴趣直接相关的表示。
- **架构**：采用仅解码器（decoder-only）的 Transformer 架构，输入为 FC 矩阵，通过交叉注意力与可学习的 BEI 令牌（token）交互，BEI 令牌再经自注意力更新。每个解码层都产出令牌嵌入并用于预测不同 BEI。
- **多任务预训练**：对所有可用的 BEI 同时监督，分类 BEI 使用交叉熵损失，回归型 BEI 使用均方误差，总损失为各 BEI 损失之和：$\mathcal{L}_{cls} = \sum_{i=0}^{N_{BEI}} CELoss(V_{S_i:S_{i+1}}, GT_i)$。
- **半监督微调**：下游任务作为新的 BEI 令牌，与预训练令牌拼接过解码器，预训练令牌可使用伪标签（如默认健康）保持其表示。
- **两阶段学习策略**：
  1. **动量阶段**：在前 $m$ 个 epoch 中，对所有解码层的输出取平均预测计算损失，保证模型朝正确方向收敛。
  2. **自适应训练阶段**：后续 epoch 中，仅对预测质量最高的那一层的输出计算损失。该层由当前批次的实际标签动态选择，实现不同 BEI 在不同层被最优解码。
- **自注意力与交叉注意力**：
  - 自注意力（token 间）：$V = \text{Softmax}((V \bar{\alpha}_h)(V \bar{\beta}_h)^T/\sqrt{D})(V \bar{\gamma}_h)$
  - 交叉注意力（FC 到 token）：$V = \text{Softmax}((M \hat{\alpha}_h)(V \hat{\beta}_h)^T/\sqrt{D})^T (M \hat{\gamma}_h)$，其中 $M$ 为 FC 矩阵。

## 3. 实验设计
- **数据集**：
  - 预训练/多任务：HCPA（717 人，4,863 扫描，4 种任务态+静息态）、HCPYA（>1100 人，7 种任务态）。
  - 疾病下游：ADNI（阿尔茨海默，138 人，5 类简化为二分类）、PPMI（帕金森，209 人，4 分类）、ABIDE（自闭症，1025 人，二分类）、Taowu & Neurocon（帕金森，81 人，二分类）、SZ（精神分裂症，189 人，二分类）。
- **Benchmark 与方法对比**：
  - 专业图/连接组模型：BrainGNN, BolT, BNT, Graphormer, NAGphormer, NeuroPath。
  - 其他 fMRI 基础模型：BrainLM（MAE）、BrainMass（SVM/MLP）、Brain-JEPA。
  - 训练设置：五折或十折交叉验证，按被试划分，预训练与微调严格在训练集内进行，防止数据泄漏。
- **实验类别**：
  - 下游疾病诊断、性别预测（7 个数据集）、行为任务识别。
  - 预训练数据组合消融（对不同 BEI 组合进行预留和评测）。
  - 少样本微调（SZ 数据集，使用 10%、50%、100% 数据）。
  - 模型规模可扩展性对比（Small、Mid、Big 三种参数量）。
  - 消融研究：学习策略（仅阶段1、仅阶段2、两阶段）及监督位置（最后层、最佳层）。

## 4. 资源与算力
- 文中未明确列出 GPU 型号、数量及确切训练时长，仅在效率对比图的横轴标注了“Pre-training GPU hours”（图 3），其具体数值以刻度的形式呈现（约从 1×10¹ 到 6×10⁰ 级别），可见 LCM 在大约 10³ GPU 小时内达到较高 F1 分数，相比之下其他模型需 250~200 epoch 的预训练，但未标定每 epoch 时间或硬件细节。

## 5. 实验数量与充分性
- 实验覆盖 8 个数据集，包含 4 种疾病、两个多任务行为集、性别预测等，任务类型多样。
- 对比方法涵盖图神经网络、Transformer 变体以及三个已有 fMRI 基础模型，较为全面。
- 设计多组消融：不同 BEI 组合的预训练效果、学习策略的有效性、解码层选择的影响，并通过少样本微调验证泛化性。
- 规模上对比了三种参数量的 LCM 和 MLP 的可扩展性，显示了 LCM 对大参数有利，MLP 反而崩溃。
- 由于各方法实现可能受超参数影响，文中主要使用默认配置或公开代码，比较相对公平；但部分对比模型（如 BrainJEPA）可能未完全适配所有数据集，性能波动较明显。

## 6. 主要结论与发现
- 以多任务 BEI 监督替代自监督重建，可显著提升 fMRI 基础模型在下游疾病诊断的鲁棒性和泛化性。
- 提出的解码器式大型连接组模型（LCM）在参数规模扩大时仍保持训练稳定，解决了 MLP 预测头可扩展性差的问题。
- 两阶段自适应训练策略有效促进了不同表型在模型中不同深度的特征利用，提升了小样本下性能。
- 预训练模型不仅在已见疾病上表现突出，在未见的疾病（如 SZ）少样本微调中也显著优于 BrainMass 等基线。
- 交叉注意力图可解释地反映出疾病相关的功能网络（默认模式网络、边缘系统等），增强了临床可信度。

## 7. 优点
- **方法新颖**：首次将多表型监督作为 fMRI 基础模型的预训练范式，规避了自监督与临床目标不一致的问题。
- **可扩展架构**：仅解码器 Transformer 预测头解决了 MLP 规模扩大时性能崩溃的痛点，使得模型可容纳 1.2B 参数。
- **灵活的微调设计**：通过拼接新 BEI 令牌和伪标签策略，实现了半监督微调，且不改变网络结构。
- **自适应层选择**：根据不同表型自动选择最佳解码层，提升了对复杂疾病（如帕金森四分类）的区分能力。
- **充分的实验验证**：在多个数据集、多种任务和模型尺寸上进行了细致对比，并提供了可解释性分析。

## 8. 不足与局限
- **算力细节缺失**：未报告确切的 GPU 型号、数量和训练时长，仅以相对时长比较，难以复现或评估实际资源需求。
- **预训练与微调数据分布差异**：预训练主要来自 HCP 的健康人群，虽然通过多 BEI 监督缓解，但转移到多种疾病的生理差异可能未完全解决。
- **BEI 类别定义依赖数据采集**：BEI 的质量和种类受限于现有数据库的记录完整性和一致性，泛化到全新站点时可能存在缺失或定义偏差。
- **部分对比模型表现异常**：BrainLM 等在某些数据集上出现极低 F1，可能与预训练-微调流程适配不佳有关，可能高估 LCM 的相对优势。
- **仅使用静态 FC**：未探索动态 FC 或其他连接组构建方式，可能丢失时变信息。
- **缺乏在更大规模公共数据库（如 UK Biobank）上的验证**，仅用到 HCP 两个子集（总量万人级别），未来可扩展。

## 相关图表说明
- Fig. 1：对比之前自监督瓶颈与 LCM 的多任务 BEI 令牌学习策略，以及传统微调头与 LCM 的半监督 BEI 令牌拼接微调方式。
- Fig. 2：MLP 与 LCM 随参数规模扩大的训练损失变化，MLP 损失爆炸，LCM 损失降低，说明 LCM 的可扩展性。
- Fig. 3：性能‑效率曲线，LCM 在较低 GPU 小时下即达到较高 F1，效率优于 BrainLM、BrainMass 和 BrainJEPA。
- Fig. 4：单层 LCM 结构细节，展示多头自注意力、交叉注意力、前馈网络与残差连接。
- Fig. 5：两阶段学习策略示意图，第一阶段动量全局监督，第二阶段自适应选择最佳解码层。
- Table 1：不同 BEI 组合预训练后的微调性能，证实更多 BEI 参与预训练带来的提升。
- Fig. 6：疾病相关交叉注意力脑网络可视化，AD 和 ASD 主要聚焦默认模式网络和边缘系统，PD 涉及感觉运动、视觉和额顶网络。
- Fig. 7：不同疾病最佳解码层分布的箱线图，AD/CN 倾向浅层，ASD/Prodromal/PD 倾向深层，验证了自适应策略的必要性。

（完）
