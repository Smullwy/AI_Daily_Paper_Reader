---
title: AAAI26 Probability Distribution Alignment and Low-Rank Weight Decomposition for Source-Free Domain Adaptive Brain Decoding
title_zh: 面向无源域自适应脑解码的概率分布对齐与低秩权重分解
authors: "Ganxi Xu, Jinyi Long, Jia Zhang"
date: 2026-06-01
pdf: assets/local_pdfs/local-20260601-173929561508-aaai26-probability-distribution-alignment-and-low-rank-weight-decomp.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 使用CLIP嵌入的无源域自适应跨被试脑解码
tldr: 针对脑解码中个体差异、模态不对齐和高维嵌入问题，提出无源域自适应框架，利用MMD和SVD融合图文嵌入并用WD对齐，结合LoRA降低成本，性能超越现有方法。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260601-173929561508-aaai26-probability-distribution-alignment-and-low-rank-weight-decomp/fig-004.webp\", \"caption\": \"Figure 1: The framework of the target model adaptation.\", \"page\": 4, \"index\": 4, \"width\": 1041, \"height\": 317}, {\"url\": \"assets/figures/local-pdf/local-20260601-173929561508-aaai26-probability-distribution-alignment-and-low-rank-weight-decomp/fig-002.webp\", \"caption\": \"Table 2: Quantitative evaluation on brain decoding. All metrics are averaged over the results from the four subjects.\", \"page\": 6, \"index\": 2, \"width\": 1058, \"height\": 264}, {\"url\": \"assets/figures/local-pdf/local-20260601-173929561508-aaai26-probability-distribution-alignment-and-low-rank-weight-decomp/fig-003.webp\", \"caption\": \"Figure 2: Qualitative results.\", \"page\": 6, \"index\": 3, \"width\": 1052, \"height\": 611}, {\"url\": \"assets/figures/local-pdf/local-20260601-173929561508-aaai26-probability-distribution-alignment-and-low-rank-weight-decomp/fig-001.webp\", \"caption\": \"Table 5: Ablation study on DoRA and LoRA.\", \"page\": 7, \"index\": 1, \"width\": 948, \"height\": 327}]"
motivation: 个体差异导致隐私与存储负担，模态对齐忽视边缘分布和图文交互，高维嵌入计算代价大。
method: 提出无源域自适应框架，用MMD对齐边缘分布，SVD生成图文融合嵌入并用WD优化，LoRA降低调参开销。
result: 实验表明所提方法在脑解码任务中优于现有最先进技术。
conclusion: 所提方法有效应对隐私、对齐与效率挑战，显著提升脑解码性能。
---

## 摘要
脑解码当前面临个体差异、模态对齐和高维嵌入等重大挑战。为解决个体差异，研究者常使用源受试者数据，但这会引发隐私泄露和沉重的数据存储负担等问题。在模态对齐方面，现有工作侧重于对齐Softmax概率分布，却忽略了边缘概率分布的对齐，导致模态错位。此外，图像和文本分别与fMRI对齐，未考虑图像与文本之间复杂的相互作用，致使图像重建效果不佳。最后，CLIP嵌入的极高维度带来了显著的计算开销。尽管可以通过忽略图像获得的补丁数量和文本获取的令牌数量来降低CLIP嵌入的维度，但这会以模型性能大幅下降为代价，形成两难困境。为克服这些局限，我们提出了一种基于无源域自适应（SFDA）的脑解码框架。首先，我们将SFDA应用于脑解码，该方法在目标模型自适应时仅需获取源模型而无需访问源数据，以应对跨受试者差异、隐私担忧和沉重的数据存储负担。其次，我们采用最大均值差异（MMD）来对齐不同模态嵌入之间的边缘概率分布。此外，为适应图像与文本间复杂的相互作用，我们拼接图像和文本的嵌入，然后利用奇异值分解（SVD）获得新的嵌入。而且，为获得更好的图像生成质量，我们使用Wasserstein距离（WD）对齐新嵌入的概率分布。最后，在SFDA的目标模型自适应阶段，我们采用低秩自适应（LoRA）来减少调优目标模型的高昂开销。充分的实验表明，我们的工作在脑解码任务上优于现有最优方法。扩展版本 — https://arxiv.org/abs/2504.09109

