---
title: A cortical gradient of distance to criticality governs large-scale resting-state fMRI dynamics
title_zh: 距离临界性的皮层梯度驱动大尺度静息态fMRI动力学
authors: "Yellin, D., Simony, E., Malach, R., Shriki, O."
date: 2026-05-22
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.21.726898v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 跨被试fMRI临界距离梯度
tldr: 本研究解决大脑皮层均匀结构如何产生多样化时空活动的难题，通过分析静息态fMRI和简单循环网络模型，发现皮层区域距离临界性的梯度（DTC）跨个体稳定且能解释360个区域的功率谱和功能连接，表明接近临界性的循环网络是统一生成皮层多样动力学的基础机制。
source: biorxiv
selection_source: fresh_fetch
motivation: 大脑皮层具有基本统一的连接架构，为何能产生丰富多样的时空活动模式。
method: 利用大规模静息态fMRI BOLD信号，结合随机连接的稀疏循环神经网络模型进行拟合分析。
result: 皮层DTC梯度在个体间高度保守，且单一参数模型可重现所有区域低频功率谱和功能连接分布。
conclusion: 距离临界性（DTC）是驱动皮层动力学多样性和一致性的核心生成原理。
---

## 摘要
皮层研究中的一个长期难题是：大脑皮层具有大致均匀的互连结构，为何却能产生如此多样且高度结构化的时空活动。在此，我们提出局部皮层网络的距离临界性（DTC）为这一难题提供了一个统一原则。通过分析静息态fMRI BOLD信号，并利用随机连接循环单元的简单网络模型，我们展示了DTC能够稳健地解释整个360个皮层区域的关键动力学特征，特别是局部功率谱和功能连接。我们的分析显示，DTC值的排序分布在个体间高度保守。此外，对皮层慢动力学的实证分析及其拟合的网络仿真表明，在皮层层次结构中存在类似的幂律关系。这些结果表明，在临界性附近运作的循环神经元网络可以产生极其丰富的动力学库，符合实验观测到的整个皮层动力学范围。我们的发现强调了DTC作为驱动多样皮层动力学谱系的一个强大且基本的生成器的重要性。

亮点O_LI人类皮层中的自发（静息态）活动被证明是沿着距离临界性（DTC）的一个保守空间梯度组织的，各区域沿此轴呈现出稳定的跨个体秩序。
C_LIO_LI基于DTC的单参数仿真模型能够拟合多被试fMRI数据的区域功率谱和功能连接。
C_LIO_LI使用一个简单的稀疏循环神经网络模型，可以实现对皮层区域DTC的定量估计。
C_LIO_LI该模型拟合了低频波动的功率谱和功能连接的分布。
C_LIO_LI功率谱的形状坍缩分析揭示了静息态皮层的一个普适特征，仅取决于DTC。
C_LI

## Abstract
A longstanding puzzle in cortical research is how the cerebral cortex, having largely uniform interconnected architecture, gives rise to such diverse yet highly structured spatiotemporal activity. Here, we propose that local cortical networks distance from criticality (DTC) provides a unifying principle related to this conundrum. Analyzing resting-state fMRI BOLD signals and leveraging simple network models of randomly connected recurrent units, we show that DTC robustly explains key dynamical features, in particular, local power spectra and functional connectivity, across the full set of 360 cortical areas. Our analysis shows that a rank-order distribution of DTC values is highly conserved across subjects. Moreover, the empirical analysis of cortical slow dynamics and its fitted network simulations demonstrate similar power-laws across hierarchies of the cortical sheet. These results suggest that recurrent neuronal networks, operating close to criticality, can generate a remarkably rich dynamical repertoire which fit the entire range of experimentally observed cortical dynamics. Our findings underscore the importance of DTC as a powerful, fundamental generator underlying the spectrum of diverse cortical dynamics.

HighlightsO_LISpontaneous (resting-state) activity in the human cortex is shown to be organized along a conserved spatial gradient of distance from criticality (DTC), with regions exhibiting a stable cross-individual rank order along this axis.
C_LIO_LIMulti-subject fMRI data of regional power spectra and functional connectivity can be fitted with a single parameter simulation model based on DTC.
C_LIO_LIQuantitative estimation of the DTC across cortical regions can be achieved using a simple sparse recurrent neural network model.
C_LIO_LIThe model fits the power spectra of low frequency fluctuations and the distribution of functional connectivity.
C_LIO_LIShape collapse analysis of the power spectrum demonstrates a universal profile across the resting cortex depending only on the DTC.
C_LI