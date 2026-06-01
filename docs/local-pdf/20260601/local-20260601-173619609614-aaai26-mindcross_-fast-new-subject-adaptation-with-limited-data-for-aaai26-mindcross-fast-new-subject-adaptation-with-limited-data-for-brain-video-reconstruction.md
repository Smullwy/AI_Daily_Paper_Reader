---
title: AAAI26 MindCross_ Fast New Subject Adaptation with Limited Data for Brain Video Reconstruction
title_zh: AAAI26 MindCross：有限数据下快速新被试适应的脑视频重建
authors: "Xuan-Hao Liu, Yan-Kai Liu, Tianyi Zhou, Bao-Liang Lu, Wei-Long Zheng"
date: 2026-06-01
pdf: assets/local_pdfs/local-20260601-173619609614-aaai26-mindcross_-fast-new-subject-adaptation-with-limited-data-for.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 跨被试fMRI视频重建，使用被试不变和特定编码器
tldr: 脑视频重建面临脑数据采集昂贵导致的数据稀缺问题，现有跨受试方法过度关注受试者不变信息、忽视特定信息，导致新受试者适应缓慢。本文提出MindCross框架，通过N个特定编码器与一个共享编码器分别学习受试者特定与不变表征，并利用Top-K协作模块融合以往受试者知识，实现仅用单一模型即可快速、数据高效地适应新受试者，在fMRI/EEG转视频任务上验证了其有效性和效率。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260601-173619609614-aaai26-mindcross_-fast-new-subject-adaptation-with-limited-data-for/fig-004.webp\", \"caption\": \"Figure 2: The framework of proposed MindCross consisting of training, calibration, and test phase. (a) In the training phase, each specific encoder and shared encoder are optimized by several loss functions. (b) In the calibration phase, only the specific encoder of the new subject, marked with a flame icon, will be updated. (c) In the test phase, the final predictions are obtained from shared decoder and Top-K Collaborate module.\", \"page\": 3, \"index\": 4, \"width\": 1047, \"height\": 477}, {\"url\": \"assets/figures/local-pdf/local-20260601-173619609614-aaai26-mindcross_-fast-new-subject-adaptation-with-limited-data-for/fig-005.webp\", \"caption\": \"Figure 3: Top-K Collaborate Module: The similarity vector is obtained by feeding the new subject’s feature st into the domain classifier, then we select the Top-K similar domains for collaborating to calculate the final output.\", \"page\": 4, \"index\": 5, \"width\": 498, \"height\": 340}, {\"url\": \"assets/figures/local-pdf/local-20260601-173619609614-aaai26-mindcross_-fast-new-subject-adaptation-with-limited-data-for/fig-002.webp\", \"caption\": \"Table 1: Quantitative comparison of brain decoding between MindCross and other methods. The best performance of cross-subject frameworks are marked in BOLD. The best performance of per-subject per-model methods are underlined.\", \"page\": 6, \"index\": 2, \"width\": 1044, \"height\": 423}, {\"url\": \"assets/figures/local-pdf/local-20260601-173619609614-aaai26-mindcross_-fast-new-subject-adaptation-with-limited-data-for/fig-001.webp\", \"caption\": \"Figure 6: Results of new subject adaptation in limited data scenario. The x-axis is the number of data from new subjects, the y-axis is the metric.\", \"page\": 6, \"index\": 1, \"width\": 498, \"height\": 247}, {\"url\": \"assets/figures/local-pdf/local-20260601-173619609614-aaai26-mindcross_-fast-new-subject-adaptation-with-limited-data-for/fig-003.webp\", \"caption\": \"Figure 7: Ablation study of Top-K Collaboration Module.\", \"page\": 7, \"index\": 3, \"width\": 497, \"height\": 245}]"
motivation: 解决脑视频重建中数据稀缺和现有跨受试方法对新受试者适应缓慢的问题。
method: 设计MindCross，使用特定编码器捕获受试者特定信息、共享编码器捕获不变信息，并通过Top-K协作模块从先前受试者知识中增强新受试者解码。
result: 在fMRI/EEG-视频基准上，MindCross以单一模型实现了高效的跨受试解码和新受试者快速适应。
conclusion: MindCross为数据受限的脑视频解码提供了快速新受试者适应方法，具有实际应用潜力。
---

