### Categorization of PPML frameworks by MPC design. ‘—’ denotes not applicable.

| Work                    | Year | Ring                                       | Field              | DM        | HM     | Super HM | Online-only |   Pre-processing  |    Dealer   | Outsourcing | Client-Server | High Throughput | Low Latency | Mixed |
| ----------------------- | ---: | ------------------------------------------ | ------------------ | --------- | ------ | -------- | :---------: | :---------------: | :---------: | :---------: | :-----------: | :-------------: | :---------: | :---: |
| SecureML [1]            | 2017 | $\mathbb{Z}_{2^{\ell}},\ \mathbb{Z}_2$ | ✗                  | SH        | ✗      | ✗        |      ✗      | $$f$$-independent |     TTP     |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| DeepSecure [2]          | 2017 | $\mathbb{Z}_2$                         | ✗                  | SH        | ✗      | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✓      |       ✗       |        ✗        |      ✓      |   ✗   |
| MiniONN [3]             | 2017 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✗      |       ✓       |        ✗        |      ✓      |   ✗   |
| Chameleon [4]           | 2017 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✗      |         ✗         |     TTP     |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Gazelle [5]             | 2018 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✗      |       ✓       |        ✗        |      ✓      |   ✗   |
| ABY3 [6]                | 2018 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | ✗         | SH/A   | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| SecureNN [7]            | 2018 | $$\mathbb{Z}_{2^{\ell}}$$                  | $$\mathbb{F}_{p}$$ | ✗         | SH/A   | ✗        |      ✓      |         ✗         |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| ASTRA [8]               | 2019 | —                                          | —                  | ✗         | SH/A/F | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| Cryptflow [9]           | 2019 | —                                          | —                  | ✗         | SH/A   | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| Trident [10]            | 2019 | —                                          | —                  | ✗         | F      | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| PrivPy [11]             | 2019 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| Delphi [12]             | 2020 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✗      |       ✓       |        —        |      —      |   —   |
| Cryptflow2 [13]         | 2020 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✗      |       ✓       |        —        |      —      |   —   |
| Shen et al. [14]        | 2020 | —                                          | —                  | ✗         | SH     | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| Falcon [15]             | 2020 | $$\mathbb{Z}_{2^{\ell}}$$                  | $$\mathbb{F}_{p}$$ | ✗         | SH/A   | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| BLAZE [16]              | 2020 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | ✗         | A/F    | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| FLASH [17]              | 2020 | —                                          | —                  | A/R       | ✗      | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| SWIFT [18]              | 2020 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | R         | R      | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| MediSC [19]             | 2021 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✗      |       ✓       |        —        |      —      |   —   |
| COINN [20]              | 2021 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✗      |       ✓       |        —        |      —      |   —   |
| Muse [21]               | 2021 | —                                          | —                  | $$A^{C}$$ | ✗      | ✗        |      —      |         —         |      —      |      ✗      |       ✓       |        —        |      —      |   —   |
| AriaNN [22]             | 2021 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| Sirnn [23]              | 2021 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✓      |         ✗         |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| ABY2 [24]               | 2021 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Fantastic Four [25]     | 2021 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | ✗         | A/R    | ✗        |      ✓      | $$f$$-independent |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Tetrad [26]             | 2021 | —                                          | —                  | ✗         | F/R    | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| SONIC [27]              | 2022 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| Sphinx [28]             | 2022 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✗      |       ✓       |        —        |      —      |   —   |
| Simc [29]               | 2022 | ✗                                          | $$\mathbb{F}_{p}$$ | $$A^{C}$$ | ✗      | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✗      |       ✓       |        ✗        |      ✗      |   ✓   |
| Cheetah [30]            | 2022 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✓      |         ✗         |      ✗      |      ✗      |       ✓       |        ✗        |      ✗      |   ✓   |
| Iron [31]               | 2022 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✗      |       ✓       |        —        |      —      |   —   |
| Pika [32]               | 2022 | —                                          | —                  | A         | ✗      | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| SecFloat [33]           | 2022 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| Llama [34]              | 2022 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| pMPL [35]               | 2022 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |      —      |      ✓      |       ✗       |        —        |      —      |   —   |
| AdamInPrivate [36]      | 2022 | ✗                                          | $$\mathbb{F}_{p}$$ | ✗         | A      | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| MPCFormer [37]          | 2023 | —                                          | —                  | SH        | ✗      | ✗        |      —      | $$f$$-independent |      ✗      |      ✗      |       ✓       |        ✓        |      ✗      |   ✗   |
| Primer [38]             | 2023 | —                                          | —                  | SH        | ✗      | ✗        |      —      |  $$f$$-dependent  |      ✗      |      ✗      |       ✓       |        ✗        |      ✗      |   ✓   |
| FastSecNet [39]         | 2023 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |     TTP     |      ✗      |       ✓       |        ✗        |      ✓      |   ✗   |
| Rathee et al. [40]      | 2023 | —                                          | —                  | SH        | ✗      | ✗        |      ✓      |         ✗         |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Orca [41]               | 2023 | $$\mathbb{Z}_{2^{\ell}}$$                  | ✗                  | SH        | ✗      | ✗        |      ✗      |         ✗         |     TTP     |      ✓      |       ✗       |        ✗        |      ✓      |   ✗   |
| FssNN [42]              | 2023 | —                                          | —                  | SH        | ✗      | ✗        |      —      |  $$f$$-dependent  |      ✗      |      ✓      |       ✗       |        ✗        |      ✓      |   ✗   |
| Sigma [43]              | 2023 | —                                          | —                  | SH        | ✗      | ✗        |      —      |         —         |     TTP     |      ✓      |       ✗       |        ✗        |      ✓      |   ✗   |
| BOLT [44]               | 2023 | $$\mathbb{Z}_{2^{\ell}}$$                  | ✗                  | SH        | ✗      | ✗        |      ✓      |         ✗         |      ✗      |      ✗      |       ✓       |        ✗        |      ✗      |   ✓   |
| Meteor [45]             | 2023 | $$\mathbb{Z}_{2^{\ell}}$$                  | $$\mathbb{F}_{p}$$ | ✗         | SH     | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| PrivFormer [46]         | 2023 | $$\mathbb{Z}_{2^{\ell}}$$                  | $$\mathbb{F}_{p}$$ | ✗         | SH     | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Baccarini et al. [47]   | 2023 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | ✗         | SH     | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| MPClan [48]             | 2023 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | ✗         | SH/A   | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Force [49]              | 2023 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | ✗         | SH     | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Fusion [50]             | 2023 | —                                          | —                  | $$A^{S}$$ | ✗      | ✗        |      —      |         —         |      —      |      ✗      |       ✓       |        —        |      —      |   —   |
| Nimbus [51]             | 2024 | $$\mathbb{Z}_{2^{\ell}}$$                  | ✗                  | SH        | ✗      | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✗      |       ✓       |        ✗        |      ✓      |   ✗   |
| SIMC 2.0 [52]           | 2024 | $$\mathbb{Z}_{2}$$                         | $$\mathbb{F}_{p}$$ | $$A^{C}$$ | ✗      | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✗      |       ✓       |        ✗        |      ✗      |   ✓   |
| Fregata [53]            | 2024 | $$\mathbb{Z}_{2^{\ell}}$$                  | ✗                  | SH        | ✗      | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✗      |       ✓       |        ✗        |      ✓      |   ✗   |
| SecFormer [54]          | 2024 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✗      |         ✗         |     TTP     |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| MLFormer [55]           | 2024 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✗      |         ✗         |     TTP     |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Trio [56]               | 2024 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | ✗         | SH     | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Quad [56]               | 2024 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | ✗         | ✗      | A        |      ✗      |  $$f$$-dependent  |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Br"uggemann et al. [57] | 2024 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | ✗         | A      | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✓      |       ✓       |        ✓        |      ✗      |   ✗   |
| Liu et al. [58]         | 2024 | ✗                                          | $$\mathbb{F}_{p}$$ | ✗         | SH     | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| MD-ML [59]              | 2024 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | A         | ✗      | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| BumbleBee [60]          | 2025 | $$\mathbb{Z}_{2^{\ell}}$$                  | ✗                  | SH        | ✗      | ✗        |      ✓      |         ✗         |      ✗      |      ✗      |       ✓       |        ✗        |      ✓      |   ✗   |
| SHAFT [61]              | 2025 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✗      |         ✗         |     TTP     |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Panther [62]            | 2025 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✓      |         ✗         |      ✗      |      ✗      |       ✓       |        ✗        |      ✗      |   ✓   |
| Guo et al. [63]         | 2025 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✓      |         ✗         |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| Shark [64]              | 2025 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | A         | ✗      | ✗        |      ✗      |         ✗         |     TTP     |      ✓      |       ✗       |        ✗        |      ✓      |   ✗   |
| MD-SONIC [65]           | 2025 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | A         | ✗      | ✗        |      ✗      | $$f$$-independent |      ✗      |      ✓      |       ✗       |        ✓        |      ✗      |   ✗   |
| FANNG-MPC [66]          | 2025 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | $$\mathbb{F}_{p}$$ | A         | A      | A        |      ✗      |         ✗         | Distributed |      ✓      |       ✗       |        ✓        |      ✓      |   ✓   |
| Matchmaker [67]         | 2025 | $$\mathbb{Z}*{2^{\ell}},\ \mathbb{Z}*{2}$$ | ✗                  | SH        | ✗      | ✗        |      ✗      |         ✗         |     TTP     |      ✓      |       ✗       |        ✗        |      ✗      |   ✓   |
| Mosformer [68]          | 2025 | $$\mathbb{Z}_{2^{\ell}}$$                  | ✗                  | ✗         | A      | ✗        |      ✗      |  $$f$$-dependent  |      ✗      |      ✓      |       ✗       |        ✗        |      ✓      |   ✗   |