## Abstract
Brain decoding currently faces significant challenges in indi- vidual differences, modality alignment, and high-dimensional embeddings. To address individual differences, researchers often use source subject data, which leads to issues such as privacy leakage and heavy data storage burdens. In modal- ity alignment, current works focus on aligning the softmax probability distribution but neglect the alignment of marginal probability distributions, resulting in modality misalignment. Additionally, images and text are aligned separately with fMRI without considering the complex interplay between im- ages and text, leading to poor image reconstruction. Finally, the enormous dimensionality of CLIP embeddings causes significant computational costs. Although the dimensionality of CLIP embeddings can be reduced by ignoring the num- ber of patches obtained from images and the number of to- kens acquired from text, this comes at the cost of a signif- icant drop in model performance, creating a dilemma. To overcome these limitations, we propose a source-free domain adaptation (SFDA)-based brain decoding framework. Firstly, we apply SFDA, which only acquires the source model with- out accessing source data during target model adaptation, to brain decoding to address cross-subject variations, privacy concerns, and the heavy burden of data storage. Secondly, we employ maximum mean discrepancy (MMD) to align the marginal probability distributions between embeddings of different modalities. Moreover, to accommodate the complex interplay between image and text, we concatenate the embed- dings of image and text and then use singular value decom- position (SVD) to obtain a new embedding. What’s more, to achieve better image generation quality, we employ the Wasserstein distance (WD) to align the probability distribu- tions of new embeddings. Finally, in the target model adapta- tion phase of SFDA, we employ low-rank adaptation (LoRA) to reduce the high expense of tuning the target model. Suf- ficient experiments demonstrate our work outperforms state- of-the-art methods for brain decoding tasks. Extended version — https://arxiv.org/abs/2504.09109

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：强相关于“brain decoding”与“fMRI representation”，同时涉及“representation alignment”和跨模态约束，与读者研究方向高度吻合。  
- **启发与意义**：该工作在隐私保护下实现跨被试脑解码，展示了如何通过无源域自适应和概率分布对齐提升视觉重建，对fMRI表示学习与脑编码研究有直接参考价值。  
- **可借鉴点**：可借鉴的无源域自适应框架、MMD边缘对齐、SVD图文融合嵌入、Wasserstein距离优化以及LoRA高效适配策略。  
- **阅读建议**：建议重点阅读方法论中对模态对齐与图文交互部分的刻画，以及消融实验如何验证各组件贡献，用于自身fMRI对齐或脑编码任务。

## 1. 论文的核心问题与整体含义
- 脑解码旨在从fMRI等脑信号重建视觉刺激，面临三个主要挑战：
  - 跨受试者差异：脑活动个体差异大，单独训练模型泛化差；使用源受试者数据会引发隐私泄露和大量数据存储负担。
  - 模态对齐不完整：现有方法多采用SoftCLIP损失，只对齐Softmax概率分布，忽略边缘概率分布的直接对齐，造成fMRI与图像/文本模态之间的分布错位。
  - 图像与文本交互被忽略：图像和文本与fMRI独立对齐，未考虑两者间的复杂相互作用，导致图像重建质量不佳。
  - 高维嵌入计算开销：CLIP图像嵌入（257×768）和文本嵌入（77×768）维度极高，全微调参数庞大，降低维度又会损害性能。
- 整体含义：提出一种基于无源域自适应（SFDA）的脑解码框架，在保护隐私、降低存储负担的同时，通过边缘分布对齐、图文融合与概率分布优化以及低秩适配，达成更优的跨被试图像重建。

