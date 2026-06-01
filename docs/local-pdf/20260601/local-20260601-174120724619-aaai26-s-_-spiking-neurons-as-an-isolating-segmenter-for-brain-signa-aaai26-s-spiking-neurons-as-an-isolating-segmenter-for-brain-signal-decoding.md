---
title: AAAI26 S³_ Spiking Neurons as an Isolating Segmenter for Brain Signal Decoding
title_zh: AAAI26 S³：脉冲神经元作为脑信号解码的隔离分段器
authors: "Qian Zheng, Ming Chen, Sha Zhao, Shi Gu, Peng Lin, De Ma, Huajin Tang, Gang Pan"
date: 2026-06-01
pdf: assets/local_pdfs/local-20260601-174120724619-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 3.0 订阅评分
score_label: 订阅评分
evidence: 适应被试间差异的脑信号自适应分割
tldr: 现有脑信号解码研究多关注解码器而忽视分割，固定长度分割忽略个体与任务差异并破坏时序模式。为此，论文提出S³，利用脉冲神经元的重置机制作为自适应隔离分割器，保留脑信号内在时序模式，并通过随机贪婪算法生成的伪标签进行优化。在13个数据集10个任务上，S³一致超越现有方法，展现出有效性、泛化性和可解释性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260601-174120724619-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-001.webp\", \"caption\": \"Figure 1: Top: Comparison of existing brain decoding workflow with ours. Fixed-length segmentation ignores variability and disrupts semantic structures, while our model adaptively segments brain signals to consider and preserve them. Bottom: Comparison of vanilla RNNs and spiking neurons as segmenters. Unlike RNNs, spiking neurons reset themselves at each segmentation point, isolating previous irrelevant temporal patterns.\", \"page\": 1, \"index\": 1, \"width\": 477, \"height\": 452}, {\"url\": \"assets/figures/local-pdf/local-20260601-174120724619-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-007.webp\", \"caption\": \"Figure 2: Overview of our method. A) Input data includes brain signals and task labels (e.g., audio). B) S3: Brain signals are converted into event-based representations and processed by an SNN to output spikes. Each spike triggers a segmentation point, formulating an adaptive segmentation method S. The reset mechanism of spiking neurons excludes previous features, ensuring temporal pattern isolation for the generation of each segmentation point. C) Brain Decoding Workflow: Brain signals and task labels are segmented by S , then used to compute a decoding loss and task performance. The decoding loss optimizes the brain decoder through backpropagation. D) Optimization: Pseudo-labels, representing expected segmentation points, are optimized for improving task performance via a stochastic-greedy algorithm. These pseudo-labels supervise S3 to spike at these points.\", \"page\": 4, \"index\": 7, \"width\": 1054, \"height\": 404}, {\"url\": \"assets/figures/local-pdf/local-20260601-174120724619-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-008.webp\", \"caption\": \"Table 1: Results for binary classification tasks (unit: %).\", \"page\": 5, \"index\": 8, \"width\": 900, \"height\": 313}, {\"url\": \"assets/figures/local-pdf/local-20260601-174120724619-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-009.webp\", \"caption\": \"Table 2: Overview of downstream BCI tasks and datasets.\", \"page\": 5, \"index\": 9, \"width\": 500, \"height\": 275}, {\"url\": \"assets/figures/local-pdf/local-20260601-174120724619-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-003.webp\", \"caption\": \"Table 3: Results for zero-shot prediction tasks (left) and regression tasks (right) (unit: %).\", \"page\": 6, \"index\": 3, \"width\": 1054, \"height\": 187}, {\"url\": \"assets/figures/local-pdf/local-20260601-174120724619-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-002.webp\", \"caption\": \"Table 4: Segmentation lengths of adaptive- and fixed-length methods. The symbol * marks STD exceeding 30% of Mean, indicating aggresive searching during adaptive-length segmentation.\", \"page\": 6, \"index\": 2, \"width\": 477, \"height\": 273}, {\"url\": \"assets/figures/local-pdf/local-20260601-174120724619-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-006.webp\", \"caption\": \"Figure 3: Adaptive segmentation across subjects. Left: Distribution of segmentation points for six randomly selected subjects from each of three datasets, illustrating the model’s ability to implement subject-aware segmentation. Right: Subject-level task performance showing that adaptive segmentation achieves higher minimum, maximum, and median values, along with a notably reduced interquartile range (IQR), indicating improved robustness and performance across subjects.\", \"page\": 7, \"index\": 6, \"width\": 1054, \"height\": 227}, {\"url\": \"assets/figures/local-pdf/local-20260601-174120724619-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-004.webp\", \"caption\": \"Figure 4: Predictive power of decoded representation segments for different levels of semantic features in the speech perception task. Error bars are the standard error of the mean across subjects.\", \"page\": 7, \"index\": 4, \"width\": 452, \"height\": 312}, {\"url\": \"assets/figures/local-pdf/local-20260601-174120724619-aaai26-s-_-spiking-neurons-as-an-isolating-segmenter-for-brain-signa/fig-005.webp\", \"caption\": \"Table 5: Results for ablation analysis on Broderick2019 dataset (unit: %), with two-sample t-test showing statistical significance. The symbol * marks statistical significance (i.e., p < 0.05) during CBraMod ablation analysis.\", \"page\": 7, \"index\": 5, \"width\": 500, \"height\": 286}]"
motivation: 现有脑信号解码的分割方法采用固定长度，忽略个体和任务差异，并破坏时序模式。
method: 提出S³，利用脉冲神经元的重置机制实现自适应隔离分割，并通过随机贪婪算法生成的伪标签进行优化以提升任务性能。
result: 在13个公开数据集的10个下游任务上，S³一致优于现有方法，验证了有效性、泛化性和可解释性。
conclusion: S³作为一种新型自适应分割器，通过脉冲神经元机制有效提升了脑信号解码性能，具有广泛应用前景。
---

