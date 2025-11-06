### Systematic overview of N‑party ML frameworks

*(● = available, ○ = unavailable, ◐ = partial. O = Outsourcing. HM = Honest Majority, DM = Dishonest Majority. SH = Semi‑honest, A = Malicious.)*

| Framework            | Year | Security (HM/DM) |  HE |  OT |  GC |  ZK |  SS | Setting | Sec. | Training | Inference | Theoretical | Experimental |
| -------------------- | ---- | ---------------- | :-: | :-: | :-: | :-: | :-: | :-----: | :--: | :------: | :-------: | :---------: | :----------: |
| MPClan[^1]           | 2023 | HM               |  ○  |  ○  |  ○  |  ○  |  ●  |    O    | SH/A |     ○    |     ●     |      ●      |       ●      |
| Baccarini et al.[^2] | 2023 | HM               |  ○  |  ○  |  ○  |  ○  |  ●  |    O    |  SH  |     ○    |     ●     |      ●      |       ●      |
| Liu et al.[^3]       | 2024 | HM               |  ○  |  ○  |  ○  |  ○  |  ●  |    O    |  SH  |     ○    |     ●     |      ●      |    ◐[^N1]    |
| MD‑ML[^4]            | 2024 | DM               |  ○  |  ●  |  ○  |  ○  |  ●  |    O    |   A  |     ○    |     ●     |    ◐[^N2]   |       ●      |
| MD‑SONIC[^5]         | 2025 | DM               |  ○  |  ●  |  ○  |  ●  |  ●  |    O    |   A  |     ○    |     ●     |    ◐[^N2]   |       ●      |
| FANNG‑MPC[^6]        | 2025 | DM               |  ●  |  ●  |  ●  |  ●  |  ●  |    O    |   A  |     ○    |     ●     |      ○      |       ●      |



#### Notes

[^N1]: Implementation not public.

[^N2]: No costs for offline phase.


#### References (numbering restarts for this table)

[^1]: Koti, N., Patra, A., Pancholi, M., & Suresh, A. (2023). **MPClan: Multi‑party Computation for ML over Secret Sharing**. *Journal of Cryptology*.

[^2]: Baccarini, E., Barthe, G., & Yang, D. (2023). **Privacy‑Preserving Machine Learning with N‑party Secret Sharing**. *PoPETS 2023*.

[^3]: Liu, X., Xu, Z., & (co‑authors). (2024). **Scalable MPC for ML**. *USENIX Security 2024*.

[^4]: Yuan, Y., Zhang, Z., (et al.). (2024). **MD‑ML: Dishonest‑Majority MPC for ML**. *USENIX Security 2024*.

[^5]: Zhang, C., Chen, D., Dong, Y., Zhou, H., He, L., Liu, X., & Chen, K. (2025). **MD‑SONIC: Dishonest‑Majority Secure Outsourced NN Inference**. *IEEE TIFS 2025*.

[^6]: Aaraj, N., et al. (2025). **FANNG‑MPC: A Practical DM‑MPC Framework for ML**. *IACR TCHES 2025*.

