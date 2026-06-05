---
title: ICLR26 Topological Flow Matching
title_zh: ICLR26 拓扑流匹配
authors: Unknown
date: 2026-06-05
pdf: assets/local_pdfs/local-20260605-141830895878-iclr26-topological-flow-matching.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 7.0 订阅评分
score_label: 订阅评分
evidence: "拓扑流匹配捕捉脑图结构用于fMRI,实现多视图结构约束"
tldr: 针对标准流匹配忽视结构化数据拓扑特征的问题，论文提出拓扑流匹配。该方法将流匹配视为退化薛定谔桥问题，通过拉普拉斯派生漂移注入拓扑信息，在保留稳定无模拟训练和确定性路径的同时，适应图等非欧空间。该框架可即插即用，并在脑fMRI、交通流等复杂结构数据上验证了有效性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-006.webp\", \"caption\": \"Figure 1: Illustration of the Hodge Laplacian spectrum and its corresponding heat Gaussian process. Columns from the left: (1) sample from the normal distribution; (2) sample from the heat Gaussian process; (3) eigenfunction with zero eigenvalue; (4) eigenfunction with low frequency; (5) eigenfunction with high frequency. Top: a graph with node signals—low values shown in blue, high in red. Bottom: a 2-simplicial complex with edge signals—values proportional to arrow length.\", \"page\": 2, \"index\": 6, \"width\": 827, \"height\": 323}, {\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-008.webp\", \"caption\": \"Table 2: Mean 1-Wasserstein distance, ± 1 standard deviation, of CFM and TFM on real-world datasets from Yang (2025) compared against the best performing TSBM variant. We omit their GTSB result on ocean currents, since it assumes analytically known boundary distributions.\", \"page\": 8, \"index\": 8, \"width\": 826, \"height\": 538}, {\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-010.webp\", \"caption\": \"Figure 3: Left: Road network in the traffic flow experiment with a node signal. Right: Simplicial complex built from the road network, with triangles shown in green, and an edge signal.\", \"page\": 9, \"index\": 10, \"width\": 423, \"height\": 304}, {\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-007.webp\", \"caption\": \"Figure 6: Ocean experiment data. Top: Ocean mesh (subset). Middle: Initial sample. Bottom: Final sample.\", \"page\": 10, \"index\": 7, \"width\": 398, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-009.webp\", \"caption\": \"Figure 8: Standard deviation of the predicted distributions by the I-CFM, I-TFM, and I-TAN models in spectral coordinates. Left plot shows the results for coordinates corresponding to curl-free eigenvectors. Right plot shows the results for coordinates corresponding to divergence-free eigenvectors.\", \"page\": 19, \"index\": 9, \"width\": 810, \"height\": 266}, {\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-011.webp\", \"caption\": \"Figure 9: Standard deviation of the predicted distributions by the OT-CFM, OT-TFM, and OT-TAN models in spectral coordinates. Left plot shows the results for coordinates corresponding to curlfree eigenvectors. Right plot shows the results for coordinates corresponding to divergence-free eigenvectors.\", \"page\": 20, \"index\": 11, \"width\": 810, \"height\": 266}, {\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-012.webp\", \"caption\": \"Figure 10: True and predicted samples in the synthetic matching experiment on the triangulated torus.\", \"page\": 20, \"index\": 12, \"width\": 826, \"height\": 617}, {\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-002.webp\", \"caption\": \"Figure 20: Test performance of I-TFM and OT-TFM across a range of κ choices on the earthquake magnitude generation experiment over 5 independent runs. Bars show median value, boxes show interquartile range, and outliers are shown as circles.\", \"page\": 25, \"index\": 2, \"width\": 804, \"height\": 322}, {\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-003.webp\", \"caption\": \"Figure 21: Test performance of I-TFM and OT-TFM across a range of κ choices on the traffic generation experiment over 5 independent runs. Bars show median value, boxes show interquartile range, and outliers are shown as circles.\", \"page\": 25, \"index\": 3, \"width\": 795, \"height\": 323}, {\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-001.webp\", \"caption\": \"Figure 22: Test performance of I-TFM and OT-TFM across a range of κ choices on the brain fMRI matching experiment over 5 independent runs. Bars show median value, boxes show interquartile range, and outliers are shown as circles.\", \"page\": 25, \"index\": 1, \"width\": 804, \"height\": 323}, {\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-005.webp\", \"caption\": \"Figure 23: Test performance of I-TFM and OT-TFM across a range of κ choices on the single cell differentiation matching experiment over 5 independent runs. Bars show median value, boxes show interquartile range, and outliers are shown as circles.\", \"page\": 26, \"index\": 5, \"width\": 792, \"height\": 323}, {\"url\": \"assets/figures/local-pdf/local-20260605-141830895878-iclr26-topological-flow-matching/fig-004.webp\", \"caption\": \"Figure 24: Test performance of I-TFM and OT-TFM across a range of κ choices on the ocean current matching experiment over 5 independent runs. Bars show median value, boxes show interquartile range, and outliers are shown as circles.\", \"page\": 26, \"index\": 4, \"width\": 801, \"height\": 323}]"
motivation: 标准流匹配将结构化数据（如脑图fMRI）视为欧几里得点，丢失了重要的拓扑特征。
method: 将拓扑信息通过拉普拉斯算子导出的漂移项融入流匹配的参考过程，构造拓扑感知的生成框架。
result: 在脑fMRI、洋流、地震和交通流等多类结构数据集上，拓扑流匹配优于标准方法。
conclusion: 拓扑流匹配是一种即插即用的拓扑感知泛化，可提升结构化数据生成质量，应用广泛。
---

