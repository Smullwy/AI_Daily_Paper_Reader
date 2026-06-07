---
title: AAAI26 S³_ Spiking Neurons as an Isolating Segmenter for Brain Signal Decoding
title_zh: AAAI26 S³：将脉冲神经元用作脑信号解码的隔离分割器
authors: "Qian Zheng, Ming Chen, Sha Zhao, Shi Gu, Peng Lin, De Ma, Huajin Tang, Gang Pan"
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-184214185810-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa.pdf
tags: ["paper:本地PDF", "query:local-pdf"]
score: 0.0 订阅评分
score_label: 订阅评分
evidence: 不相关
tldr: 现有的脑信号解码研究多聚焦于解码器设计，忽视了分割步骤，固定长度分割会忽略个体和任务差异并破坏时间模式。为此，本文提出S3，利用脉冲神经元的隔离分割器，实现自适应分割，保留内在时间模式，并通过脉冲神经元的重置机制隔离无关历史模式。针对无分割标签的优化，设计随机贪心算法生成伪标签，绕过梯度阻断。实验在13个数据集、10个下游任务中展现出优越性能，验证了方法的有效性、泛化性和可解释性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-184214185810-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 1673, \"height\": 1582}, {\"url\": \"assets/figures/local-pdf/local-20260606-184214185810-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-002.webp\", \"caption\": \"\", \"page\": 4, \"index\": 2, \"width\": 4234, \"height\": 1608}, {\"url\": \"assets/figures/local-pdf/local-20260606-184214185810-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 2938, \"height\": 629}, {\"url\": \"assets/figures/local-pdf/local-20260606-184214185810-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 1469, \"height\": 1011}]"
motivation: 现有固定长度分割方法忽视受试者与任务差异，破坏了脑信号的内在时间模式，且缺乏专门的分割优化。
method: 提出S3框架，利用脉冲神经元的重置机制自适应隔离分割点前的无关模式，并通过随机贪心算法生成分割伪标签，结合梯度阻断规避策略进行联合优化。
result: 在13个公开数据集、10个下游任务中，S3均显著优于现有分割与解码方法。
conclusion: S3作为一种基于脉冲神经元的自适应分割器，有效提升了脑信号解码性能，兼备良好的泛化能力和可解释性。
---

## 摘要
近期的脑解码研究主要关注于脑解码器的开发，而在很大程度上忽略了分割步骤。现有方法通常采用固定长度分割，这可能会忽视个体或任务层面的差异性，并破坏脑信号内部的时间模式。为解决这一缺口，我们提出了S3，它利用脉冲神经元作为脑信号解码的隔离分割器。S3能够自适应地分割脑信号，同时考虑个体与任务层面的差异性，并保留脑信号固有的时间模式。它利用脉冲神经元独特的重置机制，在每个分割点生成过程中隔离先前无关的时间模式。为了在缺乏分割标签的情况下优化S3以提升任务性能，我们开发了一种优化方法，其中使用随机贪心算法创建分割伪标签来进行优化，同时规避S3与任务性能之间的梯度阻断。在13个公开数据集上的10个下游任务实验表明，S3始终优于现有方法，验证了其有效性、泛化性和可解释性。代码：https://github.com/MChen808/S3

