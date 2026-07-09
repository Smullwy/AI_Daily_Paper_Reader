---
title: Conclusions Drawn From Neural Network to Brain Alignment Depend Strongly on the Chosen Similarity Measure
title_zh: 从神经网络到大脑对齐得出的结论强烈依赖于所选的相似性度量
authors: "Soni, A., Srivastava, S., Maechler, M. R., Khosla, M., Kording, K. P."
date: 2026-07-08
pdf: "https://www.biorxiv.org/content/10.1101/2024.08.07.607035v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 相似性度量对脑-网络对齐的影响
tldr: 在人工神经网络与生物视觉系统的比较中，常用表征相似性分析等度量来评估模型与大脑的对齐程度。本研究指出，相似性度量的选择对结论影响巨大：不同度量下，系统的层次对应关系和模型的生物似真性排名可能截然相反。通过重新分析先前研究，作者发现一个度量下的最佳模型在另一度量下可能表现最差，导致原有结论翻转或失效。这表明不同度量捕捉相似性的不同方面，提醒研究者应以审慎态度看待此类比较。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-08-07-607035-v2/fig-006.webp\", \"caption\": \"Fig. 1 Asking how the choice of measure matters when comparing brain data with neural network activities. Activations from Brain and Model are extracted for a shared N Stimuli utilizing various methods (e.g., single-unit recordings, MEG, EEG, fMRI). These activations are compared using a function that outputs a similarity score. Some choices for this function are listed (9 chosen for this paper). Measures have various theoretical similarities, and the main differences are highlighted. These similarity scores are then used to make various conclusions, such as which network is better and hierarchical correspondence. An ideal example is shown. Images used are sourced from commons.wikimedia.org\", \"page\": 4, \"index\": 6, \"width\": 737, \"height\": 529}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-08-07-607035-v2/fig-009.webp\", \"caption\": \"Fig. 2 Across measures, higher brain areas tend to best correspond to higher levels in the neural networks. (A) We first find the depth of the best fitting layer for each brain region, identified using the shared 1,000 NSD images. (B) This data is plotted for Alexnet for multiple measures. (C) We repeat this for 3 other standard ImageNet trained models using sparse random projection as dimensionality reduction. Layer depth is normalized with 0 being the first layer and 1 the output layer. A slight jitter is added to the X-axis to make overlapping points more visible.\", \"page\": 12, \"index\": 9, \"width\": 764, \"height\": 550}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-08-07-607035-v2/fig-004.webp\", \"caption\": \"Fig. 3 Similarity measures show weak correlations across layers of AlexNet (A) For each pair of measures, we compute the correlation between their layer-wise similarity scores across AlexNet layers for a given brain region and dataset. (B) This generates a 9×9 Measure Similarity Matrix (MSM) showing how consistently different measures respond across layers. (C) We compute MSMs for all 32 brain region/dataset combinations and average them to reveal overall measure relationships. (D) Pairwise comparisons of MSMs using Kendall’s τ show that measures are more consistent within the same dataset than across different datasets. This also highlights, that the use of dimensionality reduction significantly affects the relationships between metrics.\", \"page\": 14, \"index\": 4, \"width\": 873, \"height\": 579}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-08-07-607035-v2/fig-001.webp\", \"caption\": \"Fig. 4 The choice of Measure affects the preferred models. (A) We obtain a score for each model (for a specific region and measure) by first computing similarity with each block of the model and choosing the best one. (B) Using these scores, we rank the models for each measure separately, with the transparent lines indicating how each model’s rankings change from one measure to the next. Models are colored with their rank under linear predictivity, this coloring highlights that some of the best models under linear predictivity end up as the worst under other measures. (C) Similarity matrices of pairwise rank (Spearman) correlations for ranks of models under different measures for V1 (D) and again for VVS.\", \"page\": 15, \"index\": 1, \"width\": 833, \"height\": 571}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-08-07-607035-v2/fig-010.webp\", \"caption\": \"Fig. 5 Some measures seem misleadingly good while others appear disappointingly bad.\", \"page\": 16, \"index\": 10, \"width\": 729, \"height\": 321}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-08-07-607035-v2/fig-008.webp\", \"caption\": \"Fig. 6 Simulations highlight metric disagreement for functional (non-noise) reasons.\", \"page\": 17, \"index\": 8, \"width\": 712, \"height\": 444}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-08-07-607035-v2/fig-007.webp\", \"caption\": \"Fig. 7 Conclusions about Self-supervised models or multi-modal models fitting brain data better than baseline models are highly fragile to measure choice. We replicate results comparing (C) Unsupervised (IPCL) vs. Category Supervised Learning [22] and (B) Language-Only vs. Language+Vision models [23]. The meaning of each quadrant is defined in (A). We utilize the same datasets as in the papers (ObjectOrientation and InanimateObjects for (C) and NSD for (B)). In both cases we scale the results by the untrained model such that the location of the data point for each metric relative to the dashed lines highlights different potential conclusions . In (C) we see that untrained models do better than both relevant models for many metrics whereas we see in (B) almost all metrics are on-diagonal and no conclusions can be made. (D) Highlights statistical tests comparing the untrained and supervised models as for the conclusions in [22] to hold, training must have an effect. We see statistically significant effects putting either model significantly better than the other depending on the measure. This is the most concerning in early visual cortex (EarlyV) with the Object Orientation dataset showing statistical significance in opposite directions for RSA and LP. The scores for SM are scaled down by a factor of 10 to keep it in the same scale as the rest of the metrics. Error bars show ± standard error.\", \"page\": 19, \"index\": 7, \"width\": 639, \"height\": 782}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-08-07-607035-v2/fig-002.webp\", \"caption\": \"Fig. 8 Matching the spatial structure of brains only makes models more brainlike for a limited choice of measures. Replotting Figure 6 (B) from Margalit 2024 [28] with 9 measures (NSD VVS without Dimensionality Reduction). The dots represent which level of spatial correlation leads to the best alignment for each learning rule. The gray line denotes the Paper’s chosen value that matches topographic properties of the brain such as pinwheels. Error bars show ± standard error.\", \"page\": 21, \"index\": 2, \"width\": 656, \"height\": 698}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-08-07-607035-v2/fig-005.webp\", \"caption\": \"Fig. A.1 Hierarchy is not recovered when utilizing the model-to-brain method on brainto-brain. Hierarchy comparisons between subjects in NSD shared 1000. We align each brain area to the other brain areas across subjects, the Y axis indicated the source and the X the target in every metric, therefore the asymmetrical measures have different upper and lower triangles. rLP is therefore also the transpose of LP. Akin to model-brain comparisons, we only compare hierarchy across subjects (e.g. subject one’s V1 is never aligned to their V2) We see that metrics like LP are unable to recover hierarchy (indicated by the off-diagonal red circles).\", \"page\": 33, \"index\": 5, \"width\": 716, \"height\": 675}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-08-07-607035-v2/fig-003.webp\", \"caption\": \"Table 1 Information for the measures utilized in our analysis.\", \"page\": 34, \"index\": 3, \"width\": 962, \"height\": 223}]"
motivation: 探究在神经网络与大脑对齐研究中，相似性度量的选择是否以及如何影响科学结论。
method: 重新分析先前视觉领域的研究，系统比较多种相似性度量下模型与大脑表征的对应关系及模型排名。
result: 度量选择导致层级对应和模型排名发生剧烈变化，最优模型在不同度量下可能截然对立，先前的结论可能逆转或消失。
conclusion: 不同相似性度量反映不同维度的相似性，基于单一度量的对齐结论不可靠，应当保持批判性审视。
---

