---
title: CVPR26 Can Natural Image Autoencoders Compactly Tokenize fMRI Volumes for Long-Range Dynamics Modeling_
title_zh: CVPR26：自然图像自编码器能否紧凑地标记化fMRI体积以进行长程动力学建模？
authors: Peter Yongho Kim; Juhyeon Park; Jungwoo Park; Jubin Choi; Jungwoo Seo; Jiook Cha; Taesup Moon
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-185425294912-cvpr26-can-natural-image-autoencoders-compactly-tokenize-fmri-volume.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 4.0 订阅评分
score_label: 订阅评分
evidence: 使用来自HCP和UK Biobank等大规模跨被试数据集的fMRI数据
tldr: 功能磁共振成像（fMRI）长程时空动态建模面临高维信号内存需求大的挑战。TABLeT利用预训练二维自然图像自编码器将三维fMRI体积压缩为连续token，使简单Transformer能高效建模长序列。在UKB等大规模基准上，TABLeT在多任务中超越现有模型，计算与内存效率显著提升，自监督预训练更增强下游性能，为可扩展可解释的脑活动建模提供新途径。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-185425294912-cvpr26-can-natural-image-autoencoders-compactly-tokenize-fmri-volume/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 615, \"height\": 433}, {\"url\": \"assets/figures/local-pdf/local-20260606-185425294912-cvpr26-can-natural-image-autoencoders-compactly-tokenize-fmri-volume/fig-002.webp\", \"caption\": \"\", \"page\": 6, \"index\": 2, \"width\": 1202, \"height\": 1202}, {\"url\": \"assets/figures/local-pdf/local-20260606-185425294912-cvpr26-can-natural-image-autoencoders-compactly-tokenize-fmri-volume/fig-003.webp\", \"caption\": \"\", \"page\": 6, \"index\": 3, \"width\": 1202, \"height\": 1202}, {\"url\": \"assets/figures/local-pdf/local-20260606-185425294912-cvpr26-can-natural-image-autoencoders-compactly-tokenize-fmri-volume/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 1202, \"height\": 1202}, {\"url\": \"assets/figures/local-pdf/local-20260606-185425294912-cvpr26-can-natural-image-autoencoders-compactly-tokenize-fmri-volume/fig-005.webp\", \"caption\": \"\", \"page\": 6, \"index\": 5, \"width\": 1202, \"height\": 1202}, {\"url\": \"assets/figures/local-pdf/local-20260606-185425294912-cvpr26-can-natural-image-autoencoders-compactly-tokenize-fmri-volume/fig-006.webp\", \"caption\": \"\", \"page\": 6, \"index\": 6, \"width\": 1202, \"height\": 1202}, {\"url\": \"assets/figures/local-pdf/local-20260606-185425294912-cvpr26-can-natural-image-autoencoders-compactly-tokenize-fmri-volume/fig-007.webp\", \"caption\": \"\", \"page\": 6, \"index\": 7, \"width\": 1202, \"height\": 1202}, {\"url\": \"assets/figures/local-pdf/local-20260606-185425294912-cvpr26-can-natural-image-autoencoders-compactly-tokenize-fmri-volume/fig-008.webp\", \"caption\": \"\", \"page\": 8, \"index\": 8, \"width\": 750, \"height\": 370}]"
motivation: 传统体素模型内存开销大，难以捕捉fMRI长时程动态。
method: 利用预训练2D自然图像自编码器将3D fMRI体积压缩为token，再用Transformer编码长序列。
result: 在多个大规模数据集和多任务上，TABLeT性能优于现有方法，且计算和内存效率大幅提升。
conclusion: 本研究为可扩展、可解释的大脑活动时空建模提供了有前景的途径。
---

## 摘要
在功能磁共振成像（fMRI）中建模长程时空动力学仍然是一个关键挑战，这源于四维信号的高维度。先前的基于体素的模型虽然展现出卓越的性能和解释能力，但受限于过高的内存需求，因此只能捕捉有限的时间窗口。为解决这一问题，我们提出了TABLeT（二维自编码脑潜变量变换器），这是一种利用预训练的2D自然图像自编码器将fMRI体积进行标记化的新方法。每个3D fMRI体积被压缩为一组紧凑的连续标记，从而能够使用简单的变换器编码器在有限的显存下进行长序列建模。在包括英国生物样本库（UKB）、人类连接组计划（HCP）和ADHD-200数据集在内的大规模基准测试中，TABLeT在多项任务上均优于现有模型，同时在计算和内存效率方面，相较于最先进的基于体素的方法，在相同输入条件下取得了显著提升。此外，我们开发了一种自监督的掩码标记建模方法来预训练TABLeT，该方法提高了模型在各种下游任务中的性能。我们的发现为大脑活动的可扩展且可解释的时空建模提供了一种有前景的方法。我们的代码已开源，见https://github.com/beotborry/TABLeT。

