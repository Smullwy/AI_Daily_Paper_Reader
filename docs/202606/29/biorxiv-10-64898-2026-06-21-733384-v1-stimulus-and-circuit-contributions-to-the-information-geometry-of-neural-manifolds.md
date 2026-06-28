---
title: Stimulus and circuit contributions to the information geometry of neural manifolds
title_zh: 刺激与回路对神经流形信息几何的贡献
authors: "Goedeke, S., Kautz, J. K., Leibold, C."
date: 2026-06-25
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.21.733384v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 神经流形几何连接脑表征对齐
tldr: 本研究开发微分几何框架，分析发放率循环网络的神经流形信息几何。推导拉回度量揭示前馈与循环连接塑造流形几何，并建立与费舍尔信息的联系。发现慢噪声下信息仅依赖前馈连接，前馈连接可生成网格细胞环形流形；循环连接在快噪声下选择性降噪。该工作直接连接流形几何与刺激编码。
source: biorxiv
selection_source: fresh_fetch
motivation: 缺少将神经流形几何与网络机制及信息编码联系起来的严格框架。
method: 针对发放率循环网络，采用微分几何推导神经流形的拉回度量，并将其与稳态费舍尔信息关联。
result: 发现慢噪声下费舍尔信息仅取决于前馈连接，前馈连接可生成六边形网格细胞环形流形；循环连接在快噪声下改善刺激编码。
conclusion: 前馈连接决定表征几何，循环连接在快速噪声时实现选择性降噪，二者共同影响神经信息编码。
---

## 摘要
理解网络连接如何塑造神经表征是系统神经科学的核心。虽然降维方法揭示了群体记录中的低维流形结构，但缺乏一个严格的框架将流形几何与网络机制和信息编码联系起来。我们发展了一种微分几何方法来分析接收调谐前馈输入的基于速率的递归网络中的神经流形。我们推导了神经流形的拉回度规表达式，展示了输入调谐曲线、前馈和递归突触连接如何塑造流形几何。关键的是，我们建立了稳态下的费舍尔信息矩阵也具有拉回度规的结构，直接将内在流形几何与刺激可分辨性和信息编码联系起来。对于通过网络传播的具有慢时间相关性的噪声，我们表明递归对信息几何的影响被抵消：费舍尔信息仅依赖于前馈连接。因此，前馈连接关键性地决定了表征几何。作为一个例子，我们证明了六边形网格细胞模块对随机网格相位分布的空间表征是近似等距的。此外，一个线性前馈变换可以将空间随机输入调谐曲线映射成一个六边形网格细胞群体，形成一个环面流形。因此，仅前馈连接就能产生结构化的空间表征，而不需要精细调谐的递归连接或连续吸引子动力学。然而，递归连接被证明在快速噪声下能改善刺激编码，从而实现了选择性降噪。

## Abstract
Understanding how network connectivity shapes neural representations is central to systems neuroscience. While dimensionality reduction methods uncover low-dimensional manifold structure in population recordings, a rigorous framework connecting manifold geometry to network mechanisms and information encoding remains lacking. We develop a differential geometric approach for analyzing neural manifolds in rate-based recurrent networks receiving tuned feedforward inputs. We derive expressions for the pullback metric of neural manifolds, showing how input tuning curves, feedforward and recurrent synaptic connectivity shape manifold geometry. Critically, we establish that the Fisher information matrix at steady states also has the structure of a pullback metric, directly linking intrinsic manifold geometry to stimulus discriminability and information encoding. For noise with slow temporal correlations propagated through the network, we show that recurrent effects on information geometry cancel: Fisher information depends only on the feedforward connectivity. Thus, feedforward connectivity critically determines representational geometry. As an example, we demonstrate that the representation of space by a module of hexagonal grid cells is approximately isometric for random distribution of grid phases. Moreover, a linear feedforward transformation can map spatially random input tuning curves into a population of hexagonal grid cells, forming a toroidal manifold. Thus, feedforward connectivity alone can generate structured spatial representations without requiring carefully tuned recurrent connectivity or continuous attractor dynamics. Recurrent connectivity, however, is shown to improve stimulus encoding under fast noise, thereby implementing a selective noise reduction.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：与“representation alignment”和“brain encoding”方向强相关，直接联系神经表征流形几何与信息编码；与“brain decoding”“fMRI representation”方向中等相关，提供了解码极限和表征结构的几何理论依据。
- **启发与意义**：揭示了前馈连接即足以生成结构化空间表征（如网格细胞环面流形），挑战了精细递归连续吸引子的必要性，为构建更简洁的解码/编码模型提供了新视角。
- **可借鉴点**：拉回度量与费舍尔信息矩阵等价关系的推导思路，可作为设计fMRI表征对齐和跨被试多视角约束损失函数时的几何先验，用于优化网络连接权重。
- **阅读建议**：适合从事神经解码/编码模型、表征相似性分析的研究者精读，了解如何从微分几何角度统一前馈与递归网络对信息的贡献；可重点关注拉回度规的推导细节与网格细胞环面的生成实验。

