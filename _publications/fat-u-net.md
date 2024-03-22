---
title: "Fat-U-Net: non-contracting U-Net for free-space optical neural networks"
collection: publications
permalink: /publication/fatunet
excerpt: 'This paper describes the advantages and disadvantages of adapting the U-Net architecture from a traditional GPU to a 4f free-space optical environment.'
date: 2024-03-13
venue: 'SPIE Photonics West- AI and Optical Data Sciences V'
paperurl: 'https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12903/1290308/Fat-U-Net--non-contracting-U-Net-for-free/10.1117/12.3008618.short#_=_'
citation: 'Riad Ibadulla, Constantino C. Reyes-Aldasoro, and Thomas M. Chen "Fat-U-Net: non-contracting U-Net for free-space optical neural networks", Proc. SPIE 12903, AI and Optical Data Sciences V, 1290308 (13 March 2024); https://doi.org/10.1117/12.3008618'
---

Abstract

This paper describes the advantages and disadvantages of adapting the U-Net architecture from a traditional GPU to a 4f free-space optical environment. The implementation is based on an optical-based acceleration called FatNet and thus this adaption is called Fat-U-Net. Fat-U-Net neglects the pooling operations in UNet, but maintains a similar number of weights and pixels per layer as U-Net. Our results demonstrate that the conversion to Fat-U-Net offers significant improvement in speed for segmentation tasks, with Fat-U-Net achieving a remarkable ×538 acceleration in inference compared to U-Net when both are run on optical devices and x37 acceleration in inference compared to the results provided by U-Net on GPU. The performance loss after conversion remains minimal in two datasets, with reductions of 4.24% in IoU for the Oxford IIIt pet dataset and 1.76% in IoU of HeLa cells nucleus segmentation.

[Download paper here](/files/publications/fatnet/Fat_U_Net.pdf)

Recommended citation: 

Riad Ibadulla, Constantino C. Reyes-Aldasoro, and Thomas M. Chen "Fat-U-Net: non-contracting U-Net for free-space optical neural networks", Proc. SPIE 12903, AI and Optical Data Sciences V, 1290308 (13 March 2024); https://doi.org/10.1117/12.3008618

[BibTeX](/files/publications/fatnet/citation-12903_40.bib)
