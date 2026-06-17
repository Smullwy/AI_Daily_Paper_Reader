---
title: EEG-based classification models reveal differential neural processing of words and images
title_zh: 基于脑电图的分类模型揭示了文字和图像的差异化神经处理
authors: "Morakabati, N. R., Thiha, A. S., Schechtman, E."
date: 2026-06-15
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.16.712233v3.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 基于EEG的分类模型解码言语和图像的神经处理
tldr: 本研究提出基于EEG和机器学习的分析管线，通过让参与者观看图像和词语两种刺激，考察不同类别物体的神经表征差异。结果发现图像刺激的分类准确率显著高于词语，顶叶和左颞电极作用突出，图像类别特异性模式可在个体间泛化，验证了EEG用于神经解码的有效性。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究词语和图像类别表征的神经处理差异，并评估EEG用于类别神经解码的可行性。
method: 30名参与者观看五类物体的图像和词语并进行1-back任务，采集EEG数据后训练支持向量机进行分类。
result: 图像和词语试验均能显著分类类别，但图像准确率更高，且图像的所有类别对均可区分，而词语仅有一对可区分；顶叶和左颞电极贡献更大，图像模式可跨参与者泛化。
conclusion: 该方法证实EEG数据可用于高精度类别解码，为研究清醒和离线状态下神经表征的激活与再激活提供了工具。
---

## 摘要
背景：利用神经影像数据的机器学习方法可用于监测神经表征的激活。具体而言，它们可用于识别处理特定类别项目时参与的大脑网络。这种方法已被应用于神经影像数据，包括功能磁共振成像数据和脑电图数据。新方法：在此，我们提出了一项任务和一个分析流程，利用脑电图研究类别表征。参与者（N = 30）观看了属于五个类别（动物、工具、食物、场景和车辆）的物体的一系列图像和文字，并在连续呈现相同类别的项目时做出反应。结果：我们在参与者个体内的脑电图数据上训练了支持向量机，发现图像试次和文字试次都产生了显著的类别分类准确率，其中图像试次的准确率高于文字试次。在成对比较类别时，图像试次的所有类别对在统计上均可区分，而文字试次仅有一对类别可区分。顶叶和左颞叶电极对图像分类的贡献大于额叶和右颞叶电极。对于图像试次，类别特异性活动模式也在参与者之间泛化。与现有方法比较：我们的数据和分析流程获得了较高的分类准确率，主要针对图像试次，为脑电图数据在神经解码中的效用提供了支持。结论：这些方法有助于探索清醒状态下，以及可能在离线状态下，类别水平的神经表征的激活与再激活。

## Abstract
Background: Machine learning methods employing neuroimaging data are useful for monitoring the activation of neural representations. Specifically, they can be used to discern the brain networks engaged in processing specific categories of items. This approach has been employed on neuroimaging data, including functional magnetic resonance imaging data and electroencephalography (EEG) data. New method: Here, we present a task and an analytical pipeline for investigating category representations using EEG. Participants (N = 30) viewed a series of images and words of objects belonging to five categories (Animals, Tools, Food, Scenes, and Vehicles) and responded when items from the same category were presented consecutively. Results: We trained support vector machines on EEG data within participants and found that both image trials and word trials yielded significant category classification accuracy, with image trials achieving higher accuracy than word trials. When comparing categories in a pair-wise fashion, all pairs were statistically distinguishable for image trials, whereas only one pair was distinguishable for word trials. Parietal and Left Temporal electrodes contributed more to image classification than Frontal and Right Temporal electrodes. Category-specific activity patterns also generalized across participants for image trials. Comparison with existing methods: Our data and analytic pipeline yielded high classification accuracies, primarily for image trials, providing support for the utility of EEG data for neural decoding. Conclusions: These methods can be instrumental for exploring the activation and reactivation of neural representations at the category level during wakefulness and, potentially, during offline states.