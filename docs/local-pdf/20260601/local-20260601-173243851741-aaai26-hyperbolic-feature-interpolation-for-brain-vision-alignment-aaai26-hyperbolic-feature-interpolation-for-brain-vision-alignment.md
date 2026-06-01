---
title: AAAI26 Hyperbolic Feature Interpolation for Brain-Vision Alignment
title_zh: AAAI26 用于脑-视觉对齐的双曲特征插值
authors: "Sangmin Jo, Wootaek Jeong, Da-Woon Heo, Yoohwan Hwang, Heung-Il Suk"
date: 2026-06-01
pdf: assets/local_pdfs/local-20260601-173243851741-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 使用双曲插值对齐脑信号与视觉特征
tldr: "近期研究试图从大脑信号解码人类视觉系统，但现有方法未能处理模态差距和语义感知特征纠缠问题。本文提出双曲特征插值（HyFI），在双曲空间中沿测地线插值语义和感知特征，实现融合压缩，以模拟大脑信号的有限表达能力和特征纠缠特性，从而更好地对齐脑与视觉特征。在零样本脑-图像检索中，HyFI取得最优性能，在THINGS-EEG和THINGS-MEG上Top-1准确率分别提升17.3%和9.1%。"
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260601-173243851741-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-001.webp\", \"caption\": \"Figure 1: (a) The human visual system processes perceptual and semantic information, and some degradation occurs when neural activity is recorded. (b) Previous works aligned semantic and perceptual features through separate pathways, overlooking their entanglement in brain signals. (c) In contrast, hyperbolic interpolation merges perceptual and semantic features with lower complexity, enhancing alignment with brain signals.\", \"page\": 1, \"index\": 1, \"width\": 500, \"height\": 460}, {\"url\": \"assets/figures/local-pdf/local-20260601-173243851741-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-006.webp\", \"caption\": \"Figure 2: (a) The semantic image xs v and perceptual image xp v are encoded by CLIP and projected via a linear layer, and then lifted onto the hyperboloid via the exponential map. Using a learned weight t derived from the semantic image features, the two image features are interpolated on the hyperbolic manifold. Similarly, EEG inputs are encoded and projected onto the same hyperbolic space. Contrastive learning is then performed on the hyperboloid to bring paired EEG-image representations closer. (b) A schematic view of the hyperbolic embedding space. The interpolated representation ẑv lies along the geodesic between the semantic feature zsv and the perceptual feature zpv . Contrastive learning then pulls the EEG feature zb toward the target ẑv .\", \"page\": 3, \"index\": 6, \"width\": 1002, \"height\": 314}, {\"url\": \"assets/figures/local-pdf/local-20260601-173243851741-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-007.webp\", \"caption\": \"Table 1: Top-1 (T-1) and top-5 (T-5) accuracy (%) results in 200-way zero-shot brain-to-image retrieval on THINGS-EEG, reported for intra- and inter-subject settings. Bold and underline indicate the best and second-best results, respectively.\", \"page\": 5, \"index\": 7, \"width\": 1048, \"height\": 416}, {\"url\": \"assets/figures/local-pdf/local-20260601-173243851741-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-008.webp\", \"caption\": \"Table 2: Top-1 and top-5 accuracy (%) results in 200-way zero-shot brain-to-image retrieval on THINGS-MEG.\", \"page\": 5, \"index\": 8, \"width\": 535, \"height\": 321}, {\"url\": \"assets/figures/local-pdf/local-20260601-173243851741-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-002.webp\", \"caption\": \"Figure 4: Qualitative comparison of image retrieval results. Our method retrieves semantically and perceptually coherent images, while the previous method often suffers from color or semantic inconsistencies.\", \"page\": 6, \"index\": 2, \"width\": 500, \"height\": 323}, {\"url\": \"assets/figures/local-pdf/local-20260601-173243851741-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-003.webp\", \"caption\": \"Table 4: Top-1 image retrieval accuracy (%) across visual encoders. The “w/o HyFI” represents alignment in CLIP space; MERU and HyCoCLIP use hyperbolic alignment.\", \"page\": 6, \"index\": 3, \"width\": 502, \"height\": 346}, {\"url\": \"assets/figures/local-pdf/local-20260601-173243851741-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-004.webp\", \"caption\": \"Figure 6: Distribution of the interpolation coefficient t and example images with low and high t values.\", \"page\": 7, \"index\": 4, \"width\": 481, \"height\": 300}, {\"url\": \"assets/figures/local-pdf/local-20260601-173243851741-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-005.webp\", \"caption\": \"Figure 7: Comparison of Top-3 retrieval results using (a) semantic and (b) perceptual images. Semantic queries tend to retrieve conceptually similar images (e.g., plants, fruits, animals). In contrast, perceptual queries retrieve images with shared low-level visual feature such as color and orientation.\", \"page\": 7, \"index\": 5, \"width\": 477, \"height\": 271}]"
motivation: 现有脑-视觉对齐方法忽略了大脑信号与图像之间的模态差异以及神经活动中语义与感知特征的纠缠。
method: 利用双曲空间的几何性质，沿测地线插值语义和感知特征，实现信息的融合与压缩以对齐大脑信号。
result: HyFI在零样本脑-图像检索任务上达到最佳性能，Top-1准确率显著优于先前方法。
conclusion: 双曲特征插值有效解决了脑-视觉对齐中的模态差距与特征纠缠问题，大幅提升了检索准确率。
---

