---
title: "From stuff to things: Responses of neurons in macaque V4 to textures and objects"
title_zh: 从纹理到物体：猕猴V4区神经元对纹理和物体的反应
authors: "Lieber, J. D., Oleskiw, T. D., Palmieri, L., Simoncelli, E. P., Movshon, J. A."
date: 2026-07-09
pdf: "https://www.biorxiv.org/content/10.1101/2024.02.20.581273v3.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 猕猴V4区对视觉物体的神经响应
tldr: 为探究物体识别在视觉皮层的起源，本研究使用从纹理到照片的连续变化图像，记录猕猴V4区神经元响应。发现神经元群体对照片的响应动态范围更大，能更可靠地区分照片与打乱图像，且物体选择性呈现出缓慢、持久的动态特性，提示V4区可能通过循环机制构建物体形状选择性。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-02-20-581273-v3/fig-003.webp\", \"caption\": \"Figure 1. Creating a continuum from scrambled textures to photographic images. A) We cropped four distinct shifted subimages from each source image. These subimages were overlapping, and contained the same central features. B) We used the Portilla-Simoncelli texture model to scramble image features within local pooling regions (red circles). When a single pooling region covered the image (top) the content of the image was fully scrambled. When multiple smaller pooling regions covered the image (bottom), features within each pooling region were scrambled locally, and the image retained some of the global structure of the original. C) By varying the size of the pooling regions used in the image synthesis algorithm, we created a continuum of images between scrambled textures and the original images. We used 5 pooling region sizes across our 6.4 degree diameter image: 6.4, 3.2, 2.1, 1.6, and 1.1 degrees. Images smoothly transitioned from scrambled textures (left) to original photographic images of objects (right).\", \"page\": 14, \"index\": 3, \"width\": 979, \"height\": 970}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-02-20-581273-v3/fig-007.webp\", \"caption\": \"Figure 2: V4 neurons respond with greater dynamic range to photographs than to scrambled textures. A) Modulation indices of 211 neurons computed separately for 20 image families originating from two image sets: 10 from the “Botswana” images (top) and 10 from the “Reachspace” images (bottom). Within each set, both image families and neurons are ordered from highest to lowest modulation index, averaged over all points (top to bottom, and left to right, respectively). B) Distribution of the modulation indices of individual neurons, calculated on responses averaged across all image families. Neurons with modulation indices that are significantly different from 0 (p<0.05) are labeled in dark grey. Nearly as many neurons were significantly positively modulated (N=56, p<0.025) as significantly negatively modulated (N=59, p<0.025). The red line denotes the population average (MI=-0.004). C) Normalized firing rates plotted against the rank of image family drive. Ranks were computed separately for each neuron as a cross-validated measurement. Error bars denote standard errors across neurons and shifts. Strongly driven (highly ranked) families are modulated positively (preferring photographs) and weakly driven families are modulated negatively (preferring scrambled images). D) Distribution of individual neuron Pearson correlations between the average drive to an image family (averaged over both photographic and scrambled images) and that family’s scrambling difference (the difference between photographic and scrambled responses). Neurons with correlations significantly greater than 0 are labeled in dark grey (49/211, p<0.05). The red line denotes the median neuronal correlation (r=0.209). Most neurons had positive correlations, meaning that the image families that most strongly drove a neuron also tended to be positively modulated.\", \"page\": 16, \"index\": 7, \"width\": 979, \"height\": 411}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-02-20-581273-v3/fig-005.webp\", \"caption\": \"Figure 3: V4 neurons discriminate photographic scenes from their scrambled counterparts. Distributions of neuronal discriminabilities between paired photographic and scrambled images, either for neurons that prefer scrambled images (left) or photographic images (right). Discriminabilities are defined as positive for both populations. The red lines denote population medians (scramble d’=0.108, photographic d’=0.105).\", \"page\": 17, \"index\": 5, \"width\": 492, \"height\": 271}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-02-20-581273-v3/fig-004.webp\", \"caption\": \"Figure 4: V4 populations discriminate photographic scenes from their scrambled counterparts. A) Discriminability of neuronal population responses (N=105 neurons) between fully scrambled image\", \"page\": 18, \"index\": 4, \"width\": 948, \"height\": 234}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-02-20-581273-v3/fig-006.webp\", \"caption\": \"Figure 5: Foveal V4 is more sensitive to fine-scale scrambling than peripheral V4.\", \"page\": 20, \"index\": 6, \"width\": 975, \"height\": 564}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-02-20-581273-v3/fig-002.webp\", \"caption\": \"Figure 6: V4 discriminates photographic scenes more reliably than their scrambled\", \"page\": 22, \"index\": 2, \"width\": 979, \"height\": 976}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-02-20-581273-v3/fig-001.webp\", \"caption\": \"Figure 7: A model of perceptual discriminability (DISTS) predicts V4 population responses. A) Neural distances, measured between pairs of V4 population responses. Distances were only measured between matched images (same family and shift) with different levels of scrambling. Pooling regions range from fully scrambled images (6.4 degrees) to photographic images (0.0 degrees). Shading indicates Euclidean distance between pairs of normalized population vectors, averaged over all appropriate image pairs. The white banding on the left and bottom edges indicates that neural populations categorically separate photographic images from all scrambled conditions. B) Image similarity, measured between matched images with different levels of scrambling. We used three different distance metrics: 1) average RMS pixel distance (left), 2) SSIM (center), and 3) DISTS (right). Pixel distance and SSIM differ from neural distance, while DISTS appears similar. C) Neural distance vs. DISTS for each measured pair of images. For 20 image families and 4 shift conditions per family, we measured 30 image comparisons (2400 total pairs plotted). The linear best fit is plotted in black. D) Correlations between neural distances and the three image similarity metrics, averaged over resampled neural subpopulations (N=105 neurons). Error bars represent standard deviations across subpopulations. DISTS predicts neural distance, while pixel distance and SSIM do not.\", \"page\": 25, \"index\": 1, \"width\": 979, \"height\": 672}]"
motivation: 探究灵长类动物快速物体识别的神经计算起源，尤其是V4区物体形状选择性的形成机制。
method: 通过改变图像局部统计池化区域大小，生成从完全打乱纹理到自然照片的连续变化刺激，分析V4神经元对各类图像的响应。
result: V4神经元群体对照片的响应动态范围更大，能可靠区分照片与打乱图像，且物体选择性响应缓慢增长并持续至刺激消失后，仅在池化区域约一半感受野大小时才与照片响应相似。
conclusion: V4区的物体选择性可能源于局部统计与全局结构的交互，且该信号的出现与持续暗示循环加工机制的参与。
---

