---
title: "Getting Blood from a Stone: Improving Neural Inferences without Additional Neural Data"
title_zh: 点石成金：无需额外神经数据即可改进神经推断
authors: "Halpern, D. J., Gureckis, T. M."
date: 2026-06-23
pdf: "https://www.biorxiv.org/content/10.1101/2021.01.21.427334v4.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 无需额外fMRI数据，从行为数据改进神经推断
tldr: 认知神经科学面临低统计功效问题，通常需增加神经数据。本文提出仅通过收集更多行为数据并使用替代估计器，即可改进对神经信号的推断。模拟与数学推导显示，了解行为边际分布能提升认知-神经映射推断的精准度，增益取决于估计目标与参数。在现实条件下，额外行为数据可更廉价地达到与增加神经成像被试相似的精度提升，为研究设计提供了新维度。
source: biorxiv
selection_source: fresh_fetch
motivation: 旨在解决认知神经科学中低统计功效问题，且避免依赖昂贵的神经数据收集。
method: 通过模拟实验与数学推导，分析如何利用行为数据的边际分布信息配合替代估计器改善神经推断。
result: 额外行为数据在多数现实场景下能带来与增加神经成像被试相当的推断精度提升，且成本更低。
conclusion: 神经成像研究可通过增加扫描仪外的行为被试数量来提升统计功效，为实验设计提供新权衡方向。
---

## 摘要
近年来，认知神经科学文献因包含大量低统计功效的研究而受到批评，这限制了进行可靠统计推断的能力。通常，提高统计功效的建议是收集更多的神经信号数据。然而，许多认知神经科学研究使用从行为数据中估计的参数来推断神经信号（如fMRI BOLD信号）。在本文中，我们探讨认知神经科学家如何通过仅收集行为数据并使用旨在利用这些信息的替代估计量，来更多地了解他们的神经影像信号。我们通过模拟和数学推导证明，对行为边缘分布的更多了解可以改善对认知过程与神经数据之间映射的推断。我们分析了这种收益的大小，发现它取决于所需的估计量和几个基础研究参数。虽然在许多情况下，精度的绝对提升可能不大，但我们的结果表明，在现实环境中，与从神经影像研究中收集更多受试者数据相比，额外的行为数据可以更便宜、更容易地实现相同的推断精度改进。这意味着在进行神经影像研究时，研究人员现在在设计分析中有了另一个可调节的杠杆：在扫描仪中收集的受试者数量和在扫描仪外（实验室或在线）收集的行为受试者数量。

## Abstract
In recent years, the cognitive neuroscience literature has come under criticism for containing many low-powered studies, limiting the ability to make reliable statistical inferences. Typically, the suggestion for increasing power is to collect more data with neural signals. However, many studies in cognitive neuroscience use parameters estimated from behavioral data in order to make inferences about neural signals (such as fMRI BOLD signal). In this paper, we explore how cognitive neuroscientists can learn more about their neuroimaging signal by collecting data on \textit{behavior alone} and using alternative estimators designed to leverage this information. We demonstrate through simulation and mathematical derivations that knowing more about the marginal distribution of behavior can improve inferences about the mapping between cognitive processes and neural data. We analyze the magnitude of this benefit, finding that it depends on the desired estimand and several underlying study parameters. While in many cases the absolute gains in precision can be modest, our results demonstrate that, in realistic settings, additional behavioral data can lead to the same improvement in the precision of inferences more cheaply and easily than collecting additional data from subjects in a neuroimaging study. This means that when conducting a neuroimaging study, researchers now have another knob to turn in a design analysis: the number of subjects collected in the scanner and the number of behavioral subjects collected outside the scanner (in the lab or online).