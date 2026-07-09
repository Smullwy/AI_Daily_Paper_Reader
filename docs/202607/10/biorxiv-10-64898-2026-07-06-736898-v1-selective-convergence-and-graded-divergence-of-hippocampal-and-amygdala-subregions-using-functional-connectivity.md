---
title: Selective convergence and graded divergence of hippocampal and amygdala subregions using functional connectivity
title_zh: 使用功能连接的海马和杏仁核亚区选择性聚合与梯度发散
authors: "Erigüc, D. Y., Marsiglia, M., John, A., Bayrak, S., Wan, B., Jakovcic, A., DeKraker, J., Royer, J., Bernhardt, B., Valk, S. L."
date: 2026-07-07
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.06.736898v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 跨722名被试的fMRI功能连接映射
tldr: 本研究利用静息态fMRI数据，探究海马和杏仁核子区域在皮层功能连接中的共表征模式。通过Pearson相关和GLASSO偏相关，量化了连接的优势度和共享度，发现两者与旁边缘和默认网络共享耦合，但海马更倾向默认和视觉网络，杏仁核偏向腹侧注意和边缘网络。连接梯度揭示了系统的分离与交错，强调它们非离散系统，而是结构化地嵌入皮层。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-06-736898-v1/fig-001.webp\", \"caption\": \"Figure 1. Amygdalar and hippocampal subregion delineations and subregion-to-cortex functional connectivity profiles. For each estimator, union of seed-cortex FC maps were used as masks for the following dominance and sharedness analyses. For each seed, cortical maps show the top-10% positive seed-cortex\", \"page\": 12, \"index\": 1, \"width\": 960, \"height\": 1231}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-06-736898-v1/fig-002.webp\", \"caption\": \"Figure 2. Dominance/sharedness model reveals complementary hippocampus-amygdala organization across cortex. Only left hemisphere brain maps are shown for visualization purposes, analyses are conducted on the entire brain. Right hemisphere results can be found on Supplementary Figure 3. For each cortical parcel, we quantified (i) dominance: relative preference for amygdala vs hippocampus connectivity, and (ii) sharedness: balanced co-representation of both structures. The model is computed from seed-wise Top-10% parcel memberships (after structure-wise normalization), such that dominance reflects the signed difference between the number of amygdala and hippocampus contributions (positive = amygdala-dominant, negative = hippocampus-dominant), whereas sharedness is high only where both contributions are simultaneously strong (high count) and balanced. All cortical maps are accompanied by Yeo-7 summaries (bars = network means, lines = 95% CI, dots = parcels). Asterisks denote spatial correspondence significance using Moran spectral randomization (* pMSR < 0.05, ** pMSR < 0.01, *** pMSR < 0.001). A) Cortical sharedness maps for GLASSO and Pearson. Higher values indicate stronger balanced hippocampus-amygdala co-representation. Cross-estimator correspondence scatter plots (i) comparing GLASSO vs Pearson sharedness. B) Cortical dominance maps for GLASSO and Pearson. Positive values indicate amygdala preference; negative values indicate hippocampal preference; values\", \"page\": 15, \"index\": 2, \"width\": 960, \"height\": 1112}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-06-736898-v1/fig-003.webp\", \"caption\": \"Figure 3. Seed-specific cortical preference and cross-structure seed-seed coupling. Only left hemisphere brain maps (and intrinsic coupling matrices) are shown for visualization purposes, analyses are conducted on the entire brain. Right hemisphere results can be found on Supplementary Figure 3. A) Hippocampal-cortical and amygdalar-cortical preferences were mapped onto hippocampal (top) and amygdalar subregions (bottom) using a Leave-One-Seed-Out (LOSO) strategy to reduce circularity. For each amygdala nucleus and hippocampal subregion, group-level preference to dominance (left) and sharedness (right) scores were additionally projected onto the corresponding subregions. Results are displayed separately for the GLASSO and Pearson estimators. For preference to dominance, positive values (warmer colors) indicate preferential weighting toward the amygdala-dominant cortex, whereas negative values (colder colors) toward the hippocampus-dominant cortex, and values near zero indicate balanced/weak preference. For preference to sharedness, higher values (lighter colors) indicate preferential weighting toward cortical parcels where both structures contribute strongly and in balanced contributions from both hippocampus and amygdala. B) Hippocampal-amygdalar FC between each hippocampal subfield and amygdalar nucleus pair is displayed as a heatmap, separately for GLASSO (top) and Pearson (bottom), ipsilateral shown only for simplicity). The color scale represents positive FC strength summarized as the unconditional positive mean across subjects (expected +r). Marginal bar plots show mean cross-structure coupling for each seed, and column-wise min-max scaled matrices highlight relative interaction structure\", \"page\": 18, \"index\": 3, \"width\": 960, \"height\": 1056}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-06-736898-v1/fig-004.webp\", \"caption\": \"Figure 4. Joint amygdala and hippocampus to cortex gradients. Only left hemisphere brain maps are shown for visualization purposes, analyses are conducted on the entire brain. Right hemisphere results can be found on Supplementary Figure 3. All cortical surface maps are accompanied with plots showing the relevant values across Yeo-7 networks (bars = network means, lines = 95% CI, dots = parcels). A) Primary (G1) and secondary (G2) connectivity gradients of hippocampal-cortical (top) and amygdalar-cortical (bottom) FC. G1 and G2 are projected onto hippocampal and amygdalar subregions, separately for the GLASSO and Pearson estimators. Regions exhibiting similar colors reflect similar FC profiles, whereas divergent colors indicate greater dissimilarity in connectivity organization. B) Cortical projections of the joint hippocampal-cortical and amygdalar-cortical gradients (G1 and G2), estimated separately for the GLASSO (left) and Pearson (right) estimators. Higher projection values (light colors toward +1) indicate cortical parcels that are more strongly coupled with subregions with positive gradient scores (light colors in Panel A). Lower projection values (cool colors toward -1) indicate association with subregions located at negative ends of gradients (cool colors in Panel A). For each cortical projection, values are further summarized across the Yeo-7 networks. C) Heatmaps depict parcel-wise correspondence between cortical projections of joint hippocampal- and amygdalar-cortex gradients and canonical cortical functional gradients (CrtFC G1-G3), together with cortex-level amygdala-hippocampus dominance and sharedness maps. Results are shown separately for GLASSO and Pearson estimators. Asterisks indicate the significance of spatial correspondence assessed via Moran Spectral Randomization and FDR-corrected (* qMSR<0.05, **qMSR<0.01, *** qMSR<0.001).\", \"page\": 21, \"index\": 4, \"width\": 960, \"height\": 937}]"
motivation: 海马和杏仁核作为内侧颞叶的相邻结构，其子区域如何共同嵌入分布式皮层系统仍不清楚。
method: 采用722名被试的静息态fMRI，使用Pearson相关与GLASSO偏相关计算功能连接，并引入优势度和共享度指标进行分析。
result: 直接关联显示两者共享旁边缘和默认网络耦合，但海马偏好默认和视觉网络，杏仁核偏好腹侧注意和边缘网络；连接梯度证实分离与交错。
conclusion: 海马和杏仁核子区域并非离散系统，而是通过结构化、空间组织的共表征嵌入皮层。
---

