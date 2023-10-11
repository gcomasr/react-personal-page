import React, { useState } from "react";
import WebLogo from "./webLogo";
import NavBar from "./burger-menu/navBar";
import "./header.css";

let navItems = ["Home", "About", "Services", "Contact"];

function header() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <WebLogo />
        <NavBar items={navItems} />
      </header>
    </>
  );
}

export default header;
