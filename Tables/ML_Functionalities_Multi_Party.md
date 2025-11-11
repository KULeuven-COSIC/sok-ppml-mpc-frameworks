### Overview of supported ML functionalities in multi-party frameworks. (✓) explicit protocol support; (◐) underlying primitives available; (✗) no support.

| Scheme                  | Year | Parties | Linear | Conv | Truncation    |  ReLU | SoftMax | Sigmoid | Normalisation | GeLU |
| ----------------------- | ---: | :-----: | :----: | :--: | :------------ | :---: | :-----: | :-----: | :-----------: | :--: |
| ABY3 [1]                | 2018 |    3    |    ✓   |   ✗  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| SecureNN [2]            | 2018 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✓       |   ✗  |
| ASTRA [3]               | 2019 |    3    |    ✓   |   ✗  | ✗             | ◐ [*] |    ✗    |    ✓    |       ✗       |   ✗  |
| Cryptflow [4]           | 2019 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| Shen et al. [5]         | 2020 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| Falcon [6]              | 2020 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✓       |   ✗  |
| BLAZE [7]               | 2020 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| pMPL [8]                | 2022 |    3    |    ✓   |   ✗  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| AdamInPrivate [9]       | 2022 |    3    |    ✓   |   ✓  | Faithful      |   ✓   |    ✓    |    ✗    |       ✓       |   ✗  |
| Meteor [10]             | 2023 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| PrivFormer [11]         | 2023 |    3    |    ✓   |   ✗  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✓       |   ✗  |
| Trio [12]               | 2024 |    3    |    ✓   |   ✗  | Probabilistic | ◐ [T1] |    ✗    |    ✗    |       ✗       |   ✗  |
| Brüggenmann et al. [13] | 2024 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| Trident [14]            | 2019 |    4    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✓    |    ✓    |     ◐ [T2]     |   ✗  |
| PrivPy [15]             | 2019 |    4    |    ✓   |   ✓  | Probabilistic | ◐ [T1] |    ✗    |    ✓    |       ✓       |   ✗  |
| FLASH [16]              | 2020 |    4    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| SWIFT [17]              | 2020 |   3/4   |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| Fantastic Four [18]     | 2021 |   3/4   |    ✓   |   ✓  | Stochastic    |   ✗   |    ✗    |    ✗    |       ✗       |   ✗  |
| Tetrad [19]             | 2021 |    4    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✓    |    ✓    |     ◐ [T2]     |   ✗  |
| Quad [12]               | 2024 |    4    |    ✓   |   ✗  | Probabilistic | ◐ [T1] |    ✗    |    ✗    |       ✗       |   ✗  |
| MPClan [20]             | 2023 |    n    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| Baccarini et al. [21]   | 2023 |    n    |    ✓   |   ✓  | Probabilistic |   ✗   |    ✗    |    ✗    |       ✗       |   ✗  |
| Liu et al. [22]         | 2024 |    n    |    ✓   |   ✓  | Stochastic    |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| MD-ML [23]              | 2024 |    n    |    ✓   |   ✓  | Probabilistic | ◐ [T1] |    ✗    |    ✗    |       ✗       |   ✗  |
| MD-SONIC [24]           | 2025 |    n    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| FANNG-MPC [25]          | 2025 |    n    |    ✓   |   ✓  | Probabilistic |   ✓   |  ◐ [T1]  |    ✗    |     ◐ [T1]     |   ✗  |

**Tablenotes**
[T1] Proposes underlying primitives needed for evaluation, but no dedicated protocol for the functionality.
[T2] Garbled Circuits.


### References

[1] Payman Mohassel, Peter Rindal. “ABY\({}^{\mbox{3}}\): A Mixed Protocol Framework for Machine Learning.” Proceedings of the 2018 {ACM} {SIGSAC} Conference on Computer and
                  Communications Security, {CCS} 2018, Toronto, ON, Canada, October
                  15-19, 2018 2018. DOI/URL: https://doi.org/10.1145/3243734.3243760.

[2] Sameer Wagh, Divya Gupta, Nishanth Chandran. “SecureNN: 3-Party Secure Computation for Neural Network Training.” Proc. Priv. Enhancing Technol. 2019. DOI/URL: https://doi.org/10.2478/popets-2019-0035.

[3] Harsh Chaudhari, Ashish Choudhury, Arpita Patra, Ajith Suresh. “{ASTRA:} High Throughput 3PC over Rings with Application to Secure
                  Prediction.” {Proceedings of the 2019 {ACM} SIGSAC}.

