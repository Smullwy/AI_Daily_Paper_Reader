---
title: "Beyond next-word prediction: hierarchical linguistic composition drives LLM-brain alignment in time"
title_zh: 超越下一个词预测：层级语言组合在时间上驱动LLM-大脑对齐
authors: "Zhao, J., Brennan, J. R."
date: 2026-05-16
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.15.725490v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 层级语言组织驱动大模型与大脑对齐
tldr: 大型语言模型与大脑神经活动的对齐机制尚存争议。本研究操控句法、组合语义和联想语义，匹配可预测性，分析GPT2-XL与人类EEG数据的对齐。发现句法结构增强对齐，组合语义减弱对齐，联想语义无影响，表明组合语义为大脑独特编码，而联想语义和部分句法为共享编码。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究层次语言组合（句法、语义）是否超越统计因素影响LLM-脑对齐。
method: 通过操控语言刺激的句法、组合语义和联想语义并控制可预测性，用线性编码模型比较GPT2-XL词嵌入与人类EEG数据的对齐。
result: 句法结构增强对齐，组合语义减弱对齐，联想语义无显著调节。
conclusion: 组合语义在大脑中有独特编码，而部分句法和联想语义则在LLM与大脑间共享表示。
---

## 摘要
大型语言模型（LLM）的内部表征与人类语言理解过程中的神经活动相关，或称为“对齐”。一种观点认为，这种对齐反映了LLM和人类对统计模式的共享敏感性，而另一些人则认为，它至少部分反映了这些系统中共享语言表征的出现。在此，我们研究层级语言组合——一种被认为是人类语言基础的性质——是否调节LLM-大脑对齐。为此，我们在英语句子中操纵了句法、组合语义和联想语义，这些句子在一项脑电图（EEG）实验中呈现给LLM和人类被试。我们在可预测性上匹配了语言操纵的刺激，这使我们能够将由语言结构引起的对齐从统计因素中分离出来。通过比较在可预测性匹配条件下使用线性编码模型得出的LLM-EEG对齐分数，我们评估了语言操纵如何调节人类EEG阅读数据与从GPT2-XL隐藏层逐词提取的上下文嵌入之间的对齐。三个关键模式出现：（1）具有句法结构的词序列对齐增强，（2）具有组合语义的句子对齐减弱，（3）联想语义不调节对齐。这些观察到的LLM-EEG对齐的语言调节发生在可预测性之外。我们的结果表明，联想语义在LLM和大脑中编码相似，至少句法结构的某些方面也是如此，而组合语义在人类大脑中的编码更为独特。

## Abstract
The internal representations of large language models (LLMs) correlate, or "align", with human neural activity during language comprehension. One view holds that this alignment reflects shared sensitivity to statistical patterns in LLMs and humans, while others hold that it reflects, at least in part, the emergence of shared linguistic representations in these systems. Here, we investigate whether hierarchical linguistic composition, a property believed to be fundamental to human language, modulates LLM-brain alignment. To this end, we manipulated syntax, compositional semantics, and associative semantics in English sentences that were presented to both an LLM and human participants during an electroencephalography (EEG) experiment. We matched linguistically manipulated stimuli in predictability, which allows us to tease apart alignment induced by linguistic structure from statistical factors. By comparing LLM-EEG alignment scores that were derived using a linear encoding model across predictability-matched conditions, we evaluate how linguistic manipulations modulate the alignment between human EEG reading data and contextual embeddings extracted word-by-word from the hidden layers of GPT2-XL. Three key patterns emerge: (1) increased alignment for word sequences with syntactic structure, (2) decreased alignment for sentences with compositional semantics, and (3) associative semantics does not modulate alignment. These observed linguistic modulations of LLM-EEG alignment take place above and beyond predictability. Our results indicate that associative semantics is encoded similarly by LLMs and the brain, as are at least some aspects of syntactic structure, while compositional semantics is more uniquely encoded in the human brain.

---

## 论文详细总结（自动生成）

好的，根据您提供的论文内容，以下是关于这篇论文的详细中文总结，按照您要求的要点展开。

### 1. 论文的核心问题与整体含义

本研究旨在探究**层次化的语言组合**是否是驱动大型语言模型（LLM）内在表征与人类大脑神经活动（“LLM-大脑对齐”）的关键因素，并试图超越主流的“下一个词预测”假说。

*   **研究动机与背景**：当前，LLM 的内部表征被观察到与人类语言理解时的大脑活动高度相关（对齐）。对这种现象的解释存在争议：
    *   **预测唯一论**：认为对齐仅仅反映了两个系统对**统计模式**和**可预测性**的共同敏感性。
    *   **结构涌现论**：认为对齐反映了两个系统均从统计数据中学习到了**共享的、潜在的语言学结构**。