## 摘要
人类和猕猴能够快速识别日常场景中的物体。这种计算在何处发生尚未完全理解，但先前研究表明，对物体形状的选择性首先出现在皮层区域V4。为了探索这种选择性的机制，我们生成了从“打乱”纹理到真实照片之间连续变化的图像，保留原始图像的局部统计特性，同时丢弃场景和形状的结构信息。我们通过测量统计特性的区域大小（“汇聚区域”）来定义这一连续变化。平均而言，神经元对照片及其打乱版本的响应相同。然而，神经元对照片的反应动态范围大于对打乱图像的反应。因此，V4区的神经元群体能够更可靠地区分照片与打乱图像。对部分打乱图像的反应更类似于对完全打乱图像的反应，而不是对照片的反应，即使对于感知上微小的变化也是如此；只有当汇聚区域大小约为典型V4感受野的一半时，反应才开始与照片相似。这些相同的模式也出现在一个旨在预测人类对图像退化判断的图像相似性度量中。最后，V4区的物体选择性表现出缓慢增长并在反应结束后持续存在的动态特性，表明这种信号可能源于循环机制。

## Abstract
Humans and monkeys can rapidly recognize objects in everyday scenes. It is not fully understood where this computation arises, but previous work suggests selectivity for object shape first emerges in cortical area V4. To explore the mechanisms of this selectivity, we generated images on a continuum between "scrambled" textures and photographic images, preserving the local statistics of the original image while discarding structural information about scene and shape. We defined this continuum by the size of the region in which statistics were measured ("pooling region"). On average, neurons responded equally to photographic images and their scrambled counterparts. However, neurons exhibited a greater dynamic range of response to photographs than to scrambled images. As a result, neuronal populations in V4 could more reliably discriminate photographic images from their scrambled counterparts. Responses to partially scrambled images were more similar to responses to fully scrambled images than to photographs, even for perceptually subtle changes, and only began to resemble responses to photographs for pooling regions roughly half the size of typical V4 receptive fields. These same patterns emerged in an image similarity metric designed to predict human judgements of image degradation. Finally, V4 object selectivity showed dynamics that grew slowly and persisted following response offset, suggesting this signal may arise from recurrent mechanisms.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