## 摘要
摘要 海马和杏仁核是相邻的内侧颞叶结构，与记忆和情感有关，但它们的亚区如何共同嵌入分布式等皮质系统仍不清楚。利用722名人类连接组计划青年成人参与者的静息态功能磁共振成像数据，我们在一个统一的全脑皮层框架内绘制了海马和杏仁核亚区，通过皮尔逊相关（广泛共波动）和GLASSO偏相关（相对更直接的功能关联）量化了亚区到皮层的连接。我们引入了两种基于计数的指标：主导性（海马相对于杏仁核的表征）和共享性（平衡的共同表征）。直接关联显示两个结构都与旁边缘区域共享耦合，与默认模式区域的耦合较弱，而更广泛的共波动延伸到感觉运动和旁边缘网络。发散模式取决于估计器：在直接关联下，海马亚区优先与默认模式和视觉网络耦合，而杏仁核核团倾向于腹侧注意和边缘网络；更广泛的共波动还涉及杏仁核的感觉运动皮层和海马的视觉皮层。这些原则在亚区/核团水平上成立，沿海马长轴变化，并确定副层核是最类似海马的杏仁核亚区。数据驱动的连接梯度证实了两个系统的分离和精细尺度的交错。因此，海马和杏仁核亚区不是作为离散系统嵌入皮层，而是通过结构化的、空间组织的共同表征。

