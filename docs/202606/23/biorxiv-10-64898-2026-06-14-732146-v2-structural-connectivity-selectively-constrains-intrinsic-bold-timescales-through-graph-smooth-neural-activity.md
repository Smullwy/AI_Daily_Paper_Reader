---
title: Structural Connectivity Selectively Constrains Intrinsic BOLD Timescales through Graph-Smooth Neural Activity
title_zh: 结构连接通过图平滑神经活动选择性约束内在 BOLD 时间尺度
authors: "Bashirgonbadi, A., salehi, m., Soltanian-Zadeh, H."
date: 2026-06-19
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.14.732146v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 结构连接约束fMRI BOLD时间尺度
tldr: 本研究运用图信号处理框架，将静息态fMRI信号分解为结构耦合和去耦成分，分析内在时间尺度与结构网络的关系。基于人类连接组计划数据发现，结构耦合信号的时间尺度与解剖连接强度呈稳健正相关，而去耦成分关联微弱，且该效应取决于真实结构网络拓扑。这一发现揭示了结构连接通过图谱平滑神经活动选择性约束内在BOLD时间尺度的机制。
source: biorxiv
selection_source: fresh_fetch
motivation: 旨在阐明结构连接如何约束大脑信号的时间统计特性，并识别驱动结构与时间尺度关联的关键功能成分。
method: 采用图信号处理将BOLD活动分解为低频（结构耦合）和高频（去耦）成分，计算内在时间尺度并与结构连接强度进行关联分析。
result: 结构耦合信号的内在时间尺度与结构连接强度在群体和个体水平均呈显著正相关，而去耦信号关联弱，且这种依赖关系依赖于经验结构网络组织。
conclusion: 网络拓扑通过图谱平滑活动选择性地约束神经活动的时间尺度，为理解大脑结构-功能关系提供了新视角。
---

## 摘要
结构连接定义了支持大规模脑动态的网络架构，然而该网络如何约束定义在其上的信号的时间统计特性仍不甚明了。先前工作报道了静息态 fMRI 的内在时间尺度与结构连接强度之间的关联，但尚不清楚哪些信号成分主要驱动这种关系。在此，我们采用图信号处理框架来分析网络化脑信号的内在时间特性。将区域血氧水平依赖（BOLD）活动建模为支撑在结构连接组上的图信号，并通过图谱滤波将其分解为低频（结构耦合）和高频（结构解耦）成分。利用来自人类连接组计划 100 名不相关受试者的扩散 MRI 衍生结构连接和静息态 fMRI，在控制区域体积的情况下，使用相对低频功率量化内在时间尺度并将其与节点级别的结构连接强度相关联。我们显示，从结构耦合信号导出的内在时间尺度在群体和个体间水平上均表现出与结构连接强度稳健的正相关，而结构解耦信号则显示出显著较弱的耦合。值得注意的是，缓慢的结构解耦动态优先表达于高阶联合皮层。图谱零模型进一步证明这些效应关键取决于结构网络的经验组织。总之，这些结果确立了结构-时间尺度耦合的图谱解释，表明网络拓扑选择性约束了图平滑神经活动的时间统计特性。

作者概要网络神经科学的一个基本问题是大脑的结构连接如何塑造功能活动的时间动态。先前研究表明，具有更强解剖连接的大脑区域往往表现出更慢的内在活动波动，但导致这种关系的功能信号成分仍不清楚。在这里，我们将图信号处理与内在 BOLD 时间尺度分析相结合，将静息态活动分解为结构耦合和结构解耦成分。利用人类连接组计划的多模态神经影像数据，我们表明结构连接强度与内在时间尺度之间的关联主要由结构耦合的、图平滑的活动驱动。相比之下，结构解耦动态对解剖连接的依赖性要弱得多，尽管跨模态联合皮层保留了选择性结构影响。这些发现为解剖网络如何塑造人脑的时间处理提供了新的见解，并暗示内在时间尺度通过结构约束和功能动态之间的不同交互模式而涌现。

