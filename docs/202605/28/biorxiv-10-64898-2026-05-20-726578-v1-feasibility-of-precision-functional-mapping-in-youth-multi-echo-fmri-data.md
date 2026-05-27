---
title: Feasibility of Precision Functional Mapping in Youth Multi-Echo fMRI Data
title_zh: 青少年多回波fMRI数据中精准功能映射的可行性
authors: "Treves, I. N., Pagliaccio, D., Patel, G. H., Tamimi, R., Kimerty, J. A., Auerbach, R. P., Marusak, H. A."
date: 2026-05-22
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.20.726578v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 使用精确功能映射的青少年跨被试fMRI脑表征
tldr: 青少年认知与精神病理研究日益关注脑功能，精确功能映射(PFM)可刻画个体化脑网络，但其在青少年多回波fMRI中的可行性尚不明确。本研究对8名10-17岁青少年采集80分钟多回波fMRI数据，应用PFM得到高度模块化、与成人模板一致的网络，功能连接可靠性在10-15分钟即达稳定，感觉网络稳定性最高，且仅听觉任务从个体化映射中明确获益。结果表明PFM可有效刻画青少年感觉网络，但需方法创新以弥合深度个案与大规模研究间的差距。
source: biorxiv
selection_source: fresh_fetch
motivation: 评估精确功能映射(PFM)在青少年多回波fMRI数据中的可行性，以支持青少年认知与精神病理脑功能研究。
method: 对8名10-17岁青少年采集80分钟静息态与任务态多回波fMRI数据，应用PFM刻画个体化功能网络。
result: PFM网络模块化且与成人模板一致，可靠性约10-15分钟稳定，感觉网络稳定性最高；个体化映射仅在听觉任务中优于组模板。
conclusion: PFM能有效刻画青少年感觉知觉网络，但需进一步方法创新以应用于大规模发展研究。
---

## 摘要
人们对识别青少年认知、人格和精神病理学背后的大脑功能越来越感兴趣。一种有前景的方法是MRI功能连接的精准功能映射（PFM），这是一种数据密集型方法，用于表征个体化的大脑网络。基础研究表明，PFM能够检测稳定、任务响应和临床相关的网络。研究表明，功能连接可靠性和网络稳定性随着数据量的增加而提高，尽管基准估计因人群、预处理流程和MRI采集方法而异。因此，理解PFM在青少年人群和多回波fMRI采集中的表现很重要。在一项对八名青少年（10-17岁）的案例研究中，我们将PFM应用于80分钟的静息态和任务态fMRI合并数据。得到的网络高度模块化，与成人模板一致，且没有结构配准伪影的证据。功能连接可靠性与之前的单回波研究相比表现良好，多变量相似性和ICC估计显示在10-15分钟左右就达到了早期稳定，尽管随着数据增加继续改善。特质样稳定性随着采集时间逐渐增加，并且贝叶斯算法（MS-HBM）显示出比Infomap更高的稳定性。在所有算法中，感觉网络（躯体运动、听觉、视觉）的稳定性最高。此外，当评估对威胁和注意范式的任务响应时，只有听觉网络一致性地从个体化映射中获益，优于组模板网络。这些发现表明，在扫描时间受限的情况下，PFM对于表征青少年的感觉和知觉网络特别有效。弥合深度采样个案与大规模发展研究之间的方法论鸿沟需要进一步的创新和验证。

## Abstract
There is growing interest in identifying brain function underlying adolescent cognition, personality, and psychopathology. One promising approach is Precision Functional Mapping (PFM) of MRI functional connectivity, a data-intensive method for characterizing individualized brain networks. Foundational studies suggest that PFM can detect stable, task-responsive, and clinically relevant networks. Studies demonstrate that both functional connectivity reliability and network stability improve with increasing data quantity, although benchmark estimates vary across populations, preprocessing pipelines, and MRI acquisition approaches. Accordingly, it is important to understand how PFM performs in adolescent populations and with multi-echo fMRI acquisition. In a case study of eight youth (ages 10-17), we applied PFM to 80-minutes of combined resting-state and task-based fMRI. The resulting networks were highly modular, consistent with adult templates, and without evidence of structural registration artifacts. Functional connectivity reliability compared favorably to prior single-echo studies, with multivariate similarity and ICC estimates showing early stabilization around 10-15 minutes despite continued improvement with additional data. Trait-like stability increased gradually with acquisition time and a Bayesian algorithm (MS-HBM) demonstrated higher stability than Infomap. Across algorithms, stability was greatest in sensory networks (somatomotor, auditory, visual). Furthermore, when evaluating task-based responses to threat and attention paradigms, only the auditory network consistently benefited from individualized mapping over group template networks. These findings suggest that, with constrained scanning time, PFM is especially effective for characterizing sensory and perceptual networks in adolescents. Bridging the methodological divide between deeply sampled individual cases and large-scale developmental studies will require further innovation and validation.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义
- **核心问题**：精准功能映射（PFM）是一种通过大量个体fMRI数据刻画个体化脑网络的方法，已在成人中展现出稳定性和临床价值，但其在**青少年**群体以及**多回波（multi-echo）fMRI**采集中的可行性尚不明确。
- **研究动机**：越来越多研究关注青少年认知、人格与精神病理背后的大脑功能，PFM若能在该年龄段有效应用，将有力推动个体化脑功能发育研究。然而，功能连接的可靠性与网络稳定性会受到人群、预处理流程和采集方式的影响，因此需专门验证。
- **整体含义**：该研究旨在为青少年脑功能研究中的PFM方法提供基准证据，探索在有限扫描时间内刻画个体化网络的可能性，并为未来将深度个案与大规模发展研究相衔接奠定基础。

