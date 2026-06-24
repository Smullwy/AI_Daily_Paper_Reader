---
title: "Representational geometry as a fidelity metric for connectome-constrained networks: evidence from the Drosophila visual system"
title_zh: 表征几何作为连接组约束网络的保真度度量：来自果蝇视觉系统的证据
authors: "Zhou, M. G., Hasler, J. O."
date: 2026-06-24
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.10.731214v5.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 种群级表征几何度量用于生物保真度
tldr: 该研究提出以表征几何作为保真度度量，用于评估连接组约束网络是否真实复现生物神经计算。通过对果蝇视觉系统的分析发现，连接组约束网络产生的方向表征几何（平滑圆形结构）与生物数据高度一致，而随机网络无法复现，表明表征几何能有效区分生物与非生物连接，且无需行为解码器。
source: biorxiv
selection_source: fresh_fetch
motivation: 需要一种群体水平的度量，不依赖行为解码却能区分真实生物连接与任意连接。
method: 对Flyvis果蝇视觉网络进行表征相似性分析（RSA）和中心核对齐（CKA），比较连接组约束网络与随机基线网络的表征几何，并与活体方向选择性数据对比。
result: 连接组约束网络展现出平滑圆形方向几何，与生物T4/T5方向调谐高度相关（r=0.930），显著优于随机网络（r=0.603），且ON通路方向编码强于OFF通路。
conclusion: 表征几何可作为连接组仿真的群体级保真度度量，在无单细胞记录情况下仅需群体响应即可评估生物可信性。
---

## 摘要
生物连接究竟对神经计算有何贡献？行为实验可以测试模型是否产生正确的输出，但无法确定其内部表征在生物学上是否忠实。Brunton等人(2026)对此进行了具体说明：一个经过深度强化学习训练的秀丽隐杆线虫连接组能够产生逼真的黑腹果蝇行走行为——然而该模型在生物学上毫无意义，因为行为保真度可以在没有生物忠实性的情况下实现。我们需要一个群体水平的度量，能够区分真实的生物连接与任意连接，而无需行为解码器。我们提出将表征几何作为该度量。表征几何——不同刺激下群体反应之间成对距离的结构——刻画了神经回路如何组织其表征空间，独立于它所驱动的行为。我们将表征相似性分析(RSA)和中心核对齐(CKA)应用于Flyvis预训练的黑腹果蝇视觉系统集成(Lappalainen等人, 2024)：50个网络，其架构固定于FlyWire连接组，与稳定性约束的随机基线进行比较(符号保持的权重打乱，通过拒绝采样以确保动态稳定性，n = 50)。受连接组约束的网络产生了一种平滑的圆形方向几何，而随机网络无法复制：对于ON边缘刺激，RSA Spearman r = 0.686 (p < 0.0001)；对于ON+OFF边缘刺激，r = 0.846 (p < 0.0001)，并得到CKA的证实(两项实验中p < 0.05)。该几何还追踪了在活体果蝇中记录的生物T4/T5方向调谐(Maisak等人, 2013)：受连接组约束的几何与生物学的匹配程度显著优于随机几何(r = 0.930对比r = 0.603, 差距Δr = 0.327, p < 0.0001)。在每个刺激极性内，ON通路编码方向的几何分离强于OFF通路(Δr = 0.138, 95% CI [0.091, 0.236])，这与已知的T4/T5方向选择性强度不对称性一致。这些结果确立了表征几何作为候选保真度度量，能够在群体水平上区分生物连接与任意连接。该框架无需行为解码器，也无需单单位记录——仅需对结构化刺激集的群体反应——为连接组规模仿真在向哺乳动物皮层扩展时走向可验证的保真度度量提供了一条实用路径。

