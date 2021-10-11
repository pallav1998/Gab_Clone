import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <div className={styles.foterContainer}>
        <div className={styles.logo}>
          <h1>
            <Link to="/">
              <img
                src="https://gab.com/packs/media/images/logo-967cf32f5e1a6d10524ceeea220142a9.svg"
                alt="loading"
                height="40px"
              />
            </Link>
          </h1>
          <p>
            We build Freedom Of Speech Software. We champion free speech,
            individual liberty and the free flow of information online. All are
            welcome.
          </p>
        </div>
        <div className={styles.join}>
          <h2>Join</h2>
          <p>Gab social</p>
          <p>Dessenter Browser</p>
          <p>Gab Chat</p>
        </div>
        <div className={styles.stay}>
          <h2>Stay Informed</h2>
          <p>Gab Trends</p>
          <p>Gab News</p>
          <p>Gab Apps</p>
        </div>
        <div className={styles.support}>
          <h2>Support Us</h2>
          <p>Go Pro</p>
          <p>Merch Store</p>
          <p>Affiliates</p>
        </div>
        <div className={styles.leagal}>
          <h2>Leagal</h2>
          <p>Terms of service</p>
          <p>Privacy Policy</p>
          <p>Company Policy</p>
          <p>Contact us</p>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>© 2020 Copyright | Gab AI Inc.</p>
        <p>Made in USA 🇺🇸</p>
      </div>
    </div>
  );
};
