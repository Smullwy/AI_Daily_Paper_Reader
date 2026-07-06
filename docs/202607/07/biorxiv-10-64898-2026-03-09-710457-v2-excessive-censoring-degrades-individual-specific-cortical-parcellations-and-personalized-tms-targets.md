---
title: Excessive Censoring Degrades Individual-Specific Cortical Parcellations and Personalized TMS Targets
title_zh: 过度删减会降低个体特异性皮层分区和个性化TMS靶点的质量
authors: "Tan, T. W. K., Kong, R., Xue, A., Cheng, J., Burgher, B., Cocchi, L., Siddiqi, S. H., Nichols, T. E., Mejia, A. F., Tor, P.-C., Yeo, B. T. T."
date: 2026-07-02
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.09.710457v2.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: fMRI剔除策略对个体特异性分割的影响
tldr: 静息态功能MRI中头动会偏倚功能连接，常用审查高运动数据来缓解，但过度审查可能丢弃有效信号。本研究用个体长时低运动数据作金标准，模拟不同运动水平的短时数据，评估审查严格性对个体皮层分割和个性化TMS靶点的影响。结果发现，宽松审查在任何运动水平下均优于严格审查，其改善程度可抵扫描时间加倍；且仅使用高运动数据的宽松审查可与严格审查混合运动数据的结果相媲美甚至更优，提示患者无需仅因高运动而重新扫描。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究不同审查严格程度对个体特异性皮层分割和个性化TMS靶点质量的影响，以回答临床中是否需因高运动数据而重新扫描的常见困境。
method: 利用50名参与者≥1小时低运动数据构建个体化“金标准”，模拟10或20分钟不同运动水平的静息态数据，对比宽松与严格审查策略下的皮层分割和TMS靶点准确性。
result: 宽松审查在所有运动水平下均产生更高质量的分割和TMS靶点，改善幅度约等于严格审查下扫描时间加倍；仅高运动数据在宽松审查下取得的靶点质量不亚于甚至优于严格审查下混合运动数据的结果。
conclusion: 在本研究所评估的运动范围和框架内，即使所有数据均超出严格审查标准，也无需重新扫描，宽松审查即可保留足够有效信息。
---

## 摘要
头动会系统性地偏倚静息态功能磁共振成像（rs-fMRI）中的功能连接（FC）估计。一种常见的缓解策略是删减高运动量的数据帧，并丢弃高运动量的扫描批次。然而，过于严格的删减可能会在去除噪声的同时也丢弃信号，从而可能降低FC估计的质量。在此，我们测试了各种删减策略对个体特异性皮层分区和个性化经颅磁刺激（TMS）靶点选择的有效性。利用包含50名个体的精确fMRI数据集，我们基于每位参与者至少1小时的低运动量数据定义了个性化的“真实参考”标准。然后，我们从剩余数据中模拟具有不同运动水平的10分钟或20分钟rs-fMRI扫描，最终分别得到22名和19名参与者的样本。较高的运动水平会产生与真实参考偏差更大的分区和TMS靶点。然而，在任何给定的运动水平下，宽松的删减相对于严格的删减能产生更高质量的分区和个性化TMS靶点。在严格删减下，这种改善相当于将扫描时长从20分钟加倍至40分钟。在个性化连接组引导的TMS中，一个常见的困境是是否需要对只有高运动量扫描的患者进行重新扫描。一个混合运动量的扫描（包含一个低运动量运行和一个高运动量运行）在丢弃高运动量运行并执行严格删减后，通常可能被认为是可用的。我们发现，对纯高运动量扫描进行宽松删减所得到的TMS靶点，与严格删减混合运动量扫描所得到的靶点相当，甚至更优。因此，在本文所评估的运动范围以及分区/TMS靶点选择框架内，患者可能不必仅仅因为所有运行都超过严格的删减标准而重新扫描。

## Abstract
Head motion systematically biases functional connectivity (FC) estimates in resting-state functional MRI (rs-fMRI). A common mitigation strategy is to censor high-motion volumes and discard high-motion runs. However, overly stringent censoring risks discarding signal alongside noise, potentially degrading FC estimates. Here, we test the efficacy of various censoring strategies on individual-specific cortical parcellations and personalized transcranial magnetic stimulation (TMS) target selection. Using precision-fMRI datasets comprising 50 individuals, we define individualized "ground-truth" references from [&ge;]1 hour of low-motion data per participant. We then simulate 10-min or 20-min rs-fMRI sessions with varying motion levels from the remaining data, yielding final samples of 22 and 19 participants, respectively. Higher motion produces parcellations and TMS targets that deviate further from the ground-truth references. However, at any given motion level, lenient censoring produces higher quality parcellations and personalized TMS targets than strict censoring. The improvement is comparable to doubling scan duration from 20 to 40 min under strict censoring. With personalized connectome-guided TMS, a common dilemma is whether to re-scan patients with only high-motion runs. A mixed-motion session with one low-motion run and one high-motion run may often be considered usable after discarding the high-motion run and strict censoring. We find that lenient censoring of high-motion-only sessions yields TMS targets comparable to - or even better than - those derived from strictly censored mixed-motion sessions. Therefore, within the motion range and parcellation/TMS targeting frameworks evaluated here, patients may not need to be re-scanned solely because all runs exceed strict censoring criteria.