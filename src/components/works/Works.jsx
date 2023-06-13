import { useState } from "react";
import "./works.scss";
import { worksData } from "../../data.js";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(
          currentSlide < worksData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img
          src={require("../../assets/icons/down.png")}
          className="arrow arrow-left"
          alt=""
          onClick={() => handleClick()}
        />

        {worksData.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftcontainer">
                  <div className="imgcontainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.description}
                    {d.award && (
                      <a href="../../assets/experiance/diploma.pdf">
                        {d.award}
                      </a>
                    )}
                  </p>
                  <span>
                    <a href="https://www.youtube.com/watch?v=jR9xcC7LZD4&t=1s">
                      Watch our final show here!
                    </a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img className="img1" src={d.img} alt="" />
                <img className="img2" src={d.img2} alt="" />
              </div>
            </div>
          </div>
        ))}
        <img
          src={require("../../assets/icons/down.png")}
          className="arrow arrow-right"
          alt=""
          onClick={() => handleClick("left")}
        />
      </div>
    </div>
  );
}
