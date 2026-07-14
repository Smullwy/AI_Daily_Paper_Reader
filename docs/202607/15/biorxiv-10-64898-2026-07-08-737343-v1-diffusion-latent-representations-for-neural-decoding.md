---
title: Diffusion Latent Representations for Neural Decoding
title_zh: 扩散潜在表示在神经解码中的应用
authors: "Wong, B., Laschowski, B."
date: 2026-07-13
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.08.737343v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: 使用扩散潜在表示进行神经解码
tldr: "神经解码中中间表示的选择影响重建性能和学习难度。本文提出新框架研究中间表示对下游学习的影响，并以扩散模型不同时间步的潜在表示作为概念验证用于神经语音解码。实验显示不同时间步的表示导致词错误率从44.7%到3.5%的显著差异，表明扩散潜在表示有效但高度依赖时间步选择。该框架为系统研究中间表示提供了基础。"
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-08-737343-v1/fig-001.webp\", \"caption\": \"Fig. 1. Overview of our framework for studying how representation choice influences downstream learning and reconstruction. A pretrained diffusion model performs reverse diffusion using the ground-truth conditioning factor M to generate target latent variables zi, which are tokenized into Vi. The latent model maps neural activity onto tokenized latent representations, which are then untokenized into z′i. Simultaneously, the conditioning factor model predicts M ′ using the ground-truth conditioning factor M as the target. During inference, z′i and M ′ are injected into the pretrained diffusion model to reconstruct the target stimulus.\", \"page\": 2, \"index\": 1, \"width\": 1076, \"height\": 592}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-08-737343-v1/fig-002.webp\", \"caption\": \"Fig. 2. Training dynamics for the conditioning factor and latent models. The top row shows training and validation losses and the bottom row shows validation Word Error Rate (WER) under teacher-forced generation. Although all models showed stable optimization, downstream reconstruction performance depended on the intermediate representation.\", \"page\": 5, \"index\": 2, \"width\": 1076, \"height\": 642}]"
motivation: 神经解码中中间表示的选择对性能和难度有重要影响，但缺乏系统研究。
method: 提出研究框架，并以扩散模型不同时间步的潜在表示作为中间表示进行神经语音解码实验。
result: "不同扩散时间步的表示导致重建性能差异显著，教师强制词错误率从44.7%到3.5%不等。"
conclusion: 扩散潜在表示可有效作为中间表示，但效果高度依赖所选时间步；该框架为系统研究中间表示提供了基础。
---

## 摘要
神经解码可视为一个表示学习问题，其中神经活动被映射为中间表示，然后进行下游重建。中间表示的选择影响性能和学习难度。我们开发了一个新框架，用于研究中间表示的选择如何影响下游学习和重建。作为概念验证，我们使用从不同扩散时间步提取的扩散潜在表示来进行神经语音解码。逐组件评估显示，重建性能在不同扩散时间步之间差异很大，不同潜在模型在教师强制下的词错误率分别为44.7%、7.5%和3.5%。这些结果表明，扩散潜在表示可以作为从神经活动学习中的有效中间表示，但其有效性很大程度上取决于所选的扩散时间步。更广泛地说，我们的框架为系统研究中间表示选择如何影响下游学习和重建提供了基础。

## Abstract
Neural decoding can be viewed as a representation learning problem in which neural activity is mapped into an intermediate representation before downstream reconstruction. The choice of intermediate representation influences both performance and learning difficulty. Here we developed a novel framework for studying how intermediate representation choice influences downstream learning and reconstruction. As a proof-of-concept, we instantiated our framework using diffusion latent representations extracted from different diffusion timesteps for neural speech decoding. Component-wise evaluation showed that reconstruction performance differed substantially across diffusion timesteps, with teacher-forced Word Error Rates of 44.7%, 7.5%, and 3.5% for different latent models. These results demonstrate that diffusion latent representations can serve as effective intermediate representations for learning from neural activity, but that their effectiveness depends strongly on the selected diffusion timestep. More broadly, our framework provides a basis for systematically studying how intermediate representation choice influences downstream learning and reconstruction.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文聚焦神经解码中的中间表示学习，与读者关注的“fMRI representation”、“brain encoding”及“neural prior”直接相关，便于迁移扩散潜在表示作为神经先验的建模思路。
- **启发与意义**：该研究揭示扩散时间步对解码性能的剧烈影响，为不同模态（如fMRI）选择最佳表示层级或噪声水平提供了量化参照，可帮助设计更有效的脑编码-解码对齐约束。
- **可借鉴点**：可借鉴其“冻结生成模型+学习神经到潜在映射”的框架，用于将fMRI视觉或语义表示对齐至扩散模型的不同去噪阶段，并引入时间步选择作为超参或自适应模块。
- **阅读建议**：重点阅读 Method 部分的两阶段训练和解码评估策略，以及 Discussion 中关于时间步性质差异的解释；弱相关但可拓展应用于多视角约束的对比学习设计。

## 1. 论文的核心问题与整体含义
- **核心问题**：神经解码可视为将高维、噪声随机神经活动映射到中间表示再重建的表示学习任务。中间表示的选择对下游性能和学习难度至关重要，但缺乏系统性研究不同表示如何影响学习效果。
- **研究动机**：以往神经解码研究多选定单一中间表示，且对表示的可学习性、统计几何性质如何影响解码不够关注。扩散潜在表示因其捕捉目标模态分布的能力而有前景，但不同扩散时间步的潜在表示差异显著，需专门考察。
- **整体含义**：论文提出一个通用框架，用于系统评估不同中间表示（尤其是扩散潜在表示）对下游重建的影响，为神经解码中的表示学习提供理论基础与实验范式。

