---
title: "A Unified Form of Batch Harmonization Equation for Normative Modeling: A Location Scale Framework"
title_zh: 用于规范建模的批次协调方程的统一形式：位置-尺度框架
authors: "Li, M., Wang, Y., Shen, Y., An, L., Jia, G., Bringas Vega, M. L. L., Valdes-Sosa, P. A."
date: 2026-05-21
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.17.725713v2.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 统一批次校正用于规范模型，支持群体级先验
tldr: "针对多中心神经影像研究缺乏统一批量协调规范建模框架的问题，本文将ComBat、GAMLSS等方法纳入统一的位置-尺度方程 y=m(x,Θ)+σ(x,Θ)ε，从而可从同一模型获得协调数据和站点不变 z 分数，并评估了不同回归引擎的性能、可扩展性和隐私保护能力，为方法选择和未来发展奠定了理论基础。"
source: biorxiv
selection_source: fresh_fetch
motivation: 多中心联盟的快速增长急需能批量协调的规范模型，但现有方法缺乏统一理论框架，难以计算站点不变的z分数。
method: "提出统一的位置-尺度方程 y=m(x,Θ)+σ(x,Θ)ε，将ComBat、GAMLSS、HBR和GNM等方法作为特例纳入同一形式。"
result: 该统一形式能同时输出协调数据和站点不变z分数，并全面评估了回归引擎、异常值敏感性、计算可扩展性和联邦分解性。
conclusion: 统一方程阐明了各方法的假设与边界，为可靠、可扩展且隐私保护的规范建模提供了原则性基础。
---

## 摘要
规范建模通过将大脑衍生指标的均值和方差估计为临床相关参数（如年龄）的函数，量化个体偏离群体规范的程度。多中心联盟的快速增长对纳入批次协调的规范模型提出了迫切需求。基于线性混合模型的几种协调方法——ComBat、GAMLSS、HBR和广义规范建模（GNM）——提供了均值和方差的显式公式，使其成为批次协调规范建模的自然选择；然而，由于缺乏统一的理论框架，尚不清楚这些方法是否以及如何支持批次协调z分数的计算。我们通过将现有协调方法写成位置-尺度方程 y = m(x, {Θ}) + σ(x, {Θ}) ε 的特例来弥合这一差距，我们将其称为用于规范建模的批次协调方程的统一形式。这些方法仅在 m 和 σ 的函数形式、批次参数如何进入 Θ 以及如何估计 Θ 上有所不同。该统一形式从同一个模型中得到协调后的数据 y* 和站点不变的 z 分数，为协调规范建模提供了共同的理论语言。基于这一框架，我们评估了底层的回归引擎（参数、样条、高斯过程、核、深度学习）、对异常值的敏感性、计算可扩展性以及用于保护隐私的多中心计算的联邦可分解性。通过阐明每种方法的假设、所能提供的结果以及当前方法学的边界，该统一方程为方法选择奠定了原则性基础，并为在多中心神经影像中实现可靠、可扩展且具备隐私意识的规范建模指明了道路。

## Abstract
Normative modeling quantifies individual deviation from population norms by estimating the conditional mean and variance of brain-derived measures as functions of clinically relevant parameters such as age. The rapid growth of multicenter consortia has created an urgent need for normative models that incorporate batch harmonization. Several harmonization methods based on linear mixed models--ComBat, GAMLSS, HBR, and Generalized Normative Modeling (GNM)--offer explicit formulations of the mean and variance, making them natural candidates for batch-harmonized normative modeling; yet the absence of a unified theoretical framework leaves it unclear whether and how these methods support the computation of batch-harmonized z-scores. We bridge this gap by writing existing harmonization methods as special cases of a single location-scale equation, y = m(x, {Theta})+{sigma}(x, {Theta}){varepsilon} , which we term the unified form of batch harmonization equation for normative modeling. The methods differ only in the functional forms of m and{sigma} , how batch parameters enter{Theta} , and how{Theta} is estimated. This unified form yields both harmonized data y* and site-invariant z-scores from the same model, providing a common theoretical language for harmonized normative modeling. Building on this framework, we evaluate the underlying regression engines (parametric, spline, Gaussian process, kernel, deep learning), sensitivity to outliers, computational scalability, and federated decomposability for privacy-preserving multi-center computation. By clarifying what each method assumes, what it delivers, and where the boundaries of current methodology lie, the unified equation establishes a principled foundation for method selection and charts a path toward reliable, scalable, and privacy-aware normative modeling across multi-center neuroimaging.