---
title: Early Vision Shapes Recurrent Processing in the Human Visual Cortex
title_zh: 早期视觉塑造人类视觉皮层中的循环加工
authors: "Heitmann, C., Zhan, M., Linke, M., Kekunnaya, R., van Hoof, R., Goebel, R. W., Roeder, B."
date: 2026-06-22
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.16.731263v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 使用fMRI研究不同视觉经验被试的递归视觉处理
tldr: 本研究利用7T fMRI和遮挡范式，对比先天性白内障逆转者与正常视力者，考察早期视觉经验对视觉皮层循环处理的影响。发现缺乏早期经验会导致反馈连接精细化不足，使得患者组在无直接视觉输入时无法解码个别场景，且前馈与反馈信息流对齐变差，揭示了早期视觉经验对反馈处理发育的关键作用，及其对前馈处理优化的影响。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究早期视觉经验是否以及如何影响视觉皮层中反馈连接的发展，从而塑造循环处理功能。
method: 采用7T fMRI与场景图片右下象限遮挡范式，结合多变量模式解码（线性SVM）和连接场建模，评估7名先天性白内障逆转患者与9名正常对照在早期视觉皮层（V1-V3）的信息提取与双向连接。
result: 两组均能解码遮挡区类别，但患者解码个别场景失败且准确率较低；连接场建模显示患者前馈-反馈对齐更不精确，表明早期视觉剥夺损害了反馈处理精细化。
conclusion: 早期视觉经验对于反馈连接的精细化至关重要，进而影响前馈处理的优化，揭示了视觉发育关键期经验依赖性循环处理的重要作用。
---

## 摘要
循环加工涉及前馈、反馈和横向连接，被认为能够实现高效的视觉处理。人类的解剖学和行为学研究表明，反馈连接在发育过程中的成熟晚于前馈连接，因此被认为在更大程度上依赖于经验。为了将前馈活动与反馈活动分离开来，并研究早期视觉经验的作用，我们采用7T磁共振成像的遮挡范式（Smith & Muckli, 2010），对七名逆转先天性白内障患者和九名视力正常的对照组进行了评估：呈现场景的灰度图像，其右下象限被白色矩形覆盖。我们研究了在没有自下而上的视觉输入的情况下，是否可以从与视野中被遮挡象限相关的早期视觉区域顶点（V1至V3）中提取出关于类别（海滩、建筑、高速公路）和个别场景的信息。这是通过利用线性支持向量机解码个别类别或场景上下文来实现的。此外，还使用连接场建模评估了双向信息流。虽然两组都能从接收自下而上视觉输入的顶点成功解码场景和类别，但视力正常个体的准确率高于逆转先天性白内障患者。当移除自下而上输入时，两组的类别解码仍然成功，但个别场景的解码仅在视力正常的对照组个体中可能实现。连接场建模结果表明，逆转先天性白内障患者在视觉刺激过程中前馈和反馈加工的精准对齐程度较低。这些发现表明，早期视觉经验对于反馈活动的精细化至关重要，而反馈活动的精细化又对调谐良好的前馈加工至关重要。

## Abstract
Recurrent processing involves feedforward, feedback and lateral connections and is thought to allow efficient visual processing. Anatomical and behavioral studies in humans have suggested that feedback connections mature later in development than feedforward connections and thus were proposed to depend to a larger degree on experience. In order to isolate feedforward from feedback activity and to investigate the role of early visual experience, we assessed seven individuals with reversed congenital cataracts and nine sighted controls using an occlusion paradigm with 7T magnetic resonance imaging (Smith & Muckli, 2010): Grayscale images of scenes were presented with the lower right quadrant covered by a white rectangle. We examined whether information about category (beaches, buildings, highways) and individual scenes could be extracted from early visual region vertices (V1 to V3) associated with the occluded quadrant of the visual field, in the absence of bottom-up visual input. This was achieved by decoding individual category or scene context utilizing a linear support vector machine. In addition, bidirectional information flow was assessed using connective field modeling. While both groups showed successful decoding of scene and category from vertices receiving bottom-up visual input, the accuracy was higher in normally sighted individuals than in individuals with reversed congenital cataracts. When bottom-up input was removed, decoding of categories remained successful in both groups, but decoding of individual scenes was only possible in normally sighted control individuals. Connective field modeling results indicated a less precise alignment of feedforward and feedback processing during visual stimulation in individuals with reversed congenital cataracts. These findings suggest that early visual experience is crucial for the refinement of feedback activity which in turn is crucial for well-tuned feedforward processing.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向：** 本论文与“fMRI representation / brain decoding”高度相关，通过多变量模式分析解码视觉皮层表征。
- **启发与意义：** 揭示了早期视觉经验对反馈连接精细化的关键作用，为理解脑表征的发育性约束提供了直接证据。
- **可借鉴点：** 遮挡范式结合连接场建模的双重分析方法，可迁移至其他感觉模态或训练范式下的解码研究。
- **阅读建议：** 建议重点阅读遮挡区解码结果与连接场收敛性指标的对应关系，关注其如何通过控制输入来分离前馈与反馈表征。

