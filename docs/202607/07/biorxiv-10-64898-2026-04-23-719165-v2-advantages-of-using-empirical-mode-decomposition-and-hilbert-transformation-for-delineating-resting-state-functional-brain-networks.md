---
title: Advantages of using Empirical Mode Decomposition and Hilbert Transformation for Delineating Resting State Functional Brain Networks
title_zh: 使用经验模态分解和希尔伯特变换描绘静息态功能脑网络的优势
authors: "Kaur, T., Yadav, S., Jain, N."
date: 2026-07-05
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.23.719165v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 使用EMD和希尔伯特变换描绘fMRI静息态网络
tldr: 静息态功能连接研究常用皮尔逊相关系数分析fMRI的BOLD信号，但与已知结构连接相关性较差。本文提出利用经验模态分解（EMD）与希尔伯特变换（HT）相结合的方法，以躯体运动网络为例，证明该方法能有效改善功能连接与结构连接的相关性，尤其在低时间分辨率fMRI数据上优于传统方法。
source: biorxiv
selection_source: fresh_fetch
motivation: 传统皮尔逊相关系数方法得到的静息态功能连接与结构连接相关性不佳，需要更准确的方法。
method: 采用经验模态分解（EMD）分解BOLD时间序列，再进行希尔伯特变换（HT）计算功能连接。
result: EMD-HT方法提高了功能连接与已知结构连接的相关性，对低TR数据效果尤为显著。
conclusion: EMD-HT方法能更准确地刻画静息态脑功能网络，优于常用方法。
---

## 摘要
静息态功能连接研究的目的是确定身体休息时脑网络的固有动态。当大脑参与各种任务时，如处理感觉输入、发起运动活动或各种认知任务，这些网络会被差异化激活。静息态功能连接网络通常通过计算在受试者未主动执行任何任务时，使用功能磁共振成像从不同脑区采集的血氧水平依赖信号之间的皮尔逊相关系数来揭示。然而，由此确定的功能连接与已知的不同脑区之间的结构连接并不吻合。在此，我们使用经验模态分解，随后进行希尔伯特变换，来确定人脑的静息态功能连接。我们以躯体运动网络为例，展示了使用这种经验模态分解-希尔伯特变换方法的优势。我们证明了，与常用方法相比，该方法分解的时间序列数据提高了导出的功能连接与已知结构连接的相关性（尤其是对于低时间重复的功能磁共振成像数据）。

## Abstract
The goal of the resting-state functional connectivity studies is to determine the inherent dynamics of the brain networks while the body is at rest. These networks get differentially activated when the brain is involved in various tasks such as processing of sensory inputs, initiating motor activities, or various cognitive tasks. Resting state functional connectivity networks are commonly revealed by determining Pearson Correlation Coefficients of the Blood Oxygenation Level Dependent (BOLD) signals collected from different brain regions using functional Magnetic Resonance Imaging (fMRI) while the subject is not actively performing any task. However, the functional connectivity thus determined does not correlate well with the known structural connectivity between different brain regions. Here, we used Empirical Mode decomposition (EMD), followed by Hilbert Transformation (HT), to determine the resting state functional connectivity in the human brains. We show the advantage of using this EMD-HT method using somatomotor network as an example. We show that the time series data decomposed by this method improves correlation of the derived functional connectivity with the known structural connectivity (especially for low -TR fMRI data) as compared to the methods commonly used.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：弱相关。本文聚焦静息态 fMRI 功能连接的信号分解方法，不直接涉及脑解码或跨视图对齐模型，但与“fMRI representation”方向存在间接联系。
- **启发与意义**：提供了一种能更好保留神经动态多尺度信息的功能连接特征提取方式，有望作为脑编码或解码模型的输入表示，提升与结构先验的一致性。
- **可借鉴点**：可借鉴 EMD-HT 预处理流程，将 BOLD 时间序列转换为频率‑相位‑幅值敏感的表示，再送入卷积神经网络或图网络进行解码，或作为约束项辅助表示对齐。
- **阅读建议**：若研究 fMRI 表示学习或脑网络构建，可关注该方法提取的非稳态特征；若聚焦于深度学习模型创新，可仅作为信号增强备选方案，无需精读细节。

## 1. 论文的核心问题与整体含义
- 静息态功能连接（rsFC）通常通过带通滤波（BPF）后的 BOLD 信号计算皮尔逊相关系数获得，但该结果与已知的解剖结构连接（SC）吻合度较低。
- 核心问题：如何更准确地恢复与解剖结构一致的功能连接网络，尤其是对于非平稳、非线性的 BOLD 信号。
- 整体含义：引入经验模态分解（EMD）加希尔伯特变换（HT）的信号分解方法，能够提取时变的频率成分，从而得到与 SC 相关性更高的 rsFC，尤其对低 TR（高时间采样率）数据优势明显。

