---
title: "A Unified Form of Batch Harmonization Equation for Normative Modeling: A Location Scale Framework"
title_zh: 一种用于规范建模的批次协调方程统一形式：位置-尺度框架
authors: "Li, M., Wang, Y., Shen, Y., Jia, G."
date: 2026-05-20
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.17.725713v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 统一批量协调用于人口级规范建模
tldr: 针对多中心神经影像数据规范建模中批次效应校正的需求，本文提出一个统一框架，将ComBat、GAMLSS等现有批次校正方法归纳为同一个位置-尺度方程，揭示了各方法的共性与差异。该方程能同时产生校正数据和站点不变z分数，为方法选择、隐私保护计算及可扩展跨中心规范建模奠定了理论基础。
source: biorxiv
selection_source: fresh_fetch
motivation: 明确现有批次校正方法是否支持批次校正z分数计算，并建立统一理论框架。
method: "将现有方法统一为位置-尺度方程 y = m(x, Θ) + σ(x, Θ)ε，阐明功能形式、参数化及估计的差异。"
result: 统一形式可从同一模型得到站点不变z分数和校正数据，并评估了多种回归引擎及隐私保护计算的可行性。
conclusion: 该框架为规范建模方法选择提供原则性基础，并指明了可靠、可扩展和隐私保护的跨中心研究路径。
---

## 摘要
规范建模通过将脑衍生测量值的条件均值和方差估计为年龄等临床相关参数的函数，量化个体偏离群体规范的程度。多中心联盟的迅速增长，迫切需要纳入批次协调的规范模型。基于线性混合模型的几种协调方法——ComBat、GAMLSS、HBR和广义规范建模（GNM）——提供了均值和方差的显式公式，使其成为批次协调规范建模的自然候选；然而，缺乏统一的理论框架，使得这些方法是否以及如何支持批次协调的z分数计算尚不清楚。我们通过将现有的协调方法写成一个单一的位置-尺度方程 y = m(x, {Θ}) + σ(x, {Θ})ε 的特例来弥合这一差距，我们称其为规范建模中批次协调方程的统一形式。这些方法仅在 m 和 σ 的函数形式、批次参数如何进入 Θ 以及如何估计 Θ 上有所不同。该统一形式从同一模型中同时产生协调数据 y* 和站点不变的 z 分数，为协调规范建模提供了共同的理论语言。在此框架基础上，我们评估了底层的回归引擎（参数、样条、高斯过程、核、深度学习）、对异常值的敏感性、计算可扩展性以及用于隐私保护多中心计算的联邦可分解性。通过阐明每种方法假设什么、提供什么以及当前方法的边界在哪里，该统一方程为方法选择奠定了原则性基础，并描绘了跨多中心神经影像实现可靠、可扩展且注重隐私的规范建模的路径。

## Abstract
Normative modeling quantifies individual deviation from population norms by estimating the conditional mean and variance of brain-derived measures as functions of clinically relevant parameters such as age. The rapid growth of multicenter consortia has created an urgent need for normative models that incorporate batch harmonization. Several harmonization methods based on linear mixed models--ComBat, GAMLSS, HBR, and Generalized Normative Modeling (GNM)--offer explicit formulations of the mean and variance, making them natural candidates for batch-harmonized normative modeling; yet the absence of a unified theoretical framework leaves it unclear whether and how these methods support the computation of batch-harmonized z-scores. We bridge this gap by writing existing harmonization methods as special cases of a single location-scale equation, y = m(x, {Theta})+{sigma}(x, {Theta}){varepsilon} , which we term the unified form of batch harmonization equation for normative modeling. The methods differ only in the functional forms of m and{sigma} , how batch parameters enter{Theta} , and how{Theta} is estimated. This unified form yields both harmonized data y* and site-invariant z-scores from the same model, providing a common theoretical language for harmonized normative modeling. Building on this framework, we evaluate the underlying regression engines (parametric, spline, Gaussian process, kernel, deep learning), sensitivity to outliers, computational scalability, and federated decomposability for privacy-preserving multi-center computation. By clarifying what each method assumes, what it delivers, and where the boundaries of current methodology lie, the unified equation establishes a principled foundation for method selection and charts a path toward reliable, scalable, and privacy-aware normative modeling across multi-center neuroimaging.