---
title: "Generalized Normative Modeling: A One-Step Hierarchical Kernel Framework for Multi-Site Brain Charts with Self-Correcting Z-Scores"
title_zh: 广义规范建模：一种用于多站点脑图的自校正Z分数一步式分层核框架
authors: "Li, M., Wang, Y., Jun, S., An, L., Jia, G., Bringas Vega, M. L. L., Valdes-Sosa, P. A."
date: 2026-05-21
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.17.725772v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 使用分层核的人群水平脑标准建模
tldr: 针对多站点脑成像研究中批次效应污染规范建模z分数的问题，本文提出广义规范建模（GNM），一种一步式分层核回归框架。该方法联合估计全局轨迹与站点效应，通过自校正z分数消除残差站点方差，生成更稳健的个体脑图表。在ABIDE I和HarMNqEEG数据集上验证，GNM产生的z分数站点不变性最强且年龄信号保留最优，并提供了开源MATLAB工具箱。
source: biorxiv
selection_source: fresh_fetch
motivation: 多站点研究中批次效应会污染规范建模的z分数，降低其作为生物标志物的可靠性。
method: 提出一步式分层核回归框架，利用NUFFT加速和GCV带宽选择，联合估计全局轨迹与站点效应，实现自校正z分数。
result: 在皮层厚度和脑电频谱数据上，GNM相比其他方法产生最站点不变的z分数和最佳的年龄信号保留。
conclusion: GNM框架支持多站点队列的可靠个体推断，推动规范偏差成为精准精神病学和神经病学中的临床生物标志物。
---

## 摘要
规范建模将个体脑表型表示为相对于群体常模的z分数，但在多站点研究中，批次效应会污染这些z分数并削弱其生物标志物价值。现有方法要么在拟合规范模型之前对数据进行协调（ComBat+规范），让残留的站点效应渗入z分数，要么使用参数化一步法（GAMLSS, HBR），这些方法无法灵活地建模多变量协变量交互。我们提出广义规范建模（GNM），一种一步式分层框架，通过基于GCV带宽选择的NUFFT加速核回归联合估计全局趋势和站点特异性效应。由于z分数是批次校正残差与批次校正式尺度的比值，残差站点方差在代数上被抵消——我们称之为自校正特性。在ABIDE I皮层厚度（387名健康对照，11个站点，68个感兴趣区）和HarMNqEEG对数功率谱（1,564名受试者，14个站点，18个通道×235个频率区间）上，GNM在四种方法中产生了最具站点不变性的z分数和最佳的年龄信号保留。这项工作提供了一个具有声明式公式界面的开源MATLAB工具箱（https://github.com/LMNonlinear/Generalized-Normative-Modeling），可在合并的多站点队列中实现可靠的个体层面推断，并推动规范偏差作为精准精神病学和神经病学中的临床生物标志物的应用。

## Abstract
Normative modeling expresses individual brain phenotypes as z-scores relative to a population norm, but in multi-site studies batch effects contaminate these z-scores and undermine their biomarker value. Existing approaches either harmonize data before fitting a normative model (ComBat+Normative), letting residual site effects leak into z-scores, or use parametric one-step methods (GAMLSS, HBR) that cannot flexibly model multivariate covariate interactions. We propose Generalized Normative Modeling (GNM), a onestep hierarchical framework that jointly estimates the global trajectory and site-specific effects via NUFFT-accelerated kernel regression with GCV bandwidth selection. Because the z-score is the ratio of batch-corrected residual to batch-corrected scale, residual site variance cancels algebraically -- a property we term self-correction. On ABIDE I cortical thickness (387 HC, 11 sites, 68 ROIs) and HarMNqEEG log-power spectra (1,564 subjects, 14 sites, 18 channels x 235 frequency bins), GNM produced the most site-invariant z-scores and best age-signal preservation among four methods. This work provides an open-source MATLAB toolbox with a declarative formula interface (https://github.com/LMNonlinear/Generalized-Normative-Modeling), enabling reliable individual-level inference in pooled multi-site cohorts and advancing the use of normative deviations as clinical biomarkers in precision psychiatry and neurology.