---
title: Spatial connectivity for local cortical homogeneity
title_zh: 皮层局部同质性的空间连接性
authors: "Wang, P., Zuo, X.-N."
date: 2026-06-08
pdf: "https://www.biorxiv.org/content/10.1101/2025.09.29.679376v2.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 跨被试fMRI皮层同质性度量
tldr: 本研究提出SoHo指标，量化皮层局部空间连接同质性，评估顶点与其邻居在全脑功能连接空间分布上的相似性。基于人类和狨猴静息态fMRI验证，发现SoHo与分区边界高度对应，揭示从初级感觉运动区到高阶联合区的功能多样性梯度，且该梯度在灵长类进化中保守。SoHo串联了离散分区和连续模型，为理解灵长类脑组织与进化提供新工具。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有功能连接指标难以同时捕捉时空拓扑特性，需新方法量化皮层局部功能一致性。
method: 提出SoHo，计算皮层每个顶点与其邻域在全脑功能连接空间模式上的连续性，并在人类和狨猴静息态fMRI数据中验证。
result: SoHo值在人类皮层与多模态分区边界一致，在联合区低（功能多样）、感觉运动区高（功能均匀），跨物种保持主要梯度，但额顶与运动区存在物种差异。
conclusion: SoHo作为连续度量，连接分区与连续脑模型，揭示皮层功能组织进化保守与特化特征。
---

## 摘要
理解灵长类皮层的功能组织需要能够同时捕捉功能连接的时间与拓扑维度的度量指标。本文提出皮层局部同质性的空间连接性（SoHo），一种逐顶点、连续的度量，用于量化一个皮层顶点及其近邻在多大程度上共享相似的全脑功能连接空间轮廓。我们使用来自人类连接组项目（HCP）和NIH狨猴脑图谱项目的大规模清醒静息态fMRI数据集验证了SoHo。在人类中，SoHo值与HCP多模态图谱的分区边界呈现出显著对应，低值区域始终与区域边界对齐。高阶联合皮层区域表现出较低的SoHo值（功能多样性），而初级感觉运动区域则表现出较高值（功能均一性）。跨物种SoHo映射揭示这种从初级到联合的梯度在灵长类动物中具有进化保守性，同时伴随着额顶叶和运动区域的特异性适应。通过捕捉全脑连接空间指纹的局部一致性，SoHo弥合了离散分区方案与连续脑功能模型之间的鸿沟，为灵长类脑组织与进化提供了新的见解。

## Abstract
Understanding the functional organization of the primate cortex requires metrics that capture both the temporal and topological dimensions of functional connectivity. Here we propose the spatial connectivity for local homogeneity in cortex (SoHo), a vertex-wise, continuous metric that quantifies the degree to which a cortical vertex and its immediate neighbors share similar spatial profiles of whole-brain functional connectivity. We validated SoHo using large-scale wakeful resting-state fMRI datasets from the Human Connectome Project (HCP) and the NIH Marmoset Brain Mapping Project. In humans, SoHo values showed a striking correspondence with the parcellation boundaries of the HCP multimodal atlas, with low-value regions consistently aligning with areal boundaries. Higher-order association areas exhibited lower SoHo values (functional diversity), while primary sensorimotor areas demonstrated higher values (functional uniformity). Cross-species SoHo mapping revealed that this primary-to-association gradient is evolutionarily conserved across primates, alongside species-specific adaptations in frontoparietal and motor regions. By capturing the local concordance of spatial fingerprints of whole-brain connectivity, SoHo bridges discrete parcellation schemes and continuous models of brain function, offering new insights into primate brain organization and evolution.