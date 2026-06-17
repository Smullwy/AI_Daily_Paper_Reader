---
title: Equivariant neuronal populations enable simultaneous tuning and invariance
title_zh: 等变神经元群体实现同时调谐与不变性
authors: "Hoeller, J., Zhong, L., Heinrich, L., Saalfeld, S., Pachitariu, M., Romani, S."
date: 2026-06-15
pdf: "https://www.biorxiv.org/content/10.1101/2024.08.02.606398v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 等变神经元种群实现多视图结构约束
tldr: "大脑如何编码场景身份不变于视角变化，同时又对视角变换敏感？本研究提出等变性框架，将神经元群体响应分解为调谐和不变正交子空间。通过小鼠视觉皮层大规模记录，发现高级区域（LM, AL）的等变结构比初级区域更显著，同时增强了群体调谐与不变性。而人工神经网络后期层则以牺牲调谐换取不变性。结果表明等变性是神经元群体实现灵活计算的关键原则。"
source: biorxiv
selection_source: fresh_fetch
motivation: 大脑如何同时实现视觉场景的身份不变性和视角变换敏感性。
method: 提出等变框架，将群体响应分解为调谐和不变性子空间，并分析小鼠视觉皮层记录和人工神经网络。
result: 小鼠高级视觉皮层等变结构显著，同时提升调谐与不变性；人工神经网络后期层则牺牲调谐换取不变性。
conclusion: 等变性是神经元群体灵活计算的通用原则。
---

## 摘要
当我们在世界中移动时，我们从不同视角看到相同的视觉场景。但大脑如何编码不受视角影响的场景身份，同时又对这些变换保持敏感？我们提出了一种通过等变性实现的解决方案，其中视角变换会在神经元群体反应中引起结构化的变化。该框架意味着群体反应可以分解为相互正交的子空间，分别负责调谐与不变性。通过在大鼠四个视觉皮层区域的大规模神经元记录来测试我们的框架，我们发现等变结构在一些高级区域（LM、AL）中比其他区域（V1、RL）更为显著。这种等变结构解释了观察到的群体调谐与不变性同时增强的现象。相比之下，在图像分类上训练的人工神经网络的早期层表现出类似的结构，但后期层以牺牲调谐为代价增加了不变性。这些结果表明等变性是利用神经元群体实现灵活计算的一个原理。

## Abstract
As we move through the world, we see the same visual scene from different perspectives. But how does the brain encode scene identity invariant to perspective, while remaining sensitive to these transformations? We propose a solution through equivariance, where perspective transformations induce structured changes in neuronal population responses. This framework implies a decomposition of population responses into orthogonal subspaces that are tuned and invariant. Testing our framework with large-scale neuronal recordings across four mouse visual cortical areas, we find that the equivariant structure is more pronounced in some higher-order areas (LM, AL) than in other areas (V1, RL). This equivariant structure accounts for the observed simultaneous increase in both population tuning and invariance. In comparison, early layers of an artificial neural network trained on image classification show similar structure, but later layers increase invariance at the cost of tuning. These results suggest equivariance is a principle to achieve flexible computations with neuronal populations.