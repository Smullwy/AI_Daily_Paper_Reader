---
title: CVPR26 SemVideo_ Reconstructs What You Watch from Brain Activity via Hierarchical Semantic Guidance
title_zh: CVPR26 SemVideo：通过层次化语义引导从大脑活动重建你所观看的内容
authors: Minghan Yang; Lan Yang; Ke Li; Honggang Zhang; Kaiyue Pang; Yi-Zhe Song
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-190659664132-cvpr26-semvideo_-reconstructs-what-you-watch-from-brain-activity-via.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 通过语义对齐解码器将fMRI信号与CLIP风格嵌入对齐
tldr: 从fMRI重建视频面临对象跨帧不一致和时序不连贯的挑战。本文提出SemVideo框架，通过层级语义引导解决该问题。核心模块SemMiner提取静态锚点、运动叙事和整体摘要三层语义线索，结合语义对齐解码器、运动适配解码器和条件视频渲染器，在CC2017和HCP数据集上实现了最优的语义对齐和时序一致性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-190659664132-cvpr26-semvideo_-reconstructs-what-you-watch-from-brain-activity-via/fig-001.webp\", \"caption\": \"\", \"page\": 7, \"index\": 1, \"width\": 472, \"height\": 464}, {\"url\": \"assets/figures/local-pdf/local-20260606-190659664132-cvpr26-semvideo_-reconstructs-what-you-watch-from-brain-activity-via/fig-002.webp\", \"caption\": \"\", \"page\": 7, \"index\": 2, \"width\": 491, \"height\": 469}, {\"url\": \"assets/figures/local-pdf/local-20260606-190659664132-cvpr26-semvideo_-reconstructs-what-you-watch-from-brain-activity-via/fig-003.webp\", \"caption\": \"\", \"page\": 8, \"index\": 3, \"width\": 765, \"height\": 475}, {\"url\": \"assets/figures/local-pdf/local-20260606-190659664132-cvpr26-semvideo_-reconstructs-what-you-watch-from-brain-activity-via/fig-004.webp\", \"caption\": \"\", \"page\": 8, \"index\": 4, \"width\": 765, \"height\": 475}, {\"url\": \"assets/figures/local-pdf/local-20260606-190659664132-cvpr26-semvideo_-reconstructs-what-you-watch-from-brain-activity-via/fig-005.webp\", \"caption\": \"\", \"page\": 8, \"index\": 5, \"width\": 765, \"height\": 475}]"
motivation: 现有fMRI视频重建方法存在显著的对象外观不一致和时序不连贯问题，阻碍了动态视觉体验的准确重建。
method: 提出SemVideo框架，利用层级语义引导模块SemMiner提取三层语义线索，并通过语义对齐解码器、运动适配解码器和条件视频渲染器实现视频重建。
result: 在CC2017和HCP数据集上，SemVideo在语义对齐和时序一致性上达到最优性能，刷新了fMRI视频重建的最高水平。
conclusion: SemVideo通过层级语义引导有效解决了fMRI视频重建中的对象不一致和时序问题，推动了脑活动解码技术的发展。
---

## 摘要
从大脑活动中重建动态视觉体验为探索视觉感知的神经机制提供了一条途径。虽然基于fMRI的图像重建已取得显著进展，但将这一成功扩展到视频重建仍是一项挑战。当前的fMRI到视频重建方法存在两个主要缺陷：(i) 显著物体在帧间的视觉表征不一致，导致外观不匹配；(ii) 时间连贯性差，造成运动错位或帧间突变。为解决这些局限性，我们提出了SemVideo，一个由层次化语义信息引导的fMRI到视频重建框架。SemVideo的核心是SemMiner，一个层次化引导模块，从视频刺激中构建三级语义线索：静态锚点描述、运动导向叙事和整体概要。利用这种语义引导，SemVideo包含三个关键组件：一个语义对齐解码器，将fMRI信号与源自SemMiner的CLIP风格嵌入对齐；一个运动适应解码器，采用新颖的三方注意力融合架构重建动态运动模式；以及一个条件视频渲染器，利用层次化语义引导进行视频重建。在CC2017和HCP数据集上的实验表明，SemVideo在语义对齐和时间连贯性方面取得了优越性能，为fMRI到视频重建设立了新的当前最优水平。代码公开于 https://github.com/yang-minghan/SemVideo。

