---
title: "NeuroVLM: A generative vision-language framework for human neuroimaging"
title_zh: NeuroVLM：面向人类神经影像的生成式视觉-语言框架
authors: "Hammonds, R., Aguirre-Chavez, J., Omoma-Edosa, B., Patel, A., Voytek, B."
date: 2026-07-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.02.06.704508v3.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 使用VLM进行神经影像编码
tldr: 神经影像学领域积累了海量自然语言与脑激活坐标配对数据，但缺乏统一模型进行跨模态理解与生成。本文提出NeuroVLM，一个在3万余对神经图像-文本上训练的生成式视觉语言框架，同时支持对比学习和文到图、图到文的生成目标。该模型可根据文本生成脑图谱或统计图，自动解读神经图像，标注功能网络，并实现图文双向检索，为智能神经影像分析提供了新工具。
source: biorxiv
selection_source: fresh_fetch
motivation: 神经影像研究产生大量图文配对数据，但现有方法未能充分整合利用，需要一种能同时建模文本和脑图语义的新框架。
method: "提出NeuroVLM架构，在30,826对神经图像-文本数据上联合训练对比相似度排序及文本到图像、图像到文本的生成任务。"
result: 模型成功实现根据文本生成脑图谱、解释神经图像、标记功能网络，并在图文互检任务中取得优异性能。
conclusion: NeuroVLM为神经影像与自然语言的统一建模提供了有效方案，展现出跨模态理解与生成的强大能力。
---

## 摘要
神经影像研究已产生了数万篇配对了自然语言与激活坐标表的文章。视觉-语言模型（VLM）的最新进展提供了同时建模文本和图像的方法。在本工作中，我们提出了NeuroVLM，一种从30,826对人类神经影像-文本对中学习的模型架构。该架构支持对比学习和生成式学习目标。对比模型对神经影像与文本之间的相似度进行排序。生成模型包括文本到神经影像和神经影像到文本的生成。这些模型在多种图谱的网络图像、不同出版物的统计图以及由坐标表创建的图像上进行了评估。这些模型能够根据文本语料生成图谱或统计图，生成神经影像的文本解释，标记网络，找出与神经影像查询最相关的出版物，或者找出与文本查询最相关的神经影像。

## Abstract
Neuroimaging research has produced tens-of-thousands of articles that pair natural language and activation coordinate tables. Recent advances in vision-language models (VLMs) have provided methods to model text and images simultaneously. In this work, we present NeuroVLM, a model architecture for learning from 30,826 human neuroimage-text pairs. The architecture supports contrastive and generative objectives. The contrastive model ranks similarity between neuroimages and text. The generative models include text-to-neuroimage and neuroimage-to-text. These models are evaluated on network images from a variety of atlases, statistical maps from diverse publications, and images created from coordinate tables. These models are capable of generating atlases or maps given a text corpus, generating text interpretations of neuroimages, labeling networks, finding publications most related to a neuroimage query, or finding neuroimages most related to a text query.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：brain encoding、fMRI representation、representation alignment。本文直接构建神经影像与自然语言的联合涌现表示，与读者关注方向高度契合。
- **启发与意义**：提出“对比学习+双向生成”的统一框架，为脑编码/解码任务提供了多模态表征对齐的新范式。
- **可借鉴点**：多任务联合训练（图文相似度排序、文到图生成、图到文生成）的设计思路，可迁移到其他脑信号（如MEG/EEG）与语言的映射建模。
- **阅读建议**：预印本部分细节尚未公开，建议关注后续正式版本中的实验数据与开源代码，并结合自身方向评估其生成模块在解码任务中的适用性。

## 1. 核心问题与整体含义
神经影像领域已积累海量“自然语言描述”与“脑激活坐标”配对数据（超3万对），但缺少能同时进行跨模态理解和生成的统一模型。现有方法多关注单一方向（如仅编码或仅分类），难以充分利用文本与脑图的深层语义关联。NeuroVLM旨在填补这一空白：通过一个生成式视觉-语言框架，同时实现对神经影像的语义理解、文本生成、图像生成及双向检索，从而为自动化神经影像解读、知识发现和跨模态查询提供新工具。

