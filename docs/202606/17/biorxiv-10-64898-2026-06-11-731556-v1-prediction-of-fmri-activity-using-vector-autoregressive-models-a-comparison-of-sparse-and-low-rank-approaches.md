---
title: "Prediction of fMRI activity using vector autoregressive models: a comparison of sparse and low-rank approaches"
title_zh: 使用向量自回归模型预测fMRI活动：稀疏与低秩方法的比较
authors: "Tian, X., Gibberd, A., Roy, S., Nunes, M."
date: 2026-06-15
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.11.731556v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 使用VAR模型预测跨被试fMRI活动
tldr: 矢量自回归（VAR）模型常用于fMRI功能连接分析，但脑区数量多导致参数估计方差大。本文提出一种低秩预平滑方法，先对观测数据做低秩逼近，再拟合VAR模型。通过任务态和静息态个体数据，在群体水平调优超参数，与稀疏和无约束方法对比，结果显示该方法能稳健估计个体参数、显著降低预测误差，在合成实验中也得到验证。
source: biorxiv
selection_source: fresh_fetch
motivation: 解决VAR模型在fMRI功能连接分析中因参数过多而产生的高方差问题。
method: 在VAR建模前引入低秩预平滑，对观测数据施加低秩近似以降低维度。
result: 低秩预平滑方法提升了个体参数估计的稳健性，明显减少了预测误差，优于稀疏和无约束方法。
conclusion: 低秩预平滑策略能有效实现个体水平的稳健参数估计并提高预测性能。
---

## 摘要
向量自回归（VAR）模型一直以来被用于研究功能性磁共振成像（fMRI）研究所捕获的大脑功能连接。此类模型允许估计大脑各感兴趣区域之间的格兰杰因果关系。然而，由于VAR模型中的参数数量与区域数量的平方成正比，而区域数量通常远大于时间观测数，因此这些参数估计值会表现出高方差。为解决这一难题，我们引入了一种低秩预平滑方法，即在拟合VAR模型之前对观测数据进行低秩近似。我们使用来自任务态和静息态条件下的个体受试者数据估计这些模型，并在群体层面上调整超参数。我们将提出的低秩方法直接与稀疏估计方法和无约束估计方法进行了比较。对预测性能和模型结构的评估表明，我们的预平滑技术能够实现稳健的个体水平参数估计，并显著降低预测误差，这一发现进一步由已知真实参数的合成实验所验证。

## Abstract
Vector autoregressive (VAR) models have a history of being used to examine functional connectivity in the brain, as captured by functional MRI studies. Such models allow for an estimation of Granger-causal relationships between regions of interest across the brain. Unfortunately, since the number of parameters in the VAR model scales as the square of the number of regions, and this is typically large compared to the number of temporal observations, these parameter estimates will exhibit high variance. To address this challenge, we introduce a low-rank pre-smoothing method that applies a low-rank approximation to the observations before fitting a VAR model. We estimate these models using individual subject data from both task-based and resting-state conditions, tuning hyper-parameters at the population level. Our low-rank approach is directly compared against sparse and unconstrained estimation methods. Evaluations of predictive performance and model structure reveal that our pre-smoothing technique enables robust individual-level parameter estimation and significantly reduces prediction error, a finding further validated by synthetic experiments where the ground-truth parameters are known.