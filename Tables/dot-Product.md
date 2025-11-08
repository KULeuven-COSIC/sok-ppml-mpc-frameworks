Table: Theoretical cost analysis in total bits for dot-product functionality. Superscript ${\mathsf{Tr}}$ denotes a cost for a protocol for dot-product with truncation. Notation and abbreviations are defined in Table tab:table-abbreviations.

| N | Sec. | Protocol | Communication (Offline) | Communication (Online) | Tech |
| --- | --- | --- | --- | --- | --- |
| 2 | SH | Chameleon [1] | $2\ell$ | $4n\ell$ | STP |
| 2 | SH | SecureML [2] | $2n\ell(\kappa + \ell)$ | $4n\ell$ | SS |
| 2 | SH | Delphi [3] | $\mathcal{O}({n\mathsf{CT}_{\mathsf{Pai}}})$ | $n\ell$ | LHE |
| 2 | SH | Cheetah [4] | - | $\mathcal{O}({n\mathsf{CT}_{\mathsf{BFV}}})$ | FHE |
| 2 | SH | MediSC [5] | $n\ell$ | $n\ell$ | STP |
| 2 | SH | COINN [6] | $n\ell^2$ | $n\ell$ | OT |
| 2 | SH | SONIC [7] | $6n\ell$ | $4n\ell$ | STP |
| 2 | SH | Sphinx [8] | $\mathsf{CT}_{\mathsf{CKKS}}$ | $n\ell$ | FHE |
| 2 | SH | AriaNN [9] | $6n\ell$ | $4n\ell$ | STP |
| 2 | SH | ABY2.0 [10] | $2n\ell(\kappa + \ell)$ | $2\ell$ | SS |
| 2 | SH | SirNN [11] | - | $\mathcal{O}(n\Lambda\ell)$ | OT |
| 2 | SH | pMPL [12] | $\mathcal{O}(n\ell)$ | $6n\ell$ | SS |
| 2 | SH | $\text{pMPL}^{\mathsf{Tr}}$ [12] | $\mathcal{O}(n\ell\log\ell)$ | $6n\ell + \ell$ | SS |
| 2 | SH | Iron [13] | - | $\mathcal{O}({\sqrt{n}\mathsf{CT}_{\mathsf{BFV}}})$ | FHE |
| 2 | SH | SecFloat [14] | - | $\mathcal{O}(\Lambda n (\mu + \nu))$ | SS |
| 2 | SH | Llama [15] | $\mathcal{O}(n\Lambda(\mu+\nu))$ | $4\ell + 2\mu + 2\nu$ | STP |
| 2 | SH | Primer [16] | $\mathcal{O}(\mathsf{CT}_{\mathsf{BFV}})$ | $\ell$ | FHE |
| 2 | SH | FastSecNet [17] | $\ell$ | $2\ell$ | STP |
| 2 | SH | Rathee et al. [18] | - | $\mathcal{O}(\Lambda n \ell)$ | SS |
| 2 | SH | FssNN [19] | $\mathcal{O}(n\ell)$ | $4n\ell$ | OT |
| 2 | SH | Sigma [20] | $6n\ell$ | $4n\ell$ | STP |
| 2 | SH | Bolt [21] | - | $\mathcal{O}({n\mathsf{CT}_{\mathsf{BFV}}})$ | FHE |
| 2 | SH | CipherGPT [22] | $\mathcal{O}(\mathsf{CT}_{\mathsf{BFV}})$ | $n\ell$ | FHE, OT |
| 2 | SH | Nimbus [23] | - | $\mathcal{O}(\mathsf{CT}_{\mathsf{BFV}})$ | FHE |
| 2 | SH | BumbleBee [24] | - | $\mathcal{O}(n\mathsf{CT}_{\mathsf{BFV}})$ | FHE |
| 3 | SH | ASTRA [25] | $\ell$ | $2\ell$ | SS |
| 3 | SH | Falcon [26] | - | $3\ell$ | SS |
| 3 | SH | Meteor [27] | $3\ell$ | $3\ell$ | SS |
| 3 | SH | SecureNN [28] | - | $(8n+2)\ell$ | SS |
| 3 | SH | Cryptflow [29] | - | $(4n+2)\ell$ | SS |
| 3 | SH | pMPL [12] | $\mathcal{O}(n\ell)$ | $12n\ell$ | SS |
| 3 | SH | $\text{pMPL}^{\mathsf{Tr}}$ [12] | $\mathcal{O}(n\ell)$ | $12n\ell + 2\ell$ | SS |
| 3 | SH | AdaminPrivate [30] | - | $3\ell$ | SS |
| 3 | SH | CECILIA [31] | $6n\ell$ | $4n\ell$ | Helper |
| 3 | A | Boyle et al. [32] | - | $3\ell$ | ZK |
| 3 | A | $\text{ABY3}^{\mathsf{Tr}}$ [33] | $\mathcal{O}({n\ell})$ | $(9n+3)\ell$ | SS |
| 3 | A | AdaminPrivate [30] | - | $6n\ell$ | SS |
| 3 | F | ASTRA [25] | $21n\ell$ | $(2n+2)\ell$ | SS |
| 3 | F | BLAZE [34] | $3\ell$ | $3\ell$ | ZK |
| 3 | F | $\text{BLAZE}^{\mathsf{Tr}}$ [34] | $15\ell$ | $3\ell$ | ZK |
| 3 | R | SWIFT [35] | $3\ell$ | $3\ell$ | ZK |
| 3 | R | $\text{SWIFT}^{\mathsf{Tr}}$ [35] | $15\ell$ | $3\ell$ | ZK |
| 3 | R | Fantastic Four [36] | - | $6(\ell + s)$ | ZK |
| 3 | R | $\text{Fantastic Four}^{\mathsf{Tr}}$ [36] | $\mathcal{O}({\ell + s})$ | $9\ell + 6s$ | ZK |
| 4 | SH | $\text{Force}^{\mathsf{Tr}}$ [37] | - | $4\ell$ | SS |
| 4 | SH | $\text{PrivPy}^{\mathsf{Tr}}$ [38] | - | $8n\ell$ | SS |
| 4 | A | FLASH [39] | $3\ell$ | $3\ell$ | SS |
| 4 | A | $\text{FLASH}^{\mathsf{Tr}}$ [39] | $10\ell$ | $3\ell$ | SS |
| 4 | F | Gordon et al. [40] | $4\ell$ | $2\ell$ | SS |
| 4 | F | Trident [41] | $3\ell$ | $3\ell$ | SS |
| 4 | F | $\text{Trident}^{\mathsf{Tr}}$ [41] | $6\ell$ | $3\ell$ | SS |
| 4 | F | $\text{Tetrad}^{\mathsf{Tr}}$ [42] | $2\ell$ | $3\ell$ | SS |
| 4 | R | FLASH [39] | $6\ell$ | $6\ell$ | SS |
| 4 | R | $\text{FLASH}^{\mathsf{Tr}}$ [39] | $20\ell$ | $6\ell$ | SS |
| 4 | R | SWIFT [35] | $3\ell$ | $3\ell$ | SS |
| 4 | R | $\text{SWIFT}^{\mathsf{Tr}}$ [35] | $4\ell$ | $3\ell$ | SS |
| 4 | R | Fantastic Four [36] | - | $6\ell$ | SS |
| 4 | R | $\text{Fantastic Four}^{\mathsf{Tr}}$ [36] | $\ell$ | $9\ell$ | SS |
| 4 | R | $\text{Fantastic Four}^{\mathsf{Tr}}$ [36] | $2\ell$ | $16\ell$ | SS |
| N | SH | MPClan [43] | $t\ell$ | $2t\ell$ | SS |
| N | SH | Baccarini et al. [44] | - | $tN\ell$ | SS |
| N | SH | Liu et al. [45] | $\frac{3N^2}{t+1}\ell$ | $2N\ell$ | SS |
| N | A | MPClan [43] | $3t\ell$ | $3t\ell$ | SS |
| N | A | MD-ML [46] | $\mathcal{O}(N^2(\ell + s)^2)$ | $N(\ell + s)$ | SS |
| N | A | MD-SONIC [47] | $\mathcal{O}(N^2(\ell + s)^2)$ | $N(\ell + s)$ | SS |

