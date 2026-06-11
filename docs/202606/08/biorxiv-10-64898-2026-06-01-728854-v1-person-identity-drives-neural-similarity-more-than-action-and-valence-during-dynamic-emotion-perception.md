---
title: Person identity drives neural similarity more than action and valence during dynamic emotion perception
title_zh: 动态情绪感知中，人物身份比动作和效价更能驱动神经相似性
authors: "Okeke, D. E., Chavez, R. S."
date: 2026-06-04
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.01.728854v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 使用表征相似性分析研究动态情绪感知的fMRI跨被试研究
tldr: 面部感知是社交互动的核心，传统fMRI研究多采用静态图片分析情绪类别响应幅度，但动态表情的神经表征机制尚不清晰。本研究使用动态面部表情视频和表征相似性分析，比较身份、动作和效价三个模型对神经相似性的预测能力。结果发现，人物身份比动作或效价更能预测大脑皮层广泛区域的响应相似性，尤其在默认模式网络和视觉区域，表明身份是动态面部编码的重要驱动因素。
source: biorxiv
selection_source: fresh_fetch
motivation: 探索在动态情绪感知中，人物身份、表情动作和情绪效价哪个因素对神经表征相似性影响更大。
method: 采用14位演员的动态面部表情短视频，通过多层级建模和表征相似性分析，逐试次比较三种竞争模型。
result: 人物身份比动作和效价更能预测大脑反应相似性，尤其体现在默认模式网络和低级视觉区域。
conclusion: 在动态面部表情处理中，刺激的人物身份是驱动神经响应相似性的主导因素。
---

## 摘要
面部感知是日常社交活动的核心特征，也是情绪信息的丰富来源。经典的功能性磁共振成像（fMRI）研究使用静态照片的情绪表达，以识别在不同情绪类别之间反应幅度存在单变量差异的大脑区域。然而，关于大脑如何表征动态情绪面孔表达以及驱动这些表征之间相似性的因素的研究工作要少得多。在当前研究中，我们结合了动态面部表情刺激和表征相似性分析，来比较三种关于每个呈现刺激相似性的竞争假设模型：所做的动作、表达的效价以及被感知者的身份。参与者观看了十四名志愿演员朝向或远离摄像机做出积极或消极面部表情的短视频。使用完整的多层建模方法，逐试次地将激活模式与竞争模型进行比较。结果显示，在广泛分布的大脑系统中，尤其是默认模式网络和低级视觉处理区域，视频中人物的身份比动作或效价更能预测大脑反应的相似性。这表明，在动态面部处理过程中，被感知刺激的特定身份是感知编码期间神经反应相似性的核心驱动因素。

## Abstract
Facial perception is a central feature of everyday social encounters and a rich source of emotional information. Classic functional magnetic resonance imaging (fMRI) studies of emotional facial processing used static photos emotional expression to identify regions of the brain showing univariate differences in response magnitudes between different emotional categories. However, there has been much less work identifying how the brain represents dynamic emotional facial expression and the factors that drive the similarity among these representations. In the current study, incorporated dynamic facial expression stimuli and representational similarity analysis to compare three competing hypothesized models of similarity of each of the stimuli presented: action being made, valence of the expression, and the identity of the person being perceived. Participants were shown short videos of fourteen volunteer actors making positive or negative facial expressions directed either toward or away from the camera. Activation patterns were compared against competing models on a trial-by-trial basis using a full multilevel modeling approach. Results showed that the identity of the person in the video was a greater predictor of brain responses similarity than the action or valence across widely distributed brain systems, particularly in the default mode network and lower-level visual processing regions. This suggests that the specific identity of the stimulus being perceived is a central driver of neural response similarity during perceptual encoding in dynamic facial processing.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：强相关。该论文直接探讨动态情绪知觉的 fMRI 表征结构，属于“fMRI representation”和“brain encoding”核心议题，与脑解码、神经先验及多视角约束密切相关。
- **启发与意义**：发现身份是神经相似性的主导因素，提示脑解码和编码模型需审慎对待刺激身份等非任务维度，避免将其视为噪声而丢失关键的表征结构。
- **可借鉴点**：竞争性多模型 RSA 与动态视频刺激结合的设计，可迁移至其他复杂社会认知研究，有效分离不同潜在表征维度对大脑响应的贡献。
- **阅读建议**：适合从事表征相似性分析、脑解码和多模态对齐的研究者详读，着重关注其多层建模的全脑推断逻辑及对身份表征的深度解读。