*   **核心问题**：在**严格控制可预测性**的情况下，句法、组合语义和联想语义这三类核心语言特征是否会显著调节 LLM 与大脑（EEG）信号的对齐程度？
*   **整体含义**：通过将语言结构从统计预测中解耦，来更精确地描绘 LLM 和人类大脑在语言加工中共享与独特的计算表征，为“预测-结构”之争提供因果性更强的证据。

### 2. 论文提出的方法论

本研究采用了一种**因果操控+线性编码模型评估**的方法论，核心在于通过实验设计剥离混淆变量，而非提出新的算法。

*   **核心思想**：通过心理语言学实验方法，**主动、系统性地操控**同时输入给 LLM 和人类被试的语言刺激的语言学属性，并**匹配不同操控条件下的基于 LLM 的可预测性（surprisal）**，然后观察“LLM-大脑对齐”分数如何变化。
*   **关键技术流程**：
    1.  **刺激构建与可控性匹配**：生成六种不同语言属性的句子（见“实验设计”），并使用 `minicons` 工具和 GPT2-XL 计算每种条件下句末词的 `surprisal`，通过子采样使得核心对比条件在 `surprisal` 上无显著差异。
    2.  **LLM嵌入提取**：将实验句逐词输入 GPT2-XL，从48个隐藏层中逐词提取 1600 维的上下文嵌入（contextual embeddings），对长词取子词 token 向量平均，最后通过 PCA 降至 50 维。同时使用 GloVe词嵌入和随机向量作为控制。
    3.  **大脑对齐量化（线性编码模型）**：
        *   **模型训练**：使用**岭回归（Ridge Regression）** 在训练集上学习从 LLM 词嵌入 ($X$) 到 EEG 信号 ($y$) 的线性映射。为 EEG 的每个时间-通道点 (t, c) 独立求解一个系数 $\beta$，其优化目标为 $\arg\min_{\beta} \|y - X\beta\|_2^2 + \lambda\|\beta\|_2^2$。
        *   **对齐分数（Alignment Score）**：在测试集上，使用训练好的模型预测 EEG 信号 $\hat{y}$，计算预测信号 $\hat{y}$ 与实际信号 $y$ 之间的**皮尔逊相关系数** $r$，此即对齐分数。通过10折连续分段交叉验证评估模型的泛化能力。
    4.  **统计分析**：对比不同语言条件下的对齐分数。例如，句法效应通过对比 `JABBERWOCKY` 与 `SHUFFLED JABBERWOCKY` 的对齐分数来检验；组合语义效应通过一个 2×2 方差分析中的交互效应来检验。统计推断使用**基于时空聚类的非参数置换检验（cluster-based permutation test）**。

### 3. 实验设计

本研究的主实验是一个2×2全因子被试内设计，外加两个关联条件，共六种由 80 个句子组成的条件，并包含额外的填充句（filler items）。

*   **被试**：32名英语母语者（4名因伪迹过多被剔除，最终保留28名）。
*   **刺激材料与条件**：
    *   **句法 (Syntax)**：通过操纵句子是否具有完整句法结构来定义。
        *   `NORMAL`：正常的、语义连贯的英语句子。
        *   `COLORLESS GREEN`：句法正确但语义不合理且语义关联弱的句子。
        *   `JABBERWOCKY`：由无意义但有语法形态线索的假词按正确句法构成的句子。
        *   **`SHUFFLED` 条件**：将上述 `NORMAL`、`COLORLESS GREEN`、`JABBERWOCKY` 句子中的词序随机打乱，从而破坏其句法结构。
    *   **组合语义 (Compositional Semantics)**：通过句法（有无）和词汇性（`COLORLESS GREEN` vs. `JABBERWOCKY`）的交互作用来操作定义，其效应体现在（`(COLORLESS GREEN - JABBERWOCKY) – (SHUFFLED COLORLESS - SHUFFLED JABBERWOCKY)`）的差异中。
    *   **联想语义 (Associative Semantics)**：通过对比 `SHUFFLED NORMAL`（词间有较强语义关联）和 `SHUFFLED COLORLESS`（词间语义关联弱）来定义。
*   **Benchmark 与对比方法**:
    *   **主要对比**：这是一个对内对比设计，核心是**比较不同语言操控条件下LLM-脑对齐分数的高低**，而非对比不同的 LLM。因此，其“benchmark”是统一的基准条件，如含句法 (JABBERWOCKY) 与不含句法 (SHUFFLED JABBERWOCKY) 的对齐之差。
    *   **Internal验证**：LLM 端进行了**探针任务（probing）**，验证 GPT2-XL 内部表征是否区分了这些语言学特征；脑电端进行了**多元模式解码（EEG decoding）**，验证脑信号是否同样能区分这些特征。
    *   **模型对比**：在对齐层面，对比了 `GPT2-XL`、`GloVe`静态词嵌入和`随机嵌入`的对齐效果。

