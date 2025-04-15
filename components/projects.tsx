import { Project_right_img } from "./project_right_image";
import { Project_left_img_mobile } from "./project_left_img_mobile";
import { Project_left_img } from "./project_left_img";

export const Projects = () => {
  const txt1_horarios = " HorariosPCEO is a useful web application that allows me and my mates on my degree to check both schedules (with exams and classes) and make it update all the weeks."
  const txt2_horarios = "It is built with React, Tailwind CSS and NestJs. The application is deployed in Firebase but the backend is hosted in a virtual machine with Ubuntu and Apache as the HTPP server.";
  const txt1_mathtex = "MathTexpedia is a web application that allows users to learn and practice math and software engineering."
  const txt2_mathtex = "TIt is built with Next.js, Tailwind CSS, Nest.js and LaTex. The application is deployed in Render and hosted in Firebase.";
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
                <Project_right_img url="https://mathtexpedia.web.app/" img = "mathtexpedia.png" txt1={txt1_mathtex} txt2={txt2_mathtex} />
                <Project_left_img_mobile url="https://horariospceo.web.app/" img = "horariospceo.png" txt1={txt1_horarios} txt2 = {txt2_horarios}/>
                <Project_left_img url="https://horariospceo.web.app/" img = "horariospceo.png" txt1={txt1_horarios}  txt2= {txt2_horarios}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
