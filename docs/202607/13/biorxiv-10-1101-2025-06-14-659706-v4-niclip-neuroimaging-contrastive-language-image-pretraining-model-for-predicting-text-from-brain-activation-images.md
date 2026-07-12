---
title: "NiCLIP: Neuroimaging contrastive language-image pretraining model for predicting text from brain activation images"
title_zh: NiCLIP：用于从脑激活图像预测文本的神经影像对比语言-图像预训练模型
authors: "Peraza, J. A., Kent, J. D., Nichols, T. E., Poline, J.-B., de la Vega, A., Laird, A. R."
date: 2026-07-11
pdf: "https://www.biorxiv.org/content/10.1101/2025.06.14.659706v4.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: NiCLIP采用CLIP对比学习从fMRI脑激活预测文本
tldr: 现有功能解码方法难以利用文本语义，本文提出NiCLIP模型，基于对比语言-图像预训练，结合数万篇神经科学文章，实现从脑激活图预测认知任务。模型在组级激活图上准确识别情绪、语言等任务，精准定位杏仁核等脑区功能，但个体数据泛化受限，为神经影像功能解码和假设生成提供了新工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-14-659706-v4/fig-005.webp\", \"caption\": \"Figure 1. Overview of the framework for training the text-to-brain model and decoding brain activation maps. (A) The textto-brain CLIP model was trained using text and brain activation coordinates sourced from a collection of fMRI articles downloaded from PubMed Central. Pubget was employed to download and preprocess the articles in a standardized format. Text embeddings were determined using a pre-trained LLM. Image embeddings were obtained by first calculating an MKDAmodeled activation brain map, and second applying a continuous brain parcellation defined by the DiFuMo 512 atlas. (B) The brain decoding model relies on a cognitive ontology to predict text from input brain activation. The embeddings of task names\", \"page\": 5, \"index\": 5, \"width\": 1054, \"height\": 1054}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-14-659706-v4/fig-001.webp\", \"caption\": \"Table 1. Text-to-brain association performance of CLIP models across LLMs and article sections. The CLIP backbone was evaluated using text embeddings derived from either the full article body or the abstract, and from\", \"page\": 6, \"index\": 1, \"width\": 1054, \"height\": 506}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-14-659706-v4/fig-002.webp\", \"caption\": \"Figure 2. NiCLIP predicts tasks, concepts, and domains from brain activation patterns based on group-level maps. This analysis provides prediction probabilities across seven major cognitive domains from the Human Connectome Project (HCP) task fMRI dataset. For each domain (Emotion, Gambling, Language, Motor, Relational, Social, and Working Memory), we\", \"page\": 11, \"index\": 2, \"width\": 994, \"height\": 1137}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-14-659706-v4/fig-003.webp\", \"caption\": \"Figure 3. NiCLIP predicts tasks, concepts, and domains from brain ROIs. We conducted a comprehensive analysis of prediction probabilities across six different ROIs. For each ROI (amygdala, hippocampus, insula, striatum, rTPJ, vmPFC), we display three types of predictions: the probability of a task given an activation pattern (P(T|A)), the probability of a concept given an activation (P(C|A)), and the probability of a domain given an activation (P(D|A)). Each prediction is visualized with horizontal bars indicating prediction strength, with the top five predictions shown for each category. Task labels correspond\", \"page\": 13, \"index\": 3, \"width\": 994, \"height\": 1068}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-14-659706-v4/fig-004.webp\", \"caption\": \"Figure 4. CLIP and NiCLIP model architecture. (A) The architecture of the CLIP model includes a text encoder and an image encoder that transform input embeddings into a shared latent space. The text encoder consists of a projection block and two residual blocks, while the image encoder has three residual blocks. The projection block is defined by a linear projection layer, followed by a GELU activation function, a linear layer, a dropout layer, and culminating in a normalization layer. The residual block is made up of a linear identity layer, followed by a GELU activation and a dropout layer, concluding with a normalization layer. The output from the shared latent space is utilized for downstream tasks (e.g., functional decoding), and InfoNCE loss is applied in the latent space for self-supervised learning during training. (B) NiCLIP takes advantage of the task name embedding and the extracted features from a target activation map. These embeddings are encoded with the pre-trained CLIP text and image encoders. Cosine similarity is assessed in the shared latent space, and a softmax function converts them to a likelihood P(A|T). Using the prior probability P(T), we compute the posterior probability of a task given an activation\", \"page\": 27, \"index\": 4, \"width\": 1054, \"height\": 914}]"
motivation: 传统神经影像功能解码方法未能充分捕捉文本语义上下文，导致认知行为关联的定量估计受限。
method: "利用超过23,000篇神经科学全文文章和认知本体，训练一个对比语言-图像预训练模型，实现文本与脑激活模式的对齐。"
result: NiCLIP在组级激活图上能准确预测多种认知任务，并精确刻画特定脑区的功能角色，但在受噪声影响的个体激活图上表现不足。
conclusion: NiCLIP代表了神经影像定量功能解码的重要进展，为研究者提供假设生成和科学发现的得力工具。
---

