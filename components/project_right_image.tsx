interface ProjectRightImgProps {
    url: string;
    img: string;
    txt1: string;
    txt2: string;
  }

export const Project_right_img:React.FC<ProjectRightImgProps> = ({url, img,txt1,txt2}) => {
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
                        {txt1}
                      </p>
                      <p className="text-justify text-wrap">
                        {txt2}
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