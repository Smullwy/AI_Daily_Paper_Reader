---
title: ICLR26 Brain-IT_ Image Reconstruction from fMRI via Brain-Interaction Transformer
title_zh: ICLR26 Brain-IT：通过大脑交互 Transformer 从 fMRI 进行图像重建
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 利用跨被试共享的功能体素簇进行跨被试脑表征
tldr: 从fMRI重建人脑所见图像面临忠实性不足的挑战。本文提出Brain-IT，采用脑交互Transformer（BIT）在功能相似体素簇间进行交互，预测高级语义和低级结构特征引导扩散模型重建，显著提升图像忠实度，在视觉与客观指标上超越现有方法，且仅需1小时新被试数据即达与全数据训练相当的性能。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 2645, \"height\": 1802}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-002.webp\", \"caption\": \"\", \"page\": 4, \"index\": 2, \"width\": 3409, \"height\": 1485}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-003.webp\", \"caption\": \"\", \"page\": 5, \"index\": 3, \"width\": 4015, \"height\": 1668}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 2824, \"height\": 1475}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-005.webp\", \"caption\": \"\", \"page\": 8, \"index\": 5, \"width\": 3203, \"height\": 1718}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-006.webp\", \"caption\": \"\", \"page\": 9, \"index\": 6, \"width\": 2002, \"height\": 1177}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-007.webp\", \"caption\": \"\", \"page\": 16, \"index\": 7, \"width\": 2574, \"height\": 998}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-008.webp\", \"caption\": \"\", \"page\": 19, \"index\": 8, \"width\": 2100, \"height\": 3691}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-009.webp\", \"caption\": \"\", \"page\": 20, \"index\": 9, \"width\": 2118, \"height\": 3682}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-010.webp\", \"caption\": \"\", \"page\": 21, \"index\": 10, \"width\": 2112, \"height\": 3690}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-011.webp\", \"caption\": \"\", \"page\": 22, \"index\": 11, \"width\": 2122, \"height\": 3695}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-012.webp\", \"caption\": \"\", \"page\": 23, \"index\": 12, \"width\": 2452, \"height\": 3290}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-013.webp\", \"caption\": \"\", \"page\": 24, \"index\": 13, \"width\": 2452, \"height\": 3290}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-014.webp\", \"caption\": \"\", \"page\": 25, \"index\": 14, \"width\": 2452, \"height\": 3290}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-015.webp\", \"caption\": \"\", \"page\": 26, \"index\": 15, \"width\": 2452, \"height\": 3290}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-016.webp\", \"caption\": \"\", \"page\": 27, \"index\": 16, \"width\": 2391, \"height\": 2865}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-017.webp\", \"caption\": \"\", \"page\": 28, \"index\": 17, \"width\": 2386, \"height\": 2863}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-018.webp\", \"caption\": \"\", \"page\": 30, \"index\": 18, \"width\": 2336, \"height\": 3050}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-019.webp\", \"caption\": \"\", \"page\": 31, \"index\": 19, \"width\": 1974, \"height\": 2878}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-020.webp\", \"caption\": \"\", \"page\": 32, \"index\": 20, \"width\": 2459, \"height\": 3156}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-021.webp\", \"caption\": \"\", \"page\": 33, \"index\": 21, \"width\": 2418, \"height\": 1644}, {\"url\": \"assets/figures/local-pdf/local-20260606-192548357783-iclr26-brain-it_-image-reconstruction-from-fmri-via-brain-interactio/fig-022.webp\", \"caption\": \"\", \"page\": 33, \"index\": 22, \"width\": 3088, \"height\": 1105}]"
motivation: 当前fMRI图像重建方法缺乏对实际所见图像的忠实性。
method: 提出Brain-IT，利用脑交互Transformer在共享的功能体素簇间交互，预测局部语义和结构特征引导扩散模型。
result: 重建结果在视觉和客观指标上超越SOTA，且用1小时新被试数据即可匹敌全数据训练的方法。
conclusion: 通过脑启发的交互设计与双特征引导，Brain-IT实现了高保真、数据高效的大脑图像重建。
---

