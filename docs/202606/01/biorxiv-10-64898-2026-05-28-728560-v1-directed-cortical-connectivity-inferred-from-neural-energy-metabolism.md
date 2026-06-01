---
title: Directed cortical connectivity inferred from neural energy metabolism
title_zh: 基于神经能量代谢推断的定向皮层连接
authors: "Belenya, R., Epp, S., Bose, A., Hechler, A., Fraticelli, L., Ashrafi, M., Ranft, A., Yakushev, I., Kurcyus, K., Castrillon, G., Riedl, V."
date: 2026-05-29
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.28.728560v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 从fMRI和PET能量代谢推断有向皮层连接
tldr: 通过整合静息态fMRI和FDG-PET数据，扩展了代谢连接映射框架，利用突触后能量消耗更高原理推断皮层定向连接。新全皮层实现从能量比直接计算定向性，可应用于多模态或仅fMRI数据。结果再现了视觉与感觉运动系统的分级信号，揭示感觉-认知梯度上的方向不对称，且与线粒体密度及细胞构筑相关。该模型将功能连接分解为代谢约束的定向与非定向成分，为推断有效连接提供可解释的生物学框架。
source: biorxiv
selection_source: fresh_fetch
motivation: 功能连接无法揭示神经信号方向，需从神经能量代谢推断定向皮层连接以理解皮层层次及能量约束。
method: 扩展代谢连接映射（MCM），结合fMRI和PET葡萄糖代谢数据，基于突触后耗能更高原理，从区域间能量比直接估计定向连接。
result: 模型再现视皮层次信号，发现感觉-认知梯度的新方向不对称性，且MCM指标与线粒体密度、细胞构筑等生物学标记相关。
conclusion: 该框架将功能连接分解为代谢约束的定向与非定向组分，桥接统计连接与神经能量机制，是可扩展且生物可解释的有效连接推断方法。
---

## 摘要
静息态功能磁共振成像（fMRI）的功能连接（FC）捕捉了脑区之间的时间相关性，但无法揭示神经信号传递的方向。确定有效连接，即一个神经系统对另一个神经系统的影响，对于理解皮层层次结构及其能量约束至关重要。我们扩展了代谢连接映射（MCM；Riedl等人，2016），这是一个基于生物学原理的框架，通过将功能连接与通过[18F]氟脱氧葡萄糖正电子发射断层扫描（[18F]FDG PET）测量的葡萄糖代谢相结合来推断方向性。MCM建立在突触后神经元比突触前神经元消耗更多能量的原理之上（Attwell和Laughlin，2001；Attwell和Gibb，2005），将较高的局部代谢与传入输入联系起来。在此，我们提出了一种新的全脑皮层实现方法，该方法直接从区域间能量比估计定向连接，从而能够使用平均脑葡萄糖代谢率（CMRGlc）图应用于多模态和仅fMRI数据集。该模型重现了视觉和感觉运动系统内的层次信号传递，并识别出沿感觉-认知梯度的新型方向不对称性。MCM衍生的指标与独立的生物学标记物相关，包括线粒体密度（Mosharov等人，2025）和以细胞层特征为索引的皮层细胞构筑（Amunts和Zilles，2015；Wagstyl等人，2020）。通过将功能连接分解为受代谢约束的定向和非定向成分，该框架弥合了统计连接与神经能量机制之间的鸿沟。我们的结果将MCM定位为一种可扩展且具有生物学可解释性的模型，用于从人类神经影像数据推断定向脑连接。

## Abstract
Functional connectivity (FC) from resting-state fMRI captures temporal correlations between brain regions but cannot reveal the direction of neural signalling. Determining effective connectivity, the influence of one neural system over another, is essential for understanding cortical hierarchy and its energetic constraints. We extend Metabolic Connectivity Mapping (MCM; Riedl et al., 2016), a biologically grounded framework that infers directionality by integrating FC with glucose metabolism measured via [18F]fluorodeoxyglucose positron emission tomography ([18F]FDG PET). MCM builds on the principle that postsynaptic neurons consume more energy than presynaptic ones (Attwell and Laughlin, 2001; Attwell and Gibb, 2005), linking higher local metabolism to afferent input. Here, we present a new whole-cortex implementation that estimates directed connectivity directly from inter-regional energy ratios, enabling application to multimodal and fMRI-only datasets using an average cerebral metabolic rate of glucose (CMRGlc) map. The model reproduces hierarchical signalling within visual and sensorimotor systems and identifies novel directional asymmetries along sensory-cognitive gradients. MCM-derived metrics correlate with independent biological markers, including mitochondrial density (Mosharov et al., 2025) and cortical cytoarchitecture indexed by cell layer profiles (Amunts and Zilles, 2015; Wagstyl et al., 2020). By decomposing functional connectivity into metabolically constrained directed and undirected components, this framework bridges the gap between statistical connectivity and neuroenergetic mechanisms. Our results position MCM as a scalable and biologically interpretable model for inferring directed brain connectivity from human neuroimaging data.