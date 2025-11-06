***

### Categorization of PPML frameworks by MPC design

| Work                  | Year | Ring     | Field | DM  | HM     | Super HM | Online‑only   | Pre‑processing | Dealer | Outsourcing | Client‑Server | High Throughput | Low Latency | Mixed |
| --------------------- | ---: | -------- | ----- | --- | ------ | -------- | ------------- | -------------- | ------ | :---------: | :-----------: | :-------------: | :---------: | :---: |
| SecureML\[^1]         | 2017 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | SH  | ✘      | ✘        | ✘             | f‑independent  | TTP    |      ✔      |       ✘       |        ✔        |      ✘      |   ✘   |
| DeepSecure\[^2]       | 2017 | ℤ₂       | ✘     | SH  | ✘      | ✘        | ✘             | f‑dependent    | ✘      |      ✔      |       ✘       |        ✘        |      ✔      |   ✘   |
| MiniONN\[^3]          | 2017 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | SH  | ✘      | ✘        | ✘             | f‑independent  | ✘      |      ✘      |       ✔       |        ✘        |      ✔      |   ✘   |
| Chameleon\[^4]        | 2017 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | SH  | ✘      | ✘        | ✘             | ✘              | TTP    |      ✔      |       ✘       |        ✔        |      ✘      |   ✘   |
| GAZELLE\[^5]          | 2018 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | SH  | ✘      | ✘        | ✘             | f‑independent  | ✘      |      ✘      |       ✔       |        ✘        |      ✔      |   ✘   |
| ABY³\[^6]             | 2018 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | ✘   | SH/A   | ✘        | ✘             | f‑independent  | ✘      |      ✔      |       ✘       |        ✔        |      ✘      |   ✘   |
| SecureNN\[^7]         | 2018 | $ℤ_{2^\ell}$     | 𝔽ₚ   | ✘   | SH/A   | ✘        | ✔             | ✘              | ✘      |      ✔      |       ✘       |        ✔        |      ✘      |   ✘   |
| ASTRA\[^8]            | 2019 | —        | —     | ✘   | SH/A/F | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| CrypTFlow\[^9]        | 2019 | —        | —     | ✘   | SH/A   | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| Trident\[^10]         | 2019 | —        | —     | ✘   | F      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| PrivPy\[^11]          | 2019 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| Delphi\[^12]          | 2020 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✘      |       ✔       |        —        |      —      |   —   |
| CrypTFlow2\[^13]      | 2020 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✘      |       ✔       |        —        |      —      |   —   |
| Shen et al.\[^14]     | 2020 | —        | —     | ✘   | SH     | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| Falcon\[^15]          | 2020 | $ℤ_{2^\ell}$     | 𝔽ₚ   | ✘   | SH/A   | ✘        | ✘             | f‑independent  | ✘      |      ✔      |       ✘       |        ✔        |      ✘      |   ✘   |
| BLAZE\[^16]           | 2020 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | ✘   | A/F    | ✘        | ✘             | f‑dependent    | ✘      |      ✔      |       ✘       |        ✔        |      ✘      |   ✘   |
| FLASH\[^17]           | 2020 | —        | —     | A/R | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| SWIFT\[^18]           | 2020 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | R   | R      | ✘        | ✘             | f‑dependent    | ✘      |      ✔      |       ✘       |        ✔        |      ✘      |   ✘   |
| MediSC\[^19]          | 2021 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✘      |       ✔       |        —        |      —      |   —   |
| COINN\[^20]           | 2021 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✘      |       ✔       |        —        |      —      |   —   |
| Muse\[^21]            | 2021 | —        | —     | A^C | ✘      | ✘        | —             | —              | —      |      ✘      |       ✔       |        —        |      —      |   —   |
| AriaNN\[^22]          | 2021 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| SiRnn\[^23]           | 2021 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | SH  | ✘      | ✘        | ✔             | ✘              | ✘      |      ✔      |       ✘       |        ✔        |      ✘      |   ✘   |
| ABY2.0\[^24]          | 2021 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | SH  | ✘      | ✘        | ✘             | f‑dependent    | ✘      |      ✔      |       ✘       |        ✔        |      ✘      |   ✘   |
| Fantastic Four\[^25]  | 2021 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | ✘   | A/R    | ✔        | f‑independent | ✘              | ✔      |      ✘      |       ✔       |        ✘        |      ✘      |       |
| Tetrad\[^26]          | 2021 | —        | —     | ✘   | F/R    | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| SONIC\[^27]           | 2022 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| Sphinx\[^28]          | 2022 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✘      |       ✔       |        —        |      —      |   —   |
| SIMC\[^29]            | 2022 | ✘        | 𝔽ₚ   | A^C | ✘      | ✘        | ✘             | f‑independent  | ✘      |      ✘      |       ✔       |        ✘        |      ✔      |   ✘   |
| Cheetah\[^30]         | 2022 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | SH  | ✘      | ✘        | ✔             | ✘              | ✘      |      ✘      |       ✔       |        ✘        |      ✘      |   ✔   |
| Iron\[^31]            | 2022 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✘      |       ✔       |        —        |      —      |   —   |
| Pika\[^32]            | 2022 | —        | —     | A   | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| SecFloat\[^33]        | 2022 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| Llama\[^34]           | 2022 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| pMPL\[^35]            | 2022 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| Adam in Private\[^36] | 2022 | ✘        | 𝔽ₚ   | ✘   | A      | ✘        | ✘             | f‑independent  | ✘      |      ✔      |       ✘       |        ✔        |      ✘      |   ✘   |
| MPCFormer\[^37]       | 2023 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| Primer\[^38]          | 2023 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✘      |       ✔       |        —        |      —      |   —   |
| FastSecNet\[^39]      | 2023 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✘      |       ✔       |        —        |      —      |   —   |
| Rathee et al.\[^40]   | 2023 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| Orca\[^41]            | 2023 | $ℤ_{2^\ell}$     | ✘     | SH  | ✘      | ✘        | ✘             | ✘              | TTP    |      ✔      |       ✘       |        ✘        |      ✔      |   ✘   |
| FssNN\[^42]           | 2023 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| SIGMA\[^43]           | 2023 | —        | —     | SH  | ✘      | ✘        | —             | —              | —      |      ✔      |       ✘       |        —        |      —      |   —   |
| BOLT\[^44]            | 2023 | $ℤ_{2^\ell}$     | ✘     | SH  | ✘      | ✘        | ✔             | ✘              | ✘      |      ✘      |       ✔       |        ✘        |      ✘      |   ✔   |
| Force\[^45]           | 2023 | $ℤ_{2^\ell}$, ℤ₂ | ✘     | ✘   | SH     | ✘        | f‑independent | ✘              | ✔      |      ✘      |       ✔       |        ✘        |      ✘      |       |
| Fusion\[^46]          | 2023 | —        | —     | A^S | ✘      | ✘        | —             | —              | —      |      ✘      |       ✔       |        —        |      —      |   —   |

