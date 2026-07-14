---
title: White-Matter BOLD Encoding Beyond Marginal Connectivity
title_zh: 超越边际连接的白质BOLD编码
authors: "Li, M., Ding, Z., Gore, J. C."
date: 2026-07-13
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.08.737282v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 跨被试fMRI数据的多变量皮层编码
tldr: 传统fMRI研究多关注灰质而忽视白质BOLD信号，本研究利用多元皮层编码框架，基于81名HCP受试者的静息态数据，证明分布式皮层活动可可靠预测白质BOLD信号，且预测beta指纹与边缘功能连接在共享主干之外存在梯度分歧，该分歧轴反映了一种无法被边缘连接捕捉的、沿白质束解剖结构组织的白质功能耦合维度。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-08-737282-v1/fig-002.webp\", \"caption\": \"Figure 1. Cross-validated cortical encoding of WM BOLD activity. (a) Anatomical definition of cortical predictors and WM targets. Schaefer-400 cortical GM parcels are shown with distinct atlas colors, and the strict WM95 target mask is shown in red. (b) Ridge-encoding model schematic. For each WM voxel, time series from 400 cortical GM parcels were used as predictors in a ridge-regression model. The regularization parameter was selected using nested cross-validation, and prediction accuracy was evaluated on held-out data. (c) Group-mean voxel-wise cross-validated R² for the zero-lag 400- parcel encoding model, showing the spatial distribution of WM BOLD variance predicted from cortical GM activity. (d) Distribution of subject-level mean WM R² values. The red vertical line indicates the sample mean. (e) Within-subject comparison of prediction accuracy between the Schaefer-400 parcel model and a reduced 17-network model. Points and boxes show subject-level distributions, and grey lines indicate paired values from the same subject. (f) Circular-shift null validation. The histogram shows, for each subject, the fraction of WM voxels with q_null < 0.05; the red vertical line indicates the sample mean.\", \"page\": 13, \"index\": 2, \"width\": 793, \"height\": 665}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-08-737282-v1/fig-001.webp\", \"caption\": \"Figure 2. Ridge beta fingerprints recapitulate but diverge from marginal GM-WM functional connectivity. (a) Group-level correspondence between ridge beta fingerprints and marginal FC fingerprints, summarized by signed profile similarity, absolute profile similarity, 17-network composition similarity, and top-ROI overlap. (b) Subject-level distributions of the same beta-FC correspondence metrics, showing consistent similarity across individuals. (c) Split/session stability of raw beta and FC fingerprints. Points\", \"page\": 14, \"index\": 1, \"width\": 881, \"height\": 327}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-08-737282-v1/fig-005.webp\", \"caption\": \"Figure 3. Local prediction residuals reveal a beta-FC divergence axis beyond marginal functional connectivity. (a) Local z-scored cross-validated R² map, showing the spatial distribution of cortical-to-WM prediction accuracy. (b) Local z-scored FC RMS map, summarizing the magnitude of marginal GM-WM functional connectivity for each WM voxel. (c) R² residual after accounting for local FC magnitude, highlighting WM regions where encoding-based predictability exceeds or falls below that expected from marginal FC strength. (d) Subject-mean beta-FC G1 difference map, reflecting the spatial divergence between the dominant ridge beta gradient and the corresponding FC gradient. (e) FWER-significant signed residual clusters, summarized separately for negative and positive residual effects. (f) Voxel-wise density plot showing the association between local R² residuals and beta-FC G1 differences before nuisance control. The color scale indicates voxel count per bin. (g) Voxel-wise density plot showing the association between controlled R² residuals and controlled beta-FC G1 differences after nuisance adjustment. The color scale indicates voxel count per bin.\", \"page\": 16, \"index\": 5, \"width\": 814, \"height\": 538}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-08-737282-v1/fig-004.webp\", \"caption\": \"Figure 4. Spatial and signal-quality controls for the beta-FC divergence axis. (a) Distance from each WM voxel to cortical GM, used to assess potential GM contamination. (b) Distance from each WM voxel to the WM mask boundary, used to characterize proximity to mask edges and partial-volume-prone regions. (c) Temporal standard deviation map, summarizing local BOLD signal variability across WM voxels. (d) WM prevalence map, showing the proportion of subjects in which each voxel was classified as WM. (e) Effect of nuisance control on the spatial correspondence between the R² residual map and the beta-FC G1 difference map. Bars show the spatial correlation before and after adjustment for spatial\", \"page\": 17, \"index\": 4, \"width\": 864, \"height\": 475}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-08-737282-v1/fig-003.webp\", \"caption\": \"Figure 5. The beta-FC divergence axis organizes prediction residuals, cortical network contributions and WM tract anatomy. (a) Beta-FC G1 axis map used to order WM voxels into ten bins. Warm and cool colors indicate opposite ends of the divergence axis between ridge beta gradients and marginal FC gradients. (b) Prediction and connectivity structure across beta-FC G1 bins. Lines show mean z-scored R², z-scored FC RMS and R² residual values within each bin, illustrating how encoding accuracy, marginal FC magnitude and FC-adjusted prediction residuals vary along the axis. (c) Controlled residual profiles across beta-FC G1 bins. Raw FC residuals, nuisance-controlled residuals and zR² after adjustment for FC and spatial confounds are plotted to show that the residual organization persists after covariate control. (d) Cortical network contribution across beta-FC G1 bins. The heatmap shows the fractional contribution of each Yeo 17-network predictor group to the absolute change in prediction accuracy. (e) JHU tract composition across beta-FC G1 bins. The heatmap shows the fraction of voxels within each bin assigned to major WM tracts, linking the functional divergence axis to tract anatomy. (f) Bilateral organization of major maps. Bars show left-right mirror correlations for prediction, FC, residual and controlled maps, indicating the degree of hemispheric symmetry. (g) Conceptual model. The dominant GM-WM organization reflects a marginal FC backbone, whereas the beta-FC G1 axis reveals\", \"page\": 19, \"index\": 3, \"width\": 932, \"height\": 806}]"
motivation: 目前的白质功能分析主要依赖边缘功能连接，无法区分皮层系统间共享方差，难以揭示白质功能组织的全貌。
method: 使用严格白质掩膜和400个皮层分区的静息态时间序列，通过嵌套留一运行岭回归预测白质体素信号，并比较预测beta指纹与边缘连接指纹及其梯度差异。
result: 皮层活动能显著且可靠地预测白质BOLD动态，beta与边缘连接梯度存在可复现分歧，该分歧轴在控制多种混淆后仍稳健，且高分歧端富集于后丘脑/视辐射和后放射冠等纤维束。
conclusion: 多元皮层编码揭示了白质功能耦合中独立于边缘连接的纤维束组织维度，深化了对白质功能网络的理解。
---

