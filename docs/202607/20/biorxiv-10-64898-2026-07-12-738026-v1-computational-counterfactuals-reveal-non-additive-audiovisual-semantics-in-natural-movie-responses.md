---
title: Computational Counterfactuals Reveal Non-Additive Audiovisual Semantics in Natural Movie Responses
title_zh: 计算反事实揭示自然电影反应中非加和性的视听语义
authors: "Li, M."
date: 2026-07-17
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.12.738026v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 使用176名被试的7T fMRI进行脑编码
tldr: 自然视听感知的神经机制可能无法通过独立分析视觉和听觉信息充分解释。本研究利用7T电影fMRI数据，提出计算反事实框架，比较原生视听语义模型与基于视觉和听觉单模态描述加性重建模型的预测能力。结果发现原生模型显著优于加性基线，特别是在感觉和注意系统中，且该优势源于连贯语义涌现和特定网络路由，而非简单的跨模态差异。这揭示了完整电影观看下皮层组织与原生视听意义对齐，超越了单模态加性语义。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738026-v1/fig-001.webp\", \"caption\": \"Figure 1 | Computational counterfactual design, stimulus hierarchy, and nested cross-validation. (a) The same intact audiovisual clips and observed fMRI responses were used for every model comparison; only the computational stimulus representation changed. NativeAV12 was scored directly from intact audiovisual clips, whereas MatchedAdditive12 was assembled on the same 12 semantic dimensions from audio-only and silent-video scores. (b) Four scan runs yielded 293 raw clips in 18 presentation blocks; quality control retained 270 clips in 17 blocks, 14 source identities (13 non-repeat sources and one repeated source), 28 repeat clips across four presentations, 176 participants, and 360 MMP parcels. (c) In content-aware purged leave-one-clip-out cross-validation, same-source clips with overlapping time intervals were removed from training; the aligned cross-run counterpart of repeated Vimeo content was also removed. Unrelated clips were retained. (d) Ridge lambda was selected by inner leave-source-out validation after excluding the complete outer-test source; the selected model was then refitted on the purged training data and used to predict the held-out clip. Full details are provided in Methods.\", \"page\": 6, \"index\": 1, \"width\": 948, \"height\": 674}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738026-v1/fig-004.webp\", \"caption\": \"Figure 2 | Native audiovisual scoring improves purged cortical encoding. (a) Cortex-wide mean cross-validated R² for seven prespecified feature spaces. Audio9 and Video8 are unimodal models; NativeAV12 and MatchedAdditive12 are the primary dimension-matched comparison; LateConcat17, ConcatPCA12, and LegacyConcat24 control for concatenation strategy and capacity. (b) Paired parcellevel Native and Matched Additive R²; the dashed diagonal denotes equality. (c) Covariate-adjusted Native-minus-Additive R² (NMA) across 360 MMP parcels. (d) Direction of parcels surviving two-sided FDR across 360 tests; red favors Native and blue favors Matched Additive. (e) Distribution of cortexaveraged NMA across 176 participants; the solid vertical line denotes zero and the dashed line the sample mean. The displayed Cohen's d and two-sided bootstrap p value use participants as the inferential unit after adjustment for motion, age, and sex. (f) Counts of Native- and Additive-favored parcels surviving FDR and max-statistic FWER.\", \"page\": 8, \"index\": 4, \"width\": 948, \"height\": 881}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738026-v1/fig-002.webp\", \"caption\": \"Figure 3 | Network hierarchy and complementary representational geometry. (a) Covariate-adjusted NMA in 12 Cole-Anticevic networks; bar height is ΔR² and annotations report two-sided FDR and Cohen's d. (b) Parcel display of the network estimates using CAB-NP assignments. (c) Native-minus-Additive representational-similarity-analysis effect across networks; bar height is ΔSpearman rho, with positive values indicating that Native feature geometry was closer to brain-pattern geometry than Matched Additive geometry. (d) Association between network amplitude NMA and RSA NMA (Spearman rho=0.50, twosided p=0.099); zero lines divide effect direction. (e, f) Ten parcels with the largest Native- and Additivefavored adjusted effects. Inference is across 176 participants. AUD, auditory; CON, cingulo-opercular; DAN, dorsal attention; DMN, default; FPN, frontoparietal; LAN, language; ORA, orbito-affective; PMM, posterior multimodal; SMN, somatomotor; VIS1/2, visual 1/2; VMM, ventral multimodal.\", \"page\": 10, \"index\": 2, \"width\": 948, \"height\": 881}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738026-v1/fig-005.webp\", \"caption\": \"Figure 4 | Feature-specific semantic routing accounts for predictive Native gain. (a) Held-out replacement logic. One Native feature was replaced by its Matched counterpart; replacement loss equals R²(Native) minus R²(hybrid), so positive values denote Native-specific predictive information and negative values favor the Matched feature. (b) Cortex-wide participant-adjusted replacement loss for the 12 semantic dimensions; asterisks denote two-sided FDR. (c) Feature-by-network replacement effects across 12 dimensions and 12 CAB-NP networks. (d,e) Largest globally corrected positive and negative routes. (f) Number of globally significant positive and negative routes per dimension. All 144 featurenetwork tests were corrected together; inference is across 176 participants after adjustment for motion, age, and sex.\", \"page\": 12, \"index\": 5, \"width\": 948, \"height\": 881}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738026-v1/fig-003.webp\", \"caption\": \"Figure 5 | Native gain is broad across films and gated by content. (a) Participant-adjusted normalized error gain in 13 non-repeated source films; red and blue denote Native- and Additive-favored effects, respectively, and asterisks denote FDR across films. (b) Film counts by direction and statistical support. (c,d) Within-film associations of network gain with coherent Native emergence magnitude and raw audio-video discrepancy, estimated from temporally non-overlapping clips with source-film fixed effects. Asterisks denote correction across the 24 prespecified network-mechanism tests. (e) Network-by-film adjusted gain. (f) Feature-residual-by-network association matrix. Color scales encode signed normalized error gain or regression slope. These associations are descriptive of content gating and are not causal estimates.\", \"page\": 14, \"index\": 3, \"width\": 948, \"height\": 881}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738026-v1/fig-006.webp\", \"caption\": \"Figure 6 | Temporal robustness and the boundary of generalization. (a) Native and Matched Additive group mean R² under the primary purge, 10-s and 20-s embargoes, and a 10-s embargo after repeat exclusion. (b) Participant-adjusted NMA for the same conditions; asterisks denote corrected two-sided bootstrap tests across 176 participants. (c,d) Mean fold-wise R² and prediction correlation for completely unseen source films, unseen runs, and cross-day transfer. Negative R² indicates failure of absolute amplitude calibration, whereas positive r indicates preserved relative response structure. (e) Sourcespecific R² versus prediction r; point size denotes the number of held-out clips. (f) Pairwise Pearson correlations of flattened group brain patterns during four Vimeo Repeat presentations; the dashed line denotes the six-pair mean.\", \"page\": 16, \"index\": 6, \"width\": 948, \"height\": 881}]"
motivation: 探究大脑在处理自然视听信息时是否存在超越单模态简单相加的整合机制。
method: 通过7T电影fMRI数据，比较原生视听语义模型与维度匹配的音频-视频加性模型在预测皮层反应上的表现。
result: 原生模型预测更优，优势集中在听觉、视觉和背侧注意系统，且反映特征与网络特定路由。
conclusion: 完整电影观看诱发的大脑皮层组织与原生视听语义一致，表明存在非加性的视听语义整合。
---

