---
title: ICLR26 Moving Beyond Diffusion_ Hierarchy-to-Hierarchy Autoregression for fMRI-to-Image Reconstruction
title_zh: ICLR26 超越扩散模型：面向fMRI到图像重建的层级对层级自回归
authors: Unknown
date: 2026-06-05
pdf: assets/local_pdfs/local-20260605-141241025895-iclr26-moving-beyond-diffusion_-hierarchy-to-hierarchy-autoregressio.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: fMRI到CLIP层级对齐实现类人重建
tldr: 针对fMRI到图像重建，现有扩散方法将大脑活动映射为单一嵌入作为固定引导，丢失了层级神经信息。本文提出MindHier，一个基于尺度自回归的粗到细框架，包含分层fMRI编码器、层级对齐模块和尺度感知的神经引导策略，能够先生成全局语义再细化局部细节，模拟人类视觉感知。在NSD数据集上，该方法语义保真度更高，推理速度提升4.67倍，且结果更具确定性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260605-141241025895-iclr26-moving-beyond-diffusion_-hierarchy-to-hierarchy-autoregressio/fig-002.webp\", \"caption\": \"Figure 1: Comparison of fMRI-to-image reconstruction pipelines. (a) Prior diffusion-based methods utilize a fixed neural feature to guide the reconstruction. (b) In contrast, MindHier employs scaleaware guidance, leveraging hierarchical neural features to first establish a low-resolution overview (“Forest”) before progressively refining local details (“Trees”) at higher resolutions.\", \"page\": 2, \"index\": 2, \"width\": 826, \"height\": 200}, {\"url\": \"assets/figures/local-pdf/local-20260605-141241025895-iclr26-moving-beyond-diffusion_-hierarchy-to-hierarchy-autoregressio/fig-005.webp\", \"caption\": \"Figure 2: Overview of the two-stage training pipeline of MindHier. (a) Stage 1: Hierarchy-toHierarchy Alignment. A hierarchical fMRI encoder (composed of M cascaded blocks) is trained to map fMRI signals to a feature hierarchy in CLIP space. This mapping is learned by aligning the encoder’s outputs with corresponding intermediate features from a frozen CLIP vision encoder using a cascaded MSE loss (LMSE (Eq. 1)). To ensure high-level semantic coherence, the terminal fMRI feature is further aligned within CLIP’s shared embedding space via a SoftCLIP loss (LSoftCLIP (Eq. 2)). (b) Stage 2: Scale-Aware Coarse-to-Fine Neural Guidance. A scale-wise autoregressive model is finetuned to generate images across K scales (coarse-to-fine), conditioned on features from the fixed fMRI encoder pretrained in Stage (a). In practice, an attention mask is used to selectively route features via cross attention, which directs the features for the coarse view to attend to the initial scale and the features for finer details to guide subsequent scales. For illustration, a simplified case with block count M=2, fMRI feature dimension CfMRI=2, and scale count K=2 is shown.\", \"page\": 4, \"index\": 5, \"width\": 826, \"height\": 325}, {\"url\": \"assets/figures/local-pdf/local-20260605-141241025895-iclr26-moving-beyond-diffusion_-hierarchy-to-hierarchy-autoregressio/fig-001.webp\", \"caption\": \"Table 1: Quantitative performance comparison on the new NSD test set (Allen et al., 2022). The best and second best results are highlighted in bold and underlined respectively. The Wall-clock inference time for one image is reported. †: an auxiliary low-level feature is used.\", \"page\": 6, \"index\": 1, \"width\": 824, \"height\": 204}, {\"url\": \"assets/figures/local-pdf/local-20260605-141241025895-iclr26-moving-beyond-diffusion_-hierarchy-to-hierarchy-autoregressio/fig-003.webp\", \"caption\": \"Figure 3: Qualitative comparison of fMRI-to-image reconstructions. The stimuli include a diverse range of classes, from animals and objects to complex indoor and outdoor scenes. All data shown is from Subject 1.\", \"page\": 7, \"index\": 3, \"width\": 414, \"height\": 352}, {\"url\": \"assets/figures/local-pdf/local-20260605-141241025895-iclr26-moving-beyond-diffusion_-hierarchy-to-hierarchy-autoregressio/fig-004.webp\", \"caption\": \"Figure 5: Qualitative results of brain grounding. For visualization, a bounding box generated from each reconstruction is overlaid on the original visual stimulus, highlighting the precise localization of the target.\", \"page\": 8, \"index\": 4, \"width\": 416, \"height\": 337}]"
motivation: 现有扩散方法使用静态单一嵌入作为引导，未能利用fMRI信号中的层级信息，与图像重建各阶段的需求不匹配。
method: 提出MindHier框架，利用分层fMRI编码器提取多层级嵌入，通过层级对齐匹配CLIP特征，并采用尺度感知的粗到细引导注入自回归生成过程。
result: 在NSD数据集上，MindHier在语义保真度上优于扩散基线，推理速度加快4.67倍，且输出更具确定性。
conclusion: MindHier通过层级自回归实现了与人类视觉感知一致的粗到细重建，为fMRI到图像生成提供了高效且认知对齐的替代方案。
---

