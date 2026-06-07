---
title: CVPR25 NSD-Imagery_ A Benchmark Dataset for Extending fMRI Vision Decoding Methods to Mental Imagery
title_zh: "CVPR 2025 NSD-Imagery: 一个用于将fMRI视觉解码方法扩展到心理意象的基准数据集"
authors: Reese Kneeland; Paul S. Scotti; Ghislain St-Yves; Jesse Breedlove; Kendrick Kay; Thomas Naselaris
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-184937226656-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 3.0 订阅评分
score_label: 订阅评分
evidence: 心理意象解码基准数据集，辅助脑与机器表征对齐
tldr: 针对现有fMRI视觉解码模型仅能处理真实图像刺激的局限，本文提出NSD-Imagery基准数据集，首次提供大量心理图像（内源性图像）的fMRI记录。该数据集评估了主流模型从看到到想象图像的泛化能力，发现心理图像重建性能与视觉重建性能脱钩，简单线性解码模型泛化更优，强调心理图像数据对脑机接口等应用的关键作用。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-184937226656-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 2500, \"height\": 1306}, {\"url\": \"assets/figures/local-pdf/local-20260606-184937226656-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 2626, \"height\": 1066}, {\"url\": \"assets/figures/local-pdf/local-20260606-184937226656-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-003.webp\", \"caption\": \"\", \"page\": 4, \"index\": 3, \"width\": 1081, \"height\": 2178}, {\"url\": \"assets/figures/local-pdf/local-20260606-184937226656-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-004.webp\", \"caption\": \"\", \"page\": 5, \"index\": 4, \"width\": 1081, \"height\": 3244}, {\"url\": \"assets/figures/local-pdf/local-20260606-184937226656-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 3903, \"height\": 3950}, {\"url\": \"assets/figures/local-pdf/local-20260606-184937226656-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 3771, \"height\": 3950}]"
motivation: 现有fMRI视觉解码模型无法满足医疗及脑机接口中处理内部生成心理图像的需求。
method: 发布NSD-Imagery数据集（fMRI与心理图像配对），并对多种前沿视觉解码模型进行基准测试。
result: 心理图像重建性能与视觉重建性能脱钩，简单线性解码和多模态特征解码模型泛化更优，复杂模型易过拟合视觉数据。
conclusion: 心理图像数据集对推动脑解码技术实际应用至关重要，NSD-Imagery为促进模型向主动想象场景泛化提供了重要基准。
---

## 摘要
我们发布了NSD-Imagery，一个将人类fMRI活动与心理意象配对的基准数据集，以补充现有的自然场景数据集（NSD），后者是一个大规模fMRI活动与所见图像配对的数据集，曾使fMRI到图像的重建工作取得了前所未有的进步。最近在NSD上训练的模型仅在被看到的图像重建上进行了评估。利用NSD-Imagery，可以评估这些模型在心理意象重建上的表现。这是一个具有挑战性的泛化要求，因为心理意象以相对较低的信噪比和空间分辨率编码在人类大脑活动中；然而，从感知到心理意象的泛化对于医疗领域和脑机接口中的实际应用至关重要，这些应用中所需的信息始终是内部生成的。我们为一系列最近在NSD上训练的开源视觉解码模型（MindEye1、MindEye2、Brain Diffuser、iCNN、Takagi等）在NSD-Imagery上提供了基准，并表明本CVPR论文为开放获取版本，由计算机视觉基金会提供。除本水印外，与已接受版本相同；最终出版的会议论文集可在IEEE Xplore上获取。28852表明，心理意象解码方法的性能在很大程度上与视觉重建的性能脱钩。我们进一步证明，架构选择显著影响跨解码性能：采用简单线性解码架构和多模态特征解码的模型能更好地泛化到心理意象，而复杂架构则倾向于过拟合视觉训练数据。我们的发现表明，心理意象数据集对于开发实际应用至关重要，并将NSD-Imagery确立为一个有用的资源，以更好地使视觉解码方法与这一目标保持一致。

