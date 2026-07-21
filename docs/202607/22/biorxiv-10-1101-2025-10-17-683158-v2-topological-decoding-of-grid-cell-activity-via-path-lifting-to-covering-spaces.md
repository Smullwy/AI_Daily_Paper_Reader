---
title: Topological decoding of grid cell activity via path lifting to covering spaces
title_zh: 通过路径提升至覆盖空间对网格细胞活动进行拓扑解码
authors: "Yao, Y. J., Yoon, I. H. R."
date: 2026-07-21
pdf: "https://www.biorxiv.org/content/10.1101/2025.10.17.683158v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 网格细胞群体活动的拓扑解码
tldr: 本文针对网格细胞神经活动在环面流形上的编码，提出一种基于拓扑的神经解码框架。通过拓扑数据分析提取环面坐标，利用路径提升技术重建物理空间轨迹，重建路径与原始路径相差一个仿射变换。该方法在连续吸引子网络模拟和实验记录上验证有效，能仅靠单个网格细胞模块实现局部轨迹重建，无需外部位置信息或训练数据，为空间导航提供了一种可能的计算机制。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683158-v2/fig-003.webp\", \"caption\": \"Figure 1. Constructing an internal representation of space from grid cell activity. A. The input data is grid cell activity collected while the mouse moves in an environment. Grid cell population activity is represented as a population vector P (t) evolving over time. B. Persistent cohomology indicates that the population vectors are organized on a torus. C. Each population vector P (t) is assigned toroidal coordinates (θtx, θ t y). Here, if the mouse is at location (x, y) at time t, we show the toroidal coordinates θtx (top) and θty (bottom) by color values over location (x, y). D. The toroidal coordinates form a path f on the grid cell torus. E. We finally lift f to a path f̃ in R2 that matches the subject’s movement up to an affine transformation.\", \"page\": 2, \"index\": 3, \"width\": 943, \"height\": 260}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683158-v2/fig-008.webp\", \"caption\": \"Figure 2. Lifting a discrete path Θ on the torus to a path Θ̃ in R2. A. Setup: given a discrete path Θ : {0, 1, . . . , T − 1} → S1 × S1 on the torus, and the goal is to construct a lifted path Θ̃ : {0, 1, . . . , T − 1} → R2 such that p ◦ Θ̃ = Θ, where p : R2 → S1 × S1 is a covering map. B. Algorithm. Base step: Θ̃(0) is placed in the tile closest to the origin (blue). Iterative step: Given Θ̃(t), the next lift Θ̃(t + 1) is determined by comparing the consecutive toroidal coordinates Θ(t) and Θ(t + 1) via Eq. 2. If they are similar (“Yes” branch), the underlying path (green) is assumed to not cross a torus edge and Θ̃(t + 1) is placed in the same tile as Θ̃(t). Otherwise (“No” branch), the underlying path (green) is assumed to cross at least one edge and Θ̃(t + 1) is placed in an adjacent tile, chosen to minimize |θ̃tx − θ̃t+1\", \"page\": 4, \"index\": 8, \"width\": 850, \"height\": 981}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683158-v2/fig-002.webp\", \"caption\": \"Figure 3. Illustration of path lifting on a simulated CAN data (56 × 44 grid cell network, T = 599, 999 time bins.). A. A simulated movement path, with a highlighted segment. B. Toroidal coordinates for each location on the map. The repeated values indicate that the map is large enough to require nontrivial lifting during path reconstruction. C. Enlarged view of the highlighted segment. The color indicates that the simulated mouse moves from dark to light. D. The toroidal coordinates corresponding to the path segment in panel C. E. The output of the reconstruction algorithm resembles the original path in panel C. F. The reconstructed path, post affine transformation, recovers the original movement path in panel C.\", \"page\": 6, \"index\": 2, \"width\": 708, \"height\": 419}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683158-v2/fig-001.webp\", \"caption\": \"Figure 4. Path lifting on CAN-simulated grid cell activity (G = 2, 464, T = 599, 999 time bins per simulation.) reconstructs the original movement path. A. Simulated movement trajectories in environments with 0, 1, and 2 holes. B. Toroidal coordinates for each location on the map. C. Reconstructed paths from the simulation of mouse movement on maps with 0, 1, and 2 holes reflect the topology of the maps. D. After optimal affine alignment, the reconstructed paths resemble the original movements in panel A. E. Reconstruction errors across 10 independent trials. For each environment, the error between simulated movement paths and reconstructed paths (teal) are compared against random baseline (orange), computed as the error between pairs of independently simulated trajectories in the same environment. The reconstruction errors are significantly smaller than the random baselines in all three environments.\", \"page\": 6, \"index\": 1, \"width\": 943, \"height\": 510}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683158-v2/fig-004.webp\", \"caption\": \"Figure 5. Example simulated grid cell activity with spontaneous firings that lead to low path reconstruction errors. (Top) Example activity trace from a CAN simulation. (Center) Simulated activity with additional spontaneous activity, generated with h = 0.4, p = 0.1% and σ = 50. The mean global reconstruction error for such noisy activity is 2.115% (see Table 1). (Bottom) Activity trace with additional spontaneous activity, generated with h = 0.4, p = 1% and σ = 10. The mean reconstruction error is 4.894% (see Table 1).\", \"page\": 7, \"index\": 4, \"width\": 521, \"height\": 367}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683158-v2/fig-007.webp\", \"caption\": \"Table 1. Average reconstruction errors (%) between the original trajectory and the reconstructed paths over 10 trials. Here, the maximum height of the spontaneous firing is fixed at h = 0.4. The rows represent the proportion of times during which a grid cell randomly fired, and the columns represent the variance σ of the noise added. An entry of N/A indicates that the method failed to compute toroidal coordinates in all 10 trials.\", \"page\": 8, \"index\": 7, \"width\": 931, \"height\": 238}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683158-v2/fig-006.webp\", \"caption\": \"Figure 6. Path reconstruction recovers one-dimensional environment from grid cell activity. Data are from mouse N2 (dataset “N2 200203 buildup track”; [44]) navigating a 320 cm virtual build-up track. 44 co-modular grid cells were identified. Firing rates were provided in 2cm spatial bins (160 bins per run, 441 total runs). A. Mouse position over time across 5 runs; each rising segment corresponds to one traversal of the track, after which the mouse is teleported to the start. A single run is highlighted in pink. B. The persistence diagram confirms that grid cells are organized on a torus: one connected component (H0), two one-dimensional cycles (H1), and one two-dimensional void (H2). C. Example path on the grid cell torus corresponding to a single run. For each time point t, the corresponding toroidal coordinates θx and θy are plotted. D. Toroidal coordinates from panel C visualized over position. Because the firing rate data is provided in 2cm spatial bins, the toroidal coordinates are also computed for each spatial bin. Each point on the plot corresponds to one spatial bin in a fixed run, plotted at its track position (x-axis) and spatial bin index (y-axis). Color encodes the toroidal coordinates θx (left) and θy(right). E. The reconstructed path lies close to a one-dimensional line. The red line indicates the line spanned by the first principal component (PC1) of PCA. F. Distribution of linearity scores (variance explained by PC1) across 441 runs; median = 98.8%.\", \"page\": 8, \"index\": 6, \"width\": 943, \"height\": 446}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683158-v2/fig-009.webp\", \"caption\": \"Figure 7. Reconstruction of local paths from two-dimensional experimental data [20] (rat R, module 1, day 2, open-field session; 111 co-modular grid cells ). A. The original trajectory of a rat exploring a 1.5m×1.5m open-field arena. B. The reconstructed global trajectory, which differs in overall shape from the original path. C. The persistence diagram indicates that the grid cells are organized on a torus. D. A visualization of the toroidal coordinates for each location. E. An example local path. F. The toroidal coordinates corresponding to panel E involve non-trivial liftings. G. A highlight of the reconstructed segment in panel B (left), the reconstructed path, before affine transformation (center), and after affine transformation (right). H - J. Another example local path and its reconstruction. K. Distribution of local reconstruction errors: pairs of original local paths and reconstructed paths (left) show significantly smaller errors than baseline consisting of mismatched local paths (right) (t(2014) = −14.6, p < 0.0001).\", \"page\": 9, \"index\": 9, \"width\": 943, \"height\": 518}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683158-v2/fig-005.webp\", \"caption\": \"Figure 8. Two possible errors in path reconstruction arising from sparsity of time points. A. The first type of error occurs when two consecutive toroidal coordinates are lifted to two distinct tiles when they should be lifted to a single tile. (Left) Original movement path. Circles indicate the location at select time points. (Center) The corresponding toroidal coordinates. (Right) The algorithm lifts the toroidal coordinates Θ(0), . . . ,Θ(3) to the blue tile. Because θ3y and θ4y are dissimilar, Θ̃(4) is in a different tile, shown in yellow. The resulting reconstructed path (orange) deviates from the original path (green). B. The second type of error occurs when two consecutive toroidal coordinates are lifted to the same tile when they should be lifted to different tiles. Here, the toroidal coordinates θ3y and θ4y have a small enough difference so the algorithm lifts Θ(3) and Θ(4) to the same tile. Again, the reconstructed path (orange) deviates from the original (green).\", \"page\": 10, \"index\": 5, \"width\": 943, \"height\": 214}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683158-v2/fig-010.webp\", \"caption\": \"Figure 9. Selection of the proximity parameter ε for CAN-simulated data. A. Histogram of maximal coordinate differences max{|θtx − θt+1\", \"page\": 16, \"index\": 10, \"width\": 943, \"height\": 306}]"
motivation: 网格细胞的周期性编码使其在环面流形上的表征与物理空间的关系不明确，需要一种方法从神经活动中提取空间信息。
method: 使用拓扑数据分析从网格细胞群体活动中提取环面坐标，再通过路径提升（path-lifting）到覆盖空间来重建物理轨迹。
result: 从单个网格细胞模块中可靠重建局部轨迹，重建路径与原始路径相差一个仿射变换，无需位置信息或训练数据。
conclusion: 网格细胞模块包含足够信息进行路径整合，拓扑解码可能是空间导航的一种计算机制。
---

