---
title: Scene Structure Predicts Perceptual Decisions in Naturalistic Detection Tasks
title_zh: 场景结构预测自然检测任务中的知觉决策
authors: "Yang, J., Vercillo, T., Cutrona, T. E., Azeglio, S., Iannetti, G., Neri, P."
date: 2026-06-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.03.729800v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 深度神经网络从场景结构预测人类感知决策
tldr: 本研究探究自然场景的统计结构如何影响知觉决策，通过心理物理学、户外增强现实、深度神经网络、图像特征分析和脑电图，发现背景场景的纹理熵和边缘密度等特征可预测知觉正确与否，EEG在刺激前的神经活动即可区分后续决策结果，表明知觉由目标与周围场景结构共同塑造，提供了理解环境与神经动态协同支持知觉决策的统一框架。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究自然场景的背景统计结构如何影响人类对近阈限刺激的知觉决策，揭示复杂环境下稳定知觉的机制。
method: 结合控制心理物理学、户外增强现实、深度神经网络建模、图像低层特征分析和脑电图记录。
result: 背景图像的DNN可预测行为结果，纹理熵和边缘密度是关键信息，EEG预刺激活动区分正确与错误试次，且融合图像特征提高解码。
conclusion: 知觉决策不仅依赖于目标刺激，更被周围场景的统计结构所塑造，揭示了环境结构与神经动态的协同作用。
---

## 摘要
人类视觉系统能够识别复杂自然场景中的物体，但在如此多变的条件下支持稳健知觉的机制仍不完全清楚。在此，我们研究自然场景的统计结构如何影响知觉证据的形成，并决定近阈限刺激是被正确知觉还是错误知觉。我们结合受控心理物理学、户外增强现实（AR）、深度神经网络（DNN）、图像特征分析和脑电图（EEG），考察背景语境如何调节知觉决策。在多项检测任务中，人类表现系统地受到不含探测项的背景结构的影响。仅用背景图像训练的DNN能够预测正确与错误的行为结果，且在延迟线索条件下效应更强，表明当空间不确定性较高时，全局场景语境对局部知觉决策有所贡献。AR实验进一步表明，这些语境驱动的效应在自然观看环境中依然存在。为识别这些效应背后的视觉信息，我们分析了低级图像统计量。纹理熵和边缘密度成为信息性特征，基于这些度量训练的传统机器学习模型实现了有意义的正确/错误分类。最后，EEG分析揭示了图像驱动的知觉变异性的神经特征：探测项出现前的图像窗口期内的活动能够区分后续的正确与错误试次，并且将EEG与图像衍生特征结合可提高解码性能。这些发现共同表明，自然场景中的知觉并不仅仅由目标决定，而是受到周围语境统计结构的塑造。通过将心理物理学、AR、DNN建模、图像统计和EEG联系起来，本研究为理解环境结构与神经动力学如何共同支持知觉决策提供了一个统一框架。

## Abstract
The human visual system can identify objects in complex natural scenes, yet the mechanisms supporting robust perception under such variable conditions remain incompletely understood. Here, we investigate how the statistical structure of natural scenes shapes perceptual evidence formation and determines whether near-threshold stimuli are perceived correctly or incorrectly. We combine controlled psychophysics, outdoor augmented reality (AR), deep neural networks (DNNs), image-feature analysis, and EEG to examine how background context modulates perceptual decisions. Across multiple detection tasks, human performance was systematically influenced by probe-free background structure. DNNs trained on background images alone predicted correct and incorrect behavioral outcomes, with stronger effects in postcue conditions, suggesting that global scene context contributes to local perceptual decisions when spatial uncertainty is higher. AR experiments further showed that these context-driven effects persist in naturalistic viewing environments. To identify the visual information underlying these effects, we analyzed low-level image statistics. Texture entropy and edge density emerged as informative features, and conventional machine-learning models trained on these measures achieved meaningful correct/incorrect classification. Finally, EEG analyses revealed neural signatures of image-driven perceptual variability: activity during the probe-free preimage window distinguished later correct from incorrect trials, and combining EEG with image-derived features improved decoding performance. Together, these findings show that perception in natural scenes is not determined solely by the target, but is shaped by the statistical structure of the surrounding context. By linking psychophysics, AR, DNN modeling, image statistics, and EEG, this work provides a unified framework for understanding how environmental structure and neural dynamics jointly support perceptual decision-making.