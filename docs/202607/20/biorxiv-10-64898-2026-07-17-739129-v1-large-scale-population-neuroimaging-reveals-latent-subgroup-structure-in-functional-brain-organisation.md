---
title: Large-scale population neuroimaging reveals latent subgroup structure in functional brain organisation
title_zh: 大规模人群神经影像揭示功能性脑组织中的潜在亚群结构
authors: "Farahibozorg, S. R., Smith, S. M., Elliott, L. T., Woolrich, M. W."
date: 2026-07-19
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.17.739129v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 人口水平fMRI亚组发现作为神经先验以提升泛化
tldr: 大规模功能磁共振成像数据集揭示了人脑功能的个体差异，但现有方法难以发现结构化亚组异质性。本研究利用UK Biobank近两万人的静息态数据，通过概率功能模式和个体化功能指纹，结合高斯混合模型，无监督地识别出数百个可重复的潜在亚组，并发现这些亚组在认知、生活方式和健康等表型上存在约5700个显著差异，表明功能神经影像蕴含着丰富的潜在亚组结构，为分层神经科学提供了基础。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-17-739129-v1/fig-001.webp\", \"caption\": \"Figure 5 Genetic relevance of fingerprints and subgroups: a) A Manhattan plot of a GWAS conducted on an example fingerprint feature (FLICA component 007). The same analysis was conducted across all FLICA and subjectICA fingerprint features, and significant clusters of SNP-hits were identified (after correction for multiple comparisons). b) FUMA software was used to link the SNP-hits to Genes and Genes to functions and disease. Based on the GWAS catalogue that is used as reference in FUMA software, we found significant enrichment of the identified genes to gene sets that have been previously linked to brain-related disorders such as Autism Spectrum Disorder and Schizophrenia, brain anatomy and lifestyle related to diet and body shape. c) Spatial Maps of Allele Dosage (MAD) were calculated as voxel-wise correlations between subjectspecific RSNs and subject-specific allele dosage for each SNP-hit. Results are shown for 11 RSNs of interest for an example SNP hit. d) RSN-specific MADs were spatially correlated with their corresponding Maps of Subgroup Differences (MSDs, Figure 4a), results per SNP-hit and RSN are shown. e) MADs were averaged across SNP-hits per RSN and spatially correlated with the corresponding MSDs. Diagonal values were found to be 0.103±0.026 for sensory-motor RSNs and 0.069±0.03 for cognitive RSNs.\", \"page\": 35, \"index\": 1, \"width\": 968, \"height\": 833}]"
motivation: 弥合群体平均与个体特异性建模的差距，揭示个体间结构化亚组异质性。
method: 使用随机概率功能模式从静息态fMRI中估计个体化网络拓扑，构建高维功能指纹，并对每个特征独立应用高斯混合模型进行亚组发现。
result: 在1000个功能维度上识别出数百个可重复的亚组，并发现约5700个与非成像表型的显著差异，且亚组差异与感觉运动和高阶认知系统相关，并与脑基因变异模式对应。
conclusion: 大规模功能神经影像包含丰富的潜在亚组结构，与行为和生物变异相关联，为构建分层人脑功能模型提供了可解释且可扩展的框架。
---

## 摘要
大规模功能磁共振成像数据集为理解人类大脑功能的个体间差异及其与行为和健康的关联提供了资源。然而，大多数现有方法未能弥合群体平均与个体特异性建模之间的差距，限制了对个体间结构化亚群异质性的识别。本研究开发了一个可扩展的框架，用于在来自19,993名英国生物银行参与者的群体规模静息态功能磁共振数据中进行无监督亚群发现。利用随机概率功能模式，我们估计了群体信息化的个体化静息态网络的空间拓扑，并为每位参与者推导出高维功能指纹。随后，我们通过对每个指纹特征独立应用高斯混合模型来识别潜在亚群，在1,000个功能维度上产生了数百个可重复的亚群定义。我们报告了亚群之间在认知、生活方式、身心健康等一系列非影像表型中的约5,700个显著差异。大脑网络的空间组织揭示了感觉运动和高阶认知系统中明显的亚群差异，同时与大脑区域基因变异的模式相对应。总体而言，这些结果表明，大规模功能神经影像包含了丰富且与行为和生物学变异相关的潜在亚群结构。我们的框架为人类大脑功能分层模型和群体神经科学提供了一种可解释且可扩展的基础。

## Abstract
Large-scale functional MRI datasets provide resources to understand inter-individual variation in human brain function and relate this variation to behaviour and health. However, most existing approaches fail to bridge the gap between population-average and individual-specific modelling, limiting the identification of structured subgroup heterogeneity across individuals. Here we develop a scalable framework for unsupervised subgroup discovery in population-scale resting-state fMRI data from 19,993 UK Biobank participants. Using stochastic Probabilistic Functional Modes, we estimate population-informed individualised spatial topographies of resting-state networks and derive high-dimensional functional fingerprints for each participant. We then identify latent subgroups by applying Gaussian mixture modelling independently to each fingerprint feature, yielding hundreds of reproducible subgroup definitions across 1,000 functional dimensions. We report approximately 5,700 significant differences between subgroups in a range of non-imaging phenotypes related to cognition, lifestyle, physical and mental health. Spatial organisation of the brain networks reveals distinct subgroup differences in sensory-motor and higher-order cognitive systems, in addition to correspondence with regional patterns of genetic variability across the brain. Together, these results demonstrate that large-scale functional neuroimaging contains rich latent subgroup structure linked to behavioural and biological variation. Our framework provides an interpretable and scalable basis for stratified models of human brain function and population neuroscience.