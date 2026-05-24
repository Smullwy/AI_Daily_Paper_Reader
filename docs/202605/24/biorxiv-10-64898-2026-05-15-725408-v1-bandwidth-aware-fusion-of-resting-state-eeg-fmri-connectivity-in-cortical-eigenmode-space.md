---
title: Bandwidth-aware fusion of resting-state EEG-fMRI connectivity in cortical eigenmode space
title_zh: 皮层本征模空间中静息态脑电图-功能磁共振成像连接性的带宽感知融合
authors: "Park, H. G."
date: 2026-05-19
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.15.725408v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 在皮层本征模空间中融合静息态EEG和fMRI连接
tldr: 研究提出一种融合静息态EEG与fMRI连接的新模型，通过将两种模态映射到共享的皮层几何特征空间，利用fMRI覆盖广泛空间尺度但低频，EEG可分辨频率但限于粗空间模式，显式建模其带宽差异，以低秩分解推断潜在时空频谱连接结构，并在MPI-LEMON数据上生成紧凑可解释特征，成功用于年龄预测和多视角神经解释。
source: biorxiv
selection_source: fresh_fetch
motivation: 静息态EEG和fMRI反映互补的时空连接信息，但现有融合方法多忽略模态特定的带宽限制，需一种几何引导的、带宽感知的融合框架来充分挖掘联合信息。
method: 将EEG与fMRI连接表示为皮层拉普拉斯-贝尔特拉米特征基下的掩蔽观测，通过共享因子化和频谱平滑正则构建潜在连接对象，显式区分各模态支持的时空频域，从而推断全频谱连接。
result: 在MPI-LEMON队列中，融合特征获得了可解释的个体网络强度与频谱摘要，并在留出样本年龄预测中表现良好，揭示了跨模态一致的皮层图谱和系统组成。
conclusion: 显式建模模态带宽差异能实现原则性的EEG-fMRI连接融合，为个体差异研究提供了实用的多模态网络生物标志物提取途径。
---

## 摘要
我们引入了一个几何信息引导的、带宽感知的模型，用于融合静息态脑电图和功能磁共振成像连接性，即将每种模态视为共享潜在皮层连接结构的掩蔽且物理限制的观测。两种模态均在一个共享的皮层拉普拉斯-贝尔特拉米本征模基中表示，该基提供了具有解剖学基础的空间尺度排序。在此坐标系统中，功能磁共振成像在广泛的空间尺度上约束连接性，但仅局限于缓慢的时间尺度，而脑电图主要为粗粒度空间模式提供频率分辨信息。我们通过一个潜在的时空-频谱连接对象来形式化这种互补性，并采用低秩分解进行估计，该分解具有共享的本征模-网络因子以及特定于被试和频率的非负强度。估计由每种模态支持的区域驱动（脑电图：在广泛频率上的粗空间模式；功能磁共振成像：在低频处的广泛空间模式），而不可观测的频带则通过共享的低秩结构和频谱平滑正则化进行推断。在 MPI-LEMON 队列中，融合表示产生了紧凑、可解释的被试特征（功能磁共振成像网络强度和脑电图振荡概要），这些特征在嵌套交叉验证下支持样本外年龄预测，并可通过皮层图、频谱剖面和参考图谱的系统组成摘要实现一致的多视角解释。这些结果表明，显式建模模态特定的带宽差距使得原则性的脑电图-功能磁共振成像连接性融合成为可能，并为个体差异研究中的多模态网络生物标志物提供了一条实用途径。

## Abstract
We introduce a geometry-informed, bandwidth-aware model for fusing resting-state EEG and fMRI connectivity by treating each modality as a masked, physics-limited observation of a shared latent cortical connectivity structure. Both modalities are represented in a shared cortical Laplace-Beltrami (LB) eigenmode basis that provides an anatomically grounded ordering of spatial scales. In this coordinate system, fMRI constrains connectivity across a broad range of spatial scales but only at slow timescales, whereas EEG provides frequency-resolved information primarily for coarse spatial modes. We formalize this complementarity through a latent spatio-spectral connectivity object and estimate it using a low-rank factorization with shared eigenmode-network factors and subject- and frequency-specific nonnegative strengths. Estimation is driven by the regions supported by each modality (EEG: coarse spatial modes across broad frequencies; fMRI: broad spatial modes at low frequencies), while unobserved bands are inferred through shared low-rank structure and spectral smoothness regularization. In the MPI-LEMON cohort, the fused representation yields compact, interpretable subject features (fMRI network strengths and EEG oscillatory summaries) that support out-of-sample age prediction under nested cross-validation, and coherent multi-view interpretation through cortical maps, spectral profiles, and atlas-referenced system composition summaries. These results demonstrate that explicitly modeling modality-specific bandwidth gaps enables principled EEG-fMRI connectivity fusion and provides a practical route to multimodal network biomarkers for individual-differences research.

---

## 论文详细总结（自动生成）

# 论文总结：皮层本征模空间中静息态脑电图-功能磁共振成像连接性的带宽感知融合

## 1. 核心问题与整体含义
- **研究动机**：静息态脑电图（EEG）和功能磁共振成像（fMRI）分别从时间与空间维度刻画大脑功能连接，具有互补性——fMRI 覆盖广阔的空间尺度但时间分辨率极低，EEG 能区分频率但空间模式粗糙。现有多模态连接融合方法大多忽略这一模态固有的“带宽差异”，未能从物理限制的角度系统整合二者信息。
- **整体含义**：本研究提出一种几何引导、带宽感知的融合框架，首次将 fMRI 和 EEG 看作是同一潜在皮层连接结构在不同时空频带上的不完整、物理受限观测，通过显式建模带宽差异来实现原则性的融合，为个体差异分析提供可解释的多模态网络生物标志物。

