---
title: "A single dynamical property can account for the capacity to learn, from artificial networks to the mammalian brain."
title_zh: 单一的动力学性质可以解释从人工网络到哺乳动物大脑的学习能力
authors: "Chopra, R., Zhong, J., Miller, E. S., Bekele Tolossa, G., Fosque, L. J., Meza, J. A., DeKorver, N. W., Guerriero, R., Ritter, N. J., Lambo, M. E., Bhaskaran-Nair, K., Van Hooser, S. D., Shew, W., Hengen, K. B."
date: 2026-07-14
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.09.737603v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 临界性作为跨脑和人工网络学习的神经先验
tldr: 学习速度的个体差异源于大脑动力学接近临界状态的程度。本研究通过实验估计小鼠、雪貂和人脑中的临界距离，发现其能预测学习速率、神经可塑性和智力，但无关初始或最终表现。循环网络模型揭示临界邻近度设定时间尺度，直接决定学习速率，表明单一动力学属性可解释广泛的学习能力。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-09-737603-v2/fig-002.webp\", \"caption\": \"Figure 3: Proximity to criticality predicts developmental plasticity in ferret kits and defines learning rate in a synthetic learning model. A-C: Naive ferret kits (N = 15) exposed to moving stimuli (A) over hours (B) exhibited rapid increases in direction selectivity (individual lines represent animal-level means) (C) in ferret visual cortex60. (D-E): Proximity to criticality predicts the degree of plasticity of V1 units per animal. Across a total of 33 blocks that met inclusion criteria, the degree of change in direction selectivity for units measured in that block was predicted by baseline d2 for V1 while no correlation was observed in the shuffle control (D). Compared to 13 comparator features available in the ferret dataset, baseline d2 was the strongest predictor of the degree of plasticity in direction selectivity. (F-H): A simple recurrent neural model with back-propagation reveals that proximity to criticality defines the speed for learning a task. The credit-assignment penalty associated with delay from input is shallow when d2 is low but steepens markedly as d2 increases (F). For a fixed delay (k=10), the number of trials required to minimize loss to a minimal tolerance increases markedly with distance from criticality (G). When the trials-to-solution surface is considered for a range of delays (k) and across a spectrum of d2 values, the number of trials to the solution increases super-exponentially (H).\", \"page\": 13, \"index\": 2, \"width\": 936, \"height\": 942}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-09-737603-v2/fig-004.webp\", \"caption\": \"Figure 4: Proximity to criticality predicts general intelligence in human patients. A: Frontal isocortical entry sites of the analyzed stereoelectrode rods, shown on representative coronal plates from the Allen Human Brain Atlas73,74 (Allen Institute for Brain Science; human.brain-map.org). Each marker denotes the superficial cortical entry of one patient’s analyzed rod and indicates regional coverage rather than an exact contact coordinate. Note that one brain region (PrCG, N = 2 patients) is not represented as this region is rostral to the first available Allen Human Brain Atlas plate. For another patient (N = 1) the region is unassigned, though confirmed to be in the frontal cortex (B): Exemplar enveloped stereo EEG recordings show multiple timescales that vary with proximity to criticality. (C-D): Isocortical proximity to criticality predicts IQ in a clinical epilepsy population (N = 35) (C) and a permutation test confirms that this relationship could not have arisen by chance (D). (E): Comparison of d2 against comparator features reveals that proximity to criticality is the only neural feature able to predict IQ in our dataset.\", \"page\": 16, \"index\": 4, \"width\": 927, \"height\": 634}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-09-737603-v2/fig-003.webp\", \"caption\": \"Table 1: Analyzed patient demographics. Summary of the analyzed cohort (N = 35), each contributing a single frontal isocortical contact. Continuous variables are reported as median [IQR] with range; categorical variables as count (%). Seizure burden reflects the clinical cvEEG estimate (approximate seizures per day). ASD, autism spectrum disorder; TSC, tuberous sclerosis complex; FSIQ, full-scale IQ; IQR, interquartile range.\", \"page\": 32, \"index\": 3, \"width\": 536, \"height\": 700}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-09-737603-v2/fig-001.webp\", \"caption\": \"Table 2: Localization of the analyzed frontal sEEG contact, per patient. Each patient contributed a single frontal isocortical contact (N = 35). Hemisphere: L, left; R, right; U, undetermined. Region abbreviations: MFG, middle frontal gyrus; SFG, superior frontal gyrus; OpIFG, inferior frontal gyrus (pars opercularis); TrIFG, inferior frontal gyrus (pars triangularis); OrIFG, inferior frontal gyrus (pars orbitalis); PrCG, precentral gyrus; FP, frontal pole. One patient carried a bilateral implant that could not be assigned to a single gyrus. Patient identifiers are the study’s internal codes.\", \"page\": 34, \"index\": 1, \"width\": 668, \"height\": 536}]"
motivation: 探究个体学习速率差异的根源，验证系统临界性促进学习的理论。
method: 通过估算多种哺乳动物大脑的临界距离，关联其与学习任务表现、神经调谐变化及认知能力，并利用循环网络模型研究机制。
result: 临界邻近度正向预测学习速率和适应性变化，而非初始技能或最终水平；模型显示其设定学习时间尺度。
conclusion: 大脑临界动力学是决定学习能力的关键因素，单一属性即可统一解释学习速率的个体差异。
---

