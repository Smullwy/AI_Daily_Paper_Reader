---
title: NeurIPS25 SynBrain_ Enhancing Visual-to-fMRI Synthesis via Probabilistic Representation Learning
title_zh: NeurIPS25 SynBrain：通过概率表示学习增强视觉到fMRI的合成
authors: Unknown
date: 2026-05-31
pdf: assets/local_pdfs/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 跨被试fMRI编码及功能一致性保持
tldr: 在神经科学中，视觉刺激到fMRI脑活动是一对多映射，传统确定性方法难以同时建模生物变异性和功能一致性。本文提出SynBrain，一个概率生成框架，通过BrainVAE将神经表征建模为连续概率分布并保持语义约束，配合语义映射器将视觉语义投影到神经流形，实现高保真fMRI合成。实验表明，SynBrain在个体编码性能上超越现有方法，能高效适应新受试者，合成数据可提升图像解码，并揭示跨试验和受试者的功能一致性与可解释的变异模式。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-003.webp\", \"caption\": \"Figure 1: Overview of SynBrain for subject-adaptive visual-to-fMRI synthesis and downstream decoding applications. SynBrain is trained on full fMRI recordings from a source subject and adapted to novel subjects using limited data. It generates semantically consistent neural responses that support brain functional analysis and enhance downstream decoding through synthetic data augmentation.\", \"page\": 2, \"index\": 3, \"width\": 816, \"height\": 263}, {\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-006.webp\", \"caption\": \"Figure 2: Overview of the SynBrain framework. Stage 1: BrainVAE models the probabilistic distribution of fMRI responses conditioned on CLIP visual embeddings zCLIP ; Stage 2: S2N Mapper learns to map zCLIP into the latent space of BrainVAE; Stage 3: At inference, the frozen S2N Mapper performs a one-step mapping from zCLIP to the BrainVAE latent space for visualto-fMRI synthesis. Synthesized fMRI could be further visualized via a pretrained fMRI-to-image generator.\", \"page\": 3, \"index\": 6, \"width\": 812, \"height\": 358}, {\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-007.webp\", \"caption\": \"Figure 3: Architecture and performance comparison of MLP-based baselines and our proposed BrainVAE. Left: Architecture comparisons; Right: Validation performance comparisons.\", \"page\": 4, \"index\": 7, \"width\": 813, \"height\": 397}, {\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-005.webp\", \"caption\": \"Table 1: Quantitative visual-to-fMRI synthesis performance comparisons. Top section: Subjectspecific performance averaged across 4 subjects, Trials=N denotes sampling repetitions during inference. Bottom section: Few-shot adaptation performance with only 1 hour of data from the novel subject (Sub2, Sub5, Sub7).\", \"page\": 7, \"index\": 5, \"width\": 822, \"height\": 181}, {\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-004.webp\", \"caption\": \"Figure 4: Visual-to-fMRI synthesis results of SynBrain and fMRI-to-image visualizations.\", \"page\": 7, \"index\": 4, \"width\": 802, \"height\": 227}, {\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-010.webp\", \"caption\": \"Figure 5: Cross-trial and cross-subject brain functional consistency visualization. Left: Comparisons of activation maps between different fMRI trials and our synthesized fMRI evoked by the same stimuli. Right: Comparisons of activation maps between Sub2 (Full-data, 40h) and Sub1→Sub2 (Few-Shot, 1h) evoked by representative categories of visual stimuli.\", \"page\": 9, \"index\": 10, \"width\": 806, \"height\": 273}, {\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-001.webp\", \"caption\": \"Figure 6: UMAP visualizations of distribution gap in DiT and fMRI-to-image visualizations. Left: Noisy fMRI representations (blue) used for DiT training still lie close to the original fMRI representations (orange), but far away from pure Gaussian noise (green) used for DiT inference, showing a clear distribution gap between training and testing stages in DiT. Right: SynBrain (BrainVAE-S2N, onestep mapping started from original fMRI representations) produces more realistic and semantically consistent images compared to BrainVAE-DiT (multi-step denoising started from Gaussian noise).\", \"page\": 26, \"index\": 1, \"width\": 806, \"height\": 333}, {\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-009.webp\", \"caption\": \"Figure 7: Semantically consistent synthesis of SynBrain under stochastic sampling with nf=1.\", \"page\": 27, \"index\": 9, \"width\": 816, \"height\": 862}, {\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-002.webp\", \"caption\": \"Table 11: Quantitative few-shot visual-to-fMRI synthesis performance on novel subjects.\", \"page\": 30, \"index\": 2, \"width\": 822, \"height\": 199}, {\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-011.webp\", \"caption\": \"Figure 8: Comparisons of activation maps and fMRI-to-Image visualizations across subjects evoked by the same visual stimuli. All models are trained on full data (40h) from specific subjects.\", \"page\": 31, \"index\": 11, \"width\": 818, \"height\": 441}, {\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-012.webp\", \"caption\": \"Table 12: Quantitative few-shot fMRI-to-image decoding performance comparisons on novel subjects.\", \"page\": 31, \"index\": 12, \"width\": 822, \"height\": 238}, {\"url\": \"assets/figures/local-pdf/local-20260531-202408655474-neurips25-synbrain_-enhancing-visual-to-fmri-synthesis-via-probabilistic-representation-learning/fig-008.webp\", \"caption\": \"Figure 9: Comparisons of activation maps between full-data (40h) training (i.e., Sub2, Sub5, Sub7) and few-shot (1h) adaptation (i.e., Sub1→Sub2, Sub1→Sub5, Sub1→Sub7) across subjects evoked by representative categories of visual stimuli.\", \"page\": 32, \"index\": 8, \"width\": 818, \"height\": 599}]"
motivation: 解决视觉到fMRI的一对多映射中，确定性方法无法同时捕捉神经响应的生物变异性和功能一致性的挑战。
method: 提出SynBrain框架，包含概率BrainVAE和语义到神经映射器，通过概率表示学习将视觉语义映射到神经响应分布以合成fMRI。
result: 在视觉-fMRI编码任务上超越SOTA，实现小样本受试者适应，合成信号提升解码性能，并揭示了功能一致性与生物变异性的可解释模式。
conclusion: SynBrain有效建模了视觉到神经的概率转换，在编码、适应性和解码增强上均表现优异，为理解神经变异性和功能架构提供了工具。
---

