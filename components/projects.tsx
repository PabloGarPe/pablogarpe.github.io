import Image from "next/image";

export const Projects = () => {
  return (
    <>
      <section className="relative scroll-mt-[4.5rem]" id="projects">
        <div className="absolute inset-0 pointer-events-none -z-[1]"></div>
        <div className="rmx-auto w-full relative md:px-6 text-default lg:py-20 md:py-10 px-4 py-6">
          <div className="ml-auto p-4">
            <div className="md:flex md:flex-col md:gapy-10 md:justify-center">
              <div className="md:self-center w-full md:flex md:flex-col md:justify-center">
                <div className="mb-16 w-full md:flex md:flex-col justify-center">
                  <h3 className="font-bold tracking-tight text-4xl text-center">
                    My Projects
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:justify-start">
                  <div className="text-lg mb-12 text-justify">
                    <h3 className="font-bold mb-2 tracking-tight text-2xl">
                      <a href="#">MathTexpedia</a>
                    </h3>
                  </div>
                  <div className="md:justify-end pl-12 lg:pl-48 xl:pl-60">
                    <Image src="/mathtexpedia.png" alt="MathTexpedia project" width={500} height={300} />
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
