---
title: "Brain2voice 2.0: High-performance voice synthesis brain-computer interface"
title_zh: Brain2voice 2.0：高性能语音合成脑机接口
authors: "Wairagkar, M., Srinivasan, A., Card, N. S., Singer-Clark, T., Hou, X., Iacobacci, C., Miller, L. M., Hochberg, L. R., Brandman, D. M., Stavisky, S. D."
date: 2026-07-06
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.30.735633v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 高性能语音合成BCI解码皮层内信号
tldr: "针对脑机接口从神经信号直接合成语音不够清晰的问题，本研究提出brain2voice 2.0，一种多模态Transformer解码架构，利用连续声学特征与音素标记的互补信息，结合自监督和对抗训练，实现了高可懂度的实时语音合成。在皮质内基准数据集上，合成语音的词错误率降至5.24%，较此前最优结果提升了8倍，首次跨过临床可用门槛。"
source: biorxiv
selection_source: fresh_fetch
motivation: 现有脑-语音脑机接口合成的语音可懂度不足，无法满足自然对话需求。
method: 采用多模态Transformer，同时预测连续声学特征与音素标记，并通过自监督和对抗训练提升合成质量。
result: "听写测试的词错误率仅5.24%，较之前最优的43.75%降低至约八分之一，音素错误率也低至7%。"
conclusion: brain2voice 2.0首次实现高可懂度实时神经语音合成，为瘫痪患者的临床脑-语音接口提供了可行方案。
---

## 摘要
脑机接口（BCIs）通过直接从大脑活动中解码意图语音，为神经损伤导致的言语丧失提供了有前景的解决方案。尽管近期BCIs已能实现高精度的文本通信，却无法提供自然对话所必需的即时语音输出。脑-语音BCIs通过直接从神经信号解码语音弥补了这一差距，然而目前最先进的BCI合成语音仍不够清晰，难以实际应用。我们推出brain2voice 2.0，一种基于多模态Transformer的新型BCI解码架构，能够实时从皮层内神经信号合成高度清晰的语音。Brain2voice 2.0在连续且自定义标记化的声学目标和音素目标上进行训练，利用两者互补的语音信息。我们采用自监督和对抗训练目标，增强声学特征质量并提升合成清晰度。在每个10毫秒时间步，模型因果性地输出连续和标记化的声学特征用于实时语音合成，同时输出时间对齐的音素预测（原始音素错误率：7%，与最新脑-文本模型相当）。我们在先前的皮层内脑-语音基准数据集（Wairagkar et al. 2025）上评估了这一新方法。未经训练的人类听者转录brain2voice 2.0合成语音的词错误率为5.24%，清晰度较之前最优结果（43.75%）提升了8倍。Brain2voice 2.0表明，从神经信号实现高度清晰的实时语音合成是可行的，首次超越了瘫痪患者临床脑-语音BCI所需清晰度阈值。

## Abstract
Brain-computer interfaces (BCIs) offer a promising solution to speech loss due to neurological injury by decoding intended speech directly from brain activity. While recent BCIs have restored high-accuracy text-based communication, they fail to provide instantaneous voice output essential for the natural flow of conversation. Brain-to-voice BCIs address this gap by decoding voice directly from neural signals. However, even the state-of-the-art (SOTA) BCI-synthesized voice is not yet intelligible enough for real-world adoption. We introduce brain2voice 2.0, a new multimodal Transformer-based BCI decoder architecture capable of synthesizing highly intelligible voice from intracortical neural signals in real-time. Brain2voice 2.0 is trained on continuous and custom-tokenized acoustic targets and phoneme targets, leveraging their complementary speech information. We use self-supervised and adversarial training objectives that enhance acoustic feature quality and improve synthesis intelligibility. At each 10 ms timestep, the model causally outputs continuous and tokenized acoustic features for real-time voice synthesis as well as time-aligned phoneme predictions (raw phoneme error rate: 7%, comparable to the latest brain-to-text models). We evaluated this new approach on our prior intracortical brain-to-voice benchmark dataset (Wairagkar et al. 2025). Naive human listeners transcribed brain2voice 2.0 synthesized voice with a word error rate of 5.24%--an 8x improvement in intelligibility over previous SOTA results (43.75%). Brain2voice 2.0 demonstrates that highly intelligible real-time voice synthesis from neural signals is achievable, for the first time crossing the intelligibility threshold necessary for clinically viable brain-to-voice BCIs for people with paralysis.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文聚焦侵入式神经信号的语音合成，与读者关注的 “fMRI representation” 和 “representation alignment” 技术路径不同，属于弱相关；但在 “brain decoding” 方向上高度契合。
- **启发与意义**：展示了多模态表征（连续声学、离散声学标记与音素）在解码中的互补优势，其利用自监督与对抗训练增强特征质量的思想，对通用表征对齐有启发。
- **可借鉴点**：可借鉴其多任务并行训练、自监督辅助目标及因果时序模型设计，用于提升脑信号解码模型的精度与稳健性。
- **阅读建议**：建议重点关注其多目标损失函数设计和复杂特征的离散化策略（如自定义RVQ标记器），并关注其消融实验中对各模块贡献的分析。

