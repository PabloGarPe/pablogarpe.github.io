import Image from "next/image";
import { Project_right_img } from "./project_right_image";
import { Project_left_img_mobile } from "./project_left_img_mobile";
import { Project_left_img } from "./project_left_img";

export const Projects = () => {
  return (
    <>
      <section className="relative scroll-mt-[4.5rem]" id="projects">
        <div className="absolute inset-0 pointer-events-none -z-[1]"></div>
        <div className="rmx-auto w-full relative md:px-6 text-default lg:py-10 md:py-5 px-4 py-3">
          <div className="ml-auto p-4">
            <div className="md:flex md:flex-col md:gapy-10 md:justify-center">
              <div className="md:self-center w-full md:flex md:flex-col md:justify-center">
                <div className="mb-16 w-full md:flex md:flex-col justify-center">
                  <h3 className="font-bold tracking-tight text-4xl text-center">
                    My Projects
                  </h3>
                </div>
                <Project_right_img url="https://mathtexpedia.web.app/" img = "mathtexpedia.png"/>
                <Project_left_img_mobile url="https://horariospceo.web.app/" img = "horariospceo.png"/>
                <Project_left_img url="https://horariospceo.web.app/" img = "horariospceo.png"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
