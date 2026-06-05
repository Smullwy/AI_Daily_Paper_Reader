---
title: ICML26 Omni-fMRI_ A Universal Atlas-Free fMRI Foundation Model
title_zh: Omni-fMRI：一个通用的、无需图谱的fMRI基础模型
authors: Mo Wang; Wenhao Ye; Junfeng Xia; Junxiang Zhang; Xuanye Pan; Minghao Xu; Haotian Deng; Hongkai Wen; Quanying Liu
date: 2026-06-05
pdf: assets/local_pdfs/local-20260605-143003299039-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 7.0 订阅评分
score_label: 订阅评分
evidence: 基于体素的多被试fMRI基础模型
tldr: "现有自我监督fMRI基础模型依赖预定义区域分区，丢失体素细节并引入图谱偏差，而Omni-fMRI作为无图谱模型，直接处理体素信号。通过动态修补机制在49,497个fMRI会话上高效预训练，并构建包含11个数据集的基准。实验表明其性能一致超越现有模型，为可扩展、可重复的脑表征学习提供了新框架。"
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260605-143003299039-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-005.webp\", \"caption\": \"Table 1. Supervised and Self-Supervised Voxel-level fMRI Models. “Reduction” refers to the downsampling strategy. The symbol * indicates pretrained foundation model.\", \"page\": 2, \"index\": 5, \"width\": 1010, \"height\": 228}, {\"url\": \"assets/figures/local-pdf/local-20260605-143003299039-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-008.webp\", \"caption\": \"Table 2. Summary of the datasets used in this study. The pre-training data was curated to cover a diverse spectrum of age groups. Age is presented as mean ± standard deviation unless otherwise specified. Please refer to Appendix for details.\", \"page\": 5, \"index\": 8, \"width\": 1013, \"height\": 502}, {\"url\": \"assets/figures/local-pdf/local-20260605-143003299039-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-001.webp\", \"caption\": \"Table 3. Performance on demography and disease diagnosis comparison with Accuracy/F1 and MSE/Pearson correlation. Red indicates the best performance and Underline indicates the second performance. * denotes a large effect size with Cohen’s d ≥ 0.8.\", \"page\": 6, \"index\": 1, \"width\": 1008, \"height\": 231}, {\"url\": \"assets/figures/local-pdf/local-20260605-143003299039-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-003.webp\", \"caption\": \"Figure 3. 23-way HCP Task Accuracy under different few-shot levels. * denotes a large effect size with Cohen’s d ≥ 0.8.\", \"page\": 6, \"index\": 3, \"width\": 504, \"height\": 299}, {\"url\": \"assets/figures/local-pdf/local-20260605-143003299039-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-002.webp\", \"caption\": \"Table 4. Comparison of image retrieval performance (Accuracy %) averaged over three runs. ”Top-1”, ”Top-5”, and ”Top-10” denote the accuracy metrics in a 100-way retrieval setting.\", \"page\": 6, \"index\": 2, \"width\": 1008, \"height\": 202}, {\"url\": \"assets/figures/local-pdf/local-20260605-143003299039-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-006.webp\", \"caption\": \"Figure 4. Data Scaling and Linear Probing. Classification performance on the ADNI (AD) dataset across different models and settings. Note that pretraining on zero subjects corresponds to end-to-end supervised training. LP: linear probing.\", \"page\": 7, \"index\": 6, \"width\": 602, \"height\": 375}, {\"url\": \"assets/figures/local-pdf/local-20260605-143003299039-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-004.webp\", \"caption\": \"Table 10. Hyperparameters settings of our model. (BS: Batch size)\", \"page\": 15, \"index\": 4, \"width\": 559, \"height\": 879}, {\"url\": \"assets/figures/local-pdf/local-20260605-143003299039-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-009.webp\", \"caption\": \"Figure 6. Temporal emotion labels used for regression in the StudyForrest dataset.\", \"page\": 16, \"index\": 9, \"width\": 908, \"height\": 374}, {\"url\": \"assets/figures/local-pdf/local-20260605-143003299039-icml26-omni-fmri_-a-universal-atlas-free-fmri-foundation-model/fig-007.webp\", \"caption\": \"Table 11. Comparison of HCP Task Performance (Accuracy %) averaged over three runs. ”Full”, ”50%”, and ”10%” denote the percentage of training data used (few-shot settings). * denotes a large effect size with Cohen’s d ≥ 0.8.\", \"page\": 17, \"index\": 7, \"width\": 641, \"height\": 200}]"
motivation: 现有fMRI基础模型依赖于预定义区域级分区，丢弃细粒度体素信息并引入图谱依赖性偏差。
method: 提出Omni-fMRI，直接对体素级信号采用动态修补机制进行可扩展预训练，保留空间结构并降低计算开销。
result: 在涵盖11个数据集的静息态与任务态fMRI基准上，Omni-fMRI始终优于现有基础模型。
conclusion: Omni-fMRI为无图谱脑表征学习提供了一个可扩展且可重复的框架，推动了fMRI基础模型的通用性。
---

