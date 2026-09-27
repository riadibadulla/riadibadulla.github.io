---
title: 'FatNet: High-Resolution Kernels for Classification Using Fully Convolutional Optical Neural Networks'
authors: ['Riad Ibadulla', 'Thomas M. Chen', 'Constantino Carlos Reyes-Aldasoro']
venue: 'AI (MDPI), vol. 4, no. 2, pp. 361–374'
date: 2023-04-03
type: journal
summary: 'Optical accelerators can process high-resolution images at no extra cost, but standard CNNs rely on many low-resolution channels. FatNet converts a classification network into a fully convolutional one with fewer channels and larger, high-resolution kernels. Compared with ResNet-18 on CIFAR-100, it needs 8.2 times fewer convolution operations for a 6% drop in accuracy.'
doi: '10.3390/ai4020018'
url: 'https://www.mdpi.com/2673-2688/4/2/18'
open_access: 'https://www.mdpi.com/2673-2688/4/2/18'
open_access_label: 'Open access (MDPI)'
bibtex: '/files/publications/fatnet/ai-v04-i02_20230416.bib'
code: 'https://github.com/riadibadulla/FatSpitter'
figure: './figure.webp'
figure_alt: 'Two layer-by-layer diagrams of convolutional networks for 32 by 32 pixel CIFAR-100 images. (a) ResNet-18, whose feature maps shrink from 16 by 16 to 2 by 2 while channels grow to 512, ending in a fully connected layer. (b) FatNet, whose feature maps stay at 10 by 10 with at most 155 channels and 10 by 10 kernels, ending in a single 10 by 10 output with no dense layer.'
figure_caption: '(a) ResNet-18 and (b) its FatNet equivalent for CIFAR-100. FatNet keeps feature maps at a higher resolution with fewer channels and larger kernels, and replaces the dense classifier with a convolution. From the paper, published by MDPI under CC BY 4.0.'
---

This paper describes the transformation of a traditional in silico classification network into an optical fully convolutional neural network with high-resolution feature maps and kernels. When using the free-space 4f system to accelerate the inference speed of neural networks, higher resolutions of feature maps and kernels can be used without the loss in frame rate. We present FatNet for the classification of images, which is more compatible with free-space acceleration than standard convolutional classifiers. It neglects the standard combination of convolutional feature extraction and classifier dense layers by performing both in one fully convolutional network. This approach takes full advantage of the parallelism in the 4f free-space system and performs fewer conversions between electronics and optics by reducing the number of channels and increasing the resolution, making this network faster in optics than off-the-shelf networks. To demonstrate the capabilities of FatNet, it was trained with the CIFAR100 dataset on GPU and the simulator of the 4f system. A comparison of the results against ResNet-18 shows 8.2 times fewer convolution operations at the cost of only 6% lower accuracy. This demonstrates that the optical implementation of FatNet results in significantly faster inference than the optical implementation of the original ResNet-18. These are promising results for the approach of training deep learning with high-resolution kernels in the direction toward the upcoming optics era.
