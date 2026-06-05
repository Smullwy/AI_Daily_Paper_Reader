---
title: CVPR26 Meta-learning In-Context Enables Training-Free Cross Subject Brain Decoding
title_zh: CVPR26：上下文元学习实现无需训练的跨被试脑解码
authors: Mu Nan; Muquan Yu; Weijian Mai; Jacob S. Prince; Hossein Adeli; Rui Zhang; Jiahang Cao; Benjamin Becker; John A. Pyles; Margaret M. Henderson; Chunfeng Song; Nikolaus Kriegeskorte; Michael J. Tarr; Xiaoqing Hu; Andrew F. Luo
date: 2026-06-05
pdf: assets/local_pdfs/local-20260605-135724336454-cvpr26-meta-learning-in-context-enables-training-free-cross-subject.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 9.0 订阅评分
score_label: 订阅评分
evidence: 跨被试fMRI解码，使用元学习上下文学习
tldr: 针对跨受试者视觉解码中个体神经表征差异大、需定制模型的难题，本文提出一种元优化上下文学习方法，从少量示例中快速推断新受试者的编码模式，实现无需微调的语义解码。方法通过分层推断：先估计体素编码参数，再聚合多体素参数完成功能反演。实验显示该方法能跨受试者和跨扫描仪泛化，无需解剖对准或刺激重叠，为通用脑解码基础模型迈出关键一步。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260605-135724336454-cvpr26-meta-learning-in-context-enables-training-free-cross-subject/fig-002.webp\", \"caption\": \"Figure 1. Overview of our hierarchical brain decoding framework. Encoders predict brain activity from stimulus, while decoders reconstruct stimulus from brain activity. (a) Our framework can generalize to novel subjects without any fine-tuning. In the first stage, we infer parameters of a forward model (image-computable encoder) by constructing a context using stimuli/activity pairs for a single voxel, repeated for every voxel. In the second stage, we construct a context across multiple voxels, fusing the encoder parameters with observed brain activations to decode the stimuli. Our approach requires neither anatomical alignment, nor stimulus overlap. (b) Decoding results on BOLD5000 after training on NSD, our method can generalize without fine-tuning across scanners, voxel size, and subjects. (c) Our model performance positively scales with both the number of images provided in Stage 1, and the number of voxels provided in Stage 2.\", \"page\": 2, \"index\": 2, \"width\": 806, \"height\": 433}, {\"url\": \"assets/figures/local-pdf/local-20260605-135724336454-cvpr26-meta-learning-in-context-enables-training-free-cross-subject/fig-004.webp\", \"caption\": \"Figure 2. Model architecture of BrainCoDec. In stage one, the in-context encoder infers encoder parameters by in-context learning across stimuli/activation pairs for a single voxel. This is repeated across the voxels of interest. In stage two, we integrate across multiple voxels, taking as input the voxelwise parameters and activation corresponding to a novel image. Both stages can vary the context sizes.\", \"page\": 3, \"index\": 4, \"width\": 795, \"height\": 252}, {\"url\": \"assets/figures/local-pdf/local-20260605-135724336454-cvpr26-meta-learning-in-context-enables-training-free-cross-subject/fig-005.webp\", \"caption\": \"Figure 3. Contextual scaling and ablation analysis of BrainCoDec. Top: Image-context scaling from stage 1. Decoder performance scales positively with more images collected for the novel subject. Middle: Voxel-context scaling from stage 2. Top-1 retrieval accuracy improves consistently as the number of in-context voxels increases with all visual backbones across all subjects. Bottom: Ablation comparison. Cosine similarities for four variants using CLIP backbone, synthetic data pretraining (PT Only), gradient inversion (Inversion), training with subject hold-out (FT HO; BrainCoDec), and training on seen subjects (FT no HO). These results show that models trained with real neural data outperform the models trained with only synthetic data, with only marginal gains from fine-tuning on a subject.\", \"page\": 4, \"index\": 5, \"width\": 762, \"height\": 523}, {\"url\": \"assets/figures/local-pdf/local-20260605-135724336454-cvpr26-meta-learning-in-context-enables-training-free-cross-subject/fig-006.webp\", \"caption\": \"Figure 4. Image retrieval comparison on a subject unseen during training (S1). For each method (BrainCoDec-200, MindEye2 + anatomical alignment, TGBD), columns list the Top-1–3 retrieved images out of 907 test images from left to right, ranked by similarity in the evaluation embedding space. Red boxes mark correct hits. Our model can yield very high semantic retrieval consistency without any fine-tuning.\", \"page\": 5, \"index\": 6, \"width\": 767, \"height\": 401}, {\"url\": \"assets/figures/local-pdf/local-20260605-135724336454-cvpr26-meta-learning-in-context-enables-training-free-cross-subject/fig-001.webp\", \"caption\": \"Figure 5. Robustness of removing voxels from ROIs. Cosine similarity of masking out category-specific voxels (Food, Faces, Places, Words) across four unseen NSD subjects on top-activating images from the test set. For each category, we compare performance using full context voxels from higher visual cortex versus masking out category-selective ROIs. Across nearly all conditions, masking the corresponding functional region has minimal impact on decoding performance, indicating strong robustness and distributed representation learning in BrainCoDec. Masking scene-selective regions (PPA/OPA/RSC) leads to some performance drop.\", \"page\": 6, \"index\": 1, \"width\": 730, \"height\": 339}, {\"url\": \"assets/figures/local-pdf/local-20260605-135724336454-cvpr26-meta-learning-in-context-enables-training-free-cross-subject/fig-003.webp\", \"caption\": \"Figure 6. Semantic attention patterns in BrainCoDec. Left: Example face and place stimuli used for category-specific analysis. Middle: Comparison of category t-values from an independent NSD functional localizer, with the corresponding attention-weight maps from the final self-attention layer when decoding these stimuli, showing closely matched spatial distributions. Right: UMAP projection of voxelwise attention weights across the full test set. Color-coded clusters separate body/face-selective regions in green (EBA, FFA/aTL-faces) and scene-selective regions in red (RSC, OPA, PPA).\", \"page\": 7, \"index\": 3, \"width\": 896, \"height\": 310}]"
motivation: 个体间神经表征差异阻碍跨受试者视觉解码模型的泛化，现有方法需为每个受试者单独训练或微调。
method: 提出元优化上下文学习框架，通过分层推断：构建多刺激-响应上下文估计每体素编码参数，再构建多体素上下文进行聚合功能反演。
result: 在多种视觉主干上实现无需重训练或微调的强跨受试者和跨扫描仪泛化，且无需解剖对准或刺激重叠。
conclusion: 该工作为无需微调的通用跨受试者脑解码基础模型奠定了关键基础。
---

