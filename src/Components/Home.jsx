import React from "react";
import myImg from "../chetan-withoutbg.png";

function Home() {
  return (
    <div className="home">
      <div className='side-box'>
      <img className="full-img" src={myImg} />
      </div>
      <div className="chetan-text">CHETAN</div>
      <div className="saini-text">SAINI</div>
      <div className="c-text">C</div>
      <div className="h-text">H</div>
      <div className="e-text">E</div>
      <div className="t-text">T</div>
      <div className="a-text">A</div>
      <div className="n-text">N</div>
      <div style={{width: 386, height: 133, left: 137, top: 260, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        <div style={{width: 461, height: 196, padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 100, fontFamily: 'Oleo Script', fontWeight: '400', wordWrap: 'break-word'}}>{`<Hello/>`}</div>
        </div>
        <div style={{width: 441, height: 191, mixBlendMode: 'soft-light', background: '#D9D9D9', borderTopLeftRadius: 100, borderTopRightRadius: 100}} />
    </div>
      {/* <div>A</div>
      <div>T</div>
      <div>E</div>
      <div>H</div>
      <div>C</div>
      <div>
        <div>
          <div>Hello</div>
        </div>
        <div />
      </div> */}
    </div>
  );
}

export default Home;

/*
<div style={{width: '100%', height: '100%', position: 'relative', background: 'rgba(29.26, 30.10, 25.88, 0.86)'}}>
    <div style={{width: 452, height: 771, left: 763, top: -44, position: 'absolute', background: '#00F0FF'}} />
    <img style={{width: 699, height: 741, left: 432, top: -14, position: 'absolute', mixBlendMode: 'luminosity'}} src="https://via.placeholder.com/699x741" />
    <div style={{width: 727.85, height: 130.38, left: 106.15, top: 518.61, position: 'absolute', transform: 'rotate(-22.31deg)', transformOrigin: '0 0', opacity: 0.26, mixBlendMode: 'soft-light', color: 'white', fontSize: 128, fontFamily: 'Kaushan Script', fontWeight: '400', wordWrap: 'break-word'}}>CHETAN</div>
    <div style={{width: 368.13, height: 131.47, left: 800, top: 244.75, position: 'absolute', transform: 'rotate(-22.31deg)', transformOrigin: '0 0', opacity: 0.61, mixBlendMode: 'color', color: 'white', fontSize: 128, fontFamily: 'Kaushan Script', fontWeight: '400', wordWrap: 'break-word'}}>SAINI</div>
    <div style={{width: 176, height: 159, left: 1035, top: 384, position: 'absolute', opacity: 0.40, mixBlendMode: 'color', color: 'white', fontSize: 300, fontFamily: 'Libre Caslon Display', fontWeight: '400', wordWrap: 'break-word'}}>N</div>
    <div style={{width: 90, height: 109, left: 92, top: 434, position: 'absolute', opacity: 0.70, mixBlendMode: 'hard-light', color: 'white', fontSize: 102, fontFamily: 'Libre Caslon Display', fontWeight: '400', wordWrap: 'break-word'}}>A</div>
    <div style={{width: 119, height: 110, left: 1098, top: 96, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0.70, mixBlendMode: 'hard-light', color: 'white', fontSize: 89, fontFamily: 'Libre Caslon Display', fontWeight: '400', wordWrap: 'break-word'}}>T</div>
    <div style={{width: 79, height: 136, left: 326, top: 637, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', opacity: 0.48, mixBlendMode: 'luminosity', color: 'white', fontSize: 128, fontFamily: 'Libre Caslon Display', fontWeight: '400', wordWrap: 'break-word'}}>E</div>
    <div style={{width: 79, height: 135, left: 689, top: 70, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', opacity: 0.48, mixBlendMode: 'luminosity', color: 'white', fontSize: 115, fontFamily: 'Libre Caslon Display', fontWeight: '400', wordWrap: 'break-word'}}>H</div>
    <div style={{width: 247, height: 367, left: -30, top: -107, position: 'absolute', mixBlendMode: 'soft-light', color: 'white', fontSize: 300, fontFamily: 'Libre Caslon Display', fontWeight: '400', wordWrap: 'break-word'}}>C</div>
    <div style={{width: 386, height: 133, left: 137, top: 260, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        <div style={{width: 461, height: 196, padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 100, fontFamily: 'Oleo Script', fontWeight: '400', wordWrap: 'break-word'}}><Hello/></div>
        </div>
        <div style={{width: 441, height: 191, mixBlendMode: 'soft-light', background: '#D9D9D9', borderTopLeftRadius: 100, borderTopRightRadius: 100}} />
    </div>
</div>
*/
