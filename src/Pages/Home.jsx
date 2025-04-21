import React from "react";
import Home_bg from "../assets/homebg.jpg";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Vector from "../assets/Vector.png";
import Works from "./Works";
import Partners from "./Partners";
import About from "./About";
import Contact from "./Contact";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div
        id="home"
        className="pt-[90px] w-full h-full relative bg-[#1C6364] shadow-md shadow-[#1C6364]"
      >
        <div className="container flex">
          <div
            style={{
              backgroundImage: `url(${Home_bg})`,
              backgroundRepeat: "no-repeat",
            }}
            className="w-[50%] max-[950px]:w-[70%] max-[700px]:w-[100%]  bg-cover bg-right
                       h-[620px] max-[1050px]:h-[680px] max-[460px]:h-[780px] max-[370px]:h-[850px]"
          >
            <div className=" w-full h-full bg-[#0a4e4fd5] ">
              <h2 className="text-gray-50 pt-[50px] text-5xl max-[700px]:text-4xl max-[460px]:text-3xl leading-[75px] font-bold animate__delay-1s animate__animated animate__fadeInUp">
                {t("home.title")}
              </h2>
              <p className="text-[#a8dfdb] font-extralight leading-[45px] text-3xl max-[700px]:text-2xl max-[460px]:text-xl animate__delay-1s animate__animated animate__fadeInDown">
                {t("home.subtext")}
              </p>
              <div className="w-full pt-10 gap-10 flex flex-wrap items-start">
                <div className="w-[150px] flex items-start gap-3">
                  <div
                    //   data-aos="fade-right"
                    //   data-aos-anchor-placement="center-bottom"
                    className="w-[45px] h-[20px]"
                  >
                    <img
                      src={Vector}
                      alt="bg"
                      className="w-full h-full animate__animated animate__slideInLeft"
                    />
                  </div>
                  <p className="animate__animated animate__fadeInRight animate__delay-1s text-xl max-[700px]:text-lg -mt-2 text-gray-100">
                    {t("home.text1")}
                  </p>
                </div>
                <div className="w-[150px] flex items-start gap-3">
                  <div
                    //   data-aos="fade-right"
                    //   data-aos-anchor-placement="center-bottom"
                    className="w-[45px] h-[20px]"
                  >
                    <img
                      src={Vector}
                      alt="bg"
                      className="w-full h-full animate__animated animate__slideInLeft"
                    />
                  </div>
                  <p className="animate__animated animate__fadeInRight animate__delay-1s text-xl max-[700px]:text-lg -mt-2 text-gray-100">
                    {t("home.text2")}
                  </p>
                </div>
                <div className="w-[200px] flex items-start gap-3">
                  <div
                    //   data-aos="fade-right"
                    //   data-aos-anchor-placement="center-bottom"
                    className="w-[45px] h-[20px]"
                  >
                    <img
                      src={Vector}
                      alt="bg"
                      className="w-full h-full animate__animated animate__slideInLeft"
                    />
                  </div>
                  <p className="animate__animated animate__fadeInRight animate__delay-1s text-xl max-[700px]:text-lg -mt-2 text-gray-100">
                    {t("home.text3")}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-around gap-5 pt-10 flex-wrap">
                <a href="#contact">
                  <div className="bg-[#50e5e8] w-[200px] rounded-md min-[1100px]:flex hover:bg-[#1C6364] transition duration-300 border border-[#50e5e8]">
                    <button className="w-full text-lg px-5 py-1 text-gray-700 text-center hover:text-white font-medium">
                      {t("header.btn")}
                    </button>
                  </div>
                </a>
                <a
                  href="tel:+998900975000"
                  className="bg-[#50e5e8] w-[200px] rounded-md min-[1100px]:flex hover:bg-[#1C6364] transition duration-300 border border-[#50e5e8]"
                >
                  <div className="w-full text-lg px-5 py-1 text-gray-700 text-center hover:text-white font-medium">
                    +99890 097 50 00
                  </div>
                </a>
              </div>
            </div>
            {/* <div className=" absolute top-0 left-0 w-[100%] max-[950px]:w-[70%] max-[700px]:w-[100%] h-full bg-[#0a4e4fd5] z-10"></div> */}
          </div>

          <div
            style={{
              backgroundImage: `url(${Home_bg})`,
              backgroundRepeat: "no-repeat",
            }}
            className="w-[50%] h-[620px] max-[1050px]:h-[680px] max-[950px]:w-[30%] max-[700px]:w-[0%] bg-cover bg-center"
          ></div>
        </div>
      </div>
      <Works />
      <Partners />
      <About />
      <Contact />
    </>
  );
}

export default Home;
