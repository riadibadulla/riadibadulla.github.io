---
title: 'Fat-U-Net: Non-Contracting U-Net for Free-Space Optical Neural Networks'
authors: ['Riad Ibadulla', 'Constantino C. Reyes-Aldasoro', 'Thomas M. Chen']
venue: 'Proc. SPIE 12903, AI and Optical Data Sciences V (SPIE Photonics West)'
date: 2024-03-13
type: conference
summary: 'Applies the FatNet approach to U-Net for image segmentation, removing the pooling steps so that resolution stays high throughout. On a 4f optical system, Fat-U-Net is estimated to run 538 times faster than U-Net on the same optical hardware and 37 times faster than U-Net on a GPU, with IoU reductions of 4.24% on Oxford-IIIT Pet and 1.76% on HeLa cell nuclei.'
doi: '10.1117/12.3008618'
open_access: 'https://openaccess.city.ac.uk/id/eprint/32235/'
open_access_label: 'City Research Online'
pdf: '/files/publications/fatunet/Fat_U_Net.pdf'
bibtex: '/files/publications/fatunet/citation-12903_40.bib'
code: 'https://github.com/riadibadulla/FatUnet'
figure: './figure.jpg'
figure_alt: 'Two grey electron-microscopy images of HeLa cells side by side, labelled Fat-U-Net and U-Net, with segmented cell nuclei highlighted in orange. The two segmentations look very similar.'
figure_caption: 'Fat-U-Net (left) and U-Net (right) nucleus segmentation on an 8192 × 8192 HeLa cell image. Figure 4 from the paper.'
---

This paper describes the advantages and disadvantages of adapting the U-Net architecture from a traditional GPU to a 4f free-space optical environment. The implementation is based on an optical-based acceleration called FatNet and thus this adaption is called Fat-U-Net. Fat-U-Net neglects the pooling operations in U-Net, but maintains a similar number of weights and pixels per layer as U-Net. Our results demonstrate that the conversion to Fat-U-Net offers significant improvement in speed for segmentation tasks, with Fat-U-Net achieving a ×538 acceleration in inference compared to U-Net when both are run on optical devices and ×37 acceleration in inference compared to the results provided by U-Net on GPU. The performance loss after conversion remains minimal in two datasets, with reductions of 4.24% in IoU for the Oxford IIIT Pet dataset and 1.76% in IoU of HeLa cells nucleus segmentation.
