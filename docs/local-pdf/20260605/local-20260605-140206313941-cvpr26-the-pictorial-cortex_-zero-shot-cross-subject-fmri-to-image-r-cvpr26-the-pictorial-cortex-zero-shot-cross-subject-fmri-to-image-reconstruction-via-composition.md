---
title: CVPR26 The Pictorial Cortex_ Zero-Shot Cross-Subject fMRI-to-Image Reconstruction via Compositional Latent Modeling
title_zh: CVPR26 视觉皮层：基于组合潜在建模的零样本跨被试fMRI-to-图像重建
authors: Jingyang Huo; Yikai Wang; Yanwei Fu; Jianfeng Feng
date: 2026-06-05
pdf: assets/local_pdfs/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 跨被试fMRI表征和零样本重建
tldr: 本文针对fMRI到图像重建中因个体差异导致的跨被试非单射难题，提出零样本跨被试设置并构建统一皮层表面数据集UniCortex-fMRI。核心模型Pictorial Cortex通过组合潜在建模，将神经活动分解为刺激、被试、数据集和试验等因子，在通用潜在空间中利用分解-组合模块和一致性正则化，聚合替代潜在指导扩散模型生成图像，显著提升了未见被试的重建质量。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-001.webp\", \"caption\": \"Fig. 1. fMRI responses of Subject 1 and Subject 2 under the same images: (a) raw fMRI responses on the cortical surface, (b) t-SNE of raw fMRI space, and (c) t-SNE of PictorialCortex stimulus-driven latent space. Colors indicate different images; star markers denote Subject 1, and upward triangles denote Subject 2. In the raw fMRI space, responses cluster by subject rather than image, while in the stimulus-driven latent space, the same images from different subjects are closely aligned.\", \"page\": 1, \"index\": 1, \"width\": 510, \"height\": 435}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-009.webp\", \"caption\": \"Fig. 2. Visualizations of fMRI responses from two subjects viewing the same visual stimuli. In each row, the first column shows the ground-truth image. Columns 2–4 display three fMRI responses from Subject 1 under repeated presentations of the same image , while columns 5–7 show the corresponding three fMRI responses from Subject 2. Full size is in Appendix.\", \"page\": 4, \"index\": 9, \"width\": 515, \"height\": 292}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-002.webp\", \"caption\": \"Fig. 4. Overview of the PictorialCortex framework. Given an fMRI signal arising from a visual stimulus, the observed cortical response is jointly influenced by stimulus-driven visual content as well as non-stimulus variability, including subject identity, dataset context, and trial-wise nuisance. (i) Top-left: Universal cortical representation learning maps fMRI inputs to a shared representational space, enabling reconstruction across subjects. (ii) Top-right: We first encode the fMRI input into a universal fMRI latent z using the universal encoder. Then, we perform compositional latent modeling via the proposed Latent Factorization– Composition Module (LFCM). The Factorizer decomposes each universal latent into a stimulus-driven code c and a nuisance code n, conditioned on subject and dataset codes. These components are recombined by the Compositor to synthesize surrogate fMRI latents z̃. A subsequent re-factorization step is trained to enforce consistency when re-encoding surrogate fMRI latents. Both the original stimulus-driven code c and the re-factorized stimulus-driven code c′ are aligned with the ground-truth visual target cgt, while the nuisance codes n and n′ are aligned to encourage consistency under re-factorization. (iii) Bottom: During inference, fMRI signals from unseen subjects are factorized, composited and re-factorized to produce a refined stimulus-driven code (c′te) using seen subject conditions, which conditions the diffusion model to generate the reconstructed image (Î).\", \"page\": 6, \"index\": 2, \"width\": 1067, \"height\": 420}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-008.webp\", \"caption\": \"Fig. 5. Overview of Paired Factorization and Reconstruction (PFR). Paired fMRI observations elicited by the same visual stimulus are encoded into a universal latent space and decomposed into stimulus-driven and nuisance components under subject and dataset conditioning. The stimulus-driven components from the paired samples are aligned to a shared visual target. To further strengthen disentanglement, a pairwise swapping operation exchanges the stimulus-driven codes between paired observations while preserving the other factors, and consistency is enforced by reconstructing the original fMRI signals both with and without swapping. Together, PFR constrains the stimulus-driven latent to be invariant across paired observations, while allowing non-stimulus factors to account for other variability.\", \"page\": 8, \"index\": 8, \"width\": 1066, \"height\": 310}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-005.webp\", \"caption\": \"Fig. 6. Qualitative comparison of our method and representative competitors. Rows 1–2: NSD; rows 3–4: BOLD5000; rows 5–6: NOD; rows 7–8: HCP-movie. For each stimulus, we show the ground-truth image, our reconstruction, and results from competing methods. Our approach consistently outperforms existing methods in the challenging zero-shot cross-subject setting.\", \"page\": 10, \"index\": 5, \"width\": 1074, \"height\": 752}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-004.webp\", \"caption\": \"Fig. 7. Ablation study on key components of our framework. Each subfigure corresponds to one evaluation metric. Light blue bars indicate results from ablation experiments, while dark blue bars show the full model.\", \"page\": 11, \"index\": 4, \"width\": 1076, \"height\": 450}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-003.webp\", \"caption\": \"TABLE I QUANTITATIVE COMPARISON OF ZERO-SHOT CROSS-SUBJECT BRAIN DECODING. BASELINE METHODS REPORT AVERAGED RESULTS, WHILE OURS REPORTS DATASET-WISE PERFORMANCE AND THE OVERALL AVERAGE.\", \"page\": 11, \"index\": 3, \"width\": 994, \"height\": 244}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-012.webp\", \"caption\": \"Fig. 8. Comparison of multi-dataset integration versus single-dataset training. Each panel shows one evaluation metric. Multi-dataset pretraining consistently improves most metrics, demonstrating more stable and generalizable stimulus representations.\", \"page\": 12, \"index\": 12, \"width\": 1076, \"height\": 361}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-013.webp\", \"caption\": \"Fig. 9. Impact of subject scale on cross-subject generalization. We show the relative performance of zero-shot fMRI-to-image reconstruction for different numbers of subjects, normalized by the full 209-subject performance (set to 1.0). Lines and points represent the mean across five random samplings; shaded regions indicate standard deviation.\", \"page\": 12, \"index\": 13, \"width\": 529, \"height\": 350}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-014.webp\", \"caption\": \"Fig. 10. Additional visualizations of zero-shot cross-subject fMRI-to-image reconstruction.\", \"page\": 16, \"index\": 14, \"width\": 1048, \"height\": 707}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-011.webp\", \"caption\": \"Fig. 11. Per-subject zero-shot cross-subject fMRI-to-image reconstruction results on unseen subjects from the HCP-Movie dataset. The first column shows the ground-truth image, while columns 2–11 present reconstructions for subjects 1–10, respectively.\", \"page\": 17, \"index\": 11, \"width\": 1076, \"height\": 723}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-010.webp\", \"caption\": \"Fig. 12. Visually Comparison on the reconstructed images from unseen and seen subjects by our model. In each group, the first column shows the ground-truth image, the second column presents the reconstruction from an unseen subject, and the third column shows the reconstruction from a seen subject.\", \"page\": 17, \"index\": 10, \"width\": 1054, \"height\": 465}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-007.webp\", \"caption\": \"Fig. 13. Visualizations for some failure cases.\", \"page\": 18, \"index\": 7, \"width\": 1064, \"height\": 378}, {\"url\": \"assets/figures/local-pdf/local-20260605-140206313941-cvpr26-the-pictorial-cortex_-zero-shot-cross-subject-fmri-to-image-r/fig-006.webp\", \"caption\": \"Fig. 14. Visualizations of fMRI responses from two subjects viewing the same visual stimuli. In each row, the first column shows the ground-truth image. Columns 2–4 display three fMRI responses from Subject 1 under repeated presentations of the same image , while columns 5–7 show the corresponding three fMRI responses from Subject 2.\", \"page\": 18, \"index\": 6, \"width\": 1052, \"height\": 593}]"
motivation: 解决fMRI跨被试差异导致重建困难，实现无需被试特定训练的零样本视觉解码。
method: 提出Pictorial Cortex，采用潜在因子分解-组合与一致性正则化，在通用皮层潜在空间建模变异性，并聚合替代潜在以驱动扩散模型。
result: 大量实验表明该方法大幅提升零样本跨被试视觉重建效果，验证了组合潜在建模与多数据集训练的有效性。
conclusion: Pictorial Cortex有效应对跨被试fMRI重建挑战，为无训练通用脑解码提供了新范式。
---

