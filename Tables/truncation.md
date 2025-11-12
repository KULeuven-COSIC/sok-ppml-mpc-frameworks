### Theoretical cost analysis in total bits for truncation functionality. We depict the costs for truncation of (k) bits in a ring $(\mathbb{Z}_{\ell})$. SPDZ2k [1]-style “slack” $((s+\log s=\kappa))$. Notation and abbreviations are defined in Table 2. 

|  N |   Sec.  | Protocol              |           Offline Comm.          |           Online Comm.           |           Online Rounds           |     Result    | Tech. |
| -: | :-----: | :-------------------- | :------------------------------: | :------------------------------: | :-------------------------------: | :-----------: | :---: |
|  2 |    SH   | SecureML [2]          |                 —                |                 —                |                 —                 | Probabilistic |   SS  |
|  2 |    SH   | CryptFlow2 [3]        |                 —                |  $$\mathcal{O}(\Lambda ,\ell)$$  |  $$\lceil \log(\ell)\rceil + 1$$  |    Faithful   |   OT  |
|  2 |    SH   | Cheetah [4]           |                 —                |         $$16\ell + 11k$$         |    $$\lceil \log(\ell)\rceil$$    |    Faithful   |   OT  |
|  2 |    SH   | Cheetah [4]           |                 —                |            $$13\ell$$            |    $$\lceil \log(\ell)\rceil$$    |   Stochastic  |   OT  |
|  2 |    SH   | Zou et al. [5]        |                 —                |  $$\mathcal{O}(\Lambda ,\ell)$$  |  $$\lceil \log(\ell)\rceil + 1$$  |    Faithful   |   OT  |
|  2 |    SH   | SirNN [6]             |                 —                |  $$\mathcal{O}(\Lambda ,\ell)$$  |         $$\log \ell + 3$$         |    Faithful   |   OT  |
|  2 |    SH   | Orca [7]              | $$\mathcal{O}(\Lambda(\ell+k))$$ |        $$2(\ell - k + 1)$$       |                 3                 |   Stochastic  |  FSS  |
|  2 |    SH   | Shark [8]             | $$(\Lambda + \kappa)(\ell + k)$$ |         $$\ell + s + 2$$         |                 2                 |    Faithful   |  FSS  |
|  2 |    SH   | Guo et al. [9]        |                 —                |    $$\mathcal{O}(\Lambda,k)$$    |           $$\log k + 2$$          |    Faithful   |   OT  |
|  2 |    SH   | Guo et al. [9]        |                 —                |          $$\Lambda + k$$         |                 2                 |   Stochastic  |   OT  |
|  3 |    SH   | Dalskov et al. [10]   |          $$4\ell - 2k$$          |             $$4\ell$$            |                 2                 |   Stochastic  |   SS  |
|  3 |    SH   | ABY3 [11]             |                 —                |             $$\ell$$             |                 1                 | Probabilistic |   SS  |
|  3 |    SH   | AdamInPrivate [12]    |                 —                |           $$5\ell + 5$$          |                 4                 |   Stochastic  |   SS  |
|  3 |    A    | ABY3 [11]             |         $$20(2\ell - k)$$        |             $$3\ell$$            |                 1                 | Probabilistic |   SS  |
|  3 |    A    | MaSTer [13]           |                 —                |             $$3\ell$$            |                 1                 | Probabilistic |   SS  |
|  3 |    A    | AdamInPrivate [12]    |                 —                |    $$30\ell + 21\kappa + 15$$    |                 5                 |   Stochastic  |   SS  |
|  3 |    R    | SWIFT [14]            |            $$12\ell$$            |             $$\ell$$             |                 1                 | Probabilistic |   SS  |
|  3 |    R    | Fantastic Four [15]   |     $$76(\ell+s) + 54k + 12$$    |             $$3\ell$$            |                 1                 |   Stochastic  |   SS  |
|  4 |    A    | Flash [16]            |                 —                |             $$7\ell$$            |                 5                 | Probabilistic |   SS  |
|  4 |    F    | Trident [17]          |             $$3\ell$$            |             $$\ell$$             |                 1                 | Probabilistic |   SS  |
|  4 |    F    | Tetrad [18]           |             $$\ell$$             |             $$\ell$$             |                 1                 | Probabilistic |   SS  |
|  4 |    R    | Fantastic Four [15]   |             $$2\ell$$            |            $$16\ell$$            |                 1                 |   Stochastic  |   SS  |
|  4 |    R    | Fantastic Four [15]   |             $$\ell$$             |             $$3\ell$$            |                 1                 | Probabilistic |   SS  |
|  4 |    R    | Flash [16]            |                 —                |            $$14\ell$$            |                 5                 | Probabilistic |   SS  |
|  4 |    R    | SWIFT [14]            |             $$\ell$$             |             $$\ell$$             |                 1                 | Probabilistic |   SS  |
|  N | SH (HM) | Baccarini et al. [19] |        $$\mathcal{O}(N)$$        |         $$Nt(2\ell + 1)$$        |                 2                 |   Stochastic  |   SS  |
|  N | SH (HM) | Liu et al. [20]       |          $$3N\ell^{2}$$          |            $$2N\ell$$            |                 1                 |   Stochastic  |   SS  |
|  N |  A (DM) | Escudero et al. [21]  |  $$\mathcal{O}(t^{2}\log \ell)$$ | $$\mathcal{O}(Nt^{2}\log \ell)$$ | $$\mathcal{O}(\log t \log \ell)$$ |   Stochastic  |   SS  |
|  N |  A (DM) | MD-ML [22]            |  $$\mathcal{O}(t^{2}\log \ell)$$ |       $$N(\ell + \sigma)$$       |                 1                 | Probabilistic |   SS  |
|  N |  A (DM) | MD-SONIC [23]         |  $$\mathcal{O}(t^{2}\log \ell)$$ |       $$N(\ell + \sigma)$$       |                 1                 | Probabilistic |   SS  |

