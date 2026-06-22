---
title: Searchlight Optimization Using Representational Similarity Analysis for Subject-Level Voxel Selection in Emotional State Decoding
title_zh: 利用表征相似性分析进行搜索光优化，用于情绪状态解码中的个体水平体素选择
authors: "Wang, X., Zweerings, J., Lührs, M., Cong, F., Mathiak, K., Linden, D. E. J., Goebel, R., Ciarlo, A., Mehler, D. M. A."
date: 2026-06-22
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.16.729835v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 使用RSA搜索光进行fMRI情感状态解码
tldr: 针对fMRI多条件情绪解码中体素选择的难题，本研究提出一种被试级搜索光优化框架，整合GLM单变量分析和RSA多变量精炼，并引入贝叶斯优化自动调参。在情绪想象数据集上，该方法相比单纯单变量或分类器方法，能更好地对齐表征结构、保留情绪状态几何并保持判别力，为精准识别条件敏感体素提供了高效鲁棒的解决方案。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有fMRI体素选择方法难以捕捉多条件下精细的神经表征差异，尤其阻碍神经反馈等需精确干预的研究。
method: 提出融合体素级GLM单变量分析和RSA多变量精炼的搜索光优化框架，并用贝叶斯优化自动选择超参数。
result: 多变量精炼后表征结构与目标更一致，且RSA方法比分类器方法更完整保留情绪状态的几何结构，同时维持分类性能。
conclusion: 该RSA框架有效、高效且鲁棒，为多条件fMRI研究提供了可靠的条件敏感体素选择方案。
---

## 摘要
识别信息性体素是功能磁共振成像（fMRI）中一个关键但具有挑战性的步骤，特别是对于涉及多个相关条件的多变量分析。现有方法通常依赖于预定义的感兴趣区域（ROIs）或基于激活的标准，这可能不足以捕捉精细的表征差异。这一挑战在实验设置和干预措施（如神经反馈训练）中尤为突出，在这些情况下，体素不仅被测量为神经响应，还基于其先前观察到的活动模式作为干预的目标。在本研究中，我们提出了一种个体水平的搜索光优化框架，该框架整合了基于体素的一般线性模型（GLM）的单变量分析与基于表征相似性分析（RSA）的多变量精炼，以识别既与任务相关又对条件敏感的体素。为了增强实际应用性，该框架进一步纳入了一个基于贝叶斯优化的数据驱动超参数调优步骤，能够从少量试点数据集中高效识别高性能配置，并在应用于更大样本时保持一致的性能。我们使用一个包含四种情感条件的情感想象fMRI数据集对该框架进行了评估。结果表明，与单独使用单变量选择相比，多变量精炼改进了经验表征结构与目标表征结构之间的一致性。与基于分类器的体素选择方法相比，基于RSA的方法更好地保留了情绪状态的表征几何结构，同时保持了判别能力。这些发现突出了所提出的RSA框架的有效性、高效性和稳健性，为在多条件fMRI研究中识别条件敏感体素提供了实用的解决方案，并支持对情感脑状态进行更精确的多变量研究。

## Abstract
Identifying informative voxels is a critical, yet challenging step in functional magnetic resonance imaging (fMRI), particularly for multivariate analyses involving multiple related conditions. Existing approaches often rely on predefined regions of interest (ROIs) or activation-based criteria, which may be insufficient for capturing fine-grained representational differences. This challenge becomes particularly relevant in experimental settings and interventions such as neurofeedback training, where voxels are not only measured as neural responses but also used as targets for intervention based on their previously observed activity patterns. In this study, we propose a subject-level searchlight optimization framework that integrates voxel-wise general linear model (GLM)-based univariate analysis with representational similarity analysis (RSA)-based multivariate refinement to identify voxels that are both task-relevant and condition-sensitive. To enhance practical applicability, the framework further incorporates a data-driven hyperparameter tuning step based on Bayesian optimization, enabling efficient identification of high-performing configurations from small pilot datasets, with consistent performance when applied to larger samples. The proposed framework was evaluated using an emotion imagery fMRI dataset with four affective conditions. Results demonstrate that the multivariate refinement improves alignment between empirical and target representational structures compared with univariate selection alone. Compared with a classifier-based voxel selection approach, the RSA-based approach better preserves the representational geometry of emotional states while maintaining discriminative capacity. These findings highlight the effectiveness, efficiency, and robustness of the proposed RSA framework, providing a practical solution for identifying condition-sensitive voxels and supporting more precise multivariate investigation of affective brain states in multi-condition fMRI studies.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文提出的 RSA 驱动体素选择框架与你关注的 **fMRI representation**、**representation alignment** 及 **brain decoding** 高度相关，直接作用于神经表征几何的优化提取。
- **启发与意义**：揭示了在解码前显式优化体素级表征对齐能显著提升对连续情感状态的刻画能力，为研究 **neural prior** 与 **multi-view constraint** 提供了新的预处理视角，即“表征保真度优先于判别精度”。
- **可借鉴点**：核心方法论（搜索光 RSA + 贝叶斯超参优化）可借鉴为 **brain encoding** 或 **representation alignment** 任务的通用特征/体素筛选预步骤，以寻找对特定计算模型（先验）最敏感的皮层窗口。
- **阅读建议**：建议重点关注其如何使用 RSA 几何约束取代传统分类器目标进行特征筛选，以及超参影响分析（图 3、表 2），以评估该方法迁移到你任务中的风险和收益。