## 1. 核心问题与整体含义
- 系统神经科学中长期缺乏一个严格框架，将群体活动的流形几何结构、底层突触连接机制和信息编码能力联系起来。
- 现有降维方法仅描述流形形态，但没有解释前馈输入、递归连接与噪声如何共同决定刺激的表征质量和可分辨性。
- 本工作旨在发展一种微分几何框架，分析发放率递归网络的神经流形信息几何，明确前馈与递归回路对信息编码的各自贡献，理解结构化表征（如网格细胞环面）的起源。

## 2. 方法论
- **核心思想**：将神经流形视为刺激特征空间到神经状态空间的映射，引入拉回度量（pullback metric）刻画流形内在几何；计算该度量在前馈调谐、前馈连接和递归连接联合作用下的表达式，并与费舍尔信息矩阵建立等价关系。
- **关键技术细节**：
  - 考虑一类发放率递归网络，接收调谐前馈输入，噪声在网络中传播。
  - 推导稳态下神经流形的拉回度量：$g = J_f^T \Sigma^{-1} J_f$，其中 $J_f$ 为前馈与递归联合的效应矩阵，$\Sigma$ 为噪声协方差。
  - 引入不同噪声时间尺度：慢噪声（准静态）和快噪声，分别分析递归连接对费舍尔信息的影响。
  - 稳态时，费舍尔信息矩阵与拉回度量同构，直接连接流形几何与刺激分辨能力：$\mathcal{I} = g$。
- **关键发现**：
  - 慢噪声极限下，递归对费舍尔信息的贡献相互抵消，$\mathcal{I}$ 仅依赖前馈连接。
  - 基于此，证明通过线性前馈变换即可从随机空间调谐生成六边形网格细胞环面流形，无需精细递归/连续吸引子。
  - 快噪声下，递归连接可选择性降低噪声，提升信息编码性能（选择性降噪）。

## 3. 实验设计
- **数据集/场景**：理论分析为主，配有验证性仿真示例。仿真使用人工生成的随机空间输入调谐曲线和预定义前馈、递归权重矩阵。
- **核心演示**：网格细胞环面生成实验——仅用线性前馈变换将随机空间输入映射为六边形网格群体响应，检验流形几何是否为近似等距环面。
- **对比分析**：对比了仅有前馈、前馈加递归两种情形下的费舍尔信息与表征几何，以及不同噪声时间尺度下递归作用的有无。
- **Benchmark**：并无传统意义的数据集benchmark，而是用几何指标如流形度规、费舍尔信息、网格相位的等距性来验证理论预测。

## 4. 资源与算力
- 文中未明确提及所使用的GPU型号、数量或训练时长。相关计算应属于低负载理论仿真，无需大规模算力。

## 5. 实验数量与充分性
- 主要包含以下几类实验/分析：
  - 数理推导：拉回度量与费舍尔信息的等式证明，慢/快噪声下递归效应消去的数学论证。
  - 网格细胞生成：单组仿真，展示随机输入经前馈线性变换产生六边形网格调谐和环面流形。
  - 噪声选择性降噪：对比不同噪声时间常数下递归连接对信息编码的影响。
- 实验数目偏少，侧重于理论推导和关键概念验证，但足以支撑核心结论。对更复杂非线性网络或真实神经数据尚未旁及。

## 6. 主要结论与发现
- 前馈连接决定流形的表征几何，慢关联噪声下费舍尔信息与前馈权重直接绑定，递归无额外贡献。
- 仅靠前馈连接即可从随机输入生成网格细胞环面流形，实现近似等距的空间表征，无须精心调试的递归连接或连续吸引子。
- 循环连接在快噪声场景中发挥选择性降噪作用，可提升刺激编码质量。
- 建立了拉回度量与费舍尔信息矩阵的统一几何框架，为理解网络结构、噪声和信息编码间的关系提供了严格工具。

## 7. 优点
- 将微分几何和信息论结合，用拉回度量精准量化流形内在几何与编码极限，理论严谨。
- 清晰分离前馈与递归的贡献，澄清了网格细胞表征的可塑起源，具有重要概念突破。
- 噪声时间尺度分析增强了对生物合理性的考量，点明递归只在特定噪声条件下发挥作用。

## 8. 不足与局限
- 仅考虑发放率模型、线性/线性化传输，未验证在脉冲网络或更复杂非线性动力学下的稳健性。
- 实验仅停留在合成数据和原理验证层面，缺乏与真实神经记录（如fMRI、电生理）的直接对比。
- 对网络训练、学习过程如何塑造这些连接未涉及，偏静态分析。
- 可能高估线性前馈映射的普适性，生物脑中混合与前馈-递归协同的动态调控尚未讨论。

## 9. 研究价值（详）
- 为脑解码与编码研究提供了一个可计算的几何先验框架，尤其在多视角约束和表征对齐的设计中，拉回度量可直接转化为正则项或约束目标。
- 对理解fMRI群体表征流形、跨个体对齐的底层连接机制具有潜在启发，虽然当前是理论模型，但其几何思想可迁移到数据驱动的表征分析中。
- 下一步行动建议：可尝试将拉回度量概念融入深度学习编码模型，作为流形等距性或信息最大化的几何损失，或在fMRI表征相似性分析中用费舍尔信息度量刺激分辨力。

（完）
