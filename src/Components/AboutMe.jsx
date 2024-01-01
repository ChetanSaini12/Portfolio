import React from "react";
import Lottie from 'lottie-react'
import LottieAnimation from '../helper/social-tree.json'
import details from '../helper/detailsnotbgC1.png'
import github from '../helper/github.png'
import instagram from '../helper/instagramicon.png'
import discord from '../helper/discord.png'
import twitter from '../helper/twitter.png'
import linkedin from '../helper/linkedinicon.png'
import gmail from '../helper/gmail.png'

function AboutMe() {
  return (
    <div className="aboutme flex flex-row justify-around">
      {/* <div className="connect mt-20">
        <h2 className="text-6xl">Let's Connect!!</h2>
        <div className="flex flex-row mt-20 gap-10">
        <Lottie className="opacity-60 absolute w-3/4" animationData={LottieAnimation} />
          <div className="realtive">
            <img className="github iconImg" src={github} alt="github.img"></img>
            <img className="instagram iconImg" src={instagram} alt="instagram.img"></img>
            <img className="discord iconImg" src={discord} alt="discord.img"></img>
          </div>
          <div className="relative">
            <img className="gmail iconImg" src={gmail} alt="gmail.img"></img>
            <img className="twitter iconImg" src={twitter} alt="twitter.img"></img>
            <img className="linkedin iconImg" src={linkedin} alt="linkedin.img"></img>
          </div>
        </div>
      </div> */}
      <div className="relative">
        <img className="detailsimg" src={details} alt="details.img"></img>
      </div>
    </div>
  );
}

export default AboutMe;
