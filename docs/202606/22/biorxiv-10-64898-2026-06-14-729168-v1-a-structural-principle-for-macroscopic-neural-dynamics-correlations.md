---
title: A Structural Principle for Macroscopic Neural Dynamics Correlations
title_zh: 宏观神经动力学相关性的结构原理
authors: "Wu, Q., Wen, Q., Liu, C."
date: 2026-06-17
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.14.729168v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 宏观神经动力学相关的结构原理
tldr: 本文探究大脑结构连接如何产生大规模神经动力学相关性。作者提出“耦合相关性”——即脑区输入连接模式的相似性——作为关键结构决定因素，利用动力学平均场理论和随机网络模型，推导出定量映射关系。研究发现，耦合相关矩阵的特征值谱决定结构-功能映射形式，生物真实的长尾谱能维持强且尺度不变的动力学相关性，并在人、鼠、果蝇数据中验证了近似线性关系，为脑结构-功能关系提供了机理与定量框架。
source: biorxiv
selection_source: fresh_fetch
motivation: 揭示大脑宏观结构连接如何定量决定涌现的神经动力学相关性，弥补已有研究缺乏第一性原理解释的不足。
method: 采用动力学平均场理论解析和随机神经网络数值模拟，分析耦合相关性对动力学相关性的影响，并检验特征值谱的作用。
result: 耦合相关性与动力学相关性呈近似线性关系，由矩阵特征值谱决定；长尾谱维持强相关且尺度不变，多种实验数据验证了理论预测。
conclusion: 耦合相关性是宏观神经动力学相关性的基本结构原理，为连接脑结构与功能提供了可推广的定量桥梁。
---

## 摘要
神经科学中的一个核心问题是，大脑的结构连接如何产生其涌现出的相关动力学。这些大规模动力学相关性构成了支持认知功能的功能网络。在这里，我们确定了耦合相关性——大脑区域输入连接模式之间的相似性——作为宏观神经动力学相关性的关键结构决定因素。利用动态平均场理论（DMFT）和随机神经网络模型的数值模拟，我们证明耦合相关性在数量上支配着动力学相关性。这种结构-功能映射的函数形式由耦合相关矩阵的特征值谱决定：具有主体特征谱的网络表现出精确的线性关系，而生物学上合理的带长尾的谱则产生近似线性的映射，除非耦合相关性的幅度接近1。尤其是，长尾谱对于重现观察到的耦合相关性的适当幅度和尺寸不变性是必要的，从而维持在大系统中可能支持大脑功能的非消失的动力学相关性。理论预测的近似线性关系在使用包括人类、小鼠和果蝇的结构耦合与神经动力学数据的多个经验数据集中得到了一致的验证。总之，这些结果提供了一个机制性和定量框架，将宏观脑网络结构与涌现的神经动力学联系起来——这是迈向大脑结构-功能关系理论的重要一步。

意义声明 大脑的布线如何产生其协调活动是神经科学中一个未解决的根本问题。先前的工作已经确定了结构和功能连接之间的相关性，但这些关系缺乏机制性的第一性原理解释。在这里，我们使用动态平均场理论和随机神经网络模型推导了一个分析框架，表明一个单一的结构统计量——耦合相关性，即大脑区域输入连接模式的相似性——线性地和因果性地决定了相关神经动力学的幅度。我们进一步表明，生物结构连接中的长尾特征值谱对于维持跨物种观察到的强、尺寸不变的功能相关性是必要的。在人类、小鼠和果蝇中使用多种成像和连接组模式进行了验证，这一原理可能提供结构连接组学与涌现的大脑动力学之间的定量桥梁，其意义可扩展到广泛类别的复杂网络系统。

## Abstract
A central question in neuroscience is how the brains structural connectivity gives rise to its emergent, correlated dynamics. These large-scale dynamical correlations underlie functional networks that support cognitive functions. Here, we identify coupling correlation--the similarity between the input connectivity profiles of brain regions--as a key structural determinant of macroscopic neural dynamical correlation. Using dynamical mean-field theory (DMFT) and numerical simulations of random neural network models, we demonstrate that coupling correlation quantitatively governs dynamical correlation. The functional form of this structure-function mapping is dictated by the eigenvalue spectrum of the coupling correlation matrix: networks with bulk eigenspectra exhibit an exact linear relationship, whereas biologically plausible long-tailed spectra yield an approximately linear mapping except when the magnitude of coupling correlation approaches unity. Particularly, a long-tailed spectrum is necessary to reproduce the appropriate magnitude and size-invariance of coupling correlations observed in empirical data, thereby sustaining non-vanishing dynamical correlations that may support brain function in large systems. The theoretical prediction of approximate linearity is consistently validated using empirical datasets that include both structural coupling and neural dynamics in humans, mice, and Drosophila. Together, these results provide a mechanistic and quantitative framework linking macroscopic brain network structure to emergent neural dynamics--an essential step toward a theory of structure-function relationship in the brain.

Significance StatementHow the brains wiring gives rise to its coordinated activity is a fundamental unsolved problem in neuroscience. Prior work has identified correlations between structural and functional connectivity, but these relationships lacked a mechanistic, first-principles explanation. Here, we derive an analytical framework using Dynamical Mean-Field Theory and random neural network models to show that a single structural statistic--coupling correlation, the similarity between the input connectivity profiles of brain regions--linearly and causally determines the magnitude of correlated neural dynamics. We further show that a long-tailed eigenvalue spectrum in biological structural connectivity is necessary to sustain the strong, size-invariant functional correlations observed across species. Validated in humans, mice, and Drosophila using multiple imaging and connectome modalities, this principle may provide a quantitative bridge between structural connectomics and emergent brain dynamics, with implications extending to a broad class of complex networked systems.