## 摘要
解码人脑活动中的视觉体验依然是神经科学、神经影像学与人工智能交叉领域的核心挑战。一个关键障碍是皮层反应的固有变异性：同一视觉刺激诱发的神经活动因个体和解剖、功能、认知及实验因素而异，这使得fMRI到图像的重建高度非单射。本文针对一个具有挑战性但实际意义重大的问题：零样本跨被试fMRI-to-图像重建（ZS-CS fMRI2Image），即无需特定被试训练，重建先前未见个体的视觉体验。为支持原则性评估，我们构建了一个统一皮层表面数据集——UniCortex-fMRI，汇集多个视觉刺激fMRI数据集，提供广泛被试与刺激覆盖。UniCortex-fMRI经标准化数据格式特别处理，使在零样本跨被试fMRI-to-图像重建场景中探索这一可能性成为可能。针对建模挑战，我们提出视觉皮层模型（PictorialCortex），采用组合潜在表述，在被试、数据集和试次相关变异下结构化刺激驱动的表征。PictorialCortex在通用皮层潜在空间中运作，通过潜在分解-组合模块实现该表述，并由配对分解与重分解一致性正则化增强。推理时，基于多个已见被试条件合成的替代潜在变量经聚合后，引导扩散模型为未见被试合成图像。大量实验表明，PictorialCortex显著改进了零样本跨被试视觉重建，突显了组合潜在建模与多数据集训练的优势。数据集、代码与模型将发布并共享给社区。关键词：神经解码、fMRI-to-图像、跨被试、扩散模型。