## 摘要
揭示视觉刺激如何转化为皮层反应是计算神经科学中的一项根本性挑战。这种视觉到神经的映射本质上是一对多的关系，因为相同的视觉输入会在不同试次、情境和受试者间可靠地引发有差异的血流动力学反应。然而，现有的确定性方法难以同时建模这种生物变异性，并捕捉编码刺激信息的潜在功能一致性。为了解决这些局限，我们提出了SynBrain，一个生成式框架，以概率和生物学可解释的方式模拟从视觉语义到神经反应的转换。SynBrain引入了两个关键组件：(i) BrainVAE通过概率学习将神经表征建模为连续概率分布，同时通过视觉语义约束保持功能一致性；(ii) 语义到神经映射器充当语义传输通道，将视觉语义投影到神经反应流形中，以促进高保真fMRI合成。实验结果表明，SynBrain在特定受试者的视觉到fMRI编码性能上超越了现有最优方法。此外， SynBrain能够利用少量数据高效适应新受试者，并合成高质量的fMRI信号，有效提升数据有限情况下的fMRI到图像解码性能。除此之外，SynBrain揭示了跨试次和跨受试者的功能一致性，合成信号捕捉了由生物神经变异性塑造的可解释模式。我们的代码见https://github.com/MichaelMaiii/SynBrain。

## Abstract
Deciphering how visual stimuli are transformed into cortical responses is a funda- mental challenge in computational neuroscience. This visual-to-neural mapping is inherently a one-to-many relationship, as identical visual inputs reliably evoke variable hemodynamic responses across trials, contexts, and subjects. However, existing deterministic methods struggle to simultaneously model this biological variability while capturing the underlying functional consistency that encodes stimulus information. To address these limitations, we propose SynBrain, a gen- erative framework that simulates the transformation from visual semantics to neural responses in a probabilistic and biologically interpretable manner. Syn- Brain introduces two key components: (i) BrainVAE models neural represen- tations as continuous probability distributions via probabilistic learning while maintaining functional consistency through visual semantic constraints; (ii) A Semantic-to-Neural Mapper acts as a semantic transmission pathway, project- ing visual semantics into the neural response manifold to facilitate high-fidelity fMRI synthesis. Experimental results demonstrate that SynBrain surpasses state- of-the-art methods in subject-specific visual-to-fMRI encoding performance. Fur- thermore, SynBrain adapts efficiently to new subjects with few-shot data and synthesizes high-quality fMRI signals that are effective in improving data-limited fMRI-to-image decoding performance. Beyond that, SynBrain reveals functional consistency across trials and subjects, with synthesized signals capturing inter- pretable patterns shaped by biological neural variability. Our code is available at https://github.com/MichaelMaiii/SynBrain.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

