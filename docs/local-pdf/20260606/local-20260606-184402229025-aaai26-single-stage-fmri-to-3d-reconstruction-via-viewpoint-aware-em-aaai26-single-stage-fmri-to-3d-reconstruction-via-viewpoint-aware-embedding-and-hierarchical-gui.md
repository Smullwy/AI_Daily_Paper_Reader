---
title: AAAI26 Single-Stage fMRI-to-3D Reconstruction via Viewpoint-Aware Embedding and Hierarchical Guidance
title_zh: AAAI26 单阶段fMRI到3D重建：基于视角感知嵌入与层次引导
authors: "Xun Zhang, Weihao Xia, Yulong Liu, Bo Yang, Alessandro Bozzon, Pan Wang"
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-184402229025-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 将脑衍生特征与感知、语义和结构先验对齐
tldr: 为探索大脑的3D感知机制，本文提出NeuroSculptor3D，首个单阶段端到端框架，直接从fMRI脑信号重建带纹理的3D物体。它通过视角感知嵌入模块捕捉多视角空间变化，结合分层引导机制对齐大脑特征与感知、语义、结构先验，生成一致的多视图嵌入，再借助TRELLIS解码为高保真3D形状。实验表明，该方法在结构精度和语义一致性上显著超越现有基线，推动了认知神经科学与三维视觉的交叉研究。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-184402229025-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-184402229025-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-184402229025-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-003.webp\", \"caption\": \"\", \"page\": 3, \"index\": 3, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-184402229025-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-004.webp\", \"caption\": \"\", \"page\": 3, \"index\": 4, \"width\": 1000, \"height\": 1000}, {\"url\": \"assets/figures/local-pdf/local-20260606-184402229025-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-005.webp\", \"caption\": \"\", \"page\": 3, \"index\": 5, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-184402229025-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-006.webp\", \"caption\": \"\", \"page\": 3, \"index\": 6, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-184402229025-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-007.webp\", \"caption\": \"\", \"page\": 3, \"index\": 7, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-184402229025-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-008.webp\", \"caption\": \"\", \"page\": 5, \"index\": 8, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-184402229025-aaai26-single-stage-fmri-to-3d-reconstruction-via-viewpoint-aware-em/fig-009.webp\", \"caption\": \"\", \"page\": 5, \"index\": 9, \"width\": 358, \"height\": 358}]"
motivation: 从脑活动直接重建高保真纹理3D物体是认知神经科学的前沿挑战，现有解码工作多局限于2D或低质量3D。
method: 提出整合视角感知脑嵌入和分层引导机制的单阶段框架，生成多视图一致嵌入并通过TRELLIS重建3D形状。
result: 在fMRI-Shape数据集上，方法的结构准确性和语义一致性显著优于现有基线。
conclusion: NeuroSculptor3D首次实现端到端fMRI到纹理3D重建，性能领先，代码将开源以促进研究。
---

## 摘要
理解三维（3D）知觉的神经基础是认知神经科学的一个根本目标。尽管从神经数据中解码二维视觉刺激已取得进展，但重建具有精细纹理和几何的高保真3D物体仍基本未被探索。在这项工作中，我们提出了NeuroSculptor3D，首个直接从脑活动重建纹理化3D形状的单阶段端到端框架。NeuroSculptor3D集成了一个视角感知的大脑嵌入模块，该模块捕捉跨视觉视角的细粒度空间变化，以及一个层次引导机制，使得大脑衍生特征与知觉、语义和结构先验相对齐。这些组件共同促进了多视角一致嵌入的生成，随后通过TRELLIS解码，产生高质量的纹理化3D重建。在fMRI-Shape数据集上的实验表明，NeuroSculptor3D在多种设定下均优于现有基线，在结构准确性和语义一致性方面均取得了显著提升。代码将公开发布以促进进一步研究。