## Abstract
What does biological wiring actually contribute to neural computation? Behavioral experiments can test whether a model produces the right outputs, but they cannot determine whether its internal representations are biologically faithful. Brunton et al. (2026) made this concrete: a C. elegans worm connectome trained with deep reinforcement learning produces realistic Drosophila fly walking -- yet the model is biologically meaningless, because behavioral fidelity is achievable without biological fidelity. We need a population-level metric that discriminates real biological wiring from arbitrary wiring, without requiring a behavioral decoder. We propose representational geometry as that metric. Representational geometry -- the structure of pairwise distances between population responses to different stimuli -- captures how a neural circuit organizes its representational space, independently of what behavior it drives. We apply representational similarity analysis (RSA) and centered kernel alignment (CKA) to the Flyvis pretrained Drosophila melanogaster visual system ensemble (Lappalainen et al. 2024): 50 networks whose architecture is fixed to the FlyWire connectome, compared against stability-constrained random baselines (sign-preserving weight shuffles, rejection-sampled for dynamic stability, n = 50). Connectome-constrained networks produce a smooth circular direction geometry that random networks cannot replicate: RSA Spearman r = 0.686 (p < 0.0001) for ON edge stimuli and r = 0.846 (p < 0.0001) for ON+OFF edge stimuli, corroborated by CKA (p < 0.05 in both experiments). The geometry also tracks biological T4/T5 direction tuning recorded in living flies (Maisak et al. 2013): connectome-constrained geometry matches biology substantially better than random geometry (r = 0.930 vs. r = 0.603, gap {Delta}r = 0.327, p < 0.0001). Within each stimulus polarity, the ON pathway encodes direction with stronger geometric separation than the OFF pathway ({Delta}r = 0.138, 95% CI [0.091, 0.236]), consistent with known T4/T5 asymmetries in direction selectivity strength. These results establish representational geometry as a candidate fidelity metric that discriminates biological from arbitrary wiring at the population level. The framework requires no behavioral decoder and no single-unit recordings -- only population responses to a structured stimulus set -- suggesting a practical path toward verifiable fidelity metrics for connectome-scale emulations as they scale toward mammalian cortex.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：弱相关。本文聚焦果蝇视觉连接组的生物保真度度量，与读者关注的“人脑解码、fMRI表征对齐”属于不同物种和模态。
- **启发与意义**：所提的表征几何（群体响应距离结构）作为一种免行为解码器的保真度度量，为人脑fMRI表征的评估提供了一种群体级、无需行为标签的定量策略。
- **可借鉴点**：可采用表征相似性分析（RSA）和中心核对齐（CKA）来量化不同网络或脑区表征空间的组织方式，尤其在多视图约束或表征对齐中可作为监督信号。
- **阅读建议**：建议关注其度量设计思想，但不必深究果蝇视觉回路细节；可思考如何将“几何保真度”迁移到fMRI数据中评估编码模型的内部表征质量。

## 1. 论文的核心问题与整体含义
- **核心问题**：生物连接组对神经计算的真实贡献是什么？传统行为实验可验证模型输出正确性，却无法判断其内部表征是否生物忠实。Brunton等人（2026）的案例显示，通过深度强化学习训练的线虫连接组能产生逼真的果蝇行走行为，但生物学上毫无意义——行为保真度可在没有生物忠实性的情况下实现。
- **研究动机**：需要一种群体水平的度量，能够区分真实生物连接与任意连接，且不依赖行为解码器或单神经元记录。
- **整体含义**：提出用**表征几何**（population responses之间成对距离的结构）作为连接组仿真保真度的候选度量。该几何刻画了神经回路如何组织表征空间，独立于所驱动的行为，能在无行为标签的条件下评估网络内部表征的生物可信性。

## 2. 论文提出的方法论
- **核心思想**：利用表征几何反映群体活动在刺激空间中的结构，生物连接组约束的网络应产生与活体数据一致的表征几何，而随机权重网络则无法复现，从而实现对生物连接特异性的判别。
- **关键技术细节**：
  - 采用**Flyvis**预训练的果蝇视觉系统网络集成（Lappalainen et al., 2024），架构固定于FlyWire连接组（连接组约束网络，n=50）。
  - 构建**稳定性约束的随机基线**：符号保持的权重打乱，并通过拒绝采样确保动态稳定性（n=50），作为非生物连接对照。
  - **表征相似性分析（RSA）**：计算不同刺激下群体响应之间的成对距离（如余弦距离），构建表征相异性矩阵（RDM），比较不同网络RDMs之间的Spearman秩相关。
  - **中心核对齐（CKA）**：作为补充度量，验证网络表征空间几何的一致性。
  - **与生物数据比对**：利用Maisak等人（2013）在活体果蝇中记录的T4/T5方向调谐数据，计算连接组约束网络与随机网络表征几何分别与生物数据的相关性（`r`值），并比较两者的差距。
