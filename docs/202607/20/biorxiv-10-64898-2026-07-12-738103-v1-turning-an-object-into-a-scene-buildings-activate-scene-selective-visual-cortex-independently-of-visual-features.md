---
title: "Turning an object into a scene: buildings activate scene-selective visual cortex independently of visual features"
title_zh: 将物体变为场景：建筑物独立于视觉特征激活场景选择性视觉皮层
authors: "Zhao, Y., Hagen, S., Peelen, M. V."
date: 2026-07-17
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.12.738103v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: fMRI研究建筑物激活场景选择皮层
tldr: 人类视觉皮层中，建筑物和场景存在响应重叠，传统认为源于共享的视觉特征，但本研究提出建筑物可能通过联想空间感独立激活场景表征。通过使EEG和fMRI对比建筑物与视觉匹配盒子，发现晚期神经反应可区分二者，且该分类器泛化至场景与椅子，时间上落后于场景反应，并在PPA区得到印证，表明建筑物选择性可独立于视觉特征，可能源于联想过程。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738103-v1/fig-001.webp\", \"caption\": \"\", \"page\": 8, \"index\": 1, \"width\": 1413, \"height\": 1014}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738103-v1/fig-002.webp\", \"caption\": \"\", \"page\": 13, \"index\": 2, \"width\": 1432, \"height\": 1083}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738103-v1/fig-003.webp\", \"caption\": \"\", \"page\": 24, \"index\": 3, \"width\": 1420, \"height\": 885}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738103-v1/fig-004.webp\", \"caption\": \"\", \"page\": 30, \"index\": 4, \"width\": 1430, \"height\": 597}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738103-v1/fig-005.webp\", \"caption\": \"\", \"page\": 35, \"index\": 5, \"width\": 1429, \"height\": 1431}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-12-738103-v1/fig-006.webp\", \"caption\": \"\", \"page\": 38, \"index\": 6, \"width\": 1428, \"height\": 1073}]"
motivation: 探究建筑物对场景选择性皮层的激活是否独立于共享的视觉特征，转而反映高层联想加工。
method: 利用EEG和超快fMRI，比较建筑物与视觉特征严格匹配的盒子所诱发的神经反应，并结合场景选择性反应的解码与时间泛化分析。
result: 建筑物与盒子在刺激后360毫秒开始出现可解码的差异，该分类器能泛化至场景与椅子的区分，且建筑物反应晚于场景反应约130毫秒，PPA区也表现出类似延迟、延长的建筑物选择性反应。
conclusion: 视觉皮层对建筑物的选择性可以独立于视觉特征产生，这可能源自建筑物与场景（或空间）的联想过程，而非单纯基于低级视觉特征的重叠。
---

## 摘要
人类视觉皮层包含对场景和大型物体（尤其是建筑物）选择性反应的区域。建筑物和场景之间的皮层重叠被归因于共享的视觉特征（例如，主方向、直线性）。替代解释认为，建筑物可能间接激活场景表征，独立于特定的视觉特征，例如因为建筑物唤起空间感。在这里，我们通过比较人类参与者（两性）对建筑物和视觉匹配的盒子的EEG和fMRI反应，并将这些反应与场景选择性反应联系起来，测试了这种特征独立激活。建筑物和盒子在样本间使用基于图像的度量、深度神经网络和知觉相似性任务进行了匹配。时间分辨EEG解码显示，从刺激出现后360毫秒开始，建筑物和盒子引起了可区分的反应，这与前馈视觉特征处理不一致。重要的是，建筑物-盒子分类器泛化到区分场景和椅子，为建筑物和场景之间的表征重叠提供了EEG证据。时间泛化分析进一步显示，晚期建筑物选择性反应对应于较早的场景选择性反应，时间偏移约130毫秒。最后，超快fMRI（TR=140毫秒）揭示，这些发现反映在场景选择性海马旁回位置区（PPA）的反应中，该区域同样表现出特征独立的建筑物选择性反应，相对于场景选择性反应延迟并延长。这些结果通过表明这种选择性可以独立于视觉特征产生，可能反映了建筑物和场景（或空间）之间的联想过程，从而澄清了视觉皮层中建筑物选择性的本质。

