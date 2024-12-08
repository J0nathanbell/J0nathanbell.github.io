import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro({ menuOpen }) {
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
        <div className={"imgContainer " + (menuOpen && "active")}>
          <img
            className={"top " + (menuOpen && "active")}
            src={require("../../assets/myPicture/coolguy3.png")}
            alt=""
          />
        </div>
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
              <span className={"arrow-1 " + (menuOpen && "active")}></span>
              <span className={"arrow-2 " + (menuOpen && "active")}></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
