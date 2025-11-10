### High-level protocol approach analysis to the Softmax functionality. The Max+Exp+Rec method refers to a partitioned approach for each primitive (Maximum, Exponential, Reciprocal) separately. (✓) indicates a method is used; (✗) indicates it is not. Additional abbreviations are defined in Table 2.

|  N | Sec. | Protocol                          | ReLU | Square | Iterative | LUT | Max+Exp+Rec | Piecewise Pol. | Exact |  Tech. |
| -: | :--: | :-------------------------------- | :--: | :----: | :-------: | :-: | :---------: | :------------: | :---: | :----: |
|  2 |  SH  | SecureML [1]                      |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | ABY2 [2]                          |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | DeepSecure [3]                    |   ✗  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✓   |   GC   |
|  2 |  SH  | Pika [4]                          |   ✗  |    ✗   |     ✗     |  ✓  |      ✗      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | MPCFormer [5]                     |   ✗  |    ✓   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | East [6]                          |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | Sigma [7]                         |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | Iron [8]                          |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | CipherGPT [9]                     |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | MPCViT [10]                       |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | Primer [11]                       |   ✗  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✓   |   GC   |
|  2 |  SH  | PriFFT [12]                       |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SecFormer [13]                    |   ✗  |    ✓   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SirNN [14]                        |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   OT   |
|  2 |  SH  | Nimbus [15]                       |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  2 |  SH  | Bolt [16]                         |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✓       |   ✗   |   FSS  |
|  2 |  SH  | BumbleBee [17]                    |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  2 |  SH  | Zhang et al. (SecureSoftmax) [18] |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SHAFT [19]                        |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | Shark [20]                        |   ✓  |    ✗   |     ✗     |  ✓  |      ✗      |        ✗       |   ✗   |   FSS  |
|  3 |  SH  | PUMA [21]                         |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  3 |  SH  | CryptGPU [22]                     |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  3 |   A  | AdamInPrivate [23]                |   ✗  |    ✗   |     ✓     |  ✓  |      ✓      |        ✗       |   ✗   | SS, OT |
|  4 |   F  | Trident [24]                      |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  4 |   F  | Tetrad [25]                       |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |

### References 
[1] Payman Mohassel, Yupeng Zhang. “SecureML: {A} System for Scalable Privacy-Preserving Machine Learning.” 2017 {IEEE} Symposium on Security and Privacy, {SP} 2017, San Jose,
                  CA, USA, May 22-26, 2017 2017. DOI/URL: https://doi.org/10.1109/SP.2017.12.

[2] Arpita Patra, Thomas Schneider, Ajith Suresh, Hossein Yalame. “{ABY2.0:} Improved Mixed-Protocol Secure Two-Party Computation.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/patra.

[3] Bita Darvish Rouhani, M. Sadegh Riazi, Farinaz Koushanfar. “Deepsecure: scalable provably-secure deep learning.” Proceedings of the 55th Annual Design Automation Conference, {DAC}
                  2018, San Francisco, CA, USA, June 24-29, 2018 2018. DOI/URL: https://doi.org/10.1145/3195970.3196023.

[4] Sameer Wagh. “Pika: Secure Computation using Function Secret Sharing over Rings.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0113.

[5] Dacheng Li, Hongyi Wang, Rulin Shao, Han Guo, Eric P. Xing, Hao Zhang. “{MPCFORMER:} Fast, Performant and Provate Transformer Inference with
                  {MPC}.” The Eleventh International Conference on Learning Representations,
                  {ICLR} 2023, Kigali, Rwanda, May 1-5, 2023 2023. DOI/URL: https://openreview.net/pdf?id=CWmvjOEhgH-.

[6] Yuanchao Ding, Hua Guo, Yewei Guan, Weixin Liu, Jiarong Huo, Zhenyu Guan, Xiyong Zhang. “East: Efficient and Accurate Secure Transformer Framework for Inference.” CoRR 2023. DOI/URL: https://doi.org/10.48550/ARXIV.2308.09923.

