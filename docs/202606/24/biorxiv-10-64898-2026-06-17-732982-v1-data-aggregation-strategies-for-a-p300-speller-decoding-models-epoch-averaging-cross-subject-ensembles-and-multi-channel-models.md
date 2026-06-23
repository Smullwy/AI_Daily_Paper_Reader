---
title: "Data aggregation strategies for a P300 speller: decoding models, epoch averaging, cross-subject ensembles, and multi-channel models"
title_zh: P300拼写器的数据聚合策略：解码模型、试次平均、跨被试集成与多通道模型
authors: "Sidorov, L., Makarova, A., Maysuradze, A., Lebedev, M."
date: 2026-06-22
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.17.732982v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: P300解码与跨被试集成模型
tldr: 针对P300拼写器单试次解码信噪比低、个体差异大的问题，本研究系统比较了多种数据聚合策略（模型、epoch平均、跨被试集成等），使用CNN和SVM在10人数据集上评估。结果：受控跨被试聚合结合多通道EEGNet信息传输率最优（0.95-0.97比特/决策），接近理论极限，证明结构化聚合优于简单平均与随机混合，为多被试脑机接口提供有效方案。
source: biorxiv
selection_source: fresh_fetch
motivation: P300单试次解码因信噪比低和个体差异大而不可靠，亟需有效的数据聚合策略提升性能。
method: 系统比较七种聚合策略（模型选择、epoch平均、多通道模型、跨被试平均等），采用两种CNN和SVM在10人数据集上以信息传输率评估。
result: 受控跨被试聚合（每被试3试次、30通道）结合多通道EEGNet取得最高ITR（0.95-0.97比特/决策），接近理论极限，且显著优于非结构化混合与简单平均。
conclusion: 保持被试间结构的受控跨被试聚合与多通道架构能最大限度提升P300解码，为多被试BCI应用奠定基础。
---

## 摘要
从脑电图(EEG)中准确检测P300事件相关电位在小试次数条件下仍具挑战，原因在于信噪比低且被试间差异显著。本研究系统比较了多种数据聚合策略以改善P300分类性能，在包含10名被试的数据集上评估了两种卷积神经网络架构(EEGNet和BaseCNN)以及一种支持向量机(SVM)。我们对比了：(1)单试次条件下的被试特异性模型与混合通用模型；(2)5次和10次刺激重复的试次平均；(3)被试作为不同输入通道的多通道模型；(4)跨被试平均；(5)混合(无控)平均；(6)所有被试每人取K次试次的组合方法；(7)基于扩展单试次时段的时间偏移通道。解码性能采用基于二分类准确率计算的信息传输率(ITR)量化。我们发现单试次ITR不实用(0.15–0.64比特/试次)，而受控聚合则提升了性能。每人取K=3次试次的组合跨被试方法(30通道)在多通道EEGNet下取得了最高ITR：无光圈记录中为0.95比特/聚合决策，光圈数据上为0.97比特/聚合决策，接近聚合决策的理论二分类上限。受控跨被试平均始终优于随机试次混合，且当保留被试间结构时，多通道架构优于简单平均。这些发现有助于改善P300解码并实现多被试脑机接口(BCI)。

## Abstract
Accurate detection of P300 event-related potentials from electroencephalography (EEG) remains challenging for small numbers of trials due to low signal-to-noise ratios and substantial inter-subject variability. This study presents a systematic comparison of data aggregation strategies for improving P300 classification, evaluated on a 10-subject dataset using two convolutional neural network architectures (EEGNet and BaseCNN) and a support vector machine (SVM). We compared: (1)~subject-specific and pooled general models for single trials; (2)~epoch averaging with 5 and 10 stimuli repetitions; (3)~multi-channel models where subjects corresponded to different input channels; (4)~cross-subject averaging; (5)~mixed (uncontrolled) averaging; (6)~a combined approach with $K$ trials per subject across all participants; and (7)~time-shifted channels from extended single-trial epochs. Decoding performance was quantified using the Information Transfer Rate (ITR), computed for binary classification accuracy. We found that single-trial ITR was unpractical (0.15--0.64~bits/trial), whereas controlled aggregation improved the performance. The combined cross-subject approach with $K=3$ trials per participant (30 channels) achieves the highest ITR with multi-channel EEGNet: 0.95~bits/aggregated decision in the no-aperture recordings and 0.97~bits/aggregated decision on Aperture data, approaching the theoretical binary-classification limit for the aggregated decision. Controlled cross-subject averaging consistently outperformed random trial mixing, and multi-channel architectures outperformed simple averaging when inter-subject structure was preserved. These findings contribute to improving P300 decoding and implementing multi-subject brain-computer interfaces (BCIs).