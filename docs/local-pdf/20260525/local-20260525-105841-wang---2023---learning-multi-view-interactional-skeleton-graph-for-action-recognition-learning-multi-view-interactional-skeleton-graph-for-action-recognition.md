---
title: Learning Multi-View Interactional Skeleton Graph for Action Recognition
title_zh: 学习多视角交互骨架图用于动作识别
authors: Unknown
date: 2026-05-25
pdf: assets/local_pdfs/local-20260525-105841-wang---2023---learning-multi-view-interactional-skeleton-graph-for-action-recognition.pdf
tags: ["paper:本地PDF", "query:local-pdf"]
score: local
evidence: 本地上传 PDF，使用后端精读流程生成。
tldr: 针对骨架动作识别中空间上下文建模弱的问题，提出多视图交互图网络(MV-IGNet)，统一构建多级骨架上下文（视图级、组级、关节级）。利用多视图骨架拓扑结构互补生成特征，通过可分离参数图卷积丰富局部交互并适应不规则拓扑，分层捕获组内和组间上下文，以及自适应全局上下文学习。MV-IGNet模型小、推理快，在NTU-RGB+D和NTU-RGB+D 120数据集上取得领先性能。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260525-105841-wang---2023---learning-multi-view-interactional-skeleton-graph-for-action-recognition/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 1457, \"height\": 649}, {\"url\": \"assets/figures/local-pdf/local-20260525-105841-wang---2023---learning-multi-view-interactional-skeleton-graph-for-action-recognition/fig-002.webp\", \"caption\": \"\", \"page\": 5, \"index\": 2, \"width\": 3120, \"height\": 463}, {\"url\": \"assets/figures/local-pdf/local-20260525-105841-wang---2023---learning-multi-view-interactional-skeleton-graph-for-action-recognition/fig-003.webp\", \"caption\": \"\", \"page\": 6, \"index\": 3, \"width\": 2059, \"height\": 311}, {\"url\": \"assets/figures/local-pdf/local-20260525-105841-wang---2023---learning-multi-view-interactional-skeleton-graph-for-action-recognition/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 3392, \"height\": 315}, {\"url\": \"assets/figures/local-pdf/local-20260525-105841-wang---2023---learning-multi-view-interactional-skeleton-graph-for-action-recognition/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 1183, \"height\": 555}, {\"url\": \"assets/figures/local-pdf/local-20260525-105841-wang---2023---learning-multi-view-interactional-skeleton-graph-for-action-recognition/fig-006.webp\", \"caption\": \"\", \"page\": 8, \"index\": 6, \"width\": 1406, \"height\": 851}, {\"url\": \"assets/figures/local-pdf/local-20260525-105841-wang---2023---learning-multi-view-interactional-skeleton-graph-for-action-recognition/fig-007.webp\", \"caption\": \"\", \"page\": 10, \"index\": 7, \"width\": 4205, \"height\": 637}, {\"url\": \"assets/figures/local-pdf/local-20260525-105841-wang---2023---learning-multi-view-interactional-skeleton-graph-for-action-recognition/fig-008.webp\", \"caption\": \"\", \"page\": 12, \"index\": 8, \"width\": 3984, \"height\": 622}]"
motivation: 现有图卷积方法受限于固定的交互模式和共享权重，导致空间上下文建模能力弱。
method: 提出多视图交互图网络，通过多视图拓扑、可分离参数图卷积、分组层次捕获及全局上下文适应模块，联合建模多级骨架交互。
result: 在NTU-RGB+D和NTU-RGB+D 120两个大规模基准上实现了先进的识别准确率。
conclusion: MV-IGNet有效提升了骨架动作识别的空间上下文建模能力，兼顾了模型效率与性能。
---

