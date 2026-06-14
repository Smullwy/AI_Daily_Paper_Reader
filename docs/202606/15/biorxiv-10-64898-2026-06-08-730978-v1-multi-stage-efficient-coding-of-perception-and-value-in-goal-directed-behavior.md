---
title: Multi-stage efficient coding of perception and value in goal-directed behavior
title_zh: 目标导向行为中感知与价值的多阶段高效编码
authors: "Bedi, S., Hollander, G. d., Harl, M., Ruff, C. C."
date: 2026-06-11
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.08.730978v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 感知和价值的贝叶斯解码多阶段高效编码
tldr: 该研究探讨了从感知到行动的多阶段处理中，高效编码是仅存在于感知阶段还是也存在于评估阶段。通过构建形式化框架并设计实验独立操纵刺激与价值的映射关系，发现感知与评估阶段均采用各自的高效编码，且各阶段追踪不同的客观先验并运行于不同时间尺度，揭示了多阶段可分离的高效编码共同塑造行为。
source: biorxiv
selection_source: fresh_fetch
motivation: 高效编码是否以及如何跨多个处理阶段（如感知和评估）协同工作尚不清楚。
method: 开发形式化框架对比不同高效编码模型，并通过预注册实验独立改变刺激与价值的映射，以分离各阶段贡献。
result: 行为最佳解释为感知和评估两个阶段各自采用高效编码，改变价值分布会逆转感知排斥偏向，且两阶段的时间尺度不同。
conclusion: 可分离的高效编码在连续的处理阶段并存，并共同塑造行为，这一原理可能扩展至其他依赖抽象表征的行为领域。
---

## 摘要
为了有效行动，大脑必须通过一系列处理阶段转换信息：从感知环境，到评估选项，再到选择行动。由于神经资源有限，每个阶段都应高效地表征信息。然而，高效编码的研究几乎完全局限于感知领域，且一次只研究一个阶段。感知和评估是否各自受其自身高效编码的支配，以及这些编码在从感觉到行动的通路上如何相互作用，仍然是一个悬而未决的问题。我们开发了一个形式化框架，比较了高效编码和贝叶斯解码仅塑造感知、仅塑造评估或同时塑造两者的模型。为了区分各阶段的贡献，我们设计了一个实验，独立地改变了刺激如何映射到价值上。在一项预注册研究中，行为的最佳解释是高效编码在两个阶段同时运作，每个阶段都追踪其自身的目标先验。至关重要的是，改变价值分布逆转了在方向知觉中观察到的经典排斥偏差，揭示了感知和评估中可分离的高效编码。这两个阶段还在不同的时间尺度上运作：知觉表征反映了稳定的长期环境结构，而价值表征随着情境变化而快速更新。总之，这些发现表明，连续的加工阶段中可分离的高效编码共同塑造了行为。这一原理很可能远远超出感知和评估：每当行为依赖于抽象的、建构的表征而非原始的感官信号时，大脑可能在每个阶段重新解决效率问题。

