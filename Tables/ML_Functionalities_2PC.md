### Overview of supported ML functionalities in 2PC frameworks

*(● = available, ○ = unavailable, ◐ = partial. O = Outsourcing. SH = Semi‑honest, A = Malicious, etc. apply per framework in their original papers.)*

| Framework          | Year | Parties | Linear |  Conv  |   Truncation  |  ReLU  | SoftMax | Sigmoid | Normalisation |  GeLU  |
| ------------------ | ---- | :-----: | :----: | :----: | :-----------: | :----: | :-----: | :-----: | :-----------: | :----: |
| SecureML[^1]       | 2017 |    2    |    ●   |    ●   | Probabilistic |    ●   |    ●    |    ○    |       ○       |    ○   |
| DeepSecure[^2]     | 2017 |    2    |    ●   |    ●   |       ○       | ◐[^N2] |  ◐[^N2] |  ◐[^N2] |       ○       |    ○   |
| MiniONN[^3]        | 2017 |    2    |    ●   |    ●   |       ●       |    ●   |    ○    |    ●    |       ○       |    ○   |
| Chameleon[^4]      | 2017 |    2    |    ●   |    ●   |       ●       |    ●   |    ○    |    ●    |       ○       |    ○   |
| Gazelle[^5]        | 2018 |    2    |    ●   |    ●   |       ○       |    ●   |    ○    |    ○    |       ○       |    ○   |
| Quotient[^6]       | 2019 |    2    |    ●   |    ●   |       ○       |    ●   |    ○    |    ○    |       ◐       |    ○   |
| Delphi[^7]         | 2020 |    2    |    ●   |    ●   | Probabilistic |    ●   |    ○    |    ○    |       ○       |    ○   |
| CrypTFlow2[^8]     | 2020 |    2    |    ●   |    ●   |    Faithful   |    ●   |    ○    |    ○    |       ○       |    ○   |
| MediSC[^9]         | 2021 |    2    |    ●   |    ●   | Probabilistic |    ●   |    ○    |    ○    |       ○       |    ○   |
| COINN[^10]         | 2021 |    2    |    ●   |    ●   |       ○       |    ●   |    ○    |    ○    |       ○       |    ○   |
| Muse[^11]          | 2021 |    2    |    ●   |    ●   |       ●       |    ●   |    ○    |    ○    |       ○       |    ○   |
| AriaNN[^12]        | 2021 |    2    |    ●   |    ●   | Probabilistic |    ●   |    ○    |    ○    |       ●       |    ○   |
| SiRnn[^13]         | 2021 |    2    |    ●   |    ●   |    Faithful   |    ●   |  ◐[^N1] |    ●    |       ●       |    ○   |
| ABY2.0[^14]        | 2021 |    2    |    ●   |    ●   | Probabilistic |    ●   |    ●    |    ●    |       ○       |    ○   |
| SONIC[^15]         | 2022 |    2    |    ●   |    ●   | Probabilistic |    ●   |    ○    |    ○    |       ○       |    ○   |
| Sphinx[^16]        | 2022 |    2    |    ●   |    ●   |       ○       |    ○   |    ○    |    ○    |       ○       |    ○   |
| SIMC[^17]          | 2022 |    2    |    ●   |    ●   |       ○       | ◐[^N2] |    ○    |    ○    |       ○       |    ○   |
| Cheetah[^18]       | 2022 |    2    |    ●   |    ●   |   Stochastic  | ●[^N1] |    ○    |    ○    |       ○       |    ○   |
| Iron[^19]          | 2022 |    2    |    ●   |    ●   |    Faithful   |    ○   |    ●    |    ○    |       ●       |    ●   |
| Pika[^20]          | 2022 |    2    |    ○   |    ○   | Probabilistic |    ●   |    ●    |    ●    |       ●       |    ○   |
| SecFloat[^21]      | 2022 |    2    | ◐[^N1] | ◐[^N1] |    Faithful   | ◐[^N1] |  ◐[^N1] |  ◐[^N1] |       ●       |    ○   |
| Llama[^22]         | 2022 |    2    |    ●   |    ●   |    Faithful   |    ●   |    ●    |    ●    |     ◐[^N1]    |    ○   |
| MPCFormer[^23]     | 2023 |    2    |    ●   |    ○   | not specified |    ○   |    ●    |    ○    |       ○       |    ●   |
| Primer[^24]        | 2023 |    2    |    ●   |    ●   | not specified |    ○   |    ○    |    ○    |       ○       |    ○   |
| FastSecNet[^25]    | 2023 |    2    |    ●   |    ●   | Probabilistic |    ●   |    ○    |    ○    |       ○       |    ○   |
| Rathee et al.[^26] | 2023 |    2    |    ●   |    ●   |    Faithful   |    ○   |    ○    |    ○    |       ○       |    ○   |
| Orca[^27]          | 2023 |    2    |    ●   |    ●   |   Stochastic  |    ●   |    ●    |    ○    |       ○       |    ○   |
| FssNN[^28]         | 2023 |    2    |    ●   |    ●   | not specified |    ●   |    ○    |    ○    |       ○       |    ○   |
| Sigma[^29]         | 2023 |    2    |    ●   |    ●   |    Faithful   |    ●   |    ○    |    ●    |       ●       |    ●   |
| Bolt[^30]          | 2023 |    2    |    ●   |    ●   | Probabilistic |    ○   |    ●    |    ○    |       ●       |    ●   |
| Nimbus[^31]        | 2024 |    2    |    ●   |    ●   |   Stochastic  |    ○   |    ●    |    ○    |       ○       |    ●   |
| SIMC 2.0[^32]      | 2024 |    2    |    ●   |    ●   |       ○       | ◐[^N2] |    ○    |    ○    |       ○       |    ○   |
| Fregata[^33]       | 2024 |    2    |    ●   |    ●   | not specified | ◐[^N1] |    ○    |    ○    |       ○       |    ○   |
| SecFormer[^34]     | 2024 |    2    |    ●   |    ○   | Probabilistic |    ○   |    ●    |    ○    |       ●       |    ●   |
| MLFormer[^35]      | 2025 |    2    |    ●   |    ●   | Probabilistic |    ○   |  ◐[^N1] |  ◐[^N1] |     ◐[^N1]    | ◐[^N1] |
| BumbleBee[^36]     | 2025 |    2    |    ●   |    ●   |   Stochastic  |    ○   |    ●    |    ○    |       ○       |    ●   |
| SHAFT[^37]         | 2025 |    2    |    ●   |    ○   | Probabilistic |    ○   |    ●    |    ○    |       ○       |    ●   |
| Panther[^38]       | 2025 |    2    |    ●   |    ●   |   Stochastic  | ◐[^N1] |    ○    |    ○    |       ○       |    ○   |
| Guo et al.[^39]    | 2025 |    2    |    ○   |    ○   |      All      |    ○   |    ○    |    ○    |       ○       |    ○   |
| PriFFT[^40]        | 2025 |    2    |    ●   |    ●   | Probabilistic | ◐[^N1] |    ●    |  ◐[^N1] |     ◐[^N1]    | ◐[^N1] |
| Shark[^41]         | 2025 |    2    |    ●   |    ●   |    Faithful   |    ●   |    ●    |    ●    |       ○       |    ●   |


