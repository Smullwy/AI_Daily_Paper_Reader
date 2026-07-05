---
title: Tuning Diversity Improves Discrimination and Detection Performance under Metabolic Constraints
title_zh: 调谐多样性在代谢约束下改善辨别与检测性能
authors: "Ringach, D."
date: 2026-07-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.29.735317v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 神经群体调谐多样性作为泛化先验
tldr: 皮层神经元调谐特性的广泛多样性是特徵还是缺陷？本研究通过构建编码圆形变量的模型，对比异质与同质调谐群体在相同能量约束下的表现，发现异质群体具有更优的辨别与检测能力。这揭示在保持平均调谐和代谢成本不变的条件下，同质调谐不稳定，进化压力促使调谐异质化，从而解释了调谐多样性作为代谢约束下优化编码性能的自然结果。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究皮层调谐多样性是否源于代谢约束下编码性能的优化进化。
method: 构建异质和同质调谐群体模型，在相同放电预算下比较辨别与检测性能。
result: 异质群体在相同代谢成本下具有更优的辨别和检测能力，而同质调谐不稳定。
conclusion: 调谐多样性是代谢约束下编码性能优化的必然进化结果。
---

## 摘要
皮层神经元群体展现出广泛的调谐特性，引发了一个问题：这种变异性是皮层功能的特征还是缺陷。先前的研究表明，调谐多样性可以通过减轻相关噪声的影响并增加几何表征的辨别和识别能力来改善群体编码。受这些发现启发，我们研究了一个模型，其中编码圆形变量的异质调谐曲线族在等间距的首选角度上被复制。我们证明，在使用相同的脉冲预算下，这种异质群体比由该族平均调谐曲线的平移复制构成的同等规模同质群体实现了更好的辨别和检测。因此，在保持平均调谐曲线的扰动下，同质调谐是不稳定的，因为这种扰动在保持代谢成本不变的同时提高了编码性能。我们提出，这种不稳定性产生了对调谐异质性的进化压力，使其普遍性成为在代谢约束下优化编码性能过程的结果。

## Abstract
Cortical populations exhibit a wide range of tuning properties, raising the question of whether such variability is a feature or a bug of cortical function. Prior work has shown that tuning diversity can improve population codes by mitigating the effects of correlated noise and increasing the discrimination and identification capacity of geometric representations. Motivated by these findings, we study a model in which a heterogeneous family of tuning curves, coding for a circular variable, is replicated at equally spaced preferred angles. We show that this heterogeneous population achieves better discrimination and detection than an equally sized homogeneous population constructed from shifted copies of the family's mean tuning curve, while using the same spike budget. Thus, homogeneous tuning is unstable under perturbations that preserve the mean tuning curve, because such perturbations leave metabolic cost unchanged while improving coding performance. We propose that such instability creates evolutionary pressure toward heterogeneity of tuning, making its prevalence a consequence of a process that optimizes coding performance under metabolic constraints.