---
title: "Beyond Brain Decoding: Visual-Semantic Reconstructions to Mental Creation Extension Based on fMRI"
title_zh: 超越大脑解码：基于fMRI的视觉-语义重建到心理创造扩展
authors: Haodong Jing; Dongyao Jiang; Yongqiang Ma; Haibo Hua; Bo Huang; Nanning Zheng
date: 2026-05-28
pdf: assets/local_pdfs/local-20260528-153344640585-jing_beyond_brain_decoding_visual-semantic_reconstructions_to_mental_creation_extension_based_iccv_2025_paper.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 通过共享/路由专家捕捉跨被试fMRI脑表征
tldr: 该研究针对fMRI脑信号解码，提出NeuroCreat架构，结合大语言模型实现从视觉重建到描述、动作生成及未见内容创建的多任务扩展。通过脑专家适配模块捕捉个体共性与差异，从高级视觉皮层提取创建信息，并设计提示对齐模块无缝集成多模态，在多个数据集上取得最优性能，并首次实现少样本脑视频生成。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260528-153344640585-jing_beyond_brain_decoding_visual-semantic_reconstructions_to_mental_creation_extension_based_iccv_2025_paper/fig-005.webp\", \"caption\": \"Figure 2. Overview of NeuroCreat. Brain expert adaption (BEA) achieves the preservation of individual neural representations and effective learning of shared representations. LLM is introduced to extract high-level semantic embedding features for downstream tasks. Multi-branch decoding models enable interesting tasks such as creative generation of fMRI.\", \"page\": 3, \"index\": 5, \"width\": 1036, \"height\": 386}, {\"url\": \"assets/figures/local-pdf/local-20260528-153344640585-jing_beyond_brain_decoding_visual-semantic_reconstructions_to_mental_creation_extension_based_iccv_2025_paper/fig-006.webp\", \"caption\": \"Figure 3. brain expert adaption (BEA) Module. Enabling learning of shared and unique neural representations.\", \"page\": 4, \"index\": 6, \"width\": 470, \"height\": 273}, {\"url\": \"assets/figures/local-pdf/local-20260528-153344640585-jing_beyond_brain_decoding_visual-semantic_reconstructions_to_mental_creation_extension_based_iccv_2025_paper/fig-002.webp\", \"caption\": \"Table 1. Quantitative evaluation on visual reconstruction. Results are calculated from the average of subjects, with bold indicating the best results, underlining the second best results, +BEA(%) represents frozen the model and adding the BEA module.\", \"page\": 6, \"index\": 2, \"width\": 974, \"height\": 342}, {\"url\": \"assets/figures/local-pdf/local-20260528-153344640585-jing_beyond_brain_decoding_visual-semantic_reconstructions_to_mental_creation_extension_based_iccv_2025_paper/fig-001.webp\", \"caption\": \"Figure 4. Visual reconstruction on NSD and GOD dataset. NeuroCreat decodes the most accurate images with semantic details.\", \"page\": 6, \"index\": 1, \"width\": 983, \"height\": 268}, {\"url\": \"assets/figures/local-pdf/local-20260528-153344640585-jing_beyond_brain_decoding_visual-semantic_reconstructions_to_mental_creation_extension_based_iccv_2025_paper/fig-004.webp\", \"caption\": \"Table 3. Quantitative analysis of brain captioning and interactions.\", \"page\": 7, \"index\": 4, \"width\": 489, \"height\": 252}, {\"url\": \"assets/figures/local-pdf/local-20260528-153344640585-jing_beyond_brain_decoding_visual-semantic_reconstructions_to_mental_creation_extension_based_iccv_2025_paper/fig-003.webp\", \"caption\": \"Figure 5. Examples of textual task and creation task results. NeuroCreat can implement downstream tasks such as caption generation and linguistic interaction for fMRI. It can also predict future actions and generate creation videos based on fMRI reconstruction.\", \"page\": 7, \"index\": 3, \"width\": 1014, \"height\": 272}]"
motivation: fMRI解码不应局限于视觉刺激重建，而需进一步转化为描述、动作和创建未见内容，以深入探索大脑表征与智能。
method: 提出NeuroCreat，设计脑专家适配模块（共享/路由专家学习）、高级视觉皮层创建信息提取及提示变体对齐模块，将fMRI-视觉-语义-创建集成到大语言模型。
result: 在多个fMRI数据集上达到SOTA性能，并首次实现少样本脑视频创建。
conclusion: NeuroCreat通过多模态协同与模块创新，有效扩展fMRI解码能力，开辟脑视频创建新方向。
---

