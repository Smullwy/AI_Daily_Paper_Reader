---
title: Faces and bodies are increasingly integrated along the visual hierarchy in humans and deep neural networks
title_zh: 人脸与身体在人类与深度神经网络的视觉层级中逐渐整合
authors: "van Dyck, L. E., Dobs, K."
date: 2026-06-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.02.16.706115v2.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 深度神经网络与fMRI在人脸身体整合上的比较
tldr: 人类视觉皮层存在面孔和身体加工区域，但人物感知需整合两者。本研究利用深度神经网络与fMRI数据，探究分离与整合机制。发现模型中含有面孔和身体选择性单元及混合选择性单元，混合单元最佳解释跨区活动，且共享方差沿视觉层级从后向前递增，揭示了人与模型均依靠分离与整合平衡实现专门而灵活的人物感知。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究大脑为何看似分离面孔和身体加工，以及它们如何整合支持整体人物感知。
method: 对比深度神经网络模型与人类观看自然图像时的fMRI活动，分析面孔和身体的选择性与混合选择性单元。
result: 模型存在面孔、身体选择性及混合选择性单元，混合单元最佳解释跨区活动，且整合程度从后部皮层到前部皮层递增。
conclusion: 面孔和身体加工反映了视觉层级中分离与整合的平衡，支撑专门而灵活的人物感知。
---

## 摘要
人类视觉皮层包含专门处理人脸和身体的区域，然而我们整体地感知他人。为什么大脑似乎隔离了人脸与身体的加工，而它们又怎样被整合起来以支持人物感知？在此，我们检验了为视觉识别而优化的深度神经网络模型是否发展出分离或整合的人脸与身体加工，以及这与观看自然图像时视觉皮层的fMRI活动有何关联。我们发现模型包含人脸选择性与身体选择性单元，但也包含同时调谐于两者的人脸-身体混合选择性单元。人脸和身体选择性单元在各自对应的皮层区域中解释了独特方差，而混合选择性单元最佳地解释了跨区域的活动，并且共享方差从后侧皮层至前侧皮层递增。总体而言，我们的发现表明人脸与身体加工反映了人类与模型视觉层级中分离与整合的平衡，从而支持专门化而又灵活的人物感知。

## Abstract
Human visual cortex contains regions specialized for faces and bodies, yet we perceive people as a whole. Why does the brain appear to segregate faces and bodies, and how are they integrated to support person perception? Here, we test whether deep neural network models optimized for visual recognition develop segregated or integrated face and body processing, and how this compares to fMRI activity in visual cortex during natural image viewing. We find that models contain face- and body-selective units but also mixed-selective units that are tuned to both faces and bodies. While face- and body-selective units explain unique variance in their corresponding cortical regions, mixed-selective units best explain activity across regions, and shared variance increases from posterior to anterior cortex. Together, our findings suggest that face and body processing reflects a balance of segregation and integration along the visual hierarchy in humans and models, supporting specialized yet flexible person perception.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文直接关联“fMRI representation”“brain encoding”与“neural prior”，用深度网络作为视觉通路的计算先验，揭示层级整合规律，与读者兴趣方向高度一致。
- **启发与意义**：它展示面孔/身体加工并非纯分离，而是沿层级渐增混合，为解码、多视角约束和表征对齐提供了新的“分离-整合平衡”视角，对构建更像脑的编码模型有重要启发。
- **可借鉴点**：通过分析混合选择性单元的解释方差以及跨区共享方差，可将类似方法迁移到更通用的脑解码与表征对齐任务中，检验不同模态或任务下混合表征如何涌现。
- **阅读建议**：若从事脑解码或表征对齐研究，建议重点阅读其混合选择性单元定义、层级方差分解方法；即使不研究人物知觉，其“分离与整合梯度”分析框架也值得借鉴。

## 论文的核心问题与整体含义
- 尽管人类视觉皮层拥有分别专门加工面孔和身体的区域，日常人物感知却要求将两者整合为统一体。
- 该研究追问：为何大脑表面上看像在隔离面孔与身体加工，其背后存在怎样的整合机制以支撑整体人物感知。
- 整体含义：探索视觉层级中“分离加工”与“整合加工”的平衡，并利用深度神经网络（DNN）为模型系统，比较其与人脑fMRI活动的对应关系，揭示专门化与灵活性并存的计算原理。

