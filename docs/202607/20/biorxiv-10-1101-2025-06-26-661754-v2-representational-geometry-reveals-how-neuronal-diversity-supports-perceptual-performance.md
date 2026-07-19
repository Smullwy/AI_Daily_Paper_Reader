---
title: Representational geometry reveals how neuronal diversity supports perceptual performance
title_zh: 表征几何揭示神经元多样性如何支持感知表现
authors: "Saraf, S., Movshon, J. A., Chung, S."
date: 2026-07-16
pdf: "https://www.biorxiv.org/content/10.1101/2025.06.26.661754v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 神经表征几何与视觉感知表现关联
tldr: 本研究通过理论、猕猴V1电生理记录和模拟，探究神经元调谐特性分布如何影响群体表征几何及感知效率。发现调谐幅度和带宽的多样性通过不同几何变化，分别增加刺激响应间的欧氏距离和角度距离，互补地增强视觉辨别与识别能力，为群体编码优化提供了生物机制。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-26-661754-v2/fig-009.webp\", \"caption\": \"Figure 1. Schematic of tuning curves and neural manifolds. A Experimental procedure, simulated rasters and tuning curves. Neuronal data were previously reported in Graf et al. (2011), and we made analogous measurements in our simulations. A neuron’s average response to each condition gives a point on the neuron’s tuning curve. B The population’s responses to each stimulus condition form the neuronal manifold encoding that stimulus. A point on the manifold represents the population’s response to one trial, and the centers of the manifolds are the average responses to each stimulus (i.e. the values on the tuning curves).\", \"page\": 5, \"index\": 9, \"width\": 931, \"height\": 463}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-26-661754-v2/fig-001.webp\", \"caption\": \"Figure 2. Tasks and geometric changes that increase capacity. A Discrimination task. Capacity, a measure of representational efficiency, is measured by linearly separating the manifolds for neighboring stimuli. B Identification task. Here, capacity is measured by linearly separating each manifold from the other P − 1 manifolds. C Geometric properties and their relations to capacity for both tasks. The first two properties measure aspects of the signal in the representations. The centroid norm is the average Euclidean distance (||v||), between the center of each of the two manifolds and the global mean of all of the manifolds, which is indicated by the black dot. Center correlations measure the angular distance between the centers of the two manifolds. The following three measures capture aspects of the noise in the representations. The radius and dimension measure the overall size and shape of the two manifolds being separated. The radius measures the average distance between a manifold’s boundary points and its center. The dimension measures the average projection of random vectors onto the manifold’s boundary points. Finally, the axis correlations capture the similarity of the principal axes of the two manifolds. D Analogous to panel C, but for the identification task. Here, the centroid norm, radius, and dimension are defined as they are for the discrimination task, except instead of averaging over the measures for the two manifolds to discriminate, we report the values for only the target manifold. The black dot indicates the global mean of all manifolds.\", \"page\": 7, \"index\": 1, \"width\": 951, \"height\": 794}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-26-661754-v2/fig-007.webp\", \"caption\": \"Table 1. The first two columns show the multiple regression results establishing the relationships between geometric properties and capacity for discrimination and identification. We used 50 simulations each of 25 different diversity types – all combinations of amplitude and bandwidth diversity levels: 0, 2.2, 5, 11.8, and 23 spikes/s for amplitude diversity and 0, 2.8, 5.7, 11.0, and 15.5 deg for bandwidth diversity. We computed the multiple regression over all 1,250 simulations and show the standardized coefficients for each of the geometric properties as predictors of capacity. The next four columns show the predicted capacity increase (percentage) due to the changes in each geometric property from the homogeneous to most diverse population in our simulations. The middle two columns show the results for the amplitude diversity manipulation and the final two show the results for the bandwidth diversity manipulation. Notice that the centroid norm predicts the largest increase in capacity for amplitude diversity, and the center correlations predict the largest increase for bandwidth diversity.\", \"page\": 9, \"index\": 7, \"width\": 760, \"height\": 219}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-26-661754-v2/fig-008.webp\", \"caption\": \"Figure 3. The relationships between amplitude diversity, Fisher information, and capacity for fine discrimination in neuronal populations from macaque V1. We randomly chose 500 subpopulations of 30 neurons each from the full population. A Fisher information and versus the amplitude diversity for the subpopulations. The inset shows the multiple regression coefficient between the amplitude diversity and Fisher information in the subpopulations. B Capacity for discrimination versus the Fisher information for the same subpopulations as in panels A. The inset shows Pearson’s correlation between capacity and Fisher information for the subpopulations.\", \"page\": 9, \"index\": 8, \"width\": 529, \"height\": 253}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-26-661754-v2/fig-002.webp\", \"caption\": \"Figure 4. The relationships between amplitude diversity and capacity in neural populations from macaque V1. In panels A and D, 500 subpopulations of 30 neurons each were chosen from the full population, excluding an outlier. Without excluding the outlier, the subsets would have clustered into a group of low amplitude diversity and a group high diversity. In panels B and E, we used 500 upsampled, pseudo-populations of 180 neurons each. A,B Capacity for fine discrimination versus the amplitude diversity for the subpopulations and pseudo-populations, respectively. C Distribution of preferred stimuli and peak to trough amplitudes of the cells in the data set (data set 3 from Graf et al. (2011)). See the Methods section for the definition of peak to trough amplitude. Observe from the left panel that the neuronal preferences do not evenly tile the stimulus space. We created the upsampled pseudo-populations in panels B and E for even tiling of orientation preferences. We did not exclude the outlier cell with high amplitude for the pseudo-populations of B and E since it was likely that each of the 59 cells were selected at least once per population. D,E Capacity for identification versus the amplitude diversity for the subpopulations and pseudo-populations, respectively. Note that amplitude diversity has a stronger effect for discrimination capacity than for identification capacity.\", \"page\": 10, \"index\": 2, \"width\": 446, \"height\": 738}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-26-661754-v2/fig-006.webp\", \"caption\": \"Figure 5. Scatter plots showing the relationships between geometric properties and capacity as tuning diversity changes in simulations. From lightest to black, the colors indicate increasing levels of diversity (standard deviations of amplitudes of 0, 2.2, 5, 11.8, and 23 spikes/s and standard deviations of bandwidths of 0, 2.8, 5.7, 11.0, and 15.5 deg). Each panel lists the Pearson’s correlation coefficient between the geometric property and capacity. A Geometry versus capacity for amplitude diversity simulations and discrimination. B The same as panel A, but for bandwidth diversity and discrimination. C Amplitude diversity and identification. D Bandwidth diversity and identification.\", \"page\": 12, \"index\": 6, \"width\": 889, \"height\": 978}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-26-661754-v2/fig-004.webp\", \"caption\": \"Table 2. Multiple regression results for subpopulation properties as predictors of capacity. From data set 3, we created 500 subpopulations and 500 pseudo-populations. We measured the mean amplitude, standard deviation of amplitudes, mean bandwidth, and standard deviation of bandwidths for each of the subpopulations, and their capacity for discrimination and identification. For each task and type of subpopulation, we show the standardized regression coefficients for the mean and standard deviation of the tuning properties as a predictors of capacity.\", \"page\": 13, \"index\": 4, \"width\": 968, \"height\": 187}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-26-661754-v2/fig-010.webp\", \"caption\": \"Figure 6. Schematic illustrating the geometric transformations caused by either type of diversity. Amplitude diversity increases the Euclidean distance between manifolds while bandwidth diversity lowers the center correlation by expanding the angular distance between manifolds.\", \"page\": 16, \"index\": 10, \"width\": 468, \"height\": 381}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-26-661754-v2/fig-003.webp\", \"caption\": \"Figure 7. How tuning diversity affects capacity for discrimination and identification. We take the average capacity over all 50 simulation trials at each of the 25 combined diversity levels to calculate the changes in capacity shown. The 25 diversity levels are all of the combinations from the standard deviation of amplitudes of 0, 2.2, 5, 11.8, and 23 spikes/s and the standard deviation of bandwidths of 0, 2.8, 5.7, 11.0, and 15.5 deg A Change in capacity for discrimination. Filled circles show the average percentage increase in capacity from the homogeneous case for the 25 diversity combinations for the discrimination task. Open circles show the same but for the identification task. B Same as panel A, but for identification. Note that both types of diversity increase capacity for discrimination by roughly the same amount, but bandwidth diversity improves capacity for identification far more than amplitude diversity does. Additionally, the two types of diversity have approximately independent effects on capacity.\", \"page\": 18, \"index\": 3, \"width\": 875, \"height\": 333}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-26-661754-v2/fig-005.webp\", \"caption\": \"Figure 8. Diversity improves representational efficiency in the presence of nuisance variation. A Capacity for discriminating orientation in the presence of contrast variations. Introducing contrast variations lowers capacity, but capacity is restored by tuning diversity in the population. We plotted points indicating the homogeneous and most diverse cases from the simulations in Figure 5 for comparison (filled circles). Error bars indicate the standard deviation over 50 simulations. Note that amplitude diversity doesn’t improve capacity as much as it did in the nonuisance case. The amplitude diverse population and bandwidth diverse population had respective standard deviations of 23 spikes/s and 15.5 deg. B Same as panel A, but for identification. The range of capacity values spans the same ratio as that in panel A.\", \"page\": 19, \"index\": 5, \"width\": 327, \"height\": 484}]"
motivation: 理解单个神经元特性如何形成群体表征并影响感知行为。
method: 结合理论分析、猕猴初级视觉皮层（V1）电生理记录和计算模拟。
result: 幅度多样性增大刺激响应间欧氏距离，带宽多样性增大角度距离，两者互补提升群体编码效率。
conclusion: 幅度和带宽多样性是优化群体编码几何从而提高视觉感知能力的生物学机制。
---

