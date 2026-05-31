---
title: NeurIPS25 Orthogonal Contrastive Learning for Multi-Representation fMRI Analysis
title_zh: NeurIPS25 面向多表征fMRI分析的正交对比学习
authors: Unknown
date: 2026-05-31
pdf: assets/local_pdfs/local-20260531-202232367557-neurips25-orthogonal-contrastive-learning-for-multi-representation-fmri-analysis.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 使用正交对比学习对齐跨被试神经响应
tldr: 针对任务态fMRI低信噪比、高维度、小样本及多站点整合难题，提出正交对比学习（OCL）框架，通过双编码器、QR分解、局部敏感哈希和Transformer实现多受试者神经响应对齐，无需统一时间序列；经无监督预训练后，在多个基准上显著提升表示质量与分类精度。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260531-202232367557-neurips25-orthogonal-contrastive-learning-for-multi-representation-fmri-analysis/fig-003.webp\", \"caption\": \"Figure 1: The Proposed Orthogonal Contrastive Learning (OCL)\", \"page\": 4, \"index\": 3, \"width\": 808, \"height\": 454}, {\"url\": \"assets/figures/local-pdf/local-20260531-202232367557-neurips25-orthogonal-contrastive-learning-for-multi-representation-fmri-analysis/fig-001.webp\", \"caption\": \"Table 1: The fMRI datasets\", \"page\": 6, \"index\": 1, \"width\": 786, \"height\": 233}, {\"url\": \"assets/figures/local-pdf/local-20260531-202232367557-neurips25-orthogonal-contrastive-learning-for-multi-representation-fmri-analysis/fig-002.webp\", \"caption\": \"Figure 3: Classification analysis on movie stimuli. Potted are mean accuracies.\", \"page\": 8, \"index\": 2, \"width\": 803, \"height\": 359}]"
motivation: 任务态fMRI面临信噪比低、样本少、多站点集成难等挑战，现有方法需复杂预处理。
method: OCL采用在线-目标双编码器，结合QR分解正交特征提取、局部敏感哈希签名、位置编码和Transformer，并通过对比损失对齐刺激响应。
result: 在多受试者和多站点fMRI基准测试中，OCL的表示质量和下游分类准确率均超越现有最优方法。
conclusion: OCL无需统一时间序列长度，成功实现高效跨受试者/站点神经响应对齐，具有实用价值。
---

## 摘要
基于任务的功能磁共振成像（fMRI）为理解人类认知提供了宝贵见解，但面临着信噪比低、维度高、样本量有限和数据采集成本高等关键障碍，当跨被试或跨站点整合数据集时，这些障碍会被放大。本文提出了正交对比学习（OCL），这是一个统一的多表征框架，用于多被试fMRI分析，能够在不需要时间预处理或跨被试/站点统一时间序列长度的情况下对齐神经响应。OCL使用两个相同的编码器：在线网络通过对比损失进行训练，将相同刺激的响应拉近，将不同刺激的响应推远；目标网络的权重通过指数移动平均跟踪在线网络以稳定学习。每个OCL网络层结合了用于正交特征提取的QR分解、用于产生紧凑的特定于被试的特征签名的局部敏感哈希（LSH）、用于将时间结构与空间特征一起嵌入的位置编码，以及用于生成判别性、与刺激对齐的嵌入的Transformer编码器。我们通过在一个无监督预训练阶段中使用类似fMRI的合成数据进一步增强了OCL，并展示了用于多站点研究的迁移学习工作流程。在多被试和多站点fMRI基准数据集上的广泛实验中，OCL在表征质量和下游分类准确性方面均始终优于最先进的对齐和分析方法。

