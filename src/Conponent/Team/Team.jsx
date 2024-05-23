import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Team = () => {
  return (
    <>
      <div class="pt-[60px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/f73e/c525/34ddeb66be0b89dcad920fba0d323c96?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kxakj5YdrB0xMVGU818aOALEFulCZAWuvzfT1BVsxl4DvpXyyrn9RC2sYq5cmZp9ghAKc54Nk3U18rbM5a2IG-~eEEIaPYofljUMgevrp6ENq4PJJ8ZrnYIF9vrWdmcq60S6irtnDRC-7~2pajQz960fgTYM6bPWoiW3pU9BC23ex1VopcCtOooY9sog5CNTshIZQLFNGuFLt0jejP-Tz7M5Oje6GgLLetzn9~bBofN2AVM1XencdufjlCNt1HRp3c1usSUh7p7GwzJkwGZYrZ4zf7ROL7KeNOrUB2eweHci1gVwVF7en1XzjcQ8g5x8q1B5mT-PfkrqsU9oLWdosw__"
          alt=""
          class="w-[100%] h-[300px]"
        />

        <div class="flex justify-between items-center px-[20px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/6649/87f9/8f108b4ca651b50d37e34d994a9ffee5?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C1MdbIxFHJoeGwXI7F~eQLykuS7O2kX5u3e-eJfcTzmiWkzh39tFcHP~n2zmpyImzbAfzgcef43pCKicV4oiQ0wy-JtEHXbAdVDtKUmB9MgtNGzc3qEW7EwtoznQxDE2Lzk4hEniA~t~F1ybuPUAvL6J60SHSyKvYbR6IBXNzs1Ch9GNrU552348MCIgF8G8CICdgRC38Pmc-lcCdN91NxxThwR5UwcVyQYIUQj~2-gdSpCnKOXORWt9N50Ubo4dW~xPkz8aQnXrIB4ngYRJL-b3sLTAe82oRQlPK~NnRh4GZg1q5yBasczbG-66SnbMdh59~JZ-ZQNYVc6ACXSX~w__"
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
              src="https://s3-alpha-sig.figma.com/img/76b4/3b09/865b2284e26f73ccf558c08de1becc45?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~vnLtDYDyyPQIKhHmD1gjz4OmdK~kMeTW12~dXIPtx6iJ2X6yl-Ab-rFbhE8MtdZmSSBqslyhnpE9n97mBuVHOR64AL4ZUxZJrZrhAvOnen2ntEDjuBg0HiwnobDX89tTupdhKRi6LR3DkMpjnseZ33dTkyAAA2RpPgRC0O8ttzLauvHHdXGCSJ9eCHsqB-qMnJj2YKs6x6j3JSFpOffM8J20QDsXWmhPMn5b-mRQV8iaNUI9q3cKhWonLHgyQuBNzoVvdpY56~6fEZX1O5Kgoypbt7u3EOeCWz-7mRiRwCbAO5mBhOBqHXdgjcygrTRuOzyyDPMCZuhiKrLNVwbg__"
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
              src="https://s3-alpha-sig.figma.com/img/487a/578e/eeeeabd7ef0444176c086e79f3024119?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~DIWg7PnEPMsZVUsnIRM~15TspSFMFMVCQkzlVDFUQZkBxADIC7gWTXZunP~LlNLLn4tkZ6okliaBz8aIsASXhLtRR1J3Os7M1VljmCyNZAmgsvv50GgBPJL0CPatC075TmaNEW-37U-d5o~m-JKz2y-Hrs-exRplQ2vv-kShf0GwoV7inUEoxlnJ3K2tKeoyeT9xP~3kA5T2a51cHqmuw7AuNjF05NldXRj4tBp0kf0bGK-zMPi8N6oPn9gloPakbBpr~F2xLWZz7KQH~GihCUyS9DavxyOwxc~VLRukQwgmDyII5-9Z19RZftCqQQ~gduod~1RPUyyRS6nfaecg__"
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
              src="https://s3-alpha-sig.figma.com/img/644a/48d4/fa7c71904f6f1d1b4fab3da164b6b415?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMW75VNeF0z~G1bS~RT7sN34~LXagGGdDppcEwt~U5jxj-zVN4l~8kAAQJpvw~Lcus3Ria0fP9qis9zd7B1iGz60WEiYg3O0OsiY~qLSclMzfxRMnzvcG1dFaDZNBVArWd8-kXp-78et6VrhX2vPDoBEGmz0y2QhS1~I9S1TpAm0KFsDIpJoXLFfYVqUGKBP70klJTo~EX8VEmI8hUafEQZL2Fbldw81IyIsImjlsgir4djogwyjpK8OCEtCZmw3iXUOF5mB718rCX~ddiZLgivqkPkjQKOHianiz3adyITqzinqZ57yW9J7p94E-9SMkue5n4ecemGpcRCgPBlMKA__"
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
              src="https://s3-alpha-sig.figma.com/img/3bb4/022c/a34886ba8e60e551ad371309784ad8db?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DmN7QNWJ7sDxgeTqwheqQpXuWK3Qmrw1yXUijB5OgDafei5x1QQpnAR2NV9Kx8KJ19Q9m6HEyl6lCPaWTf70ZBuRtMrBFsr4JhXmAL2kITlWnMI8A1BalURYBk4YYdeRGzdguBMo8iaPvleYVknhrTaQKhhyWWYGwt32SvntXexVs~TutVP5lTiuiP-hw9tZdCqNzqA3Qq4hJMbY7nWvGt9KKxB-kjFqIWnhYcCo9eXq9qqZtp7McW2tkFNjk7ruqz4Zk8O1BvcPo3PN6fnA4SHjxsxFtFtppngYYJGz9klb7CW1LwjsTZln4VdujcdurS-qlIqPOmCi2mNHRUwgyQ__"
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
              src="https://s3-alpha-sig.figma.com/img/4956/8649/27616ede75098f47f3bd62b62596f600?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WcZkS7ZQ3vIS0LUk49~JLPcmrLihT0LcUVxOlbJjRppL~UQdRZheRgcM2txAmYDT9zNuqwHt4ookdTboTayWe1F2qKhQKpqs-tSl358-GaeuezmaMsxoAlMReh-gv6sjAYQvVLP2fEhotgVoBcsxMsOJvsKzA4g~nqWDv-O~RzZtOZ9LH0ovCOfE9jIwCExhQlMBMmo29j7hmHX0OY-H-jcisCuT7IHu4YTDrQid8DhjYDrPoR0KF3jX346ExPQ41Z1MJx-~QngjQB7sf0OKQ5KGnDbEqYrjX1exj1~-cBoBtIYCBdrFgUg59utaleCG4tKO0oiGcViLgHGGo48j6g__"
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
              src="https://s3-alpha-sig.figma.com/img/a03c/0463/3dfe25fc9a2132c335c1cb2806af5a1a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MzP4c7AA-WT-poFaynjTii8tGCLc8AXxuK6br1j5B80-137MlO1Ri53yKPpukCWv~GL~cjBVLoHsowy60mxUx6hyCMe6wDqhYZ3e0uN1taFhy3dHl66nx2CKtmXy-tKRv6aGJXCPpWb31kIp~-7ZdcalK1FN4CkmcjrfYzxZmdWiVLiy~OgWpXBeCuDi16qOE94ozlb6CUKY-yG0etHH30we2kRtbRtAVqFnMn06jNn0mAB0GAWUmQcmzQAVkqd3yWsZVBQ5HPHOLapGuLuyCRdK4nqj3voK2mYE7yq4cEp3zBMUld4-OrTpDLevjeyOCiRYuzTajpXRuJuxr4-Sxg__"
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
