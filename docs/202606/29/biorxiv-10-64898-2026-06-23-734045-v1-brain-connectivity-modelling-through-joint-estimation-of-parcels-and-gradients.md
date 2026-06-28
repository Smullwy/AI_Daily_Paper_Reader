---
title: Brain Connectivity Modelling Through Joint Estimation of Parcels and Gradients
title_zh: 通过联合估计脑区和梯度进行脑连接建模
authors: "Miri Rekavandi, A., Jbabdi, S., Smith, S. M."
date: 2026-06-28
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.23.734045v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 静息态fMRI中脑分区和梯度的联合估计
tldr: 本文针对静息态功能MRI全脑连接建模，提出一种联合估计脑区划分与连接梯度的方法，通过将密集连接组分解为低秩（功能分离）和稀疏（梯度）成分，整合局部非线性与全局线性嵌入，有效逼近真实连接组，并揭示梯度与任务态地形图的高度对应，为理解脑组织原则提供新视角。
source: biorxiv
selection_source: fresh_fetch
motivation: 功能分离导致连接突变（低秩），而连接梯度表现为平滑变化（稀疏非低秩），需统一建模以解析全脑连接拓扑。
method: 将密集连接组分解为低秩与稀疏成分，融合局部非线性嵌入与全局线性嵌入，实现脑区划分与梯度联合估计。
result: 混合模型优于纯低秩或纯梯度方法，所得连接梯度与任务态地形图高度吻合。
conclusion: 该框架能够有效拆解功能分离与梯度，有助于揭示梯度特征不清晰脑区的组织原理。
---

## 摘要
本文提出了一种框架，用于在静息态功能性磁共振成像中建模全脑连接的地形图。其目的是将功能分离（表现为连接的突变）与所谓的梯度（即连接在大脑中的平滑变化）分离开来。我们的核心假设是，功能分离导致密集（点对点）连接组的低秩结构，而连接梯度则意味着密集连接组中的稀疏且非低秩结构。因此，我们的方法将连接组分解为低秩和稀疏成分，从而能够整合局部非线性与全局线性嵌入策略。我们证明，与纯低秩或纯梯度方法相比，这种混合模型能更有效地近似经验密集连接组。我们还发现，从该模型导出的连接梯度与基于任务的地形图有很强的对应性。我们希望这种方法能够为梯度特征仍不明确的脑区提供组织原理方面的见解。

## Abstract
This paper presents a framework for modelling the topography of whole-brain connectivity in resting-state functional MRI. The aim is to disentangle functional segregation, which manifests as abrupt changes in connectivity, from so-called gradients, i.e., smooth variations in connectivity across the brain. Our core assumption is that functional segregation leads to low-rank structure in the dense (point-to-point) connectome, whereas connectivity gradients imply a sparse and non-low-rank structure in the dense connectome. Our method thus decomposes the connectome into low-rank and sparse components, enabling the integration of local-nonlinear and global-linear embedding strategies. We show that this hybrid model approximates the empirical dense connectome more effectively than purely low-rank or purely gradient approaches. We also find that connectivity gradients derived from this model exhibit strong correspondence with task-based topographic maps. We hope that this approach can provide insight into the organisational principles of brain regions where gradients remain poorly characterised.