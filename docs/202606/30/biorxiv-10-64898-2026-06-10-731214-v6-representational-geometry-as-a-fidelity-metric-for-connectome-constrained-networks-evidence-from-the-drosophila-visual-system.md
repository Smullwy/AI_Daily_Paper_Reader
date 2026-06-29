---
title: "Representational geometry as a fidelity metric for connectome-constrained networks: evidence from the Drosophila visual system"
title_zh: 表征几何作为连接组约束网络的保真度指标：来自果蝇视觉系统的证据
authors: "Zhou, M. G., Hasler, J. O."
date: 2026-06-25
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.10.731214v6.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 提出表征几何度量用于比较生物与人工网络
tldr: 神经模型仅靠行为输出无法保证内部表征的生物保真度。本文提出表征几何作为度量，以群体响应间的距离结构独立评估回路组织。在果蝇视觉系统连接组约束网络上，通过RSA和CKA对比随机基线，发现约束网络形成平滑方向几何，与生物T4/T5调谐高度一致，且ON通路几何分离更强。表征几何成功区分生物与任意连接，为大型仿真提供了保真度评估新途径。
source: biorxiv
selection_source: fresh_fetch
motivation: 需要一种不依赖行为解码器的群体级度量，以辨别真实生物连接与任意连接。
method: 对Flyvis连接组约束的果蝇视觉网络与稳定性约束的随机打乱网络，进行表征相似性分析与中心核对齐。
result: 约束网络呈现平滑圆形方向几何，与生物T4/T5调谐匹配；ON通路几何分离强于OFF通路；未训练网络已具方向先验，训练放大该几何结构。
conclusion: 表征几何可作为区分生物与任意连接的有效保真度度量，适用于连接组级仿真。
---

## 摘要
生物连接实际对神经计算贡献了什么？行为实验可以测试模型是否产生正确的输出，但无法确定其内部表征是否在生物学上忠实。Brunton等人（2026）具体说明了这一点：用深度强化学习训练的秀丽隐杆线虫连接组能产生逼真的果蝇行走行为——然而该模型在生物学上是无意义的，因为行为保真度可以在没有生物学保真度的情况下实现。我们需要一种群体水平的指标，能够区分真实的生物连接与任意连接，且无需行为解码器。

我们提出将表征几何作为这一指标。表征几何——不同刺激下群体反应之间的成对距离结构——捕捉了神经回路如何组织其表征空间，独立于它所驱动的行为。我们将表征相似性分析（RSA）和中心核对齐（CKA）应用于Flyvis预训练的黑腹果蝇视觉系统集成（Lappalainen等人，2024）：50个网络，其架构固定为Flyvis连接组（从部分电子显微镜来源重建），与稳定性约束的随机基线（保留符号的权重洗牌，经过动态稳定性拒绝采样，n=50）进行比较。

连接组约束的网络产生了平滑的圆形方向几何，而随机网络无法复制：对于ON边缘刺激，RSA Spearman r = 0.686（p < 0.0001），对于ON+OFF边缘刺激，r = 0.846（p < 0.0001），CKA证实了这一点（两个实验中p < 0.05）。该几何结构也追踪了活体果蝇中记录的生物学T4/T5方向调谐（Maisak等人，2013）：连接组约束的几何结构与生物学的匹配度显著优于随机几何（r = 0.930对比r = 0.603，差距Δr = 0.327，p < 0.0001）。在每个刺激极性内，ON通路对方向的编码比OFF通路具有更强的几何分离（Δr = 0.138，95% CI [0.091, 0.236]）；我们报告这是模型集成表征的一种属性，而非已确立的生物学差异：Maisak等人（2013）发现T4和T5除对比极性外在功能上是等价的。为了解决训练混淆，我们将未训练网络与洗牌基线进行了比较：在没有任何任务训练之前，连接组先验在集成水平上塑造了方向几何（r = 0.260，p = 0.041 和 r = 0.215，p = 0.048；均为边际显著，未校正），这表明连接编码了几何先验，而训练放大了它。

这些结果确立了表征几何作为候选保真度指标，它仅使用对结构化刺激集的群体反应来区分生物连接与任意连接，并为接近哺乳动物皮层规模连接组仿真的保真度指标指出了一条实用路径。

## Abstract
What does biological wiring actually contribute to neural computation? Behavioral experiments can test whether a model produces the right outputs, but they cannot determine whether its internal representations are biologically faithful. Brunton et al. (2026) made this concrete: a C. elegans worm connectome trained with deep reinforcement learning produces realistic Drosophila fly walking -- yet the model is biologically meaningless, because behavioral fidelity is achievable without biological fidelity. We need a population-level metric that discriminates real biological wiring from arbitrary wiring, without requiring a behavioral decoder.

We propose representational geometry as that metric. Representational geometry -- the structure of pairwise distances between population responses to different stimuli -- captures how a neural circuit organizes its representational space, independently of what behavior it drives. We apply representational similarity analysis (RSA) and centered kernel alignment (CKA) to the Flyvis pretrained Drosophila melanogaster visual system ensemble (Lappalainen et al. (2024)): 50 networks whose architecture is fixed to the Flyvis connectome (reconstructed from partial electron-microscopy sources), compared against stability-constrained random baselines (sign-preserving weight shuffles, rejection-sampled for dynamic stability, n = 50).

Connectome-constrained networks produce a smooth circular direction geometry that random networks cannot replicate: RSA Spearman r = 0.686 (p < 0.0001) for ON edge stimuli and r = 0.846 (p < 0.0001) for ON+OFF edge stimuli, corroborated by CKA (p < 0.05 in both experiments). The geometry also tracks biological T4/T5 direction tuning recorded in living flies (Maisak et al. 2013): connectome-constrained geometry matches biology substantially better than random geometry (r = 0.930 vs. r = 0.603, gap {Delta}r = 0.327, p < 0.0001). Within each stimulus polarity, the ON pathway encodes direction with stronger geometric separation than the OFF pathway ({Delta}r = 0.138, 95% CI [0.091, 0.236]); we report this as a property of the model ensembles representations rather than an established biological difference: Maisak et al. (2013) find T4 and T5 functionally equivalent except in contrast polarity. To address the training confound, we compared untrained networks against shuffled baselines: the connectome prior shapes directional geometry at the ensemble level before any task training (r = 0.260, p = 0.041 and r = 0.215, p = 0.048; both marginal, uncorrected), suggesting wiring encodes a geometric prior that training amplifies.

These results establish representational geometry as a candidate fidelity metric that discriminates biological from arbitrary wiring using only population responses to a structured stimulus set, and suggest a practical path toward fidelity metrics for connectome-scale emulations approaching mammalian cortex.