## 摘要
从功能磁共振成像（fMRI）脑记录中重建人们所看到的图像，为探索人类大脑提供了一种非侵入性的窗口。尽管扩散模型带来了近期进展，但现有方法往往缺乏对实际所见图像的忠实度。我们提出了“Brain-IT”，一种受大脑启发的方法，通过大脑交互 Transformer（BIT）来解决这一挑战，允许功能相似的大脑体素簇之间进行有效交互。这些功能簇为所有受试者所共享，作为整合大脑内和跨大脑信息的构建模块。所有模型组件由所有簇和受试者共享，从而能够在有限数据量下进行高效训练。为了指导图像重建，BIT预测两种互补的局部块级图像特征：（i）高层语义特征，引导扩散模型朝向图像的正确语义内容；（ii）低层结构特征，帮助用正确的粗略布局初始化扩散过程。BIT的设计使得信息能够从大脑体素簇直接流向局部图像特征。通过这些原理，我们的方法实现了从fMRI重建图像，忠实地再现了所见图像，并在视觉和标准客观指标上超越了当前最先进的方法。此外，仅使用新受试者的1小时fMRI数据，我们就能取得与现有方法在全40小时记录上训练相当的结果。项目页面见：https://amitzalcher.github.io/Brain-IT/。

## Abstract
Reconstructing images seen by people from their fMRI brain recordings provides a non-invasive window into the human brain. Despite recent progress enabled by diffusion models, current methods often lack faithfulness to the actual seen im- ages. We present “Brain-IT”, a brain-inspired approach that addresses this chal- lenge through a Brain Interaction Transformer (BIT), allowing effective inter- actions between clusters of functionally-similar brain-voxels. These functional- clusters are shared by all subjects, serving as building blocks for integrating in- formation both within and across brains. All model components are shared by all clusters & subjects, allowing efficient training with a limited amount of data. To guide the image reconstruction, BIT predicts two complementary localized patch- level image features: (i) high-level semantic features which steer the diffusion model toward the correct semantic content of the image; and (ii) low-level struc- tural features which help to initialize the diffusion process with the correct coarse layout of the image. BIT’s design enables direct flow of information from brain- voxel clusters to localized image features. Through these principles, our method achieves image reconstructions from fMRI that faithfully reconstruct the seen im- ages, and surpass current SotA approaches both visually and by standard objective metrics. Moreover, with only 1-hour of fMRI data from a new subject, we achieve results comparable to current methods trained on full 40-hour recordings. Project page can be found in: https://amitzalcher.github.io/Brain-IT/.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文聚焦 fMRI 到图像的视觉解码，利用共享功能体素簇实现跨被试脑表征对齐与高保真重建，与 **brain decoding、fMRI representation、representation alignment** 高度相关。
- **启发与意义**：论文提出以功能簇作为跨个体信息整合的“原子单元”，为神经先验融合到解码模型提供了新思路，也为低数据量迁移学习提供了有力验证。
- **可借鉴点**：可借鉴 Brain‑Interaction Transformer（BIT）中 voxel/cluster embedding 的双层设计，以及语义‑结构双分支 + DIP 的低层布局重建策略，用于其他多视图、多模态的脑信号解码任务。
- **阅读建议**：适合研究脑解码、神经表征对齐与迁移学习的研究者细读，重点把握共享簇的构建方式与双特征引导扩散的联合机制。

## 1. 论文的核心问题与整体含义
- **核心问题**：现有基于扩散模型的 fMRI‑to‑image 重建方法虽能生成视觉上合理的图像，但往往缺乏对受试者实际所见图像的忠实度，存在结构偏差、颜色错误、语义丢失等问题。
- **研究动机**：视觉信息在大脑中分布于多个功能区域，现有方法多将全脑体素压缩为单一的全局嵌入，忽略了脑组织的功能分离与空间组织特性；同时，fMRI 数据稀缺，需要更高效的跨被试信息利用方式。
- **整体含义**：论文提出“Brain‑IT”框架，受脑组织原理启发，通过功能相似的脑体素簇之间的交互，直接预测局部图像特征，并采用双分支（语义 + 结构）引导扩散模型，旨在实现更忠实于原始刺激的图像重建，且仅需极少的新被试数据即可达到接近全数据训练的性能。