## 摘要
从fMRI信号中重建视觉刺激是连接机器学习与神经科学的核心挑战。近期基于扩散模型的方法通常将fMRI活动映射到单一神经嵌入，并将其作为整个生成过程中的静态引导。然而，这种固定引导会破坏层级神经信息，且与图像重建的阶段性需求不匹配。为此，我们提出了MindHier，一个基于尺度自回归建模的从粗到细的fMRI到图像重建框架。MindHier包含三个组件：层级fMRI编码器，用于提取多层次神经嵌入；层级对层级对齐方案，以强制实现与CLIP特征的逐层对应；以及尺度感知的由粗到细神经引导策略，在匹配的尺度上将嵌入注入自回归过程。这些设计使MindHier能够执行层次化重建，先合成全局语义再细化局部细节，类似于人类视觉感知，从而成为一种高效且认知对齐的替代扩散模型的方法。在NSD数据集上的大量实验表明，MindHier取得了更优的语义保真度，推理速度提高了4.67倍，且结果比基于扩散模型的基线更具确定性。

## Abstract
Reconstructing visual stimuli from fMRI signals is a central challenge bridg- ing machine learning and neuroscience. Recent diffusion-based methods typi- cally map fMRI activity to a single neural embedding, using it as static guidance throughout the entire generation process. However, this fixed guidance collapses hierarchical neural information and is misaligned with the stage-dependent de- mands of image reconstruction. In response, we propose MindHier, a coarse-to- fine fMRI-to-image reconstruction framework built on scale-wise autoregressive modeling. MindHier introduces three components: a Hierarchical fMRI Encoder to extract multi-level neural embeddings, a Hierarchy-to-Hierarchy Alignment scheme to enforce layer-wise correspondence with CLIP features, and a Scale- Aware Coarse-to-Fine Neural Guidance strategy to inject these embeddings into autoregression at matching scales. These designs make MindHier an efficient and cognitively aligned alternative to diffusion-based methods by enabling a hierar- chical reconstruction process that synthesizes global semantics before refining lo- cal details, akin to human visual perception. Extensive experiments on the NSD dataset show that MindHier achieves superior semantic fidelity, 4.67× faster in- ference, and more deterministic results than the diffusion-based baselines.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向：** 本文与“brain decoding”、“representation alignment”及“neural prior”高度相关，直接探索了fMRI神经信号如何有效解码为视觉刺激。
- **启发与意义：** 论文的核心启发在于揭示了静态神经嵌入与动态图像生成过程间的根本性失配，并提出用层级化神经先验应对生成不同阶段的需求，为由认知理论驱动脑解码模型设计提供了新范式。
- **可借鉴点：** 最直接的可借鉴技术是“层级对层级对齐”和“尺度感知引导”策略，可将多模态预训练模型（如CLIP）的内部层级知识蒸馏到专门的神经编码器中，再按生成阶段动态配置而非简单拼接。
- **阅读建议：** 建议重点阅读方法论部分（§3）的层级对齐和引导设计，以及诊断实验（§4.4），它们清晰地展示了各关键组件有效性的因果证据，而消融实验的设计思路尤其值得参考。