## Abstract
Understanding the neural basis of three-dimensional (3D) perception is a fundamental objective in cognitive neuro- science. Despite advances in decoding 2D visual stimuli from neural data, reconstructing high-fidelity 3D objects with detailed texture and geometry remains largely unex- plored. In this work, we introduce NeuroSculptor3D, the first single-stage, end-to-end framework for reconstructing textured 3D shapes directly from brain activity. NeuroSculp- tor3D integrates a viewpoint-aware brain embedding mod- ule that captures fine-grained spatial variations across vi- sual perspectives, and a hierarchical guidance mechanism that aligns brain-derived features with perceptual, semantic, and structural priors. Together, these components facilitate the generation of consistent multi-view embeddings, which are then decoded via TRELLIS to produce high-quality tex- tured 3D reconstructions. Experiments on the fMRI-Shape dataset demonstrate that NeuroSculptor3D outperforms ex- isting baselines across multiple settings, achieving significant improvements in both structural accuracy and semantic con- sistency. Code will be released to facilitate further research.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与读者关注的 brain decoding、multi-view constraint、representation alignment 高度一致，均致力于从 fMRI 信号中解码复杂视觉信息，并利用多视角一致性与表示对齐提升解码质量。
- **启发与意义**：论文表明，将脑科学中的多视角整合假说引入 fMRI 解码设计，可显著提升从二维测量中恢复三维结构的能力；其“层次引导”策略为神经先验与生成模型的对齐提供了可套用的范式。
- **可借鉴点**：视角感知嵌入模块与分层损耗（感知、语义、几何）的联合训练思路，可直接迁移到其他脑解码任务中，尤其是需要多模态对齐或三维重建的场景。
- **阅读建议**：建议重点关注其从 fMRI 到多视角视觉特征再到 3D 生成的完整流水线设计，以及消融实验中各引导路径对重构质量的影响，这些可启发读者在自己的研究中构建更丰富的表示约束。

## 1. 核心问题与整体含义
- 研究背景：现有 fMRI 解码主要集中在二维图像/视频重建，而直接从脑信号重建带有精细纹理和几何细节的三维物体仍几乎空白。
- 核心挑战：人类大脑通过多视角整合感知 3D 世界，但现有 fMRI-to-3D 方法（如 MinD-3D）常对多视角特征进行平均，导致语义稀释和结构退化，且只能生成无纹理的形状。
- 研究目标：提出一种单阶段、端到端的框架，直接从 fMRI 中重建高保真、带纹理的 3D 物体，在结构精度和语义一致性上超越先前方法。

## 2. 方法论
### 2.1 总体框架
- 提出 NeuroSculptor3D，包含三大组件：视角感知脑嵌入提取、层次引导训练、多视角条件重建。
- 输入端：fMRI 信号 $\mathbf{X}_s(n)$，对应多视角视频帧 $\{\mathbf{F}_s(n,m)\}_{m=1}^M$，形状结构潜变量 $\mathbf{L}_s(n)$，以及物体类别文本 $C_s(n)$。
- 输出端：通过预训练的 TRELLIS 生成带纹理的 3D 重建 $\hat{\mathbf{S}}$。

### 2.2 视角感知脑嵌入提取
- 先通过自适应体素聚类将 fMRI 数据重组为组嵌入 $\mathbf{X}'_s(n)\in\mathbb{R}^{G\times K}$，再经脑编码器得全局脑嵌入 $\mathbf{X}_s^g(n)$。
- 引入可学习的视角嵌入 $\mathbf{e}_m$，与全局嵌入拼接并线性投影生成视角感知嵌入：
  $$\mathbf{X}_s^v(n,m)=\text{Linear}(\text{Concat}(\mathbf{X}_s^g(n),\mathbf{e}_m))$$

### 2.3 层次引导训练
系统包含三个并行的引导路径：

- **感知路径**：将视角感知嵌入通过交叉注意力与可学习查询令牌交互，投影至 DINOv2 特征空间，使用扩散先验损失和对比 SoftCLIP/BiMixCo 损失监督，总损失为：
  $$\mathcal{L}_{\text{Perc}}=\lambda_{\text{Prior}}\mathcal{L}_{\text{Prior}}+\lambda_{\text{Latent}}\mathcal{L}_{\text{Perc Latent}}$$

- **语义路径**：将全局脑嵌入通过另一交叉注意力投影至 CLIP 文本空间，损失为 MSE 和对比损失：
  $$\mathcal{L}_{\text{Sem}}=\lambda_{\text{MSE}}\mathcal{L}_{\text{Sem MSE}}+\lambda_{\text{Latent}}\mathcal{L}_{\text{Sem Latent}}$$

- **几何路径**：将全局脑嵌入映射至 3D 形状自编码器的低分辨率潜空间，并用 Dice 损耗监督体素级几何对齐：
  $$\mathcal{L}_{\text{Dice}}=1-\frac{2\sum_v \hat{\mathbf{Y}}^o_s(n)\cdot\mathbf{Y}^o_s(n)+\epsilon}{\sum_v \hat{\mathbf{Y}}^o_s(n)+\sum_v\mathbf{Y}^o_s(n)+\epsilon}$$
  几何路径总损失：
  $$\mathcal{L}_{\text{Geo}}=\lambda_{\text{MSE}}\mathcal{L}_{\text{Geo MSE}}+\lambda_{\text{Latent}}\mathcal{L}_{\text{Geo Latent}}+\lambda_{\text{Dice}}\mathcal{L}_{\text{Dice}}$$

