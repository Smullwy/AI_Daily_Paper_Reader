---
title: ICLR26 A Brain Graph Foundation Model_ Pre-Training and Prompt Learning of Brain Networks
title_zh: ICLR26 脑图基础模型：脑网络的预训练与提示学习
authors: Unknown
date: 2026-06-05
pdf: assets/local_pdfs/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 大规模跨被试fMRI预训练学习通用脑表征
tldr: 本文提出脑图基础模型BrainGFM，通过图对比学习和图掩码自编码器在大规模fMRI脑图上预训练，并整合图提示与语言提示，实现跨图谱、跨疾病的下游任务高效迁移，在27个数据集、25种疾病、8种图谱上验证了其泛化能力。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-012.webp\", \"caption\": \"Figure 1: The pipeline of our proposed BrainGFM. (a) A large-scale brain fMRI graph dataset is constructed for pre-training. (b) BrainGFM is pre-trained using graph contrastive and masked autoencoder strategies, with atlas/parcellation tokens [A/P] to encode atlas-specific information. (c) We introduce graph prompts and use meta-learning to optimize them for few-shot adaptation, keeping the graph FM backbone frozen. (d) Finally, we freeze both the model and graph prompts, and use language prompts to enable zero-shot transfer to new tasks. Note that ”Schf.” means Schaefer atlas.\", \"page\": 4, \"index\": 12, \"width\": 822, \"height\": 385}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-006.webp\", \"caption\": \"Table 1: Comparison among different methods on 10 brain disorders on Schaefer100 atlas. Pink indicates the best performance.\", \"page\": 7, \"index\": 6, \"width\": 850, \"height\": 448}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-007.webp\", \"caption\": \"Figure 2: Performance comparison across different settings (Full-Shot, Few-Shot, Zero-Shot) on three datasets: ABIDE II, ADHD 200, and ADNI 2. The results demonstrate the progressive performance gains achieved by incorporating graph prompts (G-Prompt), meta-learning (Meta L.), and language prompts (Lan. Prompt) into the FM (BrainGFM), especially in few-shot and zero-shot settings.\", \"page\": 7, \"index\": 7, \"width\": 808, \"height\": 200}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-008.webp\", \"caption\": \"Figure 3: The performance of models pre-trained on different atlases varies across downstream atlases. The experiments are conducted on ABIDE II dataset for ASD classification.\", \"page\": 7, \"index\": 8, \"width\": 829, \"height\": 231}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-019.webp\", \"caption\": \"Figure 6: The simplified training pipeline of BrainGFM, covering (a) fMRI graph construction for pre-training, (b) BrainGFM pre-training, (c) meta-learning for few-shot scenarios, and (d) zero-shot adaptation via language prompts.\", \"page\": 16, \"index\": 19, \"width\": 821, \"height\": 237}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-020.webp\", \"caption\": \"Figure 7: Our BrainGFM achieves unification in the fMRI domain across three key dimensions: (a) diverse brain datasets and cohorts, (b) multiple neurological and psychiatric disorders, and (c) various brain atlases and parcellations.\", \"page\": 16, \"index\": 20, \"width\": 825, \"height\": 264}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-018.webp\", \"caption\": \"Figure 8: We compare different brain foundation models in terms of performance, inference speed, and computational cost. The results show that Graph FM provides a trade-off between performance and efficiency compared to Time-Series FM, while our BrainGFM achieves the best overall performance across all aspects.\", \"page\": 16, \"index\": 18, \"width\": 818, \"height\": 195}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-013.webp\", \"caption\": \"Figure 9: Performance comparison on two uncommon disorders from the HBN dataset under FullShot, Few-Shot, and Zero-Shot settings. The HBN dataset is excluded from the pre-training stage to ensure that the tested disorders are unseen during training. The results highlight the effectiveness of incorporating graph prompts (G-Prompt), meta-learning (Meta L.), and language prompts (Lan. Prompt) into the BrainGFM model, particularly in few-shot and zero-shot scenarios.\", \"page\": 17, \"index\": 13, \"width\": 798, \"height\": 285}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-017.webp\", \"caption\": \"Table 7: Comparison of Positional Encoding Strategies on ABIDE II (ASD Classification)\", \"page\": 20, \"index\": 17, \"width\": 694, \"height\": 205}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-016.webp\", \"caption\": \"Table 10: Comparison between Graph Contrastive Learning and Graph Masked Autoencoder Pretraining.\", \"page\": 24, \"index\": 16, \"width\": 856, \"height\": 388}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-015.webp\", \"caption\": \"Table 11: Training and architectural hyperparameters used in the Graph Transformer Backbone.\", \"page\": 24, \"index\": 15, \"width\": 781, \"height\": 452}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-002.webp\", \"caption\": \"Table 12: Training hyperparameters used in the MAML-style Meta-Learning Framework.\", \"page\": 25, \"index\": 2, \"width\": 760, \"height\": 380}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-001.webp\", \"caption\": \"Table 13: Common support/query set splits used in MAML-style meta-learning.\", \"page\": 25, \"index\": 1, \"width\": 818, \"height\": 260}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-004.webp\", \"caption\": \"Table 14: Settings and considerations for the number of inner loop steps in MAML-style metalearning.\", \"page\": 26, \"index\": 4, \"width\": 777, \"height\": 245}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-003.webp\", \"caption\": \"Table 15: Comparison of brain foundation models and baselines across different architectural types, domains, pre-training strategies, and tuning methods.\", \"page\": 26, \"index\": 3, \"width\": 826, \"height\": 224}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-014.webp\", \"caption\": \"Table 16: Overview of Neuroimaging Datasets Used for Pre-Training and Evaluation. We group datasets by their function in our pipeline: pre-training, internal test, semi-external test, and external test. The table lists dataset names, number of unique subjects, total samples, and associated disorders.\", \"page\": 27, \"index\": 14, \"width\": 826, \"height\": 638}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-011.webp\", \"caption\": \"Table 17: Overview of 25 Brain Disorders Across Public Neuroimaging Datasets. We select balanced samples (e.g., HBN, ADNI) for downstream classification. Note that all downstream tasks have balanced numbers of male and female samples.\", \"page\": 28, \"index\": 11, \"width\": 830, \"height\": 605}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-009.webp\", \"caption\": \"Table 18: Disorders in Different Categories and Their Datasets.\", \"page\": 29, \"index\": 9, \"width\": 830, \"height\": 542}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-010.webp\", \"caption\": \"Table 19: Comparison of Common Brain Atlases and Parcellations Used in Our Study.\", \"page\": 29, \"index\": 10, \"width\": 840, \"height\": 441}, {\"url\": \"assets/figures/local-pdf/local-20260605-140713634539-iclr26-a-brain-graph-foundation-model_-pre-training-and-prompt-learn/fig-005.webp\", \"caption\": \"Figure 10: ROI-level attention attribution maps for ABIDE (ASD) and HBN (MDD), showing distinct attention patterns between normal controls and patients.\", \"page\": 30, \"index\": 5, \"width\": 826, \"height\": 235}]"
motivation: 现有脑基础模型多基于时序信号或连接组特征，缺乏在图结构上的预训练范式。
method: 采用图对比学习与掩码自编码器对多图谱脑图进行预训练，并设计图提示和语言提示结合元学习实现灵活迁移。
result: 模型能泛化到未见疾病，支持少样本和零样本学习，覆盖25种神经精神疾病。
conclusion: BrainGFM为脑图分析提供了统一的预训练框架，展示了图基础模型在神经科学中的应用潜力。
---

