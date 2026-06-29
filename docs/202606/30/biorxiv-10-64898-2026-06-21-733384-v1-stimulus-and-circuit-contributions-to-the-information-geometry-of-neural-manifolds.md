---
title: Stimulus and circuit contributions to the information geometry of neural manifolds
title_zh: 刺激和回路对神经流形信息几何的贡献
authors: "Goedeke, S., Kautz, J. K., Leibold, C."
date: 2026-06-25
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.21.733384v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 将神经流形几何与循环网络中的信息编码联系起来
tldr: 本研究针对神经流形几何与网络机制及信息编码缺乏严格框架的问题，开发微分几何方法分析率基循环网络。通过推导拉回度量与费雪信息矩阵的关系，揭示前馈连接对表征几何的关键作用：慢噪声下信息仅依赖前馈，网格细胞示例表明前馈即可生成环面流形；而循环连接在快噪声下改善编码，实现选择性降噪。
source: biorxiv
selection_source: fresh_fetch
motivation: 缺乏连接神经流形几何、网络机制与信息编码的严格框架。
method: 采用微分几何分析率基循环网络，导出拉回度量并与费雪信息建立联系。
result: 流形几何直接关联信息编码；慢噪声下前馈主导信息几何，网格细胞中前馈生成环面流形；循环连接仅在快噪声下提升编码。
conclusion: 前馈连接决定表征几何，循环连接实现选择性降噪。
---

## 摘要
理解网络连接如何塑造神经表征是系统神经科学的核心。虽然降维方法揭示了群体记录中的低维流形结构，但将流形几何与网络机制和信息编码联系起来的严格框架仍然缺失。我们发展了一种微分几何方法，用于分析接收调谐前馈输入的基于发放率的递归网络中的神经流形。我们推导出神经流形拉回度规的表达式，展示了输入调谐曲线以及前馈和递归突触连接如何塑造流形几何。关键的是，我们建立了稳态下的费舍尔信息矩阵也具有拉回度规的结构，直接将内禀流形几何与刺激辨别能力和信息编码联系起来。对于通过网络传播的慢时间相关噪声，我们证明递归效应对信息几何的影响相互抵消：费舍尔信息仅取决于前馈连接。因此，前馈连接关键地决定了表征几何。我们将该方法应用于六边形网格细胞模块对空间的表征。我们首先证明，对于随机分布的网格相位，该表征近似等距。此外，线性前馈变换可以将空间上随机的输入调谐曲线映射为六边形网格细胞群体，从而生成环面神经流形。因此，仅前馈连接就能产生结构化的空间表征，而无需精心调谐的递归连接或连续吸引子动力学。然而，递归连接被证明在快速噪声下能改善刺激编码，从而实现选择性降噪。

## Abstract
Understanding how network connectivity shapes neural representations is central to systems neuroscience. While dimensionality reduction methods uncover low-dimensional manifold structure in population recordings, a rigorous framework connecting manifold geometry to network mechanisms and information encoding remains lacking. We develop a differential geometric approach for analyzing neural manifolds in rate-based recurrent networks receiving tuned feedforward inputs. We derive expressions for the pullback metric of neural manifolds, showing how input tuning curves together with feedforward and recurrent synaptic connectivity shape manifold geometry. Critically, we establish that the Fisher information matrix at steady states also has the structure of a pullback metric, directly linking intrinsic manifold geometry to stimulus discriminability and information encoding. For noise with slow temporal correlations propagated through the network, we show that recurrent effects on information geometry cancel: Fisher information depends only on the feedforward connectivity. Thus, feedforward connectivity critically determines representational geometry. We apply our approach to the representation of space by a module of hexagonal grid cells. We first demonstrate that the representation is approximately isometric for a random distribution of grid phases. Moreover, a linear feedforward transformation can map spatially random input tuning curves into a population of hexagonal grid cells, generating a toroidal neural manifold. Thus, feedforward connectivity alone can generate structured spatial representations without requiring carefully tuned recurrent connectivity or continuous attractor dynamics. Recurrent connectivity, however, is shown to improve stimulus encoding under fast noise, thereby implementing a selective noise reduction.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：该论文将神经群体流形几何与刺激编码的 Fisher 信息建立直接映射，与脑解码、脑编码和神经先验的研究方向存在中等关联。它主要解决“流形几何如何表征信息”这一基础问题，对理解群体编码极限和解码不确定性有理论价值。
- **启发与意义**：工作揭示了前馈连接在塑造表征几何中的核心作用，说明即使在没有精细递归回路的情况下也能生成结构化空间表征（如网格细胞）。这对于构建基于神经先验的解码模型或约束编码-解码对应关系具有一定启发。
- **可借鉴点**：Fisher 信息矩阵作为拉回度规的框架可直接用于量化群体流形的局部分辨能力，为 fMRI 表征分析或跨被试对齐提供几何约束；噪声传播分析可被借鉴来评估多模态噪声下表征的稳健性。
- **阅读建议**：若非专门从事神经流形理论或计算神经科学研究，可重点关注其几何-信息编码桥梁思想及噪声依赖性结论；对于需要设计神经先验或解码极限分析的读者，宜精读其公式推导与网格细胞案例。

