---
title: "OPM-FLUX: A Pipeline for OPM MEG Data Analysis"
title_zh: OPM-FLUX：面向OPM MEG数据分析的流程
authors: "Rakshit, A., Ghafari, T., Kowalczyk, A. U., Jensen, O."
date: 2026-06-20
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.24.720604v2.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: OPM-MEG脑数据分析管道
tldr: OPM-MEG缺乏标准化分析流程，本研究开发了OPM-FLUX，一个全面的端到端分析管道，涵盖预处理、噪声抑制、源重建及多变量模式分析。该管道基于MNE-Python并以Jupyter Notebooks提供，已在两种OPM系统的公开数据上验证，能提升研究的透明度和可重复性，并作为教育资源。
source: biorxiv
selection_source: fresh_fetch
motivation: OPM-MEG缺乏量身定制的标准化数据分析框架，导致处理差异性和低可重复性。
method: 开发了OPM-FLUX管道，包含完整的预处理、噪声抑制、源重建和MVPA流程，用MNE-Python实现并以交互式Jupyter Notebooks分发。
result: 在视觉空间注意任务的公开数据集（来自Cerca/QuSpin与FieldLine系统）上演示了管道功能，分析了振荡和诱发反应。
conclusion: OPM-FLUX增强了OPM-MEG研究的透明度、可比性和可复制性，并可作为教育和研究资源。
---

## 摘要
基于光泵磁强计的脑磁图（OPM-MEG）近来已成为认知神经科学中一项强大的神经成像方法，它超越了传统低温系统的局限，具备更高的实验灵活性和可穿戴记录能力。尽管有这些优势，专门针对OPM技术定制的标准化数据分析框架仍然缺乏，导致处理选择多样，不同实验室和硬件平台间的可重复性降低。我们介绍OPM-FLUX，一个为OPM-MEG数据开发的全面且完整记录的端到端分析流程。该流程定义了一套清晰的预处理、噪声抑制、伪影处理、频谱分析、诱发响应分析序列及推荐的参数设置。它还包含源重建，以识别信号的大脑起源位置。此外，OPM-FLUX支持多变量模式分析（MVPA），能够在传感器层面实现对认知过程的时间分辨解码。OPM-FLUX在MNE-Python中实现，并以交互式Jupyter Notebook的形式发布，将可执行代码与详细的方法论解释及图形化输出相结合。该流程还提供标准化的报告模板和数据采集标准操作程序，以促进预注册、一致的文档记录和跨研究场所的标准实践。我们使用来自Cerca/QuSpin和FieldLine OPM系统的开放数据集演示了该工作流程，这些数据集是在一项视觉空间注意范式中采集的，该范式能调制alpha、beta和gamma振荡并引发事件相关响应。通过支持多种OPM平台并推动一致的方法选择，OPM-FLUX提升了OPM-MEG研究的透明度、可比性和可复现性。该流程也作为进入该领域的学生和研究人员的一个教育资源，并设计为伴随OPM脑成像技术的持续进步而演进。

## Abstract
Optically pumped magnetometer-based magnetoencephalography (OPM-MEG) has recently emerged as a powerful neuroimaging approach in cognitive neuroscience, extending beyond the limitations of conventional cryogenic systems with greater experimental flexibility and wearable recording. Despite these advantages, standardised data analysis frameworks specifically tailored to OPM technology are still lacking, leading to variability in processing choices and reduced reproducibility across laboratories and hardware platforms. We introduce OPM-FLUX, a comprehensive and fully documented end-to-end analysis pipeline developed for OPM-MEG data. The pipeline defines a clear sequence of preprocessing, noise suppression, artifact handling, spectral analysis, evoked response analysis along with recommended parameter settings. It also includes source reconstruction to identify where in the brain the signals originate. In addition, OPM-FLUX supports multivariate pattern analysis (MVPA), enabling time-resolved decoding of cognitive processes from sensor level data. OPM-FLUX is implemented in MNE-Python and distributed as interactive Jupyter Notebooks that combine executable code with detailed methodological explanations and graphical outputs. The pipeline further provides standardized reporting templates and a data acquisition Standard Operating Procedure to facilitate preregistration, consistent documentation, and standard practices across research sites. The workflow is demonstrated using openly available datasets acquired from both Cerca/QuSpin and FieldLine OPM systems during a visuospatial attention paradigm that modulates alpha, beta, and gamma oscillations and elicits event-related responses. By supporting multiple OPM platforms and promoting consistent methodological choices, OPM-FLUX enhances transparency, comparability, and replication in OPM-MEG research. The pipeline also serves as an educational resource for students and researchers entering the field and is designed to evolve alongside ongoing technological and methodological advances in OPM-based brain imaging.