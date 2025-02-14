export const Contact = () => {
    return (
        <footer
        className="mx-auto w-full flex-none backdrop-blur-[6px] "
      >
        <div className="flex flex-col aling-middle justify-center w-full py-3 px-3">
          <nav className="flex md:w-auto w-full items-center justify-center justify-self-center md:mx-3 text-default">
            <ul className="flex flex-row md:space-x-3 space-y-0 w-auto tracking-[0.05em] font-bold flex-nowrap">
              <li>
                <a
                  className="px-4 py-3 hover:bg-white hover:text-black hover:rounded-full hover:shadow-inner"
                    href="mailto:pablogarciapernas@gmail.com"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-3 hover:bg-white hover:text-black hover:rounded-full hover:shadow-inner"
                    href="https://github.com/PabloGarPe" target="blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
}