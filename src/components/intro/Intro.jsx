import "./intro.scss";
import "./animations.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: [
        "The Giga Chad of Git",
        "The SCSS Swashbuckler",
        "A progigy with Python",
        "Handy with HTML",
        '"A" NodeJS Ninja',
        "The wrangler of Rails",
        "A terminal terminator",
        "Supreame Ruler of React",
        "Like Jesus with Javascript",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <img
          className={"dog"}
          src={require("../../assets/myPicture/doglol.gif")}
          alt=""
        />
        <div className={"imgContainer"}>
          <img
            className={"top"}
            src={require("../../assets/myPicture/coolguy3.png")}
            alt=""
          />
          <img
            src={require("../../assets/myPicture/shades.png")}
            className={"shades"}
            alt=""
          />
        </div>
        <img
          className={"dog2"}
          src={require("../../assets/myPicture/doglol.gif")}
          alt=""
        />
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jonathan</h1>
          <h3>Some folks describe me as...</h3>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <a className="arrow-container-link" href="#portfolio">
            <div className="arrow-container">
              <span className={"arrow-1"}></span>
              <span className={"arrow-2"}></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
