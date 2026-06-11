---
title: "From topography to connectome: Towards an integrated understanding of the resting brain"
title_zh: 从地形图到连接组：迈向静息脑的综合理解
authors: "Naranjo Rincon, S., Ahmad, F., Easley, T., Shoushtari, S., Glatard, T., Kiar, G., Modi, H., Dahan, S., Robinson, E., Kamilov, U., Bijsterbosch, J."
date: 2026-06-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.06.730493v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 深度学习模型实现跨被试fMRI拓扑到连接组的转换
tldr: 随着静息态功能磁共振成像研究的深入，空间地形图与功能连接组成为分析个体差异的重要工具。本研究提出一个基于表面视觉Transformer的深度学习模型，将网络空间组织地图嵌入并转换为个体化连接组。模型重建准确度达0.73，转换准确度达0.43，且转换后的连接组仍保留个体识别性和大脑-认知关联，建立了地形图到连接组的直接映射，推动了静息态脑连接组的整合理解。
source: biorxiv
selection_source: fresh_fetch
motivation: 静息态fMRI领域中，空间地形图和连接组常被分别研究，需要一种方法将它们整合以更全面地理解个体大脑差异。
method: 开发了一个表面视觉Transformer深度学习模型，学习网络地形图的嵌入表示，并精准将其译为个体功能连接组。
result: 模型具备高重建准确性（0.73±0.09）和显著的地形-连接组翻译能力（0.43±0.08），翻译后的连接组保持了个体指纹和大脑-行为关联。
conclusion: 本研究建立了空间地形到连接组的可靠映射，为整合不同静息态fMRI分析分支的发现提供了桥梁，向着完整理解人类连接组迈进了一步。
---

## 摘要
随着该领域从早期的人类连接组研究拓展，分析静息态功能磁共振成像（rsfMRI）数据的方法数量迅速增长。在越来越关注个体差异的背景下，除了传统的功能连接组之外，空间组织的脑地形图也应运而生。在此，我们开发了一个深度学习模型，用于嵌入网络地形图并忠实地将其转换为个体化连接组。结果基于重建准确度（0.73±0.09）和准确的地形图-连接组转换（0.43±0.08），证实了表面视觉变换器的有效性。重要的是，转换后的连接组保留了可识别性和大脑-认知关联。这些发现建立了从空间地形图到连接组的直接映射，可用于整合rsfMRI各子领域的科学见解。这是朝着拓宽我们对连接组的概念化、支持更广泛整合研究发现以全面理解人类连接组迈出的重要一步。

## Abstract
As the field expands from early research into the human connectome, there has been a fast expansion in the number of analytical approaches to study resting state functional MRI (rsfMRI) data. With increasing focus on individual differences, topographical brain maps of spatial organization have emerged in addition to traditional functional connectomes. Here, we developed a deep-learning model to embed maps of network topography and faithfully translate to individualized connectomes. Results confirmed the validity of the surface vision transformer based on reconstruction accuracy (0.73{+/-}0.09) and accurate topography-to-connectome translation (0.43{+/-}0.08). Importantly, translated connectomes retained identifiability and brain-cognition associations. These findings establish a direct mapping from spatial topography to connectomes that can be used to integrate scientific insights across rsfMRI sub-fields. This is an important step towards broadening our conceptualization of the connectome and supporting broader integration of findings to inform a complete understanding of the human connectome.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向：** 本文高度关联“fMRI representation”、“representation alignment”与“multi-view constraint”方向，其核心任务是将同一大脑的两种fMRI表征（空间地形图与连接组）进行跨模态转换与对齐。
- **启发与意义：** 论文证明不同脑表征之间存在可被深度模型捕获的共享潜在信息，为构建多视图约束下的统一脑表征、设计更具泛化性的脑解码神经先验提供了实证基础。
- **可借鉴点：** 可借鉴其利用Transformer对皮层曲面数据进行自注意力编码的方法，以及对转换后表征进行个体指纹识别和脑-行为关联双重验证的评估范式。
- **阅读建议：** 建议重点研读其编码器架构与训练策略（如去均值处理以防回归均值），并关注其在部分相关连接组上转换失败的局限性，这对设计鲁棒的表征对齐损失函数具有参考价值。

## 1. 论文的核心问题与整体含义
- **核心问题：** 静息态功能磁共振成像领域存在两种主流但差异巨大的脑表征：一是基于体素/顶点的空间地形图，二是基于脑区时间序列相关性的功能连接组。当前缺乏方法将基于个体差异的发现在这两种分化的“方法论孤岛”之间进行整合。
- **整体含义：** 研究旨在建立一座桥梁，实现从个体化空间地形图到个体化功能连接组的直接、忠实转换，从而拓宽连接组的概念，促进整个rsfMRI领域科学发现的整合与互译。

