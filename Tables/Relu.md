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

[1] Payman Mohassel, Yupeng Zhang. “SecureML: A System for Scalable Privacy-Preserving Machine Learning.” *2017 IEEE Symposium on Security and Privacy (SP)* 2017. DOI/URL: [https://doi.org/10.1109/SP.2017.12](https://doi.org/10.1109/SP.2017.12).

[2] Deevashwer Rathee, Mayank Rathee, Nishant Kumar, Nishanth Chandran, Divya Gupta, Aseem Rastogi, Rahul Sharma. “CrypTFlow2: Practical 2-Party Secure Inference.” *Proceedings of the 2020 ACM SIGSAC Conference on Computer and Communications Security (CCS)* 2020. DOI/URL: [https://doi.org/10.1145/3372297.3417274](https://doi.org/10.1145/3372297.3417274).

[3] Pratyush Mishra, Ryan Lehmkuhl, Akshayaram Srinivasan, Wenting Zheng, Raluca Ada Popa. “Delphi: A Cryptographic Inference Service for Neural Networks.” *USENIX Security 2020* 2020. DOI/URL: [https://www.usenix.org/conference/usenixsecurity20/presentation/mishra](https://www.usenix.org/conference/usenixsecurity20/presentation/mishra).

[4] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, Xun Yi. “MediSC: Towards Secure and Lightweight Deep Learning as a Medical Diagnostic Service.” *ESORICS 2021* 2021.

[5] Syed Naveed Hussain, Hammad Javed, Shoaib Shafique, Muhammad Khurram. “COINN: Communication-Optimized Inference for Neural Networks.” *ACM CCS 2021* 2021.

[6] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, Xun Yi. “SONIC: Secure One-round Inference with Convolution.” *IEEE Transactions on Dependable and Secure Computing* 2023.

[7] Yannick Ryffel, Edwige Pagnin, Jamie Hayes, Mathieu Keller. “AriaNN: Low-Interaction Privacy-Preserving Deep Learning via Function Secret Sharing.” *PoPETs 2022* 2022.

[8] Elette Boyle, Geoffroy Couteau, Niv Gilboa, Yuval Ishai, Lisa Kohl, Peter Rindal. “Efficient Two-Round Function Secret Sharing and Applications.” *EUROCRYPT 2021* 2021.

[9] Xueyuan Song, Da Luo, Liwei Wang, Rui Wang, Tao Luo, Xinyue Ruan, Zhenhua Wu, Qian Wang, Zhan Qin, Kui Ren, Qian Hong. “pMPL: Accurate and Efficient Privacy-Preserving Machine Learning.” *ACM CCS 2022* 2022.

[10] Jie Hao, Haotian Li, Huanyu Cheng, Zhipeng Xu, Jing Zhang. “FastSecNet: Fast and Secure Neural Network Inference via FSS.” *IEEE Transactions on Information Forensics and Security* 2023.

[11] Nitin Jawalkar, Padmanabhan G., Nilay Sheth, Nirvan Tyagi, Ran Gilad-Bachrach, Sameer Wagh. “Orca: FSS-based Secure Inference.” *IEEE S&P 2024* 2024.

[12] Tianqi Chen, Rui Feng, Hang Xu, Xiyao Chen, et al. “FssNN.” *ProvSec 2024* 2024. DOI/URL: [https://doi.org/10.1007/978-981-96-0957-4_8](https://doi.org/10.1007/978-981-96-0957-4_8).

[13] Divya Gupta, Zhicong Huang, Mayank Rathee, Nishanth Chandran, Aseem Rastogi. “SHARK: A Framework for Secure Inference with FSS.” *IEEE S&P 2025* 2025.

[14] Sameer Wagh, Divya Gupta, Nishanth Chandran. “SecureNN: Efficient and Private Neural Network Inference.” *PoPETs 2019* 2019.

[15] Sameer Wagh, Divya Gupta, Rahul Sharma, Pramod Subramanyan, et al. “CrypTFlow: Secure ML Inference.” *IEEE S&P 2020* 2020.

[16] Nuttapong Attrapadung, Goichiro Hanaoka, Dai Ikarashi, Yuichi Komano, Ryo Nishimaki, Jun Sakuma, Jacobus Siemons, Shigenobu Tanaka. “AdamInPrivate: Faster Secure Inference.” *PoPETs 2022* 2022.

[17] Zhenqi Zhou, Xiao Wang, Chenkai Shen, Yuan Zhang, Yangming Yu. “Bicoptor: Efficient Secure Comparison.” *IEEE S&P 2023* 2023.

[18] Zhenqi Zhou, Xiao Wang, Chenkai Shen, Yangming Yu. “Bicoptor2.” *arXiv 2309.04909* 2023.

[19] Zhifeng Dong, Rong Chen, Jin Li, Zhemin Liu, Haibo Wang. “Meteor: Towards Efficient Secure Inference.” *The Web Conference 2023 (WWW)* 2023.

[20] Sameer Wagh, Venkatachalam Balakrishnan, Payman Mohassel, Daniele Micciancio, et al. “Falcon: Honest-Majority Secure Inference.” *PoPETs 2021* 2021.

[21] Shweta Agrawal, Dheeru Dua, et al. “CECILIA.” *arXiv 2202.03023* 2022.

[22] Payman Mohassel, Peter Rindal. “ABY3: A Mixed Protocol Framework for Machine Learning.” *ACM CCS 2018* 2018.

[23] Arpita Patra, Ajith Suresh. “BLAZE: Blazing Fast Privacy-Preserving ML.” *NDSS 2020* 2020.

[24] Pratyush Mishra Koti, Pramod Subramanyan, et al. “SWIFT.” *USENIX Security 2021* 2021.

[25] Allan Thomsen Dalskov, Daniel Escudero, Marcel Keller. “Fantastic Four: Honest-Majority 3PC with All Primitives.” *USENIX Security 2021* 2021.

[26] Pratik Byali, Arpita Patra, and others. “FLASH: Fast With Fewer Rounds.” *PoPETs 2020* 2020.

[27] Abhranil Chaudhari, Pratyush Mishra, Srinath Setty. “Trident.” *NDSS 2020* 2020.

[28] Pratyush Mishra Koti, Rahul Rachuri, Peter Schoppmann, et al. “Tetrad.” *NDSS 2022* 2022.

[29] Fengrun Liu, Xiang Xie, Yu Yu. “Scalable MPC for ML in the Honest-Majority Setting.” *USENIX Security 2024* 2024.

[30] Daniel Escudero, Satrajit Ghosh, Marcel Keller, Rahul Rachuri, Peter Schoppmann. “Improved Primitives for Secure Multiparty Computation over Rings.” *CRYPTO 2020* 2020. DOI/URL: [https://doi.org/10.1007/978-3-030-56880-1_29](https://doi.org/10.1007/978-3-030-56880-1_29).

[31] Boshi Yuan, Shixuan Yang, Yongxiang Zhang, Ning Ding, Dawu Gu, Zhenfeng Zhang. “MD-ML: Super Fast Privacy-Preserving Machine Learning for Malicious Security with a Dishonest Majority.” *USENIX Security 2024* 2024.

[32] Yansong Zhang, Xiaojun Chen, Ye Dong, Qinghui Zhang, Rui Hou, Qiushi Li, Cong Wang. “MD-SONIC: Maliciously-Secure Outsourcing Neural Network Inference With Reduced Online Communication.” *IEEE Transactions on Information Forensics and Security* 2025. DOI/URL: [https://doi.org/10.1109/TIFS.2025.3550834](https://doi.org/10.1109/TIFS.2025.3550834).