## 摘要
将电影分解为听觉和视觉流可能无法完全捕捉自然的视听感知。我引入了一个计算反事实框架，该框架在保持观影完整的同时仅改变同一片段的人工智能衍生描述。使用来自176名参与者的7特斯拉电影fMRI成像数据，我测试了皮层反应是否能被本征视听语义比从仅音频和仅视频描述中维度匹配的加和重建更好地预测。在内容感知的清除交叉验证下，本征模型优于匹配的加和基线，在听觉、视觉和背侧注意系统中增益最大。表征相似性、特征替换和内容门控分析表明，这种优势反映了与连贯视听语义涌现相关的特征和网络特异性路由，而非原始的听觉-视觉差异。该效应在更强的时间清洗和重复内容排除下仍然存在，表明完整的观影能够唤起与超越加和单模态语义的本征视听意义相一致的皮层结构。

## Abstract
Natural audiovisual perception may not be fully captured by decomposing movies into auditory and visual streams. I introduce a computational-counterfactual framework that keeps movie viewing intact while varying only AI-derived descriptions of the same clips. Using 7 Tesla movie fMRI imaging data from 176 participants, I tested whether cortical responses were better predicted by native audiovisual semantics than by a dimension-matched additive reconstruction from audio-only and video-only descriptions. The native model outperformed the matched additive baseline under content-aware purged cross-validation, with strongest gains in auditory, visual, and dorsal attention systems. Representational-similarity, feature-replacement, and content-gating analyses showed that the advantage reflected feature- and network-specific routing linked to coherent audiovisual semantic emergence rather than raw auditory-visual discrepancy. The effect survived stronger temporal purging and repeat-content exclusion, suggesting that intact movie viewing evokes cortical structure aligned with native audiovisual meaning beyond additive unimodal semantics.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：强相关。本文的核心“计算反事实”是一种新的多模态神经编码范式，直接与读者的“脑编码”和“多视角约束”方向吻合。
- **启发与意义**：它揭示大脑对“涌现语义”的表征，启发了超越简单特征拼接、寻找与高级认知状态（如注意、意义整合）对齐的真实脑表征的研究思路。
- **可借鉴点**：可以借鉴其“内容感知清洗”交叉验证和特征替换分析，用以严格评估多模态融合模型与大脑的对齐程度。
- **阅读建议**：重点关注其方法论设计和特征-网络路由分析，思考如何将这种“操控AI而非刺激”的范式应用于你的脑解码或表征对齐任务中。

