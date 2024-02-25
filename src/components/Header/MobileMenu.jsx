import { useState, useEffect, useRef } from "react";

import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
import "../../styles/MobileMenu.scss";

const MobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuRef = useRef();

  const handleOpenClick = () => {
    setShowMobileMenu(true);
  };

  const handleCloseClick = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMobileMenu]);

  return (
    <div className="mobileMenu">
      <div className="hamburger" onClick={handleOpenClick}>
        <img src={hamburger} alt="hamburger-icon" />
      </div>

      <div
        className={` ${showMobileMenu ? "showMenu" : "hideMenu"}`}
        ref={menuRef}
      >
        <div className="close" onClick={handleCloseClick}>
          <img src={close} alt="close-icon" />
        </div>
        <nav>
          <a href="#">home</a>
          <a href="#">shop</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
