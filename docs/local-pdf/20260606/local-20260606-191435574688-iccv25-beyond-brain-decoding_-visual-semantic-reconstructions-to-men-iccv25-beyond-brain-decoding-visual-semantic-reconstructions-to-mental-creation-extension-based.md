---
title: ICCV25 Beyond Brain Decoding_ Visual-Semantic Reconstructions to Mental Creation Extension Based on Visual Brain Decoding
title_zh: ICCV25 超越大脑解码：基于视觉大脑解码的视觉-语义重建到心理创造扩展
authors: Haodong Jing; Dongyao Jiang; Yongqiang Ma; Haibo Hua; Bo Huang; Nanning Zheng
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-191435574688-iccv25-beyond-brain-decoding_-visual-semantic-reconstructions-to-men.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: BEA模块利用共享/路由专家实现群体神经先验，对齐fMRI与LLM表征。
tldr: 针对fMRI视觉脑解码仅重建刺激的局限，本文提出NeuroCreat多模态架构，结合大语言模型将fMRI信号转化为描述、动作甚至生成未见内容。创新地设计脑专家适配模块捕捉被试共性与差异，从高级视觉皮层提取创造信息，并通过提示变量对齐灵活融合多种语义。实验在多项解码任务上达SOTA，并实现少样本脑视频创作，展示了大脑的“想象”能力。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-191435574688-iccv25-beyond-brain-decoding_-visual-semantic-reconstructions-to-men/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 3566, \"height\": 961}, {\"url\": \"assets/figures/local-pdf/local-20260606-191435574688-iccv25-beyond-brain-decoding_-visual-semantic-reconstructions-to-men/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 5494, \"height\": 2028}, {\"url\": \"assets/figures/local-pdf/local-20260606-191435574688-iccv25-beyond-brain-decoding_-visual-semantic-reconstructions-to-men/fig-003.webp\", \"caption\": \"\", \"page\": 4, \"index\": 3, \"width\": 3598, \"height\": 2063}, {\"url\": \"assets/figures/local-pdf/local-20260606-191435574688-iccv25-beyond-brain-decoding_-visual-semantic-reconstructions-to-men/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 8192, \"height\": 2644}, {\"url\": \"assets/figures/local-pdf/local-20260606-191435574688-iccv25-beyond-brain-decoding_-visual-semantic-reconstructions-to-men/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 8192, \"height\": 2234}, {\"url\": \"assets/figures/local-pdf/local-20260606-191435574688-iccv25-beyond-brain-decoding_-visual-semantic-reconstructions-to-men/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 3897, \"height\": 1605}, {\"url\": \"assets/figures/local-pdf/local-20260606-191435574688-iccv25-beyond-brain-decoding_-visual-semantic-reconstructions-to-men/fig-007.webp\", \"caption\": \"\", \"page\": 7, \"index\": 7, \"width\": 3924, \"height\": 1742}, {\"url\": \"assets/figures/local-pdf/local-20260606-191435574688-iccv25-beyond-brain-decoding_-visual-semantic-reconstructions-to-men/fig-008.webp\", \"caption\": \"\", \"page\": 8, \"index\": 8, \"width\": 3112, \"height\": 661}, {\"url\": \"assets/figures/local-pdf/local-20260606-191435574688-iccv25-beyond-brain-decoding_-visual-semantic-reconstructions-to-men/fig-009.webp\", \"caption\": \"\", \"page\": 8, \"index\": 9, \"width\": 4203, \"height\": 1335}]"
motivation: 现有fMRI解码多局限于视觉刺激重建，缺乏对高层语义描述、动作生成及想象性内容生成等扩展任务的探索。
method: 提出NeuroCreat架构，包含脑专家适配模块以协作学习捕捉个体差异，并从高级视觉皮层提取创造信息，通过提示变量对齐模块无缝集成fMRI信号与多模态语义以实现灵活解码。
result: 在多个fMRI数据集上取得了多项脑解码任务的最优性能，并创新性地实现了少样本脑视频创作。
conclusion: NeuroCreat将脑解码推至心理想象生成，为揭示大脑想象能力开辟了新方向。
---

