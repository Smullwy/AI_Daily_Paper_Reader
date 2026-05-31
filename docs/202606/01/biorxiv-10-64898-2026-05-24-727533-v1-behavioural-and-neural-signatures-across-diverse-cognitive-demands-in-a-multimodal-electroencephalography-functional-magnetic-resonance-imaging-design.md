---
title: Behavioural and neural signatures across diverse cognitive demands in a multimodal electroencephalography-functional magnetic resonance imaging design
title_zh: 多模态脑电图-功能磁共振成像设计中跨不同认知需求的行为与神经特征
authors: "Hiromitsu, K., Chiyohara, S., Asai, T., Katayama, A., Wakabayashi, M., Imamizu, H."
date: 2026-05-27
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.24.727533v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 多模态EEG-fMRI设计，跨被试多任务
tldr: 本研究提出一个紧凑的多模态框架，结合HCP-mini多任务范式和扩展N-back任务，在58名健康参与者中同步采集EEG-fMRI数据，成功捕获了跨认知领域和需求层级的行为结构，并复现了大规模任务激活组织，为多模态认知表征提供了高效方案。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有高效多模态设计难以同时覆盖广泛认知领域和需求梯度变化。
method: 58名健康参与者完成HCP-mini（8项任务+静息）和扩展N-back（0至7-back）的同步EEG-fMRI采集，进行行为与神经数据分析。
result: 行为绩效超随机或匹配既往研究，模态内重测信度高于模态间，fMRI激活模式高度复现经典HCP任务组织。
conclusion: 该紧凑框架能跨领域和需求层级有效表征认知，为未来多模态研究提供了高效工具。
---

## 摘要
能够捕捉认知领域差异和认知需求变化的高效多模态设计仍然有限。在本研究中，我们测试了一个紧凑框架，58名健康参与者完成了多模态脑电图(EEG)和功能磁共振成像(fMRI)的采集。该框架包含两个互补的测试组合：一个是HCP对齐的多任务范式(HCP-mini)，将八个HCP对齐的认知任务和静息状态整合在一个扫描序列中；另一个是扩展的N-back任务，从0-back到7-back。为了支持广泛的跨领域覆盖和匹配的多模态评估，这两个组合在两种模态中都捕获了预期的组水平行为结构。行为表现在EEG和fMRI中均超过随机水平或与先前研究结果一致。描述性的组内相关系数(ICC)分析显示，模态内不同扫描间的数值高于模态间的数值。在神经层面，HCP-mini fMRI激活模式密切再现了原始HCP数据集的经典大规模任务组织，对应任务对显示出最强的空间相似性。这些发现共同展示了一个紧凑且高效的框架，用于跨领域和梯度化认知需求的多模态认知表征。

## Abstract
Efficient multimodal designs that capture differences across cognitive domains and variations in cognitive demand remain limited. In this study, we tested a compact framework with 58 healthy participants who completed multimodal electroencephalography (EEG) and functional magnetic resonance imaging (fMRI) sessions. The framework comprised two complementary batteries: the HCP-aligned multitask paradigm (HCP-mini), which integrates eight HCP-aligned cognitive tasks and rest within a single run, and an extended N-back task ranging from 0-back to 7-back. Designed to support broad cross-domain coverage and matched multimodal assessment, the two batteries captured the expected group-level behavioural structure across modalities. Behavioural performance exceeded chance levels or aligned with findings from previous studies in both EEG and fMRI. Descriptive intraclass correlation coefficient (ICC) analyses showed numerically higher within-modality run-to-run values than between-modality values. At the neural level, HCP-mini fMRI activation patterns closely recapitulated the canonical large-scale task organisation of the original HCP dataset, with corresponding task pairs showing the strongest spatial similarity. Together, these findings demonstrate a compact and efficient framework for multimodal characterisation of cognition across domains and graded cognitive demands.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：弱相关。本文属认知任务设计与多模态数据采集验证，与读者关心的“brain decoding / neural prior / fMRI representation / representation alignment”存在间接交集。
- **启发与意义**：提供了经过行为与神经验证的多任务、多模态数据框架（HCP-mini），此框架可作为构建跨域解码模型或表征对齐方法的优质“数据生成协议”与基准。
- **可借鉴点**：利用“相对激活”（任务 vs. 跨任务均值）而非传统对照条件来定义任务特异性脑图，这一思路在设计多任务解码或表征约束时值得参考。
- **阅读建议**：若专注解码算法创新，可速览第一、三部分；若需构建可靠多任务脑成像数据集，其范式设计和信度分析方法具备工程参考价值。

## 1. 研究动机与核心问题
- **痛点与缺口**：当前多模态（EEG-fMRI）联合成像研究大多局限于单一实验范式，缺少能同时覆盖**多个认知域** 并操纵**认知需求梯度** 的高效、紧凑设计。
- **核心目标**：验证一个“紧凑多模态框架”是否能在单次扫描内，同时捕获跨认知域差异与参数化工作记忆负荷下的行为与神经特征，并复现经典大规模任务组织。
- **整体含义**：旨在提供一种兼具广度与深度的多模态数据采集方案，为利用EEG高时间分辨率和fMRI高空间分辨率联合刻画认知过程奠定数据与范式基础。

