import React from "react";
import Homee from "../assets/homee.jpeg"
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Vector from "../assets/Vector.png";
import Works from "./Works";
import Partners from "./Partners";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Project";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div
              style={{
              backgroundImage: `url(${Homee})`,
              backgroundRepeat: "no-repeat",
              backgroundSize:"cover",
            }}
        id="home"
        className="pt-[70px] w-full h-full relative bg-[#d57e1a] shadow-md shadow-[#d57e1a]"
      >
        <div className="container flex bg-[#301e056b]">
          <div
            className="w-[50%] max-[950px]:w-[70%] max-[700px]:w-[100%]  bg-cover bg-right
                       h-[620px] max-[1050px]:h-[680px] max-[460px]:h-[780px] max-[370px]:h-[850px]"
          >
            <div className=" w-full h-full">
              <h2 className="text-gray-100 pt-[50px] text-5xl max-[700px]:text-4xl max-[460px]:text-3xl leading-[75px] font-bold animate__delay-1s animate__animated animate__fadeInUp">
                {t("home.title")}
              </h2>
              <p className="text-[#edd4b7] font-extralight leading-[45px] text-3xl max-[700px]:text-2xl max-[460px]:text-xl animate__delay-1s animate__animated animate__fadeInDown">
                {t("home.subtext")}
              </p>
              <div className="w-full pt-10 gap-10 flex flex-wrap items-start">
                <div className="w-[150px] flex items-start gap-3">
                  <div
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
                  <div data-aos="fade-up" className="bg-[#d57e1a] w-[200px] rounded-md min-[1100px]:flex hover:bg-[#d57e1aca] transition duration-300 border border-[#d57e1a]">
                    <button className="w-full text-lg px-5 py-1 text-gray-100 text-center hover:text-white font-medium">
                      {t("header.btn")}
                    </button>
                  </div>
                </a>
                <a
                  data-aos="fade-up"
                  href="tel:+998900975000"
                  className="bg-[#d57e1a] w-[200px] rounded-md min-[1100px]:flex hover:bg-[#d57e1ad8] transition duration-300 border border-[#d57e1a]"
                >
                  <div className="w-full text-lg px-5 py-1 text-gray-100 text-center hover:text-white font-medium">
                    +99890 097 50 00
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div
            className="w-[50%] h-[620px] max-[1050px]:h-[680px] max-[950px]:w-[30%] max-[700px]:w-[0%] bg-cover bg-center"
          ></div>
        </div>
      </div>
      <Works />
      <Partners />
      <Projects/>
      <About />
      <Contact />
    </>
  );
}

export default Home;
