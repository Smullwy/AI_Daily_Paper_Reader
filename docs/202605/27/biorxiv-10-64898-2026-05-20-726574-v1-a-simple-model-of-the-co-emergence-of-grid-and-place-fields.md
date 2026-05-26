---
title: A simple model of the co-emergence of grid and place fields
title_zh: 一种网格场和位置场共同涌现的简单模型
authors: "Wang, Z., Morris, G., Derdikman, D., Chaudhari, P., Balasubramanian, V."
date: 2026-05-22
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.20.726574v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 统一循环模型实现网格细胞和位置细胞的共同涌现作为群体神经先验
tldr: 针对网格细胞与位置细胞协同涌现的鸡与蛋问题，本研究提出一个遵循戴尔定律的递归网络模型，通过从掩蔽的感觉输入和自我运动信息预测下一感觉状态的单一目标进行训练，首次无需监督或预存表征地实现了两类空间细胞的共现。在1000种配置下稳定共存，比例由感觉噪声和掩蔽程度决定，并能不重训练地复现网格碎片化、合并、对齐等实验现象及发育顺序，揭示了纠错与状态预测两种编码压力的互补作用。
source: biorxiv
selection_source: fresh_fetch
motivation: 克服现有模型单独派生一类或依赖预存表征的局限，解决网格与位置细胞如何相互协同涌现的难题。
method: 构建包含兴奋和抑制性神经元的递归网络，通过预测掩蔽感觉观测的下一个状态进行自监督训练。
result: 网络在无监督下共现网格和位置细胞，其平衡受感觉噪声和掩蔽调节，并能复现多种实验现象和发育顺序。
conclusion: 单一感觉预测目标通过纠错和预测两种压力足以共同产生网格和位置细胞，为空间编码提供回路机制和可测试预测。
---

## 摘要
内侧内嗅皮层中的网格细胞和海马体中的位置细胞共同支持空间导航。这两个区域相互连接，并且存在一个“先有鸡还是先有蛋”的问题：它们如何在发育过程中产生并相互强化。现有的计算模型要么从一种类型推导出另一种，要么使用网络动力学来孤立地模拟一种类型的涌现。我们提出了一个统一的循环网络模型，该模型实例化了戴尔定律（每个神经元要么是兴奋性的，要么是抑制性的），并通过训练来从被掩蔽的先前感觉观察和自我中心运动预测下一个感觉观察。据我们所知，这是第一个单目标模型，其中网格细胞和位置细胞在没有任何类型监督或依赖预先存在的空间细胞表征的情况下共同涌现。这两种空间编码在1000种不同的训练配置中共存，其平衡由感觉噪声和掩蔽的量决定。无需重新训练，网络定性地再现了实验观察到的发夹迷宫中的网格碎片化、墙壁移除后的网格合并、连通房间之间的晶格对齐、自由飞行蝙蝠中观察到的局部有序三维场，以及位置细胞先于网格细胞的发育顺序。我们从单一感觉预测目标内的两种互补编码压力来解释这些结果：（1）纠正错误或重建感觉观察的缺失成分，以及（2）在导航过程中预测下一个感觉状态。我们的结果提供了网格细胞和位置细胞共同涌现的回路层面解释，并对两种空间编码提出了可实验检验的预测。

## Abstract
Grid cells in the medial entorhinal cortex and place cells in the hippocampus together support spatial navigation. The two regions are reciprocally connected, and there is a chicken-and-egg problem for how both arise and reinforce each other during development. Current computational accounts either derive one type from the other or use network dynamics to model the emergence of one type in isolation. We introduce a unified recurrent network model that instantiates Dale's Law (every neuron is either excitatory or inhibitory), and is trained to predict the next sensory observation from masked previous sensory observations and egocentric motion. To our knowledge, this is the first single-objective model in which grid and place cells co-emerge without supervision of either type, or reliance on pre-existing spatial-cell representations. The two kinds of spatial codes coexist across 1,000 different training configurations, with their balance set by the amount of sensory noise and masking. Without retraining, the network qualitatively reproduces experimentally observed grid fragmentation in hairpin mazes, grid merging after wall removal, lattice alignment across connected rooms, locally ordered 3D fields observed in freely flying bats, as well as the developmental order in which place cells precede grid cells. We interpret these results in terms of two complementary encoding pressures within a single sensory-prediction objective: (1) correcting errors or reconstructing missing components of sensory observations, and (2) prediction of the next sensory state during navigation. Our results suggest a circuit-level account of the co-emergence of grid and place cells, and experimentally testable predictions for the two kinds of spatial codes.