export const Hero = () => {
  return (
    <section className="relative scroll-mt-[4.5rem]" id="home">
      <div className="absolute inset-0 pointer-events-none -z-[1]"></div>
      <div className="rmx-auto max-w-7xl relative md:px-6 text-default lg:py-20 md:py-16 px-4 py-12">
        <div className="mx-auto max-w-7xl p-4">
          <div className="md:flex md:gap-10">
            <div className="self-center md:w-1/2">
              <div className="text-lg mb-12 text-justify">
                <h3 className="font-bold mb-2 tracking-tight text-4xl">
                  Pablo García
                </h3>
                <h3 className="font-semi-bold italic mb-2  text-3xl">
                  Full Stack Developer
                </h3>
                <br />
                <p>
                  I'm a new promise in the world of full stack web apps
                  development and I'm looking for a job in a company that allows
                  me to grow as a professional.
                </p>
                <br />
                <p>
                  I know I might be lacking real world experience, but I'm
                  confident I can quickly grow my skills and become a pillar in
                  any company.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-5">
                {/* TODO: Add social media links */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
