---
title: A unified theory of context-conditioned efficient and predictive coding
title_zh: 上下文条件化高效与预测编码的统一理论
authors: "Tavoni, G."
date: 2026-07-06
pdf: "https://www.biorxiv.org/content/10.1101/2025.02.24.639817v2.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 感觉表征的高效与预测编码统一理论
tldr: 感觉处理依赖跨模态背景信号，但神经电路如何高效编码局部输入同时利用全局信息尚不明确。本文提出统一理论，证明背景条件高效编码等价于预测编码：背景提供期望，局部神经元编码偏差，循环连接白化残差。理论统一了跨模态抑制等多模态现象，将预测计算解释为背景引导高效压缩的涌现，为分布式神经处理提供原则框架。
source: biorxiv
selection_source: fresh_fetch
motivation: 感觉处理受跨模态背景影响，但经典高效编码理论未考虑如何利用全局信息优化局部表征。
method: 本文通过解析推导，将背景条件高效编码的优化解映射为预测编码形式的神经算法。
result: 建立了数学等价性，表明背景提供期望、编码偏差和循环白化能统一解释多样的跨模态实验现象。
conclusion: 该框架为理解分布式大脑如何利用背景塑造局部感觉表征提供了原则性理论。
---

## 摘要
感官处理并非孤立发生：给定感觉模态中神经元所表征的内容受到来自其他感官、动作和行为情境的信号的影响。这种情境依赖性对神经编码理论提出了一个基本问题：电路如何高效编码其局部输入，同时利用大脑其他部分可用的信息？在这里，我们提出了一种高效与预测编码的统一理论，展示多模态情境信息如何优化局部感觉回路中的表征。我们通过解析证明，高效编码解映射到一个可解释的神经算法：情境信号提供关于局部电路感觉输入的预期，局部神经元编码与这些预期的偏差，循环交互对残差信号进行白化。这一结果建立了情境条件化高效编码与预测编码之间的数学等价性，揭示了预测性计算可以从情境引导的高效输入压缩中涌现。由此得到的框架既不同于单一模态内的经典冗余减少，也不同于分层贝叶斯推断。该理论解释并统一了多种实验现象，包括对预测输入的跨模态反应抑制，以及感觉运动、视听、视觉-嗅觉和听觉-体感回路中的多模态感受野，同时将经典的单模态编码效应恢复为极限情况。通过将编码目标、回路机制和实验观察到的现象联系在一个统一的分析框架内，这项工作为理解分布式神经系统如何利用情境塑造局部表征提供了原则性基础。

## Abstract
Sensory processing does not occur in isolation: what neurons represent in a given sensory modality is shaped by signals from other senses, actions, and behavioral context. This context dependence raises a fundamental question for theories of neural coding: how can circuits efficiently encode their local input while using information available elsewhere in the brain? Here we develop a unified theory of efficient and predictive coding that shows how multimodal contextual information can optimize representations within a local sensory circuit. We demonstrate analytically that the efficient-coding solution maps onto an interpretable neural algorithm: contextual signals provide expectations about the sensory input to the local circuit, local neurons encode deviations from those expectations, and recurrent interactions whiten the residual signals. This result establishes a mathematical equivalence between context-conditioned efficient coding and predictive coding, revealing that predictive computations can emerge from efficient input compression guided by context. The resulting framework is distinct from both classical redundancy reduction within a single modality and hierarchical Bayesian inference. The theory explains and unifies diverse experimental phenomena, including cross-modal suppression of responses to predicted inputs and multimodal receptive fields across sensorimotor, audiovisual, visual-olfactory, and auditory-somatosensory circuits, while recovering classical unimodal coding effects as limiting cases. By linking coding objectives, circuit mechanisms, and experimentally observed phenomena within a single analytical framework, this work provides a principled foundation for understanding how distributed neural systems use context to shape local representations.