## 摘要
自监督的fMRI基础模型已展现出良好的迁移性能，然而大多数模型依赖于预定义的脑区级别划分，这丢弃了精细的体素信息并引入依赖于特定图谱的偏差。我们提出了Omni-fMRI，一个直接处理体素级信号的无图谱基础模型。为了在九个数据集的49,497个fMRI会话上实现可扩展预训练，Omni-fMRI引入了一种动态分块机制，该机制大幅降低了计算成本同时保留了信息性的空间结构。为支持可重现性和公平比较，我们建立了一个涵盖11个数据集和多种静息态及任务态fMRI任务的全面基准测试套件。实验结果表明，Omni-fMRI一致地优于现有基础模型，为无图谱大脑表征学习提供了一个可扩展且可重现的框架。代码和日志可在链接处获取。

## Abstract
Self-supervised fMRI foundation models have shown promising transfer performance, yet most rely on predefined region-level parcellations that discard fine-grained voxel information and intro- duce atlas-dependent biases. We propose Omni- fMRI, an atlas-free foundation model that oper- ates directly on voxel-level signals. To enable scalable pretraining on 49,497 fMRI sessions across nine datasets, Omni-fMRI introduces a dy- namic patching mechanism that substantially re- duces computational cost while preserving infor- mative spatial structure. To support reproducibil- ity and fair comparison, we establish a compre- hensive benchmark suite spanning 11 datasets and a diverse set of resting-state and task-based fMRI tasks. Experimental results demonstrate that Omni-fMRI consistently outperforms exist- ing foundation models, providing a scalable and reproducible framework for atlas-free brain repre- sentation learning. Code and logs are available at Link.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与读者的核心研究方向（fMRI表征学习、脑解码、神经先验、表征对齐）强相关，聚焦于无图谱体素级表征学习，为fMRI基础模型提供了一种全新的数据驱动范式。
- **启发与意义**：论文揭示了基于体素的、无图谱的端到端表征相比传统ROI级模型在信息保真度和跨任务泛化上的巨大潜力。这为脑解码和编码研究提供了更具细节、更少归纳偏差的“神经先验”。
- **可借鉴点**：
    - **动态分块策略**：该机制为解决高维体素数据的计算瓶颈提供了优雅方案，可作为脑编码/解码任务中替代ROI降维的一种高效、可学习的特征提取器。
    - **无图谱表征评估范式**：本文构建的跨11个数据集、16个下游任务的公平基准，为评估不同fMRI表征（如脑解码/对齐模型的输出）的泛化能力提供了可参考的标准。
- **阅读建议**：重点理解动态分块和尺度感知掩码自编码器的设计逻辑，这两项技术是连接“体素级计算可行性”与“保留精细表征”的关键，可能直接启发你改进脑解码/对齐模型的输入处理模块。

## 1. 核心问题与整体含义
- **研究背景**：现有fMRI自监督基础模型主要依赖预定义脑图谱（如AAL等），将全脑体素信号聚合成区域级（ROI）时间序列进行学习。这种“先图谱后建模”的范式存在两大根本性问题：
    1.  **信息损失**：粗暴的区域聚合丢弃了体素级别的精细空间信息和功能组织细节。
    2.  **图谱偏差**：图谱选择具有主观性，缺乏普适性，会引入任务和数据依赖的归纳偏差，限制了模型的泛化能力与公平性比较。
- **核心意图**：本文旨在彻底摒弃对预定义图谱的依赖，提出一个直接、高效地在全脑体素水平上进行表征学习的通用基础模型，从而保留最原始、最完整的fMRI数据信息。

## 2. 方法论
论文的核心方法论围绕“**如何高效地在数百万体素上训练基于Transformer的基础模型**”展开，主要由三个协同设计的技术模块构成：
- **核心思想**：采用动态分块策略替代静态网格划分，根据信息的“复杂性”自适应地分配计算资源。
- **关键技术细节**：
    1.  **动态分块与背景剪枝**：
        - **复杂度量**：使用基于时间平均的强度方差 $\sigma^2_P$ 衡量局部时空块的“信息丰富度”，方差越大代表神经活动越丰富。
        $$ \sigma^2_P = \frac{1}{T}\sum_{t=1}^{T}(\mathbb{E}_P[I^2_t] - (\mathbb{E}_P[I_t])^2) $$
        - **自适应分配**：对低信号区域（背景）直接剪枝（不生成token）；对高复杂度区域采用细粒度分块（如 $4\times4\times4$），对低复杂度区域采用粗粒度分块（如 $8\times8\times8$），从而将约14K的token序列大幅缩减至约4.3K。
    2.  **双路径多尺度嵌入**：为使不同尺度的分块能输入到统一的ViT编码器中，设计了一种特殊的投影方式。对粗粒度分块，其嵌入由“下采样后的低频路径特征”与“网格子块聚合的高频残留路径特征（通过零初始化MLP缓慢引入）”共同组成。
    3.  **尺度感知掩码自编码器**：标准的MAE（掩码自编码器）重建损失会被不同尺度的patch所主导。为解决该问题，本文设计了**尺度条件解码器**（为不同尺度的token注入可学习的尺度嵌入 $e_{s_i}$）和**多尺度重建头**（使用独立的预测头 $\psi_s$ 重建不同体积的体素），并通过归一化操作使得损失函数对尺度不敏感。
    $$ \mathcal{L} = \sum_{s=0}^{K-1}\frac{1}{|\mathcal{M}_s| \cdot V_s} \sum_{i \in \mathcal{M}_s} \|\psi_s(\text{Decoder}(\mathbf{u}_i)) - \mathbf{y}_i\|^2_2 $$

