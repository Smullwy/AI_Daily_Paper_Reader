---
title: ICLR26 MnemoDyn_ Learning Resting State Dynamics from 40K fMRI Sequences
title_zh: ICLR26 MnemoDyn：从4万fMRI序列中学习静息态动力学
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 通过大规模静息态fMRI预训练学习跨被试的脑表征，泛化于不同人群。
tldr: 本文针对静息态功能磁共振成像(rs-fMRI)分析，提出基于动力系统的模型MnemoDyn，替代现有Transformer方案。该模型对分割脑区进行多分辨率时间动态建模，并在4万rs-fMRI序列上大规模预训练。实验表明，MnemoDyn计算高效、泛化性强，重建质量优于前沿Transformer基线，在下游任务及小样本研究中表现优异，对神经影像研究具有重要推动意义。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 1024, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 1024, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 1024, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 1024, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-005.webp\", \"caption\": \"\", \"page\": 2, \"index\": 5, \"width\": 1536, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-006.webp\", \"caption\": \"\", \"page\": 2, \"index\": 6, \"width\": 1536, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-007.webp\", \"caption\": \"\", \"page\": 2, \"index\": 7, \"width\": 720, \"height\": 225}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-008.webp\", \"caption\": \"\", \"page\": 2, \"index\": 8, \"width\": 1024, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-009.webp\", \"caption\": \"\", \"page\": 2, \"index\": 9, \"width\": 1024, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-010.webp\", \"caption\": \"\", \"page\": 5, \"index\": 10, \"width\": 1528, \"height\": 890}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-011.webp\", \"caption\": \"\", \"page\": 6, \"index\": 11, \"width\": 1584, \"height\": 478}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-012.webp\", \"caption\": \"\", \"page\": 8, \"index\": 12, \"width\": 1862, \"height\": 604}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-013.webp\", \"caption\": \"\", \"page\": 20, \"index\": 13, \"width\": 4267, \"height\": 687}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-014.webp\", \"caption\": \"\", \"page\": 20, \"index\": 14, \"width\": 4267, \"height\": 687}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-015.webp\", \"caption\": \"\", \"page\": 20, \"index\": 15, \"width\": 4267, \"height\": 687}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-016.webp\", \"caption\": \"\", \"page\": 20, \"index\": 16, \"width\": 4267, \"height\": 687}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-017.webp\", \"caption\": \"\", \"page\": 20, \"index\": 17, \"width\": 4267, \"height\": 687}, {\"url\": \"assets/figures/local-pdf/local-20260606-193743967181-iclr26-mnemodyn_-learning-resting-state-dynamics-from-40k-fmri-seque/fig-018.webp\", \"caption\": \"\", \"page\": 21, \"index\": 18, \"width\": 1068, \"height\": 547}]"
motivation: 现有rs-fMRI模型多用Transformer骨干，计算成本高且泛化有限，亟需更高效、泛化更强的替代方案。
method: 提出MnemoDyn，基于动力系统对脑区分割动态进行多分辨率时序建模，并在大规模rs-fMRI数据集上预训练。
result: MnemoDyn计算高效、泛化强，重建质量超越现有Transformer方法，在下游任务和小样本研究中展现卓越性能。
conclusion: 大规模rs-fMRI预训练的MnemoDyn体现了强大下游能力，对小样本神经影像研究具有重要启示。
---

## 摘要
我们提出了一个基于动力系统的静息态功能磁共振成像（rs-fMRI）模型，该模型在约4万个rs-fMRI序列的数据集上训练，这些数据集涵盖了多种公开及经许可可用的数据。现有大多数方案采用transformer骨干网络，而我们利用跨脑区划分的多分辨率时间动力学建模。我们证明MnemoDyn计算高效，且在不同人群和扫描协议下均具有良好的泛化能力。与当前最先进的基于transformer的方法进行基准测试时，MnemoDyn始终提供更优越的重建质量。总体而言，我们发现通过在大规模（非专有）rs-fMRI数据集上进行预训练，我们获得了一个在各种下游任务中表现出色的模型。我们的结果还证明了该模型在小样本量研究中的有效性，这对神经影像学研究具有重要意义，因为静息态fMRI是一种普遍采集的成像方式。

