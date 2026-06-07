---
title: ICLR26 Stochastic Optimal Control for Continuous-Time fMRI Representation Learning
title_zh: 面向连续时间fMRI表示学习的随机最优控制
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-195147408637-iclr26-stochastic-optimal-control-for-continuous-time-fmri-represent.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 3.0 订阅评分
score_label: 订阅评分
evidence: 从异质源fMRI数据中学习鲁棒表征
tldr: 针对功能磁共振成像数据的时间不规则性和噪声问题，现有自监督学习方法常丢弃关键时间信息。本文提出随机最优控制框架，将自监督学习建模为连续时间潜在动力学控制问题，统一掩码自编码和联合嵌入预测，并采用仿真自由推理实现高效扩展，在下游任务中达到最优性能。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-195147408637-iclr26-stochastic-optimal-control-for-continuous-time-fmri-represent/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 1162, \"height\": 924}, {\"url\": \"assets/figures/local-pdf/local-20260606-195147408637-iclr26-stochastic-optimal-control-for-continuous-time-fmri-represent/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 1024, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-195147408637-iclr26-stochastic-optimal-control-for-continuous-time-fmri-represent/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 2325, \"height\": 231}, {\"url\": \"assets/figures/local-pdf/local-20260606-195147408637-iclr26-stochastic-optimal-control-for-continuous-time-fmri-represent/fig-004.webp\", \"caption\": \"\", \"page\": 4, \"index\": 4, \"width\": 796, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-195147408637-iclr26-stochastic-optimal-control-for-continuous-time-fmri-represent/fig-005.webp\", \"caption\": \"\", \"page\": 10, \"index\": 5, \"width\": 11972, \"height\": 2677}, {\"url\": \"assets/figures/local-pdf/local-20260606-195147408637-iclr26-stochastic-optimal-control-for-continuous-time-fmri-represent/fig-006.webp\", \"caption\": \"\", \"page\": 34, \"index\": 6, \"width\": 2040, \"height\": 706}, {\"url\": \"assets/figures/local-pdf/local-20260606-195147408637-iclr26-stochastic-optimal-control-for-continuous-time-fmri-represent/fig-007.webp\", \"caption\": \"\", \"page\": 39, \"index\": 7, \"width\": 3980, \"height\": 3777}, {\"url\": \"assets/figures/local-pdf/local-20260606-195147408637-iclr26-stochastic-optimal-control-for-continuous-time-fmri-represent/fig-008.webp\", \"caption\": \"\", \"page\": 40, \"index\": 8, \"width\": 2888, \"height\": 1932}, {\"url\": \"assets/figures/local-pdf/local-20260606-195147408637-iclr26-stochastic-optimal-control-for-continuous-time-fmri-represent/fig-009.webp\", \"caption\": \"\", \"page\": 41, \"index\": 9, \"width\": 2878, \"height\": 1932}]"
motivation: 功能磁共振成像数据具有时间不规则性和噪声，现有自监督方法常因离散化或平均而丢失关键时间信息。
method: 将自监督学习重构为随机最优控制问题，优化连续时间潜在动力学控制策略，统一掩码自编码与联合嵌入预测，并引入仿真自由推理。
result: 模型在多种下游应用中取得最先进表现，验证了基于随机最优控制的连续时间表征学习有效性。
conclusion: 该框架解决了fMRI时间不规则性难题，为神经影像分析提供了鲁棒且高效的连续时间表征学习方法。
---

## 摘要
从功能性磁共振成像（fMRI）中学习鲁棒表示，从根本上受到异构数据固有的时间不规则性和噪声的挑战。现有的自监督学习（SSL）方法通常通过离散化或平均fMRI信号来丢弃关键的时间信息。为了解决这一问题，我们引入一种新颖的框架，将SSL重新表述为随机最优控制（SOC）问题。我们的方法将大脑活动建模为连续时间的潜在动力学，通过优化一个对时间不规则性不可知的控制策略，学习大脑动力学鲁棒的表示。该SOC框架自然地统一了掩码自编码（MAE）和联合嵌入预测（JEPA），以提取紧凑的、控制衍生的表示。此外，一种无仿真的推理策略确保了对大规模fMRI数据集的计算效率和可扩展性。我们的模型在多种下游应用中展示了最先进的性能，凸显了基于SOC的连续时间表示学习框架的潜力。

