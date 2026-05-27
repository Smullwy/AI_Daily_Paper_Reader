---
title: A Comparative Evaluation of Structural MRI Foundation Models for Brain Age Regression and Sex Classification
title_zh: 结构磁共振基础模型在脑龄回归和性别分类中的比较评估
authors: "Encin, A., Gilmore, A., Rokem, A., Dickie, E., Glatard, T."
date: 2026-05-19
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.15.725427v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 评估结构MRI基础模型，可作为群体先验用于泛化
tldr: 本研究系统评估了四种结构MRI基础模型在脑年龄回归、性别分类和帕金森病分类任务上的表现，使用三个不同临床数据集，并与FreeSurfer特征及未训练CNN基线对比。结果显示，3D-Neuro-SimCLR表现最一致，但所有模型在早期帕金森病分类上均不及随机水平，而未训练CNN常与FreeSurfer相当。这表明基础模型，尤其是3D-Neuro-SimCLR和AnatCL，有潜力提升神经影像预测模型性能。
source: biorxiv
selection_source: fresh_fetch
motivation: 基础模型在多样化临床人群中的泛化性尚不明确，需要系统基准测试。
method: 首次对四种公开结构MRI基础模型进行跨任务、跨数据集的基准测试，并与传统FreeSurfer特征和未训练CNN对比。
result: 3D-Neuro-SimCLR整体表现最稳定，但所有模型在早期帕金森病分类任务中失败，未训练CNN在多个情况下达到或超过FreeSurfer。
conclusion: 结构MRI基础模型，特别是3D-Neuro-SimCLR和AnatCL，有望增强神经影像预测模型在心理健康研究中的表现。
---

## 摘要
在大规模神经影像数据集上预训练的基础模型为克服心理健康影像研究样本量有限的典型问题提供了有前景的方法，但它们在多样化临床人群中的泛化能力仍不清楚。我们首次系统性地在心理健康研究相关任务上对四个公开可用的结构磁共振基础模型——AnatCL、BrianIAC、3D-Neuro-SimCLR 和 SwinBrain——进行了基准测试。利用来自帕金森进展标志物计划、健康大脑网络和内森克莱恩研究所的 T1 加权磁共振影像，我们评估了这些模型在性别分类、脑龄预测和帕金森病分类上的表现，并以基于 FreeSurfer 提取的皮层厚度和皮层表面积特征训练的模型以及未训练的卷积神经网络基线作为基准进行比较。尽管某些基础模型在特定任务和数据集上优于 FreeSurfer，但 3D-Neuro-SimCLR 在整体上表现最为一致，仅在健康大脑网络的性别分类中显著例外，且所有模型均未能以高于随机水平的准确率对早期帕金森病进行分类。值得注意的是，未训练的卷积神经网络在多个实例中取得了与 FreeSurfer 相当甚至更好的性能，从而成为计算高效的参考模型。跨模型特征相关性分析揭示，基础模型的表征方式与传统皮层测量指标之间的相关性不同。这些发现将结构磁共振基础模型，尤其是 3D-Neuro-SimCLR 和 AnatCL，定位为提升心理健康领域神经影像预测模型性能的有前景途径。

## Abstract
Foundation models pre-trained on large neuroimaging datasets offer a promising approach to overcome the limited sample sizes typical of mental health imaging studies, yet their generalization across diverse clinical populations remains unclear. We present the first systematic benchmark of four publicly available structural MRI foundation models -- AnatCL, BrainIAC, 3D-Neuro-SimCLR, and SwinBrain -- on tasks relevant to mental health research. Using T1-weighted MRI from Parkin-sons Progression Markers Initiative (PPMI), Healthy Brain Network (HBN), and Nathan Kline Institute (NKI), we evaluate these models on sex classification, brain age prediction, and Parkinsons disease (PD) classification, benchmarking against models trained from FreeSurfer-derived cortical thickness and cortical surface area features, as well as an un-trained CNN baseline. Although some individual foundation models out-performed FreeSurfer on particular tasks and datasets, 3D-Neuro-SimCLR demonstrated the most consistent performance overall, with the notable exception of HBN sex classification, and all models failed to classify early-stage Parkinsons disease above chance. Notably, untrained CNNs achieved performance comparable to or exceeding FreeSurfer in multiple instances, establishing them as computationally efficient reference models. The cross-model feature correlation analysis reveals that foundation model representations correlate differently with traditional cortical measurements. These findings position structural MRI foundation models, particularly 3D-Neuro-SimCLR and AnatCL, as promising avenues to boost the performance of neuroimaging predictive models in mental health.