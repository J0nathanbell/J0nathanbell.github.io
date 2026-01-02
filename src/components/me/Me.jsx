import "./me.scss";
import "./animations.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Me() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: [
        '"A Ninja with NodeJS"',
        '"The Wrangler of Rails"',
        '"The Terminal Terminator"',
        '"Crown-Prince of Python"',
        '"The Giga-Chad of Git"',
        '"Thee Sith Lord of SCSS"',
        '"High Priest of HTML"',
        '"Supreame-Ruler of React"',
        '"Like Jesus with Javascript"',
        '"The Absolute Dictator of Databases"',
        '"Like Napoleon with NextJS"',
        '"A Virtuoso of VS-Code"',
        '"God-Emporer of Google cloud"',
        '"Jedi Master of Json"',
        '"The Ubermench of Ubuntu"',
        '"A Super Saiyan with Selenium"',
        '"The Final-Boss of Front-end"',
        '"The Autocrat of REST APIs"',
        '"A Connoisseur of Code Review"',
        '"The Pharaoh of Functional Programming"',
        '"The Wizard of Webpack"',
        '"A Visionary with Version Control"',
        '"The Sage of State Management"',
        '"The Oracle of Object-Oriented Programming"',
        '"A Prestidigitator with Package Managers"',
        '"A Sorcerer of Software Architecture"',
        '"The Prophet of Progressive Web Apps"',
        '"The Gladiator of Github"',
        '"The Executioner of Errors"',
        '"The Necromancer of Nested Loops"',
        '"The Assassin of Async Hell"',
        '"The Demon Prince of Debugging"',
      ],
    });
  }, []);

  return (
    <div className="me" id="me">
      <div className="left">
        <img
          className={"dog"}
          src={require("../../assets/myPicture/doglolcropped1.gif")}
          alt=""
        />
        <div className={"imgContainerOuter"}>
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
        </div>

        <img
          className={"dog2"}
          src={require("../../assets/myPicture/doglolcropped1.gif")}
          alt=""
        />
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Jonathan</h1>
          <h3>But some folks have known to call me...</h3>
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