## 摘要
全面理解群体编码需要将神经处理的多个层面联系起来：个体反应、群体表征和行为。我们通过将神经元调谐特性的分布与群体的表征几何及其对感知任务效率的关系联系起来，将这些层面相结合。我们利用理论、猕猴初级视觉皮层（V1）记录的分析和模拟，揭示调谐幅度和带宽的多样性如何增强用于视觉辨别和识别的群体编码。两种多样性都驱动了不同但互补的表征几何变化。幅度多样性增加了对不同刺激反应之间的欧几里得距离，而带宽多样性则增大了它们之间的角度距离。前者利用了神经元可用的发放率范围，后者利用了群体反应的高维特性。群体编码可以通过这两种不同的几何变化得到改善，而幅度和带宽多样性为此提供了生物学机制。

## Abstract
A complete understanding of population coding requires connecting multiple levels of neural processing: individual responses, population representations, and behavior. We link these by relating the distribution of neuronal tuning properties to a population's representational geometry and its efficiency for perceptual tasks. We use theory, analysis of recordings from macaque primary visual cortex (V1), and simulations to reveal how diversity of tuning amplitude and bandwidth enhances the population code for visual discrimination and identification. Both types of diversity drive different, but complementary changes to the representational geometry. Amplitude diversity increases the Euclidean distance between the responses to different stimuli, while bandwidth diversity creates a larger angular distance between them. The first utilizes the range of firing rates available to neurons, and the second exploits the high-dimensional nature of population responses. Population codes can be improved using these two different geometric changes, and amplitude and bandwidth diversity provide biological mechanisms for doing so.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：弱相关。本文聚焦于灵长类单神经元水平调谐多样性如何塑造群体编码几何，属于基础神经机制研究。
- **启发与意义**：为解码模型设计提供神经先验，即可通过约束模型表征的几何结构来提升编码效率，与神经先验和多视角约束的设计理念一致。
- **可借鉴点**：“表征几何决定任务表现”的分析框架，可迁移至评估 fMRI 或深度学习模型的表征结构，通过量化 manifold 中心距离、相关性等几何属性来分析信息编码效率。
- **阅读建议**：重点关注文中对群体表征几何属性量化与操控的方法，可考虑将其作为分析工具引入，用于解释或约束脑解码/编码模型学习到的宏观表征。

