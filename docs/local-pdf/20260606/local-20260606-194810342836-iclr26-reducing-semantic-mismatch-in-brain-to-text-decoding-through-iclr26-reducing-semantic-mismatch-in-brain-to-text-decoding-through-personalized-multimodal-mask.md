---
title: ICLR26 Reducing Semantic Mismatch in Brain-to-Text Decoding Through Personalized Multimodal Masking
title_zh: ICLR26 通过个性化多模态掩码减少脑到文本解码中的语义失配
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-194810342836-iclr26-reducing-semantic-mismatch-in-brain-to-text-decoding-through.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 通过个性化多模态掩码和跨被试对齐弥合脑与机器语义差距
tldr: 针对现有基于VLMs的神经解码中存在的语义不匹配问题，本文提出Yo’Mind框架，通过最优传输驱动的个性化多模态语义掩码，根据个体神经响应自适应剪枝冗余视觉语义，增强脑与机器表征对齐，并在统一架构中实现脑-视觉-语言对齐和跨被试解码，取得最先进的脑到文本重建性能并提升可解释性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-194810342836-iclr26-reducing-semantic-mismatch-in-brain-to-text-decoding-through/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 7523, \"height\": 2240}, {\"url\": \"assets/figures/local-pdf/local-20260606-194810342836-iclr26-reducing-semantic-mismatch-in-brain-to-text-decoding-through/fig-002.webp\", \"caption\": \"\", \"page\": 4, \"index\": 2, \"width\": 5391, \"height\": 2245}, {\"url\": \"assets/figures/local-pdf/local-20260606-194810342836-iclr26-reducing-semantic-mismatch-in-brain-to-text-decoding-through/fig-003.webp\", \"caption\": \"\", \"page\": 5, \"index\": 3, \"width\": 7927, \"height\": 3390}, {\"url\": \"assets/figures/local-pdf/local-20260606-194810342836-iclr26-reducing-semantic-mismatch-in-brain-to-text-decoding-through/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 3076, \"height\": 2739}, {\"url\": \"assets/figures/local-pdf/local-20260606-194810342836-iclr26-reducing-semantic-mismatch-in-brain-to-text-decoding-through/fig-005.webp\", \"caption\": \"\", \"page\": 8, \"index\": 5, \"width\": 8635, \"height\": 1978}, {\"url\": \"assets/figures/local-pdf/local-20260606-194810342836-iclr26-reducing-semantic-mismatch-in-brain-to-text-decoding-through/fig-006.webp\", \"caption\": \"\", \"page\": 9, \"index\": 6, \"width\": 3133, \"height\": 1877}, {\"url\": \"assets/figures/local-pdf/local-20260606-194810342836-iclr26-reducing-semantic-mismatch-in-brain-to-text-decoding-through/fig-007.webp\", \"caption\": \"\", \"page\": 15, \"index\": 7, \"width\": 3773, \"height\": 1348}, {\"url\": \"assets/figures/local-pdf/local-20260606-194810342836-iclr26-reducing-semantic-mismatch-in-brain-to-text-decoding-through/fig-008.webp\", \"caption\": \"\", \"page\": 15, \"index\": 8, \"width\": 2013, \"height\": 1474}, {\"url\": \"assets/figures/local-pdf/local-20260606-194810342836-iclr26-reducing-semantic-mismatch-in-brain-to-text-decoding-through/fig-009.webp\", \"caption\": \"\", \"page\": 16, \"index\": 9, \"width\": 5688, \"height\": 1484}]"
motivation: 现有脑到文本解码方法在表征对齐时存在语义不匹配，因人脑选择性编码视觉场景且注意力存在个体差异。
method: 提出Yo’Mind，一种基于最优传输的个性化多模态语义掩码框架，利用动态语义剪枝与分配机制自适应掩码冗余视觉语义组件。
result: 实验表明Yo’Mind在脑到文本重建任务上达到最先进性能，并增强了解码过程的可解释性。
conclusion: 通过个性化掩码和最优传输对齐，Yo’Mind有效减少了语义不匹配，提升了神经解码的准确性和可解释性。
---

## 摘要
大型视觉-语言模型（VLMs）（如 CLIP）的快速发展推动了各种神经解码框架的涌现。然而，大多数现有方法在表示对齐过程中仍然存在语义失配问题。这一挑战可能源于这样一个事实：人脑并非均匀地分配注意力到整个视觉场景，而是选择性地编码显著或相关的区域。此外，这种选择性与个体兴趣密切相关，因人而异。为解决这一挑战，我们提出了 Yo’Mind，一种新颖的、基于最优传输（OT）驱动的个性化多模态语义掩码框架，旨在弥合大脑与机器在解读视觉场景时的语义鸿沟。从技术上讲，Yo’Mind 引入了一种动态语义剪枝与分配机制，能够根据个体神经响应自适应地掩蔽刺激图像中的冗余视觉语义成分，而无需额外的人工监督或超参数调整。该策略可用于在解码过程中增强大脑与机器表征之间的语义一致性。此外，OT 理论固有的灵活性使 Yo’Mind 能够在统一的端到端架构中执行大脑-视觉-语言对齐和跨被试解码。大量实验表明，我们的 Yo’Mind 具有多项优势，包括最先进的脑到文本重建性能以及解码过程可解释性的提升。

