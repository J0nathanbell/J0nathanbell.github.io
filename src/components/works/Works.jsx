import { useState } from "react";
import './works.scss'

export default function Works() {
  const [currentSlide,setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: require('../../assets/arrow.png'),
      title: 'Experiance',
      description: "lorem fijhdbfijbsd fidshbfiu dw ufbdsufd fdbsuibfd iufdyb",
      img: require('../../assets/arrow.png'),
    },
    {
      id: "2",
      icon: require('../../assets/arrow.png'),
      title: 'Personal Projects/ Hobbies',
      description: "lorem fijhdbfijbsd fidshbfiu dw ufbdsufd fdbsuibfd iufdyb",
      img: require('../../assets/arrow.png'),
    },

];
const handleClick =  (direction) => {
  direction === "left"
   ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
   : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0 );
};

  return (
    <div className='works' id="works">
      <div className="slider"
      style={{transform: `translateX(-${currentSlide * 100}vw)` }}
      >
      {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgcontainer">
                  <img src={d.icon} alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.description}
                </p>
                <span>Click me</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
          ))}
      </div>
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