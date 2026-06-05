---
title: ICML26 Geometry-Guided Generative Representation for Functional Brain Graphs
title_zh: ICML26 几何引导的功能脑图生成式表征
authors: Subati Abulikemu; Tiago Azevedo; Michail Mamalakis; John Suckling
date: 2026-06-05
pdf: assets/local_pdfs/local-20260605-142429393687-icml26-geometry-guided-generative-representation-for-functional-brai.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 4.0 订阅评分
score_label: 订阅评分
evidence: 处理跨被试的功能性脑图，解码视觉刺激
tldr: 本研究针对功能性脑图分析中拓扑与谱性质分离表征的问题，提出几何引导的生成式图表示方法。通过图Transformer自编码器与潜扩散模型，将谱几何作为归纳偏置，学习密集脑图的低维潜在几何表示。该无监督表示能有效分离工作记忆状态并解码视觉刺激，结合神经动力学进一步提升性能，还可生成生物可信的合成脑图，为脑网络建模提供统一框架。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260605-142429393687-icml26-geometry-guided-generative-representation-for-functional-brai/fig-003.webp\", \"caption\": \"Figure 1: (A) Resting-state FC graph reconstruction comparing spectral, graph features, edge-only encodings and baseline. (B) Latent space color coded by spectral prominence (of association-sensory and visual-sensorimotor gradients) and global graph properties. (C) Task-fMRI FC reconstruction across different feature encodings. (D) UMAP showing cognitive load and stimulus type separation in zg.\", \"page\": 4, \"index\": 3, \"width\": 882, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260605-142429393687-icml26-geometry-guided-generative-representation-for-functional-brai/fig-005.webp\", \"caption\": \"Figure 2: (A) Latent space of resting-state FC colored by association-sensory gradient (ψAS) prominence and diffusion-learned distribution p(zg). (B) Example generation of low- and high-ψAS prominence spectral embeddings and connectivity matrices. (C) Distribution alignment of graph statistics (mean degree, degree variability, modularity) between test and generated sets.\", \"page\": 5, \"index\": 5, \"width\": 606, \"height\": 397}, {\"url\": \"assets/figures/local-pdf/local-20260605-142429393687-icml26-geometry-guided-generative-representation-for-functional-brai/fig-002.webp\", \"caption\": \"Figure 3: Diffusion-map embeddings (first two gradients). The ψAS continuously spans from transmodal association to unimodal sensory networks, while ψV S separates lower-order visual and somatosensory/motor systems.\", \"page\": 8, \"index\": 2, \"width\": 534, \"height\": 234}, {\"url\": \"assets/figures/local-pdf/local-20260605-142429393687-icml26-geometry-guided-generative-representation-for-functional-brai/fig-004.webp\", \"caption\": \"Figure 4: (A) Latent space embedding zg of FC graphs from seven cognitive tasks. (B) Confusion matrix for linear classifier on test set zg. (C) Radial integration– segregation origination in zg.\", \"page\": 9, \"index\": 4, \"width\": 696, \"height\": 431}, {\"url\": \"assets/figures/local-pdf/local-20260605-142429393687-icml26-geometry-guided-generative-representation-for-functional-brai/fig-001.webp\", \"caption\": \"Figure 5: (A) Linear noise scheduler showing the signal retention √ ᾱt across diffusion steps t, with the corresponding forward noising process in latent space. (B) The covariance structure of latent dimensions in the original training and generated sets.\", \"page\": 10, \"index\": 1, \"width\": 780, \"height\": 456}]"
motivation: 现有方法分离表征功能脑图的图论和谱性质，忽略其内在协变，亟需统一低维几何表示。
method: 提出谱几何引导的图Transformer自编码器结合潜扩散模型，学习功能脑图的几何感知潜在表示。
result: 无监督表示可分离认知状态与解码视觉刺激，且从扩散模型采样生成合理合成脑图。
conclusion: 几何引导生成模型有效捕捉脑图低维几何，实现状态解码与图生成，推动功能脑网络建模。
---

## 摘要
功能脑图通常用分离的图论或谱描述子来刻画，忽略了这些属性在脑和条件下如何协变和部分重叠。我们预期密集的、加权的功能连接图占据一个低维潜在几何，其中拓扑和谱结构都表现出梯度变化。在这里，我们通过一个具有潜在扩散的图Transformer自动编码器来估计这种统一的图表征，并实现了密集功能脑图的生成，其中谱几何提供了归纳偏置来指导学习。这种几何感知的潜在表征虽然是无监督的，但有意义地分离了工作记忆状态并解码了视觉刺激，通过结合神经动力学进一步提升了性能。从扩散建模的分布中，我们能够采样出生物学上合理且结构上有根据的合成密集图。