***


#### References (for this table; numbering restarts here)

[^1]: Mohassel, P., & Zhang, Y. (2017). **SecureML**. *IEEE S\&P 2017*, 19–38. <https://doi.org/10.1109/SP.2017.12>

[^2]: Rouhani, B. D., Riazi, M. S., & Koushanfar, F. (2018). **DeepSecure**. *DAC 2018*. <https://doi.org/10.1145/3195970.3196023>

[^3]: Liu, J., Juuti, M., Lu, Y., & Asokan, N. (2017). **MiniONN**. *CCS 2017*. <https://doi.org/10.1145/3133956.3134056>

[^4]: Riazi, M. S., et al. (2018). **Chameleon**. *AsiaCCS 2018*. <https://doi.org/10.1145/3196494.3196522>

[^5]: Juvekar, C., Vaikuntanathan, V., & Chandrakasan, A. P. (2018). **GAZELLE**. *USENIX Security 2018*.

[^6]: Mohassel, P., & Rindal, P. (2018). **ABY³**. *CCS 2018*. <https://doi.org/10.1145/3243734.3243760>

[^7]: Wagh, S., Gupta, D., & Chandran, N. (2019). **SecureNN**. *PoPETS 2019(3)*. <https://doi.org/10.2478/popets-2019-0035>

[^8]: Chaudhari, H., Choudhury, A., Patra, A., & Suresh, A. (2019). **ASTRA**. *CCSW\@CCS 2019*. <https://doi.org/10.1145/3338466.3358922>

[^9]: Kumar, N., Rathee, M., Chandran, N., Gupta, D., Rastogi, A., & Sharma, R. (2020). **CrypTFlow**. *IEEE S\&P 2020*. <https://doi.org/10.1109/SP40000.2020.00092>

[^10]: Dong, Y., Chen, X., Jing, W., Li, K., & Wang, W. (2023). **Meteor**. *WWW 2023*. <https://doi.org/10.1145/3543507.3583272>

[^11]: Akimoto, Y., Fukuchi, K., Akimoto, Y., & Sakuma, J. (2023). **PrivFormer**. *IEEE EuroS\&P 2023*. <https://doi.org/10.1109/EuroSP57164.2023.00031>

[^12]: Mishra, P., Lehmkuhl, R., Srinivasan, A., Zheng, W., & Popa, R. A. (2020). **Delphi**. *USENIX Security 2020*.

[^13]: Rathee, D., et al. (2020). **CrypTFlow2**. *CCS 2020*. <https://doi.org/10.1145/3372297.3417274>

[^14]: Shen, L., Chen, X., Shi, J., Dong, Y., & Fang, B. (2020). **Efficient 3‑party NN inference**. *ESORICS 2020*. <https://doi.org/10.1007/978-3-030-58951-6_21>

[^15]: Wagh, S., Tople, S., Benhamouda, F., Kushilevitz, E., Mittal, P., & Rabin, T. (2021). **Falcon**. *PoPETS 2021(1)*. <https://doi.org/10.2478/popets-2021-0011>