[4] Nishant Kumar, Mayank Rathee, Nishanth Chandran, Divya Gupta, Aseem Rastogi, Rahul Sharma. “CrypTFlow: Secure TensorFlow Inference.” 2020 {IEEE} Symposium on Security and Privacy, {SP} 2020, San Francisco,
                  CA, USA, May 18-21, 2020 2020. DOI/URL: https://doi.org/10.1109/SP40000.2020.00092.

[5] Liyan Shen, Xiaojun Chen, Jinqiao Shi, Ye Dong, Binxing Fang. “An Efficient 3-Party Framework for Privacy-Preserving Neural Network
                  Inference.” Computer Security - {ESORICS} 2020 - 25th European Symposium on Research
                  in Computer Security, {ESORICS} 2020, Guildford, UK, September 14-18,
                  2020, Proceedings, Part {I} 2020. DOI/URL: https://doi.org/10.1007/978-3-030-58951-6\_21.

[6] Sameer Wagh, Shruti Tople, Fabrice Benhamouda, Eyal Kushilevitz, Prateek Mittal, Tal Rabin. “Falcon: Honest-Majority Maliciously Secure Framework for Private Deep
                  Learning.” Proc. Priv. Enhancing Technol. 2021. DOI/URL: https://doi.org/10.2478/popets-2021-0011.

[7] Arpita Patra, Ajith Suresh. “BLAZE: Blazing Fast Privacy-Preserving Machine Learning.” 27th Annual Network and Distributed System Security Symposium, {NDSS}
                  2020, San Diego, California, USA, February 23-26, 2020 2020. DOI/URL: https://www.ndss-symposium.org/ndss-paper/blaze-blazing-fast-privacy-preserving-machine-learning/.

[8] Lushan Song, Jiaxuan Wang, Zhexuan Wang, Xinyu Tu, Guopeng Lin, Wenqiang Ruan, Haoqi Wu, Weili Han. “pMPL: {A} Robust Multi-Party Learning Framework with a Privileged
                  Party.” Proceedings of the 2022 {ACM} {SIGSAC} Conference on Computer and
                  Communications Security, {CCS} 2022, Los Angeles, CA, USA, November
                  7-11, 2022 2022. DOI/URL: https://doi.org/10.1145/3548606.3560697.

[9] Nuttapong Attrapadung, Koki Hamada, Dai Ikarashi, Ryo Kikuchi, Takahiro Matsuda, Ibuki Mishina, Hiraku Morita, Jacob C. N. Schuldt. “Adam in Private: Secure and Fast Training of Deep Neural Networks
                  with Adaptive Moment Estimation.” Proc. Priv. Enhancing Technol. 2022. DOI/URL: https://doi.org/10.56553/POPETS-2022-0131.

[10] Ye Dong, Xiaojun Chen, Weizhan Jing, Kaiyun Li, Weiping Wang. “Meteor: Improved Secure 3-Party Neural Network Inference with Reducing
                  Online Communication Costs.” Proceedings of the {ACM} Web Conference 2023, {WWW} 2023, Austin,
                  TX, USA, 30 April 2023 - 4 May 2023 2023. DOI/URL: https://doi.org/10.1145/3543507.3583272.

[11] Yoshimasa Akimoto, Kazuto Fukuchi, Youhei Akimoto, Jun Sakuma. “Privformer: Privacy-preserving Transformer with {MPC}.” 8th {IEEE} European Symposium on Security and Privacy, EuroS{\&}P
                  2023, Delft, Netherlands, July 3-7, 2023 2023. DOI/URL: https://doi.org/10.1109/EUROSP57164.2023.00031.

[12] Christopher Harth{-}Kitzerow, Ajith Suresh, Yongqin Wang, Hossein Yalame, Georg Carle, Murali Annavaram. “High-Throughput Secure Multiparty Computation with an Honest Majority
                  in Various Network Settings.” Proc. Priv. Enhancing Technol. 2025. DOI/URL: https://doi.org/10.56553/POPETS-2025-0015.