## 2. 论文提出的方法论
- **框架概览**：分为三阶段——（1）预训练扩散模型生成扩散潜在表示与条件因子作为训练目标；（2）Transformer编码器-解码器从神经活动预测这些中间表示；（3）冻结扩散模型利用预测的潜在表示和条件因子重建目标信号。
- **编码器设计**：共享Transformer编码器，包含正弦位置嵌入和多头自注意力。潜在模型以自回归方式联合预测残差向量量化（RVQ）的多个码本索引；条件因子模型用线性投影回归连续值（如梅尔频谱）。两模型均有停止概率头。
- **解码器设计**：使用预训练条件扩散模型DiffWave，从预测的潜在变量 $z'_{ki}$ 和条件因子 $M'$ 执行逆向扩散，公式为：
  $$
  z'_{k,i-1} = \frac{1}{\sqrt{\alpha_i}} \left( z'_{ki} - \frac{\beta_i}{\sqrt{1-\bar{\alpha}_i}} \epsilon_\theta(z'_{ki}, i, M'_k) \right) + \sigma_i z
  $$
  其中 $z \sim \mathcal{N}(0,I)$，$\sigma_i$ 为超参数。
- **训练设置**：冻结扩散模型，仅优化编码器。潜在模型损失为所有RVQ码本的交叉熵和，条件因子模型为MSE损失，停止概率头用二元交叉熵。训练目标通过文本合成语音获得音频，提取梅尔频谱并执行条件逆向扩散生成各时间步的潜在表示，再用EnCodec tokenize（$J=4$ 个码本，每码本1024项）。
- **推理与评估**：自回归生成梅尔频谱长度后计算潜在序列长度，自回归生成潜在token，经EnCodec解码后输入扩散模型重建音频，由Whisper转录计算词错误率（WER）。分词水平、教师强制与自回归两种生成模式。

## 3. 实验设计
- **数据集**：采用单个受试者的皮层内微电极阵列（256通道）语音解码数据集，神经活动被划分为20 ms窗口，提取阈值交叉和频带功率特征，得到512维特征。训练集7879句，验证集1409句。
- **基准对比**：设定3个不同扩散时间步 $i \in \{1,2,3\}$ 的潜在模型（分别称模型1~3），加上条件因子模型。对比不同表示下的组件级WER；并与先前研究（如Card et al. 2024）在同一验证集上的性能对比。
- **评估方式**：组件式评估各编码器（如仅用潜在模型预测，条件因子使用真实值）以隔离误差；端到端评估采用教师强制和全自回归生成。

## 4. 资源与算力
- 文章明确提到“所有模型在PyTorch中实现，使用DistributedDataParallel在四块NVIDIA H100 GPU上训练”。未详细说明训练时长，但指出100个训练epoch，batch size 128，隐藏维度128，4层Transformer，2注意力头，学习率5e-4。可以大致推断训练速度较快但未记录具体小时数。

## 5. 实验数量与充分性
- **主要实验组**：
  - 4个编码器模型（条件因子模型 + 3个不同时间步的潜在模型）的独立训练与评估。
  - 端到端评估（组合潜在模型3和条件因子模型）的两种生成模式对比（自回归 vs. 教师强制）。
  - 与先前工作在同一数据集上的WER对比。
- **消融/分析实验**：通过不同扩散时间步的对比，考察表示选择的影响；并绘制训练损失曲线与WER曲线，观察优化动态。未进行不同超参数、不同深度、不同扩散架构等其他消融实验。
- **充分性评价**：实验数量较少，但聚焦于核心问题的验证，对中间表示影响给出了清晰的初步证据。公平性较好，各模型训练流程一致，使用相同骨干、优化器、数据划分。局限性在于仅在一个数据集、一种神经信号类型、单一扩散模型上验证，且仅比较了三个时间步，缺乏更全面的表示空间分析。

## 6. 论文的主要结论与发现
- 不同扩散时间步的潜在表示导致重建性能的巨大差异：潜在模型1（近起始步）WER高达44.7%，模型2为7.5%，模型3（近最终步）为3.5%，与条件因子模型持平。
- 训练损失稳定下降不保证良好的下游性能；表示的可学习性存在内在差异。
- 端到端框架教师强制WER仅4.6%，表明所选扩散表示能支持高精度重建，但自回归生成因误差累积导致WER激增至125.3%，说明性能瓶颈在于序列生成而非表示重建。
- 该框架为系统比较不同中间表示提供了可行工具。

## 7. 优点
- 首次显式分解神经解码中的中间表示影响，将表示学习问题独立出来研究，框架通用且可扩展。
- 实验设计巧妙：冻结生成模型，仅学习神经活动到生成模型所需中间表示的映射，保持重建质量上限可控，便于公平比较不同表示。
- 选择扩散时间步作为变量，揭示去噪过程的早、中、晚期潜在空间对解码任务的适应性差异，为表示工程提供指导。
- 组件级与端到端评估分离，准确诊断自回归误差累积问题。

## 8. 不足与局限
- **数据集局限性**：仅利用单人颅内数据，样本量有限，未在更多受试者、脑区或非侵入式信号上验证。
- **表示空间探索有限**：仅比较了三个扩散时间步，未考察更细粒度、自适应时间步或不同噪声调度的影响。
- **生成模式局限**：自回归生成完全失败，但未尝试非自回归生成、迭代 refine 或其他解码策略以缓解误差累积。
- **计算与比较公平性**：仅与一项先前工作对比，未涉及更多基线（如直接解码语音特征或不同潜在空间）。
- **泛化性未知**：框架仅验证于DiffWave和EnCodec，换成其他扩散架构或编码器是否成立有待检验。

## 9. 研究价值与阅读建议
（此部分已在开头提供，此处不再重复，以保证输出结构合规。）

（完）