- 最终联合训练目标：
  $$\mathcal{L}_{\text{total}}=\mathcal{L}_{\text{Perc}}+\mathcal{L}_{\text{Sem}}+\mathcal{L}_{\text{Geo}}$$

### 2.4 多视角条件重建
- 推理时，选取 $d$ 个均匀分布的视角索引，生成对应视角感知嵌入，送入预训练的 TRELLIS 生成器：
  $$\hat{\mathbf{S}}_s(n)=\text{G}_{\text{TRELLIS}}\big(\{\hat{\mathbf{Y}}_s^v(n,k)\}_{k=1}^d\big)$$
- 默认 $d=5$，在质量与效率间取得平衡。

## 3. 实验设计
- **数据集**：fMRI-Shape 数据集（Gao et al., 2024），包含 12 名被试观看 ShapeNet 三维物体旋转视频时的 fMRI 记录。
- **预处理**：采用体素空间处理（fMRIPrep）、NSD 通用视觉掩膜投影至个体空间、GLMsingle 获取单试次 beta 响应。
- **评估设置**：三种泛化设定：
  - SS‑SC（同被试同类别）
  - NS‑SC（新被试同类别）
  - NS‑NC（新被试新类别）
- **对比基线**：LEA‑3D、fMRI‑PTE‑3D、MinD‑3D，复现其官方代码。
- **评估指标**：
  - 语义层面：2‑way top‑1 与 10‑way top‑1 分类精度、LPIPS、SSIM（多视角渲染后平均）
  - 结构层面：FPD、Chamfer Distance、Earth Mover’s Distance（点云采样 2048 点）

## 4. 资源与算力
- 训练硬件：单块 NVIDIA H100 GPU，显存 94 GB。
- 训练配置：优化器 AdamW，循环学习率调度，最大学习率 $3\times10^{-5}$，训练 300 个 epoch，批次大小 4。
- 未提及多卡或额外加速手段。

## 5. 实验数量与充分性
- 主要对比实验：在 SS‑SC、NS‑SC、NS‑NC 三个设定下与 3 种基线全面比较，覆盖语义与结构指标。
- 消融实验：
  - 层次引导消融：分别移除语义路径、几何路径或两者均移除，共 3 组消融（含完整模型）。
  - 推理视角数量消融：测试 $d=1,3,5,9,18$ 五种配置。
  - 损失函数消融：逐步加入 Latent 对比损失、MSE、Dice 损失，共 4 种组合。
- 实验设计客观、公平：基线使用官方代码复现，评估指标多样，覆盖分布内与分布外条件下的模型性能；消融实验较全面，能清晰验证各组件作用。

## 6. 主要结论与发现
- NeuroSculptor3D 在所有设定下均显著优于 LEA‑3D、fMRI‑PTE‑3D 和 MinD‑3D，在语义分类、感知相似度与结构距离指标上均取得最佳结果。
- 视角感知嵌入有效保留了视角特异性信息，层次引导（感知、语义、几何）对重构质量至关重要。
- 多视角推理（$d=5$）在精度与效率间达到最优，增加视角可进一步提升但收益递减。
- 模型在泛化到新被试和新类别时仍保持较大优势，证明方法的鲁棒性。

## 7. 优点
- **首个单阶段 fMRI‑to‑纹理‑3D 框架**：省去多阶段训练，首次实现端到端带纹理重建。
- **生物合理性设计**：借鉴人脑多视角整合与层次处理理论，使数据驱动与神经科学融合。
- **层次对齐机制**：同时对齐视觉外观、语义类别与粗几何结构，多角度约束保证重建质量。
- **利用成熟 3D 生成模型**：借力 TRELLIS，使输出兼具几何精度与真实纹理。
- **实验全面**：在三种 OOD 设定下测试，消融细致，结论可信。

## 8. 不足与局限
- 数据集规模有限（仅 fMRI‑Shape），包含类别与被试数少，可能限制范式的广泛适用性。
- 训练的视角选择策略（随机单帧）可能未充分利用多视角时序关联，未来可探索更高效的视角融合。
- 完全依赖 TRELLIS 作为解码器，可能受其固有生成偏差影响；未与其他 3D 生成骨干对比。
- 论文未报告跨被试一致性分析或零样本生成失败案例，对失败模式讨论不足。
- 损失函数权重需手动调节，可能对超参数敏感。

（完）
