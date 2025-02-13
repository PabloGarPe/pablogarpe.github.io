import Image from "next/image";

export const Projects = () => {
  return (
    <>
      <section className="relative scroll-mt-[4.5rem]" id="projects">
        <div className="absolute inset-0 pointer-events-none -z-[1]"></div>
        <div className="rmx-auto w-full relative md:px-6 text-default lg:py-20 md:py-10 px-4 py-6">
          <div className="ml-auto max-w-7xl p-4">
            <div className="md:flex md:gap-10 md:justify-center">
              <div className="self-center w-full">
                <div className="text-lg mb-12 text-center">
                  <h3 className="font-bold mb-2 tracking-tight text-4xl">
                    My Projects
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:justify-start">
                  <div className="text-lg mb-12 text-justify">
                    <h3 className="font-bold mb-2 tracking-tight text-2xl">
                      <a href="#">MathTexpedia</a>
                    </h3>
                  </div>
                  <div className="md:justify-end pl-12">
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