## 方法论
- **核心思想**：利用为视觉识别优化的深度神经网络，检验其是否自发形成分离或整合的面孔与身体表征，并将模型单元的活动模式与人类观看自然图像时的fMRI体素活动进行定量比较。
- **关键技术细节**：
  - 在DNN中识别三类单元：面孔选择性、身体选择性、以及同时对二者调谐的混合选择性单元。
  - 采用编码模型（或变异分解）分析各类型单元对皮层区域活动的独特与共享方差贡献：面孔和身体选择性单元解释各自偏好区域的独特方差；混合选择性单元则更好地解释跨区域活动。
  - 通过计算沿视觉层级（后侧至前侧皮层）的共享方差，刻画整合程度的变化梯度。
- **公式/算法流程**：对每个体素或区域，拟合线性模型预测fMRI响应 $\hat{y} = \beta_0 + \beta_{\text{face}} X_{\text{face}} + \beta_{\text{body}} X_{\text{body}} + \beta_{\text{mixed}} X_{\text{mixed}}$，然后分解 $R^2$ 中由各类单元解释的独特与共享成分，并比较它们沿皮层层级的趋势。

## 实验设计
- **数据集/场景**：使用自然图像刺激下的人类fMRI数据（具体数据集名称未在摘要中详述），以及在大规模自然图像上预训练的深度神经网络模型。
- **基准（Benchmark）**：默认以仅使用面孔或身体选择性单元解释皮层活动的能力作为对照，以突出混合选择性单元带来的增益。
- **对比方法**：比较纯选择性单元与混合选择性单元对不同皮层区域（面孔偏好区、身体偏好区及跨区）的解释力；还对比了后侧皮层与前侧皮层共享方差的大小，验证整合梯度。

## 资源与算力
- 摘要中未明确说明所用GPU型号、数量、训练时长或总计算开销。
- 可推测使用了预训练DNN模型，无需额外从零训练；fMRI分析属于离线统计计算，算力需求相对较低，但原文未提供具体细节。

## 实验数量与充分性
- 摘要未给出具体实验组数，但可推断至少包含：面孔/身体选择性分类、混合选择性分析、皮层区域方差分解、层级梯度分析等若干关键分析。
- 由于无法获取全文，无法定量评估实验是否充分、是否包含消融实验或多种DNN架构的比较。从摘要逻辑看，主要发现基于单一种类模型与人类数据的对比，客观性较好，但泛化性尚待验证。

## 主要结论与发现
- DNN模型不仅含有面孔和身体选择性单元，还自发出现混合选择性单元，后者同时对两类刺激响应。
- 面孔/身体选择性单元分别在其对应的皮层功能区解释独特方差，而混合选择性单元能够最优地解释跨区域的活动模式。
- 从后侧视觉皮层到前侧皮层，共享方差（反映整合程度）逐步递增，表明整合沿视觉层级加深。
- 总体上，面孔与身体加工反映了人类视觉系统与深度模型中“分离与整合”的平衡，这种平衡支持既专门又灵活的人物感知。

## 优点
- 首次在DNN与人类fMRI之间直接量化面孔-身体混合选择性及其层级的整合梯度，桥接了认知神经科学与计算模型。
- 方差分解方法清晰区分了独特贡献与共享贡献，为理解功能特异化与整合的共存提供了可操作分析框架。
- 结论简洁而富有理论意义，挑战了严格模块化的假设，强调层级递进的整合。

## 不足与局限
- 摘要信息有限，未披露所用自然图像数据集是否覆盖足够多样的人物和非人物场景，可能存在刺激偏差。
- 仅依赖一种或少数DNN架构，无法确定混合选择性及整合梯度是否普遍存在于不同模型或训练目标下。
- 无法判断是否控制了低层视觉特征混淆；对于共享方差增加能否直接等同于“整合”亦需谨慎解释。
- 缺少与其它灵长类或行为指标的交叉验证，限制了对人脑特异性的推断。

（完）