## 摘要
从脑信号中进行视觉解码是计算机视觉与神经科学交叉领域的一项关键挑战，需要能够连接神经表征与视觉计算模型的方法。该领域的一个共同目标是构建可泛化的跨被试模型。实现这一目标的主要障碍是个体间神经表征的显著差异性，这迄今要求为每个被试单独训练定制模型或进行微调。为应对这一挑战，我们引入了一种基于功能磁共振成像（fMRI）的语义视觉解码元优化方法，该方法无需任何微调即可泛化至新被试。仅通过基于新个体少量图像-脑激活示例进行条件设定，我们的模型便能快速推断出其独特的神经编码模式，从而实现鲁棒且高效的视觉解码。我们的方法被显式优化用于新被试编码模型的上下文学习，并通过层次化推断进行解码，即对编码器进行反演。首先，针对多个脑区，我们通过构建多个刺激与响应之间的上下文来估计每体素的视觉响应编码器参数。其次，我们构建由多个体素的编码器参数和响应值组成的上下文，以执行聚合功能反演。我们在多种视觉骨干网络上展示了强大的跨被试和跨扫描仪泛化能力，且无需重新训练或微调。此外，我们的方法既不需要解剖对齐，也无需刺激重叠。这项工作朝着构建非侵入式脑解码的通用基础模型迈出了关键一步。代码和模型已公开，地址为 https://github.com/ezacngm/braInCodec。

