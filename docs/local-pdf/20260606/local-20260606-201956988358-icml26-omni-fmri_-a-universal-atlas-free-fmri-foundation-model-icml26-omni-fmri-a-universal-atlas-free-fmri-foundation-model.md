---
title: ICML26 Omni-fMRI_ A Universal Atlas-Free fMRI Foundation Model
title_zh: ICML26 Omni-fMRI：一种通用的无图谱fMRI基础模型
authors: Mo Wang; Wenhao Ye; Junfeng Xia; Junxiang Zhang; Xuanye Pan; Minghao Xu; Haotian Deng; Hongkai Wen; Quanying Liu
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-201956988358-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 从多数据集49497个会话学习通用fMRI表征，实现跨被试泛化。
tldr: 现有fMRI基础模型多依赖图谱分割，丢失体素细节并引入偏差。本文提出Omni-fMRI，一种直接在体素级别操作、无需图谱的通用框架，通过动态分块机制实现高效预训练，并在涵盖静息态与任务态的11个数据集上建立标准化基准。实验证明，Omni-fMRI性能全面超越现有模型，为免图谱脑表征学习提供了可扩展且可复现的解决方案。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-201956988358-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 1383, \"height\": 1343}, {\"url\": \"assets/figures/local-pdf/local-20260606-201956988358-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 428, \"height\": 428}, {\"url\": \"assets/figures/local-pdf/local-20260606-201956988358-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-003.webp\", \"caption\": \"\", \"page\": 6, \"index\": 3, \"width\": 744, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260606-201956988358-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 1260, \"height\": 756}, {\"url\": \"assets/figures/local-pdf/local-20260606-201956988358-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-005.webp\", \"caption\": \"\", \"page\": 8, \"index\": 5, \"width\": 777, \"height\": 366}]"
motivation: 克服现有fMRI基础模型依赖区域级图谱分割导致细粒度信息丢失和图谱偏差的问题。
method: 提出Omni-fMRI，采用动态分块机制直接在体素信号上进行预训练，无需预定义图谱。
result: 在11个数据集的多种任务中，Omni-fMRI始终优于现有基础模型。
conclusion: Omni-fMRI构建了首个可扩展、可复现的免图谱fMRI学习框架，为脑成像分析提供了新范式。
---

## 摘要
自监督fMRI基础模型已展现出有前景的迁移性能，但大多数依赖预定义的区域级分区，这丢弃了细粒度体素信息并引入图谱相关偏倚。我们提出Omni-fMRI，一个直接在体素级信号上运行的无图谱基础模型。为实现在九个数据集共49,497个fMRI会话上的可扩展预训练，Omni-fMRI引入一种动态分块机制，在保留信息性空间结构的同时大幅降低计算成本。为支持可重复性与公平比较，我们建立了一个全面的基准套件，涵盖11个数据集以及一系列静息态和任务态fMRI任务。实验结果表明，Omni-fMRI始终优于现有基础模型，为无图谱大脑表征学习提供了一个可扩展且可重现的框架。代码与日志可在Link获取。

## Abstract
Self-supervised fMRI foundation models have shown promising transfer performance, yet most rely on predefined region-level parcellations that discard fine-grained voxel information and intro- duce atlas-dependent biases. We propose Omni- fMRI, an atlas-free foundation model that oper- ates directly on voxel-level signals. To enable scalable pretraining on 49,497 fMRI sessions across nine datasets, Omni-fMRI introduces a dy- namic patching mechanism that substantially re- duces computational cost while preserving infor- mative spatial structure. To support reproducibil- ity and fair comparison, we establish a compre- hensive benchmark suite spanning 11 datasets and a diverse set of resting-state and task-based fMRI tasks. Experimental results demonstrate that Omni-fMRI consistently outperforms exist- ing foundation models, providing a scalable and reproducible framework for atlas-free brain repre- sentation learning. Code and logs are available at Link.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文直接属于“fMRI representation”与“brain encoding”，其无图谱体素级表征对“brain decoding”和“neural prior”方向同样高度相关，为下游解码任务提供了更细粒度的脑活动嵌入。
- **启发与意义**：突破固定图谱依赖，揭示了在原生体素空间学习通用脑表征的可行性与优越性，提示研究者可摆脱传统分区限制，从模型层面缓解个体差异带来的对齐误差。
- **可借鉴点**：动态分块策略、多尺度嵌入与尺度感知重建损失可用于其他需要处理高维异构脑信号的场景，显著降低体素级建模的计算门槛。
- **阅读建议**：建议重点关注内容自适应分块机制和尺度感知掩码自编码的设计细节，以及其在下游解码、编码任务中的数据效率优势，可直接迁移到自己的脑表征学习或图像解码研究中。

