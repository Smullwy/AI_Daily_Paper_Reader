---
title: ICLR26 A Brain Graph Foundation Model_ Pre-Training and Prompt Learning of Brain Networks
title_zh: ICLR26 脑图基础模型：脑网络的预训练与提示学习
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 在来自25000名受试者和多种脑图谱的fMRI数据上预训练，跨异构分区学习可迁移的脑表征
tldr: 针对现有脑基础模型多基于时序信号或连接组特征的局限，本文提出脑图基础模型BrainGFM，通过图对比学习和图掩码自编码器在大规模fMRI数据上预训练，混合多种脑图谱与分区以增强泛化，并集成图提示和语言提示，利用元学习优化，实现灵活的少样本和零样本下游任务迁移，在27个数据集、25种疾病上验证了有效性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-001.webp\", \"caption\": \"\", \"page\": 4, \"index\": 1, \"width\": 500, \"height\": 500}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-002.webp\", \"caption\": \"\", \"page\": 4, \"index\": 2, \"width\": 500, \"height\": 500}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-003.webp\", \"caption\": \"\", \"page\": 4, \"index\": 3, \"width\": 489, \"height\": 511}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-004.webp\", \"caption\": \"\", \"page\": 4, \"index\": 4, \"width\": 489, \"height\": 511}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-005.webp\", \"caption\": \"\", \"page\": 4, \"index\": 5, \"width\": 500, \"height\": 500}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-006.webp\", \"caption\": \"\", \"page\": 4, \"index\": 6, \"width\": 561, \"height\": 577}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-007.webp\", \"caption\": \"\", \"page\": 4, \"index\": 7, \"width\": 458, \"height\": 336}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-008.webp\", \"caption\": \"\", \"page\": 4, \"index\": 8, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-009.webp\", \"caption\": \"\", \"page\": 4, \"index\": 9, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-010.webp\", \"caption\": \"\", \"page\": 4, \"index\": 10, \"width\": 489, \"height\": 511}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-011.webp\", \"caption\": \"\", \"page\": 4, \"index\": 11, \"width\": 500, \"height\": 500}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-012.webp\", \"caption\": \"\", \"page\": 4, \"index\": 12, \"width\": 489, \"height\": 511}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-013.webp\", \"caption\": \"\", \"page\": 4, \"index\": 13, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-014.webp\", \"caption\": \"\", \"page\": 7, \"index\": 14, \"width\": 3370, \"height\": 2872}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-015.webp\", \"caption\": \"\", \"page\": 7, \"index\": 15, \"width\": 900, \"height\": 300}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-016.webp\", \"caption\": \"\", \"page\": 8, \"index\": 16, \"width\": 900, \"height\": 850}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-017.webp\", \"caption\": \"\", \"page\": 30, \"index\": 17, \"width\": 1911, \"height\": 1685}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-018.webp\", \"caption\": \"\", \"page\": 30, \"index\": 18, \"width\": 1911, \"height\": 1685}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-019.webp\", \"caption\": \"\", \"page\": 30, \"index\": 19, \"width\": 1911, \"height\": 1685}, {\"url\": \"assets/figures/local-pdf/local-20260606-192327893341-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-020.webp\", \"caption\": \"\", \"page\": 30, \"index\": 20, \"width\": 1911, \"height\": 1685}]"
motivation: 现有脑基础模型缺乏基于图结构的预训练范式，难以有效利用fMRI衍生的脑网络异质性。
method: BrainGFM采用图对比学习与掩码自编码器预训练，融合图提示与语言提示，并通过元学习优化图提示。
result: 模型在涵盖25种疾病、8种图谱分区的27个数据集上表现出强泛化能力，尤其支持少样本和零样本学习。
conclusion: BrainGFM是一个可扩展的脑图基础模型框架，能灵活适应多种脑图谱和神经精神疾病任务，代码已开源。
---

## 摘要
随着大型语言模型（LLMs）继续革新人工智能研究，构建大规模脑基础模型以推进神经科学的兴趣日益增长。虽然现有的大多数脑基础模型都是在时间序列信号或连接组特征上预训练的，但我们提出了一种新颖的基于图的预训练范式，用于构建脑图基础模型。在本文中，我们介绍了脑图基础模型，称为BrainGFM，这是一个统一框架，利用图对比学习和图掩码自编码器进行大规模fMRI预训练。BrainGFM在多种不同脑图谱的混合数据上预训练，这些图谱具有不同的分区，显著扩展了预训练语料库，并增强了模型泛化到不同fMRI衍生脑表示的能力。为了支持高效且通用的下游迁移，我们将图提示和语言提示集成到模型设计中，使BrainGFM能够灵活适应广泛的图谱、神经和精神疾病以及任务设置。此外，我们采用元学习来优化图提示，通过语言引导的提示，在少样本和零样本学习条件下促进对未见过的疾病的强泛化能力。BrainGFM建立在27个神经影像数据集上，涵盖25种常见的神经和精神疾病，包括2种脑图谱类型（功能和解剖）在8种广泛使用的分区上，覆盖了超过25,000名受试者、60,000次fMRI扫描，以及跨所有图谱和分区聚合的总共400,000个图样本。代码可在https://github.com/weixinxu666/BrainGFM获取。

