---
title: AAAI26 SyncBrain_ Exploring Brain Functional Dynamics Through Latent Synchronization Analysis
title_zh: AAAI26 SyncBrain：通过潜在同步分析探索大脑功能动力学
authors: "Jiaqi Ding, Tingting Dan, Zhixuan Zhou, Guorong Wu"
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-184545727417-aaai26-syncbrain_-exploring-brain-functional-dynamics-through-latent.pdf
tags: ["paper:本地PDF", "query:local-pdf"]
score: 0.0 订阅评分
score_label: 订阅评分
evidence: 不相关
tldr: 受大脑神经耦合与同步化机制启发，探究神经振荡同步化对特征学习的启发，提出物理信息深度模型SyncBrain。该模型基于Kuramoto模型，将脑区视为振荡单元，模拟其动态同步模式，并加入自适应注意力控制。在功能神经影像数据上，在认知状态解码和早期疾病诊断中表现优异且具可解释性，优于现有方法。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-184545727417-aaai26-syncbrain_-exploring-brain-functional-dynamics-through-latent/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 2364, \"height\": 2253}, {\"url\": \"assets/figures/local-pdf/local-20260606-184545727417-aaai26-syncbrain_-exploring-brain-functional-dynamics-through-latent/fig-002.webp\", \"caption\": \"\", \"page\": 1, \"index\": 2, \"width\": 2364, \"height\": 2253}, {\"url\": \"assets/figures/local-pdf/local-20260606-184545727417-aaai26-syncbrain_-exploring-brain-functional-dynamics-through-latent/fig-003.webp\", \"caption\": \"\", \"page\": 1, \"index\": 3, \"width\": 793, \"height\": 495}, {\"url\": \"assets/figures/local-pdf/local-20260606-184545727417-aaai26-syncbrain_-exploring-brain-functional-dynamics-through-latent/fig-004.webp\", \"caption\": \"\", \"page\": 1, \"index\": 4, \"width\": 358, \"height\": 425}, {\"url\": \"assets/figures/local-pdf/local-20260606-184545727417-aaai26-syncbrain_-exploring-brain-functional-dynamics-through-latent/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 922, \"height\": 717}, {\"url\": \"assets/figures/local-pdf/local-20260606-184545727417-aaai26-syncbrain_-exploring-brain-functional-dynamics-through-latent/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 922, \"height\": 716}, {\"url\": \"assets/figures/local-pdf/local-20260606-184545727417-aaai26-syncbrain_-exploring-brain-functional-dynamics-through-latent/fig-007.webp\", \"caption\": \"\", \"page\": 7, \"index\": 7, \"width\": 921, \"height\": 717}]"
motivation: 探究神经振荡同步化是否可启发神经科学中的特征表征学习。
method: 提出基于Kuramoto模型的SyncBrain，模拟脑区振荡动态与同步，并引入自适应注意力控制模块。
result: 在多数据集上，认知状态解码和疾病诊断性能优于现有方法，且可解释性强。
conclusion: 证明神经振荡机制可用于构建鲁棒可解释的神经科学机器学习模型。
---

## 摘要
神经耦合是神经科学中的一种基本机制，通过分布式脑区之间的动态相互作用和同步，促进认知功能的涌现。受这一原理启发，我们提出一个问题：神经振荡同步的生物学机制能否启发神经科学中的特征表示学习？通过采用以模拟振荡动力学而著称的仓本模型来探讨这一问题，我们提出了一种新颖的物理信息深度融合模型SyncBrain，它将脑区建模为相互作用的振荡单元，并模拟其时间动力学和同步模式以区分认知状态。此外，受大脑动态关注关键时间信息这一内在能力的启发，我们引入了一个自适应控制模块，该模块引入类似注意力的机制来引导信息流。我们在多个功能性神经影像数据集上评估了模型，结果表明，SyncBrain在认知状态解码和早期疾病诊断方面均展现出优异的性能和增强的可解释性，超越了现有的计算方法。这些结果证明了神经振荡机制在构建面向神经科学应用的、鲁棒且可解释的机器学习模型中的有效性。

## Abstract
Neural coupling is a fundamental mechanism in neuroscience that facilitates the emergence of cognitive functions through dynamic interactions and synchronization among distributed brain regions. Inspired by this principle, we pose the ques- tion: Might the biological mechanism of neural oscillatory synchronization inspire the feature representation learning for neuroscience? By addressing this question through the Kuramoto model, renowned for simulating oscillatory dy- namics, we present a novel physics-informed deep model, SyncBrain, it models brain regions as interacting oscil- latory units and simulates their temporal dynamics and syn- chronization patterns to distinguish cognitive states. Further- more, inspired by the brain’s inherent ability to dynami- cally attend to critical temporal information, we incorporate an adaptive control module that introduces an attention-like mechanism to guide information flow. We evaluate our model on multiple functional neuroimaging datasets, it demonstrates promising performance and enhanced interpretability in both cognitive state decoding and early disease diagnosis, out- performing existing computational methods. These results demonstrate the effectiveness of neural oscillatory mecha- nisms in shaping robust and interpretable machine learning models for neuroscience applications.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

