---
title: NeurIPS25 Orthogonal Contrastive Learning for Multi-Representation fMRI Analysis
title_zh: NeurIPS25 面向多表征fMRI分析的正交对比学习
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-203251048208-neurips25-orthogonal-contrastive-learning-for-multi-representation-f.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 提出OCL框架用于跨被试fMRI表征对齐，无需时序预处理。
tldr: 针对任务态fMRI数据的高噪声、高维、小样本及跨站点整合难题，本文提出正交对比学习(OCL)框架，通过双编码器对比学习、QR分解、局部敏感哈希和Transformer实现多受试者刺激对齐表征，无需时间预处理，并结合无监督预训练与迁移学习，在多个基准上超越现有方法。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-203251048208-neurips25-orthogonal-contrastive-learning-for-multi-representation-f/fig-001.webp\", \"caption\": \"\", \"page\": 4, \"index\": 1, \"width\": 612, \"height\": 612}, {\"url\": \"assets/figures/local-pdf/local-20260606-203251048208-neurips25-orthogonal-contrastive-learning-for-multi-representation-f/fig-002.webp\", \"caption\": \"\", \"page\": 4, \"index\": 2, \"width\": 404, \"height\": 514}]"
motivation: 解决任务态fMRI跨受试者、跨站点整合时面对的时间序列不一致与预处理成本高昂问题。
method: 采用在线/目标双编码器对比学习，融合QR正交特征提取、位置编码、Transformer和哈希签名，并引入合成数据预训练与迁移学习策略。
result: 在多受试者和多站点基准上，OCL的表征质量和下游分类准确率全面领先现有方法。
conclusion: OCL提供了一个无需时间对齐的高效多受试者fMRI表征框架，具备强迁移能力和实用价值。
---

## 摘要
基于任务的功能磁共振成像（fMRI）为人类认知提供了宝贵见解，但面临关键障碍——低信噪比、高维度、有限样本量和高昂的数据采集成本——这些问题在跨被试或跨站点整合数据集时更为突出。本文提出正交对比学习（OCL），一个用于多被试fMRI分析的统一多表征框架，可在无需时间预处理或跨被试/站点统一时间序列长度的情况下对齐神经响应。OCL使用两个相同编码器：在线网络通过对比损失训练，拉近相同刺激的响应、推远不同刺激的响应；目标网络通过指数移动平均跟踪在线网络的权重以稳定学习。OCL的每个网络层结合QR分解进行正交特征提取、局部敏感哈希（LSH）生成紧凑的被试特定签名、位置编码嵌入时间结构与空间特征，以及Transformer编码器生成判别性、刺激对齐的嵌入。我们进一步通过类fMRI合成数据的无监督预训练阶段增强OCL，并展示了适用于多站点研究的迁移学习流程。在大量多被试和多站点fMRI基准实验上，OCL在表征质量和下游分类准确率方面均持续优于最先进的对齐和分析方法。

## Abstract
Task-based functional magnetic resonance imaging (fMRI) provides invaluable insights into human cognition but faces critical hurdles—low signal-to-noise ratio, high dimensionality, limited sample sizes, and costly data acquisition—that are amplified when integrating datasets across subjects or sites. This paper introduces orthogonal contrastive learning (OCL), a unified multi-representation framework for multi-subject fMRI analysis that aligns neural responses without requiring tem- poral preprocessing or uniform time-series lengths across subjects or sites. OCL employs two identical encoders: an online network trained with a contrastive loss that pulls together same-stimulus responses and pushes apart different-stimulus responses, and a target network whose weights track the online network via expo- nential moving average to stabilize learning. Each OCL network layer combines QR decomposition for orthogonal feature extraction, locality-sensitive hashing (LSH) to produce compact subject-specific signatures, positional encoding to em- bed temporal structure alongside spatial features, and a transformer encoder to generate discriminative, stimulus-aligned embeddings. We further enhance OCL with an unsupervised pretraining stage on fMRI-like synthetic data and demonstrate a transfer-learning workflow for multi-site studies. Across extensive experiments on multi-subject and multi-site fMRI benchmarks, OCL consistently outperforms state-of-the-art alignment and analysis methods in both representation quality and downstream classification accuracy.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与“fMRI representation”、“representation alignment”、“multi-view constraint”及“brain decoding/encoding”高度相关，直接针对跨被试、跨站点神经表征对齐问题。
- **启发与意义**：它提供了将对比学习、正交化与哈希签名嵌入统一表征框架的创新思路，展示了无需时序对齐就能稳定提取刺激相关特征的可能性，对脑解码与脑编码研究均有启发。
- **可借鉴点**：QR 正交特征提取、LSH 被试签名、合成数据预训练和迁移学习策略可迁移到其他神经影像模态；其在线-目标双编码器也可用于构建鲁棒的神经表征模型。
- **阅读建议**：若关注 fMRI 多被试对齐、跨站点泛化、或想将自监督对比学习引入脑数据分析，建议精读方法细节与预训练方案；若偏重应用，可重点关注实验部分和跨站点迁移实现。

