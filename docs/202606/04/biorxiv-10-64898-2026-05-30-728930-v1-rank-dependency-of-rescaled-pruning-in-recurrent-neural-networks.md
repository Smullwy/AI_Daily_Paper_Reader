---
title: Rank dependency of rescaled pruning in recurrent neural networks
title_zh: 递归神经网络中重缩放剪枝的秩依赖性
authors: "Wang, A. Q., Kim, S. H., Choi, H."
date: 2026-06-02
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.30.728930v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: RNN剪枝中的群体动态
tldr: 神经回路修剪能保持低维动态，但其机制不明。本研究超越随机稀疏化方法，系统评估生物激励的修剪规则与RNN底层秩的交互作用。发现修剪后动态和任务性能高度依赖初始秩：低秩网络结合突触重缩放能以极小失真保持低维动态，而高秩网络会退化。这揭示低秩结构与稳态缩放是稀疏网络维持稳定低维动态的关键。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究低维神经动态如何在网络广泛稀疏化过程中得以维持。
method: 通过数学分析与仿真，研究不同突触修剪规则与RNN底层秩的相互作用。
result: 带重缩放的修剪在低秩RNN中几乎无损地保持低维动态，但在高秩RNN中性能退化。
conclusion: 低秩结构结合稳态突触重缩放是维持稀疏网络稳定低维动态的必要条件。
---

## 摘要
在整个发育和成熟过程中，神经回路经历了大规模的突触剪枝，产生高度稀疏的连接，同时保持稳健的群体水平计算。这些群体动力学通常是低维的，允许任务相关的计算被形式化为潜在子空间内的轨迹。这种低维动力学如何在广泛的网络稀疏化过程中得以保留，尚不清楚。在这里，我们研究了不同的突触剪枝规则如何塑造递归神经网络（RNN）中的低维动力学和任务性能。超越以往专注于低秩网络或具有严格约束结构网络的随机稀疏化方法，我们系统地评估了生物学动机的剪枝规则如何与网络的底层秩相互作用。我们表明，剪枝后的动力学和任务性能关键取决于网络的初始秩，这是由于不同秩区间的特征谱特性差异。结合数学分析和模拟，我们证明在低秩RNN中，带有突触重缩放的剪枝能够以最小的失真保持低维动力学，但在高秩区则表现退化。我们的发现表明，低秩结构与稳态突触重缩放相结合，对于在稀疏网络中维持稳定的低维动力学至关重要。

## Abstract
Throughout development and maturity, neural circuits undergo massive synaptic pruning, yielding highly sparse connectivity while preserving robust population-level computations. These population dynamics are often low-dimensional, allowing task-related computations to be formalized as trajectories within latent subspaces. How such low-dimensional dynamics are preserved amid widespread network sparsification remains unclear. Here, we investigate how different synaptic pruning rules shape low-dimensional dynamics and task performance in recurrent neural networks (RNNs). Moving beyond previous approaches focused on random sparsification of low-rank networks or networks with strictly constrained structures, we systematically evaluate how biologically motivated pruning rules interact with a network's underlying rank. We show that post-pruning dynamics and task performance depend critically on the network's initial rank due to distinct eigenspectral characteristics across rank regimes. Combining mathematical analysis with simulations, we demonstrate that pruning with synaptic rescaling preserves low-dimensional dynamics with minimal distortion in low-rank RNNs, but degrades in the high-rank regime. Our findings suggest that low-rank structure, combined with homeostatic synaptic rescaling, is essential for maintaining stable, low-dimensional dynamics in sparse networks.