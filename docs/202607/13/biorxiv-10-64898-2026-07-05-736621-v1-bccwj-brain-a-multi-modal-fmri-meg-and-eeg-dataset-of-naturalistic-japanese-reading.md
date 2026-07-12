---
title: "BCCWJ-Brain: A Multi-Modal fMRI, MEG, and EEG Dataset of Naturalistic Japanese Reading"
title_zh: BCCWJ-Brain：自然日语阅读的多模态fMRI、MEG与脑电图数据集
authors: "Sugimoto, Y., Asahara, M., Jeong, H., Kanno, A., Koizumi, M., Oseki, Y."
date: 2026-07-09
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.05.736621v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 用于脑解码的fMRI数据集
tldr: BCCWJ-Brain数据集是一个多模态神经影像资源，记录了112名日语母语者自然阅读报纸文章时的fMRI、MEG和EEG数据。该数据集采用相同的快速序列视觉呈现范式，旨在为大规模语言模型等计算模型提供认知基准，并已在OpenNeuro平台公开，有力支持神经科学和自然语言处理研究。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-05-736621-v1/fig-004.webp\", \"caption\": \"Table 1: Recent multimodal neuroimaging datasets for language processing research.\", \"page\": 3, \"index\": 4, \"width\": 936, \"height\": 761}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-05-736621-v1/fig-008.webp\", \"caption\": \"Table 2: Participants’ information\", \"page\": 5, \"index\": 8, \"width\": 921, \"height\": 998}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-05-736621-v1/fig-005.webp\", \"caption\": \"Figure 1: Directory structure of the BCCWJ-Brain datasets (BCCWJ-fMRI, BCCWJ-MEG, and BCCWJ-EEG, which use BIDS structures (v 1.9.0)). XX = subject ID; N = run number (1–4); * = sub-XX_task-BCCWJreading.\", \"page\": 8, \"index\": 5, \"width\": 1030, \"height\": 742}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-05-736621-v1/fig-006.webp\", \"caption\": \"Figure 2: Inter-subject correlation (ISC) results.\", \"page\": 9, \"index\": 6, \"width\": 952, \"height\": 206}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-05-736621-v1/fig-007.webp\", \"caption\": \"Figure 3: GLM analysis results. Top: word-rate contrast (FWE p < 0.05, Bonferroni, k > 50 voxels). Bottom: word-length contrast (FWE p < 0.05, Bonferroni, k > 50 voxels). Color bar indicates t-statistic values. L = left hemisphere; R = right hemisphere.\", \"page\": 9, \"index\": 7, \"width\": 922, \"height\": 306}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-05-736621-v1/fig-002.webp\", \"caption\": \"Figure 4: Average evoked response to all words across subjects (MEG).\", \"page\": 10, \"index\": 2, \"width\": 914, \"height\": 489}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-05-736621-v1/fig-003.webp\", \"caption\": \"Table 5: Word length — FWE (p < 0.05, Bonferroni, k > 50 voxels, t > 6.53).\", \"page\": 10, \"index\": 3, \"width\": 936, \"height\": 190}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-05-736621-v1/fig-001.webp\", \"caption\": \"Figure 5: Average evoked response to all words across subjects (EEG).\", \"page\": 11, \"index\": 1, \"width\": 914, \"height\": 490}]"
motivation: 为大规模语言模型等计算模型提供自然阅读条件下的多模态日语神经基准数据。
method: 采集112名日语母语者在快速序列视觉呈现范式下阅读20篇报纸文章的fMRI、MEG和EEG数据。
result: 构建了包含三种互补神经成像模态的BCCWJ-Brain公开数据集。
conclusion: 该数据集为日语自然阅读的脑机制研究和计算模型验证提供了宝贵资源。
---