- **关联方向**：弱相关。该论文与读者所在的大脑解码、表征对齐等研究领域目标交集有限。
- **启发与意义**：主要启发在于对V4区作为中层级视觉表征关键阶段的深入刻画，为其构建类脑视觉编码模型提供了生物学约束和验证目标。
- **可借鉴点**：可借鉴其参数化刺激生成（从纹理到照片的连续体）和表征相似性分析（将神经距离与感知模型DISTS比较）的实验范式，用于测试计算模型是否具有与V4类似的对全局结构的敏感性。
- **阅读建议**：推荐关注其关于V4物体选择性动态特性（缓慢、持久）的发现及其对“循环/反馈”机制的讨论，这可能为设计具有循环连接的表征学习算法提供启示。

## 1. 论文的核心问题与整体含义

- **核心问题**：探究灵长类动物视觉系统中，物体识别这一高级视觉功能的最早神经起源。具体来说，是研究中层级视皮层区域V4的神经元如何从局部纹理统计中整合信息，从而产生对全局物体形状的选择性。
- **整体含义**：本研究旨在揭示视觉系统如何实现“从材质（stuff）到物体（things）”的转化，即在V4区内部或经由V4区，局部图像特征是如何被汇总处理，最终形成一种能够区分有意义物体和无意义纹理的神经表征的。

## 2. 论文提出的方法论

- **核心思想（刺激生成-参数化解构）**：通过精细操纵图像的“物体性”（object-ness），创建一个从完全保留统计特征的“纹理”（打乱图）到保留完整形状的“物体”（原图）的连续变化刺激集，从而解构V4区的加工过程。
- **关键技术细节**：
    - **图像合成**：使用一个经过改良的纹理合成模型：
      - 将图像划分为重叠的、大小可变的局部“汇聚区域”网格。
      - 在每个区域内，测量一组复杂的纹理统计特征，包括：通过方向、尺度滤波器得到的“简单细胞”和“复杂细胞”的线性与能量响应，以及这些响应通道之间不同位置、方向和尺度的成对乘积。
      - 通过迭代方式，从一张白噪声图像生成新图像，使其在每个局部区域内都与原图测量到的统计特征相匹配。
    - **操作变量**：连续变化的关键变量是“**汇聚区域大小**”。区域越大，图像被“打乱”得越彻底，丧失的全局结构信息越多；区域越小，保留的细节和物体形状越完整。
    - **判别分析方法**：使用跨验证的**线性判别分析（LDA，Linear Discriminant Analysis）**，在神经元群体活动中寻找一个最优线性解码轴，以量化群体反应对不同类别图像（如原图vs打乱图）的区分能力。该分析设计为“平移不变性”的，确保解码器不依赖像素的精确位置，而是捕捉到更一般的“自然”特征。

## 3. 实验设计

- **实验对象与数据采集**：使用两只雄性猕猴进行急性和慢性多通道电生理记录，共获得**211个**V4区单神经元数据。
- **数据集/场景**：
    - **核心图像集**：选取20张原始照片，来自两个数据库：“博茨瓦纳”自然场景图像和“Reachspace”人造物体在场景中的图像。
    - **刺激生成**：为每张原图，通过上述方法，使用**5种不同大小的汇聚区域**（6.4°、3.2°、2.1°、1.6°、1.1°），合成不同程度的“打乱”图像，连同原图（汇聚区域大小为0°）共6个等级。此外，对每张图进行了4个位置的微小平移，形成20个“图像家族”。
- **Benchmark与对比方法**：
    - **核心对比**：将神经元和群体对不同等级打乱图像的响应进行比较。
    - **外部模型对比**：将V4神经群体的反应距离与三种图像相似性/距离度量模型进行对比，以探究神经元反应模式与感知的相似性：
        - 像素均方根距离（RMS pixel distance）作为基线。
        - 结构相似性指数（SSIM）。
        - **深度图像结构与纹理相似性（DISTS，Deep Image Structure and Texture Similarity）**，这是一种专门设计用于预测人类对图像失真感知判断的模型。
- **分析任务**：
    1.  **照片结构检测**：区分完全打乱纹理与原图（或部分打乱图）。
    2.  **图像家族辨别**：区分来自不同原图的两类图像，并评估打乱对此辨别能力的影响。

## 4. 资源与算力

- 论文中未提及任何关于训练模型所需的GPU型号、数量或训练时长的具体信息。
- 仅在致谢部分提及，计算资源由纽约大学IT高性能计算服务提供支持。

## 5. 实验数量与充分性

