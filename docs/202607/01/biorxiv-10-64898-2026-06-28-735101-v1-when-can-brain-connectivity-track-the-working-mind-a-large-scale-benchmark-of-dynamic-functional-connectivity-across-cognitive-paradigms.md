---
title: When Can Brain Connectivity Track the Working Mind? A Large-Scale Benchmark of Dynamic Functional Connectivity Across Cognitive Paradigms
title_zh: 脑连接何时能追踪工作心智？跨认知范式的动态功能连接大规模基准研究
authors: "Torabi, M., Poline, J.-B., Mitsis, G. D."
date: 2026-06-29
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.28.735101v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 跨被试fMRI动态功能连接大规模基准
tldr: 动态功能连接（dFC）被广泛用于研究脑网络交互如何反映认知过程，但其能否可靠追踪认知参与状态尚不明确。本研究通过大规模基准测试，评估七种常用dFC方法在16个fMRI数据集（涉及1500名被试、28种实验条件）及模拟数据上的解码表现。结果发现，多数dFC方法在预测任务存在时接近随机水平，性能受实验设计、数据质量与方法选择的交互影响。研究识别出提升可靠性的关键条件，为dFC的有效应用提供行动指南。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究动态功能连接能否可靠追踪认知参与，并揭示其失败原因。
method: 对七种常用dFC方法在16个fMRI数据集（含模拟数据）上进行大规模基准评估。
result: 多数dFC方法解码认知参与的表现不佳，性能随实验设计（如任务块长度和转换频率）、数据质量和方法选择变化。
conclusion: dFC追踪认知状态不可靠，其成功需依赖长规则任务块、低转换等实验条件，提供了应用dFC的指导原则。
---

## 摘要
动态功能连接（dFC），即脑网络交互的时变重构，已成为研究神经动态如何反映持续认知的广泛采用方法。然而，一个根本问题仍未解决：dFC能否可靠地追踪个体何时处于认知投入状态，如果不能，为何会失败？在此，我们通过对七种广泛使用的dFC方法进行大规模基准测试来解决这一问题，评估每种方法在16个fMRI数据集（涵盖超过1500名参与者和28种不同实验设置）中预测任务存在的表现，并辅以逼真的模拟数据。在实验数据中，基于dFC的认知投入追踪在许多情况下并不可靠：大多数方法-实验组合的表现接近随机水平，且没有一种方法在所有情境下均成功。然而，这种失败并非一致。实验和模拟数据均表明，解码性能随三个相互作用的因素——实验设计、数据质量和dFC方法的选择——而系统性变化，而非仅取决于dFC特征本身。关键的是，我们确定了与更可靠追踪相关的特定实验设计条件：具有更长、更规律的任务块和较少任务-休息转换的范式可解码性显著更高，而数据质量在不同方法间独立影响性能。这些发现为dFC何时可以且何时不能预期作为潜在认知状态的可靠标记提供了可操作的指导原则。

## Abstract
Dynamic functional connectivity (dFC), the time-varying reconfiguration of brain network interactions, has become a widely adopted method for studying how neural dynamics reflect ongoing cognition. Yet a fundamental question remains unresolved: can dFC reliably track when a person is cognitively engaged, and if not, why does it fail? Here, we address this question through a large-scale benchmark of seven widely used dFC methods, evaluating how well each predicts task presence across 16 fMRI datasets encompassing over 1,500 participants and 28 distinct experimental settings, complemented by realistic simulated data. Across experimental data, dFC-based tracking of cognitive engagement was unreliable in many cases: most method-experiment combinations performed near chance, and no single method succeeded across all contexts. This failure, however, was not uniform. Both experimental and simulated data showed that decoding performance varied systematically with three interacting factors, experimental design, data quality, and the choice of dFC method, rather than depending on dFC features alone. Critically, we identify specific experimental design conditions associated with more reliable tracking: paradigms with longer, more regular task blocks and fewer task-rest transitions were substantially more decodable, while data quality independently influenced performance across methods. These findings offer actionable principles for when dFC can, and cannot, be expected to serve as a reliable marker of underlying cognitive states.