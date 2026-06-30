---
title: Evaluating Approaches for Inference Testing of Whole-Brain Densely Sampled Single-Subject Task fMRI Data
title_zh: 评估全脑密集采样单被试任务fMRI数据推断检验方法
authors: "Medina, M. C., Reddy, N. A., Bright, M. G., Sitek, K. R."
date: 2026-06-30
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.29.735344v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 全脑单被试fMRI分析用于解码
tldr: "任务fMRI的个体特异性映射需要可靠的全脑推断方法，但最佳实践未定。本研究利用听觉系统全脑密集采样数据，比较了全脑和区域特异性统计推断方法的敏感性与稳定性。结果发现，全脑体素级假发现率校正方法敏感性最高且最稳定，即使在短扫描时长下也能可靠检测听觉区域；区域特异性top %统计量方法可作为探索性定位工具，提供补充信息。"
source: biorxiv
selection_source: fresh_fetch
motivation: 当前缺乏针对单被试密集采样全脑任务fMRI数据的最佳统计推断方法。
method: "收集听觉系统全脑多回波密集采样数据，比较体素级、集群级、置换检验及top %方法的激活敏感性和稳定性。"
result: 全脑体素级FDR校正方法在不同数据子集上均表现最高敏感性和预期区域检测一致性。
conclusion: "建议采用全脑体素级FDR校正进行个体特异性全脑功能定位，top %方法可作为探索性补充。"
---

## 摘要
基于任务的精确脑图绘制已成为功能磁共振成像（fMRI）中稳健表征和绘制个体独特活动模式的一项有前景的技术。这些实验包括在单名被试中采集大量成像数据，最终提高个体特异性功能定位的敏感性和特异性。尽管有其优势，但研究主要集中在理解个体特异性的皮层激活，阻碍了对系统级功能反应的整体认识，且迄今为止，针对受控任务、密集采样全脑数据的统计分析的最佳方法尚未完全确立。因此，在本研究中，我们采集了听觉系统的全脑（即覆盖皮层、小脑和脑干）多回波密集采样数据，听觉系统是一个具有主要皮层下成分的系统，并评估了常用全脑和区域特异性推断检验方法在不同数据子集上的激活敏感性和激活稳定性。全脑方法包括具有不同统计阈值的标准体素级和簇级推断方案以及非参数置换推断方法。区域特异性方法包括探索性顶部% t统计量方法和非参数置换推断方法。我们发现，采用错误发现率（FDR）校正（p<0.05）的全脑体素级方法在各脑区和被试间表现出最高的敏感性，并且即使在较短扫描时长下也能最一致地检测到预期的听觉区域。此外，我们发现区域特异性顶部% t统计量方法可能是一种有用的探索性功能定位工具，也是对标准推断检验方法的补充。

## Abstract
Task-based precision mapping has become a promising technique in functional MRI (fMRI) to robustly characterize and map an individual's unique activity patterns. These experiments consist of acquiring extensive imaging data in one participant, ultimately improving the sensitivity and specificity of individual-specific functional localization. Despite its advantages, studies have primarily focused on understanding individual-specific cortical activation, preventing a holistic view of a systems-level functional response, and to date, best approaches for the statistical analysis of controlled task-based, densely sampled, whole-brain data have not yet been fully established. Therefore, in this study, we collected whole-brain (i.e. covering cortex, cerebellum, and brainstem) multi-echo densely sampled data of the auditory system, a system with major subcortical components, and evaluated activation sensitivity as well as activation stability across data subsets of commonly-used whole-brain and region-specific inference testing approaches. The whole-brain approaches involved standard voxel-level and cluster-level inference schemes with varying statistical thresholds and a non-parametric permutation inference approach. The region-specific approaches involved an exploratory top % t-statistics methods and non-parametric permutation inference approaches. We found that a whole-brain voxel-level approach with a false discovery rate (FDR) correction (p<0.05) presented highest sensitivity across regions and subjects as well as most consistent detection of expected auditory regions, even with lower scan duration. In addition, we found that a region-specific top % t-statistic approach may be a useful exploratory functional localization tool and a complementary method to standard inference testing approaches.