## 摘要
捕捉人体关节的交互是基于骨架的动作识别的核心。近期基于图的方法由于固定的交互模式和不灵活的GCN共享权重，导致空间上下文建模能力较弱。为了解决上述问题，我们提出了多视角交互图网络（MV-IGNet），它能够以统一的方式构建、学习和推断多级空间骨架上下文，包括视角级（全局）、组级、关节级（局部）上下文。MV-IGNet利用不同的骨架拓扑作为多视角，协同生成互补的动作特征。对于每个视角，可分离参数图卷积（SPG-Conv）通过多个参数化图来丰富局部交互模式，提供了强大的图自适应能力以处理不规则骨架拓扑。我们还将骨架划分为若干组，然后通过上述SPG-Conv层分层捕获高级组上下文，包括组间和组内上下文。一个简单而有效的全局上下文自适应（GCA）模块通过学习输入相关的骨架拓扑来促进代表性特征提取。与主流工作相比，MV-IGNet易于实现，且模型尺寸更小，推理速度更快。实验结果表明，所提出的MV-IGNet在大规模基准数据集NTU-RGB+D和NTU-RGB+D 120上取得了令人印象深刻的性能。

## Abstract
—Capturing the interactions of human articulations lies in the center of skeleton-based action recognition. Recent graph-based methods are inherently limited in the weak spatial context modeling capability due to ﬁxed interaction pattern and inﬂexible shared weights of GCN. To address above problems, we propose the multi-view interactional graph network (MV-IGNet) which can construct, learn and infer multi-level spatial skeleton context, including view-level (global), group-level, joint-level (local) context, in a uniﬁed way. MV-IGNet leverages different skeleton topologies as multi-views to cooperatively generate complementary action features. For each view, separable parametric graph convolution (SPG-Conv) enables multiple parameterized graphs to enrich local interaction patterns, which provides strong graph-adaption ability to handle irregular skeleton topologies. We also partition the skeleton into several groups and then the higher-level group contexts including inter-group and intra-group, are hierarchically captured by above SPG-Conv layers. A simple yet effective global context adaption (GCA) module facilitates representative feature extraction by learning the input-dependent skeleton topologies. Compared to the mainstream works, MV-IGNet can be readily implemented while with smaller model size and faster inference. Experimental results show the proposed MV-IGNet achieves impressive performance on large-scale benchmarks: NTU-RGB+D and NTU-RGB+D 120.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

- **核心问题**：基于骨架的动作识别中，如何有效捕捉人体关节之间的**多级空间交互上下文**（关节级、组级、全局级）一直是关键挑战。现有的图卷积网络（GCN）方法存在两个根本缺陷：
  - **固定交互模式**：骨架拓扑结构（即关节之间的连接关系）是静态预定义的，无法根据动作自适应调整，导致信息流路径受限。
  - **不灵活的共享权重**：GCN 对所有关节或边使用相同的可学习权重，仅能表达单一的交互模式，缺乏多样性，无法充分刻画复杂动作中关节间的丰富依赖关系。
- **研究动机**：作者观察到，骨架数据的空间上下文存在多级语义：
  - **关节级上下文**：单关节与其邻居间的局部关系。
  - **组级上下文**：将关节划分为若干部位（如手臂、腿）后，组内和组间的交互。
  - **全局/视角级上下文**：不同骨架拓扑结构（例如物理连接图与其补图）提供对同一动作的互补描述，类似于“多视角”学习。
- **整体含义**：论文提出一个统一的框架——多视角交互图网络（MV-IGNet），旨在同时构建和学习上述三级上下文，用互补的骨架拓扑（多视角）协同生成丰富特征，克服 GCN 在表达能力与灵活性上的缺陷。

### 2. 论文提出的方法论

MV-IGNet 的核心由三大部分组成：**(i) 可分离参数图卷积（SPG-Conv）**、**(ii) 层次化上下文建模（SPG-pooling）**和 **(iii) 全局上下文自适应（GCA）模块**，并通过多视角集成增强鲁棒性。

