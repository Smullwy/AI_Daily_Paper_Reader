---
title: ICLR26 Functional MRI Time Series Generation via Dual-Spectral Flow Matching
title_zh: 基于双谱流匹配的功能性磁共振成像时间序列生成
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow.pdf
tags: ["paper:本地PDF", "query:local-pdf"]
score: 0.0 订阅评分
score_label: 订阅评分
evidence: 不相关
tldr: 功能磁共振成像（fMRI）数据采集成本高，现有生成模型难以复现BOLD信号的非平稳时空动态。本文提出双谱流匹配（DSFM）框架，通过离散小波变换和离散余弦变换将BOLD信号转换为双频表示，利用谱流匹配生成类别条件的余弦频率特征，最后逆变换重建生理真实的时域信号。该方法在脑网络分类任务上验证了有效性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-001.webp\", \"caption\": \"\", \"page\": 3, \"index\": 1, \"width\": 473, \"height\": 345}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 1000, \"height\": 1000}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-003.webp\", \"caption\": \"\", \"page\": 3, \"index\": 3, \"width\": 680, \"height\": 202}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-004.webp\", \"caption\": \"\", \"page\": 3, \"index\": 4, \"width\": 928, \"height\": 206}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-005.webp\", \"caption\": \"\", \"page\": 3, \"index\": 5, \"width\": 1364, \"height\": 757}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-006.webp\", \"caption\": \"\", \"page\": 3, \"index\": 6, \"width\": 500, \"height\": 500}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-007.webp\", \"caption\": \"\", \"page\": 3, \"index\": 7, \"width\": 372, \"height\": 416}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-008.webp\", \"caption\": \"\", \"page\": 3, \"index\": 8, \"width\": 500, \"height\": 500}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-009.webp\", \"caption\": \"\", \"page\": 3, \"index\": 9, \"width\": 428, \"height\": 370}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-010.webp\", \"caption\": \"\", \"page\": 3, \"index\": 10, \"width\": 397, \"height\": 356}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-011.webp\", \"caption\": \"\", \"page\": 3, \"index\": 11, \"width\": 500, \"height\": 500}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-012.webp\", \"caption\": \"\", \"page\": 3, \"index\": 12, \"width\": 2033, \"height\": 354}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-013.webp\", \"caption\": \"\", \"page\": 3, \"index\": 13, \"width\": 425, \"height\": 291}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-014.webp\", \"caption\": \"\", \"page\": 4, \"index\": 14, \"width\": 2424, \"height\": 1005}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-015.webp\", \"caption\": \"\", \"page\": 8, \"index\": 15, \"width\": 1172, \"height\": 971}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-016.webp\", \"caption\": \"\", \"page\": 9, \"index\": 16, \"width\": 1485, \"height\": 590}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-017.webp\", \"caption\": \"\", \"page\": 10, \"index\": 17, \"width\": 3521, \"height\": 1463}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-018.webp\", \"caption\": \"\", \"page\": 20, \"index\": 18, \"width\": 601, \"height\": 614}, {\"url\": \"assets/figures/local-pdf/local-20260606-193612297751-iclr26-functional-mri-time-series-generation-via-dual-spectral-flow/fig-019.webp\", \"caption\": \"\", \"page\": 21, \"index\": 19, \"width\": 1319, \"height\": 519}]"
motivation: fMRI采集资源密集且高质量数据稀缺，现有生成模型难以复制BOLD信号的复杂生理动态和时空变化。
method: 提出DSFM框架，先使用DWT和DCT将BOLD信号转化为双频表示，再训练谱流匹配模型生成余弦频率成分，最后通过逆变换恢复时域信号。
result: 在下游fMRI脑网络分类任务中，DSFM生成的数据显著提升了分类性能，证明了方法的有效性。
conclusion: DSFM通过双频变换和谱流匹配，为BOLD信号生成引入结构化先验，能够保留生理动态并生成高质量fMRI时间序列。
---