## Abstract
Learning robust representations from functional magnetic resonance imaging (fMRI) is fundamentally challenged by the temporal irregularity and noise in- herent in data from heterogeneous sources. Existing self-supervised learning (SSL) methods often discard critical temporal information by discretizing or averaging fMRI signals. To address this, we introduce a novel framework that reframes SSL as a Stochastic Optimal Control (SOC) problem. Our approach models brain activity as continuous-time latent dynamics, learning a robust representation of brain dynamics by optimizing a control policy that is agnostic to the temporal irreg- ularity. This SOC framework naturally unifies masked autoencoding (MAE) and joint-embedding prediction (JEPA) to extract compact, control-derived represen- tations. Furthermore, a simulation-free inference strategy ensures computational efficiency and scalability for large-scale fMRI datasets. Our model demonstrates state-of-the-art performance across diverse downstream applications, highlighting the potential of the SOC-based continuous-time representation learning framework.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文直接面向「fMRI representation」学习，通过连续时间潜在动力学建模与随机最优控制提取鲁棒的表征，与脑解码、神经先验、多视角约束和表征对齐等方向高度相关。
- **启发与意义**：首次将随机最优控制引入自监督fMRI表示学习，统一MAE和JEPA并提供无仿真高效推理，为处理异质采样率下的大规模脑影像表征提供了全新范式。
- **可借鉴点**：可借鉴其将控制策略作为编码器并提取聚合特征 $A$ 的思路，用于脑解码中的表征对齐或作为神经先验注入下游预测模型。
- **阅读建议**：建议重点关注方法论部分中对SOC、MAE与JEPA统一目标的推导，以及线性化SDE实现无仿真推理的工程细节，适合研究连续时间神经表征的读者。

## 1. 论文的核心问题与整体含义
fMRI信号反映脑动力学，但来自不同采集协议的异构数据具有时间不规则性（如不同重复时间TR）和高噪声。现有自监督学习方法（如图像块化、静态功能连接）常丢弃细粒度的时间动态信息，难以在多站点数据上统一建模。为此，论文提出将fMRI自监督学习重新表述为**随机最优控制（Stochastic Optimal Control, SOC）**问题，把大脑活动建模为连续时间潜在动力学，通过优化控制策略学习对时间不规则性鲁棒的表征，并自然统一掩码自编码（MAE）与联合嵌入预测（JEPA）。

## 2. 论文提出的方法论

### 2.1 核心思想
- 假设fMRI观测 $Y$ 由连续时间潜在状态 $X_t$ 经随机微分方程 (SDE) 驱动生成，先验为简单的扩散过程 $dX_t = \sigma(t)dW_t$。
- 通过加入控制项 $\alpha^\star$ 将先验调整到与观测一致的后验过程 $dX_t^\star = [f(t,X_t^\star) + \sigma(t)\alpha^\star(t,X_t^\star;Y)]dt + \sigma(t)dW_t$。
- 将控制策略 $\alpha_\theta$ 作为编码器（Transformer），优化SOC目标等同于最大化证据下界（ELBO），从而得到最优控制策略，其聚合特征 $A$ 作为通用脑表征。

### 2.2 统一MAE与JEPA的训练目标
- **MAE部分**：随机掩蔽部分时间点 $Y_{\text{tar}}$，利用上下文 $Y_{\text{ctx}}$ 编码得到控制信号 $\alpha_\theta$，驱动潜在状态预测被掩蔽时刻的状态并重建原始信号，目标包含重构损失 $\|y_t - D_\psi(\tilde{\alpha}_t)\|^2$。
- **JEPA部分**：引入辅助变量 $\tilde{\alpha}_t$ 作为潜在预测目标，通过指数移动平均 (EMA) 的目标编码器 $\bar{\alpha}_{\bar{\theta}}$ 产生稳定目标，在线编码器 $\alpha_\theta$ 预测 $\tilde{\alpha}_t$ 并与其对齐，目标包含正则项 $\|\tilde{\alpha}_t - \bar{\alpha}_t\|^2$，防止过度拟合噪声。
- 统一训练目标（重缩放后）：
```math
\hat{\mathcal{L}}_{\theta,\psi} = \mathbb{E}_{X^\theta \sim (3)} \left[ \int_0^T \sigma_q^2 \|\alpha_t^\theta\|^2 dt - \sum_{t \in \mathcal{T}_{\text{tar}}} \mathbb{E}_{\tilde{\alpha}_t^\theta \sim p_\theta(\cdot|X_t^\theta)} \left( \|y_t - D_\psi(\tilde{\alpha}_t^\theta)\|^2 + \tau \|\tilde{\alpha}_t^\theta - \bar{\alpha}_t^\theta\|^2 \right) \right]
```
其中 $\tau$ 为平衡因子。

