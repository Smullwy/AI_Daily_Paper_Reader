---
title: Re-emergence of orientation coding in primate IT cortex and deep networks reveals functional hubs for visual processing
title_zh: 灵长类IT皮层和深度网络中方向编码的再现揭示了视觉处理的功能枢纽
authors: "Karami, B., Nigam, T., Plewe, S. S., Schwiedrzik, C. M."
date: 2026-06-22
pdf: "https://www.biorxiv.org/content/10.1101/2025.10.23.684240v2.full.pdf"
tags: ["query:fclip"]
score: 10.0
evidence: 灵长类fMRI方向编码与深度网络比较
tldr: 本研究挑战了高效神经编码原则中朝向不应在高阶视觉区冗余表征的假设，通过猕猴fMRI和MVPA发现朝向信息遍布腹侧视觉流，并在IT皮层由对多类刺激响应的体素重新出现，这些体素构成连接增强的功能枢纽，深度神经网络也呈现类似现象，揭示了层级视觉处理中整合低级与高级特征的计算机制。
source: biorxiv
selection_source: fresh_fetch
motivation: 检验朝向信息在高阶视觉皮层（如V4和IT）是否冗余，挑战高效编码原则。
method: 利用猕猴观看全视野光栅的功能磁共振成像结合多体素模式分析，量化整个视觉流的朝向表征。
result: 朝向信息在腹侧视觉流中稳健存在，于IT皮层由多元响应体素编码，这些体素内部及与V1-V4连接更强，类似模式在深度网络复现。
conclusion: IT皮层朝向的重新出现不是冗余，而是由功能多样性及增强连接形成的整合枢纽的计算副产品，可能支持超越物体识别的灵活视觉处理。
---

## 摘要
灵长类视觉系统是一个由脑区组成的层级网络，将视网膜输入转化为丰富的感知。根据高效神经编码原则，已经在早期视觉区表征的基本视觉特征（如方向）不应在V4和颞下皮层（IT）等高级区域被冗余编码。我们通过功能磁共振成像（fMRI）和多体素模式分析（MVPA）在观看全视野光栅的猕猴中量化整个视觉通路的朝向表征，来检验这一假设。与高效编码的预测相反，我们发现从V1到IT皮层的整个腹侧视觉通路中都存在稳健的方向信息。方向信息分布在皮层和表征空间中，尤其是在IT皮层。对面孔、物体和身体有多变量响应的体素比高度类别选择性的体素携带更多的方向信息。它们还显示出IT内部以及与上游区域V1-V4更强的连接性。这些发现表明存在功能性“枢纽”，通过增强的连接性整合低级和高级特征。这一现象推广到具有高大脑相似性的深度卷积神经网络模型，突显了类枢纽单元在处理复杂输入的层级过程中的重要性。总之，我们的结果表明，方向在IT皮层中重新出现并非通过冗余，而是作为功能多样性和连接性的计算副产品，提出了“枢纽”神经元的存在，这些神经元可能支持超越物体识别的灵活、整合性视觉处理。

## Abstract
The primate visual system is a hierarchical network of brain areas that transform retinal inputs into rich percepts. According to efficient neural coding principles, basic visual features such as orientation, which are already represented in early visual areas, should not be redundantly encoded in higher areas like V4 and inferotemporal (IT) cortex. We tested this hypothesis by quantifying orientation representation throughout the entire visual stream using functional Magnetic Resonance Imaging (fMRI) and multivoxel pattern analysis (MVPA) in macaque monkeys watching full-field gratings. Contrary to predictions from efficient coding, we found robust orientation information along the entire visual ventral stream from V1 to IT cortex. Orientation information was distributed in cortical and representational space, especially in IT. Voxels with multivariate responsiveness to faces, objects, and bodies carried more orientation information than highly category-selective voxels. They also displayed stronger connectivity within IT and with upstream areas V1-V4. These finding suggests the existence of functional "hubs" that integrate low- and high-level features through enhanced connectivity. This phenomenon generalized to deep convolutional neural network models with high brain similarity, underscoring the importance of hub-like units in hierarchical processing of complex inputs. Together, our results show that orientation re-emerges in IT cortex not through redundancy but as a computational byproduct of functional diversity and connectivity, propounding the existence of "hub" neurons that may support flexible, integrative visual processing beyond object recognition.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与“脑解码”“fMRI表征”“表征对齐”高度相关，直接涉及腹侧视觉流的层级表征编码和解码分析。
- **启发与意义**：揭示了IT皮层中方向编码并非冗余，而是由多元响应“枢纽”体素通过增强连接实现的功能整合，为层级表征理论提供了新证据和假设。
- **可借鉴点**：MVPA解码与功能连接、DCNN梯度分析的组合方法可用于验证大脑编码的分布与映射，尤其有助于表征对齐和神经先验的建模。
- **阅读建议**：建议关注其对多功能枢纽假说的计算建模思路，以及使用多体素增量解码和连接差异来区分表征分布与集中编码的分析策略。

## 1. 论文的核心问题与整体含义
- **问题**：高效神经编码原则认为，早期视觉区已编码的方向信息不应在高级视觉区（如V4、IT）冗余出现。本文试图检验方向表征是否确实在腹侧视觉流中消失，还是以某种形式重新出现。
- **整体含义**：研究证明方向信息遍及从V1到IT的整个视觉流，并在IT中以分布式、多元响应的“枢纽”形式重新出现，这种枢纽通过增强的连接整合低级与高级特征，并可在类脑深层网络中复现，暗示这可能是一种层级计算的通用策略。