## Abstract
—Decoding visual experiences from human brain activity remains a central challenge at the intersection of neu- roscience, neuroimaging, and artificial intelligence. A critical obstacle is the inherent variability of cortical responses: neural activity elicited by the same visual stimulus differs across individuals and trials due to anatomical, functional, cognitive, and experimental factors, making fMRI-to-image reconstruction highly non-injective. In this paper, we tackle a challenging yet practically meaningful problem: zero-shot cross-subject fMRI-to- image reconstruction (ZS-CS fMRI2Image), where the visual ex- perience of a previously unseen individual must be reconstructed without subject-specific training. To enable principled evaluation, we present a unified cortical-surface dataset – UniCortex-fMRI, assembled from multiple visual-stimulus fMRI datasets to pro- vide broad coverage of subjects and stimuli. Our UniCortex-fMRI is particularly processed by standardized data formats to make it possible to explore this possibility in the zero-shot scenario of cross-subject fMRI-to-image reconstruction. To tackle the modeling challenge, we propose the Pictorial Cortex (Pictorial- Cortex), which models fMRI activity using a compositional latent formulation that structures stimulus-driven representations under subject-, dataset-, and trial-related variability. PictorialCortex operates in a universal cortical latent space and implements this formulation through a latent factorization–composition module, reinforced by paired factorization and re-factorizing consistency regularization. During inference, surrogate latents synthesized under multiple seen-subject conditions are aggregated to guide diffusion-based image synthesis for unseen subjects. Extensive experiments demonstrate that PictorialCortex substantially im- proves zero-shot cross-subject visual reconstruction, highlighting the benefits of compositional latent modeling and multi-dataset training. The dataset, code, and models will be released and shared to the community. Index Terms—Neural Decoding, fMRI-to-Image, Cross- Subject, Diffusion Model. I. INTRODUCTION D ECODING visual experiences from human brain activity remains a central challenge in neuroscience and a rapidly advancing frontier bridging neuroimaging, computer vision, and artificial intelligence. In recent years, this pursuit has Jingyang Huo and Jianfeng Feng are with the Institute of Science and Technology for Brain-inspired Intelligence (ISTBI), Fudan University. Jian- feng Fen, and Yanwei Fu are also with the School of Data Science

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与读者的研究方向“brain decoding”“fMRI representation”“representation alignment”高度匹配，直接针对 fMRI 信号的跨被试变异性建模与零样本视觉解码。
- **启发与意义**：论文揭示了 fMRI 到图像重建中“非刺激因子（被试、数据集、噪声）”的显式解耦对于实现零样本泛化的必要性，为构建被试无关的脑表征提供了新的建模范式。
- **可借鉴点**：通用皮层表面表征、潜在因子分解–组合模块（LFCM）以及配对分解–重分解一致性正则化，可迁移用于其他跨被试 fMRI 解码或对齐任务。
- **阅读建议**：深入阅读第三节数据集构建与第四节方法细节，尤其是成分化潜在公式、PFR 与 ReFCR 的设计，思考如何在其多因子解耦思路上适配读者的多视角约束或脑编码场景。