## 摘要
从脑激活图谱预测认知过程多年来一直是神经科学界的开放问题。元分析功能解码方法旨在通过提供与特定脑区相关的行为特征的定量估计来解决这一问题。现有方法在神经影像元分析中面临固有挑战，特别是在整合出版物中的文本信息方面，因为它们依赖于无法捕捉文本语义上下文的有限指标。大型语言模型与先进的深度对比学习模型（例如CLIP）相结合，用于对齐文本与图像，已彻底改变了神经影像元分析，可能为功能解码挑战提供解决方案。在这项工作中，我们提出了NiCLIP，这是一种对比语言-图像预训练模型，可从脑激活模式预测认知任务、概念和领域。我们利用超过23,000篇神经科学文章来训练用于文本-脑关联的CLIP模型。对NiCLIP预测的评估表明，使用全文而非摘要，以及采用具有精确任务-概念-领域映射的精选认知本体时，性能达到最优。此外，领域特定的微调大型语言模型（例如BrainGPT模型）显示出与其基础大型语言模型在数值上相似的性能。我们的结果表明，NiCLIP能够从人类连接组计划提供的组级激活图谱中准确预测多个领域的认知任务（例如情绪、语言、运动），并精确表征特定脑区（包括杏仁核、海马和颞顶联合区）的功能角色。然而，NiCLIP在处理噪声较大的个体级激活图谱时显示出局限性。NiCLIP代表了神经影像定量功能解码的重大进步，为研究人员提供了一个用于假设生成和科学发现的强大工具。

## Abstract
Predicting cognitive processes from brain activation maps has remained an open question within the neuroscience community for many years. Meta-analytic functional decoding methods aim to tackle this issue by providing a quantitative estimation of behavioral profiles associated with specific brain regions. Existing methods face intrinsic challenges in neuroimaging meta-analysis, particularly in consolidating textual information from publications, as they rely on limited metrics that do not capture the semantic context of the text. The combination of large language models (LLMs) with advanced deep contrastive learning models (e.g., CLIP) for aligning text with images has revolutionized neuroimaging meta-analysis, potentially offering solutions to functional decoding challenges. In this work, we present NiCLIP, a contrastive language-image pretrained model that predicts cognitive tasks, concepts, and domains from brain activation patterns. We leveraged over 23,000 neuroscientific articles to train a CLIP model for text-to-brain association. Evaluation of NiCLIP predictions revealed that performance is optimized when using full-text articles instead of abstracts, as well as a curated cognitive ontology with precise task-concept-domain mappings. Furthermore, domain-specific fine-tuned LLMs (e.g., BrainGPT models) show numerically similar performance to their base LLM counterparts. Our results indicated that NiCLIP accurately predicts cognitive tasks from group-level activation maps provided by the Human Connectome Project across multiple domains (e.g., emotion, language, motor) and precisely characterizes the functional roles of specific brain regions, including the amygdala, hippocampus, and temporoparietal junction. However, NiCLIP showed limitations with noisy subject-level activation maps. NiCLIP represents a significant advancement in quantitative functional decoding for neuroimaging, offering researchers a powerful tool for hypothesis generation and scientific discovery.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与你的“brain decoding, fMRI representation, representation alignment, neural prior”研究方向高度相关，直接涉及从fMRI脑激活模式到认知文本的解码及表示对齐。
- **启发与意义**：NiCLIP框架展示了如何迁移多模态（视觉-语言）预训练范式解决神经科学问题，其将脑图与自然语言对齐的思路，为构建更通用的神经先验与解码器提供了新可能。
- **可借鉴点**：基于认知本体的多层级（任务-概念-领域）解码结构、利用大语言模型文本嵌入替代传统TF-IDF、以及对比学习目标（InfoNCE）用于脑-文本对齐，均可直接适配到你的表示学习与解码任务中。
- **阅读建议**：重点精读“方法论”中CLIP对齐流程与NiCLIP的本体引导解码公式，以及“实验”部分的多维度测评设计（组级、ROI、个体级），以评估该范式迁移至你数据的可行性与潜在性能瓶颈。

