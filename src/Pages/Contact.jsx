import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import i18n from "../i18n";

function Contact() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const BOT_TOKEN = "7519624691:AAGw5kc72DDVM3fE1iv4t_vwfXvJqzo8mQM";
    const CHAT_ID = "1957552716";
    const message = `📥 Yangi murojaat:\n📞 Telefon: +998${formData.phone}\n👤 Ism: ${formData.name}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      if (response.ok) {
        toast.success("Yuborildi!");
        setFormData({ name: "", phone: "" });
      } else {
        toast.error("Xatolik yuz berdi.");
      }
    } catch (error) {
      toast.error("🚫 Telegramga ulanib bo‘lmadi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 border-t-2 border-[#2b9295]">
      <div id="contact" className="container flex flex-col items-center justify-center px-4 py-10">
        <ToastContainer />
        <h1 data-aos="fade-up" className="text-6xl max-[700px]:text-4xl max-[460px]:text-3xl text-[#313435] font-bold mb-4 text-center">
          {t("contact.title1")}
        </h1>
        <h1 data-aos="fade-up" className="text-6xl max-[700px]:text-4xl max-[460px]:text-3xl text-[#1f6668] font-bold mb-8 text-center">
          {t("contact.title2")}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white flex flex-col gap-6"
        >
          <div data-aos="fade-up" className="flex flex-col">
            <label className="mb-2 text-lg font-medium text-[#1f6668]">
              {t("contact.num")}
            </label>
            <input
              required
              type="number"
              name="phone"
              placeholder="+998 99-999-9999"
              value={formData.phone}
              onChange={handleChange}
              className="border border-[#1f6668] rounded-md py-3 px-4 outline-none"
            />
          </div>

          <div data-aos="fade-up" className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-[#1f6668]">
              {t("contact.imya")}
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder={t("contact.pl")}
              value={formData.name}
              onChange={handleChange}
              className="border border-[#1f6668] rounded-md py-3 px-4 outline-none"
            />
          </div>

          <button
            data-aos="fade-up"
            type="submit"
            disabled={loading}
            className="bg-[#1f6668] text-white py-3 font-semibold rounded-md"
          >
            {loading ? `${t("contact.btn1")}` : `${t("contact.btn2")}`}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p data-aos="fade-up" className="text-3xl max-[700px]:text-2xl max-[460px]:text-xl font-semibold">
            {t("contact.title3")}
          </p>
          <p data-aos="fade-up" className="text-3xl max-[700px]:text-2xl max-[460px]:text-xl text-[#1f6668] font-bold mt-2">
            +99890 097 50 00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