## Abstract
The rapid progress of large vision-language models (VLMs), such as CLIP, has spurred the development of a wide range of neural decoding frameworks. Nev- ertheless, most existing approaches still suffer from semantic mismatches during representational alignment. This challenge may stem from the fact that the human brain does not distribute attention uniformly across a visual scene, but rather se- lectively encodes salient or relevant regions. Moreover, such selectivity is closely related to individual interests and varies from person to person. To address this challenge, we propose Yo’Mind, a novel optimal transport (OT)-driven person- alized multimodal semantic masking framework designed to bridge the seman- tic gap between brain and machines in interpreting visual scenes. Technically, Yo’Mind introduces a dynamic semantic pruning and allocation mechanism that adaptively masks redundant visual semantic components in stimulus images based on individual neural responses—without requiring extra human supervision or hy- perparameter tuning. This strategy can be used to enhance semantic consensus between brain and machine representations during decoding. Furthermore, the in- herent flexibility of OT theory enables Yo’Mind to perform brain-visual-linguistic alignment and cross-subject decoding within a unified end-to-end architecture. Extensive experiments demonstrate that our Yo’Mind offers several advantages, including state-of-the-art brain-to-text reconstruction performance and improved interpretability of the decoding process.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与“brain decoding”“representation alignment”高度相关，直接针对神经信号到语义的跨模态映射与对齐问题，属于读者关注的核心领域。
- **启发与意义**：提出语义失配源于人脑选择性注意的个体差异，将大脑编码建模为个性化语义子集匹配任务，为神经先验（neural prior）与多视角约束（multi-view constraint）设计提供了新的视角。
- **可借鉴点**：最优传输驱动的自适应语义剪枝策略无需人工标注或超参，可作为脑-机对齐的通用模块，直接嵌入现有fMRI表示学习框架。
- **阅读建议**：重点理解第3节的OT语义掩码机制和实验中的可解释性分析（图6），并结合自己的fMRI数据考虑是否引入个体差异性建模。

## 1. 论文的核心问题与整体含义
- **研究动机**：现有基于大视觉-语言模型（VLMs）的神经解码方法在将大脑活动与机器表示对齐时普遍存在语义失配，即模型倾向于编码图像中所有可见元素，而人脑只选择性关注与个体兴趣相关的语义成分。
- **核心问题**：由于个体兴趣和注意力分配不同，不同被试观察同一图像时大脑关注的语义内容存在差异，而传统的全局表示对齐无法捕捉这种选择性，导致解码（尤其是跨被试）性能下降和解释性不足。
- **整体含义**：亟需一种能动态识别大脑实际关注的语义元素并将其作为监督信号的方法，以弥合脑与机器之间的语义鸿沟，从而实现更准确、更可解释的脑到文本解码。

## 2. 论文提出的方法论
- **整体框架**：提出 Yo’Mind，一种基于最优传输（Optimal Transport, OT）驱动的个性化多模态语义掩码的统一端到端架构，支持大脑-视觉-语言三模态对齐和跨被试解码。
- **构建细粒度语义集**：
  - 对每个刺激图像，利用冻结的 CLIP 视觉编码器提取图像块嵌入 $\{v_i\}_{i=1}^N$。
  - 同时使用多模态大语言模型 Harmon（Qwen2.5）生成图像的语义描述，再用 CLIP 文本编码器提取词嵌入 $\{t_i\}_{i=1}^M$。
  - 构成联合语义集 $s = \{v_1,\dots,v_N,t_1,\dots,t_M\}$。
- **OT驱动的个性化语义掩码**：
  - 将 fMRI 信号划分为 $K$ 个固定大小的块，经 ViT 编码为序列 $r = \{r_1,\dots,r_K\}$。
  - 定义成本矩阵 $C_{i,j} = 1 - \langle r_i, s_j \rangle$（余弦距离）。
  - 引入虚拟“垃圾箱”（dustbin）扩展成本矩阵至 $C^*$，允许无关语义被显式丢弃。
  - 通过 Sinkhorn 算法求解熵正则化最优传输问题 $\min_{\Gamma\in\Pi} \langle \Gamma, C \rangle - \varepsilon H(\Gamma)$，并在计算后丢弃垃圾箱对应的行/列，得到部分分配矩阵 $P \in [0,1]^{K\times(N+M)}$，满足 $P\mathbf{1}_{N+M} \le \mathbf{1}_K$ 和 $P^\top \mathbf{1}_K \le \mathbf{1}_{N+M}$。
- **大脑-视觉-语言对齐损失**：使用加权均方误差
  $$L_{\text{align}} = \sum_{i=1}^K \left\| r_i - \sum_{j=1}^{N+M} P_{i,j} s_j \right\|_2^2$$
  仅用被大脑“选中”的语义元素进行监督。
