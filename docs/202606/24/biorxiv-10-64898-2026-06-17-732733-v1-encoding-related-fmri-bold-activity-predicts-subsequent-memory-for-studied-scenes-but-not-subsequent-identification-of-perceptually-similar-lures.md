---
title: "Encoding-related fMRI BOLD activity predicts subsequent memory for studied scenes, but not subsequent identification of perceptually similar lures."
title_zh: 与编码相关的fMRI BOLD活动预测对学习过的场景的后续记忆，但不能预测对感知相似诱饵的后续识别
authors: "Aktas, A., Srokova, S., Rugg, M."
date: 2026-06-22
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.17.732733v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 场景记忆的fMRI编码预测后续识别
tldr: 研究通过fMRI检验了记忆相似性任务中，编码阶段活动是否均能预测后续对学习项目（目标）和相似诱饵的识别。基于回忆-拒绝假说，两者应共享编码机制，但结果显示场景图像的编码活动仅预测目标记忆，不预测诱饵识别，且该效应不受年龄影响，并与目标-诱饵区分度指标关联，挑战了传统假说。
source: biorxiv
selection_source: fresh_fetch
motivation: 检验记忆相似性任务中，支持目标回忆和相似诱饵识别的编码神经活动是否一致，验证回忆-拒绝假说。
method: 对年轻和老年成年人进行三选一记忆相似性任务，使用场景与物体图像，通过fMRI扫描记录编码阶段活动，并以ROI分析和多体素模式分析预测后续记忆成绩。
result: 场景图像的编码活动显著预测目标记忆，但无法预测相似诱饵识别，物体图像未发现类似效应；场景目标的编码效应具有年龄不变性，并与目标-诱饵区分度指标稳健关联。
conclusion: 编码神经活动特异性地支持后续对学习项目的回想，而非对相似诱饵的识别，表明回忆-拒绝策略并非识别诱饵的主要机制，且该发现在年龄间稳定。
---

## 摘要
模式分离被广泛认为是一种由海马体介导的过程，可减少相似经历记忆之间的干扰。记忆相似性任务（MST）要求被试区分学习过的项目（目标）和感知相似的诱饵，其表现通常被认为依赖于模式分离。具体而言，有观点提出，相似诱饵的识别依赖于回忆排除策略，即通过提取对应的学习项目来识别诱饵。因此，根据这一观点，支持成功目标回忆和成功诱饵识别的编码操作应该非常相似，因为这两种记忆判断都依赖于对学习项目的后续回忆。本研究使用fMRI检验了这一预测。在认知健康的年轻和老年被试样本中，我们采用了一项三选一的MST（目标/诱饵/新项目），以场景和物体图像作为测试项目。基于感兴趣区的单变量和多体素分析，我们评估了编码相关活动是否能预测后续记忆测试中对目标和相似诱饵的识别。场景图像引发的活动预测了随后呈现的目标的记忆表现，但不能预测对应的相似诱饵，这与回忆排除假设相反。对于两类物体测试项目，均未发现任何效应。场景目标的编码效应大小不受年龄影响，而且单变量场景后续记忆效应与目标-诱饵辨别力指标之间表现出稳健的、不受年龄影响的关联。

## Abstract
Pattern separation is widely regarded as a hippocampally mediated process that reduces interference between memories of similar experiences. Performance on the Mnemonic Similarity Task (MST), where the requirement is to discriminate between studied items (targets) and perceptually similar lures, is commonly held to depend on pattern separation. Specifically, it has been proposed that similar lure identification is supported by a recall-to-reject strategy, whereby lures are identified as a result of the retrieval of the corresponding studied item. According to this proposal, therefore, the encoding operations that support successful target recollection and successful lure identification should be closely similar, since both mnemonic judgments depend upon subsequent recollection of the study item. Here, using fMRI, we examined this prediction. In samples of cognitively healthy young and older adults, we employed a three-choice MST (target/lure/new) with scene and object images as test items. Using ROI-based univariate and multivoxel analyses, we assessed whether encoding-related activity was predictive of the identification of target and similar lure items on the subsequent memory test. The activity elicited by scene images predicted memory performance for subsequently presented targets but not for corresponding similar lures, contrary to the recall-to-reject hypothesis. No effects could be identified for either class of object test items. The magnitude of the encoding effects for the scene targets was age-invariant, and, moreover, the univariate scene SMEs demonstrated a robust, age-invariant association with the target-lure discriminability metric.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：弱相关。读者方向聚焦于脑解码与神经先验建模，而本工作虽使用多体素模式分析，但核心是认知神经科学假说检验，未涉及生成式解码或显式表征对齐。
- **启发与意义**：该研究展示了编码阶段fMRI活动对后续记忆行为的特异性预测，提示在构建脑编码/解码模型时，区分不同记忆决策（目标回忆 vs. 诱饵识别）可能提升表征对齐精度。
- **可借鉴点**：单变量与多体素分析并重的评估框架，以及将行为辨别力指标与神经效应直接关联的做法，可迁移至脑解码模型的验证环节。
- **阅读建议**：若研究重心在解码模型设计本身，可浏览其分析方法与效应量报告；若非关心记忆相似性范式，仅需参考其稳健的年龄不变性结论。