## Abstract
We release NSD-Imagery, a benchmark dataset of human fMRI activity paired with mental images, to complement the existing Natural Scenes Dataset (NSD), a large-scale dataset of fMRI activity paired with seen images that enabled un- precedented improvements in fMRI-to-image reconstruction efforts. Recent models trained on NSD have been evaluated only on seen image reconstruction. Using NSD-Imagery, it is possible to assess how well these models perform on mental image reconstruction. This is a challenging general- ization requirement because mental images are encoded in human brain activity with relatively lower signal-to-noise and spatial resolution; however, generalization from seen to mental imagery is critical for real-world applications in medical domains and brain-computer interfaces, where the desired information is always internally generated. We provide benchmarks for a suite of recent NSD-trained open- source visual decoding models (MindEye1, MindEye2, Brain Diffuser, iCNN, Takagi et al.) on NSD-Imagery, and show This CVPR paper is the Open Access version, provided by the Computer Vision Foundation. Except for this watermark, it is identical to the accepted version; the final published version of the proceedings is available on IEEE Xplore. 28852 that the performance of decoding methods on mental im- ages is largely decoupled from performance on vision recon- struction. We further demonstrate that architectural choices significantly impact cross-decoding performance: models employing simple linear decoding architectures and multi- modal feature decoding generalize better to mental imagery, while complex architectures tend to overfit visual training data. Our findings indicate that mental imagery datasets are critical for the development of practical applications, and establish NSD-Imagery as a useful resource for better aligning visual decoding methods with this goal.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：强相关。该工作直接聚焦于脑解码（fMRI-to-image）和表征对齐（视觉与意象解码性能的关系），同时涉及fMRI表征差异和神经先验对生成的影响。
- **启发与意义**：论文尖锐指出视觉解码性能与心理意象解码性能存在脱钩，警示仅优化图像重建无法保证想象场景的实用泛化，对脑机接口研究具有重要现实意义。
- **可借鉴点**：采用简单线性解码架构和多模态特征（图文混合）的模型在心理意象上泛化更优，可启发设计更鲁棒的脑解码器；同时，构建专门的想象数据基准是评估泛化能力的必要手段。
- **阅读建议**：建议从事脑编码/解码、表征对齐或临床神经影像研究的研究者重点阅读实验设计和“视觉-意象性能脱钩”的分析部分，以指导模型选择和评估范式设计。

## 1. 核心问题与整体含义
- **核心问题**：现有高性能fMRI视觉解码模型均基于**外部输入图像**的脑活动训练，但其在**内部生成的心理意象**上是否能够泛化未知。心理意象具有更低的信噪比、更低的空间分辨率，且编码模式与视觉存在差异，直接应用存在风险。
- **研究动机**：实际应用场景（如意识障碍患者沟通、精神疾病诊断）需要解码内部心理内容，而无法依赖于外部视觉刺激，因此评估并提升从感知到想象的跨条件泛化能力至关重要。
- **整体含义**：该工作通过发布专门的心理意象基准数据集，首次系统评估了主流视觉解码模型在想象条件下的表现，并揭示了“视觉重建好≠想象重建好”的现象，呼吁社区重视想象数据在模型开发中的核心地位。

## 2. 方法论核心思想
- **数据集构建**：基于NSD（Natural Scenes Dataset）的8名受试者，在相同的7T fMRI扫描协议下额外采集三种任务类型的脑活动数据：
  - **视觉任务**：观看图像（与NSD类似）。
  - **意象任务**：仅呈现单字母线索，受试者回忆并生动想象与该线索绑定的图像（18个刺激，含简单几何形状、复杂自然场景和单词概念三类）。
  - **注意任务**（未用于基准评估）。
- **交叉解码范式**：所有模型仅在NSD原始数据（观看自然图像）上训练，然后直接在NSD-Imagery的意象试验上测试，不做任何针对想象的微调，以此来评估泛化能力。
- **评估维度**：
  - **图像特征指标**：像素级相关（PixCorr）、SSIM、AlexNet层间2-way对比准确率、Inception、CLIP分数、EfficientNet距离、SwAV距离，以及早期/高级视觉皮层脑图相关性。
  - **人类行为评估**：通过在线实验让500名人类评分者进行两项任务：1）二选一匹配（重建图是否更像真实图）；2）连续相似度评分（直接比较同一刺激的感知重建与想象重建与真实图的相似性）。
- **对比模型**：MindEye1, MindEye2, Brain Diffuser, iCNN, Takagi et al. (2023) 五个开源模型，涵盖线性回归、扩散先验及不同嵌入空间的方法。

## 3. 实验设计与对比
- **数据集**：
  - 训练集：NSD核心部分（COCO自然图像）。
  - 测试集：NSD-Imagery（同一批受试者的想象与视觉试验，共18个刺激，每种刺激包含视觉和多次想象任务）。