*   **关联方向**：强关联。本论文与您关注的核心方向“neural prior”、“brain decoding”及“fMRI representation”高度吻合，提出将神经振荡同步这一生物物理先验融入深度学习模型，实现更鲁棒、可解释的脑状态解码。
*   **启发与意义**：本文提供了一种从动力学系统角度设计特征提取机制的新范式，即不将脑功能信号视为静态向量序列，而是模拟其为相互作用的动态过程。这为超越传统静态FC或纯粹数据驱动的序列模型提供了新思路。
*   **可借鉴点**：可借鉴其用于方程驱动的特征演化思想，将之与您的“multi-view constraint”或“representation alignment”研究方向结合。例如，可考虑为不同模态（视图）的嵌入表示设计各自的动力学方程，通过对同步状态的约束实现跨视图的表征对齐。
*   **阅读建议**：重点阅读其方法论部分，尤其是如何将图结构（脑连接组）和时序信号整合进Kuramoto动力学方程。思考如何将这种“基于物理先验的特征更新”应用于您的编码模型设计中，作为强制不同表征空间协同演化的约束项。

## 论文核心问题与整体含义

*   **核心问题**：能否利用神经科学中广泛存在的**神经振荡同步机制**作为先验知识，来设计更优、更可解释的机器学习模型，以解码大脑的功能状态？
*   **研究背景与动机**：
    *   大脑通过分布式脑区间的**神经耦合与同步**实现认知功能，不同认知或病理状态下会表现出特异的时空同步模式。
    *   现有fMRI分析方法或模型（如图神经网络、Transformer等）多为纯数据驱动，缺乏生物物理可解释性，且可能忽略振荡动态这一关键的先验结构。
    *   本文旨在填补这一空白，通过构建受神经科学启发的物理信息深度模型，从振荡同步的角度显式地解码大脑状态。

## 方法论：核心思想与关键技术细节

论文提出 **SyncBrain** 模型，其核心思想是将每个脑区视为一个受Kuramoto模型启发的振荡器，通过模拟其在脑网络上的同步动力学过程，习得具有判别性的功能状态表征。

*   **1. 初始特征生成**
    *   利用**几何散射变换（GST）** 从BOLD信号中提取多尺度、多频率特征，为每个脑区构建一个高维向量（而非传统Kuramoto模型中的标量相位）作为振荡器的初始状态 $\hat{X}$。
    *   同时通过一个可学习的映射生成初始的记忆状态 $\hat{Y}$。

*   **2. 向量化Kuramoto同步与自适应控制**
    *   模型核心的动力学演化由下式驱动：
        $$\frac{d\hat{x}_i}{dt} = \omega_i + \left( \beta \hat{y}_i + \sum_{j=1}^{N} K_{ij} f(\hat{x}_j, \hat{x}_i) \right)$$
    *   **耦合项**：耦合函数 $f$ 由结构/功能连接矩阵 $W$ 和一个可学习的调制矩阵 $A$ 共同决定，即 $K = AW$。这为信息在脑区间的流动提供了解剖学或功能连接的基础。
    *   **自适应记忆控制**：引入项 $\beta \hat{y}_i$，它像一个**注意力机制**，允许模型根据历史信息动态调控每个振荡器对当前输入的响应强度，模拟了生物系统中的记忆引导注意力。

*   **3. 流形约束投影**
    *   为防止振荡器在更新时自我强化而阻碍同步，模型引入了一个几何约束，强制更新方向 $z_i$ 与其当前状态 $\hat{x}_i$ **正交**，确保演化贡献于对齐，而非放大自身。更新公式为 $z_i^\perp = z_i - \langle z_i, \hat{x}_i \rangle \hat{x}_i$。

*   **4. 数值实现与预测**
    *   动力学方程通过离散化步骤进行迭代，更新后的状态向量会归一化到单位球面上。
    *   经过 $L$ 个同步层和每层内的 $T$ 个时间步的演化后，最终的振荡器状态 $\hat{X}^{(L,T)}$ 被用于下游分类任务（认知解码/疾病诊断），并最小化交叉熵损失。

## 实验设计

*   **数据集**：覆盖了**任务态**和**静息态fMRI**两大类，共七个公开数据集，验证了模型的泛化性。
    *   **任务态**：
        *   **HCP-Aging (HCP-A)**：4,864 样本，4 种认知任务。
        *   **HCP-Young Adults (HCP-YA)**：1,649 样本，7 种认知任务。
        *   **HCP-Working Memory (HCP-WM)**：1,360 样本，8 种任务/刺激组合。
    *   **静息态（疾病诊断）**：
        *   **ADNI** (阿尔茨海默症)、**OASIS** (阿尔茨海默症)、**PPMI** (帕金森病)、**NIFD** (额颞叶痴呆)。
