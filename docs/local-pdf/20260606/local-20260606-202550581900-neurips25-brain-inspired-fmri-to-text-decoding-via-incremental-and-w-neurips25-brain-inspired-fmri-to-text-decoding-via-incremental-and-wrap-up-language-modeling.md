---
title: NeurIPS25 Brain-Inspired fMRI-to-Text Decoding via Incremental and Wrap-Up Language Modeling
title_zh: NeurIPS25：通过增量与总结语言建模实现脑启发的fMRI到文本解码
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-202550581900-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-w.pdf
tags: ["paper:本地PDF", "query:local-pdf"]
score: 0.0 订阅评分
score_label: 订阅评分
evidence: 不相关
tldr: 为解决fMRI到文本解码中长序列处理的内存过载与语义漂移问题，本文提出脑启发式框架CogReader，模仿人类分段归纳语言处理，将长fMRI序列分段增量解码，并引入wrap-up机制传递语义先验。同时，设计文本引导掩码策略结合掩码自编码器，聚焦语义关键时刻的神经活动，增强fMRI表征。实验表明，该方法显著优于现有技术，且性能增益随解码长度增加而提升。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-202550581900-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-w/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 2162, \"height\": 972}, {\"url\": \"assets/figures/local-pdf/local-20260606-202550581900-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-w/fig-002.webp\", \"caption\": \"\", \"page\": 4, \"index\": 2, \"width\": 2368, \"height\": 1570}, {\"url\": \"assets/figures/local-pdf/local-20260606-202550581900-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-w/fig-003.webp\", \"caption\": \"\", \"page\": 5, \"index\": 3, \"width\": 2126, \"height\": 420}, {\"url\": \"assets/figures/local-pdf/local-20260606-202550581900-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-w/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 1959, \"height\": 378}, {\"url\": \"assets/figures/local-pdf/local-20260606-202550581900-neurips25-brain-inspired-fmri-to-text-decoding-via-incremental-and-w/fig-005.webp\", \"caption\": \"\", \"page\": 8, \"index\": 5, \"width\": 2146, \"height\": 432}]"
motivation: 现有fMRI-to-text解码方法单步处理长序列，导致内存过载和语义漂移，性能下降。
method: 提出分段增量解码与wrap-up语义总结机制，并设计文本引导掩码策略与MAE框架，增强语义关键时刻的fMRI表示。
result: 在两个数据集上显著优于最先进方法，且解码长度越长，性能提升越明显。
conclusion: 脑启发式分段增量语言建模有效缓解长序列解码问题，提升了fMRI到文本的解码性能。
---

## 摘要
从功能性磁共振成像（fMRI）等非侵入性脑信号中解码自然语言文本，仍是脑机接口研究的核心挑战。尽管大语言模型（LLMs）的最新进展已实现开放词汇的fMRI到文本解码，但现有框架通常一次性处理整个fMRI序列，当处理长输入序列时，因内存过载和语义漂移导致性能下降。为解决这一局限，我们提出一种脑启发的顺序式fMRI到文本解码框架，模仿人类分段和归纳式语言处理的认知策略。具体而言，我们将长fMRI时间序列划分为与最佳语言理解长度对齐的连续片段。每个片段逐步解码，随后通过总结机制概括语义内容，并将其作为先验知识融入后续解码步骤。这种逐序列的方法减轻了记忆负担，确保了跨片段的语义连续性。此外，我们引入一种文本引导的掩码策略，与掩码自编码器（MAE）框架相结合，用于fMRI表示学习。该方法利用关键语义标记上的注意力分布，选择性掩码相应的fMRI时间点，并使用MAE引导模型关注语义显著时刻的神经活动，从而增强fMRI嵌入表示文本信息的能力。在两个数据集上的实验结果表明，我们的方法显著优于最先进的方法，且随着解码长度的增加，性能提升更为显著。代码可在https://github.com/WENXUYUN/CogReader获取。

