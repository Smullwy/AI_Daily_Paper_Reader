---
title: AAAI26 Single-Stage fMRI-to-3D Reconstruction via Viewpoint-Aware Embedding and Hierarchical Guidance
title_zh: AAAI26：基于视角感知嵌入与分层引导的单阶段fMRI到3D重建
authors: "Xun Zhang, Weihao Xia, Yulong Liu, Bo Yang, Alessandro Bozzon, Pan Wang"
date: 2026-06-01
pdf: assets/local_pdfs/local-20260601-174322192053-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 用于fMRI解码的视点感知嵌入和多视图结构约束
tldr: 针对从神经活动重建高保真纹理3D对象的挑战，本文提出NeuroSculptor3D，首个单阶段端到端框架。它通过视角感知脑嵌入模块捕捉细粒度空间变化，并利用分层引导机制对齐脑特征与感知、语义和结构先验，生成一致的多视角嵌入，再经TRELLIS解码为高质量3D重建。实验表明该方法在结构准确性和语义一致性上显著优于现有方案。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260601-174322192053-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-001.webp\", \"caption\": \"Figure 1: Comparison between existing fMRI-to-3D framework and our proposed NeuroSculptor3D. Prior work (Gao et al. 2024) disregards viewpoint-specific variations by averaging features across views, causing semantic dilution and structural degradation. The two-stage training increases training complexity. Due to model limitations, they produce textureless shapes (top). In contrast, NeuroSculptor3D decodes viewpoint-aware brain embeddings aligned with 3D generative priors, enabling single-stage training and highfidelity textured 3D reconstruction (bottom).\", \"page\": 1, \"index\": 1, \"width\": 494, \"height\": 419}, {\"url\": \"assets/figures/local-pdf/local-20260601-174322192053-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-005.webp\", \"caption\": \"Figure 2: Overview of NeuroSculptor3D. NeuroSculptor3D begins with a voxel clustering module that partitions the fMRI volume into fixed-size clusters of spatially adjacent voxels. A brain embedder then aggregates the clustered signals to extract a global brain embedding. To incorporate viewpoint information, a learnable viewpoint embedding is initialized, from which a specific viewpoint vector is sampled and concatenated with the global embedding during training. This viewpoint-aware embedding is then projected into the DINOv2 feature space of the corresponding frame via a cross-attention module and a learned diffusion prior, serving as the perceptual path. In parallel, two additional guidance streams are employed: a semantic path, which projects the global brain embedding into the CLIP text space, and a geometric path, which maps it to the latent space of a 3D shape autoencoder. Both utilize cross-attention modules followed by linear projection layers. The three pathways, perceptual, semantic, and geometric, together constitute a hierarchical guidance mechanism that supervises the brain-to-feature decoding process. At inference time, predefined viewpoint IDs are used to generate corresponding brain-derived viewpoint-specific embeddings, which are then fed into the pretrained TRELLIS model to synthesize high-fidelity, textured 3D reconstructions.\", \"page\": 3, \"index\": 5, \"width\": 1029, \"height\": 419}, {\"url\": \"assets/figures/local-pdf/local-20260601-174322192053-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-006.webp\", \"caption\": \"Figure 3: Qualitative results of NeuroSculptor3D on the fMRI-Shape dataset under Same-Subject Same-Category (SS-SC) setting. We show ground truth 3D shapes, mesh outputs from MinD-3D (Gao et al. 2024), and both the textured and mesh outputs from our method NeuroSculptor3D. Compared to MinD-3D, NeuroSculptor3D achieves notably higher structural accuracy and semantic consistency, producing 3D objects that more closely resemble the original targets.\", \"page\": 5, \"index\": 6, \"width\": 1046, \"height\": 432}, {\"url\": \"assets/figures/local-pdf/local-20260601-174322192053-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-002.webp\", \"caption\": \"Table 1: Quantitative comparison against state-of-the-art methods (top) and ablation study on hierarchical guidance training (bottom) under the Same-Subject Same-Category (SS-SC) setting. Results are averaged across subjects. The best and second-best performance are highlighted. ↑ indicates higher is better, while ↓ indicates the opposite.\", \"page\": 6, \"index\": 2, \"width\": 922, \"height\": 216}, {\"url\": \"assets/figures/local-pdf/local-20260601-174322192053-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-003.webp\", \"caption\": \"Table 2: Quantitative comparison under New-Subject Same-Category (NS-SC) and New-Subject New-Category (NS-NC) settings. Following MinD-3D (Gao et al. 2024), for NS-SC, the model is trained on subject 1 and tested on subject 9 with shared object categories, and for NS-NC, the model is trained on subject 1 and tested on subject 11 with unseen object categories.\", \"page\": 6, \"index\": 3, \"width\": 931, \"height\": 202}, {\"url\": \"assets/figures/local-pdf/local-20260601-174322192053-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-004.webp\", \"caption\": \"Table 3: Ablation study on the number of input viewpoints during inference. We evaluate the impact of varying the number of decoded viewpoint features d on semantic-level and structure-level metrics, as well as the inference runtime. Results indicate that increasing viewpoint diversity improves both semantic accuracy and structural fidelity, with i = 5 achieving an optimal balance between reconstruction quality and computational cost. MinD-3D (Gao et al. 2024) is included as a reference baseline.\", \"page\": 7, \"index\": 4, \"width\": 832, \"height\": 204}]"
motivation: 认知神经科学需从脑信号解码3D感知，但现有方法难以重建高保真纹理几何细节。
method: 设计视角感知脑嵌入与分层引导机制，构建单阶段框架，直接从fMRI生成多视角一致嵌入并解码为3D对象。
result: 在fMRI-Shape数据集上，NeuroSculptor3D在结构精度和语义一致性方面均超越已有基线。
conclusion: NeuroSculptor3D首次实现从脑活动到纹理3D的单阶段重建，为神经解码3D感知开辟新路径，代码将开源。
---