---

## 1. 论文的核心问题与整体含义
- **核心问题**：fMRI 到图像重建面临跨被试高度变异性，同一视觉刺激在不同被试、不同试验中产生的神经活动差异巨大，使重建任务严重“非单射”，导致现有模型难以泛化至新被试。
- **研究动机**：现有方法基本在“内被试”范式下工作，需为每个新被试重新训练或微调，这在实际神经影像学中成本极高且不现实。因此，亟需实现**零样本跨被试 fMRI-to-图像重建（ZS-CS fMRI2Image）**，即在无任何新被试特定训练的情况下，直接从未见被试的 fMRI 信号重建其视觉体验。
- **整体含义**：提出从“显式建模变异因素”的角度重构 fMRI 信号，而非将其简单视为噪声，通过将单一神经活动分解为**刺激驱动成分、被试成分、数据集成分和噪声成分**，实现稳定的跨被试视觉解码。

## 2. 方法论
### 2.1 总体框架：PictorialCortex
- 构建在统一的皮层表面数据集 UniCortex-fMRI 上。
- 分三阶段实现组合潜在建模： **(I) 通用皮层表征学习** → **(II) 组合潜在建模（LFCM）** → **(III) 推理与图像生成**。

### 2.2 关键技术细节
#### 阶段 I：通用皮层表征学习
- 使用大规模 UK Biobank 静息态 fMRI 数据预训练一个**高容量自编码器**（约 1.27B 参数），将原始皮层表面 fMRI ($S \in \mathbb{R}^{256×256}$) 映射为紧凑的通用潜在表示 $z = E_A(S)$。
- 自编码器重建损失：  
  $$
  \mathcal{L}_A = \|S - \tilde S\|_2^2
  $$
- 该步骤提供一个跨个体共享的解剖一致潜在空间，作为后续分解的基础。

#### 阶段 II：潜在分解–组合模块（LFCM）
- **因子分解器 (Factorizer)**：将通用潜在 $z$ 分解为两个部分：
  - 刺激驱动编码 $c$
  - 噪声编码 $n$
  分解过程受**数据集嵌入 $e_{data}$** 和**被试嵌入 $e_{sub}$** 条件制约：  
  $$(c, n) = \mathcal{F}(z \mid e_{sub}, e_{data})$$
- **组合器 (Compositor)**：重新组合 $c, n$ 与嵌入，生成替代 fMRI 潜在 $\tilde z$：  
  $$\tilde z = \mathcal{C}(c, n \mid e_{sub}, e_{data})$$
- **配对分解与重建 (PFR)**：
  - 利用相同视觉刺激的成对 fMRI 观测（同被试重复/不同被试），强制它们的刺激驱动编码 $c_i, c_j$ 对齐于同一视觉特征 $c_{gt}$（由 IP-Adapter 提取）：  
    $$\mathcal{L}_{align} = \sum_{k \in \{i,j\}} \|c_k - c_{gt}\|_2^2$$
  - 引入**成对互换操作**：将刺激驱动编码 $c_j$ 与另一观测的噪声、被试/数据集嵌入组合，再重构出原始 fMRI，实现彻底的解耦：
    $$\tilde z^{swap}_i = \mathcal{C}(c_j, n_i \mid e_{sub_i}, e_{data_i})$$
    $$\mathcal{L}_{rec}^{swap} = \sum \left( \|z_k - \tilde z_k^{swap}\|_2^2 + \|S_k - D_A(\tilde z_k^{swap})\|_2^2 \right)$$
- **重分解一致性正则化 (ReFCR)**：
  - 对组合器生成的替代潜在 $\tilde z$ 进行二次分解，要求得到的刺激编码 $c'$ 与视觉目标 $c_{gt}$ 一致，噪声编码 $n'$ 与原噪声 $n_{sg}$ 一致：  
    $$\mathcal{L}_{ReFCR} = \sum \left( \|c'_i - c_{gt_i}\|_2^2 + \|n'_i - n_{sg_i}\|_2^2 \right)$$
- 总训练目标：  
  $$\mathcal{L} = \mathcal{L}_{rec} + \mathcal{L}_{align} + \mathcal{L}_{ReFCR}$$

