---
title: Weakly-Supervised Contrastive Learning for Imprecise Class Labels
title_zh: 针对不精确类别标签的弱监督对比学习
authors: "Zi-Hao Zhou, Jun-Jie Wang, Tong Wei, Min-Ling Zhang"
date: 2026-05-26
pdf: assets/local_pdfs/local-20260526-154755-zhou---2025---weakly-supervised-contrastive-learning-for-imprecise-class-labels.pdf
tags: ["paper:本地PDF", "query:local-pdf"]
score: local
evidence: 本地上传 PDF，使用后端精读流程生成。
tldr: 在现实场景中，类标签常不精确，限制了监督对比学习的应用。本文提出基于连续语义相似度的弱监督对比学习框架，不直接依赖标签，而是通过迭代优化弱监督信号，构建图论模型，以语义相似度作为边权重。该框架可集成到噪声标签和部分标签学习中，实验证明能显著提升性能，并具有理论误差界保证。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260526-154755-zhou---2025---weakly-supervised-contrastive-learning-for-imprecise-class-labels/fig-002.webp\", \"caption\": \"Figure 1. (a) Self-supervised contrastive learning constructs positive example pairs by using different views of the same image and constructs negative example pairs by using different images. (b) Supervised contrastive learning further regards different images of the same class as additional positive example pairs. (c) Our proposed weakly-supervised contrastive learning abandons the concepts of discrete positive and negative examples.\", \"page\": 2, \"index\": 2, \"width\": 933, \"height\": 353}, {\"url\": \"assets/figures/local-pdf/local-20260526-154755-zhou---2025---weakly-supervised-contrastive-learning-for-imprecise-class-labels/fig-006.webp\", \"caption\": \"Table 1. Comparisons with each methods on simulated NLL datasets. Each run has been three times with different randomly generated noise, and the mean of the last five epochs are reported.\", \"page\": 8, \"index\": 6, \"width\": 1019, \"height\": 373}, {\"url\": \"assets/figures/local-pdf/local-20260526-154755-zhou---2025---weakly-supervised-contrastive-learning-for-imprecise-class-labels/fig-007.webp\", \"caption\": \"Table 2. Comparisons with each methods on simulated PLL datasets. Each run has been repeated three times with different randomly generated partial labels, and the mean and standard deviation values of the last five epochs are reported.\", \"page\": 8, \"index\": 7, \"width\": 1008, \"height\": 281}, {\"url\": \"assets/figures/local-pdf/local-20260526-154755-zhou---2025---weakly-supervised-contrastive-learning-for-imprecise-class-labels/fig-005.webp\", \"caption\": \"Table 3. List of common mathematical symbols used in this paper.\", \"page\": 13, \"index\": 5, \"width\": 1004, \"height\": 996}, {\"url\": \"assets/figures/local-pdf/local-20260526-154755-zhou---2025---weakly-supervised-contrastive-learning-for-imprecise-class-labels/fig-001.webp\", \"caption\": \"Table 4. Hyper-parameters for noisy label learning used in experiments.\", \"page\": 30, \"index\": 1, \"width\": 917, \"height\": 294}, {\"url\": \"assets/figures/local-pdf/local-20260526-154755-zhou---2025---weakly-supervised-contrastive-learning-for-imprecise-class-labels/fig-010.webp\", \"caption\": \"Table 5. Comparisons with each methods on CIFAR-10N, CIFAR-100N and Clothing1M. Each runs has been repeated 3 times with different randomly-generated noise and we report the best accuracy.\", \"page\": 31, \"index\": 10, \"width\": 994, \"height\": 684}, {\"url\": \"assets/figures/local-pdf/local-20260526-154755-zhou---2025---weakly-supervised-contrastive-learning-for-imprecise-class-labels/fig-009.webp\", \"caption\": \"Figure 2. We present t-SNE visualizations of the learned representations on the CIFAR dataset with 90% symmetric noise. Figure 2(a) and Figure 2(b) illustrate the results for WSC and ELR+ on CIFAR-10, while Figure 2(c) and Figure 2(d) display the results for WSC and ELR+ on CIFAR-100 under the same noise condition, where only 20 categories with the highest accuracy for each model are shown.\", \"page\": 32, \"index\": 9, \"width\": 971, \"height\": 281}, {\"url\": \"assets/figures/local-pdf/local-20260526-154755-zhou---2025---weakly-supervised-contrastive-learning-for-imprecise-class-labels/fig-008.webp\", \"caption\": \"Table 6. Hyper-parameters for simulated partial label learning used in experiments.\", \"page\": 32, \"index\": 8, \"width\": 875, \"height\": 325}, {\"url\": \"assets/figures/local-pdf/local-20260526-154755-zhou---2025---weakly-supervised-contrastive-learning-for-imprecise-class-labels/fig-004.webp\", \"caption\": \"Table 7. Hyper-parameters for instance-dependent partial label learning used in experiments.\", \"page\": 33, \"index\": 4, \"width\": 1008, \"height\": 300}, {\"url\": \"assets/figures/local-pdf/local-20260526-154755-zhou---2025---weakly-supervised-contrastive-learning-for-imprecise-class-labels/fig-003.webp\", \"caption\": \"Table 8. Comparisons with each methods on simulated PLL datasets. Each runs has been repeated 3 times with different randomlygenerated partial labels and we report the mean and std values of last 5 epochs.\", \"page\": 34, \"index\": 3, \"width\": 777, \"height\": 298}]"
motivation: 现实数据标注模糊或不准确，导致类标签无法可靠地指导对比学习中正负对的选择。
method: 引入连续语义相似度概念，通过迭代精炼弱监督信号构建图，以相似度为边权重进行弱监督对比学习。
result: 在噪声标签和部分标签学习场景中，集成现有方法后性能显著提升，并建立了逼近监督对比学习的理论误差界。
conclusion: 提出的图论弱监督对比学习框架通用且有效，能处理多种不精确标签问题。
---

