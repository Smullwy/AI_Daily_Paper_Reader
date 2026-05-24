---
title: Predictive coding video models capture dorsal parietal representations and human judgments for surfaces defined by motion
title_zh: 预测编码视频模型捕捉运动定义表面的后顶叶表征与人类判断
authors: "Bai, Y. H., O'Connell, T. P., Friedman, Y., Ayvazian-Hancock, A., Maver, H., Tenenbaum, J. B., DiCarlo, J."
date: 2026-05-18
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.13.724755v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 预测编码视频模型捕捉背侧顶叶表征
tldr: 本研究针对背侧视觉通路缺乏连接动态视觉输入与形状神经表征的计算模型的问题，结合人类心理物理学、猕猴慢性神经记录和多模型系统评估，发现运动定义的表面在腹侧和背侧通路均有表征，但背侧区域更贴合人类判断；预测编码视频模型通过时空预测目标能最佳预测下顶叶小叶的神经活动，优于经典运动滤波器和多模态基础模型，为背侧通路建立了刺激可计算基线。
source: biorxiv
selection_source: fresh_fetch
motivation: 背侧视觉流的计算建模严重滞后，缺少能将动态视觉输入与形状处理神经活动联系起来的刺激可计算模型。
method: 利用纹理掩盖的旋转物体隔离运动定义表面，结合人类心理物理、猕猴背腹侧慢性记录，并系统性评估包含预测编码视频模型在内的模型动物园。
result: 预测编码视频模型的时空预测目标使其对下顶叶小叶神经反应的预测力最强，且背侧区域表征与人类行为判断高度相关。
conclusion: 预测编码视频模型可作为背侧视觉通路的有效计算基线，表明时间预测目标对捕捉皮层编码动态表面几何至关重要。
---

## 摘要
刺激可计算模型已彻底改变了我们对腹侧视觉处理的理解，然而在背侧视觉通路的建模上，相应的进展却相对滞后。经典的运动能量模型仅能捕捉局部信号，无法表征来自运动的连贯结构，而基于图像训练的神经网络则丢弃了对基于运动的计算至关重要的时间结构。这使得背侧通路缺乏将动态视觉输入与形状加工背后的神经活动联系起来的计算阐述。我们通过结合人类心理物理学、猕猴背侧和腹侧皮层的慢性神经记录，以及对大规模模型库的系统评估，来填补这一空白。使用将运动定义的表面几何与静态线索隔离开来的纹理掩蔽旋转物体，我们发现两条视觉通路都携带着物体表面的可解码表征，并且背侧区域更紧密地跟踪人类的行为判断。编码分析揭示，预测编码视频模型——这些模型经过训练以预测自然视频中的时空特征——最能预测顶下小叶（IPL）的神经反应，该区域是背侧视觉通路的下游区域。这些模型的性能优于其他替代模型，包括经典的运动滤波器和多模态基础模型，这表明时间预测目标可能对于捕捉皮层如何从动态输入中表征表面几何至关重要。我们的结果确立了预测编码视频模型作为背侧视觉通路的刺激可计算基线，并提供了一个框架，以将基于模型的神经系统识别从静态图像扩展到动态、自然视觉。

## Abstract
Stimulus-computable models have transformed our understanding of ventral visual processing, yet comparable progress in modeling the dorsal visual stream have lagged behind. Classical motion-energy models capture only local signals and fall short of representing coherent structure from motion, while image-trained neural networks discard the temporal structure essential to motion-based computations. This leaves the dorsal pathway without a computational account linking dynamic visual inputs to the neural activity underlying shape processing. We address this gap by combining human psychophysics, chronic neural recordings from macaque dorsal and ventral cortices, and systematic evaluation of a large-scale model zoo. Using texture-masked rotating objects that isolate motion-defined surface geometry from static cues, we found that both visual path-ways carry decodable representations of object surfaces, with dorsal regions more closely tracking human behavioral judgements. Encoding analyses reveal that predictive coding video models-trained to predict spatiotemporal features in natural videos-best predict neural responses in the inferior parietal lobule (IPL), a downstream region of the dorsal visual pathway. These models outperform alternative models, including both classical motion filters and multimodal foundation models, suggesting that temporal prediction objectives may be critical for capturing how cortex represents surface geometry from dynamic inputs. Our results establish predictive coding video models as a stimulus-computable baseline of the dorsal visual pathway and provide a framework for extending model-based neural system identification from static images to dynamic, naturalistic vision.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：背侧视觉通路（dorsal visual pathway）缺乏能够从动态视频输入预测下游区域神经活动的刺激可计算模型。尽管基于图像的深度网络已成为腹侧通路（ventral stream）的基准模型，但背侧通路的计算建模严重滞后，无法解释大脑如何从运动中恢复三维表面几何。
- **研究动机**：运动是自然场景的普遍属性，视觉系统需要从动态输入中提取连贯的结构信息以支持场景理解与行动。经典运动能量模型只能捕捉局部信号，图像训练的神经网络丢弃了时间结构，因此需要一种能够处理时空信息、并预测背侧通路高级区域（如顶下小叶，IPL）神经表征的计算模型。
- **整体含义**：本文旨在通过结合人类心理物理学、猕猴慢性神经记录和大规模模型评估，确立预测编码视频模型（predictive coding video models）作为背侧视觉通路的刺激可计算基线，并揭示时间预测目标对于从动态输入中提取表面几何的关键作用。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：
  - 设计一种纹理掩盖的旋转物体刺激，使得物体与背景纹理相同，迫使视觉系统仅依赖运动线索（而非静态亮度或纹理边界）来恢复三维表面几何，从而分离“运动定义表面”的加工过程。
  - 系统比较多种计算模型（包括经典运动能量滤波器、图像/视频训练的CNN、ViT、自监督模型以及预测编码视频模型），通过编码和解码分析评估其与猕猴神经活动及人类行为的一致性。

