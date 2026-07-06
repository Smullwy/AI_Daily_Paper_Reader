---
title: Network and hierarchical organization of intrinsic timescales in the human brain
title_zh: 人脑内在时间尺度的网络与层级组织
authors: "Krause, B. M., Bublitz, E. F., Dappen, E. R., Kawasaki, H., Nourski, K. V., Banks, M. I."
date: 2026-07-02
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.01.735904v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 基于fMRI连接性的内在时间尺度层次组织
tldr: 本研究利用颅内脑电图(iEEG)和扩散图嵌入，将记录位点分配至皮层等级，并提取内禀时间尺度。结果显示，时间尺度从感觉区到联合区系统增加，网络枢纽区域时间尺度更长。睡眠期等级梯度消失，低等级区域时间尺度显著增大。工作建立了时间尺度与皮层等级、网络拓扑的直接联系，提出了一种适用于iEEG的等级度量新方法，揭示了脑状态对时间组织的动态调节。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究人类大脑内禀时间尺度如何随皮层等级和网络拓扑变化，以及这些关系是否受脑状态调节。
method: 将iEEG位点坐标投影到基于静息态fMRI的扩散图嵌入空间中定义等级位置，并通过频谱参数化提取时间尺度，分析其与网络拓扑的关联。
result: 时间尺度随等级递增，枢纽区域时间更长；睡眠中等级梯度消失，由低等级区域时间尺度选择性增加所致。
conclusion: 大脑的时间分层组织受网络架构支持且被脑状态动态调节，新等级度量方法可用于iEEG研究。
---

## 摘要
内在神经时间尺度代表信息在神经回路中维持的特征持续时间。有证据表明，神经时间尺度沿着皮层层级呈系统性变化，初级感觉区的时间尺度较短，而高级联合区的时间尺度较长。以往研究中，层级通常通过类别、解剖或基于静息态功能磁共振成像功能连接的主梯度（利用扩散映射嵌入，DME推导）来定义。在此，我们将个体颅内脑电图（iEEG）记录位点的MNI坐标投影到该嵌入空间（由人脑连接组计划静息态fMRI数据推导而来）中，从而赋予其层级位置。我们利用频谱参数化方法提取局部场电位功率谱的非周期性成分，以此从成年神经外科患者（n=46，25名女性）的静息态iEEG记录中估计神经时间尺度。时间尺度随层级位置单调递增，并与由iEEG功能连接的DME推导的两个感兴趣区（ROI）水平的网络拓扑测量相关：平均功能连接较强的ROI展现出更长的时间尺度，同样，作为枢纽的ROI（由接近嵌入空间中心定义）也是如此。最后，时间尺度随睡眠阶段变化，NREM期最慢，清醒和REM期最快。清醒和N1期存在的层级梯度在REM、N2和N3睡眠中不再被检测到，这源于低层级时间尺度的选择性增加。本研究提出了一种可应用于iEEG数据的新层级度量方法，在人脑iEEG中建立了神经时间尺度、皮层层级和网络拓扑之间的直接联系，并证明这种层级组织受脑状态的动态调节。

意义声明：大脑同时处理多个时间尺度信息，不同的皮层区域分别特化用于快速感觉处理或慢速情境整合。我们通过人脑颅内电生理记录测量了内在神经时间尺度，并应用了一种新方法来定位每个记录位点在皮层层级中的位置。时间尺度从感觉区到联合区系统性增加，并在网络枢纽（即与大脑其它部分均匀且广泛连接的区域）中达到最长。在睡眠期间，这种层级组织未被检测到，感觉区的时间尺度增加最为显著。这些发现推进了我们对大脑时间组织如何由网络架构塑造并受脑状态调节的理解。

## Abstract
Intrinsic neural timescales represent the characteristic duration over which information is maintained in neuronal circuits. Evidence suggests that neural timescales vary systematically across the cortical hierarchy, with shorter timescales in primary sensory areas and longer timescales in higher-order association regions. In previous studies, hierarchy has been defined categorically, anatomically, or from the principal gradient of resting-state fMRI functional connectivity derived using diffusion map embedding (DME). Here, we assign hierarchical position to individual human intracranial electroencephalography (iEEG) recording sites by projecting their MNI coordinates onto this embedding space, derived from Human Connectome Project resting-state fMRI data. We estimated neural timescales from resting-state iEEG recordings in adult neurosurgical patients (n=46, 25 female) by extracting the aperiodic component of the local field potential power spectrum using spectral parameterization. Timescales increased monotonically with hierarchical position and associated with two region of interest (ROI)-level measures of network topology derived from DME of participants iEEG functional connectivity: ROIs with stronger mean functional connectivity exhibited longer timescales, as did ROIs functioning as hubs, defined by proximity to the center of embedding space. Finally, timescales varied with sleep stage, with slowest values during NREM and fastest during wake and REM. The hierarchical gradient present during wake and N1 was no longer detected during REM, N2, and N3 sleep, driven by a selective increase in timescales at lower levels of the hierarchy. This work presents a novel metric of hierarchy that can be applied to iEEG data, establishes a direct link between neural timescales, cortical hierarchy, and network topology in human iEEG, and demonstrates that this hierarchical organization is dynamically modulated by brain state.

Significance StatementThe brain processes information across multiple timescales simultaneously, with different cortical regions specialized for fast sensory processing or slow integration of context. We measured intrinsic neural timescales from human intracranial electrophysiological recordings and applied a novel method to locate each recording site along the cortical hierarchy. Timescales increased systematically from sensory to association areas, and were longest in network hubs, i.e., regions that are uniformly and widely connected to the rest of the brain. During sleep, this hierarchical organization was not detected, with sensory areas showing the largest increases in timescale. These findings advance our understanding of how the brains temporal organization is shaped by network architecture and modulated by brain state.