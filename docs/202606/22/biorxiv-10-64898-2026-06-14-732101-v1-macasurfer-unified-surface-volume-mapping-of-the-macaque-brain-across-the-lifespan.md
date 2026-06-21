---
title: "MacaSurfer: unified surface-volume mapping of the macaque brain across the lifespan"
title_zh: MacaSurfer：跨生命周期的猕猴大脑统一表面-体积映射
authors: "Wei, Y., Wang, H., Wang, Y., Chen, L., Cheng, L., Gao, J., Zhu, Q., Chu, C., Xu, T., Gao, C., Jiang, T., Vanduffel, W., Fan, L."
date: 2026-06-17
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.14.732101v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 统一的猕猴脑图谱处理管道，支持跨被试分析
tldr: 针对猕猴脑MRI在多站点、纵向和跨物种分析中缺乏统一自动处理工具的问题，MacaSurfer提出全自动容器化框架，集成组织分割、场偏校正、拓扑表面重建和表面感知配准，实现从T1像到表面-体积统一映射。在39个国际站点1346次扫描中验证，表现出高解剖一致性和鲁棒性，并基于835只猕猴建立规范参考轨迹，开源共享。
source: biorxiv
selection_source: fresh_fetch
motivation: 猕猴脑成像分析缺乏统一的自动化处理流程，阻碍转化神经科学的多站点和跨物种研究。
method: 开发全自动框架MacaSurfer，集成组织分割、组织引导偏场校正、拓扑感知表面重建和表面感知体积配准等定制组件。
result: 在来自39个站点的1346次扫描中验证，MacaSurfer达到高解剖一致性和重测稳定性，并基于835只猕猴构建了规范形态测量轨迹。
conclusion: MacaSurfer为猕猴脑发育和比较神经影像提供了可重复、开放的标准化处理方案。
---

## 摘要
猕猴大脑MRI是转化与比较神经科学的核心，然而多中心、纵向和跨物种分析因缺乏统一的自动化结构处理工具而受阻。现有流程大多改编自人类神经影像学，或仅限于零散步骤，无法在异质性采集和发育阶段中提供稳健的表面-体积表征。在此我们介绍MacaSurfer，一个全自动、容器化的框架，用于跨生命周期的猕猴大脑统一表面-体积映射。MacaSurfer包含为猕猴解剖量身定制的组件：组织分割模型、组织引导的偏置场校正方法（仅从T1加权图像优化结构映射）、拓扑感知的表面重建以及表面感知的体积配准。在来自39个国际站点的965只猕猴（年龄跨度从2周到23岁）的1346次成像会话上验证，MacaSurfer展现出卓越的解剖一致性、重测精度和对图像退化的鲁棒性。利用MacaSurfer衍生的形态学测量，我们从835只猕猴建立了规范轨迹，为下游的个体化偏差分析提供了标准化参考。MacaSurfer开放提供源代码、容器和预训练模型，提供了一个可复现的生态系统，以加速发育、转化和比较神经影像学研究。

## Abstract
Macaque brain MRI is central to translational and comparative neuroscience, yet multi-site, longitudinal, and cross-species analyses are hindered by a lack of unified, automated structural processing tools. Existing pipelines, mostly adapted from human neuroimaging or restricted to fragmented steps, fail to provide robust surface-volume representations across heterogeneous acquisitions and developmental stages. Here we introduce MacaSurfer, a fully automated, containerized framework for unified surface-volume mapping of the macaque brain across the lifespan. MacaSurfer features components tailored for macaque anatomy: a tissue segmentation model, a tissue-guided bias-field correction method optimizing structural mapping from T1-weighted images alone, topology-aware surface reconstruction, and surface-aware volumetric registration. Validated on 1,346 imaging sessions from 965 macaques across 39 international sites (spanning 2 weeks to 23 years of age), MacaSurfer demonstrated exceptional anatomical consistency, test-retest precision, and robustness against image degradation. Leveraging MacaSurfer-derived morphometry, we established normative trajectories from 835 macaques, providing a standardized reference for downstream individualized deviation analysis. MacaSurfer is openly available with source code, containers, and pretrained models, offering a reproducible ecosystem to accelerate developmental, translational, and comparative neuroimaging.