import "./topbar.scss";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="nameContainer">
            <span className="logo">
              <a id="myname" href="#intro">
                .Jonathan.
              </a>
            </span>
          </div>
          <div className="iconContainer">
            {/* <span className="icon">
              <a href="mailto:jonnybell123@hotmail.com?subject=Enquiry">
                <EmailIcon />
              </a>
            </span> */}
            <span className="icon">
              <a href="https://github.com/J0nathanbell">
                <GitHubIcon />
              </a>
            </span>
            {/* <span className="icon">
              <a href="https://www.facebook.com/profile.php?id=100073074377173">
                <FacebookIcon />
              </a>
            </span> */}
            <span className="icon">
              <a href="https://www.linkedin.com/in/jonathanbell123/">
                <LinkedInIcon />
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div
            className={"hamburger " + (menuOpen && "active")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
