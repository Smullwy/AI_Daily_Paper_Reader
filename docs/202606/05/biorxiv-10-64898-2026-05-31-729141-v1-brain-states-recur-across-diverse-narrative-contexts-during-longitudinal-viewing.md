---
title: Brain states recur across diverse narrative contexts during longitudinal viewing
title_zh: 在跨时观看中，大脑状态在多种叙事情境下重现
authors: "Chen, Y., Ghavami, M., St-Laurent, M., Bellec, L., Ghosh, S. S."
date: 2026-06-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.31.729141v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 个体间fMRI脑状态在不同叙事语境中的重现
tldr: 该研究对六名被试在观看《老友记》全六季（约54小时）的fMRI数据采用非参数隐马尔可夫模型，发现大脑动态自发组织为约45个反复出现的全脑状态，这些状态构成个体稳定的核心库，但内容会调制状态被访问的时刻；状态复发模式可迁移至其他社会叙事电影，而在非叙事刺激中减弱，揭示了自然体验下大脑动态的个体特异性和内容敏感性。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究在多样化、连续的叙事体验中，大脑反复出现的状态库是个体稳定的属性还是被每次新经历重塑。
method: 使用分层狄利克雷过程隐马尔可夫模型，对个体在长期观看电视剧过程中的fMRI数据进行无监督建模，自动发现反复出现的大脑状态及其动态。
result: 每个个体大脑访问约45个状态，沿连续复发梯度分布；状态转移受功能连接相似性约束；内容调制状态占用；状态库可跨社会叙事电影迁移，但在阅读和听觉刺激中减弱。
conclusion: 动态大脑状态库是个体固有的稳定属性，内容仅影响状态在何时被访问，而非改变状态本身的存在。
---

## 摘要
当人们观看故事展开的连续、多样的体验时，大脑在做什么？一种观点认为，大脑会遍历有限的重现状态集合，但这一集合是个体的稳定属性，还是被每一次新的体验所重塑，尚未在同一个体中对多种自然内容进行检验。我们描述了六名观看电视剧《老友记》全部六季（每人最多约146集，约54小时）的fMRI个体的动态大脑状态集合。对每个个体，我们跨所有剧集拟合了一个粘性分层狄利克雷过程隐马尔可夫模型，在不预先指定数量情况下发现大脑状态（具有特征耦合的重现全脑活动模式）。每个个体的大脑遍历了大约四十五个状态，这些状态沿连续重现梯度排列：从几乎每集都活跃的状态到特定于剧集的状态，之间没有明显区分。状态重现的原因在不同状态间存在异质性：少数状态锁定于扫描运行结构，大部分状态仍与内容相关。状态间的转换由状态之间的功能连接相似性组织（每个个体的斯皮尔曼ρ = 0.33–0.55），并且在大多数个体中，转换遵守静息态网络的边界。剧集内容与大脑每时每刻所占据的状态相关联。在《老友记》中发现的重现排序可迁移到其他社会叙事电影中的状态占用（六人中有五人），并且随着刺激偏离此类叙事而减弱：对于纯视觉阅读和纯音频聆听，迁移性减弱。在多样的叙事体验中，动态状态集合是个体的属性：内容改变的是大脑访问哪些状态以及何时访问，而不是存在哪些状态。

