### High-level protocol approach analysis to the normalization functionality. (✓) indicates a method is used; (✗) indicates it is not. Abbreviations are defined in Table 2.

|  N | Sec. | Protocol           | Iterative | LUT | Piecewise Pol. | Exact | Tech. |
| -: | :--: | :----------------- | :-------: | :-: | :------------: | :---: | :---: |
|  2 |  SH  | DeepSecure [1]     |     ✗     |  ✗  |        ✗       |   ✓   |   GC  |
|  2 |  SH  | SirNN [2]          |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  2 |  SH  | Llama [3]          |     ✗     |  ✗  |        ✓       |   ✗   |  FSS  |
|  2 |  SH  | AriaNN [4]         |     ✓     |  ✗  |        ✗       |   ✗   |  FSS  |
|  2 |  SH  | Sigma [5]          |     ✗     |  ✓  |        ✗       |   ✗   |  FSS  |
|  2 |  SH  | SecFormer [6]      |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  2 |   A  | Pika [7]           |     ✗     |  ✓  |        ✗       |   ✗   |  FSS  |
|  3 |  SH  | PrivFormer [8]     |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  3 |  SH  | SecureNN [9]       |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  3 |   A  | Falcon [10]        |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  3 |   A  | AdamInPrivate [11] |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  4 |  SH  | PrivPy [12]        |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  4 |   F  | Trident [13]       |     ✗     |  ✗  |        ✗       |   ✓   |   GC  |
|  4 |   F  | Tetrad [14]        |     ✗     |  ✗  |        ✗       |   ✓   |   GC  |

### References 
[1] Bita Darvish Rouhani, M. Sadegh Riazi, Farinaz Koushanfar. “Deepsecure: scalable provably-secure deep learning.” Proceedings of the 55th Annual Design Automation Conference, {DAC}
                  2018, San Francisco, CA, USA, June 24-29, 2018 2018. DOI/URL: https://doi.org/10.1145/3195970.3196023.

[2] Deevashwer Rathee, Mayank Rathee, Rahul Kranti Kiran Goli, Divya Gupta, Rahul Sharma, Nishanth Chandran, Aseem Rastogi. “SiRnn: {A} Math Library for Secure {RNN} Inference.” 42nd {IEEE} Symposium on Security and Privacy, {SP} 2021, San Francisco,
                  CA, USA, 24-27 May 2021 2021. DOI/URL: https://doi.org/10.1109/SP40001.2021.00086.

[3] Kanav Gupta, Deepak Kumaraswamy, Nishanth Chandran, Divya Gupta. “{LLAMA:} {A} Low Latency Math Library for Secure Inference.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0109.

[4] Th{\'{e}}o Ryffel, Pierre Tholoniat, David Pointcheval, Francis R. Bach. “AriaNN: Low-Interaction Privacy-Preserving Deep Learning via Function
                  Secret Sharing.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.2478/POPETS-2022-0015.

[5] Kanav Gupta, Neha Jawalkar, Ananta Mukherjee, Nishanth Chandran, Divya Gupta, Ashish Panwar, Rahul Sharma. “{SIGMA:} Secure {GPT} Inference with Function Secret Sharing.” Proc. Priv. Enhancing Technol. 2024. DOI/URL: https://doi.org/10.56553/POPETS-2024-0107.

[6] Jinglong Luo, Yehong Zhang, Zhuo Zhang, Jiaqi Zhang, Xin Mu, Hui Wang, Yue Yu, Zenglin Xu. “SecFormer: Fast and Accurate Privacy-Preserving Inference for Transformer
                  Models via {SMPC}.” Findings of the Association for Computational Linguistics, {ACL} 2024,
                  Bangkok, Thailand and virtual meeting, August 11-16, 2024 2024. DOI/URL: https://doi.org/10.18653/V1/2024.FINDINGS-ACL.790.

[7] Sameer Wagh. “Pika: Secure Computation using Function Secret Sharing over Rings.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0113.

[8] Yoshimasa Akimoto, Kazuto Fukuchi, Youhei Akimoto, Jun Sakuma. “Privformer: Privacy-preserving Transformer with {MPC}.” 8th {IEEE} European Symposium on Security and Privacy, EuroS{\&}P
                  2023, Delft, Netherlands, July 3-7, 2023 2023. DOI/URL: https://doi.org/10.1109/EUROSP57164.2023.00031.

[9] Sameer Wagh, Divya Gupta, Nishanth Chandran. “SecureNN: 3-Party Secure Computation for Neural Network Training.” Proc. Priv. Enhancing Technol. 2019. DOI/URL: https://doi.org/10.2478/popets-2019-0035.

[10] Sameer Wagh, Shruti Tople, Fabrice Benhamouda, Eyal Kushilevitz, Prateek Mittal, Tal Rabin. “Falcon: Honest-Majority Maliciously Secure Framework for Private Deep
                  Learning.” Proc. Priv. Enhancing Technol. 2021. DOI/URL: https://doi.org/10.2478/popets-2021-0011.

[11] Nuttapong Attrapadung, Koki Hamada, Dai Ikarashi, Ryo Kikuchi, Takahiro Matsuda, Ibuki Mishina, Hiraku Morita, Jacob C. N. Schuldt. “Adam in Private: Secure and Fast Training of Deep Neural Networks
                  with Adaptive Moment Estimation.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0131.

[12] Yi Li, Wei Xu. “PrivPy: General and Scalable Privacy-Preserving Data Mining.” Proceedings of the 25th {ACM} {SIGKDD} International Conference on
                  Knowledge Discovery {\&} Data Mining, {KDD} 2019, Anchorage, AK,
                  USA, August 4-8, 2019 2019. DOI/URL: https://doi.org/10.1145/3292500.3330920.

[13] Harsh Chaudhari, Rahul Rachuri, Ajith Suresh. “Trident: Efficient 4PC Framework for Privacy Preserving Machine Learning.” 27th Annual Network and Distributed System Security Symposium, {NDSS}
                  2020, San Diego, California, USA, February 23-26, 2020 2020. DOI/URL: https://www.ndss-symposium.org/ndss-paper/trident-efficient-4pc-framework-for-privacy-preserving-machine-learning/.

[14] Nishat Koti, Arpita Patra, Rahul Rachuri, Ajith Suresh. “Tetrad: Actively Secure 4PC for Secure Training and Inference.” 29th Annual Network and Distributed System Security Symposium, {NDSS}
                  2022, San Diego, California, USA, April 24-28, 2022 2022. DOI/URL: https://www.ndss-symposium.org/ndss-paper/auto-draft-202/.