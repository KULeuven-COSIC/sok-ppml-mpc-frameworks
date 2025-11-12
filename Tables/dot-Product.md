### Theoretical cost analysis in total bits for dot-product functionality. Superscript $\mathsf{Tr}$ denotes a cost for a protocol for dot-product with truncation. Notation and abbreviations are defined in Table 2.

|   N | Sec. | Protocol                            | Offline (bits)                            | Online (bits)                                 | Tech    |
| --: | :--: | :---------------------------------- | :---------------------------------------- | :-------------------------------------------- | :------ |
|   2 |  SH  | Chameleon [1]                       | $2\ell$                                   | $4n\ell$                                      | STP     |
|   2 |  SH  | SecureML [2]                        | $2n\ell(\kappa+\ell)$                     | $4n\ell$                                      | SS      |
|   2 |  SH  | Delphi [3]                          | $\mathcal{O}\big(n,\mathrm{Pai}\big)$    | $n\ell$                                       | LHE     |
|   2 |  SH  | Cheetah [4]                         | —                                         | $\mathcal{O}\big(n,\mathrm{BFV}\big)$        | FHE     |
|   2 |  SH  | MediSC [5]                          | $n\ell$                                   | $n\ell$                                       | STP     |
|   2 |  SH  | COINN [6]                           | $n\ell^{2}$                               | $n\ell$                                       | OT      |
|   2 |  SH  | SONIC [7]                           | $6n\ell$                                  | $4n\ell$                                      | STP     |
|   2 |  SH  | Sphinx [8]                          | $\mathrm{CKKS}$                           | $n\ell$                                       | FHE     |
|   2 |  SH  | AriaNN [9]                          | $6n\ell$                                  | $4n\ell$                                      | STP     |
|   2 |  SH  | ABY2.0 [10]                         | $2n\ell(\kappa+\ell)$                     | $2\ell$                                       | SS      |
|   2 |  SH  | SirNN [11]                          | —                                         | $\mathcal{O}(n\Lambda\ell)$                   | OT      |
|   2 |  SH  | pMPL [12]                           | $\mathcal{O}(n\ell)$                      | $6n\ell$                                      | SS      |
|   2 |  SH  | $\text{pMPL}^{\mathsf{Tr}}$ [12]           | $\mathcal{O}(n\ell\log\ell)$              | $6n\ell+\ell$                                 | SS      |
|   2 |  SH  | Iron [13]                           | —                                         | $\mathcal{O}\big(\sqrt{n},\mathrm{BFV}\big)$ | FHE     |
|   2 |  SH  | SecFloat [14]                       | —                                         | $\mathcal{O}\big(\Lambda n(\mu+\nu)\big)$    | SS      |
|   2 |  SH  | Llama [15]                          | $\mathcal{O}\big(n\Lambda(\mu+\nu)\big)$ | $4\ell+2\mu+2\nu$                             | STP     |
|   2 |  SH  | Primer [16]                         | $\mathcal{O}(\mathrm{BFV})$               | $\ell$                                        | FHE     |
|   2 |  SH  | FastSecNet [17]                     | $\ell$                                    | $2\ell$                                       | STP     |
|   2 |  SH  | Rathee et al. [18]                  | —                                         | $\mathcal{O}(\Lambda n\ell)$                  | SS      |
|   2 |  SH  | FssNN [19]                          | $\mathcal{O}(n\ell)$                      | $4n\ell$                                      | OT      |
|   2 |  SH  | Sigma [20]                          | $6n\ell$                                  | $4n\ell$                                      | STP     |
|   2 |  SH  | Bolt [21]                           | —                                         | $\mathcal{O}\big(n,\mathrm{BFV}\big)$        | FHE     |
|   2 |  SH  | CipherGPT [22]                      | $\mathcal{O}(\mathrm{BFV})$               | $n\ell$                                       | FHE, OT |
|   2 |  SH  | Nimbus [23]                         | —                                         | $\mathcal{O}(\mathrm{BFV})$                   | FHE     |
|   2 |  SH  | BumbleBee [24]                      | —                                         | $\mathcal{O}\big(n,\mathrm{BFV}\big)$        | FHE     |
|   3 |  SH  | ASTRA [25]                          | $\ell$                                    | $2\ell$                                       | SS      |
|   3 |  SH  | Falcon [26]                         | —                                         | $3\ell$                                       | SS      |
|   3 |  SH  | Meteor [27]                         | $3\ell$                                   | $3\ell$                                       | SS      |
|   3 |  SH  | SecureNN [28]                       | —                                         | $(8n+2)\ell$                                  | SS      |
|   3 |  SH  | Cryptflow [29]                      | —                                         | $(4n+2)\ell$                                  | SS      |
|   3 |  SH  | pMPL [12]                           | $\mathcal{O}(n\ell)$                      | $12n\ell$                                     | SS      |
|   3 |  SH  | $\text{pMPL}^{\mathsf{Tr}}$ [12]           | $\mathcal{O}(n\ell)$                      | $12n\ell+2\ell$                               | SS      |
|   3 |  SH  | AdamInPrivate [30]                  | —                                         | $3\ell$                                       | SS      |
|   3 |   —  | CECILIA [31]                        | $6n\ell$                                  | $4n\ell$                                      | Helper  |
|   3 |   A  | Boyle et al. [32]                   | —                                         | $3\ell$                                       | ZK      |
|   3 |   A  | $\text{ABY3}^{\mathsf{Tr}}$ [33]           | $\mathcal{O}(n\ell)$                      | $(9n+3)\ell$                                  | SS      |
|   3 |   A  | AdamInPrivate [30]                  | —                                         | $6n\ell$                                      | SS      |
|   3 |   F  | ASTRA [25]                          | $21n\ell$                                 | $(2n+2)\ell$                                  | SS      |
|   3 |   F  | BLAZE [34]                          | $3\ell$                                   | $3\ell$                                       | ZK      |
|   3 |   F  | $\text{BLAZE}^{\mathsf{Tr}}$ [34]          | $15\ell$                                  | $3\ell$                                       | ZK      |
|   3 |   R  | SWIFT [35]                          | $3\ell$                                   | $3\ell$                                       | ZK      |
|   3 |   R  | $\text{SWIFT}^{\mathsf{Tr}}$ [35]          | $15\ell$                                  | $3\ell$                                       | ZK      |
|   3 |   R  | Fantastic Four [36]                 | —                                         | $6(\ell+s)$                                   | ZK      |
|   3 |   R  | $\text{Fantastic Four}^{\mathsf{Tr}}$ [36] | $\mathcal{O}(\ell+s)$                     | $9\ell+6s$                                    | ZK      |
|   4 |  SH  | $\text{Force}^{\mathsf{Tr}}$ [39]          | —                                         | $4\ell$                                       | SS      |
|   4 |  SH  | $\text{PrivPy}^{\mathsf{Tr}}$ [40]         | —                                         | $8n\ell$                                      | SS      |
|   4 |   A  | FLASH [34]                          | $3\ell$                                   | $3\ell$                                       | SS      |
|   4 |   A  | $\text{FLASH}^{\mathsf{Tr}}$ [34]          | $10\ell$                                  | $3\ell$                                       | SS      |
|   4 |   F  | Gordon et al. [37]                  | $4\ell$                                   | $2\ell$                                       | SS      |
|   4 |   F  | Trident [10]                        | $3\ell$                                   | $3\ell$                                       | SS      |
|   4 |   F  | $\text{Trident}^{\mathsf{Tr}}$ [10]        | $6\ell$                                   | $3\ell$                                       | SS      |
|   4 |   F  | $\text{Tetrad}^{\mathsf{Tr}}$ [38]         | $2\ell$                                   | $3\ell$                                       | SS      |
|   4 |   R  | FLASH [34]                          | $6\ell$                                   | $6\ell$                                       | SS      |
|   4 |   R  | $\text{FLASH}^{\mathsf{Tr}}$ [34]          | $20\ell$                                  | $6\ell$                                       | SS      |
|   4 |   R  | SWIFT [35]                          | $3\ell$                                   | $3\ell$                                       | SS      |
|   4 |   R  | $\text{SWIFT}^{\mathsf{Tr}}$ [35]          | $4\ell$                                   | $3\ell$                                       | SS      |
|   4 |   R  | Fantastic Four [36]                 | —                                         | $6\ell$                                       | SS      |
|   4 |   R  | $\text{Fantastic Four}^{\mathsf{Tr}}$ [36] | $\ell$                                    | $9\ell$                                       | SS      |
|   4 |   R  | $\text{Fantastic Four}^{\mathsf{Tr}}$ [36] | $2\ell$                                   | $16\ell$                                      | SS      |
| $N$ |  SH  | MPClan [41]                         | $t\ell$                                   | $2t\ell$                                      | SS      |
| $N$ |  SH  | Baccarini et al. [42]               | —                                         | $tN\ell$                                      | SS      |
| $N$ |  SH  | Liu et al. [43]                     | $\dfrac{3N^{2}}{t+1},\ell$                | $2N\ell$                                      | SS      |
| $N$ |   A  | MPClan [41]                         | $3t\ell$                                  | $3t\ell$                                      | SS      |
| $N$ |   A  | MD-ML [44]                          | $\mathcal{O}\big(N^{2}(\ell+s)^{2}\big)$ | $N(\ell+s)$                                   | SS      |
| $N$ |   A  | MD-SONIC [45]                       | $\mathcal{O}\big(N^{2}(\ell+s)^{2}\big)$ | $N(\ell+s)$                                   | SS      |

