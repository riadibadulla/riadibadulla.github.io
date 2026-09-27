---
title: 'PROTECTION: Provably Robust Intrusion Detection System for IoT Through Recursive Delegation'
authors: ['Riad Ibadulla', 'Hafizul Asad']
venue: 'SAFECOMP 2025 Workshops (DECSoS 2025), Lecture Notes in Computer Science, vol. 15955, Springer'
date: 2025-09-09
type: workshop
summary: 'Machine-learning intrusion detection systems protect IoT networks, but they can be fooled by adversarial inputs and give no formal guarantee of robustness. PROTECTION combines ensemble machine learning with formal verification using Satisfiability Modulo Theories (SMT), checking that the classifier’s output probabilities stay stable when its inputs are slightly altered.'
doi: '10.1007/978-3-032-02018-5_11'
open_access: 'https://openaccess.city.ac.uk/id/eprint/35357/'
body_heading: 'Overview'
open_access_label: 'Accepted manuscript (City Research Online)'
code: 'https://github.com/riadibadulla/PROTECTION'
figure: './figure.webp'
figure_alt: 'Flow diagram of PROTECTION. A training set trains Model 1; perturbed samples are predicted and checked by an SMT solver for a target formula. High-confidence outputs are accepted. Low-confidence samples, and in the PROTECTION-wf variant also counter-examples, are used to train Model 2, and the process repeats until no samples are left.'
figure_caption: 'The PROTECTION pipeline. Inputs whose outputs cannot be verified as robust are delegated to a further model, repeating until no samples are left. PROTECTION-wof passes on low-confidence samples only; PROTECTION-wf also passes on SMT counter-examples.'
---

The security of Internet of Things (IoT) ecosystems is crucial for maintaining user trust and adoption. Intrusion detection and prevention systems based on machine learning are widely used to protect IoT networks, but they are vulnerable to adversarial attacks and their robustness cannot be formally verified.

PROTECTION addresses this by combining formal methods with ensemble machine learning. It uses Satisfiability Modulo Theories (SMT) to verify formally that a classifier’s output probabilities remain stable when its inputs are slightly perturbed.

The paper was presented at DECSoS 2025, the 20th International Workshop on Dependable Smart Embedded Cyber-Physical Systems and Systems-of-Systems, held with SAFECOMP 2025 in Stockholm.

<!-- TODO: replace this overview with the paper's abstract, verbatim -->
