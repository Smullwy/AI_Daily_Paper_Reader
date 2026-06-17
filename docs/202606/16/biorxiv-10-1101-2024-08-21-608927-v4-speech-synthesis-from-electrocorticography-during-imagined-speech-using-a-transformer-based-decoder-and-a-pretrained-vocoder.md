---
title: Speech Synthesis from Electrocorticography during Imagined Speech Using a Transformer-Based Decoder and a Pretrained Vocoder
title_zh: 基于Transformer解码器和预训练声码器的脑皮层电图想象语音合成
authors: "Komeiji, S., Shigemi, K., Mitsuhashi, T., Iimura, Y., Suzuki, H., Sugano, H., Shinoda, K., Yatabe, K., Tanaka, T."
date: 2026-06-13
pdf: "https://www.biorxiv.org/content/10.1101/2024.08.21.608927v4.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 使用ECoG进行脑解码
tldr: 从皮层脑电图（ECoG）想象语音合成语音因缺乏同步音频训练数据而面临挑战。本研究提出利用公开语音任务的音频作为想象语音信号的替代真值，基于语言内容一致性。采用Transformer解码器从想象语音ECoG生成对数梅尔谱，再通过预训练Parallel WaveGAN转换为波形。13名受试者实验显示，合成语音与代理目标的相关性达0.74-0.84，证实了该方法在无行为输出场景下的有效性。
source: biorxiv
selection_source: fresh_fetch
motivation: 解决想象语音合成中缺乏同步音频训练数据的问题。
method: 利用公开语音音频作为替代真值，结合Transformer解码器和预训练Parallel WaveGAN声码器从ECoG信号生成语音。
result: 13名受试者中合成语音与代理目标的动态时间规整对齐皮尔逊相关系数达到0.74至0.84。
conclusion: 公开语音音频可作为想象语音合成的有效训练目标，为无行为输出场景提供了可行方案。
---

## 摘要
由于缺乏同步音频信号用于训练，从想象语音过程中记录的脑皮层电图（ECoG）信号合成语音仍然是一个挑战。为解决此问题，我们提出了一种训练框架，利用在公开语音任务中录制的音频作为想象语音信号的替代真实信号，其依据是语言内容的一致性。我们采用基于Transformer的解码器从想象语音的ECoG生成对数梅尔频谱图，再使用预训练的并行WaveGAN将其转换为波形音频。在涉及13名参与者的ECoG记录实验中，合成语音与代理目标之间的动态时间规整对齐皮尔逊相关系数范围为0.74至0.84。这些结果表明，公开语音音频可作为重建想象语音的有效训练目标，为在无行为输出的情况下训练解码器提供了可行方案。

## Abstract
Synthesizing speech from Electrocorticogram (ECoG) signals recorded during imagined speech remains a challenge due to the absence of synchronized audio signals for training. To address this, we propose a training framework that utilizes audio recorded during overt speech tasks as a surrogate ground truth for imagined speech signals, based on the consistency of the linguistic content. We employed a Transformer-based decoder to generate log-mel spectrograms from imagined speech ECoG, which were then converted into waveform audio using a pre-trained Parallel WaveGAN. In experiments involving ECoG recordings from 13 participants, the synthesized speech achieved dynamic time warping-aligned Pearson correlation coefficients ranging from $0.74$ to $0.84$ with the proxy targets. These results demonstrate that overt speech audio can serve as an effective training target for reconstructing imagined speech, offering a viable solution for training decoders in the absence of behavioral output.