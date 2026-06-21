---
title: Microscopy-informed structural connectivity mapping in the in vivohuman brain via domain adaptation
title_zh: 通过域自适应实现活体人脑显微结构信息引导的结构连接映射
authors: "Zhu, S., Dinsdale, N. K., Jbabdi, S., Miller, K., Howard, A."
date: 2026-06-18
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.14.732211v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 通过领域自适应将活体人脑连接与显微镜图像对齐
tldr: 本研究提出深度学习模型，利用猕猴显微镜纤维取向数据训练，通过域适应桥接死后到活体及跨物种差异，从人类活体扩散MRI预测高分辨率纤维方向，无需显微镜即可改善结构连接组绘图，尤其是浅表白质和皮层下通路，建立了传递微观信息的通用框架。
source: biorxiv
selection_source: fresh_fetch
motivation: 需将动物显微结构信息迁移到人类活体成像，以提高连接组估计的生物学可信度。
method: 以猕猴显微纤维取向为训练目标，通过域适应训练深度学习模型，预测人类活体扩散MRI中的纤维取向。
result: 显微镜指导的纤维取向分布改善了人类活体纤维追踪，增强了浅表白质和皮层-皮层下通路描绘。
conclusion: 该框架实现了显微信息向非侵入性成像的迁移，为生物信息指导的脑连接映射提供了新途径。
---

## 摘要
刻画人类大脑连接仍然是神经科学中的一大挑战。将扩散磁共振成像与同一大脑中的高分辨率显微成像相结合的多模态数据集，在宏观成像与微观结构细节之间提供了独特的联系，但我们缺乏利用这些数据来改进活体人脑成像连接估计的工具。

我们提出了一种深度学习模型，能够从扩散磁共振成像中预测高分辨率显微结构信息引导的纤维走向。该模型使用基于显微成像的三维纤维走向图作为生物学基础的训练目标。它在一个定制的猕猴数据集上进行训练，该数据集整合了活体磁共振成像、死后磁共振成像和全脑显微成像，然后迁移至活体人脑成像。我们利用域自适应技术从不同磁共振成像数据集中预测纤维走向：首先弥合猕猴组织中状态的差异（死后至活体），然后跨物种泛化（猕猴至人）。

我们的方法从扩散磁共振成像中推导出微观尺度的纤维结构信息，而在推断时无需显微成像。它利用了仅能在动物模型中轻松获取的数据，同时以最低的采集要求泛化至活体人脑扩散磁共振成像。显微结构信息引导的纤维走向分布支持了具有生物学意义的纤维束成像，增强了活体人脑数据中浅表白质和皮层-皮层下通路的分辨。更广泛地，这项工作建立了一个通用框架，将显微结构信息从显微成像传递至无创成像，从而实现了生物学信息引导的大脑连接映射。

## Abstract
Characterising human brain connectivity remains a major challenge in neuroscience. Multimodal datasets combining diffusion MRI with high-resolution microscopy in the same brain offer a unique link between macroscopic imaging and microstructural detail, but we lack tools to leverage these data to improve connectivity estimates for in vivo human imaging.

We present a deep learning model that predicts high-resolution microscopy-informed fibre orientations from diffusion MRI. The model uses microscopy-derived three-dimensional fibre orientation maps as biologically grounded training targets. It is trained on a bespoke macaque dataset integrating in vivo MRI, postmortem MRI, and whole-brain microscopy, and then translated to in vivo human imaging. We use domain adaptation to predict fibre orientations from diverse MRI datasets: first to bridge differences in tissue state in the macaque (postmortem to in vivo), and then to generalise across species (macaque to human).

Our method derives microscale-informed fibre architecture from diffusion MRI without requiring microscopy at inference. It leverages data that can easily be acquired only in animal models whilst generalising to in vivo human diffusion MRI with minimal acquisition requirements. The microscopy-informed fibre orientation distributions support biologically meaningful tractography, enhancing superficial white matter and cortical-subcortical pathway delineation for in vivo human data. More broadly, this work establishes a general framework for transferring microstructural information from microscopy to non-invasive imaging, enabling biologically informed mapping of brain connectivity.