# NiCLIP 论文结构化深入分析

## 1. 核心问题与整体含义

### 研究动机与背景
- **核心问题**：解决神经科学领域的“逆向推理”问题，即如何从观测到的大脑激活模式推断其对应的认知过程、任务或概念。
- **现有方法局限**：
  - 传统元分析功能解码方法（如Neurosynth相关解码器、GC-LDA）依赖于TF-IDF等“词袋”模型处理文本，无法捕捉词语间的语义关系和上下文。
  - 方法常局限于固定词汇表，无法利用短语、定义等更丰富的语义信息，且非为精确预测而优化。
  - 现有的基于图像的解码方法虽更精确，但受限于公开可用的全脑统计图数量稀少，覆盖面窄。
- **整体含义**：本研究提出了NiCLIP模型，将来自自然语言处理领域的对比语言-图像预训练（CLIP）范式引入神经影像领域，旨在通过学习一个共享的脑-文本语义潜空间，实现从脑激活图到结构化认知文本（任务、概念、领域）的精准、可扩展的反向推理。

（本部分对应原文：1. Introduction）

## 2. 方法论

### 核心思想
- **两阶段框架**：先通过对比学习训练一个脑激活图（图像）与神经科学文献（文本）的对齐模型（CLIP），再基于一个认知本体学，利用该对齐模型进行概率解码。
- **用语义丰富的LLM嵌入替代TF-IDF**：利用预训练大语言模型将文章文本和认知本体中的任务名称/定义编码为稠密、上下文感知的嵌入向量，克服了传统词袋模型的稀疏性和语义缺失问题。

### 关键技术细节
#### 第一阶段：训练文本-脑对齐CLIP模型
- **输入数据对**：
  - **图像**：从PubMed Central文献中提取的脑激活坐标。
  - **文本**：对应文献的全文或摘要。
- **图像处理**：
  1. 使用多核密度分析将激活坐标生成建模的激活图，使用半径为10mm的球形核。
  2. 使用 DiFuMo 512 区连续脑分区图谱将脑图降维为 512 维特征向量 $\text{Emb}(A)$。
  3. 特征向量经L2归一化。
- **文本处理**：
  1. 使用预训练LLM（如 BrainGPT, Mistral 等）将文章文本编码为高维嵌入向量。
  2. 由于LLM的上下文窗口限制，长文本被分成块，分别编码，最终文章级嵌入由各块嵌入的平均值得出。
  3. 经L2归一化，得到文本嵌入 $\text{Emb}(T)$。
- **CLIP模型架构**：
  - **文本编码器**：包含一个投影块和两个残差块，将高维LLM文本嵌入映射至共享维度的潜空间。
  - **图像编码器**：包含三个残差块，处理 512 维脑嵌入并映射至同一共享潜空间。
  - **训练目标**：InfoNCE 对比损失函数，最大化配对的图像-文本嵌入的余弦相似度，同时最小化非配对样本的相似度。
- **训练配置**：批大小 128，学习率 5e-4，权重衰减 0.1，训练 50 个 epoch，使用提前停止。