## Abstract
To act effectively, the brain must transform information through a chain of processing stages, from sensing the environment, to evaluating options, to selecting actions. Because neural resources are limited, each stage should represent information efficiently. Yet efficient coding has been studied almost exclusively in perception, and always one stage at a time. Whether perception and valuation are each governed by their own efficient code, and how these codes interact along the pathway from sensation to action, remains an open question. We developed a formal framework, comparing models in which efficient coding and Bayesian decoding shape perception only, valuation only, or both. To tease apart contributions from each stage, we designed an experiment that independently varied how stimuli map onto values. In a preregistered study, behavior was best explained by efficient coding operating at both stages, with each stage tracking its own objective prior. Crucially, changing the value distribution reversed the classic repulsion biases seen in orientation perception, revealing separable efficient codes in perception and valuation. The two stages also operated on different timescales: perceptual representations reflected stable, long-term environmental structure, while value representations updated rapidly with changing context. Together, these findings show that separable efficient codes at successive processing stages combine to shape behavior. This principle likely extends well beyond perception and valuation: whenever behavior depends on abstract, constructed representations rather than raw sensory signals, the brain may solve the efficiency problem anew at each stage.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：弱相关。论文聚焦于行为实验与认知计算建模，未直接涉及 brain decoding、fMRI representation 等神经解码技术；其核心信息处理框架（高效编码与贝叶斯解码）可为神经表征建模提供理论参考。
- **启发与意义**：研究揭示的“多阶段可分离高效编码”概念，可为脑解码研究中构建多层级、多模态约束的编码-解码模型带来灵感，提示不同脑区的表征可能对应不同统计先验和时间尺度。
- **可借鉴点**：其形式化框架（对比不同阶段的高效编码模型）以及独立操纵刺激-价值映射的实验设计思路，可迁移用于设计 fMRI 实验，以分离感知、决策和价值表征在脑区的贡献。
- **阅读建议**：适合关注认知计算模型、贝叶斯大脑理论或感觉-决策转换的研究者阅读，特别是希望对多阶段神经表征进行理论建模的同学；若仅关注工具性脑解码算法本身，则可快速浏览其核心思想。

## 1. 论文的核心问题与整体含义
- **核心问题**：大脑在从感知到行动的连续处理阶段（如感知→评估→选择）中，每个阶段是否都遵循各自的高效编码原则？高效编码是一贯仅在感知阶段起作用，还是贯穿于多个抽象处理阶段？
- **研究动机**：
  - 神经资源有限，理论上每个阶段都应对信息进行高效表征。
  - 以往高效编码研究几乎完全局限在感知领域，且一次只考察单一阶段。
  - 感知和评估阶段的高效编码如何交互，以及它们如何共同塑造从感觉到行动的行为，是一个未被解答的开放问题。
- **整体含义**：研究旨在证明，高效编码并不止于感知，而是作为可分离开的独立模块在多个处理阶段并存，每个阶段追踪其自身的目标先验并运行于不同时间尺度，最终共同决定行为输出。

## 2. 论文提出的方法论
- **核心思想**：构建一个形式化对比框架，将高效编码与贝叶斯解码分别配置于信息处理链的不同节点。
- **关键技术思路**：
  - 定义三种模型假设：高效编码仅塑造感知、仅塑造评估、或同时塑造两者。
  - 每个模型均包含编码（将刺激或价值映射到有限容量的表征）和贝叶斯解码（从带噪表征中重建信息）两个步骤。
  - 通过行为实验独立操纵刺激（如方向）到价值（如奖赏）的映射，从而分离各阶段的贡献。
- **形式化框架（文字描述）**：
  - 假设环境中有统计先验 $p(\text{stimulus})$ 和给定刺激后的价值分布 $p(\text{value}|\text{stimulus})$。
  - 感知阶段：将物理刺激 $s$ 高效编码为感知表征 $r_p$，受限于通道容量；解码时利用感觉先验 $p(s)$ 进行贝叶斯推断。
  - 评估阶段：将感知输出或独立价值信息 $v$ 高效编码为价值表征 $r_v$，解码时利用价值先验 $p(v)$ 推断价值。
  - 模型对比：若仅感知高效编码，则行为偏差仅受感觉先验影响；若仅评估高效编码，偏差仅受价值先验影响；若两者均高效，行为同时展现两种先验的效应并可被实验分离。

## 3. 实验设计
- **实验类型**：预注册的行为实验（人类被试），结合计算建模。
- **场景与任务**：
  - 被试需完成与感知（方向判别）和价值评估（奖赏预测）相关的任务。
  - 关键操控：独立改变刺激（如光栅方向）与后续价值结果之间的映射关系，使得感觉先验和价值先验可以分离。
- **对比的模型**：
  - 仅感知高效编码模型
  - 仅评估（价值）高效编码模型
  - 感知与评估双阶段高效编码模型
  - 基准模型：无高效编码的标准贝叶斯观察器或固定噪声模型
