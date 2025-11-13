### Theoretical cost analysis in total bits for sigmoid functionality. Notation and abbreviations are defined in Table 2 of the paper.

|  N | Sec. | Protocol         |      Offline Comm.      |         Online Comm.         |    Online Rounds   | Tech. |
| -: | :--: | :--------------- | :---------------------: | :--------------------------: | :----------------: | :---: |
|  2 |  SH  | SecureML [[25]](../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17) |            —            | $$\mathcal{O}(\Lambda\ell)$$ |        $$4$$       |   SS  |
|  2 |  SH  | Zheng et al. [[187]](../Bibliography/references.md#SecureSoftmax/DBLP:conf/acsac/0021ZCPTLY23) |        $$10\ell$$       |          $$2(k+5)$$          |        $$1$$       |  STP  |
|  2 |  SH  | pMPL [[225]](../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22) |            —            |  $$18\ell + 4\ell\log\ell$$  |  $$\log\ell + 5$$  |   SS  |
|  3 |  SH  | pMPL [[225]](../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22) |            —            |  $$38\ell + 8\ell\log\ell$$  |  $$\log\ell + 6$$  |   SS  |
|  3 |   A  | ABY3 [[12]](../Bibliography/references.md#ABY3/DBLP:conf/ccs/MohasselR18) |       $$108\ell$$       |          $$81\ell$$          |  $$\log\ell + 4$$  |   SS  |
|  3 |   F  | BLAZE [[15]](../Bibliography/references.md#BLAZE/DBLP:conf/ndss/PatraS20) | $$(5\Lambda + 23)\ell$$ |    $$(\Lambda + 11)\ell$$    |        $$5$$       |   SS  |
|  3 |   R  | SWIFT [[28]](../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21) |      $$39\ell - 9$$     |        $$29\ell - 9$$        |  $$\log\ell + 4$$  |   SS  |
|  4 |   F  | Trident [[29]](../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20) |      $$15\ell + 7$$     |        $$16\ell + 7$$        |        $$5$$       |   SS  |
|  4 |   F  | Tetrad [[38]](../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22) |      $$20\ell + 3$$     |         $$9\ell - 4$$        |  $$\log\ell + 2$$  |   SS  |
|  4 |   R  | FLASH [[21]](../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20) |        $$26\ell$$       |          $$113\ell$$         | $$3\log\ell + 20$$ |   SS  |
|  4 |   R  | SWIFT [[28]](../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21) |      $$23\ell - 1$$     |        $$20\ell - 9$$        |  $$\log\ell + 2$$  |   SS  |

