import React, { useState } from "react";
import Logo from "../assets/logoo.png";
import { useTranslation } from "react-i18next";
import Navigation from "../Pages/Navigation";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation();
  const [openLang, setOpenLang] = useState(false);  // Language modalni boshqarish
  const [openMenu, setOpenMenu] = useState(false);  // Mobile menu ni boshqarish

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpenLang(false);  // Tilni o‘zgartirgandan so‘ng til modalini yopish
  };

  return (
    <header className="bg-[#d57e1a] w-full transition-all duration-300 fixed z-[1000] shadow-md shadow-[#d57e1a]">
      <div className="container max-w-[1240px] h-[70px] flex items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <a href="#">
          <div className="flex items-center gap-1">
            <img src={Logo} alt="Logo" className="w-[50px]"/>
            <div className="">
              <h1 className="text-2xl leading-4 font-bold text-[#84530b]">ouse</h1>
              <h1 className="text-2xl leading-5 font-bold text-[#84530b]">up</h1>
            </div>
          </div>
        </a>

        {/* Menu — only visible on large screens */}
        <div className="hidden min-[1100px]:flex items-center gap-3">
          <Navigation openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          {/* Language Button */}
          <button
            onClick={() => setOpenLang(true)}
            className="px-3 py-1 rounded-md cursor-pointer border-2 text-gray-100 bg-[#84530b] border-[#84530b] hover:text-gray-100 hover:bg-[#84540ba9] transition duration-300"
          >
            {i18n.language ? i18n.language.toUpperCase() : "UZ"}
          </button>

          {/* Contact Button */}
          <a href="#contact">
            <div className="bg-[#84530b] cursor-pointer rounded-md hidden min-[1100px]:flex hover:bg-[#84540b99] transition duration-300 border-2 border-[#84530b]">
              <button className="text-md px-5 py-1 text-gray-100 font-medium">
                {t("header.btn")}
              </button>
            </div>
          </a>
          <div className="min-[1100px]:hidden">
            <button
              onClick={() => setOpenMenu(true)}
              className=""
            >
              <AiOutlineMenu className="text-2xl text-[#84530b]"/>
            </button>
          </div>
        </div>
      </div>

      {/* Language Modal */}
      {openLang && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[300px] text-center">
            <h2 className="text-lg font-semibold mb-4">
              Tilni tanlang / Выберите язык
            </h2>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => changeLanguage("uz")}
                className="p-2 border border-gray-300 rounded hover:bg-blue-100"
              >
                O'zbekcha
              </button>
              <button
                onClick={() => changeLanguage("ru")}
                className="p-2 border border-gray-300 rounded hover:bg-blue-100"
              >
                Русский
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className="p-2 border border-gray-300 rounded hover:bg-blue-100"
              >
                English
              </button>
            </div>
            <button
              onClick={() => setOpenLang(false)}
              className="mt-4 text-sm text-gray-500 hover:text-red-500"
            >
              {t("header.btn2")}
            </button>
          </div>
        </div>
      )}

      {/* Menu Modal for mobile */}
      {openMenu && (
        <div onClick={() => setOpenMenu(false)} className="fixed inset-0 backdrop-blur-xs  bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#d57e1a] rounded-lg shadow-xl p-6 w-[90%] max-w-[400px] relative">
            <Navigation openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <a href="#contact">
              <button onClick={() => setOpenMenu(false)} className="w-full mt-4 bg-[#84530b] text-white py-2 rounded-md">
                {t("header.btn")}
              </button>
            </a>
            <button
              onClick={() => setOpenMenu(false)}
              className=" absolute top-5 right-5"
            >
              <AiOutlineCloseCircle  className="text-red-500 text-2xl"/>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
