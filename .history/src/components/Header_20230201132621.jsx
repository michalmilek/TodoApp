import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>TODO APP</h1>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="g1"></span>
        <span className="g2"></span>
        <span className="g3"></span>
      </div>
    </header>
  );
};

export default Header;
