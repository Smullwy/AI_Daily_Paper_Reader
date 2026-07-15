---
title: Unfolding spatiotemporal representations of 3D visual perception in the human brain
title_zh: 揭示人脑中三维视觉感知的时空表征
authors: "Lu, Z., Golomb, J. D."
date: 2026-07-14
pdf: "https://www.biorxiv.org/content/10.1101/2025.08.03.668371v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 跨被试的3D视觉感知密集采样多模态fMRI数据集
tldr: 该研究探讨了人脑如何整合二维空间信息和深度线索以实现三维感知。通过收集10名被试在观看立体3D刺激时的多模态神经成像数据（EEG和fMRI），并结合表征相似性分析，系统揭示了二维、深度相关、三维特征和几何距离表征的时空动态。研究发现二维表征最早且广泛，深度表征较弱，三维特征稀疏但可检测，并首次提供了三维空间几何结构编码的神经证据，为理解3D感知的神经机制提供了新见解。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-03-668371-v2/fig-007.webp\", \"caption\": \"Figure 1 Experimental design, spatial coordinate systems, and representational patterns.\", \"page\": 5, \"index\": 7, \"width\": 976, \"height\": 1043}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-03-668371-v2/fig-002.webp\", \"caption\": \"Figure 2 Category-wise maximum and presence analyses of 2D, depth/disparity-related, and 3D feature representations.\", \"page\": 7, \"index\": 2, \"width\": 965, \"height\": 472}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-03-668371-v2/fig-006.webp\", \"caption\": \"Figure 3 Feature-level temporal dynamics of 2D, depth/disparity-related, and 3D spatial representations.\", \"page\": 9, \"index\": 6, \"width\": 767, \"height\": 773}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-03-668371-v2/fig-001.webp\", \"caption\": \"Figure 4 Spatial distribution of feature-level representations across brain space.\", \"page\": 11, \"index\": 1, \"width\": 890, \"height\": 1245}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-03-668371-v2/fig-003.webp\", \"caption\": \"Figure 5 Spatiotemporal representations of 2D and 3D geometric distance.\", \"page\": 14, \"index\": 3, \"width\": 971, \"height\": 1087}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-03-668371-v2/fig-005.webp\", \"caption\": \"Figure 7 EEG-fMRI representational correspondence in 3D visual perception.\", \"page\": 17, \"index\": 5, \"width\": 878, \"height\": 637}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-03-668371-v2/fig-004.webp\", \"caption\": \"Figure 8 Complete and emergent coordinate-format representations.\", \"page\": 19, \"index\": 4, \"width\": 964, \"height\": 1219}]"
motivation: 尽管三维感知需要整合二维和深度信息，但先前研究多孤立考察单一维度，缺乏对整合性三维空间编码的探索。
method: 利用多模态神经成像（EEG和fMRI）和密集采样设计，在10名被试观看系统变化的立体3D刺激时记录大脑活动，并通过表征相似性分析比较不同空间表征的时空动态。
result: 二维空间表征最早出现且分布广泛，深度相关表征较弱且空间受限，三维特征表征稀疏但可检测，几何距离分析揭示了超越可分离维度的整合性二维和部分三维几何编码。
conclusion: 人脑三维感知遵循从主导的二维编码到深度和三维表征的渐进过程，且存在三维空间的几何结构编码，深化了对3D感知神经基础的理解。
---

## 摘要
尽管视觉输入最初在我们的视网膜上以二维形式记录，但我们以三维方式感知并与世界互动。实现三维感知需要大脑将二维空间表征与多种深度线索（如双眼视差）整合在一起。然而，大多数研究通常孤立地考察二维与深度信息，使得三维空间编码的整合特性在很大程度上未被探索。在本研究中，我们收集了一个密集采样的多模态神经影像数据集，来自10名被试（8名同时采集EEG和fMRI；2名仅采集fMRI），他们在多个会话中佩戴红绿立体眼镜观看立体三维刺激。被试首先完成一个行为会话，包括深度判断任务和一项新颖的立方体调整任务，以双眼视差为单位量化和校准个体深度知觉。随后在两次EEG和两次fMRI会话中，被试被动观看呈现在64个系统采样的三维位置上的刺激，十名被试共获得超过66,000个试次。通过表征相似性分析将这一多模态数据集与计算方法相结合，我们考察了二维、深度相关、三维特征水平以及几何距离表征如何在时间和脑空间上展开。我们发现，人脑不仅通过将深度位置编码为二维位置之外的附加维度来表示三维视觉空间，还通过构建更丰富的三维空间结构形式来实现。具体而言，二维空间特征最早且最广泛地得到表征，深度相关表征较弱且空间上更受限，三维特征表征稀疏且异质，但在个体特征水平上可检测到。关键的是，几何距离分析表明，神经编码超越了可分离的特征维度，显示出稳健的整合二维几何表征，以及对整合三维几何表征更具选择性的证据。这些发现表明，人类三维空间知觉由主导的二维编码向深度相关和三维表征的进展所支持，并伴有三维空间中几何结构的额外证据，从而有助于更全面地理解支持三维知觉的神经表征的时空组织。此外，我们新颖的大型数据集将公开提供，以支持未来关于三维知觉和空间认知的研究。