## Abstract
Visual decoding from brain signals is a key challenge at the intersection of computer vision and neuroscience, requir- ing methods that bridge neural representations and compu- tational models of vision. A field-wide goal is to achieve generalizable, cross-subject models. A major obstacle to- wards this goal is the substantial variability in neural rep- resentations across individuals, which has so far required training bespoke models or fine-tuning separately for each subject. To address this challenge, we introduce a meta- optimized approach for semantic visual decoding from fMRI that generalizes to novel subjects without any fine-tuning. By simply conditioning on a small set of image-brain acti- vation examples from the new individual, our model rapidly infers their unique neural encoding patterns to facilitate ro- bust and efficient visual decoding. Our approach is explic- itly optimized for in-context learning of the new subject’s encoding model and performs decoding by hierarchical in- ference, inverting the encoder. First, for multiple brain re- gions, we estimate the per-voxel visual response encoder parameters by constructing a context over multiple stim- uli and responses. Second, we construct a context consist- ing of encoder parameters and response values over multi- ple voxels to perform aggregated functional inversion. We demonstrate strong cross-subject and cross-scanner gener- alization across diverse visual backbones without retrain- ing or fine-tuning. Moreover, our approach requires neither anatomical alignment nor stimulus overlap. This work is a critical step towards a generalizable foundation model for non-invasive brain decoding. Code and models are publicly available at https://github.com/ezacngm/braInCodec.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：脑解码（跨被试泛化）、fMRI表征对齐、神经先验建模。该工作与你的研究方向高度相关，尤其是无训练泛化与元学习范式。
- **启发与意义**：将个体间脑响应变异建模为“任务分布”，通过元优化实现零样本适应，为跨被试脑模型提供新思路。可以启发你将类似“上下文学习”策略引入自己的多视图约束或表征对齐框架。
- **可借鉴点**：两阶段的层次化上下文推断（体素编码估计→多体素功能反演）可直接迁移到“少量支持数据泛化”的解码场景；合成数据预训练+真实数据微调的训练流程值得借鉴。
- **阅读建议**：重点阅读第3节的方法设计（Meta-learning In-Context）、第4节的消融与跨扫描仪实验，以及注意力可解释性分析；若对公式推导感兴趣，可关注功能反演的形式化描述。

---

## 1. 论文的核心问题与整体含义
- **核心问题**：从fMRI脑信号进行视觉解码时，个体间神经表征的高度差异性（源于解剖结构、功能组织、个人经验等）导致现有模型无法跨被试泛化，每个新被试都需要单独训练或微调模型。
- **整体含义**：本文致力于消除这一“必须个体定制”的瓶颈，提出一种基础性框架，使得解码模型在遇到全新被试时，仅利用该被试少量图像-脑响应示例，即能快速、训练自由地实现语义视觉解码，从而迈向通用、可扩展的跨被试脑解码基础模型。

## 2. 论文提出的方法论
- **核心思想**：将神经解码视为编码模型的功能反演问题，并采用元学习与层次化上下文学习解决跨被试泛化。模型学会“如何反演”而非直接学习固定的解码映射。
- **关键技术细节**：
  - **两阶段层次化流程**：
    1. **阶段一（编码参数估计）**：对于新被试的每个体素，利用该体素在多个刺激-响应对上的激活值构成上下文，通过预训练的上下文编码器模型（基于BrainCoRL）输出该体素的响应函数参数 $\omega_v$。此步骤每个体素独立进行。
    2. **阶段二（上下文功能反演）**：将阶段一得到的多体素参数 $\omega_k$ 与每个体素对目标刺激的观测激活 $\beta_k$ 拼接形成上下文令牌 $\mathbf{c}_k = [\omega_k, \beta_k]$，然后将所有体素的令牌集合作为可变长序列输入一个Transformer解码模型 $P_\gamma$，聚合推断出图像嵌入 $\hat{\mathbf{I}} \approx P_\gamma(\{\mathbf{c}_k\}_{k=1}^{m})$。
  - **元学习上下文机制**：模型在元训练阶段经合成数据预训练、可变长上下文扩展、真实fMRI微调，学会在面对新被试时通过少量示例（如图像-响应对）在推理时适应其编码函数，无需梯度更新。
  - **满足变长体素序列**：采用对数缩放注意力机制以保证不同被试体素数量变化下的稳定性，并省略位置编码以实现体素顺序不变性。
  - **训练目标**：混合损失 $L_{total} = L_{cos} + \alpha L_{infoNCE}$，同时优化重建余弦相似度和实例级判别性。

