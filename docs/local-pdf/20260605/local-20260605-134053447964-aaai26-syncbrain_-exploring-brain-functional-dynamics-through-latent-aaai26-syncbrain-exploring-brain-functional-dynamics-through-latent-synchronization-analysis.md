---
title: AAAI26 SyncBrain_ Exploring Brain Functional Dynamics Through Latent Synchronization Analysis
title_zh: "AAAI26 SyncBrain: 通过潜在同步分析探索脑功能动力学"
authors: "Jiaqi Ding, Tingting Dan, Zhixuan Zhou, Guorong Wu"
date: 2026-06-05
pdf: assets/local_pdfs/local-20260605-134053447964-aaai26-syncbrain_-exploring-brain-functional-dynamics-through-latent.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 4.0 订阅评分
score_label: 订阅评分
evidence: 将脑区建模为相互作用的振荡单元，利用fMRI数据区分认知状态
tldr: 受神经耦合机制启发，本文提出物理引导的深度模型SyncBrain，基于Kuramoto模型模拟脑区振荡同步动态，并加入自适应注意控制模块，以区分认知状态。在多种功能性神经影像数据上，该模型在认知解码与早期疾病诊断中表现优异且可解释性强，展现了神经振荡机制对构建鲁棒可解释神经科学模型的有效性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260605-134053447964-aaai26-syncbrain_-exploring-brain-functional-dynamics-through-latent/fig-002.webp\", \"caption\": \"Table 1: Classification performance across 7 datasets using 9 baseline GNN models and SyncBrain. Bold indicates the best performance in each metric for a given dataset, while underline marks the second-best. (*) indicate that our model significantly outperforms all other baselines (paired t-test, p < 0.01).\", \"page\": 5, \"index\": 2, \"width\": 1054, \"height\": 712}, {\"url\": \"assets/figures/local-pdf/local-20260605-134053447964-aaai26-syncbrain_-exploring-brain-functional-dynamics-through-latent/fig-001.webp\", \"caption\": \"Figure 3: Phase space visualization of the learned representations of SyncBrain from the initial input X̂(0,0) to the final output X̂(L,T ). Points are colored by cognitive task labels for the HCP-A (top) and NIFD (bottom). SyncBrain is able to organize representations into well-separated manifolds aligned with task categories.\", \"page\": 6, \"index\": 1, \"width\": 438, \"height\": 296}]"
motivation: 探索大脑神经振荡同步机制能否启发特征表征学习，以提升神经科学计算模型的可解释性和性能。
method: 提出SyncBrain模型，基于Kuramoto模型将脑区建模为振荡单元，模拟同步动力学，并引入自适应注意力控制模块引导信息流。
result: 在多个功能神经影像数据集上，SyncBrain在认知状态解码和早期疾病诊断任务中均超越现有方法，展现出优异的性能和增强的可解释性。
conclusion: 神经振荡同步机制能够有效塑造鲁棒且可解释的机器学习模型，为神经科学应用提供新途径。
---

## 摘要
神经耦合是神经科学中的一种基本机制，通过分布式脑区之间的动态交互和同步促进认知功能的涌现。受这一原理启发，我们提出一个问题：神经振荡同步的生物机制能否启发神经科学的特征表示学习？通过使用以模拟振荡动力学而闻名的Kuramoto模型来探讨这个问题，我们提出了一个新颖的物理信息深度模型SyncBrain，它将脑区建模为相互作用的振荡单元，并模拟它们的时间动力学和同步模式以区分认知状态。此外，受大脑固有地动态关注关键时间信息能力的启发，我们集成了一个自适应控制模块，引入类似注意力的机制来引导信息流。我们在多个功能性神经影像数据集上评估了我们的模型，该模型在认知状态解码和早期疾病诊断方面表现出有前途的性能和增强的可解释性，优于现有的计算方法。这些结果证明了神经振荡机制在为神经科学应用塑造稳健且可解释的机器学习模型方面的有效性。