## 摘要
从脑信号重建视频是一项重要的脑解码任务。现有的脑解码框架主要基于被试依赖范式，需要为每个被试采集大量脑数据。然而，收集脑-视频数据的高昂成本导致了严重的数据稀缺。尽管已引入一些跨被试方法，但它们往往过度关注被试不变信息，而忽略了被试特定信息，导致基于微调的适应策略速度缓慢。为了实现快速且数据高效的新被试适应，我们提出MindCross，一种新颖的跨被试框架。MindCross的N个特定编码器和一个共享编码器分别设计用于提取被试特定信息和被试不变信息。此外，采用Top-K协作模块，利用从先前被试编码器学到的知识来增强新被试解码。在fMRI/EEG到视频基准上的大量实验表明，MindCross仅使用一个模型即可在跨被试解码和新被试适应方面具有有效性和高效性。代码 — https://github.com/XuanhaoLiu/MindCross

## Abstract
Reconstructing video from brain signals is an important brain decoding task. Existing brain decoding frameworks are pri- marily built on a subject-dependent paradigm, which requires large amounts of brain data for each subject. However, the expensive cost of collecting brain-video data causes severe data scarcity. Although some cross-subject methods being in- troduced, they often overfocus with subject-invariant infor- mation while neglecting subject-specific information, result- ing in slow fine-tune-based adaptation strategy. To achieve fast and data-efficient new subject adaptation, we propose MindCross, a novel cross-subject framework. MindCross’s N specific encoders and one shared encoder are designed to extract subject-specific and subject-invariant information, respectively. Additionally, a Top-K collaboration module is adopted to enhance new subject decoding with the knowl- edge learned from previous subjects’ encoders. Extensive ex- periments on fMRI/EEG-to-video benchmarks demonstrate MindCross’s efficacy and efficiency of cross-subject decod- ing and new subject adaptation using only one model. Code — https://github.com/XuanhaoLiu/MindCross

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：与读者关注的“brain decoding”“fMRI representation”“representation alignment”高度相关，直接涉及跨被试脑信号表征对齐与解码。
- **启发与意义**：为跨被试神经解码提供了“共享-特定”解耦表征的思路，有助于在数据稀缺下快速适应新被试，对神经先验建模和fMRI表征对齐研究具有示范意义。
- **可借鉴点**：可借鉴其Top-K相似被试协作机制与仅微调新被试编码器的轻量校准策略，用于多被试神经表征融合和低数据迁移。
- **阅读建议**：重点研读共享/特定编码器的损失设计和新被试校准过程，同时关注其局限性以设计改进方案。

## 1. 核心问题与研究动机
- **被试依赖范式的局限**：现有脑视频解码主要采用被试依赖范式，需要为每位被试采集大量脑信号数据，但脑-视频数据采集成本高昂，导致严重数据稀缺。
- **跨被试建模的不足**：现有跨被试方法过度追求被试不变信息（subject-invariant），忽略被试特定信息（subject-specific），常采用全模型微调策略，导致新被试适应速度慢、参数更新量大且可能损害旧被试性能。
- **目标**：设计一个能快速、数据高效地适应新被试的统一跨被试框架，仅用单一模型即可完成多被试解码与新被试适配。

## 2. 方法论
### 整体架构与三阶段流程
MindCross 包含训练（Training）、校准（Calibration）和测试（Test）三个阶段。所有编码器、解码器、重建器均为 MLP 类网络。
- **训练阶段**：在 $N$ 个已有被试数据上训练 $N$ 个特定编码器（subject-specific encoder）与 1 个共享编码器（shared encoder）。
- **校准阶段**：面对新被试，仅冻结已有模块，更新新被试的特定编码器与相应重建器，实现快速适配。
- **测试阶段**：通过新被试特定编码器和 Top-K 协作模块共同产生语义预测向量，最终送入视频生成模型（PyramidFlow）生成视频。