## 摘要
随着大型语言模型（LLMs）持续推动人工智能研究的变革，人们对构建大规模脑基础模型以推进神经科学的兴趣日益浓厚。尽管现有的大多数脑基础模型在时间序列信号或连接组特征上进行预训练，我们提出了一种新颖的基于图的预训练范式，用于构建脑图基础模型。本文中，我们介绍了脑图基础模型（BrainGFM），这是一个统一的框架，利用图对比学习和图掩码自编码器进行大规模的基于功能磁共振成像（fMRI）的预训练。BrainGFM 在多种具有不同分区的脑图谱混合数据集上进行预训练，显著扩展了预训练语料库，并增强了模型对异构fMRI衍生脑表征的泛化能力。为了支持高效且多功能的迁移至下游任务，我们将图提示和语言提示集成到模型设计中，使BrainGFM能够灵活地适应广泛的图谱、神经和精神疾病以及任务设置。此外，我们采用元学习来优化图提示，通过语言引导的提示，在少样本和零样本学习条件下促进对未见疾病的强泛化能力。BrainGFM 基于27个神经影像数据集构建，覆盖了25种常见的神经和精神疾病，包含2种脑图谱类型（功能性和解剖性），跨越8种广泛使用的分区，涵盖超过25,000名受试者、60,000次fMRI扫描，以及在所有图谱和分区上聚合的共计400,000个图样本。代码可在 https://github.com/weixinxu666/BrainGFM 获取。

