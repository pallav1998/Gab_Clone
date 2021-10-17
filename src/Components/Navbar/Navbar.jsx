import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import Nav from "./Nav";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { state } = useContext(userContext);

  return (
    <div>
      {state ? (
        <Nav />
      ) : (
        <>
          <div className={styles.con}>
            <h1>
              <Link to="/">
                <img
                  src="https://gab.com/packs/media/images/logo-967cf32f5e1a6d10524ceeea220142a9.svg"
                  alt="loading"
                  height="40px"
                />
              </Link>
            </h1>
            <div className={styles.search}>
              <input type="text" placeholder="Search" />
              <i class="fas fa-search" style={{ color: "#21cf7a" }}></i>
            </div>
            <Link to="/signup">
              <button className={styles.btn}>Signup </button>
            </Link>
            <Link to="/login">
              <button className={styles.btn1}>Login</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
