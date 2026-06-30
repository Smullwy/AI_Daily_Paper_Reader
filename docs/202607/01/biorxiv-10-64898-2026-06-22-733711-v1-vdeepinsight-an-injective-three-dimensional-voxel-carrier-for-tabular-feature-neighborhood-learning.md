---
title: "vDeepInsight: an injective three-dimensional voxel carrier for tabular-feature neighborhood learning"
title_zh: vDeepInsight：一种用于表格特征邻域学习的单射三维体素载体
authors: "Jia, S., Lysenko, A., Boroevich, K. A., Sharma, A., Tsunoda, T."
date: 2026-06-26
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.22.733711v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 可应用于神经影像的三维体素载体
tldr: vDeepInsight针对表格数据中特征邻域信息易被二维载体扭曲的问题，提出一种单射三维体素载体方法。通过将特征嵌入并一对一映射到稀疏3D网格，利用子流形稀疏3D卷积网络处理，更忠实地保留特征邻域关系。在基因表达分析中，该方法降低邻域失真，在依赖多基因协同的程序型任务上显著优于二维载体和表格基线，且可直接实现基因级归因。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有二维载体无法充分保留表格特征间的邻域关系，限制了依赖特征协作的任务性能。
method: 采用t-SNE/UMAP嵌入特征，线性分配将特征一对一映射到稀疏3D体素网格，由子流形稀疏3D卷积网络处理。
result: 3D载体显著降低邻域失真，在合成和组学任务中，尤其在多基因协同的程序型任务上，性能优于2D载体和表格基线，且支持直接基因归因。
conclusion: 增加载体维度能更真实地保留特征邻域，从而提升依赖局部特征程序的任务预测效果，并增强模型可解释性。
---

## 摘要
DeepInsight风格的方法通过将每个特征放置在图像载体的固定位置上，使表格特征关系能够被卷积网络获取。一个开放的设计问题是，当特征邻域本身携带部分信号时，应如何构建载体几何结构。我们引入了vDeepInsight，一种单射的三维体素载体，它比匹配的二维载体更忠实地保留特征邻域，同时保持每个特征到单个体素的一对一映射。基因通过t-SNE或UMAP进行嵌入，通过线性总分配逐一对齐分配到稀疏体素网格，并由子流形稀疏3D卷积网络处理。我们通过四项关联分析在基因表达上评估该载体。首先，表征质量指标显示，在任何模型训练之前，3D布局相对于匹配的2D布局减少了基因邻域失真。第二，受控合成任务表明，稀疏3D卷积可以利用这种保留的局部性，但仅当监督信号被构建为依赖于共定位的基因且感受野跨越相邻体素时。第三，在真实组学任务上，3D载体与调优的表格基线相当或更优，并且始终优于匹配的2D载体；在标记型分类任务上优势较小，因为单个基因已携带了大部分标签信息（组织、谱系和癌症类型分类），而在程序型任务上优势更大，这些任务的目标依赖于协调的、通路级的多基因活性（药物反应回归、TCGA免疫基因组背景回归和作用机制分类）。第四，由于分配是单射的，体素归因图可直接反向映射到基因，从而能够在无需体素到基因解卷积的情况下进行基因级归因和通路级功能解释。总体而言，增加的载体维度提高了特征邻域表征的保真度，并将这种改进转化为预测增益，当信号分布在局部基因程序上而非由单个标记基因主导时，这种增益最大。

## Abstract
DeepInsight-style methods make tabular feature relationships accessible to convolutional networks by placing each feature at a fixed position on an image carrier. An open design question is how the carrier geometry should be constructed when feature neighborhoods themselves carry part of the signal. We introduce vDeepInsight, an injective three-dimensional (3D) voxel carrier that preserves feature neighborhoods more faithfully than matched two-dimensional (2D) carriers while keeping a one-to-one mapping from each feature to a single voxel. Genes are embedded with t-SNE or UMAP, assigned one-to-one to a sparse voxel grid by linear-sum assignment, and processed by a submanifold sparse 3D convolutional network. We evaluate the carrier on gene expression through four linked analyses. First, representation-quality metrics show that 3D layouts reduce gene-neighborhood distortion relative to matched 2D layouts before any model is trained. Second, controlled synthetic tasks show that a sparse 3D convolution can exploit this preserved locality, but only when the supervised signal is constructed to depend on co-located genes and the receptive field spans adjacent voxels. Third, on real omics tasks the 3D carrier matches or exceeds tuned tabular baselines and consistently exceeds matched 2D carriers; the margin is small on marker-type classification, where individual genes already carry much of the label (tissue, lineage and cancer-type classification), and larger on program-type tasks, where the target depends on coordinated, pathway-level multi-gene activity (drug-response regression, TCGA immunogenomic-context regression and mechanism-of-action classification). Fourth, because the assignment is injective, voxel attribution maps directly back to genes, enabling gene-level attribution and pathway-level functional interpretation without voxel-to-gene deconvolution. Overall, the added carrier dimension improves the fidelity of feature-neighborhood representation and translates this improvement into prediction gains that are largest when the signal is distributed across local gene programs rather than dominated by individual marker genes.