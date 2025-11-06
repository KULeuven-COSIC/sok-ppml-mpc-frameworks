### Systematic overview of 2PC frameworks

*(✔ = available, ◐ = partial, ✘ = unavailable. O = Outsourcing, C‑S = Client‑Server. SH = Semi‑honest, A = Malicious, A^C = Covert.)*

| Framework          | Year | 2 parties | 3 parties | 4 parties | HE | OT | GC | ZK | SS/FSS | Setting | Sec. | Training | Inference | Theoretical | Experimental |
| ------------------ | ---- | --------- | --------- | --------- | -- | -- | -- | -- | ------ | ------- | ---- | -------- | --------- | ----------- | ------------ |
| SecureML[^1]       | 2017 | ✔         | ◐[^N2]    | ✘         | ✔  | ✔  | ✘  | ✘  | ✔      | O       | SH   | ✔        | ✔         | ✘           | ◐[^N4]       |
| DeepSecure[^2]     | 2017 | ✔         | ✘         | ✘         | ✘  | ✔  | ✔  | ✘  | ✘      | O       | SH   | ✔        | ✔         | ✘           | ◐[^N4]       |
| MiniONN[^3]        | 2017 | ✔         | ✘         | ✘         | ✔  | ✔  | ✔  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✘           | ◐[^N4]       |
| Chameleon[^4]      | 2017 | ✔         | ◐[^N2]    | ✘         | ✘  | ✔  | ✔  | ✘  | ✔      | O       | SH   | ✘        | ✔         | ✘           | ◐[^N4]       |
| Gazelle[^5]        | 2018 | ✔         | ✘         | ✘         | ✔  | ✔  | ✔  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✘           | ◐[^N4]       |
| Delphi[^6]         | 2020 | ✔         | ✘         | ✘         | ✔  | ✔  | ✔  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✘           | ✔            |
| Cryptflow2[^7]     | 2020 | ✔         | ✘         | ✘         | ✔  | ✔  | ✘  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✔           | ✔            |
| MediSC[^8]         | 2021 | ✔         | ◐[^N2]    | ✘         | ✘  | ✘  | ✘  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✘           | ◐[^N4]       |
| COINN[^9]          | 2021 | ✔         | ✘         | ✘         | ✘  | ✔  | ✔  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✔           | ✔            |
| Muse[^10]          | 2021 | ✔         | ✘         | ✘         | ✔  | ✔  | ✔  | ✔  | ✔      | C‑S     | A^C  | ✘        | ✔         | ✘           | ◐[^N4]       |
| AriaNN[^11]        | 2021 | ✔         | ◐[^N2]    | ✘         | ✘  | ✘  | ✘  | ✘  | FSS    | O       | SH   | ✔        | ✔         | ◐[^N7]      | ✔            |
| SiRnn[^12]         | 2021 | ✔         | ✘         | ✘         | ✘  | ✔  | ✘  | ✘  | ✔      | O       | SH   | ✘        | ✔         | ◐[^N6]      | ✔            |
| ABY2.0[^13]        | 2021 | ✔         | ✘         | ✘         | ✔  | ✔  | ✔  | ✘  | ✔      | O       | SH   | ✔        | ✔         | ◐[^N6]      | ◐[^N4]       |
| SONIC[^14]         | 2022 | ✔         | ◐[^N2]    | ✘         | ✘  | ✘  | ✘  | ✘  | ✔      | O       | SH   | ✘        | ✔         | ✔           | ◐[^N4]       |
| Sphinx[^15]        | 2022 | ✔         | ✘         | ✘         | ✔  | ✘  | ✘  | ✘  | ✔      | C‑S     | SH   | ✔        | ✔         | ✘           | ◐[^N4]       |
| SIMC[^16]          | 2022 | ✔         | ✘         | ✘         | ✔  | ✔  | ✔  | ✔  | ✔      | C‑S     | A^C  | ✘        | ✔         | ✘           | ✔            |
| Cheetah[^17]       | 2022 | ✔         | ✘         | ✘         | ✔  | ✔  | ✘  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ◐[^N6]      | ✔            |
| Iron[^18]          | 2022 | ✔         | ✘         | ✘         | ✔  | ✔  | ✘  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✘           | ◐[^N4]       |
| Pika[^19]          | 2022 | ✔         | ◐[^N2]    | ✘         | ✘  | ✘  | ✘  | ✘  | FSS    | O       | A    | ✔        | ✔         | ◐[^N6]      | ◐[^N4]       |
| SecFloat[^20]      | 2022 | ✔         | ✘         | ✘         | ✘  | ✔  | ✘  | ✘  | ✔      | O       | SH   | ✔        | ✔         | ◐[^N6]      | ✔            |
| Llama[^21]         | 2022 | ✔         | ◐[^N2]    | ✘         | ✘  | ✘  | ✘  | ✘  | FSS    | O       | SH   | ✘        | ✔         | ✔           | ✔            |
| MPCFormer[^22]     | 2023 | ✔         | ✘         | ✘         | ✔  | ✘  | ✘  | ✘  | ✔      | O       | SH   | ✘        | ✔         | ✘           | ✔            |
| Primer[^23]        | 2023 | ✔         | ✘         | ✘         | ✔  | ✔  | ✔  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✘           | ◐[^N4]       |
| FastSecNet[^24]    | 2023 | ✔         | ◐[^N2]    | ✘         | ✘  | ✘  | ✘  | ✘  | FSS    | C‑S     | SH   | ✘        | ✔         | ✘           | ◐[^N4]       |
| Rathee et al.[^25] | 2023 | ✔         | ✘         | ✘         | ✘  | ✔  | ✘  | ✘  | ✔      | O       | SH   | ✔        | ✔         | ✘           | ✔            |
| Orca[^26]          | 2023 | ✔         | ◐[^N2]    | ✘         | ✘  | ✘  | ✘  | ✘  | FSS    | O       | SH   | ✔        | ✔         | ✔           | ✔            |
| FssNN[^27]         | 2023 | ✔         | ✘         | ✘         | ✘  | ✔  | ✘  | ✘  | FSS    | O       | SH   | ✔        | ✔         | ◐[^N7]      | ◐[^N4]       |
| Sigma[^28]         | 2023 | ✔         | ◐[^N2]    | ✘         | ✘  | ✘  | ✘  | ✘  | FSS    | O       | SH   | ✘        | ✔         | ✔           | ✔            |
| Bolt[^29]          | 2023 | ✔         | ✘         | ✘         | ✔  | ✔  | ✘  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✘           | ✔            |
| Nimbus[^30]        | 2024 | ✔         | ✘         | ✘         | ✔  | ✔  | ✘  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✘           | ✔            |
| SIMC 2.0[^31]      | 2024 | ✔         | ✘         | ✘         | ✔  | ✔  | ✔  | ✔  | ✔      | C‑S     | A^C  | ✘        | ✔         | ✘           | ◐[^N4]       |
| Fregata[^32]       | 2024 | ✔         | ✘         | ✘         | ✔  | ✘  | ✘  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✘           | ◐[^N4]       |
| SecFormer[^33]     | 2024 | ✔         | ◐[^N2]    | ✘         | ✘  | ✘  | ✘  | ✘  | ✔      | O       | SH   | ✘        | ✔         | ✘           | ◐[^N4]       |
| MLFormer[^34]      | 2024 | ✔         | ✘         | ✘         | ✔  | ✘  | ✘  | ✘  | ✔      | O       | SH   | ✘        | ✔         | ✘           | ◐[^N4]       |
| BumbleBee[^35]     | 2025 | ✔         | ✘         | ✘         | ✔  | ✘  | ✘  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ✘           | ✔            |
| SHAFT[^36]         | 2025 | ✔         | ◐[^N2]    | ✘         | ✘  | ✘  | ✘  | ✘  | ✔      | O       | SH   | ✘        | ✔         | ✘           | ✔            |
| Panther[^37]       | 2025 | ✔         | ✘         | ✘         | ✔  | ✔  | ✘  | ✘  | ✔      | C‑S     | SH   | ✘        | ✔         | ◐[^N6]      | ◐[^N4]       |
| Guo et al.[^38]    | 2025 | ✔         | ✘         | ✘         | ✘  | ✔  | ✘  | ✘  | ✔      | O       | SH   | ✘        | ✘         | ✔           | ✔            |
| Shark[^39]         | 2025 | ✔         | ◐[^N2]    | ✘         | ✘  | ✘  | ✘  | ✘  | FSS    | O       | A    | ✘        | ✔         | ✔           | ✔            |