## 2. 论文提出的方法论
- **整体框架**：Brain‑IT 包含两大阶段：图像特征预测（由 BIT 完成）与图像重建（语义分支 + 低层分支），最终通过双分支生成实现融合。
- **核心组件——Brain Interaction Transformer (BIT)**：
  - **Voxel‑to‑Cluster (V2C) 映射**：利用预训练脑编码器获得的体素嵌入，通过高斯混合模型（GMM）将所有被试的体素聚类成 128 个功能簇，簇为跨被试共享。
  - **Brain Tokenizer**：对每个体素，用可学习的 voxel embedding 调幅其激活值，再基于 V2C 映射和可学习的 cluster embedding，通过单头图注意力将每个簇内的信息聚合为一个 Brain Token。
  - **Cross‑Transformer**：通过自注意力层建模脑 Token 间的交互，再用交叉注意力将信息从脑 Token 映射到可学习的 query token，每个 query token 对应一个局部图像特征位置，实现功能簇到局部图像特征的直接信息流。
  - 两个独立的 BIT 分别预测：**(i) 高层语义特征**（CLIP 空间 token）、**(ii) 低层结构特征**（VGG 多层特征），用作后续重建的引导。
- **图像重建分支**：
  - **语义分支**：BIT 预测的 CLIP 空间 token 作为扩散模型（基于 SDXL 的 unCLIP 架构）的条件，训练分两步——先对齐 CLIP 嵌入（L2 损失），再联合训练 BIT 与扩散模型（标准扩散损失）。
  - **低层分支**：BIT 预测的多层 VGG 特征（使用 InfoNCE 损失训练），通过 Deep Image Prior（DIP）网络反演出粗细的图像布局（L2 损失最小化预测 VGG 特征与生成的图像特征之差）。
  - **双分支生成**：在推理时，用低层分支输出的粗略图像经噪声处理后初始化扩散过程的隐变量，再在语义条件下由扩散模型逐步去噪，结合结构保真度与语义逼真度。
- **训练数据增强**：利用外部图像（COCO 无标签部分 ~120k 张）通过预训练的 Image‑to‑fMRI Encoder 预测伪 fMRI 响应，扩大训练对。
- **迁移学习**：新被试仅需优化其对应的体素嵌入（冻结其余所有组件），配合少量真实数据与伪数据，即可高效适配。

## 3. 实验设计
- **数据集与基准**：主要使用 Natural Scenes Dataset (NSD)（7‑Tesla fMRI，8 位被试，~73k 图像‑fMRI 对，其中 1000 张共享图像作为测试集）。体素选取遵循 Gifford et al. (2023) 预处理的 ~40k 视觉相关皮层体素。还使用 NSD‑Synthetic 评估分布外泛化。
- **评估指标**：低层指标（PixCorr、灰度 SSIM）、高层识别精度指标（AlexNet(2/5)、Inception、CLIP 的两路识别准确率）、距离指标（EfficientNet‑B1, SwAV‑ResNet50）。另补充 Color‑SSIM、LPIPS、1000‑way CLIP 检索等。
- **对比方法**：与 MindEye (2023)、Brain‑Diffuser、Takagi & Nishimoto (2023)、DREAM、UMBRAE、NeuroVLA、MindBridge、NeuroPictor、MindEye2、MindTuner 等共 10 种 SOTA 方法进行全面比较。
- **消融与分析实验**：
  - 外部图像增强的影响（有无额外伪数据）。
  - 功能聚类 vs. 解剖聚类（基于 3D 坐标、Schaefer 分区）。
  - 聚簇数量（8～512）的影响。
  - 语义分支与低层分支的单独贡献及组合效果。
  - 跨被试迁移学习效果（1 小时、30 分钟、15 分钟数据量）。
  - 脑 Token 的空间与语义选择性可视化。
- **训练细节**：低层分支使用 InfoNCE 损失，语义分支先用 L2 损失对齐 CLIP，再联合扩散损失训练；均使用 AdamW 优化器，采用 warmup 和 ReduceLROnPlateau 策略，混合精度训练。

## 4. 资源与算力
- 论文明确列出了训练所用资源：
  - **GPU 型号**：NVIDIA H100。
  - **训练耗时**：低层分支约 12 小时（1 块 H100）；语义分支第一阶段约 8 小时（1 块 H100），第二阶段约 10 小时（4 块 H100）。总计约 30 小时 H100 量级的计算。
