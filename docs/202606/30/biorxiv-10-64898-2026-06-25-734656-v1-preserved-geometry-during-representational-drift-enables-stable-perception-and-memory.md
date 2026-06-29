---
title: Preserved geometry during representational drift enables stable perception and memory
title_zh: 表征漂移中保持的几何结构实现稳定的感知与记忆
authors: "Zaid, H., Schaffer, E. S."
date: 2026-06-28
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.25.734656v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 脑解码和表征几何
tldr: 神经表征随时间漂移，但稳定感知与记忆仍需可能。本文提出数学框架，证明在足够大的神经网络中，表征漂移会保留输入几何结构，从而使得自适应解码器能稳定解码，揭示大群体神经元是实现稳定解码的关键。
source: biorxiv
selection_source: fresh_fetch
motivation: 解决表征漂移下如何实现稳定感知和记忆的悖论。
method: 构建通用数学框架分析大网络中表征几何保持与解码能力。
result: 大网络下漂移表征必然保留几何结构，且此结构可被自适应解码器稳定解码。
conclusion: 保留几何是漂移表征的普遍特征，稳定解码需要大神经元群体，为实验提供了理论依据。
---

## 摘要
在许多脑区中，神经元对刺激的调谐在数小时的时间尺度上是稳定的，但在数周的时间尺度上却不稳定，这一现象通常被称为“表征漂移”。这似乎意味着这些脑区无法用于稳定识别感官刺激或检索数周前习得的联想记忆。然而，解码方法已证明，在某些情况下，对漂移表征进行稳定解码是可能的。原则上，自适应解码为大脑如何利用漂移表征运作这一悖论提供了一个合理的解决方案，但我们对实现稳定解码所需条件仍缺乏深入理解。本文提供了一个通用的数学框架，解释了何时以及为何能够从漂移表征中实现稳定解码。首先，我们证明，当前馈网络和循环网络足够大时，它们都能保持输入的几何结构，这意味着在这些网络中表征漂移也必须保持几何结构。其次，我们证明，具有稳定几何结构的漂移表征可通过自适应解码器进行解码。因此，不仅表征漂移中保持几何结构的存在，而且从漂移表征中解码的能力，都只需要表现出表征漂移的神经元群体足够大即可。这一理论框架不仅表明保持的几何结构应是漂移表征的一个普遍特征，而且解释了在何种条件下测量稳定几何结构的实证努力将会成功。

## Abstract
In many brain regions, the stimulus tuning of neurons is stable on a timescale of hours but not on a timescale of weeks, a phenomenon often called 'representational drift'. This would seem to imply that these brain regions cannot be used for stable recognition of sensory stimuli or the retrieval of associative memories learned several weeks prior. However, decoding approaches have demonstrated that in some cases, stable decoding of drifting representations is possible. In principle, adaptive decoding provides a plausible resolution to the paradox of how the brain operates with drifting representations, but we lack a deep understanding of what the requirements are for stable decoding to be possible. Here, we offer a general mathematical framework that explains when and why stable decoding from a drifting representation can be achieved. First, we demonstrate that both feedforward and recurrent networks preserve the geometry of their inputs when the network is sufficiently large, meaning that representational drift must also preserve geometry in these networks. Second, we demonstrate that drifting representations that have stable geometry are decodable with adaptive decoders. Therefore, not only the existence of preserved geometry in the presence of representational drift but also the ability to decode from drifting representations simply requires the population of neurons exhibiting representational drift to be large. This theoretical framework not only suggests that preserved geometry should be a general feature of drifting representations, it also explains the conditions under which empirical efforts to measure stable geometry will be successful.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
*   **关联方向**：本文与读者研究方向（脑解码、表征对齐、表示几何）高度相关，直接探讨了神经表征动态变化下实现稳定解码的理论条件。
*   **启发与意义**：论文揭示了“表征几何”的保持是稳定解码的关键，而非单个神经元活动的稳定，为理解大脑如何在噪声和漂移中实现鲁棒信息处理提供了全新视角。
*   **可借鉴点**：读者可借鉴其“下游网络大规模扩展以保持输入几何”的理论框架，以及“利用直接/间接通路实现无记忆参考的自适应解码”的电路设计思想，来构建或约束自己的编解码模型。
*   **阅读建议**：重点阅读数学推导部分（Equation 3, 4, 7）和自适应解码方案（Fig. 4, 5），理解网络规模、几何保持与解码稳定性之间的定量关系。