### References 
[1] Payman Mohassel, Yupeng Zhang. “SecureML: {A} System for Scalable Privacy-Preserving Machine Learning.” 2017 {IEEE} Symposium on Security and Privacy, {SP} 2017, San Jose,
                  CA, USA, May 22-26, 2017 2017. DOI/URL: https://doi.org/10.1109/SP.2017.12.

[2] Bita Darvish Rouhani, M. Sadegh Riazi, Farinaz Koushanfar. “Deepsecure: scalable provably-secure deep learning.” Proceedings of the 55th Annual Design Automation Conference, {DAC}
                  2018, San Francisco, CA, USA, June 24-29, 2018 2018. DOI/URL: https://doi.org/10.1145/3195970.3196023.

[3] Jian Liu, Mika Juuti, Yao Lu, N. Asokan. “Oblivious Neural Network Predictions via MiniONN Transformations.” Proceedings of the 2017 {ACM} {SIGSAC} Conference on Computer and
                  Communications Security, {CCS} 2017, Dallas, TX, USA, October 30 -
                  November 03, 2017 2017. DOI/URL: https://doi.org/10.1145/3133956.3134056.

[4] M. Sadegh Riazi, Christian Weinert, Oleksandr Tkachenko, Ebrahim M. Songhori, Thomas Schneider, Farinaz Koushanfar. “Chameleon: {A} Hybrid Secure Computation Framework for Machine Learning
                  Applications.” Proceedings of the 2018 on Asia Conference on Computer and Communications
                  Security, AsiaCCS 2018, Incheon, Republic of Korea, June 04-08, 2018 2018. DOI/URL: https://doi.org/10.1145/3196494.3196522.

