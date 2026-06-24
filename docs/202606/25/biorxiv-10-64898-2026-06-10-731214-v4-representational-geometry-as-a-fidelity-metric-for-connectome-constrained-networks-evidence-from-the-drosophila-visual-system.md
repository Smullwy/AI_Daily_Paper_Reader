---
title: "Representational geometry as a fidelity metric for connectome-constrained networks: evidence from the Drosophila visual system"
title_zh: 表征几何学作为连接组约束网络的保真度指标：来自果蝇视觉系统的证据
authors: "Zhou, M. G., Hasler, J. O."
date: 2026-06-23
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.10.731214v4.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 提出表征几何作为生物保真度的人口级度量
tldr: 研究提出表征几何学作为评估连接组约束网络生物保真度的新指标。以果蝇视觉系统为对象，通过比较基于连接组固定架构的50个预训练网络与随机基线，发现连接组网络形成的方向表征几何与生物数据高度一致，而随机网络无法复现，表明该指标能有效区分生物接线与任意接线，无需行为解码器或单细胞记录。
source: biorxiv
selection_source: fresh_fetch
motivation: 行为测试无法确保模型内部表征的生物真实性，需要一种无需行为解码器的群体水平度量标准来区分真实生物接线。
method: 利用表征相似性分析和中心核对齐，比较基于果蝇连接组约束的50个预训练视觉网络与动态稳定性约束的随机网络。
result: 连接组网络在方向和边缘刺激上产生高度一致的圆形几何，与生物T4/T5方向调谐匹配度显著优于随机网络，且ON通路方向编码强于OFF通路。
conclusion: 表征几何学可以作为连接组尺度仿真的生物保真度候选度量，为从果蝇到哺乳动物皮层的验证提供实用路径。
---

## 摘要
生物学连接到底对神经计算有什么贡献？行为实验可以测试模型是否产生了正确的输出，但无法确定其内部表征在生物学上是否忠实。Brunton等人（2026）将这一点具体化：一个用深度强化学习训练的秀丽隐杆线虫连接组产生了逼真的果蝇行走——然而该模型在生物学上是无意义的，因为行为保真度可以在没有生物保真的情况下实现。我们需要一个群体水平的指标，能够区分真实的生物连接与任意连接，且无需行为解码器。我们提出表征几何学作为这一指标。表征几何——即对不同刺激的群体反应之间的成对距离结构——捕捉了神经回路如何组织其表征空间，独立于它驱动何种行为。我们将表征相似性分析（RSA）和中心核对齐（CKA）应用于Flyvis预训练的黑腹果蝇视觉系统集成（Lappalainen等人，2024）：50个架构固定于FlyWire连接组的网络，与稳定性约束的随机基线（符号保持的权重打乱，通过拒绝采样确保动态稳定性，n=50）进行比较。连接组约束的网络产生了随机网络无法复制的平滑圆形方向几何：对于ON边缘刺激，RSA斯皮尔曼r=0.686（p<0.0001），对于ON+OFF边缘刺激，r=0.846（p<0.0001），并由CKA证实（两个实验中p<0.05）。该几何也与活体果蝇中记录的生物T4/T5方向调谐（Maisak等人，2013）相符：连接组约束的几何比随机几何更接近生物学（r=0.930 vs. r=0.603，差距Δr=0.327，p<0.0001）。在每个刺激极性内，ON通路编码方向的几何分离比OFF通路更强（Δr=0.138，95% CI [0.091, 0.236]），与已知的T4/T5方向选择性强度不对称性一致。这些结果确立了表征几何学作为一个候选保真度指标，能够在群体水平上区分生物连接与任意连接。该框架无需行为解码器，也无需单单元记录——仅需群体对结构化刺激集的反应——这为连接组规模仿真在扩展至哺乳动物皮层时，走向可验证的保真度指标提供了一条实用路径。

## Abstract
What does biological wiring actually contribute to neural computation? Behavioral experiments can test whether a model produces the right outputs, but they cannot determine whether its internal representations are biologically faithful. Brunton et al. (2026) made this concrete: a C. elegans worm connectome trained with deep reinforcement learning produces realistic Drosophila fly walking -- yet the model is biologically meaningless, because behavioral fidelity is achievable without biological fidelity. We need a population-level metric that discriminates real biological wiring from arbitrary wiring, without requiring a behavioral decoder. We propose representational geometry as that metric. Representational geometry -- the structure of pairwise distances between population responses to different stimuli -- captures how a neural circuit organizes its representational space, independently of what behavior it drives. We apply representational similarity analysis (RSA) and centered kernel alignment (CKA) to the Flyvis pretrained Drosophila melanogaster visual system ensemble (Lappalainen et al. 2024): 50 networks whose architecture is fixed to the FlyWire connectome, compared against stability-constrained random baselines (sign-preserving weight shuffles, rejection-sampled for dynamic stability, n = 50). Connectome-constrained networks produce a smooth circular direction geometry that random networks cannot replicate: RSA Spearman r = 0.686 (p < 0.0001) for ON edge stimuli and r = 0.846 (p < 0.0001) for ON+OFF edge stimuli, corroborated by CKA (p < 0.05 in both experiments). The geometry also tracks biological T4/T5 direction tuning recorded in living flies (Maisak et al. 2013): connectome-constrained geometry matches biology substantially better than random geometry (r = 0.930 vs. r = 0.603, gap {Delta}r = 0.327, p < 0.0001). Within each stimulus polarity, the ON pathway encodes direction with stronger geometric separation than the OFF pathway ({Delta}r = 0.138, 95% CI [0.091, 0.236]), consistent with known T4/T5 asymmetries in direction selectivity strength. These results establish representational geometry as a candidate fidelity metric that discriminates biological from arbitrary wiring at the population level. The framework requires no behavioral decoder and no single-unit recordings -- only population responses to a structured stimulus set -- suggesting a practical path toward verifiable fidelity metrics for connectome-scale emulations as they scale toward mammalian cortex.