***

#### Notes

[^N2]: Dealer in the offline phase

[^N4]: Implementation not public

[^N6]: Only primitives (no ML functionalities)

[^N7]: No costs for offline phase

***

#### References

[^1]: Mohassel, P., & Zhang, Y. (2017). *SecureML: A System for Scalable Privacy-Preserving Machine Learning*. IEEE S\&P.

[^2]: Rouhani, B. D., Riazi, M. S., & Koushanfar, F. (2018). *DeepSecure: Scalable Provably-Secure Deep Learning*. DAC.

[^3]: Liu, J., Juuti, M., Lu, Y., & Asokan, N. (2017). *Oblivious Neural Network Predictions via MiniONN Transformations*. CCS.

[^4]: Riazi, M. S., et al. (2018). *Chameleon: A Hybrid Secure Computation Framework for ML Applications*. AsiaCCS.

[^5]: Juvekar, C., et al. (2018). *GAZELLE: A Low Latency Framework for Secure NN Inference*. USENIX Security.

[^6]: Mishra, P., et al. (2020). *Delphi: A Cryptographic Inference Service for Neural Networks*. USENIX Security.

[^7]: Rathee, D., et al. (2020). *CrypTFlow2: Practical 2-Party Secure Inference*. CCS.

[^8]: Liu, X., et al. (2021). *MediSC: Towards Secure and Lightweight DL as a Medical Diagnostic Service*. ESORICS.