- DIP 反演在推理时执行，每张图像 2000 次迭代，没有给出确切时间，但属于轻量级。

## 5. 实验数量与充分性
- **实验组数充足**：包含全数据量对比（4 位被试平均）、迁移学习对比（3 种数据量级别）、多个消融实验（外部数据、聚类方式、聚类数量、分支贡献）、附加分布外泛化测试以及脑 Token 可解释性分析。
- **比较公平性**：使用统一的 NSD 测试集（1000 共享图像），指标覆盖低层结构和高层语义，既有两路检索也有距离度量，并纳入已发表的基线结果；方法公开代码与模型承诺，可复现。
- **充分性评价**：实验设计全面，能够有效验证所提方法在重建质量、结构忠实度、语义精确度以及低数据迁移方面的优势，消融实验对该设计的各组件进行了充分的量化与定性分析，结论具有较高的可信度。

## 6. 论文的主要结论与发现
- Brain‑IT 在 40 小时全数据训练下，取得了所有对比方法中最优的低层与高层指标（PixCorr 0.386, SSIM 0.486, 高层识别也多数第一），视觉上更忠实于原始图像，能较好保留物体类别、空间位置、颜色和形状。
- 仅用新被试的 1 小时数据做迁移学习，Brain‑IT 的重建质量即与现有 SOTA 方法在 40 小时训练下的结果相当；甚至在 15 分钟数据下仍能产生有意义的重建，展现了极高的数据效率。
- 低层分支通过 BIT 预测 VGG 特征 + DIP 反演，能够准确恢复粗糙的图像布局与结构信息，弥补了单纯依赖扩散模型带来的结构失真。
- 功能簇共享与 BIT 设计使得跨被试信息整合更有效，注意力图分析显示脑 Token 展现出明显的对侧空间组织和语义选择性，具有神经科学解释性。

## 7. 优点
- **脑启发设计**：将功能相似的体素聚类为跨被试共享的“脑令牌”，并直接映射到局部图像特征，比传统的全脑压缩更符合脑组织原理，信息流动更直接。
- **双分支重建**：语义（CLIP）与结构（VGG + DIP）两条线相互补充，兼顾了图像的内容逼真度和空间布局忠实度。
- **极强的数据利用效率**：所有模型组件（除体素嵌入外）跨被试与跨簇共享，使得仅用极少新被试数据即可快速迁移，对实际应用中的成本控制极具意义。
- **全面的评估与可解释性**：不仅提供标准指标，还通过脑令牌的注意力图揭示了功能簇的空间与语义选择性，增强了模型的可解释性。
- **训练数据扩充策略**：利用预训练编码器为无标签图像生成伪 fMRI，有效缓解数据匮乏。

## 8. 不足与局限
- **重建仍非完美**：论文在附录中给出了失败案例，当语义和结构预测出现分歧时，重建可能丢失物件或产生错误内容，部分细粒度纹理和精确形状仍有瑕疵。
- **被试数量有限**：主要评估基于 4 名 NSD 被试，虽然该领域通用如此，但扩展到更多样的被试群体可能会有性能波动。
- **依赖预训练模型**：V2C 映射需要预训练的脑编码器（Beliy et al. 2024），BIT 与扩散模型也重度依赖 CLIP、VGG 等预训练视觉模型，泛化到全新领域可能存在偏移。
- **低层 DIP 推理速度**：虽然重建质量受益，但 DIP 逐图优化的方式会带来额外推理时间，可能限制实时应用。
- **仅限于视觉皮层面信号**：体素选择剔除了非视觉区域，未利用全脑信息，限制了重建中可能的多模态语义整合。
- **评价指标的饱和问题**：部分常用高层指标（如 2‑way 识别）已接近饱和，但使用 1000‑way 检索等指标仍显示出方法间的差距，说明原来的部分基准可能难以全面区分方法优劣。

## 9. 总结
Brain‑IT 通过脑交互 Transformer 与双分支重建，在 fMRI 图像重建任务上实现了显著的忠实度提升和极高效的数据迁移能力，展示了功能簇共享与局部特征预测的优势。虽然存在重建不完美和依赖预训练模型等限制，但整体设计严谨、实验全面，是 fMRI 解码领域的重要进步。

（完）
