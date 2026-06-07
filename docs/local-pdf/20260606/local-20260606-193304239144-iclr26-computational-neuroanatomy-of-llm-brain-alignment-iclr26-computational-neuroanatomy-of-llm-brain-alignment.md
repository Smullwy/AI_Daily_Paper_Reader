---
title: ICLR26 Computational Neuroanatomy of LLM-Brain Alignment
title_zh: ICLR26：大语言模型与大脑对齐的计算神经解剖学
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 将LLM中间计算与大脑活动对齐以学习脑对齐表征
tldr: 本研究首次对LLM的transformer块内部计算与大脑语言处理活动进行系统计算神经解剖学分析，发现常用隐藏状态并非最优，不同计算阶段映射至不同脑区，Rotary Positional Embedding显著增强听觉皮层对齐，并提出MindTransformer框架学习脑对齐表示，大幅提升脑活动预测性能。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-001.webp\", \"caption\": \"\", \"page\": 5, \"index\": 1, \"width\": 1920, \"height\": 1080}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-002.webp\", \"caption\": \"\", \"page\": 5, \"index\": 2, \"width\": 1110, \"height\": 2310}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-003.webp\", \"caption\": \"\", \"page\": 5, \"index\": 3, \"width\": 449, \"height\": 525}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-004.webp\", \"caption\": \"\", \"page\": 5, \"index\": 4, \"width\": 480, \"height\": 864}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-005.webp\", \"caption\": \"\", \"page\": 5, \"index\": 5, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-006.webp\", \"caption\": \"\", \"page\": 5, \"index\": 6, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-007.webp\", \"caption\": \"\", \"page\": 5, \"index\": 7, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-008.webp\", \"caption\": \"\", \"page\": 5, \"index\": 8, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-009.webp\", \"caption\": \"\", \"page\": 5, \"index\": 9, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-010.webp\", \"caption\": \"\", \"page\": 5, \"index\": 10, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-011.webp\", \"caption\": \"\", \"page\": 5, \"index\": 11, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-012.webp\", \"caption\": \"\", \"page\": 5, \"index\": 12, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-013.webp\", \"caption\": \"\", \"page\": 5, \"index\": 13, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-014.webp\", \"caption\": \"\", \"page\": 5, \"index\": 14, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-015.webp\", \"caption\": \"\", \"page\": 5, \"index\": 15, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-016.webp\", \"caption\": \"\", \"page\": 5, \"index\": 16, \"width\": 2110, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-017.webp\", \"caption\": \"\", \"page\": 5, \"index\": 17, \"width\": 2148, \"height\": 1907}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-018.webp\", \"caption\": \"\", \"page\": 5, \"index\": 18, \"width\": 1919, \"height\": 1440}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-019.webp\", \"caption\": \"\", \"page\": 5, \"index\": 19, \"width\": 1200, \"height\": 1500}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-020.webp\", \"caption\": \"\", \"page\": 6, \"index\": 20, \"width\": 6908, \"height\": 2093}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-021.webp\", \"caption\": \"\", \"page\": 7, \"index\": 21, \"width\": 16134, \"height\": 10188}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-022.webp\", \"caption\": \"\", \"page\": 7, \"index\": 22, \"width\": 4869, \"height\": 1989}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-023.webp\", \"caption\": \"\", \"page\": 7, \"index\": 23, \"width\": 4709, \"height\": 4183}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-024.webp\", \"caption\": \"\", \"page\": 7, \"index\": 24, \"width\": 4869, \"height\": 1989}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-025.webp\", \"caption\": \"\", \"page\": 7, \"index\": 25, \"width\": 6069, \"height\": 2469}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-026.webp\", \"caption\": \"\", \"page\": 7, \"index\": 26, \"width\": 6069, \"height\": 2469}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-027.webp\", \"caption\": \"\", \"page\": 7, \"index\": 27, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-028.webp\", \"caption\": \"\", \"page\": 7, \"index\": 28, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-029.webp\", \"caption\": \"\", \"page\": 7, \"index\": 29, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-030.webp\", \"caption\": \"\", \"page\": 7, \"index\": 30, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-031.webp\", \"caption\": \"\", \"page\": 7, \"index\": 31, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-032.webp\", \"caption\": \"\", \"page\": 7, \"index\": 32, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-033.webp\", \"caption\": \"\", \"page\": 7, \"index\": 33, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-034.webp\", \"caption\": \"\", \"page\": 7, \"index\": 34, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-035.webp\", \"caption\": \"\", \"page\": 7, \"index\": 35, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-036.webp\", \"caption\": \"\", \"page\": 7, \"index\": 36, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-037.webp\", \"caption\": \"\", \"page\": 7, \"index\": 37, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-038.webp\", \"caption\": \"\", \"page\": 7, \"index\": 38, \"width\": 2108, \"height\": 1848}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-039.webp\", \"caption\": \"\", \"page\": 10, \"index\": 39, \"width\": 4551, \"height\": 1126}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-040.webp\", \"caption\": \"\", \"page\": 10, \"index\": 40, \"width\": 4551, \"height\": 1126}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-041.webp\", \"caption\": \"\", \"page\": 10, \"index\": 41, \"width\": 4551, \"height\": 1126}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-042.webp\", \"caption\": \"\", \"page\": 15, \"index\": 42, \"width\": 1110, \"height\": 2310}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-043.webp\", \"caption\": \"\", \"page\": 15, \"index\": 43, \"width\": 1110, \"height\": 2310}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-044.webp\", \"caption\": \"\", \"page\": 17, \"index\": 44, \"width\": 711, \"height\": 2370}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-045.webp\", \"caption\": \"\", \"page\": 17, \"index\": 45, \"width\": 711, \"height\": 2370}, {\"url\": \"assets/figures/local-pdf/local-20260606-193304239144-iclr26-computational-neuroanatomy-of-llm-brain-alignment/fig-046.webp\", \"caption\": \"\", \"page\": 17, \"index\": 46, \"width\": 717, \"height\": 2370}]"
motivation: 深入理解LLM内部计算机制与大脑活动的对齐关系，以推动认知神经科学和人工智能的交叉发展。
method: 分析21个LLM的13种中间状态，评估其与脑体素的相关性，并提出MindTransformer特征选择框架。
result: "超过90%脑区由未探索的中间计算更好解释，块内阶段呈现皮层处理层次，RoPE使听觉皮层对齐提升至74%，MindTransformer增益超过456倍模型缩放。"
conclusion: 揭示了transformer块内的神经解剖层次，验证了RoPE的神经生物学基础，并提供了脑对齐表示学习新方法。
---

