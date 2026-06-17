---
title: Precision Functional Parcellation of the Human Cortex via Rest-Task fMRI Fusion
title_zh: 基于静息-任务态fMRI融合的人脑皮层精准功能分区
authors: "Zhi, D., Du, J., Whitfield-Gabrieli, S., Diedrichsen, J., Ge, T."
date: 2026-06-16
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.11.731643v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: fMRI融合方法实现个体特异性分割，支持提取群体级先验
tldr: 个体特异性皮层分区能揭示群体图谱掩盖的脑网络组织，但现有方法主要依赖静息态fMRI，忽略任务态数据提供的互补功能特化信息，且整合异质数据集存在挑战。本文提出mRBM-HBP，一个基于多项受限玻尔兹曼机的分层贝叶斯框架，通过建模空间依赖，可扩展地融合静息与任务态fMRI，高效推断组与个体水平的皮层分区。该方法计算成本低，性能媲美最先进静息态方法，融合图谱显著提升个体精度、可靠性和特异性，证明了多模态融合增强功能脑组织精确映射的能力。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有个体化皮层分区方法仅利用静息态fMRI，未整合任务态数据以捕捉功能特化的互补信息，且难以处理异质数据集。
method: 提出mRBM-HBP框架，利用多项受限玻尔兹曼机建模空间依赖，以分层贝叶斯方式融合静息与任务fMRI推断多尺度皮层分区。
result: 融合静息-任务组图谱在准确度、可靠性和个体特异性上均优于单模态图谱，且在个体数据稀疏时提升尤为显著。
conclusion: 整合静息态和任务态fMRI可增强功能脑组织的精确映射，mRBM-HBP为多模态融合提供了高效灵活的计算手段。
---

## 摘要
个体特异性皮层分区能够刻画脑网络组织特征，这些特征常常被群体水平图谱所掩盖，对基础神经科学和转化应用都具有广泛意义。然而，现有方法主要依赖静息态fMRI，未充分利用任务态数据，而任务态数据可提供关于功能特化的互补信息。这一局限部分反映了整合异质性数据集的挑战，这些数据集在任务设计、样本量和皮层覆盖范围上存在差异。在此，我们提出mRBM-HBP，一个可扩展的层级贝叶斯框架，该框架结合了多项分布式受限玻尔兹曼机来建模空间依赖性，从而能够高效灵活地整合跨多种数据集的静息态和任务态fMRI，并推断群体水平和个体水平的皮层分区。我们表明，mRBM-HBP的性能可与最先进的基于静息态的分区方法相媲美，同时大幅降低了计算成本。通过整合大规模任务态fMRI数据集，我们得到了一种基于任务的分区，并证明静息态和任务条件揭示了很大程度上一致的宏观网络，而任务数据则提供了功能边界的状态特异性细化。此外，一个融合的静息-任务群体水平图谱提高了所推断分区的准确性、可靠性和个体特异性，尤其是在个体数据有限的情况下。这些结果表明，整合静息态和任务态fMRI增强了功能脑组织精准图谱的构建。

## Abstract
Individual-specific cortical parcellations enable the characterization of brain network organization that is often ob-scured by population-level atlases, with broad implications for both basic neuroscience and translational applica-tions. However, existing methods rely primarily on resting-state fMRI and underutilize task-evoked data, which provide complementary information about functional specialization. This limitation partly reflects the challenge of integrating heterogeneous datasets that differ in task design, sample size, and cortical coverage. Here, we present mRBM-HBP, a scalable hierarchical Bayesian framework that incorporates a multinomial restricted Boltzmann machine to model spatial dependencies, enabling efficient and flexible integration of resting-state and task fMRI across diverse datasets and inference of both group-level and individual-level cortical parcellations. We show that mRBM-HBP achieves performance comparable to state-of-the-art resting-state-based parcellation methods while substantially reducing computational cost. By integrating large-scale task-fMRI datasets, we derive a task-based parcellation and demonstrate that resting-state and task conditions reveal largely consistent macroscopic networks, while task data provide state-specific refinements of functional boundaries. Moreover, a fused rest-task group-level atlas improves the accuracy, reliability, and individual specificity of inferred parcellations, particularly when individual-level data are limited. These results indicate that integrating resting-state and task fMRI enhances preci-sion mapping of functional brain organization.