- **实验组数量**：实验设计系统全面，包含：
    - **刺激维度**：20个图像家族 × 6个打乱等级 × 4个平移位置，形成了一个丰富的刺激矩阵。
    - **分析维度**：从单神经元、神经元群体到与计算模型对比，进行了多角度分析。
    - **时间维度**：分析了反应动态过程。
    - **空间维度**：根据感受野离心率将神经元分为4个亚群进行分析。
- **充分性、客观性与公平性**：
    - **充分性**：是。实验设计高度参数化，通过连续改变汇聚区域大小，能够精细刻画V4区对物体结构信息的敏感性梯度，实验证据链完整。
    - **客观与公平性**：是。所有判别分析均采用跨验证（cross-validation），特别是将刺激平移纳入训练/测试集划分，保证了分析结果的泛化性和客观性。与多个感知模型进行对比，体现了外部验证的公平性。

## 6. 论文的主要结论与发现

- **响应动态范围而非平均强度**：平均而言，V4神经元对照片和打乱纹理的发放率无显著差异，但神经元对照片的反应具有**更大的动态范围**。这解释了为何群体反应能更好地区别照片。
- **群体的“分类式”区分**：V4神经元群体能够可靠区分照片与完全打乱纹理，且这种选择性对微小打乱（汇聚区域仅1.1°）就表现出极大的敏感性，呈现出一种“非此即彼”的分类式区分模式，而非渐进式变化。
- **物体辨别的特征来源**：V4区辨别不同物体的能力，仅有**1/3**来源于物体特有的结构特征，而**2/3**来源于与纹理共享的局部统计特征。
- **与感知模型的一致性**：V4神经群体表征的相似性结构与感知模型DISTS高度相关，而与简单的像素距离或SSIM模型无关。这表明V4的反应模式在行为学上是相关的，反映了人类对图像失真的感知敏感性。
- **缓慢且持久的动态特性**：对“物体结构”的选择性信号出现晚于对“刺激出现”的检测和“物体间辨别”的信号，且持续时间超过刺激呈现期。这暗示V4的物体选择性可能涉及**循环加工或来自下游脑区的反馈**，而不仅仅是纯粹的前馈计算。
- **空间汇聚尺度**：V4区分物体与纹理的临界空间汇聚尺度约为**1.5度视角**，远小于典型的V4感受野大小，更接近V2的感受野尺寸。

## 7. 优点

- **独创性强的刺激范式**：“从材质到物体”的参数化图像连续体设计，巧妙地分离了局部统计与全局结构对神经元反应的贡献，操作性强，逻辑清晰。
- **多层面、端到端的分析**：融合了单神经元分析、群体解码、表征相似性分析（与计算模型对比）、时间动态分析，构建了对V4功能的立体描述。
- **严谨的实验控制**：通过跨验证平移不变的解码分析，确保所测量的信号反映了对物体的一般性表征，而非低级像素相关性，结论更可靠。
- **与行为/感知的关联**：将神经数据与预测人类感知的DISTS模型进行比较，赋予了神经发现明确的行为意义，增强了研究的外部效度。

## 8. 不足与局限

- **图像多样性有限**：虽然分属两类，但仅使用了20张原始图像。更广泛的物体和场景类别下的结论普适性有待验证。
- **行为验证缺失**：论文将神经反应与DISTS模型（作为人类感知的代理）进行比较，但并未直接在该任务上采集猴子或人类被试的真实心理物理学数据，这是一种间接关联。
- **机制推断的局限性**：结论“物体选择性源于循环机制”主要是基于反应潜伏期动态变化的相关性推断，缺乏对循环连接的因果性操作证据（如光遗传抑制）。
- **样本量限制**：尽管总体神经元数量（N=211）足够，但在进行基于感受野离心率的亚组分析时，每个亚组的样本量相对变小，可能影响统计效力。

## 9. 研究价值与阅读建议

- **关联方向**：弱相关。该论文与读者所在的大脑解码、表征对齐等研究领域目标交集有限。
- **启发与意义**：主要启发在于对V4区作为中层级视觉表征关键阶段的深入刻画，为其构建类脑视觉编码模型提供了生物学约束和验证目标。
- **可借鉴点**：可借鉴其参数化刺激生成（从纹理到照片的连续体）和表征相似性分析（将神经距离与感知模型DISTS比较）的实验范式，用于测试计算模型是否具有与V4类似的对全局结构的敏感性。
- **阅读建议**：推荐关注其关于V4物体选择性动态特性（缓慢、持久）的发现及其对“循环/反馈”机制的讨论，这可能为设计具有循环连接的表征学习算法提供启示。

（完）
