export const About = () => {
  return (
    <>
      <section className="relative scroll-mt-[4.5rem]" id="info">
        <div className="absolute inset-0 pointer-events-none -z-[1]"></div>
        <div className="rmx-auto w-full relative md:px-6 text-default lg:py-20 md:py-10 px-4 py-6">
          <div className="ml-auto max-w-7xl p-4">
            <div className="md:flex md:gap-10 md:justify-end">
              <div className="self-center md:w-1/2">
                <div className="text-lg mb-12 text-end">
                  <h3 className="font-bold mb-2 tracking-tight text-4xl">
                    My Knowledge
                  </h3>
                  <br />
                  <p>
                    <span className="font-semibold italic text-pink-500">
                      Web Development:
                    </span>{" "}
                    HTML, CSS, JS/TS, React/Next.js and TailwindCSS.
                  </p>
                  <br />
                  <p>
                    <span className="font-semibold italic text-pink-500">
                      Backend:
                    </span>{" "}
                    Python, Java, Node.js, Express/Nest.js and a bit of Rust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
