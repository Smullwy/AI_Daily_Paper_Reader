---
title: A model of schema learning based on biological dimensionality reduction during sleep
title_zh: 基于睡眠中生物降维的图式学习模型
authors: "Yoshida, K., Shimizu, G., Kinoshita, Y., Inokuchi, K., Toyoizumi, T."
date: 2026-06-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.27.728344v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 低维神经表征的流形对齐
tldr: 该研究针对认知中图式形成与使用的计算和神经机制不明的问题，提出了一个睡眠期间基于回放驱动的非线性降维模型。模型通过将高维输入映射到低维神经流形并进行对齐，实现了图式的形成、重用与组合，解释了快速相似任务学习、睡眠依赖的泛化以及新任务解决等现象，揭示了低维表征在知识抽象和迁移中的关键作用。
source: biorxiv
selection_source: fresh_fetch
motivation: 探索图式形成和迁移的计算与神经机制，以解释认知中知识泛化和重用的现象。
method: 构建回放驱动的Hebbian非线性降维模型，通过低维流形形成与对齐实现图式学习。
result: 模型成功复现了快速相似任务学习、睡眠依赖传递推理和组合解决新任务等三项图式学习核心特征。
conclusion: 低维神经表征的形成、对齐与重组可能是大脑实现图式学习、支持未来学习的潜在机制。
---

## 摘要
将学到的知识重组为概括性表征并迁移到未来学习中是认知的基本方面，常被描述为图式的形成和使用。然而，这些过程背后的计算和回路机制仍不清楚。在此，我们提出一个理论模型，其中图式通过低维神经表征的形成和对齐而涌现。在该模型中，高维输入模式通过重放驱动的赫布式非线性降维被重组为低维流形。流形对齐将具有共享任务结构的表征映射到共同格式上，使得下游读出回路可在任务间重用。该模型捕捉了图式学习的三个核心特征：通过重用先前经验的低维表征来快速学习类似任务，在传递推理中依赖睡眠的泛化到未观察关系，以及图式的组合重组以解决新任务。总之，这些结果提示了一种形成、对齐和重新组合低维图式以支持未来学习的潜在神经机制。

## Abstract
Reorganizing learned knowledge into generalized representations and transferring it to future learning are essential aspects of cognition, often described as schema formation and use. However, the computational and circuit mechanisms underlying these processes remain unclear. Here, we propose a theoretical model in which schemas emerge through the formation and alignment of low-dimensional neural representations. In this model, high-dimensional input patterns are reorganized into low-dimensional manifolds through replay-driven Hebbian nonlinear dimensionality reduction. Manifold alignment simultaneously maps representations with shared task structure onto a common format, enabling downstream readout circuits to be reused across tasks. The model captures three core features of schema learning: rapid learning of similar tasks by reusing low-dimensional representations from prior experience, sleep-dependent generalization to unobserved relationships in transitive inference, and compositional recombination of schemas to solve novel tasks. Together, these results suggest a potential neural mechanism for forming, aligning, and recombining low-dimensional schemas to support future learning.