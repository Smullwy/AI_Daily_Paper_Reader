---
title: Neural representation of hedonic valence during narrative listening
title_zh: 叙事聆听过程中愉悦效价的神经表征
authors: "Yang, X., O'Reilly, C., Shinkareva, S."
date: 2026-07-04
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.30.735538v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 利用fMRI和体素贝叶斯模型选择研究愉悦效价，直接对应fMRI脑表征需求
tldr: 本研究探究自然叙事体验下愉悦效价的脑表征，通过fMRI结合贝叶斯模型选择比较双极、效价一般和双价模型，发现双极模型最优，并识别出包括情绪及非传统区域在内的分布式脑区编码效价连续体，推进了情感神经科学对真实世界效价处理的理解。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究自然叙事聆听中效价的脑表征，并解决单一统计模型可能带来的鲁棒性问题。
method: 采用体素级贝叶斯模型选择比较三种假设模型，分析叙事聆听fMRI数据。
result: 双极模型得到支持，发现分布式脑区（如腹内侧前额叶、枕下皮层等）选择性编码正负效价连续体。
conclusion: 强调正式模型比较与自然范式的重要性，增进了对真实体验中效价脑表征的理解。
---

## 摘要
愉悦效价，即体验的内在愉悦或不愉悦性，是人类心理功能的基础。然而，效价如何在大脑中表征仍是一个悬而未决的问题。功能磁共振成像研究表明，大脑同时编码积极和消极效价，但这些证据主要来自使用简化、受控刺激（如图像、声音或词语）的实验。因此，尚不清晰效价在更接近现实生活的丰富自然体验中是如何被加工的。此外，大多数研究采用单一的统计模型，引发了对其发现稳健性的担忧。本研究使用正式的体素级贝叶斯模型选择方法来检验支持双极性、效价普遍性和双价性假设的替代统计模型，以确定叙事聆听过程中效价表征的最优模型。我们的结果为双极模型提供了证据。我们发现在叙事理解过程中，分布式的脑区选择性地将效价编码为双极连续体（从消极到积极），包括经典的与情绪相关的枢纽，如腹内侧前额叶皮层，以及传统上不与情绪加工关联的区域，如枕下皮层、缘上回、额下回和中扣带。还发现了选择性编码唤醒度的区域以及同时对效价和唤醒度广泛响应的区域。这些发现强调了在情感神经科学中使用正式模型比较和自然范式的重要性，增进了我们对现实世界体验过程中效价如何在大脑中表征的理解。

## Abstract
Hedonic valence, the intrinsic pleasantness or unpleasantness of an experience, is fundamental to human psychological functioning. Yet, how valence is represented in the brain remains an open question. Functional MRI studies have demonstrated that the brain encodes both positive and negative valence, but this evidence largely stems from experiments using simplified, controlled stimuli, such as images, sounds, or words. As a result, it remains unclear how valence is processed during rich, naturalistic experiences that more closely reflect real life. In addition, most studies adopt a single statistical model, raising concerns about the robustness of their findings. This study used a formal voxel-wise Bayesian model selection approach to test alternative statistical models supporting Bipo-larity, Valence-General, and Bivalence hypotheses to identify the most optimal model of valence representation during narrative listening. Our results provide evidence for the Bipolar model. We identified distributed brain re-gions that selectively encode valence as a bipolar continuum (negative to positive) during narrative comprehen-sion, including classical emotion-related hubs such as ventromedial prefrontal cortex, as well as regions not tradi-tionally associated with emotion processing, such as inferior occipital cortex, supramarginal cortex, inferior frontal cortex, and middle cingulate. Regions selectively encoding arousal and those broadly responsive to both valence and arousal were also identified. These findings highlight the importance of using formal model comparison and naturalistic paradigms in affective neuroscience, advancing our understanding of how valence is represented in the brain during real-world experiences.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：该论文高度关联读者的“brain decoding”、“fMRI representation”及“representation alignment”研究方向。
- **启发与意义**：论文通过fMRI体素级贝叶斯模型选择来验证脑如何表征情感效价的理论模型，为“神经编码形式”提供了严谨的推理框架，直接启发了如何验证从神经数据中解码出特定表征模型的计算方法。
- **可借鉴点**：其核心可借鉴点在于引入了交叉验证贝叶斯模型选择（cvBMS）作为评估不同表征假设的工具，这种方法可以移植到比较不同脑编码/解码模型（如不同的多模态对齐策略）的优劣。
- **阅读建议**：重点阅读其方法论部分，学习如何将抽象理论假说转化为具体的GLM参数化模型并进行形式化比较；实验设计中对效价和唤醒度进行解耦分析的思路也值得关注。

