---
title: CVPR26 Continual Learning for fMRI-Based Brain Disorder Diagnosis with Task Modulated Low-Rank Adaptation
title_zh: CVPR26 基于任务调制低秩适应的fMRI脑部疾病诊断持续学习
authors: Qianyu Chen; Shujian Yu
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-185705375190-cvpr26-continual-learning-for-fmri-based-brain-disorder-diagnosis-wi.pdf
tags: ["paper:本地PDF", "query:local-pdf"]
score: 0.0 订阅评分
score_label: 订阅评分
evidence: 不相关
tldr: 本文针对fMRI脑疾病诊断中数据从不同机构顺序到达导致的灾难性遗忘问题，提出首个持续学习框架。该框架利用任务调制低秩适应，包含结构感知变分自编码器生成功能连接矩阵、多级知识蒸馏对齐新旧数据表征，以及分层上下文赌博机自适应重放采样。在多站点抑郁症、精神分裂症和自闭症数据集上，生成模型增强了数据增广质量，整体方法在减轻遗忘方面显著优于现有技术。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-185705375190-cvpr26-continual-learning-for-fmri-based-brain-disorder-diagnosis-wi/fig-001.webp\", \"caption\": \"\", \"page\": 3, \"index\": 1, \"width\": 876, \"height\": 607}, {\"url\": \"assets/figures/local-pdf/local-20260606-185705375190-cvpr26-continual-learning-for-fmri-based-brain-disorder-diagnosis-wi/fig-002.webp\", \"caption\": \"\", \"page\": 8, \"index\": 2, \"width\": 3346, \"height\": 1676}]"
motivation: 真实场景中，fMRI临床数据从不同机构顺序到来，现有模型无法有效适应新数据且会严重遗忘旧知识。
method: 提出首个fMRI跨站点诊断的持续学习框架，融合生成式重放、多级知识蒸馏和自适应重放采样。
result: 在多站点脑疾病数据集上，所提框架大幅超越现有持续学习方法，显著缓解灾难性遗忘。
conclusion: 该框架为异质临床站点的fMRI脑疾病诊断提供了实用的持续学习解决方案。
---

## 摘要
功能磁共振成像（fMRI）被广泛用于研究和诊断脑部疾病，功能连接（FC）矩阵为大规模神经交互提供了强大的表示。然而，现有诊断模型要么在单一站点上训练，要么在完全多站点访问下训练，使其不适用于临床数据从不同机构按顺序到达的真实场景。这导致泛化能力有限和严重的灾难性遗忘。本文提出了首个专为跨异构临床站点基于fMRI的诊断而设计的持续学习框架。我们的框架引入了一个结构感知变分自编码器，可合成患者和对照组的真实FC矩阵。在此生成主干基础上，我们开发了一种多层次知识蒸馏策略，将新站点数据与重放样本的预测和图表示对齐。为进一步提高效率，我们纳入了一种分层上下文赌博机方案用于自适应重放采样。在重度抑郁症（MDD）、精神分裂症（SZ）和自闭症谱系障碍（ASD）的多站点数据集上的实验表明，所提出的生成模型提高了数据增强质量，且整体持续学习框架在缓解灾难性遗忘方面显著优于现有方法。我们的代码可在 https://github.com/4me808/FORGE 获取。

## Abstract
Functional magnetic resonance imaging (fMRI) is widely used for studying and diagnosing brain disorders, with functional connectivity (FC) matrices providing pow- erful representations of large-scale neural interactions. However, existing diagnostic models are trained either on a single site or under full multi-site access, making them unsuitable for real-world scenarios where clinical data ar- rive sequentially from different institutions. This results in limited generalization and severe catastrophic forget- ting. This paper presents the first continual learning frame- work specifically designed for fMRI-based diagnosis across heterogeneous clinical sites. Our framework introduces a structure-aware variational autoencoder that synthesizes realistic FC matrices for both patient and control groups. Built on this generative backbone, we develop a multi-level knowledge distillation strategy that aligns predictions and graph representations between new-site data and replayed samples. To further enhance efficiency, we incorporate a hierarchical contextual bandit scheme for adaptive replay sampling. Experiments on multi-site datasets for major de- pressive disorder (MDD), schizophrenia (SZ), and autism spectrum disorder (ASD) show that the proposed generative model enhances data augmentation quality, and the over- all continual learning framework substantially outperforms existing methods in mitigating catastrophic forgetting. Our code is available at https://github.com/4me808/ FORGE.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：弱相关。本文聚焦持续学习框架，与读者关注的“fMRI representation”与“representation alignment”略有交集，但核心任务为跨站点疾病诊断，而非脑解码或神经先验建模。
- **启发与意义**：提出的结构感知图Transformer编码器（融合局部连接与谱位置编码）为fMRI表示学习提供了新视角；双层次知识蒸馏中的图级特征对齐可推广至多视图约束或跨任务一致性保持。
- **可借鉴点**：FCM-VAE 的生成式重放机制与低秩解码器设计可迁移至 fMRI 数据增强或隐私保护下的表示学习；分层上下文采样策略也对少样本表征学习中的样本筛选有参考价值。
- **阅读建议**：若关注 fMRI 表示的对齐与泛化，可重点阅读第 3.3 节编码器设计与 3.2 节蒸馏损失；若仅针对性脑解码，则仅需了解持续学习如何稳定表示，无需深究动态重放策略。

## 1. 核心问题与整体含义
- 真实临床场景中，不同站点的 fMRI 数据按序到达，现有模型只能在单一站点或全部数据离线训练，无法持续适应新数据且会严重遗忘旧知识（灾难性遗忘）。
- 本文旨在提出首个面向多站点、流式 fMRI 数据的持续学习框架，在实现跨站点诊断的同时保护隐私、缓解遗忘，从而提升真实部署可行性。

