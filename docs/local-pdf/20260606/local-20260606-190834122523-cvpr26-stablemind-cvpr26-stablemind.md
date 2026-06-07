---
title: CVPR26 StableMind
title_zh: CVPR26 StableMind
authors: Jintao Guo; Lin Wang; Shumeng Li; Jian Zhang; Yulin Zhou; Luyang Cao; Hairong Zheng; Yinghuan Shi
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-190834122523-cvpr26-stablemind.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 10.0 订阅评分
score_label: 订阅评分
evidence: 跨被试fMRI解码，专注于脑表征的个体差异
tldr: "现有跨被试fMRI解码在有限新被试数据下因脑侧不稳定与图像监督不可靠而性能下降。StableMind通过重用预训练岭投影作为先验、傅里叶特征增强稳定脑表征，并引入难度感知图像模糊提升对齐可靠性，在NSD数据集1小时适应协议下，图像检索84.02%，脑检索81.66%，超越SOTA 5.71%，且适应参数更少。"
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-001.webp\", \"caption\": \"\", \"page\": 3, \"index\": 1, \"width\": 1029, \"height\": 852}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-002.webp\", \"caption\": \"\", \"page\": 8, \"index\": 2, \"width\": 564, \"height\": 419}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-003.webp\", \"caption\": \"\", \"page\": 8, \"index\": 3, \"width\": 564, \"height\": 419}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-004.webp\", \"caption\": \"\", \"page\": 10, \"index\": 4, \"width\": 880, \"height\": 414}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-005.webp\", \"caption\": \"\", \"page\": 10, \"index\": 5, \"width\": 880, \"height\": 414}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-006.webp\", \"caption\": \"\", \"page\": 10, \"index\": 6, \"width\": 880, \"height\": 423}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-007.webp\", \"caption\": \"\", \"page\": 10, \"index\": 7, \"width\": 880, \"height\": 423}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-008.webp\", \"caption\": \"\", \"page\": 10, \"index\": 8, \"width\": 880, \"height\": 414}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-009.webp\", \"caption\": \"\", \"page\": 10, \"index\": 9, \"width\": 880, \"height\": 405}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-010.webp\", \"caption\": \"\", \"page\": 10, \"index\": 10, \"width\": 880, \"height\": 405}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-011.webp\", \"caption\": \"\", \"page\": 10, \"index\": 11, \"width\": 880, \"height\": 405}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-012.webp\", \"caption\": \"\", \"page\": 10, \"index\": 12, \"width\": 880, \"height\": 411}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-013.webp\", \"caption\": \"\", \"page\": 10, \"index\": 13, \"width\": 880, \"height\": 411}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-014.webp\", \"caption\": \"\", \"page\": 10, \"index\": 14, \"width\": 880, \"height\": 411}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-015.webp\", \"caption\": \"\", \"page\": 10, \"index\": 15, \"width\": 880, \"height\": 423}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-016.webp\", \"caption\": \"\", \"page\": 11, \"index\": 16, \"width\": 995, \"height\": 866}, {\"url\": \"assets/figures/local-pdf/local-20260606-190834122523-cvpr26-stablemind/fig-017.webp\", \"caption\": \"\", \"page\": 11, \"index\": 17, \"width\": 993, \"height\": 866}]"
motivation: 解决有限fMRI数据下跨被试适应中因被试差异和精细视觉细节不可靠导致的性能下降问题。
method: 提出StableMind，利用岭回归投影先验与傅里叶增强稳定脑表征，通过难度感知图像模糊减少精细细节影响以提升监督可靠性。
result: "在NSD数据集上，1小时适应后图像检索准确率84.02%，脑检索81.66%，脑检索性能超越SOTA 5.71%。"
conclusion: StableMind有效提升有限数据下的跨被试解码性能，且所需适应参数更少，展现了优越的适应能力。
---