## 摘要
功能磁共振成像研究传统上集中于灰质，而白质BOLD信号常被视为微弱或伪影。近期研究表明，白质BOLD波动包含可重复的功能信息，但多数灰质到白质的分析依赖于边际功能连接，这种方法无法将成对耦合与分布式皮层系统间的共享方差分离开。在此，我们使用多变量皮层编码框架，测试自发白质BOLD活动能否被分布式皮层灰质活动预测，以及这种预测结构是否能揭示超越边际连接的组织模式。来自81名人类连接组计划青年参与者的静息态fMRI数据，使用严格的白质掩模进行分析，该掩模与皮层预测变量无重叠。对每个白质体素，使用400个Schaefer皮层分区的时间序列，通过嵌套留一-run-out的岭回归预测留出的白质BOLD信号。皮层活动适度但可靠地预测了白质BOLD动态，在广泛的白质空间范围内展示出一致的交叉验证预测准确性。岭回归beta系数指纹强烈重现了边际功能连接指纹，表明存在共享的功能骨干，但两者的第一梯度出现了可重复的偏离。这一beta-FC分歧轴组织了FC调整后的预测残差，并在控制灰质邻近度、掩模边界距离、白质普遍性、时间信号变异性、空间坐标和空间自相关后仍保持稳健。高分歧端表现出相对较低的边际FC，但较高的FC调整后预测残差，并富集于后丘脑/视辐射和后侧脑室周围白质解剖结构。这些发现表明，多变量皮层编码揭示了一个仅凭成对连接无法捕捉的、沿纤维束组织的白质功能耦合维度。

