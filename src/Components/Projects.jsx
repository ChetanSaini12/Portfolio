import React from 'react'
import { useEffect } from "react";
import { Fade } from "react-reveal";
import { FiLink } from 'react-icons/fi';
import {Data} from './ProjectsData.js'

function Projects() {

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "instant",
  //   });
  // });
  return (
    <section id="project"
    data-aos="zoom-in-down"
    data-aos-delay="100"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    >
      <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-center mx-auto my-6 px-4 text-xl max-w-screen-xl">
        Learning path to get started in your CP journey.
        <span className="text-red-500">
        </span>
      </p>
      <div
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="project_timeline max-w-screen-lg mx-auto mt-12"
      >
        <div className="w-full mx-auto p-4">
          <div className="project_items mx-auto">
            {
              Data.map((item, index) => {
                return (
                  <div key={index} className="project_item">
                    <Fade delay={500} left><div className="project_item_date text-red-500">{item.title}</div></Fade>
                    <Fade delay={1000} top><div className="project_item_dot" /></Fade>
                    {/* <Fade duration={1500} left> */}
                      <div className="project_item_content drop-shadow-sm p-5 flex flex-row justify-between">
                      <Fade duration={1500} left>
                        <div className='w-1/2'>
                            <img src={item.img} alt="" style={{ maxHeighth: "13.5rem", width: "27rem" }} />
                        </div>
                        </Fade>
                        <Fade duration={1500} right>
                        <div className='w-1/2 p-5'>
                        <p>{item.description}</p>
                        </div>
                        </Fade>
                        {/* <h3 className="project_header">{item.title}</h3> */}
                        {/* <ul>
                          {item.tools.map((textData, textIndex) => (<li key={textIndex}>
                            <a href={textData.link} target="_blank" rel="noopener noreferrer">
                              {textData.icon} {textData.content}</a>

                          </li>))}
                        </ul> */}
                      </div>
                    {/* </Fade> */}
                    {/* <Fade duration={1500} right> */}
                      {/* <div className="project_item_content project_item_right drop-shadow-sm p-5"> */}
                        {/* <img src={item.img} alt="" style={{ maxHeighth: "13.5rem", width: "27rem" }} /> */}
                        {/* <h3 className="project_header">{item.title}</h3> */}
                        {/* <p>{item.description}</p> */}
                        {/* <ul>
                          {item.tools.map((textData, textIndex) => (<li key={textIndex}>
                            <a href={textData.link} target="_blank" rel="noopener noreferrer">
                              {textData.icon} {textData.content}</a>

                          </li>))}
                        </ul> */}
                      {/* </div>
                    </Fade> */}
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects
