---
title: AAAI26 Do Large Language Models Think like the Brain_ Investigating LLM-Brain Alignment with Hierarchical Neural Representations
title_zh: AAAI26 大型语言模型是否像大脑一样思考？从层级神经表征探究语言模型与大脑的对齐
authors: "Yu Lei, Xingyang Ge, Yi Zhang, Yiming Yang, Bolei Ma"
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-183059311452-aaai26-do-large-language-models-think-like-the-brain_-investigating.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 10.0 订阅评分
score_label: 订阅评分
evidence: 研究大语言模型分层表征与句子理解时大脑fMRI数据的对齐
tldr: 本研究通过比较14个大型语言模型的层次表示与人脑fMRI数据，探究两者在句子理解中的计算一致性。结果发现，模型性能提高使其表示结构更接近大脑的语义层次，尤其在高层抽象区域，展现功能与解剖对应，说明LLM可模拟人脑语言处理。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-183059311452-aaai26-do-large-language-models-think-like-the-brain_-investigating/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 574, \"height\": 431}, {\"url\": \"assets/figures/local-pdf/local-20260606-183059311452-aaai26-do-large-language-models-think-like-the-brain_-investigating/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 789, \"height\": 313}, {\"url\": \"assets/figures/local-pdf/local-20260606-183059311452-aaai26-do-large-language-models-think-like-the-brain_-investigating/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 547, \"height\": 387}, {\"url\": \"assets/figures/local-pdf/local-20260606-183059311452-aaai26-do-large-language-models-think-like-the-brain_-investigating/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 623, \"height\": 463}, {\"url\": \"assets/figures/local-pdf/local-20260606-183059311452-aaai26-do-large-language-models-think-like-the-brain_-investigating/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 1196, \"height\": 201}]"
motivation: 探究LLMs类脑模式的来源：是规模扩大还是真正与大脑语言处理架构对齐。
method: 分析14个LLMs的逐层嵌入与人类fMRI数据，构建预测模型，定位与脑区最相关的层。
result: 模型性能提升导致表示结构向类脑层次演变，特别是高级语义层与大脑区域的对应增强。
conclusion: LLMs的表示层次与大脑语言处理存在结构性对齐，可充当人类语言处理的模型。
---

## 摘要
理解大型语言模型（LLM）与人脑是否遵循相似的计算原理，仍然是认知神经科学和人工智能领域一个根本且重要的问题。LLM中观察到的大脑类似模式是源于简单的规模扩展，还是反映了它们与人类语言处理架构之间更深层的对齐？本研究关注语言模型的句子级神经机制，系统性地探究了LLM的逐层表征如何与人类句子理解过程中的动态神经反应相对齐。通过将14个公开可用的LLM的层级嵌入与参与者聆听自然叙事故事时采集的功能磁共振成像（fMRI）数据进行比较，我们构建了句子级神经预测模型，以识别与大脑脑区激活显著相关的模型层。结果表明，模型性能的提升驱动了表征架构向类脑层级演化，尤其在更高的语义抽象层面实现了更强的功能和解剖对应。这些发现推动了我们对于LLM与人脑之间计算相似性的理解，凸显了LLM作为人类语言处理模型的潜力。代码 — https://github.com/Lucasuuu02/LLM4Brain

## Abstract
Understanding whether large language models (LLMs) and the human brain converge on similar computational principles remains a fundamental and important question in cognitive neuroscience and AI. Do the brain-like patterns observed in LLMs emerge simply from scaling, or do they reflect deeper alignment with the architecture of human language process- ing? This study focuses on the sentence-level neural mecha- nisms of language models, systematically investigating how layer-wise representations in LLMs align with the dynamic neural responses during human sentence comprehension. By comparing hierarchical embeddings from 14 publicly avail- able LLMs with fMRI data collected from participants, who were exposed to a naturalistic narrative story, we constructed sentence-level neural prediction models to identify the model layers most significantly correlated with brain region activa- tions. Results show that improvements in model performance drive the evolution of representational architectures toward brain-like hierarchies, particularly achieving stronger func- tional and anatomical correspondence at higher semantic ab- straction levels. These findings advance our understanding of the computational parallels between LLMs and the human brain, highlighting the potential of LLMs as models for hu- man language processing. Code — https://github.com/Lucasuuu02/LLM4Brain

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文直接触及“brain decoding”“representation alignment”与“fMRI representation”等方向，通过构建从LLM层级表征到BOLD信号的线性编码模型，系统性验证了模型表征与大脑语言区响应的对齐模式。
- **启发与意义**：研究表明“更强的语义理解能力（而非单纯模型规模）”是驱动脑-模型对齐的关键因素，为“neural prior”和“brain encoding”研究提供了新的评估维度与优化目标。
- **可借鉴点**：可借鉴其“多模型、逐层、多脑区”的编码对比框架，以及利用指令跟随模型与基础模型进行配对比较来分离“能力-对齐”因果关系的实验设计。
- **阅读建议**：建议重点阅读方法论中的GLM与岭回归预测流、中间层对齐与左右半球不对称性分析部分；弱相关读者可仅关注其将“语义能力指标（CSAA）”作为模型分类依据的思路。

