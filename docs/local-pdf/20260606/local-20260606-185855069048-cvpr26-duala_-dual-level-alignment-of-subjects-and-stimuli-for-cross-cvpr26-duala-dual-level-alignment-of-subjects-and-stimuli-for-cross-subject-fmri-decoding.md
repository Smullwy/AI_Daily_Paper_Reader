---
title: CVPR26 Duala_ Dual-Level Alignment of Subjects and Stimuli for Cross-Subject fMRI Decoding
title_zh: CVPR26 Duala：跨受试者fMRI解码中的刺激与受试者双层对齐
authors: Shumeng Li; Jintao Guo; Jian Zhang; Yulin Zhou; Luyang Cao; Yinghuan Shi
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-185855069048-cvpr26-duala_-dual-level-alignment-of-subjects-and-stimuli-for-cross.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 提出跨被试fMRI视觉解码的双层对齐方法
tldr: "跨被试视觉解码通过脑活动重建视觉体验，但有限数据适应新被试时难以维持刺激语义一致性和脑响应对齐。为此提出 Duala 框架，采用刺激层语义对齐与关系一致性策略保持语义边界，结合被试层分布特征扰动捕获个体差异，防止过拟合。在 NSD 数据集上用约1小时 fMRI 微调后，Duala 取得81.1%图像-大脑检索准确率，优于现有方法。"
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-185855069048-cvpr26-duala_-dual-level-alignment-of-subjects-and-stimuli-for-cross/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 4449, \"height\": 3143}, {\"url\": \"assets/figures/local-pdf/local-20260606-185855069048-cvpr26-duala_-dual-level-alignment-of-subjects-and-stimuli-for-cross/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 3201, \"height\": 1537}, {\"url\": \"assets/figures/local-pdf/local-20260606-185855069048-cvpr26-duala_-dual-level-alignment-of-subjects-and-stimuli-for-cross/fig-003.webp\", \"caption\": \"\", \"page\": 3, \"index\": 3, \"width\": 4174, \"height\": 2134}, {\"url\": \"assets/figures/local-pdf/local-20260606-185855069048-cvpr26-duala_-dual-level-alignment-of-subjects-and-stimuli-for-cross/fig-004.webp\", \"caption\": \"\", \"page\": 4, \"index\": 4, \"width\": 2529, \"height\": 1725}, {\"url\": \"assets/figures/local-pdf/local-20260606-185855069048-cvpr26-duala_-dual-level-alignment-of-subjects-and-stimuli-for-cross/fig-005.webp\", \"caption\": \"\", \"page\": 5, \"index\": 5, \"width\": 3678, \"height\": 2332}, {\"url\": \"assets/figures/local-pdf/local-20260606-185855069048-cvpr26-duala_-dual-level-alignment-of-subjects-and-stimuli-for-cross/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 2786, \"height\": 1130}, {\"url\": \"assets/figures/local-pdf/local-20260606-185855069048-cvpr26-duala_-dual-level-alignment-of-subjects-and-stimuli-for-cross/fig-007.webp\", \"caption\": \"\", \"page\": 7, \"index\": 7, \"width\": 2804, \"height\": 1405}, {\"url\": \"assets/figures/local-pdf/local-20260606-185855069048-cvpr26-duala_-dual-level-alignment-of-subjects-and-stimuli-for-cross/fig-008.webp\", \"caption\": \"\", \"page\": 8, \"index\": 8, \"width\": 1234, \"height\": 783}]"
motivation: 现有跨被试解码方法在有限数据适应新被试时，难以同时保持刺激语义一致性和被试间脑响应对齐。
method: 提出 Duala，通过刺激层的语义对齐和关系一致性策略，以及被试层的分布特征扰动机制，实现双层次对齐。
result: "在 NSD 上仅用1小时 fMRI 微调，图像-大脑检索准确率超81.1%，优于现有微调策略。"
conclusion: Duala 通过双层次对齐有效提升跨被试解码性能，在检索和重建任务中均表现优越。
---

