---
title: ICML25 MindLLM_ A Subject-Agnostic and Versatile Model for fMRI-to-Text Decoding
title_zh: ICML25 MindLLM：一种面向被试无关且多功能的fMRI到文本解码模型
authors: "Weikang Qiu, Zheng Huang, Haoyu Hu, Aosong Feng, Yujun Yan, Rex Ying"
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 利用神经科学启发的注意力编码器实现跨被试的fMRI到文本解码
tldr: 针对fMRI到文本解码任务中预测性能差、任务范围有限、跨被试泛化弱的问题，提出MindLLM，结合神经科学启发的注意力编码器与现成LLM，通过脑指令微调增强语义捕捉，实现被试无关且多功能的解码，性能显著超越基线，并具备可解释性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 1024, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-002.webp\", \"caption\": \"\", \"page\": 1, \"index\": 2, \"width\": 400, \"height\": 300}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-003.webp\", \"caption\": \"\", \"page\": 9, \"index\": 3, \"width\": 1001, \"height\": 924}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-004.webp\", \"caption\": \"\", \"page\": 9, \"index\": 4, \"width\": 1001, \"height\": 924}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-005.webp\", \"caption\": \"\", \"page\": 9, \"index\": 5, \"width\": 1001, \"height\": 924}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-006.webp\", \"caption\": \"\", \"page\": 9, \"index\": 6, \"width\": 1001, \"height\": 924}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-007.webp\", \"caption\": \"\", \"page\": 9, \"index\": 7, \"width\": 1011, \"height\": 924}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-008.webp\", \"caption\": \"\", \"page\": 9, \"index\": 8, \"width\": 1011, \"height\": 924}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-009.webp\", \"caption\": \"\", \"page\": 15, \"index\": 9, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-010.webp\", \"caption\": \"\", \"page\": 15, \"index\": 10, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-011.webp\", \"caption\": \"\", \"page\": 15, \"index\": 11, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-012.webp\", \"caption\": \"\", \"page\": 15, \"index\": 12, \"width\": 640, \"height\": 606}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-013.webp\", \"caption\": \"\", \"page\": 15, \"index\": 13, \"width\": 640, \"height\": 427}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-014.webp\", \"caption\": \"\", \"page\": 15, \"index\": 14, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-015.webp\", \"caption\": \"\", \"page\": 15, \"index\": 15, \"width\": 640, \"height\": 426}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-016.webp\", \"caption\": \"\", \"page\": 15, \"index\": 16, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-017.webp\", \"caption\": \"\", \"page\": 15, \"index\": 17, \"width\": 612, \"height\": 612}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-018.webp\", \"caption\": \"\", \"page\": 15, \"index\": 18, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-019.webp\", \"caption\": \"\", \"page\": 15, \"index\": 19, \"width\": 480, \"height\": 640}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-020.webp\", \"caption\": \"\", \"page\": 16, \"index\": 20, \"width\": 640, \"height\": 427}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-021.webp\", \"caption\": \"\", \"page\": 16, \"index\": 21, \"width\": 640, \"height\": 508}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-022.webp\", \"caption\": \"\", \"page\": 16, \"index\": 22, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-023.webp\", \"caption\": \"\", \"page\": 16, \"index\": 23, \"width\": 640, \"height\": 427}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-024.webp\", \"caption\": \"\", \"page\": 16, \"index\": 24, \"width\": 640, \"height\": 467}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-025.webp\", \"caption\": \"\", \"page\": 18, \"index\": 25, \"width\": 551, \"height\": 452}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-026.webp\", \"caption\": \"\", \"page\": 18, \"index\": 26, \"width\": 551, \"height\": 444}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-027.webp\", \"caption\": \"\", \"page\": 18, \"index\": 27, \"width\": 577, \"height\": 452}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-028.webp\", \"caption\": \"\", \"page\": 19, \"index\": 28, \"width\": 532, \"height\": 448}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-029.webp\", \"caption\": \"\", \"page\": 19, \"index\": 29, \"width\": 528, \"height\": 456}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-030.webp\", \"caption\": \"\", \"page\": 19, \"index\": 30, \"width\": 526, \"height\": 440}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-031.webp\", \"caption\": \"\", \"page\": 19, \"index\": 31, \"width\": 528, \"height\": 455}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-032.webp\", \"caption\": \"\", \"page\": 19, \"index\": 32, \"width\": 528, \"height\": 440}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-033.webp\", \"caption\": \"\", \"page\": 19, \"index\": 33, \"width\": 527, \"height\": 437}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-034.webp\", \"caption\": \"\", \"page\": 21, \"index\": 34, \"width\": 4005, \"height\": 1060}, {\"url\": \"assets/figures/local-pdf/local-20260606-200715665831-icml25-mindllm_-a-subject-agnostic-and-versatile-model-for-fmri-to-t/fig-035.webp\", \"caption\": \"\", \"page\": 22, \"index\": 35, \"width\": 3240, \"height\": 2376}]"
motivation: 现有fMRI-to-text解码方法在预测性能、任务多样性及跨被试泛化上存在明显局限。
method: 采用神经科学注意力的fMRI编码器处理不同被试输入，并引入脑指令微调增强语义表征。
result: "在下游任务、未见被试泛化、新任务适应上分别提升12.0%、24.5%和25.0%。"
conclusion: MindLLM实现了高性能、被试无关、多功能的fMRI-to-text解码，并提供可解释的决策过程。
---

