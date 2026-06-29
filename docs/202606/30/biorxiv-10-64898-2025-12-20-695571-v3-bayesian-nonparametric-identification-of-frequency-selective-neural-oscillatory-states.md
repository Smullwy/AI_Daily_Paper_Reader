---
title: Bayesian Nonparametric Identification of Frequency-Selective Neural Oscillatory States
title_zh: 频率选择性神经振荡状态的贝叶斯非参数识别
authors: "Yamada, S., Nagel, S. E., Kobeleva, X., Schmidt, R."
date: 2026-06-25
pdf: "https://www.biorxiv.org/content/10.64898/2025.12.20.695571v3.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 从脑信号识别神经振荡状态
tldr: 神经振荡识别对脑功能研究至关重要，但传统方法依赖预设频带与状态数。本文提出贝叶斯非参数方法，结合时间延迟嵌入与狄利克雷过程混合模型，可自动推断振荡状态数并捕捉频率选择性。在合成数据及静息态MEG数据中，该框架从背景噪声中可靠恢复多个短寿命振荡状态与不同非周期态，展现了无需预定义参数的无监督分析优势。
source: biorxiv
selection_source: fresh_fetch
motivation: 克服传统振荡检测需预定义频带和固定状态数的局限，实现数据驱动的自动状态发现。
method: 采用贝叶斯非参数框架，将时间延迟嵌入与狄利克雷过程高斯混合模型结合，自适应确定状态数并捕获频率特异性结构。
result: 在合成数据和真实MEG数据上，成功识别出多个频选性振荡状态及非周期状态，并准确推断状态数，揭示了显著的个体间差异。
conclusion: 该框架提供了一种无监督手段，无需预设频带或状态数即可发现频率选择性神经振荡状态，具有广泛适用性。
---

## 摘要
识别神经振荡对于将快速脑动态与底层认知过程联系起来至关重要。然而，这具有挑战性，因为振荡事件可能很短暂，嵌入在1/f类背景活动中，并且可能包含未知数量的频谱不同状态。传统方法通常对一个或几个预定义的频带应用窄带带通滤波器，然后使用振幅阈值来识别振荡事件，但检测结果可能对这些选择高度敏感。尽管最近基于隐马尔可夫模型的无监督替代方法解决了这些局限性，但它们仍然需要事先指定状态数量，并且在错误指定该数量时可能出现欠拟合或过拟合。我们提出了一种贝叶斯非参数方法，该方法在直接从数据中推断适当的状态数量的同时识别不同的振荡状态。该方法结合了时间延迟嵌入与狄利克雷过程高斯混合模型。时间延迟嵌入通过加入时移副本来增强信号，使模型能够捕获频率特异性的局部自协方差结构，而狄利克雷过程先验通过修剪不活跃的组件来自适应模型复杂性。我们在模拟神经时间序列（例如脑电图、脑磁图和局部场电位）的单通道合成数据上对该方法进行了基准测试，其中多个频率成分被1/f类噪声掩盖。在此设置下，所提出的模型在噪声条件下可靠地恢复了多个不同的频率成分，同时推断出振荡状态的数量。将该模型应用于静息态运动皮层脑磁图数据集，识别出多个频率选择性、短暂的振荡状态以及具有不同频谱特性的不同非周期状态。这些状态在峰值频率、发生率和功率方面表现出显著的个体间异质性。总体而言，这提供了一个无监督框架，用于发现频率选择性振荡状态，而无需预定义频带或固定状态数量。

## Abstract
Identifying neural oscillations is essential for linking fast brain dynamics to underlying cognitive processes. However, this is challenging because oscillatory events can be brief, embedded in 1/f-like background activity, and may comprise an unknown number of spectrally distinct states. Conventional approaches often apply narrowband band-pass filters to one or a few predefined frequency bands and then use amplitude thresholding to identify oscillatory events, but detection outcomes can be highly sensitive to these choices. Although recent unsupervised alternatives based on hidden Markov models (HMMs) address these limitations, they still require the number of states to be specified in advance and can underfit or overfit when this number is misspecified. We propose a Bayesian nonparametric method that identifies distinct oscillatory states while inferring an appropriate number of states directly from the data. This method combines time-delay embedding (TDE) with the Dirichlet-process Gaussian mixture model (DP-GMM). TDE augments the signal with time-shifted copies, enabling the DP-GMM to capture frequency-specific local autocovariance structures, while the Dirichlet-process prior adapts model complexity by pruning inactive components. We benchmarked the approach against a filter-based thresholding method and the time-delay embedded HMM using single-channel synthetic data designed to mimic neural time series (e.g., EEG, MEG, and local field potentials), with multiple frequency components masked by 1/f-like noise. In this setting, the proposed model reliably recovered multiple distinct frequency components under noisy conditions while also inferring the number of oscillatory states. Applied to a resting-state motor-cortex MEG dataset, the model identified multiple frequency-selective, short-lived oscillatory states alongside distinct aperiodic states with different spectral profiles. These states exhibited substantial inter-individual heterogeneity in peak frequency, occurrence rate, and power. Overall, this provides an unsupervised framework for discovering frequency-selective oscillatory states without predefining frequency bands or fixing the number of states.