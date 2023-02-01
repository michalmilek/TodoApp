import React, { useEffect, useState } from "react";

const Header = ({ theme, setTheme }) => {
  return (
    <header>
      <div className="logo">
        <h1>TODO APP</h1>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "light active" : "light"}></span>
        <span
          onClick={() => setTheme("medium")}
          className={theme === "medium" ? "medium active" : "medium"}></span>
        <span
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "dark active" : "dark"}></span>
        <span
          onClick={() => setTheme("g1")}
          className={theme === "g1" ? "g1 active" : "g1"}></span>
        <span
          onClick={() => setTheme("g2")}
          className={theme === "g2" ? "g2 active" : "g2"}></span>
        <span
          onClick={() => setTheme("g3")}
          className={theme === "g3" ? "g3 active" : "g3"}></span>
      </div>
    </header>
  );
};

export default Header;