### References

[1] Ronald Cramer, Ivan Damg{\aa}rd, Daniel Escudero, Peter Scholl, Chaoping Xing. “SPD{\(\mathbb{Z}\)}\({}_{\mbox{2\({}^{\mbox{k}}\)}}\): Efficient {MPC}
                  mod 2\({}^{\mbox{k}}\) for Dishonest Majority.” Advances in Cryptology - {CRYPTO} 2018 - 38th Annual International
                  Cryptology Conference, Santa Barbara, CA, USA, August 19-23, 2018,
                  Proceedings, Part {II} 2018. DOI/URL: https://doi.org/10.1007/978-3-319-96881-0\_26.

[2] Payman Mohassel, Yupeng Zhang. “SecureML: {A} System for Scalable Privacy-Preserving Machine Learning.” 2017 {IEEE} Symposium on Security and Privacy, {SP} 2017, San Jose,
                  CA, USA, May 22-26, 2017 2017. DOI/URL: https://doi.org/10.1109/SP.2017.12.

[3] Deevashwer Rathee, Mayank Rathee, Nishant Kumar, Nishanth Chandran, Divya Gupta, Aseem Rastogi, Rahul Sharma. “CrypTFlow2: Practical 2-Party Secure Inference.” {CCS} '20: 2020 {ACM} {SIGSAC} Conference on Computer and Communications
                  Security, Virtual Event, USA, November 9-13, 2020 2020. DOI/URL: https://doi.org/10.1145/3372297.3417274.

[4] Zhicong Huang, Wen{-}jie Lu, Cheng Hong, Jiansheng Ding. “Cheetah: Lean and Fast Secure Two-Party Deep Neural Network Inference.” 31st {USENIX} Security Symposium, {USENIX} Security 2022, Boston,
                  MA, USA, August 10-12, 2022 2022. DOI/URL: https://www.usenix.org/conference/usenixsecurity22/presentation/huang-zhicong.

[5] Huan Zou, Yuting Xiao, Rui Zhang. “Semi-Honest 2-Party Faithful Truncation from Two-Bit Extraction.” {IACR} Cryptol. ePrint Arch. 2023. DOI/URL: https://eprint.iacr.org/2023/1159.

[6] Deevashwer Rathee, Mayank Rathee, Rahul Kranti Kiran Goli, Divya Gupta, Rahul Sharma, Nishanth Chandran, Aseem Rastogi. “SiRnn: {A} Math Library for Secure {RNN} Inference.” 42nd {IEEE} Symposium on Security and Privacy, {SP} 2021, San Francisco,
                  CA, USA, 24-27 May 2021 2021. DOI/URL: https://doi.org/10.1109/SP40001.2021.00086.

[7] Neha Jawalkar, Kanav Gupta, Arkaprava Basu, Nishanth Chandran, Divya Gupta, Rahul Sharma. “Orca: FSS-based Secure Training and Inference with GPUs.” {IEEE} Symposium on Security and Privacy, {SP} 2024, San Francisco,
                  CA, USA, May 19-23, 2024 2024. DOI/URL: https://doi.org/10.1109/SP54263.2024.00063.

[8] Kanav Gupta, Nishanth Chandran, Divya Gupta, Jonathan Katz, Rahul Sharma. “{SHARK:} Actively Secure Inference Using Function Secret Sharing.” {IEEE} Symposium on Security and Privacy, {SP} 2025, San Francisco,
                  CA, USA, May 12-15, 2025 2025. DOI/URL: https://doi.org/10.1109/SP61157.2025.00175.

[9] Hao Guo, Liqiang Peng, Haiyang Xue, Li Peng, Weiran Liu, Zhe Liu, Lei Hu. “Improved Secure Two-party Computation from a Geometric Perspective.” 34rth {USENIX} Security Symposium, {USENIX} Security 2025, Seattle,
                  WA, USA, August 13-15, 2025 2025. DOI/URL: https://www.usenix.org/conference/usenixsecurity25/presentation/guo-hao-improved.

