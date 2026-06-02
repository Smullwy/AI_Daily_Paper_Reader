---
title: "Characterizing variability in resting-state functional magnetic resonance imaging (rsfMRI) metrics: a normative modeling framework"
title_zh: 表征静息态功能磁共振成像（rsfMRI）指标的变异性：一个规范建模框架
authors: "Amador-Tejada, A., Danielli, E., Noseworthy, M. D."
date: 2026-06-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.28.728381v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 人群级rsfMRI变异性的规范建模
tldr: 静息态功能MRI生物标志物研究常依赖病例-对照范式，但疾病异质性限制其普适性。本研究针对年龄和性别轨迹关注不足，汇总多中心1978名10-30岁被试，采用分层贝叶斯回归构建ALFF、fALFF、ReHo和赫斯特指数四种指标的规范模型，刻画其随年龄下降的非线性轨迹与区域变异性，为个体偏差评估提供参考。
source: biorxiv
selection_source: fresh_fetch
motivation: 当前rsfMRI生物标志物研究缺乏充分考虑年龄和性别的规范模型，限制了在异质性疾病中的个体化推断。
method: 聚合五个公开数据集共1978名参与者，计算110个灰质脑区的四种rsfMRI指标，使用分层贝叶斯回归建模非线性年龄效应、性别及多中心采集因素。
result: 所有模型校准良好，fALFF预测性能最强，各指标均呈现随年龄的负向趋势，且规范分布的离散度具有显著的区域变异性。
conclusion: 本研究建立了涵盖多种BOLD信号特征的rsfMRI规范参考，弥补了传统病例-对照范式的不足，支持基于个体的神经影像推断。
---

## 摘要
新生物医学技术的临床采用取决于建立参考值，使个体患者可以与之比较。在静息态功能MRI（rsfMRI）中，大多数生物标记物研究依赖于病例-对照范式，其基本假设往往无效，因为疾病常常是异质的，限制了生物标记物的普适性。规范建模提供了一种补充替代方法，通过表征相对于参考人群的个体偏差。然而，在rsfMRI中，规范建模几乎只应用于功能连接，对年龄轨迹和性别效应关注有限。我们通过开发一个包含四种rsfMRI指标的空间规范模型来填补这些空白，这些指标捕获了血氧水平依赖（BOLD）信号随年龄和性别的互补特征。汇集了五个公开数据集，形成一个包含1978名10-30岁参与者的样本。计算了110个灰质区域的四个指标：低频振幅（ALFF）、分数低频振幅（fALFF）、区域同质性（ReHo）和赫斯特指数。对每个指标拟合了基于分层贝叶斯回归和非高斯似然的机器学习模型，建模非线性年龄效应、性别和多站点采集。模型在所有四个指标上都校准良好，fALFF显示出最强的预测性能，赫斯特指数最弱。每个指标的规范轨迹在不同脑区有所不同，但平均而言，每个分布的中位数在各区域间保持有界，而散布更具区域变异性。所有四个指标随年龄主要呈现负斜率，表明在该年龄窗口内每个指标均下降。这项工作提供了四个捕获BOLD信号不同特征的rsfMRI指标的规范参考，补充了病例-对照范式，并支持个体水平的推断。

## Abstract
Clinical adoption of new biomedical techniques depends on establishing reference values against which individual patients can be compared. In resting-state functional MRI (rsfMRI), most biomarker research has relied on the case-control paradigm, whose underlying assumptions are often invalid as diseases are frequently heterogeneous, limiting biomarker generalizability. Normative modeling offers a complementary alternative by characterizing individual deviations against a reference population. However, in rsfMRI, normative modeling has been applied almost exclusively to functional connectivity, with limited attention to age trajectories and sex effects. We address these gaps by developing a spatial normative model of four rsfMRI metrics that capture complementary features of the blood-oxygen-level-dependent (BOLD) signal across age and sex. Five publicly available datasets were aggregated to form a sample of 1,978 participants aged 10-30 years. Four metrics were computed for each of 110 grey matter regions: amplitude of low-frequency fluctuations (ALFF), fractional amplitude of low-frequency fluctuations (fALFF), regional homogeneity (ReHo), and Hurst exponent. A machine-learning model based on hierarchical Bayesian regression with a non-Gaussian likelihood was fitted per metric, modeling non-linear age effects, sex, and multi-site acquisition. Models were well calibrated across all four metrics, with fALFF showing the strongest predictive performance and Hurst exponent the weakest. Normative trajectories varied across brain regions for each metric, but on average, the median of each distribution remained bounded across regions, while the spread was more regionally variable. All four metrics showed predominantly negative slopes with age, indicating a decrease in each metric over the age window. This work provides a normative reference across four rsfMRI metrics that capture distinct features of the BOLD signal, complementing the case-control paradigm and supporting individual-level inference.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

