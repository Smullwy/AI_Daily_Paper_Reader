---
title: NeurIPS25 Bridging Brains and Concepts_ Interpretable Visual Decoding from fMRI with Semantic Bottlenecks
title_zh: NeurIPS25 连接大脑与概念：基于语义瓶颈的fMRI可解释视觉解码
authors: Unknown
date: 2026-05-31
pdf: assets/local_pdfs/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 用CLIP嵌入进行fMRI视觉解码
tldr: 现有脑解码模型多依赖不解释的潜在空间，本研究在BrainDiffuser中插入语义瓶颈，构建214维二进制可解释空间，通过线性映射将体素活动转为语义概念并生成图像，权重图揭示各脑区对语义的贡献，与已知类别选择性区域一致，解码性能仅微降但可解释性显著提升。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks/fig-005.webp\", \"caption\": \"Figure 1: The BrainDiffuser model reconstructs stimuli from fMRI data. A first, structural stream (top) is trained to estimate the representations of a VDVAE while a second, semantic stream (bottom) estimates CLIP-Text and CLIP-Vision latent features h̃ from neural data Z. Both estimations are done with linear models. The VDVAE latents are fed to the VDVAE decoder to produce a first initial guess of the image, which is given as input to Versatile Diffusion together with the estimated CLIP-Text and CLIP-Vision vectors to obtain the final reconstruction.\", \"page\": 4, \"index\": 5, \"width\": 817, \"height\": 271}, {\"url\": \"assets/figures/local-pdf/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks/fig-009.webp\", \"caption\": \"Figure 2: Overview of the different models. Top row: (1) \\\"Brain to Int\\\" Model training: training pipeline of the model mapping from brain activity −→ intepretable space L. Each stimulus image is fed to BLIP-2 along with a fixed set of 214 yes/no questions. The model’s answers form the concept vector a, our interpretable target space. The \\\"Brain to Int\\\" model learns to reconstruct these vectors from brain activity; (2) \\\"Int to CLIP\\\" Model training: training pipeline of the model mapping from L −→ CLIP/VDVAE space. This model learns to map brain activity to VDVAE and CLIP embeddings which are used to generate the reconstructed image. Bottom row: \\\"Interpretable BrainDiffuser - Inference\\\": the whole inference pipeline of our interpretable model. Neural data Z is first mapped to the interpretable space L via the \\\"Brain to Int\\\" model and then mapped to CLIP/VDVAE space via the \\\"Int to CLIP\\\" model). The final image is generated via Versatile Diffusion, using the estimated CLIP/VDVAE embeddings.\", \"page\": 5, \"index\": 9, \"width\": 826, \"height\": 412}, {\"url\": \"assets/figures/local-pdf/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks/fig-002.webp\", \"caption\": \"Table 2: Quantitative analysis of reconstructed images for all subjects with high-level metrics. Upward arrow (↑): higher is better; downward arrow (↓): lower is better.\", \"page\": 7, \"index\": 2, \"width\": 818, \"height\": 291}, {\"url\": \"assets/figures/local-pdf/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks/fig-004.webp\", \"caption\": \"Figure 3: Comparison of our reconstruction results (columns 4, 8) to the original stimuli (columns 1, 5), the images reconstructed by the original BrainDiffuser (columns 2, 6) and those reconstructed by the Int to CLIP model (columns 3, 7). Results presented here refer to subj01.\", \"page\": 8, \"index\": 4, \"width\": 826, \"height\": 468}, {\"url\": \"assets/figures/local-pdf/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks/fig-008.webp\", \"caption\": \"Figure 4: Activation maps projected in MNI-512 space, compared to category-specific reference maps. Sections correspond to places (top left), bodies (top right), faces (bottom left) and words (bottom right). Within each section, the blue map shown first presents the reference for that category. Other images show the activations derived from the interpretable matrix A. All maps are from subject01.\", \"page\": 9, \"index\": 8, \"width\": 790, \"height\": 1025}, {\"url\": \"assets/figures/local-pdf/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks/fig-001.webp\", \"caption\": \"Figure 6: Comparison of our reconstruction results (columns 4, 8) to the original stimuli (columns 1, 5), the images reconstructed by the original BrainDiffuser (columns 2, 6) and those reconstructed by the Int to CLIP model (columns 3, 7). Results presented here refer to subj02.\", \"page\": 15, \"index\": 1, \"width\": 829, \"height\": 429}, {\"url\": \"assets/figures/local-pdf/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks/fig-011.webp\", \"caption\": \"Figure 7: Comparison of our reconstruction results (columns 4, 8) to the original stimuli (columns 1, 5), the images reconstructed by the original BrainDiffuser (columns 2, 6) and those reconstructed by the Int to CLIP model (columns 3, 7). Results presented here refer to subj05.\", \"page\": 16, \"index\": 11, \"width\": 829, \"height\": 428}, {\"url\": \"assets/figures/local-pdf/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks/fig-010.webp\", \"caption\": \"Figure 8: Comparison of our reconstruction results (columns 4, 8) to the original stimuli (columns 1, 5), the images reconstructed by the original BrainDiffuser (columns 2, 6) and those reconstructed by the Int to CLIP model (columns 3, 7). Results presented here refer to subj07.\", \"page\": 16, \"index\": 10, \"width\": 826, \"height\": 428}, {\"url\": \"assets/figures/local-pdf/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks/fig-007.webp\", \"caption\": \"Figure 9: Activation maps for subject 2, projected in MNI-512 space and compared to categoryspecific reference maps. Sections correspond to places (top left), bodies (top right), faces (bottom left) and words (bottom right). Within each section, the blue map shown first presents the reference for that category. Other images show the activations derived from the interpretable matrix A.\", \"page\": 17, \"index\": 7, \"width\": 790, \"height\": 1023}, {\"url\": \"assets/figures/local-pdf/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks/fig-003.webp\", \"caption\": \"Figure 10: Activation maps, for subject 5, projected in MNI-512 space and compared to categoryspecific reference maps. Sections correspond to places (top left), bodies (top right), faces (bottom left) and words (bottom right). Within each section, the blue map shown first presents the reference for that category. Other images show the activations derived from the interpretable matrix A.\", \"page\": 18, \"index\": 3, \"width\": 790, \"height\": 1027}, {\"url\": \"assets/figures/local-pdf/local-20260531-201859428929-neurips25-bridging-brains-and-concepts_-interpretable-visual-decoding-from-fmri-with-semantic-bottlenecks/fig-006.webp\", \"caption\": \"Figure 11: Activation maps for subject 7, projected in MNI-512 space and compared to categoryspecific reference maps. Sections correspond to places (top left), bodies (top right), faces (bottom left) and words (bottom right). Within each section, the blue map shown first presents the reference for that category. Other images show the activations derived from the interpretable matrix A.\", \"page\": 19, \"index\": 6, \"width\": 790, \"height\": 1021}]"
motivation: 为解决当前脑解码模型缺乏可解释性的问题，需设计透明框架以连接脑活动与语义概念。
method: 在BrainDiffuser中加入语义瓶颈，先构建图像的二进制语义特征空间，再通过岭回归将fMRI体素活动线性映射到该空间，最后转换为CLIP嵌入生成图像，并可对权重图进行脑区重要性分析。
result: "单个体素的权重图与视觉皮层中面部、身体、地点等选择性区域高度吻合，且解码性能仅略低于原模型（CLIP相似度下降≤4%）。"
conclusion: 该可解释框架在不牺牲解码精度的前提下，实现了体素级的脑语义表征分析，为神经科学研究提供了新工具。
---

