---
title: Comparing sites of plasticity in models of adaptation to manifold-based perturbations in brain-computer interfaces
title_zh: 脑机接口中适应基于流形的扰动时不同可塑性位点的模型比较
authors: "Payeur, A., Orsborn, A. L., Lajoie, G."
date: 2026-06-27
pdf: "https://www.biorxiv.org/content/10.1101/2023.03.11.532146v3.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 脑机接口适应与神经流形扰动
tldr: 在脑机接口中，运动皮层神经活动流形内的扰动比流形外的扰动适应更快。本研究用最小线性循环网络比较不同可塑性位点理论，发现所有位点都能产生差异适应，其强度受循环权重方差控制，且Hessian分析揭示未对齐扰动导致浅曲率减慢学习。提出实验区分不同位点，揭示权重方差是关键参数。
source: biorxiv
selection_source: fresh_fetch
motivation: 解释脑机接口实验中流形对齐与未对齐扰动导致适应速度差异的神经机制。
method: 采用最小线性循环网络在固定点通过梯度下降训练，比较不同可塑性位点假说并进行Hessian分析。
result: 所有可塑性位点均能产生差异适应，强度依赖循环权重方差，未对齐扰动引入浅曲率方向减慢梯度下降。
conclusion: 循环权重方差是控制差异适应的关键参数，可塑性位点也起重要作用，并提出实验测试区分贡献。
---

## 摘要
在训练有素的行为中，运动皮层中的神经群体活动位于一个低维流形上。这引发了关于这种结构如何约束后续学习的问题。在非人灵长类动物的脑机接口实验中，对齐该子空间的扰动能诱导快速适应，而未对齐的扰动则诱导较慢的适应。已有几种理论解释这种差异适应，其区别在于可塑性的发生位置。我们使用一个在其固定点运行并通过梯度下降训练的最小线性递归网络，比较了这些假设。所有候选的可塑性位点都能产生一定程度的差异适应，其强度取决于递归权重的方差，但不同位点对它的敏感性不同。黑塞分析揭示了未对齐扰动如何通过引入曲率较浅的方向来重塑损失景观，梯度下降在这些方向上进展缓慢。我们进一步提出了一项实验测试，以帮助在适应过程中区分不同可塑性位点的贡献。总体而言，我们的结果表明，递归权重的方差是调控差异适应的一个关键参数，与可塑性位点并列。

## Abstract
During well-trained behaviors, neural population activity in motor cortex lies on a low-dimensional manifold. This raises the question of how such structure constrains subsequent learning. In brain-computer interface experiments in nonhuman primates, perturbations aligned with this subspace induced rapid adaptation, whereas misaligned perturbations induced slower adaptation. Several theoretical accounts have been proposed to explain this differential adaptation, differing in the locus of plasticity. We compare these hypotheses using a minimal linear recurrent network operating at its fixed point and trained by gradient descent. All candidate plasticity sites are able to produce some degree of differential adaptation, whose strength depends on the variance of recurrent weights, with different sensitivities across sites. Hessian analysis reveals how misaligned perturbations reshape the loss landscape by introducing directions of shallow curvature along which gradient descent proceeds slowly. We further propose an experimental test to help distinguish the contributions of different plasticity sites during adaptation. Overall, our results identify the variance of recurrent weights as a key control parameter governing differential adaptation, alongside the site of plasticity.