## 摘要
每个大脑都必须适应不可预测的世界，但个体在学习容易程度上存在差异。理论研究表明，当系统（无论是生物的还是合成的）初始化为接近不稳定状态（即接近临界点）时，学习最快，因为临界动力学具有丰富多样的模式和跨尺度相关性。在这里，我们实证估计了大脑中到临界点的距离，并表明它能预测学习、神经元调谐和一般智力背后的适应性速率。在小鼠运动皮层中，接近临界点预测了两种未来复杂任务的学习速率：捕食狩猎和梯子穿越。相比之下，到临界点的距离既不能预测动物的原始能力，也不能预测其渐近技能——只隔离出学习速率本身。在幼年雪貂的视觉皮层中，接近临界点预测了经验重塑神经元调谐的强度。在人类额叶皮层中，它与一般认知能力相关。一个最小递归网络模型重现了这些结果，并提供了一个机制：接近临界点定义了一个系统可以从其过去经验中学习的时间尺度，直接设定了学习速率。单一的动力学性质可以解释从人工网络到哺乳动物大脑的学习能力。

## Abstract
Every brain must adapt to an unpredictable world, yet individuals differ in how readily they learn. Theoretical work suggests that learning is fastest when a system, whether biological or synthetic, is initialized in a state close to instability - i.e., near criticality - because critical dynamics are imbued with a diverse repertoire of patterns and multi-scale correlations. Here, we empirically estimate distance to criticality in the brain and show that it predicts the rate of adaptability underlying learning, neuronal tuning, and general intelligence. In mouse motor cortex, proximity to criticality forecasts learning rate of two future, complex tasks: prey capture hunt and ladder crossing. In contrast, distance to criticality predicted neither an animal's naive ability nor its asymptotic skill - isolating the rate of learning itself. In visual cortex of young ferrets, proximity to criticality predicts how strongly experience reshapes neural tuning. In human frontal cortex, it correlates with general cognitive ability. A minimal recurrent network model reproduced these results and offers a mechanism: proximity to criticality defines the timescale over which a system can learn from its past experiences, directly setting the rate of learning. A single dynamical property can account for the capacity to learn, from artificial networks to the mammalian brain.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：与“neural prior”（神经先验）直接关联，论文明确将临界动力学视为一种跨脑区、跨物种的通用神经先验，解释学习能力的个体差异。
- **启发与意义**：表明大脑自组织临界性作为动力学先验，可能约束了表征的学习速度和可塑性，为脑解码和编码研究引入更符合生理的动力学正则项提供了理论依据。
- **可借鉴点**：可借鉴其“临界距离”的估计方法（如雪崩分支参数偏离度），在 fMRI 表征对齐或多视图约束中，将局部动力学的远离临界程度作为先验权重，引导模型学习更稳健的表征。
- **阅读建议**：建议重点阅读临界距离的量化方法和循环网络模拟部分，评估能否将其嵌入到脑编码/解码模型中作为时间尺度先验。

## 1. 论文的核心问题与整体含义
- **核心问题**：个体在学习速率上存在巨大差异，这种差异的根源是否可以用大脑网络动力学的一个基本属性——到临界点的距离——统一解释？
- **研究背景**：理论指出，初始化为接近不稳定状态（临界态）的系统具有丰富的模式库和跨尺度相关性，理论上学习最快，但在生物脑中缺乏直接证据。
- **整体含义**：论文提出并验证了“单一动力学性质（临界邻近度）可以解释从人工网络到多种哺乳动物大脑的学习能力”，表明临界性是学习速率的神经基础，而非静态能力指标。

## 2. 论文提出的方法论
- **核心思想**：通过估计神经元群体活动的“雪崩”动力学偏离临界幂律的程度，量化到临界点的距离 $d_2$，并将其与学习行为、神经可塑性、认知能力做纵向和横向关联；同时构建最小循环网络模型揭示临界性影响学习速率的机制。
- **关键技术细节**：
  - **临界距离估计**：基于局部场电位或多单位活动的神经元雪崩分析，评估雪崩尺寸或持续时间的分布与幂律的偏离程度，作为距离指标 $d_2$（值越小越接近临界）。
  - **学习任务设计**：小鼠运动皮层在自由捕食狩猎和梯子穿越任务中的学习曲线，记录初始能力、学习速率和渐近技能。
  - **可塑性评估**：幼年雪貂视觉皮层在视觉经验下的方向选择性变化，用 $d_2$ 预测调谐变化量。
  - **人类认知**：从癫痫患者额叶皮层立体脑电图估计 $d_2$，与全面智商建立相关。
  - **网络模型**：一个带时延和反向传播的简单循环网络，通过改变矩阵谱半径调节远离临界距离，观察不同距离下达到学习容限所需的试次数量，揭示临界性设定了从过去经验学习的时间尺度。