## 摘要
大语言模型（LLMs）与大脑活动之间的对齐为推进我们对认知神经科学和人工智能的理解提供了强有力的框架。在本工作中，我们聚焦于 LLM 的基本单元之一——Transformer 模块，首次对其内部运算及人类语言处理过程中的大脑活动进行了系统的计算神经解剖学分析。我们分析了涵盖五个模型家族的 21 个当前最优 LLM，从每个 Transformer 模块中提取并评估了 13 种不同的中间状态——从初始的层归一化到注意力机制，再到前馈网络（FFN）。我们的分析揭示了三个关键发现：（1）LLM 中常用的隐藏状态出人意料地次优，超过 90% 的感觉和语言脑区体素能被此前未探索的中间计算更好地解释；（2）单个 Transformer 模块内不同的计算阶段映射到解剖学上不同的大脑系统，揭示了模块内的层级结构：早期注意力状态与感觉皮层对齐，而稍后的 FFN 状态对应于联合皮层区域——这反映了皮层处理层级；（3）旋转位置嵌入（RoPE）特异性地增强了沿大脑听觉处理通路的对齐。使用 RoPE 的逐头查询最好地解释了 74% 的听觉皮层活动，而没有 RoPE 时仅为 8%，这为该 LLM 架构组件提供了首个神经生物学验证。基于这些洞见，我们提出了 MindTransformer，一个从所有中间状态学习与大脑对齐表征的特征选择框架。MindTransformer 取得了显著的大脑对齐性能，在初级听觉皮层的相关性提升超过了 456 倍模型缩放所带来的增益。我们的计算神经解剖学方法为通过 Transformer 计算理解生物智能以及通过大脑组织原则理解人工智能开辟了新方向。