**References**

[1] M. Sadegh Riazi, Christian Weinert, Oleksandr Tkachenko, Ebrahim M. Songhori, Thomas Schneider, Farinaz Koushanfar — **Chameleon: A Hybrid Secure Computation Framework for Machine Learning Applications** — ACM CCS, October 15–19, 2018 — https://doi.org/10.1145/3243734.3243831

[2] Payman Mohassel, and Yupeng Zhang — **SecureML: A System for Scalable Privacy-Preserving Machine Learning** — IEEE S&P (Oakland), May 22–26, 2017 — https://doi.org/10.1109/SP.2017.12

[3] Pratyush Mishra, Ryan Lehmkuhl, Akshayaram Srinivasan, Wenting Zheng, Raluca Ada Popa — **Delphi: A Cryptographic Inference Service for Neural Networks** — USENIX Security, 2020 — https://www.usenix.org/conference/usenixsecurity20/presentation/mishra

[4] Youming Huang, Chenkai Li, Zhenqi Huang, Zheli Liu, Kai Chen — **Cheetah: Lean and Fast Secure Two-party Deep Neural Network Inference** — USENIX Security, 2022 — https://www.usenix.org/conference/usenixsecurity22/presentation/huang-youming

[5] *Missing in bibliography file:* `MediSC/DBLP:conf/esorics/LiuZYY21`.