## 摘要
理解三维(3D)感知的神经基础是认知神经科学的一个基本目标。尽管从神经数据解码二维视觉刺激方面取得了进展，但重建具有精细纹理和几何结构的高保真3D物体在很大程度上仍未得到探索。在这项工作中，我们提出了NeuroSculptor3D，这是第一个直接从大脑活动重建纹理3D形状的单阶段端到端框架。NeuroSculptor3D集成了一个视角感知的大脑嵌入模块，该模块能够捕捉跨视觉视角的细粒度空间变化，以及一个分层引导机制，将大脑衍生特征与感知、语义和结构先验对齐。这些组件共同促进了多视角一致嵌入的生成，然后通过TRELLIS进行解码，以产生高质量的纹理3D重建。在fMRI-Shape数据集上的实验表明，NeuroSculptor3D在多种场景下优于现有基线，在结构准确性和语义一致性方面均取得了显著提升。代码将发布以促进进一步的研究。

## Abstract
Understanding the neural basis of three-dimensional (3D) perception is a fundamental objective in cognitive neuro- science. Despite advances in decoding 2D visual stimuli from neural data, reconstructing high-fidelity 3D objects with detailed texture and geometry remains largely unex- plored. In this work, we introduce NeuroSculptor3D, the first single-stage, end-to-end framework for reconstructing textured 3D shapes directly from brain activity. NeuroSculp- tor3D integrates a viewpoint-aware brain embedding mod- ule that captures fine-grained spatial variations across vi- sual perspectives, and a hierarchical guidance mechanism that aligns brain-derived features with perceptual, semantic, and structural priors. Together, these components facilitate the generation of consistent multi-view embeddings, which are then decoded via TRELLIS to produce high-quality tex- tured 3D reconstructions. Experiments on the fMRI-Shape dataset demonstrate that NeuroSculptor3D outperforms ex- isting baselines across multiple settings, achieving significant improvements in both structural accuracy and semantic con- sistency. Code will be released to facilitate further research.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与你的“brain decoding”“representation alignment”“multi-view constraint”方向高度吻合，直接聚焦于从 fMRI 信号解码 3D 对象并利用多视角引导完成表示对齐。
- **启发与意义**：通过视角感知嵌入和分层引导（感知、语义、结构）将脑活动映射到 3D 生成模型的特征空间，为神经先验驱动的 3D 重建提供了新的建模范式。
- **可借鉴点**：可借鉴其“脑嵌入 + 跨注意力 + 扩散先验”的视角感知通路，以及联合 CLIP 文本语义和 3D 几何潜在变量的多级监督策略。
- **阅读建议**：重点研读第 3 节方法论中的视角感知嵌入提取和分层训练目标设计，并关注消融实验对各路径贡献的定量分析，以评估在你任务中的迁移性。