## 摘要
深度神经网络被广泛用于模拟生物感知和行为，这使得人工系统与生物系统之间的异同具有重要影响。如果某种原理（如自监督学习）产生的模型与生物相似，这被视为同一原理塑造生物系统的证据。但人工系统与生物系统相似的含义却很复杂。一种流行的方法使用表征相似性分析等相似性度量，比较相同刺激的表征。然而，科学问题很少明确哪种度量合适，这引出一个关键问题：结论是否依赖于这种选择？我们聚焦于视觉，表明度量选择既影响系统间的层级对应关系，也影响哪些人工系统最接近生物的排序。重新分析先前的研究，我们发现这种选择影响巨大：在一种度量下最优的模型，在另一种度量下往往最差，先前的结论可能会反转或消失。不同的度量捕捉了相似性的根本不同方面，因此对这类比较保持健康的怀疑态度是正当的。

## Abstract
Deep neural networks are widely used to model biological perception and behavior, making the similarities and differences between artificial and biological systems consequential. If a principle (e.g. self-supervised learning) produces a model resembling biology, this is taken as evidence the same principle shapes the biological system. But what it means for an artificial system to be similar to a biological one is complex. A popular approach compares representations of identical stimuli using a similarity measure like Representational Similarity Analysis. Yet scientific questions rarely specify which measure is appropriate, raising a key question: do conclusions depend on this choice? Focusing on vision, we show that measure choice influences both hierarchical correspondence between systems and the ranking of which artificial systems are most biological. Reanalyzing prior studies, we find the choice hugely consequential: models best under one measure are often worst under another, and prior conclusions can flip or dissolve. Different metrics capture fundamentally different aspects of similarity, warranting healthy skepticism toward such comparisons.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