## Abstract
Functional MRI studies have traditionally focused on gray matter, whereas white-matter BOLD signals have often been treated as weak or artifactual. Recent work suggests that white-matter BOLD fluctuations contain reproducible functional information, but most gray-to-white matter analyses rely on marginal functional connectivity, which cannot separate pairwise coupling from shared variance among distributed cortical systems. Here, we used a multivariate cortical encoding framework to test whether spontaneous white-matter BOLD activity can be predicted from distributed cortical gray-matter activity and whether this predictive structure reveals organization beyond marginal connectivity. Resting-state fMRI data from 81 Human Connectome Project young adult participants were analyzed using a strict white-matter mask with no overlap with cortical predictors. For each white-matter voxel, time series from 400 Schaefer cortical parcels were used to predict held-out white-matter BOLD signals with nested leave-one-run-out ridge regression. Cortical activity modestly but reliably predicted white-matter BOLD dynamics, demonstrating consistent cross-validated prediction accuracy across a broad spatial extent of the white matter. Ridge beta fingerprints strongly recapitulated marginal functional connectivity fingerprints, indicating a shared functional backbone, but their first gradients diverged reproducibly. This beta-FC divergence axis organized FC-adjusted prediction residuals and remained robust after controlling for gray-matter proximity, mask-boundary distance, white-matter prevalence, temporal signal variability, spatial coordinates, and spatial autocorrelation. The high-divergence end showed relatively low marginal FC but high FC-adjusted prediction residuals and was enriched for posterior thalamic/optic-radiation and posterior corona-radiata anatomy. These findings suggest that multivariate cortical encoding reveals a tract-organized dimension of white-matter functional coupling not captured by pairwise connectivity alone.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：高度相关。论文使用多元脊回归从皮层活动编码白质 BOLD 信号，属于“脑编码 (brain encoding)”方法学，与读者研究方向直接重叠。
- **启发与意义**：展示了如何将任务态编码模型迁移至静息态，并利用编码系数与功能连接的梯度分歧揭示隐藏的功能组织维度，为多视角约束和表征对齐提供了一种具体实现思路。
- **可借鉴点**：嵌套交叉验证的脊回归框架、使用梯度分析（BrainSpace）比较编码与连接指纹的差异、以及严格的空间/信号质量控制策略均可直接借鉴。
- **阅读建议**：建议重点阅读方法部分的交叉验证设计、beta-FC 分歧轴构建以及图 3-5 对分歧轴的解释，并思考如何将该分歧度量作为表征对齐的正则化项或评估指标。

## 1. 论文的核心问题与整体含义
- **核心问题**：传统灰质-白质功能分析依赖边际功能连接（marginal FC，即成对皮尔逊相关），无法分离分布式皮层系统间的共享方差，可能掩盖白质信号与皮层活动间的条件性预测关系。论文旨在验证是否可从分布式皮层活动预测白质 BOLD 信号，以及这种多元编码是否揭示了超出边际连接的功能组织。
- **整体含义**：白质 BOLD 活动并非仅被动反映皮层同步，而是包含可被多变量模型捕捉的“条件性耦合”维度，这一维度沿白质纤维束解剖结构组织，为理解全脑功能网络提供了补充视角。

## 2. 方法论
- **核心思想**：将每个白质体素的时间序列视为待预测目标，以 400 个 Schaefer 皮层分区的 BOLD 时间序列为预测变量，使用脊回归（ridge regression）建立多元编码模型，并通过交叉验证评估预测性能；随后比较脊回归系数指纹（beta fingerprint）与边际 FC 指纹，借助梯度映射（gradient mapping）提取低维分歧轴。
- **关键技术细节**：
  - **严格的空间分离**：使用组水平≥95%受试者一致的白质掩模，确保与皮层图谱及灰质无体素重叠；白质内 4 mm FWHM 掩码归一化高斯平滑。
  - **嵌套交叉验证脊回归**：外折按 run 留一（4 runs，每 run 1200 个时间点），内折用剩余 run 的留一交叉验证选择脊惩罚 λ；预测度量采用交叉验证 R² 及相关。
  - **损失函数**：$\hat{\beta} = \arg \min \left\{ \| \mathbf{y} - \mathbf{X}\beta \|_2^2 + \lambda \|\beta\|_2^2 \right\}$，解为 $\hat{\beta} = (\mathbf{X}^T \mathbf{X} + \lambda n_{train} \mathbf{I})^{-1} \mathbf{X}^T \mathbf{y}$，其中 λ 已按训练点数归一化。
  - **指纹对比与梯度分析**：计算每个体素的 400 维脊回归系数（共享 λ 重拟合）与 400 维边际 FC，分别使用 BrainSpace 扩散嵌入提取第一梯度，构建 β-FC G1 差异图，并检验其与 FC 校正后预测残差的关系。
  - **控制分析**：圆形移位零假设、空间/信号质量控制（GM 距离、边界距离、白质出现率、时间标准差、空间坐标）、空间块置换检验等。
- **算法流程概括**：
  1. 数据预处理（HCP minimal preprocessing + 生理/运动回归 + 0.01-0.1 Hz 带通滤波）。
  2. 构建皮层预测矩阵与白质目标矩阵。
  3. 嵌套留一 run 交叉验证的脊回归，得到体素级 R²。
  4. 用共享 λ 重拟合全套数据得到 β 指纹，同时计算边际 FC 指纹。
  5. 对 β 和 FC 指纹分别做梯度映射，得到 β-G1 和 FC-G1，相减得分歧轴。
  6. 计算 R² 残差（回归局部 R² 于局部 FC 强度），并与分歧轴关联。
  7. 多种控制与验证分析。