*   **Benchmark 与对比方法**：与九种主流的、基于图的模型进行了全面对比，包括：
    *   **经典GNNs**: GCN, GIN, GAT, GCNII, GraphSAGE。
    *   **图Transformer**: SAN。
    *   **基于PDE的模型**: GRAND, GraphCON。

## 资源与算力

*   论文未明确提及所使用的GPU型号、数量或具体训练时长。仅在实验设置中提及了泛化的训练超参数（如学习率、训练周期等）。

## 实验数量与充分性

*   **实验组数**：至少在7个数据集上运行了10个模型（包含SyncBrain及其9个变体），进行了五折交叉验证，并使用了3种评价指标，构成了一个非常庞大的实验矩阵。
*   **充分性与公平性**：实验设计**充分且公平**。通过覆盖任务态和静息态、不同年龄组和多种疾病的七个大型数据集，有力证明了模型的泛化能力。与9种具有代表性的基线模型进行统一设置下的全面比较，确保了结果对比的客观性。此外，还提供了推理时间分析，兼顾了效率评估。

## 主要结论与发现

*   **性能卓越**：SyncBrain 在所有七个数据集上几乎都取得了最优的准确率、精度和F1值，尤其是在最复杂的HCP-WM和NIFD数据集上，性能提升显著（如HCP-WM上准确率高达89.22%，远超第二名的55.33%），证明其能有效捕捉细微和分布式神经模式。
*   **可解释性强**：
    *   **相空间可视化**：通过可视化发现，模型能将不同认知状态或疾病的脑表征在相空间中演化成被良好分离、相位对齐的聚类，表明其成功捕捉到了类别特异的振荡同步模式。
    *   **生物标志物发现**：模型学习到的关键脑区与已知的神经病理学网络高度吻合（如AD的默认模式网络、帕金森的感觉运动网络），增强了其作为临床辅助工具的潜力。
*   **效率与性能兼顾**：尽管引入了复杂的动力学机制，模型的推理时间与普通GNN持平，且远快于GRAND等基于扩散的方法，展现了实用性。

## 优点

*   **创新的理论融合**：首次将Kuramoto振荡器模型系统性地融入深度图学习框架，用于fMRI分析，为脑解码提供了具有神经科学启发的新视角。
*   **精巧的机制设计**：向量化表示、自适应记忆控制和正交投影等设计，巧妙地克服了传统标量 Kuramoto 模型的局限性，并增强了模型对复杂时空动态的表达能力和训练稳定性。
*   **全面的实验验证**：在7个数据集上的大规模实验，以及与多种类型基线模型的综合比较，使得结论极具说服力。出色的可解释性分析为模型的决策提供了神经科学层面的支撑。

## 不足与局限

*   **静态图结构的限制**：模型目前将脑连接组（SC/FC）作为静态图结构输入,而真实的脑交互是动态变化的。未建模动态图连接可能限制其对瞬时功能网络变化的捕捉能力。
*   **跨站点泛化性未评估**：论文提及跨站点变异性和扫描仪差异是潜在挑战，但未设计相关实验（如留一站交叉验证）来评估模型对此类差异的鲁棒性。
*   **记忆机制解释力有限**：自适应控制虽模拟了记忆引导的注意力，但其内部动态如何精确对应特定的认知记忆过程（如工作记忆、长时程记忆）仍未得到探索和解释。
*   **计算资源不明**：未报告计算资源需求，使得可复现性和部署门槛的评估存在不确定性。

## 论文的主要结论与发现

*   **性能卓越**：SyncBrain 在所有七个数据集上几乎都取得了最优的准确率、精度和F1值，尤其是在最复杂的HCP-WM和NIFD数据集上，性能提升显著（如HCP-WM上准确率高达89.22%，远超第二名的55.33%），证明其能有效捕捉细微和分布式神经模式。
*   **可解释性强**：
    *   **相空间可视化**：通过可视化发现，模型能将不同认知状态或疾病的脑表征在相空间中演化成被良好分离、相位对齐的聚类，表明其成功捕捉到了类别特异的振荡同步模式。
    *   **生物标志物发现**：模型学习到的关键脑区与已知的神经病理学网络高度吻合（如AD的默认模式网络、帕金森的感觉运动网络），增强了其作为临床辅助工具的潜力。
*   **效率与性能兼顾**：尽管引入了复杂的动力学机制，模型的推理时间与普通GNN持平，且远快于GRAND等基于扩散的方法，展现了实用性。

（完）
