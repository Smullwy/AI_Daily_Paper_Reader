---
title: Hyperbolic Brain Modelling and Neurocognitive Decline Analysis for Disease Detection
title_zh: 用于疾病检测的双曲脑建模与神经认知衰退分析
authors: "Mukhopadhyay, A., Halder, K., Neogy, R."
date: 2026-07-15
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.09.737540v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 双曲脑网络建模用于神经认知衰退分析
tldr: 传统欧氏空间映射大脑层次网络导致结构失真，现有双曲模型虽能保持拓扑但计算开销大。本文提出基于Beltrami-Klein球模型的高效非欧框架，将双曲测地线投影为欧氏直线，用点积简化距离计算，极大降低运算需求。在精神分裂症、帕金森病和阿尔茨海默病检测中，该方法精度和速度均优于Poincaré及Lorentz基线，为神经认知衰退分析提供了高效诊断工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-09-737540-v1/fig-001.webp\", \"caption\": \"Table 2: ADNI CN vs. AD — Final Results (%), 5-fold × 5 repeats. Bold = best per metric. OOM = out-of-memory.\", \"page\": 4, \"index\": 1, \"width\": 1052, \"height\": 221}]"
motivation: 解决欧氏空间表示层次脑网络的结构失真问题，以及现有双曲模型计算复杂度高的缺陷。
method: 利用Beltrami-Klein球模型，将双曲测地线表示为欧氏直线，通过点积运算替代复杂距离计算。
result: 在三种神经疾病数据集上，Klein框架的诊断精度和处理速度均优于Poincaré和Lorentz基线模型。
conclusion: 该方法为神经认知衰退的疾病检测提供了兼具高精度和高效计算的非欧框架。
---

## 摘要
在传统欧几里德空间中映射层级脑网络会导致显著的结构扭曲，削弱神经影像诊断框架。虽然像庞加莱球这样的双曲模型能够保留这些嵌套拓扑，但它们因复杂的莫比乌斯变换和弯曲测地线而需要巨大的计算开销。本文介绍了一种利用贝尔特拉米-克莱因球模型分析神经认知衰退的高效非欧几里德框架。通过将双曲测地线投影为欧几里德直线，该方法将复杂的距离计算转换为简单的点积，大幅降低了处理需求。我们使用精神分裂症、帕金森病和阿尔茨海默病的数据集，与最先进的庞加莱和洛伦兹基线方法进行了验证。基于克莱因的框架表现出优越性能，在所有三种神经认知障碍中均实现了更高的诊断精度和更快的处理速度。

## Abstract
Mapping hierarchical brain networks within traditional Euclidean space causes significant structural distortion, undermining neuroimaging diagnostic frameworks. While hyperbolic models like the Poincare ball preserve these nested topologies, they demand heavy computational overhead due to intricate Mobius operations and curved geodesics. This paper introduces a highly efficient non-Euclidean framework for analyzing neurocognitive decline utilizing the Beltrami-Klein ball model. By projecting hyperbolic geodesics as Euclidean straight lines, this approach converts complex distance calculations into simple dot products, radically reducing processing demands. We validated our methodology against state-of-the-art Poincare and Lorentz baselines using datasets for Schizophrenia, Parkinsons Disease, and Alzheimers Disease. The Klein-based framework demonstrates superior performance, delivering both higher diagnostic precision and accelerated processing velocities across all three neurocognitive disorders.