## Abstract
The alignment of Large Language Models (LLMs) and brain activity provides a powerful framework to advance our understanding of cognitive neuroscience and artificial intelligence. In this work, we zoom into one of the fundamental units of LLMs—the transformer block—to provide the first systematic computational neuroanatomy of its internal operations and human brain acitivity during language processing. Analyzing 21 state-of-the-art LLMs across five model families, we ex- tract and evaluate 13 distinct intermediate states per transformer block—from ini- tial layer normalization through attention mechanisms to feed-forward networks (FFNs). Our analysis reveals three key findings: (1) The commonly used hid- den states in LLMs are surprisingly suboptimal, with over 90% of brain voxels in sensory and language regions better explained by previously unexplored interme- diate computations; (2) Different computational stages within a single transformer block map to anatomically distinct brain systems, revealing an intra-block hierar- chy where early attention states align with sensory cortices while later FFN states correspond to association areas—mirroring the cortical processing hierarchy; (3) Rotary Positional Embeddings (RoPE) specifically enhance alignment along the brain’s auditory processing streams. Per-head queries with RoPE best explain 74% of auditory cortex activity compared to 8% without RoPE, providing the first neurobiological validation of this architectural component in LLMs. Build- ing on these insights, we propose MindTransformer1, a feature selection frame- work that learns brain-aligned representations from all intermediate states. Mind- Transformer achieves significant brain alignment performance, with correlation improvements in primary auditory cortex exceeding gains from 456× model scal- ing. Our computational neuroanatomy approach opens new directions for under- standing both biological intelligence through the lens of transformer computations and artificial intelligence through principles of brain organization.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本研究与读者的“brain encoding”、“representation alignment”、“fMRI representation”方向高度相关，直接探索了LLM内部表征与大脑fMRI信号的精细对齐。
- **启发与意义**：揭示了常用的LLM隐藏状态并非最优脑对齐表征，这一发现颠覆了传统做法，为“brain encoding”研究提供了新的表征选择和理论依据。
- **可借鉴点**：其提出的MindTransformer框架，即从模型所有中间状态中学习脑对齐特征的思想，可被直接借鉴用于改进fMRI编码模型的输入特征构建。
- **阅读建议**：建议重点关注其方法论中“计算神经解剖学”的分析范式，以及RoPE与听觉通路对齐的发现，这可能为构建更生物可信的“neural prior”提供新思路。

## 1. 论文核心问题与整体含义
- **核心问题**：当前LLM与大脑活动的对齐研究普遍将Transformer架构视为“黑箱”，仅使用每层的单一隐藏状态（hidden state）进行评估，这种做法是否忽略了模型内部大量具有神经生物学意义的计算过程？
- **研究动机**：现有共识认为LLM与大脑的对齐主要收敛于高级语义处理区域，而低级感觉区域（如听觉皮层）仍无法被文本模型有效解释。研究者怀疑这种局限源于表征选择的随意性，而非LLM本质缺陷。
- **整体含义**：通过系统地“解剖”Transformer块内部计算，揭示其与不同脑区的对应关系，从而建立一座连接人工智能架构设计和生物大脑组织原则的桥梁。

## 2. 方法论
- **核心思想**：提出“计算神经解剖学”框架，不再将LLM的每个层（Layer）视为一个整体，而是拆解其内部的**Transformer块**，提取多个**中间状态**，并逐个评估它们与大脑fMRI体素活动的线性编码关系。
- **关键技术细节**：
    1.  **状态提取**：对每个Transformer块，定义了**13种不同的中间状态**，涵盖三大计算阶段：
        *   **块输入**：输入隐藏状态、预注意力归一化状态。
        *   **注意力机制**：逐头查询（Q）、键（K）、值（V），以及带/不带旋转位置嵌入（RoPE）的Q和K，逐头上下文向量，合并后的注意力输出。
        *   **前馈网络与残差**：注意力后隐藏状态、预FFN归一化状态、FFN激活状态、FFN输出。
    2.  **体素编码模型（Voxel-wise Encoding Model）**：
        *   **预处理**：将LLM的token级激活对齐到词汇级，并用标准血液动力学响应函数（HRF，Glover 1999）进行卷积。
        *   **预测模型**：采用L2正则化线性回归（Ridge Regression），以LLM特征为输入，预测每个大脑体素的fMRI信号。正则化参数 $\alpha$ 通过嵌套交叉验证优化。
        *   **评估**：采用9折交叉验证，计算测试集上预测与实际fMRI信号的皮尔逊相关系数。
    3.  **MindTransformer框架**：基于上述分析，提出一个特征选择框架，分为两种模式：
        *   **模式1（最优单状态选择）**：对每个体素，从13个中间状态中选出预测相关性最高的那个。
        *   **模式2（多状态特征整合）**：拼接所有中间状态，先通过Ridge回归学习权重 $\beta$，然后选取权重绝对值最大的top-k（$k=D_{model}$）特征，重新训练一个精炼的编码模型。

## 3. 实验设计
- **数据集**：使用公开的《小王子》fMRI多语种语料库的英文子集，包含49名母语为英语的参与者在听取约100分钟自然故事时的脑部活动数据。
- **分析目标（Benchmark）**：目标是最大化对特定脑区（如听觉皮层、语言网络）fMRI体素活动的预测相关性（皮尔逊r）。
- **对比方法**：
    - **标准基线**：仅使用每一层的输入隐藏状态。
    - **上下文向量基线**：使用每层的逐头上下文向量（Kumar et al., 2024）。
    - **最优状态（MindTransformer 模式1）**：每个体素单独选择最佳中间状态。
    - **多状态整合（MindTransformer 模式2）**：整合并选择最佳中间状态特征。
    - **基线调整**：对比随机词嵌入和GloVe嵌入的预测性能，以分离LLM独特上下文处理能力的贡献。
