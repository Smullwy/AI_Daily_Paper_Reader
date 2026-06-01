---
title: NeurIPS25 Brain-Inspired fMRI-to-Text Decoding via Incremental and Wrap-Up Language Modeling
title_zh: NeurIPS25 脑启发式增量与总结语言建模的fMRI到文本解码
authors: Unknown
date: 2026-05-31
pdf: assets/local_pdfs/local-20260531-201714692155-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-wrap-up-language-modeling.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 7.0 订阅评分
score_label: 订阅评分
evidence: 使用脑启发式序列解码对齐fMRI嵌入与文本
tldr: 针对现有fMRI-to-text解码在处理长序列时因内存过载和语义漂移导致性能下降的问题，本文提出脑启发式分段增量解码框架，通过分割fMRI时间序列、增量解码及语义总结的wrap-up机制，并利用文本引导掩码与MAE强化fMRI表征，在两个数据集上显著超越SOTA，尤其随着解码长度增加增益更明显。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260531-201714692155-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-wrap-up-language-modeling/fig-001.webp\", \"caption\": \"Figure 1: Comparison of fMRI-to-text decoding frameworks. (a) Existing frameworks directly decode the entire fMRI sequence corresponding to the target text in a single step. (b) Our proposed segmentbased sequential decoding framework. (c) Cognitive mechanisms of human language comprehension, where incremental processing and segmental wrap-up operating in parallel.\", \"page\": 2, \"index\": 1, \"width\": 742, \"height\": 337}, {\"url\": \"assets/figures/local-pdf/local-20260531-201714692155-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-wrap-up-language-modeling/fig-005.webp\", \"caption\": \"Figure 2: Framework of CogReader, comprising two main components: (A) fMRI representation learning and (B) fMRI-to-text decoding.\", \"page\": 4, \"index\": 5, \"width\": 732, \"height\": 485}, {\"url\": \"assets/figures/local-pdf/local-20260531-201714692155-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-wrap-up-language-modeling/fig-004.webp\", \"caption\": \"Table 1: Comparison of our method and SOTA methods under different text decoding lengths on the Narrative dataset.\", \"page\": 8, \"index\": 4, \"width\": 822, \"height\": 258}, {\"url\": \"assets/figures/local-pdf/local-20260531-201714692155-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-wrap-up-language-modeling/fig-007.webp\", \"caption\": \"Table 2: Cases analysis for fMRI-text decoding on Narrative dataset. Exact matches between the target and predicted sentences are indicated in bold, while semantic similarity is shown in italic font.\", \"page\": 9, \"index\": 7, \"width\": 818, \"height\": 564}, {\"url\": \"assets/figures/local-pdf/local-20260531-201714692155-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-wrap-up-language-modeling/fig-002.webp\", \"caption\": \"Table 4: Comparison results of our fMRI representation learning method with other methods\", \"page\": 10, \"index\": 2, \"width\": 822, \"height\": 214}, {\"url\": \"assets/figures/local-pdf/local-20260531-201714692155-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-wrap-up-language-modeling/fig-003.webp\", \"caption\": \"Table 10: Cases analysis for fMRI2text. Exact matches between the target and predicted sentences are indicated in bold, while semantic similarity is shown in italic font.\", \"page\": 23, \"index\": 3, \"width\": 818, \"height\": 613}, {\"url\": \"assets/figures/local-pdf/local-20260531-201714692155-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-wrap-up-language-modeling/fig-006.webp\", \"caption\": \"Table 11: Cases analysis for fMRI2text. Exact matches between the target and predicted sentences are indicated in bold, while semantic similarity is shown in italic font.\", \"page\": 24, \"index\": 6, \"width\": 818, \"height\": 593}]"
motivation: 现有方法一次性处理整个fMRI序列，导致长序列解码时内存过载和语义漂移，性能显著退化。
method: 将fMRI时间序列分段增量解码，并引入wrap-up机制总结语义作为先验知识，同时采用文本引导掩码策略结合MAE强化fMRI表征学习。
result: 在两个数据集上均显著优于现有方法，且性能提升随解码长度增加而增大。
conclusion: 模仿人类认知的分段处理和语义归纳策略能有效缓解长序列解码的记忆负担，增强语义连续性，显著提升fMRI-to-text性能。
---