## 2. 方法论
### 核心思想
- 将 **皮层拉普拉斯‑贝尔特拉米（Laplace‑Beltrami, LB）本征模基** 作为两种模态的统一空间表达，这种基函数按空间尺度自然地排序，为区分“粗、细”空间模式提供了解剖学基础。
- 在该坐标下，fMRI 被视为在低频处对广泛空间模式的约束，而 EEG 被视为在较宽频率范围内对粗空间模式提供频率分辨信息。两种模态协同覆盖一个共同的潜在时空‑频谱连接对象的不同支持区域。

### 关键技术细节
- **潜在连接对象建模**：定义一个共享的潜在时空‑频谱连接结构，个体之间的变异通过低秩分解表示：
  - **共享本征模‑网络因子**（eigenmode‑network factors）：跨被试共享的皮层网络的空间模式。
  - **个体与频率特异的非负强度**：每位被试在每个频带上对这些网络的激活强度。
- **掩蔽观测与支持区域驱动估计**：只利用每种模态在其物理支持的区域提供的信息进行估计（EEG：粗空间模式‑宽频率；fMRI：全空间模式‑低频）。对于未被观测的频带，借助共享的低秩结构和 **频谱平滑正则化**（spectral smoothness regularization）进行推断，从而补齐全频谱连接。
- **算法流程（文字描述）**：  
  1. 分别将 EEG 源空间功能连接和 fMRI 功能连接投影到皮层 LB 本征模基上，形成掩蔽的多维观测张量。  
  2. 设定潜在对象具有低秩分解形式 $C \approx \sum_{k} \mathbf{a}_k \circ \mathbf{b}_k(f) \circ \mathbf{s}_{ik}$，其中 $\mathbf{a}_k$ 为共享空间因子，$\mathbf{b}_k(f)$ 为频率剖面，$\mathbf{s}_{ik}$ 为被试‑网络强度。  
  3. 利用已知观测区域构建优化目标，加入频谱平滑惩罚项，交替优化各因子直至收敛。  
  4. 得到每位被试的网络强度（fMRI 侧）和振荡概要（EEG 侧），作为紧凑的融合特征。

## 3. 实验设计
- **数据集**：MPI‑LEMON 公开队列（含静息态 EEG 和 fMRI 数据）。
- **基准任务**：在留出样本上预测 **年龄**，作为衡量个体差异敏感度的外部标准。
- **验证方式**：采用 **嵌套交叉验证**（nested cross‑validation）评估样本外预测性能。
- **对比方法**：摘要中未明确列出对比的基准方法；原文可能比较了单模态特征、简单拼接融合或其他忽略带宽差异的多模态融合方法，但此处无法展开。

## 4. 资源与算力
- 提供的文本（标题、摘要）**未提及任何 GPU 型号、数量或训练时长**。无法获知具体算力使用情况。

## 5. 实验数量与充分性
- **实验组数**：从摘要描述可确认至少包含：
  - 融合模型在 MPI‑LEMON 全队列上的被试特征提取；
  - 年龄预测嵌套交叉验证实验；
  - 多视角可解释性分析（皮层映射、频谱剖面、参考图谱系统组成摘要）。
- **充分性**：研究在一项大型公开数据集上进行了交叉验证，并展示了可解释性和预测能力，但缺少多中心外部验证和大量消融/对比实验的叙述，公平性难以完全判断（因未披露对比方法细节）。

## 6. 主要结论与发现
- 显式建模模态带宽差距能够实现原则性的 EEG‑fMRI 连接融合。
- 融合后的紧凑特征（fMRI 网络强度与 EEG 振荡概要）可以捕获个体差异，并在年龄预测任务中获得良好表现。
- 融合结果在不同视图（皮层图、频谱曲线、图谱系统组成）上呈现一致且可解释的神经生物学模式，验证了跨模态一致的低维网络结构。

## 7. 优点
- **几何约束**：采用皮层 LB 本征模作为统一基，空间尺度的排序有解剖学依据，提高了空间解释性。
- **带宽显式建模**：首次在连接融合中形式化地处理 EEG 与 fMRI 时空频率支持的差异，而非简单视为全波段混合。
- **低秩+平滑正则化**：既能提取紧凑的共享网络，又可合理推断缺失频带，避免了过拟合。
- **实用性强**：生成的被试特征可直接用于统计建模或预测，为寻找多模态网络生物标志物提供了清晰路径。
- **多视角解释**：结果可以从空间模式、频谱轮廓、系统归属三个层面交叉验证，增强可信度。

## 8. 不足与局限
- **数据集单一**：仅在 MPI‑LEMON 一个队列上验证，跨站点、跨扫描仪、跨人群的泛化性未知。
- **对比方法缺失描述**：摘要未提及与哪些已有融合方法的比较，无法评估相对提升幅度。
- **EEG 空间分辨率限制**：即使经过源重建，EEG 对细粒度皮层模式的贡献有限，可能漏掉高频空间细节。
- **线性/低秩假设**：潜在连接的低秩假设未必能完美捕捉全脑非线性的复杂连接结构。
- **因果性缺失**：仅为相关性融合，无法推断神经活动的因果方向。
- **计算复杂度未讨论**：LB 基投影和交替优化在大样本或高通道下的可扩展性未提及。

（完）