## 1. 论文的核心问题与整体含义
- **核心问题：** 现有基于扩散模型的fMRI到图像重建方法，将大脑活动信号压缩为单一固定的神经嵌入，作为整个迭代去噪生成过程的静态引导。这造成了两个根本性问题：
  1.  **信息坍塌：** fMRI信号本身是层级化的，不同脑区编码了从全局语义到局部细节的多级信息，单一嵌入无法有效利用这种丰富性。
  2.  **阶段失配：** 图像生成是动态的，早期阶段需要全局语义约束（“森林”），后期阶段则需求精确的结构与纹理线索（“树木”）。静态引导无法满足这种阶段性需求。
- **整体含义：** 本文旨在超越扩散范式，提出一种认知对齐、高效且更具确定性的新框架，通过层级化和阶段化的方式利用神经信号，从粗到细地重建视觉刺激，模拟人类“先见森林，再见树木”的感知原理。

## 2. 论文提出的方法论
**核心思想：** 将fMRI到图像重建重新定义为“从粗到细的尺度自回归”问题，使用层级化的fMRI特征在生成的不同尺度上提供动态引导。

**关键技术细节与流程（MindHier框架）：**
- **组件一：层级fMRI编码器**
  - 采用一个由 $M$ 个级联Transformer块构成的统一编码器，将fMRI信号转换为一组层级化的特征嵌入 $\{e_1, ..., e_M\}$。设计原理源于ViT中浅层提取局部特征、深层聚合全局信息的特性，让每个块的输出代表不同抽象层级。
- **组件二：层级对层级对齐（用于训练编码器）**
  - **结构化对齐：** 使用级联的均方误差损失 $\mathcal{L}_{MSE}$ 将编码器各块的输出 $e_m$ 与预训练CLIP视觉编码器的对应层输出进行强制对齐，以保留从纹理到物体部分的层次化视觉感知。损失为：$$\mathcal{L}_{MSE} = \sum_{m=1}^{M} \|\ell_2(e_m) - \ell_2(v_{g_m})\|_2^2$$
  - **语义级对齐：** 补充一个SoftCLIP对比损失 $\mathcal{L}_{\text{SoftCLIP}}$，将编码器最深层的输出 $e_M$ 与CLIP空间中的视觉及文本特征进行对齐，为整体重建提供一个全局语义锚点。
- **组件三：尺度感知的从粗到细神经引导（用于图像重建）**
  - 基于尺度自回归模型，图像被量化为 $K$ 个不同分辨率的token图 $R = \{r_1, ..., r_K\}$，自回归似然为：$$p(R|E) = \prod_{k=1}^{K} p(r_k | r_{<k}, s_k)$$
  - **播种“森林”（k=1）：** 在低分辨率初始阶段，利用代表最抽象语义的 $e_M$ 作为特殊的起始token $[S]$，建立全局布局。
  - **细化“树木”（$1 < k \leq K$）：** 在后续更高分辨率的尺度中，通过多头交叉注意力，动态注入来自编码器较前层、包含细节信息的特征 $s_k = e_{h_k}$。特征索引 $h_k$ 定义为 $h_k = M - \lfloor M(k-1)/K \rfloor$，实现了从深层（语义）到浅层（细节）特征的渐进式引导。

## 3. 实验设计
- **数据集：** 主要使用自然场景数据集（NSD），包含8名受试者观看COCO图像时的fMRI脑响应。测试集为共享的1,000张图像（新版本），训练集为剩余约30,000个fMRI-图像对。此外，在THINGS-fMRI数据集上进行了泛化性验证。
- **基准与方法对比：** 在NSD上，将MindHier与一系列先进的扩散模型方法进行了对比，包括MindEye1/2、MindBridge、MindTuner、BrainDiffuser、NeuroPictor、Wills Aligner等，评估了其有无辅助低层特征（†）的两种变体。
- **评估指标：**
  - **高层语义：** InceptionV3 (Incep)、CLIP（以上为双向识别准确率，%）、EfficientNet-B1 (Eff)和 SwAV 距离（相关距离，越低越好）。
  - **低层结构：** 像素相关度 (PixCorr)、结构相似性 (SSIM)、AlexNet层准确率 (Alex(2), Alex(5))。
  - **效率：** 单张图像推理时间（秒）。
