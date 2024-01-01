import React from "react";
import myImg from "../helper/chetan-withoutbg.png";

function Home() {
  return (
    <div className="home">
      <div className='side-box'>
      <img className="full-img" src={myImg} />
      </div>
      <div className="chetan-text">CHETAN</div>
      <div className="saini-text">SAINI</div>
      <div className="c-text single-letter">C</div>
      <div className="h-text single-letter">H</div>
      <div className="e-text single-letter">E</div>
      <div className="t-text single-letter">T</div>
      <div className="a-text single-letter">A</div>
      <div className="n-text single-letter">N</div>
      <div className="mid-box">
        <div className="text-box">{`<Hello/>`}</div>
        <div className="rect-box"/>
    </div>
    </div>
  );
}

export default Home;