## 摘要
从非侵入性脑信号（如功能性磁共振成像，fMRI）中解码自然语言文本仍是脑机接口研究的核心挑战。尽管大语言模型（LLMs）的最新进展已实现开放词汇的fMRI到文本解码，但现有框架通常一次性处理整个fMRI序列，当处理长输入序列时，会因内存过载和语义漂移导致性能下降。为解决这一局限，我们提出了一种脑启发式的序列化fMRI到文本解码框架，模仿人类分块和归纳语言处理的认知策略。具体而言，我们将长fMRI时间序列分割为与最佳语言理解长度对齐的连续片段。每个片段被增量解码，随后通过总结机制归纳语义内容，并将其作为先验知识融入后续解码步骤。这种逐段处理的方法减轻了记忆负担，并确保跨片段的语义连续性。此外，我们引入了一种基于文本引导的掩码策略，与掩码自编码器（MAE）框架集成以学习fMRI表示。该方法利用关键语义令牌上的注意力分布选择性地掩码对应的fMRI时间点，并利用MAE引导模型关注语义显著时刻的神经活动，从而增强fMRI嵌入表征文本信息的能力。在两个数据集上的实验结果表明，我们的方法显著优于现有最先进的方法，且性能提升随解码长度增加而增加。代码可在https://github.com/WENXUYUN/CogReader获取。

## Abstract
Decoding natural language text from non-invasive brain signals, such as functional magnetic resonance imaging (fMRI), remains a central challenge in brain-computer interface research. While recent advances in large language models (LLMs) have enabled open-vocabulary fMRI-to-text decoding, existing frameworks typically process the entire fMRI sequence in a single step, leading to performance degrada- tion when handling long input sequences due to memory overload and semantic drift. To address this limitation, we propose a brain-inspired sequential fMRI-to- text decoding framework that mimics the human cognitive strategy of segmented and inductive language processing. Specifically, we divide long fMRI time series into consecutive segments aligned with optimal language comprehension length. Each segment is decoded incrementally, followed by a wrap-up mechanism that summarizes the semantic content and incorporates it as prior knowledge into sub- sequent decoding steps. This sequence-wise approach alleviates memory burden and ensures semantic continuity across segments. In addition, we introduce a text- guided masking strategy integrated with a masked autoencoder (MAE) framework for fMRI representation learning. This method leverages attention distributions over key semantic tokens to selectively mask the corresponding fMRI time points, and employs MAE to guide the model toward focusing on neural activity at seman- tically salient moments, thereby enhancing the capability of fMRI embeddings to represent textual information. Experimental results on the two datasets demon- strate that our method significantly outperforms state-of-the-art approaches, with performance gains increasing as decoding length grows. The code is available at https://github.com/WENXUYUN/CogReader.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文属于 **brain decoding** 和 **fMRI representation** 方向，其分段增量解码与语义总结机制可视为一种基于神经先验的时序对齐策略，与 **representation alignment** 和 **neural prior** 方向也存在交叉。
- **启发与意义**：论文将人类语言理解的认知分段与归纳机制显式化为可训练的 wrap-up 框架，为脑解码任务引入了结构化的时序归纳偏置，这对其它基于脑信号的跨模态对齐任务（如视觉、运动解码）具有迁移潜力。
- **可借鉴点**：文本引导的掩码策略用 BERT 注意力分布生成语义重要性加权，可被复用于其它脑信号表示学习任务中，增强对关键语义时刻的关注。同时，分段 wrap-up 中的摘要传递方式可改造为多视角约束或分层表示对齐模块。
- **阅读建议**：重点阅读第 3.2 节的增量解码与 wrap-up 机制，以及第 3.1 节中文本引导掩码的公式细节；实验部分可关注噪声对比实验，以判断模型是否真正从脑信号中提取语义信息。