## 摘要
流匹配是一种强大的生成建模框架，因其简单性和强大的经验性能而受到重视。然而，其标准公式将结构化空间上的信号——如脑图上的fMRI数据——视为欧几里得空间中的点，忽略了其领域的丰富拓扑特征。为了解决这个问题，我们引入了拓扑流匹配，这是流匹配的一种拓扑感知推广。我们将流匹配解读为求解退化薛定谔桥问题的框架，并通过用拉普拉斯导出的漂移项增强参考过程来注入拓扑信息。这一原则性修改捕捉了基础领域的结构，同时保留了流匹配的理想特性：稳定、免模拟的目标和确定性样本路径。因此，我们的框架可以作为标准流匹配的直接替代品。我们在多种结构化数据集上展示了其有效性，包括脑功能磁共振成像、洋流、地震事件和交通流。

## Abstract
Flow matching is a powerful generative modeling framework, valued for its sim- plicity and strong empirical performance. However, its standard formulation treats signals on structured spaces—such as fMRI data on brain graphs—as points in Euclidean space, overlooking the rich topological features of their domains. To address this, we introduce topological flow matching, a topology-aware general- ization of flow matching. We interpret flow matching as a framework for solving a degenerate Schr¨odinger bridge problem and inject topological information by augmenting the reference process with a Laplacian-derived drift. This principled modification captures the structure of the underlying domain while preserving the desirable properties of flow matching: a stable, simulation-free objective and de- terministic sample paths. As a result, our framework serves as a drop-in replace- ment for standard flow matching. We demonstrate its effectiveness on diverse structured datasets, including brain fMRIs, ocean currents, seismic events, and traffic flows.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：弱相关。文章属于生成式建模方法研究，直接目标是提升结构化空间（如图、单纯复形）上信号的分布匹配，并非直接从事fMRI脑解码或神经表示学习。
- **启发与意义**：间接但重要的方法论启发：将空间/结构信息（脑图的拉普拉斯谱）作为“先验知识”显式注入学习过程，可用于约束脑解码或表示学习的流形，引导其在拓扑上与大脑功能区域对齐。
- **可借鉴点**：其构建“拓扑感知”概率路径的方法，为设计受大脑解剖/功能连接结构约束的神经编码/解码模型提供了一个具体范式。
- **阅读建议**：可重点参考其将拉普拉斯算子纳入参考过程平滑信号的技术方案，将其思想引入多视图约束下的fMRI表示学习中。

## 论文核心问题与整体含义
- **研究动机与背景**：标准流匹配在建模结构空间（如脑图上的fMRI、路网上的交通流）上的信号分布时，将信号视为欧氏空间中的点，完全忽略了领域空间的拓扑结构（如连接性、环路、孔洞）。
- **核心问题**：如何构建一种拓扑感知的流匹配框架，以保留标准流匹配（免模拟训练、确定性采样路径）优点的同时，有效捕捉并利用数据的底层结构特征，提升分布匹配的精度与保真度。