#### Notes

[^N1]: Proposes underlying primitives needed for evaluation, but no dedicated protocol for the functionality.

[^N2]: Garbled Circuits.


#### References (numbering restarts for this table)

[^1]: Mohassel, P., & Zhang, Y. (2017). **SecureML: A System for Scalable Privacy‑Preserving Machine Learning**. *IEEE S\&P 2017*.

[^2]: Rouhani, B. D., Riazi, M. S., & Koushanfar, F. (2018). **DeepSecure: Scalable Provably‑Secure Deep Learning**. *DAC 2018*.

[^3]: Liu, J., Juuti, M., Lu, Y., & Asokan, N. (2017). **Oblivious Neural Network Predictions via MiniONN Transformations**. *CCS 2017*.

[^4]: Riazi, M. S., Weinert, C., Tkachenko, O., Songhori, E. M., Schneider, T., & Koushanfar, F. (2018). **Chameleon: A Hybrid Secure Computation Framework for ML Applications**. *AsiaCCS 2018*.

[^5]: Juvekar, C., Vaikuntanathan, V., & Chandrakasan, A. (2018). **GAZELLE: A Low Latency Framework for Secure Neural Network Inference**. *USENIX Security 2018*.

[^6]: Mishra, P., et al. (2019). **Quotient: Two‑Party Inference via Quantization‑Aware Protocols**. *CCS 2019*.