## 2. 方法论：紧凑多模态框架与关键设计
核心思想是将两个互补的任务组合在完全匹配的实验协议中，分两天分别采集EEG和fMRI数据，以实现高效且可比的跨模态多域表征。
- **HCP-mini 范式**：
  - **构造**：来自人类连接组计划的8个认知任务（情绪、社会、赌博、语言、运动、工作记忆等，各约80秒）加上一个静息态，整合在一次约15分钟的连续扫描中。
  - **分析逻辑**：采用“跨任务比较框架”，对任一任务，其激活被表达为相对所有任务**平均激活** 的偏差，以此识别“领域主导”的神经活动，而不是依赖传统显式控制条件。
- **扩展 N-back 范式**：
  - **构造**：从0-back (控制) 到 7-back 的参数化工作记忆负荷操作。
  - **作用**：提供一条独立于HCP-mini的、可描述的“认知需求梯度”行为轴。
- **多模态采集**：
  - **采集方式**：EEG和fMRI在分开的两天进行，使用完全相同的任务结构和响应映射。
  - **优势**：避免同时采集的信号质量与环境限制。

## 3. 实验设计
- **数据集与参与者**：58名健康志愿者（女性14名，男性44名；平均年龄23.07岁）。
- **实验范式**：
  - **HCP-mini**：单次扫描内包含情绪、社会、赌博、语言、运动、关系推理、图片工作记忆、字母工作记忆及静息共9种条件。
  - **扩展N-back**：单次扫描内包含从0-back到7-back及静息共9种条件。
- **基准与对比**：
  - **行为学基准**：各任务准确性是否高于随机水平，N-back鉴别指数是否大于0；行为表现跨任务结构与原始HCP数据集（Barch et al., 2013）中的分布进行定性比较。
  - **神经影像基准**：HCP-mini的任务激活图与NeuroVault公开库中的原始HCP任务fMRI统计图谱（van Essen et al., 2013）进行空间相似性（Pearson相关系数）定量对比。
- **信度评估**：计算了**模态间** （EEG vs. fMRI）和**模态内** （两遍扫描间）行为指标的**组内相关系数**。

## 4. 资源与算力
- 文中并未报告任何与计算资源相关的信息，如GPU型号、数量或具体训练时长。所有数据分析均为基于传统软件（SPM12, FSL）的预处理和一般线性模型组分析，因此未涉及深度学习或大规模计算的算力需求。

## 5. 实验数量与充分性
- **行为分析**：分别对HCP-mini的6项任务和N-back的8级负荷在两种模态下的准确率、反应时及敏感性进行了描述与推断统计，并对ICC信度进行了模态内与模态间的对比评估。
- **神经分析**：完成了HCP-mini各任务条件下，基于fMRI的相对激活图谱计算，并与对应外部数据集图谱进行了量化**空间相似性** 矩阵计算。
- **充分性与公平性**：实验设计直接对标领域的黄金标准数据集，定量比较有客观指标。然而，行为学ICC分析受部分任务（如语言、社会认知）试验次数过少及测量指标性质影响，使得这些任务的信度结论应谨慎解读。

## 6. 主要结论与发现
- **行为层面**：HCP-mini成功捕获了类似原始HCP的行为结构（如情绪任务接近满分，关系推理分散度高），且各任务表现均大概率高于随机水平。N-back任务的效能随负荷增加单调递减，保真度良好。
- **信度层面**：同一模态内部的扫描间ICC普遍高于不同模态间的ICC，表明日间和模态差异共同影响了跨模态行为一致性。
- **神经层面**：HCP-mini的fMRI激活图高度再现了原始HCP数据集中的经典大规模任务网络组织，跨数据集的空间相似性矩阵展示出显著的**对角线结构**（相同任务对相似性最高）。

## 7. 优点
- **高生态效度与紧凑性**：在15分钟内完成8大认知域的采样，极大提升了数据采集效率和被试友好度。
- **范式可复用性强**：基于并简化了广泛认可的HCP框架，其效度可通过公开资源直接验证，便于此范式在其他实验室推广。
- **分析策略创新**：采用“任务相对于跨任务均值”的分析框架，无需显式控制条件即可揭示领域主导的功能特异性，为多任务比较提供了新思路。

## 8. 不足与局限
- **任务简化与信度问题**：HCP-mini简化了部分任务，尤其是语言与社会认知任务试验次数极少，导致其行为指标信度和神经表征稳健性可能不足。
- **跨模态差异混淆**：EEG与fMRI在不同日期采集，无法分离“模态差异”与“状态/日间效应”。语言任务中听觉呈现方式的差异（单耳vs双耳、有无耳机）是引入模态间变异的额外混淆因素。
- **被试特征与泛化性**：被试全部为日语母语者，但使用了英语材料执行语言任务，这可能削弱了语言域激活的特异性与任务间可比性。
- **分析深度有限**：本文主要停留在对数据效度的验证层面，并未深入利用此多模态数据集进行EEG-fMRI联合分析（如时空融合）。

## 9. 研究价值与阅读建议
- **关联方向**：弱相关。本文属认知任务设计与多模态数据采集验证，与读者关心的“brain decoding / neural prior / fMRI representation / representation alignment”存在间接交集。
- **启发与意义**：提供了经过行为与神经验证的多任务、多模态数据框架（HCP-mini），此框架可作为构建跨域解码模型或表征对齐方法的优质“数据生成协议”与基准。
- **可借鉴点**：利用“相对激活”（任务 vs. 跨任务均值）而非传统对照条件来定义任务特异性脑图，这一思路在设计多任务解码或表征约束时值得参考。
- **阅读建议**：若专注解码算法创新，可速览第一、三部分；若需构建可靠多任务脑成像数据集，其范式设计和信度分析方法具备工程参考价值。

（完）
