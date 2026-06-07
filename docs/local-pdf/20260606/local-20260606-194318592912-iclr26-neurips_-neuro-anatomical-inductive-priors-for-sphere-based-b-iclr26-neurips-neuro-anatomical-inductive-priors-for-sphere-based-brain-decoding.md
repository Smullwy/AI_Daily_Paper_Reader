---
title: ICLR26 NeurIPS_ Neuro-anatomical Inductive Priors for Sphere-based Brain Decoding
title_zh: ICLR26 NeurIPS_ 基于球面的脑解码神经解剖归纳先验
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 7.0 订阅评分
score_label: 订阅评分
evidence: 使用神经解剖学归纳先验实现跨被试泛化fMRI解码
tldr: "fMRI解码中个体解剖差异导致对齐困难，现有方法将其视为噪声，牺牲几何保真度。本文提出NeurIPS框架，将解剖差异转化为归纳先验，结合选择性ROI球形标记器和结构引导混合专家模型，显式利用皮层特征。在自然场景数据集上，表面解码器性能达到新SOTA，与强1D基线持平，收敛速度极快（10 epochs vs. 600），仅需20%数据即可适应新被试，且因果证据表明增益来自解剖先验而非记忆效应。"
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 976, \"height\": 977}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-002.webp\", \"caption\": \"\", \"page\": 1, \"index\": 2, \"width\": 1588, \"height\": 889}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-003.webp\", \"caption\": \"\", \"page\": 5, \"index\": 3, \"width\": 1007, \"height\": 1007}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-004.webp\", \"caption\": \"\", \"page\": 5, \"index\": 4, \"width\": 1491, \"height\": 404}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-005.webp\", \"caption\": \"\", \"page\": 5, \"index\": 5, \"width\": 916, \"height\": 916}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-006.webp\", \"caption\": \"\", \"page\": 5, \"index\": 6, \"width\": 916, \"height\": 916}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-007.webp\", \"caption\": \"\", \"page\": 5, \"index\": 7, \"width\": 1592, \"height\": 458}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-008.webp\", \"caption\": \"\", \"page\": 6, \"index\": 8, \"width\": 2313, \"height\": 436}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-009.webp\", \"caption\": \"\", \"page\": 6, \"index\": 9, \"width\": 566, \"height\": 366}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-010.webp\", \"caption\": \"\", \"page\": 6, \"index\": 10, \"width\": 697, \"height\": 431}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-011.webp\", \"caption\": \"\", \"page\": 6, \"index\": 11, \"width\": 566, \"height\": 367}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-012.webp\", \"caption\": \"\", \"page\": 6, \"index\": 12, \"width\": 2311, \"height\": 434}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-013.webp\", \"caption\": \"\", \"page\": 6, \"index\": 13, \"width\": 697, \"height\": 431}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-014.webp\", \"caption\": \"\", \"page\": 7, \"index\": 14, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-015.webp\", \"caption\": \"\", \"page\": 7, \"index\": 15, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-016.webp\", \"caption\": \"\", \"page\": 7, \"index\": 16, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-017.webp\", \"caption\": \"\", \"page\": 7, \"index\": 17, \"width\": 2670, \"height\": 1340}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-018.webp\", \"caption\": \"\", \"page\": 7, \"index\": 18, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-019.webp\", \"caption\": \"\", \"page\": 7, \"index\": 19, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-020.webp\", \"caption\": \"\", \"page\": 8, \"index\": 20, \"width\": 745, \"height\": 746}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-021.webp\", \"caption\": \"\", \"page\": 8, \"index\": 21, \"width\": 745, \"height\": 746}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-022.webp\", \"caption\": \"\", \"page\": 8, \"index\": 22, \"width\": 869, \"height\": 994}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-023.webp\", \"caption\": \"\", \"page\": 8, \"index\": 23, \"width\": 746, \"height\": 994}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-024.webp\", \"caption\": \"\", \"page\": 8, \"index\": 24, \"width\": 422, \"height\": 994}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-025.webp\", \"caption\": \"\", \"page\": 8, \"index\": 25, \"width\": 423, \"height\": 994}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-026.webp\", \"caption\": \"\", \"page\": 10, \"index\": 26, \"width\": 585, \"height\": 436}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-027.webp\", \"caption\": \"\", \"page\": 10, \"index\": 27, \"width\": 1691, \"height\": 333}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-028.webp\", \"caption\": \"\", \"page\": 10, \"index\": 28, \"width\": 1658, \"height\": 871}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-029.webp\", \"caption\": \"\", \"page\": 10, \"index\": 29, \"width\": 608, \"height\": 377}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-030.webp\", \"caption\": \"\", \"page\": 10, \"index\": 30, \"width\": 4524, \"height\": 463}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-031.webp\", \"caption\": \"\", \"page\": 10, \"index\": 31, \"width\": 1693, \"height\": 333}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-032.webp\", \"caption\": \"\", \"page\": 10, \"index\": 32, \"width\": 1693, \"height\": 333}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-033.webp\", \"caption\": \"\", \"page\": 19, \"index\": 33, \"width\": 873, \"height\": 873}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-034.webp\", \"caption\": \"\", \"page\": 19, \"index\": 34, \"width\": 565, \"height\": 349}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-035.webp\", \"caption\": \"\", \"page\": 19, \"index\": 35, \"width\": 564, \"height\": 349}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-036.webp\", \"caption\": \"\", \"page\": 20, \"index\": 36, \"width\": 3509, \"height\": 237}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-037.webp\", \"caption\": \"\", \"page\": 20, \"index\": 37, \"width\": 3509, \"height\": 237}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-038.webp\", \"caption\": \"\", \"page\": 20, \"index\": 38, \"width\": 3509, \"height\": 237}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-039.webp\", \"caption\": \"\", \"page\": 24, \"index\": 39, \"width\": 1166, \"height\": 871}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-040.webp\", \"caption\": \"\", \"page\": 24, \"index\": 40, \"width\": 1168, \"height\": 871}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-041.webp\", \"caption\": \"\", \"page\": 24, \"index\": 41, \"width\": 1168, \"height\": 871}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-042.webp\", \"caption\": \"\", \"page\": 24, \"index\": 42, \"width\": 1159, \"height\": 871}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-043.webp\", \"caption\": \"\", \"page\": 24, \"index\": 43, \"width\": 359, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-044.webp\", \"caption\": \"\", \"page\": 24, \"index\": 44, \"width\": 360, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-045.webp\", \"caption\": \"\", \"page\": 24, \"index\": 45, \"width\": 359, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-046.webp\", \"caption\": \"\", \"page\": 24, \"index\": 46, \"width\": 359, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-047.webp\", \"caption\": \"\", \"page\": 24, \"index\": 47, \"width\": 359, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-048.webp\", \"caption\": \"\", \"page\": 24, \"index\": 48, \"width\": 360, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-049.webp\", \"caption\": \"\", \"page\": 24, \"index\": 49, \"width\": 359, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-050.webp\", \"caption\": \"\", \"page\": 24, \"index\": 50, \"width\": 360, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-051.webp\", \"caption\": \"\", \"page\": 26, \"index\": 51, \"width\": 1242, \"height\": 467}, {\"url\": \"assets/figures/local-pdf/local-20260606-194318592912-iclr26-neurips_-neuro-anatomical-inductive-priors-for-sphere-based-b/fig-052.webp\", \"caption\": \"\", \"page\": 26, \"index\": 52, \"width\": 1242, \"height\": 467}]"
motivation: 解决个体解剖差异对fMRI解码泛化性的影响，将其从干扰转化为预测信号。
method: 提出NeurIPS框架，创新包括选择性ROI球形标记器（SRST）和结构引导混合专家（SG-MoE），用皮层特征建模个体解剖。
result: "在NSD数据集上实现表面解码器SOTA，性能媲美1D基线，收敛快60倍，且仅用20%数据可快速适应新被试。"
conclusion: 利用解剖先验可实现高效、鲁棒且可扩展的脑解码，增益源于皮层特征而非被试ID记忆。
---

