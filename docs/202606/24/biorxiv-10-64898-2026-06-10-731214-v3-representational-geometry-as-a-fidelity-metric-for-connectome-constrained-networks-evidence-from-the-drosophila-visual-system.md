---
title: "Representational geometry as a fidelity metric for connectome-constrained networks: evidence from the Drosophila visual system"
title_zh: 表征几何作为连接组约束网络的保真度度量：来自果蝇视觉系统的证据
authors: "Zhou, M. G., Hasler, J. O."
date: 2026-06-23
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.10.731214v3.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 表征几何用于脑机对齐
tldr: 现有研究多通过行为输出评估模型生物保真度，但行为相符不代表内部表征忠实于生物。本文提出以表征几何学作为群体水平度量，在果蝇视觉系统中应用RSA与CKA分析连接组约束网络，发现其产生独特的平滑圆形方向几何，与随机网络显著不同，且更贴合生物T4/T5方向调谐。结果表明表征几何学能有效区分生物与任意布线，为连接组仿真提供无行为解码器的保真度标准。
source: biorxiv
selection_source: fresh_fetch
motivation: 行为保真度无法保证模型内部表征的生物忠实性，亟需群体水平的保真度度量。
method: 通过表征相似性分析（RSA）和中心核对齐（CKA）比较连接组约束网络与随机基线的表征几何。
result: 连接组约束网络形成平滑圆形方向几何，与随机网络显著不同（RSA r=0.686–0.846），且与生物T4/T5调谐匹配更好（Δr=0.327）。
conclusion: 表征几何学能有效区分生物与任意布线，无需行为解码或单单元记录，可作为连接组仿真的通用保真度度量。
---

## 摘要
生物连接究竟对神经计算有何贡献？行为实验可以测试模型是否产生正确的输出，但无法确定其内部表征在生物学上是否保真。Brunton等人（2026）将这一点具体化：一个通过深度强化学习训练的秀美隐杆线虫连接组产生了逼真的黑腹果蝇行走行为——然而该模型在生物学上毫无意义，因为行为保真度可以在没有生物学保真度的情况下实现。我们需要一种群体水平的度量标准，能够区分真实的生物连接与任意连接，而无需行为解码器。我们提出将表征几何作为这种度量标准。表征几何——即群体对不同刺激响应的成对距离结构——捕捉了神经回路如何组织其表征空间，独立于它所驱动的行为。我们将表征相似性分析（RSA）和中心核对齐（CKA）应用于Flyvis预训练的黑腹果蝇视觉系统集成模型（Lappalainen等人，2024）：包含50个网络，其架构固定于FlyWire连接组，并与稳定性约束的随机基线网络（保持符号的权重打乱，通过拒绝采样确保动态稳定性，n=50）进行比较。受连接组约束的网络产生了光滑的圆形方向几何结构，而随机网络无法复制：对于ON边缘刺激，RSA斯皮尔曼相关系数r = 0.686（p < 0.0001），对于ON+OFF边缘刺激，r = 0.846（p < 0.0001），CKA结果也支持这一结论（两项实验中p < 0.05）。这种几何结构还追踪了在活体果蝇中记录到的生物T4/T5方向调谐（Maisak等人，2013）：受连接组约束的几何结构与生物数据的匹配度远优于随机几何结构（r = 0.930对比r = 0.603，差距Δr = 0.327，p < 0.0001）。在每个刺激极性内，ON通路对方向的编码具有比OFF通路更强的几何分离（Δr = 0.138，95% CI [0.091, 0.236]），这与已知的T4/T5在方向选择性强度上的不对称性一致。这些结果确立了表征几何作为一种候选保真度度量标准，能够在群体水平上区分生物连接与任意连接。该框架无需行为解码器，也无需单细胞记录——仅需群体对结构化刺激集的响应——这为连接组规模的仿真在向哺乳动物皮层扩展时，提供了一条通往可验证保真度度量的实用路径。

## Abstract
What does biological wiring actually contribute to neural computation? Behavioral experiments can test whether a model produces the right outputs, but they cannot determine whether its internal representations are biologically faithful. Brunton et al. (2026) made this concrete: a C. elegans worm connectome trained with deep reinforcement learning produces realistic Drosophila fly walking -- yet the model is biologically meaningless, because behavioral fidelity is achievable without biological fidelity. We need a population-level metric that discriminates real biological wiring from arbitrary wiring, without requiring a behavioral decoder. We propose representational geometry as that metric. Representational geometry -- the structure of pairwise distances between population responses to different stimuli -- captures how a neural circuit organizes its representational space, independently of what behavior it drives. We apply representational similarity analysis (RSA) and centered kernel alignment (CKA) to the Flyvis pretrained Drosophila melanogaster visual system ensemble (Lappalainen et al. 2024): 50 networks whose architecture is fixed to the FlyWire connectome, compared against stability-constrained random baselines (sign-preserving weight shuffles, rejection-sampled for dynamic stability, n = 50). Connectome-constrained networks produce a smooth circular direction geometry that random networks cannot replicate: RSA Spearman r = 0.686 (p < 0.0001) for ON edge stimuli and r = 0.846 (p < 0.0001) for ON+OFF edge stimuli, corroborated by CKA (p < 0.05 in both experiments). The geometry also tracks biological T4/T5 direction tuning recorded in living flies (Maisak et al. 2013): connectome-constrained geometry matches biology substantially better than random geometry (r = 0.930 vs. r = 0.603, gap {Delta}r = 0.327, p < 0.0001). Within each stimulus polarity, the ON pathway encodes direction with stronger geometric separation than the OFF pathway ({Delta}r = 0.138, 95% CI [0.091, 0.236]), consistent with known T4/T5 asymmetries in direction selectivity strength. These results establish representational geometry as a candidate fidelity metric that discriminates biological from arbitrary wiring at the population level. The framework requires no behavioral decoder and no single-unit recordings -- only population responses to a structured stimulus set -- suggesting a practical path toward verifiable fidelity metrics for connectome-scale emulations as they scale toward mammalian cortex.