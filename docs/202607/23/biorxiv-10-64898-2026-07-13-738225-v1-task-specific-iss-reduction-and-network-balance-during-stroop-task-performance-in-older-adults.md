---
title: Task-specific ISS reduction and network balance during Stroop task performance in older adults
title_zh: 老年人Stroop任务表现中的任务特异性ISS降低与网络平衡
authors: "Ouchi, K., Yokota, H., Matsumoto, N., Tsurugizawa, T."
date: 2026-07-20
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.13.738225v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: fMRI被试间相似性分析在Stroop任务中
tldr: 研究探讨老年人Stroop认知抑制下降的神经机制，利用任务态和静息态fMRI的功能连接被试间相似性（ISS）分析，发现老年人在任务期间额叶区域功能连接一致性降低，而视觉注意区域出现补偿性功能重组。结果表明，老化相关的脑过度激活并非均匀噪声或单纯补偿，而是空间特异的功能重组模式，为理解老化认知衰退提供了新见解。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-13-738225-v1/fig-001.webp\", \"caption\": \"Figure 2. Inter-subject similarity (ISS) analysis. 608 (A) ISS matrices showing pairwise correlation coefficients of functional connectivity (FC) 609 feature vectors across all participants during resting state and task conditions. Matrices are shown 610 separately for Stroop-ROIs and WB-ROIs. (B) Comparison of mean ISS (mISS) between younger 611 and older groups for WB-ROIs and Stroop-ROIs during resting state and task conditions. (C) FC 612 modulation from rest to task within the Stroop-ROIs for the younger and older groups. Color 613 indicates t-values from one-sample t-tests on the FC difference. Only ROI pairs surviving 614 Bonferroni correction are shown. 615\", \"page\": 14, \"index\": 1, \"width\": 812, \"height\": 1195}]"
motivation: 探索老年人认知抑制下降时脑过度激活的本质，即究竟是神经噪声还是补偿机制。
method: 采用贝叶斯层级模型识别Stroop任务相关脑区，并基于任务态和静息态fMRI数据，分析被试间功能连接相似性（ISS）及个体激活偏差的主成分分析。
result: 老年人任务期间额叶区域ISS显著下降，视觉注意区域ISS收敛补偿；任务表现由默认网络抑制和视觉注意激活的特定空间组分解释。
conclusion: 老年人脑过度激活是空间特异的功能重组，而非统一的噪声或补偿，揭示老化过程中任务态脑功能组织的适应性变化。
---

## 摘要
随着年龄增长，认知抑制能力的下降会影响日常生活和独立性。关于老年人在认知抑制任务中过度激活是由于补偿还是神经噪声，目前仍存在争议。为了解答这个问题，我们通过任务态和静息态fMRI，研究了功能连接被试间相似性（ISS）的年龄相关变化。利用贝叶斯层次模型，我们确定了27个与Stroop任务相关的感兴趣区域，并发现老年人在任务执行过程中这些区域的ISS显著降低。此外，衰老与额叶区域一致性功能连接模式的丧失有关，同时伴随着视觉注意区域内收敛性补偿机制的出现。对个体激活偏离组均值模式的主成分分析显示，老年人的任务表现不能由整体任务相关脑激活来解释，而应由涉及默认模式网络抑制和视觉注意区域活动增强的特定空间成分来解释。这些发现表明，老年人任务相关的脑过度激活并非源于均匀的噪声或均匀的补偿，而是一种空间特异性的功能重组模式。

## Abstract
Declines in the cognitive inhibition that comes with aging impacts daily life and independence. It is still debated whether overactivation during cognitive inhibition tasks in older adults is due to compensation or neural noise. To address this question, we examined age-related changes in inter-subject similarity (ISS) of functional connectivity from task-based and resting-state fMRI. Using Bayesian hierarchical modeling, we identified 27 Stroop task-related regions of interest and found that ISS in these regions was significantly reduced in older adults during task performance. Furthermore, aging is associated with a loss of consistent functional connectivity patterns in frontal regions, accompanied by the emergence of a convergent compensatory mechanism within visual attention regions. Principal component analysis of individual activation deviations from the group-mean pattern showed that task performance in older adults cannot be explained by overall task-related brain activation, but rather by a specific spatial component involving suppression of the default mode network and increased activity in visual attention regions. These findings indicate that task-related brain overactivation in older adults is not due to uniform noise or uniform compensation, but rather a spatially specific pattern of functional reorganization.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
*   **关联方向**: 弱相关。
*   **启发与意义**: 本文使用贝叶斯层次模型提取任务相关ROI及个体偏差，为解决脑解码中个体差异大、组平均模型难以泛化的难题提供了新思路。
*   **可借鉴点**: 被试间功能连接相似性(ISS)分析+留一法区域贡献评估的核心框架设计，可用于评估多视角约束或表征对齐模型的跨被试稳定性。
*   **阅读建议**: 重点关注其贝叶斯建模与ISS联合分析的逻辑链条，而非其特定的老化神经科学结论。

## 论文总结

