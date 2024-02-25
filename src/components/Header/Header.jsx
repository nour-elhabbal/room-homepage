import { useState } from "react";

import MobileMenu from "./MobileMenu";

import "../../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <MobileMenu />

      <a href="#" className="logo">
        room
      </a>
      <nav className="desktop-menu">
        <a href="#">home</a>
        <a href="#">shop</a>
        <a href="#">about</a>
        <a href="#">contact</a>
      </nav>
    </div>
  );
};

export default Header;