## 摘要
对比学习在学习有效表征方面取得了显著成功，监督对比学习常优于自监督方法。然而，在现实场景中，数据标注往往模糊或不准确，这意味着类别标签可能无法可靠地指示两个样本是否属于同一类。这一局限限制了监督对比学习的适用性。为解决这一挑战，我们引入“连续语义相似度”概念来定义正负样本对。我们并不直接依赖不精确的类别标签，而是度量样本对之间的语义相似度，通过迭代精炼弱监督信号来量化它们属于同一类别的接近程度。基于此概念，我们提出了一种用于弱监督对比学习的图论框架，其中语义相似度作为图的权重。我们的框架高度通用，可应用于许多弱监督学习场景。我们通过在两个常见设置（即带噪标签和部分标签学习）中的实验展示了其有效性，其中可以轻松集成现有方法以显著提升性能。理论上，我们为我们的方法建立了一个误差界，表明在温和条件下它可以近似监督对比学习。实现代码可在 https://github.com/Speechless-10308/WSC 获取。*同等贡献 1东南大学计算机科学与工程学院，南京，中国 2计算机网络和信息集成教育部重点实验室（东南大学），中国。通讯作者：魏彤 <weit@seu.edu.cn>。第42届国际机器学习大会论文集，加拿大温哥华。PMLR 267, 2025。版权所有2025作者。

## Abstract
Contrastive learning has achieved remarkable suc- cess in learning effective representations, with supervised contrastive learning often outperform- ing self-supervised approaches. However, in real- world scenarios, data annotations are often am- biguous or inaccurate, meaning that class labels may not reliably indicate whether two examples belong to the same class. This limitation restricts the applicability of supervised contrastive learn- ing. To address this challenge, we introduce the concept of “continuous semantic similarity” to de- fine positive and negative pairs. Instead of directly relying on imprecise class labels, we measure the semantic similarity between example pairs, which quantifies how closely they belong to the same category by iteratively refining weak su- pervisory signals. Based on this concept, we propose a graph-theoretic framework for weakly- supervised contrastive learning, where semantic similarity serves as the graph weights. Our frame- work is highly versatile and can be applied to many weakly-supervised learning scenarios. We demonstrate its effectiveness through experiments in two common settings, i.e., noisy label and par- tial label learning, where existing methods can be easily integrated to significantly improve perfor- mance. Theoretically, we establish an error bound for our approach, showing that it can approximate supervised contrastive learning under mild con- ditions. The implementation code is available at https://github.com/Speechless-10308/WSC. *Equal contribution 1School of Computer Science and Engi- neering, Southeast University, Nanjing, China 2Key Laboratory of Computer Network and Information Integration (Southeast Uni- versity), Ministry of Education, China. Correspondence to: Tong Wei <weit@seu.edu.cn>. Proceedings of the 42 st International Conference on Machine Learning, Vancouver, Canada. PMLR 267, 2025. Copyright 2025 by the author(s).

