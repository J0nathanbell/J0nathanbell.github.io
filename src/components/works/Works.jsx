import { useState } from "react";
import './works.scss'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function Works() {
  const [currentSlide,setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: require('../../assets/experiance/lewagon.png'),
      title: 'Experiance',
      description: "Le wagon coding bootcamp 2021 September",
      award: <EmojiEventsIcon/>,
      img: require('../../assets/myPicture/chatting.png'),
      img2: require('../../assets/experiance/lewagoncrew.jpg')
    },
    {
      id: "2",
      icon: require('../../assets/icons/arrow.png'),
      title: 'Personal Projects/ Hobbies',
      description: "lorem fijhdbfijbsd fidshbfiu dw ufbdsufd fdbsuibfd iufdyb",
      img: require('../../assets/icons/arrow.png'),
    }
];
const handleClick = (direction) => {
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
                  {d.award && <a href="../../assets/experiance/diploma.pdf">{d.award}</a>}
                </p>
                <span>A 9 week intensive fullstack development bootcamp where I made lots of friends and learnt the MVC app development architecture utalising the ruby on rails tech stack</span>
                <span><a href='https://www.youtube.com/watch?v=jR9xcC7LZD4&t=1s'>Watch one of our presentations</a></span>
              </div>
            </div>
            <div className="right">
              <img className="img1" src={d.img} alt="" />
              <img className="img2" src={d.img2} alt="" />
              <p></p>
            </div>
          </div>
        </div>
          ))}
      </div>
      <img
        src={require("../../assets/icons/down.png")}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={require("../../assets/icons/down.png")}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