## Abstract
Recent brain decoding studies have primarily emphasized the development of brain decoders, while largely neglecting the segmentation step. Existing methods typically adopt fixed- length segmentation, which might overlook subject- or task- level variability and disrupt temporal patterns within brain signals. To address this gap, we propose S3, which leverages spiking neurons as an isolating segmenter for brain signal decoding. S3 segments brain signals adaptively, considering subject- and task-level variability while preserving intrinsic temporal patterns of brain signals. It exploits the unique re- set mechanism of spiking neurons to isolate previous irrel- evant temporal patterns during the generation of each seg- mentation point. To optimize S3 for enhancing task perfor- mance in the absence of segmentation labels, we develop an optimization method where segmentation pseudo-labels are created with a stochastic-greedy algorithm to optimize them, while circumventing gradient blockade between S3 and task performance. Experiments on 10 downstream tasks across 13 public datasets demonstrate that S3 consistently outperforms existing methods, validating its effectiveness, generalizability and interpretability. Code — https://github.com/MChen808/S3

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：与读者方向“brain decoding”直接相关；与“neural prior”“representation alignment”部分相关；与“fMRI representation”“multi-view constraint”关联较弱。
- **启发与意义**：提出将神经信号分割建模为可优化、可解释的时序先验，启示脑解码流程中应为上游预处理引入学习能力，而非固化超参数。
- **可借鉴点**：脉冲神经元的重置机制实现时序模式隔离，以及随机贪心伪标签优化绕过梯度阻断的思路，可迁移至其他需要自适应分段且缺少监督信号的脑表示对齐或编码任务。
- **阅读建议**：重点阅读S3的分割器设计原理和伪标签优化方法；若关注fMRI或多视图约束，可仅吸收其将分割端可学习的范式，但不直接适用。

## 1. 核心问题与研究动机
- 现有脑解码工作主要关注解码器设计，固定长度分割（$S_f$）是主流，忽视了分割步骤本身的优化。
- 固定分割忽略受试者与任务层面的差异性，破坏脑信号中连贯的时间模式（如语义理解、句法结构），导致解码性能的受试者间偏差大。
- 已有自适应分割方法（基于自相关函数等）可解释但无法为下游任务性能优化；标准 RNN 虽可学习自适应分割，但无法隔离历史无关模式，与脑电信号的局部平稳性假设相悖。
- 本文旨在提出一种可优化的、具备时间模式隔离能力的自适应分割器，以同时提升解码性能和可解释性。

## 2. 方法：S³ 与随机贪心伪标签优化
### 2.1 S³：将脉冲神经元作为隔离分割器
- **事件表示**：将脑信号 $X$ 转换为事件流 $E=\{(c_i, p_i, t_i)\}$，再降采样为体素网格表示 $G\in \mathbb{R}^{C\times2\times T_0}$，其中 $T_0 = \lfloor T/t_0\rfloor$。
- **脉冲神经网络 (SNN)**：使用 LIF 神经元模型，其离散方程：
  $$
  \begin{aligned}
  u^t &= v^{t-1} + \frac{1}{\tau}(I^t - v^{t-1}), \\
  s^t &= H(u^t - u_{th}), \\
  v^t &= u^t(1-s^t) + u_{\text{reset}}.
  \end{aligned}
  $$
  脉冲发放后膜电位重置，自然实现分割点生成时对前序无关信息的隔离。
- **SNN 结构**：先经过每个受试者的 1×1 卷积块（可固定用于受试者不可知训练），再经堆叠卷积块精炼特征，最后线性投影送入 LIF 节点，输出时序脉冲序列 $\{s^t\}_{t=1}^{T_0}$。
- **脉冲触发分割 (STS)**：每当 $s^t=1$，在该时刻 $\theta(t)$ 处生成分割点，构成自适应分割方法 $S_a = \{0\}\cup \{\theta(t) \mid s^t=1\}\cup\{T\}$。

### 2.2 随机贪心伪标签优化绕过梯度阻断
- 分割步骤 $S_a \circ X$ 不可微，导致解码损失无法回传至分割器，形成梯度阻断。
- **伪标签监督**：为分割器创建伪标签 $\bar{S}^N$，通过电位驱动损失让 SNN 的脉冲点对齐伪标签；这样只需优化伪标签即可间接优化分割器。
- **随机贪心算法更新伪标签**：利用任务性能 $p(S,D)$ 衡量分割效果，以接收率 $\alpha = p(S^{N+1}, D) / p(\bar{S}^N, D)$ 和随机均匀采样 $u\sim U(0,1)$ 决定是否接受新分割：
  $$
  \bar{S}^{N+1} = \begin{cases}
  S^{N+1}, & u \le \alpha \ (\text{accept}),\\
  \bar{S}^N, & u > \alpha \ (\text{reject}).
  \end{cases}
  $$
  这保证了总是接受更好候选（贪心），同时以一定概率接受较差候选（随机），避免早熟收敛。