## 摘要
跨受试者视觉解码旨在从不同个体的脑活动中重建视觉体验，从而实现更具可扩展性和实用性的脑机接口。然而，现有方法在适应数据有限的新受试者时，往往会出现性能下降，因为它们难以同时保持刺激的语义一致性以及脑响应的对齐。为了解决这些挑战，我们提出了Duala，一种双层对齐框架，旨在fMRI跨受试者视觉解码中实现刺激级别的一致性和受试者级别的对齐。（1）在刺激层面，Duala引入了一种语义对齐和关系一致性策略，保持类内相似性和类间可分性，在适应过程中维持清晰的语义边界。（2）在受试者层面，开发了一种基于分布的特征扰动机制，以捕获全局和受试者特定的变异，能够在不发生过拟合的情况下适应个体的神经表征。在自然场景数据集（NSD）上的实验表明，Duala有效改善了跨受试者的对齐效果。值得注意的是，即使仅使用约一小时fMRI数据进行微调，Duala仍实现了超过81.1%的图像到大脑检索准确率，并在检索和重建任务中一致地优于现有微调策略。我们的代码可从https://github.com/ShumengLI/Duala获取。

## Abstract
Cross-subject visual decoding aims to reconstruct visual ex- periences from brain activity across individuals, enabling more scalable and practical brain-computer interfaces. However, existing methods often suffer from degraded per- formance when adapting to new subjects with limited data, as they struggle to preserve both the semantic consistency of stimuli and the alignment of brain responses. To address these challenges, we propose Duala, a dual-level alignment framework designed to achieve stimulus-level consistency and subject-level alignment in fMRI-based cross-subject vi- sual decoding. (1) At the stimulus level, Duala introduces a semantic alignment and relational consistency strategy that preserves intra-class similarity and inter-class separability, maintaining clear semantic boundaries during adaptation. (2) At the subject level, a distribution-based feature pertur- bation mechanism is developed to capture both global and subject-specific variations, enabling adaptation to individ- ual neural representations without overfitting. Experiments on the Natural Scenes Dataset (NSD) demonstrate that Du- ala effectively improves alignment across subjects. Remark- ably, even when fine-tuned with only about one hour of fMRI data, Duala achieves over 81.1% image-to-brain retrieval accuracy and consistently outperforms existing fine-tuning strategies in both retrieval and reconstruction. Our code is available at https://github.com/ShumengLI/Duala.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**: 本文直接聚焦脑解码、fMRI表征对齐与跨受试者泛化，与读者的研究方向高度吻合。
- **启发与意义**: 说明在少数据微调下，单纯对齐空间会破坏语义结构；提示未来工作需同时维护“刺激语义一致性”与“个体神经差异”。
- **可借鉴点**: 可将刺激级语义保持（语义对齐、关系一致性损失）与受试级分布扰动结合起来，作为跨被试解码的微调范式。
- **阅读建议**: 优先精读第3节方法（SSP模块与SDP模块）及消融实验（表3），并关注实际训练开销（表2），以评估在自己数据与任务上的可迁移性。

## 1. 论文的核心问题与整体含义
- **核心问题**: 跨受试者fMRI视觉解码中，当仅用少量数据（约一小时扫描）适应新受试者时，性能大幅下降，例如已有方法在微调后图像到大脑检索准确率下降约41%。
- **问题根因**: 
  - **刺激层不一致**: 微调后的模型在新受试者上类别边界模糊，无法准确表征不同刺激的语义结构。
  - **受试层失配**: 不同受试者观看的图像不完全相同（NSD中超过90%的视觉刺激互不相同），直接一对一强制对齐不可行。
- **整体含义**: 提出**Duala**框架，通过在刺激层保持语义一致性（类内相似、类间可分）和在受试层捕获个体差异（分布扰动），实现稳健的跨受试者解码。

## 2. 方法论
**Duala框架核心思想**: 在微调阶段同时施加刺激级语义保持（Stimulus-level Semantic Preservation, SSP模块）和受试级分布扰动（Subject-level Distribution Perturbation, SDP模块），使得模型既适应新受试者的独特神经表征，又不丢失预训练时学到的语义结构。

