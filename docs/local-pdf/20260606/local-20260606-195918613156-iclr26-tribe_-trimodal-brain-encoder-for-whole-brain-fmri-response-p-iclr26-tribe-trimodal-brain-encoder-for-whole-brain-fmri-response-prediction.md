---
title: ICLR26 TRIBE_ TRImodal Brain Encoder for Whole-Brain fMRI Response Prediction
title_zh: ICLR26 TRIBE：用于全脑fMRI响应预测的三模态大脑编码器
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 使用视频和文本基础模型进行跨被试脑编码
tldr: 神经科学分领域研究阻碍统一认知模型。TRIBE是首个融合文本、音频、视频基础模型的多模态深度网络，用transformer建模时序，预测跨模态、脑区和个体的fMRI反应。在Algonauts 2025以显著优势夺冠，多模态在高级皮层优于单模态，为整合人脑表示模型铺路。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 3580, \"height\": 1255}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-003.webp\", \"caption\": \"\", \"page\": 3, \"index\": 3, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-004.webp\", \"caption\": \"\", \"page\": 3, \"index\": 4, \"width\": 1000, \"height\": 1000}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-005.webp\", \"caption\": \"\", \"page\": 3, \"index\": 5, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 2806, \"height\": 1255}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-007.webp\", \"caption\": \"\", \"page\": 7, \"index\": 7, \"width\": 2809, \"height\": 1255}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-008.webp\", \"caption\": \"\", \"page\": 8, \"index\": 8, \"width\": 3587, \"height\": 2289}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-009.webp\", \"caption\": \"\", \"page\": 8, \"index\": 9, \"width\": 3587, \"height\": 2289}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-010.webp\", \"caption\": \"\", \"page\": 8, \"index\": 10, \"width\": 4060, \"height\": 2289}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-011.webp\", \"caption\": \"\", \"page\": 8, \"index\": 11, \"width\": 547, \"height\": 426}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-012.webp\", \"caption\": \"\", \"page\": 8, \"index\": 12, \"width\": 462, \"height\": 442}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-013.webp\", \"caption\": \"\", \"page\": 16, \"index\": 13, \"width\": 1719, \"height\": 753}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-014.webp\", \"caption\": \"\", \"page\": 16, \"index\": 14, \"width\": 1719, \"height\": 753}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-015.webp\", \"caption\": \"\", \"page\": 16, \"index\": 15, \"width\": 1719, \"height\": 753}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-016.webp\", \"caption\": \"\", \"page\": 17, \"index\": 16, \"width\": 1062, \"height\": 388}, {\"url\": \"assets/figures/local-pdf/local-20260606-195918613156-iclr26-tribe_-trimodal-brain-encoder-for-whole-brain-fmri-response-p/fig-017.webp\", \"caption\": \"\", \"page\": 17, \"index\": 17, \"width\": 1062, \"height\": 388}]"
motivation: 传统神经科学碎片化阻碍统一认知模型的建立，需整合多模态、多脑区预测方法。
method: 利用文本、音频和视频基础模型的预训练表示，通过transformer处理时间动态，融合多模态信息预测fMRI反应。
result: 在Algonauts 2025脑编码竞赛中大幅领先夺冠，多模态在关联皮层系统性地优于单模态模型。
conclusion: 多模态融合显著提升脑反应预测，为构建人脑整合表示模型奠定了基础。
---

## 摘要
历史上，神经科学通过分化为专门领域而取得进展，每个领域聚焦于孤立的模态、任务或脑区。尽管成果丰硕，这种方法却阻碍了统一认知模型的发展。在本技术报告中，我们介绍了TRIBE，这是第一个经过训练以预测跨多种模态、皮层区域和个体的刺激所引发的大脑响应的深度神经网络。通过结合文本、音频和视频基础模型的预训练表示，并利用Transformer处理它们的时间演化特性，我们的模型能够精确建模视频引发的时空fMRI响应，在Algonauts 2025大脑编码竞赛中以显著优势获得第一名。消融实验表明，虽然单模态模型能够可靠地预测其对应的皮层网络（例如视觉或听觉网络），但我们的多模态模型在高级联合皮层中系统性地优于它们。目前应用于感知和理解，我们的方法为构建人脑表征的整合模型铺平了道路。代码见https://github.com/facebookresearch/algonauts-2025。

