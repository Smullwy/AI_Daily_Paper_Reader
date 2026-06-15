---
title: "BiXformer: A Bidirectional Cross Attention Transformer for Disentangling Inter-Regional Neural Dynamics"
title_zh: BiXformer：一种用于解耦脑区间神经动态的双向交叉注意力Transformer
authors: "El Sayed, O., Han, Y., Dragoi, T., Economo, M. N., DePasquale, B."
date: 2026-06-10
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.05.730511v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 双向交叉注意力分离神经动态
tldr: BiXformer是一种双向交叉注意力Transformer，旨在从多脑区同步神经记录中解耦双向、时延的区际通信。它通过方向性掩码注意力将交互分解为因果和反因果流，恢复低维潜在动态并估计时延。模型在合成数据上验证了准确恢复能力，并在运动任务相关的神经与行为记录中揭示出感觉反馈与运动信号的共存，为复杂神经回路中的动态定向通信提供灵活分析框架。
source: biorxiv
selection_source: fresh_fetch
motivation: 多脑区神经记录中存在双向叠加、时延的区际通信，前馈与反馈信号交织难以分离。
method: 采用带方向掩码的交叉注意力Transformer，强制时间约束以分解区际通信为因果和反因果流。
result: 在合成数据上精确恢复潜在结构和时延，在真实神经记录中揭示出感觉与运动相关成分的共存。
conclusion: BiXformer为复杂神经回路中动态定向通信的解析提供了灵活有效的工具。
---

## 摘要
高通量神经记录技术的进步使得能够在行为动物中同时测量多个脑区的活动，产生规模和丰富度前所未有的数据集。解读这些数据仍然具有挑战性，因为脑区间通信具有双向和时间偏移的特性，前馈和反馈信号叠加在神经群体中。我们提出了BiXformer，一种双向交叉注意力Transformer，通过使用方向性掩码注意力将脑区间通信分解为因果和非因果流，从而解耦这些相互作用。通过在注意力头中施加时间约束，BiXformer恢复了低维、定向的潜在动态，并估计通信延迟，而不依赖线性或平稳性假设。我们在已知真实延迟的合成数据集上验证了模型，展示了潜在结构和脑区间时序的准确恢复。在运动任务期间的同时神经-行为记录和多脑区神经记录上应用，BiXformer揭示出可解释的、时间结构化的成分，与感觉反馈和运动相关信号的共存一致。这些结果确立了BiXformer作为一个灵活的框架，用于揭示复杂神经回路中的动态、定向通信。

## Abstract
Advances in high-throughput neural recording technologies enable simultaneous measurement of activity across multiple brain regions in behaving animals, producing datasets of unprecedented scale and richness. Interpreting these data remains challenging due to the bidirectional and temporally offset nature of inter-regional communication, where feedforward and feedback signals are superimposed within neural populations. We introduce BiXformer, a bidirectional cross-attention transformer that disentangles these interactions by decomposing inter-regional communication into causal and acausal streams using directionally masked attention. By enforcing temporal constraints within attention heads, BiXformer recovers low-dimensional, directed latent dynamics and estimates communication delays without relying on linearity or stationarity assumptions. We validate the model on synthetic datasets with known ground-truth delays, demonstrating accurate recovery of both latent structure and inter-regional timing. Applied to simultaneous neural-behavioral recordings and multi-region neural recordings during a movement task, BiXformer reveals interpretable, temporally structured components consistent with the coexistence of sensory feedback and motor-related signals. These results establish BiXformer as a flexible framework for uncovering dynamic, directed communication in complex neural circuits.