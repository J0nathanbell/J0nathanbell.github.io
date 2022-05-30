import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro({menuOpen}) {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: ['Programmer', 'Web Developer', 'Coding dude']
    })
  },[]);

  return (
    <div className="intro" id="intro">
      <div className='left'>
        <div className={"imgContainer " + (menuOpen && 'active')}>
          <img className={"top " + (menuOpen && "active")} src={require('../../assets/myPicture/coolguy3.png')} alt="" />
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jonathan Bell</h1>
          <h3>Frontend <span ref={textRef}></span></h3>
          <a href="#portfolio">
            <div className="arrowContainer">
              <span className={"arrow1 "+ (menuOpen && 'active')}></span>
              <span className={"arrow2 "+ (menuOpen && 'active')}></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
