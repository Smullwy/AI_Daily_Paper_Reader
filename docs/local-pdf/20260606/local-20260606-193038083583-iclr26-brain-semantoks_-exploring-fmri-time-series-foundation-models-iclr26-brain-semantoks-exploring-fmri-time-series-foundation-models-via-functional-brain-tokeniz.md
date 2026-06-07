---
title: ICLR26 Brain-Semantoks_ Exploring fMRI Time Series Foundation Models via Functional Brain Tokenization
title_zh: ICLR26 Brain-Semantoks：基于功能性大脑分词探索fMRI时间序列基础模型
authors: Unknown
date: 2026-06-06
pdf: assets/local_pdfs/local-20260606-193038083583-iclr26-brain-semantoks_-exploring-fmri-time-series-foundation-models.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 7.0 订阅评分
score_label: 订阅评分
evidence: 通过标记化学习跨被试泛化的fMRI表征
tldr: 针对功能磁共振成像(fMRI)基础模型易受噪声干扰且需大量微调的问题，本文提出Brain-Semantoks自监督框架。通过语义分词器将区域信号聚合成功能网络令牌，并利用自蒸馏目标增强时间表征稳定性，结合课程训练从低信噪比数据中学习鲁棒表征。仅用线性探针即可在多种下游任务中取得优异表现，且扩展分析表明更多无标签数据能可靠提升分布外性能，无需域适应。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260606-193038083583-iclr26-brain-semantoks_-exploring-fmri-time-series-foundation-models/fig-001.webp\", \"caption\": \"\", \"page\": 3, \"index\": 1, \"width\": 2048, \"height\": 458}, {\"url\": \"assets/figures/local-pdf/local-20260606-193038083583-iclr26-brain-semantoks_-exploring-fmri-time-series-foundation-models/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 2048, \"height\": 1020}, {\"url\": \"assets/figures/local-pdf/local-20260606-193038083583-iclr26-brain-semantoks_-exploring-fmri-time-series-foundation-models/fig-003.webp\", \"caption\": \"\", \"page\": 3, \"index\": 3, \"width\": 2048, \"height\": 458}, {\"url\": \"assets/figures/local-pdf/local-20260606-193038083583-iclr26-brain-semantoks_-exploring-fmri-time-series-foundation-models/fig-004.webp\", \"caption\": \"\", \"page\": 3, \"index\": 4, \"width\": 1610, \"height\": 814}, {\"url\": \"assets/figures/local-pdf/local-20260606-193038083583-iclr26-brain-semantoks_-exploring-fmri-time-series-foundation-models/fig-005.webp\", \"caption\": \"\", \"page\": 3, \"index\": 5, \"width\": 796, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260606-193038083583-iclr26-brain-semantoks_-exploring-fmri-time-series-foundation-models/fig-006.webp\", \"caption\": \"\", \"page\": 8, \"index\": 6, \"width\": 5175, \"height\": 2260}, {\"url\": \"assets/figures/local-pdf/local-20260606-193038083583-iclr26-brain-semantoks_-exploring-fmri-time-series-foundation-models/fig-007.webp\", \"caption\": \"\", \"page\": 9, \"index\": 7, \"width\": 2626, \"height\": 544}, {\"url\": \"assets/figures/local-pdf/local-20260606-193038083583-iclr26-brain-semantoks_-exploring-fmri-time-series-foundation-models/fig-008.webp\", \"caption\": \"\", \"page\": 9, \"index\": 8, \"width\": 5952, \"height\": 1456}, {\"url\": \"assets/figures/local-pdf/local-20260606-193038083583-iclr26-brain-semantoks_-exploring-fmri-time-series-foundation-models/fig-009.webp\", \"caption\": \"\", \"page\": 21, \"index\": 9, \"width\": 414, \"height\": 388}]"
motivation: 现有fMRI基础模型关注低层次重建，对噪声敏感，下游任务需大量微调，亟需学习抽象鲁棒的脑动态表征。
method: 提出Brain-Semantoks框架，包含语义分词器聚合区域信号为功能网络令牌，以及自蒸馏目标与课程训练策略。
result: 学习到的表征仅靠线性探针就在多任务上表现强劲，更多无标签数据带来分布外性能提升且无需域适应。
conclusion: Brain-Semantoks通过功能脑令牌化和自蒸馏，有效学习fMRI抽象表征，为脑成像基础模型提供了新路径。
---

