interface ProjectRightImgProps {
    url: string;
    img: string;
  }

export const Project_right_img:React.FC<ProjectRightImgProps> = ({url, img}) => {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 ">
                  <div className="flex flex-col items-center align-middle justify-center ">
                    <div className="text-lg mb-12 lg:max-w-[75%]">
                      <div className="flex flex-col items-center align-middle justify-center">
                        <h3 className="font-bold mb-2 tracking-tight text-2xl">
                          <a
                            href={url}
                            target="blank"
                            className="hover:text-pink-500 hover:transition hover:ease-linear hover:duration-75 cursor-pointer"
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
                  <div className="flex flex-col items-center align-middle justify-center">
                    <a href={url} target="blank">
                    <img
                      src={img}
                      alt={`${url} project`}
                      width={400}
                      height={250}
                    />
                    </a>
                  </div>
                </div>
    )
}