## 1. 论文的核心问题与整体含义
- **核心问题**：大型语言模型（LLMs）所表现出的类脑表征模式，究竟是单纯由扩大模型规模（scaling）带来的，还是反映了它们与人类大脑语言处理架构之间更深层的计算原则对齐？
- **研究动机与背景**：
  - 已有研究证实LLM学习到的表征与语言处理时的神经响应之间存在关联，但这些观察缺乏对关键驱动因素的机制性解释。
  - 学界存在一种潜在的认识偏差，即倾向于用模型规模解释脑-模型相似性。本文旨在挑战这一观点，转向探讨模型语义理解能力的作用。
- **整体目标**：通过系统性地比较14个LLM的逐层嵌入与人类进行自然句子理解时的fMRI数据，识别出最能驱动脑-模型对齐的因素（性能 vs. 规模），并揭示对齐背后的层级和半球特异性模式。

## 2. 论文提出的方法论
- **核心思想**：构建一个多阶段的“计算-神经对齐”分析流，将LLM的层级句子表征作为预测特征，通过线性回归模型拟合其与大脑各脑区逐体素神经响应的关系，并以预测准确性作为对齐程度的度量。
- **关键技术细节与流程**：
  1.  **神经数据预处理与建模**：从叙事故事聆听fMRI数据中，采用**一般线性模型（GLM）**估计每个句子引发的体素级BOLD响应（$\hat{\beta} = (X^\top X)^{-1}X^\top Y$），并提取特定语言功能脑区的响应信号。
  2.  **LLM层级句子嵌入提取**：将相同的叙事文本分词后输入14个LLM，提取每一层（$l$）对于每个句子的隐藏状态表征，获得组织为“层（$L$）×嵌入维度（$D$）”的张量表示 $X$。
  3.  **脑-模型对齐量化**：使用**岭回归**为每一层、每一脑区、每一被试训练编码模型，以LLM嵌入预测fMRI响应 ($y$)。通过嵌套交叉验证优化正则化系数 $\alpha$ 并计算平均皮尔逊相关系数 ($\rho_l$) 作为层对齐分数。
  4.  **模型能力评估**：提出“跨语言语义对齐准确度（CSAA）”指标，通过测试模型能否正确识别中文原句对应的英文译文（混入词序打乱、词性替换、句式变换、信息增删等干扰项）来量化其核心语义理解能力。

## 3. 实验设计
- **数据集与场景**：
  - **脑数据**：使用《小王子》多语言自然叙事fMRI公开语料库的数据，包含35名（后排除1名）健康、右利手的汉语母语者在聆听中文版故事时的全脑BOLD信号。
  - **模型文本任务**：使用与fMRI相同的《小王子》中-英平行语料，设计了一个包含5个选项（1个正确翻译+4种语义干扰）的选择题任务来评估LLM的语义理解能力。
- **评估基准（Benchmark）**：以跨语言语义对齐准确度（CSAA）作为衡量模型语义能力的主要指标。
- **对比方法与模型**：
  - **对比模型**：共分析了14个公开预训练模型，包括BERT-base、OPT、Llama-3.1、Mistral、Qwen2.5、DeepSeek、GLM-4、Gemma-2、Baichuan2等系列的基础（base）版与指令微调（instruct/chat）版。
  - **对比维度**：在同一个脑数据基准上，不仅对比不同模型间的脑对齐程度，还系统地对比了“基础版 vs. 指令微调版”的对齐差异，并分析了“不同层”与“不同脑区（尤其是左右半球）”的对齐模式差异。

