---
title: Near-critical slow dynamics enable flexible temporal computations and generalization
title_zh: 近临界慢动力学支持灵活的时间计算与泛化
authors: "Ramesan, G., Nandan, A., Koch, D., Koseska, A."
date: 2026-07-02
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.29.735180v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 研究循环神经网络的时间计算和泛化动力学
tldr: 本研究针对神经计算中低维流形缺乏动力学机制解释的问题，以循环神经网络训练的间隔计时任务为模型，揭示网络通过自组织在动力学分岔附近形成具有近零特征值的慢点集，作为动力学支架约束轨迹演化，实现结构化瞬态计算。慢集范围可预测泛化能力，缺失则泛化失败。构建最小系统证实慢集几何的充分性，表明近临界系统的计算能力源于瞬态流而非吸引子态。
source: biorxiv
selection_source: fresh_fetch
motivation: 揭示神经计算背后的动力学机制，解释泛化能力和不同电路实现同一计算的基础。
method: 使用循环神经网络训练间隔计时任务，分析状态空间动力学，识别慢点集和瞬态演化结构。
result: 网络自组织在分岔附近形成慢集支架，输入瞬态重定位活动，慢集决定后续轨迹，实现时间计算；慢集范围预测泛化，缺乏慢集则无法外推；最小系统验证了慢集机制的充分性。
conclusion: 近临界慢瞬态是实现灵活时序计算和泛化的关键动力学机制，低维流形源于状态空间结构，计算能力来自瞬态流的组织。
---

## 摘要
尽管神经活动常沿低维流形演变，但这类描述并未解释生成、约束和稳定计算过程的动力学机制。识别这些机制对于预测扰动响应、理解对未训练信号的泛化能力，以及解释相似计算如何由不同回路实现至关重要。在此，我们以训练于间隔计时任务的循环神经网络作为模型系统，揭示神经计算的动力学机制。我们发现，尽管收敛到高度多样的吸引子结构，训练后的网络共享一种保守的暂态动力学。在学习过程中，网络在动力学分岔附近自组织，形成由近零特征值梯度谱所表征的结构化慢点幽灵集。这些慢点集构成一个动力学骨架，约束轨迹演化。输入暂态地重塑向量场并重新定位该骨架内的活动，而底层的慢点集则支配后续动力学。因此，时间计算通过结构化的暂态演化而非收敛到不动点或持续活动状态来实现。慢点集的规模可预测对未见时间间隔的泛化能力，缺乏此类组织的网络无法可靠外推。为检验充分性，我们构建了一个具有类似慢点集几何结构的最小动力学系统，无需学习即可复现间隔计时，从而为识别时间计算的基本动力学要素提供了基准。这些结果共同表明，结构化的暂态慢过程是时间计算的一种候选动力学机制，为慢低维流形提供了作为底层状态空间结构涌现结果的机理解释，并暗示近临界系统中的计算能力源于暂态流的组织，而非仅仅吸引子状态。

## Abstract
Although neural activity often evolves along low-dimensional manifolds, such descriptions do not explain the dynamical mechanisms that generate, constrain, and stabilize computation. Identifying these mechanisms is essential for predicting responses to perturbations, understanding generalization to untrained signals, and explaining how similar computations arise from distinct circuit implementations. Here we use recurrent neural networks trained on an interval timing task as a model system to uncover the dynamical mechanisms of neural computation. We show that, despite converging to highly diverse attractor architectures, trained networks share a conserved transient dynamics. During learning, networks self-organize near dynamical bifurcations, forming structured ghost sets of slow points characterized by graded spectra of near-zero eigenvalues. These slow sets form a dynamical scaffold that constrains trajectory evolution. Inputs transiently reconfigure the vector field and reposition activity within this scaffold, while the underlying slow set governs subsequent dynamics. As a result, temporal computation is implemented through structured transient evolution rather than convergence to fixed points or persistent activity states. The extent of the slow sets predicts generalization to unseen temporal intervals, and networks lacking such organization fail to extrapolate reliably. To test sufficiency, we construct a minimal dynamical system endowed with analogous slow set geometry that reproduces interval timing without learning, providing a benchmark for identifying the essential dynamical ingredients of temporal computation. Together, these results identify structured slow transients as a candidate dynamical mechanism for temporal computation, provide a mechanistic interpretation of slow low-dimensional manifolds as emergent consequences of underlying state-space structure, and suggest that computational capacity in near-critical systems arises from the organization of transient flow rather than attractor states alone.