#### 阶段 III：推理（零样本跨被试）
- 对于未见被试的 fMRI 信号，先用默认被试嵌入得到初步分解：$(c_{te}, n_{te})$。
- 将 $c_{te}, n_{te}$ 与多个已见被试的嵌入组合，通过组合器生成多个替代潜在 $\tilde z^{(s)}$。
- 对这些替代潜在重新分解，得到多个被试条件刺激编码 $c^{(s)}_{te}$，并聚合平均得到最终规范表征 $c'_{te}$。
- 用 $c'_{te}$ 通过 IP-Adapter 扩散模型生成最终图像。

## 3. 实验设计
- **数据集**：自建 UniCortex-fMRI，整合 **NSD**（8 被试，自然场景）、**BOLD5000**（4 被试）、**NOD**（30 被试）和 **HCP-Movie**（177 被试，电影片段），共 219 被试，超 816k 对数据。所有数据预处理到统一 fsLR-32k 皮层表面并限制于视觉皮层 ROI。
- **Benchmark 设置**：零样本跨被试，训练/测试从未见被试划分（如 NSD 的 sub1、BOLD5000 的 sub1、NOD 的 sub1、HCP-Movie 的 sub1–10 从未见）。
- **对比方法**：NeuroPictor（前期工作）、MindBridge 和 MindEye2（均修改为使用统一皮层表面输入）。
- **评估指标**：
  - 低层：PixCorr, LPIPS, AlexNet(2)/(5) 分类准确率。
  - 高层：Inception 分类、CLIP 分类、EfficientNet-B1 特征距离、SwAV 特征距离。

## 4. 资源与算力
- 通用皮层自编码器：约 **1.27B** 参数，用 **8 × NVIDIA H100 GPU** 训练 25 万步，batch size 352。
- 组合潜在模块 LFCM：约 **195M** 参数，用 **2 × NVIDIA H200 GPU** 训练 5 万步，batch size 128。
- 推理时使用 IP-Adapter SDXL Plus 扩散模型，无额外训练算力。

## 5. 实验数量与充分性
- **定量对比实验**：在四个数据集上全面与三种方法比较，采用 8 个指标，报告了每个数据集及平均结果。
- **消融实验**：逐一移除关键模块（组合器、ReFCR、成对互换、数据集条件、被试条件、噪声因子）、去掉预训练自编码器、推理阶段的替代聚合和重缩放，充分验证各组件贡献。
- **被试规模分析**：随机采样不同数量被试（10~209），每规模重复 5 次，评估泛化性能与趋势。
- **多数据集增益实验**：对比单数据集训练与联合训练效果。
这些实验设计全面、客观，消融对比在同一条基线公平进行，效度较高。

## 6. 主要结论与发现
- PictorialCortex 在零样本跨被试设置下大幅超越同类方法，尤其在高级语义分类指标（Inception、CLIP）上优势显著。
- 组合潜在建模成功将同一图像的跨被试表征拉近（t-SNE 可视化验证），验证了显式分解刺激、被试、数据集、噪声因子的有效性。
- 多数据集联合训练与更多被试数量可显著提升模型泛化，表明丰富的被试多样性与大尺度表示学习对跨被试解码至关重要。

## 7. 优点
- **首创零样本跨被试 fMRI-to-图像重建**的标准化数据集与评估基准，填补了领域空白。
- **成分化解耦范式**从根源上解决个体变异问题，结构清晰、可解释性强，为脑解码研究提供新思路。
- **推理阶段的替代潜在聚合**实现了无训练的跨被试校准，巧妙地利用已见被试分布进行数据增强。
- 大规模自编码器预训练 + 组合建模的分阶段设计，使模型能复用通用皮层知识，保证方法可扩展性。

## 8. 不足与局限
- **对预训练自编码器的依赖**：底层通用潜在空间的质量直接影响后续分解；若自编码器本身存在偏差或压缩误差，将不可逆地影响重建。
- **低层像素指标略低**：在高分辨率的像素级相关（PixCorr）上，多数据集联合训练反而不如某些单数据集训练（可能因为泛化与领域适应的权衡），重建图像的清晰度和细粒度细节仍有提升空间。
- **语义混淆失败案例**：面对细粒度相似概念（如狗-松鼠、飞机-火车）容易出现类别替换错误，说明核心视觉特征的跨被试解耦仍不够精细。
- **局限于静态图像**：未涉及视频或时序视觉体验的解码。
- **数据来源偏重西方人群**：UK Biobank 和多数公开数据集以欧美人群为主，模型对其他族裔被试的零样本泛化能力未经验证。

## 9. 研究价值与阅读建议
（已在首节“研究价值与阅读建议”中覆盖）

（完）