## 2. 论文提出的方法论
- **核心思想**：利用fMRI多体素模式分析（MVPA）直接解码光栅刺激的方向，结合空间聚类、功能连接和深度网络分析，揭示方向编码的层级组织和功能角色。
- **关键技术细节**：
  - 预处理：GLM回归剔除眼动、头动、奖励等协变量，SVM线性分类器对两个对角线方向（45°和135°）进行解码。
  - 表征分布分析：按单体素方向信息（绝对t值）排序，逐步增加体素形成解码曲线，度量“信息分布距离”（解码达到峰值的体素比例减去显著体素比例），距离越大表示信息越分散。
  - 空间聚类：对显著体素按三维邻接聚类，计算簇数目和标准化簇大小，并采用大小匹配随机抽样进行统计比较。
  - 功能连接：在空白屏期间计算体素间的z变换Pearson相关，分“top2top”“downtop”“uptop”“all”四类连接，并检验连接差异。
  - 信息转换：将上游显著体素与其下游最连接体素一对一映射，训练上游SVM并测试下游，评估跨区信息传递。
  - 深度网络分析：选取Brain-Score>0.5的17个DCNN，对其倒数第二层单元按FOB类别响应聚类，计算方向信息（两光栅响应的绝对差），并用梯度敏感度（对上游激活的偏导数之和）评估上游影响。

## 3. 实验设计
- **数据集/被试**：两只成年雄性猕猴（Macaca mulatta），3T fMRI采集。
- **视觉刺激**：
  - 方向映射：全视野Gabor光栅（空间频率2 cpd），对角线方向45°与135°，块设计，被动注视。
  - Retinotopic mapping：旋转楔形和扩展环检查板。
  - FOB局部器：面孔、无头身体、人造物体、水果、相位打乱图像块。
- **比较与基准**：
  - 视觉区ROIs：V1, V2, V3, V4, TEO, TE，并分组为早期、中期、晚期阶段。
  - 控制区：MT、LIP、外侧前额叶（lPFC），验证解码特异性。
  - DCNN比较：17种高脑相似度预训练模型，与猴IT行为/神经数据的相似度。
  - 连接性对比：纯类别、双类别、混合响应、无响应体素之间的连接及上游影响。
- **基准对比**：采用标签置换检验（1000次）评估解码显著性；大小匹配随机采样评估空间集群差异；功能连接结果与随机抽样非显著体素比较。

## 4. 资源与算力
- **算力描述**：文中未明确提及训练DCNN的GPU型号、数量或训练时长。所用的17个DCNN均为预训练模型（ImageNet），仅在推理和梯度分析时使用，未进行额外训练。fMRI数据处理未提及特定计算资源需求，但提到使用了GWDG科学计算集群。因此，无法给出具体的算力消耗。

## 5. 实验数量与充分性
- **实验数量**：
  - 两只猴，每只猴采集方向映射运行60次（猴R）和15次（猴P），FOB局部器运行60次和51次，极性角和偏心率映射分别多次。
  - MVPA解码使用100次交叉验证，统计检验使用1000次置换。
  - 空间聚类和连通分析在三个处理阶段间进行，并包含15对区域的信息传递分析。
  - 深度网络分析涉及17个模型，每个模型均独立提取单元响应并聚类。
- **充分性评估**：实验设计涵盖从早期到高级区的全流程，控制区域、多种统计检验、随机采样和置换检验保证了结果的客观性。两只猴结果一致性高，且与DCNN复现相互印证。但仍属小样本灵长类研究，且仅使用单一空间频率刺激，部分区域（如V3）未达显著性，可能影响推广性。

## 6. 论文的主要结论与发现
- 方向信息从V1到IT皮层均可被显著解码，在整个腹侧流中稳健存在。
- 表征空间上，方向信息在高级区更分散（依赖大量弱选择性体素），而非集中；皮层组织呈现“沙漏形”，中期区（V3/V4）集群最大，IT又变得分散。
- IT中，对多类物体（脸、体、物）混合响应的体素携带的方向信息显著高于类别选择性强的体素。
- 这些混合响应体素与前级视觉区及IT内部的功能连接更强，构成“功能枢纽”网络。
- 仅在V1→V2检测到显著的线性信息传递，其他区域对可能因非线性变换未被检测到。
- 在17个脑相似度高的DCNN中，倒数第二层也观察到混合响应单元携带更多方向信息，且部分模型呈现类似的上游影响力梯度，但残差型架构（ResNet等）表现相反，提示架构差异。

## 7. 优点
- 直接使用简单光栅刺激测量方向响应，避免了通过复杂物体图像间接推断的混淆。
- 结合单变量与多变量分析，从表征分布、空间集群、功能连接三个维度综合揭示方向信息的层级组织。
- 将猴脑发现与深度网络进行比较，并分析了不同网络架构的影响，提供了计算解释。
- 提出了“功能枢纽”假说，为理解高级皮层中低级特征的再表征提供了新框架。

## 8. 不足与局限
- 仅使用了单一空间频率（2 cpd）和全视野光栅，可能遗漏了调谐于其他频率或具有强周边抑制的神经元群体。
- 样本量小（两只猴），结果普适性有待验证。
- 功能连接以相关性度量，尽管控制了刺激驱动的共激活，但仍可能受到生理噪声或公通路输入的影响。
- 解码分析虽多，但跨区信息传递仅在V1-V2显著，无法完全揭示与IT间的通信机制。
- DCNN分析基于预训练分类网络，未直接模拟方向任务，其类比的可推广性需谨慎。

## 9. 主要结论
- IT皮层的方向响应并非冗余，而是功能多样性高、连接性强的混合响应单元构成的计算副产品，这些单元可能作为“枢纽”支持灵活的视觉处理和泛化能力。

（完）