## Abstract
Structural connectivity defines the network architecture supporting large-scale brain dynamics, yet how this network constrains the temporal statistics of signals defined on it remains poorly understood. Prior work has reported associations between intrinsic timescales of resting-state fMRI and structural connectivity strength, but it is unclear which signal components primarily drive this relationship. Here, we adopt a graph signal processing framework to analyze intrinsic temporal properties of networked brain signals. Regional Blood Oxygenation Level Dependent (BOLD) activity is modeled as a graph signal supported on the structural connectome and decomposed via graph spectral filtering into low-frequency (structure-coupled) and high-frequency (structure-decoupled) components. Using diffusion MRI-derived structural connectivity and resting-state fMRI from 100 unrelated participants of the Human Connectome Project, intrinsic timescales are quantified using relatively low-frequency power and related to node-wise structural connectivity strength while controlling for regional volume. We show that intrinsic timescales derived from structure-coupled signals exhibit robust positive associations with structural connectivity strength at both group and inter-individual levels, whereas structure-decoupled signals display substantially weaker coupling. Notably, slow structure-decoupled dynamics are preferentially expressed in higher-order association cortex. Graph-spectral null models further demonstrate that these effects critically depend on the empirical organization of the structural network. Together, these results establish a graph-spectral interpretation of structure-timescale coupling, showing that network topology selectively constrains the temporal statistics of graph-smooth neural activity.

Author SummaryA fundamental question in network neuroscience is how the brains structural connectivity shapes the temporal dynamics of functional activity. Previous studies have shown that brain regions with stronger anatomical connectivity tend to exhibit slower intrinsic activity fluctuations, but the functional signal components responsible for this relationship remain unclear. Here, we combine graph signal processing with analyses of intrinsic BOLD timescales to separate resting-state activity into structure-coupled and structure-decoupled components. Using multimodal neuroimaging data from the Human Connectome Project, we show that the association between structural connectivity strength and intrinsic timescales is primarily driven by structure-coupled, graph-smooth activity. In contrast, structure-decoupled dynamics exhibit substantially weaker dependence on anatomical connectivity, although transmodal association cortex retains selective structural influences. These findings provide new insight into how anatomical networks shape temporal processing in the human brain and suggest that intrinsic timescales emerge through distinct modes of interaction between structural constraints and functional dynamics.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与“brain decoding”、“neural prior”、“fMRI representation”、“multi-view constraint”、“representation alignment”均强相关，因它从结构连接图出发对fMRI信号进行谱分解，显式构建结构耦合与去耦的表征空间。
- **启发与意义**：图信号处理可作为一种神经先验（neural prior），约束fMRI表征的对齐（representation alignment），为多视角学习（multi-view constraint）提供可解释的分解手段。
- **可借鉴点**：可直接借鉴其图谱滤波分解BOLD信号的流程，将结构连接的图谱空间作为fMRI表征的约束嵌入解码或编码模型。
- **阅读建议**：重点阅读方法部分（GSP方法论、信号分解、时间尺度计算）及实验结果，思考如何将结构耦合/去耦成分纳入你现有的脑解码或多模态对齐框架。

## 1. 论文的核心问题与整体含义
- **研究动机**：大脑的结构连接如何约束功能动态的时间统计特性（内在时间尺度）尚不清楚；先前研究发现解剖连接强度与BOLD信号的内在时间尺度相关，但驱动这种关系的功能成分未明。
- **核心问题**：分解BOLD信号中哪些成分（结构耦合 vs. 结构解耦）主要承载结构连接强度—时间尺度之间的关联，以及网络拓扑是否选择性约束图平滑的神经活动。
- **整体含义**：揭示结构连接通过图平滑神经活动选择性约束内在时间尺度，为理解结构–功能耦合提供图谱解释。

