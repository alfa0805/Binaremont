import { useTranslation } from "react-i18next";
import { projects } from "../json/project";
import pr1 from "../assets/pr1.png";
import pr2 from "../assets/pr2.png";
import pr3 from "../assets/pr3.png";
import pr4 from "../assets/pr4.png";
import pr5 from "../assets/pr5.png";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="pt-[110px]">
      <div className="container">
        <NavLink to="/">
            <FaArrowLeft className="text-2xl text-black"/>
        </NavLink>
        <h1
          data-aos="fade-up"
          className=" text-[#2c2929] font-semibold text-6xl max-[770px]:text-5xl max-[570px]:text-4xl py-10"
        >
          {t("project.title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
          {projects.map((project) => (
            <div
              data-aos="fade-up"
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt="project"
                className="w-full h-64 object-cover rounded-t-lg mb-4"
              />

              <h3 data-aos="fade-up" className="text-xl font-semibold py-4 pl-5">
                {t(project.title)}
              </h3>

              <div className="flex items-start flex-wrap gap-2 py-8 pl-5">
                <div data-aos="fade-up" className="w-[250px] flex items-start gap-2">
                  <div className="max-w-[40px] max-h-[40px] mt-1">
                    <img src={pr1} alt="uy" className="w-full h-full" />
                  </div>
                  <div className="">
                    <p className="text-sm text-[#1C6364] font-medium">
                      {t("project.type")}
                    </p>
                    <p className="text-[12px] text-[#2d2a2a] font-semibold">
                      {t(project.type)}
                    </p>
                  </div>
                </div>

                <div data-aos="fade-up" className="w-[250px] flex items-start gap-2">
                  <div className="max-w-[40px] max-h-[40px] mt-1">
                    <img src={pr2} alt="uy" className="w-full h-full" />
                  </div>
                  <div className="">
                    <p className="text-sm text-[#1C6364] font-medium">
                      {t("project.style")}
                    </p>
                    <p className="text-[12px] text-[#2d2a2a] font-semibold">
                      {t(project.style)}
                    </p>
                  </div>
                </div>

                <div data-aos="fade-up" className="w-[250px] flex items-start gap-2">
                  <div className="max-w-[40px] max-h-[40px] mt-1">
                    <img src={pr3} alt="uy" className="w-full h-full" />
                  </div>
                  <div className="">
                    <p className="text-sm text-[#1C6364] font-medium">
                      {t("project.address")}
                    </p>
                    <p className="text-[12px] text-[#2d2a2a] font-semibold">
                      {t(project.address)}
                    </p>
                  </div>
                </div>

                <div data-aos="fade-up" className="w-[250px] flex items-start gap-2">
                  <div className="max-w-[40px] max-h-[40px] mt-1">
                    <img src={pr4} alt="uy" className="w-full h-full" />
                  </div>
                  <div className="">
                    <p className="text-sm text-[#1C6364] font-medium">
                      {t("project.area")}
                    </p>
                    <p className="text-[12px] text-[#2d2a2a] font-semibold">
                      {t(project.area)}
                    </p>
                  </div>
                </div>

                <div data-aos="fade-up" className="w-[250px] flex items-start gap-2">
                  <div className="max-w-[40px] max-h-[40px] mt-1">
                    <img src={pr5} alt="uy" className="w-full h-full" />
                  </div>
                  <div className="">
                    <p className="text-sm text-[#1C6364] font-medium">
                      {t("project.duration")}
                    </p>
                    <p className="text-[12px] text-[#2d2a2a] font-semibold">
                      {t(project.duration)} {t("project.duration1")}
                    </p>
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

export default Projects;
