import React from 'react'
import Lottie from 'lottie-react'
import LottieAnimation from '../helper/social-tree.json'
import github from '../helper/github.png'
import instagram from '../helper/instagramicon.png'
import discord from '../helper/discord.png'
import twitter from '../helper/twitter.png'
import linkedin from '../helper/linkedinicon.png'
import gmail from '../helper/gmail.png'


function Social() {
  return (
    <div className="connect h-max mt-10">
        <h2 className="text-6xl">Let's Connect!!</h2>
        <div className="flex flex-row justify-evenly  gap-10">
            <a href='https://github.com/chetanSaini12/' target='__blank'><img className="github iconImg" src={github} alt="github.img"></img></a>
            <a href='https://www.instagram.com/chetan_saini_irreplaceable/' target='__blank'><img className="instagram iconImg" src={instagram} alt="instagram.img"></img></a>
            <a href='mailto:chetansaini7773@gmail.com' target='__blank'><img className="gmail iconImg" src={gmail} alt="gmail.img"></img></a>
            <a href='https://twitter.com/Chetan_Saini_12' target='__blank'><img className="twitter iconImg" src={twitter} alt="twitter.img"></img></a>
            <a href='https://www.linkedin.com/in/chetan-saini-391793223/' target='__blank'><img className="linkedin iconImg" src={linkedin} alt="linkedin.img"></img></a>
        </div>
      </div>
  )
}

export default Social
