---
title: ICLR26 Neural Response Functions for Continuous Brain Encoding
title_zh: ICLR26：用于连续大脑编码的神经响应函数
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 提出连续脑编码模型，将图像映射到MNI空间fMRI，支持跨被试迁移
tldr: 传统神经编码模型将大脑3D体素展平为独立的一维响应，忽略空间结构与解剖信息。本文提出神经响应函数（NRF），将fMRI脑活动建模为空间连续函数，可根据图像与标准MNI坐标直接预测任意位置的响应，实现分辨率无关的查询。NRF利用局部平滑性与跨被试解剖对齐，显著提升数据效率与泛化能力，在个体内编码与跨被试迁移中优于基线，且所需数据量降低数个数量级。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 2305, \"height\": 2346}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-002.webp\", \"caption\": \"\", \"page\": 7, \"index\": 2, \"width\": 1589, \"height\": 989}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 447, \"height\": 337}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 1470, \"height\": 1112}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 1467, \"height\": 1110}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 1466, \"height\": 1111}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-007.webp\", \"caption\": \"\", \"page\": 7, \"index\": 7, \"width\": 1466, \"height\": 1110}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-008.webp\", \"caption\": \"\", \"page\": 7, \"index\": 8, \"width\": 1469, \"height\": 1112}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-009.webp\", \"caption\": \"\", \"page\": 7, \"index\": 9, \"width\": 1469, \"height\": 1110}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-010.webp\", \"caption\": \"\", \"page\": 7, \"index\": 10, \"width\": 447, \"height\": 337}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-011.webp\", \"caption\": \"\", \"page\": 8, \"index\": 11, \"width\": 3341, \"height\": 2053}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-012.webp\", \"caption\": \"\", \"page\": 9, \"index\": 12, \"width\": 1566, \"height\": 966}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-013.webp\", \"caption\": \"\", \"page\": 9, \"index\": 13, \"width\": 1566, \"height\": 966}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-014.webp\", \"caption\": \"\", \"page\": 9, \"index\": 14, \"width\": 1566, \"height\": 966}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-015.webp\", \"caption\": \"\", \"page\": 16, \"index\": 15, \"width\": 2968, \"height\": 1767}, {\"url\": \"assets/figures/local-pdf/local-20260606-194139466732-iclr26-neural-response-functions-for-continuous-brain-encoding/fig-016.webp\", \"caption\": \"\", \"page\": 26, \"index\": 16, \"width\": 3064, \"height\": 979}]"
motivation: 传统编码模型丢失了大脑响应的空间连续性与跨被试解剖对应关系，亟需能利用这些属性提升效率和迁移能力的框架。
method: 将fMRI活动表示为连续隐式函数，以自然图像和MNI空间坐标为输入，预测该点响应，并通过预训练与微调策略实现跨被试适应。
result: 在个体内编码和跨被试微调实验中，NRF显著超越基线模型，且在达到高性能的同时将所需数据量减少了几个数量级。
conclusion: NRF首次实现解剖感知的连续脑编码，为分辨率无关和跨被试的高效脑活动建模提供了新范式。
---

## 摘要
神经编码模型旨在预测自然图像引起的fMRI脑响应。fMRI数据以体素的三维体获取，每个体素在大脑中具有确定的空间位置。然而，传统的编码模型通常将此三维体展平为一维向量，并将体素响应视为独立输出。这移除了空间上下文，丢弃了解剖信息，并将每个模型绑定到特定于受试者的体素网格。我们引入了NRF神经响应函数框架，将fMRI活动建模为解剖空间上的连续函数，而非体素的扁平向量。NRF将脑活动表示为连续隐函数：给定一幅图像和标准化MNI空间中的空间坐标(x, y, z)，模型预测该位置的响应。这一表述将预测与训练网格解耦，支持任意空间分辨率的查询，并实现了分辨率无关的分析。通过将模型建立在解剖空间中，NRF利用了脑响应的两个关键特性：(1) 局部平滑性——相邻体素展现相似的响应模式；连续建模响应捕捉这些相关性并提高数据效率；(2) 跨受试者对齐——MNI坐标统一了不同个体的数据，允许在一个受试者上预训练的模型在新受试者上进行微调。在实验中，NRF在受试者内编码和跨受试者适应两方面均优于基线模型，在保持高性能的同时将所需数据量降低了数个数量级。据我们所知，NRF是首个超越扁平体素、具有解剖感知的编码模型，学习从图像到三维空间中脑响应的连续映射。代码与项目网站：https://github.com/haomiao8/NRF