## 摘要
可泛化的fMRI解码因对齐解剖结构独特的大脑信号这一挑战而受阻。当前方法将这种解剖变异视为噪声，造成了一种虚假的性能-保真度权衡：高效的1D编码器反而优于几何准确的表面模型。我们认为这种权衡源于两个核心不匹配：低效的表面令牌化以及未能将解剖结构用作预测信号。我们提出NeurIPS框架，通过将解剖变异从干扰因素重新定义为强大的归纳先验，改进基于表面的解码。NeurIPS融合了两项创新：用于高效几何编码的选择性ROI球形令牌化器（SRST），以及利用皮层特征显式建模个体解剖结构的结构引导专家混合（SG-MoE）。在自然场景数据集上，NeurIPS为表面解码器建立了新的最先进水平，并实现了与强1D基线相当的性能。这一成就是以空前的效率取得的，模型收敛速度显著更快（10轮 vs. 600轮）。这种效率使得仅用20%的数据就能快速适应新受试者，并确保在扩展训练队列时鲁棒地扩展。消融实验提供了因果证据，表明这些增益是由模型对皮层特征的利用驱动的，而非记忆受试者ID。通过利用解剖先验，NeurIPS为鲁棒、可泛化的脑解码提供了一条原则性的、可扩展的路径。