## Abstract
Functional brain graphs are often characterized with separate graph-theoretic or spectral descriptors, overlooking how these properties covary and partially overlap across brains and conditions. We anticipate that dense, weighted functional connectivity graphs occupy a low-dimensional latent geometry along which both topological and spectral structures display graded variations. Here, we estimated this unified graph representation and en- abled generation of dense functional brain graphs through a graph transformer autoencoder with latent diffusion, with spectral geometry providing an inductive bias to guide learning. This geometry-aware latent representation, although unsupervised, meaningfully separated working-memory states and decoded visual stimuli, with performance further enhanced by incorporating neural dynamics. From the diffusion modeled distribution, we were able to sample biologically plausible and structurally grounded synthetic dense graphs.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

- **关联方向**：该工作与 `fMRI representation`、`neural prior` 和 `brain decoding` 高度相关，提供了脑功能图几何感知的生成式表征，可直接服务于脑状态解码与编码建模。
- **启发与意义**：利用谱几何作为归纳偏置、将功能连接嵌入到低维连续几何空间的做法，为脑网络结构化先验建模提供了新范本，有望桥接脑图的拓扑描述与神经计算建模。
- **可借鉴点**：图 Transformer 编码器搭配记忆机制的交叉注意力解码器，以及潜扩散模型在低维表征上施加生成先验，可复用到多被试 fMRI 表征对齐、多条件约束表征等场景。
- **阅读建议**：建议重点关注谱几何引导的表征如何自然分离认知状态，并评估其作为脑编码先验或解码特征的可能性；若对生成模型感兴趣，可进一步研究其合成图在下游任务中的泛化表现。

## 1. 核心问题与研究动机

- **现有方法局限**：功能脑图通常被分别总结为图论指标（小世界性、模块度、中心性）或谱分解得到的低频梯度，忽略了拓扑与谱性质之间的内在协变关系。
- **核心假设**：密集、加权功能连接图存在一个低维潜在几何空间，沿着该空间的坐标方向，图的拓扑结构和谱结构呈现平滑、有序的梯度变化。
- **研究目标**：学习一个统一的、几何感知的图表征，使得在表征空间中的移动能反映图拓扑和谱梯度的结构化变化，同时具备生成能力以合成生物学可信的脑图。

## 2. 方法论

### 2.1 整体框架
提出一种基于图 Transformer 的自编码器架构，编码器将功能图（加权邻接矩阵 $W$ 和节点特征 $X$）压缩为图级潜在向量 $z_g\in\mathbb{R}^{d_g}$，解码器从 $z_g$ 重建全图 $( \hat{W}, \hat{X})$。在训练好的潜在空间上，再训练一个去噪扩散概率模型（DDPM）作为生成先验。

### 2.2 编码器：边条件自注意力
- 输入为节点初始嵌入 $h^{(0)} = XW_{\text{init}}$ 和边初始嵌入 $e^{(0)}_{ij} = W_{ij}E_{\text{init}}$。
- 每层自注意力中，查询 $Q_i$、键 $K_i$、值 $V_i$ 由节点状态产生，logits 注入边信息：
  $$
  \hat{e}_{ij} = \text{GELU}\!\big(\rho\big((Q_i+K_j)\odot(e_{ij}E_w)\big) + (e_{ij}E_b)\big)
  $$
  $$\alpha_{ij} = \operatorname{softmax}_j\!\big(\hat{e}_{ij}\cdot w_A/\sqrt{d_k}\big)$$
  其中 $\rho(x)=\operatorname{sign}(x)\sqrt{|x|+\epsilon}$ 稳定训练。值聚合时也加入边信息。
- 多层后得到节点表示 $h^{L_e}$，通过全局注意力池化得到 $s$，再线性投影得到 $z_g = W_\mu s + b_\mu$。

### 2.3 解码器：记忆机制与交叉注意力
- 引入可学习的记忆矩阵 $M\in\mathbb{R}^{N\times d_m}$，每行代表一个节点的先验特征。
- 解码器用 $z_g$ 作为路由信号查询记忆矩阵生成键 $K=MW_K$ 和值 $V=MW_V$，节点状态初始化为 $MW_{\text{init}}$。
- 交叉注意力中查询为 $Q_i = W_{q,z}z_g + W_{q,h}h_i$，由此融合全局信息与逐步更新的节点状态。
- 最终节点和边重建：
  $$
  \hat{X}_i = \phi_X([r_i; z_g]),\quad \hat{W}_{ij} = \phi_E([r_i; r_j; r_i\odot r_j; |r_i-r_j|; z_g])
  $$

