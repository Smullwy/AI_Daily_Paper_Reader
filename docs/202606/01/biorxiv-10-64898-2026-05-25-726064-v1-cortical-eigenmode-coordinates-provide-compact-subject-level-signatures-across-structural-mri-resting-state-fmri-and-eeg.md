---
title: "Cortical eigenmode coordinates provide compact subject-level signatures across structural MRI, resting-state fMRI, and EEG"
title_zh: 皮质本征模态坐标跨结构MRI、静息态fMRI与EEG提供紧凑的个体水平脑特征
authors: "Park, H. G., Tarpey, T."
date: 2026-05-28
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.25.726064v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 使用特征模态坐标的跨被试fMRI脑表征
tldr: 多模态神经影像常因分析空间不统一而难以构建可解释的个体脑特征。本文评估皮层Laplace-Beltrami特征模式坐标作为共享几何语言，统一表示结构MRI形态、rs-fMRI协方差和EEG频率特征。在MPI-LEMON数据上，该坐标生成的紧凑个体签名能有效预测年龄和认知，且多模态特征模式PCA优于传统方法，几何特征多视角分解进一步提取了低维可解释共享因子。研究表明，皮层特征模式坐标是实现紧凑、可解释、多模态对齐个体脑特征的有效基础。
source: biorxiv
selection_source: fresh_fetch
motivation: 多模态脑影像缺乏共同、可解释的个体级特征表示空间，阻碍跨模态整合。
method: 利用皮层Laplace-Beltrami特征模式坐标分别对结构MRI、rs-fMRI和EEG建模，并比较单模态、多模态PCA及几何特征多视角分解。
result: 特征模式坐标衍生的个体签名紧凑且预测年龄、认知能力强，多模态PCA在适中维度下性能突出，且优于传统低维PCA；GEMF得到更低维可解释共享因子。
conclusion: 皮层特征模式坐标可作为紧凑、可解释且多模态对齐的个体脑特征基础框架。
---

## 摘要
多模态神经影像的一个实际障碍在于，结构MRI、fMRI和EEG通常在模态特定空间中分析，或被简化为基于图谱和传感器的汇总，这限制了共同、可解释的个体水平脑特征的构建。我们评估了皮质拉普拉斯-贝尔特拉米本征模态坐标，将其作为一种共享的几何对齐语言，用于结构MRI（sMRI）、静息态fMRI（rs-fMRI）和EEG。在此框架中，sMRI形态测量场由皮质本征模态系数表示，rs-fMRI由本征模态时间序列系数之间的协方差表示，EEG由模态-频率-条件汇总表示。利用莱比锡马克斯·普朗克研究所心智-大脑-身体数据集（MPI-LEMON），我们比较了单模态本征模态坐标汇总、多模态皮质本征模态坐标PCA、传统的基于图谱/传感器的PCA和岭回归表示，以及几何本征模态多视角分解（GEMF）。GEMF是一种结构化分解，在分离共享变异与模态特异性变异的同时，保留了数据对象的模态固有组织。本征模态坐标表示产生了紧凑的个体水平特征，对实足年龄和一项次要认知结果具有强外部效度。多模态本征模态坐标PCA是表现最强的方法之一，在中等维度上达到了较高的年龄预测性能，且始终优于传统的低维PCA。GEMF选择了更低维的共享表示，并保持了竞争力，其优势在于提供了可解释的共享和模态特异性因子。这些发现支持皮质本征模态坐标作为构建紧凑、可解释且多模态对齐的个体水平脑特征的实用基础。

## Abstract
A practical barrier in multimodal neuroimaging is that structural MRI, fMRI, and EEG are often analyzed in modality-specific spaces or reduced to atlas- and sensor-based summaries, limiting the construction of common, interpretable subject-level brain signatures. We evaluate cortical Laplace-Beltrami eigenmode coordinates as a shared geometry-aligned language for structural MRI (sMRI), resting-state fMRI (rs-fMRI), and EEG. In this framework, sMRI morphometric fields are represented by cortical eigenmode coefficients, rs-fMRI by covariance among eigenmode time-series coefficients, and EEG by mode-frequency-condition summaries. Using the Max Planck Institute Leipzig Mind-Brain-Body dataset (MPI-LEMON), we compared unimodal eigenmode-coordinate summaries, multimodal cortical eigenmode-coordinate PCA, conventional atlas/sensor-based PCA and ridge representations, and geometric eigenmode multiview factorization (GEMF). GEMF is a structured decomposition that preserves the modality-native organization of the data objects while separating shared from modality-specific variation. Eigenmode-coordinate representations yielded compact subject-level signatures with strong external validity for chronological age and a secondary cognitive outcome. Multimodal eigenmode-coordinate PCA was among the strongest-performing approaches, reached high age-prediction performance at moderate dimension, and consistently outperformed conventional low-dimensional PCA. GEMF selected an even lower-dimensional shared representation and remained competitive with the benefit of providing interpretable shared and modality-specific factors. These findings support cortical eigenmode coordinates as a practical foundation for compact, interpretable, and multimodally aligned subject-level brain signatures.