## 摘要
高维神经活动通常存在于一个低维子空间中，称为神经流形。内侧内嗅皮层的网格细胞提供了一种周期性的空间编码，该编码围绕一个环形流形组织，且独立于空间环境。由于其编码的周期性，大脑如何利用环形流形来理解其在空间环境中的状态尚不清楚。我们引入了一个新的框架，利用拓扑学从网格细胞活动中解码空间信息。我们的方法使用拓扑数据分析从网格细胞群体活动中提取环形坐标，并采用路径提升来重建物理空间中的轨迹。重建的路径与原始路径相差一个仿射变换。我们在连续吸引子网络模拟和网格细胞的实验记录上验证了该方法，结果表明，无需外部位置信息或训练数据，即可从单个网格细胞模块可靠地重建局部轨迹。这些结果表明，同模块的网格细胞包含足够的信息用于路径整合，并暗示了一种潜在的空间导航计算机制。

## Abstract
High-dimensional neural activity often reside in a low-dimensional subspace, referred to as neural manifolds. Grid cells in the medial entorhinal cortex provide a periodic spatial code that are organized near a toroidal manifold, independent of the spatial environment. Due to the periodic nature of its code, it is unclear how the brain utilizes the toroidal manifold to understand its state in a spatial environment. We introduce a novel framework that decodes spatial information from grid cell activity using topology. Our approach uses topological data analysis to extract toroidal coordinates from grid cell population activity and employs path-lifting to reconstruct trajectories in physical space. The reconstructed paths differ from the original by an affine transformation. We validated the method on both continuous attractor network simulations and experimental recordings of grid cells, demonstrating that local trajectories can be reliably reconstructed from a single grid cell module without external position information or training data. These results suggest that co-modular grid cells contain sufficient information for path integration and suggest a potential computational mechanism for spatial navigation.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
*   **关联方向**：与读者“脑解码”方向强相关，本文提供了一种基于神经流形拓扑结构的无监督解码新范式。同时，利用神经活动内在几何先验的思想，也与“neural prior”和“representation alignment”存在交叉。
*   **启发与意义**：证明可以从周期性神经种群活动中，仅凭拓扑结构恢复外部空间信息，为大脑如何从歧义编码中实现路径整合提供了计算解释。这颠覆了依赖外部标签或跨模块信息的常规解码思路。
*   **可借鉴点**：持续上同调提取流形坐标、路径提升重建连续信号的技术，可直接应用于分析fmri或电生理记录中的其他周期性认知表征（如头朝向）。其评估重建精度的局部与全局误差解耦方法，也值得在类似任务中参考。
*   **阅读建议**：建议重点关注方法论的第2节，尤其是路径提升算法的归纳步骤和邻近参数选择策略。此工作与主流深度学习解码差异显著，适合寻求“由结构到功能”新切入点的研究者精读。