- **模型覆盖**：分析了来自Llama、Qwen、Mistral、GPT、Gemma五个家族的21个先进LLM，参数规模从270M到123B不等。

## 4. 资源与算力
- 论文未明确提及实验所使用的具体GPU型号、数量及总训练时长。

## 5. 实验数量与充分性
- **实验数量**：研究进行了大量的实验，包括但不限于：
    - 21个LLM的激活提取与13个状态的独立评估。
    - 全脑、听觉皮层、语言网络三个层面的获胜率分析。
    - 逐个模型的家族内分析和跨模型家族的综合分析。
    - 576倍（270M到123B）模型缩放的性能曲线对比。
    - 对5名受试者的个体分析，验证群体平均结果的稳健性。
    - 随机嵌入和GloVe嵌入的双重基线调整。
    - 对高维FFN状态（8192维）进行降至2048维的维度控制鲁棒性分析。
- **充分性与公平性**：实验设计非常充分且系统。对比了既定的强基线方法，覆盖了多个主流模型家族，并执行了严格的交叉验证和鲁棒性检查，保证了结论的客观性和公平性。

## 6. 主要结论与发现
1.  **常用隐藏状态是次优的**：传统方法使用的输入隐藏状态和上下文向量，最好的情况下也仅能解释16.65%全脑体素的活动。超过90%的感觉和语言脑区体素能被此前未探索的中间计算更好地解释。
2.  **Transformer块内存在与皮层平行的处理层级**：单个Transformer块内部的计算阶段与大脑解剖结构之间存在精细的层级映射。早期注意力相关状态（如带RoPE的查询）倾向于对齐低级感觉皮层（如颞上回），而稍后的前馈网络（FFN）状态则对应于高级联合皮层（如额下回和角回），这模拟了大脑自身的皮层处理层级。
3.  **旋转位置编码（RoPE）具有神经生物学意义**：研究发现，带RoPE的逐头查询是解释听觉皮层活动的最优状态，它能解释高达73.88%的听觉皮层体素，而没有RoPE时仅为7.82%。该效应精准地沿着大脑的腹侧和背侧听觉处理通路分布，首次为RoPE这一架构设计提供了神经生物学验证。
4.  **MindTransformer框架增益显著**：通过智能选择和整合中间状态，MindTransformer在初级听觉皮层的相关性提升高达31.0%，这一增益超过了将模型参数扩大456倍（从270M到123B）所带来的提升。

## 7. 优点
- **视角新颖**：首次系统性地将“计算神经解剖学”引入LLM与大脑对齐领域，从“使用什么表征”转变为“哪个内部计算对应对齐哪个脑区”。
- **分析系统且细致**：将Transformer块分解为13个精确的计算状态，并在多个模型家族和脑区上进行了系统评估，揭示了此前被“黑箱化”的丰富信息。
- **发现具有突破性**：颠覆了LLM不能对齐大脑早期感觉皮层的普遍认知，并首次为RoPE这一重要架构组件提供了直接的神经生物学证据。
- **框架实用性强**：提出的MindTransformer框架不仅能提升预测性能，其基于权重的特征选择过程还增强了解释性。

## 8. 不足与局限
- **依赖线性编码模型**：研究主要基于线性编码模型（Ridge回归）寻找相关性，这可能无法完全捕捉LLM与大脑之间可能存在的复杂非线性关系。
- **数据集单一**：仅在《小王子》英文fMRI数据集上进行了验证，该数据集是故事聆听范式，结论能否推广到更广泛、更多样化的语言任务和刺激类型尚待验证。
- **模态局限**：当前分析仅限文本LLM和fMRI数据的对齐，其“计算神经解剖学”方法在视觉或多模态模型上的适用性仍需未来工作探索。
- **因果推断缺失**：研究建立的是相关性而非因果关系，无法直接断定LLM的计算是模拟了大脑机制，还是一种收敛性的统计关联。

## 9. 研究价值与阅读建议
- **关联方向**：本研究与读者的“brain encoding”、“representation alignment”、“fMRI representation”方向高度相关，直接探索了LLM内部表征与大脑fMRI信号的精细对齐。
- **启发与意义**：揭示了常用的LLM隐藏状态并非最优脑对齐表征，这一发现颠覆了传统做法，为“brain encoding”研究提供了新的表征选择和理论依据。
- **可借鉴点**：其提出的MindTransformer框架，即从模型所有中间状态中学习脑对齐特征的思想，可被直接借鉴用于改进fMRI编码模型的输入特征构建。
- **阅读建议**：建议重点关注其方法论中“计算神经解剖学”的分析范式，以及RoPE与听觉通路对齐的发现，这可能为构建更生物可信的“neural prior”提供新思路。

（完）
