---
title: Supervised Domain Adaptation Mitigates Cross-Ethnicity Prediction Error in Neuroimaging Based Cognitive Prediction
title_zh: 有监督领域自适应缓解基于神经影像的认知预测中的跨种族预测误差
authors: "Lal Khakpoor, F., van der Vliet, W., Deng, J., Wang, Y., Pat, N."
date: 2026-05-28
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.25.727742v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 跨族裔神经影像的域适应提升泛化性
tldr: 本研究针对神经影像认知预测中因种族数据不平衡导致的性能差异，利用ABCD数据集，以美国白人为源域、非裔美国人为目标域，比较四种有监督域适应方法。结果显示所有方法均能降低非裔预测误差，其中简单的平衡加权方法性能最优且计算成本低，为提升预测公平性提供了实用框架。
source: biorxiv
selection_source: fresh_fetch
motivation: 神经影像预测模型因训练数据种族不平衡而对少数族裔泛化差，急需减缓跨种族预测偏差。
method: 将美国白人作为源域、非裔作为目标域，采用平衡加权、TrAdaBoost、特征增强和线性插值四种有监督域适应方法，对80种MRI指标进行认知预测。
result: 所有域适应方法均降低了非裔美国人的预测误差，尤其对基线差异大的结构MRI效果显著，平衡加权表现最佳。
conclusion: 简单低成本的有监督域适应方法（如平衡加权）可有效减轻神经影像预测中的种族间性能差距，提高模型公平性和泛化性。
---

## 摘要
研究已经开发了机器学习模型，利用神经影像数据预测认知和临床结果，但公平性和泛化能力仍然是关键挑战。大规模数据集在人口统计学上往往不平衡，导致不同种族群体间的性能存在系统性差异，模型通常对多数群体表现更好。本文研究有监督领域自适应是否能缓解这种偏差。使用ABCD数据集，我们将白人美国参与者作为源域，非裔美国参与者作为目标域。我们比较了四种领域自适应方法——均衡加权、两阶段TrAdaBoost、结合SrcOnly预测的特征增强以及线性插值——与标准训练方法在通过80项MRI指标预测认知方面的表现。所有方法都降低了非裔美国参与者的预测误差，特别是对于基线差异较大的MRI指标（如结构MRI）效果显著，而在初始差距较小的指标（如功能连接）上改善有限。均衡加权表现最佳，凸显了简单、低成本的方法可以有效缩小代表性不足群体的跨种族性能差距。

重要意义大规模神经影像数据集日益支持机器学习模型预测认知和临床结果；然而，这些数据集在种族上往往不平衡。因此，预测模型对代表性不足群体的泛化能力通常较差。我们证明，针对80种MRI表型，一类统称为有监督领域自适应的机器学习方法可以显著减少基于神经影像的认知预测中的跨种族差异，即使仅能获得有限数量的代表性不足群体数据。在所评估的方法中，均衡加权实现了最佳性能，同时保持了较低的计算成本。综上，这些发现提供了一个实用且可扩展的框架，用于在现实种族不平衡条件下提高基于神经影像的机器学习的公平性和泛化能力。

## Abstract
Research has developed machine-learning models to predict cognitive and clinical outcomes from neuroimaging data, yet fairness and generalizability remain key challenges. Large-scale datasets are often demographically imbalanced, leading to systematic performance disparities across ethnic groups, with models typically performing better for majority populations. Here, we examine whether supervised domain adaptation can mitigate such bias. Using the ABCD dataset, we treat White-American participants as the source domain and African-American participants as the target domain. We compare four domain-adaptation methods--balanced weighting, two-stage TrAdaBoost, feature augmentation with SrcOnly prediction, and linear interpolation--against standard training in predicting cognition from 80 MRI measures. All methods reduced prediction error for African American participants, particularly for MRI measures with large baseline disparities (e.g., structural MRI), while offering limited gains where initial gaps were small (e.g., functional connectivity). Balanced weighting performed best, highlighting that simple, low-cost approaches can effectively reduce cross-ethnicity performance gaps for underrepresented populations.

Significant StatementLarge-scale neuroimaging datasets increasingly enable machine-learning models to predict cognitive and clinical outcomes; however, these datasets are often ethnically imbalanced. As a result, predictive models tend to generalize poorly to underrepresented populations. We demonstrate that, across 80 MRI phenotypes, a class of machine-learning approaches collectively known as supervised domain adaptation can substantially reduce cross-ethnicity disparities in neuroimaging-based cognitive prediction, even when only limited data from underrepresented groups are available. Among the methods evaluated, balanced weighting achieved the best performance while maintaining low computational cost. Together, these findings provide a practical and scalable framework for improving fairness and generalizability in neuroimaging-based machine learning under realistic conditions of ethnic imbalance.