## Abstract
Task-based functional magnetic resonance imaging (fMRI) provides invaluable insights into human cognition but faces critical hurdles—low signal-to-noise ratio, high dimensionality, limited sample sizes, and costly data acquisition—that are amplified when integrating datasets across subjects or sites. This paper introduces orthogonal contrastive learning (OCL), a unified multi-representation framework for multi-subject fMRI analysis that aligns neural responses without requiring tem- poral preprocessing or uniform time-series lengths across subjects or sites. OCL employs two identical encoders: an online network trained with a contrastive loss that pulls together same-stimulus responses and pushes apart different-stimulus responses, and a target network whose weights track the online network via expo- nential moving average to stabilize learning. Each OCL network layer combines QR decomposition for orthogonal feature extraction, locality-sensitive hashing (LSH) to produce compact subject-specific signatures, positional encoding to em- bed temporal structure alongside spatial features, and a transformer encoder to generate discriminative, stimulus-aligned embeddings. We further enhance OCL with an unsupervised pretraining stage on fMRI-like synthetic data and demonstrate a transfer-learning workflow for multi-site studies. Across extensive experiments on multi-subject and multi-site fMRI benchmarks, OCL consistently outperforms state-of-the-art alignment and analysis methods in both representation quality and downstream classification accuracy.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与“brain decoding / fMRI representation / representation alignment / multi-view constraint”高度相关，直接回答了如何跨被试、跨站点对齐神经表征以提升解码性能。
- **启发与意义**：通过正交对比学习将空间解剖对齐、哈希签名、时序位置编码和Transformer注意力统一在一个框架中，为无统一时序预处理的多被试对齐提供了新思路，可用于脑解码和编码模型的主干网络。
- **可借鉴点**：QR分解用于正交特征提取、LSH生成被试特异签名、EMA双编码器结构以及合成fMRI数据预训练策略，均可复用到其他脑成像模态或多视图学习任务中。
- **阅读建议**：建议重点关注OCL层级结构设计以及对比损失公式（§3），并结合实验部分（§4）的多站点与时空未对齐场景评估其鲁棒性；若对脑解码应用感兴趣，可进一步考察其在电影刺激和自然范式下的表现。

## 1. 论文的核心问题与整体含义
- 任务态fMRI数据存在信噪比低、维度极高、样本量小、采集成本高昂等固有挑战，在跨被试、跨站点整合时，这些问题会被进一步放大（如扫描仪差异、采集协议差异、被试间变异等）。
- 现有方法（如超对齐、共享响应模型、典型相关分析等）通常要求时间序列对齐、长度一致，或需要进行复杂的时间预处理，难以灵活应对现实世界中多站点、异质时间序列的数据。
- 本文提出**正交对比学习（OCL）**，目标是在**不做时间预处理、不要求统一时间序列长度**的前提下，将多被试、多站点的神经响应映射到一个共享表征空间中，使得同一刺激的响应靠近，不同刺激的响应远离，最终提升下游分类/解码任务的性能。

## 2. 论文提出的方法论
### 2.1 核心思想
- 将每个被试视为一个“视图”，利用双编码器结构（**在线网络 + 目标网络**）结合对比学习，强制学习刺激不变、被试无关的表征。
- 在每个OCL层中，通过四个紧密集成的组件对原始神经活动进行逐步抽象：QR分解（正交化）、局部敏感哈希（被试签名压缩）、位置编码（时序结构保留）、Transformer编码器（全局依赖建模与判别性嵌入生成）。

### 2.2 关键技术与算法流程
1. **输入与标准化**  
   对于每个被试 $s$，神经响应矩阵 $X_s \in \mathbb{R}^{T_s \times V}$（$T_s$ 为时间点，$V$ 为体素数），假设每列已标准化为 $N(0,I)$，且对应相同的解剖坐标。
2. **QR分解与截断**  
   对 $X_s$ 进行薄QR分解 $X_s = Q_{\text{full},s} R_{\text{full},s}$，保留前 $d$ 维：  
   - $Q_s \in \mathbb{R}^{T_s \times d}$（正交时间模式）  
   - $R_s \in \mathbb{R}^{d \times V}$（上三角权重）  
   通过截断至 $d$ 维，保证所有被试输出的维度统一为 $d$（不大于所有被试秩的最小值）。