## 摘要
近年来，利用功能性磁共振成像（fMRI）等非侵入性神经成像技术解码视觉刺激取得了快速进展；然而，大多数高性能的脑解码模型依赖于复杂且不可解释的潜在空间。在本研究中，我们提出了一个可解释的脑解码框架，将语义瓶颈插入BrainDiffuser这一成熟、简单且线性的解码流程中。我们首先为图像生成一个214维的二进制可解释空间L，其中每个维度对应关于图像的一个具体问题（例如，“有人吗？”，“在户外吗？”）。第一个岭回归将体素活动映射到这个语义空间。由于该映射是线性的，其权重矩阵可以可视化为L每个维度的体素重要性图，揭示哪些皮层区域对每个语义维度影响最大。第二个回归则将这些概念向量转换为CLIP嵌入，以条件化BrainDiffuser模型，生成最终的解码图像。我们发现，针对单个问题的体素级权重图与视觉皮层中的经典类别选择性区域（面孔、身体、地点、文字）高度一致，同时揭示出大脑中承载语义意义的是激活分布，而不仅仅是位置。视觉脑解码性能仅略低于原始BrainDiffuser的指标（例如，四个被试的CLIP相似度下降≤4%），但在可解释性和神经科学洞见方面带来了显著增益。这些结果表明，我们的可解释脑解码流程能够在体素水平上分析人脑的语义表征，而不牺牲解码精度。