## Abstract
Human visual cortex contains regions that selectively respond to both scenes and large objects, particularly buildings. The cortical overlap between buildings and scenes has been attributed to shared visual features (e.g., cardinal orientations, rectilinearity). Alternative accounts propose that buildings may also activate scene representations indirectly, independently of specific visual features, for example because buildings evoke a sense of space. Here, we tested for such feature-independent activation by comparing EEG and fMRI responses in human participants (both sexes) to buildings and visually-matched boxes, and relating these responses to scene-selective responses. Buildings and boxes were matched, across exemplars, using image-based metrics, deep neural networks, and a perceptual similarity task. Time-resolved EEG decoding showed that buildings and boxes evoked discriminable responses from 360ms post-stimulus onset, incompatible with feedforward visual feature processing. Importantly, the building-box classifier generalized to discriminate scenes from chairs, providing EEG evidence for a representational overlap between buildings and scenes. Temporal generalization analyses further showed that the late building-selective response corresponded to an earlier scene-selective response, with a temporal offset of ~130ms. Finally, ultra-fast fMRI (TR=140ms) revealed that these findings were mirrored in the response of the scene-selective parahippocampal place area (PPA), which similarly showed a feature-independent building-selective response that was delayed and prolonged relative to the scene-selective response. These results clarify the nature of building selectivity in visual cortex by showing that this selectivity can arise independently of visual features, putatively reflecting associative processes between buildings and scenes (or space).

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：强相关。本文直接探讨视觉皮层的类别选择性表征及解码，与你关注的“brain decoding”、“fMRI representation”和脑区功能组织对齐高度契合。
- **启发与意义**：该研究为“类别选择性可由非视觉特征驱动”提供了直接神经证据，强调了皮层功能组织中的联想与反馈机制重要性，这为构建更符合生物真实性的编码/解码模型提供了新的视角。
- **可借鉴点**：可借鉴其精密的“视觉特征匹配”控制逻辑和跨模态（EEG、快速fMRI）时间动力学分析方法，用于验证或约束其他领域（如多视图学习）的神经先验合理性。
- **阅读建议**：重点阅读其EEG解码泛化与fMRI的血流动力学延迟分析部分，思考其“视觉皮层接收非视觉反馈”的结论对你研究“representation alignment”中脑区间信息流动假设的潜在影响。

## 1. 论文的核心问题与整体含义
- **核心问题**：试图澄清人类腹侧视觉皮层中，对建筑物（一类大型物体）与场景的选择性神经反应重叠的根本原因。传统观点认为这种重叠主要由共享的低/中级视觉特征（如直线性、主方向）驱动，但本文试图验证另一种假设：建筑物能独立于这些视觉特征，间接地激活场景表征（可能是通过唤起空间感）。
- **整体含义**：该研究揭示，视觉皮层对特定类别的选择性至少可以部分地解耦于视觉特征的前馈加工。这表明类别选择性也可能源自物体识别后由下游功能特异性网络（如导航相关网络）发起的联想或反馈过程，挑战了单纯由自下而上视觉特征驱动的皮层组织理论。

## 2. 论文提出的方法论
- **核心思想**：通过构建一个视觉特征被严格控制的刺激集合（建筑物与视觉匹配的盒子），来分离视觉特征加工与高级概念/联想加工对神经反应的贡献。如果两者能引发不同的神经反应，且在时间上延迟，则可归因于特征无关的高级过程。
- **关键技术细节与算法流程**：
    - **刺激控制**：为8个建筑物样本逐一匹配了形状、视角相似的盒子图片，并通过图像度量、深度神经网络（AlexNet）激活和纹理统计模型验证了视觉特征在类别间的匹配度。
    - **EEG解码**：采用 **“留一对样本”（Leave-one-pair-out）交叉验证**，训练分类器在排除特定视觉特征对后，仍能区分“建筑物 vs. 盒子”，确保解码不依赖于特定样本间的图像差异。在目标时间点上的解码性能使用曲线下面积（AUC ROC）度量。
    - **交叉解码与时间泛化**：训练“建筑物 vs. 盒子”的分类器，在“场景 vs. 椅子”上测试，以建立表征重叠。通过**时间泛化矩阵**，量化建筑物选择性反应模式相对于场景选择性模式的时间偏移。
    - **超快fMRI分析**：通过将扫描层数减少至6层以覆盖海马旁回位置区（PPA），实现TR=140ms的超快采样。对条件性的血氧水平依赖（BOLD）响应曲线拟合单一Gamma函数，估计峰值振幅、达峰时间（TTP）和半高全宽（FWHM），以量化血流动力学的时间动态。

## 3. 实验设计
- **数据集/场景**：
    - **行为实验**：独立样本（45名参与者，最终纳入40名），采用“异类视觉搜索”任务，用以测量8个建筑物和8个盒子之间两两的知觉相似性距离矩阵。
    - **EEG实验**：新样本（36名参与者，最终纳入32名），呈现的建筑、盒子、场景、椅子图像叠加在相位打乱背景上，采用64导联记录。
    - **fMRI实验**：新样本（34名参与者，最终纳入30名），采用超快序列（TR=140ms）扫描定位到的双侧海马旁回位置区（PPA）。