## 摘要
功能磁共振成像（fMRI）时间序列基础模型的发展为预测疾病和认知相关表型带来了巨大希望。然而，当前模型通常在小脑区上使用掩码重建目标进行训练，这种对低层信息的关注导致表征对噪声和时间波动敏感，需要针对下游任务进行大量微调。我们提出Brain-Semantoks，一个专为学习大脑动态抽象表征而设计的自监督框架。其架构建立在两项核心创新之上：语义分词器将噪声区域信号聚合成代表功能网络的稳健标记，自蒸馏目标则强制表征在时间上保持稳定。我们通过新颖的训练课程稳定该目标，确保模型从低信噪比时间序列中稳健地学习有意义的特征。实验表明，即使仅使用线性探针，学习到的表征也能在多种下游任务上取得强性能。此外，全面的扩展分析表明，更多无标签数据能可靠地提升分布外性能，无需领域自适应。

## Abstract
The development of foundation models for functional magnetic resonance imag- ing (fMRI) time series holds significant promise for predicting phenotypes related to disease and cognition. Current models, however, are often trained using a mask- and-reconstruct objective on small brain regions. This focus on low-level informa- tion leads to representations that are sensitive to noise and temporal fluctuations, necessitating extensive fine-tuning for downstream tasks. We introduce Brain- Semantoks, a self-supervised framework designed specifically to learn abstract representations of brain dynamics. Its architecture is built on two core innovations: a semantic tokenizer that aggregates noisy regional signals into robust tokens rep- resenting functional networks, and a self-distillation objective that enforces repre- sentational stability across time. We show that this objective is stabilized through a novel training curriculum, ensuring the model robustly learns meaningful features from low signal-to-noise time series. We demonstrate that learned representations enable strong performance on a variety of downstream tasks even when only using a linear probe. Furthermore, we provide comprehensive scaling analyses indicat- ing more unlabeled data reliably results in out-of-distribution performance gains without domain adaptation.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

- **关联方向**：本文与您关注的 fMRI 表征、多视图约束、表示对齐及神经先验高度匹配，直接回答“如何学习跨被试泛化的脑动态表征”。
- **启发与意义**：论文展示了用强神经归纳偏置（功能网络）稳定多视图训练、抑制低信噪比表征坍塌的可行路径，对脑解码与表示对齐研究具有方法论启发。
- **可借鉴点**：语义分词器和教师引导的时间正则化（TTR）可直接用于多视图 fMRI 预训练中缓解模式坍塌；时间自蒸馏框架可迁移到其他时序脑影像的对齐与编码任务。
- **阅读建议**：优先阅读第3节方法论（语义分词、自蒸馏与课程训练），重点理解“先学网络均值、再学动态”如何稳定训练，再参考第5-6节实验与消融设计。

## 1. 论文的核心问题与整体含义

- **核心问题**：现有 fMRI 基础模型（如 BrainLM、Brain-JEPA）主要采用掩码信号重建目标，学习到的是对低层区域信号的编码，这类表示对噪声与瞬时波动高度敏感，导致下游预测任务（疾病、认知等稳定表型）需要大量微调才能取得好效果，未能充分发挥基础模型“开箱即用”的迁移优势。
- **整体含义**：论文主张，要预测稳定的个体表型，必须从“精确重建信号”转向“抽象表征”，即舍弃瞬时噪声，提取跨时间稳定的大脑动力学高层语义。为此，论文提出了一种从输入到目标都围绕“抽象”设计的自监督框架 Brain-Semantoks，目标是学习适合于线性探针即可高效迁移的表征。

## 2. 论文提出的方法论

Brain-Semantoks 的方法论由三个紧密耦合的创新组件构成：**语义分词器（Semantic Tokenizer）**、**自蒸馏表征学习框架**和**教师引导的时间正则化训练课程（TTR）**。