## Abstract
Reconstructing dynamic visual experiences from brain ac- tivity provides an avenue for exploring the neural mecha- nisms of visual perception. While progress in fMRI-based image reconstruction has been notable, extending this suc- cess to video reconstruction remains a challenge. Cur- rent fMRI-to-video reconstruction approaches encounter two major shortcomings: (i) inconsistent visual represen- tations of salient objects across frames, leading to appear- ance mismatches; (ii) poor temporal coherence, resulting in motion misalignment or abrupt frame transitions. To ad- dress these limitations, we introduce SemVideo, a fMRI-to- video reconstruction framework guided by hierarchical se- mantic information. At the core of SemVideo is SemMiner, a hierarchical guidance module that constructs three lev- els of semantic cues from the video stimulus: static anchor descriptions, motion-oriented narratives, and holistic sum- maries. Leveraging this semantic guidance, SemVideo com- prises three key components: a Semantic Alignment De- coder that aligns fMRI signals with CLIP-style embeddings derived from SemMiner, a Motion Adaptation Decoder that reconstructs dynamic motion patterns using a novel tripar- tite attention fusion architecture, and a Conditional Video Render that leverages hierarchical semantic guidance for video reconstruction. Experiments on the CC2017 and HCP datasets demonstrate that SemVideo achieves supe- rior performance in semantic alignment and temporal con- sistency, setting a new state-of-the-art in fMRI-to-video re- construction. The code is publicly available at https: //github.com/yang-minghan/SemVideo.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

- **关联方向**：与读者的研究方向（brain decoding, fMRI representation, neural prior）高度相关。本文可视为“从语义表征到视频解码”的典型前沿工作。
- **启发与意义**：论文提出“多层级语义引导解码”思路，说明仅靠低层次视觉特征/单层语义无法保证视频一致性，这为研究更稳健的脑编码/解码表征带来启发。
- **可借鉴点**：可借鉴的点包括三方注意力融合（空间+时间+语义交叉注意力）及“锚点+运动+整体”的层次化约束，有助于在脑部重建任务中引入结构化先验。
- **阅读建议**：建议重点阅读第三节方法论中的 SAD/MAD 结构和训练目标，以及第四节的消融与神经可解释性分析，快速抓住“语义引导解码”的工程化路径。

---

## 1. 论文的核心问题与整体含义

- **核心问题**：从缓慢、低时间分辨率的 fMRI 信号重建连续的动态视频，因其血流动力学响应滞后等问题，导致重建视频中出现两大问题：
  1. **外观不匹配**：跨帧的显著对象表征不一致。
  2. **时间连贯性差**：运动错位、帧突变。
- **整体含义**：论文旨在通过“层次化语义引导”进行视频重建，让解码过程更接近人脑对关键片段和动作语义的感知方式，从而提升重建的视觉一致性。

---

## 2. 论文提出的方法论

- **核心思想**：人脑并不逐像素处理所有视频帧，而是对关键帧和语义形成显著响应。因此可以用多层次语义描述模拟这一过程，并以此引导 fMRI 解码和视频生成。
- **关键技术细节**
  1. **SemMiner（语义挖掘模块）**  
     使用多模态大语言模型（MLLM $\Psi$）将视频刺激 $V$ 分解为三层语义描述：
     - **锚点描述 $C_{\text{anchor}}$**：首帧静态内容，作为“语义锚”。
     - **运动叙事 $C_{\text{motion}}$**：细粒度动态线索，强调动作和变化。
     - **整体概要 $C_{\text{holi}}$**：融合静态与运动的全局叙事的短摘要。  
     生成过程为：
     $$C_{\text{basic}} = \Psi(P_{\text{basic}}, V)$$  
     $$C_L = \Psi(P_L, C_{\text{basic}}, V), \; L \in \{\text{anchor, motion, holi}\}$$
  2. **语义对齐解码器（SAD）**  
     将异构的 fMRI 信号 $X$ 映射到 CLIP 文本特征空间，预测语义嵌入 $\hat{Z}(C_L)$。采用“受试者专属投影层”+“共享编码器”+“Refineformer（因果Transformer）”结构，损失函数包含：
     $$L_{\text{SAD}} = \lambda_{\text{refine}} L_{\text{refine}} + \lambda_{\text{SoftCLIP}} L_{\text{SoftCLIP}} + L_{\text{MSE}}$$
  3. **运动适配解码器（MAD）**  
     利用 fMRI 和预测的运动语义 $\hat{Z}(C_{\text{motion}})$ 生成重建帧的运动潜变量序列 $\hat{E}(X)$。核心为**三方注意力融合**：
     - 空间自注意力（捕捉帧内结构）
     - 时间自注意力（建模帧间依赖）
     - 语义引导的交叉注意力（注入运动语义先验）
     最终输出由三种注意力输出加权求和得到。
  4. **条件视频渲染器（CVR）**  
     串联生成流程：用解码的帧嵌入生成模糊运动帧序列，用锚点语义生成首帧，最后将锚点帧、运动序列、整体语义联合送入 Text-to-Video 扩散模型生成最终视频。

