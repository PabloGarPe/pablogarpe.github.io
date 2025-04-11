interface ProjectLeftImgMobileProps {
    url:string,
    img: string
}

export const Project_left_img_mobile: React.FC<ProjectLeftImgMobileProps> = ({url, img}) => {
    return(
    <div className="hidden md:grid md:grid-cols-2 mt-20 ">
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
                  <div className="flex flex-col items-center align-middle justify-center ">
                    <div className="text-lg mb-12 lg:max-w-[75%]">
                      <div className="flex flex-col items-center align-middle justify-center">
                        <h3 className="font-bold mb-2 tracking-tight text-2xl">
                          <a
                            href={url}
                            target="blank"
                            className="hover:text-pink-500 hover:transition hover:ease-linear cursor-pointer hover:duration-75"
                          >
                            HorariosPCEO
                          </a>
                        </h3>
                      </div>
                      <p className="text-justify text-wrap mb-2">
                        HorariosPCEO is a useful web application that allows me
                        and my mates on my degree to check both schedules (with
                        exams and classes) and make it update all the weeks.
                      </p>
                      <p className="text-justify text-wrap">
                        It is built with Next.js, Tailwind CSS and FastAPI. The
                        application is deployed in Render and hosted in
                        Firebase.
                      </p>
                    </div>
                  </div>
                </div>
    )
}