## Abstract
As large language models (LLMs) continue to revolutionize AI research, there is a growing interest in building large-scale brain foundation models to advance neuroscience. While most existing brain foundation models are pre-trained on time-series signals or connectome features, we propose a novel graph-based pre- training paradigm for constructing a brain graph foundation model. In this paper, we introduce the Brain Graph Foundation Model, termed BrainGFM, a unified framework that leverages graph contrastive learning and graph masked autoen- coders for large-scale fMRI-based pre-training. BrainGFM is pre-trained on a diverse mixture of brain atlases with varying parcellations, significantly expanding the pre-training corpus and enhancing the model’s ability to generalize across het- erogeneous fMRI-derived brain representations. To support efficient and versatile downstream transfer, we integrate both graph prompts and language prompts into the model design, enabling BrainGFM to flexibly adapt to a wide range of atlases, neurological and psychiatric disorders, and task settings. Furthermore, we employ meta-learning to optimize the graph prompts, facilitating strong generalization to previously unseen disorders under both few-shot and zero-shot learning conditions via language-guided prompting. BrainGFM is established on 27 neuroimaging datasets spanning 25 common neurological and psychiatric disorders, encompass- ing 2 types of brain atlases (functional and anatomical) across 8 widely-used parcellations, and covering over 25,000 subjects, 60,000 fMRI scans, and a total of 400,000 graph samples aggregated across all atlases and parcellations. The code is available at https://github.com/weixinxu666/BrainGFM.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：该工作与您关注的“fMRI representation”、“representation alignment”、“neural prior”高度相关，它直接在脑图结构上学习通用表征，并为下游任务提供了一种高效的对齐与迁移范式。
- **启发与意义**：论文将基础模型的思想引入脑图领域，证明了大规模跨图谱预训练能学到泛化性更强的脑表征，对您探索fMRI数据的通用神经先验和表征对齐有直接的参考价值。
- **可借鉴点**：可重点借鉴其“图结构预训练 + 图/语言提示迁移”的技术路线，以及用元学习处理多图谱、多任务异构数据的对齐方法，这些对构建您自己方向的预训练或微调框架很有帮助。
- **阅读建议**：建议精读方法论部分，特别是图提示与元学习的结合方式，以及附录中跨图谱实验的详细设置与结果分析，以获取具体的技术实现细节和实验设计思路。

## 1. 论文的核心问题与整体含义
- **研究动机**：传统基于fMRI的深度学习模型通常在小规模、单一图谱数据集上训练，导致泛化能力弱、灵活性差，难以迁移至新任务、新图谱或新疾病。
- **核心问题**：如何构建一个基于图结构的大规模脑基础模型，使其能够有效整合异构、多图谱的fMRI数据，并实现高效、灵活的跨任务、跨图谱和跨疾病的迁移学习。
- **整体含义**：本文提出了脑图基础模型（Brain Graph Foundation Model，BrainGFM），这是一个统一的图预训练与提示微调框架，旨在解决脑科学领域中数据异构性、预训练成本和下游适应性等关键挑战，为脑疾病的诊断和研究提供一种强大且通用的新工具。

## 2. 论文提出的方法论
- **核心思想**：将fMRI数据构建为脑图，首次采用图神经网络作为脑基础模型的骨干，并结合图对比学习（GCL）和图掩码自编码器（GMAE）进行大规模预训练。通过图提示和语言提示实现少样本和零样本的灵活迁移。
- **关键技术细节**：
  - **多图谱脑图构建**：从fMRI时间序列计算皮尔逊相关系数并二值化，构建脑图。节点特征为节点的连接性剖面，边权重为相关系数。
  - **图预训练**：采用Graph Transformer作为骨干，并使用随机游走结构编码（RWSE）作为位置编码。预训练包含两个互补任务：
    - **图对比学习**：对图进行随机节点和边丢弃，生成正负样本对，通过对比学习损失来学习全局判别性表征。
    - **图掩码自编码器**：随机掩蔽图中的节点和边，通过编码器-解码器结构重建被掩蔽的部分，使用均方误差（MSE）损失来学习局部细粒度表征。
  - **图提示（Graph Prompt）**：设计可学习的图结构（节点和边参数），通过元学习框架（MAML）进行优化，使冻结的预训练模型能快速适应少样本下的新疾病和图谱任务。提示通过元素级乘法注入节点特征。
  - **语言提示（Language Prompt）**：为疾病和脑图谱构造文本描述，用BioClinicalBERT编码得到语义嵌入，作为任务/疾病令牌$[T/D]$和图谱/分区令牌$[A/P]$注入模型，引导零样本迁移。
  - **多图谱统一输入**：通过零填充和可学习的节点提示矩阵，处理不同节点数量的脑图。使用注意力掩码，防止模型关注到填充的无效节点。