- **迭代优化**：分两阶段交替训练——先固定解码器 $D$，用伪标签优化分割器；再固定分割器，用解码损失 $L(S,D)$ 优化 $D$。

## 3. 实验设计
- **任务与数据集**：10 个下游 BCI 任务，13 个公开数据集，涵盖语音感知、睡眠分期、情绪识别、想象语音、运动想象、异常检测、精神障碍、警觉估计等（表2）。任务类型包括分类、回归和 Zero-shot 预测。
- **对比方法**：与 SOTA 脑解码器对比，包括 EEG 基础模型 CBraMod、LaBraM、BIOT，以及语音解码专用模型 BrainMagick、Du-IN、DeWave 和关注受试者差异的 Seegnificant；部分任务还增加了 LaBraM+S3。
- **评估指标**：分类使用 Balanced Accuracy、AUC-PR、AUROC；回归使用 Correlation、R²、RMSE；Zero-shot 使用 Top-10@50 和 Top-10@All 等。
- **其他分析**：跨任务与跨受试者分割长度分布统计、受试者级性能箱线图、语义级别表征预测能力分析（Ridge回归），以及消融实验（移除逐受试者卷积、移除随机贪心、移除重置机制、移除自适应分割）。

## 4. 算力与资源
- 论文未明确说明所用 GPU 型号、数量及具体训练时长，仅代码库开源，算力信息缺失。

## 5. 实验数量与充分性
- 多层面实验：13 个数据集的全面评测（表1,3,附录）、两个 SOTA 解码器背板的性能验证（CBraMod、LaBraM）、跨任务/受试者可视化（图3）、语义可解释性分析（图4）、完整消融实验（表5），总计约数十组独立实验。
- 采用标准 train/test 划分并报告标准差，选用 p 值检验消融差异的显著性，实验设计客观、公平，能较充分支撑结论。

## 6. 主要结论与发现
- S³ 在所有数据集上均显著优于固定长度分割及现有脑解码器，即使搭载最强解码器 CBraMod 仍有增益。
- 自适应分割长度均值接近固定值，但标准差反映任务特性，证明模型能自动适应任务内和任务间差异。
- 受试者级分析表明 S³ 可降低受试者间性能差异（IQR减小），实现更鲁棒的个体自适应分割。
- 语义层级分析显示 S³ 分割出的表征片段能更好地预测高层语义（句级嵌入），展示了时间模式的分割保留能力。
- 消融实验证实逐受试者卷积、重置机制、随机贪心伪标签优化均对性能有重要贡献。

## 7. 优点
- **创新性**：首次将脉冲神经元的重置特性建模为分割时的时序隔离机制，精准匹配脑电局部平稳性。
- **优化策略巧妙**：通过随机贪心伪标签更新，有效绕开分割不可微造成的梯度阻断，使分割器能基于下游性能优化。
- **实验扎实**：覆盖13个数据集、两个基础模型，具备跨任务泛化验证和详尽的可解释性、受试者差异性分析。
- **可解释性强**：无需语言信息即可捕获高层语义结构，分割决策与脑信号的语义层级关联明确。

## 8. 不足与局限
- **算力信息缺失**：未报告训练所需的计算资源与时长，不利于复现和成本评估。
- **事件表示依赖阈值**：将 EEG 转换为事件流需预定义阈值，可能引入敏感的超参数。
- **局限于 EEG**：主要针对 EEG 解码，虽方法框架通用，但未在 fMRI、MEG 等其他脑信号模态上验证。
- **复杂度增加**：相比固定分割，增加了 SNN 和交替优化，可能提升训练复杂度和时间成本。

## 9. 简要结论
S³ 成功将脉冲神经网络的重置机制用于脑信号的自适应时间隔离分割，结合随机贪心伪标签优化，在无分割标签的情况下实现了端到端可优化的分割-解码流程。实验证明其在多种 BCI 任务上一致优于主流分割方法，兼具优越性能与内在可解释性，并为未来可学习时序预处理的设计提供了新范式。

（完）
