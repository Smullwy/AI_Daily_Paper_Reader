---
title: Cross-domain encoding models reveal shared and domain-specific neural representations across language and mathematics
title_zh: 跨领域编码模型揭示语言与数学之间共享及领域特定的神经表征
authors: "Nakai, T., Kubo, T., Nishimoto, S."
date: 2026-06-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.07.730750v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 使用LLM特征的fMRI跨域编码模型
tldr: 该研究探讨语言与数学是否共享神经表征，利用大语言模型和顶点编码模型分析32名被试在句子理解和计算任务中的fMRI数据。通过跨领域预测，发现左脑55b区存在部分共享表征，而语言特异区（左前颞上回、角回）和数学特异区（左中央前回、顶内沟）分别呈现更强的领域特异性。模型权重和连接分析进一步揭示了共享与特异表征的神经基础，调和了以往对立的观点。
source: biorxiv
selection_source: fresh_fetch
motivation: 解决认知神经科学中语言与数学是共享还是独立神经表征的争议。
method: 结合大语言模型潜在特征与顶点编码模型，在被试执行句子理解和计算任务时进行fMRI扫描，实施跨领域预测和连接分析。
result: 发现左脑55b等区域存在跨领域共享表征，但语言和数学各有特异脑区，且功能连接呈现任务依赖模式。
conclusion: 语言与数学依赖部分共享的神经表征，同时存在领域特异皮层组织，为调和领域争议提供了证据。
---

## 摘要
语言和数学是否依赖共享还是不同的神经表征，仍是认知神经科学中一个悬而未决的问题。在此，我们将大型语言模型（LLM）的潜在特征与基于顶点的编码模型相结合，以考察语言和数学之间的跨领域泛化。32名参与者在fMRI扫描中执行句子理解和计算任务，并使用嵌入在共同潜在空间中的特征训练编码模型。跨领域预测识别出与部分共享表征相关的皮层区域，最显著的是左侧55b区，而控制分析表明这些效应不能完全由低层视觉处理或简单任务一般因素所解释。任务特异性对比显示，左侧颞上回前部和角回与语言相关的预测更强，而左侧中央前回和顶内沟与数学相关的预测更强。模型权重分析进一步表明，共享和领域特定的预测模式反映在不同皮层区域的独特权重分布中。连接性分析显示，跨领域区域与语言或数学相关网络之间存在任务依赖的功能耦合。综合这些发现，表明语言和数学涉及部分共享的神经表征以及领域特定的皮层组织，有助于调和先前关于其神经基础的对立观点。

## Abstract
Whether language and mathematics rely on shared or distinct neural representations remains an unresolved question in cognitive neuroscience. Here we combine latent features from a large language model (LLM) with vertex-wise encoding models to examine cross-domain generalization between language and mathematics. Thirty-two participants performed sentence comprehension and calculation tasks during fMRI, and encoding models were trained using features embedded in a common latent space. Cross-domain prediction identified cortical regions associated with partially shared representations, most prominently the left 55b, while control analyses suggested that these effects could not be fully explained by low-level visual processing or simple task-general factors. Task-specificity contrasts revealed stronger language-related prediction in the left anterior superior temporal and angular gyri and math-related prediction in the left precentral and intraparietal sulci. Model-weight analyses further showed that shared and domain-specific prediction patterns were reflected in distinct weight profiles across cortical regions. Connectivity analyses showed task-dependent functional coupling between cross-domain regions and language- or math-related networks. Together, these findings suggest that language and mathematics involve partially shared neural representations alongside domain-specific cortical organization, helping reconcile previous contrasting views on their neural basis.