## 摘要
从fMRI信号中解码视觉信息是理解大脑如何表征世界的重要途径，也是人工通用智能的前沿领域。fMRI解码不应局限于重建视觉刺激，还应进一步将其转化为描述、创造动作，甚至生成未见过的内容。我们特意提出了一种新颖高效的大脑多模态架构NeuroCreat，它结合了大型语言模型的强大视觉和文本能力，从fMRI中捕捉细粒度语义信息，并将其转化为不同神经表征的具体实现。具体来说，我们创新地设计了一个大脑专家适应（BEA）模块，通过共享/路由专家的协作学习，有效捕捉被试间的共性和个体差异。受人类视觉工作记忆的启发，我们从高级视觉皮层提取“创造”信息用于想法生成。我们进一步构建了提示变体对齐模块，将fMRI-视觉-语义-创造无缝集成到大型语言模型中，实现神经表征解码中不同语义的灵活融合。在不同fMRI数据集上的实验表明，NeuroCreat在多个大脑解码任务上达到了最先进的性能。更重要的是，我们创新地实现了少样本大脑视频创造，为展示大脑的‘想象’能力开辟了新方向。

## Abstract
Decoding visual information from fMRI signals is an im- portant pathway to understand how the brain represents the world, and is a cutting-edge field of artificial general intelli- gence. Decoding fMRI should not be limited to reconstruct- ing visual stimuli, but also further transforming them into descriptions, creating actions, and even generating unseen content. We purposefully propose a novel and efficient brain multimodal architecture, NeuroCreat, which combines the powerful visual and textual abilities of LLM to capture fine- grained semantic information from fMRI, transformed it into embodied implementation of different neural represen- tations. Specifically, we innovatively designed a brain ex- pert adaption (BEA) module, effectively capturing common- alities and individual differences among subjects through the collaborative learning of shared/routed experts. In- spired by human visual working memory, we extracted “cre- ation” information from higher visual cortex for idea gen- eration. We further constructed a prompt variant align- ment module, seamlessly integrates fMRI-visual-semantic- creation into LLM to achieve flexible incorporation of dif- ferent semantics in the decoding of neural representations. *Corresponding author. Experiments on different fMRI datasets show that Neuro- Creat achieves SOTA performance on multiple brain decod- ing tasks. More importantly, we have innovatively achieved few-shot brain video creation, which opens up a new direc- tion for demonstrating the brain’s ‘imaginative’ ability.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

- **核心问题**：传统 fMRI 解码大多局限于视觉刺激的重建，无法捕捉个体间的感知差异和创造性想象。该研究希望突破这一局限，将解码能力从“看到什么”扩展到“想到什么”，实现基于脑信号的多模态任务，包括生成描述、预测动作，甚至创造未见过的内容。
- **背景与动机**：
  - 人类能从视觉信息中提取语义概念，并通过视觉工作记忆产生短期预测与想象，这构成了“创造”认知的基础。
  - 现有方法在多被试解码中难以同时保留共同的神经表征和个体差异性，导致跨被试泛化能力不足。
  - 因此，作者提出 NeuroCreat 框架，旨在统一 fMRI 解码与大型语言模型，从高级视觉皮层提取创造信息，实现从重建到心理创造的延伸。

### 2. 方法论

