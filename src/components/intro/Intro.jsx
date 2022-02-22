import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: ['Programmer', 'Web Developer', 'Code-wizard']
    })
  },[]);

  return (
    <div className='intro' id="intro">
      <div className='left'>
        <div className="imgContainer">
          <img src={require('../../assets/me.png')} alt="" />
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jonathan Bell</h1>
          <h3>Frontend <span ref={textRef}></span></h3>
          <a href="#portfolio">
            <img src={require('../../assets/down.png')}  alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