## 1. 论文核心问题与研究背景
- **核心问题**：在多条件（Multi-condition）fMRI 研究中，如何为个体高效、鲁棒地选取对精细心理状态（如不同效价与唤醒度的情绪）具有特异性表征的体素。
- **研究动机**：
    - 传统方法依赖解剖 ROI 或激活强度，忽视了体素间的多变量表征信息，难以区分连续存在的、具有精细几何结构的心理状态（如情绪）。
    - 神经反馈（Neurofeedback）等闭环实验要求选取的体素兼具任务相关性与条件敏感性，对体素选择策略的准确性要求极高。
    - 已有研究表明 RSA 能刻画多维表征结构，但缺乏系统化的、数据驱动的优化框架来结合单变量初筛与多变量精炼，以实现个体级微调。
- **整体目标**：将单变量 GLM 显著性检验与多变量 RSA 表征相似度结合，并引入贝叶斯优化自动调参，形成一个完整的、面向个体级体素选择的搜索光（Searchlight）优化框架，以期提升多条件 fMRI 解码的精确度和实际可用性。

## 2. 方法论
### 2.1 核心思想
以“表征对齐（Representational Alignment）”为准则，先通过单变量分析粗筛任务相关激活体素，再利用 RSA 搜索光精炼，保留其局部多体素模式与目标表征模型（RDM）高度一致的体素集合。这改变了以往分类正确率最大化的选择逻辑，转向直接优化神经活动的几何结构。

### 2.2 技术步骤
- **阶段一：单变量选择（Univariate Selection）**。
    - 输入：四个情绪想象 run 的 `rest > task` 对比 t-map。
    - 操作：对每个 run，根据绝对 t 值取给定百分位区间（`univThr`）的体素，排除过小的空间团块（`clusterThr`）。将四个 run 的二值掩膜做逻辑“或”运算，得到被任意条件稳定激活的候选区域。
- **阶段二：多变量精炼（Searchlight RSA Refinement）**。
    1. **局部表征提取**：对于单变量粗筛掩膜内的每个体素，以它为中心构建给定形状（Sphere/Cube）和半径（radius）的搜索光。
    2. **构建局部 RDM**：计算搜索光内各条件（run）之间的多变量模式（提取 t 值）的 Pearson 相关，转换为体素级经验 RDM。同时可通过中心体素值（center）、均值（mean）或中值（median）三种模式汇总局部信息。
    3. **相似度评估**：计算局部 RDM 与目标模型 RDM（基于效价和唤醒度预定义的矩阵，如图 2）的相似度（Pearson 或 Spearman相关）（`metric`）。
    4. **体素筛选**：根据相似度取前百分比（`multThr`）的体素为最终候选。同样经过空间聚类和小团块剔除，输出既被任务激活、其局部邻域又携带目标几何信息的体素集合。
- **阶段三：数据驱动超参优化（Hyperparameter Tuning）**。
    - **方法**：在小样本（6人）试算集中穷举 6,480 种超参组合（含搜索光形状、半径；相似度指标、汇总模式；单变量及多变量筛选阈值；聚类最小值等，见表 1）。
    - **评估**：以最终选出的体素的全局 RDM 与目标 RDM 的 Spearman 相关系数为优化目标。
    - **建模与寻优**：利用线性混合效应模型（LMM）分析各超参主效应，并使用**贝叶斯优化（Bayesian Optimization）** 在 100 次迭代内找到逼近全局最优的配置。

## 3. 实验设计
- **数据与范式**：实采数据来自先前工作（N=6 试算，N=27 主实验）。任务为每秒级 fMRI 情绪想象，包含四种条件：愉悦放松（Valence+ / Arousal-）、悲伤（V- / A-）、热情（V+ / A+）、愤怒（V- / A+），覆盖二维情绪空间。数据经标准在线预处理（卷内多回波合并、6mm 平滑）。
- **对比的 Benchmark 与目标模型**：
    - **内部对比**：对比单变量选择阶段与加入 RSA 多变量精炼后，选定体素 RDM 与目标 RDM 的相似度变化。
    - **外部对比**：将 RSA 体素选择方法替换为分类器（逻辑回归）选择。分类器使用相同的搜索光框架，选择精度最高的体素子集。
    - **多模型泛化**：测试了四种不同复杂度的目标 RDM：仅有唤醒度 Arousal-only、仅有效价 Valence-only、效价与唤醒度等权加和（A-V 1:1）、不等权加和（A-V 1:3），观察框架对不同假设的稳健性。