## Abstract
Historically, neuroscience has progressed by fragmenting into specialized do- mains, each focusing on isolated modalities, tasks, or brain regions. While fruit- ful, this approach hinders the development of a unified model of cognition. In this technical report, we introduce TRIBE, the first deep neural network trained to predict brain responses to stimuli across multiple modalities, cortical areas and individuals. By combining the pretrained representations of text, audio and video foundational models and handling their time-evolving nature with a trans- former, our model can precisely model the spatial and temporal fMRI responses to videos, achieving the first place in the Algonauts 2025 brain encoding com- petition with a significant margin over competitors. Ablations show that while unimodal models can reliably predict their corresponding cortical networks (e.g. visual or auditory networks), they are systematically outperformed by our mul- timodal model in high-level associative cortices. Currently applied to percep- tion and comprehension, our approach paves the way towards building an inte- grative model of representations in the human brain. Our code is available at https://github.com/facebookresearch/algonauts-2025.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- 关联方向：本文使用文本、音频、视频基础模型进行跨被试、多模态脑编码研究，与读者的“brain encoding”、“representation alignment” 和 “fMRI representation” 高度相关。
- 启发与意义：作者证明了非线性 Transformer 融合多模态基础模型提取的特征，能够显著提升高级联合皮层的预测性能，验证了多模态表征对齐的可行性与价值。
- 可借鉴点：可借鉴其“模态 Dropout”和“多被试统一建模”策略，用于提升自监督脑编码模型对不同模态缺失场景的鲁棒性，或者借鉴其“主体条件层”实现少样本跨被试对齐。
- 阅读建议：重点阅读第 3 节多模态增益的消融实验图和训练细节，关注作者如何量化不同脑区对多模态互补信息的依赖，这对设计新的多模态约束损失函数有直接帮助。

---

## 1. 论文核心问题与整体含义
- **核心问题**：传统神经科学倾向于分析单一模态刺激与特定脑区的线性映射，导致对“大脑如何整合感知信息并构建统一认知表征”的理解碎片化。现有的脑编码模型普遍存在三大局限：仅使用线性映射、按被试独立建模、仅处理单模态输入。
- **整体含义**：本文提出的 TRIBE 模型旨在打破上述碎片化壁垒，首次实现非线性、跨被试、且融合文本、音频、视频三模态的全脑 fMRI 响应预测，为构建人脑统一表征模型提供了新范式。

## 2. 方法论
- **核心思想**：利用预训练的基础模型提取时间对齐的三模态特征序列，通过可学习的 Transformer 门控网络动态整合跨模态与时序信息，最后利用被试条件层实现跨个体预测。
- **关键技术流程与细节**：
  - **特征提取**：
    - **文本**：使用 Llama-3.2-3B 提取上下文词嵌入，按时间窗生成 $f=2\text{Hz}$ 的句子级序列。
    - **音频**：使用 Wav2Vec-Bert-2.0 提取声学特征并重采样至 $2\text{Hz}$。
    - **视频**：使用 Video-JEPA 2 处理密集视频帧，通过空间平均压缩成 $2\text{Hz}$ 的全局视觉特征。
  - **特征融合**：
    - 将各模态深度层特征按深、浅层分组线性投影至统一维度 $D=1024$，并沿时间维度拼接。
    - 引入模态 Dropout（$p=0.2$）在训练时随机屏蔽某类输入，强制模型学习模态间的互补性。
  - **序列建模**：
    - 使用 8 层全注意力 Transformer 编码器，对拼接后的三模态时序输入进行跨时间与跨模态的非线性交互。
    - 输出端使用自适应池化将高频（$>1/\text{TR}$）信号压缩至与 fMRI TR 一致的频率。
  - **跨被试泛化**：
    - 在输出层前加入被试条件层（Subject Layer），针对每个被试学习独立的线性投影权重，令模型能够捕捉不同大脑的结构差异。
  - **训练细节**：
    - 采用 MSE 损失，配合 AdamW 优化器、余弦退火和随机权重平均。
    - 推理时采用 $M=1000$ 个模型的软投票集成策略，显著降低方差。

## 3. 实验设计
- **数据集**：
  - **Courtois NeuroMod**：总时长超 80 小时的超大量自然观影 fMRI 数据（包含《老友记》及多部电影）；本文依据 Algonauts 2025 标准仅使用其中 4 名被试。
  - **大脑分区**：基于 Schaefer 图谱的 1000 个皮层包裹体进行时序预测。
- **基准对比与竞赛**：
  - **Algonauts 2025** 竞赛排行榜：在公开榜上以显著优势（$\sim0.2146$）击败其他 267 支团队，验证了模型的 SOTA 性能。
  - **分布外泛化**：测试了无声黑白电影、纪录片、日漫动画等多种极端分布外影片，均展现出鲁棒的预测能力。