## 1. 核心问题与研究背景
- **核心问题**：如何从单次 fMRI 脑活动数据中直接重建具有纹理和几何细节的高保真 3D 物体。
- **研究动机**：人类生活在三维世界，大脑具有整合多视角信息形成内部 3D 表征的能力，但现有 fMRI 解码工作主要集中在 2D 图像/视频，面向 3D 对象的神经解码研究极为匮乏。
- **现有工作局限**：先前方法（如 MinD‑3D）采用多视角特征平均导致语义稀释和结构退化，且需要两阶段训练，仅能生成无纹理的几何形状，重建的真实感和保真度不足。

## 2. 方法论
### 2.1 整体思想
提出 **NeuroSculptor3D**，一个单阶段端到端框架，直接从 fMRI 信号重建纹理 3D 形状。核心包括：视角感知的大脑嵌入模块、分层引导训练机制，以及基于 TRELLIS 的多视角条件 3D 生成。

### 2.2 视角感知大脑嵌入
- 对 fMRI 体素进行训练自由的自适应聚类，得到固定组大小 $G \times K$ 的输入表示 $X'_{s}(n)$。
- 通过脑嵌入器（组映射层 + 全局映射层 + MLP 模块）提取全局脑嵌入 $X^{g}_{s}(n) \in \mathbb{R}^{H \times D}$。
- 引入可学习的视角嵌入 $e_m$，与全局脑嵌入拼接后线性投影，生成视角感知嵌入：
  $$X^{v}_{s}(n,m) = \text{Linear}\big(\text{Concat}(X^{g}_{s}(n), e_m)\big)$$

### 2.3 分层引导训练
三条通路对齐脑特征与多模态先验，均使用交叉注意力将脑嵌入映射到目标空间：
- **感知路径**（视角感知）：$X^{v}$ 经交叉注意力与可学习查询 token 交互，映射到 DINOv2 特征空间，使用扩散先验损失 $L_{\text{Prior}}$ 和两阶段潜在损失（BiMixCo → SoftCLIP）约束：
  $$L_{\text{Perc}} = \lambda_{\text{Prior}}L_{\text{Prior}} + \lambda_{\text{Latent}}L^{\text{Perc}}_{\text{Latent}}$$
- **语义路径**：全局脑嵌入 $X^g$ 映射到 CLIP 文本嵌入空间，使用 MSE + BiMixCo/SoftCLIP 损失：
  $$L_{\text{Sem}} = \lambda_{\text{MSE}}L^{\text{Sem}}_{\text{MSE}} + \lambda_{\text{Latent}}L^{\text{Sem}}_{\text{Latent}}$$
- **几何路径**：$X^g$ 映射到 3D 形状自编码器的潜在变量，解码得到预测体素 $\hat{Y}^o_s(n)$ 并与真值 $Y^o_s(n)$ 计算 Dice 损失：
  $$L_{\text{Dice}} = 1 - \frac{2 \sum_v \hat{Y}^o_s(n) \cdot Y^o_s(n) + \epsilon}{\sum_v \hat{Y}^o_s(n) + \sum_v Y^o_s(n) + \epsilon}$$
  $$L_{\text{Geo}} = \lambda_{\text{MSE}}L^{\text{Geo}}_{\text{MSE}} + \lambda_{\text{Latent}}L^{\text{Geo}}_{\text{Latent}} + \lambda_{\text{Dice}}L_{\text{Dice}}$$
- 总损失：$L_{\text{total}} = L_{\text{Perc}} + L_{\text{Sem}} + L_{\text{Geo}}$。

### 2.4 3D 重建推理
对选定的 $d$ 个均匀视角索引，各生成视角感知嵌入 $\hat{Y}^v_s(n,k)$，聚合后输入预训练 TRELLIS 生成 3D 形状 $\hat{S}_s(n)$。