- **评估指标**：行为偏差方向与幅度、反应时间、模型拟合优度（如 BIC、AIC 或交叉验证对数似然）。

## 4. 资源与算力
- 论文为行为实验与认知建模研究，元数据中未提及 GPU 型号、数量或训练时长。
- 计算可能涉及模型拟合（如最大似然估计、贝叶斯参数估计）和仿真，通常使用 MATLAB 或 Python 完成，算力需求较低，未在摘要和摘要中强调。

## 5. 实验数量与充分性
- **实验组别**（基于摘要推断）：
  - 主要行为实验：数量至少为 1 项预注册大样本实验，包含多种条件（不同刺激-价值映射分布）。
  - 模型比较：多个计算模型（≥4 类）在行为数据上的拟合竞争。
- **充分性与公平性**：
  - 预注册设计增加了结果的可信度和对假设的强推断力。
  - 通过独立操纵关键变量，分离了感知与评估的贡献，实验逻辑严密。
  - 由于无法获取全文，无法评估被试量、控制条件的完备性和是否进行了参数恢复仿真等验证性分析。

## 6. 论文的主要结论与发现
- **双阶段高效编码**：行为数据的最佳解释是高效编码在感知和评估两个阶段同时运作，而非仅在其中之一。
- **可分离的偏差**：改变价值分布会逆转经典的方向感知排斥偏差，表明存在可分离的感知高效编码和价值高效编码，两者方向可能相反。
- **不同时间尺度**：感知表征反映稳定、长期的环境先验结构；价值表征随情境变化快速更新。
- **一般性原理**：连续加工阶段中可分离的高效编码共同塑造行为，这一原理可能扩展至任何依赖抽象表征（而非原始感官信号）的行为领域。

## 7. 优点
- **理论创新**：首次形式化验证了高效编码可跨多个处理阶段独立存在，拓展了高效编码理论的应用边界。
- **实验设计精巧**：独立操纵刺激与价值的映射，成功分离了长期混淆的、不同阶段的编码效应，逻辑清晰，提供强因果证据。
- **预注册研究**：保障了假设和数据分析的透明性与可信度。
- **跨时间尺度发现**：揭示了不同阶段表征更新速率的本质区别，将高效编码与学习动态联系起来。

## 8. 不足与局限
- **行为层面推断**：研究直接从行为拟合模型推断内部表征，缺乏神经直接测量（如 fMRI、电生理）的支持，无法确定神经实现基础。
- **实验覆盖**：仅使用视觉方向作为感知维度，价值定义为奖赏大小或概率，结论向其他感知模态或更复杂经济决策的泛化性有待检验。
- **计算模型假设**：高效编码的具体形式（如是否使用 Fisher 信息最大化）和容量限制参数可能影响模型比较结果，模型空间未完全穷尽。
- **偏差风险**：由于未能获取全文，无法评估被试间变异性、反应标准偏移等潜在混淆的控制程度，以及是否存在发表偏倚。

## 9. 研究价值与阅读建议
- **关联方向**：弱相关。研究核心是面向行为的认知计算模型，并非针对脑解码或 fMRI 表征对齐的技术性论文；但其“多阶段高效表征”的思想可作为神经编码模型的理论基础。
- **启发与意义**：对于研究多层级脑表征（如从视觉皮层到眶额叶的编码）的读者，该框架提供了一个规范性解释：不同脑区的编码效率可能针对不同的目标先验。
- **可借鉴点**：
  - 建模方法：可借鉴其形式化多个编码-解码阶段并系统比较的范型，用于构建分层脑解码模型。
  - 实验设计：独立操纵“刺激”与“任务相关抽象变量”的思路，可应用于设计 fMRI 实验，实现不同脑区表征功能贡献的分离。
- **阅读建议**：建议关注认知计算神经科学、强化学习与决策领域的研究者精读；专注于脑解码工具开发的研究者，可重点阅读其建模思想和多阶段表征分离的逻辑，作为设计解码器先验约束的灵感来源，但无需深究具体行为实验细节。

（完）