## Abstract
Neural encoding models aim to predict fMRI-measured brain responses to natural images. fMRI data is acquired as a 3D volume of voxels, where each voxel has a defined spatial location in the brain. However, conventional encoding models of- ten flatten this volume into a 1D vector and treat voxel responses as independent outputs. This removes spatial context, discards anatomical information, and ties each model to a subject-specific voxel grid. We introduce the NRF Neural Re- sponse Function, a framework that models fMRI activity as a continuous function over anatomical space rather than a flat vector of voxels. NRF represents brain activity as a continuous implicit function: given an image and a spatial coordi- nate (x, y, z) in standardized MNI space, the model predicts the response at that location. This formulation decouples predictions from the training grid, supports querying at arbitrary spatial resolutions, and enables resolution-agnostic analyses. By grounding the model in anatomical space, NRF exploits two key properties of brain responses: (1) local smoothness—neighboring voxels exhibit similar response patterns; modeling responses continuously captures these correlations and improves data efficiency, and (2) cross-subject alignment—MNI coordinates unify data across individuals, allowing a model pretrained on one subject to be fine-tuned on new subjects. In experiments, NRF outperformed baseline models in both intrasubject encoding and cross-subject adaptation. Achieving high per- formance while reducing the data size needed by orders of magnitude. To our knowledge, NRF is the first anatomically aware encoding model to move beyond flattened voxels, learning a continuous mapping from images to brain responses in 3D space. Code and project site: https://github.com/haomiao8/NRF

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文直接对应 **brain encoding** 与 **fMRI representation**，并将 **neural prior**（局部平滑、跨被试对齐）以坐标条件形式注入模型，对解码研究中利用解剖先验亦有启示。
- **启发与意义**：将脑活动视为空间连续函数，从根本上改变了“固定体素网格”的编码范式，为少样本跨被试迁移和高分辨率分析提供了新思路；解码任务也可借鉴这种解剖感知的表示学习方式。
- **可借鉴点**：隐式神经表示（INR）配合傅里叶特征编码解剖坐标，可作为 fMRI 表示学习的通用组件；微调+体素集成策略可推广到脑解码中的跨被试迁移。
- **阅读建议**：重点理解 NRF 如何将图像特征与 MNI 坐标融合以建模连续响应场，以及坐标扰动消融实验的设计，这两部分对构建解剖感知的脑编解码模型最有直接参考价值。

## 1. 论文的核心问题与整体含义
- **核心问题**：传统神经编码模型将 3D fMRI 体素展平为 1D 向量，丢失了脑活动的空间结构与解剖信息，且每个模型绑定于单一受试者的体素网格，无法跨个体迁移，在数据稀缺的实际场景中效率低下。
- **整体含义**：提出 **Neural Response Function (NRF)**，将 fMRI 活动建模为定义在标准化解剖空间（MNI 坐标）上的连续函数，实现分辨率无关、解剖感知、可跨被试迁移的脑编码框架。

## 2. 方法论
- **核心思想**：脑响应是空间连续的隐式函数 $\Phi(\text{image}, x, y, z) \to r$，给定图像和 MNI 坐标 $(x,y,z)\in\mathbb R^3$，直接预测该位置的响应值 $r\in\mathbb R$。
- **架构**：
  - **图像特征提取器 $G$**：使用 CLIP ViT-B/16 提取多尺度特征（第3、6层中间特征与最终 CLIP 嵌入），经维度压缩后拼接为融合嵌入 $G(M)$。
  - **坐标编码**：对 MNI 坐标 $x$ 进行傅里叶特征映射 $\gamma(x)=[\cos(2\pi b_j^T x), \sin(2\pi b_j^T x),\dots]$，$b_j\sim\mathcal N(0,\sigma^2)$。
  - **MLP 预测器 $P$**：拼接 $G(M)$ 与 $\gamma(x)$，由 8 层 MLP（隐藏维度 4096）输出标量响应 $\Phi(M,x)=P(G(M),\gamma(x))$。
- **训练**：端到端训练，每 batch 32 张图像，每张图像随机抽样 2000 个体素；损失函数 $L(\hat r, r)=(1-\alpha)\|\hat r - r\|^2 + \alpha \cdot \cos(\angle(\hat r, r))$，$\alpha=0.1$。
- **跨被试迁移**：在源受试者上预训练 NRF；在新受试者有限数据（如 200 张图像）上微调全部模块；再将多个预训练源的微调模型通过体素级最小二乘回归集成 $\hat r_v = \sum_k w_{v,k} \hat r_v^{(k)} + b_v$，以保留个体间变异。

## 3. 实验设计
- **数据集**：Natural Scene Dataset (NSD)，8 名受试者观看 10000 张 COCO 自然图像，使用 GLMSingle 估计单试次响应并每 session 标准化；评估聚焦于完成所有扫描的 4 名受试者，训练/测试划分约 9000/1000 张图像，使用 nsdgeneral 视觉皮层 ROI。
- **对比方法**：
  - **个体编码**：线性回归编码（CLIP 特征直接映射到体素向量）、fWRF 编码器、MindSimulator（单试次/五试次平均）。
  - **全数据与低数据**（20 至 9000 图像）两种制度。