## 2. 提出的方法论
- **总体框架 FORGE**：集成生成式重放、双层次知识蒸馏和分层自适应采样。
- **FCM-VAE (生成式重放核心)**
  - *结构感知图 Transformer 编码器*：节点特征拼接该节点的FC向量、谱位置嵌入 ($\phi_p$) 和度；注意力分数引入局部邻接偏置 ($\tilde{A}$) 和谱位置偏置 ($(\Phi W^\phi_h)(\Phi W^\phi_h)^\top/\sqrt{d_h}$)；读出后输出隐变量均值和方差。
  - *低秩解码器*：将 FC 矩阵转为非负强度值后，用 Poisson 似然重建边；率参数由共享基线 $\nu_e$ 加低秩双线性项 $\sum_r \alpha_r U_{ur}(z)U_{vr}(z)$ 组成；通过邻接矩阵软门控 $G = \sigma(A^{adj} + \logit(\varepsilon))$ 调制输出。
  - *线性高斯监督头*：从隐变量 $z$ 直接预测标签 $y \sim \mathcal{N}(\beta_0 + \bm{\beta}^\top z, \sigma_y^2)$，训练时最大化 ELBO: $\mathcal{L} = \mathbb{E}_{q_\phi}[\log p_\psi(A|z)] + \mathbb{E}_{q_\phi}[\log p_\theta(y|z)] - \beta D_{KL}(q_\phi(z|\cdot)\|p(z))$。
- **双层次知识蒸馏**
  - 针对当前站点模型（学生）与先前已冻结模型（教师）进行对齐：重放合成样本，联合最小化当前分类损失、重放样本的分类损失、logits 间的 MSE ($\|h_\theta(G)-u\|_2^2$) 和 graph readout 间的 MSE ($\|\rho(E_\theta(G))-r\|_2^2$)，以实现稳定知识保留。
- **分层上下文 Thompson 采样 (HCTS)**
  - 站点级：以准确率和遗忘量为上下文，经 Thompson 采样动态分配各站点重放配额 $k_i$。
  - 样本级：以预测 margin 和嵌入贴近度作为上下文，选出 top-$k_i$ 样本并通过最远优先遍历在 readout 空间进一步去冗余，提升缓冲区代表性。

## 3. 实验设计
- **数据集与任务**：
  - ABIDE-I (ASD)：4 个最大站点（184、99、145、101 样品）。
  - REST-meta-MDD (MDD)：5 个最大站点（146、96、93、470、144 样品）。
  - BSNIP (SZ)：5 个最大站点（297、239、197、152、120 样品）。
  - 各站点数据按 7:3 划分训练/测试集，按站点顺序逐一到达，形成持续学习任务序列。
- **基准对比方法**：
  - 传统 CL：EWC、SI、PackNet、ER、LwF、DER、DER++。
  - 图 CL：TWP、UGCL、PDGNNs。
  - 所有方法均使用 GCN 作为分类骨干，重放缓冲区大小固定为 256（ER、DER、DER++ 及本方法）。
- **评估指标**：平均即时准确率 AAA 和遗忘率 FOR。

## 4. 资源与算力
- 论文未提及 GPU 型号、数量、内存大小或训练耗时等具体计算资源信息。因此无法评估算力需求。

## 5. 实验数量与充分性
- 至少包含 3 个多站点基准数据集上的持续学习实验，每个数据集测试 11 种对比方法（含基础 GCN）。
- 增广实验对比 4 种生成模型（ReGate、BrainNetGAN、GR-SPD-GAN 及 FCM-VAE），分别在 3 个数据集上用 GCN 评估。
- 消融实验去掉图知识蒸馏 (GKD)、logits 知识蒸馏 (LKD)、HCTS 后在 3 个数据集上验证。
- 敏感性分析探讨重放缓冲区大小（128、256、384）和 FC 矩阵阈值 $\tau$（0.2–0.5）的影响。
- 实验设计较为充分，对比方法覆盖主流范式，多重指标和消融测试确保了公平性与客观性。

## 6. 主要结论与发现
- FORGE 在所有数据集的持续学习场景中均取得最高 AAA 和最低 FOR，显著优于现有方法，尤其在低缓冲区时优势明显。
- FCM-VAE 生成的质量优于其他图生成模型，增强后分类精度最高。
- 双层次知识蒸馏和分层自适应采样相互补充，共同抑制遗忘，其中 HCTS 作用最显著。

## 7. 优点
- 首个在 fMRI 跨站点诊断中引入持续学习框架，切合临床数据流式到达的实际痛点。
- 针对性设计了 FC 矩阵专属的结构感知生成模型（局部邻接 + 谱位置编码 + 低秩解码），在隐私保护前提下实现了高质量生成。
- 多级知识与自适应采样的结合，显著提升了记忆稳定性，超越现有图持续学习方法。

## 8. 不足与局限
- 研究仅面向静态功能连接矩阵的分类任务，未涉及动态 FC 或回归/预测任务。
- 生成模型依赖特定阈值和预处理流程，阈值选择虽做了敏感性分析，但跨数据集超参仍需调整。
- 没有分析计算开销和训练时间，未讨论在更大规模站点数或实时场景下的可扩展性。
- 实验限于同种疾病内不同站点，未验证跨疾病、跨模态的持续学习能力。
- 生成重放虽保护原始数据隐私，但合成样本的质量下降可能引入潜在偏差。

（完）
