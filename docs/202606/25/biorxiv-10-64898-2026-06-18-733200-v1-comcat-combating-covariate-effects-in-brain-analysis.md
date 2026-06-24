---
title: "ComCat: Combating Covariate Effects in Brain Analysis"
title_zh: ComCat：消除脑分析中的协变量效应
authors: "Gaser, C., Dahnke, R., Ganjgahi, H., Nichols, T."
date: 2026-06-23
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.18.733200v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 去除多站点fMRI的协变量效应
tldr: 在大规模多中心神经影像研究中，异构数据会引入站点和连续噪声（如图像质量）等混杂效应。现有ComBat工具仅处理分类站点效应，无法建模连续变异。本文提出ComCat，扩展ComBat框架，利用B样条基函数平滑建模连续噪声变量，同时保留生物学相关协变量。在五个多中心数据集上进行脑年龄预测评估，ComCat平均绝对误差均低于ComBat-GAM，并在ABIDE数据中成功保留自闭症组与对照组的差异，表明其可有效去除扫描仪相关方差，不依赖站点标签，广泛适用于各类脑分析任务。
source: biorxiv
selection_source: fresh_fetch
motivation: 多中心神经影像分析需要消除异构数据中的站点和连续噪声等混杂效应，同时保留有生物意义的信号。
method: 通过B样条基函数将连续噪声变量建模为平滑非线性函数，集成到ComBat框架中，实现分类站点和连续混杂效应的联合去除。
result: 在五个数据集上，使用CAT12图像质量指标作为连续噪声变量，ComCat的脑年龄预测MAE均低于ComBat-GAM，并成功保留ABIDE数据中对照组与ASD组的差异。
conclusion: ComCat能有效去除站点和连续混杂效应，提升数据协调性能，对站点标签依赖度低，适用于多种脑分析任务。
---

## 摘要
随着神经影像分析转向大规模、多中心研究，管理因合并异构数据集而引入的不必要变异已成为关键挑战。尽管 ComBat 及其神经影像扩展等工具被广泛用于解决这一变异，但它们仅允许对分类站点效应建模，无法考虑连续混杂来源，如图像质量、头部运动和采集参数。我们推出了 ComCat，这是 ComBat 框架的扩展，可保留生物学相关的协变量，同时消除分类站点指标和连续噪声变量的影响。后者通过 B 样条基展开建模为平滑非线性函数。ComCat 适用于广泛的脑分析任务，包括体素和表面形态测量、规范性建模以及基于机器学习的预测。为展示其能力，我们在五个覆盖互补多中心协调场景的数据集上评估了 ComCat 的脑龄预测：ON-Harmony（10 名受试者 × 6 台扫描仪；n=80）；Buchert 移动模体数据集（1 名受试者 × 116 台扫描仪；n=531）；Tohoku 单扫描仪、不同采集参数数据集（n=121）；MR-ART（148 名受试者，运动水平不同）；以及 ABIDE 子集，包含 14 台扫描仪的 229 名对照受试者和 208 名自闭症谱系障碍个体。使用来自 CAT12 的图像质量指标作为连续噪声变量，与 ComBat-GAM 相比，ComCat 在所有五个数据集中均降低了脑龄预测的平均绝对误差（MAE），包括站点信息不可用或无信息价值的两种场景。在 ABIDE 数据集中，ComCat 改善了协调效果，同时保留了对照组与 ASD 组之间的差异，表明扫描仪相关方差可被移除而不影响生物学上有意义的信号。ComCat 可在有或无站点标签的情况下运行，且与图像质量指标的来源无关。

## Abstract
As neuroimaging analysis shifts toward large-scale, multi-site studies, managing the unwanted variability introduced by combining heterogeneous datasets has become a critical challenge. Although tools such as ComBat and its neuroimaging extensions are widely used to address this variability, they only permit the modeling of categorical site effects and cannot account for continuous sources of confounding, such as image quality, head motion, and acquisition parameters. We introduce ComCat, an extension of the ComBat framework that preserves biologically relevant covariates while removing the effects of categorical site indicators and continuous nuisance variables. The latter are modeled as smooth nonlinear functions via B-spline basis expansion. ComCat is applicable to a broad range of brain analysis tasks, including voxel- and surface-based morphometry, normative modeling, and machine learning-based prediction. To demonstrate its capabilities, we evaluated ComCat on brain age prediction across five datasets covering complementary multi-site harmonization scenarios: ON-Harmony (10 subjects x 6 scanners; n = 80); the Buchert traveling-phantom dataset (1 subject x 116 scanners; n = 531); the Tohoku single-scanner, varying-acquisition dataset (n = 121); MR-ART (148 subjects with varying motion levels); and an ABIDE subset comprising 229 control subjects and 208 individuals with autism spectrum disorder across 14 scanners. Using image quality measures derived from CAT12 as continuous nuisance variables, ComCat reduced the mean absolute error (MAE) in brain age prediction relative to ComBat-GAM in all five datasets, including the two scenarios where site information was unavailable or uninformative. In the ABIDE dataset, ComCat improved harmonization while preserving the difference between the control and ASD groups, demonstrating that scanner-related variance can be removed without affecting biologically meaningful signals. ComCat can operate with or without site labels and is agnostic to the source of image quality metrics.