### 2.1 预训练基线
沿用MindEye2的多受试者共享潜空间方法：先通过岭回归将受试者特异性voxel映射到4096维共享潜空间，再经MLP backbone（四个残差块）映射到OpenCLIP ViT-bigG/14图像token空间，随后通过扩散先验和两个轻量MLP子模块完成重建与检索。损失函数为：
$$L_{dec} = L_{prior} + \alpha_1 L_{BiMixCo} + \alpha_2 L_{lowlevel}$$

### 2.2 刺激层语义保持（SSP）
- **语义对齐损失（Semantic Alignment Loss）**：
  对于新受试者$sN$，对每个锚样本$z_a^{sN}$，在同一类别内取正样本$z_p^{sN}$，不同类别取负样本$z_n^{sN}$，强制同类余弦相似度高于异类：
  $$L_{sa} = \sum_a \max\left(0, m - s(z_a^{sN}, z_p^{sN}) + s(z_a^{sN}, z_n^{sN})\right)$$
  其中$s(\cdot,\cdot)$为余弦相似度，$m$为间隔超参数。
- **关系一致性损失（Relational Consistency Loss）**：
  为保持跨受试者类间关系的一致，对于每个类别计算原型$p_c^s$，构建类间相似矩阵$S^s$（元素为原型间余弦相似度）。从预训练源受试者聚合得到参考矩阵$S^{ref}$，微调时最小化新受试者矩阵$S^{sN}$与$S^{ref}$的差异：
  $$L_{rc} = \frac{1}{|\Omega|} \sum_{(c_1,c_2)\in\Omega} \left( S^{sN}_{c_1,c_2} - S^{ref}_{c_1,c_2} \right)^2$$

### 2.3 受试层分布扰动（SDP）
- **分布建模**：将fMRI表征分解为刺激驱动因素（共享语义响应）和受试特异性因素。利用源受试者数据对每个类别$c$计算类均值$\mu_c$和受试特异性标准差$\sigma_c^s$：
  $$\mu_c = \frac{1}{K}\sum_{s=1}^K \bar{z}_c^s,\quad \sigma_c^s = \sqrt{\text{Var}(\bar{z}_c^s)}$$
- **特征扰动**：对新受试者的表征$z_i^{sN}$，先中心化减去$\mu_c$得到受试特异性部分，再用源受试者的$\sigma_c^s$进行高斯缩放，最后加回$\mu_c$以模拟不同个体的合理变异：
  $$\widetilde{z}_i^{sN} = \mu_c + \frac{1}{K}\sum_{s=1}^K \sigma_c^s \odot (z_i^{sN} - \mu_c)$$
  该增强保留了语义结构，同时使模型对个体差异鲁棒。

### 2.4 总体微调目标
$$L_{ft} = L_{dec} + \lambda_1 L_{sa} + \lambda_2 L_{rc}$$
其中$\lambda_1=1.0$, $\lambda_2=0.1$。训练时采用LoRA适配器（秩8）高效微调MLP backbone，冻结扩散先验等模块。

## 3. 实验设计
- **数据集**: Natural Scenes Dataset (NSD) [1]，包含多个受试者的7T fMRI数据，图像来自MSCOCO-2017。按数据受限设定，每个新受试者仅用一个session（约1小时，750试次，约占全数据2.5%）微调。
- **测试受试者**: 受试者1、2、5、7。
- **对比方法**:
  - MindEye2 (ICML 2024) – 共享受试者模型，采用岭回归共享潜空间。
  - MindAligner (ICML 2025) – 显式脑功能对齐。
  - MindTuner (AAAI 2025) – 视觉指纹与语义修正。
- **评估指标**:
  - 低级：PixCorr, SSIM, AlexNet(2), AlexNet(5)
  - 高级：Inception, CLIP, EfficientNet-B, SwAV
  - 检索：图像检索（brain→image）和大脑检索（image→brain）准确率。
