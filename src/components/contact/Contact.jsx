import { useState } from "react";
import './contact.scss';
import contactImage from '../../assets/shake.svg';


export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src={contactImage} alt="" />
      </div>
      <h1>Contact.</h1>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button type='submit'>Send</button>
          {message && <span><span/>Thanks I will reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
};