## Abstract
As large language models (LLMs) continue to revolutionize AI research, there is a growing interest in building large-scale brain foundation models to advance neuroscience. While most existing brain foundation models are pre-trained on time-series signals or connectome features, we propose a novel graph-based pre- training paradigm for constructing a brain graph foundation model. In this paper, we introduce the Brain Graph Foundation Model, termed BrainGFM, a unified framework that leverages graph contrastive learning and graph masked autoen- coders for large-scale fMRI-based pre-training. BrainGFM is pre-trained on a diverse mixture of brain atlases with varying parcellations, significantly expanding the pre-training corpus and enhancing the model’s ability to generalize across het- erogeneous fMRI-derived brain representations. To support efficient and versatile downstream transfer, we integrate both graph prompts and language prompts into the model design, enabling BrainGFM to flexibly adapt to a wide range of atlases, neurological and psychiatric disorders, and task settings. Furthermore, we employ meta-learning to optimize the graph prompts, facilitating strong generalization to previously unseen disorders under both few-shot and zero-shot learning conditions via language-guided prompting. BrainGFM is established on 27 neuroimaging datasets spanning 25 common neurological and psychiatric disorders, encompass- ing 2 types of brain atlases (functional and anatomical) across 8 widely-used parcellations, and covering over 25,000 subjects, 60,000 fMRI scans, and a total of 400,000 graph samples aggregated across all atlases and parcellations. The code is available at https://github.com/weixinxu666/BrainGFM.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

-   **关联方向**：本文与所关注的方向，如fMRI表征学习、脑解码、表征对齐，高度相关。它提供了一个从大规模异质数据中学习统一脑图表示的范式。
-   **启发与意义**：该方法展示了将多源、多图谱的fMRI数据整合到一个统一的图基础模型中的巨大潜力，为解决神经影像数据异质性挑战提供了新的思路，对脑解码任务有直接的推动作用。
-   **可借鉴点**：可借鉴其“图对比+掩码自编码”的双重预训练策略来增强fMRI表征的鲁棒性；其“图/语言提示+元学习”的框架能有效启发如何设计参数高效的跨任务、跨图谱脑解码模型。
-   **阅读建议**：建议重点关注其方法论部分的图预训练和提示学习设计，以及多图谱混合预训练的消融实验，这些对设计面向脑解码的通用表征模型具有直接的参考价值。

## 1. 论文的核心问题与整体含义

-   **研究动机**：神经科学领域的数据集通常是小样本、单一图谱且任务特定的，导致传统深度学习模型泛化能力弱、迁移性差。
-   **核心问题**：现有脑基础模型主要基于fMRI时间序列或连接组（FC）特征进行预训练，存在以下缺陷：
    -   **数据单一**：忽略了整合多种脑图谱和分区模板可以扩充数据规模并提供互补特征。
    -   **计算效率与效果难以平衡**：时序模型性能好但计算成本极高，连接组模型效率高但忽略了脑区间的拓扑交互。
    -   **泛化性差**：缺乏对少样本（few-shot）和零样本（zero-shot）下游任务的灵活适应能力。
-   **整体含义**：本文提出脑图基础模型（BrainGFM），旨在构建一个统一的、可泛化的图结构脑基础模型，使其能有效整合异构fMRI数据，并灵活泛化到多样的、未见过的图谱和疾病上。

## 2. 论文提出的方法论