## 摘要
人工智能的最新进展鼓励了许多尝试从大脑信号中理解和解码人类视觉系统的研究。这些先前的工作通常使用预训练的视觉模型，将从图像中提取的语义和感知特征与神经活动独立地对齐。然而，它们未能考虑到两个关键挑战：(1) 由于大脑信号和图像在表示的信息水平上存在自然差异而导致的模态差距，以及 (2) 语义和感知特征在神经活动中高度纠缠的事实。为了解决这些问题，我们利用双曲空间，该空间非常适合考虑信息量的差异，并具有这样的几何性质：两点之间的测地线会自然地弯向原点，而原点的表示能力较低。利用这些性质，我们提出了一种新颖的框架，称为双曲特征插值（HyFI），该框架沿着双曲测地线在语义和感知视觉特征之间进行插值。这使得感知和语义信息的融合与压缩成为可能，有效地反映了大脑信号的有限表达能力和这些特征的纠缠性质。因此，它有助于更好地对齐大脑特征和视觉特征。我们证明，HyFI在零样本大脑到图像检索中实现了最先进的性能，在THINGS-EEG和THINGS-MEG上，Top-1准确率分别提高了高达+17.3%和+9.1%，优于先前的方法。代码 — https://github.com/ku-milab/HyFI

## Abstract
Recent progress in artificial intelligence has encouraged nu- merous attempts to understand and decode human visual sys- tem from brain signals. These prior works typically align neu- ral activity independently with semantic and perceptual fea- tures extracted from images using pre-trained vision mod- els. However, they fail to account for two key challenges: (1) the modality gap arising from the natural difference in the information level of representation between brain signals and images, and (2) the fact that semantic and perceptual features are highly entangled within neural activity. To ad- dress these issues, we utilize hyperbolic space, which is well- suited for considering differences in the amount of informa- tion and has the geometric property that geodesics between two points naturally bend toward the origin, where the rep- resentational capacity is lower. Leveraging these properties, we propose a novel framework, Hyperbolic Feature Inter- polation (HyFI), which interpolates between semantic and perceptual visual features along hyperbolic geodesics. This enables both the fusion and compression of perceptual and se- mantic information, effectively reflecting the limited expres- siveness of brain signals and the entangled nature of these features. As a result, it facilitates better alignment between brain and visual features. We demonstrate that HyFI achieves state-of-the-art performance in zero-shot brain-to-image re- trieval, outperforming prior methods with Top-1 accuracy im- provements of up to +17.3% on THINGS-EEG and +9.1% on THINGS-MEG. Code — https://github.com/ku-milab/HyFI

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文聚焦“brain decoding”与“representation alignment”，与读者研究的脑解码、神经先验、表征对齐高度相关。
- **启发与意义**：利用双曲空间建模信息容量不对称的思路，为解决脑信号与视觉嵌入之间的模态差距提供了新范式；同时插值机制模拟了脑内语义与感知特征的纠缠特性。
- **可借鉴点**：可迁移其双曲对比学习框架及沿测地线的特征插值方法，用于改进 fMRI 等多模态脑表征对齐任务。
- **阅读建议**：建议精读方法部分的洛伦兹模型设定与插值公式，并关注消融实验中双曲空间与插值的贡献分解，以评估向 fMRI 或更复杂解码场景推广的可能性。