## 摘要
将功能性磁共振成像（fMRI）信号解码为文本一直是神经科学界的关键挑战，有望推动脑机接口的发展并揭示大脑机制的更深层见解。然而，现有方法常常面临预测性能欠佳、任务多样性有限以及跨被试泛化能力差等问题。为此，我们提出了MindLLM，一种面向被试无关且多功能的fMRI到文本解码模型。MindLLM由一个fMRI编码器和一个现成的大语言模型（LLM）组成。fMRI编码器采用了一种基于神经科学的注意力机制，能够适应具有不同输入形状的被试，从而实现高性能的被试无关解码。此外，我们引入了大脑指令微调（BIT），这是一种新颖的方法，可增强模型从fMRI信号中捕获多样化语义表征的能力，促进更通用的解码。我们在综合的fMRI到文本基准上评估了MindLLM。结果表明，我们的模型优于基线，将下游任务提升了12.0%，未见被试泛化提升了24.5%，新任务适应提升了25.0%。此外，MindLLM中的注意力模式为其决策过程提供了可解释的洞察。代码见https://github.com/Graph-and-Geometric-Learning/MindLLM。

## Abstract
Decoding functional magnetic resonance imaging (fMRI) signals into text has been a key challenge in the neuroscience community, with the potential to advance brain-computer interfaces and uncover deeper insights into brain mechanisms. However, existing approaches often struggle with suboptimal predictive performance, limited task variety, and poor generalization across subjects. In response to this, we propose MindLLM, a model designed for subject-agnostic and versatile fMRI-to-text decoding. MindLLM consists of an fMRI encoder and an off-the-shelf LLM. The fMRI encoder employs a neuroscience-informed attention mechanism, which is capable of accom- modating subjects with varying input shapes and thus achieves high-performance subject-agnostic decoding. Moreover, we introduce Brain Instruc- tion Tuning (BIT), a novel approach that enhances the model’s ability to capture diverse semantic representations from fMRI signals, facilitating more versatile decoding. We evaluate MindLLM on comprehensive fMRI-to-text benchmarks. Results demonstrate that our model outperforms the baselines, improving downstream tasks by 12.0%, unseen subject generalization by 24.5%, and novel task adaptation by 25.0%. Furthermore, the attention patterns in MindLLM provide inter- pretable insights into its decision-making process. Code is available at https://github.com/ Graph-and-Geometric-Learning/ MindLLM.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与“brain decoding”、“fMRI representation”、“neural prior”等方向高度相关，直接解决了跨被试解码与语义表征学习问题。
- **启发与意义**：神经科学先验（区域分割与坐标）与注意力机制的结合，为fMRI表征学习提供了新范式；脑指令微调扩展了大脑解码的任务边界。
- **可借鉴点**：可借鉴其将体素位置与功能信息解耦的key-query-value设计，以及利用多模态数据集构建指令微调数据的方法。
- **阅读建议**：重点阅读fMRI编码器的设计细节与BIT数据构建逻辑，这两部分是方法论的核心创新；可根据任务需求，单独借鉴其一。

## 1. 论文的核心问题与整体含义
- **研究动机**：将大脑活动（fMRI）解码为自然语言，对脑机接口、医疗康复与神经科学研究具有重要意义，但现有方法存在三大局限：
  - 预测性能欠佳；
  - 解码任务类型单一，缺乏通用性；
  - 跨被试泛化困难，需要为每个被试单独建模。
- **整体含义**：提出MindLLM，旨在实现一个被试无关且多功能的fMRI-to-text解码系统，同时提升性能、泛化性与任务覆盖范围。

