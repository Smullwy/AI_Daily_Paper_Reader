---
title: Selective convergence and graded divergence of hippocampal and amygdala subregions using functional connectivity
title_zh: 使用功能连接研究海马和杏仁核亚区的选择性收敛与梯度发散
authors: "Erigüc, D. Y., Marsiglia, M., John, A., Bayrak, S., Wan, B., Jakovcic, A., DeKraker, J., Royer, J., Bernhardt, B., Valk, S. L."
date: 2026-07-18
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.06.736898v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 跨被试海马和杏仁核亚区的fMRI功能连接
tldr: 本研究利用722名年轻人静息态fMRI数据，首次在统一皮层框架下量化海马与杏仁核亚区的功能连接模式，引入优势度和共享度指标，揭示两者在直接关联与广泛共波动中呈现选择性收敛与梯度分化：共享旁边缘和默认网络，但海马偏向默认与视觉网络，杏仁核偏向腹侧注意与边缘网络，且沿海马长轴变化，杏仁核旁板层核最似海马。研究阐明了内侧颞叶亚区在皮层中的结构化共表征机制。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-06-736898-v2/fig-001.webp\", \"caption\": \"Figure 1. Amygdalar and hippocampal subregion delineations and subregion-to-cortex functional connectivity profiles. For each estimator, union of seed-cortex FC maps were used as masks for the following dominance and sharedness analyses. For each seed, cortical maps show the top-10% positive seed-cortex\", \"page\": 12, \"index\": 1, \"width\": 960, \"height\": 1231}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-06-736898-v2/fig-002.webp\", \"caption\": \"Figure 2. Dominance/sharedness model reveals complementary hippocampus-amygdala organization across cortex. Only left hemisphere brain maps are shown for visualization purposes, analyses are conducted on the entire brain. Right hemisphere results can be found on Supplementary Figure 3. For each cortical parcel, we quantified (i) dominance: relative preference for amygdala vs hippocampus connectivity, and (ii) sharedness: balanced co-representation of both structures. The model is computed from seed-wise Top-10% parcel memberships (after structure-wise normalization), such that dominance reflects the signed difference between the number of amygdala and hippocampus contributions (positive = amygdala-dominant, negative = hippocampus-dominant), whereas sharedness is high only where both contributions are simultaneously strong (high count) and balanced. All cortical maps are accompanied by Yeo-7 summaries (bars = network means, lines = 95% CI, dots = parcels). Asterisks denote spatial correspondence significance using Moran spectral randomization (* pMSR < 0.05, ** pMSR < 0.01, *** pMSR < 0.001). A) Cortical sharedness maps for GLASSO and Pearson. Higher values indicate stronger balanced hippocampus-amygdala co-representation. Cross-estimator correspondence scatter plots (i) comparing GLASSO vs Pearson sharedness. B) Cortical dominance maps for GLASSO and Pearson. Positive values indicate amygdala preference; negative values indicate hippocampal preference; values\", \"page\": 15, \"index\": 2, \"width\": 960, \"height\": 1112}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-06-736898-v2/fig-003.webp\", \"caption\": \"Figure 3. Seed-specific cortical preference and cross-structure seed-seed coupling. Only left hemisphere brain maps (and intrinsic coupling matrices) are shown for visualization purposes, analyses are conducted on the entire brain. Right hemisphere results can be found on Supplementary Figure 3. A) Hippocampal-cortical and amygdalar-cortical preferences were mapped onto hippocampal (top) and amygdalar subregions (bottom) using a Leave-One-Seed-Out (LOSO) strategy to reduce circularity. For each amygdala nucleus and hippocampal subregion, group-level preference to dominance (left) and sharedness (right) scores were additionally projected onto the corresponding subregions. Results are displayed separately for the GLASSO and Pearson estimators. For preference to dominance, positive values (warmer colors) indicate preferential weighting toward the amygdala-dominant cortex, whereas negative values (colder colors) toward the hippocampus-dominant cortex, and values near zero indicate balanced/weak preference. For preference to sharedness, higher values (lighter colors) indicate preferential weighting toward cortical parcels where both structures contribute strongly and in balanced contributions from both hippocampus and amygdala. B) Hippocampal-amygdalar FC between each hippocampal subfield and amygdalar nucleus pair is displayed as a heatmap, separately for GLASSO (top) and Pearson (bottom), ipsilateral shown only for simplicity). The color scale represents positive FC strength summarized as the unconditional positive mean across subjects (expected +r). Marginal bar plots show mean cross-structure coupling for each seed, and column-wise min-max scaled matrices highlight relative interaction structure\", \"page\": 18, \"index\": 3, \"width\": 960, \"height\": 1056}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-06-736898-v2/fig-004.webp\", \"caption\": \"Figure 4. Joint amygdala and hippocampus to cortex gradients. Only left hemisphere brain maps are shown for visualization purposes, analyses are conducted on the entire brain. Right hemisphere results can be found on Supplementary Figure 3. All cortical surface maps are accompanied with plots showing the relevant values across Yeo-7 networks (bars = network means, lines = 95% CI, dots = parcels). A) Primary (G1) and secondary (G2) connectivity gradients of hippocampal-cortical (top) and amygdalar-cortical (bottom) FC. G1 and G2 are projected onto hippocampal and amygdalar subregions, separately for the GLASSO and Pearson estimators. Regions exhibiting similar colors reflect similar FC profiles, whereas divergent colors indicate greater dissimilarity in connectivity organization. B) Cortical projections of the joint hippocampal-cortical and amygdalar-cortical gradients (G1 and G2), estimated separately for the GLASSO (left) and Pearson (right) estimators. Higher projection values (light colors toward +1) indicate cortical parcels that are more strongly coupled with subregions with positive gradient scores (light colors in Panel A). Lower projection values (cool colors toward -1) indicate association with subregions located at negative ends of gradients (cool colors in Panel A). For each cortical projection, values are further summarized across the Yeo-7 networks. C) Heatmaps depict parcel-wise correspondence between cortical projections of joint hippocampal- and amygdalar-cortex gradients and canonical cortical functional gradients (CrtFC G1-G3), together with cortex-level amygdala-hippocampus dominance and sharedness maps. Results are shown separately for GLASSO and Pearson estimators. Asterisks indicate the significance of spatial correspondence assessed via Moran Spectral Randomization and FDR-corrected (* qMSR<0.05, **qMSR<0.01, *** qMSR<0.001).\", \"page\": 21, \"index\": 4, \"width\": 960, \"height\": 937}]"
motivation: 澄清海马与杏仁核亚区如何联合嵌入分布式皮层系统。
method: 采用722名HCP青年rs-fMRI，通过Pearson相关和GLASSO偏相关构建皮层连接，并定义优势度与共享度指标。
result: 两个结构均与旁边缘和默认网络有共享连接，但海马更特异性地耦合默认和视觉网络，杏仁核偏向腹侧注意和边缘网络；广泛共波动还涉及感觉运动皮层。
conclusion: 海马和杏仁核亚区以结构化、空间组织化的共表征方式嵌入皮层，而非孤立的离散系统。
---