## Abstract
AbstractThe hippocampus and amygdala are neighboring medial temporal lobe structures linked to memory and affect, yet how their subregions are jointly embedded within distributed isocortical systems remains unclear. Using resting-state fMRI from 722 Human Connectome Project Young Adult participants, we mapped hippocampal and amygdalar subregions within a unified cortex-wide framework, quantifying subregion-to-cortex connectivity via Pearson correlation (broad co-fluctuation) and GLASSO partial correlation (relatively more direct functional association). We introduced two count-based metrics: dominance (relative hippocampal vs. amygdalar representation) and sharedness (balanced co-representation). Direct associations showed both structures sharing coupling with paralimbic areas and, more modestly, default mode regions, while broader co-fluctuations extended into somatomotor and paralimbic networks. Divergence patterns depended on the estimator: hippocampal subregions preferentially coupled with default-mode and visual networks under direct association, while amygdalar nuclei favored ventral attention and limbic networks; broader co-fluctuations additionally implicated somatomotor cortex for amygdala and visual cortex for hippocampus. These principles held at the subfield/nucleus level, varying along the hippocampal long axis and identifying the paralaminar nucleus as the most hippocampus-like amygdalar subregion. Data-driven connectivity gradients confirmed both systems separation and fine-scale interdigitation. Hippocampal and amygdalar subregions are thus embedded in cortex not as discrete systems, but through structured, spatially organized co-representation.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与读者研究方向（脑解码/神经先验/fMRI表征/多视角约束/表征对齐）呈 **弱相关**。
- **启发与意义**：本文提供了高分辨率、多指标（直接/间接连接）的 fMRI 表征构建范式，其“优势度”与“共享度”框架可为设计多视角解耦或约束性先验提供跨脑区关系量化的思路。
- **可借鉴点**：可借鉴 GLASSO 估计相对直接连接以降低间接共变混淆的方法论，用于提升脑解码或编码模型中输入特征的连接特异性。
- **阅读建议**：建议关注其方法论（尤其是 GLASSO 与 Pearson 的互补分析逻辑、指标构建）及其发现的“亚区-皮层”多模态嵌入模式，作为设计 fMRI 解码或表征对齐约束时的参考，但无需深入其神经生物学讨论。

## 1. 论文的核心问题与整体含义
- **核心问题**：海马和杏仁核作为内侧颞叶中相邻且功能交互密切的结构，它们的多个亚区是如何在功能上共同嵌入并组织于整个大脑皮层网络中的？具体探讨它们在哪里表现出“选择性聚合”，又在哪里呈现“梯度发散”。
- **整体含义**：研究旨在超越将海马和杏仁核视为独立、均一结构的传统视角，在一个统一的、全脑皮层参考框架下，揭示这两个系统于其亚区水平上的宏观功能组织原则。这有助于理解记忆与情感等不同认知过程是如何通过共享和特异的皮层回路进行整合与分离的。

## 2. 论文提出的方法论
- **核心思想**：采用两种互补的功能连接（FC）估计器来捕捉不同尺度的关联（Pearson 相关捕捉广泛共波动，GLASSO 偏相关估算较直接的连接），并引入两个基于计数的指标，量化皮层区域接收海马与杏仁核输入的相对优势与平衡程度。最后通过扩散嵌入将两者的亚区置于一个共同的低维皮层嵌入空间中。
- **关键技术细节**：
    - **功能连接估计**：
        - **Pearson 相关**：计算亚区与皮层区域时间序列的皮尔逊相关系数，反映包括间接依赖在内的广泛共波动。
        - **GLASSO 偏相关**：使用图学习套索方法估计稀疏的偏相关矩阵。通过分块交叉验证优化每个被试的正则化参数 $\lambda$，以最小化验证集上的负对数似然，获得条件独立性更强、在统计上更直接的连接估计。
    - **新指标构建（基于方法特定 mask 内的 Top 10% 连接） **：
        - **优势度**：对每个皮层脑区，分别计算有多少个海马/杏仁核亚区与其存在超阈值连接，标准化后计算对比度，范围为 $[-1, 1]$。
            $$ \text{Dominance}_i = \frac{\text{NormCount}_{i}^{\text{Amy}} - \text{NormCount}_{i}^{\text{Hipp}}}{\text{NormCount}_{i}^{\text{Amy}} + \text{NormCount}_{i}^{\text{Hipp}}} $$
        - **共享度**：联合评估海马和杏仁核对同一皮层脑区的贡献强度和平衡性，范围为 $[0, 2]$。当两者贡献同时强且均衡时值最高。
    - **低维嵌入分析**：对亚区到皮层的连接矩阵应用扩散嵌入算法，计算联合梯度，将海马和杏仁核亚区放置在共有的低维空间，分析其分离、交叠和梯度变化。
- **算法流程概述**：预处理 fMRI 数据 -> 提取海马亚区、杏仁核亚核团及皮层脑区的时间序列 -> 分别计算 Pearson 相关和 GLASSO 偏相关矩阵 -> 生成基于方法特定 Mask -> 计算皮层水平的优势度和共享度指标 -> 计算“留一种子法”分析亚区特异性偏好 -> 计算亚区之间的内在耦合 -> 基于全连接矩阵进行扩散嵌入，得到联合梯度并投影回皮层。

## 3. 实验设计
- **数据集**：使用“人类连接组计划青年成人（HCP-YA）”S1200 版本数据。
    - **被试量**：722 名健康年轻成年人（380 名女性，平均年龄 28.48 岁）。
    - **数据模态**：高质量静息态功能磁共振成像（每名被试包含 4 次各 15 分钟的扫描）与 T1 加权结构像。