- **整体框架**：NeuroCreat 分为三大模块——脑专家适应（BEA）、提示变体对齐（Prompt Variant Alignment）以及多分支解码（含创造任务）。
- **脑专家适应（BEA）**：
  - 采用混合专家（MoE）结构，包含共享专家（Shared Expert）和路由专家（Routed Expert）。
  - 共享专家学习跨被试的共性神经表征，路由专家捕捉每个被试独特的神经差异。
  - 对于新被试 fMRI 特征 $F_i$，其适应后表征为：
    $$\hat{F}_i = \text{Expert}^{S}(F_i) + \sum_{i=1}^{N-1} \text{Expert}^{R}(F_i)$$
  - 梯度更新通过可学习矩阵 $G$ 约束，$G \in \mathbb{R}^{d_f \times d_v}$，更新方式为 $\hat{G} = G + H(F_i)$，其中 $H(\cdot)$ 由共享和路由两部分组成。
  - 跨模态对比损失 $\mathcal{L}_{f,v}$ 基于 CLIP 风格计算，对齐 fMRI 特征和图像特征。
  - 采用 MixCo 混合范式进一步对齐，最终跨被试适应损失为 $\mathcal{L}_{Cross} = \mathcal{L}_{f,v} + \mathcal{L}_{Align}$。
- **提示变体对齐**：
  - 利用 BrainFormer（MLP 投影 + Transformer 模块）提取 fMRI 提示 $P^F_i$。
  - 通过视觉工作记忆脑区与视觉语言模型特征交叉注意力，生成“创造”提示 $P^C_i$，并与 InstructBLIP 预测的行为先验对齐，损失为 $\mathcal{L}_{Cre}$。
  - 同时利用文本描述提示 $P^T_i$ 进行图像到文本的对齐，损失为 $\mathcal{L}_{Cap}$ 和 $\mathcal{L}_{Prompt}$。
  - 总对齐损失为：
    $$\mathcal{L}_{NeuroCreat} = \mathcal{L}_{Cre} + \lambda_{Cap} \mathcal{L}_{Cap} + \lambda_{Prompt} \mathcal{L}_{Prompt}$$
- **多分支视觉任务**：
  - 重建任务：通过 VAE 重建草图、扩散 U-Net 提取语义嵌入、LLM 生成语义描述，三者融合输入到扩散模型（SDXL-Turbo）生成最终图像。
  - 创造任务：基于视觉工作记忆（HVC 脑区）预测下一动作，并利用该信息驱动视频生成（使用图像到视频模型）。
  - 损失函数：重建损失 $\mathcal{L}_{reconstruct} = \alpha \mathcal{L}_{Prior} + \beta \mathcal{L}_{Structure}$。

### 3. 实验设计

- **数据集**：
  - **NSD**：8 名被试观看 COCO 图像，每被试约 10,000 幅图像（9,000 幅独有，1,000 幅共享）。选取完整扫描的 4 名被试（S1, S2, S5, S7），训练集约 8,859 幅图像/24,980 次 fMRI 试验，测试集 982 幅图像/2,770 次试验。
  - **GOD**：5 名被试观看 ImageNet 刺激，训练集 1,200 幅图像（150 类，每类 8 幅），测试集 50 幅图像（50 类）。
- **基准对比方法**：
  - 视觉重建：Takagi (CVPR’23)、MindEye (NeurIPS’23)、DREAM (WACV’24)、MindBridge (CVPR’24)、PSYCHOMETRY (CVPR’24)、MindEye2 (ICML’24)、UMBRAE (ECCV’24)、Neuro-V (NIPS’24) 等。
  - 图像描述与交互：BLIP-2 (ICML’23)、BrainCap、MindGPT、MindArt (CVPR’24)、OneLLM (CVPR’24) 等。
- **评价指标**：
  - 视觉重建：低层（PixCorr、SSIM、AlexNet(2/5)），高层（Inception、CLIP、EffNet-B、SwAV），检索（fMRI→Image、Image→fMRI 准确率）。
  - 描述与交互：BLEU、METEOR、ROUGE-L、CIDEr、SPICE、CLIP-S。
  - 视频创造：MSE、SSIM、FVD、Flow-Square-Mean (FSM)、GenVideo-RefVideo CLIP 等。

### 4. 资源与算力