3. **时间零填充与掩码**  
   将所有被试的 $Q_s$ 零填充到统一最大长度 $T = \max_s T_s$，并生成掩码向量 $m_s$ 标记真实时间点。
4. **局部敏感哈希（LSH）签名**  
   将 $R_s$ 的上三角非零元素向量化为 $\phi_s$，利用p-稳定分布随机投影和哈希函数：
   $$
   \ell_s = \lfloor \frac{\langle a, \phi_s \rangle + b}{w} \rfloor
   $$
   产生标量哈希值，再通过线性MLP映射为被试特异签名 $s_s \in \mathbb{R}^d$。  
   **性质保证**：相似 $\phi$ 的碰撞概率更高（引理1）。
5. **位置编码与时序融合**  
   将每个时间点的 $Q_s$ 行与签名 $s_s$ 拼接，得到 $C_s \in \mathbb{R}^{T \times 2d}$；加入正弦位置编码 $E$ 得到 $P_s = C_s + E$；再经过层归一化。
6. **Transformer编码**  
   归一化后的 $P_s$ 与掩码 $m_s$ 一并送入标准Transformer编码器，输出当前层的隐藏表示 $H_{n,s}$。堆叠 $N$ 层可得到最终被试表征 $Z_s \in \mathbb{R}^{T_s \times d}$。
7. **对比损失**  
   对于被试 $s$，定义OCL损失（公式2）：
   $$
   L_{\text{OCL}}(Z_s,y_s) = -\frac{1}{T_s} \sum_{i=1}^{T_s} \log \frac{\sum_{j,\; y_{s,j}=y_{s,i}}^{j\neq i} \exp(\langle z_{s,i},z_{s,j}\rangle / \tau)}{\sum_k \exp(\langle z_{s,i},z_{s,k}\rangle / \tau)} + \lambda \; \frac{1}{T_s^2} \sum_{i,j: y_{s,j}\neq y_{s,i}} \log(1+\exp(\langle z_{s,i},z_{s,j}\rangle / \tau - \mu))
   $$
   同时拉近同类嵌入、推远异类嵌入（温度 $\tau$，间隔 $\mu$，权重 $\lambda$）。
8. **双编码器更新**  
   在线网络通过梯度下降优化上述损失，目标网络 $\tilde{\theta}$ 按指数移动平均更新：
   $$
   \tilde{\theta} \leftarrow \frac{1}{\psi} \theta + (1 - \frac{1}{\psi}) \tilde{\theta}
   $$
   其中 $\psi$ 为总迭代次数。
9. **预训练与迁移学习**  
   - **无监督预训练**：利用合成数据（随机基矩阵经 $k$ 类分布采样，并经随机正交旋转生成多个视图）预训练OCL，使编码器学会消除任意正交变换和特定于视图的变化（引理2保证碰撞概率一致）。  
   - **多站点迁移**：使用各站点独立预训练的 $\tilde{\theta}_b$ 取平均得到 $\tilde{\theta}_{\text{sites}}$，冻结后统一投影跨站点数据，再训练下游分类器。

## 3. 实验设计
### 3.1 数据集与场景
论文使用了10个公开fMRI数据集（表1），覆盖简单认知任务（CMU语义任务、DS232视觉任务）、自然主义电影观看（Forrest、Raiders）以及多站点同质任务（A~F共6个站点数据）。所有数据经统一预处理（MNI152配准，4mm各向同性，全脑ROI约19742体素）。

### 3.2 比较方法
- **单站点/被试对齐**：FastSRM、ShIndICA、HyperHMM、DHA、DeepGeoCCA、MindEye2、MindAligner（共7种）。
- **多站点分析**：SSTL、DeepSSTL、XG-GNN、MindEye2、MindAligner（共5种）。
- OCL自身包含**零样本基模型 OCLzero**（仅预训练不微调）和完整**OCL**。

