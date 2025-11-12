### Theoretical cost analysis in total bits for ReLU functionality. Notation and abbreviations are defined in Table 2.

|  N |   Sec.  | Protocol             |             Offline Comm.             |          Online Comm.          |        Online Rounds       | Tech. |
| -: | :-----: | :------------------- | :-----------------------------------: | :----------------------------: | :------------------------: | :---: |
|  2 |    SH   | SecureML [1]         |                   -                   |  $$\mathcal{O}(\Lambda,\ell)$$ |              2             |   SS  |
|  2 |    SH   | Cryptflow2 [2]       |                   -                   |    $$\Lambda,\ell + 18\ell$$   |      $$\log \ell + 2$$     |   OT  |
|  2 |    SH   | Delphi [3]           |    $$3\mathsf{CT}_{\mathsf{DGK}}$$    |            $$4\ell$$           |              1             |   HE  |
|  2 |    SH   | MediSC [4]           |         $$\mathcal{O}(\ell)$$         |      $$\mathcal{O}(\ell)$$     | $$\mathcal{O}(\log \ell)$$ |   SS  |
|  2 |    SH   | COINN [5]            |        $$\mathcal{O}(\ell^2)$$        |  $$\mathcal{O}(\Lambda,\ell)$$ |     $$\mathcal{O}(1)$$     |   GC  |
|  2 |    SH   | SONIC [6]            |                   -                   |         $$20\ell - 16$$        |      $$\log \ell + 2$$     |   SS  |
|  2 |    SH   | AriaNN [7]           |     $$\mathcal{O}(\Lambda,\ell)$$     |            $$3\ell$$           |              2             |  FSS  |
|  2 |    SH   | Boyle et al. [8]     |    $$(\ell + 1)(\Lambda + 2\ell)$$    |            $$2\ell$$           |              1             |  FSS  |
|  2 |    SH   | pMPL [9]             |                   -                   |   $$8\ell + 2\ell \log \ell$$  |      $$\log \ell + 4$$     |   SS  |
|  2 |    SH   | FastSecNet [10]      |       $$\ell(4\Lambda + \ell)$$       |            $$2\ell$$           |              1             |  FSS  |
|  2 |    SH   | Orca [11]            |  $$\ell(\Lambda + 7) + \Lambda + 1$$  |          $$2\ell + 2$$         |              2             |  FSS  |
|  2 |    SH   | FssNN [12]           |     $$\mathcal{O}(\ell \Lambda)$$     |          $$2\ell + 1$$         |            $$2$$           |  FSS  |
|  2 |    SH   | Shark [13]           | $$\mathcal{O}(\ell(\Lambda+\kappa))$$ |          $$\ell + s$$          |              2             |  FSS  |
|  3 |    SH   | SecureNN [14]        |                   -                   |    $$8\ell \log p + 24\ell$$   |           $$10$$           |   SS  |
|  3 |    SH   | Cryptflow [15]       |                   -                   |    $$6\ell \log p + 19\ell$$   |            $$7$$           |   SS  |
|  3 |    SH   | pMPL [9]             |                   -                   |  $$18\ell + 4\ell \log \ell$$  |      $$\log \ell + 5$$     |   SS  |
|  3 |    SH   | AdamInPrivate [16]   |                   -                   |     $$5\ell_x + 6\ell + 5$$    |        $$\ell + 5$$        |   SS  |
|  3 |    SH   | Bicoptor [17]        |                   -                   |    $$(\ell_x + 2)\ell + 2$$    |            $$2$$           |   SS  |
|  3 |    SH   | Bicoptor2 [18]       |                   -                   | $$(\ell_x + 1)^2 + 2\ell + 2$$ |            $$2$$           |   SS  |
|  3 |    SH   | Meteor [19]          |        $$\mathcal{O}(\ell^2)$$        |    $$6\ell + 3\ell \log p$$    |            $$2$$           |   SS  |
|  3 |    SH   | Falcon [20]          |         $$\mathcal{O}(\ell)$$         |    $$3\ell \log p + 3\ell$$    |      $$3 + \log \ell$$     |   SS  |
|  3 |    SH   | CECILIA [21]         |         $$\mathcal{O}(\ell)$$         |      $$\mathcal{O}(\ell)$$     |     $$\mathcal{O}(1)$$     |   SS  |
|  3 |    A    | Falcon [20]          |    $$\mathcal{O}(\ell \log \ell)$$    |    $$3\ell \log p + 18\ell$$   |      $$4 + \log \ell$$     |   SS  |
|  3 |    A    | ABY3 [22]            |               $$60\ell$$              |           $$45\ell$$           |      $$\log \ell + 3$$     |   SS  |
|  3 |    A    | AdamInPrivate [16]   |                   -                   | $$\mathcal{O}(\ell_x \kappa)$$ |        $$\ell + 7$$        |   SS  |
|  3 |    F    | BLAZE [23]           |        $$(5\Lambda + 14)\ell$$        |      $$(\Lambda + 7)\ell$$     |            $$4$$           |   SS  |
|  3 |    R    | SWIFT [24]           |             $$21\ell - 6$$            |         $$16\ell - 6$$         |      $$\log \ell + 3$$     |   SS  |
|  3 |    R    | Fantastic Four [25]  |            $$14(\ell + s)$$           |      $$114\ell + 6s + 1$$      |    $$\mathcal{O}(\ell)$$   |   SS  |
|  4 |    A    | FLASH [26]           |               $$6\ell$$               |           $$17\ell$$           |      $$\log \ell + 6$$     |   SS  |
|  4 |    F    | Trident [27]         |             $$8\ell + 2$$             |          $$8\ell + 2$$         |            $$4$$           |   SS  |
|  4 |    F    | Tetrad [28]          |             $$13\ell + 2$$            |          $$6\ell - 2$$         |      $$\log \ell + 2$$     |   SS  |
|  4 |    R    | FLASH [26]           |               $$12\ell$$              |           $$34\ell$$           |      $$\log \ell + 6$$     |   SS  |
|  4 |    R    | SWIFT [24]           |             $$13\ell - 2$$            |         $$10\ell - 6$$         |      $$\log \ell + 1$$     |   SS  |
|  4 |    R    | Fantastic Four [25]  |                   -                   |         $$44\ell + 1$$         |    $$\mathcal{O}(\ell)$$   |   SS  |
|  N | SH (HM) | Liu et al. [29]      |         $$N\ell(10\ell + 2)$$         |      $$N\ell(2\ell + 6)$$      |            $$3$$           |   SS  |
|  N |  A (DM) | Escudero et al. [30] |            $$7\ell \kappa$$           |         $$7\ell + 3s$$         | $$\mathcal{O}(\log \ell)$$ |   SS  |
|  N |  A (DM) | MD-ML [31]           |    $$\mathcal{O}(N^2(\ell + s)^2)$$   |     $$\mathcal{O}(\ell s)$$    |      $$\log \ell + 2$$     |   SS  |
|  N |  A (DM) | MD-SONIC [32]        |    $$\mathcal{O}(N^2(\ell + s)^2)$$   |  $$\mathcal{O}(N(\ell + s))$$  |   $$\log(\ell - 1) + 1$$   |   SS  |