## 摘要
现有的跨被试fMRI解码方法通常基于多个扫描被试训练一个模型，然后使用大量配对的fMRI-图像数据将其适应于新被试。然而，在现实场景中，由于数据采集成本高昂，新被试的fMRI数据往往有限，且以往被试的原始数据可能无法访问，导致现有方法在新被试适应过程中性能下降。在本文中，我们发现这种退化源于两个关键问题：由fMRI响应的大幅度被试间差异引起的大脑端不稳定性，以及由有限的fMRI信号无法可靠支持的细粒度视觉细节引起的图像端监督不可靠性。为了应对这些挑战，我们提出了StableMind，这是一个正则化的适应框架，旨在提高大脑端表征稳定性和图像端监督可靠性。（1）为了稳定大脑表征，StableMind重用预训练模型中的岭投影作为适应先验，以约束有限数据下的新被试适应，并应用基于傅里叶的特征层面大脑增强来提高对个体差异的鲁棒性。（2）为了提高图像监督可靠性，StableMind引入了难度感知的图像模糊用于脑-图像对齐，减少有限的fMRI信号弱支持的细粒度视觉细节的影响，同时保留稳定的视觉结构。在自然场景数据集上，采用统一的1小时适应协议进行的实验表明，StableMind在四个被试上平均实现了84.02%的图像检索准确率和81.66%的大脑检索准确率，以更少的可训练适应参数，在大脑检索准确率上超越了最先进方法5.71%。我们的代码可在https://github.com/lingeringlight/StableMind获取。

## Abstract
—Existing cross-subject fMRI decoding methods typ- ically train a model on multiple scanned subjects and then adapt it to a new subject using substantial paired fMRI-image data. However, in realistic scenarios, new-subject fMRI data are often limited due to costly data acquisition, and raw data from previous subjects may be inaccessible, leading existing methods to suffer performance degradation during new-subject adaptation. In this paper, we identify that this degradation stems from two key issues: brain-side instability caused by large subject differences in fMRI responses, and image-side supervision unreliability caused by fine-grained visual details that are not reliably supported by limited fMRI signals. To address these challenges, we propose StableMind, a regularized adapta- tion framework designed to improve brain-side representation stability and image-side supervision reliability. (1) To stabilize brain representations, StableMind reuses ridge projections from the pretrained model as adaptation priors to constrain limited- data new-subject adaptation, and applies Fourier-based feature- level brain augmentation to improve robustness to individual variability. (2) To improve image supervision reliability, Sta- bleMind introduces difficulty-aware image blur for brain-image alignment, reducing the influence of fine-grained visual details that are weakly supported by limited fMRI signals while preserv- ing stable visual structure. Experiments on the Natural Scenes Dataset under a unified 1-hour adaptation protocol demonstrate that StableMind achieves 84.02% image retrieval accuracy and 81.66% brain retrieval accuracy averaged over four subjects, surpassing the state-of-the-art method by 5.71% brain retrieval accuracy with fewer trainable adaptation parameters. Our code is available at https://github.com/lingeringlight/StableMind.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与brain decoding、fMRI representation、representation alignment高度相关，直接聚焦于跨被试脑解码中的表征稳定性与对齐问题。
- **启发与意义**：文章揭示了有限数据下跨被试适应存在“大脑端不稳定性”与“图像端监督不可靠”的双重挑战，启发了应从表征正则化与监督可靠性两个维度同时改进，而非仅依赖潜在空间对齐。
- **可借鉴点**：可借鉴其“重用源域岭回归先验”约束目标域映射的思想，以及傅里叶域的振幅统计扰动增强方法，用于提升神经先验引导的视觉解码与表征对齐的鲁棒性。
- **阅读建议**：建议重点关注文中关于跨被试频谱差异（表IX）及特征增强位置影响（表VIII）的分析部分，有助于理解多视图约束在脑编码与解码任务中的潜在应用。

