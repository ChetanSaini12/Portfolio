import React from "react";
import details from '../helper/detailsnotbgC1.png'

function AboutMe() {
  return (
    <div className="aboutme flex flex-row justify-around">
      <div className="relative">
        <img className="detailsimg" src={details} alt="details.img"></img>
      </div>
    </div>
  );
}

export default AboutMe;
