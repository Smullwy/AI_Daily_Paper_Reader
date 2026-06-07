---
title: AAAI26 Hyperbolic Feature Interpolation for Brain-Vision Alignment
title_zh: AAAI26 面向脑-视觉对齐的双曲特征插值
authors: "Sangmin Jo, Wootaek Jeong, Da-Woon Heo, Yoohwan Hwang, Heung-Il Suk"
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-183246014601-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 提出HyFI通过双曲插值对齐脑信号与语义感知视觉特征
tldr: "针对脑信号与视觉特征对齐中的模态差异和语义-感知纠缠问题，本文提出双曲特征插值框架HyFI，利用双曲空间几何性质沿测地线插值语义与感知特征，实现信息融合与压缩以反映脑信号有限表达能力，在零样本脑到图像检索中提升Top-1准确率高达17.3%，取得最先进性能。"
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-183246014601-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 1535, \"height\": 1412}, {\"url\": \"assets/figures/local-pdf/local-20260606-183246014601-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 1998, \"height\": 620}, {\"url\": \"assets/figures/local-pdf/local-20260606-183246014601-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-003.webp\", \"caption\": \"\", \"page\": 4, \"index\": 3, \"width\": 1171, \"height\": 528}, {\"url\": \"assets/figures/local-pdf/local-20260606-183246014601-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 2214, \"height\": 1414}, {\"url\": \"assets/figures/local-pdf/local-20260606-183246014601-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 2773, \"height\": 889}, {\"url\": \"assets/figures/local-pdf/local-20260606-183246014601-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 2989, \"height\": 1847}, {\"url\": \"assets/figures/local-pdf/local-20260606-183246014601-aaai26-hyperbolic-feature-interpolation-for-brain-vision-alignment/fig-007.webp\", \"caption\": \"\", \"page\": 7, \"index\": 7, \"width\": 1658, \"height\": 933}]"
motivation: 现有脑-视觉对齐方法独立处理语义与感知特征，忽略脑信号的有限表达性和特征纠缠，导致对齐效果受限。
method: 在双曲空间中沿测地线对语义和感知视觉特征进行插值，实现两者的融合与压缩。
result: "在THINGS-EEG和THINGS-MEG数据集上，零样本检索Top-1准确率分别提升17.3%和9.1%。"
conclusion: HyFI通过双曲插值有效建模脑视觉特征的有限表达和纠缠性质，显著提升了对齐和检索性能。
---

## 摘要
近期人工智能的进展激发了众多通过脑信号来理解和解码人类视觉系统的尝试。这些先前的工作通常使用预训练的视觉模型，将神经活动分别与从图像中提取的语义和感知特征进行对齐。然而，它们未能应对两个关键挑战：（1）由于脑信号与图像之间表示的信息层级存在自然差异而产生的模态鸿沟；（2）语义和感知特征在神经活动中高度纠缠的事实。为了解决这些问题，我们利用双曲空间，该空间非常适合考虑信息量的差异，并具有两点间测地线自然弯曲至原点的几何性质，原点处的表征能力较低。借助这些性质，我们提出了一个新颖的框架，双曲特征插值（Hyperbolic Feature Interpolation，HyFI），它沿着双曲测地线在语义和感知视觉特征之间进行插值。这使得感知和语义信息既能融合也能压缩，有效反映了脑信号有限的表达能力以及这些特征的纠缠特性。从而促进了脑特征与视觉特征之间更好的对齐。我们展示了HyFI在零样本脑-图像检索中达到了最先进的性能，在THINGS-EEG和THINGS-MEG数据集上，Top-1准确率分别比之前的方法提高了高达+17.3%和+9.1%。代码 — https://github.com/ku-milab/HyFI

## Abstract
Recent progress in artificial intelligence has encouraged nu- merous attempts to understand and decode human visual sys- tem from brain signals. These prior works typically align neu- ral activity independently with semantic and perceptual fea- tures extracted from images using pre-trained vision mod- els. However, they fail to account for two key challenges: (1) the modality gap arising from the natural difference in the information level of representation between brain signals and images, and (2) the fact that semantic and perceptual features are highly entangled within neural activity. To ad- dress these issues, we utilize hyperbolic space, which is well- suited for considering differences in the amount of informa- tion and has the geometric property that geodesics between two points naturally bend toward the origin, where the rep- resentational capacity is lower. Leveraging these properties, we propose a novel framework, Hyperbolic Feature Inter- polation (HyFI), which interpolates between semantic and perceptual visual features along hyperbolic geodesics. This enables both the fusion and compression of perceptual and se- mantic information, effectively reflecting the limited expres- siveness of brain signals and the entangled nature of these features. As a result, it facilitates better alignment between brain and visual features. We demonstrate that HyFI achieves state-of-the-art performance in zero-shot brain-to-image re- trieval, outperforming prior methods with Top-1 accuracy im- provements of up to +17.3% on THINGS-EEG and +9.1% on THINGS-MEG. Code — https://github.com/ku-milab/HyFI

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