## 摘要
功能性磁共振成像（fMRI）通过测量血氧水平依赖（BOLD）信号随时间的变化，提供了一种非侵入式获取动态脑活动的方法。然而，fMRI采集的资源密集型特性限制了用于数据驱动脑分析模型的高保真样本的可用性。尽管现代生成模型可以合成fMRI数据，但在复制原始BOLD信号固有的非平稳性、复杂的时空动力学和生理变化方面往往仍具挑战。为解决这些挑战，我们提出双谱流匹配（DSFM），一个新颖的fMRI生成框架，将BOLD信号的双频表示与谱流匹配级联。具体而言，我们的框架首先通过离散小波变换（DWT）将BOLD信号转换为小波分解图，以捕获全局化的瞬态和多尺度变化，并跨脑区和时间投影到离散余弦变换（DCT）空间，利用低频主导的BOLD系数的局部能量压缩特性。随后，训练一个谱流匹配模型生成类别条件的余弦频率表示。生成的样本通过逆DCT和逆DWT操作重建，得到生理上合理的时域BOLD信号。这种双变换方法施加了结构化的频率先验，并保留了关键的生理脑动力学。最终，我们通过改进的下游基于fMRI的脑网络分类验证了该方法的有效性。代码可在 https://github.com/htew0001/DSFM.git 获取。

## Abstract
Functional Magnetic Resonance Imaging (fMRI) provides non-invasive access to dynamic brain activity by measuring blood oxygen level-dependent (BOLD) sig- nals over time. However, the resource-intensive nature of fMRI acquisition lim- its the availability of high-fidelity samples required for data-driven brain anal- ysis models. While modern generative models can synthesize fMRI data, they often remain challenging in replicating their inherent non-stationarity, intricate spatiotemporal dynamics, and physiological variations of raw BOLD signals. To address these challenges, we propose Dual-Spectral Flow Matching (DSFM), a novel fMRI generative framework that cascades dual frequency representation of BOLD signals with spectral flow matching. Specifically, our framework first converts BOLD signals into a wavelet decomposition map via a discrete wavelet transform (DWT) to capture globalized transient and multi-scale variations, and projects into the discrete cosine transform (DCT) space across brain regions and time to exploit localized energy compaction of low-frequency dominant BOLD coefficients. Subsequently, a spectral flow matching model is trained to gener- ate class-conditioned cosine-frequency representation. The generated samples are reconstructed through inverse DCT and inverse DWT operations to recover phys- iologically plausible time-domain BOLD signals. This dual-transform approach imposes structured frequency priors and preserves key physiological brain dynam- ics. Ultimately, we demonstrate the efficacy of our approach through improved downstream fMRI-based brain network classification. The code is available at https://github.com/htew0001/DSFM.git.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：fMRI representation, neural prior, brain decoding
- **启发与意义**：本文将fMRI生成建模为双谱空间（小波+余弦）的流匹配，为神经信号的 frequency-domain representation 提供了新的结构化先验范式，可直接启发脑编码/解码中更高效的隐空间设计。
- **可借鉴点**：双谱变换（DWT→DCT）的级联结构、谱域中的热耗散流匹配以及按频率带剥离的消融分析，值得在多模态对齐或表征对齐任务中复现和延伸。
- **阅读建议**：若关注fMRI的生成、增强或神经先验，重点阅读方法部分的频谱变换和谱流匹配建模；若关注分类，可重点阅读下游实验和频率子带消融。

## 1. 论文的核心问题与整体含义
- **核心问题**：fMRI BOLD时间序列的生成建模。现有方法或仅生成功能连接（FC）矩阵，或直接在时域建模，难以捕捉BOLD信号固有的非平稳性、多尺度振荡和生理混叠。
- **研究动机**：fMRI采集昂贵、样本稀少且类别不平衡，高质量合成数据可为脑疾病分类等下游任务提供增广，但生成须忠实再现瞬态和多频段动态。
- **整体含义**：提出一个基于双谱变换与谱流匹配的生成框架，将原始的BOLD信号转换为小波-余弦双频图像表示，在这个结构化频域中学习数据分布，从而生成生理上更逼真、下游分类更有效的时间序列。

## 2. 论文提出的方法论
### 2.1 核心思想
- 将 fMRI 时间序列生成转化为 **双频图像生成** 问题：先用离散小波变换（DWT）获得多尺度时频谱图，再用块DCT进行局部能量压缩，形成双谱表示；然后在该表示上训练流匹配模型，最后通过逆变换重建信号。

### 2.2 关键技术细节
1. **离散小波变换（DWT）与逆变换**  
   对每个脑区的BOLD信号 $x(n)$ 进行多级小波分解，得到子带系数 $W(i,j,k)$，按时间和尺度排列为多通道图像。
2. **块状离散余弦变换（DCT）**  
   将每个子带图像分为非重叠块，对每个块应用2D DCT：
   $$ D^{(k)}(u,v) = \alpha(u)\alpha(v) \sum_{x,y} W^{(k)}(x,y) \cos\left(\frac{(2x+1)u\pi}{2B}\right) \cos\left(\frac{(2y+1)v\pi}{2B}\right) $$
   实现低频能量压缩。