## 1. 论文的核心问题与整体含义

本研究旨在回答一个核心认知神经科学问题：在自然视听感知中，大脑的表征是否超越了单通道信息的简单加和。传统的多感觉整合研究多采用物理刺激相减（如 AV > A+V），但在自然电影等高生态效度刺激下，移除声轨等物理操作会引入注意、认知负荷等混淆变量，破坏了研究的真实性。因此，论文引入“计算反事实”这一根本性转变，即保持参与者观看完整的自然电影不变，仅改变对同一事件的AI计算描述。通过比较一个从完整视听片段提取的“本征”语义模型与一个由“仅音频+仅视频”独立描述加和而成的“匹配加和”模型，来判断皮层活动是否包含了与连贯视听意义对齐、且超出单模态语义加和的独特信息。这不仅深化了对视听整合的生态化理解，也为利用AI研究复杂大脑功能提供了原则框架。

## 2. 论文提出的方法论：计算反事实框架

核心思想在于，不改变人类接受的物理刺激，转而操控对刺激的计算表征，从而在不破坏自然观影状态的前提下，探测多感觉语义整合的神经基础。关键步骤如下：

**a. 特征空间构建**
使用多模态大语言模型（Gemini 3.1 Pro）为每个电影片段生成12个语义维度的评分，构建两种12维对比空间：
- **本征视听表征（NativeAV12）**：直接从完整的、包含音频和视频的片段中提取12个维度的分数。
- **匹配加和表征（MatchedAdditive12）**：一个维度匹配的基线，通过组合独立模态的评分构建。具体规则为：
  $$ \text{MatchedAdditive12}_j = \begin{cases} V_j, & \text{if } j \in \{\text{视觉特定维度}\} \\ A_j, & \text{if } j \in \{\text{听觉特定维度}\} \\ (A_j + V_j)/2, & \text{if } j \in \{\text{共享抽象维度}\} \end{cases} $$
其中，视觉特定维度为视觉运动能量、视觉复杂度、人物存在；听觉特定维度为声响度、声响丰富度、口头对话、音乐突出性；共享维度为情绪唤起度、情绪效价、社会交互、心理理论、叙事意外性。

**b. 严格的编码与交叉验证**
采用“内容感知清除留一法交叉验证”来评估模型预测脑皮层活动（fMRI响应）的性能：
- 测试时，对每个保留的测试片段，从训练集中移除所有源自同一部电影、且在时间窗口上与其重叠的片段。
- 对于重复播放的片段，还会移除其在其他运行中的对应片段。
- 岭回归的正则化参数 $\lambda$ 在内部通过“留源排除法”（完全排除测试片段的电影来源）进行选择。
- 最终比较本征和加和模型的预测决定系数 $R^2$，并定义其差值为“本征多模态优势（NMA）”。

## 3. 实验设计

- **数据集**：人脑连接组计划（HCP）的公开数据，使用了176名成人被试的7T电影观看fMRI数据。电影包含4段连续性叙事片段（来自13部独立影片和1个重复内容）。
- **Benchmark与对比方法**：基准测试是对七种预定义特征空间的编码性能进行比较。
    - **核心对比**：`NativeAV12`（本征视听） vs. `MatchedAdditive12`（匹配加和）。
    - **单模态基线**：`Audio9`（仅音频）、`Video8`（仅视频）。
    - **容量与拼接控制**：`LateConcat17`（直接拼接17个单模态特征）、`ConcatPCA12`（拼接后降维至12维）、`LegacyConcat24`（拼接全部24个音频+视频评分）。这些控制排除了本征模型优势来源于更高特征维度或简单拼接的可能。
- **评估指标**：交叉验证预测$R^2$、表征相似性分析（RSA）、特征替换损失等。