## 1. 论文的核心问题与整体含义
- **研究背景**：脑解码旨在从记录的脑活动（EEG、MEG等）推断视觉体验，现有方法常用预训练视觉模型提取语义和感知特征，再分别与神经信号对齐。
- **核心问题**：  
  1) **模态差距**：脑信号所含信息量远小于图像嵌入，存在信息不平衡；  
  2) **特征纠缠**：神经活动同时编码语义与感知信息，并非独立处理，独立对齐会丢失这种交互特性。
- **整体含义**：提出利用双曲空间的几何性质（原点附近容量低、测地线向原点弯曲）来融合并压缩语义与感知视觉特征，使其更贴合脑信号的有限表达能力与特征纠缠性，从而提升脑-视觉对齐质量。

## 2. 方法论
- **核心思想**：将语义和感知视觉特征映射到洛伦兹双曲模型，沿连接二者的测地线进行插值，生成同时融合语义与感知信息且复杂度降低的表示，再与脑信号嵌入进行双曲空间内的对比学习。
- **关键技术细节**：
  - **视觉特征获取**：对原始图像应用中心凹模糊（fovea blur）得到保留语义的输入，应用高斯模糊得到突出感知属性的输入；分别经CLIP编码并线性投影后，通过指数映射提升至双曲超曲面（Lorentz model）。
  - **双曲插值**：将感知特征的对数映射投影到语义特征的切空间，缩放后经指数映射映射回双曲流形，沿测地线得到插值表示 $\hat{z}_v$：  
    $$\hat{z}_v = \exp^\kappa_{z_s^v}\!\big(t \cdot \log^\kappa_{z_s^v}(z_p^v)\big)$$  
    其中 $t = \sigma(W_t f_v(x_s^v))$ 为动态学习到的插值系数。
  - **压缩效应**：双曲插值的权重小于欧氏线性插值，导致插值点更靠近原点，受超曲面约束使得嵌入的模长受限，减少表示容量，模拟脑信号信息量的减少。
  - **对比学习**：在双曲空间对脑嵌入 $z_b$ 和插值视觉嵌入 $\hat{z}_v$ 使用基于洛伦兹距离的对比损失 $\mathcal{L}_{\text{HCL}}$ 进行对齐。
- **公式或算法流程**：  
  1) 提取并映射语义特征 $z_s^v$、感知特征 $z_p^v$ 和脑特征 $z_b$ 到洛伦兹空间；  
  2) 动态计算插值系数 $t$，沿测地线生成 $\hat{z}_v$；  
  3) 最小化对称对比损失 $\mathcal{L}_{\text{HCL}} = \mathcal{L}(\hat{z}_v, z_b) + \mathcal{L}(z_b, \hat{z}_v)$。

