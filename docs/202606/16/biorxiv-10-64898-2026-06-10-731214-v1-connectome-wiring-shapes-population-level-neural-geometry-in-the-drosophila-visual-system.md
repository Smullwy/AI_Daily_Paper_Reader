---
title: Connectome wiring shapes population-level neural geometry in the Drosophila visual system
title_zh: 连接组布线塑造果蝇视觉系统中的群体神经几何结构
authors: "Zhou, M. G., Hasler, J. O."
date: 2026-06-12
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.10.731214v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 用群体神经几何作为生物连接的度量
tldr: 该研究探讨连接组布线如何塑造神经群体表征几何，提出表征几何作为鉴别生物布线与随机布线的群体级忠实度度量。在果蝇视觉系统中，固定为FlyWire连接组的网络产生平滑圆形方向几何，而随机网络无法复现；该几何还与活体T4/T5方向调谐高度吻合。此框架无需行为解码器即可验证连接组仿真的生物保真度，为大规模脑仿真提供可扩展路径。
source: biorxiv
selection_source: fresh_fetch
motivation: 行为实验无法确保模型内部表征的生物忠实性，需一种不依赖行为解码器的群体级度量来区分真实生物布线与任意布线。
method: 在Flyvis预训练的果蝇视觉系统连接组约束网络与稳定性采样随机网络上，使用表征相似性分析与中心核对齐比较群体响应的方向几何，并关联活体神经调谐数据。
result: 连接组网络呈现平滑圆形方向几何，与RSA和CKA均显示显著优于随机网络；且与活体T4/T5方向调谐的相关系数高达0.930，远超随机网络。
conclusion: 表征几何能有效判别生物布线，为连接组尺度仿真提供了一种无需行为解码器或单细胞记录的实践性忠实度验证指标。
---

## 摘要
生物连接组究竟对神经计算有何贡献？行为实验可以检验一个模型是否产生正确的输出，但无法确定其内部表征是否在生物学上忠实。Brunton等人（2026）对此做了具体说明：一个用深度强化学习训练的秀丽隐杆线虫连接组模型能够产生逼真的黑腹果蝇行走行为——然而该模型在生物学上毫无意义，因为行为保真度可以在没有生物保真度的情况下实现。我们需要一种群体层面的度量，能够在无需行为解码器的情况下区分真实的生物连接与任意连接。我们提出表征几何作为这一度量。表征几何——即群体对不同刺激的响应之间的成对距离结构——捕捉了神经回路如何组织其表征空间，独立于它所驱动的行为。我们将表征相似性分析（RSA）和中心核对齐（CKA）应用于Flyvis预训练的黑腹果蝇视觉系统集成模型（Lappalainen等人，2024）：50个架构固定为FlyWire连接组的网络，与稳定性约束的随机基线进行比较（符号保持的权重打乱，并通过拒绝采样确保动态稳定性，n=50）。连接组约束的网络产生平滑的圆形方向几何，这是随机网络无法复制的：对于ON边缘刺激，RSA Spearman r = 0.686（p < 0.0001），对于ON+OFF边缘刺激，r = 0.846（p < 0.0001），CKA结果也证实了这一点（两个实验中p < 0.05）。该几何结构还追踪了在活体果蝇中记录到的生物T4/T5方向调谐（Maisak等人，2013）：连接组约束的几何与生物学匹配程度显著高于随机几何（r = 0.930 vs. r = 0.603，差距Δr = 0.327，p < 0.0001）。在每个刺激极性内，ON通路对方向的编码具有比OFF通路更强的几何分离（Δr = 0.138，95%置信区间[0.091, 0.236]），这与已知的T4/T5在方向选择性强度上的不对称性一致。这些结果确立了表征几何作为一个候选保真度量，能够在群体层面区分生物连接与任意连接。该框架不需要行为解码器，也不需要单单元记录——仅需群体对结构化刺激集的响应——这为随着连接组规模模拟向哺乳动物皮层扩展时，实现可验证的保真度量提供了一条可行路径。

