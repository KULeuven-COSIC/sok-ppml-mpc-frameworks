### Systematic overview of $N$-party ML frameworks. (✓) denotes availability, (◐) partial availability, (✗) unavailability. Abbreviations: **O** = Outsourcing. Additional abbreviations are defined in [Table of Notation](../notation.md).

| Scheme               | Year | HM/DM |  HE |  OT |  GC |  ZK |  SS | Setting | Sec. | Training | Inference | Theoretical | Experimental |
| -------------------- | ---: | :---: | :-: | :-: | :-: | :-: | :-: | :-----: | :--: | :------: | :-------: | :---------: | :----------: |
| MPClan [[107]](../../Bibliography/references.md#MPClan/DBLP:journals/joc/KotiPPS23)           | 2023 |   HM  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    | SH/A |     ✗    |     ✓     |      ✓      |       ✓      |
| Baccarini et al. [[194]](../../Bibliography/references.md#DBLP:journals/popets/BaccariniBY23) | 2023 |   HM  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |  SH  |     ✗    |     ✓     |      ✓      |       ✓      |
| Liu et al. [[202]](../../Bibliography/references.md#ScalableMPCforML/DBLP:conf/uss/LiuX024)       | 2024 |   HM  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |  SH  |     ✗    |     ✓     |      ✓      |     ◐ [T1]    |
| MD-ML [[141]](../../Bibliography/references.md#md-ml/DBLP:conf/uss/YuanYZ0G024)            | 2024 |   DM  |  ✗  |  ✓  |  ✗  |  ✗  |  ✓  |    O    |   A  |     ✗    |     ✓     |    ◐ [T2]    |       ✓      |
| MD-SONIC [[195]](../../Bibliography/references.md#MD-SONIC/DBLP:journals/tifs/ZhangCDZHLC25)         | 2025 |   DM  |  ✗  |  ✓  |  ✗  |  ✓  |  ✓  |    O    |   A  |     ✗    |     ✓     |    ◐ [T2]    |       ✓      |
| FANNG-MPC [[242]](../../Bibliography/references.md#Fanng-MPC/DBLP:journals/tches/AarajAGMMPSSSSS25)        | 2025 |   DM  |  ✓  |  ✓  |  ✓  |  ✓  |  ✓  |    O    |   A  |     ✗    |     ✓     |      ✗      |       ✓      |

**Tablenotes**
[T1] Implementation not public.
[T2] No costs for offline phase.