## Abstract
What does the brain do during the continuous, varied experience of watching a story unfold? One account holds that the brain traverses a finite repertoire of recurring states, but whether that repertoire is a stable property of the individual or is reshaped by each new experience has not been tested across diverse naturalistic content within the same person. We characterized the dynamic brain-state repertoire in six individuals who watched the television series Friends across its six seasons during fMRI (up to ~146 episodes, ~54 hours per person). For each individual we fit a sticky hierarchical Dirichlet process hidden Markov model across all episodes, discovering brain states (recurring whole-brain activity patterns with characteristic coupling) without pre-specifying their number. Each individual's brain visited roughly forty-five states arrayed along a continuous recurrence gradient, from states active in nearly every episode to episode-specific ones, with no sharp division between them. The repertoire was heterogeneous in why its states recurred: a minority locked to scan-run structure, the majority remaining eligible for content. Transitions were organized by the functional-connectivity similarity between states (per-individual Spearman {rho} = 0.33-0.55) and, in most individuals, respected resting-state network boundaries. Episode content was associated with which states the brain occupied moment to moment. The recurrence ordering discovered in Friends transferred to state occupancy during other social-narrative films (five of six individuals) and attenuated as stimuli departed from that class, weakening for visual-only reading and audio-only listening. Across diverse narrative experience, the dynamic repertoire is a property of the individual: content varies which states are visited and when, not which states exist.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：弱相关。论文未直接进行脑解码或脑编码模型构建，但其无监督发现大脑动态状态的研究路径与 fMRI 表示、神经先验等方向存在间接联系。
- **启发与意义**：揭示了个体稳定的大脑状态库及其迁移性，暗示可将此类自组织状态作为先验，用于多视图对齐或解码任务中的正则化约束。
- **可借鉴点**：分层狄利克雷过程隐马尔可夫模型（HDP-HMM）能够从连续自然数据中自动学习个体特异性全脑状态，该状态可作为脑编码/解码的特征空间，或用于约束跨刺激表示对齐。
- **阅读建议**：关注无监督 fMRI 动态分析和神经指纹的研究者可精读其状态发现方法及跨模态迁移实验，思考如何将稳定的个体状态库融入预测模型。

## 1. 论文的核心问题与整体含义
- **核心问题**：在长时间、多样、连续的叙事体验（如观看电视剧）中，大脑反复出现的动态状态集合究竟是**个体固有的稳定属性**，还是被每次新经历重新塑造？这一“状态库”在不同内容下是否保持一致？
- **整体含义**：研究试图回答“大脑在自然叙事下如何组织其自发动态”，以及这种组织是个体特异的还是依赖刺激的。这关乎神经动力学的基本单元是否固定，对理解脑功能组织、个体差异和记忆/感知加工均有理论意义。

## 2. 论文提出的方法论
- **核心思想**：在无监督框架下，从个体长时间 fMRI 数据中自动发现反复出现的全脑活动模式（即大脑状态），无需预先指定状态数量。
- **关键技术细节**：
  - 使用**粘性分层狄利克雷过程隐马尔可夫模型**（sticky HDP-HMM）。
  - HDP 先验允许无限状态数，数据驱动地确定状态数目，粘性参数鼓励状态自维持（连续体素停留于同一状态）。
  - 对每位被试，将其观看《老友记》全部剧集的 fMRI 扫描拼接为单个时间序列，拟合一个 HDP-HMM，得到：
    - 一系列**全脑状态**（每个状态是一个特征耦合的多体素活动模式）。
    - 状态转移概率矩阵。
  - 基于状态共现计算**功能连接相似性**，以组织状态间的转换关系。
- **算法流程**：参数推断采用贝叶斯推断（如 Gibbs 采样）估计状态序列和状态参数；自动确定的状态数经由后验概率评估。

## 3. 实验设计
- **数据集与场景**：
  - **主数据集**：6 名被试观看电视剧《老友记》全部六季（每人最多约 146 集，约 54 小时）的 fMRI 数据。
  - **迁移测试集**：
    - 其他社会叙事电影（用于测试状态库的跨刺激迁移）。
    - 纯视觉阅读（无听觉的阅读任务）和纯音频聆听，作为偏离叙事刺激的对照。
- **Benchmark 与对比方法**：该研究无标准 benchmark 或对比模型，属于探索性分析，主要对比不同刺激条件下状态占用模式的迁移程度。
- **分析内容**：
  - 状态重现梯度（从几乎每集活跃到剧集特异状态）。
  - 状态与扫描运行结构的关系。
  - 状态转移与功能连接相似性的相关性。
  - 剧集内容与状态占用的关联。
  - 状态库迁移到其他社会叙事电影的能力，以及随刺激模态偏离的衰减。

## 4. 资源与算力
- 文中**未明确说明**所使用的 GPU 型号、数量或训练时长。由于主要计算是贝叶斯推断采样，通常在 CPU 上运行，耗时主要取决于数据长度和状态数，但未提供具体量化信息。

