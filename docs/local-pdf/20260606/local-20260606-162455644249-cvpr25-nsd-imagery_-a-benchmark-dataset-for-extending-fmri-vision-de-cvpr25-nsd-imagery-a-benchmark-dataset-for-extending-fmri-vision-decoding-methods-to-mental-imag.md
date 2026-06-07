---
title: CVPR25 NSD-Imagery_ A Benchmark Dataset for Extending fMRI Vision Decoding Methods to Mental Imagery
title_zh: CVPR25 NSD-Imagery：将fMRI视觉解码方法扩展到心象的基准数据集
authors: Reese Kneeland; Paul S. Scotti; Ghislain St-Yves; Jesse Breedlove; Kendrick Kay; Thomas Naselaris
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-162455644249-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 3.0 订阅评分
score_label: 订阅评分
evidence: 多被试心理意象fMRI脑表征基准数据集
tldr: 本研究发布NSD-Imagery数据集，提供fMRI心理意象数据以补充现有自然场景数据集。旨在评估从观察到想象的视觉解码泛化能力，解决心理意象信噪比低、重建难的问题。在多个开源模型上测试发现，简单线性解码结构泛化更优，复杂模型易过拟合，心理意象解码性能与视觉重建性能脱钩，为脑机接口等应用提供关键基准。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-162455644249-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 2500, \"height\": 1306}, {\"url\": \"assets/figures/local-pdf/local-20260606-162455644249-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 2626, \"height\": 1066}, {\"url\": \"assets/figures/local-pdf/local-20260606-162455644249-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-003.webp\", \"caption\": \"\", \"page\": 4, \"index\": 3, \"width\": 1081, \"height\": 2178}, {\"url\": \"assets/figures/local-pdf/local-20260606-162455644249-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-004.webp\", \"caption\": \"\", \"page\": 5, \"index\": 4, \"width\": 1081, \"height\": 3244}, {\"url\": \"assets/figures/local-pdf/local-20260606-162455644249-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 3903, \"height\": 3950}, {\"url\": \"assets/figures/local-pdf/local-20260606-162455644249-cvpr25-nsd-imagery_-a-benchmark-dataset-for-extending-fmri-vision-de/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 3771, \"height\": 3950}]"
motivation: 将fMRI视觉解码从感官输入扩展到心理意象，对医疗和脑机接口等实际应用至关重要，但心理意象信号质量差且解码困难。
method: 发布NSD-Imagery基准数据集，并在MindEye等近年NSD训练的视觉解码模型上评估跨解码性能。
result: 心理意象解码性能与视觉重建性能并非线性相关，简单线性解码与多模态特征解码泛化更好，复杂架构则过拟合视觉数据。
conclusion: 构建心理意象基准数据集是推动实用解码技术发展的关键，NSD-Imagery为对齐视觉解码方法与应用目标提供了重要资源。
---

## 摘要
我们发布了NSD-Imagery，一个配对被试fMRI活动与心象的基准数据集，以补充现有的自然场景数据集（NSD），后者是一个配对被试fMRI活动与所见图像的大规模数据集，曾在fMRI到图像的重建任务上带来了前所未有的提升。近期基于NSD训练的模型仅在所见图像重建任务上进行了评估。借助NSD-Imagery，可以评估这些模型在心象重建上的表现。这是一个具有挑战性的泛化要求，因为心象在人脑活动中的编码具有相对较低的信噪比和空间分辨率；然而，从视觉到心象的泛化对于医学领域和脑机接口的实际应用至关重要，在这些应用中，所需信息总是由内部生成的。我们为一系列近期基于NSD训练的开源视觉解码模型（MindEye1、MindEye2、Brain Diffuser、iCNN、Takagi等人）在NSD-Imagery上提供了基准测试，并表明解码方法在心象上的表现与其在视觉重建上的表现在很大程度上是解耦的。我们进一步证明，架构选择显著影响跨解码性能：采用简单线性解码架构和多模态特征解码的模型能更好地泛化到心象，而复杂架构则倾向于过拟合视觉训练数据。我们的发现表明，心象数据集对于开发实际应用至关重要，并将NSD-Imagery确立为一个有用的资源，以更好地使视觉解码方法与这一目标对齐。

