import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navigation({ openMenu, setOpenMenu }) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const menuItems = [
    t("header.href1"),
    t("header.href2"),
    t("header.href3"),
    t("header.href4"),
    t("header.href5"),
  ];

  return (
    <ul
      className={`flex items-center gap-3 ${
        openMenu ? "flex-col bg-[#d57e1a]" : ""
      } transition-all duration-300`}
    >
      <li
        onClick={() => handleClick(0)}
        style={
          activeIndex === 0
            ? {
                boxShadow: "inset 0px 0px 4px 1px #d0cac2",
                transform: "translateY(-10px)",
                color: "#fff",
              }
            : {}
        }
        className={`text-lg font-medium cursor-pointer px-2 py-1 rounded-4xl transition-all duration-300 ${
          activeIndex !== 0
            ? "text-gray-300 hover:-translate-y-[5px] hover:text-white"
            : ""
        }`}
      >
        <a href="#home"><button onClick={()=>setOpenMenu(false)}>{menuItems[0]}</button></a>
      </li>

      <li
        onClick={() => handleClick(1)}
        style={
          activeIndex === 1
            ? {
                boxShadow: "inset 0px 0px 4px 1px #d0cac2",
                transform: "translateY(-10px)",
                color: "#fff",
              }
            : {}
        }
        className={`text-lg font-medium cursor-pointer px-2 py-1 rounded-4xl transition-all duration-300 ${
          activeIndex !== 1
            ? "text-gray-300 hover:-translate-y-[5px] hover:text-white"
            : ""
        }`}
      >
        <a href="#works"><button onClick={()=>setOpenMenu(false)}>{menuItems[1]}</button></a>
      </li>

      <li
        onClick={() => handleClick(2)}
        style={
          activeIndex === 2
            ? {
                boxShadow: "inset 0px 0px 4px 1px #d0cac2",
                transform: "translateY(-10px)",
                color: "#fff",
              }
            : {}
        }
        className={`text-lg font-medium cursor-pointer px-2 py-1 rounded-4xl transition-all duration-300 ${
          activeIndex !== 2
            ? "text-gray-300 hover:-translate-y-[5px] hover:text-white"
            : ""
        }`}
      >
        <a href="#project"><button onClick={()=>setOpenMenu(false)}>{menuItems[2]}</button></a>
      </li>

      <li
        onClick={() => handleClick(3)}
        style={
          activeIndex === 3
            ? {
                boxShadow: "inset 0px 0px 4px 1px #d0cac2",
                transform: "translateY(-10px)",
                color: "#fff",
              }
            : {}
        }
        className={`text-lg font-medium cursor-pointer px-2 py-1 rounded-4xl transition-all duration-300 ${
          activeIndex !== 3
            ? "text-gray-300 hover:-translate-y-[5px] hover:text-white"
            : ""
        }`}
      >
        <a href="#partners"><button onClick={()=>setOpenMenu(false)}>{menuItems[3]}</button></a>
      </li>

      <li
        onClick={() => handleClick(4)}
        style={
          activeIndex === 4
            ? {
                boxShadow: "inset 0px 0px 4px 1px #d0cac2",
                transform: "translateY(-10px)",
                color: "#fff",
              }
            : {}
        }
        className={`text-lg font-medium cursor-pointer px-2 py-1 rounded-4xl transition-all duration-300 ${
          activeIndex !== 4
            ? "text-gray-300 hover:-translate-y-[5px] hover:text-white"
            : ""
        }`}
      >
        <a href="#proces"><button onClick={()=>setOpenMenu(false)}>{menuItems[4]}</button></a>
      </li>
    </ul>
  );
}

export default Navigation;