[5] Chiraag Juvekar, Vinod Vaikuntanathan, Anantha P. Chandrakasan. “{GAZELLE:} {A} Low Latency Framework for Secure Neural Network Inference.” 27th {USENIX} Security Symposium, {USENIX} Security 2018, Baltimore,
                  MD, USA, August 15-17, 2018 2018. DOI/URL: https://www.usenix.org/conference/usenixsecurity18/presentation/juvekar.

[6] Payman Mohassel, Peter Rindal. “ABY\({}^{\mbox{3}}\): A Mixed Protocol Framework for Machine Learning.” Proceedings of the 2018 {ACM} {SIGSAC} Conference on Computer and
                  Communications Security, {CCS} 2018, Toronto, ON, Canada, October
                  15-19, 2018 2018. DOI/URL: https://doi.org/10.1145/3243734.3243760.

[7] Sameer Wagh, Divya Gupta, Nishanth Chandran. “SecureNN: 3-Party Secure Computation for Neural Network Training.” Proc. Priv. Enhancing Technol. 2019. DOI/URL: 
https://doi.org/10.2478/popets-2019-0035.

[8] Harsh Chaudhari, Ashish Choudhury, Arpita Patra, Ajith Suresh. “{ASTRA:} High Throughput 3PC over Rings with Application to Secure
                  Prediction.” {Proceedings of the 2019 {ACM} {SIGSAC .

[9] Nishant Kumar, Mayank Rathee, Nishanth Chandran, Divya Gupta, Aseem Rastogi, Rahul Sharma. “CrypTFlow: Secure TensorFlow Inference.” 2020 {IEEE} Symposium on Security and Privacy, {SP} 2020, San Francisco,
                  CA, USA, May 18-21, 2020 2020. DOI/URL: https://doi.org/10.1109/SP40000.2020.00092.

[10] Harsh Chaudhari, Rahul Rachuri, Ajith Suresh. “Trident: Efficient 4PC Framework for Privacy Preserving Machine Learning.” 27th Annual Network and Distributed System Security Symposium, {NDSS}
                  2020, San Diego, California, USA, February 23-26, 2020 2020. DOI/URL: https://www.ndss-symposium.org/ndss-paper/trident-efficient-4pc-framework-for-privacy-preserving-machine-learning/.

[11] Yi Li, Wei Xu. “PrivPy: General and Scalable Privacy-Preserving Data Mining.” Proceedings of the 25th {ACM} {SIGKDD} International Conference on
                  Knowledge Discovery {\&} Data Mining, {KDD} 2019, Anchorage, AK,
                  USA, August 4-8, 2019 2019. DOI/URL: https://doi.org/10.1145/3292500.3330920.

[12] Pratyush Mishra, Ryan Lehmkuhl, Akshayaram Srinivasan, Wenting Zheng, Raluca Ada Popa. “Delphi: {A} Cryptographic Inference Service for Neural Networks.” 29th {USENIX} Security Symposium, {USENIX} Security 2020, August 12-14,
                  2020 2020. DOI/URL: https://www.usenix.org/conference/usenixsecurity20/presentation/mishra.

[13] Deevashwer Rathee, Mayank Rathee, Nishant Kumar, Nishanth Chandran, Divya Gupta, Aseem Rastogi, Rahul Sharma. “CrypTFlow2: Practical 2-Party Secure Inference.” {CCS} '20: 2020 {ACM} {SIGSAC} Conference on Computer and Communications
                  Security, Virtual Event, USA, November 9-13, 2020 2020. DOI/URL: https://doi.org/10.1145/3372297.3417274.

[14] Liyan Shen, Xiaojun Chen, Jinqiao Shi, Ye Dong, Binxing Fang. “An Efficient 3-Party Framework for Privacy-Preserving Neural Network
                  Inference.” Computer Security - {ESORICS} 2020 - 25th European Symposium on Research
                  in Computer Security, {ESORICS} 2020, Guildford, UK, September 14-18,
                  2020, Proceedings, Part {I} 2020. DOI/URL: https://doi.org/10.1007/978-3-030-58951-6\_21.

[15] Sameer Wagh, Shruti Tople, Fabrice Benhamouda, Eyal Kushilevitz, Prateek Mittal, Tal Rabin. “Falcon: Honest-Majority Maliciously Secure Framework for Private Deep
                  Learning.” Proc. Priv. Enhancing Technol. 2021. DOI/URL: https://doi.org/10.2478/popets-2021-0011.

[16] Arpita Patra, Ajith Suresh. “BLAZE: Blazing Fast Privacy-Preserving Machine Learning.” 27th Annual Network and Distributed System Security Symposium, {NDSS}
                  2020, San Diego, California, USA, February 23-26, 2020 2020. DOI/URL: https://www.ndss-symposium.org/ndss-paper/blaze-blazing-fast-privacy-preserving-machine-learning/.

[17] Megha Byali, Harsh Chaudhari, Arpita Patra, Ajith Suresh. “FLASH: Fast and Robust Framework for Privacy-preserving Machine
                  Learning.” Proc. Priv. Enhancing Technol. 2020. DOI/URL: https://doi.org/10.2478/popets-2020-0036.

[18] Nishat Koti, Mahak Pancholi, Arpita Patra, Ajith Suresh. “{SWIFT:} Super-fast and Robust Privacy-Preserving Machine Learning.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/koti.

[19] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, Xun Yi. “[inline-graphic not available: see fulltext] : Towards Secure and
                  Lightweight Deep Learning as a Medical Diagnostic Service.” Computer Security - {ESORICS} 2021 - 26th European Symposium on Research
                  in Computer Security, Darmstadt, Germany, October 4-8, 2021, Proceedings,
                  Part {I} 2021. DOI/URL: https://doi.org/10.1007/978-3-030-88418-5\_25.

[20] Siam Umar Hussain, Mojan Javaheripi, Mohammad Samragh, Farinaz Koushanfar. “{COINN:} Crypto/ML Codesign for Oblivious Inference via Neural Networks.” {CCS} '21: 2021 {ACM} {SIGSAC} Conference on Computer and Communications
                  Security, Virtual Event, Republic of Korea, November 15 - 19, 2021 2021. DOI/URL: https://doi.org/10.1145/3460120.3484797.

[21] Ryan Lehmkuhl, Pratyush Mishra, Akshayaram Srinivasan, Raluca Ada Popa. “Muse: Secure Inference Resilient to Malicious Clients.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/lehmkuhl.

[22] Th{\'{e}}o Ryffel, Pierre Tholoniat, David Pointcheval, Francis R. Bach. “AriaNN: Low-Interaction Privacy-Preserving Deep Learning via Function
                  Secret Sharing.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.2478/POPETS-2022-0015.

[23] Deevashwer Rathee, Mayank Rathee, Rahul Kranti Kiran Goli, Divya Gupta, Rahul Sharma, Nishanth Chandran, Aseem Rastogi. “SiRnn: {A} Math Library for Secure {RNN} Inference.” 42nd {IEEE} Symposium on Security and Privacy, {SP} 2021, San Francisco,
                  CA, USA, 24-27 May 2021 2021. DOI/URL: https://doi.org/10.1109/SP40001.2021.00086.

[24] Arpita Patra, Thomas Schneider, Ajith Suresh, Hossein Yalame. “{ABY2.0:} Improved Mixed-Protocol Secure Two-Party Computation.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/patra.

[25] Anders P. K. Dalskov, Daniel Escudero, Marcel Keller. “Fantastic Four: Honest-Majority Four-Party Secure Computation With
                  Malicious Security.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/dalskov.

[26] Nishat Koti, Arpita Patra, Rahul Rachuri, Ajith Suresh. “Tetrad: Actively Secure 4PC for Secure Training and Inference.” 29th Annual Network and Distributed System Security Symposium, {NDSS}
                  2022, San Diego, California, USA, April 24-28, 2022 2022. DOI/URL: https://www.ndss-symposium.org/ndss-paper/auto-draft-202/.

[27] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, Xun Yi. “Securely Outsourcing Neural Network Inference to the Cloud With Lightweight
                  Techniques.” {IEEE} Trans. Dependable Secur. Comput. 2023. DOI/URL: https://doi.org/10.1109/TDSC.2022.3141391.

[28] Han Tian, Chaoliang Zeng, Zhenghang Ren, Di Chai, Junxue Zhang, Kai Chen, Qiang Yang. “Sphinx: Enabling Privacy-Preserving Online Learning over the Cloud.” 43rd {IEEE} Symposium on Security and Privacy, {SP} 2022, San Francisco,
                  CA, USA, May 22-26, 2022 2022. DOI/URL: https://doi.org/10.1109/SP46214.2022.9833648.

[29] Nishanth Chandran, Divya Gupta, Sai Lakshmi Bhavana Obbattu, Akash Shah. “{SIMC:} {ML} Inference Secure Against Malicious Clients at Semi-Honest
                  Cost.” 31st {USENIX} Security Symposium, {USENIX} Security 2022, Boston,
                  MA, USA, August 10-12, 2022 2022. DOI/URL: https://www.usenix.org/conference/usenixsecurity22/presentation/chandran.

[30] Zhicong Huang, Wen{-}jie Lu, Cheng Hong, Jiansheng Ding. “Cheetah: Lean and Fast Secure Two-Party Deep Neural Network Inference.” 31st {USENIX} Security Symposium, {USENIX} Security 2022, Boston,
                  MA, USA, August 10-12, 2022 2022. DOI/URL: https://www.usenix.org/conference/usenixsecurity22/presentation/huang-zhicong.

[31] Meng Hao, Hongwei Li, Hanxiao Chen, Pengzhi Xing, Guowen Xu, Tianwei Zhang. “Iron: Private Inference on Transformers.” Advances in Neural Information Processing Systems 35: Annual Conference
                  on Neural Information Processing Systems 2022, NeurIPS 2022, New Orleans,
                  LA, USA, November 28 - December 9, 2022 2022. DOI/URL: http://papers.nips.cc/paper\_files/paper/2022/hash/64e2449d74f84e5b1a5c96ba7b3d308e-Abstract-Conference.html.

[32] Sameer Wagh. “Pika: Secure Computation using Function Secret Sharing over Rings.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0113.

[33] Deevashwer Rathee, Anwesh Bhattacharya, Rahul Sharma, Divya Gupta, Nishanth Chandran, Aseem Rastogi. “SecFloat: Accurate Floating-Point meets Secure 2-Party Computation.” 43rd {IEEE} Symposium on Security and Privacy, {SP} 2022, San Francisco,
                  CA, USA, May 22-26, 2022 2022. DOI/URL: https://doi.org/10.1109/SP46214.2022.9833697.

[34] Kanav Gupta, Deepak Kumaraswamy, Nishanth Chandran, Divya Gupta. “{LLAMA:} {A} Low Latency Math Library for Secure Inference.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0109.

[35] Lushan Song, Jiaxuan Wang, Zhexuan Wang, Xinyu Tu, Guopeng Lin, Wenqiang Ruan, Haoqi Wu, Weili Han. “pMPL: {A} Robust Multi-Party Learning Framework with a Privileged
                  Party.” Proceedings of the 2022 {ACM} {SIGSAC} Conference on Computer and
                  Communications Security, {CCS} 2022, Los Angeles, CA, USA, November
                  7-11, 2022 2022. DOI/URL: https://doi.org/10.1145/3548606.3560697.

[36] Nuttapong Attrapadung, Koki Hamada, Dai Ikarashi, Ryo Kikuchi, Takahiro Matsuda, Ibuki Mishina, Hiraku Morita, Jacob C. N. Schuldt. “Adam in Private: Secure and Fast Training of Deep Neural Networks
                  with Adaptive Moment Estimation.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0131.

[37] Dacheng Li, Hongyi Wang, Rulin Shao, Han Guo, Eric P. Xing, Hao Zhang. “{MPCFORMER:} Fast, Performant and Provate Transformer Inference with
                  {MPC}.” The Eleventh International Conference on Learning Representations,
                  {ICLR} 2023, Kigali, Rwanda, May 1-5, 2023 2023. DOI/URL: https://openreview.net/pdf?id=CWmvjOEhgH-.

[38] Mengxin Zheng, Qian Lou, Lei Jiang. “Primer: Fast Private Transformer Inference on Encrypted Data.” 60th {ACM/IEEE} Design Automation Conference, {DAC} 2023, San Francisco,
                  CA, USA, July 9-13, 2023 2023. DOI/URL: https://doi.org/10.1109/DAC56929.2023.10247719.

[39] Meng Hao, Hongwei Li, Hanxiao Chen, Pengzhi Xing, Tianwei Zhang. “FastSecNet: An Efficient Cryptographic Framework for Private Neural
                  Network Inference.” {IEEE} Trans. Inf. Forensics Secur. 2023. DOI/URL: https://doi.org/10.1109/TIFS.2023.3262149.

[40] Deevashwer Rathee, Anwesh Bhattacharya, Divya Gupta, Rahul Sharma, Dawn Song. “Secure Floating-Point Training.” 32nd {USENIX} Security Symposium, {USENIX} Security 2023, Anaheim,
                  CA, USA, August 9-11, 2023 2023. DOI/URL: https://www.usenix.org/conference/usenixsecurity23/presentation/rathee.

[41] Neha Jawalkar, Kanav Gupta, Arkaprava Basu, Nishanth Chandran, Divya Gupta, Rahul Sharma. “Orca: FSS-based Secure Training and Inference with GPUs.” {IEEE} Symposium on Security and Privacy, {SP} 2024, San Francisco,
                  CA, USA, May 19-23, 2024 2024. DOI/URL: https://doi.org/10.1109/SP54263.2024.00063.

[42] Peng Yang, Zoe Lin Jiang, Shiqi Gao, Hongxiao Wang, Jun Zhou, Yangyiye Jin, Siu-Ming Yiu, Junbin Fang. “Communication-Efficient Secure Neural Network via Key-Reduced Distributed Comparison Function.” Provable and Practical Security: 18th International Conference, ProvSec 2024, Gold Coast, QLD, Australia, September 25–27, 2024, Proceedings, Part II 2025. DOI/URL: https://doi.org/10.1007/978-981-96-0957-4_8.

[43] Kanav Gupta, Neha Jawalkar, Ananta Mukherjee, Nishanth Chandran, Divya Gupta, Ashish Panwar, Rahul Sharma. “{SIGMA:} Secure {GPT} Inference with Function Secret Sharing.” Proc. Priv. Enhancing Technol. 2024. DOI/URL: https://doi.org/10.56553/POPETS-2024-0107.

[44] Qi Pang, Jinhao Zhu, Helen M{\"{o}}llering, Wenting Zheng, Thomas Schneider. “{BOLT:} Privacy-Preserving, Accurate and Efficient Inference for Transformers.” {IEEE} Symposium on Security and Privacy, {SP} 2024, San Francisco,
                  CA, USA, May 19-23, 2024 2024. DOI/URL: https://doi.org/10.1109/SP54263.2024.00130.

[45] Ye Dong, Xiaojun Chen, Weizhan Jing, Kaiyun Li, Weiping Wang. “Meteor: Improved Secure 3-Party Neural Network Inference with Reducing
                  Online Communication Costs.” Proceedings of the {ACM} Web Conference 2023, {WWW} 2023, Austin,
                  TX, USA, 30 April 2023 - 4 May 2023 2023. DOI/URL: https://doi.org/10.1145/3543507.3583272.

[46] Yoshimasa Akimoto, Kazuto Fukuchi, Youhei Akimoto, Jun Sakuma. “Privformer: Privacy-preserving Transformer with {MPC}.” 8th {IEEE} European Symposium on Security and Privacy, EuroS{\&}P
                  2023, Delft, Netherlands, July 3-7, 2023 2023. DOI/URL: https://doi.org/10.1109/EUROSP57164.2023.00031.

[47] Alessandro N. Baccarini, Marina Blanton, Chen Yuan. “Multi-Party Replicated Secret Sharing over a Ring with Applications
                  to Privacy-Preserving Machine Learning.” Proc. Priv. Enhancing Technol. 2023. DOI/URL: https://doi.org/10.56553/POPETS-2023-0035.

[48] Nishat Koti, Shravani Mahesh Patil, Arpita Patra, Ajith Suresh. “MPClan: Protocol Suite for Privacy-Conscious Computations.” J. Cryptol. 2023. DOI/URL: https://doi.org/10.1007/S00145-023-09469-Z.

[49] Tianxiang Dai, Li Duan, Yufan Jiang, Yong Li, Fei Mei, Yulian Sun. “Force: Making 4PC {\textgreater} 4 {\texttimes} {PC} in Privacy Preserving
                  Machine Learning on {GPU}.” {IACR} Cryptol. ePrint Arch. 2023. DOI/URL: https://eprint.iacr.org/2023/493.

[50] Caiqin Dong, Jian Weng, Jia{-}Nan Liu, Yue Zhang, Yao Tong, Anjia Yang, Yudan Cheng, Shun Hu. “Fusion: Efficient and Secure Inference Resilient to Malicious Servers.” 30th Annual Network and Distributed System Security Symposium, {NDSS}
                  2023, San Diego, California, USA, February 27 - March 3, 2023 2023. DOI/URL: https://www.ndss-symposium.org/ndss-paper/fusion-efficient-and-secure-inference-resilient-to-malicious-servers/.

[51] Zhengyi Li, Kang Yang, Jin Tan, Wen{-}jie Lu, Haoqi Wu, Xiao Wang, Yu Yu, Derun Zhao, Yancheng Zheng, Minyi Guo, Jingwen Leng. “Nimbus: Secure and Efficient Two-Party Inference for Transformers.” Advances in Neural Information Processing Systems 38: Annual Conference
                  on Neural Information Processing Systems 2024, NeurIPS 2024, Vancouver,
                  BC, Canada, December 10 - 15, 2024 2024. DOI/URL: http://papers.nips.cc/paper\_files/paper/2024/hash/264a9b3ce46abdf572dcfe0401141989-Abstract-Conference.html.

[52] Guowen Xu, Xingshuo Han, Tianwei Zhang, Shengmin Xu, Jianting Ning, Xinyi Huang, Hongwei Li, Robert H. Deng. “{SIMC} 2.0: Improved Secure {ML} Inference Against Malicious Clients.” {IEEE} Trans. Dependable Secur. Comput. 2024. DOI/URL: https://doi.org/10.1109/TDSC.2023.3288557.

[53] Xuanang Yang, Jing Chen, Yuqing Li, Kun He, Xiaojie Huang, Zikuan Jiang, Hao Bai, Ruiying Du. “Fregata: Fast Private Inference With Unified Secure Two-Party Protocols.” {IEEE} Trans. Inf. Forensics Secur. 2024. DOI/URL: https://doi.org/10.1109/TIFS.2024.3444327.

[54] Jinglong Luo, Yehong Zhang, Zhuo Zhang, Jiaqi Zhang, Xin Mu, Hui Wang, Yue Yu, Zenglin Xu. “SecFormer: Fast and Accurate Privacy-Preserving Inference for Transformer
                  Models via {SMPC}.” Findings of the Association for Computational Linguistics, {ACL} 2024,
                  Bangkok, Thailand and virtual meeting, August 11-16, 2024 2024. DOI/URL: https://doi.org/10.18653/V1/2024.FINDINGS-ACL.790.

[55] Siqi Liu, Zhusen Liu, Donglong Chen, Wangchen Dai, Lu Zhou, Zhe Liu, Ray C. C. Cheung, {\c{C}}etin Kaya Ko{\c{c}}. “MLFormer: a high performance {MPC} linear inference framework for
                  transformers.” J. Cryptogr. Eng. 2025. DOI/URL: https://doi.org/10.1007/S13389-024-00365-1.

[56] Christopher Harth{-}Kitzerow, Ajith Suresh, Yongqin Wang, Hossein Yalame, Georg Carle, Murali Annavaram. “High-Throughput Secure Multiparty Computation with an Honest Majority
                  in Various Network Settings.” Proc. Priv. Enhancing Technol. 2025. DOI/URL: https://doi.org/10.56553/POPETS-2025-0015.

[57] Andreas Br{\"{u}}ggemann, Oliver Schick, Thomas Schneider, Ajith Suresh, Hossein Yalame. “Don't Eject the Impostor: Fast Three-Party Computation With a
                  Known Cheater.” {IEEE} Symposium on Security and Privacy, {SP} 2024, San Francisco,
                  CA, USA, May 19-23, 2024 2024. DOI/URL: https://doi.org/10.1109/SP54263.2024.00164.

[58] Fengrun Liu, Xiang Xie, Yu Yu. “Scalable Multi-Party Computation Protocols for Machine Learning in
                  the Honest-Majority Setting.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/liu-fengrun.

[59] Boshi Yuan, Shixuan Yang, Yongxiang Zhang, Ning Ding, Dawu Gu, Shi{-}Feng Sun. “{MD-ML:} Super Fast Privacy-Preserving Machine Learning for Malicious
                  Security with a Dishonest Majority.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/yuan.

[60] Wen{-}jie Lu, Zhicong Huang, Zhen Gu, Jingyu Li, Jian Liu, Cheng Hong, Kui Ren, Tao Wei, Wenguang Chen. “BumbleBee: Secure Two-party Inference Framework for Large Transformers.” 32nd Annual Network and Distributed System Security Symposium, {NDSS}
                  2025, San Diego, California, USA, February 24-28, 2025 2025. DOI/URL: https://www.ndss-symposium.org/ndss-paper/bumblebee-secure-two-party-inference-framework-for-large-transformers/.

[61] Andes Y. L. Kei, Sherman S. M. Chow. “{SHAFT:} Secure, Handy, Accurate and Fast Transformer Inference.” 32nd Annual Network and Distributed System Security Symposium, {NDSS}
                  2025, San Diego, California, USA, February 24-28, 2025 2025. DOI/URL: https://www.ndss-symposium.org/ndss-paper/shaft-secure-handy-accurate-and-fast-transformer-inference/.

[62] Jun Feng, Yefan Wu, Hong Sun, Shunli Zhang, Debin Liu. “Panther: Practical Secure Two-Party Neural Network Inference.” {IEEE} Trans. Inf. Forensics Secur. 2025. DOI/URL: https://doi.org/10.1109/TIFS.2025.3526063.

[63] Hao Guo, Liqiang Peng, Haiyang Xue, Li Peng, Weiran Liu, Zhe Liu, Lei Hu. “Improved Secure Two-party Computation from a Geometric Perspective.” 34rth {USENIX} Security Symposium, {USENIX} Security 2025, Seattle,
                  WA, USA, August 13-15, 2025 2025. DOI/URL: https://www.usenix.org/conference/usenixsecurity25/presentation/guo-hao-improved.

[64] Kanav Gupta, Nishanth Chandran, Divya Gupta, Jonathan Katz, Rahul Sharma. “{SHARK:} Actively Secure Inference Using Function Secret Sharing.” {IEEE} Symposium on Security and Privacy, {SP} 2025, San Francisco,
                  CA, USA, May 12-15, 2025 2025. DOI/URL: https://doi.org/10.1109/SP61157.2025.00175.

[65] Yansong Zhang, Xiaojun Chen, Ye Dong, Qinghui Zhang, Rui Hou, Qiang Liu, Xudong Chen. “{MD-SONIC:} Maliciously-Secure Outsourcing Neural Network Inference
                  With Reduced Online Communication.” {IEEE} Trans. Inf. Forensics Secur. 2025. DOI/URL: https://doi.org/10.1109/TIFS.2025.3550834.

[66] Najwa Aaraj, Abdelrahaman Aly, Tim G{\"{u}}neysu, Chiara Marcolla, Johannes Mono, Rogerio Paludo, Iv{\'{a}}n Santos{-}Gonz{\'{a}}lez, Mireia Scholz, Eduardo Soria{-}Vazquez, Victor Sucasas, Ajith Suresh. “{FANNG-MPC:} Framework for Artificial Neural Networks and Generic
                  {MPC}.” {IACR} Trans. Cryptogr. Hardw. Embed. Syst. 2025. DOI/URL: https://doi.org/10.46586/TCHES.V2025.I1.1-36.

[67] Neha Jawalkar, Nishanth Chandran, Divya Gupta, Rahul Sharma, Arkaprava Basu. “Matchmaker: Fast Secure Inference across Deployment Scenarios.”  2025. DOI/URL: https://eprint.iacr.org/2025/424.

[68] Ke Cheng, Yuheng Xia, Anxiao Song, Jiaxuan Fu, Wenjie Qu,
Yulong Shen, and Jiaheng Zhang. Mosformer: Maliciously Secure
Three-Party Inference Framework for Large Transformers. IACR
Cryptol. ePrint Arch., 2025.