## 1. 论文的核心问题与整体含义
- **核心问题**：在现实的跨被试fMRI解码场景中，新被试数据采集成本高、数据量有限，且源被试的原始数据常因隐私等原因无法访问（**Source-Free**设置）。现有方法在此设置下性能下降严重。
- **根本原因分析**：论文将性能下降归结为两个耦合的不稳定源：
  - **大脑端不稳定性**：不同被试在相同刺激下，fMRI响应的个体差异巨大（尤其是振幅相关的频谱统计量），导致对新被试的特征映射极易过拟合。
  - **图像端监督不可靠性**：受限于有限的fMRI信号，图像中的细粒度视觉细节（纹理等）并未在大脑响应中获得可靠支撑，强行要求模型学习全细节的图像监督会引入噪声与过拟合。
- **整体含义**：论文旨在提出一个新的框架 **StableMind**，通过在大脑端和图像端施加联合正则化，提升有限数据、无源数据下跨被试解码的鲁棒性与准确率。

## 2. 论文提出的方法论
StableMind是一个正则化的无源跨被试适应框架，核心由三个互补模块组成，分别作用于适应过程的不同阶段：
- **跨被试岭回归重用（CSRR）**：
  - **思想**：利用预训练好的多个源被试的岭回归映射 $\{R_s\}$ 作为先验。对输入的目标被试体素响应 $V_t$，通过维度补零/截断操作后，让所有源岭回归输出投影，并聚合为平均先验 $\bar{R}_{src}$。
  - **融合与正则化**：目标岭回归输出 $R_t$ 与 $\bar{R}_{src}$ 进行加权融合 $R = (1 - \alpha)R_t + \alpha \bar{R}_{src}$，并通过余弦蒸馏损失 $L_{src} = 1 - \cos(R_t, \text{sg}(\bar{R}_{src}))$ 弱约束目标映射，从而在输出空间正则化不稳定的目标投影。
- **特征层面大脑增强（FBA）**：
  - **思想**：观察到跨被试大脑特征在频域的振幅统计量差异大，而相位信息相对稳定。
  - **操作**：对中间特征进行离散傅里叶变换后，分离振幅与相位。在批次内估计振幅均值与标准差的分布，并对其施加高斯扰动 $\tilde{\mu} \sim \mathcal{N}(\mu, \Sigma_\mu^2)$ 和 $\tilde{\sigma} \sim \mathcal{N}(\sigma, \Sigma_\sigma^2)$。用扰动后的统计量重构振幅谱，再与原始相位结合进行逆傅里叶变换得到增强特征。此方法旨在提升模型对个体振幅变异的鲁棒性。
- **难度感知的图像模糊（DIB）**：
  - **思想**：根据当前模型对每个样本的“脑-图对齐难易度”自适应地控制图像监督的细粒度程度。
  - **操作**：
    1. **难度估计**：计算脑嵌入与图像嵌入的余弦相似度，经批次标准化和Sigmoid后得到难易度分，再用指数移动平均（EMA）维护图像级的难度库，得到难度沙得分 $h_i$。
    2. **模糊构建**： $h_i$ 越大（越难）的样本，保留更大的中央清晰区域半径 $r_i$；越简单的样本，半径越小、模糊越强。
    3. **监督**：生成混合清晰与模糊区域的图像，将其作为辅助监督目标，与原始清晰图像一起进行对比损失计算 $L_{all}^{clip}$。

## 3. 实验设计
- **数据集与场景**：论文使用**自然场景数据集（NSD）**，评估Source-Free的跨被试fMRI解码。在统一**1小时适应协议**下，先利用7个源被试的完整数据预训练模型，再用目标被试仅一个session（约1小时，仅占全体数据2.5%）的数据进行适应。
- **评估基准**：评估对象为4位完成所有40个session的扫描被试（Subj 1, 2, 5, 7），结果取平均值。
- **对比方法**：与当前先进的跨被试解码方法比较，包括**MindEye2 (ICML'24)**、**MindBridge (CVPR'24)**、**MindAligner (ICML'25)** 和 **MindTuner (AAAI'25)**。
- **评估指标**：覆盖低层重建质量（PixCorr, SSIM, AlexNet(2/5)），高层语义质量（Inception, CLIP, EffNet, SwAV），以及双向检索准确率（Image Retrieval 和 Brain Retrieval）。