## Abstract
We release NSD-Imagery, a benchmark dataset of human fMRI activity paired with mental images, to complement the existing Natural Scenes Dataset (NSD), a large-scale dataset of fMRI activity paired with seen images that enabled un- precedented improvements in fMRI-to-image reconstruction efforts. Recent models trained on NSD have been evaluated only on seen image reconstruction. Using NSD-Imagery, it is possible to assess how well these models perform on mental image reconstruction. This is a challenging general- ization requirement because mental images are encoded in human brain activity with relatively lower signal-to-noise and spatial resolution; however, generalization from seen to mental imagery is critical for real-world applications in medical domains and brain-computer interfaces, where the desired information is always internally generated. We provide benchmarks for a suite of recent NSD-trained open- source visual decoding models (MindEye1, MindEye2, Brain Diffuser, iCNN, Takagi et al.) on NSD-Imagery, and show This CVPR paper is the Open Access version, provided by the Computer Vision Foundation. Except for this watermark, it is identical to the accepted version; the final published version of the proceedings is available on IEEE Xplore. 28852 that the performance of decoding methods on mental im- ages is largely decoupled from performance on vision recon- struction. We further demonstrate that architectural choices significantly impact cross-decoding performance: models employing simple linear decoding architectures and multi- modal feature decoding generalize better to mental imagery, while complex architectures tend to overfit visual training data. Our findings indicate that mental imagery datasets are critical for the development of practical applications, and establish NSD-Imagery as a useful resource for better aligning visual decoding methods with this goal.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：该工作与脑解码（brain decoding）、fMRI表征及神经先验直接相关，聚焦从视觉感知到内部心象的跨状态泛化。
- **启发与意义**：揭示了现有高性能视觉解码模型在心象上的性能并不线性继承，架构选择（简单线性 vs. 复杂网络）是决定跨解码成败的关键。
- **可借鉴点**：构建一个与大规模视觉数据集完全对齐的心象基准，采用多模态特征解码与简单回归管道，可显著提升面向内部状态的泛化能力。
- **阅读建议**：适合关注fMRI‑to‑Image重建与脑机接口应用的研究者；可优先阅读关于不同模型架构泛化差异及人类评分分析的部分。

## 1. 核心问题与整体含义
- 现有的大规模fMRI视觉解码数据集（如NSD）只包含被动观看的图像响应，无法评估模型对内部生成的心像的重建能力。
- 心像的脑活动信噪比更低、空间分辨率更差，但从视觉向心像的泛化对医学诊断、脑机接口等真实场景至关重要。
- 这篇文章的核心是：发布首个与NSD对齐的心像基准数据集NSD‑Imagery，并在其上系统测试前沿视觉解码模型，考察视觉到心像的跨解码能力，揭示性能解耦与架构影响。

## 2. 提出的方法论
- **数据集构建**：对原始NSD的8名被试追加7T fMRI扫描，设计了三种任务（视觉、心像、注意）× 三种刺激复杂度（简单几何形状、复杂自然场景、单词语义概念）共12个run，收集576个试次。
- **刺激与任务设计**：被试需在扫描前记忆18个刺激‑提示字母对；视觉试次呈现图像与字母，心像试次仅呈现字母并要求在框架内想象对应内容。
- **跨解码范式**：不另训练新模型，而是直接使用已在NSD（观看数据）上训练好的5个代表性解码模型（MindEye1、MindEye2、Brain Diffuser、iCNN、Takagi et al.），将心像fMRI响应作为输入，通过预训练CLIP/扩散模型生成重建图像。
- **评估体系**：结合低层/高层图像特征指标（PixCorr、SSIM、AlexNet、CLIP、Inception、EffNet、SwAV）、脑皮层相关度（早期/高级视觉区）以及大规模人类行为实验（识别准确率、连续相似度评分），综合判断重建质量。

