---
title: "FASTIMAGES: Validating replay detection methods in human Neuroimaging using a combined MEG and fMRI dataset"
title_zh: FASTIMAGES：利用结合MEG和fMRI的数据集验证人类神经影像中的重放检测方法
authors: "Kern, S., Wittkuhn, L., Buss, E., Schuck, N., Feld, G. B."
date: 2026-05-29
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.26.727586v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 结合MEG和fMRI的70名被试数据集用于重放检测
tldr: 神经重放是记忆、规划等认知功能的关键，但非侵入性检测方法缺乏基准验证。本研究推出FASTIMAGES数据集，包含70名参与者的fMRI和MEG并发记录，通过快速视觉刺激诱发已知神经序列。利用该数据集，比较了TDLM（适用于MEG）和SODA（适用于fMRI）两种序列检测方法，验证了其有效性。结果表明，各方法在原生模态表现优异，但跨模态检测困难。该数据集为未来非侵入性序列检测方法开发提供了理想化基准。
source: biorxiv
selection_source: fresh_fetch
motivation: 缺乏针对非侵入性神经重放检测方法的系统性基准验证。
method: 构建包含快速视觉刺激诱发神经序列的并发fMRI/MEG数据集，并使用TDLM和SODA两种统计方法进行检测。
result: TDLM在MEG、SODA在fMRI中效果显著，但跨模态性能受限。
conclusion: FASTIMAGES数据集为后续非侵入性序列检测方法提供了有效的验证基准。
---

## 摘要
基于侵入性电生理学的啮齿动物和人类研究已证实，神经重放是大脑中普遍存在的一种现象，与记忆、规划和决策等多种认知功能相关。然而，在人类中进行侵入性记录仍然困难，因此关于人类大脑重放的知识依然匮乏。因此，为了全面理解人类的重放现象，我们需要可靠的非侵入性检测方法。目前已有几种主要的非侵入性方法被提出，但我们缺乏与已知金标准信号的全面比较验证。在本研究中，我们推出了FASTIMAGES，一个来自70名参与者的基准数据集，包含并行采集的功能磁共振成像（fMRI，n=40，先前已发表）和脑磁图（MEG，n=30）记录，其中包含由快速视觉刺激引发的已知神经序列以及功能定位器试次。这些神经序列由五种不同的视觉刺激按顺序呈现，呈现速度分别为132毫秒、164毫秒、228毫秒和612毫秒的刺激出现间隔。利用该数据集，我们研究了两种现有的序列检测统计方法，即时间延迟线性模型（TDLM，由Liu等人于2021年为MEG开发）和斜率顺序动态分析（SODA，由Wittkuhn和Schuck于2021年为fMRI开发）。我们检验了每种方法的基本假设，分析了它们在MEG和fMRI应用中的优势与不足。我们证明，两种方法在各自的原生模态中均表现出色（TDLM用于MEG，SODA用于fMRI），在该基准的理想条件下效应量相当。跨模态迁移仍具挑战性。最后，FASTIMAGES数据集提供了具有已知且清晰表达序列的数据，可用于在理想条件下对未来的序列检测方法进行基准测试和验证。

## Abstract
Studies in rodents and humans using invasive electrophysiology have established that neural replay is a ubiquitous phenomenon in the brain that is associated with a wide range of cognitive functions, including memory, planning and decision making. Yet, invasively recording in humans remains difficult, and hence knowledge about replay in humans remains scarce. Hence, to comprehensively understand replay in humans, we need reliable approaches that can detect it non-invasively. Several main non-invasive approaches have been proposed, but we lack a full comparative validation against known ground truth signals. In this study, we present FASTIMAGES, a benchmark dataset from seventy participants with parallel fMRI (n = 40, previously published) and MEG (n=30) recordings containing known neural sequences evoked by fast visual stimulation as well as functional localizer trials. The neural sequences were elicited by five different visual stimuli shown in sequences at speeds of 132, 164, 228 and 612 milliseconds onset-to-onset intervals. Using this dataset, we investigate two existing statistical methods for sequence detection, namely Temporally Delayed Linear Modelling (TDLM, developed for MEG by Liu et al., 2021) and Slope Order Dynamic Analysis (SODA, developed for fMRI by Wittkuhn & Schuck, 2021). We examine the underlying assumptions of each method, analyse their resulting strengths and weaknesses in application to MEG and fMRI. We demonstrate that both approaches excel in their native modality (TDLM for MEG and SODA for fMRI), with comparable effect sizes given idealized conditions in this benchmark. Cross-modality transfer remains challenging. Finally, the FASTIMAGES dataset provides data with known and clearly expressed sequences and can be used to benchmark and validate future sequence detection methods under idealized conditions.