## 1. 论文的核心问题与整体含义
- **核心问题**：当前开放的 fMRI-到-文本解码方法通常将整个 fMRI 序列一次性输入模型，当文本变长、对应脑信号序列变长时，会因**内存过载**和**语义漂移**导致解码性能显著下降。
- **整体含义**：受人类语言理解中“增量处理”与“分段整合”双认知机制启发，提出**分段、序列式解码框架**，通过将长 fMRI 序列分块、逐步解码，并利用“总结”模块传递跨段语义，从而缓解长序列解码的记忆负担并保持语义连贯性。同时，通过文本引导的掩码自编码器增强 fMRI 表示中关键语义信息。

## 2. 论文提出的方法论
- **整体框架 CogReader**：包含两个阶段：
  - **A. fMRI 表示学习**：基于掩码自编码器 (MAE) 的预训练，引入文本引导掩码策略；
  - **B. fMRI-到-文本解码**：脑启发的分段增量解码 + 语义总结 (wrap-up) 机制。
- **文本引导的掩码策略** (Text-Guided Masking)：
  - 使用预训练 BERT 计算每个词的注意力重要性得分 $A_{w_i}$，然后映射到 fMRI 时间帧 (TR) 的注意力得分 $A_{x_t}$。
  - 对注意力最高的 40% 帧随机掩码 75% 顶点信号，对其余帧仅掩码 25%，迫使模型重点重构语义关键帧的信号，从而学到更具语义信息的 fMRI 表示。
  - 采用两阶段训练：先在 HCP 大量无标注数据上用随机掩码预训练，再在 Narratives 数据上用文本引导掩码微调。
- **脑启发式分段增量解码**：
  - 将长为 $T$ 的 fMRI 序列 $X$ 分成等长段 $X_1, ..., X_K$ (段长 $N_s=20$)。
  - 每段 $X_i$ 通过脑编码器得到表示 $F_i$，投影后送入 BART 解码器，生成预测文本 $\tilde{W}_i$ (增量解码)。
- **语义总结 (Wrap-up) 机制**：
  - 对当前段生成的文本 $\tilde{W}_i$，用 BERT 提取上下文化嵌入 $F_i^{\text{text}}$，经 MLP $P_\theta$ 得到语义摘要向量 $c_i = P_\theta(F_i^{\text{text}})$。
  - 解码下一段 $X_{i+1}$ 时，将 $c_i$ 与其表示 $F_{i+1}$ 融合，作为先验知识引导后续解码，模拟人脑归纳理解过程。
- **损失函数**：
  - 表示学习阶段：掩码重建损失 $L_{\text{recon}} = \text{MSE}(X, \tilde{X})$。
  - 解码阶段：跨所有段生成文本的交叉熵损失 $L_{\text{decoding}} = \sum_{i=1}^{K} \text{CE}(W_i, \tilde{W}_i)$。

## 3. 实验设计
- **数据集**：
  - 预训练：HCP S1200 (1206 被试，大规模无标注 fMRI)。
  - 解码任务：**Narratives** (345 被试，自然故事听觉理解) 和 **Huth** (8 被试，被动听故事)。
- **对比方法 (基准)**：
  - UniCoRN, EEG-Text, BP-GPT, PREDFT (均为近期 fMRI-到-文本解码 SOTA)。
- **评价指标**：
  - 词重叠：BLEU-1~BLEU-4；ROUGE-1 (F, P, R)。
  - 语义相似：BERTScore (F, P, R)。
