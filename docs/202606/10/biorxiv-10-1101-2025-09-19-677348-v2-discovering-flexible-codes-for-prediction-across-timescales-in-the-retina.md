---
title: Discovering flexible codes for prediction across timescales in the retina
title_zh: 发现视网膜中跨时间尺度的灵活预测编码
authors: "Bojanek, K., Lefebvre, B., Salisbury, J. M., Marre, O., Palmer, S."
date: 2026-06-05
pdf: "https://www.biorxiv.org/content/10.1101/2025.09.19.677348v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 视网膜使用信息瓶颈进行预测编码；视觉大脑编码模型
tldr: 本研究探讨视网膜如何根据视觉输入的时间统计特性灵活调整预测编码。通过记录蝾螈视网膜神经节细胞群体对随机移动条刺激的响应，使用信息瓶颈框架推断预测时程，发现视网膜会根据刺激动态的时间常数调整预测时程，并转向编码更多速度信息，同时保持接近最优的预测效率。结果表明视网膜群体编码能灵活调整预测尺度以适应输入的时间结构。
source: biorxiv
selection_source: fresh_fetch
motivation: 探索视网膜在视觉输入时间统计特性变化时如何自适应编码以支持快速预测行为。
method: 记录蝾螈视网膜神经节细胞群体在五种时间相关尺度下对随机移动条刺激的响应，并利用信息瓶颈框架推断最优预测时程。
result: 视网膜预测编码随刺激统计特性改变：刺激时间常数增大时预测时程变长，群体编码更多速度信息，运动预测增强。
conclusion: 视网膜群体编码灵活调整其预测时程以适应输入的时间结构，信息瓶颈框架可用于发现感觉群体的计算目标。
---

## 摘要
视网膜必须以支持快速预测行为的方式对视觉信息进行编码，尽管存在显著的处理延迟。当视觉输入的时间统计特性发生变化时，这种编码如何适应不断变化的世界仍是一个悬而未决的问题。在此，我们记录了墨西哥钝口螈视网膜神经节细胞群体对五种不同时间相关尺度下随机移动光条刺激的响应。利用信息瓶颈（IB）框架，并将预测时间范围视为从数据中推断出的自由参数，我们探究在每种刺激条件下，视网膜被优化以预测未来运动的哪个时间尺度。我们发现，视网膜会使其预测编码适应不断变化的刺激统计特性：随着刺激动力学时间常数的增加，推断出的预测时间范围会延长。群体转向编码更多的速度信息，运动预期增强，同时始终保持近乎最优的预测效率。通过玻尔兹曼机模型量化的群体惊奇度，在所推断的最优压缩下追踪了刺激惊奇度。这将视网膜的反转响应与高效预测编码联系起来。这些结果表明，视网膜群体编码能灵活地根据其输入的时间结构调整预测时间尺度。更广泛地说，它们证明了信息瓶颈框架可用于发现而不仅仅是检验感觉群体的计算目标。

## Abstract
The retina must encode visual information in a way that supports fast, predictive behavior despite significant processing delays. How this encoding adapts in an ever-changing world, when the temporal statistics of visual input shift, remains an open question. Here we record from populations of retinal ganglion cells in the axolotl as they respond to a stochastic moving bar stimulus across five different temporal correlation scales. Using the information bottleneck (IB) framework, and treating the prediction horizon as a free parameter inferred from the data, we ask what timescale of future motion the retina is optimized to predict under each stimulus condition. We find that the retina adapts its predictive encoding to the changing stimulus statistics: as the time constant of the stimulus dynamics increases, the inferred prediction horizon lengthens. The population shifts toward encoding more velocity information, and motion anticipation grows, all the while maintaining near-optimal prediction efficiency. Population surprise, quantified through a Boltzmann machine model of the retinal response distribution, tracks stimulus surprise under the inferred optimal compression. This connects the retina's reversal response to efficient predictive encoding. These results show that retinal population codes flexibly adjust their predictive timescale to the temporal structure of their inputs. More broadly, they demonstrate that the IB framework can be used to discover, not just test for, computational objectives in sensory populations.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
*   **关联方向**：与读者“brain encoding”“neural prior”方向弱相关，本文聚焦视网膜群体预测编码而非脑影像或表征对齐。
*   **启发与意义**：验证了信息瓶颈框架可用于从数据中挖掘感官群体的计算目标，为大脑编码模型提供了可迁移的分析范式。
*   **可借鉴点**：将预测时程作为自由参数推断，并利用玻尔兹曼机量化群体惊奇度，可借鉴用于其它神经群体的动态编码研究。
*   **阅读建议**：重点阅读信息瓶颈推断流程和惊喜度分析部分，体会如何无监督地揭示灵活预测编码的时程适应机制。

## 1. 论文的核心问题与整体含义
*   **研究动机**：视网膜需要在存在处理延迟的情况下，快速、预测性地编码视觉信息，以支持生存行为。
*   **核心问题**：当视觉输入的**时间统计特性**（如时间相关尺度）发生变化时，视网膜如何**自适应地调整**其编码策略，特别是对未来运动进行预测的时间尺度。
*   **整体含义**：探索视网膜群体编码是否以及如何灵活调整预测时程以适应动态世界，并检验信息瓶颈框架作为发现计算目标（而非单纯检验假设）的工具的有效性。