- **脑到文本重建**：将 OT 引导的 fMRI 编码器融入 MindGPT 架构（GPT-2 加交叉注意力），以自回归语言模型生成文本描述，优化负对数似然损失。

## 3. 实验设计
- **数据集/场景**：
  - 主实验：Natural Scenes Dataset (NSD)，使用被试 1、2、5、7 的 27,750 个试次（982 张公共测试图像）。
  - 额外验证：DIR 数据集（被试 3）进行小样本鲁棒性测试。
- **评估基准**：脑到文本重建的标准指标：BLEU-1/2/3/4、METEOR、ROUGE、CIDEr、SPICE。
- **对比方法**：UniBrain、Brain Captioning、Takagi et al.、MindGPT、Neuro2Language、UMBRAE（单被试与多被试版本）、MindArt、Mind-SA 等 8 种最先进方法。同时报告了以 COCO 标注和 Harmon 生成标注为真值的结果。

## 4. 资源与算力
- **GPU**：使用 4 块 NVIDIA GeForce RTX 3090。
- **实现框架**：PyTorch。
- **训练时长**：文中未明确提及具体小时数，但指出模型训练至收敛，并使用 Adam 优化器，学习率 1e-4，权重衰减 1e-4。
- **推理细节**：Sinkhorn 迭代设为 100 次（$\varepsilon=1$），fMRI 块数 $K=8$。

## 5. 实验数量与充分性
- **主要对比实验**：在 NSD 上进行了大规模定量比较（表 1），包含两组真值条件（COCO 与 Harmon 标注），并给出统计显著性检验（配对 t 检验，$p<0.0001$）。
- **消融实验**：
  - 不同脑区组合（腹侧、腹侧+外侧、腹侧+外侧+顶叶）及有无语义掩码的对比（表 2）。
  - 多模态对齐中视觉与文本模态的贡献（表 3）。
  - 不同图像描述生成模型（Harmon、BLIP3o、SMALLCAP）的影响（表 4）。
  - fMRI 块数量（4、8、16）的影响（表 A5）。
- **可解释性实验**：视觉化显著区域、对比眼动数据（虽受限）、展示掩码机制的定性案例。
- **与其他任务结合**：扩展至脑到图像重建（附录图 A8、表 A7），并在 DIR 小数据集上验证。
- **总体评价**：实验设计全面，消融维度丰富，对比方法充分且包含统计检验，具有较好的客观性与公平性；跨被试和跨数据集验证增强了结论的可靠性。

## 6. 论文的主要结论与发现
- Yo’Mind 在多个评价指标上显著超越所有现有方法，尤其在 METEOR 和 BLEU-4 等指标上提升明显（如相对 MindGPT 提升 91.6% METEOR）。
- OT 驱动的动态软掩码策略能有效建模个体选择性注意，在复杂场景中捕捉大脑真正关注的语义元素，减少语义失配。
- 该方法展现出良好的跨被试通用性和可解释性，通过部分分配矩阵可以可视化不同被试对同一图像的不同关注模式（个体间差异），并呈现同一被试对不同图像的稳定偏好（个体内一致性）。
- 多模态文本监督（尤其是由先进 MLLM 生成的结构化描述）可以进一步提升解码性能。
- 即使在小规模 fMRI 数据集（DIR）上，方法仍表现出鲁棒性。

## 7. 优点
- **方法论创新**：首次将最优传输引入脑-机语义对齐，利用虚拟垃圾箱实现软性、自适应的语义选择，无需预设阈值或固定掩码数量。
- **端到端可微**：整个框架包括 Sinkhorn 算法均可导，能与语言模型无缝集成，训练简便。
- **个性化与跨被试兼顾**：在统一架构中既能捕获个体差异，又能实现跨主题共享特征。
- **可解释性强**：从部分分配矩阵可直观查看大脑对每个语义元素的关注度，为神经科学分析提供工具。
- **实验扎实**：多数据集、多指标、充分消融，且包含统计检验和与眼动数据的定性验证。

## 8. 不足与局限
- **生物学验证不足**：虽然试图与眼动数据对比，但因 NSD 要求中心注视，眼动数据不能有效反映注意分布；文中也承认需要新的同时测量内隐注意的数据集来严格验证。
- **计算成本**：Sinkhorn 算法虽为 $O(nm)$，但 100 次迭代和动态语义集构建可能增加训练开销，实际部署时需权衡。
- **依赖外部模型**：性能受限于 CLIP 和 Harmon 等预训练模型的质量，若文本描述质量差可能影响结果。
- **fMRI 分块敏感**：fMRI 的划分策略（如按脑区或均匀切分）对最终性能有影响，最优方案未必普适。
- **任务范围**：当前专注于脑到文本语义解码，图像重建仅作为扩展展示，未深入探讨结构与语义的解耦问题。

## 9. 研究价值与阅读建议（已在首节详述，此处略）
（完）