## 2. 论文提出的方法论
- **核心思想**：将大脑建模为图（节点为脑区，边为结构连接权重），功能活动视为定义在图上的信号，利用图信号处理（GSP）将BOLD信号分解为低频（graph低频 = 结构耦合）和高频（graph高频 = 结构解耦）成分，再分别估计内在时间尺度并与节点结构连接强度关联。
- **关键技术细节与公式**：
  - 图构建：加权无向图 $G = (\nu, A)$，$A$ 中的元素 $A_{i,j}$ 为基于扩散追踪的纤维束数量。
  - 图拉普拉斯矩阵：$L = D - A$，$D$ 为度矩阵。
  - 图傅里叶变换（GFT）：对信号 $\mathbf{x} \in \mathbb{R}^N$，变换为 $\hat{\mathbf{x}} = V^\top \mathbf{x}$，其中 $L = V\Lambda V^\top$，$V$ 为特征向量矩阵，$\Lambda$ 为特征值对角阵。
  - 谱分解：根据特征值（频率）将信号分割为低频成分 $\mathbf{x}_C$（耦合）和高频成分 $\mathbf{x}_D$（解耦），采用中值分割或滤波。
  - 时间尺度估计：对每个成分的时间序列计算相对低频功率（RLFP，$<0.14$ Hz 功率占比）作为内在时间尺度的指标。
  - 关联分析：使用偏 Spearman 相关（控制区域体积），在组水平和个体水平上评估结构连接强度（节点度和/或流线总数）与 RLFP 之间的相关性。

## 3. 实验设计
- **数据集**：人类连接组计划（HCP）100 名不相关健康被试，包含静息态 fMRI（1200 时间点）和扩散 MRI。
- **图谱划分**：使用 Glasser 360 脑区模板，以纤维束数量为边权重，构建组水平结构连接组。
- **基准对比**：
  - 结构耦合（low-pass） vs. 结构解耦（high-pass）信号的时间尺度与结构连接强度的关联强度对比。
  - 跨模态联合皮层（transmodal） vs. 单模态皮层（unimodal）在解耦成分上的关联差异。
  - 零模型检验：随机化图傅里叶基（保持特征值谱）生成零分布，与经验关联比较显著性。

## 4. 资源与算力
- 文中未明确提及 GPU 型号、数量、训练时长等算力细节。仅说明使用 HCP 预处理流水线、MRtrix3 等进行数据处理，代码公开于 GitHub。算力需求未量化。

## 5. 实验数量与充分性
- 组水平分析 1 个（总体结构连接强度 vs. RLFP，耦合与解耦对比）。
- 个体水平分析：对每名被试分别计算耦合/解耦的偏相关，然后进行组内配对检验（100 次相关计算， Wilcoxon signed-rank test），并报告效应量。
- 网络分层分析：分别计算跨模态与单模态皮层的解耦成分关联，并进行 Fisher Z 检验。
- 零模型检验：构建随机化图基的零分布，评估经验关联的统计显著性（耦合与解耦各自检验）。
- 共计主要实验不少于 4 组，覆盖组水平、个体一致性、层级特异性和统计验证，实验设计合理、对比公平，较为充分。

## 6. 论文的主要结论与发现
- 结构耦合（低频）信号的内在时间尺度（RLFP）与区域结构连接强度呈显著正相关，组水平 $r=0.49$，且个体间高度一致。
- 结构解耦（高频）信号的对应相关显著减弱，两者差异显著（Fisher Z = 4.86, $p = 1.16\times10^{-6}$）。
- 跨模态联合皮层的解耦成分仍保留选择性结构约束（其相关显著强于单模态皮层），表明结构对解耦动态的影响呈层级特异。
- 图谱零模型证实经验结构连接组的拓扑组织对上述效应至关重要，并非随机谱效应。
- 整体结论：网络拓扑通过图平滑神经活动选择性约束内在 BOLD 时间尺度。

## 7. 优点
- 将图信号处理与时域时间尺度分析结合，创新性地分离了结构耦合与解耦成分。
- 多层级验证（组水平、个体水平、皮层层级、零模型），统计严谨。
- 利用大规模公开数据集（HCP），可重复性高。
- 清晰揭示了结构–时间尺度关系的信号成分特异性。

## 8. 不足与局限
- 仅采用相对低频功率（RLFP）作为时间尺度指标，可能忽略其他时间动态特征（如自相关衰减率等）。
- 组水平结构连接组为平均值，忽略个体结构网络差异；低频/高频分割凭经验中值，缺乏自适应标准。
- 只关注静息态，未探讨任务状态下结构–时间尺度耦合的变化，可推广性有限。
- 未直接分析认知能力关联，且未与其他脑解码或表示对齐方法对比。

## 9. 研究价值与阅读建议（已在第一节详述）

（完）