---

## 论文详细总结（自动生成）

好的，根据您提供的论文内容，以下是详细的中文总结。

### 1. 论文的核心问题与整体含义
*   **研究背景**：对比学习（尤其是监督对比学习）在表征学习领域取得了巨大成功。其核心在于拉近同类（正例）样本、推远异类（负例）样本的表征。
*   **核心问题**：现实世界中，数据标注常不精确，如噪声标签（Noisy Labels）和部分标签（Partial Labels）。这些模糊的监督信号无法像理想监督学习那样明确指示两个样本是否属于同一类别，导致传统的监督对比学习方法难以直接应用，限制了其在实际任务中的效果。
*   **整体含义**：本文旨在解决“**如何在不精确的弱监督信息下有效进行对比学习**”这一挑战，提出一个通用的理论框架，使得对比学习能够利用模糊的标签来学习更好的表征。

### 2. 论文提出的方法论
*   **核心思想：连续语义相似度**
    *   作者摒弃了传统对比学习中离散的“正/负例”概念，提出了一个更广义的**连续语义相似度**概念。
    *   该相似度为每对样本分配一个连续值（介于0和1之间），表示它们属于同一类别的可能性。值为1代表传统正例对，0代表负例对，中间值则量化了模糊性。
*   **关键技术细节：图论框架与损失函数**
    *   **问题建模**：将弱监督表征学习建模为一个图谱聚类问题。图的顶点是所有增强后的数据样本，边的权重（邻接矩阵$A_{x,x'}$）由来自增强的自身连接（$w_{x,x'}^u$）和基于预近似监督信号的连接（$w_{x,x'}^{wl}$）组成：
        $$A_{x,x'} = \alpha w_{x,x'}^u + \beta w_{x,x'}^{wl}(S)$$
    *   **核心映射矩阵 $S$**：提出一个恢复矩阵 $S: X \to R^{c \times v}$ ，需近似满足性质 $P(y|x) = S(x)P(q|x)$，其中 $y$ 为真实标签，$q$ 为弱监督信息。通过 $S$ 可计算出样本间的连续语义相似度 $S((\tilde{x}, \tilde{q}), (\tilde{x}', \tilde{q}')) = S(\tilde{x})^T_{:,\tilde{q}} S(\tilde{x}')_{:,\tilde{q}'}$。
    *   **弱监督对比损失**：基于上述图定义，推导出一个端到端的弱监督对比损失函数 $L_{wsc}(f)$，在假设类别分布均匀时可简化为：
        $$L_{wsc}(f) \triangleq -2\alpha L_1(f) - 2\beta L_2(f) + (\alpha + \frac{\beta}{c})^2 L_3(f)$$
        其中，$L_1$ 拉近同一样本两个增强视图的特征；$L_2$ 根据不同图像间的语义相似度权重拉近其特征；$L_3$ 是防止特征坍缩的正则化项。
    *   **实例化**：论文展示了如何在不同弱监督场景下构造矩阵 $S$：
        *   **场景一：实例无关（Instance-Independent）**，如经典噪声标签和部分标签。通过估计标签转移矩阵 $T$ 来构造固定的 $S = T^{-1}$。
        *   **场景二：实例相关（Instance-Dependent）**。利用模型当前预测，通过贝叶斯定理构造动态的 $S(x)_{y,q} = \hat{P}(y|x, q)$，即自标签化过程。

### 3. 实验设计
*   **数据集**：
    *   **噪声标签学习（NLL）**：在 CIFAR-10、CIFAR-100 上进行，包含对称和不对称两种噪声类型，噪声比率高达 0.9；还在 CIFAR-10N、CIFAR-100N（真实人类标注噪声）和大型真实噪声数据集 Clothing1M 上验证。
    *   **部分标签学习（PLL）**：在 CIFAR-10、CIFAR-100 和 CUB-200 上进行，包含不同的部分比率（如 0.5, 0.7, 0.8 等）；并在 CIFAR-100-H（层级化候选标签）和四个细粒度数据集（CUB-200, CARS-196等）上测试了实例相关场景。
*   **基准（Benchmark）**：论文与大量前沿方法进行了对比，覆盖面广。
    *   **NLL基线**：包括不使用对比学习的方法（DivideMix, ELR, SOP, ProMix等）和使用对比学习的方法（MOIT, Sel-CL, TCL）。
    *   **PLL基线**：包括不使用对比学习的方法（LWS, PRODEN, CC, RCR, GFWS等）和使用对比学习的方法（PiCO）。
*   **技术融合**：本文方法（WSC loss）被作为一个即插即用的模块，与最简单的基线模型相结合。例如，在NLL中，使用交叉熵损失对齐 [模型输出 $\times$ 估计转移矩阵] 与噪声标签，并加上一致性正则和WSC损失。

### 4. 资源与算力
*   论文正文及附录中**未明确说明执行所有实验所使用的GPU型号、数量及具体训练时长**。

### 5. 实验数量与充分性
*   **实验数量**：实验量非常大且全面。覆盖了两个主要的弱监督范式（NLL, PLL），每种范式下又包含多种噪声/部分标签生成类型，在多个标准数据集（含真实世界数据）和多种低、中、高噪声/模糊率下进行了验证。还包含消融实验、超参数分析、不同 $S$ 构造方法的对比以及定性可视化实验。
*   **实验充分性与公平性**：实验设计充分且公平。
    *   **充分性**：通过覆盖从模拟到真实、从低到高噪声/模糊度的广泛设置，全面验证了方法的有效性和鲁棒性。
    *   **公平性**：多次运行的实验结果提供了均值和标准差；对比方法的结果多直接引用自原论文或在与原文相同设定下复现；WSC损失被集成到最简单的基线中以证明其带来的增益，避免了复杂集成带来的不公平比较。

### 6. 论文的主要结论与发现
*   **方法有效性**：提出的统一弱监督对比学习框架（WSC）通过在两个常见弱监督场景下的实验证明，能够显著且一致地提升模型性能。
*   **鲁棒性**：尤其在高噪声率或高部分比率等更具挑战性的设置下，WSC 带来的性能提升更为显著（例如，CIFAR-100上90%噪声率下超越前最佳方法 6.82%）。
*   **理论保证**：提供了严谨的理论分析，证明了在温和条件下，所提框架能够近似全监督对比学习的性能。理论推导出了下游任务误差（线性探测误差）的界限，揭示了自监督信息与弱监督信息整合时存在的偏-方差权衡，为指导实践提供了见解。

### 7. 优点
*   **理论创新与通用性**：从图论视角统一了不同弱监督场景下的对比学习，提出的“连续语义相似度”概念是核心洞察，使得框架具备很强的通用性和可扩展性。
*   **即插即用的实践价值**：推导出的对比损失 $L_{wsc}$ 实现简单、训练稳定，可以作为一个独立的损失项，轻松集成到现有的弱监督学习方法中，无需大幅改动原有框架。
*   **理论与实验结合紧密**：不仅有严格的理论误差界分析，而且通过大量实验验证了理论发现，例如，实践中超参数 $\beta$ 的选择对应了理论分析中的偏-方差权衡。

### 8. 不足与局限
*   **算力开销未明**：未报告任何实验相关的计算资源需求和训练时间，难以评估其在实际部署中的算力门槛。
*   **超参数敏感性**：理论及实验中的评估与讨论（如消融实验）表明，平衡自监督与弱监督信号的系数 $\alpha$ 和 $\beta$ 对性能至关重要，最优值依赖于具体场景，可能需要额外的调参成本。
*   **$S$ 矩阵的构造依赖性**：方法性能高度依赖于恢复矩阵 $S$ 的构造质量。在实例无关场景下，它依赖于可靠的转移矩阵估计方法；在实例相关场景下，则依赖于模型自身预测的准确性（自举），存在错误累积的风险。

（完）
