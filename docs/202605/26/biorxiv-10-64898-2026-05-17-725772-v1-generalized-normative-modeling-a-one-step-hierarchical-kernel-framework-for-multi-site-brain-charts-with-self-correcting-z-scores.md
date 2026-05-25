---
title: "Generalized Normative Modeling: A One-Step Hierarchical Kernel Framework for Multi-Site Brain Charts with Self-Correcting Z-Scores"
title_zh: 广义规范建模：一种用于多站点脑图表的一步式分层核框架，具有自校正 Z 分数
authors: "Li, M., Wang, Y., Jun, S., Bringas Vega, M. L. L., Valdes-Sosa, P. A., An, L., Jia, G."
date: 2026-05-20
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.17.725772v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 用于群体级脑先验的规范建模框架
tldr: 多中心神经影像研究中，批次效应污染个体z分数，影响其作为生物标志物的价值。本文提出广义标准化建模（GNM），一种一步式层次核回归框架，联合估计全局轨迹和站点特异性效应，利用NUFFT加速与GCV带宽选择，并借助z分数自校正特性消除残余站点方差。在ABIDE I皮层厚度和HarMNqEEG功率谱数据上，GNM相比现有方法产生了最一致的站点间z分数，且最佳保留了年龄信号，为精准精神病学提供了可靠的开源工具。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有方法或先谐调后建模导致残余效应泄露，或无法灵活建模多变量协变量交互，因此需要一种一步式的灵活框架。
method: 提出一步式层次核回归框架，联合估计全局与站点效应，利用NUFFT加速和GCV带宽选择，产生具有自校正特性的z分数。
result: 在两个多中心数据集上，相比四种方法，GNM生成的z分数站点不变性最强，且年龄信号保留最佳。
conclusion: GNM为多中心队列的个体推断提供了可靠工具，并开源了MATLAB工具箱，推动了标准化偏差作为临床生物标志物的应用。
---

## 摘要
规范建模将个体脑表型表达为相对于群体常模的 Z 分数，但在多站点研究中，批次效应会污染这些 Z 分数并削弱其生物标志物价值。现有方法要么在拟合规范模型之前对数据进行协调（ComBat+规范），让残余站点效应渗透到 Z 分数中，要么使用参数化一步法（GAMLSS、HBR），但这些方法无法灵活地建模多变量协变量交互作用。我们提出广义规范建模（GNM），这是一个一步式分层框架，通过 NUFFT 加速的核回归和 GCV 带宽选择共同估计全局轨迹和站点特定效应。由于 Z 分数是批次校正残差与批次校正规的比值，站点残差方差在代数上相互抵消——我们将这一性质称为自校正。在 ABIDE I 皮层厚度（387 名健康对照，11 个站点，68 个感兴趣区）和 HarMNqEEG 对数功率谱（1,564 名受试者，14 个站点，18 个通道 × 235 个频率区间）上，GNM 在四种方法中产生了最不受站点影响的 Z 分数和最佳的年龄信号保留。这项工作提供了一个带有声明式公式接口的开源 MATLAB 工具箱（https://github.com/LMNonlinear/Generalized-Normative-Modeling），能够在汇集的多站点队列中实现可靠的个体水平推断，并推动规范偏差作为精准精神病学和神经病学中的临床生物标志物的应用。

## Abstract
Normative modeling expresses individual brain phenotypes as z-scores relative to a population norm, but in multi-site studies batch effects contaminate these z-scores and undermine their biomarker value. Existing approaches either harmonize data before fitting a normative model (ComBat+Normative), letting residual site effects leak into z-scores, or use parametric one-step methods (GAMLSS, HBR) that cannot flexibly model multivariate covariate interactions. We propose Generalized Normative Modeling (GNM), a onestep hierarchical framework that jointly estimates the global trajectory and site-specific effects via NUFFT-accelerated kernel regression with GCV bandwidth selection. Because the z-score is the ratio of batch-corrected residual to batch-corrected scale, residual site variance cancels algebraically -- a property we term self-correction. On ABIDE I cortical thickness (387 HC, 11 sites, 68 ROIs) and HarMNqEEG log-power spectra (1,564 subjects, 14 sites, 18 channels x 235 frequency bins), GNM produced the most site-invariant z-scores and best age-signal preservation among four methods. This work provides an open-source MATLAB toolbox with a declarative formula interface (https://github.com/LMNonlinear/Generalized-Normative-Modeling), enabling reliable individual-level inference in pooled multi-site cohorts and advancing the use of normative deviations as clinical biomarkers in precision psychiatry and neurology.