## 1. 论文的核心问题与整体含义
*   **核心问题**：内侧内嗅皮层网格细胞的活动构成一个环形神经流形。由于该流形的周期性，同一活动模式对应物理空间中多个位置，形成编码歧义。本研究旨在回答：能否仅利用单个网格细胞模块的群体活动，恢复出其在物理空间中的运动轨迹？
*   **整体含义**：将网格细胞的周期性编码视为一个拓扑“覆盖空间”问题，通过“路径提升”这一纯拓扑操作化解编码歧义，无需结合外部位置信息或多模块的尺度组合即可实现路径整合。这揭示了一种全新的空间信息神经解码计算机制。

## 2. 论文提出的方法论
*   **核心思想**：将神经群体活动向量视为一个从时间/空间到环形流形（S¹×S¹）的路径，再利用覆盖映射将这条路径“提升”到平面（R²）上，从而恢复物理轨迹。整个过程由三个拓扑工具驱动：持续性上同调（验证环形结构）、环形坐标（参数化流形上的点）和路径提升（解决周期性歧义重建轨迹）。
*   **关键技术细节**：
    *   **流形验证与参数化**：通过计算群体活动向量间相异度的Vietoris-Rips复形的持续性上同调，确认其具有环形拓扑。随后，利用上同调生成元将每个时间点的群体向量映射为环形坐标$\Theta(t) = (\theta_t^x, \theta_t^y) \in [0, 2\pi)^2$。
    *   **路径提升算法**：目标是为离散环形坐标序列$\Theta(t)$寻找其在R²的提升$\widetilde{\Theta}(t)$，使得$p \circ \widetilde{\Theta} = \Theta$，其中覆盖映射$p$将平铺的平行四边形折叠成环形。算法通过定义$\widetilde{\Theta}(t) = (\theta_t^x + 2\pi M_t, \; \theta_t^y + 2\pi N_t)$，归纳确定整数$M_t$和$N_t$（即“瓦片”索引），具体步骤为：
        1.  **基础步**：令$\widetilde{\Theta}(0) = \Theta(0)$，即$(M_0, N_0) = (0,0)$。
        2.  **迭代步**：对于从$t$到$t+1$的转换，计算坐标差值。若$|\theta_t^x - \theta_{t+1}^x| \le \epsilon$且$|\theta_t^y - \theta_{t+1}^y| \le \epsilon$，则认为路径未跨越环形边界，保持$M_{t+1} = M_t, N_{t+1} = N_t$。否则，在$M \in \{M_t, M_t \pm 1\}$和$N \in \{N_t, N_t \pm 1\}$中，选择使提升后两点间距离$|\widetilde{\theta}_t^x - (\theta_{t+1}^x + 2\pi M)|$和$|\widetilde{\theta}_t^y - (\theta_{t+1}^y + 2\pi N)|$最小的组合。
    *   **邻近参数$\epsilon$选择**：$\epsilon$被用作筛选可能发生边界跨越的候选点，实际决策由距离最小化完成。$\epsilon$从所有时间点坐标差极大值的分布中自动选取，确保绝大多数潜在的边界跨越事件被纳入考量。
