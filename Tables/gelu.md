### Approximation of the GELU functionality expressed in terms of required MPC building block protocols. For LUTs, the number in brackets indicates the table size (entries). Abbreviations are defined in Table 2.

|  N | Sec. | Protocol      |     LUT     | Multiplication | Truncation | Comparison | Multiplexer |
| -: | :--: | :------------ | :---------: | :------------: | :--------: | :--------: | :---------: |
|  2 |  SH  | MPCFormer [1] |      —      |        1       |      1     |      —     |      —      |
|  2 |  SH  | SirNN [2]     | 6 ($$2^8$$) |        7       |      6     |      5     |      2      |
|  2 |  SH  | Sigma [3]     | 1 ($$2^8$$) |        —       |      1     |      2     |      3      |
|  2 |  SH  | Iron [4]      | 6 ($$2^8$$) |        6       |      5     |      5     |      2      |
|  2 |  SH  | Bolt [5]      |      —      |        3       |      4     |      2     |      2      |
|  2 |  SH  | CipherGPT [6] | 1 ($$2^6$$) |        1       |      2     |      2     |      2      |
|  2 |  SH  | Nimbus [7]    |      —      |        1       |      1     |      2     |      1      |
|  2 |  SH  | SecFormer [8] |      —      |        5       |      6     |      2     |      1      |
|  2 |  SH  | BumbleBee [9] |      —      |        4       |      6     |      3     |      3      |
|  2 |  SH  | SHAFT [10]    |      —      |        2       |      2     |      2     |      2      |
|  3 |  SH  | PUMA [11]     |      —      |        4       |      4     |      3     |      3      |

### References

[1] Dacheng Li, Hongyi Wang, Rulin Shao, Han Guo, Eric P. Xing, Hao Zhang. “{MPCFORMER:} Fast, Performant and Provate Transformer Inference with
                  {MPC}.” The Eleventh International Conference on Learning Representations,
                  {ICLR} 2023, Kigali, Rwanda, May 1-5, 2023 2023. DOI/URL: https://openreview.net/pdf?id=CWmvjOEhgH-.

[2] Deevashwer Rathee, Mayank Rathee, Rahul Kranti Kiran Goli, Divya Gupta, Rahul Sharma, Nishanth Chandran, Aseem Rastogi. “SiRnn: {A} Math Library for Secure {RNN} Inference.” 42nd {IEEE} Symposium on Security and Privacy, {SP} 2021, San Francisco,
                  CA, USA, 24-27 May 2021 2021. DOI/URL: https://doi.org/10.1109/SP40001.2021.00086.

[3] Kanav Gupta, Neha Jawalkar, Ananta Mukherjee, Nishanth Chandran, Divya Gupta, Ashish Panwar, Rahul Sharma. “{SIGMA:} Secure {GPT} Inference with Function Secret Sharing.” Proc. Priv. Enhancing Technol. 2024. DOI/URL: https://doi.org/10.56553/POPETS-2024-0107.

[4] Meng Hao, Hongwei Li, Hanxiao Chen, Pengzhi Xing, Guowen Xu, Tianwei Zhang. “Iron: Private Inference on Transformers.” Advances in Neural Information Processing Systems 35: Annual Conference
                  on Neural Information Processing Systems 2022, NeurIPS 2022, New Orleans,
                  LA, USA, November 28 - December 9, 2022 2022. DOI/URL: http://papers.nips.cc/paper\_files/paper/2022/hash/64e2449d74f84e5b1a5c96ba7b3d308e-Abstract-Conference.html.

[5] Qi Pang, Jinhao Zhu, Helen M{\"{o}}llering, Wenting Zheng, Thomas Schneider. “{BOLT:} Privacy-Preserving, Accurate and Efficient Inference for Transformers.” {IEEE} Symposium on Security and Privacy, {SP} 2024, San Francisco,
                  CA, USA, May 19-23, 2024 2024. DOI/URL: https://doi.org/10.1109/SP54263.2024.00130.

[6] Xiaoyang Hou, Jian Liu, Jingyu Li, Yuhan Li, Wen{-}jie Lu, Cheng Hong, Kui Ren. “CipherGPT: Secure Two-Party {GPT} Inference.” {IACR} Cryptol. ePrint Arch. 2023. DOI/URL: https://eprint.iacr.org/2023/1147.

[7] Zhengyi Li, Kang Yang, Jin Tan, Wen{-}jie Lu, Haoqi Wu, Xiao Wang, Yu Yu, Derun Zhao, Yancheng Zheng, Minyi Guo, Jingwen Leng. “Nimbus: Secure and Efficient Two-Party Inference for Transformers.” Advances in Neural Information Processing Systems 38: Annual Conference
                  on Neural Information Processing Systems 2024, NeurIPS 2024, Vancouver,
                  BC, Canada, December 10 - 15, 2024 2024. DOI/URL: http://papers.nips.cc/paper\_files/paper/2024/hash/264a9b3ce46abdf572dcfe0401141989-Abstract-Conference.html.

[8] Jinglong Luo, Yehong Zhang, Zhuo Zhang, Jiaqi Zhang, Xin Mu, Hui Wang, Yue Yu, Zenglin Xu. “SecFormer: Fast and Accurate Privacy-Preserving Inference for Transformer
                  Models via {SMPC}.” Findings of the Association for Computational Linguistics, {ACL} 2024,
                  Bangkok, Thailand and virtual meeting, August 11-16, 2024 2024. DOI/URL: https://doi.org/10.18653/V1/2024.FINDINGS-ACL.790.

[9] Wen{-}jie Lu, Zhicong Huang, Zhen Gu, Jingyu Li, Jian Liu, Cheng Hong, Kui Ren, Tao Wei, Wenguang Chen. “BumbleBee: Secure Two-party Inference Framework for Large Transformers.” 32nd Annual Network and Distributed System Security Symposium, {NDSS}
                  2025, San Diego, California, USA, February 24-28, 2025 2025. DOI/URL: https://www.ndss-symposium.org/ndss-paper/bumblebee-secure-two-party-inference-framework-for-large-transformers/.

[10] Andes Y. L. Kei, Sherman S. M. Chow. “{SHAFT:} Secure, Handy, Accurate and Fast Transformer Inference.” 32nd Annual Network and Distributed System Security Symposium, {NDSS}
                  2025, San Diego, California, USA, February 24-28, 2025 2025. DOI/URL: https://www.ndss-symposium.org/ndss-paper/shaft-secure-handy-accurate-and-fast-transformer-inference/.

[11] Ye Dong, Wen{-}jie Lu, Yancheng Zheng, Haoqi Wu, Derun Zhao, Jin Tan, Zhicong Huang, Cheng Hong, Tao Wei, Wenguang Chen. “{PUMA:} Secure Inference of LLaMA-7B in Five Minutes.” CoRR 2023. DOI/URL: https://doi.org/10.48550/ARXIV.2307.12533.