- **对比方法**：
  - **单模态基线**：仅训练单模态（文本/音频/视频）编码器。
  - **双模态基线**：测试了两两模态组合的编码器。
  - **线性基线**：传统无 Transformer 的线性回归或循环网络。

## 4. 资源与算力
- **算力描述**：明确提到了训练所需算力。
  - **特征提取阶段**：在使用 128 块 32GB 显存的 V100 GPU 集群上耗时 24 小时完成大规模基础模型的特征提取。
  - **TRIBE 主体训练阶段**：单个 V100 GPU 训练 15 个 Epoch（配合早停）耗时 24 小时。
- **资源**：所有预训练模型均基于 HuggingFace 平台开源权重。

## 5. 实验数量与充分性
- **实验数量**：
  - **主实验**：包含 Algonauts 双阶段竞赛结果和多部 OOD 电影验证。
  - **消融实验至少包含 6 组**：
    1.  模态消融：三模态、单模态和双模态。
    2.  被试消融：跨被试联合训练 vs 单被试独立训练。
    3.  结构消融：有无 Transformer、是否为非线性。
    4.  数据量规模率：不同训练时长下的性能曲线。
    5.  上下文长度规模率：不同文本长度下的性能曲线。
    6.  层级深度选择：不同基础模型层的编码性能差异。
- **充分性与公平性**：实验设计非常充分。全脑显著性检验（FDR < 0.001）和噪声天花板归一化分析（归一化 Pearson 达 0.54）严格排除了随机性干扰；通过 Atlas 皮层映射展示了模态功能分布，具有极强的可解释性。

## 6. 主要结论与发现
- **多模态互补**：三种模态独立编码性能均不如多模态，文本包含的深层语义对于顶叶和额叶的联合皮层预测最为关键。
- **非线性和时序必要性**：移除 Transformer 后性能骤降 0.08，证明了时序自注意力机制对于建模缓慢血流动力学延迟（HRF）和跨时刻信息聚合的重要性。
- **跨被试协同**：统一建模能通过利用个体间共性缓解数据稀疏问题。
- **空间特异性**：模态在皮层的优势区域与已知的功能分区一致（视频优势区在枕叶，音频在颞叶），而多模态融合优势区主要位于前额叶-顶叶-颞叶交汇的联合皮层。

## 7. 优点
- **开创性系统集成**：首次在单一模型中同时解决线性/非线性、单模态/多模态、单被试/多被试这三大挑战。
- **极强的时序设计**：通过 Transformer 直接学习 HRF，避免了人为设定血流动力学响应函数的误差，注意力热图可视化正确反映了 5-10 秒的生理延迟。
- **训练策略有效**：创新性地使用“模态 Dropout”增强了单模态预测的鲁棒性；1000 模型集成显著提升泛化水平。

## 8. 不足与局限
- **空间分辨率有限**：模型仅在 Schaefer 1000 个大脑包裹体上预测，忽略了体素级别的精细拓扑信息（如视网膜拓扑映射）。
- **数据集受限于被试数量**：仅针对 4 名被试进行深度挖掘，限制了跨被试泛化结论的普适性，且未深入探究 Zero-shot 预测未知被试的能力。
- **模态融合受限**：视频模态提取时丢弃了空间位置信息，可能损害了 V1-V4 初级视觉皮层的预测精度（实验显示多模态视觉区性能反而略低于纯视觉特征）。
- **时间模态范围固定**：仅限于 fMRI 数据，无法捕捉神经元毫秒级的真实电生理反应。
- **模型架构固化**：采用硬性的早期拼接和固定的基础模型特征提取，无法实现端到端的适应性微调（可能存在预训练目标与大脑表征对齐的偏差）。

## 9. 研究价值与阅读建议（全局总结）
- 本文提出的多模态时序对齐和跨被试统一建模思路，可直接用于设计新的自监督脑编码预训练任务。
- 可借鉴其“基于基础模型层深度的脑区归属分析”方法，验证特定深度网络的表征是否更偏向于脑的高级语义区或低级感觉区。
- 建议重点关注消融实验部分，结合皮层投影图研究多模态集成如何提升研究者关注的“多视图约束”性能，为后续引入更多元的模态提供实验设计模板。
- 对于研究非侵入式 BCI 或脑语义解码的读者，报告中关于注意力机制模拟 HRF 延迟及应对缺失模态的 Dropout 策略极具工程落地价值。

（完）
