import { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
export const Header = () => {
  const [themes, SetTheme] = useState("gOne");
  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(themes);
  }, [themes]);
  return (
    <header>
      <div className="logo">
        <img src={Logo}></img>
        <span>TaskMate</span>
      </div>
      <div className="themeSelector">
        <span onClick={() => SetTheme("light")} className="light "></span>
        <span onClick={() => SetTheme("medium")} className="medium"></span>
        <span onClick={() => SetTheme("dark")} className="dark"></span>
        <span onClick={() => SetTheme("gOne")} className="gOne"></span>
        <span onClick={() => SetTheme("gTwo")} className="gTwo"></span>
        <span onClick={() => SetTheme("gThree")} className="gThree"></span>
      </div>
    </header>
  );
};