## Abstract
Generalizable fMRI decoding is hindered by the challenge of aligning signals from anatomically unique brains. Prevailing methods treat this anatomical vari- ation as noise, creating a false performance-fidelity trade-off where efficient 1D encoders outperform geometrically faithful surface-based models. We argue this trade-off is an artifact of two core mismatches: inefficient surface tokenization and the failure to use anatomy as a predictive signal. We present NeurIPS, a framework that improves surface-based decoding by reframing anatomical varia- tion from a nuisance to a powerful inductive prior. NeurIPS unites two innova- tions: a Selective ROI Spherical Tokenizer (SRST) for efficient geometric en- coding, and a Structure-Guided Mixture of Experts (SG-MoE) that explicitly models individual anatomy using cortical features. On the Natural Scenes Dataset, NeurIPS establishes a new state-of-the-art for surface decoders and achieves per- formance comparable to strong 1D baselines. This is achieved with unprecedented efficiency, as the model converges dramatically faster (10 vs. 600 epochs). This efficiency enables rapid adaptation to new subjects using only 20% of data and ensures robust scalability as the training cohort is expanded. Ablations provide causal evidence that these gains are driven by the model’s use of cortical features, not by memorizing subject IDs. By leveraging anatomical priors, NeurIPS pro- vides a principled and scalable path toward robust, generalizable brain decoding.1

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文直接对应“脑解码”“神经先验”“fMRI表示”“表示对齐”，属于跨被试、几何保持的脑解码前沿研究。
- **启发与意义**：将皮层解剖从干扰变量提升为强归纳偏置，证明了表面模型可以在效率与性能上与扁平1D模型竞争，为构建生物保真且可泛化的脑解码器提供了新路径。
- **可借鉴点**：选择性ROI球面令牌化（SRST）和结构引导门控混合专家（SG‑MoE）的设计可迁移到其他神经影像表示学习任务；快速新被试适应策略对脑机接口部署有直接参考价值。
- **阅读建议**：建议关注实验中对解剖特征的实际驱动作用及消融验证，重点理解“用解剖替代ID”的设计哲学；若从事几何深度学习或fMRI解码，应细读方法细节和扩展性分析。

## 1. 论文的核心问题与整体含义
- 当前fMRI解码中，解剖结构独特的个体差异是跨被试泛化的主要障碍。
- 主流方法将其视为噪声，导致几何保真的表面模型性能反而不及丢弃空间结构的1D模型，形成一种虚假的性能‑保真度权衡。
- 本文的核心观点是：这种权衡源于**低效的表面令牌化**和**未能将解剖用作预测信号**；应当把个体解剖从干扰重新定义为强大的归纳先验。
- 整体含义是：通过正确的几何编码和解剖条件计算，表面解码器不仅能追平1D基线，而且能获得更快的收敛、更高效的新被试适应以及更强的群体扩展鲁棒性。

## 2. 论文提出的方法论
- **框架整体**：NeurIPS采用双解码器架构——语义解码器对齐CLIP空间，感知解码器对齐VAE空间，两者共同引导一个冻结的扩散模型生成图像。
- **选择性ROI球形令牌化器 (SRST)**：
  - 仅对视觉相关ROI顶点做球面卷积，而非对整个半球，使处理的顶点数从 40,962×2 降至 9,488，减少约88.7%的计算量。
  - 保留球面拓扑，生成多尺度的局部令牌和全局上下文令牌，既保持几何信息又控制令牌预算。
- **结构引导专家混合 (SG‑MoE)**：
  - 在Transformer的前馈网络层中，用 $N=16$ 个专家和 top‑$k$ ($k=6$) 路由。
  - 路由决策仅依赖个体的皮层解剖特征（厚度、曲率、沟深、面积），而非被试ID，迫使专家学习跨被试共享的“结构‑功能”映射。
  - 形式上，给定输入令牌 $e$ 和结构嵌入 $e_{s,stru}$，路由权重 $w = R(e| e_{s,stru})$，输出为 $Z^{(i)} = \sum_{k=1}^{K} \pi_k(X_s^{(i)}, A_s^{(i)}) \cdot \text{Expert}_k(X_s^{(i)})$。
- **条件信息瓶颈视角**：目标为最大化 $I(Z;Y|A_s)$ 而压制 $I(Z;\text{ID}|A_s)$，通过SRST增强任务相关信息，通过SG‑MoE降低身份信息。

