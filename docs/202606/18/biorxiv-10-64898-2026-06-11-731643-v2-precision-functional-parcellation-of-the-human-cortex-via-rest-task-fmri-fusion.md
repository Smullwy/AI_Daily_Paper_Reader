---
title: Precision Functional Parcellation of the Human Cortex via Rest-Task fMRI Fusion
title_zh: 通过静息态与任务态fMRI融合实现人类皮层的精确功能划分
authors: "Zhi, D., Du, J., Whitfield-Gabrieli, S., Diedrichsen, J., Ge, T."
date: 2026-06-16
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.11.731643v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 跨被试fMRI融合用于皮层分区
tldr: 个性化皮层分区多依赖静息态fMRI，忽视任务态数据，融合异质数据困难。本文提出mRBM-HBP，一种可扩展的层次贝叶斯框架，通过多项限制玻尔兹曼机建模空间依赖，高效融合静息态和任务态fMRI，推断组及个体分区。结果显示，融合可揭示一致网络和任务特异性边界，并提升分区准确性、可靠性和个体特异性，尤其在个体数据有限时优势明显，为精准脑功能映射提供新途径。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有皮层分区方法主要基于静息态fMRI，未能充分利用任务态fMRI提供的互补功能信息，且整合异质数据集面临挑战。
method: 提出mRBM-HBP，一个层次贝叶斯框架，利用多项限制玻尔兹曼机建模空间依赖，实现静息态与任务态fMRI数据的可扩展融合。
result: 融合静息态与任务态fMRI得到的组水平图谱，提高了分区准确性、可靠性和个体特异性，尤其在个体数据有限时效果显著，并揭示了任务态特异的功能边界细化。
conclusion: 结合静息态和任务态fMRI能够增强功能脑组织的精确映射，为个体化脑网络研究提供了有效工具。
---

## 摘要
个体特异性的皮层划分能够刻画大脑网络组织，这些组织特征常被群体水平图谱所掩盖，对基础神经科学和转化应用都具有广泛意义。然而，现有方法主要依赖静息态功能磁共振成像（fMRI），未能充分利用任务诱发数据，后者提供了关于功能特化的补充信息。这一局限部分反映了整合异质性数据集的挑战，这些数据集在任务设计、样本量和皮层覆盖范围上各不相同。本文提出mRBM-HBP，一种可扩展的层次贝叶斯框架，该框架结合了多项分布受限玻尔兹曼机来建模空间依赖性，能够高效灵活地整合跨不同数据集的静息态和任务态fMRI，并推断群体水平和个体水平的皮层划分。我们表明，mRBM-HBP实现了与最先进基于静息态划分方法相当的性能，同时大幅降低了计算成本。通过整合大规模任务态fMRI数据集，我们得到了基于任务的划分，并证明静息态和任务条件揭示了基本一致的宏观网络，而任务数据提供了功能边界的特定状态细化。此外，融合的静息-任务群体水平图谱提高了推断划分的准确性、可靠性和个体特异性，尤其在个体水平数据有限时更为明显。这些结果表明，整合静息态和任务态fMRI能够增强大脑功能组织的精确映射。

## Abstract
Individual-specific cortical parcellations enable the characterization of brain network organization that is often ob-scured by population-level atlases, with broad implications for both basic neuroscience and translational applica-tions. However, existing methods rely primarily on resting-state fMRI and underutilize task-evoked data, which provide complementary information about functional specialization. This limitation partly reflects the challenge of integrating heterogeneous datasets that differ in task design, sample size, and cortical coverage. Here, we present mRBM-HBP, a scalable hierarchical Bayesian framework that incorporates a multinomial restricted Boltzmann machine to model spatial dependencies, enabling efficient and flexible integration of resting-state and task fMRI across diverse datasets and inference of both group-level and individual-level cortical parcellations. We show that mRBM-HBP achieves performance comparable to state-of-the-art resting-state-based parcellation methods while substantially reducing computational cost. By integrating large-scale task-fMRI datasets, we derive a task-based parcellation and demonstrate that resting-state and task conditions reveal largely consistent macroscopic networks, while task data provide state-specific refinements of functional boundaries. Moreover, a fused rest-task group-level atlas improves the accuracy, reliability, and individual specificity of inferred parcellations, particularly when individual-level data are limited. These results indicate that integrating resting-state and task fMRI enhances preci-sion mapping of functional brain organization.