## 4. 资源与算力
论文明确指出：
- **硬件**: 所有微调实验均在**单张 Tesla A800 80GB GPU**上完成。
- **训练设置**: 每个目标被试的微调过程固定为**150个epoch**，使用**AdamW优化器**，批次大小为10，学习率为 $3 \times 10^{-4}$。单次推理时间约为9.654秒。

## 5. 实验数量与充分性
论文进行了相当充分且客观的实验，主要包括：
- **主对比实验**（表I）：在4个目标被试上与5个SOTA方法进行了全面对比。
- **消融实验**（表III、IV、V、VI、VII、VIII）：详细消融了以下组件：
  - 三个核心模块（CSRR, FBA, DIB）的组合效果。
  - CSRR内部（源先验融合与余弦蒸馏）的效果。
  - 源先验构建策略（随机、最近、平均）的影响。
  - 图像模糊策略（无模糊、全局模糊、固定半径、难度感知）的对比。
  - 特征增强方式的变体（随机噪声、均匀分布、交换振幅、高斯扰动等）。
  - 特征增强在骨干网络中不同位置（Block 1-4 及组合）的效果。
- **参数敏感性分析**（图4）以及**可视化分析**（图5-7）、**频谱差异量化**（表IX）和**效率对比**（表II）。
这些实验设计系统且全面，论证了各个组件的有效性及其最优配置，对比公平。

## 6. 论文的主要结论与发现
- **性能突破**：StableMind在1小时有限数据跨被试协议下，在四个被试上平均取得了**84.02%的图像检索准确率**和**81.66%的大脑检索准确率**，相比SOTA方法MindTuner在脑检索上**大幅提升5.71%**，且**可训练适应参数更少**（4.04M vs 12.30M）。
- **方法有效性**：通过联合正则化大脑端（CSRR和FBA）和图像端（DIB），有效缓解了有限数据下的过拟合和表征不稳定问题，FBA中的高斯扰动建模和将FBA置于网络中层效果最佳。
- **表征质量提升**：StableMind显著降低了跨被试特征在频域的差异，学习到的皮层体素权重分布更接近全量数据训练的理想状态，且学习的潜在表征更具可分性。

## 7. 优点
- **问题洞察深刻**：明确指出了“大脑端不稳定”和“图像端监督不可靠”两个耦合问题，并通过实验（频谱、岭回归可视化）佐证。
- **方法设计精巧且互补**：三个模块（CSRR、FBA、DIB）分别作用于输入映射、特征鲁棒性和监督目标三个层面，形成了逻辑自洽的正则化框架。
- **实验严谨且性价比高**：不仅性能超越SOTA，还大幅减少了可训练参数量，实现了性能与效率的平衡，且大量消融与可视化实验增加了结论的可信度。

## 8. 不足与局限
- **Source-Free假设的依赖性**：方法重度依赖预训练好的源岭回归模型作为先验，但文中未深度测试源域数量和质量不足时先验的可靠性。
- **方法复杂度与超参**：框架引入了较多超参数（如 $\alpha$, $w_{src}$, $w_{blur}$，温度 $T$，动量 $m$ 等），文中未提供针对不同数据场景的通用调参指南。
- **跨被试匹配的简化处理**：CSRR中处理不同维度的体素时使用了简单的补零/截断方法，未使用任何解剖学对齐，此先验的有效性建立在多源域平均的弱先验上，应用场景可能受限。
- **技术普适性有限**：FBA的高斯扰动基于该实验观测到的跨被试振幅差异较大的现象，此先验是否适用于其他脑信号（如EEG/MEG）或不同模态待探究。

## 9. （完）