## Abstract
Neural coupling is a fundamental mechanism in neuroscience that facilitates the emergence of cognitive functions through dynamic interactions and synchronization among distributed brain regions. Inspired by this principle, we pose the ques- tion: Might the biological mechanism of neural oscillatory synchronization inspire the feature representation learning for neuroscience? By addressing this question through the Kuramoto model, renowned for simulating oscillatory dy- namics, we present a novel physics-informed deep model, SyncBrain, it models brain regions as interacting oscil- latory units and simulates their temporal dynamics and syn- chronization patterns to distinguish cognitive states. Further- more, inspired by the brain’s inherent ability to dynami- cally attend to critical temporal information, we incorporate an adaptive control module that introduces an attention-like mechanism to guide information flow. We evaluate our model on multiple functional neuroimaging datasets, it demonstrates promising performance and enhanced interpretability in both cognitive state decoding and early disease diagnosis, out- performing existing computational methods. These results demonstrate the effectiveness of neural oscillatory mecha- nisms in shaping robust and interpretable machine learning models for neuroscience applications.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：强相关。论文直接面向脑状态解码与神经先验（neural prior）引导的 fMRI 表征学习，与读者方向的“brain decoding”“neural prior”“fMRI representation”高度吻合。
- **启发与意义**：将神经振荡同步这一生物先验显式地嵌入深度学习模型，展示了物理信息方法在脑解码中同时提升性能和可解释性的潜力，为构建“先验驱动”的 fMRI 表征提供了新范式。
- **可借鉴点**：基于 Kuramoto 模型的向量化振荡同步机制及自适应记忆控制模块，可直接迁移到其他需要融合多脑区时序交互的任务中；几何散射变换提取多尺度特征也可用于 fMRI 预处理。
- **阅读建议**：若研究重心在脑解码的可解释性与动态表征，建议重点阅读其振荡动力学建模与自适应控制的设计；若聚焦表示对齐或多视角约束，可借鉴其利用生理先验规范化表示空间的思路。

## 1. 论文的核心问题与整体含义
- **研究动机**：大脑通过神经振荡同步实现分布式脑区的功能整合，从而支持认知行为。现有脑解码模型多依赖纯数据驱动，忽视了这种生物物理机制。
- **核心问题**：能否以神经振荡同步机制作为结构化先验，设计一种物理信息深度模型，从 fMRI 数据中学习更具判别力且生物可解释的脑状态表征。
- **整体含义**：提出 SyncBrain，将脑区建模为耦合振荡器，模拟其时间动力学与同步模式，以解码认知状态和辅助疾病诊断，从而在性能和解释性上超越传统图神经网络。

## 2. 方法论核心思想与技术细节
- **核心思想**：利用 Kuramoto 模型模拟脑区间的振荡同步，并将 fMRI 的血氧水平依赖信号映射为振荡器状态，通过同步演变实现脑状态的表征学习。
- **关键技术细节**：
  - **图构建**：将脑网络表示为图 \(\mathcal{G}=(\mathcal{V}, W)\)，节点为脑区，边权 \(w_{ij}\) 来自结构或功能连接。
  - **多尺度振荡器初始化**：使用几何散射变换从 BOLD 信号中提取多尺度特征 \(\hat{X} \in \mathbb{R}^{N \times P \times (H-1)}\)，展平为每个脑区的高维振荡器状态 \(\hat{x}_i\)。
  - **向量化 Kuramoto 同步**：扩展经典相位模型为向量形式 \(\frac{d\hat{x}_i}{dt} = \omega_i + \sum_j K_{ij} f(\hat{x}_j, \hat{x}_i)\)，并通过可学习耦合矩阵 \(K = A W\) 融入脑网络拓扑。
  - **自适应记忆控制**：引入记忆变量 \(\hat{y}_i\) 作为注意式反馈，动力学变为 \(\frac{d\hat{x}_i}{dt} = \omega_i + \left( \beta \hat{y}_i + \sum_j K_{ij} f(\hat{x}_j, \hat{x}_i) \right)\)，并通过正交投影 \(z_i^\perp\) 防止自强化，确保同步。
  - **离散化与归一化**：采用步长 \(\gamma\) 的欧拉法离散更新，每步后将振荡器状态归一化到单位球；记忆状态每层通过 1D 卷积更新。
  - **下游任务**：最终振荡器状态或记忆状态用于认知状态分类或疾病诊断，通过最小化交叉熵训练。