## 方法论
- **核心思想**：将流匹配解读为一个退化的薛定谔桥问题，在其参考过程中注入一个由领域拉普拉斯算子导出的漂移项，使生成过程从“拓扑无关”的欧氏直线变为“拓扑约束”的曲线。
- **关键技术与流程**：
  1. **拓扑参考过程**：定义扩散过程 $dX_t = H_t(L_k)X_t dt + \alpha_t dt + \sigma dW_t$，其中 $L_k$ 为图或单纯复形的霍奇拉普拉斯算子。论文重点采用 $H_t(L_k) = -\kappa L_k$，即热方程漂移。
  2. **条件控制与路径**：通过零噪声极限推导出确定性条件路径 $m^{x_0,x_1}_t$ 和条件向量场 $u^{x_0,x_1}_t$，其显式包含拉普拉斯特征值 $\lambda$ 的相关函数（如 $\sinh$ 函数），精确反映拓扑平滑效应。
  3. **损失函数与训练**：采用免模拟的条件流匹配损失函数，直接回归由端点 $x_0,x_1$ 确定性给出的目标向量场，训练高效且稳定。
  4. **耦合选取**：OT-TFM 在配对端点时求解一个由拓扑决定的特殊最优传输问题，其成本函数 $c(x_0, x_1)$ 与 $m_1(x_0)$ 和 $\tilde{\Sigma}_{1,1}^{-1}$ 相关，进一步嵌入了拓扑信息。
- **框架特点**：可直接作为标准流匹配的插件替换，无需在训练中模拟随机微分方程。

## 实验设计
- **数据集/场景**：
  - **生成任务**：全球地震震级（图信号）、交通流（2-单纯复形上边信号）。
  - **分布匹配任务**：脑fMRI（脑功能区域图节点信号）、单细胞分化（基因表达图节点信号）、洋流（海洋网格三角形上边信号）。
  - **图像生成**：CIFAR-10（规则网格上的节点信号）。
- **对比基准**：标准流匹配条件流匹配、拓扑薛定谔桥匹配的变体。
- **核心指标**：1-Wasserstein距离（主要）、2-Wasserstein距离、FID。

## 资源与算力
- 论文未明确报告所用GPU的型号、数量及具体训练总时长。仅描述了每个模型训练包含最多100个epoch，每轮使用25,600个样本，并结合早停技术。
- 使用残差网络、图神经网络和单纯神经网络作为骨干模型。

## 实验数量与充分性
- **实验丰富度**：较充分，涵盖了6个真实/合成数据集，包括节点、边信号及不同单纯复形；进行了生成和匹配两种任务范式下的评估。
- **消融/补充实验**：论文进行了全面的补充研究，包括：
  - 对比标准流匹配在标准坐标与谱坐标下的性能差异。
  - 比较拓扑信息通过“初始分布”注入的效果。
  - 探索关键超参数 $\kappa$ 的敏感性。
  - 对比拓扑感知参考过程的另一种设计形式。
- **公正性与客观性**：对比基准清晰且具有代表性，针对敏感超参数进行了分析，实验设定和流程描述可复现，结论具有客观性。

## 主要结论与发现
- 拓扑流匹配在存在复杂结构的信号分布匹配任务上（脑fMRI、地震、交通、洋流）性能显著优于标准流匹配和拓扑薛定谔桥匹配，尤其在Wasserstein距离上提升明显。
- 拓扑感知的热方程漂移有效平滑了非拓扑信号分量，同时保留了拓扑特征（如零特征值对应的信号）。
- 对于结构简单、拓扑特征不显著的域（如CIFAR-10图像），性能提升有限。

## 优点
- **方法论创新与原理性**：通过薛定谔桥视角，以可解释的方式成功将拓扑信息注入流匹配，而非工程性技巧。
- **实际友好性**：保留了标准流匹配的免模拟训练和确定性采样优势，可作为即插即用的替代模块。
- **实验设计全面**：覆盖了多种拓扑结构、任务形式和对比基准，实验分析细致，论证了方法的有效性及其边界条件。
- **可扩展性**：方法不仅限于图，自然地扩展到单纯复形乃至其他更复杂的拓扑或几何结构。

## 不足与局限
- **应用前提**：方法要求已知数据域的具体结构（如需要预先定义的图或单纯复形的拉普拉斯矩阵），对于仅作为点云出现或结构不明显的数据无法直接应用。
- **启发式超参数**：拓扑漂移的强度系数 $\kappa$ 仍需手动设定并调优，其最优性未有理论指导。
- **基于低频的平滑偏置**：使用热方程漂移本质上构成一个低频通滤波器，可能会在需要所有频率成分的任务中产生信息丢失，尽管实验未覆盖这类情况。
- **图像生成增益有限**：在CIFAR-10上的微小提升（且有高方差）暗示该方法在传统规则域生成任务上优势不明显，其价值高度依赖于数据域的拓扑复杂性。

（完）