## 3. 实验设计
- **数据集与场景**：使用NSD‑Imagery中的12个视觉试次（简单6个+复杂6个）和18个心像试次（增加6个概念刺激），受试仅限完成全NSD的sub‑1,2,5,7。
- **对比基准**：将模型的视觉试次重建性能与原始NSD共享1000测试集的性能进行比较，并重点分析心像试次上的跨解码表现。
- **对比方法**：选取5种基于深度生成模型的最新视觉解码方法，涵盖简单到复杂架构（Brain Diffuser → MindEye1 → MindEye2 → iCNN → Takagi方法），所有模型均使用作者开源代码，每个刺激采样10次选最佳。
- **人类行为实验**：
  - 实验一 ：500名人类评分者进行二选一识别任务，判断重建图像与真实目标是否更相似。
  - 实验二 ：评分者对同一刺激的视觉重建与心像重建进行连续相似度打分，分析两者相关性。

## 4. 资源与算力
- 文中未明确说明训练或推理所使用的GPU型号、数量及训练时长；其主要贡献在于数据集发布与基准评估，所有解码模型均为已训练好的开源实现直接进行推理，因此未单独报告算力开销。

## 5. 实验数量与充分性
- 定性展示：不同方法对12个视觉刺激和18个心像刺激的最佳重建对比图（包含简单、复杂、概念三类）。
- 定量指标：表1完整列出5种方法在NSD‑Imagery视觉试次、心像试次及原始NSD测试集上的8项特征度量和3项脑相关性得分，并附有简单/复杂/概念的分项结果（附录）。
- 人类评分：识别准确率（表2）跨方法、跨刺激类型，并绘制累积分布图（图5）；相似度评分直接比较视觉‑心像重建相关性（图6）。
- 附加分析：脑皮层相关度在不同视觉区变化的分析，印证空间分辨率下降。
- 实验充分且客观：采用相同采样策略与开源模型，避免数据泄露；多种指标互补，人类评分减少指标偏差，结论稳健。

## 6. 主要结论与发现
1. **性能解耦**：视觉重建强的方法（如MindEye2）在心像上表现可能极差，视觉与心像重建性能并非线性正相关。
2. **架构决定泛化**：采用简单线性解码与多模态特征（如Brain Diffuser的ridge回归+图文双特征）泛化更好；复杂高维嵌入模型（如MindEye2的ViT‑bigG）在心像低SNR下崩溃。
3. **刺激分布比复杂度影响更大**：复杂自然场景的心像重建甚至可优于简单的棒状视觉重建，表明训练分布对齐是当前恢复质量的主要瓶颈。
4. **跨解码可行性**：即使未针对心像微调，部分模型已能产生可被人类准确识别的重建，证明视觉‑心像表征存在足够重叠，且基准数据集对此评估不可或缺。

## 7. 优点
- **首创对齐基准**：首次提供与NSD共享被试、扫描参数严格一致的心像数据集，可直接复用NSD训练的任意模型进行泛化测试。
- **系统对比与洞察**：在统一的基准上比较5种主流方法，清晰揭示复杂架构的过拟合风险与简单架构的泛化优势，为未来架构设计提供直接指引。
- **多重证据链**：融合自动化特征指标、脑皮层响应拟合度及大规模人类行为实验，确保结论不依赖单一不完美的度量。
- **推动实用方向**：明确心像解码对脑机接口与临床诊断的意义，并公开数据，加速研究社区从“视觉重建”向“内部状态解码”的转化。

## 8. 不足与局限
- **数据规模极小**：仅18个刺激且只有4名受试可用，无法进行大规模心像训练或细分个体差异，跨解码是唯一选项，限制了直接优化心像解码模型的可能性。
- **真实心像不确定性**：心像内容由被试主观生成，可能与提示刺激存在偏差，评估时用提示刺激作“真值”会引入误差。
- **模型先验局限**：所有方法均依赖在大规模自然图像上预训练的扩散模型，对简单几何刺激和概念刺激泛化较弱，可能低估心像本身的可解码性。
- **未涵盖专用心像模型**：仅测试了从视觉数据训练的模型，未探索加入心像数据微调或专门为低SNR信号设计的表达与先验。
- **应用法律伦理**：虽提及需建立伦理框架，但当前研究尚未涉及隐私防护或防滥用技术。

## 9. 研究价值与阅读建议
已作为第一节单独呈现，详见前文“研究价值与阅读建议”部分。

（完）
