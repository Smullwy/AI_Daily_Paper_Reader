---
title: Population codes for biological stereopsis extend beyond correlation-based binocular disparity computations
title_zh: 生物立体视觉的群体编码超越了基于相关性的双眼视差计算
authors: "Wundari, B. G., Fujita, I., Ban, H."
date: 2026-05-29
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.21.719805v2.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 跨被试fMRI研究立体视的群体编码及神经网络建模
tldr: 本研究通过心理物理、fMRI和神经网络建模，探究动态反相关刺激下的立体视觉。发现人类可靠感知反转深度，群体表征出现于V3A而非V1；相关约束网络无法完整复现人类深度判断，而无约束深层网络表征更少纠缠且与行为更一致，提示生物立体视觉可能依赖超越相关计算的群体编码。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究基于相关的模型能否解释模糊输入下群体表征支持的深度知觉。
method: 结合心理物理学、功能性磁共振成像和神经网络建模，使用动态反相关刺激。
result: 人类感知反转深度，群体表征在V3A；无相关约束的深层网络更符合人类行为。
conclusion: 生物立体视觉可能依赖超越类似相关计算的群体编码。
---

## 摘要
双眼立体视觉依赖于比较双眼所见的图像。尽管基于相关性的模型能够解释初级视觉皮层（V1）中单个双眼神经元的反应，但由局部相关性活动模式形成的群体表征是否能在模糊输入下支持深度知觉仍不清楚。利用心理物理学、fMRI和神经网络建模，我们通过动态反相关刺激测试了人类立体视觉，这些刺激以双眼不匹配为主。正如基于相关性的计算所预测的那样，人类可靠地感知到了相反的深度，然而与该感知一致的群体表征在V3A而非V1中被检测到。受相关性双眼相互作用约束的浅层和深层神经网络未能捕捉到人类深度判断的完整模式。对其内部表征的分析显示出更大的表征重叠，而未受显式相关性交互约束的深层架构则表现出更少的纠缠表征，并且与人类行为更好地对齐。这些发现表明，生物立体视觉可能依赖于超越相关性计算的群体编码。

## Abstract
Binocular stereopsis depends on comparing the images seen by the two eyes. Although correlation-based models explain responses of individual binocular neurons in primary visual cortex (V1), it remains elusive whether population representations formed by local correlation activity patterns can support depth perception under ambiguous inputs. Using psychophysics, fMRI, and neural network modeling, we tested human stereopsis with dynamic anticorrelated stimuli that were dominated by binocular mismatches. Humans reliably perceived reversed depth as predicted by correlation-based computations, yet population representations consistent with this percept were detected in V3A, not V1. Shallow and deep neural networks constrained by correlation-like binocular interactions did not capture the full pattern of human depth judgments. Analyses of their internal representations showed greater representational overlap, whereas deep architectures not constrained to explicit correlation interactions exhibited less entangled representations and better aligned with human behavior. These findings suggest that biological stereopsis may rely on population coding beyond correlation-like computations.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：与“fMRI representation / representation alignment / brain encoding”高度相关，直接探讨跨脑区群体编码及与神经网络表征的对齐方式。
- **启发与意义**：揭示了立体视觉的群体表征并非严格复刻相关计算，而是涌现于更高级视区；为脑解码和神经先验设计提供了超越简单前馈匹配的新角度。
- **可借鉴点**：可借鉴该研究中“用多种反相关刺激约束模型表征与行为一致性的框架”，用于构建更符合生物视觉表征的 multi-view 约束脑编码模型。
- **阅读建议**：快速把握其“从V1到V3A的表征迁移”关键结果，并重点阅读无约束深层网络的表征解纠缠分析，作为设计脑解码先验的潜在参照。

## 1. 论文的核心问题与整体含义
- **核心问题**：基于局部相关计算的双眼视差模型能解释V1神经元反应，但模糊、冲突输入下，这些局部活动所构成的群体表征能否支撑稳定的深度知觉？生物立体视觉是否必须超越经典的相关性计算？
- **研究动机**：传统理论认为立体视依赖于双眼图像互相关，但反相关刺激（双眼亮暗相反）带来了计算层面的歧义：按相关模型应导致深度反转感知，而实际人脑中这种感知对应的群体编码位于何处、是否仍由相关性约束驱动，尚不明确。
- **整体含义**：该研究试图在行为、脑成像和计算模型三个层面检验立体视觉的群体编码机制，挑战“纯相关计算足以解释立体深度表征”的观点。

