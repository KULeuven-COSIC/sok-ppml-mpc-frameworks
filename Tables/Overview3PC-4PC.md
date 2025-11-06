### Systematic overview of 3PC and 4PC frameworks

*(✔ = available, ◐ = partial, ✘ = unavailable. O = Outsourcing, C‑S = Client‑Server. SH = Semi‑honest, A = Malicious, F = Fairness, R = Covert, A^C = Covert.)*

| Framework               | Year |    2   |    3   |  4  |  HE |  OT |  GC |  ZK |  SS | Setting |  Sec.  | Training | Inference | Theoretical | Experimental |
| ----------------------- | ---- | :----: | :----: | :-: | :-: | :-: | :-: | :-: | :-: | :-----: | :----: | :------: | :-------: | :---------: | :----------: |
| ABY3[^1]                | 2018 |    ✘   |    ✔   |  ✘  |  ✘  |  ✔  |  ✔  |  ✘  |  ✔  |    O    |  SH/A  |     ✔    |     ✔     |    ◐[^N5]   |       ✔      |
| SecureNN[^2]            | 2018 |    ✘   |    ✔   |  ✘  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |  SH/A  |     ✔    |     ✔     |      ✔      |       ✔      |
| ASTRA[^3]               | 2019 | ◐[^N3] |    ✔   |  ✘  |  ✘  |  ✔  |  ✔  |  ✘  |  ✔  |    O    | SH/A/F |     ✘    |     ✔     |    ◐[^N5]   |    ◐[^N4]    |
| CrypTFlow[^4]           | 2019 |    ✘   |    ✔   |  ✘  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |  SH/A  |     ✘    |     ✔     |      ✔      |       ✔      |
| Shen et al.[^5]         | 2020 |    ✘   |    ✔   |  ✘  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |   SH   |     ✘    |     ✔     |      ✘      |    ◐[^N4]    |
| Falcon[^6]              | 2020 |    ✘   |    ✔   |  ✘  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |  SH/A  |     ✔    |     ✔     |    ◐[^N5]   |       ✔      |
| BLAZE[^7]               | 2020 |    ✘   |    ✔   |  ✘  |  ✘  |  ✔  |  ✔  |  ✔  |  ✔  |    O    |    F   |     ✔    |     ✔     |      ✔      |    ◐[^N4]    |
| pMPL[^8]                | 2022 |    ✔   |    ✔   |  ✘  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |   SH   |     ✔    |     ✔     |    ◐[^N6]   |       ✔      |
| Adam in Private[^9]     | 2022 |    ✘   |    ✔   |  ✘  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |  SH/A  |     ✔    |     ✔     |      ✔      |    ◐[^N4]    |
| Meteor[^10]             | 2023 |    ✘   |    ✔   |  ✘  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |   SH   |     ✘    |     ✔     |    ◐[^N6]   |       ✔      |
| PrivFormer[^11]         | 2023 |    ✘   |    ✔   |  ✘  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |   SH   |     ✘    |     ✔     |      ✔      |    ◐[^N4]    |
| Trio[^12]               | 2024 |    ✘   |    ✔   |  ✘  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |   SH   |     ✘    |     ✔     |    ◐[^N5]   |       ✔      |
| Brügge­mann et al.[^13] | 2024 |    ✘   |    ✔   |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |  ✔  |  C‑S/O  |    A   |     ✘    |     ✔     |    ◐[^N5]   |    ◐[^N4]    |
| Trident[^14]            | 2019 |    ✘   | ◐[^N3] |  ✔  |  ✘  |  ✔  |  ✔  |  ✘  |  ✔  |    O    |    F   |     ✔    |     ✔     |      ✔      |    ◐[^N4]    |
| PrivPy[^15]             | 2019 |    ✘   |    ✘   |  ✔  |  ✘  |  ✔  |  ✘  |  ✘  |  ✔  |    O    |   SH   |     ✔    |     ✔     |      ✘      |    ◐[^N4]    |
| FLASH[^16]              | 2020 |    ✘   |    ✘   |  ✔  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |   A/R  |     ✘    |     ✔     |      ✔      |    ◐[^N4]    |
| SWIFT[^17]              | 2020 |    ✘   |    ✔   |  ✔  |  ✘  |  ✘  |  ✘  |  ✔  |  ✔  |    O    |    R   |  ◐[^N1]  |     ✔     |      ✔      |    ◐[^N4]    |
| Fantastic Four[^18]     | 2021 |    ✘   |    ✔   |  ✔  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |   A/R  |     ✔    |     ✔     |    ◐[^N5]   |    ◐[^N4]    |
| Tetrad[^19]             | 2021 | ◐[^N3] |    ✘   |  ✔  |  ✘  |  ✔  |  ✔  |  ✘  |  ✔  |    O    |   F/R  |     ✔    |     ✔     |    ◐[^N5]   |    ◐[^N4]    |
| Quad[^12]               | 2024 |    ✘   |    ✘   |  ✔  |  ✘  |  ✘  |  ✘  |  ✘  |  ✔  |    O    |    A   |     ✘    |     ✔     |    ◐[^N5]   |       ✔      |


#### Notes

[^N1]: Training of LinReg and LogReg only.

[^N3]: Online phase.

[^N4]: Implementation not public.

[^N5]: Only primitives (no ML functionalities).

[^N6]: No costs for offline phase.

***

#### References (for this table)

[^1]: Mohassel, P., & Rindal, P. (2018). **ABY³: A Mixed Protocol Framework for Machine Learning**. *CCS 2018*, 35–52. <https://doi.org/10.1145/3243734.3243760>

