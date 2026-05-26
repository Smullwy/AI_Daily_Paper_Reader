---
title: Prior scene context reshapes feature reliance during rapid perception
title_zh: 先前场景上下文重塑快速感知过程中的特征依赖
authors: "Tasliyurt-Celebi, S., de Haas, B., L.-H. Vo, M., Dobs, K."
date: 2026-05-18
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.10.724088v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 基于特征的面部检测编码模型
tldr: 本研究探索先验场景信息如何影响快速人脸检测。通过两个眼动实验，操控场景预览和周边视觉，建模检测潜伏期。结果发现，预览场景能促进检测，尤其对困难图像，且从首次眼动即显现。关键的是，先验情境增加了预期位置（空间先验）的贡献，同时降低了感官特征的依赖，表明先验知识重塑了快速感知中的信息利用策略。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究先验情境信息如何调节自然场景中的快速视觉检测过程。
method: 结合眼动追踪与特征编码模型，通过操控场景预览和限制周边视觉的两个实验，用图像预测变量(感官特征与空间先验)预测人脸检测潜伏期。
result: 先验情境促进检测，尤其困难图像，且空间先验的贡献升高，感官特征依赖降低，效果在首次眼动即出现。
conclusion: 先验场景情境将快速人脸检测从感官驱动转向期望基础的空间指导。
---

## 摘要
人类感知由感觉输入和先验知识或期望共同塑造。但先前的上下文信息如何影响快速视觉加工？在这里，我们通过两个实验结合眼动追踪和基于特征的编码模型，预测核心视觉任务——自然场景中的快速人脸检测——中的检测潜伏期（每个实验N = 38）。在第一个实验中，我们操纵了无脸场景预览的存在与否。在第二个实验中，我们额外使用移动窗口范式限制周边视觉输入，从而增加了对先验信息的依赖。在两个实验中，先前的上下文促进了人脸检测，特别是对于具有挑战性的图像。这种促进作用在第一次眼动中就已经显现，表明预览从一开始就塑造了感知策略。为了量化引导行为的信息，我们使用一组基于图像的预测因子对检测潜伏期进行建模，这些预测因子捕捉(i)感觉信息和(ii)场景衍生的空间先验：预期的人脸位置。这两类预测因子均能解释图像间潜伏期的变异。在感觉预测因子中，由人脸存在引起的深度神经网络反应差异提供了对检测潜伏期的最强样本外预测。关键的是，当场景预览可用时，空间先验的贡献增加，而对感觉驱动特征的依赖普遍降低。这些发现共同表明，先前的场景上下文将用于快速人脸检测的信息平衡从感觉驱动转向基于期望的空间引导。

## Abstract
Human perception is shaped by both sensory input and prior knowledge or expectations. But how does prior contextual information influence rapid visual processing? Here, we combined eye tracking with feature-based encoding models across two experiments to predict detection latencies in a core visual task: rapid face detection in natural scenes (N = 38 per experiment). In the first experiment, we manipulated the presence of faceless scene previews. In the second experiment, we additionally restricted peripheral visual input using a moving-window paradigm, thereby increasing reliance on prior information. Across both experiments, prior context facilitated face detection, particularly for challenging images. This facilitation was already evident in the very first eye movement, suggesting that previews shape perceptual strategies from the outset. To quantify what information guided behavior, we modeled detection latencies using a set of image-based predictors capturing (i) sensory information and (ii) a scene-derived spatial prior: the expected face location. Both predictor classes explained latency variation across images. Among sensory predictors, the difference in deep neural network responses induced by the presence of the face provided the strongest out-of-sample prediction of detection latency. Critically, when scene previews were available, the contribution of the spatial prior increased, while reliance on sensory-driven features was generally reduced. Together, these findings indicate that prior scene context shifts the balance of information used for rapid face detection from sensory-driven to expectation-based spatial guidance.