## Abstract
Modeling long-range spatiotemporal dynamics in func- tional Magnetic Resonance Imaging (fMRI) remains a key challenge due to the high dimensionality of the four- dimensional signals. Prior voxel-based models, although demonstrating excellent performance and interpretation ca- pabilities, are constrained by prohibitive memory demands and thus can only capture limited temporal windows. To address this, we propose TABLeT (Two-dimensionally Au- toencoded Brain Latent Transformer), a novel approach that tokenizes fMRI volumes using a pre-trained 2D nat- ural image autoencoder. Each 3D fMRI volume is com- pressed into a compact set of continuous tokens, enabling long-sequence modeling with a simple Transformer encoder with limited VRAM. Across large-scale benchmarks includ- ing the UK-Biobank (UKB), Human Connectome Project (HCP), and ADHD-200 datasets, TABLeT outperforms ex- isting models in multiple tasks, while demonstrating sub- stantial gains in computational and memory efficiency over the state-of-the-art voxel-based method given the same in- put. Furthermore, we develop a self-supervised masked token modeling approach to pre-train TABLeT, which im- proves the model’s performance for various downstream tasks. Our findings suggest a promising approach for scal- able and interpretable spatiotemporal modeling of brain ac- tivity. Our code is available at https://github.com/ beotborry/TABLeT.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**: 本文属于 **fMRI representation** 与 **brain encoding** 的交叉点，致力于从高维fMRI中学习紧凑、可迁移的表征。
- **启发与意义**: 揭示了自然图像上预训练的2D编码器可泛化到fMRI医学数据，颠覆了“需域内训练”的直觉，为神经影像表征学习提供了极低成本的新范式。
- **可借鉴点**: 可借鉴“训练免费tokenizer+Transformer”的思路，用于探索长时程任务的脑动态建模；其token化缓存策略也极大降低了算力门槛。
- **阅读建议**: 如果核心目标同样是**高效fMRI表征学习**，本文必读；若主要关注脑解码或多视角对齐的理论，可只关注其“跨域迁移”的实证现象与消融设计，弱相关部分可略过。

---

## 1. 论文的核心问题与整体含义
- **研究背景与动机**:
  - 人脑活动是一个长程时空动力学系统，fMRI能无创地测量该活动，但其数据是极高维的四维信号。
  - 现有**基于体素（voxel-based）的模型**（如SwiFT, TFF）能保留丰富的空间信息，但内存/计算需求极大，导致它们只能同时处理极短的时间窗口（如20帧），严重限制了捕捉长程动态（如超慢波、全脑唤醒）的能力。
  - 基于ROI的方法计算快，但丢失了精细空间结构且对预定义的脑区图谱敏感。
- **核心研究问题**:
  - 能否利用一个在自然图像上预训练好的高性能2D自编码器（Autoencoder），来紧凑地token化（分词化）fMRI的3D体积，从而大幅压缩输入数据，并支持用轻量级Transformer对更长的时间序列进行建模？
  - **整体含义**: 提出了一种反直觉但高效的、跨域迁移的表示学习新范式，旨在打破fMRI时空建模的计算瓶颈。

## 2. 论文提出的方法论
- **核心思想 - TABLeT (Two-dimensionally Autoencoded Brain Latent Transformer)**:
  - 使用一个已冻结的、在自然图像上预训练的2D深度压缩自编码器（DCAE）作为训练免费的fMRI tokenizer，将高维体素数据转换为紧凑的连续token序列。
  - 然后，利用一个轻量级Transformer编码器对这些token化后的长序列进行时空动态建模。
- **关键技术细节**:
  - **Tokenization策略**: 将3D fMRI体积 $\mathbf{X} \in \mathbb{R}^{1 \times D \times H \times W}$ 沿矢状轴、冠状轴、轴状轴三个方向切为2D切片。每个切片被DCAE压缩成潜变量，再沿切轴方向按大小为32的分组聚合、拼接，最终将整个的 $(96, 96, 96)$ 体积压缩为仅 **27个token**（每个维度为3072）。
  - **模型架构**: 采用标准的Transformer编码器，集成了分组查询注意力、旋转位置编码等现代技术，并添加[CLS] token用于下游任务。
  - **自监督预训练 (Masked Token Modeling, MTM)**: 直接在token空间进行掩码建模。随机遮蔽输入token并用可学习的[MASK] token替换，让模型预测原始token。为防止信息泄露，同一空间位置的遮蔽模式在时间维度上保持一致（` tube masking `）。损失函数为掩码位置上的L1损失: $L = \frac{1}{\Omega(\mathbf{Z}_M)} ||\mathbf{y}_M - \mathbf{Z}_M||_1$。

