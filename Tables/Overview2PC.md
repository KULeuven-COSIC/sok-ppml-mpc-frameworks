### Systematic overview of 2PC frameworks. (✓) denotes availability, (◐) partial availability, (✗) unavailability. Abbreviations: **O** = Outsourcing, **C-S** = Client–Server. Additional abbreviations are defined in Table 2.

| Scheme             | Year |  2  |   3   |  4  |  HE |  OT |  GC |  ZK |    SS   | Setting |   Sec.  | Training | Inference | Theoretical | Experimental |
| ------------------ | ---: | :-: | :---: | :-: | :-: | :-: | :-: | :-: | :-----: | :-----: | :-----: | :------: | :-------: | :---------: | :----------: |
| SecureML [1]       | 2017 |  ✓  | ◐ [T1] |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |      ✗      |     ◐ [T2]    |
| DeepSecure [2]     | 2017 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✓  |  ✗  |    ✗    |    O    |    SH   |     ✓    |     ✓     |      ✗      |     ◐ [T2]    |
| MiniONN [3]        | 2017 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Chameleon [4]      | 2017 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✓  |  ✓  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Gazelle [5]        | 2018 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Delphi [6]         | 2020 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| CryptFlow2 [7]     | 2020 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| MediSC [8]         | 2021 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| COINN [9]          | 2021 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| Muse [10]          | 2021 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✓  |    ✓    |   C-S   | $$A^C$$ |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| AriaNN [11]        | 2021 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✓    |     ✓     |    ◐ [T4]    |       ✓      |
| SirNN [12]         | 2021 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |    ◐ [T3]    |       ✓      |
| ABY2.0 [13]        | 2021 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |    ◐ [T3]    |     ◐ [T2]    |
| SONIC [14]         | 2022 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✓      |     ◐ [T2]    |
| Sphinx [15]        | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✓    |     ✓     |      ✗      |     ◐ [T2]    |
| SIMC [16]          | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✓  |    ✓    |   C-S   | $$A^C$$ |     ✗    |     ✓     |      ✗      |       ✓      |
| Cheetah [17]       | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |    ◐ [T3]    |       ✓      |
| Iron [18]          | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Pika [19]          | 2022 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    A    |     ✓    |     ✓     |    ◐ [T3]    |     ◐ [T2]    |
| SecFloat [20]      | 2022 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |    ◐ [T3]    |       ✓      |
| Llama [21]         | 2022 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| MPCFormer [22]     | 2023 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| Primer [23]        | 2023 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| FastSecNet [24]    | 2023 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Rathee et al. [25] | 2023 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |      ✗      |       ✓      |
| Orca [26]          | 2023 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✓    |     ✓     |      ✓      |       ✓      |
| FssNN [27]         | 2023 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✓    |     ✓     |    ◐ [T4]    |     ◐ [T2]    |
| Sigma [28]         | 2023 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| Bolt [29]          | 2023 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| Nimbus [30]        | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| SIMC 2.0 [31]      | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✓  |    ✓    |   C-S   | $$A^C$$ |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Fregata [32]       | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| SecFormer [33]     | 2024 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| MLFormer [34]      | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| BumbleBee [35]     | 2025 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| SHAFT [36]         | 2025 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| Panther [37]       | 2025 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |    ◐ [T3]    |     ◐ [T2]    |
| Guo et al. [38]    | 2025 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✗     |      ✓      |       ✓      |
| Shark [39]         | 2025 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    A    |     ✗    |     ✓     |      ✓      |       ✓      |


### Tablenotes
[T1] Dealer in the offline phase.
[T2] Implementation not public.
[T3] Only primitives (no ML functionalities).
[T4] No costs for offline phase.

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

[6] Pratyush Mishra, Ryan Lehmkuhl, Akshayaram Srinivasan, Wenting Zheng, Raluca Ada Popa. “Delphi: {A} Cryptographic Inference Service for Neural Networks.” 29th {USENIX} Security Symposium, {USENIX} Security 2020, August 12-14,
                  2020 2020. DOI/URL: https://www.usenix.org/conference/usenixsecurity20/presentation/mishra.

[7] Deevashwer Rathee, Mayank Rathee, Nishant Kumar, Nishanth Chandran, Divya Gupta, Aseem Rastogi, Rahul Sharma. “CrypTFlow2: Practical 2-Party Secure Inference.” {CCS} '20: 2020 {ACM} {SIGSAC} Conference on Computer and Communications
                  Security, Virtual Event, USA, November 9-13, 2020 2020. DOI/URL: https://doi.org/10.1145/3372297.3417274.