## 3. 实验设计
- **数据集**：构建了一个包含27个公开fMRI数据集的超大规模语料库，涵盖超过25,000名被试和60,000次扫描。实验评估了10种典型神经精神疾病，并在内部测试、半外部测试和外部测试等多种场景下验证了模型的泛化能力。
- **Benchmark**：下游任务主要为疾病分类（如ADHD vs 正常对照， ASD vs 正常对照等）。与多种方法进行了比较。
- **对比方法**：
  - **传统模型（无预训练）**：Vanilla GCN， BrainGNN， Vanilla Transformer， Graph Transformer， BrainNetTF。
  - **预训练脑基础模型**：BrainNPT（连接组/FC-based）， BrainMass（连接组/FC-based）， BrainLM（时间序列-based）， Brain\-JEPA（时间序列-based）。
  - **消融研究**：对比了不同预训练策略（GCL， GMAE）、图提示/语言提示、元学习、不同脑图谱（功能性 vs 解剖性， 单分辨率 vs 多分辨率）和不同微调方法的影响。

## 4. 资源与算力
- 论文未明确提及具体的GPU型号、数量及总训练时长。这是一个信息缺失点。

## 5. 实验数量与充分性
- **实验数量**：进行了大量的实验，包括：
  - **主要对比实验**：在10种疾病上对比了9种不同的方法。
  - **消融实验**：涵盖了全样本/少样本/零样本设置、不同预训练策略组合、不同图谱和分区、不同位置编码和微调方法等多个维度。
  - **可解释性分析**：可视化了注意力图谱。
- **充分性与客观性**：实验设计相当全面和深入，系统地验证了模型各组件的有效性。与多种前沿方法进行了公平对比，并使用了AUC， ACC， SEN， SPE等多指标评估。消融实验设计合理，结论支撑有力，整体实验具有较高的充分性和客观性。

## 6. 论文的主要结论与发现
- BrainGFM在所有对比方法和多种疾病分类任务上均取得了最优（SOTA）的性能。
- 图基础模型的性能远超无预训练模型，并且效果可媲美性能最佳但计算成本更高的时序基础模型，同时保持与轻量连接组模型相似的效率。
- 混合使用功能性和解剖性图谱进行预训练能获得最佳的跨图谱泛化能力。
- 结合图提示和元学习能显著提升少样本学习能力，而加入语言提示后，模型在零样本场景下也能有效泛化至未见过的疾病和图谱。

## 7. 优点
- **方法创新性强**：首次将图预训练范式引入脑基础模型领域，找到了性能与效率的良好平衡点。
- **系统性强**：提出了从数据构建、预训练、提示微调到零样本泛化的完整框架，统一解决了数据异构性、预训练成本、下游适应性等多个挑战。
- **实验全面扎实**：在超大规模、多图谱、多疾病的数据集上进行了详尽的对比和消融实验，充分验证了模型的优越性和各组件的有效性。
- **泛化能力突出**：通过元学习和语言提示，实现了强大的少样本甚至零样本泛化能力，更贴近真实临床应用场景。

## 8. 不足与局限
- **算力细节缺失**：未说明模型预训练所需的计算资源，读者难以评估其复现成本。
- **脑图构建方式**：主要基于静态皮尔逊相关和简单的阈值化/Top-K方法，可能丢失了fMRI数据中丰富的时变信息和复杂交互关系。
- **数据多样性限制**：预训练数据主要来自公开数据集，仍可能受限于采集站点、人群等偏差。未能包含UK Biobank等更大规模数据集。
- **任务单一性**：下游任务仅聚焦于疾病分类，未在回归预测或其他更复杂的脑状态解码任务上进行验证。

## 9. （无对应章节，已移至第一节）
（完）