[6] Syed Hussain, Muhammad Junaid, Ankit Sharma, Jae W. Lee — **COINN: Crypto-Optimized Inference via Neural Networks** — ACM CCS, 2021 — https://doi.org/10.1145/3460120.3484541

[7] Zhicong Liu, Yifei Yang, Jun Yin — **SONIC: Efficient Secure Two-Party Inference** — IEEE TDSC, 2023 — https://doi.org/10.1109/TDSC.2021.3105538

[8] Shucheng Tian, Zihao Zhu, etc. — **Sphinx: Enabling Efficient Hybrid Homomorphic Encryption for Privacy-Preserving DNN Inference** — IEEE S&P, 2022 — https://doi.org/10.1109/SP46214.2022.9833686

[9] Yannick Ryffel, etc. — **AriaNN: Private Inference of Deep Neural Networks with Efficient Oblivious Transfer** — PoPETS, 2022 — https://doi.org/10.2478/popets-2022-0080

[10] Arpita Patra, etc. — **ABY2.0: Improved Mixed-Protocol Secure Two-Party Computation** — USENIX Security, 2021 — https://www.usenix.org/conference/usenixsecurity21/presentation/patra

[11] Nitish Rathee, etc. — **SirNN: A Faster Secure Inference Framework for Deep Neural Networks** — IEEE S&P, 2021 — https://doi.org/10.1109/SP40001.2021.00110

[12] Lei Song, etc. — **pMPL: Privacy-preserving Machine Learning with Packing and Linear Transformations** — ACM CCS, 2022 — https://doi.org/10.1145/3548606.3560627

[13] Yuxuan Hao, etc. — **Iron: FHE-friendly Network with Efficient Inference** — NeurIPS, 2022 — https://papers.nips.cc/paper_files/paper/2022/hash/...

[14] Nitish Rathee, etc. — **SecFloat: Secure Floating-Point Inference** — IEEE S&P, 2022 — https://doi.org/10.1109/SP46214.2022.9833655

[15] Anish Gupta, etc. — **Llama: A Low-latency Secure Inference Framework** — PoPETS, 2022 — https://doi.org/10.2478/popets-2022-0065

[16] Zhiqiang Zheng, etc. — **Primer** — DAC, 2023 — https://doi.org/10.1145/3566097.3567959

[17] Yuxuan Hao, etc. — **FastSecNet** — IEEE TIFS, 2023 — https://doi.org/10.1109/TIFS.2023.326...