## Abstract
Although visual input is initially recorded in two dimensions on our retinas, we perceive and interact with the world in three dimensions. Achieving 3D perception requires the brain to integrate 2D spatial representations with multiple depth cues, such as binocular disparity. However, most studies typically examine 2D and depth information in isolation, leaving the integrated nature of 3D spatial encoding largely underexplored. In this study, we collected a densely sampled multimodal neuroimaging dataset from 10 participants (8 with EEG and fMRI; 2 with fMRI only) across multiple sessions while they viewed stereoscopic 3D stimuli through red-green anaglyph glasses. Participants first completed a behavioral session including depth judgement tasks and a novel cube adjustment task to quantify and calibrate individual depth perception in units of binocular disparity. Then during two EEG and two fMRI sessions, participants passively viewed stimuli presented at 64 systematically sampled 3D locations, yielding over 66,000 trials in total across ten participants. Combining this multimodal dataset with computational methods via representational similarity analysis, we examined how 2D, depth-related, 3D feature-level, and geometric distance representations unfold across time and brain space. We found that the human brain represents 3D visual space not only by encoding position-in-depth as an additional dimension alongside 2D location, but also by constructing richer forms of 3D spatial structure. Specifically, 2D spatial features were represented earliest and most broadly, depth-related representations were weaker and more spatially restricted, and 3D feature representations were sparse and heterogeneous but detectable at the individual feature level. Critically, geometric distance analyses revealed that neural coding extended beyond separable feature dimensions, showing robust integrated 2D geometric representations and more selective evidence for integrated 3D geometric representations. These findings suggest that human 3D spatial perception is supported by a progression from dominant 2D coding to depth- related and 3D representations, with additional evidence for geometric structure in 3D space, contributing to a more comprehensive understanding of the spatiotemporal organization of neural representations that support 3D perception. Additionally, our novel large dataset will be made openly available to support future research on 3D perception and spatial cognition.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议  
- **关联方向**：与“fMRI representation”“brain decoding”“brain encoding”高度相关，与“multi-view constraint”“representation alignment”“neural prior”仅间接关联。  
- **启发与意义**：展示了从单一维度向整合性三维空间表征推进的时序与脑区分布规律，为解码模型引入显式几何距离先验提供了新思路。  
- **可借鉴点**：密集采样设计、个体差异校准行为任务、跨被试多模态RSA对比框架，可用于构建更稳健的神经编码模型与解码器。  
- **阅读建议**：重点关注RSA模型空间（二维/深度/三维特征、几何距离）的构建逻辑，以及EEG-fMRI联合表征分析如何揭示时空互补性；弱相关方向可仅参考其多模态融合策略。  

### 1. 核心问题与整体含义  
- **研究动机**：三维感知需整合二维视网膜像与深度线索，但以往研究多孤立考察二维或深度，缺乏对整合性三维空间编码的系统探索。  
- **整体含义**：揭示人脑在三维感知中并非简单将深度作为附加维度拼接于二维空间，而是逐步形成二维主导、深度相关受限、三维特征稀疏且可检测的表征格局，并存在超越可分离维度的几何距离编码，为理解三维感知的神经计算机制提供了新的时空架构。

### 2. 方法论  
- **核心思想**：通过密集采样的立体3D刺激（64个系统变化的空间位置）及多模态记录（fMRI、EEG），利用表征相似性分析（RSA）比较不同空间表征模型（二维特征、深度/视差相关、三维特征、几何距离）与神经数据的相似性，刻画表征的时空动态。  
- **关键技术细节**：  
  - **刺激空间构建**：以双眼视差参数量化深度，结合水平与垂直位置，形成三维位置格点；行为任务（深度判断、立方体调整）用于个体校准。  
  - **RSA模型矩阵**：构建多种理论表征差异矩阵（RDM），包括：  
    - 二维特征RDM：仅基于二维位置差异；  
    - 深度/视差相关RDM：仅基于深度差异；  
    - 三维特征RDM：采用三维位置差异，评估三维特征整合表征；  
    - 几何距离RDM：基于二维欧氏距离、三维欧氏距离，直接建模空间几何结构。  
  - **统计分析**：被试内被试间RSA相关性，时空搜索（fMRI的体素级、EEG的时间点级），多重比较校正。  