## Abstract
What does biological wiring actually contribute to neural computation? Behavioral experiments can test whether a model produces the right outputs, but they cannot determine whether its internal representations are biologically faithful. Brunton et al. (2026) made this concrete: a C. elegans worm connectome trained with deep reinforcement learning produces realistic Drosophila fly walking -- yet the model is biologically meaningless, because behavioral fidelity is achievable without biological fidelity. We need a population-level metric that discriminates real biological wiring from arbitrary wiring, without requiring a behavioral decoder. We propose representational geometry as that metric. Representational geometry -- the structure of pairwise distances between population responses to different stimuli -- captures how a neural circuit organizes its representational space, independently of what behavior it drives. We apply representational similarity analysis (RSA) and centered kernel alignment (CKA) to the Flyvis pretrained Drosophila melanogaster visual system ensemble (Lappalainen et al. 2024): 50 networks whose architecture is fixed to the FlyWire connectome, compared against stability-constrained random baselines (sign-preserving weight shuffles, rejection-sampled for dynamic stability, n = 50). Connectome-constrained networks produce a smooth circular direction geometry that random networks cannot replicate: RSA Spearman r = 0.686 (p < 0.0001) for ON edge stimuli and r = 0.846 (p < 0.0001) for ON+OFF edge stimuli, corroborated by CKA (p < 0.05 in both experiments). The geometry also tracks biological T4/T5 direction tuning recorded in living flies (Maisak et al. 2013): connectome-constrained geometry matches biology substantially better than random geometry (r = 0.930 vs. r = 0.603, gap {Delta}r = 0.327, p < 0.0001). Within each stimulus polarity, the ON pathway encodes direction with stronger geometric separation than the OFF pathway ({Delta}r = 0.138, 95% CI [0.091, 0.236]), consistent with known T4/T5 asymmetries in direction selectivity strength. These results establish representational geometry as a candidate fidelity metric that discriminates biological from arbitrary wiring at the population level. The framework requires no behavioral decoder and no single-unit recordings -- only population responses to a structured stimulus set -- suggesting a practical path toward verifiable fidelity metrics for connectome-scale emulations as they scale toward mammalian cortex.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文提出的群体表征几何度量与读者的研究方向“brain decoding”、“fMRI representation”、“representation alignment”高度相关，提供了从连接组结构到表征几何的验证框架。
- **启发与意义**：该工作表明，无需行为解码器仅凭群体响应几何即可判别生物保真度，这为脑解码中评估神经编码模型的内部表征质量提供了一种可扩展的新标准。
- **可借鉴点**：可借鉴表征相似性分析和中心核对齐方法，在解码模型或编码模型中将群体几何一致性作为损失或评价指标，以提升表征的生物学合理性。
- **阅读建议**：建议重点阅读其随机对照实验设计及与活体调谐数据的关联验证部分，思考如何将“几何保真度”概念迁移至fMRI群体的多体素模式分析或跨模态对齐任务中。

## 1. 论文的核心问题与整体意义
- **核心问题**：生物连接组究竟对神经计算贡献了什么？行为实验可检验模型输出是否正确，但无法确保其内部表征在生物学上忠实。现有研究表明，行为保真度可在无生物保真度的情况下实现（如用线虫连接组模型经强化学习产生果蝇行走行为）。
- **整体意义**：提出需要一种群体层面的度量，能够在不依赖行为解码器的条件下区分真实的生物布线网络与任意布线网络。该工作将表征几何确立为这样的候选度量，为连接组尺度仿真提供可验证的保真度评估路径。

## 2. 方法论
- **核心思想**：利用群体对不同刺激响应的成对距离结构（即表征几何）捕捉神经回路如何组织其表征空间，该几何独立于下游行为输出。生物连接组应产生特定的、稳健的表征几何，而随机布线无法复现。
- **关键技术**：
  - 对Flyvis预训练的果蝇视觉系统集成模型，固定网络架构为FlyWire连接组（连接组约束网络），并与稳定性约束的随机基线网络进行比较。随机基线通过符号保持的权重打乱并经过拒接采样以保证动态稳定性。
  - 应用**表征相似性分析（RSA）** 计算刺激条件间的表征相似性矩阵，并比较不同网络之间的RSA矩阵相关性（Spearman r）。
  - 应用**中心核对齐（CKA）** 作为另一种几何相似性的度量进行验证。
  - 将网络的表征几何与活体记录的T4/T5神经元方向调谐数据进行关联比较，以评估生物学一致性。

