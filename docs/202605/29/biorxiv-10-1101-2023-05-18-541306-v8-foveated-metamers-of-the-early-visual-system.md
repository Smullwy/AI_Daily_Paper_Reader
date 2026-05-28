---
title: Foveated metamers of the early visual system
title_zh: 早期视觉系统的中心凹元刺激
authors: "Broderick, W. F., Rufo, G., Winawer, J., Simoncelli, E."
date: 2026-05-27
pdf: "https://www.biorxiv.org/content/10.1101/2023.05.18.541306v8.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 早期视觉系统的感知模型
tldr: 视觉辨别力从中央凹向周边下降，假说认为特征表征被空间平均，窗口随离心率缩放。本研究测试了局部亮度和频谱能量模型，通过大尺度合成刺激辨别实验确定临界缩放参数。结果发现临界缩放受图像统计、比较类型和初始化图像显著影响，亮度模型临界值约为能量模型的四分之一，并首次揭示了自然图像初始化对合成刺激辨别的影响，为模型与人类感知的对齐提供了新解释。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究视觉特征表征随离心率变化的空间平均假说，确定不同特征模型的临界缩放规律。
method: 通过生成合成刺激进行大视野感知辨别实验，测量人类与两个特征模型（亮度和频谱能量）匹配的临界窗口缩放值。
result: 亮度模型临界缩放约为能量模型的四分之一，合成与自然图像辨别比合成间辨别需要更小的缩放，且自然图像初始化降低了合成间辨别的临界值。
conclusion: 临界缩放高度依赖图像统计、比较类型和初始化图像，可用模型与人类感知表征的对齐程度进行统一解释。
---

## 摘要
人类辨别和识别空间模式的能力在视野中有所不同，通常在外周区域比在中心凹处更差。这种性能下降体现在从检测到识别的多种任务中。一个简约的假设是，任何视觉特征的表示都会被模糊（空间平均），模糊量因特征而异，但总是随离心率增加而增大。我们在此研究两种此类特征的模型：局部亮度和光谱能量。每个模型在池化窗口中平均相应的特征，窗口直径与离心率线性成比例。我们使用合成刺激进行感知实验，以确定人类与模型辨别能力相匹配的最大窗口缩放比例（“临界”缩放）。我们使用的刺激远大于先前研究，视角为53.6 × 42.2度。我们发现，亮度模型的临界缩放约为能量模型的四分之一，且与早期研究一致，辨别合成刺激与自然图像时的估计临界缩放值小于辨别两个合成刺激时。此外，我们发现用自然图像初始化合成图像的生成过程，会在辨别两个合成刺激时降低临界缩放值，但在辨别合成刺激与自然图像刺激时不会。总之，结果表明临界缩放受图像统计量（池化亮度与光谱能量）、比较类型（合成与合成或合成与自然）以及合成初始化图像（白噪声与自然图像）的强烈影响。我们依据模型与人类感知表征的一致与不一致之处，为这些结果提供了一个连贯的解释。

## Abstract
The ability of humans to discriminate and identify spatial patterns varies across the visual field, and is generally worse in the periphery than in the fovea. This decline in performance is revealed in many kinds of tasks, from detection to recognition. A parsimonious hypothesis is that the representation of any visual feature is blurred (spatially averaged) by an amount that differs for each feature, but that in all cases increases with eccentricity. Here, we examine models for two such features: local luminance and spectral energy. Each model averages the corresponding feature in pooling windows whose diameters scale linearly with eccentricity. We performed perceptual experiments with synthetic stimuli to determine the largest window scaling for which human and model discrimination abilities match (the "critical" scaling). We used much larger stimuli than those of previous studies, subtending 53.6 by 42.2 degrees of visual angle. We found that the critical scaling for the luminance model was approximately one-fourth that of the energy model and, consistent with earlier studies, that the estimated critical scaling value was smaller when discriminating a synthesized stimulus from a natural image than when discriminating two synthesized stimuli. Moreover, we found that initializing the generation of the synthesized images with natural images reduced the critical scaling value when discriminating two synthesized stimuli, but not when discriminating a synthesized from a natural image stimulus. Together, the results show that critical scaling is strongly affected by the image statistic (pooled luminance vs. spectral energy), the comparison type (synthesized vs. synthesized or synthesized vs. natural), and the initialization image for synthesis (white noise vs natural image). We offer a coherent explanation for these results in terms of alignments and misalignments of the models with human perceptual representations.