### Theoretical cost analysis in total bits for ReLU functionality. Notation and abbreviations are defined in Table 2 of the paper.

|  N |   Sec.  | Protocol             |             Offline Comm.             |          Online Comm.          |        Online Rounds       | Tech. |
| -: | :-----: | :------------------- | :-----------------------------------: | :----------------------------: | :------------------------: | :---: |
|  2 |    SH   | SecureML [[25]](../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17) |                   -                   |  $$\mathcal{O}(\Lambda,\ell)$$ |              2             |   SS  |
|  2 |    SH   | Cryptflow2 [[49]](../Bibliography/references.md#cryptflow2/DBLP:conf/ccs/RatheeR0CGR020) |                   -                   |    $$\Lambda,\ell + 18\ell$$   |      $$\log \ell + 2$$     |   OT  |
|  2 |    SH   | Delphi [[47]](../Bibliography/references.md#delphi/DBLP:conf/uss/MishraLSZP20) |    $$3\mathsf{CT}_{\mathsf{DGK}}$$    |            $$4\ell$$           |              1             |   HE  |
|  2 |    SH   | MediSC [[182]](../Bibliography/references.md#MediSC/DBLP:conf/esorics/LiuZYY21) |         $$\mathcal{O}(\ell)$$         |      $$\mathcal{O}(\ell)$$     | $$\mathcal{O}(\log \ell)$$ |   SS  |
|  2 |    SH   | COINN [[184]](../Bibliography/references.md#COINN/DBLP:conf/ccs/HussainJSK21) |        $$\mathcal{O}(\ell^2)$$        |  $$\mathcal{O}(\Lambda,\ell)$$ |     $$\mathcal{O}(1)$$     |   GC  |
|  2 |    SH   | SONIC [[185]](../Bibliography/references.md#SONIC/DBLP:journals/tdsc/LiuZYY23) |                   -                   |         $$20\ell - 16$$        |      $$\log \ell + 2$$     |   SS  |
|  2 |    SH   | AriaNN [[68]](../Bibliography/references.md#ariann/DBLP:journals/popets/RyffelTPB22) |     $$\mathcal{O}(\Lambda,\ell)$$     |            $$3\ell$$           |              2             |  FSS  |
|  2 |    SH   | Boyle et al. [[67]](../Bibliography/references.md#DBLP:conf/eurocrypt/BoyleCG0I0R21) |    $$(\ell + 1)(\Lambda + 2\ell)$$    |            $$2\ell$$           |              1             |  FSS  |
|  2 |    SH   | pMPL [[225]](../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22) |                   -                   |   $$8\ell + 2\ell \log \ell$$  |      $$\log \ell + 4$$     |   SS  |
|  2 |    SH   | FastSecNet [[191]](../Bibliography/references.md#FastSecNet/DBLP:journals/tifs/HaoLCXZ23) |       $$\ell(4\Lambda + \ell)$$       |            $$2\ell$$           |              1             |  FSS  |
|  2 |    SH   | Orca [[244]](../Bibliography/references.md#Orca/DBLP:conf/sp/JawalkarGBCGS24) |  $$\ell(\Lambda + 7) + \Lambda + 1$$  |          $$2\ell + 2$$         |              2             |  FSS  |
|  2 |    SH   | FssNN [[245]](../Bibliography/references.md#FSSNN/ProvSec24/10.1007/978-981-96-0957-4_8) |     $$\mathcal{O}(\ell \Lambda)$$     |          $$2\ell + 1$$         |            $$2$$           |  FSS  |
|  2 |    SH   | Shark [[240]](../Bibliography/references.md#Shark/DBLP:conf/sp/GuptaC0K025) | $$\mathcal{O}(\ell(\Lambda+\kappa))$$ |          $$\ell + s$$          |              2             |  FSS  |
|  3 |    SH   | SecureNN [[26]](../Bibliography/references.md#SecureNN/DBLP:journals/popets/WaghGC19) |                   -                   |    $$8\ell \log p + 24\ell$$   |           $$10$$           |   SS  |
|  3 |    SH   | Cryptflow [[48]](../Bibliography/references.md#cryptflow/DBLP:conf/sp/0001RCGR020) |                   -                   |    $$6\ell \log p + 19\ell$$   |            $$7$$           |   SS  |
|  3 |    SH   | pMPL [[225]](../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22) |                   -                   |  $$18\ell + 4\ell \log \ell$$  |      $$\log \ell + 5$$     |   SS  |
|  3 |    SH   | AdamInPrivate [[192]](../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) |                   -                   |     $$5\ell_x + 6\ell + 5$$    |        $$\ell + 5$$        |   SS  |
|  3 |    SH   | Bicoptor [[14]](../Bibliography/references.md#Bicoptor/DBLP:conf/sp/ZhouWCSY23) |                   -                   |    $$(\ell_x + 2)\ell + 2$$    |            $$2$$           |   SS  |
|  3 |    SH   | Bicoptor2 [[76]](../Bibliography/references.md#Bicoptor2/DBLP:journals/corr/abs-2309-04909) |                   -                   | $$(\ell_x + 1)^2 + 2\ell + 2$$ |            $$2$$           |   SS  |
|  3 |    SH   | Meteor [[41]](../Bibliography/references.md#meteor/DBLP:conf/www/DongCJLW23) |        $$\mathcal{O}(\ell)$$        |    $$(4\ell + 1)\log p + 3\ell$$    |      $$\log_4 \ell + 3$$       |   SS  |
|  3 |    SH   | Falcon [[20]](../Bibliography/references.md#Falcon/DBLP:journals/popets/WaghTBKMR21) |         $$\mathcal{O}(\ell)$$         |    $$3\ell \log p + 3\ell$$    |      $$3 + \log \ell$$     |   SS  |
|  3 |    SH   | CECILIA [[193]](../Bibliography/references.md#Cecilia/DBLP:journals/corr/abs-2202-03023) |         $$\mathcal{O}(\ell)$$         |      $$\mathcal{O}(\ell)$$     |     $$\mathcal{O}(1)$$     |   SS  |
|  3 |    A    | Falcon [[20]](../Bibliography/references.md#Falcon/DBLP:journals/popets/WaghTBKMR21) |    $$\mathcal{O}(\ell \log \ell)$$    |    $$3\ell \log p + 18\ell$$   |      $$4 + \log \ell$$     |   SS  |
|  3 |    A    | ABY3 [[12]](../Bibliography/references.md#ABY3/DBLP:conf/ccs/MohasselR18) |               $$60\ell$$              |           $$45\ell$$           |      $$\log \ell + 3$$     |   SS  |
|  3 |    A    | AdamInPrivate [[192]](../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) |                   -                   | $$\mathcal{O}(\ell_x \kappa)$$ |        $$\ell + 7$$        |   SS  |
|  3 |    F    | BLAZE [[15]](../Bibliography/references.md#BLAZE/DBLP:conf/ndss/PatraS20) |        $$21\ell$$        |      $$16\ell$$     |            $$\log \ell + 3$$           |   SS  |
|  3 |    R    | SWIFT [[28]](../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21) |             $$21\ell - 6$$            |         $$16\ell - 6$$         |      $$\log \ell + 3$$     |   SS  |
|  3 |    R    | Fantastic Four [[46]](../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21) |            $$14(\ell + s)$$           |      $$114\ell + 6s + 1$$      |    $$\mathcal{O}(\ell)$$   |   SS  |
|  4 |    A    | FLASH [[21]](../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20) |               $$6\ell$$               |           $$17\ell$$           |      $$\log \ell + 6$$     |   SS  |
|  4 |    F    | Trident [[29]](../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20) |             $$14\ell + 2$$             |          $$10\ell + 2$$         |            $$4$$           |   SS  |
|  4 |    F    | Tetrad [[38]](../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22) |             $$13\ell + 2$$            |          $$6\ell - 2$$         |      $$\log \ell + 2$$     |   SS  |
|  4 |    R    | FLASH [[21]](../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20) |               $$22\ell$$              |           $$24\ell$$           |      $$\log \ell + 2$$     |   SS  |
|  4 |    R    | SWIFT [[28]](../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21) |             $$13\ell - 2$$            |         $$10\ell - 6$$         |      $$\log \ell + 1$$     |   SS  |
|  4 |    R    | Fantastic Four [[46]](../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21) |                   -                   |         $$44\ell + 1$$         |    $$\mathcal{O}(\ell)$$   |   SS  |
|  N | SH (HM) | Liu et al. [[202]](../Bibliography/references.md#ScalableMPCforML/DBLP:conf/uss/LiuX024) |         $$N\ell(10\ell + 2)$$         |      $$N\ell(2\ell + 6)$$      |            $$3$$           |   SS  |
|  N |  A (DM) | Escudero et al. [[59]](../Bibliography/references.md#escudero2020improved) |            $$7\ell \kappa$$           |         $$7\ell + 3s$$         | $$\mathcal{O}(\log \ell)$$ |   SS  |
|  N |  A (DM) | MD-ML [[141]](../Bibliography/references.md#md-ml/DBLP:conf/uss/YuanYZ0G024) |    $$\mathcal{O}(N^2(\ell + s)^2)$$   |     $$\mathcal{O}(\ell s)$$    |      $$\log \ell + 2$$     |   SS  |
|  N |  A (DM) | MD-SONIC [[195]](../Bibliography/references.md#MD-SONIC/DBLP:journals/tifs/ZhangCDZHLC25) |    $$\mathcal{O}(N^2(\ell + s)^2)$$   |  $$\mathcal{O}(N(\ell + s))$$  |   $$\log(\ell - 1) + 1$$   |   SS  |