## 1. 论文的核心问题与整体含义
- **核心问题：** 早期视觉经验是否以及如何塑造人类视觉皮层中的循环加工（Recurrent Processing），特别是反馈连接。
- **研究背景与动机：**
  - 成人视觉感知依赖于前馈、反馈和横向连接的循环加工。
  - 解剖学和行为学证据表明，反馈连接的成熟晚于前馈连接，可能更依赖于早期视觉经验。
  - 先天性白内障逆转患者提供了一个罕见的模型，用以研究短暂先天性视觉剥夺的影响。
  - 动物研究显示，早期视觉经验对初级视觉皮层（V1）从主要接收自下而上输入到整合自上而下输入的突触重塑至关重要。
  - 本研究旨在通过隔离反馈活动，直接探究早期视觉经验对人类反馈加工的影响。

## 2. 论文提出的方法论
- **核心思想：** 使用Smith & Muckli (2010)提出的“遮挡范式”结合高分辨率7T fMRI，将视觉场景右下象限用白色矩形遮挡，以消除对应视野区的自下而上输入。通过排除外周的横向连接顶点，从被遮挡象限对应的早期视觉区域（V1-V3）提取的信号主要归因于来自更高级视觉区域的反馈连接。
- **关键技术细节：**
  - **多变量模式分析（MVPA）：**
    - 使用`GLMsingle`包获得单试次反应估计。
    - 训练线性支持向量机（SVM，来自scikit-learn库）解码被遮挡区域的场景类别（3分类：海滩、建筑、高速公路）和个别场景（9分类：每类3张图像）。
    - 采用“留一法”（Leave-One-Run-Out）交叉验证计算解码准确率。
  - **连接场建模（CF Modeling）：**
    - 采用`prfpy`包实现Haak等人(2013)的框架。
    - 通过二维高斯连接场模型（参数化为中心位置μ和扩散范围σ），用源区域顶点的BOLD时间序列加权和预测目标区域每个顶点的时间序列，以最大化预测和实际信号的解释方差。
    - 计算了**收敛幅值（Convergence Magnitude）**：$收敛幅值 = 前馈CF大小 - 反馈CF大小$。正值为前馈大于反馈的“收敛”，负值为反馈更大的“发散”。

## 3. 实验设计
- **被试：**
  - **实验组：** 7名先天性白内障逆转患者，手术年龄平均20个月（6-48个月）。
  - **对照组：** 9名年龄、性别匹配的正常视力对照。
- **实验范式（遮挡范式）：**
  - 呈现3个类别（海滩、建筑、高速公路）各3张灰度场景图像，尺寸为13.85 × 10.38°视角。
  - 图像的右下象限被白色方块遮挡。
  - 包含4个图像块和1个映射块。映射块呈现三种棋盘格刺激：目标刺激（映射遮挡象限内部）、外周刺激（映射遮挡象限左上2度区域）、对照刺激（映射非遮挡象限）。
  - **感兴趣区（ROI）定义：** 通过功能定位器对比（`遮挡区>基线`且`非其他区>基线`）结合V1-V3解剖模板。**遮挡ROI**指仅对遮挡象限有反应的左侧背侧V1-V3顶点；**非遮挡ROI**包括左侧腹侧、右侧背侧和右侧腹侧的V1-V3顶点。
