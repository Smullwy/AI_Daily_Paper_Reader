---
title: ICML25 MindAligner_ Explicit Brain Functional Alignment for Cross-Subject Visual Decoding from Limited fMRI Data
title_zh: ICML25 MindAligner：面向有限fMRI数据的跨被试视觉解码显式脑功能对齐
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 跨被试fMRI脑表征的显式功能对齐
tldr: 脑解码旨在从fMRI信号重建视觉感知，但受限于个体差异大与数据稀缺。MindAligner提出显式功能对齐框架，学习脑转移矩阵将新受试者投射至已知受试者，并利用多级脑功能对齐损失挖掘细粒度功能对应，从而复用预训练模型。该方法在有限数据下解码性能领先，兼具神经科学可解释性。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 384, \"height\": 329}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 858, \"height\": 345}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 989, \"height\": 490}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 772, \"height\": 274}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 2249, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 2249, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-007.webp\", \"caption\": \"\", \"page\": 7, \"index\": 7, \"width\": 2349, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-008.webp\", \"caption\": \"\", \"page\": 7, \"index\": 8, \"width\": 2272, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-009.webp\", \"caption\": \"\", \"page\": 7, \"index\": 9, \"width\": 2166, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-010.webp\", \"caption\": \"\", \"page\": 7, \"index\": 10, \"width\": 2166, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-011.webp\", \"caption\": \"\", \"page\": 8, \"index\": 11, \"width\": 2272, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-012.webp\", \"caption\": \"\", \"page\": 8, \"index\": 12, \"width\": 2272, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-200317797271-icml25-mindaligner_-explicit-brain-functional-alignment-for-cross-su/fig-013.webp\", \"caption\": \"\", \"page\": 13, \"index\": 13, \"width\": 1890, \"height\": 1161}]"
motivation: 解决跨受试者脑解码中因个体差异和数据有限导致的泛化弱与成本高问题。
method: 学习脑转移矩阵实现跨受试者信号投影，并设计多级脑功能对齐损失进行软对齐。
result: 在有限fMRI数据下，MindAligner的视觉解码性能超越现有方法。
conclusion: MindAligner为跨受试者解码提供了有效且可解释的显式对齐框架，并展现神经科学价值。
---

## 摘要
大脑解码旨在从fMRI信号中重建人类被试的视觉感知，这对于理解大脑的感知机制至关重要。现有方法由于大脑存在显著差异而局限于单被试范式，导致跨个体泛化能力弱且训练成本高，而fMRI数据的有限性进一步加剧了这一问题。为解决这些挑战，我们提出了MindAligner，一个面向有限fMRI数据的跨被试脑解码显式功能对齐框架。所提出的MindAligner具有多个优点。首先，我们学习一个脑迁移矩阵（BTM），将任意新被试的脑信号投影到已知被试之一，从而无缝使用预训练的解码模型。其次，为促进可靠的BTM学习，我们提出了脑功能对齐模块，通过多层级脑对齐损失在不同视觉刺激下执行软跨被试脑对齐，揭示具有高可解释性的细粒度功能对应关系。实验表明，MindAligner不仅在数据受限条件下的视觉解码中优于现有方法，而且为跨被试功能分析提供了宝贵的神经科学见解。

## Abstract
Brain decoding aims to reconstruct visual percep- tion of human subject from fMRI signals, which is crucial for understanding brain’s perception mechanisms. Existing methods are confined to the single-subject paradigm due to substantial brain variability, which leads to weak general- ization across individuals and incurs high train- ing costs, exacerbated by limited availability of fMRI data. To address these challenges, we pro- pose MindAligner, an explicit functional align- ment framework for cross-subject brain decod- ing from limited fMRI data. The proposed Min- dAligner enjoys several merits. First, we learn a Brain Transfer Matrix (BTM) that projects the brain signals of an arbitrary new subject to one of the known subjects, enabling seamless use of pre- trained decoding models. Second, to facilitate reli- able BTM learning, a Brain Functional Alignment module is proposed to perform soft cross-subject brain alignment under different visual stimuli with a multi-level brain alignment loss, uncovering fine-grained functional correspondences with high interpretability. Experiments indicate that Min- dAligner not only outperforms existing methods in visual decoding under data-limited conditions, but also provides valuable neuroscience insights in cross-subject functional analysis.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：与“representation alignment”和“brain decoding”高度相关，尤其是跨被试功能对齐、可解释的脑表征映射。
- **启发与意义**：利用显式脑转移矩阵建立细粒度跨被试功能对应，结合视觉语义相似性实现软对齐，为低数据场景下复用预训练脑解码模型提供了新思路。
- **可借鉴点**：低秩分解的参数高效思路、跨刺激条件调制、多层级对齐损失（信号级+分布级+语义潜在级）的组合设计可迁移到其他脑表征对齐或多模态对齐任务。
- **阅读建议**：重点关注BFA模块中软对齐的训练策略与损失函数构成，以及利用BTM权重进行功能区域可解释性分析的方法，可作为跨被试神经解码与脑功能比较的实践参考。

