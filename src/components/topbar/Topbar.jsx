import "./topbar.scss";

export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="nameContainer">
            <span className="logo">
              <a id="myname" href="#intro">
                Jonathan
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