[^16]: Patra, A., & Suresh, A. (2020). **BLAZE**. *NDSS 2020*.

[^17]: Byali, M., Chaudhari, H., Patra, A., & Suresh, A. (2020). **FLASH**. *PoPETS 2020(2)*. <https://doi.org/10.2478/POPETS-2020-0036>

[^18]: Koti, N., Pancholi, M., Patra, A., & Suresh, A. (2021). **SWIFT**. *USENIX Security 2021*.

[^19]: Liu, X., Zheng, Y., Yuan, X., & Yi, X. (2021). **MediSC**. *ESORICS 2021*.

[^20]: Hussain, S. U., Javaheripi, M., Samragh, M., & Koushanfar, F. (2021). **COINN**. *CCS 2021*. <https://doi.org/10.1145/3460120.3484797>

[^21]: Lehmkuhl, R., Mishra, P., Srinivasan, A., & Popa, R. A. (2021). **Muse**. *USENIX Security 2021*.

[^22]: Ryffel, T., Tholoniat, P., Pointcheval, D., & Bach, F. (2022). **AriaNN**. *PoPETS 2022(1)*. <https://doi.org/10.2478/POPETS-2022-0015>

[^23]: Rathee, D., Rathee, M., Goli, R. K. K., Gupta, D., Sharma, R., Chandran, N., & Rastogi, A. (2021). **SiRnn**. *IEEE S\&P 2021*.

[^24]: Patra, A., Schneider, T., Suresh, A., & Yalame, H. (2021). **ABY2.0**. *USENIX Security 2021*.

[^25]: Dalskov, A. P. K., Escudero, D., & Keller, M. (2021). **Fantastic Four**. *USENIX Security 2021*.

[^26]: Koti, N., Patra, A., Rachuri, R., & Suresh, A. (2022). **Tetrad**. *NDSS 2022*.

[^27]: Liu, X., Zheng, Y., Yuan, X., & Yi, X. (2023). **SONIC**. *IEEE TDSC 20(1)*.

[^28]: Tian, H., Zeng, C., Ren, Z., et al. (2022). **Sphinx**. *IEEE S\&P 2022*. <https://doi.org/10.1109/SP46214.2022.9833648>

[^29]: Chandran, N., Gupta, D., Obbattu, S. L. B., & Shah, A. (2022). **SIMC**. *USENIX Security 2022*.

[^30]: Huang, Z., Lu, W., Hong, C., & Ding, J. (2022). **Cheetah**. *USENIX Security 2022*.

[^31]: Hao, M., Li, H., Chen, H., Xing, P., Xu, G., & Zhang, T. (2022). **Iron**. *NeurIPS 2022*.

[^32]: Wagh, S. (2022). **Pika**. *PoPETS 2022(4)*.

[^33]: Rathee, D., Bhattacharya, A., Sharma, R., Gupta, D., Chandran, N., & Rastogi, A. (2022). **SecFloat**. *IEEE S\&P 2022*.

[^34]: Gupta, K., Kumaraswamy, D., Chandran, N., & Gupta, D. (2022). **LLAMA**. *PoPETS 2022(4)*.

[^35]: Song, L., Wang, J., Wang, Z., et al. (2022). **pMPL**. *CCS 2022*.

[^36]: Attrapadung, N., Hamada, K., Ikarashi, D., et al. (2022). **Adam in Private**. *PoPETS 2022(4)*.

[^37]: Li, D., Wang, H., Shao, R., Guo, H., Xing, E. P., & Zhang, H. (2023). **MPCFORMER**. *ICLR 2023*.

[^38]: Zheng, M., Lou, Q., & Jiang, L. (2023). **Primer**. *DAC 2023*.

[^39]: Hao, M., Li, H., Chen, H., Xing, P., & Zhang, T. (2023). **FastSecNet**. *IEEE TIFS 18*.

[^40]: Rathee, D., Bhattacharya, A., Gupta, D., Sharma, R., & Song, D. (2023). **Secure Floating‑Point Training**. *USENIX Security 2023*.

[^41]: Jawalkar, N., Gupta, K., Basu, A., Chandran, N., Gupta, D., & Sharma, R. (2024). **Orca**. *IEEE S\&P 2024*.

[^42]: Yang, P., Jiang, Z. L., Gao, S., et al. (2025). **FssNN**. *ProvSec 2024 (LNCS 2025)*.

[^43]: Gupta, K., Jawalkar, N., Mukherjee, A., et al. (2024). **SIGMA**. *PoPETS 2024(4)*.

[^44]: Pang, Q., Zhu, J., Möllering, H., Zheng, W., & Schneider, T. (2024). **BOLT**. *IEEE S\&P 2024*.

[^45]: Dai, T., Duan, L., Jiang, Y., et al. (2023). **Force**. *IACR ePrint 2023/493*.

[^46]: Dong, C., Weng, J., Liu, J.‑N., et al. (2023). **Fusion**. *NDSS 2023*.

***