## Abstract
Decoding natural language text from non-invasive brain signals, such as functional magnetic resonance imaging (fMRI), remains a central challenge in brain-computer interface research. While recent advances in large language models (LLMs) have enabled open-vocabulary fMRI-to-text decoding, existing frameworks typically process the entire fMRI sequence in a single step, leading to performance degrada- tion when handling long input sequences due to memory overload and semantic drift. To address this limitation, we propose a brain-inspired sequential fMRI-to- text decoding framework that mimics the human cognitive strategy of segmented and inductive language processing. Specifically, we divide long fMRI time series into consecutive segments aligned with optimal language comprehension length. Each segment is decoded incrementally, followed by a wrap-up mechanism that summarizes the semantic content and incorporates it as prior knowledge into sub- sequent decoding steps. This sequence-wise approach alleviates memory burden and ensures semantic continuity across segments. In addition, we introduce a text- guided masking strategy integrated with a masked autoencoder (MAE) framework for fMRI representation learning. This method leverages attention distributions over key semantic tokens to selectively mask the corresponding fMRI time points, and employs MAE to guide the model toward focusing on neural activity at seman- tically salient moments, thereby enhancing the capability of fMRI embeddings to represent textual information. Experimental results on the two datasets demon- strate that our method significantly outperforms state-of-the-art approaches, with performance gains increasing as decoding length grows. The code is available at https://github.com/WENXUYUN/CogReader.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：脑解码（brain decoding）、fMRI表示学习（fMRI representation），并涉及表示对齐（representation alignment）与多视角约束思路，与读者研究方向高度相关。
- **启发与意义**：该工作将人类增量语言处理与分块总结的认知机制显式建模为解码框架，展示了认知启发设计在缓解长序列脑解码中内存/语义漂移问题上的有效性，为脑信号到文本的神经先验建模提供了新的研究视角。
- **可借鉴点**：分块增量解码与语义总结（wrap-up）机制、文本引导的注意力掩码自编码器适用于其他脑信号模态（如 EEG/MEG）以及长时序脑编码任务；其两阶段表示学习（大规模无标签预训练 + 下游任务微调）范式也值得借鉴。
- **阅读建议**：适合从事脑解码、fMRI 表示学习与跨模态对齐的研究者精读方法部分（尤其是分块策略与语义总结设计），并重点关注消融实验中各模块的贡献与噪声实验对模型语义敏感性的验证。

## 1. 研究动机与核心问题
- 现有 fMRI-to-text 解码方法通常将整个与目标文本对应的 fMRI 序列一次性输入模型，进行端到端翻译（类似机器翻译）。
- 当解码长文本时，这种单步处理范式导致 **内存过载和语义漂移**，解码性能显著下降。
- 人类语言理解并非完全线性，而是兼有 **增量加工与分段整合（语义总结）** 的认知机制，帮助在长文本理解中维持语义连贯性并降低工作记忆负担。
- 本文提出 **CogReader**，一种脑启发的顺序式 fMRI-to-text 解码框架，模仿人类分段、归纳式语言处理策略，以缓解上述问题。

## 2. 方法论
### 2.1 整体框架
- CogReader 由两大模块构成：**fMRI 表示学习（stage A）** 和 **fMRI-to-text 解码（stage B）**。
- 给定 fMRI 时间序列 $X=\{x_1,\dots,x_T\}$，目标为解码自然语言词序列 $W=\{w_1,\dots,w_n\}$。

### 2.2 fMRI 表示学习
- **两阶段训练**：
  - 第一阶段：在 **HCP S1200** 大规模无标注 fMRI 数据集上以随机掩码（mask ratio 75%）训练掩码自编码器（MAE），重构缺失信号。
  - 第二阶段：在 **Narratives** 配对数据集上微调，引入文本引导掩码策略，替代随机掩码。
- **文本引导掩码**：
  - 用预训练 BERT 计算文本中每个单词的注意力得分 $A_{w_i}$，聚合到对应 fMRI 时间帧（TR），得到每帧的语义重要性得分。
  - 对得分最高的前 40% 帧，随机掩码 75% 的顶点信号；其余帧仅掩码 25%。
  - 目的：引导模型更关注语义关键时刻的神经活动，增强 fMRI 表征对文本信息的捕获能力。
- **自编码器结构**：
  - 空间编码器 + 时间编码器（均为 8 层 Transformer）。
  - 空间编码器先提取每个时间帧的脑区空间特征，经全局平均池化得到各时间的空间嵌入 $s_t$；时间编码器建模时间依赖，输出潜在序列 $\{h_t\}$。
  - 解码器用 4 层 Transformer 重构 fMRI 序列。重建损失 $L_{\text{recon}}=\text{MSE}(X,\tilde{X})$。

### 2.3 fMRI-to-text 解码
- **分段增量解码**：
  - 将长 fMRI 序列划分为固定长度 $N_s$（实验定为 20 TRs）的连续片段 $X_1,\dots,X_K$。
  - 每段经脑编码器得到表示 $F_i$，用 BART 解码器逐步生成对应文本片段 $\tilde{W}_i$（增量解码）。
- **语义总结（Wrap-up）机制**：
  - 对当前解码片段 $\tilde{W}_i$，用预训练 BERT 提取文本嵌入 $F_i^{\text{text}}$，经 MLP $P_\theta$ 得到语义摘要向量 $c_i=P_\theta(F_i^{\text{text}})$。
  - 将 $c_i$ 融入下一片段 $X_{i+1}$ 的表示，使后续解码获得先验信息，保证跨片段语义连续性。