## 2. 论文提出的方法论
*   **核心思想**：将视网膜神经节细胞群体响应视作对刺激信息的高效压缩，采用**信息瓶颈（IB）框架**，把“预测未来多远”当作一个可自由优化的参数，从数据中逆向推断最优的预测时程。
*   **关键技术细节**：
    *   **刺激**：使用具有五种不同时间相关尺度（由不同时间常数控制动力学）的随机移动光条。
    *   **记录**：采集墨西哥钝口螈视网膜神经节细胞群体的多通道响应。
    *   **信息瓶颈推断**：构建一个压缩-预测模型，优化目标是保留过去刺激中关于未来刺激的信息（互信息 $I(Y;T)$），同时压缩过去刺激的编码复杂度（互信息 $I(X;T)$），并允许**预测水平时间** $\Delta t$ 自由变化。通过最大化一个与压缩率相关的最优预测效率指标，推断出在每种刺激统计下视网膜被优化的最佳 $\Delta t$。
    *   **辅助分析**：训练一个**玻尔兹曼机**来拟合视网膜响应的概率分布，用其计算群体惊奇度（surprise）即负对数似然 $-\ln p(\text{response})$，并检验该惊奇度是否追踪了刺激的惊奇度，从而建立高效预测编码与反转响应的联系。
*   **公式或算法流程说明**：不涉及具体公式推导，其核心流程为：对每种刺激条件（不同时间常数），通过 IB 优化寻找一个压缩-预测映射，使得预测未来 $\Delta t$ 时刻刺激的准确度与压缩率之间达到最佳平衡，将此时的 $\Delta t$ 作为该条件下的最优预测时程。

## 3. 实验设计
*   **数据集/场景**：墨西哥钝口螈的离体视网膜，通过多电极阵列记录神经节细胞群体对移动条刺激的响应。
*   **刺激条件**：一个随机移动的光条，其**时间动力学**被设定为**五种不同的相关尺度**（即五种不同的自相关时间常数），以系统地改变视觉输入的统计特性。
*   **基准与对比**：本文无明确的外部 benchmark 或与其他编码模型（如线性-非线性模型）的直接比较。其内部对比是基于不同刺激条件下**推断出的预测时程**、**群体编码的速度信息量**以及**运动预期的程度**。

## 4. 资源与算力
*   文中未明确提及用于数据分析或模型训练的具体计算资源，如 GPU 型号、数量、训练时长等。使用的算力可能主要涉及信息瓶颈优化和玻尔兹曼机拟合，属于中等规模计算。

## 5. 实验数量与充分性
*   **实验组数**：至少包含**5种刺激条件**下的群体记录及相应的 IB 推断；另外有基于玻尔兹曼机的惊奇度分析。实验对象为蝾螈视网膜，记录了群体细胞响应。
*   **充分性与公平性**：通过系统操控单一时间统计参量（时间常数）来观察编码变化，设计严谨。对比在统一框架（IB）下进行，客观且内在一致。但未提及跨物种或跨刺激类型的验证，实验数量整体紧凑但能支撑核心结论。

## 6. 论文的主要结论与发现
*   **预测时程灵活调整**：随着刺激动力学的时间常数增大（变化变慢），视网膜编码所对应的最优预测时程显著延长。
*   **编码内容重分配**：群体细胞转向编码更多的**速度信息**，运动预期现象（anticipation）也相应增强。
*   **保持最优效率**：在时程调整过程中，视网膜始终维持在近乎最优的预测效率（预测信息量与压缩率之比）。
*   **惊喜度跟踪**：在最优压缩下，基于响应分布的群体惊奇度紧密追踪了外部刺激的惊奇度，揭示了反转响应与高效预测编码的一致性。
*   **方法论贡献**：证明信息瓶颈框架可作为无监督工具，从神经群体数据中**发现**其优化的计算目标，而不仅限于检验已有假设。

## 7. 优点
*   **框架创新性**：首次将信息瓶颈中的预测水平视作待推断的自由参数，从数据中“发现”视网膜的预测时程偏好，而非预先设定。
*   **现象统一性**：将预测时程、速度编码、运动预期和惊奇度跟踪等多个现象统一在高效预测编码的单一计算框架下解释。
*   **实验系统性强**：通过精确操控刺激的单一统计属性（时间相关尺度），干净地揭示了编码策略的适应性变化。
*   **理论深度**：连接了信息论（IB）、统计物理（玻尔兹曼机惊奇度）与视觉神经生理学三个领域。

## 8. 不足与局限
*   **物种与刺激泛化性**：仅基于蝾螈视网膜和简单移动条刺激，结论能否推广到哺乳动物视网膜及更自然的复杂视觉场景尚待验证。
*   **机制解释缺失**：揭示了现象和优化目标，但对于实现这种灵活预测的**具体回路机制**（如内丛状层连接、无长突细胞贡献）未作探究。
*   **IB 框架假设**：IB 框架隐含了编码目标是最优压缩与预测，但视网膜是否也编码其他非时间性特征（如物性）未在本文考量范围内，可能影响对预测时程推断的单一解释。

（完）