## Abstract
Decoding of visual stimuli from noninvasive neuroimaging techniques such as func- tional magnetic resonance (fMRI) has advanced rapidly in the last years; yet, most high-performing brain decoding models rely on complicated, non-interpretable latent spaces. In this study we present an interpretable brain decoding framework that inserts a semantic bottleneck into BrainDiffuser, a well established, simple and linear decoding pipeline. We firstly produce a 214 −dimensional binary in- terpretable space L for images, in which each dimension answers to a specific question about the image (e.g., "Is there a person?", "Is it outdoors?"). A first ridge regression maps voxel activity to this semantic space. Because this mapping is linear, its weight matrix can be visualized as maps of voxel importance for each dimension of L, revealing which cortical regions influence mostly each semantic dimension. A second regression then transforms these concept vectors into CLIP embeddings required to produce the final decoded image, conditioning the Brain- Diffuser model. We found that voxel-wise weight maps for individual questions are highly consistent with canonical category-selective regions in the visual cortex (face, bodies, places, words), simultaneously revealing that activation distributions, not merely location, bear semantic meaning in the brain. Visual brain decoding performance are only slightly lower compared to the original BrainDiffuser metrics (e.g., the CLIP similarity is decreased by ≤4% for the four subjects), yet offering substantial gains in interpretability and neuroscientific insights. These results show that our interpretable brain decoding pipeline enables voxel-level analysis of semantic representations in the human brain without sacrificing decoding accuracy.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议  
- **关联方向**：本文与“fMRI representation / brain decoding / neural prior”高度相关，提供了一种在保留解码能力的同时实现体素级语义可解释性的方案。  
- **启发与意义**：表明大脑宏观语义表征可被线性映射到结构化概念空间，这为构建神经先验、多视图约束以及表征对齐提供了新的建模视角与可解读的中间层。  
- **可借鉴点**：可将语义瓶颈替换为其他模态的概念问题集，用于视听解码或脑-模型对齐研究；权重矩阵可视化方法可直接用于分析任何线性编码/解码模型的语义特异性。  
- **阅读建议**：重点阅读“Interpretable space”的设计原理和“Voxel-wise weight maps”的分析方式，理解如何将可解释性与高保真重建统一，并结合你的方向思考线性模型在脑表征分析中的扩展可能。

---

## 1. 论文的核心问题与整体含义
- **核心问题**：当前基于fMRI的视觉脑解码模型虽然性能很高，但普遍依赖CLIP等不可解释的潜在空间，导致难以从神经科学角度理解“哪些脑区”如何编码“何种概念”。
- **整体含义**：本文试图在保持重建质量的前提下，为脑解码流程引入显式的语义瓶颈（可解释中间空间），使体素到概念的映射透明化，从而直接产出与经典功能分区一致的、概念特异的脑激活图。

## 2. 论文提出的方法论
- **总体框架**：在 BrainDiffuser（一种双流线性重建模型）的基础上，将其第二阶段中“脑活动→CLIP嵌入”的映射矩阵 $W$ 分解为两步：  
  $$W = AB,$$  
  其中 $A$ 将体素空间映射到自建的214维二进制语义空间 $L$，$B$ 将 $L$ 投影到CLIP空间。
- **可解释空间 $L$ 的构建**：
  1. 利用 GPT-4o 根据 COCO 图像描述生成 214 个互不重叠的“是/否”问题（如“有人物吗？”“在户外吗？”等）。
  2. 使用 BLIP-2 对每一张 NSD 图像逐一回答这些问题，得到 214 维的二值向量。
  3. 经线性岭回归验证，$L$ 可较好地重建 CLIP 嵌入（top-15 检索准确率达82%），说明其保留了主要语义信息。
- **训练过程**：
  - **“Brain to Int”模型**：通过岭回归拟合 $A$，将单个试次的fMRI体素活动映射到 $L$，采用5折交叉验证选择正则化系数。
  - **“Int to CLIP”模型**：同样用岭回归学习 $B$，将真实的可解释向量映射到原始的 VDVAE 和 CLIP 嵌入，从而利用冻结的 Versatile Diffusion 生成最终图像。