### References 
[1] M. Sadegh Riazi, Christian Weinert, Oleksandr Tkachenko, Ebrahim M. Songhori, Thomas Schneider, Farinaz Koushanfar. “Chameleon: {A} Hybrid Secure Computation Framework for Machine Learning
                  Applications.” Proceedings of the 2018 on Asia Conference on Computer and Communications
                  Security, AsiaCCS 2018, Incheon, Republic of Korea, June 04-08, 2018 2018. DOI/URL: https://doi.org/10.1145/3196494.3196522.

[2] Payman Mohassel, Yupeng Zhang. “SecureML: {A} System for Scalable Privacy-Preserving Machine Learning.” 2017 {IEEE} Symposium on Security and Privacy, {SP} 2017, San Jose,
                  CA, USA, May 22-26, 2017 2017. DOI/URL: https://doi.org/10.1109/SP.2017.12.

[3] Pratyush Mishra, Ryan Lehmkuhl, Akshayaram Srinivasan, Wenting Zheng, Raluca Ada Popa. “Delphi: {A} Cryptographic Inference Service for Neural Networks.” 29th {USENIX} Security Symposium, {USENIX} Security 2020, August 12-14,
                  2020 2020. DOI/URL: https://www.usenix.org/conference/usenixsecurity20/presentation/mishra.