## 2. 方法论
- **核心思想**：在较长扫描时长（80分钟）下，结合静息态与任务态多回波fMRI，评估PFM在青少年中产生的脑网络是否稳定、模块化且与成人模板一致，并检验个体化映射在任务响应中的增益。
- **关键技术流程**：
  - **数据采集**：对每名被试采集80分钟的多回波fMRI数据，融合静息态与任务态（威胁警觉、注意范式）运行。
  - **网络构建**：使用PFM生成个体化功能网络，考察网络模块化和与标准成人模板的相似性。
  - **可靠性评估**：采用**多变量相似性**和**组内相关系数（ICC）**估计功能连接随数据量增加的变化，寻找达到早期稳定的时间点（约10–15分钟）。
  - **算法比较**：对比了两种网络划分/稳定性算法——**贝叶斯算法（MS-HBM）**和**Infomap**，分析它们在不同网络中的稳定性。
  - **任务响应验证**：在威胁和注意任务中，比较**个体化映射网络**与**组水平模板网络**的任务激活响应，检验个体化映射是否带来增益。

## 3. 实验设计
- **数据集**：8名10–17岁青少年（个案深度采样研究）。
- **采集方案**：每人采集80分钟的多回波fMRI，包含静息态和任务态（涉及威胁刺激、注意任务等）。
- **对比基准**：
  - 将可靠性、网络稳定性的估计与前人的**单回波成人研究**进行定性比较。
  - 对比**MS-HBM**与**Infomap**算法在网络稳定性上的表现。
  - 对比**个体化定义的功能网络**与**组平均模板网络**在任务激活分析中的效果。
- **评估指标**：网络模块化程度、与成人模板的空间一致性、功能连接可靠性（多变量相似度、ICC）、网络稳定性（随时间增长）、任务响应增益。

## 4. 资源与算力
- 文中的摘要和元数据**未明确提及**所使用GPU型号、数量、训练时长等计算资源信息。研究所用PFM流程可能依赖高计算量（尤其是MS-HBM等贝叶斯方法），但具体算力配置在提供材料中未予说明。

## 5. 实验数量与充分性
- **实验组数**：
  - 主要实验围绕**单一群体**（8名青少年）开展，未设置多个独立样本组或跨站点验证。
  - 内部比较包括：**两种算法**（MS-HBM vs Infomap）、**不同网络系统**（感觉网络 vs 非感觉网络）、**两种映射方式**（个体化 vs 组模板）以及**时间维度**的稳定性变化。
- **充分性与客观性**：
  - 被试数量极小（N=8），属于探索性案例研究，统计效力有限，无法推广到青少年总体。
  - 实验设计中对关键变量（算法、映射方式、时间）进行了系统对比，具有一定内在合理性。
  - 缺乏与其他年龄段或外部数据集的直接对比，**客观性受限**；结果更多作为可行性证据。

## 6. 主要结论与发现
- **网络整体特征**：PFM在青少年中得到的个体网络高度**模块化**，且与成人组水平模板一致，未发现结构性配准伪影。
- **可靠性与稳定性**：
  - 功能连接可靠性在数据量达**10–15分钟**时即出现早期稳定，但继续增加数据仍有改善。
  - 网络的特质样稳定性随采集时间逐渐提升，且**MS-HBM算法**的稳定性优于Infomap。
  - **感觉网络**（躯体运动、听觉、视觉）在所有算法中表现出最高稳定性。
- **任务响应增益**：仅**听觉网络**一致地从个体化映射中获益（比组模板表现出更强的任务响应），其他网络未见一致增益。
- **应用启示**：在扫描时间受限的情况下，PFM特别适合刻画青少年的**感觉与知觉网络**，但推广到大规模发展研究仍需方法学创新。

## 7. 优点
- **首次验证**：专门针对青少年和多回波fMRI评估PFM的可行性，填补了该方法的发育应用空白。
- **深度采样**：使用每名被试80分钟的高质量多回波数据，充分释放了个体内可靠性的估计潜力。
- **多面验证**：不止步于网络外观，还通过可靠性曲线、算法比较和任务激活响应进行多维度检验。
- **实用性导向**：明确指出感觉网络在受限扫描时间下的优势，为未来研究聚焦提供了参考。

## 8. 不足与局限
- **样本量极小**：仅8名青少年，无法控制年龄、性别、发育阶段等个体差异，结果外推性严重受限。
- **年龄范围狭窄**：10–17岁跨度较大，内部发育异质性可能未被充分分析（研究未提及分年龄亚组）。
- **缺乏对照**：未直接纳入成人样本进行同范式比较，难以量化“青少年特异性”表现。
- **算力信息缺失**：未报告计算成本，难以评估该流程的可重复性和大面积推广前景。
- **任务类型有限**：仅测试了威胁和注意范式，结论“仅听觉网络获益”可能受任务性质影响，其他认知领域未知。
- **生态效度不足**：80分钟的深度扫描在实际大规模研究中很难实现，所提“10-15分钟稳定”仍基于个案高强度数据累积，实施门槛高。

（完）