## Abstract
We present a dynamical-systems based model for resting-state functional magnetic resonance imaging (rs-fMRI), trained on a dataset of roughly 40K rs-fMRI sequences covering a wide variety of public and available-by-permission datasets. While most existing proposals use transformer backbones, we utilize multi-resolution temporal modeling of the dynamics across parcellated brain regions. We show that MnemoDyn is compute efficient and generalizes very well across diverse populations and scanning protocols. When benchmarked against current state-of-the-art transformer-based approaches, MnemoDyn consistently delivers superior reconstruction quality. Overall, we find that with such large-scale pre-training on (non-proprietary) rs-fMRI datasets, we get a highly performant model for various downstream tasks. Our results also provide evidence of the efficacy of the model on small sample size studies which has implications for neuroimaging studies at large where resting state fMRI is a commonly acquired imaging modality.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文与“fMRI representation”和“neural prior”高度相关，提出了一个利用动力系统先验（neural prior）学习脑区表征的新范式；与“brain decoding”或“brain encoding”关联较弱，因为它主要面向群体分析和模型泛化，而非刺激响应解码或编码。
- **启发与意义**：该研究证明了，相比于流行的Transformer架构，基于领域先验（如多尺度动力学）设计的轻量模型在学习脑动力学表征上可能更高效、泛化性更强，为“脑表征”学习提供了不同于纯数据驱动的新路径。
- **可借鉴点**：其将动力学建模、小波多分辨率分析和伪微分算子相结合的思想，可启发读者在构建神经先验模型时，将神经科学原则（如多时间尺度、非线性演化）更显式地嵌入模型架构，而非仅依赖通用的序列模型。
- **阅读建议**：关注其将数学/物理原理（动力系统、算子学习）与神经科学假设（多尺度动态）融合的方法论细节，以及大规模预训练与下游泛化的实验设计，而非具体的医学发现。

## 论文的核心问题与整体含义
- **核心问题**：当前静息态功能磁共振成像（rs-fMRI）分析领域主流方法采用Transformer等通用序列模型作为基础模型，但这些模型面临计算成本高、不适应超长序列、样本效率有限及与神经动力学先验不匹配等挑战。
- **整体含义**：本文旨在提出一种更符合脑活动本质、更高效且泛化性更强的替代方案。其核心思想是，将脑活动视为一个潜在的、可学习的动力系统，通过直接学习该系统的演化算子而非进行序列建模，来捕获rs-fMRI信号中丰富的时空结构，从而构建一个用于rs-fMRI的基础模型。

## 论文提出的方法论
- **核心思想**：将静息态脑信号建模为一个连续时间潜空间（latent space）中的动力系统，用微分方程 $\frac{dz(t)}{dt} = F(z(t), u(t); \theta)$ 描述其演化，并进一步将动力系统学习转化为算子学习问题，学习从初始状态和控制输入到完整潜轨迹的映射。
- **关键技术细节**：
    - **动力系统与算子学习**：模型表述为受控微分方程（Controlled Differential Equation, CDE）形式 $z(t) = z_0 + \int_0^t P(z(\tau)) d\tau + \int_0^t K(z(\tau)) du_W(\tau)$，其中核心是学习一个非线性积分算子 $(K_\theta u)(t)$，其核 $K(z(\tau); \theta)$ 决定了历史信息如何影响当前状态。
    - **多分辨率小波参数化**：为捕捉脑信号的多尺度时域特征，积分核 $K$ 被参数化为小波基的线性组合 $K(z(\tau); \theta) = \sum_{j,k} \phi_{j,k}(\tau) A_{j,k}(z(\tau); \theta)$，其中 $\phi_{j,k}$ 是不同尺度 $j$ 和位移 $k$ 的小波函数。这使得算子能在多个时间分辨率上处理信号，同时保持时间局部性。
    - **伪微分算子与低秩分解**：通过将模型参数置于小波域，并与伪-微分算子结合，可获得高度稀疏的块对角表示，极大提升计算效率。为处理高维潜空间带来的参数量问题，采用CP张量分解对算子矩阵进行低秩参数化，进一步压缩模型。
- **模型训练**：
    - **预训练**：采用自监督方式，主要包括**掩码自编码器（Masked Autoencoder）** 和**去噪自编码器（Denoising Autoencoder）** 等策略，在连续的时间/空间维度随机掩蔽信号块，并强制模型根据上下文进行重建，从而迫使模型学习长程依赖关系。
    - **微调**：冻结预训练好的骨干网络，在提取的特征上添加一个轻量级的适配器层（MLP）用于特定下游任务的回归或分类。