## 1. 核心问题与整体含义
动态面部表情是社交和情绪感知的核心，但传统研究多用静态图片分析不同情绪类别的局部激活幅度差异。关于动态表情的神经表征结构、以及驱动这些表征相似性的关键因素，目前认知尚不清晰。  
本研究直接对比三种竞争假说——人物身份、表情动作、情绪效价——在神经响应相似性上的相对预测力，旨在揭示动态面部处理过程中，究竟是何种刺激属性主导了大脑跨试次的表征组织。整体含义在于：将表征相似性分析（RSA）应用于动态刺激，从“类别响应幅度”范式转向“多模型表征竞争”范式，重新审视社会知觉编码的底层驱动因素。

## 2. 方法论概述
- **核心思想**：采用表征相似性分析（RSA）比较每个刺激的神经响应模式与基于不同理论假设构建的模型表征不相似性矩阵（RDM），通过逐试次多层建模评估模型的解释力。
- **关键技术细节**：
  - 刺激建模：为每位演员的每段视频构建三种先验模型——身份模型（同一人物视为相似）、动作模型（朝向/远离摄像机）、效价模型（积极/消极）。
  - 神经 RDM：对每个试次的 fMRI 激活模式计算成对不相似性，生成全脑或 ROI 水平的神经表征结构。
  - 模型比较：使用多层模型（完整多层次方法）将三种竞争模型的 RDM 与神经 RDM 进行拟合，统计对比各自的预测系数，控制刺激和试次间的随机效应。
- **无单独复杂公式**，其核心逻辑可表述为：将神经不相似性 $D_{neural}$ 回归到由距离 $d_{identity}, d_{action}, d_{valence}$ 组成的混合模型中，通过似然比或信息准则判定各预测子的贡献。

## 3. 实验设计
- **数据集/场景**：14 名志愿演员表演的动态面部表情短视频，表情包括积极/消极效价，动作有朝向/远离摄像机。参与者（fMRI 被试）在扫描中观看这些视频。
- **Benchmark 与对比方法**：研究不是在不同算法间做基准测试，而是比较三种心理学/认知先验模型（身份、动作、效价）。三个模型互为对比，无外部计算模型或解码器。
- **数据采集**：采用功能性磁共振成像，记录全脑 BOLD 信号，基于试次进行单变量激活估计，再进入 RSA 流程。

## 4. 资源与算力
文中未提及 GPU 型号、数量及训练时长。由于该研究为常规 fMRI 分析，不涉及深度学习模型训练，主要算力消耗在标准统计建模和全脑 RSA 上，通常可在普通 CPU 工作站完成。无相关算力资源的明确报告。

## 5. 实验数量与充分性
- **实验数量**：仅报告了一个核心的 fMRI 实验，包含三种条件的因子设计。无多数据集交叉验证、无独立的复现实验或消融实验（如移除某脑网络后的模型比较）。
- **充分性与公平性**：从摘要看，通过全脑搜索和网络特异性（默认模式网络、视觉区域）分析提供了较全面的证据。模型比较使用多层建模控制层次结构，较为统计严格。但缺乏与静态表情的对比、包含更多身份/动作类别的泛化测试，以及跨刺激集的验证，实验广度和稳健性证据有限。

## 6. 主要结论与发现
- 在广泛分布的大脑系统中，特别是默认模式网络和低级视觉加工区，**人物身份**比动作方向或情绪效价更能预测大脑反应的相似性。
- 表明动态面部知觉编码中，刺激的具体身份是驱动神经表征相似性的核心因素，而非通常假定的情绪类别或运动信息。
- 研究将社会认知中的身份加工提升到比情绪表达处理更基础的地位，暗示面孔知觉的核心维度可能侧重“谁”而非“什么情绪”。

## 7. 优点
- **动态自然刺激**：采用视频而非静态图片，提高了生态效度，更贴合真实社交知觉。
- **竞争性多模型 RSA**：直接比较三种理论驱动的表征假设，能分离不同信息维度的独特贡献。
- **全脑多层推断**：使用完整多层建模逐试次分析，避免信息损失，统计效力较高。
- **反直觉发现**：结果挑战了情绪领域以类别为中心的传统，将身份因素推向表征核心，具有理论创新价值。

## 8. 不足与局限
- **刺激集规模有限**：仅 14 名演员，可能限制身份泛化性；动作和效价也仅二元水平，维度过于简单。
- **缺乏静态对照**：未与静态面孔处理对比，无法确定“身份优势”是否为动态刺激特有。
- **组水平推论未提及个体差异**：可能未探讨身份加工的个体差异或与被试自身社会认知特质的关系。
- **未控制底层视觉特征**：身份可能在低级视觉属性上与其他条件混淆，未明确显示已排除低层视觉相似性的替代解释。
- **应用限制**：结论局限于人工表演的动态表情，是否能推广到自然社交互动中的自发表情尚待验证。

（完）
