import "./topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <div className="nameContainer">
            <a href="#intro" className="logo"><span>.Jonathan.</span></a>
          </div>
          <div className="itemContainer">
            <a href="tel:+447722442278"><span><PhoneIphoneIcon className='icon'/></span></a>
          </div>
          <div className="itemContainer">
            <a href="mailto:jonnybell123@hotmail.com?subject=Enquiry"><span><EmailIcon className='icon'/></span></a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/J0nathanbell"><span><GitHubIcon className='icon'/></span></a>
          </div>
          <div className="itemContainer">
            <a href="https://www.facebook.com/profile.php?id=100073074377173"><span><FacebookIcon className='icon'/></span></a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/jonathanbell123/"><span><LinkedInIcon className='icon'/></span></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
