---
title: Individualized parcellation reveals functional boundaries in human prefrontal cortex
title_zh: 个体化分区揭示人类前额叶皮层的功能边界
authors: "Xiang, J. D., Zhi, D., Arafat, B., Nettekoven, C., Diedrichsen, J., Mur, M."
date: 2026-07-06
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.04.736504v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 个体化fMRI分区揭示跨被试功能边界
tldr: 人类前额叶皮层（PFC）的功能组织是连续梯度还是离散分区存争议。本研究使用任务态fMRI数据，结合组图谱进行个体化功能分割，发现PFC个体差异显著，组平均掩盖锐利边界。个体化分割揭示了嵌入大尺度梯度内的精细功能分区，且PFC组织更精细，表明其兼具梯度与离散模块。
source: biorxiv
selection_source: fresh_fetch
motivation: 解决PFC功能组织是连续梯度还是离散分区的争论，以及组平均方法可能模糊个体特异性边界的问题。
method: 结合组水平图谱和多种认知任务下的fMRI数据，为每个个体估计个性化的功能分割。
result: 个体化分割揭示了组平均掩藏的锐利功能边界，且PFC的功能组织比其他联合皮层更精细。
conclusion: PFC组织表现为个体特异性的精细功能分区镶嵌于宏观梯度之中，对理解多需求系统等核心概念具有重要意义。
---

## 摘要
人类前额叶皮层在执行任务时支持多种高级认知功能。越来越多的证据表明，这些功能沿着大规模梯度组织，例如沿喙-尾轴支持逐渐从抽象到具体的信息处理。同时，前额叶皮层内的区域特化，包括对特定刺激类别具有选择性的局灶性斑块，提示存在离散的功能边界。前额叶皮层的组织最好由连续梯度还是离散亚区来表征，仍未解决。在此，我们表明，前额叶皮层中任务诱发的功能组织表现出显著的个体间差异，这限制了传统组水平图谱在检验功能边界时的有效性。为应对这一挑战，我们通过将组水平图谱与涵盖多种认知任务的任务诱发fMRI数据相结合，来估计个体化的功能分区。组水平图谱揭示了前额叶皮层中的大规模功能梯度，而个体化分区则额外揭示了被组平均所掩盖的清晰功能边界。此外，前额叶皮层的功能组织比其他联合皮层更为精细，与其在认知控制中的整合作用一致。这些发现共同表明，前额叶皮层的组织反映了嵌入更广泛大规模梯度中的个体化细粒度功能亚区镶嵌，这对于定义如多需求系统等核心构念具有重要意义。

## Abstract
Human prefrontal cortex (PFC) supports diverse higher-order cognitive functions during task execution. Increasing evidence suggests that these functions are organized along large-scale gradients, such as a rostro-caudal axis supporting progressively abstract-to-concrete information processing. At the same time, regional specialization within PFC, including focal patches selective for specific stimulus categories, suggests the presence of discrete functional boundaries. Whether PFC organization is best characterized by continuous gradients or discrete subdivisions remains unresolved. Here we show that task-evoked functional organization in PFC exhibits substantial inter-individual variability, limiting the usefulness of conventional group atlases in testing for functional boundaries. To address this challenge, we estimated individualized functional parcellations by combining a group atlas with task-evoked fMRI data spanning diverse cognitive tasks. The group atlas revealed large-scale functional gradients across PFC, whereas individualized parcellations additionally uncovered sharp functional boundaries obscured by group averaging. Moreover, functional organization in PFC was substantially more fine-grained than in other association cortices, consistent with its integrative role in cognitive control. Together, these findings suggest that PFC organization reflects an individualized mosaic of fine-grained functional subdivisions embedded within broader large-scale gradients, with important implications for defining core constructs such as the multiple-demand system.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- 关联方向：fMRI representation、representation alignment。该研究直接探讨任务态fMRI所反映的皮层功能表征组织，属于表征分析与对齐范畴。
- 启发与意义：揭示个体化分区能保留组平均掩盖的锐利功能边界，为脑解码与编码模型中纳入个体特异性先验提供了神经解剖依据。
- 可借鉴点：可利用类似“组图谱约束下个体化分割”的思路作为神经先验约束，改善跨被试的功能表征对齐或解码模型泛化。
- 阅读建议：如果你从事脑解码或编码，建议关注其如何调和“连续梯度”与“离散分区”的矛盾，并思考将细粒度分区作为多视图约束的可能性。

