---
title: Modeling Dynamical Vision with Biologically Plausible Recurrent Convolutional Networks
title_zh: 用生物合理的循环卷积网络建模动态视觉
authors: "Gutzen, R., Lindsay, G. W."
date: 2026-06-26
pdf: "https://www.biorxiv.org/content/10.1101/2025.08.11.669756v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 生物合理的循环卷积网络用于动态视觉
tldr: 本文针对标准CNN缺乏生物视觉递归连接的问题，开发了开源工具箱DynVision，用于构建和评估生物可信的递归卷积网络。该工具箱支持异构延迟和多种横向递归，训练高效。通过系统探索，发现连续时间递归动态可自然产生皮层适应等现象，且特定配置实现噪声鲁棒性，揭示了递归功能差异，强调统一框架对动态视觉建模的必要性。
source: biorxiv
selection_source: fresh_fetch
motivation: 标准CNN缺乏视觉皮层普遍的递归连接，且现有工具难以系统比较不同递归架构对神经动态的影响。
method: 开发模块化开源工具箱DynVision，实现带延迟的ODE求解器和五种横向递归，配置驱动设计以构建和评估递归CNN。
result: 参数探索显示连续时间递归可自发产生皮层时间现象，另一配置达到接近人类的噪声鲁棒性，且动态对目标位置和损失窗口等选择高度敏感。
conclusion: 递归功能配置显著影响动态特性，凸显统一建模框架的重要性，DynVision提供了必要工具以系统研究生物视觉。
---

## 摘要
用于图像识别的卷积神经网络（CNN）已展现出与灵长类腹侧视觉通路显著的相似性，但其标准的前馈架构缺乏视觉皮层中普遍存在的循环连接。这种循环被认为是适应、延迟归一化和对噪声输入的鲁棒性等时空现象的基础。然而，将功能上有益的循环纳入CNN以捕捉生物视觉的时空现象仍然具有挑战性。尽管最近的进展引入了神经生物学约束，但该领域缺乏可使用的工具，用于系统比较不同的架构选择（如循环类型、时间延迟和连接模式）如何塑造神经动力学和行为。在此，我们介绍DynVision，一个模块化的开源工具箱，用于构建和评估生物合理的循环卷积神经网络（RCNN）。DynVision实现了具有异构延迟的数值常微分方程求解器，支持五种类型的横向循环，范围从简单的自连接到皮层组织的局部循环，并通过配置驱动的设计将科学建模决策与实现细节分开。训练计算效率高，相比参考实现实现了52%的加速。我们通过系统地探索参数空间来展示该框架，揭示了时间动力学的定性差异对通常隐含的建模选择高度敏感，例如循环整合的目标位置和用于损失计算的时间窗口。关键的是，我们发现连续时间循环动态可以自然地产生皮层时间现象，而无需显式的除法归一化，同时另一种循环配置产生的噪声鲁棒性接近人类水平的表现。这些发现表明功能上不同的循环配置，并强调了创建完全真实模型的挑战，从而强调需要一个全面且连贯的建模框架来辅助探索。代码和文档可在https://github.com/Lindsay-Lab/DynVision/获取。

## Abstract
Convolutional Neural Networks (CNNs) trained for image recognition have demonstrated remarkable conceptual similarities to the primate ventral visual pathway, but their standard feedforward architectures lack the recurrent connections that are ubiquitous in visual cortex. Such recurrence is thought to underlie spatiotemporal phenomena including adaptation, delayed normalization, and robustness to noisy input.However, incorporating functionally beneficial recurrence into CNNs that captures spatiotemporal phenomena of biological vision remains challenging. Although recent advances have incorporated neurobiological constraints, the field lacks accessible tools for systematically comparing how different architectural choices, such as recurrence type, temporal delays, and connectivity patterns, shape neural dynamics and behavior. Here, we introduce DynVision, a modular open-source toolbox for constructing and evaluating biologically plausible recurrent convolutional neural networks (RCNNs). DynVision implements numerical ODE solvers with heterogeneous delays, supports five types of lateral recurrence ranging from simple self-connections to cortically-organized local recurrence, and separates scientific modeling decisions from implementation details through a configuration-driven design. Training is computationally efficient, achieving a 52% speedup over reference implementations.We demonstrate the framework through systematic exploration of the parameter space, revealing that qualitative differences in temporal dynamics are highly sensitive to often-implicit modeling choices such as the target location of recurrent integration and the temporal window used for loss computation. Critically, we find that continuous-time recurrent dynamics can naturally give rise to cortical temporal phenomena without requiring explicit divisive normalization, while a different recurrent configuration produces noise robustness approaching human-level performance. These findings suggest functionally distinct configurations of recurrence and highlight the challenge of creating fully realistic models, thus emphasizing the need for a comprehensive and cohesive modeling framework to aid exploration. Code and documentation are available at https://github.com/Lindsay-Lab/DynVision/.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：脑编码（brain encoding）与表征对齐（representation alignment），该工作构建了具备生物合理循环动态的视觉模型，可产出更接近皮层时空响应的表征。
- **启发与意义**：为大脑编码提供一种基于连续时间递归的神经先验，有望在动态刺激条件下提升脑响应预测的拟合度。
- **可借鉴点**：DynVision 的配置驱动、异构延迟 ODE 求解及五种横向递归模块，可直接迁移为 fMRI 编码模型的递归组件设计。
- **阅读建议**：若需将模型中的递归连接与时序处理引入脑编码研究，请重点阅读其递归配置选择对动态影响的系统对比实验。

