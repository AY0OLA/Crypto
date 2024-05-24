import React from "react";
import Footer from "../Footer/Footer";
import { Test } from "../../Testimonies";

const Service = () => {
  return (
    <div className="pt-[150px]">
      <div className="px-[2rem] grid max-md:grid-cols-1 grid-cols-2 gap-[10px] justify-center max-md:items-center">
        <div className="">
          <div className="flex flex-col gap-[10px]">
            <span className="font-extrabold max-md:text-[1rem] text-[2rem] tracking-[3px]">
              PROJECT MC
            </span>

            <div className="flex flex-col gap-[10px]">
              <div className="bg-[#353535db] p-[5px] tracking-[4px] font-bold rounded-full md:w-[300px] max-md:text-[0.8rem] text-center">
                $CRESO - $124M MC
              </div>
              <div className="bg-[#353535db] p-[5px] tracking-[4px] font-bold rounded-full md:w-[300px] text-center max-md:text-[0.8rem]">
                $TROLL - $128M MC
              </div>
              <div className="bg-[#353535db] p-[5px] tracking-[4px] font-bold rounded-full md:w-[300px] text-center max-md:text-[0.8rem]">
                $DGI - $81M MC
              </div>
              <div className="bg-[#353535db] p-[5px] tracking-[4px] font-bold rounded-full md:w-[300px] text-center max-md:text-[0.8rem]">
                $KIZUNA- $58M MC
              </div>
            </div>
          </div>
          <div className="my-[3rem] gap-[2rem] p-[20px] items-center flex flex-col rounded-[50px] md:w-[500px] border-4 border-[#817f7fde]">
            <div className="text-left items-lastbase max-md:text-[1rem] text-[2rem] font-extrabold tracking-[6px]">
              TESTIMONIES
            </div>
            <div className="grid max-md:grid-cols-1 grid-cols-2 gap-[20px]">
              {Test.map((tests) => {
                return (
                  <div key={tests.id} className="gap-[20px]">
                    <img
                      src={tests.img}
                      alt=""
                      className="w-[248px] h-[299px] cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>

            {/* <button className="bg-[#01c300] rounded-full max-md:p-[15px] p-[10px] text-center items-center">
              View More
            </button> */}
          </div>
        </div>
        <div className="md:mt-[3rem] flex flex-col gap-[20px] flex-nowrap">
          <h1 className="text-[2rem] font-bold tracking-[5px] max-md:text-[1rem]">
            RECENT WORKS
          </h1>

          <div className="bg-[#353535db] rounded-[100px] max-md:px-[20px] p-[50px] flex flex-col gap-[10px] items-center">
            <span className="text-[1.3rem] max-md:text-[.9rem] font-medium tracking-[3px]">
              Better Days Through Crypto has been at the forefront of the crypto
              industry, bringing innovative solutions to help our clients
              succeed. our projects have been instrumental in driving success
              for many businesses, and we are proud of the result we deliver.
              Explore our recnt projects below and see for yourself how we are
              changing the game throught crypto marketing{" "}
            </span>
            <div className="grid grid-cols-2 gap-[10px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/4948/28c8/a34ed7b4fb3524cc8be3f83017b1962c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1XhstH~BPj-7OcvfF1QYq7UEqjknOpq7XVnZ78GX2SzpigmKZcorb17hlLnOikdr6km0OvdR9uRYu3JZYuGmjX0D6nzIUD0wuXuZhLmmiW-5YBv82libAyb0lS2i6WOO-jARKn8N7Rb3uRod~G-A~AYGFZ3DVCjI6p946PNI1k-JcoTSWhha~r~h5Q-~NsnppmYC6w9PDi2TXQ0U7ddNQzm-FObYJk-oItwZEpEG0F~cfXIL6pmD2gSRVs2XmC1uwN4JTt7fOo7LFQbEV5aOK3w5T6MMD-5Zqguqp1NP-4wp8hQFGUHP9bgpPDmUaC~S~PLM37ghMog-IA76FPUJw__"
                alt=""
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/5ea2/a0e9/3cb2e9fa2280e68b35aa3d867c7ef25c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewHn1N5dcYGAtuApAH5XLY36DyWudqjtEa3a~ROEPvySVqqb~oe9dZ4Sc~VcNiJCeMexf7svmKPnE76BqfZyWYqBADJeWJ~BkVzkmwBQcBw6glR1nppcSDv2qHQYwf3YZcdXgnlLiUAUd7~c05cLLNKE3cajMBkbxi-eYfhH7N7dtfUe-L3x7WZxCIQuVGEtigpu5h1T6pbIRfWlo41HolC28Nb68aZdLWnUkvfhLB5Nd-MHgzdyAl-xQccXqv~bx945ja-7fAzOmH6ywJ3dw~UpUvuzKRRMbBGpDxvwXzxkAsd5PZavYv7tu-4Ehwx2Ce2bOKTKhpcagDhdXKxwiQ__"
                alt=""
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/5781/93ac/312cdb4a49aa49ca364a3ac9887a92c1?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XbOee98sVNnW2wgejy2DqsLnYV168HlyJ824vf8qxrf0bdxLgPXesvBmQNkJbWoI6Y8POS8zQtbY6c3zXXbH6VE3z8V7aT~GUMvBpNgig~GSoVaB9XIpgUfiSIK4mJmO36dqVQXDeXAzOD55C1d3oe8DBN~ASYXwH2SgbYtkGfA6IsaLwz3i4IAiq6ikFKU2bImTh4qwo9rwSpGeiCmsMxwZf7EGIO6GSK1TjDntirmlAQhalnl5rEfmrEtdGsIlydYOv69NouFvqGqDVE1LKeHGw-CWhi~~CrVPnJH~b5f6yCG8Kw~g13dBfxcCCFTA9wOqWzYvP0fkWm3ReO1xpg__"
                alt=""
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/e766/8b7b/200bf4debe4a78e0fd44c52da6400fd3?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cCnFYxe~m~vocVxFHJFPKT845sv2lef9fN-HSaCFbekB39OpINknZDwgUYN8f1XJ3dbWoR1YeO6L-jC51B8IJWVYD9PYHaLu~3vl7cRgn4FLzHj3JhhI2kZQJwbR1EMknsg-aGYYrpLLfl6j2S5gtCek0SgdhNYCDXlt~C2JYHhYmmdFp241cuoKJWXkIFDFVvb7yVb1ZsEXQmd0jFxBwK3uK31Eby6PnHSV3ktIHSytZIKATjFkE1IJUU2DpnFxjkPweX6I1Ficx44I2hV-KF2dydezzlMgGIsUb~BbYaIy1AyuyfUFBLMVb-8mt0ZvWO1OddgMwam72IeoBnmwkA__"
                alt=""
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/cdb8/781b/eef9eadc29694f04fa907e4f5c11b26f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DEHuL6hBqC8fGIPp-F20w8yTMz0qJJoIg8kMD5UkLXQezAqtvJGzccPZOEZPmBylthmGpf2p4nclQoCQYga3wCBig5FplsJ~w7SUurBXv2qqAX2NxovDzLky5TR~4pXd2e3wlYAGejS2uktyyajoYVbXdx1pP5hYKZGYFyn76LsK7WScHs78bPWG-WBU-VYKzc0JQf2-cQaywk9B~Ah5kzZtW1hvr7LxsnWKZhWOYRn-soDidxVan8wDmlPnG8HMpIUyEY9TTLobqqKlRq7b7lSd27wVyncSL4Ft4asKlYSUknML6GrWOHs2O6JP3q6eVDm-jcSQGW4XfLFfmIji9A__"
                alt=""
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/8792/d717/c1504694d2ed62a68a87723426f1064b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GMaqAGDVEttKfsFAVBXfKVqbJbeFByXJUW~m4tmj2u8DLc~GMQG2tM9FUnh36zDQxYPFn98RsCDxdF2vgrkJtMJ3KsJGRqj3NR3Y4BzHAhyXgusz2Pu57JePyFo6bjixLPE2x2-Q2mrXwYiYx72RBHS8h5mMya55ELXsjXfgtBlolyNIRmLe5u6wbnSrlTZjio5AKi29981ebxbDKq7Zh9eA9~q6O-0z5sQDHQhQMSk5elmBx0~H7H9DQPsY5HX7INAOxcrLDzFqbe30L2KnRpLXEIrBtFo58WmyzPgbcVz0xnVMgE9pyKKA3ZEqIiaOIek3Cz4Sg9L1gH1moXRLrA__"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[8rem] bg-[#353535db] p-[20px] flex flex-col gap-[20px] text-center justify-center items-center">
        <h1 className="Poppins md:text-[2rem] max-md:text-[1.2rem] font-extrabold tracking-[8px]">
          {" "}
          WHAT DEVS ARE SAYING
        </h1>
        <div className="Poppins md:w-[1000px] text-center text-[1.2rem] max-md:text-[1rem] font-bold tracking-[2px]">
          Thank you so much for the amazing job you're doing! Your marketing
          efforts have exceeded our expectations in every way. Our community is
          growing rapidly, and the quality of engagement is top-notch. We've
          seen a significant increase in token sales and partnerships, and we're
          confident that your work will continue to drive our project's success.
          Your team's expertise, creativity, and dedication are invaluable to
          us. Keep shining - we're excited to see what the future holds for our
          project with your support
        </div>
      </div>
      <div className="my-[2rem] max-md:mx-[1rem] items-center text-center place-items-center">
        <video
          src="https://s3-figma-videos-production-sig.figma.com/video/1364613467625394021/TEAM/13ae/79e9/-052f-458b-b9e6-099d8da9e331?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nzP7kFmOCpTEoYVyLFS4cOktxLDBpaImk0x78Ywpww3XACtHtw38UlRD-EHA3Y-jQ~UUfF0PThEE0XSia62RuvByPLLgLQKdAcRuKrAT~~L640dcPKeHOJZDzH89ujLD7xLgVNSwnC53tMnNTOTaUncF6hdnaMEp8sc9QjjhSu3ct-iMooIxHrqy69IH6umYsTdX-T-i7AePDKIbc8K7~cKHIwtDYZqEVIvEn1V~5AR6xpCpEtz6MhjX5C~dMX3FwcoqWGfy5Pxb2GbdxP-eUB7404A1tpXBOZQuayVvZ9rxK3MtX9F4P6os~UW12yqxfiXENGg5I65anSS9g5K4aw__"
          muted
          autoPlay
          className="md:h-[700px] w-[100%]"
        ></video>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