[^9]: Hussain, S. U., et al. (2021). *COINN: Crypto/ML Codesign for Oblivious Inference*. CCS.

[^10]: Lehmkuhl, R., et al. (2021). *Muse: Secure Inference Resilient to Malicious Clients*. USENIX Security.

[^11]: Ryffel, T., et al. (2022). *AriaNN: Low-Interaction PPDL via Function Secret Sharing*. PoPETS.

[^12]: Rathee, D., et al. (2021). *SiRnn: A Math Library for Secure RNN Inference*. IEEE S\&P.

[^13]: Patra, A., et al. (2021). *ABY2.0: Improved Mixed-Protocol Secure 2PC*. USENIX Security.

[^14]: Liu, X., et al. (2023). *SONIC: Securely Outsourcing NN Inference to the Cloud*. IEEE TDSC.

[^15]: Tian, H., et al. (2022). *Sphinx: Enabling Privacy-Preserving Online Learning over the Cloud*. IEEE S\&P.

[^16]: Chandran, N., et al. (2022). *SIMC: ML Inference Secure Against Malicious Clients at Semi-Honest Cost*. USENIX Security.

[^17]: Huang, Z., et al. (2022). *Cheetah: Lean and Fast Secure Two-Party DNN Inference*. USENIX Security.

[^18]: Hao, M., et al. (2022). *Iron: Private Inference on Transformers*. NeurIPS.

[^19]: Wagh, S. (2022). *Pika: Secure Computation using Function Secret Sharing over Rings*. PoPETS.

[^20]: Rathee, D., et al. (2022). *SecFloat: Accurate Floating-Point meets Secure 2PC*. IEEE S\&P.

[^21]: Gupta, K., et al. (2022). *LLAMA: A Low Latency Math Library for Secure Inference*. PoPETS.

[^22]: Li, D., et al. (2023). *MPCFORMER: Fast, Performant and Private Transformer Inference with MPC*. ICLR.

[^23]: Zheng, M., et al. (2023). *Primer: Fast Private Transformer Inference on Encrypted Data*. DAC.

[^24]: Hao, M., et al. (2023). *FastSecNet: An Efficient Cryptographic Framework for Private NN Inference*. IEEE TIFS.

[^25]: Rathee, D., et al. (2023). *Secure Floating-Point Training*. USENIX Security.

[^26]: Jawalkar, N., et al. (2024). *Orca: FSS-based Secure Training and Inference with GPUs*. IEEE S\&P.

[^27]: Yang, P., et al. (2025). *FssNN: Communication-Efficient Secure NN via Key-Reduced DCF*. ProvSec.

[^28]: Gupta, K., et al. (2024). *SIGMA: Secure GPT Inference with FSS*. PoPETS.

[^29]: Pang, Q., et al. (2024). *BOLT: Privacy-Preserving, Accurate and Efficient Inference for Transformers*. IEEE S\&P.

[^30]: Li, Z., et al. (2024). *Nimbus: Secure and Efficient 2-Party Inference for Transformers*. NeurIPS.

[^31]: Xu, G., et al. (2024). *SIMC 2.0: Improved Secure ML Inference Against Malicious Clients*. IEEE TDSC.

[^32]: Yang, X., et al. (2024). *Fregata: Fast Private Inference With Unified Secure Two-Party Protocols*. IEEE TIFS.

[^33]: Luo, J., et al. (2024). *SecFormer: Fast & Accurate Privacy-Preserving Inference for Transformers via SMPC*. ACL Findings.

[^34]: Liu, S., et al. (2025). *MLFormer: A High-Performance MPC Linear Inference Framework for Transformers*. JCE.

[^35]: Lu, W., et al. (2025). *BumbleBee: Secure Two-party Inference Framework for Large Transformers*. NDSS.

[^36]: Kei, A., & Chow, S. (2025). *SHAFT: Secure, Handy, Accurate and Fast Transformer Inference*. NDSS.

[^37]: Feng, J., et al. (2025). *Panther: Practical Secure Two-Party Neural Network Inference*. IEEE TIFS.

[^38]: Guo, H., et al. (2025). *Improved Secure Two-party Computation from a Geometric Perspective*. USENIX Security.

[^39]: Gupta, K., et al. (2025). *SHARK: Actively Secure Inference Using Function Secret Sharing*. IEEE S\&P.

