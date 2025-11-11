### Systematic overview of $$N$$-party ML frameworks. (✓) denotes availability, (◐) partial availability, (✗) unavailability. Abbreviations: **O** = Outsourcing. Additional abbreviations are defined in Table 2.

| Scheme               | Year | HM/DM |  HE |  OT |  GC |  ZK |  SS | Setting | Sec. | Training | Inference | Theoretical | Experimental |
| -------------------- | ---: | :---: | :-: | :-: | :-: | :-: | :-: | :-----: | :--: | :------: | :-------: | :---------: | :----------: |
| MPClan [1]           | 2023 |   HM  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    | SH/A |     ✗    |     ✓     |      ✓      |       ✓      |
| Baccarini et al. [2] | 2023 |   HM  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |  SH  |     ✗    |     ✓     |      ✓      |       ✓      |
| Liu et al. [3]       | 2024 |   HM  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |  SH  |     ✗    |     ✓     |      ✓      |     ◐ [T1]    |
| MD-ML [4]            | 2024 |   DM  |  ✗  |  ✓  |  ✗  |  ✗  |  ✓  |    O    |   A  |     ✗    |     ✓     |    ◐ [T2]    |       ✓      |
| MD-SONIC [5]         | 2025 |   DM  |  ✗  |  ✓  |  ✗  |  ✓  |  ✓  |    O    |   A  |     ✗    |     ✓     |    ◐ [T2]    |       ✓      |
| FANNG-MPC [6]        | 2025 |   DM  |  ✓  |  ✓  |  ✓  |  ✓  |  ✓  |    O    |   A  |     ✗    |     ✓     |      ✗      |       ✓      |

**Tablenotes**
[T1] Implementation not public.
[T2] No costs for offline phase.


### References 
[1] Nishat Koti, Shravani Mahesh Patil, Arpita Patra, Ajith Suresh. “MPClan: Protocol Suite for Privacy-Conscious Computations.” J. Cryptol. 2023. DOI/URL: https://doi.org/10.1007/S00145-023-09469-Z.

[2] Alessandro N. Baccarini, Marina Blanton, Chen Yuan. “Multi-Party Replicated Secret Sharing over a Ring with Applications
                  to Privacy-Preserving Machine Learning.” Proc. Priv. Enhancing Technol. 2023. DOI/URL: https://doi.org/10.56553/POPETS-2023-0035.

[3] Fengrun Liu, Xiang Xie, Yu Yu. “Scalable Multi-Party Computation Protocols for Machine Learning in
                  the Honest-Majority Setting.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/liu-fengrun.

[4] Boshi Yuan, Shixuan Yang, Yongxiang Zhang, Ning Ding, Dawu Gu, Shi{-}Feng Sun. “{MD-ML:} Super Fast Privacy-Preserving Machine Learning for Malicious
                  Security with a Dishonest Majority.” 33rd {USENIX} Security Symposium, {USENIX} Security 2024, Philadelphia,
                  PA, USA, August 14-16, 2024 2024. DOI/URL: https://www.usenix.org/conference/usenixsecurity24/presentation/yuan.

[5] Yansong Zhang, Xiaojun Chen, Ye Dong, Qinghui Zhang, Rui Hou, Qiang Liu, Xudong Chen. “{MD-SONIC:} Maliciously-Secure Outsourcing Neural Network Inference
                  With Reduced Online Communication.” {IEEE} Trans. Inf. Forensics Secur. 2025. DOI/URL: https://doi.org/10.1109/TIFS.2025.3550834.

[6] Najwa Aaraj, Abdelrahaman Aly, Tim G{\"{u}}neysu, Chiara Marcolla, Johannes Mono, Rogerio Paludo, Iv{\'{a}}n Santos{-}Gonz{\'{a}}lez, Mireia Scholz, Eduardo Soria{-}Vazquez, Victor Sucasas, Ajith Suresh. “{FANNG-MPC:} Framework for Artificial Neural Networks and Generic
                  {MPC}.” {IACR} Trans. Cryptogr. Hardw. Embed. Syst. 2025. DOI/URL: https://doi.org/10.46586/TCHES.V2025.I1.1-36.