## 1. 论文的核心问题与整体含义
- **核心问题**：论文旨在解决情感神经科学中的一个长期争论：愉悦效价（hedonic valence）在大脑中如何被表征。具体而言，是探究积极和消极情绪是由同一系统还是相互独立的神经系统所编码。
- **研究动机与背景**：
  - 现有研究多使用高度控制的、简化的刺激（如图片、词语），无法反映真实生活中动态、连续的体验。
  - 绝大多数研究仅采用单一统计模型，其结论的稳健性存疑，无法有效区分“双极性”（Bipolarity）、“效价普遍性”（Valence-General）和“双价性”（Bivalence）三种主要的理论假说。
- **整体含义**：本研究通过结合自然叙事聆听和严格的贝叶斯模型比较，揭示了在接近真实体验的场景下，大脑更倾向于以“双极连续体”的形式编码效价，为理解现实世界的情感神经基础提供了关键证据。

## 2. 方法论
- **核心思想**：摒弃传统的依赖单一统计模型显著性推断的做法，采用正式的体素级（voxel-wise）交叉验证贝叶斯模型选择（cvBMS）框架，直接比较多个竞争性假说模型的证据，以确定哪个模型能最简约且最优地解释叙事聆听过程中的BOLD信号。
- **关键技术细节与流程**：
  1. **主观评分预处理**：将故事切分为片段，通过独立样本获取效价与唤醒度评分。使用基于RV系数的PCA（STATIS方法）生成加权平均的规范评分，以捕捉群体共享情感轨迹。
  2. **竞争性模型的GLM构建**：
     - **双极模型**：BOLD信号是一个包含“效价”（线性项）和“唤醒度”参数调控器的线性模型。
     - **效价-一般模型（V形）**：调控器包含“效价绝对值”（线性项）和“唤醒度”。
     - **效价-一般模型（U形）**：调控器包含“效价”（线性项）、“效价平方”（U形项）和“唤醒度”。
     - **双价模型**：分别对“积极片段”和“消极片段”建模，每个片段都包含“效价”和“唤醒度”两个参数调控器。
  3. **模型选择与评估**：使用MACS工具箱进行交叉验证贝叶斯模型比较。通过计算交叉验证的对数模型证据（cvLME），得出每个体素和参与者的最优模型。然后使用随机效应贝叶斯模型选择（RFX BMS）来确定各模型在群体层面的最优频率。
  4. **显著性检验**：对最优模型选中的体素，进一步施加传统的体素级$t$检验或$F$检验，以确认效价参数调控器是否显著调制神经活动。

## 3. 实验设计
- **数据集**：使用了公开的“Narratives”fMRI数据集中四个不同的英文故事（`Black`, `Forgot`, `Slumlord`, `Reach`）。fMRI被试共64人。主观评分通过在线实验从另外的156名独立被试中收集。
- **Benchmark与对比方法**：
  - **核心对比**：论文的内部核心是比较四个理论驱动的统计模型（双极、V形、U形、双价）哪个对fMRI数据的拟合最优。
  - **主观评分的可靠性评估**：使用组内相关系数（ICC）和留一法相关性分析来评估主观评分的可靠性，作为后续fMRI分析的基准质量保证。
  - **功能性分离**：通过构建控制变量模型和连接分析，对比了“效价独有”和“唤醒度独有”以及“二者共有”的脑区，从而细化了不同情感维度的表征基准。

