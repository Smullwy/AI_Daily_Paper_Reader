---
title: Continuous partitioning of neuronal variability
title_zh: 神经元变异性的连续分解
authors: "Rupasinghe, A., Charles, A. S., Pillow, J. W."
date: 2026-06-09
pdf: "https://www.biorxiv.org/content/10.1101/2025.07.23.666404v3.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 建模视觉层级中的神经元变异性
tldr: 神经元试次间变异性是理解神经信息编码的关键挑战，视觉皮层中变异大于泊松的起源不明。本文提出连续双重随机模型，将反应分解为刺激驱动成分和时变增益过程，应用至LGN、V1、V2、MT四个视觉区，发现增益遵循指数幂律，层级越高幅度越大、衰减越慢，并导出Fano因子解析式，为跨皮层阶段变异性刻画提供了原则性框架。
source: biorxiv
selection_source: fresh_fetch
motivation: 揭示视觉皮层中大于泊松变异性的起源与结构。
method: 提出连续双重随机模型，划分神经反应为平滑刺激驱动和时变随机增益成分。
result: 增益过程服从指数幂律，幅度随视觉层级升高而增大、衰减变慢；模型给出Fano因子的解析表达。
conclusion: 建立了一个可解释跨皮层处理阶段神经变异性的统一框架。
---

## 摘要
神经元在重复刺激下表现出显著的试次间变异性，这对于理解神经脉冲序列的信息内容构成了重大挑战。在视觉皮层中，反应显示出超泊松变异性，但其起源和结构仍不清楚。为了解决这个谜题，我们引入了一个连续的、双重随机的脉冲序列变异性模型，该模型将神经反应分解为平滑的刺激驱动成分和随时间变化的随机增益过程。我们将此模型应用于四个视觉区域（LGN、V1、V2和MT）的脉冲序列，发现增益过程可以用指数幂律很好地描述，并且在视觉层级较高的区域中，增益过程的幅度增大且衰减变慢。该模型还为分箱脉冲计数的Fano因子作为时间尺度的函数提供了解析表达式，将观察到的变异性与潜在的调制动力学联系起来。总之，这些结果建立了一个原则性框架，用于表征跨皮层处理阶段的神经变异性。

## Abstract
Neurons exhibit substantial trial-to-trial variability in response to repeated stimuli, posing a major challenge for understanding the information content of neural spike trains. In the visual cortex, responses show greater-than-Poisson variability, whose origins and structure remain unclear. To address this puzzle, we introduce a continuous, doubly stochastic model of spike train variability that partitions neural responses into a smooth stimulus-driven component and a time-varying stochastic gain process. We applied this model to spike trains from four visual areas (LGN, V1, V2, and MT) and found that the gain process is well described by an exponentiated power law, with increasing amplitude and slower decay at higher levels of the visual hierarchy. The model also provides analytical expressions for the Fano factor of binned spike counts as a function of timescale, linking observed variability to underlying modulatory dynamics. Together, these results establish a principled framework for characterizing neural variability across cortical processing stages.