## 摘要
最近的脑解码研究主要强调脑解码器的发展，而大大忽略了分割步骤。现有方法通常采用固定长度分割，这可能忽视受试者或任务水平的变异性，并破坏脑信号内的时间模式。为了弥补这一差距，我们提出S3，它利用脉冲神经元作为脑信号解码的隔离分段器。S3自适应地分割脑信号，考虑受试者和任务水平的变异性，同时保留脑信号固有的时间模式。它利用脉冲神经元的独特重置机制，在每个分割点生成期间隔离先前不相关的时间模式。为了在缺乏分割标签的情况下优化S3以增强任务性能，我们开发了一种优化方法，其中使用随机贪婪算法创建分割伪标签以优化它们，同时规避S3和任务性能之间的梯度阻塞。在13个公共数据集上的10个下游任务的实验表明，S3始终优于现有方法，验证了其有效性、泛化性和可解释性。代码 — https://github.com/MChen808/S3

## Abstract
Recent brain decoding studies have primarily emphasized the development of brain decoders, while largely neglecting the segmentation step. Existing methods typically adopt fixed- length segmentation, which might overlook subject- or task- level variability and disrupt temporal patterns within brain signals. To address this gap, we propose S3, which leverages spiking neurons as an isolating segmenter for brain signal decoding. S3 segments brain signals adaptively, considering subject- and task-level variability while preserving intrinsic temporal patterns of brain signals. It exploits the unique re- set mechanism of spiking neurons to isolate previous irrel- evant temporal patterns during the generation of each seg- mentation point. To optimize S3 for enhancing task perfor- mance in the absence of segmentation labels, we develop an optimization method where segmentation pseudo-labels are created with a stochastic-greedy algorithm to optimize them, while circumventing gradient blockade between S3 and task performance. Experiments on 10 downstream tasks across 13 public datasets demonstrate that S3 consistently outperforms existing methods, validating its effectiveness, generalizability and interpretability. Code — https://github.com/MChen808/S3

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
* **关联方向**：与本读者的 `brain decoding`、`neural prior` 方向相关，聚焦脑信号解码流程中普遍被忽略的分割预处理的优化。
* **启发与意义**：该工作表明，重新设计自适应的时序分割能够显著提升解码性能，并利用脉冲神经元的重置机制显式建模脑电的局部平稳性先验，对时序脑信号分析具有启发。
* **可借鉴点**：可尝试将基于任务性能反馈的伪标签优化及自适应分割思想，迁移到 fMRI 时间窗口划分、切片时序建模或神经编码中的事件分段任务上。
* **阅读建议**：若侧重 EEG 解码或通用时序脑信号建模，建议精读其分割器的设计细节与优化算法；若仅关注 fMRI/_representation alignment_，可从方法论层面了解“可学习分割”的范式，弱相关但仍有参考价值。