## 3. 实验设计
- **数据集**：  
  - THINGS-EEG：10被试，训练集 1654 类各10张图，测试集200类各1张图，每图重复多次。  
  - THINGS-MEG：4被试，训练集 1854 类各12张图，测试集200类各1张图重复12次。
- **任务与指标**：200路零样本脑-图像检索，报告 Top-1 和 Top-5 准确率。
- **对比方法**：BraVL、NICE、ATM-S、CogCap、UBP 等最新脑解码方法。
- **变体与分析**：测试多种视觉骨干（CLIP-RN50/101、ViT、MERU、HyCoCLIP）和多种脑编码器（ShallowNet、EEGNet、TSConv、EEGProject），并进行消融实验（有无插值、是否双曲空间、不同插值空间）以及插值系数分布分析、特征距原点距离可视化。

## 4. 资源与算力
- 论文明确指出：所有实验在一块 GTX 1080 Ti (12GB) 上运行，使用 AdamW 优化器，学习率 $3\times10^{-4}$，权重衰减 $1\times10^{-4}$，批大小 1024，训练 50 个 epoch。
- 未提及其他 GPU 或多卡配置。

## 5. 实验数量与充分性
- **实验组数**：涵盖 2 个数据集 × 2 种测试协议（被试内、跨被试），与 5～6 种基准方法全面比较；对 9 种视觉编码器、4 种脑编码器进行了兼容性测试；含 4 组关键消融实验（插值与双曲空间配合）；另有定性的检索可视化、特征分布、插值系数分析。
- **充分性与公平性**：实验覆盖不同编码架构和多个基线，采用公开基准与标准预处理，所有改进均报告统计显著性（p<0.01），结果多次运行取平均。整体设计较为全面、客观且公平。

## 6. 主要结论与发现
- 提出 HyFI 框架在 THINGS-EEG 上达到 Top-1 68.2% 和 Top-5 91.9%，较此前最优分别提升 +17.3% 和 +12.2% 个百分点；在 THINGS-MEG 上达到 Top-1 35.8%，提升 +9.1%。
- 消融证实双曲空间比 CLIP 欧氏空间更利于脑-视觉对齐；双曲插值进一步通过融合和压缩提升了性能。
- 跨视觉/脑编码器的一致性提升表明方法具有强泛化性和鲁棒性。
- 插值系数分析显示模型倾向于偏重语义特征，但高感知需求图像（如色彩、方向显著）会调高系数，体现动态融合。

## 7. 优点
- **方法创新**：首次将双曲插值引入脑解码，同时解决模态差距与特征纠缠，理论动机清晰，几何解释直观。
- **高效实用**：单张消费级 GPU 下取得大幅性能跃升，插值系数可学习且运算简洁。
- **兼容性强**：对多种视觉主干和脑编码器均带来一致性提升，表明该思想具有一定通用性。
- **分析深入**：通过特征距离分布、插值系数可视化等，深化了对模型行为的理解。

## 8. 不足与局限
- **被试数量有限**：THINGS-MEG 仅 4 名被试，跨被试泛化结论尚需更大规模验证。
- **解码对象受限**：任务为重识别式检索，未探索生成式重建或更丰富的认知状态解码。
- **依赖预训练模型**：视觉语义与感知的分离依赖于 CLIP 及特定的模糊增强，若视觉骨干无强语义-感知区分能力，方法可能需重新设计。
- **双曲空间假设**：默认洛伦兹模型曲率可学习，但未讨论不同曲率初始化或变曲率结构的影响。
- **未见 fMRI 实验**：论文以 EEG/MEG 为主，未在空间分辨率更高的 fMRI 上验证。

## 9. 总结（由原结论部分支撑）
- 论文提出 HyFI，通过双曲空间插值实现了语义与感知特征的融合与压缩，显著缩小了脑信号与视觉表示之间的鸿沟，并在两大 EEG/MEG 基准上取得 SOTA 性能，为脑解码中的表征对齐提供了新工具。  

（完）