- **关联方向**：本文与读者研究方向高度相关，核心主题“视觉→fMRI编码 (brain encoding)”、“fMRI表征学习 (fMRI representation)”及“跨被试对齐 (representation alignment)”均为读者关注焦点。
- **启发与意义**：本研究揭示了将神经响应建模为语义条件化概率分布，而非确定性映射，是捕捉生物变异性的关键，为脑编码模型设计提供了重要的先验 (neural prior) 思想。
- **可借鉴点**：框架中的 BrainVAE 结构（卷积 + 注意力）和 Semantic-to-Neural Mapper（一步式点到分布映射）可扩展至其他模态（如 EEG/MEG），其小样本适应方法可直接用于改善下游解码任务的性能。
- **阅读建议**：建议重点精读第 2 节方法论中关于 VAE 设计与跨模态映射器的构建逻辑，并仔细分析表 1、表 2 中的实验设计，思考其概率建模思想是否能作为“神经先验”或“多视角约束”融入读者自己的模型。

---

## 1. 论文的核心问题与整体含义

- **核心问题**：大脑如何处理外部视觉信息并转化为神经活动模式？这一问题在计算神经科学中被称为“视觉编码”。当前研究面临的根本挑战在于：**相同的视觉刺激往往在不同试次、不同受试者中引发不同但功能上一致的 fMRI 响应，而这种一对多的映射关系难以被传统的确定性模型捕捉**。
- **研究动机**：现有确定性方法因强行平均化多样化的神经模式而易产生“均值退化”问题，导致合成信号丧失生理真实性和语义有效性。因此，设计一个能显式建模神经响应概率分布、兼顾刺激引发变异与语义功能一致性的生成框架，成为一项关键又亟待攻关的课题。
- **整体含义**：SynBrain 重新定义了视觉到 fMRI 的转换：**不再将神经活动视为单一确定输出，而是从固有玻动的规律中抽象为一个语义条件化的概率分布**。这不仅提升了合成质量，也为理解神经信息如何编码语义提供了新的理论工具。

## 2. 论文提出的方法论

SynBrain 的核心由两个组件组成：**BrainVAE**（概率化神经表征学习）和 **Semantic-to-Neural (S2N) Mapper**（视觉语义到神经流形的对接）。整体框架如图 2 所示，采用两阶段训练。

### 2.1 BrainVAE：语义条件化的神经概率模型

- **设计思想**：通过变分自编码器 (VAE) 将单试次 fMRI 信号 $y_{\text{fMRI}}$ 编码为一个高斯潜在分布 $\mathcal{N}(\mu, \sigma^2)$，在此过程中显式引入视觉语义约束。
- **网络结构**：
    - 放弃了传统 MLP 变分模型，转而使用 **卷积模块** 抽取局部体素特征，配合 **注意力层** 捕获长程体素间依赖。
    - 编码器输出 $\mu$ 和 $\log \sigma^2$，解码器从采样得到的 $z$ 重建 fMRI 信号。
- **损失函数**：由三部分加权组合而成：
    $$L_{\text{BrainVAE}} = L_{\text{MSE}} + \lambda_{\text{KL}} \, L_{\text{KL}} + \lambda_{\text{CLIP}} \, L_{\text{CLIP}}$$
    - **逐体素重建误差** ($L_{\text{MSE}}$)：保证信号的细节还原。
    - **KL 散度正则** ($L_{\text{KL}}$)：$D_{\text{KL}}(q(z|y) \| \mathcal{N}(0,I))$，使潜在空间平滑可采样。
    - **对比学习损失** ($L_{\text{CLIP}}$)：采用 SoftCLIP 策略，最大化 $z$ 与冻结的 CLIP 视觉编码 $z_{\text{CLIP}}$ 的互信息，确保潜在空间的语义方向与视觉刺激一致。

### 2.2 S2N Mapper：从视觉语义到神经流形的“点到分布”映射

- **设计思想**：为解决简单对比对齐易导致嵌入不一致的问题，引入 Transformer 模块，直接学习从固定 CLIP 嵌入 $z_{\text{CLIP}}$ 到 BrainVAE 潜在流形 $z$ 的非线性变换 $z_{\text{Align}} = f_{\text{S2N}}(z_{\text{CLIP}})$。
- **训练目标**：最小化预测的 $z_{\text{Align}}$ 与真实 fMRI 嵌入 $z$ 之间的均方误差。
- **关键优势**：相比扩散模型（MindSimulator）从噪声出发迭代生成的策略，**S2N 一步式映射** 彻底消除了因训练时加噪、测试时从纯高斯采样而导致的分布失配问题，使得 fMRI 合成过程更加稳定高效。

### 2.3 模型推理