#### 第二阶段：NiCLIP 本体的功能解码
- **输入**：目标脑激活图（经MKDA和DiFuMo图谱处理得到嵌入 $\text{Emb}(A_i)$），以及一个认知本体。
- **本体嵌入**：认知本体（Cognitive Atlas）中的每个任务 $T_j$ 由其名称 $\text{Emb}(T_{j, name})$ 和定义 $\text{Emb}(T_{j, definition})$ 的加权和表示，$\text{Emb}(T_j) = 0.5 \cdot \text{Emb}(T_{j, name}) + 0.5 \cdot \text{Emb}(T_{j, definition})$。
- **概率解码流程**：
  1. **似然估计**：将目标脑图嵌入和所有本体任务嵌入，分别通过预训练好的CLIP图像、文本编码器，映射至共享潜空间。计算它们之间的余弦相似度，经 softmax 归一化后作为似然 $P(A_i|T)$。
  $$P(A_i|T) = \text{softmax}(\text{Emb}(T) \cdot \text{Emb}(A_i))$$
  2. **任务后验概率计算**：结合基于任务在训练文献中出现频率的先验概率 $P(T_j)$，使用贝叶斯定理计算后验概率 $P(T_j|A_i)$。
  $$P(T_j|A_i) = \frac{P(A_i|T_j)P(T_j)}{\sum_k P(A_i|T_k)P(T_k)}$$
  3. **概念与领域概率计算**：利用认知本体中“任务-概念”和“概念-领域”的映射关系，通过“噪声或”模型，从任务的后验概率向上聚合，得到概念 $P(C_j|A_i)$ 和领域 $P(D_j|A_i)$ 的概率。
  $$P(C_j|A_i) = 1 - \prod_{k} (1 - P(T_k^{(j)}|A_i))$$
  其中 $T_k^{(j)}$ 是指向概念 $C_j$ 的任务。领域概率同理。

（本部分对应原文：2.1; 5.2; 5.3 及 Figure 1, 4）

## 3. 实验设计

### 数据集
- **CLIP训练集**：23,865 篇来自PubMed Central的神经影像全文文章及其报道的脑激活坐标。
- **解码评估集（组级）**：人类连接组计划的组级任务态 fMRI 图谱，覆盖 7 个认知领域：情绪、赌博、语言、运动、关系、社会和 工作记忆。
- **解码评估集（个体级）**：来自 787 名HCP受试者的相同 7 个任务态的个体级激活图谱。
- **解码评估集（ROI级）**：6个基于元分析定义的脑区：杏仁核、海马、脑岛、纹状体、右侧颞顶联合区、腹内侧前额叶皮层。
- **认知本体**：Cognitive Atlas，并对比了完整版和一个经过整理的精简版。

### 基准与对比方法
- **对比基线模型**：Neurosynth 相关解码器 和 广义对应LDA（GC-LDA）。
- **消融研究对比项**：
  - **LLM类型**：BrainGPT-7B-v0.1/v0.2，Mistral-7B-v0.1，Llama-2-7b-chat-hf。
  - **文章部分**：仅摘要 vs. 全文。
  - **本体版本**：完整Cognitive Atlas vs. 精简版Cognitive Atlas。
  - **任务嵌入方式**：仅任务名 vs. 任务名 + 定义。
- **评估指标**：
  - **文本-脑对齐**：Recall@10, Recall@100, Mix&Match。
  - **功能解码精度**：Recall@K (任务/概念用K=4，领域用K=2)。

（本部分对应原文：2.2, 2.3, 2.4, 5.1, 5.4）

## 4. 资源与算力
- **算力说明**：论文致谢部分提及使用了佛罗里达国际大学的教学与研究计算中心提供的HPC和计算资源。文中**未明确**说明所使用的具体GPU型号、数量及完整训练时长，但提及使用了神经网络训练，并在约21,865个样本上执行了23折交叉验证。

（本部分对应原文：Acknowledgments; 5.2）

## 5. 实验数量与充分性
- **实验数量**：本研究进行了多组且系统的实验。
  1.  **文本-脑对齐评估**：在23折交叉验证上，对4（LLM）x 2（文章部分） = 8 种配置进行了比较。
  2.  **功能解码消融实验**：综合比较了不同LLM、文章部分、本体和任务嵌入方式的组合，并与2个基线模型对比，测评了任务、概念、领域三级预测性能。
  3.  **多维度解码能力验证**：在组级激活图（7个任务）、ROI级图（6个区域）和个体级激活图（787名被试，7个任务）上进行了质性或量化评估。
- **充分性与公平性**：
  - **充分性**：实验设计全面，不仅评估了最终解码效果，还评估了中间对齐步骤，并在多个数据维度上进行了测试，消融研究较为详尽。
  - **公平性**：对比了领域内常用基线模型，并在相同数据集上进行评估。报告了指标的均值和标准差，体现了性能的稳定性。