## 1. 论文的核心问题与整体含义
- 任务态 fMRI 面临信噪比低、维度高、样本量小、采集成本高等固有困难，当需要跨被试或跨站点整合数据时，个体间的神经响应差异、扫描仪批次效应和时序长度不一致会进一步放大问题。
- 现有功能对齐方法（如超对齐、共享响应模型）通常要求时间同步或长度统一，且在多站点场景下处理批次效应较为吃力。
- 总体目标：提出一个统一的**多表征框架**，在**无需时间预处理、不要求统一时序长度**的条件下实现多被试、多站点神经响应对齐与下游分类，同时提升表征质量和泛化能力。

## 2. 论文提出的方法论
- **整体架构：正交对比学习（OCL）**
  - 将每个被试的神经响应视为多视角数据的一个“视图”，用**在线网络**和**目标网络**两个同结构编码器学习共享表征。
  - 在线网络通过对比损失训练，迫使同一刺激的响应靠近、不同刺激的响应远离；目标网络的权重通过指数移动平均（EMA）跟踪在线网络，以稳定学习。
  - 对比损失 $\mathcal{L}_{\text{OCL}}$ 包含拉近同类（温度 $\tau$）和推开异类（间隔 $\mu$，权重 $\lambda$）两项，分别控制类内聚集和类间分离。

- **OCL 层的内部组件（每层均包含以下四部分）**
  1. **QR 分解 + 截断**：对神经响应矩阵 $\mathbf{X}_s$ 做薄 QR 分解 $\mathbf{X}_s = \mathbf{Q}_s^{\text{full}} \mathbf{R}_s^{\text{full}}$，截取前 $d$ 列正交基底 $\mathbf{Q}_s$ 和对应的上三角 $\mathbf{R}_s$，实现正交特征提取和信噪比提升。
  2. **局部敏感哈希（LSH）**：将 $\mathbf{R}_s$ 的非零元素向量 $\phi_s$ 通过 $p$-稳定分布哈希函数映射为标量 $\ell_s = \lfloor (\langle \mathbf{a}, \phi_s \rangle + b)/w \rfloor$，再经线性 MLP 生成被试特异性签名 $\mathbf{s}_s \in \mathbb{R}^d$。这一机制保证相似 $\phi_s$ 碰撞概率更高。
  3. **位置编码**：将 $\mathbf{Q}_s$ 与 $\mathbf{s}_s$ 拼接后，加上正弦位置编码 $\mathbf{E}$，为空间特征注入连续时间上下文，保留动态刺激时序。
  4. **Transformer 编码器**：输入位置编码后的特征和时序填充掩码，利用多头自注意力捕获全局依赖，生成判别性、刺激对齐的嵌入 $\mathbf{H}_{n,s}$。

- **输入与时序处理**：对每个被试，设定全局最大时间窗 $T$，通过零填充统一输入形状，并记录掩码 $\mathbf{m}_s$ 指示真实时间点。
- **预训练（OCLzero）**：用合成数据预训练，生成 $k$ 类基矩阵 $\mathbf{M}$ 并对其施加随机正交旋转 $\mathbf{X}_s = \mathbf{M} \mathbf{U}_s$，通过 OCL 训练消除任意正交变换和跨被试差异，然后迁移目标编码器参数 $\tilde{\theta}$ 到真实 fMRI 数据微调。
- **多站点迁移学习**：对每个站点单独训练 OCL 得到目标编码器参数 $\tilde{\theta}_b$，将其平均聚合 $\tilde{\theta}_{\text{sites}} = \frac{1}{B}\sum_{b=1}^B \tilde{\theta}_b$，冻结后用于训练和测试数据的共享特征映射，显著提高跨站点分类性能。