## 3. 实验设计
- **数据集与场景**：使用了极为宏大的实验体系，涵盖三类共16个数据集：
    - **预训练（类型I）**：UK Biobank（约3.8万被试）、AOMIC、CHCP、ISYB，共49,497个fMRI会话。
    - **内测试下游（类型II）**：ABCD（儿童脑发育）、ABIDE（自闭症）、HCP（健康年轻人）、PPMI（帕金森症）。
    - **外测试下游（类型III）**：ADNI（阿尔茨海默症）、SALD（毕生发展）、NKI（教育/年龄）、NSD（自然视觉图像）、HCP Task（认知状态）等。
- **任务基准**：涵盖了**人口统计学预测**（年龄/性别/教育）、**疾病诊断**（帕金森/阿尔茨海默/自闭症）、**脑状态解码**（23类任务态）、**图像检索**（100路自然图像检索）和**情绪预测**（悲伤/快乐）。
- **对比方法**：对比了主流的SOTA模型，包括基于图的方法（BrainGNN）、基于Transformer的体素模型（SwiFT, NeuroSTORM）、以及基于区域/ROI的模型（BrainLM, BrainMASS, Brain-JEPA）。

## 4. 资源与算力
- **预训练算力**：使用 **4块 NVIDIA A10G (24GB) GPU**，训练35个周期，耗时约 **32小时**。
- **对比算力**：
    - NeuroSTORM（体素级对比基线）：需在4块 A6000 (48GB) 上训练13天。
    - BrainMASS（ROI级对比基线）：需在8块 V100 上训练约150小时。
- **效率对比**：Omni-fMRI在算力消耗极低的情况下，完成了规模（157M参数）远超同类体素模型的预训练，展现了极高的训练效率。

## 5. 实验数量与充分性
- **实验组数**：实验设计极其详尽，包括9个大类下游任务（覆盖分类、回归）、线性评估与全参微调、数据效率（Few-shot）、模型/数据缩放律、以及针对复杂度指标、分块阈值、掩码率、自监督目标、Patch Normalization等关键设计的内部消融实验。
- **公平性与客观性**：
    - **公平性**：建立了标准化的数据划分和评估协议，甚至释放了测试集被试ID，确保完全可复现。
    - **充分性**：笔者采用效应量（Cohen's d）而非仅依赖显著性检验，并报告多次运行的均值和标准差，统计学分析严谨。线性评估（Linear Probing）的实验直接揭示了表征的内在质量和线性可分度，证据力度强。

## 6. 主要结论与发现
1.  **全维度领先性能**：Omni-fMRI在几乎所有基准测试任务中均超越现有SOTA模型，且在部分任务上其**线性评估的结果就超过了其他模型全参微调的结果**，证明其学习了极度优质且通用的表征。
2.  **数据与算力效率极高**：在Few-shot（仅用10%训练数据）场景下，Omni-fMRI性能衰减极小，展现了绝佳的数据效率；同时，其动态分块策略极大降低了算力开销。
3.  **神经生物学可解释性**：通过归因分析，证明模型关注的脑区与Neurosynth元分析得到的标准神经激活图高度一致（如阿尔茨海默症相关脑区），验证了模型习得表征的神经生物学意义。

## 7. 优点
- **范式革新**：彻底挑战了fMRI领域根深蒂固的“先做图谱降维、再进行机器学习”的范式，是无图谱端到端建模的重要里程碑。
- **技术创新**：提出的动态分块机制、零初始化多尺度嵌入和尺度感知解码器，协同解决了体素级Transformer计算不可行和优化不平衡的难题。
- **工业级标准**：构建了极其完备的开源基准测试体系（Omni-bench），不仅开源代码，还开源日志和测试ID，为该领域的可复现性设立了极高标准。

## 8. 不足与局限
- **分块策略的非端到端性**：动态分块所依赖的“复杂性度量”（方差阈）是基于启发式规则设计的，而非可学习的、端到端的自适应机制。这种硬性阈值可能无法针对特定任务或个体做出最优决策，限制了模型的终极灵活度。
- **实验覆盖的细微缺失**：
    - 虽然比较了MAE和JEPA，但对目前主流的多模态对齐任务（如fMRI-to-Image/Text）的直接应用和对比不多（尽管做了图像检索），其表征在跨模态对齐上的直接优势未完全展露。
    - 消融实验主要关注内部设计，对于不同动态分块策略（如基于熵、基于学习）的对比可以更深入。
- **应用限制**：该模型作为基础模型，需要在大规模fMRI数据上进行预训练，对于缺乏大规模预训练数据资源的小研究室，无法直接享受其技术红利，更多是作为他们进行微调的强大的起点。

（完）
