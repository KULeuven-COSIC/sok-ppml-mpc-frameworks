### Approximation of the GELU functionality expressed in terms of required MPC building block protocols. For LUTs, the number in brackets indicates the table size (entries). Abbreviations are defined in Table 2.

|  N | Sec. | Protocol       |    LUT    | Multiplication | Truncation | Comparison | Multiplexer |
| -: | :--: | :------------- | :-------: | :------------: | :--------: | :--------: | :---------: |
|  2 |  SH  | MPCFormer [72](../Bibliography/references.md#MPCFORMER/DBLP:conf/iclr/LiWSGXZ23)   |    —     |       1        |     1      |     —       |     —       |
|  2 |  SH  | SirNN [63](../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21)        | 6 ($2^8$) |       7        |     6      |     5       |     2       |
|  2 |  SH  | Sigma [243](../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24) | 1 ($2^8$) |       —        |     1      |     2       |     3       |
|  2 |  SH  | Iron [210](../Bibliography/references.md#Iron/DBLP:conf/nips/HaoLCXXZ22)           | 6 ($2^8$) |       6        |     5      |     5       |     2       |
|  2 |  SH  | BOLT [209](../Bibliography/references.md#BOLT/DBLP:conf/sp/PangZMZS24)             |    —     |       3        |     4      |     2       |     2       |
|  2 |  SH  | CipherGPT [211](../Bibliography/references.md#CipherGPT/DBLP:journals/iacr/Hou0LLLH023) | 1 ($2^6$) |       1        |     2      |     2       |     2       |
|  2 |  SH  | Nimbus [207](../Bibliography/references.md#Nimbus/DBLP:conf/nips/LiYTLWWYZZGL24)   |    —     |       1        |     1      |     2       |     1       |
|  2 |  SH  | SecFormer [214](../Bibliography/references.md#SecFormer/DBLP:conf/acl/LuoZZZMW0X24) |    —     |       5        |     6      |     2       |     1       |
|  2 |  SH  | BumbleBee [213](../Bibliography/references.md#BumbleBee/DBLP:conf/ndss/LuHGL000WC25) |    —     |       4        |     6      |     3       |     3       |
|  2 |  SH  | SHAFT [222](../Bibliography/references.md#SHAFT/DBLP:conf/ndss/KeiC25)             |    —     |       2        |     2      |     2       |     2       |
|  3 |  SH  | PUMA [71](../Bibliography/references.md#PUMA/DBLP:journals/corr/abs-2307-12533)    |    —     |       4        |     4      |     3       |     3       |
|  3 |  A   | Mosformer [255](../Bibliography/references.md#Mosformer/DBLP:journals/iacr/ChengXSFQSZ25) | 1 ($2^8$) |       —        |     1      |     3       |     3       |
