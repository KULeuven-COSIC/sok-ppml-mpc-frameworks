### Systematic overview of 3PC and 4PC frameworks. (✓) denotes availability, (◐) partial availability, (✗) unavailability. Abbreviations: **O** = Outsourcing, **C-S** = Client–Server. Additional abbreviations are defined in Table 2.

| Scheme                  | Year |   2   |   3   |  4  |  HE |  OT |  GC |  ZK |  SS | Setting |  Sec.  | Training | Inference | Theoretical | Experimental |
| ----------------------- | ---: | :---: | :---: | :-: | :-: | :-: | :-: | :-: | :-: | :-----: | :----: | :------: | :-------: | :---------: | :----------: |
| ABY3 [[12]](../Bibliography/references.md#ABY3/DBLP:conf/ccs/MohasselR18)                | 2018 |   ✗   |   ✓   |  ✗  |  ✗  |  ✓  |  ✓  |  ✗  |  ✓  |    O    |  SH/A  |     ✓    |     ✓     |    ◐ [T4]    |       ✓      |
| SecureNN [[26]](../Bibliography/references.md#SecureNN/DBLP:journals/popets/WaghGC19)            | 2018 |   ✗   |   ✓   |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |  SH/A  |     ✓    |     ✓     |      ✓      |       ✓      |
| ASTRA [[239]](../Bibliography/references.md#astra/DBLP:conf/ccs/ChaudhariCPS19)               | 2019 | ◐ [T2] |   ✓   |  ✗  |  ✗  |  ✓  |  ✓  |  ✗  |  ✓  |    O    | SH/A/F |     ✗    |     ✓     |    ◐ [T4]    |     ◐ [T3]    |
| Cryptflow [[48]](../Bibliography/references.md#cryptflow/DBLP:conf/sp/0001RCGR020)           | 2019 |   ✗   |   ✓   |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |  SH/A  |     ✗    |     ✓     |      ✓      |       ✓      |
| Shen et al. [[190]](../Bibliography/references.md#Efficient3pcNN/DBLP:conf/esorics/ShenCSDF20)         | 2020 |   ✗   |   ✓   |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |   SH   |     ✗    |     ✓     |      ✗      |     ◐ [T3]    |
| Falcon [[20]](../Bibliography/references.md#Falcon/DBLP:journals/popets/WaghTBKMR21)              | 2020 |   ✗   |   ✓   |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |  SH/A  |     ✓    |     ✓     |    ◐ [T4]    |       ✓      |
| BLAZE [[15]](../Bibliography/references.md#BLAZE/DBLP:conf/ndss/PatraS20)               | 2020 |   ✗   |   ✓   |  ✗  |  ✗  |  ✓  |  ✓  |  ✓  |  ✓  |    O    |    F   |     ✓    |     ✓     |      ✓      |     ◐ [T3]    |
| pMPL [[225]](../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22)                | 2022 |   ✓   |   ✓   |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |   SH   |     ✓    |     ✓     |    ◐ [T5]    |       ✓      |
| AdamInPrivate [[192]](../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22)       | 2022 |   ✗   |   ✓   |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |  SH/A  |     ✓    |     ✓     |      ✓      |     ◐ [T3]    |
| Meteor [[41]](../Bibliography/references.md#meteor/DBLP:conf/www/DongCJLW23)             | 2023 |   ✗   |   ✓   |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |   SH   |     ✗    |     ✓     |    ◐ [T5]    |       ✓      |
| PrivFormer [[223]](../Bibliography/references.md#PrivFormer/DBLP:conf/eurosp/AkimotoFAS23)         | 2023 |   ✗   |   ✓   |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |   SH   |     ✗    |     ✓     |      ✓      |     ◐ [T3]    |
| Trio [[238]](../Bibliography/references.md#hpmpc/DBLP:journals/popets/HarthKitzerowSWYCA25)               | 2024 |   ✗   |   ✓   |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |   SH   |     ✗    |     ✓     |    ◐ [T4]    |       ✓      |
| Brüggenmann et al. [[147]](../Bibliography/references.md#Impostor/DBLP:conf/sp/BruggemannSSSY24) | 2024 |   ✗   |   ✓   |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |  ✓  |  C-S/O  |    A   |     ✗    |     ✓     |    ◐ [T4]    |     ◐ [T3]    |
| Trident [[29]](../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20)            | 2019 |   ✗   | ◐ [T2] |  ✓  |  ✗  |  ✓  |  ✓  |  ✗  |  ✓  |    O    |    F   |     ✓    |     ✓     |      ✓      |     ◐ [T3]    |
| PrivPy [[86]](../Bibliography/references.md#PrivPy/DBLP:conf/kdd/LiX19)             | 2019 |   ✗   |   ✗   |  ✓  |  ✗  |  ✓  |  ✗  |  ✗  |  ✓  |    O    |   SH   |     ✓    |     ✓     |      ✗      |     ◐ [T3]    |
| FLASH [[21]](../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20)              | 2020 |   ✗   |   ✗   |  ✓  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |   A/R  |     ✗    |     ✓     |      ✓      |     ◐ [T3]    |
| SWIFT [[28]](../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21)              | 2020 |   ✗   |   ✓   |  ✓  |  ✗  |  ✗  |  ✗  |  ✓  |  ✓  |    O    |    R   |   ◐ [T1]  |     ✓     |      ✓      |     ◐ [T3]    |
| Fantastic Four [[46]](../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21)     | 2021 |   ✗   |   ✓   |  ✓  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |   A/R  |     ✓    |     ✓     |    ◐ [T4]    |     ◐ [T3]    |
| Tetrad [[38]](../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22)             | 2021 | ◐ [T2] |   ✗   |  ✓  |  ✗  |  ✓  |  ✓  |  ✗  |  ✓  |    O    |   F/R  |     ✓    |     ✓     |    ◐ [T4]    |     ◐ [T3]    |
| Quad [[238]](../Bibliography/references.md#hpmpc/DBLP:journals/popets/HarthKitzerowSWYCA25)               | 2024 |   ✗   |   ✗   |  ✓  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |    A   |     ✗    |     ✓     |    ◐ [T4]    |       ✓      |


### Tablenotes
[T1] Training of LinReg and LogReg only.
[T2] Online phase.
[T3] Implementation not public.
[T4] Only primitives (no ML functionalities).
[T5] No costs for offline phase.