## 1. 论文的核心问题与整体含义
- 核心问题：人类前额叶皮层（PFC）的功能组织到底该用连续的宏观梯度描述，还是用离散的功能分区描述？组平均方法是否会磨平个体的锐利边界，导致错误结论？
- 研究动机：已有证据同时支持PFC存在大规模梯度（如嘴-尾轴的抽象—具体信息加工）和局灶性功能特化（如对特定刺激的选择性斑块），这种争议尚未解决。个体间功能组织的巨大差异可能是关键障碍。
- 整体含义：通过个体化功能分割发现，PFC组织是一种“细粒度功能亚区镶嵌于大规模梯度之中”的混合模式，对理解多需求系统等核心构念具有修正意义。

## 2. 论文提出的方法论
- 核心思想：在组水平图谱提供的宏观拓扑约束下，结合个体自身的任务诱发fMRI数据，为每个大脑估计个性化的功能分区，从而在保留群体共性的同时捕捉个体特异性功能边界。
- 关键技术细节：
  - 利用一个基于群体的功能图谱作为初始空间模板。
  - 采集涵盖多种认知任务的任务态fMRI数据，获得每个体素的任务诱发活动模式。
  - 以组图谱为引导，通过某种优化或边界检测算法，在个体水平上调整区域边界，使分区内部功能响应同质最大化、区域之间差异最大化。
  - 最终生成个体特有的前额叶分区（parcellation），其空间精细度高于传统的组平均图谱。
- 算法流程概述（文中未给出公式）：组图谱初始化 → 个体fMRI活动特征计算 → 受组图谱约束的个体化重新划分 → 得到嵌在大尺度梯度内的细颗粒功能边界。

## 3. 实验设计
- 数据集/场景：使用涵盖多种认知任务的任务诱发fMRI数据（摘要未指明具体数据库名称、任务类型或样本量）。
- 基准参照（benchmark）：以传统组平均功能图谱作为对比基线，检验其是否平滑掉功能边界。同时将PFC的功能组织精细度与其他联合皮层进行比较。
- 对比方法：主要进行组水平图谱与个体化分区结果的直接比较，以及PFC与其他皮层区域的组/个体化精细度对比。

## 4. 资源与算力
- 文中未明确说明所使用的GPU型号、数量、训练时长或总体计算资源。考虑到该方法属于传统fMRI分析路线（分区估计，而非深度学习），可能不依赖大规模GPU计算，但原文未提供任何算力细节。

## 5. 实验数量与充分性
- 基于摘要可推断的实验：
  - 组平均梯度揭示与个体化边界揭示的对比实验。
  - PFC与其他联合皮层的组织精细度比较实验。
- 缺少的信息：是否包含消融实验（如去掉组图谱约束的效果）、不同任务组合的影响、参数敏感性分析等均未提及。
- 充分性评价：仅凭摘要无法判断实验是否全面、客观和公平。若文内仅含上述两类对比，则实验设计较为简约，但核心发现已具备基本支撑。

## 6. 论文的主要结论与发现
- 组水平图谱显示PFC存在稳健的大规模功能梯度。
- 但组平均会系统性地抹除个体大脑中的清晰功能边界。
- 个体化分区能够复原这些被掩盖的锐利边界，证明PFC内部实为细颗粒的离散亚区。
- PFC的功能组织明显比其他联合皮层更为精细，与其在认知控制中的整合角色相吻合。
- 最终结论：PFC功能组织是“个体特异性细粒度亚区镶嵌于宏观梯度”的混合构架，而非单纯的连续谱或离散模块。

## 7. 优点
- 问题切入角度新颖：直接挑战“连续梯度 vs. 离散分区”的二元对立，提出“混合镶嵌”的调和观点。
- 方法论兼顾共性与个性：用组图谱保证可比性，用个体数据捕捉特异边界，避免了纯个体化分区带来的区域对应困难。
- 跨区域比较增强了结论的神经科学意义：指出PFC格外精细的组织特性，为认知控制理论提供了解剖约束。

## 8. 不足与局限
- 信息完整性问题：摘要未报告样本量、任务细节、数据采集参数，结论的统计稳健性和可重复性无法评估。
- 方法论黑箱：未给出个体化分区算法的具体形式、优化目标或验证指标，难以判断边界“清晰”是真实改善还是过度拟合。
- 缺乏与其他个体化分区方法（如超对齐、字典学习等）的系统对比，优势说明不够有力。
- 应用限制：仅基于任务诱发fMRI，静态下或静息态是否同样存在这些边界未知；结果是否能推广到临床或低采样率数据也是问题。

（完）