（本部分对应原文：2. Results）

## 6. 主要结论与发现
- **全文与精选本体的重要性**：使用全文训练和使用精确映射的精简版Cognitive Atlas，能显著提升文本-脑对齐和功能解码的性能。
- **领域特定LLM优势有限**：BrainGPT等经神经科学文本微调的LLM，相较于其基础LLM（如Mistral），在本文框架下性能提升不显著。
- **NiCLIP解码性能卓越**：最佳配置的NiCLIP在组级HCP激活图上表现出色，能够准确预测对应的认知任务、概念和领域。在任务级Recall@4上达到62.86%，远超传统基线方法（Neurosynth和GC-LDA最高仅20.71%）。
- **对ROI功能刻画精准**：NiCLIP成功为6个不同ROI预测了高度特异的、与已知文献一致的功能特征（如杏仁核与情绪、rTPJ与社会认知）。
- **个体级解码存在局限**：模型对高噪声的个体级激活图解码效果不佳，任务级Recall@4平均值仅为38.19%，存在较大的个体间差异。

（本部分对应原文：2, 3, 4. Conclusions）

## 7. 优点（方法或实验设计亮点）
- **创新的范式迁移**：成功将多模态领域的CLIP架构与认知本体学结合，构建了“脑-文本-认知结构”的映射框架，是逆向推理问题的一种前沿解决方案。
- **语义丰富表示**：利用LLM嵌入替代传统TF-IDF，能够处理全文长文本、任务定义等复杂语义信息，克服了传统方法的重要瓶颈。
- **结构化解码输出**：不限于预测单一任务标签，而是沿着本体学链路输出“任务 -> 概念 -> 领域”的多层级认知解释，提供了更丰富的上下文。
- **全面且分层的验证体系**：从内部对齐质量到外部解码能力，从组级、ROI级到个体级数据，进行了多维度、系统性的验证，揭示了模型的强大能力与应用边界。
- **优秀的预测能力与泛化性**：在组级图和ROI图上表现出高特异性，并能预测出传统方法因数据稀疏而无法关联的任务（如n-back）。

（本部分对应原文：3.1, 3.3）

## 8. 不足与局限
- **训练数据量小**：与典型CLIP模型（数亿图文对）相比，仅用 2 万多篇文章训练，限制了模型学习更稳健脑-文本关联的潜力。
- **个体级解码能力弱**：模型在处理信噪比低、个体差异大的个体级激活图时性能急剧下降，限制了其在临床或个体差异研究中的直接应用。
- **文本使用的错配与简化**：
  - 训练时用长文本，解码时用短本体条目，存在分布偏移。
  - 长文本被分块取平均，丢失了文本内部的顺序、修辞和细粒度依赖关系。
- **本体依赖性强**：解码的精细度和准确性严重受限于所使用的认知本体，当前Cognitive Atlas仍存在定义不标准、映射不完整或存在主观偏差等问题。
- **概率解释需谨慎**：模型输出的概率是相对相似度得分，而非严格校准的统计概率。
- **空间信息有限**：基于坐标的CBMA方法丢失了全脑统计图中的效应量、方差等丰富空间信息，这可能是个体级解码性能受限的一个结构性原因。

（本部分对应原文：3.4）

## 9. 研究价值与阅读建议（重复首节内容以保证结构完整性）
- **关联方向**：本文与你的“brain decoding, fMRI representation, representation alignment, neural prior”研究方向高度相关，直接涉及从fMRI脑激活模式到认知文本的解码及表示对齐。
- **启发与意义**：NiCLIP框架展示了如何迁移多模态（视觉-语言）预训练范式解决神经科学问题，其将脑图与自然语言对齐的思路，为构建更通用的神经先验与解码器提供了新可能。
- **可借鉴点**：基于认知本体的多层级（任务-概念-领域）解码结构、利用大语言模型文本嵌入替代传统TF-IDF、以及对比学习目标（InfoNCE）用于脑-文本对齐，均可直接适配到你的表示学习与解码任务中。
- **阅读建议**：重点精读“方法论”中CLIP对齐流程与NiCLIP的本体引导解码公式，以及“实验”部分的多维度测评设计（组级、ROI、个体级），以评估该范式迁移至你数据的可行性与潜在性能瓶颈。

（完）