### References

[1] Payman Mohassel, Yupeng Zhang. “SecureML: {A} System for Scalable Privacy-Preserving Machine Learning.” 2017 {IEEE} Symposium on Security and Privacy, {SP} 2017, San Jose,
                  CA, USA, May 22-26, 2017 2017. DOI/URL: https://doi.org/10.1109/SP.2017.12.

[2] Deevashwer Rathee, Mayank Rathee, Nishant Kumar, Nishanth Chandran, Divya Gupta, Aseem Rastogi, Rahul Sharma. “CrypTFlow2: Practical 2-Party Secure Inference.” {CCS} '20: 2020 {ACM} {SIGSAC} Conference on Computer and Communications
                  Security, Virtual Event, USA, November 9-13, 2020 2020. DOI/URL: https://doi.org/10.1145/3372297.3417274.

[3] Pratyush Mishra, Ryan Lehmkuhl, Akshayaram Srinivasan, Wenting Zheng, Raluca Ada Popa. “Delphi: {A} Cryptographic Inference Service for Neural Networks.” 29th {USENIX} Security Symposium, {USENIX} Security 2020, August 12-14,
                  2020 2020. DOI/URL: https://www.usenix.org/conference/usenixsecurity20/presentation/mishra.

[4] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, Xun Yi. “[inline-graphic not available: see fulltext] : Towards Secure and
                  Lightweight Deep Learning as a Medical Diagnostic Service.” Computer Security - {ESORICS} 2021 - 26th European Symposium on Research
                  in Computer Security, Darmstadt, Germany, October 4-8, 2021, Proceedings,
                  Part {I} 2021. DOI/URL: https://doi.org/10.1007/978-3-030-88418-5\_25.