## 3. 实验设计
- **数据集/场景**：果蝇视觉系统对移动边缘刺激（ON边缘、ON+OFF边缘）的群体响应，模拟不同的运动方向。
- **基准与对比**：
  - **连接组约束网络**：50个架构固定为FlyWire连接组的网络（来自Flyvis预训练集成）。
  - **随机基线网络**：50个经过稳定性约束的随机权重打乱网络。
  - **生物参考**：活体果蝇T4/T5神经元的方向调谐记录（Maisak等人，2013）。
- **评价指标**：RSA的Spearman相关系数、CKA相似度、与生物方向调谐的相关系数及两者间的差距（Δr）。

## 4. 资源与算力
- 文中未明确说明所用GPU型号、数量及训练时长。仅提到使用了Flyvis预训练模型集成（Lappalainen等人，2024）和稳定性约束的抽样方法，计算资源细节未披露。

## 5. 实验数量与充分性
- **实验组数**：共进行了若干组对比实验。主要包括：1）ON边缘刺激下的连接组 vs 随机网络几何比较；2）ON+OFF边缘刺激下的同样比较；3）两种刺激极性下CKA验证；4）网络几何与活体T4/T5方向调谐的相关性比较；5）ON通路 vs OFF通路方向编码几何分离程度比较。
- **充分性与公平性**：每组均采用50个网络进行统计检验（p值），并设置了合理的随机对照基线（稳定性约束）。结合多种几何相似度指标和生物学参考数据，实验设计较为全面客观。

## 6. 主要结论与发现
- 连接组约束网络产生平滑的圆形方向几何，随机网络无法复制该结构。在ON边缘刺激条件下RSA Spearman r = 0.686，ON+OFF边缘条件下r = 0.846，均高度显著。
- CKA结果同样证实了连接组网络与生物几何的高度一致性。
- 连接组约束几何与活体T4/T5方向调谐的相关系数高达0.930，远高于随机网络的0.603（Δr = 0.327，p < 0.0001）。
- ON通路的方向编码几何分离优于OFF通路，与已知的T4/T5方向选择性不对称性一致。
- 表征几何能够有效区分生物布线与任意布线，且无需行为解码器或单细胞记录，仅需群体对结构化刺激集的响应。

## 7. 优点
- **框架独立性**：不依赖行为解码器，直接评估内部表征的生物保真度，弥补了仅靠行为结果检验的不足。
- **群体层面度量**：捕捉的是群体几何结构，更具鲁棒性和生物学意义。
- **严格的对照设计**：采用稳定性约束的随机权重作为基线，排除动态稳定性因素干扰，使对比聚焦于布线结构本身。
- **多指标交叉验证**：RSA、CKA与活体数据三方验证，增强了结论的可靠性。

## 8. 不足与局限
- **模型范围**：仅在果蝇视觉系统的特定通路（T4/T5方向选择性）上验证，推广到其他脑区或物种需要进一步研究。
- **刺激集限制**：只采用移动边缘刺激，未探讨更复杂的自然场景或行为任务下的几何结构变化。
- **生物数据比较**：仅与方向调谐这一特定生理属性关联，未与其他生物表征度量（如调谐曲线全貌、噪声相关性等）进行更全面的比较。
- **未涉及行为闭环**：虽然声称无需行为解码器，但未展示加入行为解码时该几何保真度度量是否仍能提供额外信息。

## 9. 研究价值与阅读建议
- **价值**：为大规模脑仿真提供了一种可扩展的保真度验证工具，对脑解码、神经编码模型评估和连接组驱动的机器学习架构设计均有启示。
- **建议**：读者可将表征几何作为内部验证指标融入自己领域的模型开发中，尤其适合需要评估表征生物合理性的神经编码与解码研究。

（完）
