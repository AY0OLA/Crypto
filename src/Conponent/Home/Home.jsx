import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

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

        <div className="p-[3rem] max-md:px-[.5rem] flex flex-col text-[#fff] text-[1.5rem] max-md:text-[1rem] font-medium">
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

        <div className="flex max-md:p-[0.2rem] p-[2rem] flex-col text-center items-center">
          <span className="text-[#fff] max-md:text-[1.5rem] text-[2rem] font-bold tracking-[4px] ">
            Promoted by BDTC
          </span>
          <div className=" gap-[10px] mt-[1rem] items-center grid grid-cols-5 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/4948/28c8/a34ed7b4fb3524cc8be3f83017b1962c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1XhstH~BPj-7OcvfF1QYq7UEqjknOpq7XVnZ78GX2SzpigmKZcorb17hlLnOikdr6km0OvdR9uRYu3JZYuGmjX0D6nzIUD0wuXuZhLmmiW-5YBv82libAyb0lS2i6WOO-jARKn8N7Rb3uRod~G-A~AYGFZ3DVCjI6p946PNI1k-JcoTSWhha~r~h5Q-~NsnppmYC6w9PDi2TXQ0U7ddNQzm-FObYJk-oItwZEpEG0F~cfXIL6pmD2gSRVs2XmC1uwN4JTt7fOo7LFQbEV5aOK3w5T6MMD-5Zqguqp1NP-4wp8hQFGUHP9bgpPDmUaC~S~PLM37ghMog-IA76FPUJw__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/8792/d717/c1504694d2ed62a68a87723426f1064b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GMaqAGDVEttKfsFAVBXfKVqbJbeFByXJUW~m4tmj2u8DLc~GMQG2tM9FUnh36zDQxYPFn98RsCDxdF2vgrkJtMJ3KsJGRqj3NR3Y4BzHAhyXgusz2Pu57JePyFo6bjixLPE2x2-Q2mrXwYiYx72RBHS8h5mMya55ELXsjXfgtBlolyNIRmLe5u6wbnSrlTZjio5AKi29981ebxbDKq7Zh9eA9~q6O-0z5sQDHQhQMSk5elmBx0~H7H9DQPsY5HX7INAOxcrLDzFqbe30L2KnRpLXEIrBtFo58WmyzPgbcVz0xnVMgE9pyKKA3ZEqIiaOIek3Cz4Sg9L1gH1moXRLrA__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/5781/93ac/312cdb4a49aa49ca364a3ac9887a92c1?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XbOee98sVNnW2wgejy2DqsLnYV168HlyJ824vf8qxrf0bdxLgPXesvBmQNkJbWoI6Y8POS8zQtbY6c3zXXbH6VE3z8V7aT~GUMvBpNgig~GSoVaB9XIpgUfiSIK4mJmO36dqVQXDeXAzOD55C1d3oe8DBN~ASYXwH2SgbYtkGfA6IsaLwz3i4IAiq6ikFKU2bImTh4qwo9rwSpGeiCmsMxwZf7EGIO6GSK1TjDntirmlAQhalnl5rEfmrEtdGsIlydYOv69NouFvqGqDVE1LKeHGw-CWhi~~CrVPnJH~b5f6yCG8Kw~g13dBfxcCCFTA9wOqWzYvP0fkWm3ReO1xpg__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/e766/8b7b/200bf4debe4a78e0fd44c52da6400fd3?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cCnFYxe~m~vocVxFHJFPKT845sv2lef9fN-HSaCFbekB39OpINknZDwgUYN8f1XJ3dbWoR1YeO6L-jC51B8IJWVYD9PYHaLu~3vl7cRgn4FLzHj3JhhI2kZQJwbR1EMknsg-aGYYrpLLfl6j2S5gtCek0SgdhNYCDXlt~C2JYHhYmmdFp241cuoKJWXkIFDFVvb7yVb1ZsEXQmd0jFxBwK3uK31Eby6PnHSV3ktIHSytZIKATjFkE1IJUU2DpnFxjkPweX6I1Ficx44I2hV-KF2dydezzlMgGIsUb~BbYaIy1AyuyfUFBLMVb-8mt0ZvWO1OddgMwam72IeoBnmwkA__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/5ea2/a0e9/3cb2e9fa2280e68b35aa3d867c7ef25c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewHn1N5dcYGAtuApAH5XLY36DyWudqjtEa3a~ROEPvySVqqb~oe9dZ4Sc~VcNiJCeMexf7svmKPnE76BqfZyWYqBADJeWJ~BkVzkmwBQcBw6glR1nppcSDv2qHQYwf3YZcdXgnlLiUAUd7~c05cLLNKE3cajMBkbxi-eYfhH7N7dtfUe-L3x7WZxCIQuVGEtigpu5h1T6pbIRfWlo41HolC28Nb68aZdLWnUkvfhLB5Nd-MHgzdyAl-xQccXqv~bx945ja-7fAzOmH6ywJ3dw~UpUvuzKRRMbBGpDxvwXzxkAsd5PZavYv7tu-4Ehwx2Ce2bOKTKhpcagDhdXKxwiQ__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/2640/549d/13c4342066eccabe9aa53c0a20207b83?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n1ZZ9kHedyqncgOEpCWP9xnYabVW4Fmbb-rd47zfr-SzMpluatagaWIqD~0wi58KhSvUOgu7GT4Tk6aYHPbf-2dmSmFSkqPyVObtvxzzLeUKCLZON6DRxUyUcLlSiQCBJymy2eDHzdpMLnoBhZofIOrtxPAonjvvlDSoqZiD3z0s2STDMPBe3jqQDyzLpGJt8gCdYmACF67UZX3gDdPd5Nu8qNNzLrQeXittJSl3MEK2ExaO63v1ez2sjA9nRfgPiclDk6tbEgUr9TaGMPudY4e-GKo16F5eF1yHiuM7jxxungBmMer770WHP9rt21Tiv6Tz0S-TKquXMLTYsNU-Rw__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/c130/b5a7/fc737b24bdfe01ffdbc72ba739620d3a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KLVaaYL67JUBC7tOf8LUJz7UNDP6Am1FU8vxCFYOUVJ96Y~pHRiteeWArstJYY4~~fA73-ICz2kSMtTujGCk9qtREwxyoe1Df5icfslE1lB2H~6p9S0Q5o2UAnqMoQnnqCrTJJxdD88qy5i7pND-o7Nq0tVbq3bHVmDItmJoF1EZPcDbG3bGezU7LtWNAfeThLFDkIqm9TaeIYcXi5Pz5RNmISnLnS22CIfJROmku73fMoNd5X6FTCV6kjSjzGZQRTbSxTkhKI3vKecsW1-JjMjorRB3zrzvwJH7vDmS5f83mUG28ljeAAvjf-W6TpM0cd-GodALzgzchBLmbjY-JQ__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/f486/f158/81894a00e0f458037ed21aed10a30e03?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YqhGGmIlu~hU9fo2qvQEn1wBKqy8F1FFcOPFVCcEil5wNuSVGcyGPnc1MrebFtHjB6sS2TtQlDdLBbWO4MWK0NIZaqIRu5q0YBDWPsg~ntvLW0U8v2ixMVhiESmm2MwIylce~5v2ZaKM9oAoHlGVq5Q1ddO5AAsR5FXz~20MgrRW~2RV-TChO3LEU7NAzATAAUjNbgHYxiCtYoBgeKOkH0nOh4caIa-0blu9o5hePRQl2vMjPoi1fHAdTHFpublzY2DMcH6MZZtI0fGnV5mjnXiDZuFH8LLi36vrLzXvb0O9elbj2F3NVa5ZjIUfy2-c1~f7TaURFHIQl9hAdSgBsA__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/6e85/dd8a/76cb17c471d0ab050b5a19641814bfc5?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JzRFAvUppiwCoT4mRrneQBA9B9BNtgu-I51z6mZ36LhcCH4elQ0fAlMyyn6IE5CEaMw6VSaOKr8jGSslbRI-RPdeIbsaMfUOkPNy3hPfToBZy0qNSxN2Z4YdePfkl2x2wqc80v5NFWXnnl5rF~6hRR3KxD53Vs1g055D4Nx8lGoRBFj31voECuWp9zAZz8qtFxyNuSzH8QEd37I0oNT~k4yPWR9C6ktgTEC7EPUbDDT03~pb5rsFkN3XTzdV3U93XnJtktNKe2jRXzi7o4G6O~AP3YuWGp3sHpMKN9lgffa8ncnus119ZY6Y3kcwoe5P5yQmrOt8krRR709OXPkDvw__"
              alt=""
              className="w-[190px] h-[170px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/c801/e8ef/8c559bbe449c25ce3ab3b658dfaa1aae?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SlniQNM48LUT1NqewGIIQye4c3UzVTUELBQYcAuSeaI2NKLEqRSw2Bjz13glc2dPauNbQrv0Cd4kC0xpRFuI2e5XXVVj2d7LJz~2bSh1kyPfW34rFiHOsjuR-zmRSBGIb~T~drWR6F8vy-xtZYeQH0kMSkXfPir1JAHxvAaIYb4Bc2a3LonULBNVBVZnRgUs5oH8hH6fHmZuM-XG6awDH4go8T0NQrsULOUGjYct4cpisGb03KICBgwzn92Jc~FoH2QUSqAO6cM-AYHjscIoWCP1kdS8jqM2C6cG0N1z9ieh-3AzwJ47GsqQcGzC2SdqlJOEs406ZFFm0Yd8m4CPwg__"
              alt=""
              className="w-[190px] h-[170px]"
            />
          </div>
        </div>

        <div className="p-[3rem] max-md:px-[0.5rem] flex flex-col justify-center items-center gap-[20px]">
          <div className="flex gap-[30px] flex-wrap">
            <div className="flex flex-col ">
              <h1 className="md:w-[500px] text-[#fff] md:text-[3rem] max-md:text-[2rem]">
                Discover the power of Shilling
              </h1>
              <span className="text-[#fff] md:w-[250px] md:text-[1.5rem] text-[1rem] font-normal tracking-[4px]">
                Get upto 250+ pro shillers for your project.
              </span>

              <div className="flex flex-wrap gap-[30px] mt-[3rem]">
                <Link
                  to={"/team"}
                  className="rounded-[40px] bg-[#01c300] max-md:p-[15px] p-[10px] font-bold tracking-[2px] "
                >
                  Book Online
                </Link>
                <a
                  href="https://t.me/BDTCGEM"
                  className="rounded-[40px] bg-[#01c300] max-md:p-[15px] p-[10px] font-bold tracking-[2px]"
                >
                  Book On Telegram
                </a>
              </div>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/c889/0253/6b7ec23cddd4a16b8197cbe498863509?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CNDisin70CSwn4QM~D6BsBHJqsnKpnekm4Ca7DKtsJYooYV-VN8zzBwbOeoFUVwTltpUB~wmDb8HkYMVq6jfNH-EvJ8tVo5mxq-wn0qrKmc710z0BOd7ogFsleUUBI6MxC16agvsw6~5NH8~UvMzCxmXAH9IOVWBXsXgNDac-B9jKnz4C6sxu2juQZ6jWec9x6pZ5yK7N~4SDUOn0TOn0gX-fGvQxuPSfQIEwB2Sexe12Hzl7X3zMPgFHrE6bB1pGMhAU4hWElqGArhG8txPc-4NlUUo5ZI-5E~-98Teww8viP1GIy3OWBML2MscEkmBGoQNAn9MQSOCeLFEMTiTMw__"
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
              className="md:w-[539px] h-[450px] max-md:h-[300px]"
            />
          </div>
          <div className="flex gap-[30px] flex-wrap">
            <div className="flex flex-col gap-[10px]">
              <h1 className="md:w-[500px] text-[#fff] md:text-[3rem] max-md:text-[2rem]">
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
                <div className="flex flex-nowrap gap-[10px]">
                  <input type="radio" />
                  Project call on all socials including telegram channel 12k+
                  subscribers and official X account.
                </div>
              </div>
              <div className="mt-[20px]">
                <Link
                  to={"/team"}
                  className="rounded-[40px] bg-[#01c300] max-md:p-[15px] p-[10px] font-bold tracking-[2px]"
                >
                  Hype now
                </Link>
              </div>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/f36c/2686/edc5e016e5d9a99a31649f0587430769?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nlx02Su3U~iagdUVBHtOUpCyicDitaAmdxmw-z3EmqNhstxbtzZT281mnZoRzgLwgsfchw~HlgOkwN6UznteJ6DpJL3PToyfSneQDJaEm9N1qm3Ebwv4zmGciSj2uT4Js9xVPw2veArXg5Pb2q~qjxTi7Hqbi0nKkBbBOUdPSWi54eztIclClt~cKL07Y-nh-JHKwqJf~Hlo5SfESS6An0ImftXJwkAg8J3BwzRIT7XxJALkxqHUDb4ly6nC7mmuWMG-RpeXp5FOWj5AwDlID-0iXaf1d6iRLdWXlBxqGcr6I9R7CuNJGvOoCPFRQAt~hoPzXcQpa2kTvd1mv0cBHw__"
              alt=""
              className="md:w-[539px] h-[450px] max-md:h-[300px]"
            />
          </div>
        </div>

        <div className="p-[30px] mt-[9rem] flex text-center items-center justify-center flex-wrap rounded-[50px] bg-[#353535db] max-lg:ml-[0.9rem] ml-[2rem] max-md:gap-[20px] md:gap-[10rem] relative max-w-[1430px] max-h-[884px]		">
          <img
            src="https://s3-alpha-sig.figma.com/img/b772/54f7/dc14636791b1d527de32fabb8cd558e4?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MAefZKSJlOYnB4A0T2WK5l25NUnqthTgf5Rm9dfolL5zVpM7i81cfQYa6KFwrTWWOBqEnyC7Cfe95AwIXkRhqWs3NJbSJcOTkD7kTNEqmeoqWiFL7MFqZyyUOjcBYDbsPeOwuAPHPUkY7L7UNXJWKStyQiDxi3aUG~1-UujJEkuhgYIhICt6VmGjGAQP3gFab54~C4e0PbKiJviauuwssKv3psSS74xxQDLcm3G6S1uGf3GOZSSeVvLlWT-57S2j3AWCXn-jW7QhyUhWknL4yUVNzC3ZstvuPCopv0zJ3WHzbESkO371Ie7eBJ5h1tGrAOHvUPkSjcZzy20msRqfLA__"
            alt=""
            className="max-md:left-[12rem] max-sm:left-[2rem] max-lg:left-[2rem] absolute w-[200px] top-[-6rem] left-[19rem]"
          />
          <div className="mt-[5rem] flex flex-col gap-[30px]">
            <span className="text-[#fff] text-[2rem] max-md:text-[1.5rem] font-bold tracking-[9px] w-[250px]">
              Need Pro Shillers ?
            </span>
            <span className="text-[18px] font-medium tracking-[2px] w-[260px]">
              Optimize your project in 3 steps
            </span>
            <div>
              <Link
                to={"/team"}
                className="p-[10px] max-md:p-[15px] rounded-[40px] bg-[#01c300] text-[#fff] text-[1.4rem] tracking-[3px]"
              >
                Book now
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[20px]">
              <div className="text-[2rem] max-md:text-[1.5rem] text-left font-extrabold tracking-[6.6px]">
                Step 1
              </div>
              <span className="text-[1rem]  font-bold text-left tracking-[3.3px]">
                Connect with our specialist for project promotions
              </span>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-[2rem] max-md:text-[1.5rem] text-left font-extrabold tracking-[6.6px]">
                Step 2
              </div>
              <span className="text-[1rem] text-left  font-bold tracking-[3.3px]">
                Personalized promotion packages for your product needs
              </span>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-[2rem] max-md:text-[1.5rem] text-left font-extrabold tracking-[6.6px]">
                Step 3
              </div>
              <span className="text-[1rem] text-left font-bold tracking-[3.3px]">
                Connect with teams on Telegram
              </span>
            </div>
          </div>
        </div>

        <div className="p-[4rem] flex flex-col text-center items-center justify-center flex-wrap max-md:px-[1rem]">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[#fff] text-[2rem] max-lg:text-[1.2rem] font-bold leading-8 tracking-[6px]">
              Featured Projects
            </div>
            <div className="text-[#fff] text-[1rem] tracking-[3.3px] font-medium ">
              Discover the trending projects promoted by BDTC
            </div>
          </div>

          <div className="mt-[3rem] flex flex-wrap items-center text-center justify-center gap-[20px]">
            <div className="flex flex-col gap-[2rem] rounded-[50px] max-md:p-[15px] p-[30px] bg-[#353535db]">
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
            <div className="flex max-md:p-[15px] gap-[2rem] flex-col rounded-[50px] p-[30px] bg-[#353535db]">
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
            <div className="flex max-md:p-[15px] flex-col gap-[2rem] rounded-[50px] p-[30px] bg-[#353535db]">
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
                300+ <span>Happy Clients</span>
              </span>
            </div>
            <div className="mt-[2rem]">
              <span className="text-[#01c300] text-[2rem] max-md:text-[1.4rem] font-bold gap-[24px] flex flex-col tracking-[5px]">
                300+ <span>Active shillers/ raiders</span>{" "}
              </span>
            </div>
            <div className="mt-[2rem]">
              <span className="text-[#fff] text-[2rem] max-md:text-[1.4rem] font-bold gap-[24px] flex flex-col tracking-[5px]">
                16 Hrs Per Day <span>Social Campaign</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[8rem] bg-[#353535db] p-[20px] flex flex-col gap-[20px] text-center justify-center items-center">
          <h1 className="Poppins md:text-[2rem] max-md:text-[1.2rem] font-extrabold tracking-[8px]">
            {" "}
            WHAT DEVELOPERS’ ARE SAYING
          </h1>
          <div className="Poppins text-center text-[1.2rem] max-md:text-[1rem] md:w-[1000px]  font-bold tracking-[2px]">
            Wow, I'm blown away by the incredible work you've done so far! Your
            team's organized outreach strategy has not only increased our social
            media engagement by 300%, but has also attracted the attention of
            key influencers and investors in the crypto space. Your
            professionalism, expertise, and passion for crypto are evident in
            every aspect of your work. Our project's visibility and credibility
            have skyrocketed thanks to your efforts. Keep up the fantastic work
            - I can't wait to see what the future holds for our project with
            your support
          </div>
        </div>

        <div className="mt-[5rem] flex flex-col text-center justify-center items-center">
          <h3 className="text-[1.5rem] tracking-[8px] font-bold">
            CONNECT WITH TEAM
          </h3>
          <div className="my-[2rem] flex flex-wrap gap-[10px]">
            <a href="https://t.me/CEO100m">
              <img
                src="https://s3-alpha-sig.figma.com/img/76b4/3b09/865b2284e26f73ccf558c08de1becc45?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~vnLtDYDyyPQIKhHmD1gjz4OmdK~kMeTW12~dXIPtx6iJ2X6yl-Ab-rFbhE8MtdZmSSBqslyhnpE9n97mBuVHOR64AL4ZUxZJrZrhAvOnen2ntEDjuBg0HiwnobDX89tTupdhKRi6LR3DkMpjnseZ33dTkyAAA2RpPgRC0O8ttzLauvHHdXGCSJ9eCHsqB-qMnJj2YKs6x6j3JSFpOffM8J20QDsXWmhPMn5b-mRQV8iaNUI9q3cKhWonLHgyQuBNzoVvdpY56~6fEZX1O5Kgoypbt7u3EOeCWz-7mRiRwCbAO5mBhOBqHXdgjcygrTRuOzyyDPMCZuhiKrLNVwbg__"
                alt=""
                className="rounded-full w-[120px]"
              />
            </a>

            <a href="https://t.me/Crypto_boy122">
              <img
                src="https://s3-alpha-sig.figma.com/img/487a/578e/eeeeabd7ef0444176c086e79f3024119?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~DIWg7PnEPMsZVUsnIRM~15TspSFMFMVCQkzlVDFUQZkBxADIC7gWTXZunP~LlNLLn4tkZ6okliaBz8aIsASXhLtRR1J3Os7M1VljmCyNZAmgsvv50GgBPJL0CPatC075TmaNEW-37U-d5o~m-JKz2y-Hrs-exRplQ2vv-kShf0GwoV7inUEoxlnJ3K2tKeoyeT9xP~3kA5T2a51cHqmuw7AuNjF05NldXRj4tBp0kf0bGK-zMPi8N6oPn9gloPakbBpr~F2xLWZz7KQH~GihCUyS9DavxyOwxc~VLRukQwgmDyII5-9Z19RZftCqQQ~gduod~1RPUyyRS6nfaecg__"
                alt=""
                className="rounded-full w-[120px]"
              />
            </a>
            <a href="https://t.me/Wen_100x">
              <img
                src="https://s3-alpha-sig.figma.com/img/644a/48d4/fa7c71904f6f1d1b4fab3da164b6b415?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMW75VNeF0z~G1bS~RT7sN34~LXagGGdDppcEwt~U5jxj-zVN4l~8kAAQJpvw~Lcus3Ria0fP9qis9zd7B1iGz60WEiYg3O0OsiY~qLSclMzfxRMnzvcG1dFaDZNBVArWd8-kXp-78et6VrhX2vPDoBEGmz0y2QhS1~I9S1TpAm0KFsDIpJoXLFfYVqUGKBP70klJTo~EX8VEmI8hUafEQZL2Fbldw81IyIsImjlsgir4djogwyjpK8OCEtCZmw3iXUOF5mB718rCX~ddiZLgivqkPkjQKOHianiz3adyITqzinqZ57yW9J7p94E-9SMkue5n4ecemGpcRCgPBlMKA__"
                alt=""
                className="rounded-full w-[120px]"
              />
            </a>
            <a href="https://t.me/Nizzan_GTR">
              <img
                src="https://s3-alpha-sig.figma.com/img/a03c/0463/3dfe25fc9a2132c335c1cb2806af5a1a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MzP4c7AA-WT-poFaynjTii8tGCLc8AXxuK6br1j5B80-137MlO1Ri53yKPpukCWv~GL~cjBVLoHsowy60mxUx6hyCMe6wDqhYZ3e0uN1taFhy3dHl66nx2CKtmXy-tKRv6aGJXCPpWb31kIp~-7ZdcalK1FN4CkmcjrfYzxZmdWiVLiy~OgWpXBeCuDi16qOE94ozlb6CUKY-yG0etHH30we2kRtbRtAVqFnMn06jNn0mAB0GAWUmQcmzQAVkqd3yWsZVBQ5HPHOLapGuLuyCRdK4nqj3voK2mYE7yq4cEp3zBMUld4-OrTpDLevjeyOCiRYuzTajpXRuJuxr4-Sxg__"
                alt=""
                className="rounded-full w-[120px]"
              />
            </a>
            <a href="https://t.me/KM_Crypton">
              <img
                src="https://s3-alpha-sig.figma.com/img/4956/8649/27616ede75098f47f3bd62b62596f600?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WcZkS7ZQ3vIS0LUk49~JLPcmrLihT0LcUVxOlbJjRppL~UQdRZheRgcM2txAmYDT9zNuqwHt4ookdTboTayWe1F2qKhQKpqs-tSl358-GaeuezmaMsxoAlMReh-gv6sjAYQvVLP2fEhotgVoBcsxMsOJvsKzA4g~nqWDv-O~RzZtOZ9LH0ovCOfE9jIwCExhQlMBMmo29j7hmHX0OY-H-jcisCuT7IHu4YTDrQid8DhjYDrPoR0KF3jX346ExPQ41Z1MJx-~QngjQB7sf0OKQ5KGnDbEqYrjX1exj1~-cBoBtIYCBdrFgUg59utaleCG4tKO0oiGcViLgHGGo48j6g__"
                alt=""
                className="rounded-full w-[120px]"
              />
            </a>
            <a href="https://t.me/Osmosiofficial">
              <img
                src="https://s3-alpha-sig.figma.com/img/3bb4/022c/a34886ba8e60e551ad371309784ad8db?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DmN7QNWJ7sDxgeTqwheqQpXuWK3Qmrw1yXUijB5OgDafei5x1QQpnAR2NV9Kx8KJ19Q9m6HEyl6lCPaWTf70ZBuRtMrBFsr4JhXmAL2kITlWnMI8A1BalURYBk4YYdeRGzdguBMo8iaPvleYVknhrTaQKhhyWWYGwt32SvntXexVs~TutVP5lTiuiP-hw9tZdCqNzqA3Qq4hJMbY7nWvGt9KKxB-kjFqIWnhYcCo9eXq9qqZtp7McW2tkFNjk7ruqz4Zk8O1BvcPo3PN6fnA4SHjxsxFtFtppngYYJGz9klb7CW1LwjsTZln4VdujcdurS-qlIqPOmCi2mNHRUwgyQ__"
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