3. **谱流匹配**  
   在 DCT 域定义正向热耗散SPDE和对应的概率流ODE，利用正交DCT基底的对角化性质导出模式间独立的条件扰动核和速度场：
   $$ v(z_t|z_0; t,k) = \dot{\mu}(t,k)z_0[k] + \dot{\sigma}(t,k)\epsilon $$
   用 U-ViT 网络参数化速度场，通过条件流匹配损失训练，并采用无分类器引导进行类别条件生成。
4. **重建**  
   生成 DCT 系数后，经逆DCT重建子带图像，再经逆DWT恢复时域BOLD信号。

### 2.3 算法流程
- 预处理：脑区时间序列提取→DWT→块DCT→zigzag排序→归一化；
- 训练：U-ViT 学习条件速度场；
- 采样：ODE积分生成DCT系数；
- 逆过程：逆DCT→逆DWT→得到合成BOLD信号。

## 3. 实验设计
- **数据集**：  
  MDD（Major Depressive Disorder）250 HC / 227 MDD，AAL 116 ROI，232时间点；  
  ABIDE（Autism）488 ASD / 537 NC，Schaefer 100 ROI，200时间点；  
  NetSim（仿真）50通道，Simulation 4。
- **Benchmark 与对比方法**：  
  - 无条件生成对比：CoT-GAN, DiffTime, DiffWave, TimeVAE, TimeGAN, Diffusion-TS, T2I-Diff。  
  - 条件生成及分类对比：Vanilla-GAN, 1D/2D-DCGAN, WGAN, WGAN-GP, TimeGAN, Diffusion-TS, T2I-Diff；分类器使用 BrainNetCNN 对合成的FC矩阵进行分类。
- **评价指标**：  
  生成质量：cFID, Correlational, Discriminative, Predictive, FID（DCT/DWT域）；  
  分类：Accuracy, Recall, Precision, F1, ROC；  
  FC保真度：FC edges, node strength, edge betweenness centrality 的 Pearson相关系数。

## 4. 资源与算力
- 训练 DSFM 使用 **1×A100 GPU**；训练时间约22小时40分钟；推理生成全部样本约48分钟48秒；模型总参数量 **130,844,352**。

## 5. 实验数量与充分性
- 无条件生成实验：1个数据集（NetSim），7个 baselines，4项时间序列指标。
- 条件生成及分类实验：2个真实临床数据集（MDD, ABIDE），3级增广（1×, 2×, 3×），与7个以上生成模型对比，分类器均为 BrainNetCNN，指标覆盖分类和分布相似度。
- 消融实验：  
  频率子带消融（6种设置，全频段、低通、中通等）；块尺寸、小波基、归一化策略（MinMax vs ECS）；不同频谱表示（Fourier vs Wavelet）和生成模型（Flow Matching vs Diffusion）。  
- 额外分析：神经生理合理性（HRF与功率谱）、FC拓扑相似度、降维可视化。  
- 实验覆盖充分，对比公平，消融分析系统，客观性较好。

## 6. 论文的主要结论与发现
- DSFM 在生成质量和下游分类任务上均显著优于现有基于FC或时域的生成方法。
- 双频表示与谱流匹配的结合有效保留了fMRI的多尺度瞬态和低频能量特性。
- 消融表明中等频带（0.01-0.06 Hz）对MDD分类最重要，但每一子带都对性能有贡献；块尺寸和小波类型对生成质量影响较小。
- 合成信号的 HRF 和功率谱与真实数据高度吻合，生成的FC网络拓扑与真实数据高度相关。

## 7. 亮点
- 创新性地联合 DWT 和 DCT 构成双谱表示，为fMRI信号提供结构化的频域先验。
- 将谱域热耗散过程与流匹配结合，实现高效、模式间独立的粗到细生成。
- 在多个数据集和多种对比下，一致提升下游脑疾病分类性能，且生成样本的生理可解释性强。
- 消融实验全面，证实不同频带均贡献疾病诊断信息。

## 8. 不足与局限
- 仅针对静息态fMRI，未尝试任务态或其他神经信号（如EEG/MEG）。
- 生成的评价仍以分类性能为主，未深入测试在多中心异质性或极小样本下的鲁棒性。
- 对更大规模（更多ROI）或更长序列的扩展性未讨论；DCT块尺寸的自动选择未优化。
- 谱流匹配的超参数（如 $\sigma_{\max}$）选择依赖于经验，缺乏通用性分析。

## 9. （完）
（完）