## 3. 实验设计
- **数据集与任务**:
  - **UK Biobank (UKB)**: 大规模中老年群体（8,178人）。任务：**性别分类**，**年龄回归**。
  - **Human Connectome Project (HCP)**: 健康青年群体（1,061人）。任务：**性别分类**，**年龄回归**，**智力回归**。
  - **ADHD-200**: 儿童及青少年多动症数据（533人）。任务：**ADHD诊断分类**。
  - ***补充*: 还使用HBN-Movie (task fMRI) 数据进行了初步长时程建模优势分析。**
- **对比方法**:
  - **ROI-Based**: XGBoost, BrainNetCNN, BNT, meanMLP, Brain-JEPA.
  - **Voxel-Based**: TFF ($T=20$), SwiFT ($T=20, 50$).
- **评价指标**: 分类用ACC、AUC、F1；回归用MSE、MAE、$\rho$。

## 4. 资源与算力
- **硬件**: 所有效率对比实验统一在**单张NVIDIA RTX A6000 GPU**上进行，批大小固定为4。
- **训练时长**: 未明确给出单次完整训练所需的总小时数，但提供了相对效率对比：在 $T=50$ 的设置下，TABLeT比SwiFT每个epoch的训练时间快**3.80倍**。
- **内存**: 在相似的内存预算（~30GB）下，TABLeT可处理的序列长度（$T=384$）是SwiFT（$T=40$）的**近10倍**。

## 5. 实验数量与充分性
- **实验组数**: 规模较大且系统，主要包括：
  1.  **主实验**: 在3大数据集上的多任务性能对比（表1）。
  2.  **预训练实验**: 自监督MTM预训练后的迁移微调性能（表2）。
  3.  **Tokenizer对比实验**: 2D DCAE vs. 专门训练的3D DCAE，从重建质量和下游性能两个维度评估（图4、表3）。
  4.  **效率实验**: 在控制GPU和批大小下，对比TABLeT和SwiFT的峰值内存和训练时间（图5）。
  5.  **消融实验**: 探究不同切片轴（矢状/冠状/轴状）聚合的影响（表4），以及输入时间帧数 $T$ 对性能的敏感性分析（图6）。
  6.  **可解释性实验**: 利用积分梯度法（Integrated Gradients）生成脑区贡献热力图（图7）。
- **充分性评估**: 实验设计**相当充分、客观且公平**。它在多个维度上与SOTA基线对比，并用大量消融和可视化支撑其核心主张。使用多个随机种子和分层数据划分确保了结果的可靠性。唯一的不足是UKB主实验的误差棒（标准差）仅在附录中提供。

## 6. 论文的主要结论与发现
1.  **跨域泛化成立**: 一个从未在fMRI上训练过的2D自然图像自编码器，其作为fMRI tokenizer的能力，在重建质量（PSNR, SSIM）和功能连接保真度上，表现优于专门训练的3D自编码器。
2.  **性能与效率双赢**: TABLeT在UKB、HCP和ADHD-200的绝大多数任务上，性能优于或极具竞争力地比肩SOTA体素模型SwiFT，同时内存节省**7.33倍**，训练速度提升**3.80倍**。
3.  **长程建模有效**: 部分任务（如智力预测、ADHD诊断）的性能与可输入的时间帧长度 $T$ 呈正相关，证实了建模更长时程动态的价值。
4.  **预训练有效**: 提出的掩码token建模(MTM)预训练策略能稳定提升下游任务的性能，验证了在token空间进行自监督学习的可行性。
5.  **具备可解释性**: 模型的注意力拓扑可还原出与神经科学文献一致的、与性别相关的重要脑区。

## 7. 优点
- **方法创新且有效**: “自然图像编码器用于医学体积”的思路反直觉但非常成功，开辟了低成本、高效率的脑成像分析新路径。
- **极致的压缩与效率**: 将96³的体积压缩为27个token是巨大突破，直接解决了体素模型内存爆炸的核心痛点，使长序列建模成为可能。
- **成本极低**: 直接利用现成的模型，无需在稀缺且昂贵的医学数据集上训练大型自编码器，极大降低了计算和数据成本。
- **实验论证闭环**: 从tokenizer信度、模型性能、计算效率到可解释性，形成了一个完整的证据链，充分支撑了所有核心论点。

## 8. 不足与局限
- **独立帧标记的缺陷**: 逐帧独立地进行切片和token化，可能破坏了帧间本存在于原始体素中的细腻动态特征。
- **时空结构未显式建模**: Transformer将全部token打平处理，没有利用token间固有的3D空间位置关系，可能存在信息利用不充分。
- **对静态任务提升有限**: 性能提升在依赖结构信息多于动态信息的任务（如基于静息态fMRI的简单分类）上显得温和，其长时序建模的巨大潜力在更依赖动态信息的任务（如自然刺激下的任务态fMRI）中才能更充分地体现。
- **理论解释不足**: 为什么2D自然图像编码器如此好地泛化到fMRI，仍缺乏深入的理论分析，仅停留在“学习到了通用纹理/边缘基元”的层面。

## 9. （无额外补充，符合要求）
（完）
