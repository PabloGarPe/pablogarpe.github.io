import portfolio from "../../public/portfolio.pdf"

const Footer = () => {
  return (
    <footer className="footer">
      <section className="contact-me" id="contact">
        <h2>CONTACT ME</h2>
        <h3>
          Ready to discover an enthusiam developer? I'm available for new
          projects!!
        </h3>
        <div className="buttons-container">
          <button>
            <a href="mailto:pablogarciapernas@gmail.com?subject=Portfolio Contact">
              GET IN TOUCH
            </a>
          </button>
          <button>
            <a href={portfolio} download="PABLO-GARCIA-PORTFOLIO">
              DOWNLOAD CV
            </a>
          </button>
        </div>
      </section>
      <section className="socials">
        <h2>SOCIALS</h2>
        <ul>
          <li>
            <a
              href="https://github.com/PabloGarPe"
              target="_blank"
              rel="noopener"
            >
              <span className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </span>
              GITHUB
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pablo-garc%C3%ADa-pernas-873630352/"
              target="_blank"
              rel="noopener"
            >
              <span className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </span>
              LINKEDIN
            </a>
          </li>
        </ul>
      </section>
      <section className="credits">
        <p>© 2026 Pablo García Pernas. All rights reserved.</p>
      </section>
    </footer>
  )
}

export default Footer