- **关联方向**：本文与读者关注的“brain decoding”“representation alignment”高度契合，直接探讨脑信号与视觉表征的对齐方法。同时涉及双曲几何表示学习，为“fMRI representation”“multi-view constraint”等方向提供了新的几何视角。
- **启发与意义**：引入双曲空间建模脑-视觉模态间的信息不对称与特征纠缠问题，突破了传统欧氏空间对齐的局限。其融合与压缩语义/感知特征的思路，可启发将几何先验纳入神经编解码框架。
- **可借鉴点**：双曲测地线插值实现特征融合与信息压缩的技术路线可被迁移至其他多模态神经解码任务（如fMRI-to-image）。动态学习插值系数的自适应性设计具有通用参考价值。
- **阅读建议**：建议重点关注双曲几何在脑解码中的动机与消融实验部分，理解其为何优于欧氏空间。可进一步对比文中涉及的多种视觉编码器结果，思考其对fMRI应用的迁移可能性。

---

## 1. 论文的核心问题与整体含义

- **核心问题**：现有脑-视觉对齐工作存在两大缺陷：
    1.  **模态鸿沟**：脑信号与图像在信息层级上存在天然差异，脑信号包含的语义信息远少于图像嵌入，导致对齐困难。
    2.  **特征纠缠**：神经活动中语义与感知特征高度纠缠，现有方法独立处理二者，未能真实反映脑信号的编码特性。
- **整体含义**：提出利用**双曲空间**的几何特性（测地线自然弯曲至原点、原点处表征容量降低），对语义和感知视觉特征进行**融合与压缩**，生成更贴近脑信号有限表达能力的联合表征，从而提升脑-视觉对齐性能。

## 2. 论文提出的方法论

- **核心思想**：在双曲空间（Lorentz模型）中沿测地线插值语义特征 $z_s$ 和感知特征 $z_p$，使插值后表征同时实现“融合”与“压缩”，以匹配脑信号的信息局限与纠缠特性。
- **关键技术细节**：
    - **双曲空间建模**：采用 Lorentz 模型 $L^n$ 作为共享嵌入空间，通过指数/对数映射在双曲流形与切空间间转换。
    - **特征提取**：
        - **语义图像 $x^s_v$**：通过**中央凹模糊**模拟周边视觉，在保留语义的同时增强与脑信号的匹配度。
        - **感知图像 $x^p_v$**：通过**高斯模糊**抑制高频成分，在CLIP嵌入中放大感知属性。
        - 分别经冻结的视觉编码器 $f_v$ 和可学习线性映射 $W_s, W_p$ 后，经指数映射 $exp^κ_O$ 提升至双曲空间，得到 $z_v^s, z_v^p$。
    - **双曲特征插值 (HyFI)**：
        - 将 $z_v^p$ 通过 $log^κ_{z_v^s}$ 映射至 $z_v^s$ 的切空间。
        - 缩放切向量后经 $exp^κ_{z_v^s}$ 映射回双曲流形，得到插值视觉表征：
          $$\hat{z}_v = exp^κ_{z_v^s}\big(t \cdot log^κ_{z_v^s}(z_v^p)\big)$$
        - 插值系数 $t = σ(W_t f_v(x_v^s))$ 由语义特征动态学习，控制语义-感知混合比例。
    - **信息压缩机制**：双曲插值的权重 $\frac{\sinh((1-t)β)}{\sinh(β)}$ 和 $\frac{\sinh(tβ)}{\sinh(β)}$ 严格小于欧氏线性插值权重，使插值点自然更靠近原点，从而限制 $\| \tilde{p} \|$，降低表征复杂度。
    - **训练目标**：以插值特征 $\hat{z}_v$ 与脑信号特征 $z_b$ 在双曲空间中进行对比学习：
      $$\mathcal{L}_{\text{HCL}} = \mathcal{L}(\hat{z}_v, z_b) + \mathcal{L}(z_b, \hat{z}_v)$$
      其中 $\mathcal{L}$ 基于 Lorentz 距离 $d_L$ 构建。

## 3. 实验设计

- **数据集**：
    - **THINGS-EEG**：10名受试，快速序列视觉呈现范式。训练集1654类，测试集200类（零样本检索）。
    - **THINGS-MEG**：4名受试，271通道MEG。训练集1854类，测试集200类（零样本）。
- **评测基准**：200-way 零样本脑-图像检索，报告 **Top-1 / Top-5 准确率**。
- **对比方法**：BraVL, NICE, ATM-S, CogCap, UBP (前SOTA)。