## 1. 论文的核心问题与整体含义
- **核心问题**：探究神经元调谐特性的多样性为何以及如何有益于群体编码，具体连接个体神经元反应、群体表征几何和感知行为表现。
- **研究背景**：神经系统普遍存在神经元选择性（如调谐幅度和带宽）的多样性，但其功能角色尚不清晰。
- **整体含义**：该研究揭示，神经元调谐的幅度多样性（Amplitude diversity）和带宽多样性（Bandwidth diversity）通过互补的几何机制提升群体表征效率，表明这种多样性并非仅仅是生物噪音，而是一种优化感知能力的根本性群体编码策略。

## 2. 方法论
- **核心思想**：引入表征几何框架，将群体对各个刺激多次试验的反应视为高维空间中的点云流形，通过量化这些流形的几何属性及线性可分性来评估表征效率。
- **关键技术：流形容量**：使用流形容量作为表征效率的度量。容量越高，意味着使用相同数量（或更少）神经元，下游线性解码器能区分的刺激越多。
- **几何属性量化**：定义了一组直觉性的几何属性来桥接神经元反应特性和群体表征。
  - **质心范数**：流形中心点到全局平均点的欧几里得距离 $||v||$，反映信号分离程度。
  - **中心相关性**：流形中心向量之间的角度 $-\cos^{-1}(\rho)$，反映流形在角度空间上的分离。
  - **半径**：流形上点到其中心的平均距离，反映噪音大小。
  - **维度**：流形的形状和复杂程度。
  - **轴相关性**：流形主轴对齐程度的角距离 $-\cos^{-1}(\rho)$。