[^7]: Mishra, P., Lehmkuhl, R., Srinivasan, A., Zheng, W., & Popa, R. A. (2020). **Delphi: A Cryptographic Inference Service for Neural Networks**. *USENIX Security 2020*.

[^8]: Rathee, D., Rathee, M., Kumar, N., Chandran, N., Gupta, D., Rastogi, A., & Sharma, R. (2020). **CrypTFlow2: Practical 2‑Party Secure Inference**. *CCS 2020*.

[^9]: Liu, X., Zheng, Y., Yuan, X., & Yi, X. (2021). **MediSC**. *ESORICS 2021*.

[^10]: Hussain, S. U., Javaheripi, M., Samragh, M., & Koushanfar, F. (2021). **COINN: Crypto/ML Codesign for Oblivious Inference**. *CCS 2021*.

[^11]: Lehmkuhl, R., Mishra, P., Srinivasan, A., & Popa, R. A. (2021). **Muse: Secure Inference Resilient to Malicious Clients**. *USENIX Security 2021*.

[^12]: Ryffel, T., Tholoniat, P., Pointcheval, D., & Bach, F. (2022). **AriaNN: Low‑Interaction PPDL via Function Secret Sharing**. *PoPETS 2022(1)*.

[^13]: Rathee, D., Rathee, M., Goli, R. K. K., Gupta, D., Sharma, R., Chandran, N., & Rastogi, A. (2021). **SiRnn**. *IEEE S\&P 2021*.

[^14]: Patra, A., Schneider, T., Suresh, A., & Yalame, H. (2021). **ABY2.0: Improved Mixed‑Protocol Secure 2PC**. *USENIX Security 2021*.

[^15]: Liu, X., Zheng, Y., Yuan, X., & Yi, X. (2023). **SONIC: Securely Outsourcing NN Inference**. *IEEE TDSC 2023*.

[^16]: Tian, H., Zeng, C., Ren, Z., Chai, D., Zhang, J., Chen, K., & Yang, Q. (2022). **Sphinx**. *IEEE S\&P 2022*.

[^17]: Chandran, N., Gupta, D., Obbattu, S. L. B., & Shah, A. (2022). **SIMC**. *USENIX Security 2022*.

[^18]: Huang, Z., Lu, W., Hong, C., & Ding, J. (2022). **Cheetah: Lean and Fast Secure Two‑Party DNN Inference**. *USENIX Security 2022*.

[^19]: Hao, M., Li, H., Chen, H., Xing, P., Xu, G., & Zhang, T. (2022). **Iron: Private Inference on Transformers**. *NeurIPS 2022*.

[^20]: Wagh, S. (2022). **Pika: Secure Computation using Function Secret Sharing over Rings**. *PoPETS 2022(4)*.

[^21]: Rathee, D., Bhattacharya, A., Sharma, R., Gupta, D., Chandran, N., & Rastogi, A. (2022). **SecFloat: Accurate Floating‑Point meets Secure 2PC**. *IEEE S\&P 2022*.