- **关键技术细节与流程**：
  - **刺激生成**：20个抽象形状，3种大小，6种纹理（含无纹理对照），7个视角，共计2520个视频刺激（持续400ms，中间200ms为动态旋转阶段）。
  - **行为实验**：人类被试（N=1063动态，N=295静态）完成匹配样本任务（2AFC），量化对运动定义表面几何的知觉敏感性。
  - **神经记录**：在猕猴的腹侧通路（IT皮层：aIT, cIT, pIT）和背侧通路（IPL：7op, Tpt）植入慢性电极阵列，记录多单元活动。
  - **解码分析**：使用基于距离的匹配样本解码器（余弦距离）从神经群体活动中读出物体身份，并与行为表现进行条件一致性相关分析。
  - **模型评估**：
    - **模型库**包括：运动能量模型、CNN、ViT、DINOv2、PerceptionEncoder、TimeSformer、VideoMAE、V-JEPA。
    - 提取模型在动态帧上的特征（动态窗口100-300ms），经PCA降维至250维。
    - **解码评估**：将模型特征视为替代神经反应，执行与神经数据相同的2AFC任务，计算准确率及与人类行为模式的相关性。
    - **编码分析**：
      - 使用偏最小二乘回归（PLS，25个成分）预测单个神经元响应，采用留一纹理和留一物体的交叉验证，以噪声天花板归一化的预测相关性为指标。
      - 使用中心核对齐（CKA）优化线性映射，保持群体响应几何结构，评估模型与神经群体之间的几何一致性。
  - **合成群体分析**：在未见过的新条件上，评估由模型特征映射生成的替代神经群体的编码保真度与解码读出相似性。

- **主要公式或表示**：
  - 余弦距离：$d(\mathbf{r}_1, \mathbf{r}_2) = 1 - \frac{\mathbf{r}_1 \cdot \mathbf{r}_2}{|\mathbf{r}_1||\mathbf{r}_2|}$
  - 匹配样本决策规则：若 $d(\mathbf{r}_{sample}, \mathbf{r}_{choice}) < d(\mathbf{r}_{sample}, \mathbf{r}_{lure})$ 则分类正确。

### 3. 实验设计：数据集/场景，benchmark，对比方法

- **数据集与场景**：
  - 自定义视频数据集：20类抽象物体×3种大小×6种纹理×7个视角 = 2520个视频。
  - 行为数据来自1063名在线人类被试（动态）和295名被试（静态）在90种实验条件下的2AFC任务。
  - 猕猴神经记录：腹侧IT（3个子区，共326个单元）和背侧IPL（2个子区，共155个单元）的被动观看反应。

- **Benchmark**：
  - 以人类行为表现作为基准，考察模型解码准确率以及条件一致性的相关。
  - 以神经解码表现作为基准，考察模型特征对神经活动（单神经元和群体几何）的预测力。
  - 以噪声天花板（split-half reliability）对预测指标进行归一化。

- **对比方法**：
  - 经典运动能量模型。
  - 图像类模型：监督CNN（282个模型，1215层）、ViT（103个模型，441层）、DINOv2（4个模型，52层）、PerceptionEncoder（6个模型，77层）。
  - 视频类模型：TimeSformer（3个模型，39层，监督动作分类）、VideoMAE（10个模型，130层，自监督掩码重建）、V-JEPA（7个模型，223层，自监督特征预测）。
  - 在所有模型中，VideoMAE和V-JEPA被统称为预测编码视频模型。

### 4. 资源与算力

- 文中未明确提及使用的GPU型号、数量或训练时长。模型评估基于已发布预训练权重的提取特征，未涉及大规模重新训练。计算资源仅提及使用MIT Office of Research Computing and Data（ORCD）提供的资源，但无具体算力规格。因此，**无法给出精确的算力总结**。

### 5. 实验数量与充分性