- **基准对比项**：
  - 三种刺激复杂性：简单（方向条、十字）、复杂（自然场景）、概念（单词，想象试验为主）。
  - 视觉试验与想象试验的配对比较。
  - NSD共享1000张测试集的原有性能（作为天花板）。
- **对比方法**：五种已发布模型，均为基于NSD训练的SOTA视觉解码器。
- **实验分组**：
  - 定量指标评估（表1）：每种模型在所有试验上的特征度量。
  - 人类识别精度评估（表2）：二选一任务，跨刺激类型。
  - 分布分析（图5）：跨任务/刺激类型的人类正确率累积分布。
  - 视觉-想象相关分析（图6）：同一刺激下感知与想象重建的相似度评分相关性及拟合斜率。

## 4. 资源与算力
- **本文未明确报告计算资源**。论文着重于数据集发布和模型评测，未提及所用GPU型号、数量或推理时长。模型本身为已发布的开源方法，推测推理过程对算力需求适中，但具体资源未知。

## 5. 实验数量与充分性
- **实验组数**：涵盖5种模型、3种刺激类型、2种任务模态（视觉/想象）、多类特征指标以及大规模人类主观实验，整体实验量较大。
- **充分性与客观性**：
  - **优点**：结合了客观图像度量与人类主观判断，避免了单一指标偏差；多种架构的模型对比揭示了架构对泛化的影响；视觉与想象在同一受试者、同一刺激上的配对比较设计严谨。
  - **局限**：测试刺激仅有18个（简单6个、复杂6个、概念6个），样本量较小，可能导致统计结论不够稳健；概念刺激无真实图像标签，仅进行了定性展示；未对模型进行任何微调或适配想象数据的尝试，只能反映零样本交叉解码性能。
  - 整体上，实验设计公平、客观，但更偏向于“基准测试”而非“全面解决”，其结论在有限刺激集中成立，外推至大规模想象解码仍需验证。

## 6. 主要结论与发现
- **视觉重建与想象重建性能脱钩**：在NSD上视觉重建性能最优的模型（如MindEye2）在心理意象上表现大幅下降，甚至接近随机水平（人类识别准确率仅56.96%），而较简单的MindEye1和Brain Diffuser泛化更好（73%-74%）。
- **简单架构优势**：采用线性回归（如Brain Diffuser的岭回归）和多模态特征（图像+文本）的模型泛化优于复杂、高维嵌入（如ViT-bigG + SDXL unCLIP的MindEye2），表明复杂架构易于过拟合视觉训练数据。
- **刺激复杂度并非主要限制**：想象复杂自然场景的重建质量在某些情况下甚至优于观看简单刺激（如线条）的视觉重建，说明训练分布的一致性比刺激固有复杂度更重要。
- **视觉-想象重建质量存在刺激相关性**：同一刺激的感知重建和想象重建相似度评分存在弱但显著的正相关，提示优化视觉解码器仍可能附带改善想象重建，但提升幅度因模型架构而异。
- **基准数据集价值**：建立了首个可与大规模视觉训练集衔接的想象数据基准，为后续研究提供了标准化的跨条件泛化测试平台。

## 7. 优点
- **填补空白**：首次将心理意象重建纳入大规模视觉解码模型的系统性评估，并公开了数据集，推动了该方向的研究。
- **设计严谨**：多种刺激复杂度、多种模型、主客观指标结合，且受试者内视觉与想象配对比较，减少了受试者差异的混淆。
- **发现深刻**：明确指出了视觉解码性能与想象解码性能脱钩的现象及架构因素，对模型设计具有直接的指导意义。
- **贴近应用**：实验设计（线索回忆、生动度评价）更接近真实脑机接口场景，且对临床场景有直接启发。

## 8. 不足与局限
- **数据集规模小**：仅18个刺激，无法支持大样本下的细粒度分析或模型训练，结论难以推广到更一般的想象内容。
- **模型无适配**：所有模型均为零样本测试，未尝试使用想象数据微调或设计针对低信噪比信号的策略，实际应用潜力或被低估。
- **概念刺激模糊**：概念类意象缺乏真实图像标签，无法定量评估，只能定性观察。
- **信噪比处理未深入**：未对想象数据的低信噪比特性进行专门的去噪或表征增强探索。
- **缺乏时间动态和个体差异分析**：未利用fMRI多时间点信息或受试者间的差异建模。

## 9. (本节已整合至开头研究价值部分)

（完）