- **分析流程**：通过对不同多样性水平的模拟数据进行多元回归，量化每个几何属性对容量的贡献（回归系数 $\beta$），并计算属性变化带来的容量增益百分比。

## 3. 实验设计
- **真实数据**：使用了先前发表的麻醉猕猴V1脑区微电极阵列电生理记录数据。视觉刺激为36个不同方向的移动正弦光栅。分析仅包含视觉响应且调谐良好（von Mises函数拟合 $r^2 > 0.75$），并排除了一个异常数据集。
- **计算模拟**：
  - **神经元模型**：模拟300个神经元的群体，调谐曲线为 von Mises 函数 $f_i(\theta) = A_i e^{2(\cos(B_i(\theta - \theta_i)) - 1)} + s$。偏好刺激均匀分布。
  - **多样性操控**：基于真实数据分布，将幅度 $A_i$ 设为对数正态分布，带宽 $B_i$ 设为伽马分布。通过改变分布的标准差来创建5个等级的多样性水平。
  - **噪音模型**：采用泊松类噪音和随偏好刺激差异衰减的相关噪音矩阵。
- **对比基准**：将具有不同多样性水平的群体与无多样性的同质群体进行对比。
- **任务**：评估两种任务下的表征效率：
  - **辨别**：区分相邻刺激流形，容量为 $2/N_c$。
  - **识别**：将一个目标流形与所有其他流形区分，容量为 $P/N_c$。

## 4. 资源与算力
- 论文未明确说明用于模拟实验的GPU型号、数量及训练时长。

## 5. 实验数量与充分性
- **实验规模**：进行了大量模拟实验。例如，多元回归分析使用了25种不同多样性组合下的1250次模拟（50次/组合）。观察神经元数据时，每个数据集下选取了500个子群体进行分析。
- **实验设计的充分性与客观性**：
  - **充分性**：实验设计全面，结合了理论证明、神经数据分析及全面的参数化模拟，从不同角度验证结论。
  - **客观公平性**：模拟参数基于V1真实数据分布，并考虑了真实数据中的刺激空间覆盖不均、噪音相关等问题，通过构建伪群体进行验证，比较基准明确。

## 6. 主要结论与发现
- **几何机制互补**：幅度多样性主要通过增大流形间的欧几里得距离（质心范数）来提升效率；而带宽多样性主要通过减小流形中心的相关性，即增大角度距离来提升效率。
- **任务差异**：两种多样性均提升辨别和识别任务，但效果有侧重。幅度多样性对辨别任务提升更大（容量增加61%），带宽多样性对识别任务提升更大（容量增加117%）。
- **几何解释**：因识别任务更依赖于所有流形的全局结构（噪音和信号），带宽多样性通过改善全局几何给了识别任务更大的增益。
- **独立性与健壮性**：两种多样性的增益效果近似独立，可叠加使用。即使在引入对比度等干扰变量后，这两种多样性仍能有效提升表征效率。

## 7. 优点
- **理论框架创新**：将流形容量理论与直观的几何属性联系起来，为理解神经元多样性的功能角色提供了清晰、量化的桥梁。
- **机制解释清晰**：不仅证明了多样性有益，还明确揭示了两种多样性是通过截然不同的几何变换（欧氏距离 vs. 角度距离）来实现的，并能解释其对不同任务的差异化影响。
- **分析严谨**：分析结合真实数据与高度可控的模拟，结论跨越多个神经元群体和伪群体得到验证，确保稳健性。

## 8. 不足与局限
- **任务简化性**：研究任务局限于静态光栅刺激的单一属性（方向）辨别和识别，未涉及更复杂的自然图像或多属性整合任务。
- **解码器限制**：表征效率（容量）的定义基于下游线性解码器的可分离性，无法涵盖非线性解码所捕获的信息。
- **生物学机制未探明**：解释了多样性“有何用”，未回答其“如何产生”，即没有探讨发育、学习或回路连接等形成多样性的具体生物学机制。

（完）