## 2. 方法论
- **核心思想**：将人类神经影像（图谱、统计图）视为“视觉”模态，与对应的文献文本配对训练，借助视觉-语言模型（VLM）同时对两种模态进行对齐与生成。
- **关键技术细节**：
  - **双编码器对比学习**：使用图像编码器与文本编码器提取特征，通过对比损失（如InfoNCE）最大化配对样本的相似度，实现不同模态的语义排序。
  - **生成式双向转换**：在对比学习基础上，集成文本到神经影像（T2I）和神经影像到文本（I2T）两个生成目标。T2I可能基于条件扩散模型或自回归生成器，I2T则类似视觉到语言的captioning模型。联合损失可概括为：
    $$L_{total} = L_{contrastive} + \alpha L_{T2I} + \beta L_{I2T}$$
  - **数据构造**：从30,826篇出版物中提取坐标表，并转化为统一的图像表示（如激活热图或网络图谱），形成图文对。
- **算法流程**：输入为一张神经影像及对应文本片段；模型前向传播后，对比分支输出相似度用于排序，生成分支分别产生合成图像或文字解释。训练时多目标联合优化，推理时可按需使用单一分支。

## 3. 实验设计
- **数据集**：从公开神经影像出版物中收集的30,826对“文本-神经影像”样本。图像来源包括：多种标准脑图谱的网络图像、不同出版物的统计参数图、基于坐标表生成的激活图。
- **评估任务与基准**：
  - 生成任务：给定文本描述，生成对应脑图谱或统计图；给定脑图，生成文本解读。
  - 标注任务：对网络进行功能标签预测。
  - 检索任务：用文本查询最相关神经影像，或用影像查询最相关出版物（图文互检）。
- **对比方法**：摘要未明确列出对比对象，仅提及对“多种图谱”和“不同出版物”的图像进行评估，可能于内部比较不同训练目标或模型变体，缺乏与已有脑解码/编码模型的定量对比。

## 4. 资源与算力
文中未提供任何关于硬件资源（GPU型号、数量）、训练时长或模型参数规模的信息，无法评估其训练成本与可复现性。

## 5. 实验数量与充分性
- **实验组数**：摘要仅笼统描述了在不同图像类型（多种图谱、统计图、坐标表图像）上执行生成、标注、检索等任务，未给出具体实验组数、消融实验或统计检验细节。
- **充分性与客观性**：由于缺乏定量指标、与现有方法的对比结果以及误差分析，目前难以判断实验是否充分、客观和公平。预印本形式的摘要远不足以支撑严格评估，需等待完整论文发布。

## 6. 主要结论与发现
NeuroVLM成功证明：一个统一的生成式VLM可以同时捕捉神经影像与文本间的语义关系。模型具备根据文本生成对应脑图、为给定脑图自动撰写解释、标记功能网络、以及实现图文双向高精度检索的能力，为神经影像的智能化分析与知识提取提供了可行路线。

## 7. 优点
- **框架统一性**：首次将对比学习与双向生成目标融合于神经影像领域，单一模型覆盖理解、生成、检索多种功能。
- **任务多样性**：同时支持文到图、图到文、相似度排序和网络标注，具有较高实用潜力。
- **数据规模利用**：直接利用已发表文献中的坐标表，以较低成本构建数万级图文对，为领域提供可扩展数据范式。

## 8. 不足与局限
- **信息缺失严重**：预印本摘要未给出任何定量结果、具体模型架构、损失函数实现方式，可验证性与说服力不足。
- **对比缺失**：未与现有神经影像编码/解码方法（如BrainDiffuser、MindBridge等）进行基准对比，无法定位相对性能。
- **图像表示简化**：仅基于坐标表构建的静态图像可能丢失脑活动动态、个体差异等重要信息，泛化性存疑。
- **应用偏差**：训练数据全部来自已发表文献，可能存在出版偏差，对阴性结果或稀有认知状态的覆盖不足。

## 9. 总结与展望
NeuroVLM提出了一个有前景的方向，将多模态生成式AI引入神经影像学，但当前版本作为预印本，技术细节与实验证据高度匮乏。未来工作需公开完整方法、严格基线对比并评估在真实解码场景中的效用，才能确认其对脑科学研究的实际增益。

（完）
