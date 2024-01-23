import React from "react";
import { LightSpeed , Fade } from "react-reveal";
import { Data } from "./ProjectsData.js";

function Projects() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "instant",
  //   });
  // });
  return (
    <section>
      <div
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="projects max-w-screen-lg mx-auto mt-12"
      >
        <div className="w-full mx-auto p-4">
          <div className="project_items mx-auto">
            {Data.map((item, index) => {
              return (
                <div key={index} className="project_item">
                  <Fade duration={1500} left>
                    <div className="project_item_title text-red-500">
                      {item.title}
                    </div>
                  </Fade>
                  <Fade duration={1000} top>
                    <div className="project_item_dot" />
                  </Fade>
                  <div className="project_item_content drop-shadow-sm p-5 flex flex-row justify-between">
                    <LightSpeed duration={1500} left>
                      <div className="w-1/2 flex flex-col justify-center items-center">
                        <img
                          src={item.img}
                          alt=""
                          style={{ maxHeighth: "13.5rem", width: "27rem" }}
                        />
                        <div className="mt-4 flex justify-between w-full ">
                          <div className="mx-4 w-full flex justify-center">
                            <a href={item.githubLink} className="btn w-full btn-accent">GitHub Link</a>
                          </div>
                          <div className="mx-4 w-full flex justify-center">
                            <a href={item.deployedLink} className="btn w-full btn-accent">Deployed Link</a>
                          </div>
                        </div>
                      </div>
                    </LightSpeed>

                    <LightSpeed duration={1500} right>
                      <div className="w-1/2 p-5">
                        <p className="text-sm">{item.description}</p>
                        <h5 className="project_header">Technologies:</h5>
                        <ul className="flex flex-wrap gap-2 text-sm">
                          {item.tools.frontend && (
                            <li className="rounded-md shadow-md shadow-slate-950 p-2">
                              Frontend -
                              <span className="flex flex-wrap gap-2">
                                {item.tools.frontend.map((tech, techindex) => (
                                  <span key={techindex} className="rounded-md text-xs text-primary p-2 border border-green-300">
                                    {tech}
                                  </span>
                                ))}
                              </span>
                            </li>
                          )}
                          <span className="flex w-full flex-row justify-between gap-2">
                            {item.tools.backend && (
                              <li className="rounded-md shadow-md shadow-slate-950 p-2">
                                Backend -
                                <span className="flex flex-wrap gap-2">
                                  {item.tools.backend.map((tech, techindex) => (
                                    <span key={techindex} className="rounded-md text-xs text-primary p-2 border border-pink-600">
                                      {tech}
                                    </span>
                                  ))}
                                </span>
                              </li>
                            )}
                            {item.tools.database && (
                              <li className="rounded-md shadow-md shadow-slate-950 p-2">
                                Database -
                                <span className="flex flex-row flex-wrap gap-2">
                                  {item.tools.database.map(
                                    (tech, techindex) => (
                                      <span key={techindex} className="rounded-md text-xs text-primary p-2 border border-fuchsia-400">
                                        {tech}
                                      </span>
                                    )
                                  )}
                                </span>
                              </li>
                            )}
                          </span>
                        </ul>
                      </div>
                    </LightSpeed>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