[^22]: Gupta, K., Kumaraswamy, D., Chandran, N., & Gupta, D. (2022). **LLAMA: A Low Latency Math Library for Secure Inference**. *PoPETS 2022(4)*.

[^23]: Li, D., Wang, H., Shao, R., Guo, H., Xing, E. P., & Zhang, H. (2023). **MPCFORMER**. *ICLR 2023*.

[^24]: Zheng, M., Lou, Q., & Jiang, L. (2023). **Primer**. *DAC 2023*.

[^25]: Hao, M., Li, H., Chen, H., Xing, P., & Zhang, T. (2023). **FastSecNet**. *IEEE TIFS 2023*.

[^26]: Rathee, D., Bhattacharya, A., Gupta, D., Sharma, R., & Song, D. (2023). **Secure Floating‑Point Training**. *USENIX Security 2023*.

[^27]: Jawalkar, N., Gupta, K., Basu, A., Chandran, N., Gupta, D., & Sharma, R. (2024). **Orca**. *IEEE S\&P 2024*.

[^28]: Yang, P., Jiang, Z. L., Gao, S., Wang, H., Zhou, J., Jin, Y., Yiu, S.‑M., & Fang, J. (2025). **FssNN**. *ProvSec 2024 (LNCS 2025)*.

[^29]: Gupta, K., Jawalkar, N., Mukherjee, A., Chandran, N., Gupta, D., Panwar, A., & Sharma, R. (2024). **SIGMA**. *PoPETS 2024(4)*.

[^30]: Pang, Q., Zhu, J., Möllering, H., Zheng, W., & Schneider, T. (2024). **BOLT**. *IEEE S\&P 2024*.

[^31]: Li, Z., Yang, K., Tan, J., Lu, W., Wu, H., Wang, X., Yu, Y., Zhao, D., Zheng, Y., Guo, M., & Leng, J. (2024). **Nimbus**. *NeurIPS 2024*.

[^32]: Xu, G., Han, X., Zhang, T., Xu, S., Ning, J., Huang, X., Li, H., & Deng, R. H. (2024). **SIMC 2.0**. *IEEE TDSC 2024*.

[^33]: Yang, X., Chen, J., Li, Y., He, K., Huang, X., Jiang, Z., Bai, H., & Du, R. (2024). **Fregata**. *IEEE TIFS 2024*.

[^34]: Luo, J., Zhang, Y., Zhang, Z., Zhang, J., Mu, X., Wang, H., Yu, Y., & Xu, Z. (2024). **SecFormer**. *ACL Findings 2024*.

[^35]: Liu, S., Liu, Z., Chen, D., Dai, W., Zhou, L., Liu, Z., Cheung, R. C. C., & Koç, Ç. K. (2025). **MLFormer**. *Journal of Cryptographic Engineering 2025*.

[^36]: Lu, W.‑j., Huang, Z., Gu, Z., Li, J., Liu, J., Ren, K., Hong, C., Wei, T., & Chen, W. (2025). **BumbleBee**. *NDSS 2025*.

[^37]: Kei, A. Y. L., & Chow, S. S. M. (2025). **SHAFT**. *NDSS 2025*.

[^38]: Feng, J., Wu, Y., Sun, H, Zhang, S., & Liu, D. (2025). **Panther**. *IEEE TIFS 2025*.

[^39]: Guo, H., Peng, L., Xue, H., Peng, L., Liu, W., Liu, Z., & Hu, L. (2025). **Improved Secure Two‑party Computation from a Geometric Perspective**. *USENIX Security 2025*.

[^40]: (Preprint) **PriFFT: Privacy‑Preserving FFT‑based Layers for MPC**. *arXiv:2503.03146 (2025)*.

[^41]: Gupta, K., Chandran, N., Gupta, D., Katz, J., & Sharma, R. (2025). **SHARK: Actively Secure Inference Using Function Secret Sharing**. *IEEE S\&P 2025*.
