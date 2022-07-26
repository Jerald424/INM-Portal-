import React from "react";
export default function LeftNavbar() {
  return (
    <div>
      <div className="left-navbar">
        <div className="left-nav-logo">
          <img src="http://incpak.com/wp-content/uploads/2020/03/Cooper-Lunde.jpg" />
          <h6>Name</h6>
        </div>

        <div className="left-nav-menu">
          <div className="left-nav-heading">
            <img
              src={require("../../../assets/left navbar/menu.gif")}
              className="left-nav-icon"
            />
            <h5>Menu</h5>
          </div>
          <div className="nav-home">
            <img
              src={require("../../../assets/left navbar/home.png")}
              className="left-nav-icon"
            />
            <p>Home</p>
          </div>
          <div className="nav-home">
            <img
              src={require("../../../assets/left navbar/fees.png")}
              className="left-nav-icon"
            />
            <p>Fees</p>
          </div>
          <div className="nav-home">
            <img
              src={require("../../../assets/left navbar/user.png")}
              className="left-nav-icon"
            />
            <p>Account Details</p>
          </div>
          <div className="nav-home">
            <img
              src={require("../../../assets/left navbar/info.gif")}
              className="left-nav-icon"
            />
            <p>User</p>
          </div>
          <div className="nav-home">
            <img
              src={require("../../../assets/left navbar/settings.png")}
              className="left-nav-icon"
            />
            <p>Settings</p>
          </div>
        </div>
        <div className="nav-sun-img">
          <img src={require("../../../assets/left navbar/sun.png")} />
        </div>
      </div>
    </div>
  );
}