- **关联方向**：强关联。论文探讨rsfMRI信号的群体规范建模，与你关注的“fMRI表征”和“表征对齐”领域高度相关。它提供了一个理解BOLD信号特征（ALFF、ReHo等）在健康人群中如何随年龄和性别变化的基准框架。
- **启发与意义**：该方法论揭示了不同脑区自发脑活动指标的“典型轨迹”，这为识别个体异常表征提供了量化基础。它启发研究可以将这些规范的统计分布作为“先验”约束，用于个体大脑的解码或编码模型，提升对病理状态检测的特异性。
- **可借鉴点**：可借鉴其利用分层贝叶斯回归处理多中心、大规模rsfMRI数据的方法，来建立稳健的表征基线。尤其是对不同BOLD特征（如局部同步性、信号复杂度）的标准化操作和评估流程，可直接应用于新数据的表征对齐和偏差量化。
- **阅读建议**：重点阅读其“规范模型”的构建方法和评估指标（EXPV， MSLL），以及图3和图4展示的指标随年龄、脑区变化的轨迹。这些构成了表征对齐的“金标准”参考系，是连接你研究方向与临床个体化推断的桥梁。

---

## 1. 核心问题与整体含义

- **核心问题**：当前静息态功能磁共振成像生物标志物（如ALFF等），绝大多数研究采用“病例-对照”范式。该范式假定组内同质、组间可分，但精神/神经疾病本身高度异质，导致相关研究发现的生物标志物普适性、特异性差，临床转化困难。
- **整体含义**：论文旨在用“规范建模”框架替代或补充传统范式，通过建立一个健康人群的“参考标准”，将疾病界定为个体偏离正常规范的“极端值”，从而支持个体化精细评估。这对比传统组间差异比较，能够更敏锐地检测到异质性个体，是推动fMRI从科研走向临床个体化诊疗的关键一步。

## 2. 论文提出的方法论

- **核心思想**：作者构建了一个**层次贝叶斯回归**模型，融合了非线性年龄效应、性别影响、不同采集站点带来的批次效应，基于大规模健康人群数据，为大脑110个灰质区域建立四个rsfMRI指标的规范分布范围。
- **关键技术细节**：
    - **模型形式**：每个脑区的指标值为 $y$，拟合模型为 $y = f(X, \theta) + e$，其中协变量 $X$ 包含年龄和性别，$\theta$ 是待估参数。
    - **非高斯似然**：使用 `Sinh-ArcSinh (SHASH)` 分布作为似然函数去刻画BOLD指标的非正态、偏态厚尾等复杂分布特性，模型可同时估计位置 $\mu$、尺度 $\sigma$、偏度 $\epsilon$ 和尾重 $\delta$。
    - **多中心建模**：模型采用分层的结构（部分池化），令各站点（批次）的模型参数 $\theta_i$ 共用一个高层先验分布，有效解决了数据站点异质性难题。
    - **基础展开**：通过B-样条基（degree=3, knots=3）对年龄变量进行展开，以灵活捕捉指标随年龄的非线性发育变化。

## 3. 实验设计

