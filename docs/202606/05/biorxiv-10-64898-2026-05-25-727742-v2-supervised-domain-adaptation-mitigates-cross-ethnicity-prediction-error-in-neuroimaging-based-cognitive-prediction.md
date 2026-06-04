---
title: Supervised Domain Adaptation Mitigates Cross-Ethnicity Prediction Error in Neuroimaging Based Cognitive Prediction
title_zh: 有监督领域自适应减轻基于神经影像的认知预测中的跨种族预测误差
authors: "Lal Khakpoor, F., van der Vliet, W., Deng, J., Wang, Y., Pat, N."
date: 2026-06-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.25.727742v2.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 领域自适应方法提升基于脑影像认知预测的跨种族泛化
tldr: 本研究针对大规模神经影像数据集中种族不平衡导致的预测模型性能偏差，评估监督领域自适应方法在跨种族认知预测中的有效性。基于ABCD数据集的80种MRI表型，发现平衡加权等简单策略可显著降低非裔美国人的预测误差，尤其在结构MRI等初始差距大的模态。平衡加权仅需少量目标组样本即能稳定提升公平性，为神经影像预测生物标志物提供实用方案。
source: biorxiv
selection_source: fresh_fetch
motivation: 大规模神经影像数据集存在种族不平衡，导致预测模型对代表性不足人群泛化能力差。
method: 使用ABCD数据集，比较平衡加权、TrAdaBoost等监督领域自适应方法，通过80种MRI测量训练从白人到非裔美国人的认知预测模型。
result: 所有方法均减少非裔美国人的预测误差，结构MRI受益最大；平衡加权性能最优，且仅需10个样本即可有效适应。
conclusion: 简单低成本的监督领域自适应策略可有效缩小跨种族性能差距，提升神经影像预测模型的公平性和泛化性。
---

## 摘要
机器学习模型越来越多地被用于从神经影像数据中预测认知和临床结果，然而在公平性和泛化性方面仍存在挑战。大规模数据集常常存在种族和民族不平衡，导致系统性的性能差异，模型通常对训练数据中占多数的群体取得更高的准确率。在本研究中，我们评估了有监督领域自适应方法——包括平衡加权、两阶段 TrAdaBoost、利用 SrcOnly 预测进行特征增强以及线性插值——能否缓解这些偏差。利用 ABCD 数据集，我们检验了基于 80 项 MRI 测量指标、在美国白人参与者上训练的模型能否更有效地泛化到非裔美国参与者。所有领域自适应方法均降低了非裔美国参与者的预测误差，特别是在基线差异较大的 MRI 模态（例如结构 MRI）上效果显著，而在初始差距较小的模态（例如功能连接）上改善有限。在众多方法中，平衡加权表现最佳，且即使仅使用 10 名非裔美国参与者来适配原本仅在美国白人参与者上训练的模型，该方法仍保持稳定且有益。这些发现表明，简单、低成本的策略可以有效缩小跨种族性能差距，改善预测性神经影像的公平性，为未来的神经影像预测生物标志物提供了一条切实可行的前进路径。

重要声明：大规模神经影像数据集日益使机器学习模型能够预测认知和临床结果；然而，这些数据集常常存在民族/种族不平衡。因此，预测模型往往难以泛化到代表性不足的人群。我们证明，在 80 种 MRI 表型上，一系列统称为有监督领域自适应的机器学习方法能够显著减小基于神经影像的认知预测中的跨种族差异，即使只有少量来自代表性不足群体的数据可用。在评估的方法中，平衡加权实现了最佳性能，同时保持较低的计算成本。总之，这些发现为在现实的民族/种族不平衡条件下改善基于神经影像的机器学习公平性和泛化性提供了一个实用且可扩展的框架。

## Abstract
Machine-learning models are increasingly used to predict cognitive and clinical outcomes from neuroimaging data, yet challenges in fairness and generalizability remain. Large-scale datasets are often racially and ethnically imbalanced, leading to systematic performance disparities, with models typically achieving higher accuracy for majority populations represented in the training data. In this study, we evaluated whether supervised domain adaptation methods--including balanced weighting, two-stage TrAdaBoost, feature augmentation with SrcOnly prediction, and linear interpolation--can mitigate these biases. Using the ABCD dataset, we assessed whether models trained on 80 MRI measures from White American participants could generalize more effectively to African American participants. All domain adaptation methods reduced prediction error for African American participants, particularly for MRI modalities with large baseline disparities (e.g., structural MRI), while offering limited improvements where initial gaps were smaller (e.g., functional connectivity). Among the approaches, balanced weighting performed best and remained stable and beneficial even when only 10 African American participants were used to adapt the original model trained exclusively on White American participants. These findings suggest that simple, low-cost strategies can effectively reduce cross-ethnic performance gaps and improve equity in predictive neuroimaging, offering a practical path forward for future neuroimaging predictive biomarkers.

Significant StatementLarge-scale neuroimaging datasets increasingly enable machine-learning models to predict cognitive and clinical outcomes; however, these datasets are often ethnically/racially imbalanced. As a result, predictive models tend to generalize poorly to underrepresented populations. We demonstrate that, across 80 MRI phenotypes, a class of machine-learning approaches collectively known as supervised domain adaptation can substantially reduce cross-ethnicity disparities in neuroimaging-based cognitive prediction, even when only limited data from underrepresented groups are available. Among the methods evaluated, balanced weighting achieved the best performance while maintaining low computational cost. Together, these findings provide a practical and scalable framework for improving fairness and generalizability in neuroimaging-based machine learning under realistic conditions of ethnic/racial imbalance.