## 4. 资源与算力

- **算力资源**：文中明确说明所有实验均在一张 **GTX 1080 Ti (12GB)** 上进行。
- **训练配置**：采用 AdamW (lr=3e-4, wd=1e-4, batch size=1024)，训练 50 epochs。训练时长未具体说明，但基于所报告的GPU配置属于轻量级计算。

## 5. 实验数量与充分性

- **实验充分性**：实验设计全面、客观、公平。
- **主要实验组**：
    1.  **主表**：在 THINGS-EEG 和 THINGS-MEG 上，分别于 Intra-subject 和 Inter-subject 设定下与 SOTA 对比。
    2.  **消融实验**：
        - 验证双曲空间 vs. 欧氏空间（CLIP空间）的对齐效果。
        - 验证双曲插值 vs. 无插值、欧氏空间插值的增益。
    3.  **编码器广泛性验证**：
        - **视觉编码器**：涵盖9种不同架构（如 CLIP ResNet-50/101, ViT-B/L/H, MERU, HyCoCLIP）。
        - **脑编码器**：涵盖4种架构（ShallowNet, EEGNet, TSConv, EEGProject）。
        - 所有组合下均报告一致提升。
    4.  **定性分析**：检索结果可视化、嵌入空间距离分布可视化、插值系数 $t$ 分析、图像增强效果验证。

## 6. 论文的主要结论与发现

- HyFI通过**双曲插值**融合并压缩语义/感知特征，有效模拟了脑信号**信息有限**且**特征纠缠**的特性。
- 双曲空间在处理脑-视觉模态的**信息不对称**上显著优于欧氏空间。
- HyFI在 THINGS-EEG 和 THINGS-MEG 上均取得 **SOTA** 零样本检索性能（EEG: 68.2% Top-1; MEG: 35.8% Top-1），大幅超越之前方法（分别+17.3% 和 +9.1%）。
- 方法具有**极强的通用性**，在各类视觉与脑编码器组合下均能带来稳定提升。
- 学到的小 $t$ 值倾向于强调类别典型的语义，大 $t$ 值则倾向于低层视觉属性。

## 7. 优点

- **创新性的几何视角**：首次将双曲性质（测地线弯曲、容积指数增长）用于建模脑信号的**信息压缩**与**纠缠表示**，动机清晰且有理论支撑。
- **效果显著且稳定**：性能超越前 SOTA 幅度巨大，且在多数据集、多编码器下全面验证，鲁棒性强，统计显著性检验严谨（p<0.01）。
- **简洁高效**：方法构建于标准的双曲对比学习框架之上，仅通过特征插值即实现大幅提升，计算代价小（单张消费级GTX 1080 Ti即可完成）。

## 8. 不足与局限

- **数据集模态局限**：仅在 **EEG/MEG**（高时间分辨率）上充分验证，虽契合论文动机，但未在**fMRI（高空间分辨率）** 上测试，限制了其在具备精细空间定位需求的脑解码任务中的直接说服力。
- **离线增强依赖**：需要一套固定的图像增强策略（中央凹模糊/高斯模糊）分离语义感知特征，对于更自然的动态视觉刺激可能存在适配成本。
- **插值机制简洁性的“双刃剑”**：仅用两个端点特征插值；真实神经活动的纠缠可能更为复杂，如涉及中间视觉区域的特征层次，该方法是否足以覆盖所有复杂度待考。

## 9. 研究价值与阅读建议

- **关联方向**：与读者关注的“**brain decoding**”、“**representation alignment**”、“**neural prior**”紧密相关。它本质上是在为“**neural prior**”建模一种几何形式的先验，可用于将“**multi-view constraint**”引入双曲空间。
- **启发与意义**：本工作启示我们，脑-视觉对齐不仅仅是寻找更强的视觉模型，更需从**几何表示空间**与**脑信号的内在特性（有限信息、纠缠性）** 出发设计专门的对齐机制。这对fMRI解码中如何融合多尺度特征（如层次化视觉通路）具有启发。
- **可借鉴点**：
    1.  **双曲空间作为fMRI表示约束**：可将双曲空间的“原点压缩”性质量化为fMRI体素响应的信号稀疏性或信噪比先验。
    2.  **测地线特征混合**：用于更广泛的“multi-view”脑信号对齐（如同时对齐EEG与fMRI的同一视觉刺激），替代简单的特征拼接或加和。
- **阅读建议**：精读 **Method** 部分对“信息压缩”的推导（Eq.10-11）及**消融实验**，以掌握其核心思想；可快速浏览编码器泛化实验以了解其可推广性，但不必深入各编码器细节。

（完）