## 1. 核心问题与整体含义
- **研究问题**：在记忆相似性任务（MST）中，成功识别学习项目（目标）和拒斥相似诱饵是否依赖相同的编码神经活动？根据“回忆‑拒绝”假说，识别诱饵需通过回想对应目标来实现，故预测两者应共享编码机制。
- **整体含义**：该研究利用fMRI直接检验上述预测，试图澄清人类情景记忆中相似性干扰的神经基础。若编码活动不能预测诱饵识别，将挑战被广泛接受的回忆‑拒绝理论，提示识别诱饵的过程可能独立于目标回忆的编码，对理解海马模式分离和记忆干扰的神经机制有重要意义。

## 2. 方法论
- **核心思想**：采用后续记忆范式（subsequent memory paradigm），在编码阶段采集fMRI活动，并将其作为预测变量，分别预测随后的目标命中与诱饵正确拒斥，比较两者的编码效应。
- **关键技术细节**：
    - **ROI‑based 单变量分析**：在感兴趣区提取BOLD信号均值/峰值，计算预测后续记忆成绩的效应量（SMEs）。
    - **多体素模式分析（MVPA）**：基于单个体素水平的活动模式，训练分类器（或计算距离度量）预测项目后续被正确识别或被错误判断的概率，评估体素模式包含的记忆预测信息。
    - **指标关联**：将单变量SME与行为上的目标‑诱饵辨别力（例如 $d'$ 或区分度指标）进行相关分析，检验神经效应与行为表现的稳健性。
- **分析流程**：编码阶段受试观看场景／物体图像；之后进行三择一测验（目标/诱饵/新项目）；按记忆成绩二分编码试次，对比后续正确回答与错误回答的编码活动。

## 3. 实验设计
- **数据集/被试**：认知健康的年轻与老年成年人，形成一个年龄跨度样本，用以检验年龄不变性。
- **刺激材料**：两种视觉类别——**场景图像**与**物体图像**，以考察效应是否跨类别稳健。
- **任务范式**：三择一记忆相似性任务（目标/相似诱饵/新项目）。编码阶段受试被动观看图像，无明确记忆任务（或附带编码任务），测试阶段则进行再认加诱饵辨别。
- **对比条件/benchmark**：本实验并非方法比较，而是**条件对比**：
    - 对比目标记忆预测 vs. 诱饵识别预测，以评估编码活动对不同记忆决策的特异度。
    - 对比场景与物体类别，以检验材料的普遍性。
    - 对比年轻与老年组，以评估年龄稳定性。

## 4. 资源与算力
- 文中**未明确说明**使用的GPU型号、数量或训练时长。由于分析主要基于ROI单变量统计与相对轻量的多体素模式分析（可能使用线性分类器或相关方法），对算力需求不高，未成为报告重点。

## 5. 实验数量与充分性
- **实验数量**：至少进行了以下维度的分析组合：
    - 两种刺激类别（场景、物体）分别计算目标后续记忆效应与诱饵后续记忆效应。
    - 两类分析方法（单变量、多体素）分别实施。
    - 年龄分组对比（年轻 vs. 老年）。
    - 相关分析：场景目标SME与目标‑诱饵辨别力指标的跨年龄关联。
- **充分性评价**：实验覆盖了主要假说检验路径和潜在混淆因素（刺激类别、年龄），分析手段互补（单变量平均活动+多体素模式），统计关联也验证了效应的行为相关性，整体设计严谨且充分。
- **公平与客观性**：研究目标明确，预测直接源自理论假说，无方法间的偏向选择，结论基于显著与否的标准，未发现选择性报告。

## 6. 主要结论与发现
- 场景图像的编码活动**显著预测后续目标的记忆表现**，但**不能预测对应相似诱饵的识别**，与回忆‑拒绝假说矛盾。
- 物体图像**未发现类似预测效应**，提示刺激类型可能调节编码‑记忆关联。
- 场景目标的编码效应大小**不受年龄影响**，且单变量场景SME与目标‑诱饵辨别力指标之间存在**稳健、不受年龄影响的关联**。
- 结论：编码神经活动特异性支持后续对学习项目的回想，而非对相似诱饵的识别；识别诱饵可能并不主要依赖回忆‑拒绝策略，至少在场景记忆情境下如此。

## 7. 优点
- **直接检验理论**：针对回忆‑拒绝假说的关键预测进行验证，实验预测清晰，逻辑链完整。
- **多种分析方法交叉验证**：单变量与多体素分析并行，增强了结论的稳健性。
- **年龄比较**：纳入年轻与老年群体，排除了编码效应受年龄变化的干扰，增加了发现的普遍性。
- **行为关联**：将神经效应与行为辨别力指标直接关联，建立起神经‑行为桥梁，避免了结果仅停留在激活差异层面的局限。

## 8. 不足与局限
- **刺激类别效应不一致**：物体图像未能重复场景的关键发现，可能削弱假说否定的一般性，或表明物体记忆编码存在不同的机制。
- **未报告诱饵识别的神经预测效应**：未能找到预测诱饵识别的编码活动（无论场景还是物体），可能由于统计效力不足或该效应本质上较弱，难以得出正面结论。
- **回忆‑拒绝理论仍可能存续**：结果仅表明该策略不是本任务中诱饵识别的主要机制，但未阐明诱饵识别的替代神经基础。
- **分析范围集中于编码**：提取阶段的神经活动未被探讨，可能遗漏了回忆‑拒绝过程发生的关键窗口。
- **样本量与可重复性**：未提供被试量和预注册信息，效应量的精确性未知。

## 9. 研究价值与阅读建议
（已提前至第一节，此处不再重复，但按要求保留该结构标题以保持序号连贯。实际输出将以第一节为准，此处从略。）

（完）
