---
title: Functional MRI signals at and beyond 1 Hz are coupled to brain states and predict spontaneous neural activity
title_zh: 1 Hz 及以上的功能性磁共振成像信号与大脑状态耦合并可预测自发神经活动
authors: "Jacob, L. P. L., Bailes, S. M., Williams, S. D., Stringer, C., Rosen, B. R., Polimeni, J. R., Lewis, L. D."
date: 2026-06-22
pdf: "https://www.biorxiv.org/content/10.1101/2025.10.13.681720v2.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 高频fMRI信号预测神经活动
tldr: 本研究旨在探究高时间分辨率fMRI所捕获的快速血流信号与自发神经活动的关系。通过快速fMRI（TR=378毫秒）与同步脑电图，记录27名受试者在睡眠-清醒过渡期间的大脑活动，发现高频fMRI功率在非快速眼动睡眠中增强（最高1.3赫兹），并与警觉性相关的脑电节律（α和δ）显著耦合。基于机器学习，可从高频fMRI信号跨个体解码脑电功率。结果揭示高频fMRI信号反映动态脑状态，可用于精确量化自发神经活动。
source: biorxiv
selection_source: fresh_fetch
motivation: 高时间分辨率fMRI技术虽已实现毫秒级全脑成像，但其快速血流信号与自发神经活动的关系尚不明确，阻碍了从这类数据推断神经过程。
method: 采用TR=378毫秒的快速fMRI和同步脑电图，记录27名受试者在清醒与睡眠之间的自发脑活动，分析高频fMRI信号与脑电节律的关联。
result: 高频fMRI功率在非快速眼动睡眠中增强（达1.3赫兹），并与脑电α和δ节律存在时空耦合模式，机器学习可跨个体从高频fMRI信号解码脑电功率。
conclusion: 高频fMRI信号与动态脑状态紧密耦合，快速fMRI能够实现自发神经活动的时间精确量化。
---

## 摘要
技术进步已使功能性磁共振成像（fMRI）能以高时间分辨率采集，在短短几百毫秒内实现全脑成像。然而，静息态下快速血流动力学信号与自发神经活动之间的关系尚未得到充分理解，这限制了我们从这些快速数据中推断神经过程的能力。我们假设高频fMRI信号与警觉状态相关的自发神经活动有关，并且这些高频信号可用于推断由脑电神经节律索引的神经活动的动态变化。利用快速fMRI（TR=378 ms）和同步脑电图（EEG）对27名在睡眠与清醒之间漂移的受试者进行研究，我们发现与清醒状态相比，非快速眼动（NREM）睡眠期间频率高达1.3 Hz的fMRI功率增加。高频fMRI功率还与典型的觉醒相关脑电节律（α和δ）相关，其时空交叉相关模式反映了共同的觉醒动态和节律特异性特征。通过机器学习，我们发现可以从留出测试受试者的高频fMRI信号中解码出EEG的α和δ功率，表明fMRI信号的高频成分包含神经耦合信息，其稳健性足以跨个体泛化。这些结果揭示，高频fMRI信号与动态变化的大脑状态耦合，并且快速fMRI使得对自发神经活动进行时间上精确的量化成为可能。

## Abstract
Technological advances have enabled fMRI acquisition with high temporal resolution, enabling brainwide imaging in just a few hundreds of milliseconds. However, the relationship between fast hemodynamic signals and spontaneous neural activity in the resting state is not yet well understood, limiting our ability to infer neural processes from these fast data. We hypothesized that high-frequency fMRI signals are linked to spontaneous neural activity tied to vigilance states, and that these high-frequency signals could be used to infer the dynamic variations in neuronal activity indexed by EEG neural rhythms. Using fast fMRI (TR=378 ms) and simultaneous EEG in 27 humans drifting between sleep and wakefulness, we found that fMRI power increased during NREM sleep (compared to wakefulness) in frequencies up to 1.3 Hz. High-frequency fMRI power was also correlated to canonical arousal-linked EEG rhythms (alpha and delta), with spatiotemporal cross-correlation patterns reflecting both shared arousal dynamics and rhythm-specific signatures. Using machine learning, we found that EEG alpha and delta power can be decoded from high-frequency fMRI signals in subjects held-out from the training set, showing that the high-frequency components of fMRI signals contain neurally-coupled information robust enough to generalize across individuals. These results reveal that high-frequency fMRI signals are coupled to dynamically varying brain states, and that fast fMRI allows for temporally precise quantification of spontaneous neural activity.