## 1. 核心问题与背景
* 当前脑解码（brain decoding）研究大多集中改进解码器，分割步骤则被忽视，几乎全部采用固定长度分割（如 $3$ 秒一段）。
* **固定长度分割的两大局限**：
    * 忽略**受试者间/任务间变异性**：不同个体或不同任务的最优分割时长不应相同，固定分割会导致性能偏差。
    * **破坏时序语义结构**：脑信号中存在连续的句法、语义等时间模式，刚性的切割会打乱这些固有结构。
* 尽管已有少量自适应分割尝试（如基于自相关函数），它们虽可解释但无法被优化以提升下游任务性能；而传统 RNN 虽可学习分割，却无法在每次分割后清除历史信息，难以实现“时序模式隔离”。
* 论文提出 **S³**，用脉冲神经元作为隔离的分段器，自适应分割脑信号，同时考虑受试者/任务差异并保留内在时序模式。

## 2. 方法论
### 2.1 S³ 分割器架构
整个分割器定义为 $S_a = \text{Segmenter}(X) = \text{STS} \circ \text{SNN} \circ \text{Event}(X)$，三部分组成：

* **事件化表示（Event-based representation）**
    * 将 EEG 信号 $X \in \mathbb{R}^{C\times T}$ 转换为事件流：当通道信号幅值变化超过阈值时产生事件 $e_i = (c_i, p_i, t_i)$。
    * 将事件流降采样成体素网格表示 $G \in \mathbb{R}^{C\times 2\times T_0}$。
* **脉冲神经网络（SNN）**
    * 使用 LIF（Leaky-Integrate-and-Fire）神经元：  
      $$u_t = v_{t-1} + \frac{1}{\tau}(I_t - v_{t-1}), \quad s_t = H(u_t - u_{th}), \quad v_t = u_t(1 - s_t) + u_{reset}$$
    * 关键特性：**发放脉冲后膜电位重置**，从而隔离了上一个分割点之前的累积信息，保证每个分割决策只基于当前时间模式。
    * 架构上先通过**逐受试者的 1×1 卷积**编码个体信息（可冻结用于受试者无关训练），然后堆叠卷积模块，最后经线性投影和 LIF 节点输出时间步上的脉冲序列 $\{s_t\}_{t=1}^{T_0}$。
* **脉冲触发分割（Spike-Triggered Segmentation, STS）**
    * 每当 $s_t = 1$，在对应原始时间点 $\theta(t)$ 生成一个分割边界，最终得到自适应分割方法 $S_a = \{0\} \cup \{\theta(t) \mid s_t = 1\} \cup \{T\}$。

### 2.2 随机贪婪伪标签优化
* **问题**：分割操作（$S \circ X$）不可微，导致分割器无法通过解码损失反向传播优化。
* **解决方案**：给分割器构造**伪标签** $\bar{S}$，并使用下游任务性能 $p(S, D)$ 来优化伪标签，再监督分割器，从而绕过梯度阻塞。
* **伪标签优化算法**（随机贪婪）：
    * 在第 $N$ 轮，分割器产生 $S^{N+1}$，按以下规则接受为新的伪标签：
      $$\bar{S}^{N+1} = \begin{cases} S^{N+1}, & u \le \alpha \\ \bar{S}^N, & u > \alpha \end{cases}$$
      $$\alpha = \frac{p(S^{N+1}, D)}{p(\bar{S}^N, D)},\quad u \sim \mathcal{U}(0,1)$$
    * 本质是类 Metropolis-Hastings 采样：性能提升的分割总是被接受（贪心），性能下降的候选以概率 $\alpha$ 接受，从而兼顾探索与利用，避免过早收敛。
* **迭代训练**：两阶段交替，先固定解码器 $D$，用伪标签监督 + 任务性能反馈优化分割器；再固定分割器，用解码损失 $L(S, D)$ 反向传播优化解码器。