- **Benchmarks与对比方法**：
    - **基本对比**：对比条件为“建筑物 vs. 视觉匹配的盒子”（非固定特征差异）与“场景 vs. 椅子”的神经响应。
    - **对比逻辑**: 通过“建筑物 vs. 盒子”分类器在“场景 vs. 椅子”上的泛化能力，以及时间动力学上建筑物反应滞后于场景反应的结果，对比论证表征的重叠与间接激活本质。
    - **控制方法**：图像层面控制（轮廓、空间频率、亮度、直线性），知觉相似性控制（行为实验等效性验证）。

## 4. 资源与算力
- 文中未提及用于图像分析或数据处理的明确GPU型号、数量及训练时长。EEG和fMRI数据分析主要依赖标准的统计和机器学习工具箱（MNE, scikit-learn, FSL），不包含需要大规模算力的大模型训练。

## 5. 实验数量与充分性
- 研究包含了**3个主要实验**：1个行为实验，1个EEG解码实验和1个超快fMRI实验。各项实验使用独立大样本，从感知、毫秒级神经电活动、至毫米级脑区血流动力学三个层面构成交叉验证体系。
- 实验设计**非常充分且客观公平**。关键在于对“特征无关”的论证逻辑严谨，通过行为匹配、图像分析、跨样本交叉验证、跨类别解码泛化及时间延迟分析的多重证据链排除了视觉特征的解释，确保了结论的稳健性。

## 6. 论文的主要结论与发现
- **晚期特征无关的神经编码**：EEG解码表明，建筑物与视觉匹配的盒子在刺激后约 **360 毫秒** 才开始出现可区分的神经反应模式，远晚于典型的前馈视觉特征处理窗口（通常<250ms），表明这是一种独立于视觉特征的高层反应。
- **建筑物与场景的表征重叠**：训练于“建筑物 vs. 盒子”的分类器，能成功泛化用于解码“场景 vs. 椅子”，首次在EEG层面提供了两者表征重叠的证据。
- **间接的时间加工序列**：时间泛化分析揭示，表征重叠存在约 **130 毫秒** 的时间偏移，即建筑物选择性反应（峰值约398ms）晚于场景选择性反应（峰值约266ms）。这表明建筑物首先被识别为物体，随后才间接激活了场景相关的神经表征。
- **PPA区的时间动力学印证**：超快fMRI证实，场景选择性PPA区对建筑物的反应不仅振幅更高，且其血氧水平依赖（BOLD）响应的达峰时间和半高全宽（FWHM）相较于场景刺激显著延迟（∆TTP ~150ms）和延长（∆FWHM ~630ms），与EEG的时序逻辑一致。

## 7. 优点
- **严格的实验控制**：创造了高度匹配的“建筑物-盒子”刺激对，并通过行为指标、图像度量及深度神经网络模型从多维度确认了知觉和视觉特征的类别间匹配，是论证“特征独立性”的基石。
- **多模态、多层次证据链**：结合行为学、高时间分辨率EEG解码和超快fMRI，从感知、神经活动时间进程到特定脑区的血流动力学响应，完整且自洽地揭示了建筑物间接激活场景表征的神经机制。
- **精巧的分析方法**：采用“留一对样本”解码、跨类别（建筑物-盒子 / 场景-椅子）交叉解码与时间泛化分析，将解码性能的推断从简单的分类提升到了对表征内容和动态过程的解析层次。

## 8. 不足与局限
- **类别选择的局限性**：仅对比了“建筑物”和“盒子”，虽代表“大型/稳定对象”与“小型/可操作对象”的极端对比，但结论是否普适到所有大型/空间定义物体（如家具）仍有待检验。
- **fMRI时间解析度的限制**：尽管TR=140ms，血氧水平依赖（BOLD）响应本身的血流动力学滞后和模糊特性使其解析时间延迟的精度有限（百毫秒级），更多是提供与EEG一致的定性而非精确时间痕迹。
- **因果性推断缺失**：实验揭示了时间上的先后次序和功能上的泛化，但并未通过干预手段（如TMS）直接证明“物体识别通路”对“场景表征区”的因果性驱动。
- **联想机制的推测性**：将延迟激活解释为“联想”或“空间感唤起”是基于前人文献的合理推测，但本研究并未直接测量或操纵“空间感”的强度。

## 9. （完）