- **数据集与样本**：该研究汇集了 5 个公开数据集，包括 ABIDE-I、ABIDE-II、ADHD200、FCP、INDI，总计筛选了 1,978 名健康被试（10-30 岁）的 T1 结构和静息态 fMRI 图像。
- **研究对象与基准指标**：计算了四个反映BOLD不同侧面的度量作为模型的**响应变量**：  
    - **ALFF/fALFF**：衡量低频振荡的幅值/相对幅值；  
    - **ReHo**：衡量局部功能同步性；  
    - **Hurst 指数**：反映信号的时间自相关特性。  
- **基准对比/评估**：**非对比某种其他方法**，而是**内在地评估模型的拟合与校准质量**，用了五个统计量：解释方差、相关系数、标准化均方误差、夏皮罗-威尔克统计量以及平均标准化对数损失（MSLL）。模型在 80/20 的训练/验证集上评估，并汇报统计结果。

## 4. 资源与算力

- 作者未汇报详细的模型训练占用的硬件（如GPU型号/数量）、训练时间或算力开销。本文使用的“预测临床神经科学工具箱”依赖层次贝叶斯MCMC推断，对算力一般要求较高，但这部分信息缺失。

## 5. 实验数量与充分性

- **实验数量**：核心实验包含构建 4 个独立的规范模型（对应 4 个指标），每个模型预测 110 个脑区的指标值。随后展示了评估指标、年龄轨迹图、区域变异性统计等。分析内容覆盖了模型评价、效应趋势和空间可视化。
- **充分性与客观性**：实验从数据处理、模型构建到评估标准均遵循开放科学流程，并且模型兼顾多站点高维数据的鲁棒性和灵活性。研究虽然缺少对比消融实验（如对比不同回归核、频带等），但作为一个“建立规范基准”的探索性工作，具备较高的**充分性**和**客观公正性**。使用经过验证的开源工具箱（PCNToolkit），保障了方法可重复。

## 6. 主要结论与发现

- **模型可靠**：构建的四个指标的规范模型校准良好，其中 fALFF 预测性能最强，而 Hurst 指数最弱。
- **发育差异**：在 10-30 岁的窗口期，**所有四个指标均随年龄呈普遍的下降趋势**（拟合斜率多为负值），这反映了青少年期及青年期的大脑网络精炼、功能整合增强。
- **区域异质性**：虽然各脑区指标的中位数跨度较小，但**百分位范围（变异性）在不同脑区差异显著**，尤其是 ALFF、fALFF 在视觉皮层存在更大的个体间差异。

## 7. 优点

- **框架创新性**：将复杂、非高斯的层次贝叶斯规范建模应用于 rsfMRI 的局部活动指标，开拓了既往仅关注结构指标或功能连接的规范框架局限。
- **信号多维刻画**：同时表征 BOLD 信号强度、同步性及复杂度，提供了对个体脑功能更**互补、立体的描绘**。
- **生态效度高**：汇聚 5 个大数据集，贴近真实世界大尺度、多站点、多样本特征，实验结果更具泛化推广价值。

## 8. 不足与局限

- **实验覆盖与偏差**：年龄窗口仅覆盖 10-30 岁且性别比例不均衡，缺乏对儿童早期及中老年终生的刻画；B-样条的参数设定相对单一，可能无法充分挖掘不同脑区各自独特的发育轨迹模式（如倒U型）。
- **技术假设限制**：模型对每个脑区独立构建，忽略了**区域间的空间相关性**；批次效应只涉及站点，未充分考虑不同厂家、扫描仪序列参数的差异。
- **应用风险**：文章未使用临床队列进行验证测试，目前仅是“规范基线”的刻画，其对疾病个体的区分效能尚待检验。
- **算力信息**：本文缺乏对模型训练算力开销与计算效率的讨论。

## 9. 研究价值与阅读建议

- **关联方向**：强相关。
- **启发与意义**：提供了理解健康青年人大脑自发活动的“规范图谱”，有助于设计更精准的神经解码与表征模型。
- **可借鉴点**：可借鉴其多站点贝叶斯混合模型用来稳定对齐跨数据集的各种fMRI表征特征，形成稳健的先验知识。
- **阅读建议**：重点阅读其规范模型的构建与评估方法细节，思考如何将它输出的“偏离分数”作为新样本的表征特征，并进行下游分析。

（完）