- **评估指标**：体素子集的 **经验 RDM 与目标 RDM 的 Spearman 相关** 和 **多类分类准确率**。

## 4. 资源与算力
- **论文未明确提及**使用的 GPU 型号、数量或具体训练时长。
- 仅提及纯 RSA 选择可在 **数秒内** 完成全脑体素筛选，这暗示其主要算力需求远低于需要交叉验证的分类搜索光。

## 5. 实验数量与充分性
- **实验组数充分**：
    - 进行了超大规模的超参空间分析（LMM 回归 6,480 种配置 × 6 人）。
    - 验证了 4 种不同目标 RDM 下的效果。
    - 包含了 6 人试算集 → 27 人主数据集的跨样本泛化验证。
    - 包含了与 LR 分类器的外部方法对比，并从解剖分布、表征相关性、分类正确率三个维度评估。
- **公平与客观性**：对 RSA 和 LR 都使用了完全一致的预处理与搜索光结构；最终选择体素数也保持一致。采用了两种互为补充的指标（RDM 相关 ∝ RSA 最优 vs 分类精度 ∝ LR 最优）来解读二者的优势错配，论述客观。

## 6. 主要结论与发现
- **精炼有效性**：加入 RSA 搜索光精炼后，选出的体素集合其对情绪状态的表征几何结构（RDM）与理论模型的吻合度大幅优于仅用单变量激活选择的体素。
- **方法论互补特性**：
    - RSA 体素选择在保留连续表征几何（RDM 相似度）上显著优于 LR 分类器选择。
    - LR 分类器选择体素的纯分类精度显著优于 RSA 选择体素。
    - RSA 选出的体素虽分类精度不是最优，但仍然远高于随机水平，证明其保留了充分的判别力。
- **超参配置洞察**：
    - 单变量阈值取**中等激活区间**（如 50-80%）比仅取最强激活（>80%）更有利于后续多条件辨别。
    - 超参表现轨迹在试算集与主数据集间的相对排序高度相关（ρ>0.5），小样本贝叶斯优化结果具有实际迁移价值。
- **脑区偏好差异**：RSA 方法倾向选择内侧前额叶及边缘系统（ACC、杏仁核），分类器方法倾向选择外侧前额叶，暗示二者捕获了情绪网络中不同功能成分。

## 7. 优点
- **理论驱动**：以表征几何而非单纯类别标签为目标，更契合情绪的维度理论与认知神经科学的连续表征假设。
- **计算高效**：RSA 选择仅需相关运算，远快于需迭代训练的搜索光分类，对实时 fMRI 应用（如神经反馈）友好。
- **系统性调参**：引入贝叶斯优化替代人工凭经验调参，使框架可自动化适应不同范式与模型复杂度。
- **全面的方法学验证**：通过与 LR 的对比和跨数据集验证深刻揭示了“表征对齐”与“分类边界”两种优化目标的内在差异，避免了片面结论。

## 8. 不足与局限
- **高度依赖模型 RDM**：体素选择结果严重依赖于研究者预定义的目标 RDM；若目标模型定义不当或与真实神经编码不符，框架会系统性选错体素。情绪空间的二元划分是否合理有待商榷。
- **个体样本量限制**：试算集仅 6 人，LMM 模型评估的“人”随机效应可能存在偏差；虽然验证了组间迁移性，但小样本得出的超参在对新个体的泛化上需持保留态度。
- **缺少信度（Reliability）评估**：体素选择未纳入重测信度模块（因 block 数少无法拆分数据）。这样做出的体素筛选可能包含大量高噪声体素，重测稳定性未经验证。
- **外部效度待验证**：未直接证明该优化后的体素选择在实际神经反馈训练闭环中能带来显著行为或神经调控效能的提升，目前仅为离线分析结论。

## 9. 主要结论与发现
### 9.1 核心发现
本研究成功构建并验证了一个结合单变量筛选、RSA 多变量精炼与贝叶斯超参调优的三阶段体素优化框架。研究表明：以“表征对齐”为目标的 RSA 体素选择能够更完整地保留情绪状态的几何结构，且其判别能力仍然稳健；这与追求最大边际间隔的分类器方法形成互补。基于试算集的超参优化方案可可靠迁移至更大的独立样本。

### 9.2 最终结论
所提框架为多条件 fMRI 研究（特别是涉及连续心理状态区分和闭环神经干预）提供了一种实用、高效且鲁棒的个体化体素筛选方案，克服了传统体素筛选仅关注激活幅度的局限，有效支持了基于表征几何的认知解码。

（完）
