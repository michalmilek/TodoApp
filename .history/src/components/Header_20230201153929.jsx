import React, { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.add(theme);
  });

  return (
    <header>
      <div className="logo">
        <h1>TODO APP</h1>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className="light"></span>
        <span
          onClick={() => setTheme("medium")}
          className="medium"></span>
        <span
          onClick={() => setTheme("dark")}
          className="dark"></span>
        <span
          onClick={() => setTheme("g1")}
          className="g1"></span>
        <span
          onClick={() => setTheme("g2")}
          className="g2"></span>
        <span
          onClick={() => setTheme("g3")}
          className="g3"></span>
      </div>
    </header>
  );
};

export default Header;
