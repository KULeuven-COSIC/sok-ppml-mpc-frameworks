### Theoretical cost analysis in total bits for sigmoid functionality. Notation and abbreviations are defined in Table 2.

|  N | Sec. | Protocol         |      Offline Comm.      |         Online Comm.         |    Online Rounds   | Tech. |
| -: | :--: | :--------------- | :---------------------: | :--------------------------: | :----------------: | :---: |
|  2 |  SH  | SecureML [1]     |            —            | $$\mathcal{O}(\Lambda\ell)$$ |        $$4$$       |   SS  |
|  2 |  SH  | Zheng et al. [2] |        $$10\ell$$       |          $$2(k+5)$$          |        $$1$$       |  STP  |
|  2 |  SH  | pMPL [3]         |            —            |  $$18\ell + 4\ell\log\ell$$  |  $$\log\ell + 5$$  |   SS  |
|  3 |  SH  | pMPL [3]         |            —            |  $$38\ell + 8\ell\log\ell$$  |  $$\log\ell + 6$$  |   SS  |
|  3 |   A  | ABY3 [4]         |       $$108\ell$$       |          $$81\ell$$          |  $$\log\ell + 4$$  |   SS  |
|  3 |   F  | BLAZE [5]        | $$(5\Lambda + 23)\ell$$ |    $$(\Lambda + 11)\ell$$    |        $$5$$       |   SS  |
|  3 |   R  | SWIFT [6]        |      $$39\ell - 9$$     |        $$29\ell - 9$$        |  $$\log\ell + 4$$  |   SS  |
|  4 |   F  | Trident [7]      |      $$15\ell + 7$$     |        $$16\ell + 7$$        |        $$5$$       |   SS  |
|  4 |   F  | Tetrad [8]       |      $$20\ell + 3$$     |         $$9\ell - 4$$        |  $$\log\ell + 2$$  |   SS  |
|  4 |   R  | FLASH [9]        |        $$26\ell$$       |          $$113\ell$$         | $$3\log\ell + 20$$ |   SS  |
|  4 |   R  | SWIFT [6]        |      $$23\ell - 1$$     |        $$20\ell - 9$$        |  $$\log\ell + 2$$  |   SS  |

### References

[1] Payman Mohassel, Yupeng Zhang. “SecureML: A System for Scalable Privacy-Preserving Machine Learning.” *2017 IEEE Symposium on Security and Privacy (SP 2017), San Jose, CA, USA, May 22–26, 2017* 2017. DOI: [https://doi.org/10.1109/SP.2017.12](https://doi.org/10.1109/SP.2017.12).

[2] Yu Zheng, Qizhi Zhang, Sherman S. M. Chow, Yuxiang Peng, Sijun Tan, Lichun Li, Shan Yin. “Secure Softmax/Sigmoid for Machine-learning Computation.” *Annual Computer Security Applications Conference (ACSAC 2023), Austin, TX, USA, Dec 4–8, 2023* 2023. DOI: [https://doi.org/10.1145/3627106.3627175](https://doi.org/10.1145/3627106.3627175).

[3] Lushan Song, Jiaxuan Wang, Zhexuan Wang, Xinyu Tu, Guopeng Lin, Wenqiang Ruan, Haoqi Wu, Weili Han. “pMPL: A Robust Multi-Party Learning Framework with a Privileged Party.” *Proceedings of the 2022 ACM SIGSAC Conference on Computer and Communications Security (CCS 2022), Los Angeles, CA, USA, Nov 7–11, 2022* 2022. DOI: [https://doi.org/10.1145/3548606.3560697](https://doi.org/10.1145/3548606.3560697).

[4] Payman Mohassel, Peter Rindal. “ABY³: A Mixed Protocol Framework for Machine Learning.” *Proceedings of the 2018 ACM SIGSAC Conference on Computer and Communications Security (CCS 2018), Toronto, Canada, Oct 15–19, 2018* 2018. DOI: [https://doi.org/10.1145/3243734.3243760](https://doi.org/10.1145/3243734.3243760).

[5] Arpita Patra, Ajith Suresh. “BLAZE: Blazing Fast Privacy-Preserving Machine Learning.” *27th Annual Network and Distributed System Security Symposium (NDSS 2020), San Diego, CA, USA, Feb 23–26, 2020* 2020. URL: [https://www.ndss-symposium.org/ndss-paper/blaze-blazing-fast-privacy-preserving-machine-learning/](https://www.ndss-symposium.org/ndss-paper/blaze-blazing-fast-privacy-preserving-machine-learning/).

[6] Nishat Koti, Mahak Pancholi, Arpita Patra, Ajith Suresh. “SWIFT: (USENIX Security 2021).” *30th USENIX Security Symposium (USENIX Security 2021)* 2021. URL: [https://www.usenix.org/conference/usenixsecurity21/presentation/koti](https://www.usenix.org/conference/usenixsecurity21/presentation/koti).

[7] Harsh Chaudhari, Rahul Rachuri, Ajith Suresh. “Trident: Efficient 4PC Framework for Privacy Preserving Machine Learning.” *27th Annual Network and Distributed System Security Symposium (NDSS 2020), San Diego, CA, USA, Feb 23–26, 2020* 2020. URL: [https://www.ndss-symposium.org/ndss-paper/trident-efficient-4pc-framework-for-privacy-preserving-machine-learning/](https://www.ndss-symposium.org/ndss-paper/trident-efficient-4pc-framework-for-privacy-preserving-machine-learning/).

[8] Nishat Koti, Arpita Patra, Rahul Rachuri, Ajith Suresh. “Tetrad: Actively Secure 4PC for Secure Training and Inference.” *29th Annual Network and Distributed System Security Symposium (NDSS 2022), San Diego, CA, USA, Apr 24–28, 2022* 2022. URL: [https://www.ndss-symposium.org/ndss-paper/auto-draft-202/](https://www.ndss-symposium.org/ndss-paper/auto-draft-202/).

[9] Megha Byali, Harsh Chaudhari, Arpita Patra, Ajith Suresh. “FLASH: Fast and Robust Framework for Privacy-preserving Machine Learning.” *Proceedings on Privacy Enhancing Technologies (PoPETs)* 2020. DOI: [https://doi.org/10.2478/popets-2020-0036](https://doi.org/10.2478/popets-2020-0036).