## 摘要
海马和杏仁核是邻近的内侧颞叶结构，与记忆和情感相关，但它们的亚区如何共同嵌入分布式等皮质系统仍不清楚。我们使用来自722名人类连接组计划青年成人的静息态功能磁共振成像，在统一的皮层全局框架内映射海马和杏仁核亚区，通过皮尔逊相关（广泛共波动）和GLASSO偏相关（相对更直接的功能关联）量化亚区到皮层的连接。我们引入了两个基于计数的指标：主导性（海马与杏仁核的相对表征）和共享性（平衡共表征）。直接关联显示，这两个结构都与旁边缘区域以及较弱的默认模式区域共享耦合，而更广泛的共波动扩展到躯体运动和旁边缘网络。发散模式取决于估计器：在直接关联下，海马亚区优先与默认模式和视觉网络耦合，而杏仁核核团则优先与腹侧注意和边缘网络耦合；更广泛的共波动还涉及杏仁核的躯体运动皮层和海马的视觉皮层。这些原则在亚区/核团层面成立，沿海马长轴变化，并确定旁层核为最类似海马的杏仁核亚区。数据驱动的连接梯度证实了两个系统的分离和精细尺度的交错。因此，海马和杏仁核亚区并非作为离散系统嵌入皮层，而是通过结构化、空间组织的共表征方式嵌入。