- **解码损失**：
  $$L_{\text{decoding}}=\sum_{i=1}^K \text{CE}(W_i,\tilde{W}_i)$$
  其中 CE 为交叉熵损失。

### 2.4 整体训练与推理
- 先完成两阶段表示学习，冻结或使用学习到的脑编码器进入解码阶段。
- 解码阶段联合优化增量解码与语义总结模块。

## 3. 实验设计
- **数据集**：
  - HCP S1200（预训练，1206 名被试，7 领域 fMRI 数据）
  - Narratives（345 名被试，自然故事听觉刺激下的 fMRI-文本对，用于解码和微调）
  - Huth（8 名被试，被动听故事 fMRI 数据，用于泛化评估）
- **评估指标**：BLEU-1/2/3/4（字面重合）、ROUGE-1（F/P/R）、BERTScore（F/P/R）。
- **对比方法**：
  - UniCoRN（BART 翻译范式）
  - EEG-Text（改造自 EEG 解码方法）
  - BP-GPT（基于提示和对比学习的大语言模型解码）
  - PREDFT（端到端解码模型）
- **实验设置**：
  - 三种解码长度：20 TRs、40 TRs、60 TRs。
  - 消融实验：测试顺序解码、HCP预训练、文本引导掩码各模块贡献。
  - fMRI 表示学习对比：将 UniCoRN 的表示模块替换为本方法，保持解码策略不变。
  - 噪声数据验证：使用噪声/真实 fMRI 交叉训练和测试，验证模型是否真正从脑信号中提取语义。

## 4. 资源与算力
- 硬件：NVIDIA GeForce RTX 3090 GPU，CUDA 12.2。
- 论文未明确说明使用的 GPU 数量、单次训练时长或总计算量，仅列出了一块 RTX 3090，且未给出训练耗时细节。

## 5. 实验数量与充分性
- **实验丰富性**：
  - 多长度（3 种）基准对比，覆盖 5 个方法，使用 3 类指标。
  - 详尽消融实验（4 种配置）验证各组件效果。
  - 表示学习嵌入质量专项对比及噪声实验。
  - 两个关键超参数（片段长度、MLP维度）的敏感性分析。
- **充分性与公平性**：
  - 对比方法均按原论文设定或合理改造后复现。
  - 使用标准公开数据集，训练/测试故事完全分离，避免文本泄露。
  - 实验结果一致地支持所提方法的有效性，噪声实验进一步排除了仅依赖语言模型记忆的可能性，结论较可靠。

## 6. 主要结论与发现
- CogReader 在所有解码长度和指标下均显著优于现有 SOTA 方法（UniCoRN、EEG-Text、BP-GPT、PREDFT）。
- 随解码长度增加（20→40→60 TRs），基线方法性能趋于平缓甚至下降，而 CogReader 增益持续上升（如 BLEU-1 从 25.4% 升至 36.2%），验证了分段增量与总结机制在长序列解码中的特殊优势。
- 文本引导掩码和 HCP 预训练均对 fMRI 表示质量有积极贡献；顺序解码框架带来的提升最显著。
- 噪声对比实验表明，模型真正利用了 fMRI 中的语义信息，而非仅依赖语言模型的先验。

## 7. 优点
- **认知启发设计**：将分段增量处理和语义总结的认知理论切实转化为模型架构，针对性强。
- **系统性能优异**：在标准基准上显著超越现有方法，尤其在长文本解码上优势突出。
- **验证严谨**：包含消融、噪声实验、表示学习对比、多数据集测试，多角度佐证了方法的有效性。
- **可解释参数分析**：对片段长度和摘要维度进行了细致调优。

## 8. 不足与局限
- 片段长度 $N_s$ 固定为 20 TRs，不能根据文本复杂度动态调整，可能限制对特异叙事结构的适应能力。
- 模型仅在两个公开 fMRI 数据集上评估，受限于配对数据规模，尚未在更大范围数据集或多模（如结合 EEG）场景下检验泛化性。
- 现有评测指标（BLEU、ROUGE 等）主要衡量字面重合或浅层语义相似度，对生成文本的连贯性、逻辑忠实度评估不足。
- 算力细节披露较少（如训练时长、批量大小对显存的影响），复现成本不明确。

## 9. 总结
该论文针对长文本 fMRI 解码中的内存压力和语义漂移问题，提出了一种仿生人语言处理机制的增量—总结式解码框架，并结合文本感知的掩码自编码器提升脑信号表示质量。实验结果扎实，展现了明显的性能优势和可解释性。未来若能在动态分段、多模态融合和更多样化评测上拓展，有望进一步推动脑机接口自然语言解码的实用化。

（完）