## 3. 实验设计
- **数据集**：共 10 个公开 fMRI 数据集，涵盖简单认知任务（CMU、DS232）、自然主义电影观看（Forrest、Raiders）、以及 6 个任务态同质数据集（A–F）用于多站点评估。所有数据经空间标准化、平滑等预处理，全脑 ROI 包含 19,742 个体素。
- **场景划分**：
  - 简单认知任务分类：分别在时序对齐与未对齐的 CMU、DS232 上评估。
  - 电影观看分类：Forrest 和 Raiders 数据集，按不同体素数量、不同时间点（TRs）进行多分辨率实验。
  - 多站点分类：使用数据集 A–F 进行双向交叉站点测试（如 A ⇌ B），以及四站点 A1、A2、A3、B 的各类组合。
- **Baselines**：单站点对比 FastSRM、ShIndICA、HyperHMM、DHA、DeepGeoCCA、MindEye2、MindAligner；多站点对比 SSTL、DeepSSTL、XG-GNN、MindEye2、MindAligner，外加自身消融 OCLzero。
- **评估协议**：留一被试嵌套交叉验证，内层调参，外层测试；使用 ν-SVM 分类器；所有对比方法均计最优超参数；统计显著性用配对 t 检验（$\rho < 0.05$）。

## 4. 资源与算力
- 论文明确列出实验硬件：两台 PC，每台配置 2 个 NVIDIA 4060Ti 16GB GPU；CPU 分别为 AMD EPYC 7551P（64 核）和 AMD Threadripper 2990WX（64 核）。
- 训练与预训练均指定迭代数上限 $\psi = 1000$，结合 Adam 优化器和自动早停，但未给出每轮具体耗时或总训练时长量级。相比传统方法，OCL 计算需求较高，文中亦将其列为局限性之一。

## 5. 实验数量与充分性
- 实验覆盖广：包括 2 个简单任务数据集（对齐与未对齐）、2 个电影数据集（7 个体素级别 × 4 个 TR 级别）、多站点 6 组交叉配对及额外的四站点组合测试。
- 每组实验均与 5–7 种前沿方法对比，总计超出 **400 次** 比较，且所有差异经统计显著性检验。设置消融对比（OCLzero vs OCL）验证预训练的增益。总体而言，实验设计详尽、客观，评估协议公平，统计支撑充分。

## 6. 论文的主要结论与发现
- OCL 在**无需时间对齐**的情况下就能保持甚至超越需要时序同步的传统对齐方法的准确率；在未对齐数据上明显优于其他深度和多视图方法。
- OCL 在所有电影数据集的多体素、多时间窗口实验中均取得最高分类准确率，且显著性检验全部通过。
- 在多站点迁移场景中，OCL 凭借预训练和参数聚合策略持续获得最佳泛化性能，表明框架有效缓解批次效应和扫描仪差异。
- 预训练模型 OCLzero 提供了强大的初始特征空间，显著提升下游任务的加速收敛和鲁棒性。

## 7. 优点
- **不依赖时序对齐**：打破传统方法需要统一时间序列长度的限制，极大降低实际应用中的数据预处理成本。
- **统一多表征框架**：巧妙集成 QR 分解、LSH 被试签名、位置编码和 Transformer，实现了正交特征、个体特异性、时空信息的联合学习。
- **有效的预训练与迁移**：合成数据预训练和站点参数聚合策略具有良好的可迁移性，为小样本和跨域 fMRI 分析提供了新范式。
- **实验证据扎实**：在大量标准数据集和多种对比方法下均取得一致优势，并加以统计检验。

## 8. 不足与局限
- **计算开销大**：双编码器、多层 Transformer、LSH 与 QR 分解等模块使得 OCL 对 GPU 资源要求较高，可能限制其在极高维体素空间或超大型数据集上的扩展。
- **域偏移敏感**：论文指出当跨站点或跨被试的域偏移极大时（超出当前基准范围），性能可能下降。
- **数据要求高**：方法依赖于高质量、有标注的多站点大数据；在小样本或弱标注条件下泛化能力尚待验证。
- **可解释性不足**：虽提及可通过 QR 基底投影和注意力图提供一定解释，但深度学习的黑盒特性导致表征和决策过程难以彻底解释。

## 9. 研究价值与阅读建议（略，已于第一节输出）
（完）