[8] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, Xun Yi. “[inline-graphic not available: see fulltext] : Towards Secure and
                  Lightweight Deep Learning as a Medical Diagnostic Service.” Computer Security - {ESORICS} 2021 - 26th European Symposium on Research
                  in Computer Security, Darmstadt, Germany, October 4-8, 2021, Proceedings,
                  Part {I} 2021. DOI/URL: https://doi.org/10.1007/978-3-030-88418-5\_25.

[9] Siam Umar Hussain, Mojan Javaheripi, Mohammad Samragh, Farinaz Koushanfar. “{COINN:} Crypto/ML Codesign for Oblivious Inference via Neural Networks.” {CCS} '21: 2021 {ACM} {SIGSAC} Conference on Computer and Communications
                  Security, Virtual Event, Republic of Korea, November 15 - 19, 2021 2021. DOI/URL: https://doi.org/10.1145/3460120.3484797.

[10] Ryan Lehmkuhl, Pratyush Mishra, Akshayaram Srinivasan, Raluca Ada Popa. “Muse: Secure Inference Resilient to Malicious Clients.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/lehmkuhl.

[11] Th{\'{e}}o Ryffel, Pierre Tholoniat, David Pointcheval, Francis R. Bach. “AriaNN: Low-Interaction Privacy-Preserving Deep Learning via Function
                  Secret Sharing.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.2478/POPETS-2022-0015.

[12] Deevashwer Rathee, Mayank Rathee, Rahul Kranti Kiran Goli, Divya Gupta, Rahul Sharma, Nishanth Chandran, Aseem Rastogi. “SiRnn: {A} Math Library for Secure {RNN} Inference.” 42nd {IEEE} Symposium on Security and Privacy, {SP} 2021, San Francisco,
                  CA, USA, 24-27 May 2021 2021. DOI/URL: https://doi.org/10.1109/SP40001.2021.00086.

[13] Arpita Patra, Thomas Schneider, Ajith Suresh, Hossein Yalame. “{ABY2.0:} Improved Mixed-Protocol Secure Two-Party Computation.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/patra.

[14] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, Xun Yi. “Securely Outsourcing Neural Network Inference to the Cloud With Lightweight
                  Techniques.” {IEEE} Trans. Dependable Secur. Comput. 2023. DOI/URL: https://doi.org/10.1109/TDSC.2022.3141391.

[15] Han Tian, Chaoliang Zeng, Zhenghang Ren, Di Chai, Junxue Zhang, Kai Chen, Qiang Yang. “Sphinx: Enabling Privacy-Preserving Online Learning over the Cloud.” 43rd {IEEE} Symposium on Security and Privacy, {SP} 2022, San Francisco,
                  CA, USA, May 22-26, 2022 2022. DOI/URL: https://doi.org/10.1109/SP46214.2022.9833648.

[16] Nishanth Chandran, Divya Gupta, Sai Lakshmi Bhavana Obbattu, Akash Shah. “{SIMC:} {ML} Inference Secure Against Malicious Clients at Semi-Honest
                  Cost.” 31st {USENIX} Security Symposium, {USENIX} Security 2022, Boston,
                  MA, USA, August 10-12, 2022 2022. DOI/URL: https://www.usenix.org/conference/usenixsecurity22/presentation/chandran.

[17] Zhicong Huang, Wen{-}jie Lu, Cheng Hong, Jiansheng Ding. “Cheetah: Lean and Fast Secure Two-Party Deep Neural Network Inference.” 31st {USENIX} Security Symposium, {USENIX} Security 2022, Boston,
                  MA, USA, August 10-12, 2022 2022. DOI/URL: https://www.usenix.org/conference/usenixsecurity22/presentation/huang-zhicong.

[18] Meng Hao, Hongwei Li, Hanxiao Chen, Pengzhi Xing, Guowen Xu, Tianwei Zhang. “Iron: Private Inference on Transformers.” Advances in Neural Information Processing Systems 35: Annual Conference
                  on Neural Information Processing Systems 2022, NeurIPS 2022, New Orleans,
                  LA, USA, November 28 - December 9, 2022 2022. DOI/URL: http://papers.nips.cc/paper\_files/paper/2022/hash/64e2449d74f84e5b1a5c96ba7b3d308e-Abstract-Conference.html.

[19] Sameer Wagh. “Pika: Secure Computation using Function Secret Sharing over Rings.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0113.

[20] Deevashwer Rathee, Anwesh Bhattacharya, Rahul Sharma, Divya Gupta, Nishanth Chandran, Aseem Rastogi. “SecFloat: Accurate Floating-Point meets Secure 2-Party Computation.” 43rd {IEEE} Symposium on Security and Privacy, {SP} 2022, San Francisco,
                  CA, USA, May 22-26, 2022 2022. DOI/URL: https://doi.org/10.1109/SP46214.2022.9833697.

[21] Kanav Gupta, Deepak Kumaraswamy, Nishanth Chandran, Divya Gupta. “{LLAMA:} {A} Low Latency Math Library for Secure Inference.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0109.

[22] Dacheng Li, Hongyi Wang, Rulin Shao, Han Guo, Eric P. Xing, Hao Zhang. “{MPCFORMER:} Fast, Performant and Provate Transformer Inference with
                  {MPC}.” The Eleventh International Conference on Learning Representations,
                  {ICLR} 2023, Kigali, Rwanda, May 1-5, 2023 2023. DOI/URL: https://openreview.net/pdf?id=CWmvjOEhgH-.

[23] Mengxin Zheng, Qian Lou, Lei Jiang. “Primer: Fast Private Transformer Inference on Encrypted Data.” 60th {ACM/IEEE} Design Automation Conference, {DAC} 2023, San Francisco,
                  CA, USA, July 9-13, 2023 2023. DOI/URL: https://doi.org/10.1109/DAC56929.2023.10247719.

[24] Meng Hao, Hongwei Li, Hanxiao Chen, Pengzhi Xing, Tianwei Zhang. “FastSecNet: An Efficient Cryptographic Framework for Private Neural
                  Network Inference.” {IEEE} Trans. Inf. Forensics Secur. 2023. DOI/URL: https://doi.org/10.1109/TIFS.2023.3262149.

[25] Deevashwer Rathee, Anwesh Bhattacharya, Divya Gupta, Rahul Sharma, Dawn Song. “Secure Floating-Point Training.” 32nd {USENIX} Security Symposium, {USENIX} Security 2023, Anaheim,
                  CA, USA, August 9-11, 2023 2023. DOI/URL: https://www.usenix.org/conference/usenixsecurity23/presentation/rathee.

[26] Neha Jawalkar, Kanav Gupta, Arkaprava Basu, Nishanth Chandran, Divya Gupta, Rahul Sharma. “Orca: FSS-based Secure Training and Inference with GPUs.” {IEEE} Symposium on Security and Privacy, {SP} 2024, San Francisco,
                  CA, USA, May 19-23, 2024 2024. DOI/URL: https://doi.org/10.1109/SP54263.2024.00063.

[27] Peng Yang, Zoe Lin Jiang, Shiqi Gao, Hongxiao Wang, Jun Zhou, Yangyiye Jin, Siu-Ming Yiu, Junbin Fang. “Communication-Efficient Secure Neural Network via Key-Reduced Distributed Comparison Function.” Provable and Practical Security: 18th International Conference, ProvSec 2024, Gold Coast, QLD, Australia, September 25–27, 2024, Proceedings, Part II 2025. DOI/URL: https://doi.org/10.1007/978-981-96-0957-4_8.

[28] Kanav Gupta, Neha Jawalkar, Ananta Mukherjee, Nishanth Chandran, Divya Gupta, Ashish Panwar, Rahul Sharma. “{SIGMA:} Secure {GPT} Inference with Function Secret Sharing.” Proc. Priv. Enhancing Technol. 2024. DOI/URL: https://doi.org/10.56553/POPETS-2024-0107.

[29] Qi Pang, Jinhao Zhu, Helen M{\"{o}}llering, Wenting Zheng, Thomas Schneider. “{BOLT:} Privacy-Preserving, Accurate and Efficient Inference for Transformers.” {IEEE} Symposium on Security and Privacy, {SP} 2024, San Francisco,
                  CA, USA, May 19-23, 2024 2024. DOI/URL: https://doi.org/10.1109/SP54263.2024.00130.

[30] Zhengyi Li, Kang Yang, Jin Tan, Wen{-}jie Lu, Haoqi Wu, Xiao Wang, Yu Yu, Derun Zhao, Yancheng Zheng, Minyi Guo, Jingwen Leng. “Nimbus: Secure and Efficient Two-Party Inference for Transformers.” Advances in Neural Information Processing Systems 38: Annual Conference
                  on Neural Information Processing Systems 2024, NeurIPS 2024, Vancouver,
                  BC, Canada, December 10 - 15, 2024 2024. DOI/URL: http://papers.nips.cc/paper\_files/paper/2024/hash/264a9b3ce46abdf572dcfe0401141989-Abstract-Conference.html.

[31] Guowen Xu, Xingshuo Han, Tianwei Zhang, Shengmin Xu, Jianting Ning, Xinyi Huang, Hongwei Li, Robert H. Deng. “{SIMC} 2.0: Improved Secure {ML} Inference Against Malicious Clients.” {IEEE} Trans. Dependable Secur. Comput. 2024. DOI/URL: https://doi.org/10.1109/TDSC.2023.3288557.

[32] Xuanang Yang, Jing Chen, Yuqing Li, Kun He, Xiaojie Huang, Zikuan Jiang, Hao Bai, Ruiying Du. “Fregata: Fast Private Inference With Unified Secure Two-Party Protocols.” {IEEE} Trans. Inf. Forensics Secur. 2024. DOI/URL: https://doi.org/10.1109/TIFS.2024.3444327.

[33] Jinglong Luo, Yehong Zhang, Zhuo Zhang, Jiaqi Zhang, Xin Mu, Hui Wang, Yue Yu, Zenglin Xu. “SecFormer: Fast and Accurate Privacy-Preserving Inference for Transformer
                  Models via {SMPC}.” Findings of the Association for Computational Linguistics, {ACL} 2024,
                  Bangkok, Thailand and virtual meeting, August 11-16, 2024 2024. DOI/URL: https://doi.org/10.18653/V1/2024.FINDINGS-ACL.790.

[34] Siqi Liu, Zhusen Liu, Donglong Chen, Wangchen Dai, Lu Zhou, Zhe Liu, Ray C. C. Cheung, {\c{C}}etin Kaya Ko{\c{c}}. “MLFormer: a high performance {MPC} linear inference framework for
                  transformers.” J. Cryptogr. Eng. 2025. DOI/URL: https://doi.org/10.1007/S13389-024-00365-1.

[35] Wen{-}jie Lu, Zhicong Huang, Zhen Gu, Jingyu Li, Jian Liu, Cheng Hong, Kui Ren, Tao Wei, Wenguang Chen. “BumbleBee: Secure Two-party Inference Framework for Large Transformers.” 32nd Annual Network and Distributed System Security Symposium, {NDSS}
                  2025, San Diego, California, USA, February 24-28, 2025 2025. DOI/URL: https://www.ndss-symposium.org/ndss-paper/bumblebee-secure-two-party-inference-framework-for-large-transformers/.

[36] Andes Y. L. Kei, Sherman S. M. Chow. “{SHAFT:} Secure, Handy, Accurate and Fast Transformer Inference.” 32nd Annual Network and Distributed System Security Symposium, {NDSS}
                  2025, San Diego, California, USA, February 24-28, 2025 2025. DOI/URL: https://www.ndss-symposium.org/ndss-paper/shaft-secure-handy-accurate-and-fast-transformer-inference/.

[37] Jun Feng, Yefan Wu, Hong Sun, Shunli Zhang, Debin Liu. “Panther: Practical Secure Two-Party Neural Network Inference.” {IEEE} Trans. Inf. Forensics Secur. 2025. DOI/URL: https://doi.org/10.1109/TIFS.2025.3526063.

[38] Hao Guo, Liqiang Peng, Haiyang Xue, Li Peng, Weiran Liu, Zhe Liu, Lei Hu. “Improved Secure Two-party Computation from a Geometric Perspective.” 34rth {USENIX} Security Symposium, {USENIX} Security 2025, Seattle,
                  WA, USA, August 13-15, 2025 2025. DOI/URL: https://www.usenix.org/conference/usenixsecurity25/presentation/guo-hao-improved.

[39] Kanav Gupta, Nishanth Chandran, Divya Gupta, Jonathan Katz, Rahul Sharma. “{SHARK:} Actively Secure Inference Using Function Secret Sharing.” {IEEE} Symposium on Security and Privacy, {SP} 2025, San Francisco,
                  CA, USA, May 12-15, 2025 2025. DOI/URL: https://doi.org/10.1109/SP61157.2025.00175.