*   **关联方向**：高度相关。本文直接探讨了在fMRI表征、大脑编码与解码、表征对齐等研究中，相似性度量（如RSA, CKA, 线性预测）的选择如何从根本上影响科学结论。
*   **启发与意义**：该文警示读者，依赖单一度量得出的“模型更类脑”或“层级对应”结论可能是脆弱的，甚至错误的。它为理解该领域内众多相互矛盾的发现提供了关键的方法论视角。
*   **可借鉴点**：可以借鉴其分析范式，在自己的研究中系统比较多种度量（如同时使用RSA, CKA, 线性预测, Procrustes距离），并明确讨论不同度量所揭示的相似性的“性质”而非仅仅“程度”。
*   **阅读建议**：对于所有从事模型-大脑对齐（尤其是视觉fMRI和编码模型）的研究者，本文是必读文献。它提供了极具操作性的指南和深刻的批判性思维，能够显著提升研究的严谨性。

---

### 1. 论文的核心问题与整体含义

*   **研究背景与动机**: 在神经AI（NeuroAI）领域，研究者常通过比较人工神经网络与生物大脑对相同刺激的内部表征（如在fMRI、电生理数据上）来推断塑造大脑的计算原理。例如，若自监督模型比纯监督模型更能预测脑活动，便认为自监督是大脑的学习原则。
*   **核心问题**: 这种比较严重依赖于一个关键的、但往往未被充分论证的选择：**使用何种相似性度量（Similarity Measure）**。
*   **整体含义**: 本文的核心目标是系统性地检验这个“度量选择”问题。作者假设并提出证据表明，科学结论（如模型的“类脑”程度排名、网络层与脑区的层级对应关系）**极度依赖于所选用的度量**，而非一个公认的、稳定的神经计算事实。这为整个领域比较研究的可靠性敲响了警钟。

### 2. 论文提出的方法论：核心思想与关键技术细节

本文并非提出一个新的度量，而是**系统性地评估和比较了现有9种主流表征相似性度量**，分析它们在同一套数据和模型上得出一致结论的能力。其核心思想是：通过大规模、多维度的实证比较，揭示不同度量的数学特性如何导致迥异的科学推断。

#### 2.1 被评估的相似性度量体系

作者选取了9个覆盖不同理论特性的度量，并按其核心思想分类：

*   **基于线性映射（预测）的度量 (Fitting Measures)**
    *   **线性可预测性 (LP)**: 使用岭回归，用模型特征预测大脑体素反应，以测试集 $R^2$ 为得分。**关注大脑反应能否被模型特征线性解码**，较为宽松。
    *   **逆向线性可预测性 (rLP)**: 用大脑体素反应预测模型单元活动。**关注模型特征能否被大脑反应线性解码**，对模型包含大脑所无的冗余信息有惩罚。
    *   **偏最小二乘回归 (PLS)**: 寻找模型与大脑之间最主导的共变模式进行预测。比LP更保守，可防过拟合。
    *   **基于体素编码的RSA (veRSA)**: 先用岭回归将模型特征映射到大脑空间，再对预测出的体素活动进行RSA。结合了拟合与几何比较。

*   **基于表征几何的度量 (Non-Fitting Measures)**
    *   **表征相似性分析 (RSA)**: 计算刺激对之间（$M×M$）的差异矩阵（RDM），再计算两个RDM上三角部分的相关性。**关注系统如何组织刺激，即哪些刺激相似、哪些不同**。
    *   **中心核对齐 (CKA)**: 使用矩阵范数 $CKA(X, Y) = \frac{||X^TY||_F^2}{||X^TX||_F ||Y^TY||_F}$ 来衡量两个表征矩阵的整体几何相似性。计算快速，但可能由少数主成分驱动。

