---
title: A population readout of extrastriate activity reveals biased and smoothed temporal representations across saccades
title_zh: 外纹状皮层活动的群体读出揭示跨眼跳偏倚且平滑的时间表征
authors: "Poursadegh, A., Zekri, M., Weng, G., Akbarian Aghdam, A., Clark, K., Rabbani, H., Noudoost, B., Nategh, N."
date: 2026-06-22
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.16.732385v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 皮层外区域的时间编码群体读出
tldr: 视觉时间感知在扫视眼动期间会失真，但其神经机制不明。本研究通过猕猴外纹状皮层V4和MT的群体电生理记录与高时空分辨率刺激，结合统计建模，发现扫视期间神经反应系统性地将刺激时间表征偏向更早，并降低时间敏感性。基于模型的读出揭示了表征偏差的因果作用，表明外纹状皮层采用主动编码策略，偏好最近可靠输入以稳定时间信息，揭示了时间精度与鲁棒性的权衡，支持连续视觉感知。
source: biorxiv
selection_source: fresh_fetch
motivation: 视觉时间感知在扫视期间短暂失真，但其神经机制待揭示。
method: 结合猕猴V4和MT神经群体的高时空分辨率电生理记录与单试次统计建模。
result: 扫视期神经反应诱导向早期时间偏差，并减弱时间分辨力；模型读出证明偏差是降低敏感性的因果因素。
conclusion: 外纹状皮层通过偏好最近可靠输入稳定时间表征，实现时间精度与鲁棒性的平衡，支持扫视间连续视觉感知。
---

## 摘要
视觉时间感知在眼跳期间会短暂失真，然而构建眼跳周期时间表征的神经元机制尚不明确。本研究通过结合高时空分辨率视觉刺激下猕猴V4和MT脑区神经元群体的电生理记录，以及能够单试次精度捕捉眼跳周期反应调制的统计建模框架，探究了外纹状皮层如何编码和读出眼跳周期时间信息。分析显示，眼跳周期神经元反应系统性地改变了感受野内扫视前刺激的时间表征——使其偏向更早的时间点，同时降低了针对扫视前刺激的时间敏感性——从而削弱了对刺激起始时间的辨别能力。利用神经元集群中时变时空敏感性图谱的模型化读出，可对这些效应进行定量表征，并以毫秒级分辨率识别出其特定的神经元反应成分。计算机模拟操纵进一步证明了表征偏倚在降低时间敏感性中的因果作用。这些发现表明，外纹状皮层实施了一种主动编码策略，通过偏好最近的可靠输入来稳定扫视前时间信息，揭示了在眼跳过程中支撑连续视觉知觉的时间精度与稳健性之间的基本权衡。这一发现还确立了外纹状皮层群体在构建视觉时间感知中的普遍作用。

## Abstract
Perception of visual time is transiently distorted around saccadic eye movements, yet the neuronal mechanisms constructing perisaccadic representations of time remain unclear. Here, we investigate how perisaccadic temporal information is encoded and read out in extrastriate cortex, by combining electrophysiological recordings in V4 and MT neuronal population in macaque monkeys under high spatiotemporal resolution visual stimulation, and a statistical modeling framework capturing perisaccadic response modulations at single-trial precision. Our analyses show that perisaccadic neuronal responses systematically shift the temporal representation of presaccadic stimuli within receptive fields-biasing them toward earlier times, and also reduce temporal sensitivity for presaccadic stimuli-impairing discrimination of stimulus onset times. Model-based readout using time-varying spatiotemporal sensitivity maps in neuronal ensembles enables quantitative characterization of these effects and identifies their specific neuronal response components at millisecond resolution. In silico manipulations further demonstrate a causal role of representational bias in reducing temporal sensitivity. These findings suggest that extrastriate cortex implements an active encoding strategy to stabilize presaccadic temporal information by favoring the most recent reliable input, revealing a fundamental tradeoff between temporal precision and robustness that supports a continuous visual percept across saccades. This finding also establishes a general role for extrastriate populations in constructing the perception of visual time.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：与读者的“brain decoding”和“neural prior”研究方向存在**弱相关**。本论文核心为外纹状皮层（V4/MT）在眼跳期间的**神经编码机制**，而非基于fMRI的解码或表征对齐。
- **启发与意义**：论文揭示了视觉系统为维持知觉连续性而引入**系统性时间偏倚**的主动策略，可类比为一种**神经层面的“时间先验”（neural prior for time）**，该概念对理解大脑内部模型的构建具有启发意义。
- **可借鉴点**：基于**群体敏感性图谱（population kernel）的读出分析方法**，对于从高维神经数据中解码时间或空间信息的研究，提供了可迁移的方法论参考。
- **阅读建议**：建议重点阅读**模型驱动的因果验证（in silico manipulation）** 部分，其通过操纵神经响应成分来证明因果角色的逻辑，对设计类似脑动力学解码实验具有借鉴价值；若研究重心在人脑fMRI解码，则仅需关注其抽象的理论框架。