- **评估指标**：
  - **体素级**：Pearson 相关系数 $r$、MSE。
  - **语义级**：将预测的 fMRI 输入 MindEye2 解码器重建图像，计算 PixCorr、SSIM、AlexNet 层特征相似度、Inception、CLIP、EfficientNet、SwAV 等指标。
- **跨被试适应**：以 3 名受试者预训练，第 4 名作为目标，用 20/200/800 张图像微调+集成，与从头训练（scratch）对比。

## 4. 资源与算力
文中未明确报告 GPU 型号、数量、显存消耗或训练时长。仅给出训练配置（batch size 32，每图采样 2000 体素，Adam 学习率 3e-3），但未披露具体算力需求。

## 5. 实验数量与充分性
- **实验分组较全面**：
  - 个体编码：全数据及各低数据量（20/60/200/400/600/800）下的性能对比，覆盖 4 名受试者。
  - 跨被试适应：4 名受试者轮流作为目标，每个目标测试 3 种微调数据量。
  - 消融实验：坐标扰动（全局打乱、ROI 内打乱）、坐标平移破坏跨被试对齐、体素集成方式（平均 vs 线性回归）、微调策略（全部 vs 仅图像提取器/投影器）、MLP 层数与隐藏维度。
  - 分辨率无关查询：0.5 mm 网格上的可视化展示。
- **充分性**：实验维度丰富，覆盖主要声称的全部特性（平滑性利用、跨被试迁移、分辨率无关性），统计检验（排列检验、FDR 校正）规范。但未与其他坐标注入式编码方法或更多数据集交叉验证，低数据训练中的随机采样方式可能带来些许偏差。

## 6. 主要结论与发现
- NRF 在低数据制度下显著优于扁平体素基线，仅有 200 张图像即可超越基线使用 800 张图像的精度，归因于解剖坐标条件使模型利用了局部平滑性。
- 在约 9000 张图像的全数据训练中，NRF 在体素级 Pearson 相关系数上超越 fWRF 与线性回归，语义级解码质量接近或达到可用水平。
- 跨被试微调+体素回归集成显著优于从头训练，仅需约 200 张新受试者图像（约 40 分钟扫描）即可达到或超过全量数据从头训练的性能。
- 坐标打乱与平移消融证实 NRF 的性能增益确实来源于对局部平滑性和跨被试解剖对齐的利用。
- NRF 可在任意空间分辨率下查询，无需对 fMRI 图像进行上采样重建，实现了分辨率无关的连续脑响应场。

## 7. 优点
- **解剖感知的连续建模**：率先将 fMRI 编码定义为坐标输入的函数，保留了三维空间上下文和跨被试对齐能力，突破了传统体素向量的限制。
- **出色的数据效率**：通过隐式神经表示和傅里叶特征编码，有效利用局部平滑先验，大幅降低了达到可接受精度所需的数据量。
- **灵活的跨被试适应**：预训练+微调+体素集成策略在极少新数据下即可获得个性化高性能模型，实用性强。
- **分辨率无关性**：模型独立于采集网格，可随意查询任意分辨率，为多分辨率数据整合和脑数字孪生奠定基础。
- **实验设计严谨**：多维消融（打乱、平移、微调策略、模型规模）、多基数对比、统计检验齐全。

## 8. 不足与局限
- **仅验证于视觉皮层**：实验限定在 NSD 的 nsdgeneral ROI，未扩展至全脑或其他感觉/认知任务，模型泛化到非视觉任务的能力未知。
- **依赖标准化模板**：MNI 对齐假设所有受试者功能组织完全对应，但个体间功能地形变异可能有残留偏差，尤其在更精细尺度上。
- **结构解耦性未充分探究**：虽然将响应视为连续函数，但并未显式分离解剖与功能成分，模型学到的“功能图谱”缺乏直接可解释性。
- **语义指标受解码器偏差影响**：部分基线（fWRF）在语义重建指标上异常高于真实 fMRI，提示解码器可能引入偏向，降低了语义指标作为编码模型比较标准的可靠性。
- **算力信息缺失**：未报告训练所需 GPU 资源、训练时长，阻碍复现成本评估。
- **跨数据集泛化未检验**：所有实验均在 NSD 内，缺乏在其他 fMRI 数据集或不同磁共振采集参数下的性能证据。

## 9. 总结
NRF 通过将脑编码重铸为连续神经响应函数，实质性地利用了空间平滑性和跨被试解剖对应性，在数据效率和跨个体迁移上表现突出，为下一代解剖感知、分辨率无关的脑编码模型开辟了新方向。实验多方面验证了设计的有效性，但未来需扩展到更广泛的脑区和任务、提升模型可解释性，并在更多数据集上检验泛化能力。

（完）