- **语义分词器**：
    - **神经科学归纳偏置**：不再对单个脑区（ROI）做线性投影，而是按预设的 $N$ 个功能脑网络（如默认模式网络）将多个脑区信号聚合为一个“网络令牌”，将输入从 $\mathbb{R}^{C \times T}$ 压缩为 $\mathbb{R}^{N \times P \times D}$ 的短序列（$P$ 为划分成的时间块数）。
    - **实现方式**：为每个功能网络设计一个独立模块 $g_n$，先用多尺度卷积滤波器（标准卷积 + 结构化深度可分离卷积）从较长时间块中提取层次化时间模式，再经平均池化与 LayerNorm 得到低噪声、富含语义的令牌序列。

- **自蒸馏框架**：
    - **学生-教师结构**：教师网络的参数 $\theta_t$ 由学生网络权重 $\theta_s$ 的指数滑动平均更新：$\theta_t \leftarrow \alpha \theta_t + (1-\alpha)\theta_s$。
    - **跨时间一致性**：对同一扫描随机切出两个长时域视图 $\mathbf{X}^{(1)}, \mathbf{X}^{(2)}$，通过匹配学生与教师的输出，迫使模型学习跨时间稳定的高层表示。
    - **多级损失函数**：
        - 全局语义损失 $L_{CLS}$：跨视图匹配 $[CLS]$ 令牌输出，并引入编码率正则项 $R_\epsilon$ 防止子空间坍缩。
        - 网络令牌预测损失 $L_{Tok}$：在视图内部，让学生网络根据未被掩码的上下文预测被掩码的网络令牌，且掩码模式为“切片掩码”（一次遮盖整个网络或连续时间列），强制模型学习复杂的长程关系。
        - 总目标：$L_{Total} = L_{CLS} + \lambda_{Tok}L_{Tok} + \lambda_{TTR}L_{TTR}$。

- **教师引导的时间正则化（TTR）**：
    - **动机**：直接应用蒸馏目标于低信噪比 fMRI 数据易导致模型收敛到退化解（简单预测高相似度但下游性能差）。
    - **课程策略**：训练初期，强制学生的每个网络令牌 $z_{s,n,p}$ 去匹配该网络在教师侧所有时间块令牌的平均表征 $\bar{z}_{t,n} = \frac{1}{P}\sum_{p=1}^{P} z_{t,n,p}$，迫使模型先学习时间平均的网络抽象表征。该正则项的权重 $\lambda_{TTR}$ 在训练的前 5% 周期内余弦衰减至零，之后模型自由学习更丰富的时间动态。

## 3. 实验设计

- **预训练数据**：使用 UK Biobank (UKB) 的 39,139 个 3T 静息态 fMRI 扫描，经标准化预处理并提取 457 个 ROI 的时间序列。
- **下游任务数据集**：
    - UKB (内部评估)：性别分类、5 分类年龄预测。
    - 外部数据集：SRPBS (精神分裂症/重度抑郁 vs 对照)、ABIDE (自闭症谱系障碍)、HBN (认知 CELF/WISC、人口学年龄/性别)、LEMON (认知/情绪)。
- **评测基准与方法**：
    - 主要基线：BrainLM、Brain-JEPA (同为时间序列基础模型)。
    - 监督/微调基线：功能连接（FC）+ SVM、Transformer 模型 (BNT, BolT)、静态脑网络模型 (BrainMass)。
    - **严格线性探针（Linear Probe）**：冻结预训练编码器，仅训练单层线性层，以评估表征的内在抽象质量与迁移能力。
    - 所有线性探针统一使用批归一化（BN）和 8 次时间裁剪的集成预测。

## 4. 资源与算力

- 论文明确表示，得益于语义分词器极大压缩了序列长度和内存占用，**模型预训练可在显存小于 20 GB 的“单张 GPU”上于“不足两小时”内完成**。
- **未明确说明**：论文未提供该 GPU 的具体型号（如 V100/A100）以及训练所用的总数据加载或预处理耗时。

## 5. 实验数量与充分性

实验量充足且评估维度全面，总计涵盖十余组对照实验。