- **实验组别与规模**：
  - 人类行为实验：动态条件1063人，静态条件295人，覆盖90种条件。
  - 神经记录：两个视觉通路，5个脑区，合计481个单元，每个刺激至少20-26次重复。
  - 模型评估：超过400个模型/层的解码与编码分析（CNN、ViT等共约450+个模型实例或层）。
  - 编码分析：单变量PLS和多变量CKA两种映射，交叉验证（留纹理/物体）。
  - 消融与补充分析：时间分辨的动态CKA分析、PCA降维模拟验证、不同读出方法（距离解码器与逻辑回归）的一致性检验、跨脑区比较、行为-神经-模型三向对齐分析。

- **充分性与公平性**：
  - 实验设计相当系统化，涵盖多水平变量（纹理、大小、视角），保证了从低层特征到高层物体几何的分层考察。
  - 对比的模型类型广泛，包含经典模型、主流图像网络和多种视频网络，训练目标覆盖监督、自监督和学习范式，比较基准一致。
  - 交叉验证策略严谨（留纹理/留物体），确保泛化性评估，且用噪声天花板归一化控制信噪比。
  - 不足之处：神经数据来自被动观看的动物，未涵盖主动任务状态；背侧和腹侧记录来自不同动物，不能完全排除个体差异；模型库虽大但仍可能遗漏其他潜在架构（如基于光流、3D重建的专用网络）。

### 6. 论文的主要结论与发现

- **双通路皆编码运动定义表面**：腹侧IT和背侧IPL均存在可解码的物体表面几何信息，挑战了严格的背侧-运动/腹侧-形状分离观点。
- **背侧表征与行为更贴近**：IPL的解码准确率随神经元数目增加更快趋近人类水平，且其条件一致性与人类行为的相关性显著高于IT，尤其在最前部的aIT区域行为对齐度最低。
- **预测编码视频模型最佳**：V-JEPA和VideoMAE在解码任务上达到最高准确率，且与人类行为模式的一致性最高；它们对背侧通路神经反应的单神经元预测力和群体几何对齐度均优于其他模型，包括大规模基础模型PerceptionEncoder。
- **时间预测目标的关键作用**：仅空间自监督（DINOv2）或视频分类（TimeSformer）不足以达到同等校准；预测编码目标（预测被掩蔽的时空特征）能更好地压缩动态场景统计冗余，保留几何结构同时忽略纹理等干扰变量。
- **模型可作为背侧通路基线**：在合成群体分析中，预测编码视频模型在背侧区域同时实现了高编码保真度和与神经读出高度相似的行为读出，具备作为背侧通路下游区域的刺激可计算基准模型的潜力。

### 7. 优点：方法或实验设计上的亮点

- **创新的刺激设计**：使用纹理掩蔽旋转物体，完美隔离运动定义的表面几何，避免静态线索污染，直指“从运动恢复结构”的核心问题。
- **多模态对比框架**：同时收集人类行为、背侧和腹侧神经活动，并以统一的2AFC范式评估模型，形成 行为-神经-模型 三重对齐的分析链路。
- **全面的模型动物园**：系统覆盖从经典运动能量到最新自监督视频模型，细致区分图像/视频、监督/自监督、重建/预测等学习范式，公正揭示了训练目标（时间预测）比架构或数据规模更重要的结论。
- **严谨的编码评估**：结合单变量PLS和群体几何CKA两种互补方法，并严格进行物体和纹理水平的交叉验证，使用噪声天花板归一化，增强了结论的可靠性。
- **深度神经解剖验证**：使用慢性电极阵列长期跟踪相同神经元，并对深部脑回区域（IPL）进行了组织学确认，提供了高质量的背侧通路群体数据。

### 8. 不足与局限

- **被动观看范式**：神经记录来自被动注视的猴子，未探索主动任务或行为需求下IPL表征的变化，可能未能揭示与行动决策更相关的动态表征。
- **通路覆盖与解剖分离**：背侧和腹侧记录在不同动物中进行，无法在同一动物内直接比较；背侧仅覆盖IPL两个亚区，未纵向包含V3A、MT/MST等早期背侧区域。
- **模型库的局限性**：尽管包含多种模型，但仍缺乏专门用于3D结构推断的模型（如基于多视图几何、神经辐射场等的网络）；预测编码模型的特异性优势可能仅限于当前任务，尚未在更多动态场景下验证。
- **视角与运动类型单一**：刺激仅包含刚性旋转，未涉及平移、自运动、光照变化等更复杂的结构-运动条件，也未考察视角不变性下的形状识别。
- **可解释性不足**：虽然确立了预测编码视频模型的优势，但未深入分析这些模型内部哪些计算单元或学习到的特征直接对应了表面几何加工，也未建立与已知神经元调谐特性（如深度、表面曲率）的直接映射。
- **数据规模限制**：人类行为实验为线上众包，缺乏对眼动或注意力的精确控制；神经数据单元数量相对有限，可能影响解码和编码的统计学效力。

（完）