## 4. 资源与算力
论文未明确提及使用何种GPU型号、数量或总训练时长。分析主要依赖调用Google的Gemini API生成语义评分，以及在MATLAB/Python中进行的统计建模（如岭回归和自举检验），这些对本地算力的要求相对传统深度学习训练来说较低。因此，算力消耗的具体信息缺失。

## 5. 实验数量与充分性
论文进行了大量系统性的对照、分析和稳健性检验，实验设计相当充分、客观且公平。

- **主实验**：1项核心编码对比（本征 vs. 加和）。
- **控制实验**：与5种不同单模态、拼接和维度控制模型的比较。
- **机制分析**：
    - **表征相似性分析**：对比两模型的表征几何结构。
    - **特征替换实验**：12个维度的逐一替换，识别关键语义路由。
    - **内容门控分析**：分析13部不同影片间的效应差异及其与内容属性的关联。
- **稳健性与泛化性检验**：
    - **时间清洗**：在3种更严格的时间点排除条件下（10秒、20秒禁运及重复内容排除）重复主对比。
    - **泛化性测试**：在“未见来源电影”、“未见运行”和“跨天泛化”三种场景下评估模型。
    - **个体差异分析**：检验了NMA是否包含稳定的个体特质，并与认知评分（流体智力、晶体智力等7项测试）进行关联。

所有这些分析共同构成一个严密的内外验证体系，有效排除了特征数、拼接策略、数据泄露、内容特异性和个体差异等多种混淆解释。

## 6. 论文的主要结论与发现

1.  **存在非加和的视听语义编码**：本征视听语义模型对全脑皮层活动的预测力显著优于维度匹配的加和基线（原生多模态优势NMA），证明自然观影下的大脑反应包含超越单模态语义简单相加的整合信息。
2.  **效应定位在感觉和注意系统**：NMA最强且最显著的效应出现在听觉皮层、初级/次级视觉皮层和背侧注意网络，表明整合效应并非局限在高级联络皮层，而是广泛分布。
3.  **特征是网络特异性的双向路由**：本征优势不是全局性的。`声响度`、`口头对话`等特征在听觉和语言网络有本征优势，而`人物存在`、`社会交互`在特定网络反而表现出加和优势。这表明不同皮层系统对连贯和分离的语义信息有不同偏好。
4.  **优势由连贯的语义涌现驱动**：NMA与跨模态的“连贯语义涌现度”正相关，而与原始的“听觉-视觉差异”负相关或无关。表明关键不在于信息量差异的大小，而在于联合解释是否产生了新的、有意义的语义。
5.  **效应稳健但泛化有限**：NMA在严格的时间清洗和去除重复内容后依然稳健，但模型在预测全新电影或跨天的皮层反应时，绝对幅度校准性差，仅能保留相对响应结构。

## 7. 优点：方法或实验设计上的亮点

- **范式创新性**：提出的“计算反事实”框架极具原创性，巧妙地规避了物理刺激操控在自然主义范式中的固有混淆，为同类研究提供了新思路。
- **严密的实验控制**：通过匹配维度的“加和”基线、多种容量/拼接控制模型、以及独特的内容感知交叉验证，极为严格和公平地分离了“整合性”语义信息的贡献。
- **机制导向的深入分析**：不满足于简单的“更好”结论，通过RSA、特征替换和内容门控分析，层层递进地揭示了非加和性的网络分布、特征特异性和内容驱动因素。
- **稳健性与泛化性的明确界定**：通过多层次的稳健性检验建立了结论的可靠性，同时坦率地展示了模型在泛化上的局限，避免了过度推断。

## 8. 不足与局限：包括实验覆盖、偏差风险、应用限制等

- **推论的关联性本质**：其核心发现是预测性的，无法建立从完整视听感受到皮层整合的因果关系（因为缺少对物理感官剥夺的控制）。
- **模型依赖性强**：其结论完全建立在Gemini模型家族定义的语义框架之上。不同的AI模型、指令或维度选择可能得到不同的结果，结果的普适性有待检验。
- **泛化能力受限**：模型在预测完全未见过的新电影或跨天数据时，其绝对响应幅度校准性差，表明它目前还不具备作为一个通用电影大脑反应预测器的能力。
- **个体层面信号弱**：跨天的个体差异指纹识别精度较低，且与认知测试无显著关联，说明NMA反映的可能主要是状态性而非特质性的群体水平计算机制。
- **计算成本限制**：语义标注依赖于API调用，其成本和对模型的访问限制可能阻碍大规模、多样化的刺激集分析。

## 9. （内容已按要求合并至第一节）

（完）
