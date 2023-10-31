import React from 'react';
import img from './img1.png'
import "./Section5.css";
const Section5 = () => {
  return (
    <>
    <br />
    <br />
    <div className='pageContainer'>
        <div ><img src={img} alt="none" className='textImage' /></div>
    {/* <div className='cardin'> */}
    <dotlottie-player src="https://lottie.host/f6e72f1c-d647-40f4-baa7-733b922b0799/5eXbsGyPN9.json" background="transparent" speed="1" style={{width: "600px",borderRadius: "30px", border: "1px solid grey", height: "600px"}} direction="1" 
    className="cardIn" mode="normal" loop autoplay></dotlottie-player>
    {/* </div>    */}
    
    </div>
   
      </>
  );
};

export default Section5;