## Abstract
The hippocampus and amygdala are neighboring medial temporal lobe structures linked to memory and affect, yet how their subregions are jointly embedded within distributed isocortical systems remains unclear. Using resting-state fMRI from 722 Human Connectome Project Young Adult participants, we mapped hippocampal and amygdalar subregions within a unified cortex-wide framework, quantifying subregion-to-cortex connectivity via Pearson correlation (broad co-fluctuation) and GLASSO partial correlation (relatively more direct functional association). We introduced two count-based metrics: dominance (relative hippocampal vs. amygdalar representation) and sharedness (balanced co-representation). Direct associations showed both structures sharing coupling with paralimbic areas and, more modestly, default mode regions, while broader co-fluctuations extended into somatomotor and paralimbic networks. Divergence patterns depended on the estimator: hippocampal subregions preferentially coupled with default-mode and visual networks under direct association, while amygdalar nuclei favored ventral attention and limbic networks; broader co-fluctuations additionally implicated somatomotor cortex for amygdala and visual cortex for hippocampus. These principles held at the subfield/nucleus level, varying along the hippocampal long axis and identifying the paralaminar nucleus as the most hippocampus-like amygdalar subregion. Data-driven connectivity gradients confirmed both systems' separation and fine-scale interdigitation. Hippocampal and amygdalar subregions are thus embedded in cortex not as discrete systems, but through structured, spatially organized co-representation.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：弱相关。本文关注内侧颞叶亚区的皮层嵌入模式，与“脑解码/编码”直接关联较弱，但在fMRI表征挖掘和多视角约束方面提供间接启发。
- **启发与意义**：提出了一种在统一皮层参考系中比较不同结构亚区功能表征的框架，为设计跨区域对齐的特征空间和先验约束提供了新思路。
- **可借鉴点**：主导性/共享性计数指标及其与两种连接估计器（Pearson/GLASSO）的组合使用方式，可移植到其他多区域fMRI表征比较任务中。
- **阅读建议**：主读方法部分关于双估计器联合表征和梯度投影的分析流程，重点关注如何将“相对表征偏好”量化为可解释的皮层地图，为multi-view约束设计提供参考。

## 1. 论文的核心问题与整体含义
- **核心问题**：海马与杏仁核作为内侧颞叶相邻结构，各自包含异质性亚区（海马亚区、杏仁核亚核），这些亚区如何共同嵌入分布式等皮质系统，而非仅作为独立系统被研究。
- **研究缺口**：过去研究多分别刻画海马或杏仁核的全脑连接，缺乏在同一皮层参考框架下对两者亚区层级联合组织模式的量化，且未区分直接关联与间接共波动的贡献。
- **整体含义**：揭示海马与杏仁核亚区在皮层中呈现“选择性收敛”与“梯度发散”，即不是简单的区域分离，而是沿连续梯度结构化共表征，部分区域平衡共享，部分区域一方占优。

## 2. 论文提出的方法论
- **核心思路**：在统一的皮层分区空间中，使用两种功能连接估计器（全能相关与条件偏相关），定义计数型指标量化每一皮层分区的海马/杏仁核相对表征（主导性）和平衡共表征（共享性），再通过梯度嵌入提取低维联合组织轴。
- **关键技术细节**：
  - **两阶段功能连接估计**：
    - Pearson相关（$r$）：捕获广泛的共波动，包含间接依赖。
    - Graphical Lasso（GLASSO）偏相关：通过L1正则化条件化回归，近似更直接的关联，稀疏性由交叉验证确定（$\lambda$ 个体化）。
  - **计数指标构建**（在各自 top‑10% 正连接掩膜内）：
    - **主导性**：$$ \text{Dominance}_p = \frac{n_{\text{Amy},p}}{N_{\text{Amy}}} - \frac{n_{\text{Hipp},p}}{N_{\text{Hipp}}} \in [-1, +1] $$，正值代表杏仁核优势，负值代表海马优势。
    - **共享性**：$$ \text{Sharedness}_p = \left( \frac{n_{\text{Amy},p}}{N_{\text{Amy}}} + \frac{n_{\text{Hipp},p}}{N_{\text{Hipp}}} \right) \times \min\left( \frac{\cdot}{n/N} \text{ ratio} \right) $$ 达到高值和平衡时最大。
  - **种子级偏好**：留一法计算去除某种子后的群体主导性/共享性图，再用该种子的皮层连接加权平均，得出种子对特定皮层特征的偏好分数。
  - **联合梯度分析**：对完整的48（亚区）×358（皮层）连接矩阵构建亲和矩阵（归一化角核），保留 top‑10% 最近邻，扩散嵌入得到低维梯度，并反投影至皮层。
- **算法流程**（文字）：提取时间序列 → zscoring → 计算个体 Pearson/GLASSO FC → 群体平均 → 定义 top‑10% 正边掩膜 → 计算主导性与共享性 → 留一法种子偏好 → 内在交叉耦合相关 → 梯度估计与皮层投影。

