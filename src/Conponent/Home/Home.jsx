import React from "react";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col pt-[8rem]">
        <span className="max-md:text-[1.5rem] text-[2rem] Poppins font-extrabold tracking-widest	text-center uppercase">
          Welcome to BDTC
        </span>
        <div className="image">
          <span className="text-[#fff] max-md:text-[2rem] text-[2.5rem] font-extrabold tracking-[10px] leading-[120%] z-[1] md:w-[750px]">
            ATTRACTING DESIRED AUDIENCE AND DELIVERING ON OBJECTIVES
          </span>
          <span className="z-[1] md:w-[750px] max-md:text-[1.4rem] text-[2rem] tracking-[4px] leading-[120%] font-normal">
            CREATING THE OPTIMAL BUZZ AND VIBE FOR YOUR BRAND AND PROJECTS
            WITHIN THE CRYPTO COMMUNITY
          </span>
        </div>

        <div className="p-[3rem] flex flex-col text-[#fff] text-[1.5rem] max-md:text-[1rem] font-medium tracking-[5px]">
          <span className="text-[2rem] max-md:text-[1.5rem] text-[#fff] font-bold tracking-[10px] mb-[1.5rem]">
            WHO WE ARE
          </span>
          Better Days Through Crypto is not just a marketing agency, but also
          community of crypto enthusiasts and professionals who are dedicated to
          supporting and overseeing the growth and productivity of your crypto
          project. Our team includes raiders, shillers, MODs, and graphic
          designers who all bring their unique talents and expertise to the
          table. We believe that through collaboration and hard work we can help
          bring your project to its full potential.
        </div>

        <div className="flex p-[2rem] flex-col text-center items-center">
          <span className="text-[#fff] text-[24px] font-bold tracking-[4px] ">
            Promoted by BDTC
          </span>
          <div className="flex gap-[10px] mt-[1rem] items-center flex-wrap justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/4948/28c8/a34ed7b4fb3524cc8be3f83017b1962c?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RE~XhKT~X2Gx204l7yHd6M5WF3pXYHvtcBodD3muSqkbPwDnZjzuzP~uayZkm9wdkXNQjXVElggN-~LdjWeKSI1QoJxLTR~cp-E6YMvz2LXa-u9oX8J0aVl0BoQKmMHrwvKe0j1TeO0UaCKRuccvd04~bLnrw9-rmNnbQ-7WPBuTRhIQNBSyMqV-2D1kLB9Q-1RPjspWEVQIVuJoj4FxnmufmeAIwIXuM3fAA6~61lKDvI5RZ94qkSKH-SJ-6jSUV8dbro5YOz~loDDdqPxBVMIefa6n2toYfHtXXklw39oTIontis1bWt4z8dfLEFd~nHfd1Q0P2rXcuqT0PunCvg__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/8792/d717/c1504694d2ed62a68a87723426f1064b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bupTdWFbCrNJsKxxCzXrNXnuKyz~AwX-aFRkCXRiVEhLD6Te22MNLWR0RZUysbL2Vql273G37Sppo2hLtzsL2Ov15Z6bo3ZySBBUaozYEYgWOK~~ZKErEGVXdou7A4wB6sWwGSwhEFVFs~VeUxwUClVx4JMjY3ma48m8-RqguKuglorX2rc44PXUa8VcYlNmC6AYKTc4qQq66IWISzTnwoD~Jsea09HC8ZFn1VDTQ~OgvUqMqf4XmH2VCmDnk90GrWQ2FoKzoy~gY1mDDRsiwtsVKb67-BIIIdK3CKfdE6qN3ZrNLiRgvRDLN88RoCCQCIf1bmblWD8LuxufsEbAsA__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/5781/93ac/312cdb4a49aa49ca364a3ac9887a92c1?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L~ggEaHOmQQdSwTaWjE-bgJYEV4YL7Vo3KHRZpBL7-39-dKafNeKjpTpqWxwEiG31ZHVLFiis6xTVvew86pdAKWqWh0rsEbWrljr2a6649h8cKjon6V~O1~w-2G-xvqReACx-VMhL9zdoL-Y156OxzyOrKgKgyq~KS0kQBvkIm1yHTuD98e71Mq6x6lXOOhvQVRH9WAommBre9jdj1sL43kdvpwCuP4cBEPGq1fPTmouyRzlhvS7zQ3dYL444T8ZwLVBjJJ8~csxI0z3-B3iAN9-Gotdu7zTVsCdTGLExWBzqvO9ApZjdmGrUDNOQgYjds4fpgQ9NvBVDVcWpPyu8g__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/e766/8b7b/200bf4debe4a78e0fd44c52da6400fd3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fr1WJFuPft73QyxrBjv~XiDacNcgqCJqnIJzPAqPI3sc-JpiCQWILVtnULp6iu8LHGyg9wp6moniJaeu4dcfiXpV~52UOC4gEbadOOHn2QFPkGYjCu~T005m~uylkE~XTwSwwW7aeXVfG2FOdfm0gnllHgAeqBCNkP47jWMQ8pbyqASQuufExyNtnkLglA-hX~KhaSkZQaNpT~y2WAu-PFkir0H4afleEU5KvQ4uXfCKdpAf9-2HxAGbP0bM7gf~VS~TYEmOIis5s8tp1ryKgf3MnGROF~qU8ACGdQX96Z1V02ecMci~s3WSxvzq5fzG6GNIeTogoeivHMzPDbnOYg__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/5ea2/a0e9/3cb2e9fa2280e68b35aa3d867c7ef25c?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a43en3urAJLTb1jXb7OtbvS9WwAYQgngf-CxC8cmAFFrVlU06S~ZJDVcLPbqP2PFFUVVsmAUQ-mUrCSWSQP1-q0Gsy~Q4dTxZrx-WcQCs5B509IsTjwEAJYvwcalwchzpAlsaUGA1GaQqfT4Y707cxxAOzAfllIcZN~Ez4eSAEGj0q0YOzdfT2SsBBxiWT-1W1HIf7TiApSk-Hhw2~mDUQM5ztzWGHnlu86IBi5tKUvNzXiaD5FHQYvaB9THBN-8mz~~SXf4Ez4dx~bEn4pfXUp5FeEpWhKX7uMujXz5o1~x5eNFySK0uBiEbPyiDu2BPa9otyHfisAYzgomp7OzNw__"
              alt=""
              className="w-[190px] h-[170px]"
            />
          </div>
        </div>

        <div className="p-[3rem] flex flex-col justify-center items-center gap-[20px]">
          <div className="flex gap-[30px] flex-wrap">
            <div className="flex flex-col ">
              <h1 className="md:w-[500px] text-[#fff] md:text-[3rem] text-[1rem]">
                Discover the power of Shilling
              </h1>
              <span className="text-[#fff] md:w-[250px] md:text-[1.5rem] text-[1rem] font-normal tracking-[4px]">
                Get upto 250+ pro shillers for your project.
              </span>

              <div className="flex gap-[30px] mt-[3rem]">
                <button className="rounded-[40px] bg-[#01c300] p-[10px] font-bold tracking-[2px] ">
                  Book Online
                </button>
                <button className="rounded-[40px] bg-[#01c300] p-[10px] font-bold tracking-[2px]">
                  Book On Telegram
                </button>
              </div>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/c889/0253/6b7ec23cddd4a16b8197cbe498863509?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Romqsg6DAGxGNY0-lstyAl1hiyE-yr0eTGnD5iubMhJ~4ltJxjK9LNviKClEc6vvm8ZATFJpVvI1C~NgBvyfSjnDg~FQfmDUncLMlYvXD6MTu17iyr166v8XJM~WNsIyBnQcmJGOihmZpnrEvwL15kiRnsh~UJcGHeqVOLk6UG3KJ5ig0O1Z2uhO72XakOgljw28VRhRBtkz0TjFfrMj2-P-AVEa~VfhF-vSUxCcTr2qdFo3MRH7QBeSTOlqGTo6maow5YD-XOt-MtLxkawudcDumVhSuXpo2VmORsSJFkX5GwOfGf4EyuHQSOvi0xr7UA7qwQeZtYfu9tNBhFd9xw__"
              alt=""
              className="md:w-[639px] h-[450px] max-md:h-[300px]"
            />
          </div>
          <div className="flex gap-[30px] flex-wrap md:flex-row-reverse	">
            <div className="flex flex-col">
              <h2 className="md:w-[500px] md:text-[3rem] max-md:text-[2rem] text-[#fff] ">
                Secure Twitter, Telegram and Discord Promotions and Listing
              </h2>
              <span className="md:w-[600px]">
                We ensure your project gets the attention it deserves on
                twitter, telegram and others, our team uses strategic promotion
                techniques to attract developers and make your project trending.
              </span>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/b693/ada5/31a35899497d7332220541d3e07fbbd5?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ma2QiWsJlTh-JuBhd3d8PLmtrEXBsDQN2QzyWOMYVdioKn924FGDOKTWavCS3u10F21H5oR1PWuz~~S9R4nClHmefhqRgMh41WNeFMpZatnLJIj4zERBec4bf-Cwccfiz1zKT35UDpKg8C2VSp~V0WPFpBbyr9OuOrexgcAA6o2CPznAMApFBcDHOkTcoeb~VIsSLZFH5Mb5ZyxFW5C~xe6ZM3~Whz4mVPW4MhLm6b7mJjVs8GhhqeFafCeCPuWOCWaY6CjQw58E~3NL355PCkb6TCNpsW-HJuz-pMoKq6bGXnVKFtkczNJU~RoZfPC-WNJAMak-Klcte2tUpfhGhg__"
              alt=""
              className="md:w-[639px] h-[450px] max-md:h-[300px]"
            />
          </div>
          <div className="flex gap-[30px] flex-wrap">
            <div className="flex flex-col gap-[10px]">
              <h1 className="md:w-[500px] text-[#fff] md:text-[3rem] text-[1rem]">
                Boost your project visibility with BDTC hype
              </h1>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-nowrap	gap-[10px]">
                  <input type="radio" />
                  Provision for upto 250 Raiders/Shillers
                </div>
                <div className="flex flex-nowrap	gap-[10px]">
                  <input type="radio" />
                  Provision for Hype men for projects
                </div>
                <div className="flex flex-nowrap	gap-[10px]">
                  <input type="radio" />
                  Project call on all socials including telegram channel 1.6k
                  subscribers and official X account.
                </div>
              </div>
              <div>
                <button className="rounded-[40px] bg-[#01c300] p-[10px] font-bold tracking-[2px]">
                  Hype now
                </button>
              </div>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/f36c/2686/edc5e016e5d9a99a31649f0587430769?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U~2q2Kpz1qgHPFtKPdaqacUNeQ09GPE5ifirUluh2OWLBNGciZmbz~~b61AwwYshH2n3vFU5rIMtr7kRekQakpOIHrAAQiSGF0YnpiyXlgoDdJHre7r-Jp~l81KdxxEKwh5dJTR8ITU2XN~kwyO9VBnh4SltYD8J902MPCI7qOhX19aG04acXuFGWmuATQ0LfppeRwFhTEfY-jDzAg6TuKnHHKWu6ic6h0sXONaChuKUnxzK~WoIxU9d4pzdlBfr1Ty9mxNfk4HmmILL4dfgEIwB12KHQzAt8abKfe3mZv1Cn7gXWlwIauOjPY3EaW64DYf0vuFy1XICk2wKjGx8GA__"
              alt=""
              className="md:w-[639px] h-[450px] max-md:h-[300px]"
            />
          </div>
        </div>

        <div className="p-[30px] mt-[9rem] flex text-center items-center justify-center flex-wrap rounded-[50px] bg-[#353535db] max-lg:ml-[0.9rem] ml-[2rem] gap-[80px] relative max-w-[1430px] max-h-[884px]		">
          <img
            src="https://s3-alpha-sig.figma.com/img/b772/54f7/dc14636791b1d527de32fabb8cd558e4?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yqa2mn~ef46fwkPN6ZqDYetaegWe3PCOSfZ-5-HeZ5nKqJIdd--4KC-SKULFojoiPZvhlZNi3AF3O~eVBO2wIZj0Dlp~VDSW9sX~gVu~~We-agCqLEQ54BamkMAup7oNDbPTKSwz9jxlAwkUpi4YJ-oTcNORlUUPsfotAxrObgSZCcAwOvAc51gkYOYQ9~4mgBdKcSnwvQiqMoW~Qxzkjf3XvEC5SZb78H4bRqaB9EW~2p33zkFlCqku371bS0NmBj~GAzNsgxGymo6WJLz~k7SsYz53bbyTnCXyIjfjXQG~qQr3jh6S-WjXb2qvPVIgKbBGLZveDkc2Ify5xIy7DA__"
            alt=""
            className="max-md:left-[12rem] max-sm:left-[2rem] max-lg:left-[2rem] absolute w-[200px] top-[-6rem] left-[19rem]"
          />
          <div className="mt-[9rem] flex flex-col gap-[30px]">
            <span className="text-[#fff] text-[2rem] max-md:text-[1.5rem] font-bold tracking-[9px] w-[250px]">
              Need Pro Shillers ?
            </span>
            <span className="text-[18px] font-medium tracking-[2px] w-[260px]">
              Optimize your project in 3 steps
            </span>
            <div>
              <button className="p-[10px] rounded-[40px] bg-[#01c300] text-[#fff] text-[1.4rem] tracking-[3px]">
                Book now
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[20px]">
              <div className="text-[2rem] max-md:text-[1.5rem] font-bold tracking-[6.6px]">
                Step 1
              </div>
              <span className="text-[1rem] w-[290px] font-bold tracking-[3.3px]">
                Connect with our specialist for project promotions
              </span>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-[2rem] max-md:text-[1.5rem] font-bold tracking-[6.6px]">
                Step 2
              </div>
              <span className="text-[1rem] w-[290px] font-bold tracking-[3.3px]">
                Personalized promotion packages for your product needs
              </span>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-[2rem] max-md:text-[1.5rem] font-bold tracking-[6.6px]">
                Step 2
              </div>
              <span className="text-[1rem] w-[290px] font-bold tracking-[3.3px]"></span>
            </div>
          </div>
        </div>

        <div className="p-[4rem] flex flex-col text-center items-center justify-center flex-wrap">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[#fff] text-[2rem] max-lg:text-[1.2rem] font-bold leading-8 tracking-[6px]">
              Featured Projects
            </div>
            <div className="text-[#fff] text-[1rem] tracking-[3.3px] font-medium ">
              Discover the trending projects promoted by BDTC
            </div>
          </div>

          <div className="mt-[3rem] flex flex-wrap items-center text-center justify-center gap-[20px]">
            <div className="flex flex-col rounded-[50px] p-[30px] bg-[#353535db]">
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $NINU - $8.9M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $CHINU- $8.3M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $HONK - $44M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $KIZUNA- $58M MC
              </span>
            </div>
            <div className="flex flex-col rounded-[50px] p-[30px] bg-[#353535db]">
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $CRESO - $124M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $DGI - $81M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $TROLL - $128M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $TROLL - $128M MC
              </span>
            </div>
            <div className="flex flex-col rounded-[50px] p-[30px] bg-[#353535db]">
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $PROMTIDE - $4.6M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $BABYSHIB - $14M MC
              </span>

              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem]">
                $ROCKY - $32.2M MC
              </span>
              <span className="text-[#fff] font-bold tracking-[3px] mx-[1rem] opacity-[0]">
                $BABYSHIB - $14M MC
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[3rem] px-[2rem]">
          <div className="text-[#fff] text-[2rem] max-md:text-[1.5rem] font-bold tracking-[8px]">
            FUN FACTS
          </div>

          <div className="mt-[2rem] flex justify-center items-center flex-wrap gap-[40px]">
            <div className="mt-[2rem]">
              <span className="text-[#fff] text-[2rem] max-md:text-[1.4rem] font-bold gap-[24px] flex flex-col tracking-[5px]">
                50+ <span>Happy Clients</span>
              </span>
            </div>
            <div className="mt-[2rem]">
              <span className="text-[#01c300] text-[2rem] max-md:text-[1.4rem] font-bold gap-[24px] flex flex-col tracking-[5px]">
                300+ <span>Active shillers/ raiders</span>{" "}
              </span>
            </div>
            <div className="mt-[2rem]">
              <span className="text-[#fff] text-[2rem] max-md:text-[1.4rem] font-bold gap-[24px] flex flex-col tracking-[5px]">
                14 Hrs Per Day <span>Social Campaign</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[8rem] bg-[#353535db] p-[20px] flex flex-col gap-[20px] text-center">
          <h1 className="Poppins md:text-[2rem] max-md:text-[1.2rem] font-extrabold tracking-[8px]">
            {" "}
            WHAT DEVELOPERS’ ARE SAYING
          </h1>
          <div className="Poppins text-center text-[1.2rem] max-md:text-[1rem] font-bold tracking-[2px]">
            Lorem ipsum dolor sit amet consectetur. Sed amet sed neque sit ut
            leo at habitasse mi. Ut condimentum lorem eget id dictum. Eros et
            dictum venenatis feugiat condimentum et pellentesque elementum
            vulputate.Lorem ipsum dolor sit amet consectetur. Sed amet sed neque
            sit ut leo at habitasse mi. Ut condimentum lorem .Lorem ipsum dolor
            sit amet consectetur. Sed amet sed neque sit ut leo at habitasse mi.
            Ut condimentum lorem{" "}
          </div>
        </div>

        <div className="mt-[5rem] flex flex-col text-center justify-center items-center">
          <h3 className="text-[1.5rem] tracking-[8px] font-bold">
            CONNECT WITH TEAM
          </h3>
          <div className="my-[2rem] flex flex-wrap gap-[10px]">
            <a href="https://t.me/CEO100m">
              <img
                src="https://s3-alpha-sig.figma.com/img/76b4/3b09/865b2284e26f73ccf558c08de1becc45?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxQPa2xE9cY8MxG3eHyXN3LOS9cpMKA3Eq7gI5S1nkslLsGozkQc~hILQLJPMv5aOxvyK8N-A5z32b5eTFFlSGBjqG5rNnrQoOHxk8HAHVRZmuyoLjgc15dIpHvG2SiSi3WCf4T8AF6nH-AeGMOXyyG-OCMPHMw6tY1qP2Go3KUhT1WIA-iWiXN303kyJtmCEcHkqbWgqEzXUjMpMunIJPDmsT8YEOLu1W40k8F7hp8pfOQdoXnfZcjrBwlkSLWO~q0YMjmrD6Gzl2zDDV31UuxwxBnQND~9Cl73qaiEDrWEIM3g3qWBHXBfO5UwkzQmR9YUx~HNmq-4CGSm~fdwKw__"
                alt=""
                className="rounded-full w-[120px]"
              />
            </a>

            <a href="https://t.me/Crypto_boy122">
              <img
                src="https://s3-alpha-sig.figma.com/img/487a/578e/eeeeabd7ef0444176c086e79f3024119?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L6~X25W1mVu9ga0g988H9JSwpWDlf3EF3NxrMm0FgU49iZjEiUjkN985y~du9GeVI1zsS-Y-88C0-VzdBz2UzBIDR4VHug5yUDHXXVTy3ufuaoEc1fCeXSFOUcuiJIwldokB-KhqeRA~f84h-kcB20PX-KhF1OHRxmj~mseu1MxtpJ1GBF8uVEq3LTsJOLrSkQmXkIZBK-sYK-aNp726PFmoLPCO1fvhqZhvuA0E5lIuvXgkKjhDo2IPW94i8EctSVWIVh5CkzA2Kg1xlhVoVJVdnZbtFQzv6U8r38eyWJyGvutWMb2b0X7CVcc28mI0mSTeVxZETQ~65F7SH~FLSw__"
                alt=""
                className="rounded-full w-[120px]"
              />
            </a>
            <a href="https://t.me/Wen_100x">
              <img
                src="https://s3-alpha-sig.figma.com/img/644a/48d4/fa7c71904f6f1d1b4fab3da164b6b415?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hIhmUGP3uZV7meCkCX1RY6txgfNOuu6OCEPjs3QQKarCvfMdJ-xQQaPc96Ao4hKqWmeVEK1E~tOUIWsEV7pubInBTo7wqUn2tTlvO4W0C73zBWDWDJ~eA606RZr4SeOcIwJcBpEA0ikaMpmMn1I5vRau1GviUx2lLXz4Ko27BPoIGqYc9ScMQGrFEtmnQngAasV6Uughl94wVJL3R4j2cXVHCe4bemPlF-OkyZkoxRfTZL~K2cG8xu9Bwig~VdFORV~AUGSpJd758Sbhi~GLe1xirgDMR2RD5xKcLZRTr4C0t-eQpoZuQZMuGFt5oVW9LCid1XK4B5MG0prA9mUAjg__"
                alt=""
                className="rounded-full w-[120px]"
              />
            </a>
            <a href="https://t.me/Nizzan_GTR">
              <img
                src="https://s3-alpha-sig.figma.com/img/a03c/0463/3dfe25fc9a2132c335c1cb2806af5a1a?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oBJ5Nh3HfQJMz8e4IQuCaNqzfOgCql1HsVRNzvhDTsjJ7WyJAuff-3eY1xN-d6H3YKneKBw-AWpYiOx670G-V2bo5QDmrr7-o6xB8S6CRdHPqD43x3Fs9-LfnJnqdEUJxtehZJVrEowX8Ad3AhT~Rl-gQsGW9QXPNoL3ZR6kEgRAM1jrowMA3yUyrYbdaFA~Ki3~5sQZaqmhCMy~NuLub1hhI-5vwvlUrV-9CNVyRSa5OzTM-lMbkRlzOM7T6z1XdK0dgjWuhJbCuDixbbxElCtX9oOTwTnm5TGz1MAXvtqmfUuK9PdUijraPptfTbPJt9hrgXDVIWZFdG-ELxDUXg__"
                alt=""
                className="rounded-full w-[120px]"
              />
            </a>
            <a href="https://t.me/KM_Crypton">
              <img
                src="https://s3-alpha-sig.figma.com/img/4956/8649/27616ede75098f47f3bd62b62596f600?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkkqcArSUz4IC9AA9iguiBSTgxOfVoukV4JvdRMh-LXR1vVtTczl7JKJrtuucqBY4Vejx0Qfzf2VgPVakAfUKMtBAGMUnqWzPTcpzEkYmZOjdVGpX~Qkmbgqf-2QhZRDK0o37284T~ohwJIsSUmaQNyUe2jFR4IWWAYKM-rDFBv6vj~kUZMa8e34mcEgRJULwPo7TTosWETtmB~Uq2DUF-SaBql2L~DGzk9eAmYma5pu9FVj7PsC0QNkdd0boH-fOarz2HgGlCQheAVMdRpDaD11agHDIfNy367x9rzOva9u-CsUhqA4pwbV5KkyaFL1BzcMDkPmG9478lkV0TENPQ__"
                alt=""
                className="rounded-full w-[120px]"
              />
            </a>
            <a href="https://t.me/Osmosiofficial">
              <img
                src="https://s3-alpha-sig.figma.com/img/3bb4/022c/a34886ba8e60e551ad371309784ad8db?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0v2Oyn-Xqw236ge2mtptoh0pIOyNhTdJz~aNnIu9n-9EoLRwaR318mxIcoaUjwyP0GISPOrBMxzXZZLL8S61PB92OuZtOOjh-LiC4gm8Eqt2LwmhT9Cj9sbp66UBI7hsoN46UKBjetgrDz~NsACSb~K-X7ixhxPtnhStbl6X~hi1~uZlBB5iMbn0FLVD9Jj1SiU1PkdbKYe~mMPvR7x5cMFCrina~6ZsKb4-Ad5yo6EkcVFfR3FJuHOmD5CEeLloPm1XgQ2Lx-S4LO8kcUHXXWmpNAMYdSW9oWL3xeCiwx-jefO5gW9knOpZRqTDNflQ7nryd5MoRhMDnAThF1jKA__"
                alt=""
                className="rounded-full w-[120px]"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