- **可分离参数图卷积（SPG-Conv）**
  - 改变传统 GCN 中 $Y = \tilde{A} X W_{\text{gcn}}$ 的共享权重机制（$W_{\text{gcn}}$ 对所有节点相同）。
  - 为每条边 $(i,j)$ 赋予私有权重 $W_{i,j} \in \mathbb{R}^{C \times C'}$，使输出特征为：
    $$Y_i = \sum_{v_j \in \mathcal{N}_i} \frac{1}{z_{i,j}} X_j W_{i,j} = \sum_{j=1}^V \tilde{A}_{i,j} X_j W_{i,j}.$$
  - 为减少参数量和计算量，引入**深度可分离**变体：
    - **深度图卷积**：逐通道应用不同图核 $K_c \in \mathbb{R}^{V \times V}$：
      $$\hat{X}_{:,c} = (\tilde{A} \odot K_c) X_{:,c}, \quad c = 1,\dots,C.$$
    - **点卷积**：用 $1 \times 1$ 卷积扩展通道至 $C'$。
  - 参数量从 $\mathcal{O}(N_E \cdot C \cdot C')$ 降至 $\mathcal{O}(N_E \cdot C + C \cdot C')$，$N_E$ 为有效边数。
  - 优势：多可学习图核带来丰富的局部交互模式，并对不规则拓扑（如完全图、补图）具有强适应能力。

- **层次化上下文建模（SPG-pooling）**
  - 首先，将关节手动划分为 $U$ 个组（头、躯干、左臂、右臂、左腿、右腿），用池化矩阵 $A^P \in \mathbb{R}^{U \times V}$ 表示分组关系。
  - **组内上下文**：通过带有可学习池化核 $P_c$ 的深度可分离池化层实现：
    $$\hat{X}_{:,c} = (\tilde{A}^P \odot P_c) X_{:,c}.$$
  - 然后，不预设组间连接，而是给组特征输入一个完全图 $A^G = \mathbf{1}$，再用 SPG-Conv 自动学习组间交互。
  - 通过堆叠 SPG-Conv → SPG-pooling → SPG-Conv 层，形成**局部→组内→组间**的统一层次化提取。

- **全局上下文自适应（GCA）模块**
  - 目的：根据输入样本动态调整骨架拓扑，从而“选择”合适的交互边。
  - 与标准自注意力不同，GCA **不直接加权特征**，而是作用于 SPG-Conv 的权重上。
  - 给定输入 $X$，计算关节相关性：
    $$g(X_i, X_j) = \sigma(W_i^u X_i)^\top \sigma(W_j^f X_j),$$
    $$G_{i,j} = \frac{g(X_i, X_j)}{\sum_{j=1}^V g(X_i, X_j)}.$$
  - 将学习到的图 $G$ 与原始邻接矩阵 $\tilde{A}$ 元素乘得到“选通”图 $\hat{G} = A \odot G$，然后替换式中的 $\tilde{A}$：
    $$Y_i = \sum_{j} \hat{G}_{i,j} X_j W_{i,j}.$$
  - 这种设计避免了特征聚合后再卷积可能给私有权重带来的噪声，保证优化稳定。

- **多视角集成（MV-IGNet）**
  - 将物理连接图 $A_0$ 与其补图 $A_1 = 1 - A_0$ 作为两个“视图”（无公共边），分别训练两个 IGNet。
  - 在推理时，对两路 softmax 分数取平均融合。
  - 对 GCA 模块，搜索空间受限于各自的 $A_n$：$\hat{G}_n = A_n \odot G_n$，确保互补信息。

- **整体网络架构**：双流（position + motion），每流 6 个时空卷积块；前三块为 SPG-Conv，第 3 块为 GCA，第 4 块为 SPG-pooling，后两块为 GCA（组级）。（参数规模小，宽度系数 $a=1.0$ 时单流约 0.42M 参数）。

### 3. 实验设计

- **数据集与协议**：
  - **NTU-RGB+D**：约 56,000 个样本，60 类动作。评测协议：Cross-Subject (CS) 和 Cross-View (CV)。
  - **NTU-RGB+D 120**：扩大版，114,480 个样本，120 类。评测协议：Cross-Subject (CSub) 和 Cross-Setup (CSet)。
  - **Northwestern-UCLA**：1,494 个样本，10 类，多视角。固定训练/测试划分。

- **对比方法**：
  - 与基于 RNN 的方法：PA-LSTM、VA-LSTM、AGC-LSTM 等。
  - 与基于 CNN 的方法：HCN、Pose Evolution Map 等。
  - 与基于 GCN 的方法：ST-GCN、AS-GCN、2s-AGCN、DGNN 等。
  - 自定基线：ST-GCN*（双流+可分卷积）、SPGNet、HPGNet、IGNet、MV-HPGNet 等，逐级验证贡献。

- **评价指标**：Top‑1 准确率；同时记录参数量和单样本推理时间（ms）。

### 4. 资源与算力

- 论文未明确列出训练使用的 GPU 型号和总训练时长。
- 推理速度测试在单张 NVIDIA RTX 2080Ti、PyTorch 平台上进行。
- 训练配置：优化器 SGD，初始学习率 0.2，在第 40/80/100 epoch 衰减 0.1，总 120 epoch；批大小 NTU 数据集为 64，UCLA 为 24；Dropout 0.5。
- 结合模型超轻量的参数规模（a=1.0 时 IGNet 仅约 0.89M，MV-IGNet ~1.84M），训练成本相对较低，但缺乏具体卡时报告。

### 5. 实验数量与充分性

- **消融实验**设计了 6 个逐步递进的基线，系统剖析各模块贡献（见表 2）。
- 对 SPG-Conv 的性质进行了广泛验证：
  - 在不同图拓扑（物理、边、关节、完全）下测试 ST-GCN 与 SPGNet 的性能，证明 SPG-Conv 的强适应能力。
  - 对比不同宽度系数（a=0.5, 1.0, 1.5, 2.0），绘制参数量-准确率曲线（见图 7）。
- 针对 SPG-pooling：比较了不同插入位置（第 1~6 层）、组数 $U$、以及手工分组 vs 完全图学习（见表 4–6）。
- 针对 GCA：替换为非局部块进行对比（表 4），并分析在哪些层移除 GCA 的影响（表 7）。
- 针对多视图：对比单视图加宽、同图集成、不同图不同结构等，验证互补图而非简单模型集成带来的增益（表 8）。
- 在三个不同规模数据集上，与 10 余种当时先进方法进行全面对比（表 9–11）。
- **总体评估**：实验设计十分详实，覆盖了模块级、体系结构级、多视图策略的消融，公平性较高（同参数基准、相同训练配置），结果可信。

### 6. 论文的主要结论与发现

- SPG-Conv 以更少参数超越了 GCN，并能良好适应多种不规则图结构（如完全图、补图）。
- 层次化池化有效提取高语义组级特征，提升识别准确率并进一步减少计算量。
- GCA 模块通过权重选通而非特征聚合，成功学习输入相关的动态交互边。
- 多视图（互补骨架图）策略以极低额外成本带来稳定的性能增益（CS 上提升 1.1‑1.3 个百分点）。
- 最终 MV-IGNet 在 NTU-RGB+D、NTU-RGB+D 120 和 UCLA 上达到最优或极具竞争力的结果，同时模型尺寸和推理速度显著优于主流方法。

### 7. 优点

- **方法统一且层次化**：用同一 SPG-Conv 基本单元构建局部、组内、组间、全局上下文，架构简洁清晰。
- **高效参数设计**：SPG-Conv 通过可分离卷积大幅降低参数与计算量，单流模型仅约 0.4M 参数，推理速度 0.8‑1.6 ms/样本。
- **图自适应能力**：对非自然骨架拓扑（补图、完全图）表现鲁棒，使其易于与其他图构建策略结合。
- **多视角创新**：首次从图拓扑视角构建“多视图”，以零数据增强方式提供互补特征，通用性强。
- **GCA 的独特设计**：直接在卷积核上实施注意力，避免了私有权重与特征级注意力不兼容的问题。
- **实验系统全面**：消融研究非常扎实，各组件分析透彻。

### 8. 不足与局限

- **手工分组仍存在**：组级上下文的子结构划分依赖人工定义，没有端到端学习分组。
- **GCA 搜索空间仍需约束**：在完全图上直接执行 GCA 会导致过多的无关边，文中通过基于 $A_0$ 的 mask 约束解决，但这实质上仍引入了先验。
- **小数据集泛化**：在 UCLA 上 IGNet 未超越 HPGNet，归因于数据量不足，表明动态图学习对数据规模有较高要求。
- **未报告训练时长**：无法准确评估模型训练的绝对成本。
- **只关注空间上下文**：时间维度仍使用标准可分离卷积，时空交互的联合学习未深入探讨。
- **跨数据集/跨骨架结构的迁移能力**：实验全部基于 NTU/UCLA 的同质 Kinect 骨架（25 关节），未验证对其它骨架布局（如 17 关节 COCO 格式）的适应性。

（完）