## 2. 论文提出的方法论
- **核心思想**：利用数据驱动的 EMD 将每个 ROI 的时间序列分解为本征模态函数（IMF），再通过 HT 计算各 IMF 的瞬时频率，仅保留滤出频段（0.01‑0.12 Hz）的 IMF，将它们合并成重构信号，最后对此重构信号计算皮尔逊相关系数作为功能连接（记为 rsFC<sub>EMD‑HT</sub>）。
- **关键技术细节**：
  - EMD 通过反复提取包络均值将信号 $x(t)$ 表示为有限个 IMF 与残差之和：$x(t)=\sum_{i=1}^N IMF_i(t)+r_N(t)$。
  - 对每个 IMF 做希尔伯特变换得到解析信号 $y(t)=IMF_i(t)+j\widetilde{IMF}_i(t)$，进而求瞬时振幅 $A(t)$、瞬时相位 $\phi(t)$ 和瞬时频率 $f(t)=\frac{1}{2\pi}\frac{d\phi(t)}{dt}$。
  - 利用平均瞬时频率筛选 IMF，合并后得到重组信号，再按常规皮尔逊相关估计 FC。
- **对比方法**：传统 BPF 方法，即直接在 0.01‑0.12 Hz 带通滤波后计算皮尔逊相关系数。

## 3. 实验设计
- **数据集**：
  - Dataset 1：自采 10 名右利手健康受试者，3T 飞利浦扫描仪，TR=2 s，205 个时间点。
  - Dataset 2：Human Connectome Project 公开数据，随机选 10 人，TR=0.72 s，1200 个时间点。
  - Dataset 3：Amsterdam PIOP2 公开数据，随机选 10 人，TR=2 s，240 个时间点。
- **脑区选取**：采用 Glasser 图谱，聚焦躯体运动网络的 9 个核心区域（初级体感、初级运动、SMA 等），每个半球独立计算后平均，形成 9×9 对称连接矩阵。
- **基准与评估**：以 Felleman & Van Essen (1991) 的猕猴皮层结构连接矩阵为 “黄金标准”，将二值化阈值化后的 FC 与 SC 对比，计算 TP、TN、FP、FN，得出准确率、精确率、灵敏度、特异度和 F1 分数。阈值通过综合网络指标（全局效率、模块度、聚类系数）的肘点规则确定。

## 4. 资源与算力
- 论文未提及 GPU 型号、数量、训练时长或任何高性能算力需求。所有处理基于 SPM12 和 Matlab 2022b 完成，属于常规桌面级计算。

## 5. 实验数量与充分性
- **实验组数**：在 3 个独立数据集上（共 30 名受试者）分别对比了 BPF 与 EMD‑HT 两种方法，每个数据集均给出混淆矩阵性能指标和结构‑功能错配图。
- **充分性与公平性**：
  - 评估仅局限于躯体运动网络，未扩展到默认模式网络、视觉网络等其它典型静息态网络。
  - 样本量较小（每个数据集仅 10 例），可能影响统计稳健性。
  - 采用的 SC 基准来自猕猴，且未使用人类弥散 MRI 纤维束追踪，存在跨物种偏差风险。
  - 未与改进的分解方法（如 MEMD、VMD）直接对比，也未考虑全局信号回归等预处理差异。
  - 整体实验设计对声称的“优势”可提供初步证据，但尚未达到大规模普适验证。

## 6. 论文的主要结论与发现
- EMD‑HT 方法得到的 rsFC 矩阵与 SC 的对应关系优于传统 BPF 方法，具体表现为更高的灵敏度、F1 分数和更少的“结构存在但功能缺失”情况。
- 该优势在低 TR（如 TR=0.72 s）数据上更为显著，因为更高的时间分辨率能更好地捕捉瞬时动态。
- EMD‑HT 倾向于降低无结构支持的功能连接（降低 FP），同时在保留已知解剖通路方面表现更好。
- 功能网络仍存在无直接结构连接的功能连接，这反映了间接结构通路的多突触耦合。

## 7. 优点
- **信号处理灵活性**：EMD 数据驱动，无需预设基函数，适应非平稳、非线性 BOLD 信号，可捕获多尺度振荡。
- **动态特征提取**：HT 提供瞬时频率和振幅，细粒度描述区域间时变耦合，更贴近真实脑活动。
- **结构‑功能对齐提升**：结果更符合已知猴脑解剖连接，尤其适合高时间分辨率数据。
- **方法论简洁**：计算流程清晰，仅依赖基本的 EMD、HT 和相关性分析，易于复现。

## 8. 不足与局限
- **样本规模有限**：每组仅 10 名被试，结论的推广性待更大队列验证。
- **SC 基准局限**：参照的解剖连接来自猕猴，未采用人脑弥散纤维追踪，且仅包含皮层‑皮层直接通路，忽略皮层下及间接通路。
- **网络单一**：仅评估躯体运动网络，未检验其他具有不同拓扑特性的网络。
- **方法对比不足**：未与先进的 MEMD、VMD 或滑动窗动态 FC 方法比较。
- **阈值敏感性**：基于复合网络度量的肘点阈值选择缺乏标准化，可能影响二值化比较结果。
- **未涉及生理噪声校正**：未详细讨论呼吸、心跳等生理噪声对 EMD 分解的影响及模式混叠问题。

## 9. 结束标记
（完）
