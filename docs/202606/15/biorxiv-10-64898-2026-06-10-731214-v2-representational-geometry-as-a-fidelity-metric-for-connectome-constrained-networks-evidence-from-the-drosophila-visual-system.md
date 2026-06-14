---
title: "Representational geometry as a fidelity metric for connectome-constrained networks: evidence from the Drosophila visual system"
title_zh: 作为连接组约束网络保真度指标的表征几何：来自果蝇视觉系统的证据
authors: "Zhou, M. G., Hasler, J. O."
date: 2026-06-13
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.10.731214v2.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 提出表征几何作为神经网络生物保真度指标
tldr: 研究提出表征几何作为连接组约束网络忠实度度量，解决行为忠实不一定生物忠实的问题。通过对果蝇视觉系统连接组约束网络与随机网络的表征相似性分析，发现连接组网络产生平滑圆形几何且与生物记录一致，证明该度量能有效区分生物连接，无需行为解码器或单细胞记录，为连接组模拟提供可扩展验证框架。
source: biorxiv
selection_source: fresh_fetch
motivation: 需要一种群体水平度量来判别生物连接与任意连接，因为行为忠实并不保证内部表征的生物忠实。
method: 对果蝇视觉系统模型应用表征相似性分析和中心核对齐，比较连接组约束网络与随机基线网络的群体表征几何。
result: 连接组网络呈现平滑圆形方向几何且与生物T4/T5记录高度一致，随机网络无法复制，ON通路几何分离更强。
conclusion: 表征几何作为忠实度度量，能有效区分生物连接，无需行为或单细胞数据，为连接组模拟验证提供可行路径。
---

## 摘要
生物连接究竟对神经计算贡献了什么？行为实验可以检验模型是否产生正确的输出，但无法确定其内部表征是否具有生物学真实性。Brunton et al. (2026) 将此具体化：用深度强化学习训练的秀丽隐杆线虫连接组能够产生逼真的黑腹果蝇行走行为——然而该模型在生物学上毫无意义，因为行为保真度的达成并不依赖生物学保真度。我们需要一种群体层面的指标，能够区分真实的生物连接和任意连接，且不需要行为解码器。我们提出表征几何作为这一指标。表征几何——即群体对不同刺激反应的成对距离结构——刻画了神经回路如何组织其表征空间，独立于它所驱动的行为。我们将表征相似性分析（RSA）和中心核对齐（CKA）应用于 Flyvis 预训练的黑腹果蝇视觉系统集成（Lappalainen et al. 2024）：50 个架构固定于 FlyWire 连接组的网络，与稳定性约束的随机基线进行比较（符号保持的权重混洗，通过拒绝采样保证动态稳定，n = 50）。连接组约束的网络产生了平滑的圆形方向几何，这是随机网络无法复现的：对于 ON 边缘刺激，RSA Spearman r = 0.686（p < 0.0001），对于 ON+OFF 边缘刺激，r = 0.846（p < 0.0001），CKA 结果也证实了这一点（两个实验中 p < 0.05）。该几何还追踪了活体果蝇中记录的生物 T4/T5 方向选择性（Maisak et al. 2013）：连接组约束的几何与生物数据的匹配程度显著优于随机几何（r = 0.930 vs. r = 0.603，差距 Δr = 0.327，p < 0.0001）。在每个刺激极性内，ON 通路编码方向的几何分离度强于 OFF 通路（Δr = 0.138，95% CI [0.091, 0.236]），这与已知的 T4/T5 方向选择性强度不对称性一致。这些结果确立了表征几何作为一种候选保真度指标，能够在群体层面区分生物连接和任意连接。该框架不需要行为解码器和单细胞记录——仅需要群体对结构化刺激集的反应——这为可验证的保真度指标提供了一条实用路径，随着连接组规模的仿真向哺乳动物皮层迈进。

## Abstract
What does biological wiring actually contribute to neural computation? Behavioral experiments can test whether a model produces the right outputs, but they cannot determine whether its internal representations are biologically faithful. Brunton et al. (2026) made this concrete: a C. elegans worm connectome trained with deep reinforcement learning produces realistic Drosophila fly walking -- yet the model is biologically meaningless, because behavioral fidelity is achievable without biological fidelity. We need a population-level metric that discriminates real biological wiring from arbitrary wiring, without requiring a behavioral decoder. We propose representational geometry as that metric. Representational geometry -- the structure of pairwise distances between population responses to different stimuli -- captures how a neural circuit organizes its representational space, independently of what behavior it drives. We apply representational similarity analysis (RSA) and centered kernel alignment (CKA) to the Flyvis pretrained Drosophila melanogaster visual system ensemble (Lappalainen et al. 2024): 50 networks whose architecture is fixed to the FlyWire connectome, compared against stability-constrained random baselines (sign-preserving weight shuffles, rejection-sampled for dynamic stability, n = 50). Connectome-constrained networks produce a smooth circular direction geometry that random networks cannot replicate: RSA Spearman r = 0.686 (p < 0.0001) for ON edge stimuli and r = 0.846 (p < 0.0001) for ON+OFF edge stimuli, corroborated by CKA (p < 0.05 in both experiments). The geometry also tracks biological T4/T5 direction tuning recorded in living flies (Maisak et al. 2013): connectome-constrained geometry matches biology substantially better than random geometry (r = 0.930 vs. r = 0.603, gap {Delta}r = 0.327, p < 0.0001). Within each stimulus polarity, the ON pathway encodes direction with stronger geometric separation than the OFF pathway ({Delta}r = 0.138, 95% CI [0.091, 0.236]), consistent with known T4/T5 asymmetries in direction selectivity strength. These results establish representational geometry as a candidate fidelity metric that discriminates biological from arbitrary wiring at the population level. The framework requires no behavioral decoder and no single-unit recordings -- only population responses to a structured stimulus set -- suggesting a practical path toward verifiable fidelity metrics for connectome-scale emulations as they scale toward mammalian cortex.