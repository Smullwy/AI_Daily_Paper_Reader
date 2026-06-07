---
title: AAAI26 Probability Distribution Alignment and Low-Rank Weight Decomposition for Source-Free Domain Adaptive Brain Decoding
title_zh: AAAI26 基于无源域适应的脑解码：概率分布对齐与低秩权值分解
authors: "Ganxi Xu, Jinyi Long, Jia Zhang"
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-184041972565-aaai26-probability-distribution-alignment-and-low-rank-weight-decomp.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 使用CLIP嵌入的跨被试fMRI脑解码源无关域适应
tldr: 本文针对脑解码中的个体差异、模态对齐不足和高维嵌入问题，提出一种基于源自由域适应的框架。通过仅使用源模型消除源数据依赖，保护隐私并减少存储；利用MMD对齐图文模态边缘分布，SVD融合嵌入并用Wasserstein距离对齐以提升重建质量；最后采用LoRA低秩适配目标模型，显著降低计算成本，实验证明性能最优。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-184041972565-aaai26-probability-distribution-alignment-and-low-rank-weight-decomp/fig-001.webp\", \"caption\": \"\", \"page\": 7, \"index\": 1, \"width\": 4170, \"height\": 1767}]"
motivation: 解决脑解码中源数据使用带来的隐私泄露与存储负担，以及跨模态对齐不足和高维嵌入的计算瓶颈。
method: 提出源自由域适应框架，结合MMD对齐边缘分布、SVD融合并Wasserstein距离对齐图文嵌入，以及LoRA低秩适配目标模型。
result: 在脑解码任务上，该方法全面优于现有最先进方法。
conclusion: 该框架无需源数据即可有效应对跨被试差异和多模态挑战，实现高效、隐私保护的脑解码。
---

## 摘要
脑解码目前在个体差异、模态对齐和高维嵌入方面面临重大挑战。为了解决个体差异，研究人员通常使用源受试者数据，这会导致隐私泄露和沉重的数据存储负担等问题。在模态对齐方面，当前的工作侧重于对齐 softmax 概率分布，但忽略了对边缘概率分布的对齐，导致模态错位。此外，图像和文本分别与 fMRI 对齐，没有考虑图像和文本之间的复杂交互，导致图像重建效果不佳。最后，CLIP 嵌入的巨大维度带来了显著的计算成本。尽管可以通过忽略从图像获得的补丁数量和从文本获取的令牌数量来降低 CLIP 嵌入的维度，但这会以模型性能显著下降为代价，造成两难境地。为了克服这些局限性，我们提出了一种基于无源域适应（SFDA）的脑解码框架。首先，我们将 SFDA 应用于脑解码，在目标模型适应过程中仅获取源模型而不访问源数据，以解决跨受试者差异、隐私问题和沉重的数据存储负担。其次，我们使用最大均值差异（MMD）来对齐不同模态嵌入之间的边缘概率分布。此外，为了适应图像和文本之间的复杂交互，我们将图像和文本的嵌入进行串联，然后使用奇异值分解（SVD）获得新的嵌入。更重要的是，为了获得更好的图像生成质量，我们使用 Wasserstein 距离（WD）来对齐新嵌入的概率分布。最后，在 SFDA 的目标模型适应阶段，我们采用低秩适应（LoRA）来降低调整目标模型的高昂成本。充分的实验表明，我们的工作在脑解码任务上优于最先进的方法。扩展版本 — https://arxiv.org/abs/2504.09109

