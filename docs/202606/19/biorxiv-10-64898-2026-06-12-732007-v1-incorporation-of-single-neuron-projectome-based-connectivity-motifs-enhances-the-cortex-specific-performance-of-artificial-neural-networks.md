---
title: Incorporation of single-neuron projectome-based connectivity motifs enhances the cortex-specific performance of artificial neural networks
title_zh: 基于单神经元投射组的连接模体整合增强人工神经网络的皮层特异性性能
authors: "Sun, Y., Yao, W., Zhang, J., Song, W., Zhao, X., Hao, C., Chen, X., Zeng, S., Jia, S., Yang, Y., Xiao, X., Poo, M.-m., Xu, B., Zhang, T."
date: 2026-06-17
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.12.732007v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 将自然连接模体作为多视图结构约束融入脑启发AI
tldr: 本研究受小鼠大脑单神经元连接组中三节点连接motif的皮层特异性分布启发，开发了连接组信息神经网络算法CINA，将自然连接motif整合到循环神经网络和Transformer大语言模型中。结果表明，整合皮层平均motif能提升ANN在噪声分类、运动学习等基准任务上的性能，而采用皮层特异性motif可进一步增强任务表现，并促进网络出现模块化和小世界特性，验证了连接组启发的ANN优化方法和特定motif的功能意义。
source: biorxiv
selection_source: fresh_fetch
motivation: 借鉴大脑皮层神经元连接motif的分布规律，优化人工神经网络架构。
method: 开发CINA算法，将小鼠皮层特异性三节点连接motif整合到RNN和Transformer模型中。
result: 整合皮层motif提升了RNN和LLM在对应任务中的性能，皮层特异性motif效果更优，并驱动网络产生模块化和小世界属性。
conclusion: 连接组启发的架构设计揭示了特定皮层motif的功能意义，为ANN性能优化提供了新途径。
---

## 摘要
自然神经网络的组构原则可以启发人工神经网络（ANN）的新架构设计。对小鼠大脑单神经元连接组的分析揭示了各个皮层区域和海马结构中三节点连接模体的不同特征。我们开发了一种连接组信息神经网络算法（“CINA”），将自然连接模体整合到以循环神经网络（RNN）和基于Transformer的大语言模型（LLM）为代表的人工神经网络算法中。我们发现，与具有随机连接的RNN相比，整合皮层模体的平均特征提高了RNN在抗噪分类和运动学习基准任务中的性能。值得注意的是，整合皮层特异性模体进一步提升了RNN在与皮层功能相关任务中的性能，并且通过人为增加模体特征中的偏差可以增强这种效果。在使用Motif-Transformer进行自然语言问答和脑信号解码任务的LLM上，也验证了类似的实验结果。图论分析表明，整合自然模体推动了人工神经网络中模块化和小世界特性的涌现。总之，我们不仅展示了受连接组启发的人工神经网络架构优化，还证明了特定模体特征在不同皮层中的功能重要性。

## Abstract
The organizational principles of natural neural networks could inspire the new architecture design of artificial neural networks (ANNs). Analysis of single-neuron connectomes of mouse brains revealed distinct profiles of three-node connectivity motifs in various cortical areas and hippocampal formation. A connectome-informed neural network algorithm ("CINA") was developed to incorporate natural connectivity motifs into ANN algorithms represented by recurrent neural network (RNN) and transformer-based large language model (LLM). We found that incorporation of the average profile of cortical motifs improved the RNN's performance in noise-resistant categorization and motor learning benchmark tasks, as compared with RNNs with random connectivity. Notably, incorporating cortex-specific motifs further elevated the RNN's performance in tasks related to the cortical function, and this effect was enhanced by artificially increasing the bias in the motif profile. Similar experimental results were verified on an LLM using Motif-Transformer for natural language question answering and brain-signal decoding tasks. Graph-theoretic analyses showed that incorporating natural motifs drove the emergence of modular and small-world properties in ANNs. Together, we demonstrated not only connectome-inspired optimization of ANN architecture but also functional significance of specific motif profiles in various cortices.