- **公式或算法流程（文字描述）**：
  - 第一步：对结构化刺激集（如不同方向的运动边缘），提取群体神经元响应。
  - 第二步：计算每个网络的响应矩阵的RDM（例如 $1 - \text{correlation}$ 作为距离），形成表征几何。
  - 第三步：通过RSA，计算两个不同网络RDMs之间的Spearman相关 $r$，评估几何相似度。
  - 第四步：将该几何与生物调谐曲线衍生出的理想几何模板进行相关分析，得到 $r_{\text{bio}}$。
  - 第五步：比较连接组约束网络与随机基线的 $r_{\text{bio}}$，以差距 $\Delta r$ 量化生物保真度，并进行显著性检验。

## 3. 实验设计
- **数据集与场景**：
  - 使用Flyvis预训练网络的群体响应，模拟果蝇视觉系统对运动边缘刺激的反应。
  - 刺激集：ON边缘、ON+OFF边缘，覆盖不同运动方向。
  - 生物基准：Maisak等人（2013）发表的活体果蝇T4/T5神经元的方向调谐数据。
- **Benchmark与对比方法**：
  - 主要对比：连接组约束网络（n=50） vs. 稳定性约束的随机权重网络（n=50）。
  - 度量方法：RSA Spearman相关、CKA相似度、与生物数据的线性相关。
  - 通路分析：分别评估ON通路和OFF通路的方向几何分离程度。

## 4. 资源与算力
- 论文摘要及提供材料中**未明确说明**所用GPU型号、数量或训练时长。Flyvis网络为已预训练模型，分析过程主要为表征相似性计算，算力需求应较小，但无具体数据。

## 5. 实验数量与充分性
- **实验组数**：至少包含两组主实验：
  1. 对比连接组约束网络与随机网络在ON边缘和ON+OFF边缘刺激下的RSA相关性与CKA相似度（各50个网络，交叉比较）。
  2. 将网络表征几何与活体T4/T5方向调谐数据拟合，比较两类网络与生物数据的相关性。
  3. 额外分析：ON通路与OFF通路的方向编码差异。
- **充分性与公平性**：
  - 双度量（RSA和CKA）互相验证，增强了结论可靠性。
  - 随机基线设计考虑了动态稳定性，避免了功能性缺失的混淆，比较相对公平。
  - 实验覆盖不同刺激极性和通路，提供内部一致性验证，但仅针对单一脑区和一类运动刺激，未测试更复杂的视觉特征或任务，总体实验数量适中且设计合理。

## 6. 论文的主要结论与发现
- 连接组约束网络产生**平滑圆形方向几何**，随机网络无法复现（ON边缘 $r=0.686$，ON+OFF边缘 $r=0.846$，均 $p<0.0001$），CKA结果一致。
- 该几何与活体生物T4/T5方向调谐高度相关：连接组约束网络优于随机网络（$r=0.930$ vs. $r=0.603$，$\Delta r=0.327$，$p<0.0001$）。
- ON通路编码方向的几何分离强于OFF通路（$\Delta r=0.138$，$95\%\ \text{CI}\ [0.091,0.236]$），符合已知的T4/T5方向选择性强度不对称性。
- 总体结论：表征几何可作为连接组仿真的群体级保真度度量，无需行为解码器或单细胞记录，仅需群体对结构化刺激的反应即可。

## 7. 优点
- **创新度量**：提出了一种不依赖于行为输出、仅从内部表征几何评估生物保真度的新思路，解决了行为保真度与生物忠实性脱节的问题。
- **严格对照**：引入稳定性约束的随机打乱权重作为基线，排除了仅由动态稳定性带来的假象，对比公平且有说服力。
- **双重验证**：同时使用RSA和CKA两种相似性度量，增强几何一致性结论的鲁棒性。
- **贴近生物数据**：直接与已发表的活体记录比对，将计算模型的内部表征与实验神经科学数据挂钩，增强了生物可信度。

## 8. 不足与局限
- **物种与脑区局限**：仅基于果蝇早期视觉通路，是否能推广到哺乳动物皮层等大规模、高异质性网络仍未知。
- **刺激集简单**：仅用运动边缘方向的几何形状来评估，未覆盖更丰富的自然刺激或复杂特征组合，度量普适性待验证。
- **随机构造的单一性**：随机基线仅使用符号保持的权重打乱，可能未穷尽所有非生物但功能正常的网络配置，存在方法盲区。
- **缺乏因果验证**：表征几何的对应关系仅基于相关，未通过因果扰动（如连接组编辑）来直接证明连接结构是几何形成的必要条件。
- **解码器独立性前提**：虽然声称无需行为解码器，但刺激集的选择和几何模板的构建仍需先验知识，实际应用中可能依赖具体研究问题。

## 9. （已前置为第一节，此处不再重复）

（完）