## 3. 实验设计
- **数据集**：
  - 主实验：NSD（7T fMRI，约10,000图像/被试），使用完成全部扫描的4名被试（S1, S2, S5, S7）进行留一被试检验（用3名被试的独特图像训练，1名被试的独特图像作支持集，所有被试的共享图像作测试集）。
  - 跨扫描仪泛化：BOLD5000（3T fMRI，不同刺激时序、体素大小和图像集），在NSD 4名被试上训练后直接在BOLD5000新被试上进行5折交叉验证测试。
- **对比方法及Benchmark**：
  - MindEye2 + 解剖对齐 （使用其官方发布的微调模型并在新被试上推理）。
  - TGBD （按原始配方在相同数据划分上重新训练）。
  - 评估指标：Top-1/Top-5 检索准确率、平均排序、余弦相似度；检索任务基于CLIP等骨干。
- **实验变体与消融**：
  - 上下文规模缩放（图像数量、体素数量）。
  - 不同视觉骨干（CLIP, DINOv2, SigLIP）。
  - 合成数据预训练仅用、直接梯度反演、微调（含/不含留出被试）的消融对比。
  - 选择性屏蔽类别特异脑区（如面孔、场景、食物、单词）的鲁棒性测试。
  - 注意力可视化与可解释性分析。

## 4. 资源与算力
- 文中未明确提及GPU型号、数量或训练时长等算力资源细节。

## 5. 实验数量与充分性
- **实验组数量**：包含跨被试（4种留一条件）和跨数据集（BOLD5000 3个被试）共约7个不同被试配置的检索性能测试；上下文规模（图像与体素）缩放曲线；3种视觉主干的比较；4种方法变体消融；4种类别特异脑区屏蔽实验；注意力可视化与聚类。总体实验种类和数量较丰富。
- **充分性评价**：实验设计严谨（严格留一被试以测试泛化），对比方法选取具有代表性的SOTA，且进行了不同视觉编码器和跨数据集验证，消融实验充分揭示了各组件贡献。因此，实验充分且对比相对公平。

## 6. 论文的主要结论与发现
- BrainCoDec 在无需任何微调的情况下，在新被试上取得了显著优于现有基于解剖对齐或泛化解码方法（MindEye2、TGBD）的检索性能。
- 解码性能随图像上下文和体素上下文数量的增加而正向扩展，并且仅需约200张图像和4000个体素即能达到接近全量数据的性能。
- 模型对不同脑区类别特异性的屏蔽表现出极大鲁棒性，表明其学习了分布式的神经表征并进行聚合解码，不依赖于单一功能区。
- 最后层自注意力权重可以清晰地聚焦到解剖学一致的功能区域（如FFA、PPA），表明模型内部具有可解释性。
- 该方法能够泛化到不同扫描仪、体素大小和采集协议的BOLD5000数据集，进一步验证了其跨扫描仪鲁棒性。

## 7. 优点
- **方法设计新颖**：将跨被试解码统一到元学习和层次化上下文学习的框架中，为领域提供了新的解决范式。
- **真正的零训练泛化**：无需任何解剖对齐、刺激重叠或微调，仅通过少量样本即可适应新个体，极大降低了应用门槛。
- **实验全面且说服力强**：多数据集的严格留一被试测试、跨扫描仪泛化、与强基线的对比、消融和可解释性分析均有力地支撑了方法优势。
- **可解释性强**：通过注意力可视化揭示了模型学习到的具有神经科学意义的脑区聚焦模式。

## 8. 不足与局限
- **算力与实现细节缺失**：未提供训练所需的算力资源、训练时长等，难以评估实际运行成本。
- **解码框架层次**：目前仅解码到图像嵌入，最终图像生成需借助外部生成模型（如Stable Diffusion），解码的端到端重建质量未在本文中全面评估。
- **模态局限性**：研究集中于高视觉皮层的fMRI，尚未验证在更嘈杂或低空间分辨率的脑信号（如EEG）上的适用性，泛化到非视觉任务或全脑区的效能未知。
- **实验对象数量**：仅使用NSD的4名被试进行验证，样本量有限，尽管跨数据集验证弥补了一部分，但仍需在更大规模人群上评估。

## 9. （该节已在开头作为“研究价值与阅读建议”输出）

（完）