## 4. 资源与算力
- 论文未明确提及执行fMRI分析或模型选择所消耗的具体算力（如GPU型号、CPU核心数或运算时长）。此类分析通常在CPU上完成，对算力要求相对较低。

## 5. 实验数量与充分性
- **实验组数**：
  1. **主观评分验证**：对四个叙事分别进行了评分信度分析及个体与规范评分的相关性分析。
  2. **主模型比较（家庭1）**：在四个模型间进行体素级cvBMS和组级RFX BMS。
  3. **稳健性分析（家庭2）**：为控制模型复杂度，重构了低复杂度的双价模型再次进行比较。
  4. **神经激活分析**：分别检验了叙事主效应、效价（控制唤醒度后）、唤醒度（控制效价后）的调节效应。
  5. **功能性分离**：实施效价与唤醒度的连接分析。
- **充分性与公平性**：实验设计非常严谨且充分。通过复杂的稳健性分析（模型家庭2）排除了模型参数个数差异带来的混淆，并基于数据驱动（cvBMS）的方法而非主观偏见选择赢家，确保了对比的客观与公平。

## 6. 主要结论与发现
- **模型优势**：在叙事理解期间，**双极模型**是绝大多数脑区及参与者中的最优效价表征模型。双价模型（即使降低复杂度后）仅在初级听觉皮层被少数选择，且那里的信号模式更符合效价-一般模型。
- **效价编码脑区**：在控制唤醒度后，发现效价被编码为一个从负到正的连续体。正向效价激活腹内侧前额叶（vmPFC）、额下回/额叶交界（IFG/IFJ）、杏仁核/海马等；负向效价则与后扣带回（PCC）、缘上回（SMG）、中扣带回（MCC）等区域的激活增加相关。
- **功能特异性与重叠**：许多区域（如STG、杏仁核）同时对效价和唤醒度敏感，反映了情感突显性处理。而vmPFC、IFJ和枕下回（IOG）等区域对效价有独特的选择性，而背内侧前额叶（dmPFC）等对唤醒度有独特选择性。

## 7. 优点
- **方法论严谨性**：采用cvBMS框架，对多个理论假说进行直接的、包含模型复杂度惩罚的比较，解决了以往研究因依赖单一模型或显著性推断而产生的歧义。
- **生态效度高**：使用自然叙事的fMRI范式，捕捉了在更贴近真实生活的、连续动态情境下的情感处理过程，避免了高度控制、瞬时刺激的局限性。
- **分解式分析**：通过精细的GLM设计，将效价和高度相关的唤醒度进行统计解耦，并利用连接分析揭示了对不同情感维度有选择性或共同响应的脑网络。

## 8. 不足与局限
- **相关性与因果性**：分析本质上是相关性研究，无法确立因果关系。自然叙事中的效价变化可能与低层级的声学、语义特征共变，其效应无法完全分离。
- **情感与语义的混淆**：研究方法难以彻底区分“情感效价”处理与“语义效价”理解，尤其是在额下回等已知的语义枢纽区域。
- **群体与个体差异**：
  - 用于定位神经关联的主观评分是由独立样本产生的、经加权平均的规范性评分，可能掩盖了个体独特的、特异性的情感神经编码模式。
  - 被试主要为年轻成年女性，限制了结论向更广泛人群的推广。
- **双价模型的检验力**：尽管尝试了简化模型，但fMRI体素水平的分辨率可能无法捕捉到双价假说所假设的、在神经元亚群体层面存在的独立正负效价编码。传统框架也难以对“效应缺失”这一双价性的关键标准提供有效证据。

（完）