[13] Andreas Br{\"{u}}ggemann, Oliver Schick, Thomas Schneider, Ajith Suresh, Hossein Yalame. “Don't Eject the Impostor: Fast Three-Party Computation With a
                  Known Cheater.” {IEEE} Symposium on Security and Privacy, {SP} 2024, San Francisco,
                  CA, USA, May 19-23, 2024 2024. DOI/URL: https://doi.org/10.1109/SP54263.2024.00164.

[14] Harsh Chaudhari, Rahul Rachuri, Ajith Suresh. “Trident: Efficient 4PC Framework for Privacy Preserving Machine Learning.” 27th Annual Network and Distributed System Security Symposium, {NDSS}
                  2020, San Diego, California, USA, February 23-26, 2020 2020. DOI/URL: https://www.ndss-symposium.org/ndss-paper/trident-efficient-4pc-framework-for-privacy-preserving-machine-learning/.

[15] Yi Li, Wei Xu. “PrivPy: General and Scalable Privacy-Preserving Data Mining.” Proceedings of the 25th {ACM} {SIGKDD} International Conference on
                  Knowledge Discovery {\&} Data Mining, {KDD} 2019, Anchorage, AK,
                  USA, August 4-8, 2019 2019. DOI/URL: https://doi.org/10.1145/3292500.3330920.

[16] Megha Byali, Harsh Chaudhari, Arpita Patra, Ajith Suresh. “FLASH: Fast and Robust Framework for Privacy-preserving Machine
                  Learning.” Proc. Priv. Enhancing Technol. 2020. DOI/URL: https://doi.org/10.2478/popets-2020-0036.

[17] Nishat Koti, Mahak Pancholi, Arpita Patra, Ajith Suresh. “{SWIFT:} Super-fast and Robust Privacy-Preserving Machine Learning.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/koti.

[18] Anders P. K. Dalskov, Daniel Escudero, Marcel Keller. “Fantastic Four: Honest-Majority Four-Party Secure Computation With
                  Malicious Security.” 30th {USENIX} Security Symposium, {USENIX} Security 2021, August 11-13,
                  2021 2021. DOI/URL: https://www.usenix.org/conference/usenixsecurity21/presentation/dalskov.

[19] Nishat Koti, Arpita Patra, Rahul Rachuri, Ajith Suresh. “Tetrad: Actively Secure 4PC for Secure Training and Inference.” 29th Annual Network and Distributed System Security Symposium, {NDSS}
                  2022, San Diego, California, USA, April 24-28, 2022 2022. DOI/URL: https://www.ndss-symposium.org/ndss-paper/auto-draft-202/.

[20] Nishat Koti, Shravani Mahesh Patil, Arpita Patra, Ajith Suresh. “MPClan: Protocol Suite for Privacy-Conscious Computations.” J. Cryptol. 2023. DOI/URL: https://doi.org/10.1007/S00145-023-09469-Z.

[21] Alessandro N. Baccarini, Marina Blanton, Chen Yuan. “Multi-Party Replicated Secret Sharing over a Ring with Applications
                  to Privacy-Preserving Machine Learning.” Proc. Priv. Enhancing Technol. 2023. DOI/URL: https://doi.org/10.56553/POPETS-2023-0035.

[22] Fengrun Liu, Xiang Xie, Yu Yu. “Scalable Multi-Party Computation Protocols for Machine Learning in
                  the Honest-Majority Setting.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/liu-fengrun.

[23] Boshi Yuan, Shixuan Yang, Yongxiang Zhang, Ning Ding, Dawu Gu, Shi{-}Feng Sun. “{MD-ML:} Super Fast Privacy-Preserving Machine Learning for Malicious
                  Security with a Dishonest Majority.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/yuan.

[24] Yansong Zhang, Xiaojun Chen, Ye Dong, Qinghui Zhang, Rui Hou, Qiang Liu, Xudong Chen. “{MD-SONIC:} Maliciously-Secure Outsourcing Neural Network Inference
                  With Reduced Online Communication.” {IEEE} Trans. Inf. Forensics Secur. 2025. DOI/URL: https://doi.org/10.1109/TIFS.2025.3550834.

[25] Najwa Aaraj, Abdelrahaman Aly, Tim G{\"{u}}neysu, Chiara Marcolla, Johannes Mono, Rogerio Paludo, Iv{\'{a}}n Santos{-}Gonz{\'{a}}lez, Mireia Scholz, Eduardo Soria{-}Vazquez, Victor Sucasas, Ajith Suresh. “{FANNG-MPC:} Framework for Artificial Neural Networks and Generic
                  {MPC}.” {IACR} Trans. Cryptogr. Hardw. Embed. Syst. 2025. DOI/URL: https://doi.org/10.46586/TCHES.V2025.I1.1-36.