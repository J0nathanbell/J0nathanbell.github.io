import { useState } from "react";
import './works.scss'

export default function Works() {
  const [currentSlide,setCurrentSlide] = useState(0);

const handleClick = (direction) => {
  direction === "left"
   ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
   : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0 );
};

  return (

    // 
    <div className='works' id="works">
      <div className="slider"
      style={{transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="container">
          <div className="item">

          </div>
        </div>
      </div>


      {/* arrows */}
      <img
        src={require("../../assets/down.png")}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={require("../../assets/down.png")}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