## 3. 实验设计
- **数据集**：Human Connectome Project Young Adult S‑1200 2025 重处理版本，纳入722名受试（年龄28.48±3.75岁，380名女性），每人4次15分钟静息态fMRI，经标准预处理（HCP最小管线、ICA‑FIX、MSM‑All对齐等）。
- **脑区定义**：
  - 皮层：Glasser MMP 1.0 358个等皮质区（排除两个原位于海马的分区）。
  - 杏仁核：FreeSurfer基于Saygin等人概率图谱分割为9个亚核（每半球），通过软掩模加权提取时间序列。
  - 海马：HippUnfold 1.5.1 分割为CA1‑CA4及下托，再沿长轴均分前、中、后三部分，得每半球15个亚区。
- **对比/基准**：没有经典“baseline”模型，而是两种估计器（Pearson vs. GLASSO）的内部对比，以及衍生指标（主导性/共享性）的互相验证。附加验证包括：计数型与强度型主导性的相关、top 5%/15% 阈值敏感度、分裂半可靠性。
- **网络对应**：与Yeo七网络以及Margulies等人的三个经典皮层功能梯度进行空间对应比较。

## 4. 资源与算力
- 文中未提及使用的 GPU 型号、数量、训练时长等具体算力信息。
- 所有计算基于静息态 fMRI，使用公开工具（FreeSurfer、HippUnfold、Actflow toolbox、BrainSpace），算力需求主要用于个体 GLASSO 交叉验证和组水平梯度扩散嵌入，但未定量描述。

## 5. 实验数量与充分性
- **主要分析组数**（可视为多个实验）：
  1. 亚区‑皮层连接图谱可视化（两种估计器、两种掩膜）。
  2. 皮层主导性与共享性地图（两种估计器）。
  3. 主导性与共享性的网络分布、与经典皮层梯度对应、估算器间一致性。
  4. 强度主导性验证。
  5. 阈值稳定性验证（5%、10%、15%）。
  6. 种子级偏好分析（留一法）及内在交叉耦合分析。
  7. 分裂半可靠性分析（200 次随机对半分）。
  8. 联合梯度估计与皮层投影，与经典梯度及主导性/共享性的对应。
- **充分性与客观性**：实验覆盖指标定义、稳健性、个体一致性、低维组织，设计上多角度交叉验证，使用标准化空间统计矫正（Moran谱随机化），主观偏差较小，充分性高。

## 6. 论文的主要结论与发现
- **共享收敛点**：GLASSO 揭示海马和杏仁核在旁边缘/边缘系统（内侧颞叶、眶额、岛叶、颞极等）有明显共享表征，默认模式网络耦合较弱；Pearson 则显示更广泛的共享（扩展至躯体运动网络）。
- **梯度发散**：GLASSO 中视觉网络为海马主导，腹侧注意为杏仁核主导；Pearson 中躯体运动网络为杏仁核主导，视觉网络为海马主导，额顶网络呈海马主导。主导性比共享性估算器间一致性更高。
- **长轴组织**：海马后部更偏向海马优势皮层，前部趋向平衡共享皮层且内部杏仁核耦合更强，旁层核是最接近海马皮层嵌入的杏仁核亚区。
- **联合梯度**：首梯度在 Pearson 中分离海马和杏仁核，在 GLASSO 中突出海马内长轴分化；第二梯度在多维度上交叉组织亚区，证实两系统既分离又精细交错。

## 7. 优点
- **创新指标**：首次提出基于计数的“主导性”与“共享性”指标，将亚区水平的相对皮层表征量化为可解释连续图谱。
- **双估计器策略**：系统地对比全相关和条件偏相关，分离直接关联与广泛共波动，揭示不同组织层次，超越传统的单一相关分析。
- **种子级内在‑外在关联**：将局部杏仁核‑海马耦合与远端皮层共享偏好联系起来，发现非对称关系，提供了新的系统网络间交互证据。
- **多维验证**：通过强度对比、阈值稳健性、分裂半可靠性、梯度自组织等方法确保结果稳健。

## 8. 不足与局限
- **仅使用静息态**：未涉及任务态，无法阐明海马‑杏仁核在认知、情绪加工中动态皮层互动的变化。
- **计数指标的相对性**：基于 top‑10% 相对成员资格，不能直接解释为绝对连接强度，部分脑区可能仅因总体连接弱但仍进入 top‑10% 而被标记。
- **功能连接的本质**：GLASSO 偏相关仍为统计模型，非有效连接或结构连接，可能遗漏某些间接效应或受信号噪声影响。
- **皮层下信噪比**：海马和杏仁核区域 fMRI 信噪比固有较低，HCP 数据未专门优化，可能限制微小亚区差异的检测。
- **交叉种群泛化**：仅来自健康年轻成人，不涉及发育、衰老或临床群体，结论的外推需谨慎。

## 9. 研究价值与阅读建议（见第一节输出）

（完）