## 1. 论文的核心问题与整体含义
- **研究动机**：
  - 当前fMRI基础模型大多将体素级信号聚合成预定义图谱的“区域级”时间序列，丢弃了细粒度空间信息并引入图谱依赖的偏倚。
  - 不同数据集、任务对图谱的选择无统一标准，导致跨任务泛化困难、公平对比缺失，且无法捕捉个体间的功能组织差异。
- **整体含义**：论文提出直接在原始4D体素空间构建通用基础模型Omni‑fMRI，消除对图谱的依赖，实现更保真、更通用的脑表征学习，并通过动态分块解决体素级建模的算力瓶颈。

## 2. 方法论
### 2.1 核心思想
- 在4D fMRI体积 $\mathbf{X} \in \mathbb{R}^{H \times W \times D \times T}$ 上进行无图谱的掩码自编码预训练，学习体素级表征。
- 用**动态分块**替代传统的均匀网格分块，以降低token数量并使算力集中在信息密集区域。

### 2.2 关键技术细节
**内容自适应分块分配（Content‑Adaptive Patch Allocation）**：
- 计算局部时空复杂度：以时间聚合的强度方差作为指标，$\sigma_P^2 = \frac{1}{T} \sum_{t=1}^T\left(\mathbb{E}_P[I_t^2] - (\mathbb{E}_P[I_t])^2\right)$，其中 $\mathbb{E}_P[\cdot]$ 通过3D平均池化实现。
- **背景剔除**：若某 patch 平均强度低于阈值则直接丢弃。
- **粗细分区**：对前景区域，若 $\sigma_P^2 < \tau$ 则用一个粗token表示（大块），否则递归细分为基础尺寸的子块（小块）。

**双路径多尺度嵌入（Dual‑Path Multi‑Scale Embedding）**：
- 基础尺寸的小块直接用3D卷积投影。
- 大块嵌入由低分辨率下采样特征和子块细节融合得到：  
  $$z = \phi(P_\downarrow) + \text{ZeroMLP}(\text{Conv}(\phi(P_{\text{grid}}))) + p_{\text{pos}}$$  
  其中 $\phi(\cdot)$ 为3D卷积 tokenizer，$P_\downarrow$ 为下采样后的大块，$P_{\text{grid}}$ 为大块内的子块网格，$\text{Conv}$ 为跨步卷积以恢复高频信息，$\text{ZeroMLP}$ 输出初始化为零，形成由粗到精的课程学习。

**尺度感知掩码自编码（Scale‑Aware MAE）**：
- 解码器输入注入可学习的尺度嵌入 $e_{s_i}$：$u_i = h_i + p_i + e_{s_i}$。
- 使用多个尺度特定的预测头 $\{\psi_s\}_{s=0}^{K-1}$，每个头输出对应体积的展平体素向量。
- 损失函数对尺度和 token 频率进行双重归一化，避免大块主导训练：
  $$L = \sum_{s=0}^{K-1} \frac{1}{|M_s| \cdot V_s} \sum_{i \in M_s} \|\psi_s(\text{Decoder}(u_i)) - y_i\|_2^2$$

### 2.3 算法流程
1. 对4D fMRI计算局部方差复杂度图。
2. 根据阈值移除背景、分配 patch 尺寸。
3. 使用双路径嵌入将异质 patch 映射到统一 latent space。
4. 按一定比例随机 mask 部分 token，送入标准 ViT 编码器（全局自注意力）。
5. 解码时注入尺度嵌入，通过尺度特定预测头重建原始体素值，用归一化 MSE 损失优化。

## 3. 实验设计
### 3.1 数据集与划分
- **预训练数据** (Type I + Type II部分)：共约49,497个fMRI会话，来源包括 UK Biobank (38 k), AOMIC PIOP1/PIOP2, CHCP, ISYB 及 ABCD, ABIDE, HCP rest 的部分。
- **内部下游** (Type II剩余30%)：ABCD, ABIDE, HCP rest, PPMI。
- **外部下游** (Type III)：ADNI, SALD, BHRC, NKI, NSD, HCP task, StudyForrest。