[7] Kanav Gupta, Neha Jawalkar, Ananta Mukherjee, Nishanth Chandran, Divya Gupta, Ashish Panwar, Rahul Sharma. “{SIGMA:} Secure {GPT} Inference with Function Secret Sharing.” Proc. Priv. Enhancing Technol. 2024. DOI/URL: https://doi.org/10.56553/POPETS-2024-0107.

[8] Meng Hao, Hongwei Li, Hanxiao Chen, Pengzhi Xing, Guowen Xu, Tianwei Zhang. “Iron: Private Inference on Transformers.” Advances in Neural Information Processing Systems 35: Annual Conference
                  on Neural Information Processing Systems 2022, NeurIPS 2022, New Orleans,
                  LA, USA, November 28 - December 9, 2022 2022. DOI/URL: http://papers.nips.cc/paper\_files/paper/2022/hash/64e2449d74f84e5b1a5c96ba7b3d308e-Abstract-Conference.html.

[9] Xiaoyang Hou, Jian Liu, Jingyu Li, Yuhan Li, Wen{-}jie Lu, Cheng Hong, Kui Ren. “CipherGPT: Secure Two-Party {GPT} Inference.” {IACR} Cryptol. ePrint Arch. 2023. DOI/URL: https://eprint.iacr.org/2023/1147.

[10] Wenxuan Zeng, Meng Li, Wenjie Xiong, Tong Tong, Wen-jie Lu, Jin Tan, Runsheng Wang, Ru Huang. “Mpcvit: Searching for accurate and efficient mpc-friendly vision transformer with heterogeneous attention.” Proceedings of the IEEE/CVF International Conference on Computer Vision 2023.

[11] Mengxin Zheng, Qian Lou, Lei Jiang. “Primer: Fast Private Transformer Inference on Encrypted Data.” 60th {ACM/IEEE} Design Automation Conference, {DAC} 2023, San Francisco,
                  CA, USA, July 9-13, 2023 2023. DOI/URL: https://doi.org/10.1109/DAC56929.2023.10247719.

[12] Zhichao You, Xuewen Dong, Ke Cheng, Xutong Mu, Jiaxuan Fu, Shiyang Ma, Qiang Qu, Yulong Shen. “PriFFT: Privacy-preserving Federated Fine-tuning of Large Language
                  Models via Function Secret Sharing.” CoRR 2025. DOI/URL: https://doi.org/10.48550/ARXIV.2503.03146.

[13] Jinglong Luo, Yehong Zhang, Zhuo Zhang, Jiaqi Zhang, Xin Mu, Hui Wang, Yue Yu, Zenglin Xu. “SecFormer: Fast and Accurate Privacy-Preserving Inference for Transformer
                  Models via {SMPC}.” Findings of the Association for Computational Linguistics, {ACL} 2024,
                  Bangkok, Thailand and virtual meeting, August 11-16, 2024 2024. DOI/URL: https://doi.org/10.18653/V1/2024.FINDINGS-ACL.790.

[14] Deevashwer Rathee, Mayank Rathee, Rahul Kranti Kiran Goli, Divya Gupta, Rahul Sharma, Nishanth Chandran, Aseem Rastogi. “SiRnn: {A} Math Library for Secure {RNN} Inference.” 42nd {IEEE} Symposium on Security and Privacy, {SP} 2021, San Francisco,
                  CA, USA, 24-27 May 2021 2021. DOI/URL: https://doi.org/10.1109/SP40001.2021.00086.

[15] Zhengyi Li, Kang Yang, Jin Tan, Wen{-}jie Lu, Haoqi Wu, Xiao Wang, Yu Yu, Derun Zhao, Yancheng Zheng, Minyi Guo, Jingwen Leng. “Nimbus: Secure and Efficient Two-Party Inference for Transformers.” Advances in Neural Information Processing Systems 38: Annual Conference
                  on Neural Information Processing Systems 2024, NeurIPS 2024, Vancouver,
                  BC, Canada, December 10 - 15, 2024 2024. DOI/URL: http://papers.nips.cc/paper\_files/paper/2024/hash/264a9b3ce46abdf572dcfe0401141989-Abstract-Conference.html.

