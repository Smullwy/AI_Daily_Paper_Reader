---
title: Spatial synaptic regularization stabilizes learning across biological and artificial neural networks
title_zh: 空间突触正则化稳定生物与人工神经网络中的学习
authors: "Zhu, H., Chen, Y., Zhao, P., Xiong, Z., Peng, H., Wu, F., Zhang, R."
date: 2026-06-30
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.29.735142v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 空间突触正则化受神经组织启发提升模型泛化
tldr: 本研究利用人类颞叶皮层电子显微镜连接组数据，发现突触权重沿树突呈中心高、周围抑制的空间排列，并将其形式化为空间突触正则化（SSR）。在多种人工网络及任务中应用SSR，有效减少了灾难性遗忘，稳定了学习过程。该发现揭示了空间组织是稳定学习的关键维度，为人工智能提供了生物学启发的新方法。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究突触空间组织如何促进生物和人工神经网络的稳定学习。
method: 基于连接组学数据发现突触空间模式，构建正则化Hebbian模型，提炼出空间突触正则化（SSR）方法。
result: SSR在持续视觉学习、大语言模型知识编辑等任务中显著减少遗忘，保持高秩、低重叠的表征。
conclusion: 空间突触组织是稳定学习的重要机制，为开发更稳健的人工学习方法提供了新途径。
---

## 摘要
突触的空间组织如何促进稳定学习仍然是神经科学中的一个基本问题。利用人类颞叶皮层的H01电子显微镜连接组，我们发现树突棘在形态上聚集分布，而突触权重则沿树突呈现出中心增强、周围抑制的排列模式。一个正则化的赫布模型形式化了这种空间特征，表明强突触会降低邻近突触达到高权重状态的概率。将这一原理转化为空间突触正则化（SSR）后，通过保持高秩、低重叠的表征，在多种人工网络和任务中减少了遗忘并稳定了学习，这些任务包括持续视觉学习、大型语言模型知识编辑以及视觉-语言模型的参数高效适应。这些发现将突触的空间组织确定为稳定学习的一个未被认识的维度，并表明结构连接组学可以产生可操作的人工智能方法。

## Abstract
How the spatial organization of synapses contributes to stable learning remains a fundamental question in neuroscience. Using the H01 electron microscopy connectome of human temporal cortex, we found that dendritic spines clustered morphologically, whereas synaptic weights followed a center-elevated, surround-suppressed arrangement along dendrites. A regularized Hebbian model formalized this spatial signature, showing that strong synapses lower the probability that neighboring synapses reach high-weight states. Translating this principle into Spatial Synaptic Regularization (SSR) reduced forgetting and stabilized learning across diverse artificial networks and tasks, including continual visual learning, large language-model knowledge editing, and parameter-efficient adaptation of vision-language models, by preserving high-rank, low-overlap representations. These findings identify spatial synaptic organization as an unrecognized dimension for stabilizing learning and show that structural connectomics can yield actionable AI methods.