[^2]: Wagh, S., Gupta, D., & Chandran, N. (2019). **SecureNN: 3‑Party Secure Computation for Neural Network Training**. *PoPETS 2019(3)*, 26–49. <https://doi.org/10.2478/popets-2019-0035>

[^3]: Chaudhari, H., Choudhury, A., Patra, A., & Suresh, A. (2019). **ASTRA: High Throughput 3PC over Rings with Application to Secure Prediction**. *CCSW\@CCS 2019*, 81–92. <https://doi.org/10.1145/3338466.3358922>

[^4]: Kumar, N., Rathee, M., Chandran, N., Gupta, D., Rastogi, A., & Sharma, R. (2020). **CrypTFlow: Secure TensorFlow Inference**. *IEEE S\&P 2020*, 336–353. <https://doi.org/10.1109/SP40000.2020.00092>

[^5]: Shen, L., Chen, X., Shi, J., Dong, Y., & Fang, B. (2020). **An Efficient 3‑Party Framework for Privacy‑Preserving Neural Network Inference**. *ESORICS 2020*, 419–439. <https://doi.org/10.1007/978-3-030-58951-6_21>

[^6]: Wagh, S., Tople, S., Benhamouda, F., Kushilevitz, E., Mittal, P., & Rabin, T. (2021). **Falcon: Honest‑Majority Maliciously Secure Framework for Private Deep Learning**. *PoPETS 2021(1)*, 188–208. <https://doi.org/10.2478/popets-2021-0011>

[^7]: Patra, A., & Suresh, A. (2020). **BLAZE: Blazing Fast Privacy‑Preserving Machine Learning**. *NDSS 2020*. <https://www.ndss-symposium.org/ndss-paper/blaze-blazing-fast-privacy-preserving-machine-learning/>

[^8]: Song, L., Wang, J., Wang, Z., Tu, X., Lin, G., Ruan, W., Wu, H., & Han, W. (2022). **pMPL: A Robust Multi‑Party Learning Framework with a Privileged Party**. *CCS 2022*, 2689–2703. <https://doi.org/10.1145/3548606.3560697>

[^9]: Attrapadung, N., Hamada, K., Ikarashi, D., Kikuchi, R., Matsuda, T., Mishina, I., Morita, H., & Schuldt, J. C. N. (2022). **Adam in Private: Secure and Fast Training of DNNs with Adam**. *PoPETS 2022(4)*, 746–767. <https://doi.org/10.56553/POPETS-2022-0131>

[^10]: Dong, Y., Chen, X., Jing, W., Li, K., & Wang, W. (2023). **Meteor: Improved Secure 3‑Party NN Inference with Reduced Online Communication**. *WWW 2023*, 2087–2098. <https://doi.org/10.1145/3543507.3583272>

[^11]: Akimoto, Y., Fukuchi, K., Akimoto, Y., & Sakuma, J. (2023). **PrivFormer: Privacy‑Preserving Transformer with MPC**. *IEEE EuroS\&P 2023*, 392–410. <https://doi.org/10.1109/EuroSP57164.2023.00031>

[^12]: Harth‑Kitzerow, C., Suresh, A., Wang, Y., Yalame, H., Carle, G., & Annavaram, M. (2025). **High‑Throughput Secure MPC with an Honest Majority in Various Network Settings** (“Trio” & “Quad”). *PoPETS 2025(1)*, 250–272. <https://doi.org/10.56553/POPETS-2025-0015>

[^13]: Brüggemann, A., Schick, O., Schneider, T., Suresh, A., & Yalame, H. (2024). **Don’t Eject the Impostor: Fast Three‑Party Computation With a Known Cheater**. *IEEE S\&P 2024*, 503–522. <https://doi.org/10.1109/SP54263.2024.00164>

[^14]: Koti, N., Rachuri, R., & Suresh, A. (2020). **Trident: Efficient 4PC Framework for Privacy‑Preserving ML**. *NDSS 2020*. <https://www.ndss-symposium.org/ndss-paper/trident-efficient-4pc-framework-for-privacy-preserving-machine-learning/>

[^15]: Li, Y., & Xu, W. (2019). **PrivPy: General and Scalable Privacy‑Preserving Data Mining**. *KDD 2019*, 1299–1307. <https://doi.org/10.1145/3292500.3330920>

[^16]: Byali, M., Chaudhari, H., Patra, A., & Suresh, A. (2020). **FLASH: Fast and Robust Framework for Privacy‑Preserving Machine Learning**. *PoPETS 2020(2)*, 459–480. <https://doi.org/10.2478/POPETS-2020-0036>

[^17]: Koti, N., Pancholi, M., Patra, A., & Suresh, A. (2021). **SWIFT: Super‑fast and Robust Privacy‑Preserving Machine Learning**. *USENIX Security 2021*, 2651–2668. <https://www.usenix.org/conference/usenixsecurity21/presentation/koti>

[^18]: Dalskov, A. P. K., Escudero, D., & Keller, M. (2021). **Fantastic Four: Honest‑Majority 4PC With Malicious Security**. *USENIX Security 2021*, 2183–2200. <https://www.usenix.org/conference/usenixsecurity21/presentation/dalskov>

[^19]: Koti, N., Patra, A., Rachuri, R., & Suresh, A. (2022). **Tetrad: Actively Secure 4PC for Secure Training and Inference**. *NDSS 2022*. <https://www.ndss-symposium.org/ndss-paper/auto-draft-202/>