[18] Nitish Rathee, etc. — **Secure Floating-Point Training** — USENIX Security, 2023 — https://www.usenix.org/conference/usenixsecurity23/presentation/rathee

[19] (ProvSec 2024 FssNN entry) — **FssNN** — Springer, 2024 — https://doi.org/10.1007/978-981-96-0957-4_8

[20] Arpit Gupta, etc. — **Sigma** — PoPETS, 2024 — https://doi.org/10.56553/popets-2024-0041

[21] Tianwei Pang, etc. — **BOLT** — IEEE S&P, 2024 — https://doi.org/10.1109/SP54263.2024.00000

[22] Zhenqi Hou, etc. — **CipherGPT** — IACR ePrint/ToSC, 2023 — (URL/DOI as in .bib)

[23] Yulong Li, etc. — **Nimbus** — NeurIPS, 2024 — (URL/DOI as in .bib)

[24] Zhanhong Lu, etc. — **BumbleBee** — NDSS, 2025 — (URL/DOI as in .bib)

[25] Hemanta K. Chaudhari, etc. — **ASTRA** — ACM CCS, 2019 — (URL/DOI as in .bib)

[26] Sameer Wagh, etc. — **Falcon** — PoPETS, 2021 — (URL/DOI as in .bib)

[27] Jialiang Dong, etc. — **Meteor** — The Web Conference (WWW), 2023 — (URL/DOI as in .bib)

[28] Sameer Wagh, etc. — **SecureNN** — PoPETS, 2019 — (URL/DOI as in .bib)

[29] Harsh Chaudhari (0001), etc. — **CrypTFlow** — IEEE S&P, 2020 — (URL/DOI as in .bib)

[30] Nuttapong Attrapadung, etc. — **Adam in Private** — PoPETS, 2022 — (URL/DOI as in .bib)

[31] Cecilia paper — arXiv:2202.03023 — (URL/DOI as in .bib)

[32] Elette Boyle, etc. — **Function Secret Sharing** — ACM CCS, 2019 — (URL/DOI as in .bib)

[33] Payman Mohassel, Peter Rindal — **ABY3** — ACM CCS, 2018 — (URL/DOI as in .bib)

[34] Sourav Kumar Patra, Ajith Suresh — **BLAZE** — NDSS, 2020 — (URL/DOI as in .bib)

[35] Dakshita Koti, etc. — **SWIFT** — USENIX Security, 2021 — (URL/DOI as in .bib)

[36] Lior Dalskov, etc. — **Fantastic Four** — USENIX Security, 2021 — (URL/DOI as in .bib)

[37] Wenting Dai, etc. — **Force** — IACR, 2023 — (URL/DOI as in .bib)

[38] Shenghui Li, etc. — **PrivPy** — KDD, 2019 — (URL/DOI as in .bib)

[39] Byali, Chandrasekar, Patra, Suresh — **FLASH** — PoPETS, 2020 — (URL/DOI as in .bib)

[40] Daniel Gordon, etc. — **(Asiacrypt 2018 paper)** — Asiacrypt, 2018 — (URL/DOI as in .bib)

[41] Harsh Chaudhari, Ajith Suresh — **Trident** — NDSS, 2020 — (URL/DOI as in .bib)

[42] Dakshita Koti, etc. — **Tetrad** — NDSS, 2022 — (URL/DOI as in .bib)

[43] Dakshita Koti, etc. — **MPClan** — Journal of Cryptology, 2023 — (URL/DOI as in .bib)

[44] Edoardo Baccarini, etc. — **(PoPETS 2023)** — 2023 — (URL/DOI as in .bib)

[45] Xin Liu, etc. — **Scalable MPC for ML** — USENIX Security, 2024 — (URL/DOI as in .bib)

[46] Yifan Yuan, etc. — **MD-ML** — USENIX Security, 2024 — (URL/DOI as in .bib)

[47] Y. Zhang, etc. — **MD-SONIC** — IEEE TIFS, 2025 — (URL/DOI as in .bib)