## 摘要
从功能磁共振成像信号中解码视觉信息是理解大脑如何表征世界的重要途径，也是人工通用智能的前沿领域。fMRI解码不应局限于重建视觉刺激，还应进一步将其转化为描述、创建动作，甚至生成未见过的内容。我们有目的地提出了一种新颖高效的大脑多模态架构 NeuroCreat，它结合了大型语言模型强大的视觉和文本能力，从 fMRI 中捕捉精细的语义信息，并将其转化为不同神经表征的具身实现。具体来说，我们创新性地设计了一个大脑专家适配模块，通过共享/路由专家的协作学习，有效捕捉受试者之间的共性和个体差异。受到人类视觉工作记忆的启发，我们从高级视觉皮层中提取“创造”信息以进行想法生成。我们进一步构建了一个提示变体对齐模块，将 fMRI-视觉-语义-创造无缝集成到大型语言模型中，实现解码神经表征时灵活融入不同语义。在不同 fMRI 数据集上的实验表明，NeuroCreat 在多个大脑解码任务上达到了最优性能。更重要的是，我们创新性地实现了少样本大脑视频创建，这为展示大脑的“想象力”能力开辟了新的方向。 *通讯作者。

## Abstract
Decoding visual information from fMRI signals is an im- portant pathway to understand how the brain represents the world, and is a cutting-edge field of artificial general intelli- gence. Decoding fMRI should not be limited to reconstruct- ing visual stimuli, but also further transforming them into descriptions, creating actions, and even generating unseen content. We purposefully propose a novel and efficient brain multimodal architecture, NeuroCreat, which combines the powerful visual and textual abilities of LLM to capture fine- grained semantic information from fMRI, transformed it into embodied implementation of different neural represen- tations. Specifically, we innovatively designed a brain ex- pert adaption (BEA) module, effectively capturing common- alities and individual differences among subjects through the collaborative learning of shared/routed experts. In- spired by human visual working memory, we extracted “cre- ation” information from higher visual cortex for idea gen- eration. We further constructed a prompt variant align- ment module, seamlessly integrates fMRI-visual-semantic- creation into LLM to achieve flexible incorporation of dif- ferent semantics in the decoding of neural representations. *Corresponding author. Experiments on different fMRI datasets show that Neuro- Creat achieves SOTA performance on multiple brain decod- ing tasks. More importantly, we have innovatively achieved few-shot brain video creation, which opens up a new direc- tion for demonstrating the brain’s ‘imaginative’ ability.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与“brain decoding, neural prior, representation alignment”高度相关，直击跨被试fMRI表征对齐与高层语义解码的核心难题。
- **启发与意义**：提出“从重建到创造”的范式升级，将视觉工作记忆与LLM结合，为脑解码走向开放域想象生成提供了极具启发的思路。
- **可借鉴点**：脑专家适配中的共享/路由专家混合架构，是实现“群体神经先验”下保留个体差异的有效手段，可复用于其他跨被试神经编解码任务。
- **阅读建议**：重点阅读BEA模块的损失设计（公式3-6）与提示变体对齐架构（3.2节），其消融实验（4.4节）对理解多模态对齐噪声问题价值较大。

## 1. 核心问题与整体含义
现有fMRI视觉解码多局限于从脑信号**重建已见刺激**（如自然图像），缺乏对更丰富语义能力的挖掘。本文指出解码不应止于重建，而应进一步实现**描述、动作生成甚至“想象”未见内容**，并解决跨被试建模中的**个体差异捕捉**问题。整体含义是：将脑解码从“被动还原”推向“主动创造”，用统一多模态架构**NeuroCreat**实现从视觉皮层到语言模型的端到端语义提取与创意延伸。

## 2. 方法论核心思想与技术细节
NeuroCreat由三大组件构成，整体流程如图2所示。

- **脑专家适配**：设计共享专家（$\text{Expert}^S$）与路由专家（$\text{Expert}^R$）混合体，共享专家学习跨被试通用表征，路由专家保留个体神经差异。对fMRI特征 $\hat{\textit{\textbf{F}}}_i$ 有：
  $$\hat{\textit{\textbf{F}}}_i = \text{Expert}^S(\textit{\textbf{F}}_i) + \sum_{i=1}^{N-1} \text{Expert}^R(\textit{\textbf{F}}_i)$$
  并通过对比损失 $\mathcal{L}_{f,v}$ 与混合对比对齐损失 $\mathcal{L}_{Align}$ 联合优化，得到跨被试适配损失 $\mathcal{L}_{Cross}$。