## 2. 方法论
### 核心思想
- 分为源模型训练阶段和目标模型适应阶段，目标模型适应时仅使用源模型参数，无需访问源受试者数据，实现隐私保护和存储减负。
- 在两端均引入最大均值差异（MMD）对齐fMRI预测嵌入与CLIP嵌入的边缘概率分布，弥补SoftCLIP在分布对齐上的不足。
- 拼接预测的图像和文本嵌入与对应的CLIP嵌入，用奇异值分解（SVD）将奇异值作为新的统一嵌入，捕捉图文交互信息。
- 利用Wasserstein距离（WD）对齐统一嵌入的概率分布，提升图像生成质量。
- 在图像头和文头应用权重分解的低秩适应（DoRA），大幅减少可训练参数，缓解高维嵌入带来的计算负担。

### 关键技术细节与流程
- **源模型训练**：嵌入器 $E_s$ 将fMRI体素 $v_s$ 转为嵌入 $e_s$，翻译器 $T_s$ 生成 $(\hat{e}_{s,I}, \hat{e}_{s,C})$，图像头和文头得到 $\hat{e}'_{s,I}, \hat{e}'_{s,C}$。
  - SoftCLIP损失：$$L_{\text{SoftCLIP}}(\hat{e}', e) = -\sum_{i=1}^N \sum_{j=1}^N \left[ \frac{\exp(e_i\cdot e_j/\tau)}{\sum_{m}\exp(e_i\cdot e_m/\tau)} \cdot \log\left( \frac{\exp(\hat{e}'_i\cdot e_j/\tau)}{\sum_{m}\exp(\hat{e}'_i\cdot e_m/\tau)} \right) \right]$$
  - MMD损失：$L_{\text{MMD}}(\hat{e}', e) = \text{MMD}(\hat{e}', e)$
  - 图像分支损失：$L_{\text{image}} = L_{\text{SoftCLIP}}(\hat{e}'_I, e_I) + L_{\text{MMD}}(\hat{e}'_I, e_I)$
  - 文本分支损失：$L_{\text{text}} = L_{\text{SoftCLIP}}(\hat{e}'_C, e_C) + L_{\text{MMD}}(\hat{e}'_C, e_C)$
  - 源模型总损失：$L_{\text{SRC}} = L_{\text{image}} + L_{\text{text}}$
- **目标模型适应**：
  - 同样使用MMD和SoftCLIP损失独立对图像和文本分支进行对齐。
  - 图文交互：拼接预测与CLIP的图文嵌入，经SVD取奇异值：
    $\hat{e}'_u = \text{Concatenate}(\hat{e}'_I, \hat{e}'_C), \quad e_u = \text{Concatenate}(e_I, e_C)$
    $\hat{U}'_u, \hat{\Sigma}'_u, \hat{V}'_u = \text{SVD}(\hat{e}'_u), \quad U_u, \Sigma_u, V_u = \text{SVD}(e_u)$
    $\hat{e}'_{\text{SVD}} = \hat{\Sigma}'_u, \quad e_{\text{SVD}} = \Sigma_u$
  - WD损失：$L_{\text{WD}} = \text{WD}(\hat{e}'_{\text{SVD}}, e_{\text{SVD}})$
  - DoRA：将预训练权重分解为幅度和方向，方向更新采用低秩矩阵：
    $$W' = m\frac{W_0 + BA}{\|W_0 + BA\|_c}$$
    其中 $B, A$ 为低秩矩阵，$m$ 为幅度向量，$\|\cdot\|_c$ 为列向范数。
  - 总损失：$L_{\text{ADP}} = L_{\text{image}} + L_{\text{text}} + L_{\text{WD}}$

## 3. 实验设计
- **数据集**：Natural Scenes Dataset (NSD)，采用其中完成全部扫描的4名受试者（subj01, subj02, subj05, subj07）。训练集8859张图像对应24980次fMRI试次，测试集982张图像对应2770次试次，使用NSDGeneral ROI预处理的体素数据。
- **基准对比方法**：Takagi et al. (2023)、Brain-Diffuser (Ozcelik and VanRullen 2023)、MindEye (Scotti et al. 2024)、DREAM (Xia et al. 2024a)、MindBridge (Wang et al. 2024)、UMBRAE (Xia et al. 2024b)、Shen et al. (2025)。注意部分方法声称单模型但实际仍包含受试者专属模块，本文仅使用一个嵌入器、一个翻译器、一对头。
- **评估指标**：低层次（PixCorr, SSIM）和高层次（Alex(2), Alex(5), Incep，CLIP，EffNet-B，SwAV）图像重建质量指标。

## 4. 资源与算力
- 实验平台：3块 Tesla V100S PCIe 32GB GPU。
- 训练设置：源模型训练 600 epochs，目标模型适应 200 epochs；batch size 50；AdamW优化器，最大学习率 $1.5\times10^{-4}$。

## 5. 实验数量与充分性
- 主要定量对比：全受试者平均结果表（Table 2），涵盖8项指标，对比7种现有方法，本方法（含/不含DoRA）均列其中。
- 消融实验：
  - MMD与聚合方法（SVD+WD）有无的四组消融（Table 4）。
  - DoRA vs LoRA，不同秩 r（4,8,16,32,64）对比全微调（Table 5），同时展示可训练参数占比。
  - 单嵌入器与多嵌入器对比，验证统一嵌入器的效果（Table 3）。
- 定性分析：提供四名受试者的视觉重建示例（Figure 2）。
- 跨受试者差异适应性验证：t-SNE可视化源和目标特征在适应前后的分布演变（Figure 3）。
- 实验设计充分：覆盖多个基线、详尽消融、多维度评估，且与声称单模型但隐含受试者模块的方法进行公平比较；采用三源一目标的交叉验证，客观性强。

## 6. 主要结论与发现
- SFDA可有效应用于脑解码，在无需访问源数据的前提下解决跨受试者差异，同时保护隐私并降低存储负担。
- MMD对齐边缘概率分布能显著提升图像重建性能，弥补SoftCLIP仅对齐条件分布的不足。
- 通过SVD和WD构建并优化统一图文嵌入，充分捕捉图像与文本的复杂交互，进一步提高了生成质量。
- DoRA以极低的额外参数量（r=8时仅6.34%可训练参数）实现了接近全微调甚至更优的性能，有效缓解高维嵌入的计算开销。
- 本方法在全部对比指标上达到最优或次优，验证了整体框架的优越性。

## 7. 优点
- **隐私友好**：SFDA机制避免传递源数据，符合医疗数据隐私要求。
- **对齐更全面**：引入MMD对齐边缘分布，从分布层面拉近模态，有理论和实验支撑。
- **图文融合创新**：利用SVD从拼接的高维嵌入中提取结构化特征，并用WD优化，考虑了跨模态的联合分布。
- **高效适配**：DoRA大幅减少可训参数，降低计算成本，适合资源受限的场景。
- **公共基准与严格对比**：在NSD上与当前主流方法全面比较，并仔细指出了多嵌入器方法的实际差异，增加了公平性。

## 8. 不足与局限
- **数据集单一**：仅在NSD上验证，未在其他fMRI数据集（如BOLD5000）或不同模态脑信号（如EEG）上测试。
- **受试者数量有限**：仅4名受试者，尽管采用交叉验证，但跨人群的泛化性仍需更大规模验证。
- **依赖预训练模型**：方法紧密绑定CLIP，若用其他视觉语言模型可能需要重新适配。
- **无直接隐私攻击评估**：虽然声称保护隐私，但未进行如成员推断攻击等隐私保护强度的量化分析。
- **SVD和WD的计算代价**：虽然参数高效，但SVD和距离计算可能增加前向计算开销，文中未讨论推理时间。

## 9. 研究价值与阅读建议（见前文第一节）
（该节已按要求置于文章开头，此处不再重复。）

（完）
