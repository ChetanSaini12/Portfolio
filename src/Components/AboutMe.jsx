import React from "react";
import details from '../detailsnotbgC1.png'
import github from '../github.png'
import instagram from '../instagramicon.png'
import discord from '../discord.png'
import twitter from '../twitter.png'
import linkedin from '../linkedinicon.png'
import gmail from '../gmail.png'

function AboutMe() {
  return (
    <div className="aboutme flex flex-row justify-around">
      <div className="connect mt-20">
        <h2 className="text-6xl">Let's Connect!!</h2>
        <div className="flex flex-row mt-20 gap-10">
          <div className="flex flex-col gap-36">
            <img className="github iconImg" src={github} alt="github.img"></img>
            <img className="instagram iconImg" src={instagram} alt="instagram.img"></img>
            <img className="discord iconImg" src={discord} alt="discord.img"></img>
          </div>
          <div className="flex flex-col gap-36 mt-32">
            <img className="gmail iconImg" src={gmail} alt="gmail.img"></img>
            <img className="twitter iconImg" src={twitter} alt="twitter.img"></img>
            <img className="linkedin iconImg" src={linkedin} alt="linkedin.img"></img>
          </div>
        </div>
      </div>
      <div className="relative">
        <img className="detailsimg" src={details} alt="details.img"></img>
      </div>
    </div>
  );
}

export default AboutMe;
