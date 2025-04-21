import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Logo from "../assets/Logo.png";
import T from "../assets/tildacopy.png";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="bg-[#1f6668] text-white py-10">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Chap blok: Logo va matn */}
          <div className="flex flex-col gap-4">
            <a href="#">
              <img src={Logo} alt="BINA Logo" className="w-[230px]" />
            </a>
            <p className="text-xl leading-6">{t("footer.description")}</p>
          </div>

          {/* O‘rta blok: ijtimoiy tarmoqlar */}
          <div className="text-center flex flex-col items-start gap-4">
            <h3 className="text-2xl max-[850px]:text-xl text-left font-medium">
              {t("footer.socials")}
            </h3>
            <div className="flex gap-4 text-4xl">
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTelegramPlane />
              </a>
            </div>
          </div>

          {/* O‘ng blok: aloqa ma'lumotlari */}
          <div className=" flex flex-col gap-3">
            <p className="text-xl font-medium">{t("footer.contact_title")}</p>
            <p className="text-xl font-semibold">{t("footer.phone_number")}</p>
            <p className="text-xl">{t("footer.address")}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] relative">
        <div className="container">
          <div className="py-5">
            <div className="w-[200px] mx-auto flex items-center gap-3">
              <p className="text-white text-lg">{t("footer.mede")}</p>
              <img src={T} alt="Tilda" className="w-[40px]"/>
              <p className="text-white text-lg">{t("footer.tilde")}</p>
            </div>
            <div className="w-full h-full absolute top-0 left-0 bg-[#1f1c1c68] hover:bg-[#ff000000]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