- **提示变量对齐**：使用BrainFormer将fMRI映射为文本空间的提示 $P^F_i$，同时从高级视觉皮层（视觉工作记忆相关ROI）提取交叉注意力特征生成“创建提示” $P^C_i$，并与指令文本提示 $P^T_i$ 对齐。对齐损失由创建KL散度 $\mathcal{L}_{Cre}$、描述交叉熵 $\mathcal{L}_{Cap}$ 及提示token对数损失 $\mathcal{L}_{Prompt}$ 加权组成：
  $$\mathcal{L}_{NeuroCreat} = \mathcal{L}_{Cre}+\lambda_{Cap}\mathcal{L}_{Cap}+\lambda_{Prompt}\mathcal{L}_{Prompt}$$

- **多模态视觉实现**：扩散过程由VAE草图、高级视觉特征 $Z_i$ 及LLM生成的语义描述 $O_i$ 共同指导，重建损失结合先验损失与结构损失：
  $$V_{re}^i = \text{Diffusion}(V'_i + Z_i + O_I), \quad \mathcal{L}_{reconstruct} = \alpha\mathcal{L}_{Prior} + \beta\mathcal{L}_{Structure}$$

## 3. 实验设计
- **数据集**：
  - **NSD**：8名受试者观看COCO图像，取4名（S1,S2,S5,S7）全扫描数据。训练集约8859张图/24980条fMRI，测试集约982张/2770条。
  - **GOD**：5名受试者观看ImageNet，训练集约1200张图/1750条fMRI，测试集50张。
- **对比方法**：视觉重建对比Takagi、MindEye、DREAM、MindBridge等；检索对比MindEye2等；caption对比BrainCap、MindGPT、UMBRAE等；创建任务因无直接NSD基准，采用“UMBRAE+AIGC”级联比较。
- **评价指标**：视觉任务用PixCorr/SSIM/AlexNet/CLIP等；文本任务用BLEU/METEOR/CIDEr/CLIP-S等；创建任务用FVD/GenVideo-CLIP等。

## 4. 资源与算力
- **训练算力**：跨被试训练使用4块NVIDIA RTX 4090，全局批大小256，训练500个epoch，适配阶段192个样本来自路由专家，64个来自共享专家。
- **微调算力**：微调使用2块RTX 4090，批大小32，200个epoch。
- **生成配置**：扩散步数50，引导强度0.75。

## 5. 实验数量与充分性
实验覆盖两个主流fMRI数据集（NSD/GOD），在**视觉重建、检索、描述、交互、创建**五类任务上与近15种已有方法进行了定量/定性对比。消融实验系统考察了BEA模块增益、提示变体各组件贡献、不同脑区（FFA/LVC/HVC）对创建的影响、损失函数重要性，以及数据量与模型规模的影响。实验设计全面、对比公平，消融维度丰富，能有力支撑各组件有效性的结论。

## 6. 主要结论与发现
- NeuroCreat在NSD和GOD上取得了**视觉重建与检索的SOTA**，尤其在细粒度语义保留（如CLIP 97.8%）上表现突出。
- 首次实现基于fMRI的**少样本脑视频创作**，验证了从高级视觉皮层提取“想象”性动作信息的可行性。
- BEA模块使单一模型能**统一跨被试解码**，且共享/路由机制在保留个体差异的同时显著提升泛化性。
- 提示变量对齐通过细粒度分离不同模态的提示域，有效降低了fMRI低分辨率引码噪声的影响。

## 7. 优点
- **范式创新**：将脑解码从刺激重建拓展到“描述—预测—创造”链条，开辟了脑想象生成的新任务。
- **架构设计**：BEA的MOE式跨被试适配与提示变量对齐的多粒度语义融合，为多模态脑信号解码提供了新范式。
- **实验验证充分**：多任务、多数据集、多指标全面超越同类方法，并通过脑区投影可视化证明了生物可解释性。

## 8. 不足与局限
- **创建评价较初步**：脑视频创作尚无成熟基准，当前采用“重建+视频生成”作为对比，评价指标仍依赖AIGC领域通用指标，缺少针对脑创造性的评估体系。
- **被试范围有限**：跨被试仅在NSD的4名受试者上验证，虽然结果积极，但其对更大队列、跨站点数据的泛化性有待检验。
- **想象与真实边界模糊**：从视觉工作记忆提取的“创建”信息是否可完全等同于“想象”尚存认知神经科学层面的讨论空间，任务定义偏工程化。

## 9. 弱相关补充说明
（略，已按“研究价值与阅读建议”置于首节，该部分输出内容如上，不再重复。）

（完）
