---
title: Modeling Complex Effects and Individual Variability in Multi-Paradigm fMRI with Nonlinear Mixed Models
title_zh: 利用非线性混合模型对多范式功能磁共振成像中的复杂效应和个体差异进行建模
authors: "Li, X., Zhang, G., Qu, G., Orlichenko, A., Ding, Z., Wilson, T. W., Stephen, J. M., Calhoun, V. D., Wang, Y.-P."
date: 2026-05-19
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.16.725673v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 跨被试fMRI群体层面非线性混合模型
tldr: 功能磁共振成像数据复杂且个体差异显著，传统线性混合模型难以捕捉非线性关系。本文提出非线性混合模型，结合神经网络灵活建模群体固定效应，同时利用随机效应刻画个体差异。该方法识别跨范式稳健功能连接，并借助SHAP解释年龄、性别、范式的影响，进一步将个体随机效应作为神经指纹预测认知分数。在PNC数据集上，模型拟合优于线性模型，为大规模功能连接分析提供了统计严谨且可解释的新途径。
source: biorxiv
selection_source: fresh_fetch
motivation: 传统线性混合模型无法有效捕捉fMRI数据中的非线性关系，限制了对复杂脑功能效应的建模。
method: 提出非线性混合模型，集成神经网络与随机效应结构，并通过SHAP分析增强可解释性。
result: 在PNC情绪、n-back和静息态数据上，NMM预测功能连接的均方误差显著低于线性混合模型。
conclusion: NMM成功分离群体效应与个体差异，验证了随机效应的生物学意义，为多范式fMRI分析提供了强大工具。
---

## 摘要
功能磁共振成像（fMRI）数据本身具有复杂性，表现为高维度、复杂的区域间依赖关系以及在不同实验范式下显著的个体差异。传统的线性混合模型（LMM）提供了一个原则性框架，在估计由被试层面随机效应引起的方差成分的同时，对群体层面的固定效应进行建模；然而，它们往往无法充分捕捉神经影像数据中固有的非线性关系。为克服这些局限性，我们引入了非线性混合模型（NMM）方法，这是对LMM框架的一种创新扩展，它整合了神经网络以灵活建模复杂的固定效应关系，同时保留随机效应结构以解释个体差异。NMM从以下方面推进了fMRI分析：（1）识别在多种范式下一致观察到的稳健功能连接（FC）模式；（2）利用SHapley加性解释（SHAP）分析为非线性固定效应提供事后可解释性，量化年龄、性别和范式如何影响预测的FC，以及这些效应如何在大尺度脑网络中分布；（3）利用特定于被试的随机效应作为神经指纹，不仅显示出在注意系统和默认模式网络中的系统性变异，还能预测标准化认知评分，证明了其生物学相关性。将NMM应用于费城神经发育队列（PNC）的情绪、n-back和静息态范式，相较于经典LMM，NMM取得了更优的模型拟合效果，表现为预测FC时的均方误差（MSE）更低。该框架为利用少量协变量对大规模FC进行建模提供了一种统计严谨且实际可解释的方法，同时将群体层面的效应与功能性大脑组织中稳定的个体差异明确分离开来。

## Abstract
Functional magnetic resonance imaging (fMRI) data are inherently complex, characterized by high dimensionality, intricate inter-regional dependencies, and substantial individual variability across experimental paradigms. Traditional linear mixed models (LMMs) provide a principled framework that models population-level fixed effects while estimating variance components arising from subject-level random effects; however, they often fail to adequately capture nonlinear relationships inherent in neuroimaging data. To address these limitations, we introduce the nonlinear mixed model (NMM) approach, an innovative extension of the LMM framework that integrates neural networks to flexibly model complex fixed-effect relationships while preserving the random-effects structure to account for individual differences. NMM advances fMRI analysis by: (1) identifying robust functional connectivity (FC) patterns consistently observed across multiple paradigms; (2) leveraging SHapley Additive exPlanations (SHAP) analysis to provide post-hoc interpretability of the nonlinear fixed effects, quantifying how age, sex, and paradigm contribute to predicted FC and how these effects are distributed across large-scale brain networks; and (3) using subject-specific random effects as neural fingerprints that not only show systematic variability across attention and default mode systems but also predict standardized cognitive scores, demonstrating biological relevance. Applied to the Philadelphia Neurodevelopmental Cohort (PNC) across emotion, n-back, and resting-state paradigms, NMM achieved superior model fit relative to classical LMMs, as evidenced by lower mean squared error (MSE) in predicting FC. This framework offers a statistically rigorous and practically explainable approach for modeling large-scale FC from modest covariates while explicitly separating population-level effects from stable individual variability in functional brain organization.