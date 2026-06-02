---
title: "Top-down feedback matters: Functional impact of brainlike connectivity motifs on audiovisual integration"
title_zh: 自上而下的反馈很重要：脑样连接模式对视听整合的功能影响
authors: "Tugsbayar, M., Li, M., Muller, E., Richards, B. A."
date: 2026-06-01
pdf: "https://www.biorxiv.org/content/10.1101/2024.10.01.615270v7.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 人工神经网络中的类脑自上而下反馈连接
tldr: 标准人工神经网络缺少大脑中普遍的自上而下反馈，本研究构建了模拟新皮层自上而下反馈核心特性的深度网络模型，以探索不同层级循环架构对视听整合任务的影响。结果发现，模仿人脑架构的层级设计赋予模型类似人类的轻视觉偏好，且不损害任务表现；不同反馈配置使结构相同的模型功能各异，表明自上而下反馈是一项重要的计算特征。
source: biorxiv
selection_source: fresh_fetch
motivation: 理解大脑中广泛存在的自上而下反馈在计算中的功能角色。
method: 开发模拟新皮层自上而下反馈核心特性的深度神经网络模型，并构建不同层级循环架构。
result: 模仿人脑架构的模型产生类似人类的视觉偏好但不影响视听整合性能，不同反馈配置使相同连接模型功能分化。
conclusion: 自上而下反馈是生物脑的重要计算特征，将其纳入人工神经网络会影响模型行为并约束其学习到的解决方案。
---

## 摘要
人工神经网络（ANN）是研究神经计算的重要工具，但标准ANN架构并未捕捉到大脑的许多特征。大多数ANN模型中一个值得注意的缺失特征是自上而下的反馈，即从网络的高阶层向低阶层的投射。自上而下的反馈在大脑中普遍存在，并对新皮层锥体神经元的活动具有独特的调节作用。然而，我们仍未理解其计算作用。在这里，我们开发了一个深度神经网络模型，该模型捕捉了新皮层中自上而下反馈的核心功能特性，使我们能够构建更贴近大脑架构的分层递归ANN模型。我们使用该模型探索了不同分层递归架构对视听整合任务的影响。我们发现，某些层级结构，即模仿人脑架构的层级结构，赋予了ANN模型类似人类的轻微视觉偏好。这种偏好不会损害视听任务的表现。结果进一步表明，自上而下反馈的不同配置使其他连接完全相同的模型在功能上彼此区别，也区别于传统的前馈和横向递归模型。总之，我们的发现表明，调节性自上而下反馈是生物大脑的一个计算相关特征，将其纳入ANN会影响其行为并限制其可能发现的解决方案。

## Abstract
Artificial neural networks (ANNs) are an important tool for studying neural computation, but many features of the brain are not captured by standard ANN architectures. One notable missing feature in most ANN models is top-down feedback, i.e. projections from higher-order layers to lower-order layers in the network. Top-down feedback is ubiquitous in the brain, and it has a unique modulatory impact on activity in neocortical pyramidal neurons. However, we still do not understand its computational role. Here we develop a deep neural network model that captures the core functional properties of top-down feedback in the neocortex, allowing us to construct hierarchical recurrent ANN models that more closely reflect the architecture of the brain. We use this to explore the impact of different hierarchical recurrent architectures on an audiovisual integration task. We find that certain hierarchies, namely those that mimic the architecture of the human brain, impart ANN models with a light visual bias similar to that seen in humans. This bias does not impair performance on the audiovisual tasks. The results further suggest that different configurations of top-down feedback make otherwise identically connected models functionally distinct from each other, and from traditional feedforward and laterally recurrent models. Altogether our findings demonstrate that modulatory top-down feedback is a computationally relevant feature of biological brains, and that incorporating it into ANNs affects their behavior and constrains the solutions it's likely to discover.