---
title: "Quilting the Brain: Whole-Brain iEEG Reconstruction via Incomplete Observation Linear Mixed Models"
title_zh: 拼缝大脑：通过不完全观测线性混合模型实现全脑iEEG重建
authors: "Wang, Y., Li, M., Bringas Vega, M. L., Valdes-Sosa, P. A."
date: 2026-06-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.31.729074v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 线性混合模型用于全脑重建中的人口级神经先验
tldr: 针对颅内脑电图(iEEG)因临床植入碎片化导致的全脑覆盖难题，提出不完全观测线性混合模型(IOLMM)，通过高维统计筛选与分层建模，将稀疏iEEG“缝合”为连续全脑皮层活动图，并构建了首个皮层表面电生理标准图谱，为癫痫病灶检测和神经科学研究提供定量参考。
source: biorxiv
selection_source: fresh_fetch
motivation: 解决iEEG记录稀疏且个体差异大，无法获取完整全脑皮层电生理活动的问题。
method: 提出IOLMM，利用Sure Independence Screening识别真实信号，并建立分层线性混合模型分离群体固定效应和个体随机效应。
result: 在106例患者睡眠数据中验证，成功重构全脑皮层源功率，恢复NREM慢波额叶优势，建立首个iEEG皮层表面电生理图谱。
conclusion: 该框架实现了从碎片化iEEG到全脑连续成像的突破，为电生理标准参考和跨尺度脑功能研究奠定了基础。
---

## 摘要
对人类大脑功能进行高时空分辨率成像受到非侵入性成像物理限制和侵入性电生理学稀疏采样的制约。虽然颅内脑电图(iEEG)以毫米级精度捕捉局部场电位，但临床植入策略导致“覆盖悖论”：观测仅限于互不相连、患者特异性的补丁，导致大部分皮层未被观测到。本研究引入不完全观测线性混合效应模型(IOLMM)，这是一个统计框架，通过将零散的观测“拼缝”成连续的全脑源活动图来解决这一悖论。我们的方法整合了两项创新：(1)从超高维统计改编而来的Sure Independence Screening(SIS)，以区分真实生理信号与容积传导的“鬼影源”；(2)一个层次化的IOLMM，将群体水平的生理固定效应与受试者特异性的仪器随机效应解耦，解决了困扰iEEG群体分析的标度模糊性。将该框架应用于MNI Open iEEG Atlas，通过跨觉醒、N2、N3和REM睡眠阶段的皮层源功率重建进行验证，从106名患者的零散记录中恢复了NREM慢波活动的额叶优势和分级电生理层级。这项工作建立了首个来自iEEG的皮层表面水平规范性电生理图谱，为检测和预测致痫病灶提供了定量参考，并弥合了电生理学的微观精度与系统神经科学的宏观视野之间的差距。

## Abstract
Mapping human brain function at high spatiotemporal resolution is constrained by the physical limitations of non-invasive imaging and the sparse sampling of invasive electrophysiology. While intracranial electroencephalography (iEEG) captures local field potentials with millimeter precision, clinical implantation strategies result in a ``coverage paradox'': observations are restricted to disjoint, patient-specific patches, leaving most of the cortex unobserved. This study introduces the Incomplete Observation Linear Mixed-Effect Model (IOLMM), a statistical framework that resolves this paradox by ``quilting'' fragmented observations into continuous, whole-brain source activity maps. Our approach integrates two innovations: (1) Sure Independence Screening (SIS) adapted from ultra-high-dimensional statistics to distinguish true physiological signals from volume-conducted ``ghost sources''; (2) a hierarchical IOLMM that decouples group-level physiological fixed effects from subject-specific instrumental random effects, solving the scaling ambiguities that plague iEEG group analyses. Applied to the MNI Open iEEG Atlas, the framework is validated through sleep stage-dependent cortical source power reconstruction across Wake, N2, N3, and REM states, recovering the frontal predominance of NREM slow-wave activity and the graded electrophysiological hierarchy from fragmented recordings of 106 patients. This work establishes the first cortical surface-level normative electrophysiological atlas derived from iEEG, providing a quantitative reference for detecting and predicting epileptogenic lesions and bridging the gap between the microscopic precision of electrophysiology and the macroscopic scope of systems neuroscience.