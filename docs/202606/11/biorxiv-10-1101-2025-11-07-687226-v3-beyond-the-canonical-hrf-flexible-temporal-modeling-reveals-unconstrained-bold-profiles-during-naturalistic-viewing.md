---
title: "Beyond the Canonical HRF: Flexible Temporal Modeling Reveals Unconstrained BOLD Profiles During Naturalistic Viewing"
title_zh: 超越经典HRF：灵活的时间建模揭示自然观看下无约束的BOLD响应曲线
authors: "Di, X., Hanna, G. B., Biswal, B. B."
date: 2026-06-10
pdf: "https://www.biorxiv.org/content/10.1101/2025.11.07.687226v3.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 自然观看过程中的BOLD特征建模
tldr: 自然刺激（如电影）fMRI研究常用规范血液动力学响应函数(HRF)，但不同特征（视觉、听觉、瞳孔、心智理论）与BOLD响应的时间对齐差异很大，规范HRF难以准确捕捉此类延迟。本研究分析三个观影数据集，采用互相关和有限脉冲响应(FIR)去卷积，揭示无约束时间动态。发现规范HRF对基本感觉特征有效，但对瞳孔和主观报告等固有延迟信号引入“双重延迟”误差，无约束FIR模型则展现皮层区域间的时间层级。结果强调需采用灵活、可靠的时间建模以准确映射自然观看的复杂加工时间。
source: biorxiv
selection_source: fresh_fetch
motivation: 自然刺激特征与BOLD响应的时间对齐差异大，规范HRF可能无法充分捕捉多样延迟。
method: 使用互相关和有限脉冲响应(FIR)去卷积对三个观影数据集进行分析。
result: 规范HRF对基本感觉特征有效，但对延迟信号过度补偿导致“双重延迟”；FIR模型揭示皮层区域间的时间层级。
conclusion: 必须采用灵活且经过可靠性检验的时间建模，才能准确映射自然观看中复杂的加工时间动态。
---

## 摘要
自然刺激（如电影和叙事）越来越多地用于认知神经科学，以将认知和情感过程映射到用功能磁共振成像（fMRI）测量的大脑活动上。从电影中提取的特征跨越多个层次，从计算视觉和听觉输入到生理信号和主观评分。然而，这些特征与血氧水平依赖（BOLD）响应之间的时间对齐差异很大，常用的带有时间导数的经典血流动力学响应函数（HRF）可能无法充分捕捉这些延迟。在本研究中，我们使用互相关和有限脉冲响应（FIR）反卷积分析了三个电影观看数据集，以绘制视觉、听觉、瞳孔和心理理论（ToM）特征在大脑中的无约束时间动态。我们的结果表明，虽然经典HRF有效地捕捉了基本感觉特征，但它对固有延迟的信号引入了系统性错位。因为生理标记（瞳孔大小）和主观报告（ToM）天生滞后于潜在神经事件，标准的HRF卷积过度补偿了它们的生物延迟，引入了冗余的相位不匹配或“双重延迟”。此外，我们的无约束FIR模型揭示了皮层上不同的区域间时间层级。认识到现实世界刺激的固有共线性，这些估计的曲线捕捉了自然处理的捆绑式、多维动态，而不是完美孤立的特征效应。最终，这些发现强调了灵活、经过可靠性测试的时间建模对于准确映射自然观看期间参与的复杂处理时间尺度的必要性。

## Abstract
Naturalistic stimuli, such as movies and narratives, are increasingly used in cognitive neuroscience to map cognitive and affective processes onto brain activity measured with functional MRI (fMRI). Features extracted from movies span multiple levels, from computational visual and auditory inputs to physiological signals and subjective ratings. However, the temporal alignment between these features and the blood-oxygen-level-dependent (BOLD) response varies considerably, and the commonly used canonical hemodynamic response function (HRF) with temporal derivatives may not adequately capture these delays. In this study, we analyzed three movie-watching datasets using cross-correlation and finite impulse response (FIR) deconvolution to map the unconstrained temporal dynamics of visual, auditory, pupillary, and Theory of Mind (ToM) features across the brain. Our results demonstrate that while the canonical HRF effectively captures basic sensory features, it introduces systematic misalignments for inherently delayed signals. Because physiological markers (pupil size) and subject reports (ToM) intrinsically lag the underlying neural events, standard HRF convolution overcompensates for their biological latency, introducing a redundant phase mismatch or "double-delay." Furthermore, our unconstrained FIR models revealed distinct inter-regional temporal hierarchies across the cortex. Recognizing the inherent collinearity of real-world stimuli, these estimated profiles capture the bundled, multi-dimensional dynamics of naturalistic processing rather than perfectly isolated feature effects. Ultimately, these findings highlight the necessity of flexible, reliability-tested temporal modeling to accurately map the complex processing timescales engaged during naturalistic viewing.