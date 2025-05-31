import React from "react";
import Works_bg1 from "../assets/works-bg1.jpg";
import Works_bg2 from "../assets/works-bg2.jpg";
import Works_bg3 from "../assets/works-bg3.jpg";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { NavLink } from "react-router-dom";

function Works() {
  const { t, i18n } = useTranslation();
  return (
    <div id="works" className="pt-20 pb-10">
      <div
        className="container grid grid-cols-3 max-[850px]:grid-cols-2 max-[600px]:grid-cols-1 gap-10"
      >
        <div className=" relative group">
          <a href="#project">
            <div className="w-full h-[500px] overflow-hidden rounded-xl">
              <img
                src={Works_bg1}
                alt=""
                className="w-full h-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.05]"
              />
            </div>

            <div className=" absolute top-0 left-0 bg-[#3d27098f] rounded-xl w-full h-[500px] hidden group-hover:flex items-center justify-center text-gray-100 ">
              <h2 className="text-center pt-5 text-3xl font-bold">
                {t("works.title1")}
              </h2>
            </div>

            <h2
              data-aos="fade-up"
              className=" text-center pt-5 text-3xl font-bold hover:text-[#d57e1a]"
            >
              {t("works.title1")}
            </h2>
          </a>
        </div>

        <div className=" relative group">
          <a href="#project">
            <div className="w-full h-[500px] overflow-hidden rounded-xl">
              <img
                src={Works_bg2}
                alt=""
                className="w-full h-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.05]"
              />
            </div>

            <div className=" absolute top-0 left-0 bg-[#3d27098f] rounded-xl w-full h-[500px] hidden group-hover:flex items-center justify-center text-gray-100 ">
              <h2 className="text-center pt-5 text-3xl font-bold">
                {t("works.title2")}
              </h2>
            </div>

            <h2
              data-aos="fade-up"
              className="text-center pt-5 text-3xl font-bold hover:text-[#d57e1a]"
            >
              {t("works.title2")}
            </h2>
          </a>
        </div>

        <div className=" relative group">
          <a href="#project">
            <div className="w-full h-[500px] overflow-hidden rounded-xl">
              <img
                src={Works_bg3}
                alt=""
                className="w-full h-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.05]"
              />
            </div>

            <div className=" absolute top-0 left-0 bg-[#3d27098f] rounded-xl w-full h-[500px] hidden group-hover:flex items-center justify-center text-gray-100 ">
              <h2 className="text-center pt-5 text-3xl font-bold ">
                {t("works.title3")}
              </h2>
            </div>

            <h2
              data-aos="fade-up"
              className="text-center pt-5 text-3xl font-bold hover:text-[#d57e1a]"
            >
              {t("works.title3")}
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Works;