## 实验设计
- **预训练与评估数据集**：使用了**UK Biobank**（约65K样本，序列长度~500）和**Human Connectome Project (HCP)**（约1K样本，序列长度~1200）进行大规模预训练，并在各自的留出集上进行年龄、性别预测的内部评估。
- **下游微调与测试数据集**：为验证模型的泛化能力，在6个外部数据集上进行了下游任务微调，包括：**HCP-Aging**（人口学与认知特质预测）、**ADNI**（阿尔茨海默症诊断与淀粉样蛋白状态预测）、**Healthy Brain Network (HBN)**、**ADHD-200**、**ABIDE**（自闭症分类）和**NKIR**。
- **对比基准（Benchmarks）**：与专门设计的深度学习模型（BrainNetCNN, BrainGNN, BNT）以及rs-fMRI基础模型（BrainLM, Brain-JEPA）进行了全面比较。任务涵盖**重建（MSE, R²）**、**分类（准确率, F1分数）** 和**回归（MSE）**。

## 资源与算力
- **算力资源**：文中明确指出，预训练一个拥有9200万参数的MnemoDyn模型，在单个NVIDIA A100 40GB GPU上仅需约3小时。这相对于其他基于Transformer的基础模型（如Brain-JEPA需要4个GPU的配置）而言，计算成本显著降低。

## 实验数量与充分性
- **实验数量**：本文进行了大量实验，包括在两个大规模数据集上的预训练，以及在6个异构下游数据集上的多个任务（诊断分类、生物标志物预测、人口学/认知回归与分类），并对多种预训练策略（去噪、掩码、JEPA风格）进行了消融研究。
- **充分性与公平性**：实验设计充分且公平。
    - **充分性**：覆盖了从大规模预训练到多领域下游微调的完整验证链条，评估了模型在重建、分类和回归等多种任务上的表现，并通过多数据集验证了其跨机构、跨协议、跨人群的泛化性。
    - **公平性**：与当前该领域最先进的基础模型（BrainLM, Brain-JEPA）及传统方法进行了严格对比，且训练数据量和任务设置均明确对标，比较标准客观。

## 论文的主要结论与发现
1.  **性能优越**：基于动力学和算子学习的MnemoDyn在所有基准测试中，无论是重建质量还是下游任务性能（尤其是有临床价值的诊断和预测任务），均一致性地优于基于Transformer的当前最优模型。
2.  **泛化能力强**：在来自不同采集站点、协议和人群的多个外部数据集上，仅需轻量微调即可取得极佳表现，证明了模型所学的表征具有强大的跨域泛化能力。
3.  **计算与样本效率高**：模型设计使其计算成本极低（单卡A100，3小时），且在仅有约1k样本的HCP数据集上也能完成有效预训练并迁移至其他任务，展示了对数据和计算资源的低依赖性。
4.  **表征的动力学先验**：结果表明，将神经科学关于大脑多尺度动力学的先验知识（通过小波分解）显式嵌入模型架构，是比依赖通用自回归/注意力模型更有效的方法。

## 优点
- **方法论创新**：巧妙地将动力系统、控制论、函数算子学习与小波分析等理论工具融合，为rs-fMRI序列建模提供了崭新的、具有坚实理论基础和领域先验的视角。
- **高效与泛化**：模型在计算效率、样本效率和泛化能力上表现出色，使其在资源受限的临床和研究环境中具有极高的部署和应用潜力。
- **架构的可解释性**：通过对预训练后算子范数分布和稀疏性的分析，揭示了模型确实学到了结构化的多尺度表征，这比“黑箱”Transformer更具可解释潜力。

## 不足与局限
- **模态与数据格式局限**：实验仅限于分割（parcellated）后的脑区平均时间序列，未能处理体素（voxel）级别的精细空间模式，也未扩展至EEG、MEG等其他神经成像模态。
- **生理可解释性不足**：尽管模型结构受神经科学启发，但其所学的“动力学”更多是数据驱动的数学描述，尚未与真实的神经生理过程建立明确对应关系。
- **纵向分析缺失**：论文未探索模型在处理同一受试者多次采集数据（纵向研究）中的表现，而这对于研究疾病进展和治疗反应至关重要。

## 主要结论
MnemoDyn提出了一种全新的、基于动力系统和小波多分辨率分析的rs-fMRI基础模型。通过将脑活动建模为连续时间潜空间中的演化过程并学习其算子，该模型在计算极高效的前提下，实现了超越当前Transformer模型的性能、强大的跨数据集泛化能力和出色的样本效率。这项工作证明，在神经影像学中，融合领域专属的动力学先验进行架构设计，是替代通用大模型的一条极具前景的路径，尤其适用于资源有限和数据获取成本高昂的场景。

（完）