---

## 1. 核心问题与整体含义

### 1.1 研究动机与背景
*   **核心悖论**：许多脑区（如海马体、后顶叶皮层、感觉皮层）存在“表征漂移”现象，即神经元对特定刺激的调谐在数周内会逐渐变化，但动物却能长期保持稳定的感知、记忆和行为。这构成了一个明显的悖论。
*   **现有方案局限**：
    *   **零空间假说**：假设漂移发生在对下游无影响的“零空间”中，但缺乏实验证据支持。
    *   **自适应解码假说**：下游脑区通过不断学习来适应上游的漂移。该方案虽然合理，但其普适性（尤其对于无法频繁采样的高维刺激，如气味物体身份）和实现的条件尚不清楚。
*   **研究目的**：本文旨在建立一个通用数学框架，系统回答并关联两个关键问题：（1）表征漂移在何种条件下会自发的保持表征几何结构？（2）在何种条件下，基于该保持的几何结构能够实现稳定的自适应解码？

### 1.2 整体含义
论文的核心思想是，稳定行为不需要稳定的单神经元表征，而是需要稳定的**表征几何结构**（即不同刺激所对应的神经活动模式之间的相似性关系）。研究证明，只要表现出漂移的神经元群体规模足够大，表征几何就必然会被保持，并且下游一个简单的自适应解码器只需少量任意刺激的经验，就能利用该保持的几何结构维持对所有刺激的稳定读取。

---

## 2. 方法论：核心思想与技术细节

### 2.1 核心思想
论文将“表征漂移”建模为前馈或循环网络中突触连接 $J_t$ 的随机变化，并证明当网络下游层神经元数量 $N_y$ 远大于输入层维度 $N_x$ 时，这种变化几乎不改变任意一对输入刺激 $\mathbf{x}_{s_1}, \mathbf{x}_{s_2}$ 在输出层表征 $\mathbf{y}_{s_1}, \mathbf{y}_{s_2}$ 中的角度或相似性，即保留了输入的**表征几何**。

### 2.2 关键技术细节与公式
*   **前馈网络模型**：
    $$ \mathbf{y}_{st} = J_t \mathbf{x}_s $$
    其中 $J_{ij,t} \sim \mathcal{N}(0, N_y^{-1})$，每个时间步有比例 $p$ 的突触被随机重采样以模拟漂移。

*   **输入几何保持的数学证明（核心贡献）**：
    *   **几何保持定义**：要求 $\mathbf{x}_{s_1}^T \mathbf{x}_{s_2} \approx \mathbf{y}_{s_1t}^T \mathbf{y}_{s_2t}$。定义失真为 $\epsilon_{\text{in}} = \mathbf{y}_{s_1t}^T \mathbf{y}_{s_2t} - \mathbf{x}_{s_1}^T \mathbf{x}_{s_2}$。
    *   **概率性边界（对随机输入有效）**：失真 $\epsilon_{\text{in}}$ 的方差约为 $1/N_y$，因此对于典型输入有：
        $$ |\epsilon_{\text{in}}| \le \frac{d}{\sqrt{N_y}} $$
        其中 $d$ 为标准差倍数。
    *   **确定性边界（对所有输入成立）**：失真绝对值的上界为：
        $$ |\epsilon_{\text{in}}| \le 2 \sqrt{\frac{N_x}{N_y}} $$
        该边界由矩阵 $J^TJ$ 的最大/最小特征值（马琴科-帕斯图尔分布）推导而来。两个边界均表明，扩大 $N_y$ 可无限逼近零失真。

*   **循环网络上的推广**：研究表明，在外部输入驱动的稳定状态下，循环网络（RNN）的输入-输出关系近似线性，因此上述前馈网络的几何保持结论同样适用于循环网络，且与循环连接强度 $g$ 无关。