- **公式或算法流程**：未给出显式公式，但RSA流程标准化：计算神经RDM（如fMRI体素激活模式的相关距离、EEG时间点间的表征差异），与模型RDM做Spearman相关；对fMRI进行逐体素搜索，对EEG进行逐时间窗搜索，获得显著相关的脑区/时间点。

### 3. 实验设计  
- **数据集**：自行收集密集采样多模态数据集，10名被试（8名同时采集EEG和fMRI，2名仅fMRI），每人完成行为校准、两次EEG、两次fMRI会话，总试次超66,000。  
- **场景与刺激**：红绿立体眼镜呈现的随机点立体图或类似刺激，64个系统采样的三维位置（如4×4×4的深度、水平、垂直组合）。  
- **对比方法**：并非算法对比，而是对比不同表征模型（二维、深度相关、三维特征、几何距离）与神经数据的拟合优度，以及对比二维与三维几何距离模型的解释力。  
- **行为基准**：利用深度判断与立方体调整任务校准个体双眼视差敏感度，确保神经实验的深度参数个体化。

### 4. 资源与算力  
- 文中未提及任何GPU型号、数量或训练时长，无计算资源消耗说明。需要指出：**未明确说明算力**。  

### 5. 实验数量与充分性  
- **实验组数**：从表征模型维度看，至少覆盖4类模型（二维、深度、三维特征、几何距离）；从模态看，分别对fMRI和EEG进行RSA分析，并做了EEG-fMRI表征对应分析；从分析层次看，包括逐体素空间分布、时间动态、几何距离分析、个体特征水平可检测性等。  
- **充分性与客观性**：被试量偏小（10人），但采用密集采样（单人超6000试次）补偿；行为校准提高了跨被试可比性；统计阈值采用多重比较校正；无明确对比基线或消融实验，更多是探索性揭示不同表征的时间空间模式，客观性较强，但统计效力受限于被试数，结论推广需谨慎。

### 6. 主要结论与发现  
- **二维表征最早最广**：二维空间特征在EEG早期成分（~100 ms后）即出现，并在fMRI上广泛分布于早期视觉皮层及顶叶等区域。  
- **深度相关表征弱且受限**：深度/视差相关表征响应较晚、幅度较低，主要局限于背侧视觉通路（如V3A、V7等）。  
- **三维特征表征稀疏但可检测**：在个别特征层面，部分体素或时间点显示出对三维位置组合的选择性，但整体上不如二维特征普遍。  
- **几何距离编码**：神经RDM与二维几何距离模型高度相关，反映了整合的二维空间几何；与三维几何距离模型存在选择性的显著相关，提示脑内存在超越可分离特征的三维几何结构编码。  
- **时空进展**：从二维主导到深度相关再到三维表征的渐进加工流，并伴有时空对应的EEG-fMRI表征耦联。

### 7. 优点  
- **多维模型对比框架**：系统地将二维、深度、三维特征及几何距离模型置于同一RSA框架下，清晰分离不同信息成分的贡献。  
- **密集采样与多模态**：大试次量和同步EEG-fMRI提供了高统计效力和时空互补优势。  
- **个体化校准**：通过行为任务量化个体双眼视差知觉，使刺激深度参数具有个体可比性，减少个体差异混淆。  
- **公开数据集承诺**：将共享全部数据，促进开放科学和后续研究。  

### 8. 不足与局限  
- **样本量小**：10名被试，结论外推性受限，尤其在个体差异分析上效力不足。  
- **被动观看任务**：未涉及行为输出或任务相关调节，无法直接关联知觉决策或三维认知操作。  
- **刺激单一**：仅使用随机点立体刺激，对自然场景中的纹理、遮挡等3D线索的代表性有限。  
- **分析深度**：未深入探讨不同视觉通路的特异性计算机制，未建立生成式模型或解码模型，对“编码”的解释仍处于描述层面。  
- **几何距离模型的简化性**：三维欧氏距离RDM假设各向同性和线性度量，可能未捕捉到真正的神经空间层级结构。  

### 9. （该要点已并入研究价值与阅读建议，不再单独重复）

（完）