## Abstract
Brain decoding currently faces significant challenges in indi- vidual differences, modality alignment, and high-dimensional embeddings. To address individual differences, researchers often use source subject data, which leads to issues such as privacy leakage and heavy data storage burdens. In modal- ity alignment, current works focus on aligning the softmax probability distribution but neglect the alignment of marginal probability distributions, resulting in modality misalignment. Additionally, images and text are aligned separately with fMRI without considering the complex interplay between im- ages and text, leading to poor image reconstruction. Finally, the enormous dimensionality of CLIP embeddings causes significant computational costs. Although the dimensionality of CLIP embeddings can be reduced by ignoring the num- ber of patches obtained from images and the number of to- kens acquired from text, this comes at the cost of a signif- icant drop in model performance, creating a dilemma. To overcome these limitations, we propose a source-free domain adaptation (SFDA)-based brain decoding framework. Firstly, we apply SFDA, which only acquires the source model with- out accessing source data during target model adaptation, to brain decoding to address cross-subject variations, privacy concerns, and the heavy burden of data storage. Secondly, we employ maximum mean discrepancy (MMD) to align the marginal probability distributions between embeddings of different modalities. Moreover, to accommodate the complex interplay between image and text, we concatenate the embed- dings of image and text and then use singular value decom- position (SVD) to obtain a new embedding. What’s more, to achieve better image generation quality, we employ the Wasserstein distance (WD) to align the probability distribu- tions of new embeddings. Finally, in the target model adapta- tion phase of SFDA, we employ low-rank adaptation (LoRA) to reduce the high expense of tuning the target model. Suf- ficient experiments demonstrate our work outperforms state- of-the-art methods for brain decoding tasks. Extended version — https://arxiv.org/abs/2504.09109

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：高度关联读者的“brain decoding”、“fMRI representation”和“representation alignment”研究方向。
- **启发与意义**：本文为隐私保护下的跨被试脑解码提供了新范式，其将源无关域适应与多模态概率对齐结合的思想，对处理高维、异构的fMRI表示学习有直接启发。
- **可借鉴点**：MMD对齐边缘分布、SVD融合耦合模态嵌入及LoRA降低计算成本等具体技术，可尝试迁移到其他fMRI表示对齐或神经编解码任务中。
- **阅读建议**：重点研读方法论部分的SFDA流程、损失函数设计及消融实验分析，理解各组件间的协同机制与计算效率权衡，以获取可落地的技术细节。

---

## 核心问题与整体含义
- **研究背景与动机**：
  - 脑解码旨在从fMRI等脑信号中重建视觉刺激，面临三大核心挑战：跨被试个体差异性大（模型泛化难）、图像-文本-fMRI多模态对齐不充分、CLIP等高维嵌入带来的巨大计算开销。
  - 传统方法依赖源受试者数据进行目标模型适配，引发**数据隐私泄露风险**和**沉重存储负担**；同时现有模态对齐方法（如SoftCLIP损失）仅对齐条件/softmax分布，忽略了对**边缘概率分布的直接对齐**，且独立处理图文模态忽视了其**复杂交互**，导致图像重建质量不佳。
- **整体含义**：本文提出一种基于**源无关域适应（SFDA）** 的脑解码框架，旨在无需访问源数据的情况下，通过全面的概率分布对齐和低秩权重分解，解决上述跨被试隐私、模态错位及计算效率问题，实现高效、隐私安全的脑解码。