- **硬件**：训练使用 4 块 NVIDIA RTX 4090 GPU；微调使用 2 块 RTX 4090。
- **训练配置**：全局批大小 256，训练 500 轮；跨被试训练时 64 个样本来自共享专家，其余用于适应，共 200 轮；单周期学习率策略，初始学习率 $2 \times 10^{-4}$；扩散步数 50，强度 0.75。
- **模型参数**：视觉编码器为预训练 CLIP ViT‑L/14 和 bigG‑14；LLM 为 LLaMA‑3‑8B（输入维度 4,096），通过 LLaMa Adapter 微调；生成模型使用 SDXL‑Turbo 和 IP‑Adapter。

### 5. 实验数量与充分性

- **实验覆盖充分**：
  - 在 NSD 和 GOD 两个数据集上进行了视觉重建、检索、描述生成、交互和视频创造等多类任务。
  - 对比了大量现有方法（至少 10 种以上），在多个指标上取得最优或次优结果。
  - 包含消融实验：BEA 模块效果（冻结原模型+BEA）、提示变体各组分消融（去除 $P^T_i$、$P^F_i$、$P^C_i$）、损失函数消融（结构损失、先验损失、跨模态损失）、不同视觉脑区的创造效果比较（FFA/LVC/HVC）、训练数据量与模型大小敏感性。
  - 进行了跨被试适应可视化、脑区注意力投影等定性分析。
- **公平性**：所用公开数据集和标准指标与其他方法一致，对比时尽可能统一测试条件和预处理方式（如 NSD 的 ‘nsdgeneral’ 预处理）。单被试与多被试训练均有报告，结果呈现全面。

### 6. 主要结论与发现

- NeuroCreat 在视觉重建上达到 SOTA（如 NSD 上 SSIM 0.339，CLIP 0.978；GOD 上 PixCorr 0.323），并且跨被试性能优于单被试，验证了 BEA 共享专家的作用。
- 首次实现了基于 fMRI 的少样本视频创造，生成的动作预测在语义和视觉质量上均有较高指标，且与高级视觉皮层激活一致。
- 在描述和对话交互任务上，NeuroCreat 也取得了最优语义匹配（如 CLIP 分数 79.91），表明 LLM 集成有效捕获了细粒度语义。
- BEA 模块使新被试仅需极少量数据即可适应，并保留个体差异性，具备良好的可扩展性和解释性。

### 7. 优点

- **任务扩展性**：将 fMRI 解码从单纯重建推进到描述生成、交互式问答和视频创造，拓宽了脑机接口的应用前景。
- **创新的模块设计**：
  - BEA 通过共享/路由专家巧妙平衡跨被试共性与个性，缓解数据稀缺。
  - 提示变体对齐策略解耦了不同模态的信息，显著提升了多模态对齐精度。
- **生物可解释性**：引入视觉工作记忆理论和高级视觉皮层信息，并通过脑区投影和注意力分析验证模型与神经回路的对应关系。
- **实验结果扎实**：在多数据集、多任务、多指标上均取得领先，消融实验充分，且首次展示了基于 fMRI 的视频生成能力。

### 8. 不足与局限

- **数据集规模有限**：视频创造仅在相对小规模的 NSD 和 GOD 上验证，未见更大型或多样化场景的数据集评估。
- **创造任务评估较初步**：创造视频的定量指标主要依赖自动评价（如 FVD、CLIP 分数），缺乏人工主观评分的全面对比，生成内容的真实性和连贯性仍有待检验。
- **鲁棒性与偏差风险**：模型可能过度依赖训练集中的被试和视觉概念，少数被试个体差异可能导致部分被试表现不佳；对 fMRI 噪声、不同扫描协议的泛化性未深入讨论。
- **应用限制**：方法仍建立在已知的视觉刺激类别上，对完全开放式“想象”的解码能力未充分测试；视频生成依赖级联模型，可能存在误差累积。
- **计算成本**：训练需要 4 块 RTX 4090，推理时的多阶段流程可能对实时 BCI 应用不友好。

（完）