## 3. 实验设计
- **数据集**：Natural Scenes Dataset (NSD)，4名完整被试（subj01,02,05,07），额外4名被试用于扩展性实验，共享测试集1,000张图像。
- **基准方法**：
  - 1D向量模型：Mind‑Vis、Takagi & Nishimoto、MindEye、MindBridge、UMBRAE、NeuroPictor；
  - 球面/表面模型：Gu et al.、Yu et al.、SIM。
- **评估指标**：8个标准指标——像素相关性(PixCor)、结构相似性(SSIM)、AlexNet(2)/ (5)、InceptionV3、CLIP、EfficientNet‑B1距离、SwAV‑ResNet50距离。
- **实验设置**：
  - 跨被试训练（一模型四被试），比较重建质量，新被试适应（仅用20%数据微调），群体规模扩展（4被试 vs 8被试）。
  - 消融：去掉全局令牌、用被试ID门控、去掉感知/语义解码、结构融合方式、全脑输入、功能特征门控、去掉单半球令牌、打乱球面位置、缩小感受野等。
  - 可解释性分析：专家路由对脑区/被试的依赖、结构特征归因、不同视觉ROI图谱的影响、ROI层级贡献热图。

## 4. 资源与算力
- 所有实验在**80GB Nvidia A800 GPU**上进行。
- 训练配置：感知解码训练100个epoch，batch size 64；语义解码训练600个epoch，batch size 96（四被试训练时每被试24样本）。
- 微调设置与训练相同。论文未明确报告使用的GPU数量，但从训练规模看，实验应可在单卡或少量GPU上完成。

## 5. 实验数量与充分性
- 共包含**多组大型实验**：
  - 主表1：对比6种1D方法和3种表面方法，提供全面对比。
  - 新被试适应：验证不同数据比例(20%–100%)和epoch的适应曲线，并展示定性重建。
  - 扩展性：从4被试到8被试，评估性能退化。
  - 消融实验：12项配置，逐一控制组件，提供因果证据。
  - 可解释性分析：专家路由依赖性、结构特征归因、不同图谱对比、层级贡献热图。
  - 额外任务：脑描述生成和脑检索。
- 实验设计**充分且公平**：基线均采用相同扩散后端和推理超参数，损失函数、数据划分对齐，部分基线复现并强化。消融覆盖了主要创新点，可解释性分析验证了设计合理性。实验数量丰富，多角度支撑结论。

## 6. 主要结论与发现
- **性能突破**：在表面解码器中达到新SOTA，CLIP指标93.2%，媲美强1D模型（MindBridge 94.7%），证实几何保真并不牺牲性能。
- **极速收敛**：仅需10个epoch即可收敛，而传统方法需要200‑600 epoch。
- **高效适应**：预训练模型仅用新被试20%数据微调，即可快速达到接近全量数据的性能。
- **稳健扩展**：当训练队列从4人扩展到8人时，性能下降最小（CLIP仅降0.6点），解剖条件路由将变异性视为信号而非噪声。
- **解剖驱动**：消融和归因分析证明，增益源于模型对皮层特征的利用，而非记忆被试ID；SRST的几何保持和SG‑MoE的解剖门控是关键。

## 7. 优点
- **原则性创新**：将解剖变异从“噪声处理”转变为“归纳偏置核心”，理论清晰（信息瓶颈视角）。
- **双重设计互补**：SRST保障几何信息与计算效率，SG‑MoE实现解剖感知的跨被试泛化，两者紧密结合。
- **实证扎实**：多指标、多基线、多被试的评估，消融和可解释性证据链完整，支撑核心主张。
- **实用效率突出**：训练和适应速度显著优于先前方法，对真实世界的BCI部署具有直接价值。
- **可复现性**：承诺开源代码、数据和模型权重，实验细节描述充分。

## 8. 不足与局限
- **视觉任务限定**：当前仅在静态自然图像解码上验证，限制于视觉ROI，对多模态、全脑任务（如电影、语言）的泛化性未经验。
- **依赖配准质量**：方法假设fMRI已通过FreeSurfer精确配准到标准球面，上游配准误差可能影响效果。
- **被试规模仍有限**：虽扩展到8人，但距离真实大规模群体（数十至数百人）的充分验证仍有距离。
- **缺乏零样本泛化评估**：仅测试了微调适应，未评估在完全未训练被试上的零样本解码能力。
- **解剖特征选择**：所用四类皮层特征虽可解释，但可能存在更强预测力的结构特征未被探索。
- **伦理与隐私**：未详细讨论脑数据隐私保护、模型滥用的更具体防护措施。

（完）
