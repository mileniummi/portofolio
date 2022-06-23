import React from "react";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../icons/logo.png";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

const Header = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <div className={styles.background}>
      {isMobile ? (
        <div className={styles.mobileWrapper}>
          <NavLink className={styles.logoLink} to={"/"}>
            <div className={styles.logo}>
              <img className={styles.logoImage} src={logo} alt="logo" />
              <span className={styles.logoTitle}>Agency</span>
            </div>
          </NavLink>
        </div>
      ) : (
        <div className="wrapper">
          <div className={styles.nav}>
            <NavLink className={styles.logoLink} to={"/"}>
              <div className={styles.logo}>
                <img className={styles.logoImage} src={logo} alt="logo" />
                <span className={styles.logoTitle}>Agency</span>
              </div>
            </NavLink>
            <div className={styles.pages}>
              <NavLink className={styles.link} to={"/"}>
                About
              </NavLink>
              <NavLink className={styles.link} to={"/"}>
                Services
              </NavLink>
              <NavLink className={styles.link} to={"/"}>
                Pricing
              </NavLink>
              <NavLink className={styles.link} to={"/"}>
                Blog
              </NavLink>
            </div>
            <button className={styles.button}>
              <NavLink className={styles.buttonLink} to={"/"}>
                Contact
              </NavLink>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