## 方法论
- **核心思想**：将SFDA引入脑解码，分为“源模型训练”和“目标模型适配”两阶段。目标适配阶段仅继承源模型参数，不访问任何源数据；通过多层级概率分布对齐（MMD + WD）和低秩适配（LoRA）解决模态融合与计算瓶颈。
- **关键技术细节**：
  - **源模型训练与基础对齐**：
    - 架构：fMRI信号经过嵌入器（Embedder）和翻译器（Translator）得到图像/文本预测嵌入，再经图像头/文本头投影到CLIP空间。
    - 损失函数：除SoftCLIP损失外，引入最大均值差异（MMD）直接对齐预测嵌入与CLIP嵌入的**边缘概率分布**：
      - 图像损失：$L_{image} = L_{SoftCLIP}(\hat{e}'_I, e_I) + L_{MMD}(\hat{e}'_I, e_I)$
      - 文本损失：$L_{text} = L_{SoftCLIP}(\hat{e}'_C, e_C) + L_{MMD}(\hat{e}'_C, e_C)$
      - 源总损失：$L_{SRC} = L_{image} + L_{text}$
  - **目标模型适配与模态融合**：
    - **图文交互建模**：将预测图像嵌入 $\hat{e}'_I$ 和文本嵌入 $\hat{e}'_C$ 拼接得到统一预测嵌入 $\hat{e}'_u$，CLIP嵌入同理得到 $e_u$。
    - **奇异值分解提取**：对统一嵌入做SVD，取奇异值向量 $\hat{\Sigma}'_u$ 和 $\Sigma_u$ 作为新统一嵌入 $\hat{e}'_{SVD}$ 和 $e_{SVD}$，以提取图文交互后的本质特征。
    - **Wasserstein距离对齐**：使用Wasserstein距离 $L_{WD} = WD(\hat{e}'_{SVD}, e_{SVD})$ 对齐统一嵌入的概率分布，以提升图像生成质量。
    - **整体适配损失**：$L_{ADP} = L_{image} + L_{text} + L_{WD}$
  - **计算效率优化**：在图像头/文本头中应用**权重分解低秩适配（DoRA）**，将预训练权重分解为幅度成分 $m$ 和方向成分，仅通过低秩矩阵 $B$ 和 $A$ 更新方向参数：$W' = m \frac{W_0 + BA}{\|W_0 + BA\|_c}$，大幅减少可训参数。
- **整体流程**：源模型训练后，目标适配阶段无需源数据，利用目标受试者的fMRI和对应CLIP嵌入监督，通过 $L_{ADP}$ 微调嵌入器、翻译器及经DoRA优化的图像/文本头。

## 实验设计
- **数据集与基准**：
  - 使用**自然场景数据集（NSD）**，包含8名受试者的7T fMRI数据。实验聚焦4名完成所有扫描的受试者（subj01,02,05,07）。
  - 训练集：8859张图像，24980次fMRI试次；测试集：982张图像，2770次fMRI试次。
  - 采用NSDGeneral感兴趣区的预处理体素数据，维度因受试者而异。
- **对比方法**：与多种单模型及多模型脑解码框架进行定量比较，包括Takagi等、Brain-Diffuser、MindEye、DREAM、MindBridge、UMBRAE、Shen等。
- **实验设置**：以三人的数据为源域，剩余一人的数据为目标域，构建四组跨被试SFDA任务。

## 资源与算力
- **硬件配置**：使用三块 Tesla V100S PCIe 32 GB GPU。
- **训练时长**：源模型训练600个epoch，目标模型适配训练200个epoch。（未提及单次训练的具体时间）

## 实验数量与充分性
- **实验组数**：
  1. 主实验：在4组跨被试设定上与7种现有SOTA方法进行全指标对比。
  2. 多嵌入器vs单嵌入器对比：证明单嵌入器SFDA方案更优且隐私友好。
  3. 消融实验：分别验证MMD损失与SVD+WD融合方法（聚合方法）的独立贡献。
  4. 参数效率实验：对比不同秩r（4,8,16,32,64）下LoRA与DoRA的性能与可训参数量。
  5. 可视化分析：利用t-SNE可视化适配前后源/目标特征分布，证明跨被试差异被克服。
- **充分性与公平性**：实验设计覆盖了与多类SOTA的对比、关键组件消融、效率分析和定性解释，对比基线丰富且评估指标全面（低/高层图像指标），消融逻辑清晰，客观公平。

## 主要结论与发现
- 提出的SFDA框架无需访问源数据，在保护隐私的同时，其脑解码性能全面超越现有单模型和多模型方法。
- MMD损失通过直接对齐边缘概率分布，显著弥补了SoftCLIP损失的不足，是性能提升的关键组件。
- 考虑图文复杂交互的SVD融合与Wasserstein距离对齐，能有效提升图像重建质量。
- DoRA能以极少的可训参数（如r=8时仅用6.34%的参数）实现与完整微调相当甚至更优的性能，大幅降低计算成本。
- t-SNE可视化证实SFDA策略成功提取了跨被试不变的特征表示，有效克服了个体差异。

## 优点
- **隐私保护与强泛化**：开创性地将SFDA引入脑解码，从机制上解除对源数据的依赖，同时解决隐私、存储负担和跨被试泛化问题。
- **多层级对齐策略**：从边缘分布（MMD）到类别/条件分布（SoftCLIP）再到融合模态的全局分布（WD），构建了层层递进的概率分布对齐体系，理论扎实。
- **模态融合创新**：通过拼接+SVD+WD的方式显式建模并利用图文复杂交互，优于独立对齐范式。
- **高效与实用并重**：DoRA的应用极大地降低了模型适配的计算开销，使得高维嵌入下的SFDA训练更可行，实际应用价值高。

## 不足与局限
- **数据集单一**：仅在NSD数据集上验证，未在更广泛或数据量较少的fMRI解码基准（如BOLD5000）上测试泛化性。
- **受试者状态假设**：依赖预训练的静态源模型，难以处理源受试者数据分布随时间漂移或目标受试者数据极少（如少样本）的场景。
- **SFDA机制依赖**：目标适配仍需完整的目标受试者标注数据（fMRI-图像-文本对），这在实际脑机接口中获取成本依然很高。
- **生成式评估未关联**：图像重建评估虽使用多种指标，但未涉及与后续生成模型（如扩散模型）联动的端到端实验，生成结果的视觉语义一致性仍有待考察。

（完）