## 1. 核心问题与整体含义
- **研究动机**：标准 CNN 在建模灵长类腹侧视觉通路时已显相似性，但其前馈架构缺少视觉皮层中普遍存在的横向递归连接。这些连接被认为是适应、延迟归一化及噪声鲁棒性等时空现象的基础。
- **研究缺口**：将功能性递归纳入 CNN 并捕捉生物视觉的时空现象依然困难；领域缺乏可系统比较不同递归类型、时间延迟和连接模式如何影响神经动态与行为的工具。
- **整体含义**：本文提供 DynVision 工具箱，通过模块化、生物合理的递归卷积网络（RCNN）实现动态视觉建模，旨在为一个缺乏统一框架的探索性领域提供基础设施，并揭示隐式建模选择对动态的敏感影响。

## 2. 方法论
- **核心思想**：以配置驱动、模块化方式构建和评估具有生物合理横向递归的 CNN，将科学建模决策与实现细节解耦，便于系统对比。
- **关键技术细节**：
  - 采用具备**异构延迟**的数值常微分方程（ODE）求解器模拟连续时间递归动态。
  - 支持**五种横向递归类型**，涵盖从简单自连接到符合皮层组织模式的局部递归。
  - **配置驱动设计**：用户通过配置文件指定递归拓扑、时间常数、集成目标位置等，无需改动底层代码。
  - 训练效率优化：相比参考实现实现 **52% 的加速**。
- **算法流程（文字描述）**：在前馈 CNN 的某一层或某几层嵌入延迟 ODE 求解器，将当前时刻输入与该层历史状态经横向递归整合后更新激活，通过时间窗口内的累积损失进行端到端训练。

## 3. 实验设计
- **数据集 / 场景**：摘要未指名具体数据集，但依据任务（图像识别与噪声鲁棒性），推测使用标准物体分类数据集（如 ImageNet）及添加噪声的变体。
- **Benchmark 与对比方法**：
  - 定性对比不同递归配置（递归目标位置、损失时间窗口等）产生的神经动态。
  - 与前馈 CNN 基线及人类行为表现对比噪声鲁棒性。
  - 内部消融：对比不同类型递归（自连接、局部皮层递归等）的行为与动态差异。
- **评测维度**：时间动力学现象的涌现（如适应、延迟归一化）、分类准确率与噪声鲁棒性水平。

## 4. 资源与算力
- 文中**未明确说明**所用 GPU 型号、数量或训练时长。仅提及工具箱训练计算效率较高，较参考实现有 52% 加速，但无绝对算力数据。

## 5. 实验数量与充分性
- **实验覆盖**：摘要提及系统性参数空间探索、不同递归配置定性比较、噪声鲁棒性评估三大类实验。具体实验组数和消融项未给出，但从 “系统性探索”“定性差异高度敏感” 等措辞推断，实验覆盖了递归目标位置、时间窗口、递归类型等多个因素。
- **充分性与客观性**：实验设计以参数扫查、定性对比为主，若能提供完整量化结果与统计检验则更充分；目前基于摘要的判断认为实验逻辑自洽、对比公平，但受限于信息量，无法评估是否有遗漏的重要对比（如与显式除法归一化模型的直接对比）。

## 6. 主要结论与发现
- **连续时间递归动态可自然涌现皮层时间现象**：在不需要显式除法归一化的情况下，模型自发产生适应与延迟归一化。
- **特定递归配置实现接近人类的噪声鲁棒性**：表明不同横向递归在功能上存在显著差异。
- **动态对隐式建模选择高度敏感**：递归整合的目标位置、损失计算的时间窗口等细节会显著改变动力学特性。
- **统一框架的必要性**：以上发现凸显一个全面、连贯的建模框架对于系统研究生物视觉动态至关重要，DynVision 正填补这一空白。

## 7. 优点
- **模块化与配置驱动**：将科学建模与工程实现分开，极大降低探索架构空间的门槛。
- **生物合理性覆盖广**：同时支持异构延迟、多种横向递归类型与连续时间动力学。
- **高效训练**：有针对性的工程优化带来 52% 加速，有利于大规模实验。
- **发现具有反直觉价值**：揭示简单隐式选择（如损失时间窗）对动态的颠覆性影响，警示研究者需谨慎报告建模细节。
- **全面开源**：代码、文档公开，促进复现与社区扩展。

## 8. 不足与局限
- **实验细节缺失**（基于摘要）：未标明具体数据集、噪声类型与基线模型配置，外部可复现性受限。
- **生物学对应验证有限**：虽能涌现适应、延迟归一化，但与真实神经数据的定量拟合程度未见报告。
- **任务范围受限于静态分类扩展**：主要在图像分类任务上验证，是否适用于动态视觉序列、视频或多感官任务未知。
- **递归设计搜索空间仍较大**：虽支持五种横向递归，但连接模式、层级选择等组合爆炸问题未全部解决，指导原则尚不充分。
- **算力信息不明**：未提供计算资源需求，难以判断对大规模建模的扩展成本。

## 9. 研究价值与阅读建议（已前置为第一节）

（完）
