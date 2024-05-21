import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Team = () => {
  return (
    <>
      <div class="pt-[60px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/f73e/c525/34ddeb66be0b89dcad920fba0d323c96?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pMYWtZk5a6NfxqW6OWjAnz50w-C6yL2T3XdWZhoRv8OrTJadXsAaPs7MyzWao1fKWKw~-r-V1krTZx8QmHe7KAFm8TIYKeEWYODLOZMT0iJRZRjsC~WKNJ1VRKCVuUb0adTJuFhy-MbTccYK5awxwjdhTFKK0q8SKoKfJE~NPI8PMqKI7SdiAF-v15TfWkYwlEvlV-QuzlXn9765MEar6CDvfOez4F9lqRuc0mANYGa3Ti157Wqrcpnxjp1Nwh2NQYLtIRE9VGB-RExzURbwnF~JTzXEsGqGJmbHpycg1Tqd2pcfkM1814xgV5-4HImZ7DpekYrMA8y4Um9yZxJi6g__"
          alt=""
          class="w-[100%] h-[300px]"
        />

        <div class="flex justify-between items-center px-[20px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/6649/87f9/8f108b4ca651b50d37e34d994a9ffee5?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lNGMaKocVSN0jeFmJCsqVPC~MrpyEmZ~VLk96SECxfl-Oo2p-DMR1EGY8pvBGG15BMklsBfNThBY8CptGn-jncBNOFTzaadhy~Wy5-L~uGNSg3s6pPWIs5WfRT8ouP5oALIhApW96qcDtBWX2miH3cb8q0UDFsDmfm87f1IYUnNLrNuhDHz6jXaPIaNicp~gHFR8p6xqkDC4cWv9ShRsOMpzCxgCzZrAqapHbiy5Lk7QMsHR8sfIxgN-lzrWhpWfvUkCKGW7Bd91fZos0AFRxqRNG4b7Q9GzPRGj7dBMngyp9x5mTlF2DEQBpu3tAN-pFlHGnE8b8CE~-xWoUMKa4g__"
            alt=""
            class="w-[122px] h-[122px] rounded-full hover:border-[#778899] hover:border-4"
          />
          <Link
            to={"/team"}
            class="bg-[#01c300] text-center p-[10px] max-md:p-[15px] tracking-[2px] rounded-[20px] text-[#fff] "
          >
            Connect
          </Link>
        </div>
        <div class="p-[30px] grid grid-cols-2	gap-[30px] max-md:grid-cols-1">
          <div class="flex flex-col gap-[1rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/76b4/3b09/865b2284e26f73ccf558c08de1becc45?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxQPa2xE9cY8MxG3eHyXN3LOS9cpMKA3Eq7gI5S1nkslLsGozkQc~hILQLJPMv5aOxvyK8N-A5z32b5eTFFlSGBjqG5rNnrQoOHxk8HAHVRZmuyoLjgc15dIpHvG2SiSi3WCf4T8AF6nH-AeGMOXyyG-OCMPHMw6tY1qP2Go3KUhT1WIA-iWiXN303kyJtmCEcHkqbWgqEzXUjMpMunIJPDmsT8YEOLu1W40k8F7hp8pfOQdoXnfZcjrBwlkSLWO~q0YMjmrD6Gzl2zDDV31UuxwxBnQND~9Cl73qaiEDrWEIM3g3qWBHXBfO5UwkzQmR9YUx~HNmq-4CGSm~fdwKw__"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] max-md:text-[1.2rem] font-bold text-center items-center leading-3	">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                CEO
              </div>
              100mc
            </div>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/487a/578e/eeeeabd7ef0444176c086e79f3024119?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L6~X25W1mVu9ga0g988H9JSwpWDlf3EF3NxrMm0FgU49iZjEiUjkN985y~du9GeVI1zsS-Y-88C0-VzdBz2UzBIDR4VHug5yUDHXXVTy3ufuaoEc1fCeXSFOUcuiJIwldokB-KhqeRA~f84h-kcB20PX-KhF1OHRxmj~mseu1MxtpJ1GBF8uVEq3LTsJOLrSkQmXkIZBK-sYK-aNp726PFmoLPCO1fvhqZhvuA0E5lIuvXgkKjhDo2IPW94i8EctSVWIVh5CkzA2Kg1xlhVoVJVdnZbtFQzv6U8r38eyWJyGvutWMb2b0X7CVcc28mI0mSTeVxZETQ~65F7SH~FLSw__"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] max-md:text-[0.9rem] font-bold text-center items-center leading-3	">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                CFO
              </div>
              Crypto boy
            </div>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/644a/48d4/fa7c71904f6f1d1b4fab3da164b6b415?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hIhmUGP3uZV7meCkCX1RY6txgfNOuu6OCEPjs3QQKarCvfMdJ-xQQaPc96Ao4hKqWmeVEK1E~tOUIWsEV7pubInBTo7wqUn2tTlvO4W0C73zBWDWDJ~eA606RZr4SeOcIwJcBpEA0ikaMpmMn1I5vRau1GviUx2lLXz4Ko27BPoIGqYc9ScMQGrFEtmnQngAasV6Uughl94wVJL3R4j2cXVHCe4bemPlF-OkyZkoxRfTZL~K2cG8xu9Bwig~VdFORV~AUGSpJd758Sbhi~GLe1xirgDMR2RD5xKcLZRTr4C0t-eQpoZuQZMuGFt5oVW9LCid1XK4B5MG0prA9mUAjg__"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] text-center items-center max-md:text-[0.9rem] font-bold leading-3	">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                ED
              </div>
              Wen 100x
            </div>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/3bb4/022c/a34886ba8e60e551ad371309784ad8db?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0v2Oyn-Xqw236ge2mtptoh0pIOyNhTdJz~aNnIu9n-9EoLRwaR318mxIcoaUjwyP0GISPOrBMxzXZZLL8S61PB92OuZtOOjh-LiC4gm8Eqt2LwmhT9Cj9sbp66UBI7hsoN46UKBjetgrDz~NsACSb~K-X7ixhxPtnhStbl6X~hi1~uZlBB5iMbn0FLVD9Jj1SiU1PkdbKYe~mMPvR7x5cMFCrina~6ZsKb4-Ad5yo6EkcVFfR3FJuHOmD5CEeLloPm1XgQ2Lx-S4LO8kcUHXXWmpNAMYdSW9oWL3xeCiwx-jefO5gW9knOpZRqTDNflQ7nryd5MoRhMDnAThF1jKA__"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] max-md:text-[1.2rem] leading-3 font-bold text-center items-center">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                MD
              </div>
              Crypton.Eth
            </div>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/4956/8649/27616ede75098f47f3bd62b62596f600?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkkqcArSUz4IC9AA9iguiBSTgxOfVoukV4JvdRMh-LXR1vVtTczl7JKJrtuucqBY4Vejx0Qfzf2VgPVakAfUKMtBAGMUnqWzPTcpzEkYmZOjdVGpX~Qkmbgqf-2QhZRDK0o37284T~ohwJIsSUmaQNyUe2jFR4IWWAYKM-rDFBv6vj~kUZMa8e34mcEgRJULwPo7TTosWETtmB~Uq2DUF-SaBql2L~DGzk9eAmYma5pu9FVj7PsC0QNkdd0boH-fOarz2HgGlCQheAVMdRpDaD11agHDIfNy367x9rzOva9u-CsUhqA4pwbV5KkyaFL1BzcMDkPmG9478lkV0TENPQ__"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] max-md:text-[1.2rem] font-bold text-center items-center leading-3">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                SPM
              </div>
              Km Crypton
            </div>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/a03c/0463/3dfe25fc9a2132c335c1cb2806af5a1a?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oBJ5Nh3HfQJMz8e4IQuCaNqzfOgCql1HsVRNzvhDTsjJ7WyJAuff-3eY1xN-d6H3YKneKBw-AWpYiOx670G-V2bo5QDmrr7-o6xB8S6CRdHPqD43x3Fs9-LfnJnqdEUJxtehZJVrEowX8Ad3AhT~Rl-gQsGW9QXPNoL3ZR6kEgRAM1jrowMA3yUyrYbdaFA~Ki3~5sQZaqmhCMy~NuLub1hhI-5vwvlUrV-9CNVyRSa5OzTM-lMbkRlzOM7T6z1XdK0dgjWuhJbCuDixbbxElCtX9oOTwTnm5TGz1MAXvtqmfUuK9PdUijraPptfTbPJt9hrgXDVIWZFdG-ELxDUXg__"
              alt=""
              class="max-md:blur-[10px] max-md:hover:blur-[0]"
            />
            <div class="text-[#fff] text-[1.6rem] leading-3 text-center items-center max-md:text-[1.2rem] font-bold">
              <div class="my-[1rem] text-[2rem] tracking-[5px] font-bold">
                SPM
              </div>
              Nizzan GTR
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