### 训练阶段的表征解耦
设已有被试数据集为 $\{x_i^j, y_i^j\}_{i=1}^N$，$x_i$ 为第 $i$ 名被试的脑信号样本，省略样本下标 $j$。
- **特定与共享特征提取**：
  $$s_i = E_s(x_i), \quad r_i = E_r(x_i)$$
  $s_i$ 是特定特征，$r_i$ 是共享特征。
- **特征融合与语义预测**：
  $$\hat{e}_i = D(\text{ResFuse}(s_i, r_i))$$
  其中残差融合模块定义为：
  $$\text{ResFuse}(s_i, r_i) = f(\text{concat}(s_i, r_i)) + r_i$$
  $D$ 为共享解码器，输出预测的文本 CLIP 嵌入 $\hat{e}_i$。

### 关键损失函数
- **域分类损失**（促使特定编码器捕获被试身份）：
  $$L_c = -\sum_{i=1}^N y_{dc}^i \log \hat{y}_{dc}^i$$
  其中 $\hat{y}_{dc} = C_{dc}(s_i)$。
- **域对齐损失**（通过梯度反转层 GRL 让共享特征不可区分被试）：
  $$L_{da} = \sum_{i=1}^N y_{da}^i \log \hat{y}_{da}^i, \quad \hat{y}_{da} = C_{da}(r_i)$$
- **差异损失**（促进两者正交，避免信息冗余）：
  $$L_{diff} = \frac{1}{N}\sum_{i=1}^N \|s_i \odot r_i\|_2^2$$
- **重建损失**（保证特征保留原始信息）：
  $$L_{rec} = \frac{1}{N}\sum_i (\frac{1}{m}\|\hat{x}_s^i - x_i\|_2^2 + \frac{1}{m}\|\hat{x}_r^i - x_i\|_2^2)$$
  其中 $\hat{x}_s^i = R_s(s_i)$, $\hat{x}_r^i = R_r(r_i)$。
- **语义对齐损失**：SoftCLIP 对比损失 + MSE：
  $$L_{align} = L_{SoftCLIP}(e, \hat{e}) + \frac{1}{N}\sum_i \|e_i - \hat{e}_i\|_2^2$$
- **总体训练损失**：
  $$L_{train} = L_{align} + \alpha L_{rec} + \beta L_c + \gamma L_{da} + \zeta L_{diff}$$

### 校准阶段
固定预训练的共享编码器、解码器、域分类器等，仅优化新被试特定编码器和对应重建器，损失为：
$$L_{calib} = L_{align} + \alpha' L_{rec}^t + \beta' L_{diff}$$

### Top-K 协作模块
测试时，将新被试的特定特征 $s_t$ 送入域分类器获得与已有各被试的相似度向量 $p$。选取 Top-K 个已有被试的特定编码器，加权融合它们的预测：
$$\hat{e}_c = \sum_{k \in \text{TopK}(p)} p_k \cdot \hat{e}_k$$
最终语义预测：
$$\hat{e} = \hat{e}_t + \lambda \hat{e}_c, \quad \lambda = 1e-2$$

## 3. 实验设计
- **数据集**：
  - **SEED-DV（EEG-视频）**：20 名被试观看 1400 段 2 秒视频片段，覆盖 40 个概念，前 6 块（1200 试次）训练，第 7 块（200 试次）测试。
  - **CC2017（fMRI-视频）**：3 名被试，训练集 18 段 8 分钟视频，测试集 5 段 8 分钟视频（各重复观看 2 次和 10 次，测试集平均），切分为 2 秒片段后，8640 训练样本、1200 测试样本。
- **评估指标**：
  - 语义级：N-way top-K 分类准确率（2-way 和 40/50-way），基于 CLIP 分类器（帧级）和 VideoMAE（视频级）。
  - 时空级：CLIP-pcc（相邻帧 CLIP 图像嵌入的平均余弦相似度）。
  - 像素级：SSIM、PSNR。
