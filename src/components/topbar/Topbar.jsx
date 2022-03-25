import "./topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">.Jonathan.</a>
          <div className="itemContainer">
            <a href="tel:+447722442278" aria-label="0 7 7. 2 2 4. 4 2 2 7 8."><span><PhoneIphoneIcon className="icon"/></span></a>
          </div>
          <div className="itemContainer">
            <span><a href="mailto:jonnybell123@hotmail.com?subject=Enquiry"><EmailIcon className='icon'/></a></span>
          </div>
          <div className="itemContainer">
            <span><a href="https://github.com/J0nathanbell"></a><GitHubIcon className='icon'/></span>
          </div>
          <div className="itemContainer">
            <span><a href="https://www.facebook.com/profile.php?id=100073074377173"><FacebookIcon className='icon'/></a></span>
          </div>
          <div className="itemContainer">
            <span><a href="https://www.linkedin.com/in/jonathanbell123/"><LinkedInIcon className='icon'/></a></span>
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