### 3.2 下游任务与基准
- **人口学与临床分类/回归**：性别分类（ABCD, HCP, BHRC等）、年龄回归（ABIDE, NKI, SALD）、疾病诊断（PPMI – PD, ADNI – MCI/AD）、教育程度分类（NKI）。
- **图像检索**：NSD 数据集，100‑way 检索 (Top‑1/5/10 准确率)。
- **情绪检测**：StudyForrest 数据，对高兴与悲伤进行回归。
- **脑状态预测**：HCP task 数据集，23‑way 分类，同时评估全监督及10%‑50%少样本设定。
- **对比方法**：BrainGNN, TFF, SwiFT, BrainLM, BrainMASS, Brain‑JEPA, NeuroSTORM。

### 3.3 额外分析
- **线性探测**：冻结编码器，仅训练线性分类器以检验表征的线性可分性。
- **消融实验**：模型规模与数据量缩放、复杂度度量（方差 vs. 熵、拉普拉斯响应、MSE）、patch归一化、自监督任务（MAE vs. JEPA）、掩码比率、阈值 $\tau$。
- **可解释性**：用 Integrated Gradients 计算体素归因，与 Neurosynth 元分析对比空间对齐（SSIM, RMSE）。

## 4. 资源与算力
- **预训练**：4 块 NVIDIA A10G GPU (24 GB)，batch size 24，35 个 epoch，约 **32 小时**。
- **下游微调/评估**：使用 NVIDIA A800 GPU。
- **基线对比**：NeuroSTORM 预训练需 4 块 A6000 (48 GB) 约 **13 天**；BrainMASS 约需 8 块 V100 约 **150 小时**。Omni‑fMRI 的算力消耗远低于同类体素级模型，且比多数 ROI 模型更高效。

## 5. 实验数量与充分性
- 论文报告了 **9 个分类/回归数据集**、**2 个任务态数据集**（情绪与状态预测）、**1 个图像检索数据集** 的详尽结果，每个实验重复 3 次并计算 Cohen’s d 效应量。
- 消融研究覆盖：模型/数据缩放、4 种复杂度度量、patch 归一化、自监督任务性质、掩码率、分块阈值等，系统性较强。
- 对比方法包含多种 SOTA（ROI‑based 和 voxel‑based），并提供线性探测比较，实验设计充分、客观。

## 6. 主要结论与发现
- Omni‑fMRI 在所有下游任务中 **持续显著优于现有基础模型**，甚至在部分任务上线性探测的分数已超过其他模型的全微调结果。
- 动态分块在不牺牲信息保真度的前提下，将 token 序列长度从约 **14K 降至 4.3K**，使标准 ViT 能直接处理全脑体素，捕获长程功能连接。
- 去除 patch 归一化有利于保留 BOLD 振幅信息并抑制背景噪声放大，提升性能。
- 可解释性分析表明，模型学到的注意力图谱与 Alzheimer 等疾病的已知神经机制高度吻合（SSIM 提升）。

## 7. 优点
- **完全无图谱**：避免分区偏倚，保留个体化功能拓扑。
- **高效可扩展**：动态分块大幅降低计算和显存需求，使得大规模体素级预训练成为可能。
- **统一基准**：建立了涵盖多个数据集和任务的标准化测评体系，促进了公平对比。
- **工程与理论结合**：多尺度嵌入与尺度感知损失设计精巧，解决了异质 token 的建模难题。
- **数据效率高**：在极端少样本条件下性能几乎不衰减，表明学到的表征泛化性极强。

## 8. 不足与局限
- **复杂度度量为启发式**：使用强度方差阈值选择 patch 尺寸，而非端到端可学习的自适应机制，可能未充分利用任务相关信息。
- **动态分块策略固定**：阈值等超参需要针对每个新数据集调优，缺乏统一的学习准则。
- **预训练仅基于静息态 fMRI**：虽然下游包含部分任务态，但预训练未利用任务态数据，可能限制对任务特异性信号的直接捕获。
- **背景剔除依赖简单阈值**：固定的强度阈值可能丢失脑外生理噪声中的潜在信息，或忽略某些低信号但有意义的区域。
- **临床数据集规模较小**：外部下游中某些疾病样本有限，统计数据可能与健康人群不均衡。

## 9. 论文元数据
- **标题**：ICML26 Omni‑fMRI: A Universal Atlas‑Free fMRI Foundation Model
- **作者**：Mo Wang *, Wenhao Ye *, Junfeng Xia, Junxiang Zhang, Xuanye Pan, Minghao Xu, Haotian Deng, Hongkai Wen, Quanying Liu
- **日期**：2026‑06‑06
- **标签**：fMRI foundation model, atlas‑free, dynamic patching, representation learning

（完）