- **诊断消融实验：** 使用Subject 1的数据，验证了层级特征、CLIP层映射策略和尺度感知引导机制的有效性。

## 4. 资源与算力
- **硬件：** 所有推理任务在单个NVIDIA RTX 4090 GPU上完成。
- **训练细节：** Hierarchical fMRI Encoder训练时使用AdamW优化器，batch size为512，训练300个epoch。Scale-wise AR模型微调时batch size为80，训练9K次迭代，使用预训练的 Switti 模型。未明确提及编码器和自回归模型训练的具体GPU型号、数量和总时长。

## 5. 实验数量与充分性
- **主要定量实验（1组）：** 在NSD新测试集上与9个基线方法进行全面对比（Table 1）。
- **定性实验（3组）：** 展示了重建质量对比（Fig. 3）、生成一致性对比（Fig. 4）和大脑定位基准任务的可视化（Fig. 5）。
- **诊断消融实验（3组）：** 分别验证了层级特征设计（Table 2）、CLIP层映射策略（Table 3）和尺度感知引导（Table 4）。
- **补充实验（6组以上）：** 包括：单受试者详细结果、仅用单次session数据微调的效率测试、跨受试者泛化测试、大脑定位定量对比、单次生成vs.最佳采样对比、阶段性能效分析、视觉问答评估、算子解剖学可解释性、THINGS数据集泛化验证等。
- **评价：** 实验设计**非常充分、客观且公平**。不仅包含了与SOTA方法的全面对比，还通过多维度的诊断实验，清晰、有力地证明了每个核心设计组件的独立贡献，并提供了充足的补充材料支撑结论。

## 6. 论文的主要结论与发现
- MindHier通过层级化编码和尺度感知引导，成功解决了扩散模型中固定引导与动态生成过程的失配问题。
- 方法在NSD数据集上取得了最先进的高层语义保真度（最高CLIP得分96.4%，最低SwAV距离0.329）。
- 与顶尖扩散方法MindEye2相比，MindHier实现了**4.67倍的推理加速**（2.64秒 vs. 12.14秒），并提供了更稳定、更具确定性的重建结果。
- “从粗到细”的自回归重建过程在计算上高效，且与人类视觉感知的“森林先于树木”原则一致，提供了神经科学上的解释性。

## 7. 优点
- **认知对齐的创新范式：** 首次将“森林先于树木”的认知理论明确转化为可计算的重建框架，用层级结构对应生成尺度。
- **高效与高质量兼备：** 相比扩散模型，在取得顶尖语义保真度的同时，显著提升了推理速度，无需额外的后处理细化步骤。
- **确定性和稳定性：** 区别于扩散模型的随机性，MindHier的重建过程始于确定的神经嵌入，结果具有高度的可重复性和一致性。
- **彻底的验证与剖析：** 实验设计极为扎实，通过一系列精心设计的诊断实验，清楚地揭示了各组件（特征层级、层映射、引导顺序）的确切作用，论证链条清晰。

## 8. 不足与局限
- **低层细节仍有差距：** 需要借助额外的低层特征（MindHier†）才能在结构保真度指标（如PixCorr，SSIM）上匹敌最好的扩散模型，表明模型自身生成精细纹理和结构的能力有待加强。
- **跨受试者泛化有待提升：** 在少数据（1小时微调）场景下，其表现不及扩散基线，提示模型在极小样本下可能存在过拟合风险。
- **人像重建保真度有限：** 论文明确指出对人脸特征的忠实重建仍是挑战，未来需要攻关。
- **实验覆盖面：** 尽管已有THINGS数据集实验，但主要评估仍围绕NSD，其在更广泛、差异更大的fMRI数据集上的通用性尚需更全面的检验。

（完）