- **算法流程（文字说明）**：
  1. 对神经信号检测雪崩事件，拟合幂律分布，计算实际分布与幂律之间的标准偏差平方和作为 $d_2$。
  2. 在不同行为阶段（基线、学习、最终）测量 $d_2$，与学习速率进行偏相关分析，排除初始和最终能力的影响。
  3. 在循环网络中控制连接权重的谱半径，模拟不同 $d_2$ 水平，固定延迟，记录损失降至阈值所需试次数，绘制三维曲面。

## 3. 实验设计
- **数据集/场景**：
  - **小鼠**：运动皮层（M1/M2）神经元活动，结合捕食狩猎和梯子穿越两项复杂运动学习任务。
  - **雪貂**：幼年视觉皮层（V1）多单位记录，在持续数小时的运动视觉刺激下评估方向选择性可塑性。
  - **人类**：额叶皮层立体脑电图（sEEG），来自 35 位临床癫痫患者，智商测验得分作为一般认知能力指标。
- **Benchmark 与对比方法**：
  - 在雪貂数据中，将 $d_2$ 与 13 种其他神经特征（如平均发放率、变异度等）比较对可塑性变化的预测能力。
  - 在人类数据中，同样比较 $d_2$ 与其他神经特征预测智商的强度，并进行置换检验。
  - 与随机打乱控制（shuffle control）对比，证明 $d_2$ 与学习的关系非偶然。
- **主要控制**：基线临界距离并不预测动物的初始任务表现或最终熟练水平，仅预测学习速率，排除了静态能力的混淆。

## 4. 资源与算力
- 论文中未提及 GPU 型号、数量、训练时长等具体算力信息。涉及的循环网络为最小化模型，可能仅需普通 CPU 即可完成训练，因此算力要求极低，未构成研究限制。

## 5. 实验数量与充分性
- **实验数量**：
  - 三个物种、四个独立任务/指标（小鼠两项学习任务、雪貂视觉可塑性、人类智商）。
  - 每种任务包含多个被试（雪貂 N=15，人类 N=35，小鼠数量未明确但为组水平分析）。
  - 13 种比较特征的对比分析、多种控制分析（置换检验、偏相关、随机打乱）。
  - 循环网络模拟覆盖广泛的延迟和临界距离空间。
- **充分性评价**：实验设计涵盖不同哺乳动物、不同皮层区域和不同学习类型，具有很强的外部效度；控制初始与最终表现突出了学习速率的特异性；对比大量备选特征证明 $d_2$ 的独特预测力。总体实验较充分、客观、公平。

## 6. 论文的主要结论与发现
- 临界邻近度（$d_2$ 小）显著预测小鼠未来学习两项复杂任务的学习速率，但不预测初始或最终技能，从而专门分离了学习速度。
- 在雪貂视觉皮层中，基线 $d_2$ 是方向选择性经验依赖可塑性的最强预测因子。
- 在人类额叶皮层，接近临界性与更高的一般智力（全面智商）显著相关，且是唯一能预测智商的神经特征。
- 循环网络模型揭示机制：远离临界会急剧压缩系统可用时间尺度，使得从过去经验进行信用分配的效率下降，从而超指数地增加学习所需试次数。

## 7. 优点
- **跨物种、跨模态验证**：小鼠、雪貂、人类三种哺乳动物，因果方向明确（先测临界距离，再观测学习变化）。
- **严格的控制逻辑**：明确排除了初始能力和最终能力的干扰，精准锁定学习速率本身。
- **结合生物学数据与理论模型**：用最小化网络模型直观复现现象并给出“时间尺度”机制的定量解释，而非仅停留在相关性。
- **稳健的对比分析**：在多个数据集中与多种常见神经特征比较，证明 $d_2$ 的优越预测力。

## 8. 不足与局限
- **相关性而非因果性**：研究为观察性，未通过实验直接操控临界状态来证明因果作用，不能完全排除第三变量。
- **样本量有限**：人类数据仅 35 例，且来自癫痫人群，额叶取样点和认知测验的普适性需进一步验证；小鼠样本量未披露。
- **临界距离估计方法的敏感性**：雪崩检测和幂律偏离度对数据预处理、阈值选择可能敏感，论文未详细探讨方法稳健性。
- **任务特异性**：学习任务集中于运动或感觉可塑性，未涉及更高级的认知学习类型；在其他脑区是否成立尚不清楚。

## 9. 主要结论
重新总结见第6点，这里不重复。

（完）
