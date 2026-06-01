---
title: "HARP: Hierarchical Anatomical Refinement of Pathways for Whole-Brain Tractography"
title_zh: HARP：全脑纤维束追踪的路径分层解剖优化
authors: "Leserri, S., Rockland, K. S., Aydogan, D. B."
date: 2026-05-30
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.27.728127v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 分级解剖约束用于全脑纤维追踪
tldr: "为解决扩散MRI纤维束成像中全脑解剖约束碎片化问题，提出HARP框架，通过分层注入多尺度解剖先验，实现系统化整合。在多种算法和协议下，HARP减少9%的不合理纤维束，这些伪影连接在地面真值中缺失，且非事后过滤所能识别，从而提升重建解剖特异性和连接组估计可靠性。"
source: biorxiv
selection_source: fresh_fetch
motivation: 扩散MRI纤维束成像需要解剖约束确保白质通路可信，但全脑约束编码挑战大，因为神经解剖知识碎片化且分布不均。
method: 提出HARP，一个分层注入不同细节程度解剖约束的灵活框架，与逐步精细的脑分割相结合。
result: "在多种纤维束成像算法和采集协议上，HARP减少不合理纤维束最高达9%，这些伪影连接在地面真值脑模型中缺失，事后过滤无法可靠识别。"
conclusion: HARP提高纤维束重建的解剖特异性，改善连接组估计，并推动神经解剖见解在纤维束成像管线中的编码，促进全脑连接研究。
---

## 摘要
扩散MRI纤维束成像是一个不适定逆问题，需要解剖学约束来确保重建白质通路的合理性。然而，编码全脑约束具有挑战性，因为神经解剖学知识分散且在不同区域和空间尺度上分布不均。我们引入了HARP，一个灵活的框架，它随着越来越精细的脑区分割，在不同细节层次上分层注入解剖学约束。与现有的固定规则方法不同，HARP能够在一个统一框架内系统、可扩展地整合多种先验知识。在多种纤维束成像算法和采集协议中，HARP最高可将不合理流线减少9%。这些被排除的连接在真实脑模型上不存在，表明它们源于伪影，并且仅靠事后过滤权重无法可靠识别。通过减少假阳性重建，HARP提高了纤维束重建的解剖特异性以及下游连接组估计的准确性。更广泛地说，HARP代表着向合作努力编码神经解剖学见解以推进纤维束成像流程迈出的一步，旨在促进体内全脑连接研究。

## Abstract
Diffusion MRI tractography is an ill-posed inverse problem that requires anatomical constraints to ensure the plausibility of reconstructed white-matter pathways. Yet, encoding whole-brain constraints is challenging because neuroanatomical knowledge is fragmented and unevenly distributed across regions and spatial scales. We introduce HARP, a flexible framework that hierarchically injects anatomical constraints at different levels of detail, in parallel with more and more granular brain segmentations. Unlike existing fixed rule-based approaches, HARP enables the systematic, scalable integration of diverse priors within a unified framework. Across multiple tractography algorithms and acquisition protocols, HARP achieves up to a 9% reduction in implausible streamlines. These rejected connections are absent from a ground truth brain phantom, indicating their artifactual origin, and cannot be reliably identified using post-hoc filtering weights alone. By reducing false positive reconstructions, HARP improves the anatomical specificity of tract reconstructions and downstream connectome estimates. More broadly, HARP represents a step toward a collaborative effort to encode neuroanatomical insights in tractography pipelines, with the goal of advancing in vivo whole-brain connectivity studies.