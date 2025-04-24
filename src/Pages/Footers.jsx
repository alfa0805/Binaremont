import { FaFacebookF, FaTelegramPlane, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footers() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-white via-pink-50 to-blue-50 p-8 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* IT TIME ACADEMY */}
        <div>
          <h2 className="text-2xl font-bold mb-4">IT TIME ACADEMY</h2>
          <p className="text-sm">{t("footer.description")}</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-red-600 p-3 rounded-md text-white hover:bg-red-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-red-600 p-3 rounded-md text-white hover:bg-red-700 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-red-600 p-3 rounded-md text-white hover:bg-red-700 transition">
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{t("footer.quick_links")}</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">{t("footer.links.home")}</a></li>
            <li><a href="#" className="hover:underline">{t("footer.links.courses")}</a></li>
            <li><a href="#" className="hover:underline">{t("footer.links.mentors")}</a></li>
            <li><a href="#" className="hover:underline">{t("footer.links.about")}</a></li>
            <li><a href="#" className="hover:underline">{t("footer.links.contact")}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{t("footer.contact_us")}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-red-600" /> {t("footer.address")}</li>
            <li className="flex items-center gap-2"><FaPhone className="text-red-600" /> +998 (94) 782 00 92</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-red-600" /> ittimeacademy@gmail.com</li>
            <li className="flex items-center gap-2"><FaClock className="text-red-600" /> {t("footer.hours")}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