[4] Zhicong Huang, Wen{-}jie Lu, Cheng Hong, Jiansheng Ding. “Cheetah: Lean and Fast Secure Two-Party Deep Neural Network Inference.” 31st {USENIX} Security Symposium, {USENIX} Security 2022, Boston,
                  MA, USA, August 10-12, 2022 2022. DOI/URL: https://www.usenix.org/conference/usenixsecurity22/presentation/huang-zhicong.

[5] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, Xun Yi. “[inline-graphic not available: see fulltext] : Towards Secure and
                  Lightweight Deep Learning as a Medical Diagnostic Service.” Computer Security - {ESORICS} 2021 - 26th European Symposium on Research
                  in Computer Security, Darmstadt, Germany, October 4-8, 2021, Proceedings,
                  Part {I} 2021. DOI/URL: https://doi.org/10.1007/978-3-030-88418-5\_25.

[6] Siam Umar Hussain, Mojan Javaheripi, Mohammad Samragh, Farinaz Koushanfar. “{COINN:} Crypto/ML Codesign for Oblivious Inference via Neural Networks.” {CCS} '21: 2021 {ACM} {SIGSAC} Conference on Computer and Communications
                  Security, Virtual Event, Republic of Korea, November 15 - 19, 2021 2021. DOI/URL: https://doi.org/10.1145/3460120.3484797.