## 摘要
我们推出BCCWJ-Brain数据集，这是一个多模态神经影像资源，包含功能性磁共振成像（fMRI）、脑磁图（MEG）和脑电图（EEG）数据，记录自以日语为母语的被试阅读《当代书面日语均衡语料库》（BCCWJ）中的报纸文章。共有112名被试参与神经数据采集（36名fMRI、35名MEG、41名EEG），他们在快速序列视觉呈现（RSVP）范式下阅读了二十篇报纸文章。通过提供在相同自然阅读刺激下采集的三种互补神经影像模态，该数据集为诸如大语言模型等计算模型提供了认知基准。数据集已在OpenNeuro平台公开发布，为神经科学、自然语言处理及相关领域提供了宝贵资源。

## Abstract
We present the BCCWJ-Brain dataset, a multi-modal neuroimaging resource comprising functional magnetic resonance imaging (fMRI), magnetoencephalography (MEG), and electroencephalography (EEG) data recorded from native Japanese speakers reading newspaper articles from the Balanced Corpus of Contemporary Written Japanese (BCCWJ). Neural data were collected from 112 participants (36 fMRI, 35 MEG, and 41 EEG) as they read twenty newspaper articles presented in a Rapid Serial Visual Presentation (RSVP) paradigm. By providing three complementary neuroimaging modalities collected under identical naturalistic reading stimuli, this dataset provides a cognitive benchmark for computational models such as large language models. The dataset is publicly available on the OpenNeuro platform, offering a valuable resource for neuroscience, natural language processing, and related research fields.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
*   **关联方向**：强相关。该数据集直接服务于脑解码、脑编码以及表征对齐研究，尤其为基于fMRI的日语自然语言理解模型评估提供了新的多模态基准。
*   **启发与意义**：证明了构建多模态、自然阅读条件下日语神经基准的可行性，为在语言类型学上独特的日语中验证大语言模型与脑活动的计算对应关系开辟了新道路。
*   **可借鉴点**：可借鉴其将相同文本刺激与fMRI、MEG、EEG三种模态同步采集的实验设计，以及采用BIDS标准组织数据、通过ISC与GLM进行技术验证的完整流程。
*   **阅读建议**：建议重点阅读“技术验证”部分，以评估数据质量是否满足脑编码/解码建模的要求，并关注“使用说明”中关于重建文本标注的脚本链接，以便直接利用该数据集。

## 1. 核心问题与整体含义
*   **研究动机**：现有用于评估计算模型（如大语言模型）的神经影像数据集多为单模态，且主要覆盖英语等少数语言，缺少能同时捕捉语言加工的空间定位（fMRI）与时间动态（EEG/MEG）的多模态资源，日语更是一片空白。
*   **整体含义**：论文旨在通过发布BCCWJ‑Brain数据集，提供一个在相同自然阅读刺激下同步采集的fMRI、MEG、EEG多模态日语神经基准，以此填补多模态与语言多样性的双重缺口，推动人脑语言加工与人工模型计算原则的跨模态、跨语言比较研究。

## 2. 方法论
*   **核心思想**：利用相同的一套日语新闻文章作为刺激材料，分别招募三组被试，在快速序列视觉呈现（RSVP）范式下采集fMRI、MEG、EEG数据，并采用标准化预处理与验证流程，确保三种模态数据的可比性与可靠性。
*   **关键技术与流程**：
    *   **刺激与任务**：将20篇BCCWJ新闻文章按“文节”切分为1642个短语单元，每单元呈现500ms，间以500ms空白屏，文章顺序随机。每篇文章后设置一项是否理解问题。
    *   **fMRI采集与预处理**：Philips 3.0T扫描，TR=2000ms，体素大小3×3×4 mm。预处理使用SPM12，流水线包括运动校正、层间时间校正、与结构像配准、分割、MNI空间标准化、8mm FWHM平滑。
    *   **MEG采集与预处理**：200通道轴向梯度计，采样率1000 Hz，在线0‑200 Hz低通。应用CALM滤波器，ICA去除眼动伪迹，0.1‑40 Hz带通滤波，epoch为‑0.1‑1.0 s（词起始对齐），基线校正，自动剔除峰峰幅值超2e-12 T的通道，降采样至200 Hz。
    *   **EEG采集与预处理**：64导电极帽，FCz参考，采样率1000 Hz。类似MEG：ICA去伪迹，0.1‑40 Hz带通滤波，全导平均重参考，epoch为‑0.1‑1.0 s，基线校正，150 μV阈值拒绝，降采样至200 Hz。
