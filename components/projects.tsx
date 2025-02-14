import Image from "next/image";

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
                <div className="flex flex-col md:grid md:grid-cols-2 ">
                  <div className="flex flex-col items-center align-middle justify-center ">
                    <div className="text-lg mb-12 lg:max-w-[75%]">
                      <div className="flex flex-col items-center align-middle justify-center">
                        <h3 className="font-bold mb-2 tracking-tight text-2xl">
                          <a
                            href="https://mathtexpedia.web.app/"
                            target="blank"
                            className="hover:text-pink-500 hover:transition hover:ease-linear   hover:duration-75"
                          >
                            MathTexpedia
                          </a>
                        </h3>
                      </div>
                      <p className="text-justify text-wrap mb-2">
                        MathTexpedia is a web application that allows users to
                        learn and practice math and software engineering.
                      </p>
                      <p className="text-justify text-wrap">
                        It is built with Next.js, Tailwind CSS, Nest.js and
                        LaTex. The application is deployed in Render and hosted
                        in Firebase.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center align-middle justify-center md:ml-10">
                    <Image
                      src="/mathtexpedia.png"
                      alt="MathTexpedia project"
                      width={400}
                      height={250}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