### 2.3 无仿真推理（Simulation‑Free Inference）
- 假设控制SDE的漂移项可局部线性化 $dX_t^\theta = \bigl[-D_{t_i}X_t^\theta + \alpha_{t_i}^\theta\bigr]dt + dW_t$，其中 $D_{t} = V\Lambda_t V^\top$ 可对角化，可推导出潜在状态在任意时刻的均值与协方差的闭式解（Theorem 3.2）。
- 利用并行扫描算法可在 $O(\log k)$ 时间计算所有时间点的矩，完全避免数值SDE求解器，使大规模预训练成为可能。

## 3. 实验设计
- **预训练数据**：UK Biobank（UKB）41,072名受试者的静息态fMRI，划分80%训练，20%内部评估。
- **下游评估数据集**：
    - 内部：UKB 20%留出集（年龄回归、性别分类）。
    - 外部：HCP‑A（年龄、性别、认知分数回归/分类），ABIDE（自闭症诊断），ADHD200（ADHD诊断），HCP‑EP（早期精神病诊断）。
- **对比方法**：
    - 任务特定模型：BrainNetCNN, BrainGNN, BrainNetTF。
    - 通用SSL模型：MoCo, BYOL。
    - fMRI专用SSL模型：BrainLM, BrainMass, Brain‑JEPA, BrainHarmonix‑F。
- **评估协议**：线性探测（冻结预训练编码器，仅训练线性头）和完全微调。每个任务三次随机分割取平均。

## 4. 资源与算力
- 预训练效率对比：在4张NVIDIA RTX 3090上，BDO（86M参数）仅需约**15 GPU小时**；对比之下，MoCo需174小时、BYOL需165小时、BrainLM需496小时、BrainMass需244小时，BDO在资源效率上显著占优。
- 模型规模实验展示了从5M到86M参数的可扩展性，更大模型与更多预训练数据持续提升性能。

## 5. 实验数量与充分性
- **多任务多数据集评估**：覆盖回归、分类共6+种任务，在4个外部数据集上全面测试，实验丰富。
- **消融研究**：包括掩码比 $\gamma$ 影响、平衡因子 $\tau$ 消融（验证MAE与JEPA协同作用）、时间步数（NoTs）影响、模型和数据规模扩展分析、ROI分辨率扩展、有无TR失真的仿真实验、以及聚合策略（均值池化 vs PMA）对比。
- **额外对比**：与Brain‑JEPA、BrainHarmonix‑F、Solver‑based连续时间模型（Latent ODE, GRU‑ODE‑Bayes）进行公平比较，还对静息态模型泛化至任务态fMRI进行了评估。
- 所有结果均汇报多次运行均值与标准差，数据划分采用分层抽样确保训练/验证/测试集分布一致，实验设计客观、公平且充分。

## 6. 论文的主要结论与发现
- BDO通过连续时间潜在动力学与SOC框架学习到的控制衍生特征 $A$ 在多种下游任务中取得**最先进性能**，尤其在年龄回归和疾病分类上显著优于现有SSL模型。
- 无仿真推理使模型预训练极度高效（15 GPU小时），且5M小模型即可达到其他SSL大模型的水平。
- 嵌入空间可视化显示 $A$ 能线性捕捉与年龄相关的神经变异，Integrated Gradients分析揭示特征归因于已知功能网络中的老化或疾病相关脑区。
- 模型对时间尺度失真鲁棒，且无需针对不同TR重复采样即可直接迁移到序列长度各异的外部数据集。

## 7. 优点
- **新颖的建模视角**：首次将自监督fMRI表征学习构建为随机最优控制问题，理论基础坚实。
- **自然统一SSL目标**：在一个SOC框架内同时包含MAE重建和JEPA潜在预测，兼具细节重建与抗噪泛化能力。
- **突出的计算效率**：线性化SDE和并行扫描算法避免数值积分，显著降低预训练时间。
- **强泛化与可扩展性**：在大规模多站点数据上预训练后，仅需简单均值池化即可提取通用特征，且适用于不同TR、不同序列长度的外部数据。

## 8. 不足与局限
- **线性化近似误差**：局部线性化假设可能引入变分间隙，尤其在长序列分析中误差可能累积。
- **框架复杂性**：整体SOC + MAE + JEPA的组合较为复杂，调参（如 $\tau$, $\gamma$, 时间尺度）需要一定经验。
- **神经生物解释有限**：连续潜在动力学的内部维度解释主要依赖集成梯度等事后归因，对潜在状态演化的直接生理意义解读尚浅。
- **聚合方式单一**：当前主要采用均值池化提取特征 $A$，可能丢失时序细粒度信息，实验表明注意力池化能提升性能。
- **泛化到任务态**：虽然表现良好，但从静息态到任务态的迁移仍有一定性能下降。

## 9. （研究价值已放置于第一节）
（完）