## 1. 论文的核心问题与整体含义
- **核心问题**：目前因神经损伤导致言语丧失的脑-语音脑机接口（BCI）虽能实现文本解码，但合成的语音可懂度（人类听写平均词错误率 WER 为 43.75%）不足以支撑自然流畅的实时对话。
- **整体含义**：本研究旨在提出一种新一代 BCI 解码器，首次实现从皮层内神经信号实时合成高度可懂的语音，将合成语音的可懂度提升至临床可用水平（WER 降至 5.24%），为瘫痪患者的声学交流闭环奠定基础。

## 2. 论文提出的方法论
- **核心思想**：构建一个多模态因果 Transformer 解码器，同时利用连续的声学特征、自定义的离散声学标记和音素标记作为互补解码目标，并引入自监督与对抗训练以增强合成质量。
- **关键技术细节**：
    - **模型架构**：以带因果掩码的序列到序列 Transformer 编码器（8层，隐藏层维度384，6头）为骨干网络，每 10 ms 步长处理 $t \times 512$ 的神经特征矩阵，输出至四个并行解码头：（1）连续声学头；（2）标记化声学头；（3）音素头；（4）自监督学习头。
    - **声学目标**：采用 LPCNet 声学特征（18维频谱特征 + 音高周期 + 音高强度）作为主要目标。连续声学头直接回归 $20$ 维 LPCNet 特征；标记化声学头则预测自定义 Token（基于残差矢量量化，共8个码本，每码本128个质心）以重建特征。
    - **音素目标**：利用 CTC 损失，使模型在无精准时间对齐目标的情况下预测 $39$ 个音素 + 空白符。
    - **训练策略**：联合损失函数 $L_{total}$ 由均方误差（$L_{cont}$）、交叉熵（$L_{tokn}$）、CTC（$L_{phon}$）、对抗生成损失（$L_{G}\\_{adv}$ 和 $L_D$）、特征匹配损失（$L_{Fm}$）及自监督余弦相似度损失（$L_{SSL}$）组成，采用不确定性加权自动调整主要损失的权重。
    - **对抗训练**：使用多尺度判别器（在帧、子音素、音节、词四个时间尺度）提升连续声学特征的感知质量。
    - **实时推理**：采用滑动窗口（800 ms历史数据）因果预测下一个 10 ms 帧，计算延迟低于 10 ms。

## 3. 实验设计
- **数据集**：使用作者先前基准研究的数据集，来自 BrainGate2 临床试验的一名 45 岁 ALS 伴严重构音障碍患者（代号‘T15’）的皮层内神经信号（4个微电极阵列，共256通道）。数据包含 8,489 次试次，受试者尝试说出屏幕提示的句子。
- **基准对比**：与作者 2025 年的先前最先进（SOTA）脑-语音模型进行直接比较，该模型在相同测试集上的人类听写 WER 为 43.75%。
- **评估方法**：
    - **可懂度评估**：采用亚马逊众包平台招募未受训人类听者，对合成语音进行转写，以中位 WER 和音素错误率（PER）为核心指标。同时使用 Whisper 自动语音识别（ASR）进行一致性验证。
    - **客观质量评估**：计算合成语音与目标语音在梅尔频率上的皮尔逊相关系数（$r$）及梅尔倒谱失真（MCD）。
    - **基准测试**：在预设的128个试次基准测试集和视频演示集上进行评估，并对比了连续与标记化两种声学输出路径的表现。