- **对比方法**：
  - 被试依赖方法：MinD-Video, NeuroClips, Mind-Animator, EEG2Video。
  - 跨被试方法：GLFA, MindBridge。

## 4. 资源与算力
- 文中未明确说明 GPU 型号、数量及具体训练时长。仅提及采用 PyramidFlow 作为视频生成模块未额外微调，校准阶段仅需更新少量参数，因此相对于全模型微调显著节省时间（见表 2 中的适应时间对比，如 EEG 校准 1.09 秒 vs. MindBridge 5.10 秒，fMRI 2.72 秒 vs. MindBridge 9.27 秒），但未给出训练总时长或所用计算资源细节。

## 5. 实验数量与充分性
- **主要实验组数**：
  - 跨被试视频重建性能对比（表 1，2 个数据集，多指标）。
  - 新被试适应数据效率实验（图 6，EEG 取 40/200/600 样本，fMRI 取 500/1500/4000 样本，LOSO 设计）。
  - 训练损失消融实验（表 3，EEG 和 fMRI 数据集）。
  - Top-K 协作模块消融（图 7，K=0,1,2）。
  - 相似被试选择热图与特征可视化（图 8、图 9）。
- **实验充分性**：消融覆盖了关键模块与损失项，定量对比包括主流被试依赖和跨被试方法，新被试适应模拟了低数据场景，评估维度较全面（语义、时空、像素），结果支持本文主张，整体较为充分且对比公平。

## 6. 主要结论与发现
- MindCross 仅用单一模型即可在多被试间取得与被试依赖方法可比甚至更优的语义级性能，且显著优于其他跨被试方法。
- 其共享-特定编码器成功解耦了被试不变和被试特定信息，可视化显示两者在特征空间中明显分离。
- 新被试校准仅需更新极少量参数（新特定编码器和重建器），在极少数据下（如 EEG 40 试次）仍能取得良好解码效果，且适应时间远小于对照方法。
- Top-K 协作模块通过检索相似已有被试的具体编码器，可进一步提升小样本新被试解码精度。

## 7. 优点
- **高效跨被试适配**：提出的校准策略冻结大部分参数，仅更新新被试模块，速度快、参数增量小，且不影响原有被试解码。
- **表征解耦设计**：通过特定/共享编码器加差异损失，显式分离被试相关和不相关信息，优于以往仅聚焦不变表征的方法。
- **协作解码机制**：利用域分类器检索相似被试进行加权预测，巧妙复用已有被试的特定知识，提升新被试小样本性能。
- **实验全面**：覆盖 EEG 和 fMRI 两种模态、多个指标、多种基线，并有消融与可视化支持。

## 8. 不足与局限
- **未明确计算资源**：缺少训练总时长、GPU 数量等关键复现信息。
- **被试数量有限**：fMRI 数据集仅 3 名被试，EEG 数据集 20 名，大被试池下泛化性待验证。
- **视频生成部分未深入优化**：直接采用现成 PyramidFlow，未探索更适合脑解码的生成模型或端到端优化。
- **适应性上限**：校准仅依靠小部分参数更新，对于极低数据量或分布差异巨大的新被试，性能可能接近瓶颈。
- **只预测文本嵌入**：简化了多模态预测（如同时预测帧潜在变量），可能损失部分低层重建质量。

## 9. 研究价值与阅读建议
- **关联方向**：脑解码（brain decoding）、fMRI 表征（fMRI representation）、表征对齐（representation alignment）。
- **启发与意义**：该工作展示了通过分离不变与特定表征实现快速跨被试脑解码的有效性，对多被试神经表征对齐及低资源迁移学习具有较高参考价值。
- **可借鉴点**：共享-特定编码器结构、Top-K 相似被试协作、冻结式新被试校准均可迁移至其他脑信号解析任务（如情绪识别、图像重建），值得借鉴其损失设计和训练策略。
- **阅读建议**：重点关注损失函数的设计动机与消融结果，以及校准阶段的具体实现与数据效率曲线，并思考在自己的任务中如何引入类似的不变/特定解耦和记忆式协作机制。

（完）