*   **数据组织**：采用BIDS规范及其MEG、EEG扩展，事件文件仅含起始时间等基本信息，完整文本需通过BCCWJ许可和重构脚本获取。

## 3. 实验设计
*   **数据集与被试**：使用BCCWJ语料库中的20篇新闻文章。最终有效被试112名（fMRI 36名，MEG 35名，EEG 41名），均为右利手日语母语年轻成人。
*   **基准与验证**：由于是数据集论文，未与其他方法或模型对比。而是通过以下分析建立该数据集本身的可用性基准：
    *   **行为结果**：fMRI、MEG、EEG组理解题平均准确率分别为68%、81%、85%。
    *   **fMRI验证**：
        *   跨被试相关（ISC）：使用留一法计算各体素ISC，显示语言网络、视觉皮层等区域存在强相关。
        *   一般线性模型（GLM）：定义“词速率”（每个短语偏移点为1）和“词长度”（短语单元长度）两个回归量，与HRF卷积后拟合fMRI时间序列，组分析显示词速率激活双侧颞上前回等区域，词长度激活双侧颞枕梭状回等区域（FWE校正，p<0.05，体素簇大小>50）。
    *   **MEG/EEG验证**：通过跨被试平均叠加诱发电位，MEG显示约170‑200 ms的典型视觉词识别成分，EEG亦呈现合理波形，证明数据有效。

## 4. 资源与算力
*   **论文中未明确说明**使用了任何GPU型号、数量或训练时长等算力资源。所有分析均基于常规统计方法（ISC、GLM）和信号叠加平均，未涉及大规模深度学习模型训练或推理所需的高性能计算。

## 5. 实验数量与充分性
*   **实验组数**：严格而言，该论文并非进行对比实验，而是进行了三种数据质量验证分析：跨被试相关、GLM（两个对比）、以及MEG和EEG的平均诱发电位。此外还报告了行为准确率。
*   **充分性与客观性**：对于一篇旨在发布数据集的论文，这些验证实验足够证明该数据集能够捕获预期的、与语言阅读相关的神经活动，且结果与已有文献一致。实验设计在参与者招募、刺激呈现、预处理和分析层面较为客观、标准。

## 6. 主要结论与发现
*   成功构建并验证了一个大规模、多模态（fMRI + MEG + EEG）的日语自然阅读神经影像公开数据集BCCWJ‑Brain。
*   技术验证显示，fMRI数据具有高跨被试相关性，并可靠激活了语言网络和视觉词形区；MEG和EEG数据准确捕捉到了阅读过程中的经典早期视觉/词汇加工成分。
*   该数据集凭借其多模态和独特的语言属性，为评估计算语言模型与大脑加工的对应关系提供了前所未有的综合基准。

## 7. 优点
*   **三模态互补**：首次提供同一套日语阅读刺激下的fMRI、MEG、EEG同步数据，兼得高空间精度与高时间精度。
*   **语言独特性**：聚焦于具有粘着语形态和灵活语序的日语，极大地丰富了跨语言神经认知研究的资源。
*   **标准与开放**：严格遵从BIDS规范并托管在OpenNeuro，提供详细的预处理脚本，确保了数据的易用性和可复现性。
*   **自然阅读范式**：采用RSVP呈现自然报纸文章，比孤立的词汇或句子研究更具生态效度。

## 8. 不足与局限
*   **刺激文本单一**：仅包含报刊文章一种体裁，可能限制模型在更广泛文体或上下文复杂性上的泛化评估。
*   **参与者同质性**：被试均为右利手年轻大学生，结果能否推广至更广泛的人群尚不明确。
*   **文本许可限制**：数据集仅提供事件时间戳，完整文本内容需另行获取BCCWJ付费版许可，增加了使用门槛；且未在事件文件中直接提供基本的词频等语言标注。
*   **模态间被试独立**：fMRI、MEG、EEG在不同被试组采集，无法进行个体水平的直接跨模态融合或多变量模式分析，限制了多模态潜力的充分发挥。

（完）