- **推理流程**：测试时，fMRI → 预测概念向量 → 预测CLIP/VDVAE特征 → 作为条件输入扩散模型，同时配合结构流生成的初始低质量图像，最终输出高保真重建图。
- **可解释性来源**：矩阵 $A$ 的列向量直接对应每个体素对某一概念的贡献，可映射到标准脑空间并与已知的类别选择性 ROI 进行对比。

## 3. 实验设计
- **数据集**：Natural Scenes Dataset (NSD)，选取完成全部试次的4名被试（subj01, 02, 05, 07），训练集 8859 张图像、24980 个试次，测试集 982 张图像、2770 个试次，多次呈现的试次已做平均。
- **对比基准**：
  - 原始 BrainDiffuser（不可解释基线）。
  - “Int to CLIP”：直接从真实概念向量重建的模型，作为上界，衡量 $L$ 的信息含量。
- **评估指标**：
  - 低层指标：PixCorr, SSIM, MSE, Cosine Similarity, AlexNet(2-way) 等。
  - 高层指标：InceptionV3(2-way), CLIP, EfficientNet距离, SwAV距离, 50-way top-1 准确率等。
- **可视化分析**：将 $A$ 中各概念对应权重的 top 4% 体素（并剔除<100 体素的小簇）配准到 MNI-152 空间，与 NSD 自带的面孔、身体、地点、文字 ROI 作对比。

## 4. 资源与算力
- 文中明确给出：实验在配备 **8 块 NVIDIA H100 GPU、2TB RAM、256 CPU 线程** 的服务器上完成。
- BLIP-2 抽取概念向量耗时约 **24 小时/被试**，完整可解释模型的训练时间 **少于 30 分钟/被试**，推理速度约 **3 秒/张**。

## 5. 实验数量与充分性
- 主要定量实验：对 4 名被试分别报告了低层和高层两套评估表，共 12 个模型-指标组合（原始BD、Int-BD、Int to CLIP）。
- 定性实验：展示了重建图像对比图（各被试）以及多个概念的脑激活图（地点、身体、面孔、文字相关子问题），涵盖所有 4 名被试。
- 消融/补充实验：附录中汇报了 $L$ 空间的检索准确率，以及更多被试的重建图和脑图。
- 评价：实验覆盖多个被试且被试间结果一致，对比公平，所设上界模型（Int to CLIP）合理，指标多样，能够充分支撑论文结论。

## 6. 论文的主要结论与发现
- 引入语义瓶颈后的可解释模型（Int-BD）在重建指标上仅比原始模型小幅下降（例如 CLIP 相似度平均下降约 4%），但获得了完全的线性可解释性。
- 权值矩阵 $A$ 可视化的体素级概念图与经典的面孔、身体、地点、文字选择性区域高度吻合，验证了方法的神经科学有效性。
- 激活的分布模式（而非仅定位）携带了丰富的子概念语义信息，例如“跑步”与“跳舞”在同一身体区内呈现不同的强弱分布。
- 结果表明，fMRI 尺度下大脑的语义表征可以用类似 CLIP 的线性语义空间逼近，且可通过显式的问题分解得到透明解读。

## 7. 优点
- **可解释性内生**：将可解释性植入模型结构（语义瓶颈）而非事后解释，权重矩阵天然具有神经科学意义。
- **性能-可解释性平衡**：在保持强重建能力的同时，大幅提升透明度和脑区级洞察，展示了可解释性不必然以严重牺牲性能为代价。
- **自动化概念构建**：利用 GPT‑4o 和 BLIP‑2 自动生成并标注问题集，使方法具有规模化和可扩展性。
- **架构无关性**：该方法适用于任何将 fMRI 映射到 CLIP 或相近嵌入的解码流水线，实用性较强。

## 8. 不足与局限
- 重建的低层指标（如 PixCorr、SSIM）下降相对明显，因问题集主要侧重于语义内容，对几何布局、精细结构的约束不足。
- 可解释性依赖于问题集的质量和覆盖度，当前 214 个问题虽经人工筛选，仍可能遗漏部分视觉概念（尤其是纯结构属性）。
- 整个流水线的概念提取受限于 BLIP-2 的视觉问答能力，错误回答会传播到概念空间和下游重建。
- 仅在 NSD 数据集（静态图像）上验证，尚未扩展到其他模态（如视频、语言、听觉）或想象任务。
- 未探索更深层次的层次化或组合式概念表示，当前所有问题平铺且相互独立。

## 9. 研究价值与阅读建议
（此部分已按要求作为第一节输出，此处略去重复）
（完）