---

## 3. 实验设计

- **数据集与场景**
  - **CC2017**：包含 3 名受试者观看 23 部高清自然电影片段（3T MRI，TR=2s），训练/测试样本分离好，具代表性。
  - **HCP 7T**：选用 3 名受试者的子集，经标准流水线预处理。
- **Benchmark 与对比方法**
  - 与过往经典及 SOTA 方法对比，包括：Nishimoto (2011)、Wen (2017)、Kupershmidt (2022)、f-CVGAN (2022)、Mind-video (2023)、NeuroClips (2025)、Mind-Animator (2025)、NEURONS (2025)。
- **评价指标**
  - 语义层面：2-way / 50-way 的帧级和视频级 top-1 检索率、VIFI 得分。
  - 像素层面：SSIM、PSNR、Hue-PCC。
  - 时空层面：CLIP-PCC（帧间连贯性）、EPE（光流误差）。

---

## 4. 资源与算力

- 论文未明确说明 GPU 型号与数量、训练总时长、参数规模等具体算力信息。只提到训练统一采用 AdamW 优化器，进行 100 轮训练，并通过预训练所有受试者后微调单一受试者（可推断不应是极端重算力需求）。
- 对于希望计算成本的读者，文中缺乏精确算力细节。

---

## 5. 实验数量与充分性

- **实验规模**
  - 两个公开数据集上进行全面评测。
  - 主实验对比了近 8 种现有方法，涉及 10 种指标。
  - 消融实验：系统移除三个语义成分（$C_{\text{anchor}}$、$C_{\text{holi}}$、$C_{\text{motion}}$），验证各自作用。
  - 额外验证：通过 shuffle test 和光流误差增加量验证运动提升的真实来源。
  - 神经可解释性：使用 ROI（感兴趣区）可视化验证各语义模块对应的皮层区域。
- **充分性与公平性**
  - 实验设计相当充分，覆盖语义、像素、时空三个层面，显著性检验严谨（区分 p 值等级）。
  - 与多个 SOTA 的对比透明，评估指标广泛，公平性较好。

---

## 6. 论文的主要结论与发现

- SemVideo 在语义对齐和时间一致性上全面超越 SOTA，在 CC2017 上取得 8/10 指标最优。
- 层次化语义（锚点、运动、整体）缺一不可，特别是运动语义对像素层、时空层和语义层均有显著贡献。
- 运动解码确实来自 MAD 及运动语义指导，而非 T2V 先验（通过 shuffle 和光流实验印证）。
- 神经可解释性表明，锚点描述依赖高级视觉皮层，运动描述激活包括 MT/MST 甚至 V1 的运动相关区域，整体描述则整合多种模块。

---

## 7. 优点

- **方法创新性强**：首次将“多层级语义描述生成”与“fMRI 解码-视频扩散模型”结合，思路新颖。
- **三方注意力融合结构**：在运动解码中融合空间、时间和语义交叉注意力，设计分工明确。
- **评价与验证全面**：涵盖语义、像素、时空三类指标，并用消融、统计检验和神经可视化进行立体验证。
- **可解释性尝试**：通过 voxel 重要性呈现各模块对应脑区，增加认知神经科学层面的说服力。

---

## 8. 不足与局限

- **算力与资源隐晦**：缺少对 GPU、显存、训练时长等指标的报告，不易评估工程成本。
- **数据集规模与泛化性有限**：仅使用两个数据集（3 名受试者/数据集），跨受试者泛化能力仍需更大规模验证。
- **依赖外部大模型先验**：SemMiner 依赖多模态大型语言模型，在域迁移或闭源环境下会受限。
- **静默帧/静态外观风险**：运动描述侧重动作，若视频外观变化小但运动存在，可能更有利于动态情形，极静态场景降级尚不明确。
- **主观质量未评估**：未进行人为主观评分，不能完全排除低客观指标但人眼感知更好的可能性。

---

## 9.（完）