- **Benchmark与对比方法：**
  - 以高于随机水平的解码准确率作为成功解码的标准（类别：33%，场景：11%）。
  - **核心对比：** 比较SC组和CC组在遮挡ROI和非遮挡ROI的解码准确率。
  - **验证对比：** 比较两组在静息态和视觉刺激态下的连接场收敛幅值和CF大小。

## 4. 资源与算力
- **扫描仪：** 7 Tesla Siemens Magnetom扫描仪，搭配1通道发射/32通道接收Nova头线圈。
- **数据预处理软件：** BrainVoyager，Matlab，Python。
- **模型训练/分析细节：** 线性SVM在单被试水平上进行训练和测试（留一法交叉验证），计算负载量不大。
- **算力说明：** 文中**未提及**训练所用GPU型号、数量或具体训练时长。

## 5. 实验数量与充分性
- **主要分析（解码）：**
  - 4个ROI（1个遮挡，3个非遮挡）× 2个解码任务（类别、场景）在两组间进行对比。使用混合线性模型评估组别、ROI及其交互作用。
  - 进行了与视觉度的相关性分析，并探索了与视网膜拓扑图参数（pRF大小、CMF）的关联。
- **辅助分析（连接场建模）：**
  - 2个条件（静息态、视觉刺激）× 2个组别 × 2个区域对（V1-V2, V1-V3）对比收敛幅值和CF大小。
  - 将收敛幅值与视觉度、解码准确率相关联。
- **评估：** 实验采用经典的遮挡范式，并通过连接场建模进行了独立验证。两组分析相互印证，结论具有较强一致性。被试样本量虽受限于该罕见群体，但实验设计充分，统计方法恰当，结论客观。

## 6. 论文的主要结论与发现
- **反馈活动受损：** 正常对照组在无自下而上输入的遮挡ROI能成功解码类别和个别场景，证实了反馈活动的存在。而患者组在遮挡ROI只能解码类别，无法解码个别场景，表明其反馈连接仅能传递粗略（类别级）信息，但不足以编码精细（个别场景级）信息。
- **循环加工失调：** 连接场建模显示，正常对照在视觉刺激时会从静息态的“发散”模式切换到前馈大于反馈的“收敛”模式。患者组则无法实现此切换，在视觉刺激下仍表现为“发散”状态，表明其前馈与反馈加工的精准对齐受损。
- **反馈影响前馈：** 更好的视觉度与更大的收敛幅值相关，而收敛幅值又由更大的前馈CF和更小的反馈CF共同驱动。研究推论，早期视觉经验缺失导致的粗糙反馈加工会阻碍前馈加工的优化，从而同时影响视觉度等低级功能和更高级的视觉功能。

## 7. 优点
- **方法的双重验证：** 巧妙结合了任务态fMRI的解码分析和连接场建模两个独立的技术，从功能表征和信息流整合两个层面一致指向反馈加工受损的结论。
- **巧妙的实验设计：** 遮挡范式结合精细的外周排除ROI定义，成功在人类非侵入式研究中分离了反馈活动，为探究视觉经验对特定神经环路的因果影响提供了有力工具。
- **链接多层级发现：** 将行为缺陷、脑表征解码异常、神经信息流改变与早期发育经验串联起来，构建了一个从发育原因到多层次结果的完整逻辑链。

## 8. 不足与局限
- **样本量有限：** 符合严格入组标准的先天性白内障逆转患者非常罕见，导致实验组样本量小（N=7），可能限制了统计效力，并影响结论的普适性。
- **眼球运动等混淆因素：** 患者组普遍存在眼球震颤，尽管通过功能ROI定义等保守方法降低了影响，但无法完全消除因不自主眼动导致遮挡视网区到受刺激视网膜区移动的误差。
- **反馈活动的来源不确定性：** 虽然通过排除了外周区减少了横向连接的贡献，但被遮挡区的信号不能唯一归结于反馈，也可能包含前馈的残留激活或侧向抑制效应，其精确来源仍是推断。
- **数据处理局限：** 未提算力，且GLMsingle的“HRF库”方法是为单试次估计优化的近似，可能引入特定偏差。

## 9. （此节已按要求置于正文第一节）
（完）