- **实现细节**: PyTorch，单张NVIDIA A800 GPU。预训练与MindEye2相同，微调用LoRA，AdamW优化器，学习率3e-4，OneCycle调度，150 epochs，batch size 10。

## 4. 资源与算力
- 使用**单张NVIDIA A800 GPU**完成训练。
- 微调参数量极少（MLP部分仅4.68M，总计69.09M），相较于MindEye2（2.2G）和MindTuner（76.7M）更轻量，未报告具体训练时长，但凭参数规模和150 epochs设置推测开销可控。

## 5. 实验数量与充分性
- **主要对比实验**：在4个受试者上比较Duala与3种现有方法，报告了平均与各受试者的全部指标，覆盖低级、高级和双向检索（表1），共约60个指标项。
- **消融实验**：在受试者1上，逐步添加SDP模块、$L_{sa}$、$L_{rc}$，验证各组件贡献（表3），共5组配置。
- **参数敏感性**：测试$\lambda_1$和$\lambda_2$的不同组合（表4），共4组。
- **效率分析**：对比训练参数量（表2）。
- **功能对齐可视化**：使用Transfer Quantity (TQ) 热图展示脑区对应关系（图8），并与全数据（40小时）模型和MindEye2对比。
- **表示空间可视化**：t-SNE图显示语义边界保持效果（图7），以及重建图像示例（图6）。
- **总体评价**：实验涵盖多个受试者、对比多种前沿方法、进行组件消融和超参数分析，并提供定性和定量证据，实验设计较充分且公平；但受限于单一数据集（NSD），未见其他数据集验证，可能影响泛化性结论的强度。

## 6. 主要结论与发现
- Duala在仅使用约1小时fMRI数据微调下，图像检索和大脑检索准确率分别达84.5%和81.1%，显著优于MindEye2、MindAligner和MindTuner，尤其大脑检索领先MindTuner 5.1%。
- 在重建质量上，Duala在PixCorr、AlexNet(2)、Inception、CLIP等多项指标取得最优或次优，重建图像语义正确性更高，类别混乱更少。
- 消融实验证实，刺激层语义保持（SSP）和受试层分布扰动（SDP）共同作用才能达到最佳均衡，单独使用$L_{sa}$可提高大脑检索但略降图像检索，结合关系一致性损失后取得全面最优。
- 效率优势：仅引入极少量可训练参数（共计69M），远低于现有全参数微调方法，但仍获得最高解码性能。
- TQ热图显示，Duala能够恢复与全数据模型相似的脑区功能专门化热点，表明其对齐方式更符合大脑固有功能结构。

## 7. 优点
- **创新性双层对齐**：首次在跨受试者解码中同时明确建模刺激语义保持和受试特异性变异，从根本原因出发改善微调退化。
- **轻量高效**：采用LoRA微调仅4.68M参数，适合有限数据场景，避免过拟合。
- **实验全面扎实**：4个受试者、多方法对比、完备的消融与敏感性分析，置信度高。
- **可视化解释强**：t-SNE和TQ热图直观展示语义保持与功能对齐的效果，增强了理论说服力。
- **开源可复现**：提供代码，利于后续研究验证与改进。

## 8. 不足与局限
- **数据集局限**：仅在NSD上验证，该数据集图像多样性较高但不包含其他模态或任务，未展示在更普通或临床数据上的效果。
- **预训练依赖**：框架基于MindEye2的预训练骨干，若预训练模型改变或初始性能不足，双层对齐的有效性可能下降。
- **类别先验需求**：SSP模块中的语义对齐和关系一致性都依赖于图像类别标注，在无类别标签的完全无监督情景下无法直接使用。
- **超参数敏感度**：关系一致性损失权重$\lambda_2$对性能有较明显影响，可能需针对不同受试者或数据进行微调。
- **未探索更多个体差异建模方式**：受试级扰动仅使用类别标准差缩放，未深入建模更复杂的个体分布形状。

## 9. 研究价值与阅读建议（已在首节输出）
（无额外内容）

（完）