### 1. 论文的核心问题与整体含义
*   **研究背景**: 伴随衰老出现的认知抑制能力下降影响老年人的生活质量，但老年人的脑过度激活是由于“神经噪声”还是“补偿”机制依然存在争议。
*   **核心问题**: 从功能连接模式一致性的角度，揭示老年人Stroop任务中脑过度激活的神经基础，判断是普遍噪声还是空间特异的功能重组。
*   **整体含义**: 深化对老化大脑功能重组模式的理解，为“补偿”理论提供新的证据支持，推动对认知老龄化神经机制的认识。

### 2. 论文提出的方法论
*   **核心思想**: 整体流程从任务相关脑区识别，到被试间功能连接相似性(ISS)评估，再到激活模式的行为关联分析，逐层剖析年龄效应。
*   **关键技术步骤**:
    1.  **贝叶斯层次模型**: 估计每个被试、区域的任务β值及组差异，其基础模型为：
        $$y_{i,r} \sim \mathcal{N}(\mu_r + \delta_r g_i + a_{i,r}, \sigma_r)$$
        可为组均值、组差异、个体偏差进行估计，并使用拉普拉斯先验诱导稀疏性。
    2.  **被试间相似性(ISS)分析**: 将功能连接矩阵上三角部分向量化后计算被试间皮尔逊相关系数，以平均ISS（mISS）量化同组内模式一致性。
    3.  **留一法ROI分析**: 依次剔除每个ROI后计算ISS组间差异效应量的变化（Δd），评估各区域对ISS组间差异的贡献。
    4.  **主成分分析(PCA)**: 对老年组的个体激活偏差矩阵$a_{i,r}$做PCA，寻找与行为表现相关的特定空间激活模式。

### 3. 实验设计
*   **数据集**: 研究招募了30名健康老年人(68.5±5.5岁)与22名年轻人(23.8±5.2岁)。
*   **范式与指标**: 所有被试在MRI扫描仪内完成Stroop任务（分一致、不一致条件），同时采集任务态fMRI、静息态fMRI、T1结构像及弥散加权成像(DWI)。核心行为指标为不一致与一致条件反应时之差（$\Delta RT$）。
*   **对比分析**: 在Stroop任务相关ROI和全脑ROI上，系统对比了青年组与老年组在任务态和静息态下的ISS差异、从静息到任务的功能连接变化，以及结构连接变化。

### 4. 资源与算力
*   论文中未提及任何关于GPU型号、数量或计算训练时长的信息。

### 5. 实验数量与充分性
*   **实验数量**: 研究设计周密，包含约6组核心实验：ROIs识别、ISS组间比较分析、功能连接变化分析、均值-方差关系分析、留一法分析、PCA分析，以及结构连接分析作为补充。
*   **充分性与客观性**: 采用贝叶斯方法，相较于传统GLM更能灵活捕获个体差异，使ROI识别更客观；在ISS分析中，专门对比了Stroop-ROIs和全脑ROIs，并通过留一法量化区域贡献，实验设计严谨，相互印证。

### 6. 论文的主要结论与发现
*   **老年人ISS的特异性下降**: 在Stroop-ROIs中，老年人ISS的下降仅出现在任务状态下，静息态无显著差异，表明这是任务特异的功能变化（图2B）。
*   **额叶与枕叶的双重作用**: 额叶区域(如MidFG, IFGoper)在年轻人中维持高一致性，导致老年组ISS下降；而枕叶视觉区域(如iLOC)在老年人中维持一致性，起到了收敛性补偿作用（图3）。
*   **行为表现与DMN-视觉注意平衡**: 老年人Stroop任务表现不佳（$\Delta RT$大）与DMN（楔前叶等）活动偏向相关，表现较好则与视觉注意区（iLOC等）活动偏向相关（图4）。
*   **功能而非结构驱动**: 在Stroop-ROIs内未发现显著的结构连接衰退，提示观察到的FC和ISS变化主要是功能性的，而非白质纤维结构退化的直接结果。

### 7. 优点
*   **方法学亮点**: 结合贝叶斯层次建模与ISS分析，有效分离了组效应与个体差异，超越常规GLM方法。
*   **实验设计亮点**: 通过任务态与静息态对比、Stroop-ROI与全脑ROI对比的双重控制，确保了结论的特异性。
*   **解读深度**: 通过均值-方差缩放校正和留一法分析，巧妙地区分了“噪声”假说与“补偿”假说，解读深入、逻辑严谨。

### 8. 不足与局限
*   **样本量限制**: 总体样本量（N=51）偏小，可能影响统计效力，特别是PCA中解释方差仅5.4%的PC3虽然显著，但需在更大样本中复现。
*   **横截面设计**: 研究为横断面设计，仅能揭示年龄组间差异，无法推断个体老化过程中的真实纵向变化。
*   **功能性解释局限**: 对“补偿”机制的解读主要基于相关性证据（PCA负载与$\Delta RT$的相关），缺乏因果性证据。
*   **行为效应量边缘**: 关键的干扰指数$\Delta RT$组间差异处于显著性临界值(p=0.05)，削弱了其作为行为锚点的稳健性。

（完）
