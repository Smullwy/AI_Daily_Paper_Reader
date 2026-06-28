---
title: aNy-way ICA and its application to estimate cortico-thalamo-cerebellar functional links in schizophrenia
title_zh: aNy-way ICA 及其在估计精神分裂症皮层-丘脑-小脑功能连接中的应用
authors: "Duan, K., Silva, R. F., Rahaman, M. A., Fu, Z., Liu, J., Kochunov, P., van Erp, T. G. M., Shultz, S., Calhoun, V. D."
date: 2026-06-25
pdf: "https://www.biorxiv.org/content/10.1101/2025.06.02.657541v2.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 多模态fMRI数据融合的任意方式ICA，适用于跨被试分析
tldr: 多模态数据融合因尺度与模型阶数差异面临挑战，本文提出aNy-way ICA，结合高斯独立向量分析与独立成分分析，灵活处理不同模态阶数。仿真显示其噪声鲁棒性优于现有方法，应用于精神分裂症fMRI数据，识别出皮质-丘脑-小脑回路，在独立数据集复现并区分患者与对照，且与认知缺陷相关，揭示“认知共济失调”潜在机制。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有融合方法受限模态阶数和正交约束，难以充分利用多域互补信息。
method: 提出aNy-way ICA，通过高斯IVA优化组件载荷相关性，同时以单独ICA确保独立性，支持任意模态数及不同阶数。
result: 仿真表明方法准确恢复源和载荷，尤其在噪声下优势明显；精神分裂症数据发现失常回路，可跨数据集复现并关联认知缺损。
conclusion: 回路异常可能解释精神分裂症认知共济失调，aNy-way ICA为多模态融合提供有效新途径。
---

## 摘要
国际和国内生物样本库收集的多模态数据具有不同的尺度和模型阶数，为疾病机制提供了独特且互补的见解。我们提出了一种新颖、灵活且高效的数据融合方法，即 aNy-way 独立成分分析（aNy-way ICA）。aNy-way ICA 通过高斯独立向量分析（IVA-G）优化关联成分的整个载荷相关结构，同时通过单独的 ICA 优化独立性，从而融合 N 路多模态或多领域数据。这使得不同模态/领域可以有不同的模型阶数，并能在任意数量的模态或领域中检测多个关联源，而无需对源施加正交约束。仿真结果表明，aNy-way ICA 能识别出预设的源和载荷以及真实的协方差模式，与其他方法相比具有更高的准确性，尤其是在噪声条件下。将 aNy-way ICA 应用于融合精神分裂症的 4D 多领域 fMRI 数据，我们识别出一个皮层-丘脑-小脑环路，突出了高阶丘脑核团、视觉皮层、默认模式网络和小脑后叶之间的功能连接。这些功能连接在两个独立数据集中得到了重复验证。高阶丘脑核团、视觉皮层和默认模式网络之间的连接能够区分精神分裂症患者与健康对照，并且这种异常连接在发现和重复数据集中均与多种认知缺陷相关，表明所识别的皮层-丘脑-小脑环路可能是精神分裂症“认知共济失调”的基础。

## Abstract
Multimodal data collected by international and national biobanking efforts have distinct scales and model orders and provide unique and complementary insights into disease mechanisms. We propose a novel, flexible and efficient data fusion approach, aNy-way independent component analysis (aNy-way ICA). aNy-way ICA fuses N-way multimodal or multidomain data by optimizing the entire loading correlation structure of linked components via Gaussian independent vector analysis (IVA-G) and simultaneously optimizing independence via separate ICAs. This allows for distinct model orders for different modalities/domains and multiple linked sources detection across any number of modalities or domains without requiring orthogonality constraints on sources. Simulation results demonstrate that aNy-way ICA identifies the designed sources and loadings, as well as the true covariance patterns, with improved accuracy compared to other approaches, especially under noisy conditions. Applying aNy-way ICA to fuse 4D multi-domain fMRI data in schizophrenia, we identified a cortico-thalamo-cerebellar circuit, highlighting the functional linkages among higher order thalamic nuclei, the visual cortex, default mode network, and the posterior lobe of cerebellum. Their function links were replicated in two independent datasets. The connection among higher order thalamic nuclei, the visual cortex, and default mode network discriminates schizophrenia from controls and this aberrant connection is related to multiple cognitive deficits in both discovery and replication datasets, indicating the identified cortico-thalamo-cerebellar circuit may underlie "cognitive dysmetria" in schizophrenia.