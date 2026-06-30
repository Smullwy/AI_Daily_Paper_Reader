---
title: Estimation of neuronal tuning for word meaning from passively recorded naturalistic speech
title_zh: 从被动记录的自然语音中估计词义的神经元调谐
authors: "Ismail, T., Chavez, A. G., Yan, X., Zhu, H., Franch, M., Belanger, J., Chamarthi, S., Kabotyanski, K., Katlowitz, K., Chericoni, A., Mickiewicz, E., Merk, T., Zhou, Y., Shivakumar, N., Steffan, P., Hingorani, R., Ogg, M., Yi, H., Fraczek, T., Bartoli, E., Hennig, J. A., Sheth, S. A., Provenza, N., Hayden, B. Y."
date: 2026-06-28
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.23.733980v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 从自然语言中解码词义的神经信号
tldr: 本研究针对利用自然伴听语音推断神经词汇编码的难题，提出一套处理流程，对自发语音进行转录、分割、说话人分离及神经数据对齐与峰值检测。在21位患者超800小时、500万词的数据上，编码与解码模型在人工标注对照下表现良好，并验证了表征漂移、数据量及脑区效应。结果表明，日常自然语音能被大脑充分加工，可用于估计神经水平的词义调谐。
source: biorxiv
selection_source: fresh_fetch
motivation: 当前方法受限于输入数据的规模与生态效度，亟需利用日常伴听语音来推断神经编码。
method: 开发了包含语音转录、分割、视频辅助说话人分离及神经数据对齐与峰值检测的流程，应用于21名患者共计800余小时的自然语音数据。
result: 编码与解码模型在人工标注对照下验证有效，揭示了表征漂移、数据集规模效应及六个脑区间的差异。
conclusion: 附带性自然语音已被大脑充分处理，可有效用于估计神经层面的词义表征。
---

## 摘要
推导神经层面的语言编码模型的能力具有重大的科学和临床潜力。当前方法受到输入数据的规模和生态效度的限制；特别是那些需要大规模、稀有或自然样本的应用，将受益于从偶然的日常言语中推断神经编码的能力。在此，我们提出一个新颖的流程，旨在利用自发和偶然的自然言语。该流程执行转录、分割和视频辅助的说话人日志化，以及神经数据的对齐和尖峰检测。我们将该流程应用于一个数据集，该数据集来自21名患者（每人超过6天，总计超过800小时和500万个词）。我们基于大量且稀有的真实基准控制数据集对编码和解码模型进行了评估，这些数据集由人工标注的词级时间对齐和手动分类的尖峰组成。我们进一步通过量化表征漂移、数据集大小的影响以及六个脑区之间的差异来验证我们的方法。这些发现共同表明，偶然的自然言语在大脑中得到了充分处理，从而能够估计神经层面的嵌入。

## Abstract
The ability to derive neural-level language coding models holds great scientific and clinical potential. Current approaches are limited by the scale and ethological validity of input data; applications requiring large, rare, or naturalistic samples in particular would benefit from the ability to infer neural coding from incidental everyday speech. Here we present a novel pipeline designed to leverage spontaneous and incidental naturalistic speech. This pipeline performs transcription, segmentation, and video-assisted diarization, as well as alignment and spike detection of neural data. We apply this pipeline to a dataset derived from 21 patients (6+ days each, over 800 hours and 5 million words total). We benchmark both encoding and decoding models against extensive and rare ground-truth control datasets consisting of human-curated word-level temporal alignment and manually sorted spikes. We further validate our approach by quantifying representational drift, effect of dataset size, and differences between six brain areas. Together, these findings demonstrate that incidental natural speech is sufficiently processed in the brain to enable the estimation neural-level embeddings.