## 3. 实验设计
- **数据集**：fMRI‑Shape 数据集，包含 12 名被试观看 ShapeNet 物体的旋转视频时的 fMRI 记录。数据经 fMRIPrep 预处理，利用通用 NSD 视觉掩码筛选体素，并用 GLMsingle 估计试次响应。
- **评估设置**：
  - Same‑Subject Same‑Category (SS‑SC)：被试内、类别内训练和测试。
  - New‑Subject Same‑Category (NS‑SC)：被试 1 训练，被试 9 测试（相同类别）。
  - New‑Subject New‑Category (NS‑NC)：被试 1 训练，被试 11 测试（全新类别）。
- **评价指标**：语义层面（2‑way/10‑way top‑1 分类准确率、LPIPS）、结构层面（FPD、CD、EMD、SSIM）。
- **对比方法**：LEA‑3D, fMRI‑PTE‑3D, MinD‑3D，均使用官方代码复现。

## 4. 资源与算力
- 硬件：**单张 NVIDIA H100 GPU (94 GB 显存)**。
- 训练设置：优化器 AdamW，循环学习率调度，最大学习率 $3\times10^{-5}$，共 300 个 epoch，批次大小为 4。损失权重设为 $\lambda_{\text{Prior}}=30, \lambda_{\text{Latent}}=1, \lambda_{\text{MSE}}=10000, \lambda_{\text{Dice}}=2$。推理时默认选取 $d=5$ 个视角。

## 5. 实验数量与充分性
- 进行了 **3 种泛化设置**（SS‑SC, NS‑SC, NS‑NC）下的全方位对比实验，与 3 个基线方法比较。
- 实施了 **多轮消融研究**：
  - 分层引导路径的逐步去除（表 1 下部）。
  - 推理视角数量 $d\in\{1,3,5,9,18\}$ 的影响（表 3）。
  - 损失函数组成（仅潜在损失、加入 MSE、再加入 Dice）的消融（表 4）。
- 定性结果（图 3）展示了纹理和网格重建的可视化效果。
- 实验覆盖充分，比较公平（均使用相同预处理与官方代码），消融设计系统，能清晰揭示各组件贡献。

## 6. 主要结论与发现
- **SOTA 性能**：在 SS‑SC 设置下，NeuroSculptor3D 在所有语义与结构指标上均显著超越先前方法，首次实现从脑信号直接重建带纹理的 3D 形状。
- **良好泛化**：在 NS‑SC 和 NS‑NC 跨被试、跨类别条件下，仍明显优于基线，证明分层引导有助于缓解个体差异和类别偏移。
- **组件重要性**：消融证实视角感知嵌入和分层引导路径（感知、语义、几何）对重建质量均不可或缺，多视角推理在 $d=5$ 时达到质量‑效率平衡。

## 7. 优点
- **单阶段端到端**：避免了多阶段流水线的复杂性和错误累积，训练高效。
- **视角感知嵌入**：借助可学习视角嵌入保留了视角间细粒度差异，避免信息稀释。
- **多模态分层监督**：同时利用视觉感知、语义和粗几何结构来约束脑解码，提升重建的语义一致性与几何精度。
- **纹理生成能力**：依托 TRELLIS 生成带纹理的 3D 形状，超越了以往仅输出无纹理网格的方法。
- **可复现性**：承诺开源代码，使用标准预处理流水线和公开数据集，结果可验证。

## 8. 不足与局限
- **数据集规模有限**：fMRI‑Shape 仅包含 12 名被试和 ShapeNet 的有限类别，可能限制对更复杂场景和更大人群的真实泛化。
- **物体类型单一**：仅限于人工合成的刚性 3D 物体，未涉及真实世界场景、形变物体或更复杂的纹理模式。
- **跨被试泛化仍有差距**：NS‑SC 和 NS‑NC 下指标较 SS‑SC 有明显下降，个体间功能对齐仍是挑战。
- **计算资源要求较高**：虽然单卡 H100 可行，但全脑体素处理、长时间训练和 TRELLIS 推理可能对普通用户门槛较高。
- **缺乏与 2D 解码方法的系统性对比**：未与最新 2D‑to‑3D 方案（从 2D 解码结果重构 3D）的上限进行对比分析。

## 9. 研究价值与阅读建议
（已前置为第一节）

（完）
