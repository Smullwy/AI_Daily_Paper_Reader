---
title: Physiologically Informed PCA-Partial Correlation for highly Collinear Brainstem fMRI Networks
title_zh: 生理学信息增强的主成分分析-偏相关方法：用于高度共线性的脑干功能磁共振成像网络
authors: "Sozzi, S., Callara, A. L., Cauzzo, S., Scilingo, E. P., Binda, P., Vanello, N."
date: 2026-06-11
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.08.730883v1.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 脑干fMRI功能连接方法
tldr: 该研究针对脑干功能连接研究不足及高度共线网络导致标准双变量方法失效的问题，提出一种生理学引导的 PCA-偏相关分析框架。通过将 PCA 应用于脑干协变量，以减轻多重共线性并建模共享调节方差，提升脑干功能连接估计的稳健性和可解释性，获得更稀疏且生理合理的连接组。仿真与真实数据表明，该方法与传统 Pearson 相关互补，可揭示直接与间接效应。
source: biorxiv
selection_source: fresh_fetch
motivation: 脑干功能连接研究面临高度共线网络挑战，标准双变量方法易产生虚假连接，而偏相关又受多重共线性和碰撞偏倚制约。
method: 提出生理学驱动的 PCA-偏相关方法（PCA-ρ_PC），对脑干协变量进行 PCA 降维以减轻多重共线性并估计直接功能连接。
result: 该方法提高了脑干功能连接的稳健性和可解释性，产生比传统正则化方法更稀疏且符合生理预期的连接组，且仿真与真实数据证实其与 Pearson 相关互补。
conclusion: PCA-正则化偏相关为高度共线网络中的直接功能连接估计提供了有效方案，未来可拓展至多元神经影像应用。
---

## 摘要
静态态功能磁共振成像的功能连接方法广泛用于研究皮层组织，但脑干尽管在生理和病理条件下均扮演关键角色，却相对未被充分探索。高度共线性网络中存在紧密互联的节点和广泛的神经调控影响，导致间接或介导性交互作用，这使得直接脑干功能连接的估计颇具挑战。标准双变量方法无法在此类复杂拓扑中恢复真实网络结构，造成假阳性交互。另一方面，偏相关有望估计直接功能连接，但多重共线性问题和碰撞变量引起的虚假相关性限制了其在高维场景中的应用。在此，我们提出一个生理学信息增强的框架，其中为偏相关估计设计的条件策略专为研究脑干及其在网络内以及与全脑区域的直接交互而量身定制。具体而言，我们采用了一种主成分分析正则化的偏相关方法，对脑干协变量进行主成分分析以缓解多重共线性并建模共享的调控方差。我们证明，与传统（正则化）方法相比，主成分分析正则化的偏相关提高了脑干功能连接的稳健性和可解释性，产生更稀疏且在生理上更合理的连接组。模拟和真实功能磁共振成像数据表明，Pearson相关和主成分分析正则化方法可能互为补充，以揭示高度共线性环境中直接与间接效应的模式，为未来广泛的多变量神经影像应用拓展铺平道路。

## Abstract
Functional connectivity (FC) approaches from resting-state fMRI (rs-fMRI) are amply spread to investigate the cortical organization, yet the brainstem remains relatively underexplored despite its pivotal roles in both physiological and pathological conditions. The highly collinear network, in which the strongly interconnected nodes and the widespread neuromodulatory influences induce indirect or mediated interactions, make the estimation of direct brainstem FC challenging. Standard bivariate methods fail to recover the true network structure in such complex topologies, causing false positive interactions. On the other hand, partial correlation can potentially estimate the direct FC, but multicollinearity issues and collider-induced spurious correlations limit its application in high-dimensional scenarios. Here, we propose a physiologically informed framework in which the conditioning strategy for partial correlation estimation is tailored for the investigation of the brainstem and its direct interactions within the network and with whole-brain regions. Specifically, we employed a PCA-regularized partial correlation (PCA-{rho}_PC) approach, where PCA is applied to the brainstem covariates to mitigate multicollinearity and model shared modulatory variance. We show that PCA-{rho}_PC improves the robustness and interpretability of brainstem FC, yielding sparser and more physiologically plausible connectomes compared with conventional (regularized) approaches. Both simulation and real fMRI data raise the possibility that Pearson's and PCA-regularized approaches may complement each other in an effort to unravel the pattern of direct vs. indirect effects in highly collinear settings, paving the way for future extensions in a wide range of multivariate neuroimaging applications.