## 5. 实验数量与充分性
- **实验数量**：多项分析可视为不同维度的验证实验，包括：
  1. 状态发现与重现梯度刻画。
  2. 状态受扫描结构影响的分析。
  3. 状态转移受功能连接相似性约束的检验。
  4. 内容对状态占用的关联分析。
  5. 状态库向其他社会叙事电影的迁移实验（n=5/6 有效）。
  6. 听觉/阅读模态下的迁移衰减实验。
- **充分性与公平性**：样本量极小（6 人），属于深度个体内设计，适合发现个体稳定性，但缺乏群体统计推断。实验覆盖了多个检验角度，内部逻辑一致，但缺少消融实验（如改变模型参数或与其他动态分析方法的比较），且迁移测试电影细节未全部公布。整体虽详细但外部效度有限。

## 6. 论文的主要结论与发现
- 每个体大脑遍历约 **45 个状态**，排列在从集间高重现到剧集特异的连续梯度上，无明确二分界限。
- **状态库是个体稳定的**：大多数状态不受扫描运行结构锁定，其重现主要与内容相关。
- **状态转移**由状态之间的功能连接相似性组织（每个人 Spearman ρ = 0.33–0.55），且多数个体中转移遵守静息态网络边界。
- **剧集内容调制**了大脑每一刻访问哪个状态。
- **状态排序可跨刺激迁移**：在《老友记》中发现的状态重现模式能够迁移到其他社会叙事电影（6 人中有 5 人成功），但在纯视觉阅读和纯音频聆听中迁移性减弱，揭示状态库的刺激类别特异性。
- **核心结论**：动态大脑状态库是**个体固有的属性**，内容改变的是状态何时被访问，而非状态集合本身的存在。

## 7. 优点
- **创新设计**：使用超长时间（~54 小时）的自然叙事刺激，在同一个体内跨数百集电视剧进行高生态效度的情境扫描。
- **方法先进**：采用非参数贝叶斯 HDP-HMM 自动推断状态数量，避免人为指定数目带来的偏差，同时粘性机制符合大脑状态自维持的时间特性。
- **多维度验证**：从状态重现梯度、结构/内容解耦、网络边界、跨刺激迁移等多角度检验状态库的稳定性，证据链较完整。
- **迁移实验**：明确测试了状态组织在不同叙事和模态刺激下的泛化性，为结论提供了生态推广支持。

## 8. 不足与局限
- **样本量极小**：仅 6 名被试，结论无法直接推广到群体水平，且个体差异无法统计建模。
- **刺激单一**：主要发现基于一部电视剧，尽管有多部电影迁移，但社会叙事类型仍较集中，未覆盖非叙事类动态任务。
- **方法依赖性**：状态定义完全由 HDP-HMM 行为决定，不同模型选择（如状态转移约束、先验设定）可能导致不同的状态划分，缺乏与其他动力学方法的对比。
- **可解释性有限**：状态被视作抽象全脑模式，未能深入映射到认知功能或心理过程，神经意义主要依赖网络边界符合性证据。
- **迁移实验粗糙**：仅报告 5/6 人有效，衰减模式仅用听觉、阅读举例，未系统量化迁移强度的梯度变化。

## 9. 研究价值与阅读建议
- **关联方向**：弱相关。主要在于无监督表示发现和自上而下先验，可为 fMRI 表示学习提供思路。
- **启发与意义**：个体稳定状态库的存在提示大脑动态存在刚性“词汇”，可作为约束脑编码模型的正则项或作为解码任务中的可迁移特征。
- **可借鉴点**：HDP-HMM 的状态发现框架可改造为多被试共享的先验结构，用于多视图表示对齐或跨被试脑状态解码；静息态网络边界转移的发现可用于改进生成模型中的图先验。
- **阅读建议**：适合从事自然主义成像分析、动态网络建模和个体神经指纹研究的读者，可重点阅读其状态库构建流程和跨刺激迁移实验的细节，思考如何将稳定状态库嵌入预测模型或作为神经先验。

（完）