*   **时间维度上的几何保持**：漂移过程中，任意 $t$ 时刻的表征与 $t=0$ 时刻的表征之间的几何失真 $\epsilon_t$ 有界，且在 $J_0$ 和 $J_t$ 完全去相关时趋于下式：
    $$ |\epsilon_t| \le d \sqrt{\frac{2}{N_y}} $$

*   **自适应解码方案**：
    *   **问题设定**：一个线性读取器 $z_{st} = \mathbf{w}_t^T \mathbf{y}_{st}$，在 $t=0$ 时通过Hebb学习 ($\mathbf{w}_0 \propto \mathbf{y}_{*0}$) 习得对一个目标刺激 $s^*$ 的特异性。
    *   **更新规则**：在后续每个时间步 $t$，用一个小型随机刺激集 $S$ 对权重 $\mathbf{w}$ 进行预测误差驱动的更新：
        $$ \mathbf{w}_t^T \leftarrow \mathbf{w}_{t-1}^T + (\mathbf{z}_{S, \text{ref}} - \mathbf{z}_{St}) Y_{St}^+ $$
        其中 $Y_{St}^+$ 是响应矩阵的伪逆， $\mathbf{z}_{S, \text{ref}}$ 是参考输出。读取器的信噪比 (SNR) 被用来量化其稳定性。
    *   **无记忆参考方案（生物可行的电路）**：引入直接和间接两条通路，直接通路权重 $\mathbf{w}_x$ (来自$\mathbf{x}$) 和间接通路权重 $\mathbf{w}_y$ (来自$\mathbf{y}$) 均通过Hebb学习。权重更新时，参考信号 $\mathbf{z}_{S, \text{ref}}$ 由来自输入层 $\mathbf{x}$ 的直接通路提供，即 $\mathbf{w}_x^T X_S$，从而无需存储历史信息。

---

## 3. 实验设计

### 3.1 数据集与场景
*   **合成数据**：所有实验均基于理论构建的合成数据进行仿真验证。输入刺激 $\mathbf{x}_s$ 从高斯分布 $\mathcal{N}(0, N_x^{-1})$ 中随机抽取，以模拟高维感觉输入。
*   **场景**：模拟一个两阶段过程：（1）表征漂移阶段，突触连接矩阵 $J$ 随时间随机改变；（2）自适应学习阶段，读取器基于漂移的表征和有限样本进行在线更新。

### 3.2 基准与对比方法
*   **自对比**：主要对比不同参数条件下的网络行为，是典型的自对比消融研究。关键对比包括：
    *   不同网络规模 ($N_x, N_y$) 对几何保持程度的影响 (Fig. 1g-i, 3d)。
    *   使用更新规则与不使用更新规则对读取器信噪比的影响 (Fig. 4d, h, n)。
    *   漂移来源对比：突触漂移 ( $J_t$ 变化) vs. 独立神经噪声 ( $y_{st}$ 独立加噪 ) 对解码泛化能力的影响 (Fig. 4m-n)。
    *   学习刺激集 $S$ 的规模 $N_s$ 对读取器性能的影响 (Fig. 4i)。
*   **与理论界限对比**：将仿真得到的几何失真与推导出的数学边界 (Eq. 7, Eq. 4) 进行对比，验证理论的准确性 (Fig. 1h, 3c, 3d)。

---

## 4. 资源与算力
论文未提及所使用的硬件（GPU型号、数量）和具体的运行时长。所有仿真均为小规模理论验证性实验，对算力要求应不高，可在常规计算环境中完成。

---

## 5. 实验数量与充分性

### 5.1 实验数量
论文包含多组系统性的仿真实验，覆盖了其理论框架的各个方面：
*   **几何保持验证**：系统探究了不同 $N_x$ 和 $N_y$ 组合下，前馈网络 (Fig. 1) 和循环网络 (Fig. 2) 的几何失真，并与数学边界对比。
*   **自适应解码验证**：围绕读取器的稳定性，进行了大量消融实验，包括：是否学习、样本数量、样本与目标的相关性、漂移机制差异、直接/间接通路架构等 (Fig. 4, 5)。
*   **附录实验**：附录补充了循环网络输入比例、几何保持对相似和相异刺激的非对称影响、无相关样本下的学习结果等，进一步增强了结论的鲁棒性。