[16] Qi Pang, Jinhao Zhu, Helen M{\"{o}}llering, Wenting Zheng, Thomas Schneider. “{BOLT:} Privacy-Preserving, Accurate and Efficient Inference for Transformers.” {IEEE} Symposium on Security and Privacy, {SP} 2024, San Francisco,
                  CA, USA, May 19-23, 2024 2024. DOI/URL: https://doi.org/10.1109/SP54263.2024.00130.

[17] Wen{-}jie Lu, Zhicong Huang, Zhen Gu, Jingyu Li, Jian Liu, Cheng Hong, Kui Ren, Tao Wei, Wenguang Chen. “BumbleBee: Secure Two-party Inference Framework for Large Transformers.” 32nd Annual Network and Distributed System Security Symposium, {NDSS}
                  2025, San Diego, California, USA, February 24-28, 2025 2025. DOI/URL: https://www.ndss-symposium.org/ndss-paper/bumblebee-secure-two-party-inference-framework-for-large-transformers/.

[18] Yu Zheng, Qizhi Zhang, Sherman S. M. Chow, Yuxiang Peng, Sijun Tan, Lichun Li, Shan Yin. “Secure Softmax/Sigmoid for Machine-learning Computation.” Annual Computer Security Applications Conference, {ACSAC} 2023, Austin,
                  TX, USA, December 4-8, 2023 2023. DOI/URL: https://doi.org/10.1145/3627106.3627175.

[19] Andes Y. L. Kei, Sherman S. M. Chow. “{SHAFT:} Secure, Handy, Accurate and Fast Transformer Inference.” 32nd Annual Network and Distributed System Security Symposium, {NDSS}
                  2025, San Diego, California, USA, February 24-28, 2025 2025. DOI/URL: https://www.ndss-symposium.org/ndss-paper/shaft-secure-handy-accurate-and-fast-transformer-inference/.

[20] Kanav Gupta, Nishanth Chandran, Divya Gupta, Jonathan Katz, Rahul Sharma. “{SHARK:} Actively Secure Inference Using Function Secret Sharing.” {IEEE} Symposium on Security and Privacy, {SP} 2025, San Francisco,
                  CA, USA, May 12-15, 2025 2025. DOI/URL: https://doi.org/10.1109/SP61157.2025.00175.

[21] Ye Dong, Wen{-}jie Lu, Yancheng Zheng, Haoqi Wu, Derun Zhao, Jin Tan, Zhicong Huang, Cheng Hong, Tao Wei, Wenguang Chen. “{PUMA:} Secure Inference of LLaMA-7B in Five Minutes.” CoRR 2023. DOI/URL: https://doi.org/10.48550/ARXIV.2307.12533.

[22] Sijun Tan, Brian Knott, Yuan Tian, David J. Wu. “CryptGPU: Fast Privacy-Preserving Machine Learning on the GPU.” 42nd {IEEE} Symposium on Security and Privacy, {SP} 2021, San Francisco,
                  CA, USA, 24-27 May 2021 2021. DOI/URL: https://doi.org/10.1109/SP40001.2021.00098.

[23] Nuttapong Attrapadung, Koki Hamada, Dai Ikarashi, Ryo Kikuchi, Takahiro Matsuda, Ibuki Mishina, Hiraku Morita, Jacob C. N. Schuldt. “Adam in Private: Secure and Fast Training of Deep Neural Networks
                  with Adaptive Moment Estimation.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0131.

[24] Harsh Chaudhari, Rahul Rachuri, Ajith Suresh. “Trident: Efficient 4PC Framework for Privacy Preserving Machine Learning.” 27th Annual Network and Distributed System Security Symposium, {NDSS}
                  2020, San Diego, California, USA, February 23-26, 2020 2020. DOI/URL: https://www.ndss-symposium.org/ndss-paper/trident-efficient-4pc-framework-for-privacy-preserving-machine-learning/.

[25] Nishat Koti, Arpita Patra, Rahul Rachuri, Ajith Suresh. “Tetrad: Actively Secure 4PC for Secure Training and Inference.” 29th Annual Network and Distributed System Security Symposium, {NDSS}
                  2022, San Diego, California, USA, April 24-28, 2022 2022. DOI/URL: https://www.ndss-symposium.org/ndss-paper/auto-draft-202/.