*   **基于单元级别对齐的度量 (Unit Level Measures)**
    *   **成对匹配 (Pairwise Matching)**: 为模型每个单元寻找大脑中相关性最高的单元，计算测试集上这些配对的相关性均值。**最严格**，要求单元级别的精确对应。
    *   **软匹配 (Soft Matching)**: 通过求解一个最优传输问题 $d_T(X, Y) = \sqrt{\min_{P} \sum P_{ij}||x_i - y_j||^2}$，寻找两组单元间的软对齐。对旋转敏感，但不强制一对一映射。
*   **基于形状的度量**
    *   **普鲁克蒂斯距离 (Procrustes Distance)**: 通过正交变换对齐两个表征，计算其在共同子空间中的角距离。要求两个表征具有相似的几何“形状”。

### 3. 实验设计

#### 3.1 数据集与场景
*   **大脑数据集**:
    *   **NSD (fMRI)**: 来自8名被试的7T fMRI数据，包含早期(V1-V4)、腹侧(VVS)、背侧(DVS)和外侧(LVS)视觉区域的ROI。使用515和1000张共享图像作为刺激集。
    *   **物体朝向数据集 (fMRI)**: 4被试，3T，40张不同朝向的物体图像。
    *   **无生命物体数据集 (fMRI)**: 8被试，3T，72张物体图像。
    *   **猴子V1数据集 (电生理)**: 来自2只猴子的单神经元记录，7250张图像刺激。
    *   **多猴数据集 (电生理)**: 来自6只猴子下颞叶皮层(IT)的微电极阵列记录，640张图像刺激。

*   **神经网络模型**: 包括AlexNet、VGG、ResNet、Vision Transformers (ViT)等标准架构的ImageNet预训练模型，以及特定训练方式的模型，用于验证特定科学假设：
    *   **IPCL系列**: 类别监督、自监督(IPCL)和随机初始化版本。
    *   **SLIP系列**: 纯语言监督、纯视觉自监督、视觉+语言多模态模型。
    *   **TDANN系列**: 结合空间损失、在不同监督方式下训练的ResNet18。

#### 3.2 实验基准与对比方法
实验并非提出新基准，而是围绕三个递进的核心问题，比较9种度量在回答这些问题时的一致性：
*   **层级对应**: 找出与每个脑区（V1至VVS）最匹配的网络层，看不同度量是否给出类似的“浅层对应早期脑区，深层对应高级脑区”的映射图。
*   **模型排名**: 在给定的脑区上，根据9种度量分别对25个模型进行类脑程度排名，计算排名之间的相关性，并可视化模型排名的波动。
*   **前提结论复现**: 选取三篇代表性工作，使用其原始模型和数据，仅改变相似性度量进行重新分析，检验原始论文的结论是否成立。

### 4. 资源与算力

**论文中未明确提及所使用的GPU型号、数量或具体训练时长。** 所进行的计算主要为模型的推理（提取特征）以及表征相似性度量之间的比较计算。这类分析对算力要求远低于模型训练，通常在普通计算服务器甚至高端个人工作站上即可完成。论文的贡献在于方法论评价而非大规模模型训练。

### 5. 实验数量与充分性

*   **实验数量**: 论文设计并执行了相当全面的实验比较。
    *   覆盖了**9种相似性度量**。
    *   使用了**5个不同类型和模态的大脑数据集**。
    *   对比了超过**25个具有不同架构和训练范式的神经网络**。
    *   对**3篇已发表的独立高影响力论文**的结论进行了基于度量的重分析。
    *   还包括了**模拟实验**、**脑-脑层级比较**、**参考基线**（像素、类别）和**降维影响**的消融分析。
*   **充分性与公平性**: 实验设计**非常充分且客观**。通过统一的数据集模型、管道和详尽的量化比较（如度量间相关系数、排名波动），作者系统地剖析了问题的严重性。对先前研究的复现性分析选择了数据和代码完全公开的工作，且是作者按顺序分析的前三篇，有效避免了“摘樱桃”式的结果挑选，增强了结论的说服力。

### 6. 论文的主要结论与发现

