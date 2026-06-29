---
title: "Systematic comparison of color representations between humans and deep neural networks: towards predicting human color perception in a vast color space"
title_zh: 人类与深度神经网络颜色表征的系统比较：面向广阔色彩空间中人类颜色感知的预测
authors: "Wickramanayaka, N. R., Oizumi, M."
date: 2026-06-29
pdf: "https://www.biorxiv.org/content/10.64898/2025.12.10.693611v4.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 比较DNN与人类颜色表征的对齐程度
tldr: 本研究系统比较了自监督学习、监督学习和CLIP三种范式下深度神经网络的颜色表征与人类感知的一致性。通过Gromov-Wasserstein最优传输方法，将网络嵌入与人类对93种颜色的相似性判断进行对齐，发现仅CLIP在输出层能维持与人高度对齐的全局结构。进一步将模型扩展至4096种颜色，预测了大规模颜色表征的可能结构，为未来心理物理实验提供了新方向。
source: biorxiv
selection_source: fresh_fetch
motivation: 由于传统心理物理学实验耗时巨大，难以探索大规模颜色感知的完整结构，故需探究何种学习范式能使深度神经网络产生与人类感知几何对齐的颜色表征。
method: 采用Gromov-Wasserstein最优传输这一无监督方法，量化比较不同深度神经网络层嵌入与人类对93种颜色相似性判断的结构对齐程度。
result: 自监督和监督学习仅在早期层与人类数据微弱对齐，而CLIP在输出层仍保持强对齐；在4096种颜色的扩展分析中，早期层和CLIP输出呈现各自稳定的预测结构。
conclusion: CLIP范式获取的颜色表征在全局结构上与人类感知最一致，且验证后的模型能够预测更大颜色空间中的人类感知结构，为拓展感知研究边界提供了可行路径。
---

## 摘要
大规模人类颜色感知的表征结构仍未完全明了。虽然经典研究测量了大量颜色对，但这些测量仅比较了相似颜色，且由于心理物理实验的时间成本，探索数千种颜色之间的全局关系一直不可行。鉴于这些限制，深度神经网络(DNNs)作为一种有前景的工具受到关注，可用于在心理物理实验范围之外提供人类感知的替代或预测。然而，目前尚不清楚哪些DNNs具有与人类颜色感知几何对齐的嵌入，也不清楚哪种学习范式能使DNNs获得与人类一致的颜色表征。在此，我们系统性地探究了何种学习范式能使DNNs产生在结构上与人类一致的颜色表征，重点关注三种类型：仅使用图像训练的自监督学习(SSL)、使用带有类别标签的图像训练的监督学习(SL)，以及使用图文对训练的对比语言-图像预训练(CLIP)。我们采用严谨的无监督方法——格罗莫夫-瓦瑟斯坦最优传输(GWOT)，将DNNs的嵌入与93种颜色的人类相似性判断进行比较。结果表明，虽然每种学习范式在早期层中均获得了与人类数据在精细项目级别高度对齐的颜色表征，但只有CLIP在输出层保持了这种表征。此外，利用DNNs的关键优势，我们研究了4096种颜色的表征结构，发现每种学习范式的早期层和CLIP的输出层一致地收敛于其自身特有的结构。这些结构为大规模人类颜色表征提供了合理的预测。我们的工作展示了一种方法，通过在有限经验空间中验证过的计算模型来探索人类感知的未知领域，并为未来的大规模心理物理实验提供了预测。

## Abstract
The representational structure of large-scale human color perception remains incompletely understood. While classical studies measured numerous color pairs, these measurements compared only similar colors, and exploring the global relationships among thousands of colors has been infeasible due to the time costs of psychophysical experiments. Given these constraints, deep neural networks (DNNs) have attracted attention as a promising tool for providing proxies or predictions of human perception beyond the scope of psychophysical experiments. However, it remains unclear which DNNs possess embeddings that geometrically align with human color perception. Furthermore, it is unclear which learning paradigm enables DNNs to acquire a color representation that aligns with that of humans. Here, we systematically investigate which learning paradigm enables DNNs to produce a color representation that is structurally congruent with that of humans, with a focus on three types: self-supervised learning (SSL) that trains on images alone, supervised learning (SL) that trains on images with category labels, and contrastive language-image pre-training (CLIP) that trains on image-text pairs. We compared the embeddings of DNNs with the human similarity judgments of 93 colors using a rigorous unsupervised method termed Gromov-Wasserstein Optimal Transport (GWOT). Our results show that , while each learning paradigm acquires color representations that strongly align with human data at the fine-item level in early layers, only CLIP sustains such a representation at the output. Furthermore, when we leveraged a key advantage of DNNs and investigated the representational structure of 4096 colors, the early layers of each learning paradigm and the output of CLIP consistently converged on their own characteristic structures. These structures present plausible predictions for the large-scale human color representation. Our work demonstrates an approach for exploring unknown territories of human perception through the use of computational models validated in a limited empirical space, and provides predictions for future large-scale psychophysical experiments.