## 1. 论文的核心问题与整体含义
- **研究动机**：系统神经科学常通过降维发现低维神经流形，但缺少一个将流形几何、神经网络机制与信息编码联系起来的严格理论框架。现有工作常常只关注流形的拓扑，而忽略其度量结构。
- **核心问题**：作者试图建立一种微分几何方法，直接由网络参数（前馈连接 $M$、递归连接 $W$、调谐曲线 $\psi(z)$）解析地导出神经流形的内禀几何，并揭示流形几何与刺激编码的信息度量（Fisher 信息）之间的定量关系。
- **整体含义**：这项工作表明，神经流形的拉回度规 $g_M(z)$ 在特定噪声假设下等价于 Fisher 信息矩阵；前馈连接在慢噪声条件下决定表征几何，而递归连接只在快噪声时通过选择性降噪提升编码。该理论为理解网络结构如何限制或增强神经编码提供了清晰桥梁。

## 2. 论文提出的方法论
- **核心思想**：将刺激空间到神经活动的映射视为流形嵌入，用黎曼几何的拉回度规度量活动模式对刺激变化的灵敏度；并利用信息几何将 Fisher 信息解释为统计流形的内禀度量，从而连接机械模型与解码极限。
- **关键技术细节**：
  - 定义率基递归网络稳态 $x^*(z)$，满足 $x^* - W\phi(x^*) = M\psi(z)$，并假设线性化稳定。
  - 神经流形的拉回度规为 $g_M(z) = (\partial_z x^*)^T \partial_z x^*$，经推导得 $g_M(z) = (\partial_z\psi)^T M^T [1-W]^{-T}[1-W]^{-1} M \partial_z\psi$，显式结合了 $W, M, \psi$ 的贡献。
  - Fisher 信息矩阵：若噪声分布仅依赖于均值 $x^*(z)$，则 $I(z) = (\partial_z x^*)^T \tilde{I} \partial_z x^*$，其中 $\tilde{I}$ 为噪声分布的 Fisher 信息。在加性、刺激无关的各向同性高斯噪声下，$I(z) = \sigma^{-2} g_M(z)$；在传播噪声下，$\Sigma_\xi$ 由连续 Lyapunov 方程给出，进而影响 $I(z)$。
  - 噪声传播分析：区分慢噪声（$\Sigma'(t)\approx\Sigma'$）与快噪声（白噪声）；慢噪声下递归效应完全抵消，$I(z) = (\partial_z\psi)^T M^T (\Sigma')^{-1} M \partial_z\psi$，与前馈 $M$ 及噪声协方差有关而与 $W$ 无关；快噪声下递归可改善 Fisher 信息。
- **公式/算法流程**：无具体算法，主要为解析推导。关键公式群包括（原文略，此处仅概括）。
  - 稳态方程线性化：$[1-W_{x^*}] \partial_z x^* = M \partial_z \psi$
  - 神经度量：$g_M(z) = (\partial_z \psi)^T M^T [1-W]^{-T}[1-W]^{-1} M \partial_z \psi$
  - Fisher 信息（传播噪声）：$I(z) = (\partial_z \psi)^T M^T [1-W]^{-T} \Sigma_\xi^{-1} [1-W]^{-1} M \partial_z \psi$
  - 慢噪声下递归抵消：$\Sigma_\xi$ 中的 $W$ 依赖被消除，最终 $I(z)$ 仅保留 $\Sigma'$。
  - 快噪声下递归作用通过 $[1-W]\Sigma_\xi[1-W]^T$ 的谱分解表达。

## 3. 实验设计
- **数据集/场景**：论文未采用真实神经数据，而是构建了三种合成场景来验证和展示理论：
  - 两个神经元低秩网络，一维刺激（$z\in[-1,1]$），输入为两个高斯调谐曲线。
  - 环状刺激上的群体编码，使用 von Mises 分布偏好刺激的余弦调谐函数。
  - 二维空间网格细胞模块，采用三平面波叠加的经典模型，以及随机傅里叶空间输入的 Hebbian 前馈模型。
- **对比方法/基准**：主要对比不同连接结构（有无递归 $W$）、不同噪声特性（慢噪声 vs. 快噪声、各向同性 vs. 非各向同性）和不同相位分布（规则六边形网格 vs. 随机 vs. 微扰）下的度量与 Fisher 信息。基准多为解析预期，如等距性（恒定 $g(z)$）或理想网格细胞几何。
- **实验工具**：使用 Isomap 降维可视化环面拓扑；绘制拉回度规的行列式（体积元）、迹等作为几何指标。

## 4. 资源与算力
- 文中未提及任何 GPU 型号、数量或训练时长。所有计算均为解析推导或小规模数值模拟（如 $N=256$ 网络），应可在普通 CPU 上完成，无大规模算力需求。因此，该论文不涉及大规模计算资源报告。

## 5. 实验数量与充分性
- 总共呈现了约 5-6 组数值实验：低秩两神经元、环状偏差调谐、规则网格细胞等距性、微扰相位下的几何变化、Hebbian 前馈网格生成、快噪声下递归效应（含两个 $W$ 消除对比）。每组实验内部又包含不同参数组合（如 $\sigma_{pert}/\ell$、$N$ 值、噪声相关性等）。
- 充分性：实验类型覆盖了核心理论的关键预测（前馈塑造几何、慢噪声递归抵消、快噪声递归提升），并且通过消融（移除 $W$ 的第二大主成分）对比了拓扑与度量的变化，设计较为系统。
- 客观性与公平性：对比均在相同噪声假设或同一网络框架内进行，解析结果与数值结果相互印证；但网格细胞模块的分析限于特定模型（三平面波），未对比其他连续吸引子实现。

## 6. 论文的主要结论与发现
- **几何与信息编码的统一**：在刺激无关的各向同性高斯噪声下，神经流形的内禀度规 $g_M(z)$ 正比于 Fisher 信息，使几何直接关联局部刺激分辨能力。
- **前馈连接的主导角色（慢噪声）**：对于缓慢波动的噪声，递归权重对 Fisher 信息的影响被抵消，表征几何完全由前馈调谐曲线和前馈连接矩阵 $M$ 决定。这表明即使没有精细的递归连接，仅凭前馈即可产生丰富的流形几何（如环面）。
- **递归连接的选择性降噪（快噪声）**：在快速（白）噪声下，递归权重通过其本征模式平均掉噪声，提高信噪比，从而增大 Fisher 信息；这一益处发生在权重矩阵所张成的子空间内。
- **网格细胞案例**：规则六边形网格相位布局可实现等距表征；随机相位或 Hebbian 前馈模型生成的网格细胞仍然近似等距，且环面拓扑可由前馈外积权重单独产生。该结果挑战了连续吸引子理论对网格细胞形成的必须性。

## 7. 优点
- **理论严谨**：将神经流形几何、网络参数与信息论框架（Fisher 信息、Cramér-Rao 界）紧密结合，提供了从电路到编码的封闭解析解。
- **噪声依赖性分析**：系统地区分了快/慢噪声对递归连接功能的影响，澄清了看似矛盾的实验结果的可能原因。
- **应用示范清晰**：通过网格细胞模块演示了框架的适用性，并展示了前馈模型生成环面的能力，为实验神经科学提供了可检验的预测（如前馈权重的重要性）。
- **几何视角独特**：内禀几何（度量、Ricci 标量）与外蕴几何的区分，为后续探讨下游脑区线性读出与非线性格局分析的关系提出了方向。

## 8. 不足与局限
- **模型简化**：限于线性化稳态网络，未涵盖暂态动力学、尖峰发放、非线性激活函数的丰富影响；未处理连续吸引子或鞍点决策等重要动态。
- **噪声假设**：假设噪声仅依赖于活动均值，且主要分析高斯型噪声；真实神经元的 Poisson 噪声仅简要提及，未深入探讨其对几何度规的扭曲。
- **实验覆盖有限**：只在少数合成示例上验证，未推广到真实神经数据或多模块相互作用；网格细胞案例局限于单模块，未讨论速度输入等。
- **外蕴几何忽略**：虽指出了内禀与外蕴几何的差异，但未量化外蕴曲率或其对线性读出的影响，而线性读出在许多解码任务中是标准做法。
- **泛化性**：理论基于固定点 $x^*(z)$ 的唯一性，无法直接应用于多重稳态或自发状态切换网络。

## 9. 研究价值与阅读建议
（已在第一节陈述，此处不重复）

（完）