## 2. 论文提出的方法论
- **整体架构**：由一个**fMRI编码器**与一个**冻结的大语言模型（Vicuna-7b）**组成。
- **神经科学启发的注意力机制**：
  - **问题**：不同被试的体素数量 $N$ 不同，传统MLP无法处理变长输入。
  - **核心设计**：使用交叉注意力，其中 $v_i = v_i$（原始fMRI值）作为value，query为可学习的嵌入，key仅由体素的**位置编码**与**脑区划分嵌入**拼接构成，不含fMRI值：
    $$k_i = k_i^{\text{pos}} \; \| \; k_i^{\text{reg},P_1} \; \| \; k_i^{\text{reg},P_2} \; \| \cdots$$
  - **优势**：解耦体素的功能信息与空间先验，避免池化/采样造成的信息丢失，实现统一的被试无关编码。
- **大脑指令微调**：
  - 利用图像作为中介，将fMRI数据与大量视觉-语言数据集的文本标注配对，构建涵盖四种认知能力的指令微调数据集：
    - 感知与场景理解；
    - 记忆与知识检索；
    - 语言与符号处理；
    - 复杂推理。
  - 训练目标为标准语言模型的自回归损失，仅更新编码器参数，冻结LLM。

## 3. 实验设计
- **主数据集**：Natural Scenes Dataset，8名健康被试的fMRI记录，刺激图像来自MS-COCO。
- **评价基准与对比方法**：
  - **脑描述**：对比SDRecon、UniBrain、BrainCap、BrainChat、UMBRAE等。
  - **多功能解码**：在COCO-QA、VG-QA、VQA-v2、Paragraph Caption、A-OKVQA等10余个下游任务上评估，对比MindBridge、UniBrain等被试无关基线。
  - **未见被试泛化**：训练剔除一名被试，测试其泛化性能。
  - **新任务适应**：在TDIUC数据集上测试适应性，包含12种问题类型。
- **评估指标**：BLEU、ROUGE、CIDEr、SPICE、METEOR及各QA数据集的官方精度指标。

## 4. 资源与算力
- **指令微调**：使用 $8$ 块 L40S GPU，训练 $8$ 天。
- **下游微调**：单块 L40S GPU，学习率 $1\times10^{-4}$，批次大小 $48$。

## 5. 实验数量与充分性
- **实验组数**：包含脑描述、多功能解码（覆盖10+任务）、被试泛化、任务适应、多被试规模缩放及消融研究。
- **充分性与公平性**：
  - 对比方法覆盖全面，包括被试特定模型与被试无关模型；
  - 所有对比均冻结LLM，保证公平；
  - 消融实验验证了key嵌入设计的有效性；
  - 提供了注意力图与隐空间的可视化，增强了可解释性分析。

## 6. 论文的主要结论与发现
- MindLLM在多个任务上一致超越基线，多功能解码平均提升12.0%，未见被试泛化提升24.5%，新任务适应提升25.0%。
- 神经科学启发的注意力机制有效保留了体素的空间信息并实现被试无关编码；BIT显著增强了模型的语义理解与任务广度。
- 模型的注意力模式可映射到PPA、FFA等已知功能区，佐证了其神经科学上的可解释性。

## 7. 优点
- **方法论新颖**：将脑区划分与位置编码作为交叉注意力的key，实现灵活、信息无损的被试无关编码。
- **任务设计创新**：BIT通过图像中介构建多认知维度的指令数据集，大幅扩展了解码的语义范围与通用性。
- **实验扎实全面**：覆盖多种任务、被试泛化、任务适应与可解释性分析，消融充分，对比公平。
- **开源与可复现**：提供代码链接，有助于后续研究。

## 8. 不足与局限
- **缺乏时间动态性**：仅使用静态fMRI数据，未利用大脑活动的时间序列信息。
- **依赖图像中介**：BIT的构建依赖于图像刺激与视觉-语言数据集，或难以直接迁移到纯语言或自发思维场景。
- **泛化边界未充分探索**：未见被试实验仅在NSD内部进行，外部数据集或疾病被试的泛化能力有待验证。
- **LLM冻结**：仅训练编码器，未探索LLM微调对解码性能的潜在提升。

## 9. 研究价值与阅读建议
- **关联方向**：本文与“brain decoding”、“fMRI representation”、“neural prior”等方向高度相关，直接解决了跨被试解码与语义表征学习问题。
- **启发与意义**：神经科学先验（区域分割与坐标）与注意力机制的结合，为fMRI表征学习提供了新范式；脑指令微调扩展了大脑解码的任务边界。
- **可借鉴点**：可借鉴其将体素位置与功能信息解耦的key-query-value设计，以及利用多模态数据集构建指令微调数据的方法。
- **阅读建议**：重点阅读fMRI编码器的设计细节与BIT数据构建逻辑，这两部分是方法论的核心创新；可根据任务需求，单独借鉴其一。

（完）