- **Benchmark/对比方法**：本研究无传统意义上的 baseline 模型对比。
    - **主要对比**：对比两种功能连接估计器（Pearson 相关 vs. GLASSO 偏相关）所揭示的组织模式异同。
    - **参照对比**：将新提出的优势度和共享度图谱与经典皮层功能梯度及 Yeo-7 网络分布进行相关性分析，以验证其宏观生物学意义。
- **解剖学基准**：使用最先进的海马自动分割工具“HippUnfold”进行亚区划分，使用基于概率图谱的 FreeSurfer 工具“Saygin”进行杏仁核亚核团分割，皮层分区采用 HCP-MMP 1.0。

## 4. 资源与算力
- **未明确说明**：论文中未提及训练模型所使用的具体 GPU 型号、数量或计算总时长。本研究的计算主要集中在标准统计分析和图论算法上（如相关性计算、GLASSO、扩散嵌入），不涉及大规模深度学习模型训练。

## 5. 实验数量与充分性
- **实验数量**：实验设计严谨，层次丰富，构成了一个完整的证据链。
    - **核心图谱构建**：基于两种估计器分别生成优势度和共享度皮层图谱。
    - **验证性分析**：a) 使用强度对比验证了优势度指标非阈值伪迹；b) 使用 5%/15% 不同阈值验证图谱稳定性；c) 200 次随机分半重复验证结果高可重复性。
    - **组织模式分析**：a) 将新图谱与经典功能连接梯度进行空间相关性分析；b) 使用留一（LOSO）策略分析了亚区水平的特异性偏好；c) 分析内在亚区耦合与外在皮层共享偏好的关系。
    - **数据驱动分析**：构建联合梯度，并投影回皮层进行宏观网络解读。
- **充分性与公平性**：实验设计非常充分、客观且公平。方法间的对比（Pearson vs. GLASSO）是公平的，因为分析逻辑一致，仅在 Mask 定义上因数据特性（强度 vs. 稀疏性）而调整。多重验证性分析强有力地支撑了核心发现的稳健性。

## 6. 论文的主要结论与发现
- **结构化的共表征而非离散系统**：海马和杏仁核亚区并非形成两个在皮层上完全分离的系统，而是通过一个空间上连续组织、充满选择性的“优势度-共享度”模式嵌入皮层。
- **“选择聚合”与“梯度发散”并存**：直接关联（GLASSO）揭示，聚合主要发生在旁边缘系统核心；更广泛的共波动（Pearson）则将其扩展至感觉运动皮层。发散表现为海马偏好默认知视觉网络，杏仁核偏好腹侧注意和边缘网络。
- **亚区水平的精细组织**：
    - **海马长轴是关键组织轴**：海马体前端更靠近杏仁核主导的皮层和共享区，后端则锚定在海马主导的皮层区。
    - **杏仁核内部异质性**：副层核是杏仁核中最像海马的亚区，在联合梯度上与海马前部位置接近。
- **内在-外在连接耦合**：与杏仁核内在连接更强的海马亚区，也更倾向于连接皮层上的共享区域，这表明海马前部可能是整合上下文与情感信息的关键接口。

## 7. 优点（方法或实验设计亮点）
- **互补估计器策略**：同时使用 Pearson 相关和 GLASSO 偏相关，巧妙地将“广泛共波动”与“较直接连接”这两种不同组织尺度的信息分离开来，深化了对功能连接本质的理解。
- **创新的量化框架**：“优势度”和“共享度”指标设计简洁且解释性强，能够直观地在连续空间上描述两个邻近系统的复杂关系，超越了简单的连接强度或空间重叠分析。
- **亚区级高分辨率**：联合使用 HippUnfold 和对杏仁核进行精细化分割，系统地研究宏观功能组织，相较于传统全脑分析，提供了前所未有的精细度。
- **严谨的验证体系**：通过强度对比、多阈值验证、分半信度和空间相关性分析等多重手段，确保核心发现的稳健性和可复现性。

## 8. 不足与局限
- **静息态模态的固有限制**：结果仅基于静息态功能连接，无法直接推断因果或有效连接，也无法反映行为、任务状态下的动态重组。
- **解释上的局限**：GLASSO 虽然比 Pearson 相关更直接，但仍是统计模型，不能等同于真实的解剖连接。其皮质下区域本身信噪比较低，可能影响小核团的敏感性。
- **指标相对性**：“优势度”和“共享度”是基于各亚区自身连接强度分布的相对排序（Top 10%），反映了相对表征，而非绝对耦合强度的绝对度量。
- **缺乏临床或发展视角**：研究在健康青年人中完成，其结果在个体差异、发育、老化或疾病状态下的普适性有待验证。

（完）