1.  **层级对应关系不稳健**: 哪个网络层最好地对应哪个脑区，严重依赖于所选度量。有些度量（软匹配、成对匹配）甚至完全无法恢复视觉通路的层级结构。此外，部分在模型-大脑比较中表现出层级对应能力的度量（如线性预测），在用相同方法比较“脑-脑”数据时也失效了。
2.  **度量间经验相关性弱**: 不同相似性度量在同一网络各层上的得分相关性很低，甚至为负。降维操作和数据集的改变都会显著影响度量间的关系。
3.  **模型“类脑”排名剧烈波动**: 在一种度量下排名第一的模型，在另一种度量下可能在25个模型中排名垫底。排名的不确定性（低相关性）在脑区V1尤为突出，度量间甚至呈反相关。
4.  **核心科学结论因度量而异**: 对三篇先前研究的复现分析发现，各自的结论在更换度量后变得脆弱或反转。
    *   **自监督 vs. 监督学习**: 多个度量显示，未训练的随机初始化模型甚至优于训练后的模型。在早期视觉皮层，最常用的RSA和LP两个度量甚至得出了具有统计显著性的**相反结论**。
    *   **多模态语言监督的价值**: 几乎所有度量都表明，多模态模型相比纯视觉自监督模型，并没有一致的、稳定的提升。
    *   **拓扑网络类脑性**: 原文声称的、与生物大脑空间结构相匹配的优化目标能同时带来最佳表征对齐的结论，**仅在论文所选的特定度量下成立**。
5.  **对齐程度的评估相互矛盾**: 在主流度量下，当前模型与大脑的表征相似度，有的接近跨被试一致性参考点（噪声天花板），有的甚至低于简单的图像像素或类别基线。这意味着模型的大脑对齐程度没有一个统一的答案。

### 7. 优点：方法或实验设计上的亮点

*   **问题导向明确**: 直接挑战了NeuroAI领域中一个被广泛接受但缺乏严格检验的核心实践（单度量比较），具有极高的反思性价值。
*   **评估体系系统且苛刻**: 覆盖9种代表性度量，在多个脑区、数据集和模型集上进行“一致性压力测试”，而非孤立考察某个度量的理论性质。
*   **从方法论反思到结论纠偏**: 不仅停留在度量之间的数字比较，更关键地复现并质疑了领域内已发表的具体科学论断，直接将问题从抽象的方法论拉回到具体的科学实践中。
*   **可复现性强**: 作者公开了所有代码和数据获取来源，使得任何研究者都可以复现和扩展这一分析。

### 8. 不足与局限

*   **未提供最终解决方案**: 论文有力地指出了问题，但没有给出一个明确的、可操作的“最佳实践”或统一的度量选择框架。它更多地是呼吁一种结合理论假设的审慎态度，而非提供一个新工具。
*   **视觉任务的局限性**: 所有分析均聚焦于视觉系统的静态图像表征比较。结论是否能完全推广到其他模态（听觉、语言）或时序动态任务中尚待考证，尽管文末提到了在语言模型上的初步证据。
*   **统计惯例的复杂性**: 作者有意回避了提供统一的统计处理方法（如噪声天花板的标准计算），因为这一选择本身亦充满争议和自由度。这既是严谨的表现，但同时也使得读者无法直接复制其完整的统计推断流程。
*   **数据集与模型的时效性**: 评估所用的部分模型（如AlexNet、VGG）并非当前最先进，但它们代表了领域内经典和广泛被评估的对象，这更多是分析历史研究时的必然选择，不算硬伤。

### 9. 研究价值与阅读建议

*   **关联方向**: 该方向与读者的研究领域高度相关。读者所在的“脑解码”、“fMRI表征”和“表征对齐”等研究路径，其核心方法论正是本文所批判分析的对象。
*   **启发与意义**: 本文提供了一个重要的“方法论免疫”，提醒你对自己和他人研究中使用单一相似性度量得出的任何阳性结果保持警惕。它深刻地揭示了，你报告中更大的类脑分数可能仅仅反映了你所选工具的“口味”，而非模型真实的类脑性。
*   **可借鉴点**: 可以直接采纳其 **多度量报告与解释** 的建议。在你的下一次分析中，同时在结果部分报告RSA、CKA、线性预测（LP）和Procrustes距离的结果，并花篇幅讨论它们的一致与分歧之处，这将对冲单一度量带来的结论风险，大幅提升工作的严谨性。
*   **阅读建议**: 这篇文章是刷新研究范式的必需读物，应精读其“方法”和“结果”部分，理解每种度量的特性和其导致的排名差异案例。尤其值得仔细查看Figure 7及其相关论述，因为其展示了度量选择如何直接在统计显著性层面反转结论，这是对你未来研究结论最直接的威胁。

（完）