输入图片通过 CLIP 生成 $z_{\text{CLIP}}$，S2N Mapper 将其投影为 $z_{\text{Align}}$，再由 BrainVAE 解码器直接解码为完整的 fMRI 体素信号。整个过程支持引入不同噪声因子实现可控的多样性生成。

## 3. 实验设计

- **数据集与场景**：
    - 所有实验基于大规模 **自然场景数据集 (NSD)**，使用其中 4 名完成全部扫描的受试者（Sub-1, 2, 5, 7）。
    - 包含三种训练/测试场景：
        1.  **特定受试者全量训练**（40 小时数据）。
        2.  **新受试者小样本适应**（仅 1 小时数据）。
        3.  **数据增强**：将合成 fMRI 作为补充数据，改善下游 fMRI→图像解码在小样本下的性能。
- **Benchmark 与对比方法**：
    - 直接基准为 **MindSimulator**（生成式视觉编码模型的 SOTA）。
    - 进一步补充对比的基线包括 **线性回归 (LinearReg)**、**GNet**。
    - 解碼增强实验对比了 **MindEye2** 与 **MindAligner**。
- **评测指标**：
    - **体素级**：MSE、Pearson 相关系数、余弦相似度。
    - **语义级** (通过 MindEye2 解码图像评估)：Inception Score，CLIP 相似度，EfficientNet/SwAV 距离。
    - **检索率**：基于 fMRI 和 CLIP 特征的互相检索精度 (Top-1)。

## 4. 资源与算力

- **硬件配置**：模型在 **4 块 NVIDIA A100 (40GB 显存) GPU** 上实施训练。
- **训练耗时**：全量训练耗时在 **2 小时** 以内；此外文中特别注出，即便只用单张 A100 GPU，以稍低的隐层维度（d=1024）也可以训练变体模型并仅有微小的性能下降。

## 5. 实验数量与充分性

实验涵盖了数量丰富、体系严密的评估维度，较为客观充分：
- **主体实验**：完成了 4 位受试者的全量训练及平均结果对比，并开展了 3 对跨被试 (Sub1→2,5,7) 的小样本适配。
- **解码增强实验**：探讨了 4 种不同合成数据时长下的性能变化，并与 2 个基线进行了详尽比较。
- **消融研究**：在单个受试者上系统性移除了 3 个核心组件（变分采样、对比学习、S2N Mapper），逐一检验其贡献。
- **补充量化分析**：包括架构深度对比、视觉编码器对比、扩散模型 vs. S2N Mapper 对比以及多位额外受试者的适配补充实验。
- **定性分析**：提供了跨试次与跨受试者的脑功能激活图可视化、随机采样一致性案例等，支撑了结论的生理可解释性。

## 6. 论文的主要结论与发现

- SynBrain 在视觉编码的核心任务上全面超越 MindSimulator，仅用一次生成即可显著优于后者的多次采样平均。
- 模型学会从包含大量冗余的真实 fMRI 中蒸馏出与任务高度相关的语义成分，检索精度甚至超过使用原始 fMRI (92.5% vs. 84.8%)。
- 即便只有 1 小时新受试者数据，SynBrain 仍能维持很高的语义一致性，验证了其高效的跨个体迁移能力。
- 合成的 fMRI 数据可以作为有效的数据增强手段，在极少真实数据条件下显著提升 fMRI→图像的解码效果 (CLIP 相似度 80.8%→84.7%)。
- 脑功能分析证实，模型成功捕捉到了跨试次的语义稳定性和跨个体的类特异区域激活，其变异性遵循结构化模式而非随机噪声。

## 7. 优点

- **方法论创新性强**：首次将 fMRI 表征完全建模为受语义约束的连续概率分布，从根本上匹配了“一对多”的生物物理本质。
- **架构设计合理且有效**：BrainVAE 的卷积+注意力结构有效解决了 MLP 变分模型训练不稳定的问题；S2N Mapper 以精巧的一步映射规避了扩散模型在训练-推理时的分布失配。
- **应用价值突出**：在小样本新被试适应与下游任务（解码）数据增强两个关键瓶颈问题上均提供了有力的解决方案。

## 8. 不足与局限

- **特征偏差风险**：强依赖预训练的视觉模型 (CLIP)，可能会因后者的表征偏差无法完全对齐人类视觉通路的处理过程。
- **变异源覆盖不全**：当前概率模型尚无法区分和精细建模所有变异性来源，例如时刻变化的注意力状态、神经系统调节效应等。
- **解码性能权衡**：在数据增强实验中，合成数据提升了语义级指标，但高量级的合成数据反而略微降低了精确图像检索的准确率，暗示合成信号可能更侧重于高层语义而忽略了底层实例细节。

## 9. （完）