[10] Anders P. K. Dalskov, Daniel Escudero, Marcel Keller. “Secure Evaluation of Quantized Neural Networks.” Proc. Priv. Enhancing Technol. 2020. DOI/URL: https://doi.org/10.2478/popets-2020-0077.

[11] Payman Mohassel, Peter Rindal. “ABY\({}^{\mbox{3}}\): A Mixed Protocol Framework for Machine Learning.” Proceedings of the 2018 {ACM} {SIGSAC} Conference on Computer and
                  Communications Security, {CCS} 2018, Toronto, ON, Canada, October
                  15-19, 2018 2018. DOI/URL: https://doi.org/10.1145/3243734.3243760.

[12] Nuttapong Attrapadung, Koki Hamada, Dai Ikarashi, Ryo Kikuchi, Takahiro Matsuda, Ibuki Mishina, Hiraku Morita, Jacob C. N. Schuldt. “Adam in Private: Secure and Fast Training of Deep Neural Networks
                  with Adaptive Moment Estimation.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0131.

[13] Martin Zbudila, Erik Pohle, Aysajan Abidin, Bart Preneel. “MaSTer: Maliciously Secure Truncation for Replicated Secret Sharing
                  Without Pre-processing.” Cryptology and Network Security - 23rd International Conference, {CANS}
                  2024, Cambridge, UK, September 24-27, 2024, Proceedings, Part {I} 2024. DOI/URL: https://doi.org/10.1007/978-981-97-8013-6\_3.

[14] Nishat Koti, Mahak Pancholi, Arpita Patra, Ajith Suresh. “{SWIFT:} Super-fast and Robust Privacy-Preserving Machine Learning.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/koti.

[15] Anders P. K. Dalskov, Daniel Escudero, Marcel Keller. “Fantastic Four: Honest-Majority Four-Party Secure Computation With
                  Malicious Security.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/dalskov.

[16] Megha Byali, Harsh Chaudhari, Arpita Patra, Ajith Suresh. “FLASH: Fast and Robust Framework for Privacy-preserving Machine
                  Learning.” Proc. Priv. Enhancing Technol. 2020. DOI/URL: https://doi.org/10.2478/popets-2020-0036.

[17] Harsh Chaudhari, Rahul Rachuri, Ajith Suresh. “Trident: Efficient 4PC Framework for Privacy Preserving Machine Learning.” 27th Annual Network and Distributed System Security Symposium, {NDSS}
                  2020, San Diego, California, USA, February 23-26, 2020 2020. DOI/URL: https://www.ndss-symposium.org/ndss-paper/trident-efficient-4pc-framework-for-privacy-preserving-machine-learning/.

[18] Nishat Koti, Arpita Patra, Rahul Rachuri, Ajith Suresh. “Tetrad: Actively Secure 4PC for Secure Training and Inference.” 29th Annual Network and Distributed System Security Symposium, {NDSS}
                  2022, San Diego, California, USA, April 24-28, 2022 2022. DOI/URL: https://www.ndss-symposium.org/ndss-paper/auto-draft-202/.

[19] Alessandro N. Baccarini, Marina Blanton, Chen Yuan. “Multi-Party Replicated Secret Sharing over a Ring with Applications
                  to Privacy-Preserving Machine Learning.” Proc. Priv. Enhancing Technol. 2023. DOI/URL: https://doi.org/10.56553/popets-2023-0035.

[20] Fengrun Liu, Xiang Xie, Yu Yu. “Scalable Multi-Party Computation Protocols for Machine Learning in
                  the Honest-Majority Setting.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/liu-fengrun.

[21] Daniel Escudero, Satrajit Ghosh, Marcel Keller, Rahul Rachuri, Peter Scholl. “Improved Primitives for {MPC} over Mixed Arithmetic-Binary Circuits.” Advances in Cryptology - {CRYPTO} 2020 - 40th Annual International
                  Cryptology Conference, {CRYPTO} 2020, Santa Barbara, CA, USA, August
                  17-21, 2020, Proceedings, Part {II} 2020. DOI/URL: https://doi.org/10.1007/978-3-030-56880-1\_29.

[22] Boshi Yuan, Shixuan Yang, Yongxiang Zhang, Ning Ding, Dawu Gu, Shi{-}Feng Sun. “{MD-ML:} Super Fast Privacy-Preserving Machine Learning for Malicious
                  Security with a Dishonest Majority.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/yuan.

[23] Yansong Zhang, Xiaojun Chen, Ye Dong, Qinghui Zhang, Rui Hou, Qiang Liu, Xudong Chen. “{MD-SONIC:} Maliciously-Secure Outsourcing Neural Network Inference
                  With Reduced Online Communication.” {IEEE} Trans. Inf. Forensics Secur. 2025. DOI/URL: https://doi.org/10.1109/TIFS.2025.3550834.