### 2.4 谱几何引导的节点特征
使用扩散映射（Fokker–Planck 扩散近似）从每个 FC 矩阵中提取前若干个功能梯度 $\{\psi_k\}$ 作为节点特征，梯度内蕴的缓慢过渡模式为表征提供几何先验。同时与仅使用图论特征（度、聚类系数、参与系数）或仅边特征的设置对比。

### 2.5 潜扩散生成
在训练集自编码器得到的 $z_g$ 上训练 DDPM，损失为 $\| \epsilon - \epsilon_\theta(z_t, t)\|^2$。采样时从噪声出发逐步去噪得到 $z_0$，再通过冻结的解码器生成 FC 图 $(\hat{W}, \hat{X})$。

## 3. 实验设计

- **数据集**：人类连接组计划（HCP）静息态和任务态（工作记忆，WM）fMRI。1067 名被试，按 80/20 分割为训练（853）和测试（214），保持无被试重叠。每个被试的 WM 数据按 2 种认知负载 × 4 种视觉刺激类型分割为 8 个片段，各得一张 FC 矩阵。脑区划分采用 64 个节点。
- **对比设置**：
  - 节点特征选择：谱嵌入（d=10 或 30）、图论特征（度、聚类系数、参与系数）、仅边特征（无显式节点特征）。
  - 基线模型：图卷积自编码器（GAE）使用谱嵌入作为节点特征。
  - 衡量指标：边重建的均方误差（MSE）和 $R^2$；下游任务使用 SVM 在 $z_g$ 上分类认知负载（0-back vs 2-back）和视觉刺激类型（4 类）；生成图的质量通过全局图统计量（平均度、度标准差、模块度）与真图的 KS 检验和协方差对比。

## 4. 资源与算力

- 文中没有提及使用的 GPU 型号、数量、训练时长或任何算力信息。因此无法从现有内容评估计算资源消耗。

## 5. 实验数量与充分性

- 主要实验覆盖：静息态图重建（4 种特征配置 + 1 基线）、任务态图重建（不同维度与特征配置）、潜在空间几何与认知状态分离分析、生成图统计评估、附录中 7 种认知任务的泛化验证。
- 整体实验设计较为系统，多维度比较了节点特征编码的影响，且包含消融（有无谱几何先验、有无边/节点特征）。生成部分通过分布对比和示例给出了直观验证。但缺乏与其他图生成方法（如 VAE、GAN）的定量比较，以及生成图在外部任务上的实用性评估。

## 6. 主要结论与发现

- 谱嵌入作为节点特征在所有重建任务中均优于图论特征和仅边特征，且优于基线 GAE，表明谱几何提供了有效的归纳偏置。
- 无监督学得的 $z_g$ 能自然分离不同认知负载和视觉刺激类型，结合神经活动后分类精度进一步提升（负载分类 86%，AUC=0.93；刺激分类 73.9%/70.6%），说明表征具有功能意义。
- 扩散模型成功捕获 $z_g$ 的分布，采样生成的 FC 图在全局统计量上与真图无显著差异，且能呈现谱梯度（如联想‑感觉轴）上的结构变化。
- 在七种认知任务中，$z_g$ 展现径向的整合‑分离梯度，模块度、小世界性等指标随距中心距离增加而增大，谱梯度占据不同区域，形成功能‑几何双表征。

## 7. 优点

- 图 Transformer 编码器与记忆解码器的设计巧思，将全局信息和边条件充分融合，构建了紧凑的图级潜变量。
- 以扩散映射提取的谱梯度作为几何先验，为学习结构化的连续表征空间提供了直接且生物可解释的引导，优于传统离散图论特征。
- 在低维无监督表征中实现高精度的认知状态解码和刺激解码，证明了表征的神经信息含量。
- 潜扩散使得图生成可操作、可遍历，且生成的图保留了原图分布结构，具有数据增强和连接组约束建模的潜力。

## 8. 不足与局限

- 仅在单一数据集（HCP）和 64 节点分区上验证，跨数据集、跨分区大小的泛化性未检验。
- 未与其他生成式模型（如 GraphVAE、GraphGAN）或基于流的模型进行定量比较，扩散生成的优势论证不够充分。
- 生成图的评估仅依赖全局统计量对齐，未进行更深入的神经生物学有效性验证（如模块结构、hub 分布保真度）。
- 潜在空间虽给出几何解释，但未探究如何系统导航该空间以对应特定认知或疾病状态，应用边界尚待明确。

## 9. 研究价值与阅读建议（前文已详述）

（完）
