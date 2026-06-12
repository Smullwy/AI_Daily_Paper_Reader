---
title: Mechanistic corticostriatal circuit model predicts learning-dependent fMRI dynamics and individual reward bias in humans
title_zh: 基于机制的皮质-纹状体回路模型预测人类学习依赖性fMRI动力学和个体奖励偏差
authors: "Carter, S., Kuang, Z., Chesebro, A. G., Jumana, S. A., Burke, S., Pathak, A., Ratai, E.-M., Miller, E. K., Granger, R. H., Mujica-Parodi, L. R."
date: 2026-06-09
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.28.728582v3.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 电路模型预测fMRI动态和个体偏差
tldr: 本文利用生物物理皮质纹状体回路模型，将神经元活动经血流动力学转换生成fMRI信号与行为输出，以此预测人类学习过程中的脑成像动态和个体奖励偏好。模型发现，尽管学习时神经局部场电位相干性增强，但BOLD信号相关性反而降低，该反直觉预测被高灵敏度个体fMRI数据证实。模型还能拟合个体行为，区分对正负奖励敏感的人群，并复现了已有生物标志物，展示了回路模型作为生成工具在人类神经科学中的潜力。
source: biorxiv
selection_source: fresh_fetch
motivation: 开发能生成可检验假设并解析个体差异的回路级计算模型，以弥补纯数据驱动方法的不足。
method: 采用皮质纹状体回路模型，将模拟的局部场电位信号通过气球模型转换为fMRI信号，并生成行为结果，再与人类实际数据进行比对验证。
result: 模型预测学习时前额叶-纹状体BOLD相关性下降，被人类fMRI数据证实；且能按个体对正负奖励的响应偏差进行单被试拟合分类，同时保留了激活幅度和多巴胺能血流动力学延迟等经典生物标志物。
conclusion: 回路模型能够生成机械论假设并捕捉个体异质性，为人类神经科学研究提供了超越传统方法的新工具。
---

## 摘要
回路水平的计算模型不仅能解释现有数据，还能产生新的假设并捕捉人类群体中的个体差异。我们使用生物物理皮质-纹状体模型证明这点，将模拟的神经元活动从局部场电位(LFP)通过气球模型转换为功能磁共振成像(fMRI)信号，最终生成行为结果，并与人类受试者的结果进行对比验证。该模型产生了一个反直觉但可检验的预测：尽管学习过程中神经LFP尺度上的前额叶-纹状体相干性增加，但同一回路经血流动力学变换后，预测前额叶-纹状体BOLD相关性下降，这由皮层而非纹状体中出现的类别选择性表征驱动。该预测在优化了单被试检测灵敏度的fMRI数据中得到证实。模型还能对行为结果进行单被试拟合，将个体划分为对正、负奖励偏差有差异化反应的类型。已建立的生物标志物，包括通过低频波动幅度测量的激活和多巴胺对血流动力学延迟的影响，也在LFP和fMRI尺度间保持一致。这些发现将回路模型重新定位为人类神经科学的生成工具，能够产生基于机制的假设，并以纯数据驱动方法无法实现的方式解析个体差异。

## Abstract
Circuit-level computational models can do more than explain existing data; they can generate novel hypotheses and capture individual differences in human populations. We demonstrate this using a biophysical corticostriatal model, transforming simulated neuronal activity from local field potential (LFP) into functional magnetic resonance imaging (fMRI) signals via the balloon model, and finally generating behavioral outcomes. We then validate the results against those obtained from human subjects. The model generates a counterintuitive yet testable prediction. Although prefrontal-striatal coherence increases at the neural LFP scale during learning, the same circuit, passed through the hemodynamic transform, predicts a decrease in prefrontal-striatal BOLD correlation, driven by category-selective representations that emerge in cortex but not striatum. This prediction is confirmed in fMRI data optimized for single-subject-level detection sensitivity. The model further enables single-subject fitting of a behavioral outcome, classifying individuals into those differentially responding to positive versus negative reward bias. Established biomarkers, including activation measured by the amplitude of low-frequency fluctuations and dopaminergic effects on hemodynamic latency, are also conserved across LFP and fMRI scales. These findings reposition circuit models as generative tools for human neuroscience, capable of producing mechanistically grounded hypotheses and parsing individual variation in ways inaccessible to data-driven approaches alone.