[5] Siam Umar Hussain, Mojan Javaheripi, Mohammad Samragh, Farinaz Koushanfar. “{COINN:} Crypto/ML Codesign for Oblivious Inference via Neural Networks.” {CCS} '21: 2021 {ACM} {SIGSAC} Conference on Computer and Communications
                  Security, Virtual Event, Republic of Korea, November 15 - 19, 2021 2021. DOI/URL: https://doi.org/10.1145/3460120.3484797.

[6] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, Xun Yi. “Securely Outsourcing Neural Network Inference to the Cloud With Lightweight
                  Techniques.” {IEEE} Trans. Dependable Secur. Comput. 2023. DOI/URL: https://doi.org/10.1109/TDSC.2022.3141391.

[7] Th{\'{e}}o Ryffel, Pierre Tholoniat, David Pointcheval, Francis R. Bach. “AriaNN: Low-Interaction Privacy-Preserving Deep Learning via Function
                  Secret Sharing.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.2478/POPETS-2022-0015.

[8] Elette Boyle, Nishanth Chandran, Niv Gilboa, Divya Gupta, Yuval Ishai, Nishant Kumar, Mayank Rathee. “Function Secret Sharing for Mixed-Mode and Fixed-Point Secure Computation.” Advances in Cryptology - {EUROCRYPT} 2021 - 40th Annual International
                  Conference on the Theory and Applications of Cryptographic Techniques,
                  Zagreb, Croatia, October 17-21, 2021, Proceedings, Part {II} 2021. DOI/URL: https://doi.org/10.1007/978-3-030-77886-6\_30.

[9] Lushan Song, Jiaxuan Wang, Zhexuan Wang, Xinyu Tu, Guopeng Lin, Wenqiang Ruan, Haoqi Wu, Weili Han. “pMPL: {A} Robust Multi-Party Learning Framework with a Privileged
                  Party.” Proceedings of the 2022 {ACM} {SIGSAC} Conference on Computer and
                  Communications Security, {CCS} 2022, Los Angeles, CA, USA, November
                  7-11, 2022 2022. DOI/URL: https://doi.org/10.1145/3548606.3560697.

[10] Meng Hao, Hongwei Li, Hanxiao Chen, Pengzhi Xing, Tianwei Zhang. “FastSecNet: An Efficient Cryptographic Framework for Private Neural
                  Network Inference.” {IEEE} Trans. Inf. Forensics Secur. 2023. DOI/URL: https://doi.org/10.1109/TIFS.2023.3262149.

[11] Neha Jawalkar, Kanav Gupta, Arkaprava Basu, Nishanth Chandran, Divya Gupta, Rahul Sharma. “Orca: FSS-based Secure Training and Inference with GPUs.” {IEEE} Symposium on Security and Privacy, {SP} 2024, San Francisco,
                  CA, USA, May 19-23, 2024 2024. DOI/URL: https://doi.org/10.1109/SP54263.2024.00063.

[12] Peng Yang, Zoe Lin Jiang, Shiqi Gao, Hongxiao Wang, Jun Zhou, Yangyiye Jin, Siu-Ming Yiu, Junbin Fang. “Communication-Efficient Secure Neural Network via Key-Reduced Distributed Comparison Function.” Provable and Practical Security: 18th International Conference, ProvSec 2024, Gold Coast, QLD, Australia, September 25–27, 2024, Proceedings, Part II 2025. DOI/URL: https://doi.org/10.1007/978-981-96-0957-4_8.

[13] Kanav Gupta, Nishanth Chandran, Divya Gupta, Jonathan Katz, Rahul Sharma. “{SHARK:} Actively Secure Inference Using Function Secret Sharing.” {IEEE} Symposium on Security and Privacy, {SP} 2025, San Francisco,
                  CA, USA, May 12-15, 2025 2025. DOI/URL: https://doi.org/10.1109/SP61157.2025.00175.

[14] Sameer Wagh, Divya Gupta, Nishanth Chandran. “SecureNN: 3-Party Secure Computation for Neural Network Training.” Proc. Priv. Enhancing Technol. 2019. DOI/URL: https://doi.org/10.2478/popets-2019-0035.

[15] Nishant Kumar, Mayank Rathee, Nishanth Chandran, Divya Gupta, Aseem Rastogi, Rahul Sharma. “CrypTFlow: Secure TensorFlow Inference.” 2020 {IEEE} Symposium on Security and Privacy, {SP} 2020, San Francisco,
                  CA, USA, May 18-21, 2020 2020. DOI/URL: https://doi.org/10.1109/SP40000.2020.00092.

[16] Nuttapong Attrapadung, Koki Hamada, Dai Ikarashi, Ryo Kikuchi, Takahiro Matsuda, Ibuki Mishina, Hiraku Morita, Jacob C. N. Schuldt. “Adam in Private: Secure and Fast Training of Deep Neural Networks
                  with Adaptive Moment Estimation.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0131.

[17] Lijing Zhou, Ziyu Wang, Hongrui Cui, Qingrui Song, Yu Yu. “Bicoptor: Two-round Secure Three-party Non-linear Computation without
                  Preprocessing for Privacy-preserving Machine Learning.” 44th {IEEE} Symposium on Security and Privacy, {SP} 2023, San Francisco,
                  CA, USA, May 21-25, 2023 2023. DOI/URL: https://doi.org/10.1109/SP46215.2023.10179449.

[18] Lijing Zhou, Qingrui Song, Su Zhang, Ziyu Wang, Xianggui Wang, Yong Li. “Bicoptor 2.0: Addressing Challenges in Probabilistic Truncation for
                  Enhanced Privacy-Preserving Machine Learning.” CoRR 2023. DOI/URL: https://doi.org/10.48550/ARXIV.2309.04909.

[19] Ye Dong, Xiaojun Chen, Weizhan Jing, Kaiyun Li, Weiping Wang. “Meteor: Improved Secure 3-Party Neural Network Inference with Reducing
                  Online Communication Costs.” Proceedings of the {ACM} Web Conference 2023, {WWW} 2023, Austin,
                  TX, USA, 30 April 2023 - 4 May 2023 2023. DOI/URL: https://doi.org/10.1145/3543507.3583272.

[20] Sameer Wagh, Shruti Tople, Fabrice Benhamouda, Eyal Kushilevitz, Prateek Mittal, Tal Rabin. “Falcon: Honest-Majority Maliciously Secure Framework for Private Deep
                  Learning.” Proc. Priv. Enhancing Technol. 2021. DOI/URL: https://doi.org/10.2478/popets-2021-0011.

[21] Ali Burak {\"{U}}nal, Mete Akg{\"{u}}n, Nico Pfeifer. “{CECILIA:} Comprehensive Secure Machine Learning Framework.” CoRR 2022. DOI/URL: https://arxiv.org/abs/2202.03023.

[22] Arpita Patra, Ajith Suresh. “BLAZE: Blazing Fast Privacy-Preserving Machine Learning.” 27th Annual Network and Distributed System Security Symposium, {NDSS}
                  2020, San Diego, California, USA, February 23-26, 2020 2020. DOI/URL: https://www.ndss-symposium.org/ndss-paper/blaze-blazing-fast-privacy-preserving-machine-learning/.

[23] Nishat Koti, Mahak Pancholi, Arpita Patra, Ajith Suresh. “{SWIFT:} Super-fast and Robust Privacy-Preserving Machine Learning.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/koti.

[24] Anders P. K. Dalskov, Daniel Escudero, Marcel Keller. “Fantastic Four: Honest-Majority Four-Party Secure Computation With
                  Malicious Security.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/dalskov.

[25] Megha Byali, Harsh Chaudhari, Arpita Patra, Ajith Suresh. “FLASH: Fast and Robust Framework for Privacy-preserving Machine
                  Learning.” Proc. Priv. Enhancing Technol. 2020. DOI/URL: https://doi.org/10.2478/popets-2020-0036.

[26] Harsh Chaudhari, Rahul Rachuri, Ajith Suresh. “Trident: Efficient 4PC Framework for Privacy Preserving Machine Learning.” 27th Annual Network and Distributed System Security Symposium, {NDSS}
                  2020, San Diego, California, USA, February 23-26, 2020 2020. DOI/URL: https://www.ndss-symposium.org/ndss-paper/trident-efficient-4pc-framework-for-privacy-preserving-machine-learning/.

[27] Nishat Koti, Arpita Patra, Rahul Rachuri, Ajith Suresh. “Tetrad: Actively Secure 4PC for Secure Training and Inference.” 29th Annual Network and Distributed System Security Symposium, {NDSS}
                  2022, San Diego, California, USA, April 24-28, 2022 2022. DOI/URL: https://www.ndss-symposium.org/ndss-paper/auto-draft-202/.

[28] Payman Mohassel, Peter Rindal. “ABY\({}^{\mbox{3}}\): A Mixed Protocol Framework for Machine Learning.” Proceedings of the 2018 {ACM} {SIGSAC} Conference on Computer and
                  Communications Security, {CCS} 2018, Toronto, ON, Canada, October
                  15-19, 2018 2018. DOI/URL: https://doi.org/10.1145/3243734.3243760.

[29] Fengrun Liu, Xiang Xie, Yu Yu. “Scalable Multi-Party Computation Protocols for Machine Learning in
                  the Honest-Majority Setting.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/liu-fengrun.

[30] Daniel Escudero, Satrajit Ghosh, Marcel Keller, Rahul Rachuri, Peter Scholl. “Improved Primitives for {MPC} over Mixed Arithmetic-Binary Circuits.” Advances in Cryptology - {CRYPTO} 2020 - 40th Annual International
                  Cryptology Conference, {CRYPTO} 2020, Santa Barbara, CA, USA, August
                  17-21, 2020, Proceedings, Part {II} 2020. DOI/URL: https://doi.org/10.1007/978-3-030-56880-1\_29.

[31] Boshi Yuan, Shixuan Yang, Yongxiang Zhang, Ning Ding, Dawu Gu, Shi{-}Feng Sun. “{MD-ML:} Super Fast Privacy-Preserving Machine Learning for Malicious
                  Security with a Dishonest Majority.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/yuan.

[32] Yansong Zhang, Xiaojun Chen, Ye Dong, Qinghui Zhang, Rui Hou, Qiang Liu, Xudong Chen. “{MD-SONIC:} Maliciously-Secure Outsourcing Neural Network Inference
                  With Reduced Online Communication.” {IEEE} Trans. Inf. Forensics Secur. 2025. DOI/URL: https://doi.org/10.1109/TIFS.2025.3550834.