## 1. 论文的核心问题与整体含义
- **核心问题**：在眼跳期间，视觉时间感知会短暂地发生扭曲（如时间压缩、时序倒置），但其背后的神经机制尚不明确。论文旨在探究外纹状皮层（extrastriate cortex）如何编码和读出眼跳周期（perisaccadic）的时间信息。
- **整体含义**：该研究揭示，外纹状皮层并非被动地反映时间信息，而是实施一种**主动的编码策略**。通过将扫视前刺激的时间表征向更早期偏倚，并降低其时间敏感性，大脑在“时间精度”与“稳定性/连续性”之间进行权衡，从而在眼跳引起的视觉中断期间，支撑起一个连续、稳定的视觉知觉。

## 2. 论文提出的方法论
- **核心思想**：利用一个**时变广义线性模型（SVGLM，Sparse-Variable Generalized Linear Model）**，定量描述神经元在眼跳前后快速变化的时空敏感性，并基于此模型进行群体读出分析。最终，通过“**计算机模拟(in silico)操纵**”来验证特定神经响应成分与时间感知扭曲之间的因果关系。
- **关键技术细节**：
  - **时空单元分解**：将复杂四维空间（探头位置 $x,y$，相对眼跳时间 $t$，刺激-响应延迟 $\tau$）离散为约 $10^7$ 个**时空敏感性单元 (STUs)**。
  - **模型拟合**：通过最大化带惩罚项的泊松过程对数似然函数，用**稀疏约束**筛选出约 $10^4$ 个显著STU，并拟合其权重，从而得到每个神经元的刺激核 $k_{x,y}(t,\tau)$。该刺激核与偏置核 $b(t)$ 和峰电位历史核 $h(\tau)$ 共同输入，经非线性Sigmoid函数转换后，驱动泊松过程生成脉冲。
  - **群体读出与量化指标**：
    - **时间敏感性**：计算群体核在不同延迟下的相关性，并用Sigmoid函数拟合其下三角矩阵，以拟合曲线的“拐点”与“真实延迟”之差作为**时间差**指标，衡量时间敏感性。
    - **时间偏倚**：将眼跳期每个时刻的群体核与固视期各延迟的群体核做相关，再通过滑动窗内相关性图谱的相似度加权，计算出每个“真实时间”对应的“感知时间”，从而量化时间偏倚。
    - **因果验证**：通过移除特定STU（“偏倚相关”或“噪声相关”）并重新计算指标，来检验其对时间现象的因果贡献。

## 3. 实验设计
- **数据集与场景**：使用4只成年雄性猕猴，在其进行**视觉引导的眼跳任务**时，对其外纹状视觉皮层（V4和MT区）进行高时空分辨率电生理记录。
  - **高时空分辨率视觉刺激**：在包含注视点、眼跳目标和感受野的9x9网格上，每7毫秒随机呈现一个短暂（7毫秒）的白色方块探头。
  - **数据规模**：共记录447个神经元（300个MT神经元，147个V4神经元），组成15个神经元集群（ensemble）。