### 3.3 实验设置
- 采用留一被试嵌套交叉验证，外循环留出一被试测试，内循环留出一被试验证调参。
- 所有方法最后均训练ν-SVM进行分类，潜在空间大小对比方法通过网格搜索选最优（OCL固定256维）。
- OCL的超参（$\tau, \mu, \lambda, \eta, w$等）在验证集上网格搜索确定。

## 4. 资源与算力
- 实验在两台PC上进行，每台配备**2块NVIDIA RTX 4060 Ti（16GB显存）**，CPU分别为AMD EPYC 7551P（64核）和Threadripper 2990WX（64核），内存256GB/128GB，网络连接为2×40GbE。
- OCL模型包含$N=32$层、嵌入维度$d=256$、16头注意力Transformer，预训练使用了2百万合成矩阵（$T=2000, V=19742$），训练（含预训练）最多1000迭代并带早停。
- 对于具体的微调时长、单次实验耗时等未进一步详细量化，但提供了足够的硬件配置信息供复现评估。

## 5. 实验数量与充分性
- **实验数量巨大**：  
  - 图2：两个数据集、时间对齐/未对齐两种条件，与7个方法比较，共28个配对t检验，全部显著。
  - 图3：两个电影数据集，每个数据集分别测试7种体素分辨率和4种时间长度，与7个方法比较，共计392个配对t检验，全部显著。
  - 图4：多站点共进行4组对比（A↔B, C↔D, E↔F及多站点配对），每组对比5个基线方法，共20个配对t检验，全部显著。
- **充分性与公平性**：实验覆盖了简单任务和自然刺激、单站点与多站点、时间对齐与未对齐、不同空间/时间分辨率等多种条件；对比方法既包括经典功能对齐方法，也包括最新的自监督对比学习方法；超参数均通过验证集网格搜索公平调优；统计显著性通过严格的配对t检验报告。

## 6. 主要结论与发现
- OCL在**所有单站点、多站点、时间对齐/未对齐、电影刺激解码**任务中均取得了最优的分类准确率，且提升具有统计显著性。
- 传统功能对齐方法在时间未对齐数据上性能严重下降，而对比学习类方法（包括OCL）能保持稳定，这得益于其灵活的非线性映射而非固定模板。
- 预训练策略（OCLzero）已能提供较强基线，微调后进一步大幅提升，表明合成数据预训练对真实脑数据有效。
- 多站点实验表明，无需微调，仅通过冻结聚合的目标编码器即可实现有效的跨站点泛化，OCL的跨站点表现远超其他方法。

## 7. 优点
- **无需时间预处理**：彻底规避了传统对齐方法对统一时间序列长度和时间点一一对应的依赖。
- **层级架构精巧**：QR正交化、LSH被试签名、位置编码、Transformer四者结合，从信号去相关、低维压缩、时序建模到全局注意力形成完整流水线。
- **双编码器+EMA**：借鉴BYOL风格稳定训练，防止表征坍缩。
- **强预训练策略**：合成数据构造方式（随机旋转视图）与OCL的QR分解形成理论配合，并提供良好初始化。
- **实验广泛且透明**：覆盖多类数据集和多种基线，公开代码，实验设置详细，统计检验严格。

## 8. 不足与局限
- **计算复杂度高**：双网络与32层Transformer使训练和微调对计算资源要求远超传统方法，作者也指出扩展到大体素空间需更大GPU集群。
- **域偏移敏感性**：在极端跨站点或跨被试差异下，性能可能下降，文中未针对此进行严格消融。
- **数据依赖性**：依赖大规模、标注良好的多站点数据集，小样本或弱标注场景实用性受限。
- **可解释性不足**：尽管提供了QR基和注意力图等初步手段，但深度学习模型在神经影像中的全面可解释性仍欠缺。
- **未覆盖其他模态**：实验仅限fMRI，未评估EEG/MEG等，虽然理论扩展提及但无实证。

## 9. （无，已整合至开头）
（完）
