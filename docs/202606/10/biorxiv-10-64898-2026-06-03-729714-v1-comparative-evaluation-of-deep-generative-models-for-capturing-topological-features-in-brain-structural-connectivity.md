---
title: Comparative Evaluation of Deep Generative Models for Capturing Topological Features in Brain Structural Connectivity
title_zh: 深度生成模型在捕捉大脑结构连接拓扑特征中的比较评估
authors: "Kumada, C., Hiroyasu, T., Hiwa, S."
date: 2026-06-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.03.729714v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 深度生成模型用于脑结构连接以改善泛化
tldr: 本研究针对脑结构连接(SC)数据有限的问题，比较了VAE、WGAN-GP和DDPM三种深度生成模型在捕捉拓扑特征方面的表现。通过合成和真实数据评估，发现WGAN-GP最稳定均衡，VAE和DDPM各有侧重但对数据敏感。所有模型均难以复现全局约束，表明标准生成模型存在局限，需在训练中融入结构先验。
source: biorxiv
selection_source: fresh_fetch
motivation: SC数据稀缺制约模型泛化，需明确不同生成模型学习复杂拓扑特征的能力差异。
method: 使用合成与真实SC数据，通过图论指标和视觉检查系统评估三种生成模型的生成质量。
result: WGAN-GP性能最均衡稳定，VAE和DDPM在特定指标上表现好但受数据特性影响，所有模型均难完全重现平面性等全局约束。
conclusion: 建议根据应用场景选择模型，但标准生成模型不足以捕获SC复杂拓扑，未来应直接将结构属性融入生成过程。
---

## 摘要
结构连接（SC）数据对脑网络分析至关重要，但基于SC的机器学习常因数据可用性有限而面临挑战，阻碍了模型的泛化能力和鲁棒性。尽管利用深度生成模型进行数据增强已引起越来越多的关注，但不同模型如何捕捉SC数据复杂的拓扑特征仍不清楚。为阐明深度生成模型在SC生成中的学习特性，本研究比较了三种代表性模型：变分自编码器（VAE）、带梯度惩罚的Wasserstein GAN（WGAN-GP）和去噪扩散概率模型（DDPM）。我们使用已知特征的合成数据集和真实SC数据，对这些模型进行了系统评估。通过图论度量比较和生成邻接矩阵的视觉检查来评估生成质量。WGAN-GP在不同数据集和度量指标上表现出相对稳定的性能，未出现严重的性能下降。相比之下，VAE和DDPM在特定方面表现良好，但对数据特征更为敏感。这些发现表明，WGAN-GP可作为未来SC数据增强研究中最均衡的基线模型，而VAE和DDPM可根据目标应用和感兴趣的结构特性发挥作用。此外，由于所有模型都难以完全复现严格的全局约束（如平面性），我们的结果表明，标准生成模型可能不足以捕捉SC数据复杂的拓扑特征。这凸显了将所需结构特性纳入训练或生成过程的重要性。

## Abstract
Structural connectivity (SC) data are crucial for brain network analysis, but SC-based machine learning often suffers from limited data availability, hindering model generalization and robustness. Although data augmentation using deep generative models has attracted increasing attention, it remains unclear how different models capture the complex topological features of SC data. To clarify the learning characteristics of deep generative models for SC generation, this study compares three representative models: variational autoencoder (VAE), Wasserstein GAN with gradient penalty (WGAN-GP), and denoising diffusion probabilistic models (DDPM). We systematically evaluated these models using both synthetic datasets with known characteristics and real-world SC data. Generation quality was assessed using graph-theoretic metric comparisons and visual inspection of the generated adjacency matrices. WGAN-GP showed relatively stable performance across datasets and metrics, without severe performance degradation across evaluation settings. In contrast, VAE and DDPM performed well in specific aspects but were more sensitive to data characteristics. These findings suggest that WGAN-GP may serve as the most balanced baseline for future SC data augmentation studies, whereas VAE and DDPM may be useful depending on the target application and structural properties of interest. Furthermore, because all models struggled to fully reproduce strict global constraints such as planarity, our results suggest that standard generative models may be insufficient to capture the complex topological features of SC data. This highlights the importance of incorporating the desired structural properties into the training or generation process.