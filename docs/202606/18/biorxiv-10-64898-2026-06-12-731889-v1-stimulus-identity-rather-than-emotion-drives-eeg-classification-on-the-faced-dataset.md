---
title: Stimulus identity rather than emotion drives EEG classification on the FACED dataset
title_zh: 在FACED数据集上，刺激身份而非情绪驱动脑电分类
authors: "Gerster, M., Sirotina, E., Orlovskii, A., Hertz, A., Champaud, J., Guarino, D., Tulli, S."
date: 2026-06-16
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.12.731889v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: EEG脑解码与跨被试分类
tldr: FACED是最大公开EEG情绪数据集，但本文通过线性分类器与深度学习模型发现，其分类效果主要反映刺激身份而非情绪。原因包括每类刺激少、标签按刺激分配、视频内时间分割，导致时间自相关和刺激混淆。为此，作者提出五项建议，涵盖刺激多样性、时间独立性和标签验证，以改进情绪解码研究。
source: biorxiv
selection_source: fresh_fetch
motivation: 排除刺激身份混淆，确保EEG情绪识别真正基于情绪而非无关线索。
method: 使用LinearSVC和CLISA模型，在FACED数据集上对比不同标签和分割方式下的分类准确性。
result: 分类性能受刺激身份驱动，减少视频数量反而提升准确率，且个体自报告标签未能改善分类。
conclusion: FACED的设计缺陷导致分类混淆刺激身份与情绪，研究提出改进建议以提升未来情绪解码的可靠性。
---

## 摘要
可靠的基准数据集对于推进基于脑电的情绪识别至关重要。精细粒度情感计算脑电数据集（FACED）是最大的公开脑电情绪数据集（123名被试，9种情绪类别），并被广泛用作基准。我们证明，在FACED上的被试内和跨被试分类主要反映刺激身份而非情绪。使用线性分类器（LinearSVC）和深度学习模型（CLISA），我们展示了：（1）对于被试报告感受到与未感受到指定情绪的试次，分类性能相当；（2）当用个体自我报告替换刺激分配的标签时，准确率下降；（3）尽管丢弃了三分之二的数据，将每种情绪减少到一个视频时，准确率反而上升。这些结果反映了FACED中的三个设计选择：每个类别刺激数量少、刺激分配的标签，以及交叉验证中使用的视频内时间分割。这些因素共同使得数据集容易受到时间自相关和刺激身份混淆的影响。为了指导未来的工作，我们提出了五项建议——涵盖刺激多样性、时间独立性和标签验证——用于缓解这些混淆的情绪解码研究设计。

## Abstract
Reliable benchmark datasets are critical for advancing EEG-based emotion recognition. The Finer-grained Affective Computing EEG Dataset (FACED) is the largest publicly available EEG emotion dataset (123 subjects, nine emotion categories) and a widely adopted benchmark. We demonstrate that both intra-subject and cross-subject classification on FACED primarily reflects stimulus identity rather than emotion. Using a linear classifier (LinearSVC) and a deep learning model (CLISA), we show that (1) classification performance is comparable for trials where subjects reported feeling versus not feeling the assigned emotion; (2) accuracy drops when stimulus-assigned labels are replaced with individual self-reports; and (3) accuracy increases when reducing to one video per emotion despite discarding two-thirds of the data. These results reflect three design choices in FACED: few stimuli per category, stimulus-assigned labels, and within-video temporal splits for cross-validation. Together, these make the dataset susceptible to temporal autocorrelation and stimulus-identity confounds. To guide future work, we propose five recommendations -- spanning stimulus diversity, temporal independence, and label validation -- for emotion-decoding study designs that mitigate these confounds.