*   **评估指标**：重建路径与原始轨迹经最优仿射变换对齐后，计算逐点平均欧氏距离，并按环境大小归一化，定义重建误差。误差分为全局和局部两个尺度。

## 3. 实验设计
*   **数据集与场景**：
    *   **模拟数据**：在边长为100的方形环境中模拟随机行走轨迹，环境复杂度分为无洞、单洞、双洞三种。轨迹长度25000，通过连续吸引子网络（CAN）生成$56 \times 44 = 2464$个网格细胞、约60万个时间步的模拟活动。
    *   **一维实验数据**：来自公开数据集（Wen等人，2024），小鼠在320厘米虚拟直线跑道上的441次奔跑。分析了记录到的44个同模块网格细胞，数据形式为2厘米空间分箱的发放率。
    *   **二维实验数据**：来自公开数据集（Gardner等人，2022），大鼠在1.5米×1.5米方形开放场地中自由觅食21.1分钟。分析了记录到的111个同模块网格细胞，数据形式为10毫秒时间分箱的发放率估计。
*   **基准与对比方法**：
    *   **随机基准**：将原始轨迹与另一独立生成的轨迹之间的对齐误差作为基线。
    *   **消融模型**：对比了不进行路径提升（直接使用环形坐标）和随机提升（在邻居瓦片中随机选择）的重建误差，以此证明本文归纳式提升算法的必要性。
    *   **多尺度评估**：通过对比全局重建误差与局部重建误差，评估算法在不同空间尺度上的保真度及其累积误差特性。