## 1. 论文的核心问题与整体含义
- **研究背景**：基于fMRI的视觉解码旨在从脑信号重建视觉感知，但因个体大脑结构、认知模式的巨大差异，现有方法多为单被试定制模型，跨被试泛化能力弱。
- **核心挑战**：(1) 新被试的fMRI数据稀缺（单次扫描约1小时，仅占全数据集的2.5%）；(2) 缺乏共享刺激下的严格配对fMRI；(3) 现有隐式对齐方法（如将所有被试对齐到共享潜在空间）存在对齐不足和可解释性差的问题。
- **整体含义**：提出显式对齐框架MindAligner，通过学习脑转移矩阵将新被试的fMRI直接映射到已知被试的信号空间，使预训练解码模型能无缝复用，同时揭示跨被试功能对应关系，兼具高解码性能与神经科学解释性。

## 2. 方法论：核心思想与关键技术细节
### 2.1 核心思想
- 构建一个 **脑转移矩阵（BTM）** $M$，将新被试 $S_N$ 的fMRI $F_N$ 线性投影至已知被试 $S_K$ 的信号空间，得到 $\hat{F}_K = M \times F_N$，从而调用预训练解码模型。
- 为在无共享刺激条件下可靠学习 $M$，设计 **脑功能对齐模块（BFA）**，利用相似但非同一视觉刺激下的跨被试fMRI配对进行软对齐，并施加多层级对齐损失。

### 2.2 关键技术细节
- **参数高效的低秩分解**：$M = A \times B$，其中 $A \in \mathbb{R}^{n \times h}$, $B \in \mathbb{R}^{h \times k}$，$n,k$ 分别为新/已知被试的体素维度，$h$ 为隐层维度（默认4096）。此设计大幅减少可训练参数，且创建一个共享的潜在空间 $z_N = A \times F_N$。
- **跨刺激神经映射器（Cross‑stimulus Neural Mapper）**：为构造虚拟的“共享刺激”配对，引入条件调制：
  - 计算视觉刺激差异 $E_{\text{diff}} = E_{\text{image}}(I_N) - E_{\text{image}}(I_K)$，其中 $E_{\text{image}}$ 是CLIP图像编码器。
  - 通过线性层产生条件向量 $z_{\text{diff}} = E_{\text{diff}} \times M_{\text{diff}}$。
  - 使用特征线性调制（FiLM）将 $z_{\text{diff}}$ 作为缩放和偏移参数作用于 $z_N$，生成对齐后的潜在嵌入 $z_K = \text{MC}(z_N, z_{\text{diff}})$，再经 $B$ 投影得到合成fMRI $\hat{F}_K$。
- **多层级脑对齐损失**：
  - **信号重建损失**：$L_{\text{rec}} = \|\hat{F}_K - F_K\|_2^2$。
  - **分布一致性损失**：$L_{\text{KL}} = \text{KL}(\hat{F}_K, F_K)$。
  - **潜在语义对齐损失**：利用视觉语义相似性引导脑活动对齐，$L_{\text{latent}} = \| \mathcal{R}(E_f(z_N), E_f(z_K)) - \mathcal{R}(E_N, E_K) \|_2^2$，其中 $\mathcal{R}$ 计算嵌入对的相异性矩阵，$E_f$ 为功能嵌入器。
  - 总对齐损失：$L_{\text{align}} = L_{\text{dec}} + \alpha_{\text{rec}} L_{\text{rec}} + \alpha_{\text{KL}} L_{\text{KL}} + \alpha_{\text{la}} L_{\text{latent}}$（$L_{\text{dec}}$ 为原解码模型的损失）。