- **解码长度设置**：分别在 20TR、40TR、60TR 三种长度下评估，考察模型随序列增长的鲁棒性。
- **消融与补充实验**：
  - 模块消融：逐步移除序列解码、预训练、文本引导掩码。
  - 噪声对比实验：比较训练和测试均使用噪声数据、仅测试使用真实 fMRI 等情况，验证模型是否真正利用脑信号语义信息。
  - 表示学习评估：将 UniCoRN 的表示模块替换为本方法表示模块，对比多种 TR 长度。
  - 参数讨论：段长 $N_s$ 从 10 到 70 选择最优，MLP 维度从 0 到 256 选定 128。

## 4. 资源与算力
- 硬件：文中提及使用 **NVIDIA GeForce RTX 3090 GPU**，所有实验在 CUDA 12.2 下进行。
- 软件：PyTorch + HuggingFace Transformers，优化器 Adam + warmup 策略。
- 具体训练时长/总 GPU 卡数未明确给出，但可从两阶段训练和实验规模推测需要多卡或较长训练时间。

## 5. 实验数量与充分性
- **实验组数**较多，覆盖：
  - 两个解码数据集 (Narratives, Huth)；
  - 四种 SOTA 对比方法；
  - 三种解码长度 (20, 40, 60 TR) 的主表对比；
  - 消融实验 (四组组合)；
  - 噪声数据敏感实验 (四种训练/测试组合)；
  - 表示学习模块替换对比 (五种 TR 长度)；
  - 参数分析 (段长、MLP 维度)。
- 实验设计**充分且公平**：数据集采用故事级拆分避免文本泄露，对比方法均重新训练并适配 fMRI 输入，且包含噪声数据对比以排除 LLM 记忆效应。

## 6. 论文的主要结论与发现
- CogReader 在所有解码长度和全部指标上**显著优于** UniCoRN、EEG-Text、BP-GPT、PREDFT。
- 随解码长度增加至 60TR，CogReader 的 BLEU-1 达到 36.2, BLEU-4 达到 12.1，而其他方法性能基本持平或下降，表明分段 wrap-up 机制有效克服长序列退化。
- 消融实验表明，**脑启发式序列解码模块贡献最大**，预训练和文本引导掩码均带来稳定正向增益。
- 噪声对比实验证明模型确实从真实 fMRI 信号中提取语义信息，而非仅依赖 LLM 的统计记忆。

## 7. 优点
- **认知启发性强**：将人类语言理解中的增量处理和分段整合直接转化为可计算的解码流程，设计新颖且符合神经科学发现。
- **长序列鲁棒性突出**：分段解码 + 语义 wrap-up 使模型在解码长度增加时不降反升，解决了现有单步解码的核心瓶颈。
- **表示学习与解码解耦且协同**：文本引导掩码增强 fMRI 嵌入的语义聚焦能力，且两阶段训练可复用大规模无标注脑数据，缓解配对数据稀缺问题。
- **实验验证全面**：多数据集、多长度、噪声测试、模块消融、表示替换等实验充分验证各模块有效性和解码可信度。

## 8. 不足与局限
- **静态分段策略**：最佳段长 $N_s=20$ 固定，无法根据文本复杂度动态调整，可能限制对不同类型叙事内容的适应能力。
- **fMRI 时间分辨率限制**：每个 TR 对应多个词，导致词级对齐粗糙，生成文本的连贯性和细节还原仍待提升。
- **数据与泛化性**：仅在 Narratives 和 Huth 两个自然语言听觉理解数据集上验证，未在其他模态（如视觉刺激、运动想象）或更大规模多中心数据上评估。
- **模型复杂度**：wrap-up 依赖额外 BERT 和 MLP，可能增加参数量和推断时间，文中未讨论效率分析。

## 9. 主要结论
该工作成功将人类认知分段与归纳机制融入 fMRI-到-文本解码，提出分段增量解码与语义总结框架，显著提升了长文本解码性能，并在标准基准上取得了全面领先的结果，为脑机接口中自然语言解码提供了有效的新范式。

（完）