## 3. 实验设计
- **数据集**：Human Connectome Project Young Adult (HCP-Y) 81 名受试者（经生理记录、运动回归、预处理无错的筛选），每人 4 个静息态 run（15 分钟/run，TR=720 ms，2 mm 各向同性），共 324 runs。
- **Benchmark 与对比方法**：
  - 主要对比：脊回归编码模型与边际功能连接（FC）的指纹和梯度。
  - 对比了细粒度 400 分区模型与简化的 17 网络模型（Yeo 17 网络平均时间序列）。
  - 零位模型与含时间滞后的脊回归模型对比。
  - 圆形移位零假设用于显著性检验。
  - 还对比了回归 R² 残差与 β-FC G1 分歧图的空间对应关系。

## 4. 资源与算力
- 论文全篇未提及所用 GPU 型号、数量或具体训练/计算时长。数据处理主要基于 CPU 计算（如 SPM、自定义 Python 脚本），未给出计算资源细节。

## 5. 实验数量与充分性
- 实验数量大致可分为以下几组：
  1. 主预测模型及其敏感性分析（400 分区 vs 17 网络、零滞后 vs 时滞模型、圆形移位零假设）。
  2. β 指纹与 FC 指纹的相似性和梯度分析（指纹相关性、17 网络组成、top-ROI 重叠、梯度稳定性）。
  3. 预测残差分析（R² 残差与 β-FC 分歧轴的关系，经多重控制）。
  4. 空间/信号质量控制（GM 距离、边界距离、白质出现率、时间标准差、空间坐标、空间块置换）。
  5. 解剖与网络组织（按分歧轴分十等分箱分析 FC、残差、网络贡献、JHU 纤维束成分）。
  6. 验证与可重复性（跨 session 交叉验证、梯度跨 session 投影、半球对称分析、探索性行为预测）。
- **充分性与公平性**：实验设计较为系统全面，使用了多重零假设、严格控制空间混淆，并进行了可重复性验证；但行为预测分析结果不显著（q>0.05），仅作为探索。总体上实验充分，对比公平，结论有一定保守性。

## 6. 主要结论与发现
- 皮层活动可跨被试、跨 run 地可靠预测白质 BOLD 信号（组平均 R² ≈0.02，约 70% 体素 R²>0），细粒度皮层分区优于粗网络。
- 脊回归 β 指纹与边际 FC 指纹高度相似，共享功能骨干，但两者的第一梯度存在可重复的偏离（β-FC G1 分歧轴）。
- 该分歧轴与 FC 校正后的预测残差空间对齐：高分歧端具有较低的边际 FC 但较高的 FC 调整后预测残差，且富集于后丘脑放射、视放射、后放射冠等纤维束；低分歧端则富集于胼胝体、内囊等区域。
- 以上效应在控制灰质邻近度、边界距离、白质出现率、信号变异性、空间坐标及空间自相关后仍稳健，表明捕捉到的是白质内在的功能组织维度。

## 7. 优点
- **方法创新**：率先将多元脊编码模型系统应用于静息态白质，明确区分了边际耦合和条件性编码，并利用梯度分歧轴进行量化和解剖解释。
- **控制严格**：白质掩模与皮层严格无重叠，多种生理、运动、空间及自相关控制，增强了结果的可信度。
- **可解释性强**：将分析方法与已知纤维束解剖及皮层网络贡献关联，提供了神经生物学解读。
- **可重复性验证**：使用了跨 session 的交叉验证和梯度投影，结果稳健。

## 8. 不足与局限
- **绝对预测精度较低**：平均 R² 约 0.02，解释方差有限，可能受信噪比和线性模型限制。
- **β 系数非因果解释**：脊回归权重因预测变量共线性不能直接解释为独立皮层贡献，消融分析仅反映预测性能变化。
- **间接信号来源**：无法完全排除血管、代谢、残余生理噪声等非神经因素对白质 BOLD 的贡献。
- **样本与泛化局限**：仅使用 HCP 青年健康成人，未在年龄、疾病或其他扫描参数数据集上验证。
- **时滞效应简化**：虽然进行了时滞模型比较，但未精细估计区域性的血流动力学延迟。
- **纤维束解析度**：纤维束归属基于图谱重叠，未使用个体化弥散成像。

## 9. 研究价值与阅读建议（已前置）
见第一节。

（完）
