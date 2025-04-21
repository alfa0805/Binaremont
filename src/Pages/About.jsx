import React from "react";
import { useTranslation } from "react-i18next";
import { IoCaretForwardOutline } from "react-icons/io5";

import about1 from "../assets/rectangle_89.jpg";
import about2 from "../assets/rectangle_43.png";
import about3 from "../assets/rectangle_44.jpg";
import about4 from "../assets/rectangle_45.jpg";
import vector from "../assets/Vector1.png";
import soat from "../assets/Group_68.png"
 
function About() {
  const { t } = useTranslation();

  const texts = [
    { text: t("about.text1") },
    { text: t("about.text2") },
    { text: t("about.text3") },
    { text: t("about.text4") },
    { text: t("about.text5") },
    { text: t("about.text6") },
    { text: t("about.text7") },
    { text: t("about.text8") },
    { text: t("about.text9") },
    { text: t("about.text10") },
    { text: t("about.text11") },
    { text: t("about.text12") },
    { text: t("about.text13") },
    { text: t("about.text14") },
    { text: t("about.text15") },
  ];

  const cards = [
    {
      id: "01",
      img: about1,
      title: t("about.stitle1"),
      texts: [
        t("about.text1,1"),
        t("about.text1,2"),
        t("about.text1,3"),
        t("about.text1,4"),
        t("about.text1,5"),
      ],
    },
    {
      id: "02",
      img: about2,
      title: t("about.stitle2"),
      texts: [
        t("about.text2,1"),
        t("about.text2,2"),
        t("about.text2,3"),
        t("about.text2,4"),
        t("about.text2,5"),
      ],
    },
    {
      id: "03",
      img: about3,
      title: t("about.stitle3"),
      texts: [
        t("about.text3,1"),
        t("about.text3,2"),
        t("about.text3,3"),
        t("about.text3,4"),
        t("about.text3,5"),
      ],
    },
    {
      id: "04",
      img: about4,
      title: t("about.stitle4"),
      texts: [
        t("about.text4,1"),
        t("about.text4,2"),
        t("about.text4,3"),
        t("about.text4,4"),
        t("about.text4,5"),
      ],
    },
  ];

  return (
    <div className="py-10 shadow-md shadow-[#19a69f]">
      <div id="proces" className="container">
        <h1 className="text-[#1C6364] font-medium text-5xl max-[770px]:text-4xl max-[570px]:text-3xl text-center pb-10">
          {t("about.title")}
        </h1>
        <h1 className="text-[#282525] font-medium text-5xl max-[770px]:text-4xl max-[570px]:text-3xl text-center pb-10">
          {t("about.title1")}
        </h1>

        <div className="space-y-4">
          {texts.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-[25px] h-[25px] mt-1 ">
                <IoCaretForwardOutline className="text-[#1C6364] text-2xl" />
              </div>
              <p className="text-3xl max-[770px]:text-xl max-[570px]:text-lg text-[#1C6364]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h1 className="text-[#1C6364] pt-20 font-medium text-4xl max-[770px]:text-3xl max-[570px]:text-2xl text-center pb-5">
          {t("about.title2")}
        </h1>
        <h1 className="text-[#282525] font-medium text-5xl max-[770px]:text-4xl max-[570px]:text-3xl text-center pb-10">
          {t("about.title3")}
        </h1>
        <div className="grid grid-cols-2 max-[670px]:grid-cols-1 gap-10">
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex items-start justify-between gap-4 max-[1000px]:flex-col"
            >
              <div className="w-[245px] max-[1000px]:w-full h-[390px] rounded-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="w-[55%] max-[1000px]:w-full h-[100%] flex flex-col items-start justify-between">
                <div className="item">
                  <p className="text-4xl font-bold text-[#2186888b]">
                    {item.id}
                  </p>
                  <h1 className="text-3xl font-bold text-[#293c3f]">
                    {item.title}
                  </h1>
                  <ul className="flex flex-col gap-1 pt-3">
                    {item.texts.map((text, idx) => (
                      <li key={idx} className="flex items-start justify-start gap-2">
                        <div className="max-w-[30px] max-h-[19px] mt-1">
                          <img
                            src={vector}
                            alt={item.title}
                            className=""
                          />
                        </div>
                        <p className="text-lg font-medium text-[#282525]">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full flex items-center gap-3 border-t-2 border-[#877c7c5a] pt-4">
                  <div className="w-[45px] h-[45px] rounded-[50%] bg-gray-200">
                    <img src={soat} alt="" className="" />
                  </div>
                  <div className="">
                    <p className="text-lg leading-[19px] text-[#1c1a1a]">{t("about.stext1")}</p>
                    <p className="text-lg font-bold text-[#1c1a1a]">{t("about.stext2")}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