## 4. 资源与算力
*   文中明确指出，所有计算均在单核CPU上完成，未使用GPU。处理器型号为Intel Xeon Gold 6326（2.90 GHz）。
*   对于一个包含2464个神经元、约60万时间点的模拟数据集，完整流程耗时约12分钟。对于包含111个神经元、约12.7万时间点的二维实验数据，耗时不足1分钟。可见该方法计算资源需求低，在个人电脑上即可运行。

## 5. 实验数量与充分性
*   **实验组数**：模拟环境（3种）×10次重复=30组主实验；噪声鲁棒性测试覆盖了5个噪声占比（p）和4个噪声方差（σ）共20种参数组合，每组重复10次；一维数据覆盖全部441次奔跑；二维数据覆盖63个局部路径段，并生成了1,953对错误匹配段作为基线。
*   **充分性与公平性**：实验类型丰富，包括基础验证、噪声鲁棒性、多环境泛化性、真实数据应用和消融分析。评估指标清晰，并与随机基准及消融模型对比，保证了客观性。但实验中缺少与现有时序解码或深度学习方法（如LSTM、CVI等）的直接性能比较，这是充分性上的一个主要局限。

## 6. 论文的主要结论与发现
*   提出并验证了一种基于拓扑的纯解码算法，能在不依赖任何外部位置信息或额外训练的前提下，从单个网格细胞模块的群体活动中重建运动轨迹。
*   在模拟数据中，重建路径能精确恢复原始路径的全局拓扑（如孔洞）和局部几何，重建误差远低于随机基线。
*   在一维实验数据中，算法成功将环形路径提升为一条高度线性的轨迹（PCA第一主成分解释方差中位数达98.8%），完美还原了直线跑道的空间结构。
*   在二维实验数据中，局部轨迹（20秒窗口）能被精确重建，误差显著低于错误配对基线，证明了算法在真实神经数据上的有效性。
*   结果表明，同模块网格细胞的神经活动携带了足够的空间信息以实现路径整合，而“路径提升”这一拓扑操作可能是大脑执行该功能的一种潜在计算机制。

## 7. 优点
*   **方法学新颖**：首次将纯数学中的“路径提升”概念应用于神经解码，提供了一种从周期性表征中提取绝对信息的全新计算框架。
*   **无监督且高效**：解码过程无需任何关于位置、速度或网格相位的先验知识，无需训练过程，是一种彻底的“无数据驱动”解码方法。
*   **理论优雅**：将棘手的周期性歧义问题，优雅地建模为覆盖空间下的路径提升，其理论根基扎实。
*   **评估体系完善**：区分了全局和局部重建误差，并通过噪声和消融实验进行了多维度验证，分析深入且有说服力。

## 8. 不足与局限
*   **对时间采样密度的强依赖**：算法假设连续两个采样点间最多只能跨越一个环形边界。若运动速度过快或采样过稀，此假设失效，会导致路径提升错误累积，造成大尺度形状扭曲。
*   **全局重建的不稳定性**：核心理念在二维全局路径重建上未能完美奏效，结果表现出扭曲（图7B），作者将此归因于噪声和采样稀疏，但揭示了方法的一个内在脆弱性。
*   **仿射变换歧义**：重建路径与真实路径相差一个未知的仿射变换。大脑如何在实际导航中解决此歧义，方法本身未提供解释，需引入其他细胞（如位置细胞）或模块信息。
*   **缺乏与主流解码方法的横向比较**：实验仅与随机基线和消融模型对比，缺少与基于卡尔曼滤波、循环神经网络等解码方法的性能比较，未在计算精度和效率上建立标杆。
*   **环形坐标计算的前置条件**：方法有效的前提是能准确识别并参数化神经流形，这对数据量和信噪比有要求，在更自然的稀疏行为数据下可能受限。

## 9. 结论
本研究通过创造性地引入路径提升这一拓扑工具，成功从单个网格细胞模块的周期性活动中解码出了空间轨迹，为大脑的路径整合机制提供了一个优雅的“由结构到功能”的计算模型。虽然存在对时间分辨率和数据质量的依赖性等局限，但其方法论的新颖性、理论的严谨性以及在多种场景下的有效验证，为理解大脑空间导航和开发新型类脑导航算法开辟了一个极具潜力的新方向。

（完）