-   **核心思想**：首次采用图（Graph）作为fMRI脑功能数据的基础表示，结合图预训练、图/语言提示学习和元学习，构建一个兼具高性能与高泛化能力的脑基础模型。
-   **关键技术细节**：
    -   **数据构建**：将fMRI时间序列通过皮尔逊相关和稀疏化构建成脑图，节点为脑区（ROI），边为功能连接。整合了8种不同分辨率的功能和解剖图谱（如Schaefer、AAL），统一通过零填充和提示机制处理不同节点数的图。引入随机游走结构编码（RWSE）作为位置编码。
    -   **图预训练（Backbone: Graph Transformer）**：
        -   **图对比学习（GCL）**：通过对图进行随机节点/边丢弃生成正负样本对，最大化正样本对表征的相似性，学习全局判别性表征。
        -   **图掩码自编码器（GMAE）**：随机掩码图中的节点和边，通过编码器-解码器架构重建被掩码的部分，学习局部结构和节点特征。模型最终损失为 $$L = L_{rec} + L_{CL}$$，融合了生成式和判别式预训练。
    -   **下游适应（Prompting & Meta-Learning）**：
        -   **图提示（Graph Prompt）**：设计可学习的节点级和边级参数，作为提示插入到冻结的预训练模型中。提示通过元学习（MAML）进行优化，使其能在内循环快速适应不同的（图谱、疾病）任务，实现**少样本学习**。
        -   **语言提示（Language Prompt）**：将图谱和疾病的文本描述通过BioClinicalBERT编码为语义向量，作为额外的提示令牌（Token）注入模型，在无任何梯度更新的情况下引导模型，实现**零样本学习**。

## 3. 实验设计

-   **数据集与场景**：
    -   **预训练集**：从19个公开数据集中构建，包含超过25,000名受试者，覆盖多种神经精神疾病和健康对照。
    -   **下游测试集**：设计了**内部测试**（同源数据）、**半外部测试**（同疾病、不同站点/扫描仪）和**外部测试**（全新数据源和疾病）三种场景，全面评估模型泛化性。
-   **基准（Benchmark）**：在10种疾病分类任务上评估（如ASD, ADHD, MDD, AD等）。
-   **对比方法**：
    -   **非预训练模型**：如Vainilla GCN、BrainGNN、Graph Transformer等。
    -   **预训练脑基础模型**：时间序列模型（**BrainLM**）、连接组/FC模型（**BrainMass**、**BrainNPT**）、时空联合模型（**Brain-JEPA**）。

## 4. 资源与算力

-   论文正文中**未明确提及**具体的GPU型号、数量及总训练时长。仅在超参数设置部分提供了批次大小、学习率等配置信息。

## 5. 实验数量与充分性

-   **实验数量充足且系统**：论文设计了多维度的充分实验来验证模型的各项性能。
    -   **主实验**：在10种疾病的分类任务上，与7种基线方法（含3种现有脑基础模型）进行全面对比。
    -   **泛化性实验**：系统测试了模型在Full-shot（100%）、Few-shot（10%， 1%）和Zero-shot（0%）三种设置下的性能。
    -   **跨图谱实验**：评估了在不同图谱（功能/解剖、粗/细粒度）上预训练和微调/提示的性能。
    -   **消融实验**：验证了预训练策略（GCL、GMAE）、预训练数据（单/多图谱）、下游适应方法（全参微调、PEFT、图提示）、位置编码类型等多个关键模块的有效性，实验设置详尽且公平。

## 6. 论文的主要结论与发现

-   **性能更优**：BrainGFM在图神经网络基线上显著提升，并超越了连接组/FC基础模型，在多数任务上匹敌或超越计算昂贵的时序基础模型。
-   **泛化能力强大**：通过元学习优化的图提示，模型实现了有效的少样本学习；通过语言提示，模型展现了跨未见疾病和图谱的零样本泛化能力，性能远超普通模型。
-   **知识互补**：混合功能和解剖图谱进行预训练能学到互补的表征，比仅用单一图谱或单一类型图谱训练效果更好，证明了多源异质数据整合的价值。
-   **策略互补**：结合图对比学习（全局）和图掩码自编码器（局部）的双重预训练，优于任何一种单独策略，验证了多尺度表征学习的优势。

## 7. 优点

-   **范式创新**：首次提出基于图的基础模型范式，在脑连接组建模的性能和时间序列建模的效率之间找到了一个优秀的平衡点。
-   **系统性强**：构建了一个从大规模异质数据整合、预训练到多种下游任务泛化的完整框架，并通过图/语言提示巧妙解决了少/零样本适应难题。
-   **实验严谨**：实验设计周全，覆盖了多种疾病、图谱、数据划分和训练设置，提供了详尽的基准对比和消融分析，结论具有很强的说服力。

## 8. 不足与局限

-   **数据覆盖不全**：预训练数据集主要基于静息态fMRI，未包含大量的任务态（task-based）fMRI数据，且因成本原因未纳入UK Biobank等超大型数据集，限制了表征的全面性。
-   **图构建的单一性**：脑图构建主要依赖皮尔逊相关，虽对比了其他方法，但其本身可能无法完全捕捉大脑复杂的非线性动态交互。
-   **模型复杂度**：作为基础模型，其整体流程（预训练、元学习、提示设计）相较于单一任务的专用模型仍然复杂，可能为实际部署带来一定门槛。

## 9. 研究价值与阅读建议
（本部分已前置，此处不再重复）
(完)

（完）