## 3. 实验设计
- **数据集**：
  - 任务态 fMRI：HCP‑Aging（4类）、HCP‑Young Adults（7类）、HCP‑Working Memory（8类）。
  - 静息态 fMRI 疾病数据：ADNI（AD vs. CN）、OASIS（AD vs. CN）、PPMI（帕金森病等4类）、NIFD（额颞叶痴呆5类）。
- **Benchmark 与基线方法**：
  - 对比图神经网络：GCN, GIN, GAT, GCNII, GraphSAGE, SAN。
  - 对比物理信息/连续模型：GRAND（扩散方程）, GraphCON（耦合振荡器网络）。
- **评估设置**：五折交叉验证，报告准确率、加权精确率与加权 F1 分；统计学显著性采用配对 t 检验（p<0.01）。

## 4. 资源与算力
- 文中未明确提及 GPU 型号、数量或训练时长。仅描述了网络隐藏维度（256）、层数、学习率、权重衰减等超参数。因此，无法推断具体算力需求，但模型推理速度与图注意力网络相当（平均 1.25 ms/被试），表明计算开销适中。

## 5. 实验数量与充分性
- **实验规模**：在 7 个数据集上分别与 9 种基线对比，每组实验重复 5 折，总计约 7×9×3 项主要性能指标对比。
- **充分性与公平性**：
  - 覆盖任务态与静息态、认知与多种神经退行性疾病场景，数据集规模从百人到数千人，较为全面。
  - 所有模型采用统一交叉验证与评估指标，基线实现为公开代码或标准架构。
  - 无显式消融实验（如移除某一模块的效果）或超参数敏感性分析，这是可补充的环节。
  - 整体而言，对比实验客观、公平，但在模型组分验证上略有不足。

## 6. 主要结论与发现
- SyncBrain 在 7 个数据集上几乎均取得最高分类性能，尤其在 HCP‑WM 和 NIFD 等传统 GNN 表现受限的复杂任务上优势显著。
- 学习到的振荡器状态在相空间演化中逐步形成按类别分离的角向簇，体现了从混沌到锁相同步的过程，可解释为任务或疾病特异性神经同步模式。
- 模型自动赋予高权重的脑区与已知神经病理网络（如默认模式网络、感觉运动网络）高度吻合，提供了可验证的生物标志物。
- 推断速度快，与轻量级 GNN 相当，远优于基于连续扩散的方法，适合大规模应用。

## 7. 优点
- **生物物理可解释性**：将神经振荡同步原理显式编码为模型动力学，使表征学习过程有明确的神经科学基础。
- **自适应注意机制**：通过记忆控制模块模拟脑的自适应时域注意力，增强了处理任务/疾病上下文变化的能力。
- **性能与效率兼顾**：在多类型数据集上超越静态图网络与连续深度模型，同时保持较低推理延迟。
- **可视化验证**：相空间轨迹与脑区重要性分布与临床知识一致，增强了模型的信任度。

## 8. 不足与局限
- **结构图静态化**：目前模型使用固定的结构或功能连接矩阵，未能捕获动态重连的瞬态交互。
- **跨中心泛化未验证**：尽管覆盖多个数据集，但未针对扫描仪差异、采集协议进行域适应或鲁棒性研究。
- **消融分析缺失**：未报道移除记忆控制、向量化等模块后的性能变化，难以明确各组件贡献度。
- **可调参数依赖**：振荡步数 \(T\)、层数 \(L\) 等可能对性能敏感，但缺乏灵敏度分析。
- **应用范围**：主要聚焦于脑区级 fMRI，尚未扩展到其他模态（如脑电图/脑磁图）或个体化建模。

## 9. 主要贡献再述
- 提出 SyncBrain，首次将向量化 Kuramoto 同步与自适应记忆控制引入 fMRI 脑解码，为物理信息脑网络分析提供了统一框架。
- 在 7 个功能性神经影像数据集上的系统性验证，证明其超越代表性图神经网络的性能。
- 通过相空间可视化与脑区重要性解释，展示模型如何内在地编码具有神经科学意义的同步模式。

（完）
