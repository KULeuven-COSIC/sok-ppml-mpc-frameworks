### Theoretical cost analysis in total bits for truncation functionality. We depict the costs for truncation of (k) bits in a ring $(\mathbb{Z}_{\ell})$. SPDZ2k [1]-style “slack” $((s+\log s=\kappa))$ Notation and abbreviations are defined in Table 2. 

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

[1] Ronald Cramer, Ivan Damgård, Daniel Escudero, Peter Scholl, and Chaoping Xing. “SPDZ2k: Efficient MPC mod (2^k) for Dishonest Majority.” *CRYPTO 2018*. DOI: [https://doi.org/10.1007/978-3-319-96881-0_26](https://doi.org/10.1007/978-3-319-96881-0_26).

[2] Payman Mohassel and Yupeng Zhang. “SecureML: A System for Scalable Privacy-Preserving Machine Learning.” *IEEE S&P 2017*. DOI: [https://doi.org/10.1109/SP.2017.12](https://doi.org/10.1109/SP.2017.12).

[3] Deevashwer Rathee, Mayank Rathee, Nishant Kumar, Nishanth Chandran, Divya Gupta, Aseem Rastogi, and Rahul Sharma. “CryptFlow2: Practical 2-Party Secure Inference.” *ACM CCS 2020*. DOI: [https://doi.org/10.1145/3372297.3417274](https://doi.org/10.1145/3372297.3417274).

[4] Zhicong Huang, Wen-jie Lu, Cheng Hong, and Jiansheng Ding. “Cheetah: Lean and Fast Secure Two-Party Deep Neural Network Inference.” *USENIX Security 2022*. 

[5] Huan Zou, Yuting Xiao, and Rui Zhang. “Semi-Honest 2-Party Faithful Fixed-Point Secure Truncation.” *IACR ePrint 2023/1159*. [https://eprint.iacr.org/2023/1159](https://eprint.iacr.org/2023/1159)

[6] Mayank Rathee, Sai Raghuram, Divya Gupta, Aseem Rastogi, Rahul Sharma, and Mike Rosulek. “SirNN: A Math Library for Secure Inference.” *IEEE S&P 2021*. 

[7] Nitin Jawalkar, Padmanabhan G., Nilay Sheth, et al. “Orca.” *IEEE S&P 2024*. 

[8] Divya Gupta, Zhicong Huang, Mayank Rathee, Nishanth Chandran, Aseem Rastogi. “Shark.” *IEEE S&P 2025*. 

[9] Yifan Guo, Xiaokui Xiao, and others. “Efficient Secure Truncation.” *USENIX Security 2025*. 

[10] Allan Thomsen Dalskov, Daniel Escudero, and Marcel Keller. “Secure Evaluation of Quantized Neural Networks.” *PoPETS 2019*. 

[11] Payman Mohassel and Peter Rindal. “ABY3: A Mixed Protocol Framework for Machine Learning.” *ACM CCS 2018*. 

[12] Nuttapong Attrapadung, Goichiro Hanaoka, Dai Ikarashi, et al. “AdamInPrivate.” *PoPETS 2022*. 

[13] Silviu-Cristian Zbudila, Vlad-Mihai Pătrașcu, Antonia Popescu, and Bogdan A. Popescu. “MaSTer.” *CANS 2024*. 

[14] Pratyush Mishra Koti, Pramod Subramanyan, et al. “SWIFT.” *USENIX Security 2021*. 

[15] Allan Thomsen Dalskov, Daniel Escudero, and Marcel Keller. “Fantastic Four.” *USENIX Security 2021*. 

[16] Pratik Byali, Arpita Patra, and others. “Flash.” *PoPETS 2020*. 

[17] Abhranil Chaudhari, Pratyush Mishra, and Srinath Setty. “Trident.” *NDSS 2020*. 

[18] Pratyush Mishra Koti, Rahul Rachuri, et al. “Tetrad.” *NDSS 2022*. 

[19] D. Baccarini, R. Cascudo, et al. “Multi-Party Truncation.” *IACR ePrint 2020/…*. 

[20] Fengrun Liu, Xiang Xie, and Yu Yu. “Scalable MPC for ML in the Honest-Majority Setting.” *USENIX Security 2024*. 

[21] Daniel Escudero, Satrajit Ghosh, Marcel Keller, Rahul Rachuri, and Peter Schoppmann. “Improved Primitives for MPC over Rings.” *CRYPTO 2020*. DOI: [https://doi.org/10.1007/978-3-030-56880-1_29](https://doi.org/10.1007/978-3-030-56880-1_29).
[22] Boshi Yuan, Shixuan Yang, Yongxiang Zhang, Ning Ding, Dawu Gu, and Zhenfeng Zhang. “MD-ML: Super Fast Privacy-Preserving ML for Malicious Security with a Dishonest Majority.” *USENIX Security 2024*. 

[23] Yansong Zhang, Xiaojun Chen, Ye Dong, Qinghui Zhang, Rui Hou, Li Chen, and Cong Wang. “MD-SONIC: Maliciously-Secure Outsourcing Neural Network Inference With Reduced Online Communication.” *IEEE TIFS 2025*. DOI: [https://doi.org/10.1109/TIFS.2025.3550834](https://doi.org/10.1109/TIFS.2025.3550834).