- **推理阶段**：仅保留轻量BTM $M$ 进行投影，随后送入冻结的预训练解码模型。

## 3. 实验设计
- **数据集**：Natural Scenes Dataset (NSD)，包含受试者1、2、5、7在观看MSCOCO图像时的fMRI响应。
- **实验场景**：数据受限的跨被试解码——预训练模型在已知被试的全40次扫描上学习，迁移到新被试时仅使用单次扫描（约1小时数据），测试在1000张共享图像上评估。
- **对比基准**：MindEye2（隐式共享潜在空间对齐的SOTA方法）和MindBridge（通过生成伪刺激构造共享配对的方法）。
- **评估指标**：
  - 低层：PixCorr、SSIM、AlexNet(2)、AlexNet(5)。
  - 高层：Inception、CLIP、EfficientNet-B、SwAV。
  - 检索：图像检索、脑检索。
- **功能对齐分析**：使用fMRI空间相关性（fSC）和基于BTM权重的迁移量（TQ）进行脑区变异性可视化。

## 4. 资源与算力
- 单块 **NVIDIA A100 GPU**，训练至收敛约需 **12小时**。
- 可训练参数量约1.39亿（仅为MindEye2模型的6%），总参数量与基线相当（约22亿），推理时间仅略微增加（5.056秒 vs 5.000秒/图）。

## 5. 实验数量与充分性
- **主实验**：在4个受试者（subj1,2,5,7）间进行不同交叉对齐组合（如subj2→subj1，共12种配对），报告了低层、高层及检索指标，与两个基准方法全面对比。充分且公平。
- **消融实验**：逐步添加 $L_{\text{rec}}$、$L_{\text{KL}}$、$L_{\text{latent}}$，验证每个损失成分的贡献；探索不同隐层维度（64~4096）；对比线性与Transformer实现的功能嵌入器和神经映射器，支持线性假设。
- **功能分析实验**：计算fSC和TQ，并与全量数据训练的TQ分布对比，证明在极少数据下仍能稳定识别差异性区域。
- 实验覆盖了性能、效率、可解释性与鲁棒性，较为全面。

## 6. 主要结论与发现
- **视觉解码性能**：MindAligner在几乎所有低层和高层指标上超过隐式对齐基线，尤其在脑检索上提升17.9%，且只需微调6%的参数。
- **鲁棒性**：对新被试对齐到不同已知被试的结果高度一致（图4），表明对齐稳健。
- **神经科学发现**：
  - 早期视觉皮层跨被试差异小，高级视觉皮层（如OPA、FFA、PPA）差异大，呈层级化变异性。
  - 腹侧通路的个体间差异最显著，与其参与高级语义处理、受个人经验影响相符。
- **数据效率**：仅用1小时数据即可达到接近全量数据的TQ分布，验证了数据稀缺下的鲁棒对齐能力。

## 7. 优点
- **显式对齐范式**：首次在无共享刺激下实现体素级跨被试脑信号映射，可解释性远超隐式方法。
- **高数据效率**：利用低秩分解与跨刺激软对齐，仅需极少量新被试数据即可有效迁移。
- **多层级对齐损失设计**：融合信号重建、分布一致性和语义潜在对齐，实现了细粒度功能对应。
- **计算高效**：极低的可训练参数占比和推理开销，便于实际部署。
- **兼具神经科学价值**：BTM权重可直接用于分析跨被试脑功能区域差异，提供认知机制洞察。

## 8. 不足与局限
- **线性变换假设**：虽经实验验证线性映射有效，但可能不足以捕捉某些复杂非线性脑功能关系。
- **数据集局限**：仅在NSD自然场景图像上测试，对于其他刺激类型（如面孔、文字、视频）或任务态fMRI的泛化性未验证。
- **依赖预训练模型**：需要已充分训练的已知被试解码模型，若从零开始仍需收集大量数据。
- **BTM训练过程**：BFA模块在训练中使用了额外的跨刺激映射器和潜在嵌入器，虽推理时丢弃，但训练复杂度略增。
- **被试数量有限**：仅基于4名受试者，样本量较小，可能不足以代表全部人群的脑变异性模式。

## 9. 研究价值与阅读建议（已在首节呈现，此处不再重复）

（完）