### 5.2 充分性与客观性
*   **充分性**：实验设计紧密围绕核心理论，充分验证了所提出命题的关键依赖性（即 $N_y$ 规模的决定性作用）和边界条件的精确性。
*   **客观性与公平性**：作为理论论文，其主要目标是理论证明和仿真验证，不涉及与不同算法框架的性能竞争，因此不存在算法“公平”比较问题。消融实验逻辑清晰，结论客观。

---

## 6. 主要结论与发现
1.  **大规模网络必然保持几何**：当大脑皮层网络的下游神经元数量 ($N_y$) 远大于其上游输入维度 ($N_x$) 时，由突触变化引起的表征漂移几乎必然保持刺激间的表征几何结构（相似性关系），失真程度由 $1/\sqrt{N_y}$ 界定。
2.  **保持的几何是稳定解码的充要条件**：只要几何结构得以保持，一个简单的、生物可行的自适应解码规则（基于预测误差）就可以仅通过体验极少量、甚至与目标无关的任意刺激，来维持对特定记忆的稳定读取。
3.  **直接/间接通路实现无记忆稳定**：大脑中普遍存在的直接/间接通路架构，可以自动为下游读取器提供纠错所需的“参考信号”，从而无需存储过去的神经活动模式即可补偿漂移。
4.  **统一理论解释实验差异**：该理论为为什么在一些脑区（如初级视觉皮层）能观察到稳定几何，而在另一些脑区（如梨状皮层）则难以观察到提供了简单解释：后者处理的刺激维度 ($N_x$) 极高，而实验中记录的神经元数量 ($N_y$) 相对不足。

---

## 7. 优点
*   **理论优雅且普适**：将表征漂移下的行为稳定性问题归结为一个简洁的比值 $N_x/N_y$，提炼出核心约束，具有高度的普遍性与解释力，与具体漂移动力学细节无关。
*   **严谨的数学基础**：为输入几何保持和时序几何保持分别推导了概率性和确定性边界，理论严密。
*   **生物可信性**：提出的自适应解码方案（预测误差校正、直接/间接通路）与已知的神经环路结构和学习规则（如Hebb可塑性、目标传播）高度兼容，弥合了理论与实验的差距。
*   **解释现有实验矛盾**：对为何在某些实验中难以观测到几何保持给出了有洞见的、可检验的理论解释。

---

## 8. 不足与局限
*   **模型简化**：模型基于线性或输入驱动的近似线性动力学假设，可能忽略了真实大脑中复杂的非线性交互和动态噪声，其结论在高度非线性网络中的适用性需进一步检验。
*   **刺激表征假设单一**：输入刺激 $\mathbf{x}_s$ 被假设为各向同性的高斯分布，这可能与真实感官输入在高维空间中高度结构化的特征不符。
*   **自适应解码的生物实现细节**：虽然提出的更新规则在生物学上可行，但如何精确地实现所需的伪逆运算 $Y_{St}^+$ 或完成高维误差信号的有效反向传播，在大脑中仍有待明确。
*   **缺乏真实数据验证**：作为纯理论工作，缺乏在真实神经记录数据上的验证。虽然为实证研究提供了指导，但其直接预测尚未在实验数据中检验。

---

## 9. 主要贡献
*   **概念整合**：首次将“表征漂移”、“表征几何”和“自适应解码”三个概念整合在一个统一的定量数学框架下。
*   **揭示关键条件**：明确指出并证明了执行漂移的神经元群体规模（$N_y$）是实现稳定感知和记忆的单一决定性条件。
*   **提出可行机制**：提出了一个生物物理上可行的、利用直接/间接通路实现无记忆漂移补偿的神经环路模型。
*   **为实验提供指导**：为未来寻找和测量稳定表征几何的实验提供了清晰的理论预测和参数指导。

（完）