## 4. 资源与算力
- 文中未明确说明用于LLM推理或编码模型训练的具体GPU型号、数量、计算时长或训练能耗。仅提及分析流水线并行化计算 $S \times R \times L$ 个模型（S为被试数，R为脑区数，L为层数），但未给出所需算力具体信息。

## 5. 实验数量与充分性
- **实验数量与维度**：
  - 提供了对14个大型语言模型（7个参数规模级，含基座与指令微调变体）的综合对比。
  - 进行了逐层、跨12个关键语言脑区的系统的预测模型构建与评估，并专门分析了左-右半球不对称性。
  - 比较分析了模型性能（CSAA）与脑对齐分数（平均相关系数）之间的定量关系，并通过成对的“基座-微调”模型对比进行了统计检验（例如置换检验）。
- **充分性与客观公平性评估**：
  - **充分性**：实验设计非常严谨和系统。采用公开数据集、广泛使用的模型架构和经典的分析方法确保了研究的公平性和可复现性。在单一自然任务（故事理解）下进行对齐分析，相比控制词句实验更具生态效度。
  - **局限性**：实验结论基于《小王子》这一特定叙事文本和汉语聆听者，其跨语言任务也是在中英之间，结论在不同文本体裁、语言和任务下的普适性需要更多验证。不同模型架构的深度和维度差异可能成为混杂变量，尽管作者试图通过关注“最优层”和“CSAA”进行归一化比较。

## 6. 论文的主要结论与发现
1.  **中间层对齐效应**：所有LLM均在中间层而非最终层，表现出与大脑活动最强的相关。该层级模式表明LLM的表征加工过程中存在一个与人类句子处理最接近的“信息富集区”。
2.  **能力优于规模**：提升核心语义理解能力的指令微调，能使模型在脑对齐指标上稳定超越其基础版本。模型表现与脑相似度存在统计显著的正相关（$r=0.601, p=0.030$），表明“理解得越好（而非单纯参数越大），越像大脑”。
3.  **半球不对称性**：脑-模型对齐呈现出功能特异性半球不对称。左侧额下回和颞后部（核心语言区）的对齐程度显著更强，右侧额中回和颞前部则在右半球占优，可能反映了与隐喻、认知控制等高阶功能需求的对应，且这种不对称性的增大与模型性能提升有关。

## 7. 优点
- **明确的因果对比框架**：通过同一模型系列的基座版与指令微调版的直接对比，优雅地将“模型规模”与“语义能力”进行解耦，论证“能力驱动对齐”的观点更具说服力。
- **多层次的系统分析**：方法上从“全脑逐体素编码”到“脑区间功能不对称”，分析维度从“跨模型性能”到“同模型跨层”，形成了一个全面立体的评估体系。
- **运用自然主义范式**：采用长篇连续叙事聆听这种高生态效度的fMRI范式，相比基于孤立词句刺激的研究，更能捕捉真实人类语言处理过程中的上下文整合与高阶语义动态。

## 8. 不足与局限
1.  **测试任务的简约性**：用于评估模型语义能力的CSAA任务局限于单句翻译选择，可能无法全面衡量模型在理解叙事理解中所需的长程指代、隐含含义、情感推理等复杂能力，对“语义理解”的表征比较单薄。
2.  **数据集的单一性**：实验结论仅基于一个中文叙事文本的聆听数据，且对比的是中英跨语言任务。模型和大脑在非叙事、多语言、或对话等更泛化语境下的对齐特性仍不明朗。
3.  **相关性分析的固有局限**：岭回归编码模型揭示的是大脑与LLM表征间的线性可映射性（相关关系），但这种统计对齐能否等同于“处理机制上的相同”仍需谨慎解读。脑区间功能不对称的解释仍比较宏观，缺乏更精细的体素级或不同皮层深度的特异性证据。

## 9. 研究价值与阅读建议（如正文第一节已前置，此处略）
（注：根据要求，第一节已详细说明研究价值与阅读建议，此处不重复。）

（完）