## 2. 论文提出的方法论
- **多方法结合框架**：融合心理物理学、功能性磁共振成像（fMRI）和人工神经网络建模，形成从行为、神经表征到计算模型的三角验证。
- **关键刺激设计**：采用**动态反相关刺激**，即双眼局部对比度反转导致双眼不匹配占主导，根据相关模型应产生与物理深度相反的感知。利用这种刺激创造感知的“压力测试”环境。
- **群体表征测量**：通过fMRI检测不同视区（V1、V3A等）对反相关刺激的多体素活动模式，寻找与反转深度知觉相一致的群体表征。
- **网络建模与约束对比**：
  - 构建受**相关性约束**的浅层和深层神经网络，强制其双眼交互模仿传统相关运算（如互相关或反相关操作），考察其对人深度判断模式的复现程度。
  - 构建**无显式相关性交互约束**的深层架构，允许网络自由学习双眼融合方式，对比两种约束条件下内部表征的几何性质（如表征纠缠度）以及与人类行为的一致性。
  - 通过表征相似性分析和判断预测等手段，量化为“表征重叠度”及“与行为对齐程度”。

## 3. 实验设计
- **数据集/被试**：以人类被试为主，进行心理物理和fMRI实验；具体被试数量未在摘要中披露。神经网络训练所用数据可能为大型图像数据集（如自然图像），但摘要未指明。
- **基准与对比方法**：
  - 行为基准：人类对动态反相关刺激的深度判断，包括感知深度方向和一致性。
  - 脑基准：fMRI多体素模式分析揭示的V1与V3A群体表征。
  - 模型对比：a) 相关性约束浅层网络；b) 相关性约束深层网络；c) 无显式相关约束的深层网络。
- **评估指标**：定性（感知反转是否发生）与定量（表征重叠度、模型判断与人类行为匹配度）相结合。

## 4. 资源与算力
- 摘要及元数据中**未提及具体算力信息**，包括GPU型号、数量、训练时长等。因此无法给出相关量化描述。

## 5. 实验数量与充分性
- **实验组数概览**：大致包含三类主要实验组：
  1. 人类心理物理实验（行为测量）；
  2. fMRI实验（V1和V3A群体表征解码）；
  3. 神经网络建模（至少三种架构对比）。
- **充分性评估**：实验设计覆盖行为-神经-模型三层，纵贯表征层次，**比较全面**。通过同一刺激下对比多模型、多脑区，具备内部一致性检验，方法上具有客观性和公平性。但消融实验（如移除某些约束、改变网络深度等）的具体丰富程度，摘要未详细说明，可能需阅读全文核定。

## 6. 论文的主要结论与发现
- **行为发现**：人类对动态反相关刺激可靠地感知到**反转的深度**，与相关性计算的预测吻合。
- **脑成像发现**：与该反转知觉一致的群体表征首先出现在更高级视区**V3A**，而非初级视觉皮层V1；V1的群体活动不直接反映最终的意识知觉。
- **网络模型发现**：
  - 受相关性约束的浅层和深层网络均**未能**完整复现人类的深度判断模式，其内部表征呈现更严重的“纠缠”（representational overlap）。
  - 未受显式相关约束的深层网络，其表征**解纠缠度更高**，且与人类行为模式更加对齐。
- **总体结论**：生物立体视觉可能并非单纯依赖于类似相关计算的群体编码，而是需要更复杂的、能够自然解纠缠的群体表征机制。

## 7. 优点
- **多层次交叉验证**：巧妙地在同一刺激框架下联合心理物理、fMRI和建模，从行为到神经再到计算理论，证据链完整。
- **对“相关计算”理论的靶向挑战**：通过引入反相关刺激和解纠缠分析，直接检验经典相关模型的边界，问题切入尖锐。
- **表征几何分析**：不仅比较最终判断正确率，还细致分析内部表征的重叠度，为理解“群体编码超越局部计算”提供了几何直观。
- **发现V3A的特异性**：将立体视觉的意识层面下推到V3A这一中间视区，丰富了腹侧/背侧通路功能描述。

## 8. 不足与局限
- **细节缺失**：由于仅提供摘要，无法确定被试量、刺激参数细节、网络训练数据规模及优化方法，这些可能影响结论的稳健性。
- **表征因果性有限**：fMRI的群体编码与知觉相关，但不能直接证明V3A就是导致反转感知的唯一因果源头；可能是其他区域调制的结果。
- **网络架构探索受限**：仅对比了有无显式相关约束的深层网络，未提及是否控制了网络容量、训练任务等混杂因素，可能影响对齐度的归因。
- **推广局限**：动态反相关刺激是一种相对极端的实验室条件，该结论在自然立体场景中是否完全成立，仍需验证。

（完）