## 2. 论文提出的方法论
- **核心思想：** 利用深度学习模型学习一种非线性映射，将高维的皮层空间网络地形图压缩到低维潜在空间，再从该潜在空间解码出高维的脑区间功能连接组。
- **关键技术细节：**
  - **编码器：** 采用表面视觉变换器作为编码器，对皮层表面数据进行处理。输入是将每个ICA空间地图的重采样为规则二十面体球面网格的三角面片。
  - **数据处理：** 为聚焦个体差异，所有模型输入和输出目标均减去了训练集均值，即使用去均值的地形图和连接组进行训练。
  - **网络流程：**
    - **输入嵌入：** $\mathbf{X} \in \mathbb{R}^{C \times V}$ 被切分为非重叠三角面片并线性投影。
    - **编码：** 使用SiT将嵌入输入 $\tilde{\mathbf{X}}_{emb}$ 编码为潜在向量 $\mathbf{Z} = \text{SiT}(\tilde{\mathbf{X}}_{emb})$。
    - **解码：** 对于重建任务，解码器为 $\hat{\mathbf{X}} = \mathbf{W}_{Recon}(\mathbf{Z})$；对于转换任务，解码器为 $\hat{\mathbf{Y}} = \mathbf{W}_{Tran}(\Phi(\mathbf{Z}))$，其中 $\Phi$ 是 GELU 激活函数。
  - **损失函数：** 模型训练通过最小化均方误差损失 $\mathcal{L} = (\mathbf{Y}_{Measured} - \hat{\mathbf{Y}}_{Tran})^2$ 完成。

## 3. 实验设计
- **数据集：** Adolescent Brain Cognitive Development 队列，按照采集地点划分为训练集（N=7104）、验证集（N=920）和测试集（N=624）。
- **输入与目标：**
  - **源表征：** 15维的组ICA空间地形图。
  - **目标表征：** 100维的Schaefer脑区全相关功能连接组。
- **对比基准：** 主要评估指标是去均值后的测量连接组与转换连接组之间的被试内相关系数、个体识别力以及脑-认知关联的一致性。
- **对比方法：** 在泛化性分析中，测试了模型对不同维度连接组（Schaefer 300， Glasser 360）和不同连接组类型（部分相关连接组）的转换性能。

## 4. 资源与算力
- 论文中没有明确提及 GPU 的具体型号与数量。
- 仅在补充表格中说明，所有模型均在 **10 个 Intel Xeon Gold 6226R CPUs** 上训练。
- 未报告具体的训练总时长。

## 5. 实验数量与充分性
- **实验数量：** 作者进行了多组实验，包括编码器重建验证、主模型转换评估、个体差异保留测试、以及泛化性消融实验。
- **实验充分性：** 实验设计较为充分且客观。
  - **公平性：** 严格采用地点分割训练、验证、测试集，避免数据泄露。
  - **多维度验证：** 不仅评估像素级转换准确度，还通过指纹识别、单/多变量脑-行为关联验证了转换后表征在下游任务中的信息保留程度。
  - **泛化性测试：** 探究了不同脑区尺度和图集类型对模型性能的影响，揭示了该方法在处理部分相关连接组时的局限性。

## 6. 论文的主要结论与发现
- **转换有效性：** SiT架构成功实现了地形图-连接组转换，在Schaefer-100图集上平均转换准确度为 $r = 0.43±0.08$。
- **保留个体差异：** 转换后的连接组近乎完美地保留了被试身份信息，平均排名百分位达到0.99。
- **保留大脑-认知关联：** 单变量和多变量分析均证实，转换得到的连接组保留了与流体智力和晶体智力相关的个体差异模式，多变量预测精度与使用真实连接组相当。
- **泛化边界：** 模型性能在不同脑区尺度和图集类型间保持相对稳定，但在翻译部分相关连接组时准确度显著下降，表明该方法适用于捕捉全脑共变模式，但对稀疏连接模式支持有限。

## 7. 优点
- **架构创新：** 将表面视觉变换器成功应用于非欧几里得的皮层数据分析，克服了传统卷积网络难以捕捉长程依赖的缺点。
- **聚焦个体差异：** 通过去除均值再训练的策略，强制模型学习个体间变异，这是连接组指纹识别下游应用的关键。
- **评估全面：** 评估体系非常扎实，不仅看转换的数值准确度，更从个体识别、单变量关联、多变量预测多个维度验证了转换的生物学意义。

## 8. 不足与局限
- **部分相关连接组转换失败：** 模型在转换部分相关连接组时表现极差，论文推测这源于两种表征的本质差异，限制了其在专注于稀疏有效连接研究中的应用。
- **输入维度单一：** 当前模型仅使用15维的ICA地图作为输入，可能未能充分探索更高维度的地形图信息对转换性能的影响。
- **算力信息缺失：** 论文未报告 GPU 使用情况和训练时间，不利于其他研究者复现时的算力规划。
- **数据集单一：** 仅在ABCD青少年数据集上进行训练和验证，模型的跨年龄段、跨站点通用性有待进一步检验。

## 9. 研究价值与阅读建议
- **关联方向：** 本论文与读者关注的“fMRI representation”、“representation alignment”及“multi-view constraint”高度相关，直接演示了同一大脑两种不同表征之间的转换与信息对齐。
- **启发与意义：** 该研究表明，不同脑表征蕴含的潜在共性信息足以支撑跨模态翻译，这为设计多视图约束下的统一脑表征模型或利用一种表征构建另一种表征的“神经先验”提供了新颖的思路和实证依据。
- **可借鉴点：** 可学习其处理皮层表面数据的Transformer编码技术，以及多层次的表征对齐验证框架。特别值得关注其数据预处理中的“去均值化”操作，以强制模型学习个体差异，而非群组平均模式。
- **阅读建议：** 建议深度阅读其方法部分关于表面变换器的实现细节以及为何部分相关连接受限的分析，这有助于读者避开类似设计陷阱，并思考如何在自己的“脑解码”或“表征对齐”模型中引入更鲁棒的约束。

（完）