## 4. 资源与算力
- 所有模型训练在**单块 NVIDIA RTX 5090 GPU** 上完成，**训练耗时约 1.5 小时**。
- 推理测试同样使用该 GPU，合成单个连续/标记化声学特征并声码化输出一个 10 ms 语音帧的耗时分别为 $1.47 \pm 0.11$ ms 和 $2.11 \pm 0.21$ ms。

## 5. 实验数量与充分性
- **消融实验**：设计了一个包含 8 种模型配置的完整消融研究，逐步增加多模态头、对抗训练、自监督学习、语音区加权和新语音目标，系统评估了各组件对 WER 和 PER 的贡献。
- **硬件配置影响**：分析了不同电极数量（64/128/192/256通道）和不同植入脑区阵列（v6v/M1/55b/d6v）对合成语音 WER 的影响。
- **评估角度**：结合主观（人类听写、ASR 转写）和客观（频谱相关性、MCD）指标进行多维评估。
- **实验公平性**：使用公开数据集和固定的数据划分，与先前工作的对比基线清晰，消融实验验证了设计的有效性，实验设计较为充分和客观。

## 6. 论文的主要结论与发现
- brain2voice 2.0 实现了从皮层内神经信号实时合成高度可懂的语音，人类听写 WER 达 **5.24%**，较先前 SOTA（43.75%）**提升了8倍**。
- 该模型同时输出的音素序列，在因果预测下原始音素错误率仅为 **7.03%**，且自动与语音输出在时间上精准对齐。
- 多模态互补目标（连续与离散声学特征、音素）、自监督辅助任务以及对抗训练是性能大幅提升的关键。
- 模型满足实时性要求，总计算延迟远低于 10 ms，为闭环神经假体应用提供了基础。
- 语音清晰度随电极数量增加而提高，且位于腹侧中央前回（v6v）的电极贡献最大，表明高密度、高质量信号采集对于实现高可懂度至关重要。

## 7. 优点
- **突破性性能**：首次将脑-语音 BCI 合成语音的可懂度提升至5% WER附近，具有里程碑意义。
- **实时与因果设计**：模型完全因果且推理延迟低，可直接部署于实时闭环系统，优于此前多数仅支持离线或无法实时工作的方案。
- **创新的多模态架构**：将连续回归与离散分类目标统一在一个框架下，通过多任务学习充分挖掘神经信号中的互补语音信息。
- **自定义离散标记器**：基于 LPCNet 特征域的残差矢量量化标记器，能保留说话人特有的构音障碍模式和语音韵律，优于通用的语音标记器。
- **系统且扎实的实验**：包含详尽的消融研究，清晰地量化了每个设计和训练策略的贡献。

## 8. 不足与局限
- **单参与者数据**：实验仅基于一名 ALS 患者的数据，模型跨个体、跨病种的泛化能力尚未验证。
- **离线模拟评估**：尽管模拟了实时推理，但评估仍基于离线数据，未包含用户闭环操作中由听觉反馈引起的神经适应性变化。
- **任务范式的限制**：训练与测试数据均为念出屏幕提示句子的任务，模型在自发性、自由对话场景下的表现仍是未知数。
- **初始化依赖**：目标语音对齐需要至少一次基于语音尝试的种子试枕，对于完全失去任何发生能力的患者，如何获取初始对齐信号是一个开放性挑战。

## 9. 研究价值与阅读建议
- **关联方向**：本文聚焦侵入式神经信号的语音合成，与读者关注的 “fMRI representation” 和 “representation alignment” 技术路径不同，属于弱相关；但在 “brain decoding” 方向上高度契合。
- **启发与意义**：展示了多模态表征（连续、离散、音素）在解码中的互补优势，其利用自监督与对抗训练增强特征质量的思想，对通用表征对齐有启发。
- **可借鉴点**：可借鉴其多任务并行训练、自监督辅助目标及因果时序模型设计，用于提升脑信号解码模型的精度与稳健性。
- **阅读建议**：建议重点关注其多目标损失函数设计和复杂特征的离散化策略（如自定义RVQ标记器），并关注其消融实验中对各模块贡献的分析。

（完）