[7] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, Xun Yi. “Securely Outsourcing Neural Network Inference to the Cloud With Lightweight
                  Techniques.” {IEEE} Trans. Dependable Secur. Comput. 2023. DOI/URL: https://doi.org/10.1109/TDSC.2022.3141391.

[8] Han Tian, Chaoliang Zeng, Zhenghang Ren, Di Chai, Junxue Zhang, Kai Chen, Qiang Yang. “Sphinx: Enabling Privacy-Preserving Online Learning over the Cloud.” 43rd {IEEE} Symposium on Security and Privacy, {SP} 2022, San Francisco,
                  CA, USA, May 22-26, 2022 2022. DOI/URL: https://doi.org/10.1109/SP46214.2022.9833648.

[9] Th{\'{e}}o Ryffel, Pierre Tholoniat, David Pointcheval, Francis R. Bach. “AriaNN: Low-Interaction Privacy-Preserving Deep Learning via Function
                  Secret Sharing.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.2478/POPETS-2022-0015.

[10] Arpita Patra, Thomas Schneider, Ajith Suresh, Hossein Yalame. “{ABY2.0:} Improved Mixed-Protocol Secure Two-Party Computation.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/patra.

[11] Deevashwer Rathee, Mayank Rathee, Rahul Kranti Kiran Goli, Divya Gupta, Rahul Sharma, Nishanth Chandran, Aseem Rastogi. “SiRnn: {A} Math Library for Secure {RNN} Inference.” 42nd {IEEE} Symposium on Security and Privacy, {SP} 2021, San Francisco,
                  CA, USA, 24-27 May 2021 2021. DOI/URL: https://doi.org/10.1109/SP40001.2021.00086.

[12] Lushan Song, Jiaxuan Wang, Zhexuan Wang, Xinyu Tu, Guopeng Lin, Wenqiang Ruan, Haoqi Wu, Weili Han. “pMPL: {A} Robust Multi-Party Learning Framework with a Privileged
                  Party.” Proceedings of the 2022 {ACM} {SIGSAC} Conference on Computer and
                  Communications Security, {CCS} 2022, Los Angeles, CA, USA, November
                  7-11, 2022 2022. DOI/URL: https://doi.org/10.1145/3548606.3560697.

[13] Meng Hao, Hongwei Li, Hanxiao Chen, Pengzhi Xing, Guowen Xu, Tianwei Zhang. “Iron: Private Inference on Transformers.” Advances in Neural Information Processing Systems 35: Annual Conference
                  on Neural Information Processing Systems 2022, NeurIPS 2022, New Orleans,
                  LA, USA, November 28 - December 9, 2022 2022. DOI/URL: http://papers.nips.cc/paper\_files/paper/2022/hash/64e2449d74f84e5b1a5c96ba7b3d308e-Abstract-Conference.html.

[14] Deevashwer Rathee, Anwesh Bhattacharya, Rahul Sharma, Divya Gupta, Nishanth Chandran, Aseem Rastogi. “SecFloat: Accurate Floating-Point meets Secure 2-Party Computation.” 43rd {IEEE} Symposium on Security and Privacy, {SP} 2022, San Francisco,
                  CA, USA, May 22-26, 2022 2022. DOI/URL: https://doi.org/10.1109/SP46214.2022.9833697.

[15] Kanav Gupta, Deepak Kumaraswamy, Nishanth Chandran, Divya Gupta. “{LLAMA:} {A} Low Latency Math Library for Secure Inference.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0109.

[16] Mengxin Zheng, Qian Lou, Lei Jiang. “Primer: Fast Private Transformer Inference on Encrypted Data.” 60th {ACM/IEEE} Design Automation Conference, {DAC} 2023, San Francisco,
                  CA, USA, July 9-13, 2023 2023. DOI/URL: https://doi.org/10.1109/DAC56929.2023.10247719.

[17] Meng Hao, Hongwei Li, Hanxiao Chen, Pengzhi Xing, Tianwei Zhang. “FastSecNet: An Efficient Cryptographic Framework for Private Neural
                  Network Inference.” {IEEE} Trans. Inf. Forensics Secur. 2023. DOI/URL: https://doi.org/10.1109/TIFS.2023.3262149.

[18] Deevashwer Rathee, Anwesh Bhattacharya, Divya Gupta, Rahul Sharma, Dawn Song. “Secure Floating-Point Training.” 32nd {USENIX} Security Symposium, {USENIX} Security 2023, Anaheim,
                  CA, USA, August 9-11, 2023 2023. DOI/URL: https://www.usenix.org/conference/usenixsecurity23/presentation/rathee.

[19] Peng Yang, Zoe Lin Jiang, Shiqi Gao, Hongxiao Wang, Jun Zhou, Yangyiye Jin, Siu-Ming Yiu, Junbin Fang. “Communication-Efficient Secure Neural Network via Key-Reduced Distributed Comparison Function.” Provable and Practical Security: 18th International Conference, ProvSec 2024, Gold Coast, QLD, Australia, September 25–27, 2024, Proceedings, Part II 2025. DOI/URL: https://doi.org/10.1007/978-981-96-0957-4_8.

[20] Kanav Gupta, Neha Jawalkar, Ananta Mukherjee, Nishanth Chandran, Divya Gupta, Ashish Panwar, Rahul Sharma. “{SIGMA:} Secure {GPT} Inference with Function Secret Sharing.” Proc. Priv. Enhancing Technol. 2024. DOI/URL: https://doi.org/10.56553/POPETS-2024-0107.

[21] Qi Pang, Jinhao Zhu, Helen M{\"{o}}llering, Wenting Zheng, Thomas Schneider. “{BOLT:} Privacy-Preserving, Accurate and Efficient Inference for Transformers.” {IEEE} Symposium on Security and Privacy, {SP} 2024, San Francisco,
                  CA, USA, May 19-23, 2024 2024. DOI/URL: https://doi.org/10.1109/SP54263.2024.00130.

[22] Xiaoyang Hou, Jian Liu, Jingyu Li, Yuhan Li, Wen{-}jie Lu, Cheng Hong, Kui Ren. “CipherGPT: Secure Two-Party {GPT} Inference.” {IACR} Cryptol. ePrint Arch. 2023. DOI/URL: https://eprint.iacr.org/2023/1147.

[23] Zhengyi Li, Kang Yang, Jin Tan, Wen{-}jie Lu, Haoqi Wu, Xiao Wang, Yu Yu, Derun Zhao, Yancheng Zheng, Minyi Guo, Jingwen Leng. “Nimbus: Secure and Efficient Two-Party Inference for Transformers.” Advances in Neural Information Processing Systems 38: Annual Conference
                  on Neural Information Processing Systems 2024, NeurIPS 2024, Vancouver,
                  BC, Canada, December 10 - 15, 2024 2024. DOI/URL: http://papers.nips.cc/paper\_files/paper/2024/hash/264a9b3ce46abdf572dcfe0401141989-Abstract-Conference.html.

[24] Wen{-}jie Lu, Zhicong Huang, Zhen Gu, Jingyu Li, Jian Liu, Cheng Hong, Kui Ren, Tao Wei, Wenguang Chen. “BumbleBee: Secure Two-party Inference Framework for Large Transformers.” 32nd Annual Network and Distributed System Security Symposium, {NDSS}
                  2025, San Diego, California, USA, February 24-28, 2025 2025. DOI/URL: https://www.ndss-symposium.org/ndss-paper/bumblebee-secure-two-party-inference-framework-for-large-transformers/.

[25] Harsh Chaudhari, Ashish Choudhury, Arpita Patra, Ajith Suresh. “{ASTRA:} High Throughput 3PC over Rings with Application to Secure
                  Prediction.” {Proceedings of the 2019 {ACM} {SIGSAC .

[26] Sameer Wagh, Shruti Tople, Fabrice Benhamouda, Eyal Kushilevitz, Prateek Mittal, Tal Rabin. “Falcon: Honest-Majority Maliciously Secure Framework for Private Deep
                  Learning.” Proc. Priv. Enhancing Technol. 2021. DOI/URL: https://doi.org/10.2478/popets-2021-0011.

[27] Ye Dong, Xiaojun Chen, Weizhan Jing, Kaiyun Li, Weiping Wang. “Meteor: Improved Secure 3-Party Neural Network Inference with Reducing
                  Online Communication Costs.” Proceedings of the {ACM} Web Conference 2023, {WWW} 2023, Austin,
                  TX, USA, 30 April 2023 - 4 May 2023 2023. DOI/URL: https://doi.org/10.1145/3543507.3583272.

[28] Sameer Wagh, Divya Gupta, Nishanth Chandran. “SecureNN: 3-Party Secure Computation for Neural Network Training.” Proc. Priv. Enhancing Technol. 2019. DOI/URL: https://doi.org/10.2478/popets-2019-0035.

[29] Nishant Kumar, Mayank Rathee, Nishanth Chandran, Divya Gupta, Aseem Rastogi, Rahul Sharma. “CrypTFlow: Secure TensorFlow Inference.” 2020 {IEEE} Symposium on Security and Privacy, {SP} 2020, San Francisco,
                  CA, USA, May 18-21, 2020 2020. DOI/URL: https://doi.org/10.1109/SP40000.2020.00092.

[30] Nuttapong Attrapadung, Koki Hamada, Dai Ikarashi, Ryo Kikuchi, Takahiro Matsuda, Ibuki Mishina, Hiraku Morita, Jacob C. N. Schuldt. “Adam in Private: Secure and Fast Training of Deep Neural Networks
                  with Adaptive Moment Estimation.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0131.

[31] Ali Burak {\"{U}}nal, Mete Akg{\"{u}}n, Nico Pfeifer. “{CECILIA:} Comprehensive Secure Machine Learning Framework.” CoRR 2022. DOI/URL: https://arxiv.org/abs/2202.03023.

[32] Elette Boyle, Niv Gilboa, Yuval Ishai, Ariel Nof. “Practical Fully Secure Three-Party Computation via Sublinear Distributed
                  Zero-Knowledge Proofs.” Proceedings of the 2019 {ACM} {SIGSAC} Conference on Computer and
                  Communications Security, {CCS} 2019, London, UK, November 11-15, 2019 2019. DOI/URL: https://doi.org/10.1145/3319535.3363227.

[33] Payman Mohassel, Peter Rindal. “ABY\({}^{\mbox{3}}\): A Mixed Protocol Framework for Machine Learning.” Proceedings of the 2018 {ACM} {SIGSAC} Conference on Computer and
                  Communications Security, {CCS} 2018, Toronto, ON, Canada, October
                  15-19, 2018 2018. DOI/URL: https://doi.org/10.1145/3243734.3243760.

[34] Arpita Patra, Ajith Suresh. “BLAZE: Blazing Fast Privacy-Preserving Machine Learning.” 27th Annual Network and Distributed System Security Symposium, {NDSS}
                  2020, San Diego, California, USA, February 23-26, 2020 2020. DOI/URL: https://www.ndss-symposium.org/ndss-paper/blaze-blazing-fast-privacy-preserving-machine-learning/.

[35] Nishat Koti, Mahak Pancholi, Arpita Patra, Ajith Suresh. “{SWIFT:} Super-fast and Robust Privacy-Preserving Machine Learning.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/koti.

[36] Anders P. K. Dalskov, Daniel Escudero, Marcel Keller. “Fantastic Four: Honest-Majority Four-Party Secure Computation With
                  Malicious Security.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/dalskov.

[37] S. Dov Gordon, Samuel Ranellucci, Xiao Wang. “Secure Computation with Low Communication from Cross-Checking.” Advances in Cryptology - {ASIACRYPT} 2018 - 24th International Conference
                  on the Theory and Application of Cryptology and Information Security,
                  Brisbane, QLD, Australia, December 2-6, 2018, Proceedings, Part {III} 2018. DOI/URL: https://doi.org/10.1007/978-3-030-03332-3\_3.

[38] Nishat Koti, Arpita Patra, Rahul Rachuri, Ajith Suresh. “Tetrad: Actively Secure 4PC for Secure Training and Inference.” 29th Annual Network and Distributed System Security Symposium, {NDSS}
                  2022, San Diego, California, USA, April 24-28, 2022 2022. DOI/URL: https://www.ndss-symposium.org/ndss-paper/auto-draft-202/.

[39] Tianxiang Dai, Li Duan, Yufan Jiang, Yong Li, Fei Mei, Yulian Sun. “Force: Making 4PC {\textgreater} 4 {\texttimes} {PC} in Privacy Preserving
                  Machine Learning on {GPU}.” {IACR} Cryptol. ePrint Arch. 2023. DOI/URL: https://eprint.iacr.org/2023/493.

[40] Yi Li, Wei Xu. “PrivPy: General and Scalable Privacy-Preserving Data Mining.” Proceedings of the 25th {ACM} {SIGKDD} International Conference on
                  Knowledge Discovery {\&} Data Mining, {KDD} 2019, Anchorage, AK,
                  USA, August 4-8, 2019 2019. DOI/URL: https://doi.org/10.1145/3292500.3330920.

[41] Nishat Koti, Shravani Mahesh Patil, Arpita Patra, Ajith Suresh. “MPClan: Protocol Suite for Privacy-Conscious Computations.” J. Cryptol. 2023. DOI/URL: https://doi.org/10.1007/S00145-023-09469-Z.

[42] Alessandro N. Baccarini, Marina Blanton, Chen Yuan. “Multi-Party Replicated Secret Sharing over a Ring with Applications
                  to Privacy-Preserving Machine Learning.” Proc. Priv. Enhancing Technol. 2023. DOI/URL: https://doi.org/10.56553/POPETS-2023-0035.

[43] Fengrun Liu, Xiang Xie, Yu Yu. “Scalable Multi-Party Computation Protocols for Machine Learning in
                  the Honest-Majority Setting.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/liu-fengrun.

[44] Boshi Yuan, Shixuan Yang, Yongxiang Zhang, Ning Ding, Dawu Gu, Shi{-}Feng Sun. “{MD-ML:} Super Fast Privacy-Preserving Machine Learning for Malicious
                  Security with a Dishonest Majority.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/yuan.

[45] Yansong Zhang, Xiaojun Chen, Ye Dong, Qinghui Zhang, Rui Hou, Qiang Liu, Xudong Chen. “{MD-SONIC:} Maliciously-Secure Outsourcing Neural Network Inference
                  With Reduced Online Communication.” {IEEE} Trans. Inf. Forensics Secur. 2025. DOI/URL: https://doi.org/10.1109/TIFS.2025.3550834.