## 3. 实验设计
* **数据集与任务**：覆盖 10 个下游 BCI 任务、13 个公开数据集，如言语感知（Brennan2019, Broderick2019）、睡眠分期（ISRUC）、情绪识别（FACED, SEED-V）、运动想象（PhysioNet-MI, SHU-MI）、异常检测（TUAB）、警觉估计（SEED-VIG）等。
* **对比基准**：
    * 针对言语任务：BrainMagick, Du-IN, DeWave, Seegnificant。
    * 针对其他任务：BIOT, LaBraM, CBraMod 等 SOTA 脑解码器（包含 EEG 基础模型）。
* **评价指标**：各类任务使用对应指标，如平衡准确率、AUC-PR/ROC、Top-10 准确率、相关系数、$R^2$、RMSE 等。
* **实验细节**：在主流解码器（如 CBraMod, LaBraM）上直接叠加 S³，保持原解码器所有设定，仅将固定分割替换为自适应分割。

## 4. 资源与算力
* 论文**未明确说明**使用的 GPU 型号、数量或具体训练时长。
* 因涉及 SNN 的多步仿真，预期训练开销比单一解码器高，但缺少量化的算力报告。

## 5. 实验数量与充分性
* **主实验**：10 个任务、13 个数据集上对比多种 SOTA 解码器，涵盖分类、回归、零样本预测。论文中表 1、表 3、附录表 6 给出全部结果。
* **消融实验**：在 Broderick2019 上分别移除逐受试者卷积、随机贪婪策略（改成标准贪心）、脉冲神经元重置机制、自适应分割，全部呈现并做统计检验（t 检验），共 8 个变体组合。
* **分析实验**：跨任务/跨受试者分割长度分布、受试者级性能分布（IQR 降低）、高层语义理解能力（预测句子嵌入的相关系数）。
* **充分性**：实验覆盖广，消融严谨且给出统计显著性，分析实验支撑可解释性与泛化性主张，整体公平客观。

## 6. 主要结论与发现
* S³ 在所有数据集上相较于固定分割的 SOTA 解码器几乎**一致提升**性能，即使搭载当前最强的 CBraMod 仍能进一步增益。
* 自适应分割长度**跨任务差异显著**（部分任务 STD > 40% 均值），表明模型能根据任务内特性进行激进或保守的搜索。
* 受试者级分析显示，自适应分割不仅提高中位数性能，还**显著缩小四分位距**，提升了跨受试者鲁棒性。
* 在言语感知任务上，分割出的脑表征片段对高层语义特征（句子嵌入）预测力显著增强，显示出**无语言监督下自主捕获高级语义结构**的可解释性。

## 7. 优点
* **创新性强**：首次将脉冲神经元的 reset 机制作为“时序隔离”先验引入脑信号分割，解决固定分割忽视变异性与破坏结构的问题。
* **优化方案巧妙**：通过随机贪婪伪标签优化，成功绕开不可微分割的梯度阻塞，实现了端到端的性能导向分割学习。
* **可解释性扎实**：从受试者级分布、语义预测力等多角度验证了自适应分割的物理意义。
* **泛化性良好**：在多种 EEG 基础模型（CBraMod, LaBraM）和多种任务上广泛验证，表明方法并非依赖特定解码器。

## 8. 不足与局限
* **实验模态单一**：全部实验均基于 EEG，未验证在 fMRI、MEG 等其他脑信号上的通用性，对读者的 fMRI 方向关联较弱。
* **计算资源未披露**：缺乏训练耗时、硬件需求等信息，难以评估实际部署代价。
* **仅与固定长度基线比较**：虽提到传统自适应分割方法（如基于自相关函数），但未在实验中直接对比这些数据驱动非学习的方法，削弱了对纯数据驱动方法优势的完全论证。
* **可解释性深度有限**：对分割点与具体神经生理事件（如 N400、P600 等 ERP 成分）的对应关系未做直接验证。

## 9. 总结
S³ 从脑解码中常被忽略的分割步骤切入，利用脉冲神经元的固有重置特性实现时序模式隔离的自适应分割，并通过随机贪婪伪标签优化突破不可微障碍，最终在大量 EEG 任务中取得了稳定且可解释的性能提升。该方法为脑信号解码提供了一种新的预处理范式，对侧重时序建模的脑解码研究具有重要的参考意义。

（完）
