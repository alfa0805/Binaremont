import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Part1 from "../assets/mark.png";
import Part2 from "../assets/oq-tepa.png";
import Part3 from "../assets/bobur.png";
import Part4 from "../assets/infi.png";
import Part5 from "../assets/intel_tex.png";
import Part6 from "../assets/Layer.png";
import Part7 from "../assets/globex.png";
import Part8 from "../assets/yakkasaroy.png";

import partbg from "../assets/Part-bottom-bg.jpg";

import group1 from "../assets/Group_65.png";
import group2 from "../assets/Group_66.png";
import group3 from "../assets/Group_67.png";

function Partners() {
  const { t, i18n } = useTranslation();
  return (
    <div id="partners" className="bg-gray-100 pb-10">
      <div className="w-full h-full py-10 bg-[#1C6364]">
        <div className="container">
          <h1 className="text-4xl max-[700px]:text-3xl  text-gray-100 font-bold">
            {t("part.title2")}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className=" flex flex-wrap items-start justify-center gap-5 py-10">
          <div className="w-[290px] h-[130px] p-5 bg-white rounded-md shadow-md transition-transform duration-300 hover:scale-[1.03]">
            <img
              src={Part1}
              alt=""
              className="w-full h-full object-contain transition-transform scale-[0.8]"
            />
          </div>

          <div className="w-[290px] h-[130px] p-5 bg-white rounded-md shadow-md transition-transform duration-300 hover:scale-[1.03]">
            <img
              src={Part2}
              alt=""
              className="w-full h-full object-contain transition-transform scale-[1.5] "
            />
          </div>

          <div className="w-[290px] h-[130px] p-5 bg-white rounded-md shadow-md transition-transform duration-300 hover:scale-[1.03]">
            <img
              src={Part3}
              alt=""
              className="w-full h-full object-contain transition-transform scale-[1]"
            />
          </div>

          <div className="w-[290px] h-[130px] p-5 bg-white rounded-md shadow-md transition-transform duration-300 hover:scale-[1.03]">
            <img
              src={Part4}
              alt=""
              className="w-full h-full object-contain transition-transform scale-[0.9]"
            />
          </div>

          <div className="w-[290px] h-[130px] p-5 bg-white rounded-md shadow-md transition-transform duration-300 hover:scale-[1.03]">
            <img
              src={Part5}
              alt=""
              className="w-full h-full object-contain transition-transform scale-[0.7]"
            />
          </div>

          <div className="w-[290px] h-[130px] p-5 bg-white rounded-md shadow-md transition-transform duration-300 hover:scale-[1.03]">
            <img
              src={Part6}
              alt=""
              className="w-full h-full object-contain transition-transform scale-[0.7]"
            />
          </div>

          <div className="w-[290px] h-[130px] p-5 bg-white rounded-md shadow-md transition-transform duration-300 hover:scale-[1.03]">
            <img
              src={Part7}
              alt=""
              className="w-full h-full object-contain transition-transform scale-[0.9]"
            />
          </div>

          <div className="w-[290px] h-[130px] p-5 bg-white rounded-md shadow-md transition-transform duration-300 hover:scale-[1.03]">
            <img
              src={Part8}
              alt=""
              className="w-full h-full object-contain transition-transform scale-[0.7]"
            />
          </div>
        </div>
      </div>

      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${partbg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-[#0a4e4fd5] py-20">
          <div  className="container">
            <h1 className="text-6xl max-[770px]:text-5xl max-[570px]:text-4xl max-[770px]:text-center text-white pb-10">{t("part.title2")}</h1>
            <div className="flex flex-wrap items-center max-[770px]:justify-center gap-7">
              <div className="w-[350px] h-[340px] relative">
                  <img src={group1} alt="" className="w-full h-full"/>
                  <h2 className="w-[80%] text-[30px] leading-[35px] text-gray-100 absolute top-36 left-5">{t("part.stitle1")}</h2>
                  <p className=" w-[80%] absolute top-[240px] left-5 text-gray-100 text-xl">{t("part.text1")}</p>
              </div>

              <div className="w-[350px] h-[340px] relative">
                  <img src={group2} alt="" className="w-full h-full"/>
                  <h2 className="w-[80%] text-[30px] leading-[35px] text-gray-100 absolute top-36 left-5">{t("part.stitle1")}</h2>
                  <p className=" w-[80%] absolute top-[240px] left-5 text-gray-100 text-xl">{t("part.text1")}</p>
              </div>

              <div className="w-[350px] h-[340px] relative">
                  <img src={group3} alt="" className="w-full h-full"/>
                  <h2 className="w-[80%] text-[30px] leading-[35px] text-gray-100 absolute top-36 left-5">{t("part.stitle1")}</h2>
                  <p className=" w-[80%] absolute top-[240px] left-5 text-gray-100 text-xl">{t("part.text1")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