### 4. 资源与算力

*   **LLM选择**: 论文使用了 **GPT2-XL** 模型。这是一个公开的、预训练好的模型。
*   **算力说明**: 论文**未明确提及**使用了何种型号的 GPU、使用了多少块、以及运行实验的总时长。其研究主要在于对已有 LLM 的推理（inference）和嵌入提取，以及 EEG 信号的统计建模，计算强度相对较低。

### 5. 实验数量与充分性

本研究的实验设计严谨而全面，实验数量充足且针对性强。

*   **核心实验**：
    *   **1个主对齐实验**：包含六种精细操控的语言条件，每种条件 80 句，总计 480 个关键试次。
    *   **3个关键假设检验**：针对句法、组合语义和联想语义分别进行了预先计划的对比。
*   **补充验证实验**：
    *   **LLM 探针 (Probing)**：对9组不同的语言学对比，在所有48个GPT2-XL层上训练了逻辑回归分类器。
    *   **脑电解码 (Decoding)**：对同样的9组对比进行了时间分辨的线性SVM解码。
    *   **时间响应函数 (TRF) 分析**：为了补充解释 EEG 解码中对联想语义不敏感的问题，补充了词级的TRF分析。
*   **充分性评价**：
    *   **客观公平性**：实验通过匹配 `surprisal` 排除了“可预测性”这一最大的混淆变量。其通过 `JABBERWOCKY` 条件将句法从语义中剥离、通过 `SHUFFLED` 条件剥离句法，这种设计使得对**因果效应**的推断比纯自然语料分析更为可靠。
    *   **多模态验证**：结合了LLM探针和脑电解码，从计算模型和生物学两端分别验证了操控的有效性，使得对齐结果的变化有坚实的解释基础。

### 6. 论文的主要结论与发现

本研究否定了“预测唯一论”，并揭示了语言的不同方面在LLM和大脑中呈现出不同的共享模式。

1.  **句法增强对齐**：当刺激包含基本句法结构时（`JABBERWOCKY` vs. `SHUFFLED JABBERWOCKY`），LLM-EEG 对齐分数**显著提高**。
2.  **组合语义减弱对齐**：当刺激同时包含句法结构和真实词汇（`COLORLESS GREEN`）时，LLM-EEG 对齐分数**显著降低**。LLM 探针显示 GPT2-XL 对句法和词汇性的**交互作用不敏感**，而脑电解码对此交互**高度敏感**，表明组合语义是大脑独特编码的，导致此时两个系统表征出现分歧（对齐降低）。
3.  **联想语义不调节对齐**：改变刺激的语义关联强度（`SHUFFLED NORMAL` vs. `SHUFFLED COLORLESS`）**不影响** LLM-EEG 对齐分数。两个系统的探针和解码分析均表明它们各自对这种变化敏感，且程度相当，因此对齐分数保持恒定。

综上，三个关键发现分别对应了“共享增强”、“脑部独有导致分化”和“共同编码维持不变”三种模式。

### 7. 优点

*   **因果操控设计**：这是该研究最大的亮点。通过严格的心理语言学实验操控（如Jabberwocky、Shuffled 句子）和可预测性匹配，成功地将难以分离的语言学变量进行了解耦，使得结论的因果性强于传统的基于自然语料的关联研究。
*   **完整的证据链**：研究构建了一个“LLM探针-脑电解码-对齐度量”的三角验证体系。不仅观察到了对齐的变化，还分别从计算模型和神经活动两端提供了独立的证据来解释这些变化的原因。
*   **理论靶向性强**：实验设计直接指向当前领域内“预测驱动”与“结构涌现”的核心理论争议，并提出了清晰的假设（图1）。

### 8. 不足与局限

*   **句法操纵的深度有限**：该研究将“句法”操作化为“有无”基本短语结构。它无法说明 LLM 和大脑在更复杂、更抽象的句法依赖性（如长距离依赖、wh-移位等）上的计算是否也表现出相似的对齐模式。
*   **组合语义的操作定义局限**：组合语义通过交互效应来定义，是一种“过程差分”的操作，没有直接针对特定的语义运算（如谓词修饰、量化等）进行更为具体的刻画。
*   **单一模型的泛化性**：结论仅基于 GPT2-XL。虽然这是一个被广泛研究的模型，但 LLM 的架构和规模千差万别，这些发现是否能推广到其他模型（如更现代的架构或更大规模的模型）尚不可知。
*   **脑成像模态的局限性**：EEG 具有高时间分辨率，但空间分辨率有限。其结果中的头皮拓扑分布信息相对粗略，无法精确定位组合语义效应的大脑皮层来源。

（完）