- **对比与分析**：
  - **基准 (Benchmark)**: 以注视期（固视期）的神经活动作为无眼跳干扰的稳定基准状态。
  - **方法对比**: 对比了基于**模型核（SVGLM kernels）** 的分析与基于**原始神经响应（spiking data）** 的分析，以验证模型预测的可靠性。
  - **因果操纵对比**: 对比了**完整模型**、**移除偏倚相关STU的模型**和**移除噪声相关STU的模型**这三种条件下的时间偏倚和敏感性指标。

## 4. 资源与算力
- **资源情况**：文中未明确提及模型拟合所消耗的GPU型号、数量或具体训练时长等算力信息。计算主要围绕统计分析、模型参数估计及在15个神经元集群上的计算机模拟操纵，但未披露所需计算资源的细节。

## 5. 实验数量与充分性
- **实验数量**：
  - **核心分析**：包括对模型核和原始神经响应，分别在时间敏感性和时间偏倚这2个维度上进行了分析。
  - **因果验证**：包含2组主要的操纵实验（移除偏倚相关STUs和移除噪声相关STUs），每组均重新评估了时间偏倚和敏感性。
- **实验充分性与客观性**：
  - **充分性**：实验链完整，从现象观察到模型构建，再到模型预测验证，最后通过“in silico”实验揭示因果机制，逻辑严密。
  - **客观与公平性**：分析过程采用固定阈值（如p值<0.05，百分位阈值等）和标准化处理。通过对比基于模型与基于原始数据的分析结果，确保了发现并非模型构建所引入的伪像，增强了结论的客观性。

## 6. 论文的主要结论与发现
- **时间表征偏倚**：在眼跳启动前（约-50至50毫秒），神经元的时空敏感性核发生系统变化，导致扫视前视觉刺激的**感知时间被提早约18毫秒**。
- **时间敏感性降低**：在同一眼跳周期内，神经元区分不同刺激起始时间的能力显著下降，表现为**时间差指标显著增加**。
- **因果关系确立**：眼跳周期时间敏感性的降低并非由神经反应“噪声”增加导致，而是由导致时间表征偏倚的**同一组神经响应成分（偏倚相关STUs）所驱动**。移除这些成分即可消除时间感知偏差，同时恢复时间敏感性。

## 7. 优点
- **高时间精度**：利用SVGLM模型和7毫秒时间分辨率的探头，实现了对眼跳前后快速神经动力学变化的毫秒级精确追踪。
- **群体水平读出**：创新性地将分析建立在“神经元集群”的群体核矩阵上，而非单个神经元，提取了与感知现象相关的群体表征特征。
- **模型与数据交叉验证**：基于模型的分析结果均在原始神经脉冲数据中得到了复现，确保发现的鲁棒性。
- **因果性验证**：通过计算机模拟“神经手术”，精准移除“偏倚相关”或“噪声相关”的STU，有力证明了表征偏倚是导致时间敏感性下降的因果原因。
- **计算框架优势**：SVGLM框架提供了对高维刺激-响应关系进行无偏估计的能力，避免了传统方法因时空采样粗糙而遗漏动态变化的问题。

## 8. 不足与局限
- **跨脑区普适性**：研究集中在V4和MT脑区，其结论是否适用于其他皮层区域或皮层下结构（如FEF、LIP）尚待探索。
- **与行为感知的直接联系**：这项研究在神经生理层面揭示了“读取”时间信息的机制，但并未直接将计算出的“感知时间偏倚”与动物的行为判断直接关联。
- **刺激范式特异性**：实验中的感知推演基于高密度、无意义的白色方块探头，这与自然场景下富含语义信息的视觉刺激存在差异。
- **潜在混淆因素**：虽然讨论了眼跳期注意力转移的影响，但其在多大程度上贡献于所观察到的效应，难以完全剥离。

（完）