- **下游任务对比实验**：在 **11 个**跨度大、样本量迥异的下游任务上与 **7 种**基线方法对比（含线性探针和微调）。
- **多维度消融实验**：对核心组件进行了深度消融，验证了语义分词器（对比线性投影）、TTR 课程、网络数量、时间块长度、卷积核设计、掩码策略/比率、损失函数组件等。
- **扩展律（Scaling Law）分析**：首次针对 fMRI 基础模型绘制不同预训练数据量下的线性探针性能提升曲线，并分集内、分布外进行了比较。
- **案例分析**：利用模型的切片掩码能力进行了“分布内”的可解释性分析（单网络重要性评估）。
- **任务态泛化**：在一项情绪任务 fMRI（无任何微调）上验证了框架的跨范式泛化能力。
- 实验设计**客观公平**：所有基线（尤其是 BrainLM）均经作者按统一标准（BN+8 视图测试）重新评估，以消除时序切片不均或数据标准化不配对带来的比较偏差。

## 6. 论文的主要结论与发现

- **表征质量极高**：Brain-Semantoks 在 8/9 个任务上以冻结权重+线性探针的设置显著优于重建型基础模型（BrainLM 等），并在 8/11 个任务上线性质子性能超过全监督基线和全微调模型。
- **抽象优于重建**：实验结果直接支持核心假设——强制学习稳定、抽象的表征（通过跨时间自蒸馏 + 语义分词）比单纯重建低层 BOLD 信号更利于提取表型信息。
- **数据规模有效**：扩展分析显示，增加预训练数据量能可靠提升分布外泛化能力，且性能遵循类幂律（Power-law）模式。
- **核心设计不可或缺**：消融验证了语义分词器相较于 ROI 级线性投影的巨大性能提升（可达 12%）与训练稳定性效应，以及 TTR 对防止模型空间坍缩、解锁强下游性能的决定性作用。

## 7. 优点

- **深刻的领域洞察**：精准识别并解决了当前 fMRI 基础模型“重建低层信息”与“预测稳定表型”目标错位这一核心矛盾，倡导从信号重建到语义抽象的范式转换。
- **巧妙的归纳偏置**：将功能脑网络作为最小语义单元进行分词，而非机械地使用单个脑区，一举解决了噪声大、序列长、语义低三大难题，充分体现了神经科学先验对 AI 模型设计的指导意义。
- **稳健的训练策略**：提出的 TTR 课程是一个兼具理论洞察力和工程实用性的创新，通过“先学平均，后学动态”的简单思想，巧妙地解决了低信噪比时序数据上的模式坍缩困境。
- **严谨全面的实验验证**：包括统一的线性探针标准、全模型重评、多数据集验证、系统性消融和扩展律分析，为结论提供了强有力且具公信力的支撑。

## 8. 不足与局限

- **分词器分组固定且依赖现有图谱**：尽管消融显示对网络数目有一定鲁棒性，但 $N=9$ 的网络划分仍基于预定义的功能图谱（Yeo 等），可能无法捕捉个体化变异或最优的功能集成模式，限制了模型的灵活性。附录中针对不同图谱的实验支持了这一折中方案的有效性，但更数据驱动的分组学习仍是未来方向。
- **时间动力学建模粒度有限**：虽然模型优于静态 FC，其学习目标侧重跨时间“稳定”的个体表征，可能会弱化对脑状态快速切换（如认知任务中极短时窗的动态）的敏感度，这在需要精细解码瞬时脑活动任务上可能存在局限。
- **任务态评估场景单一**：任务态泛化仅在 UKB 的一个数据域内进行，其跨任务范式、跨数据域的通用性仍待验证。
- **数据归一化隐含假设**：作者选择 z-scoring 提升跨域鲁棒性，并指出此举导致竞争对手（Brain-JEPA）在某些数据集表现不佳，这正面强调了统一预处理对公平比较的重要性，但同时也意味着模型的通用性依赖于该预处理策略。若未来遇到无法进行同样归一化的数据，性能可能受影响。

## 9. （归纳评估）理解偏差校验

> 本条为逻辑校验用，附在最后。正文主要信息已按结构化标题呈现，此处对研究中易被误读的“挑战困难”含义作校准：文中的跨域困难指扫描仪参数、人群与采集协议的差异，不代表读者已有方法无效，而是体现所提模型在无微调条件下的泛化稳定性强。
（完）
