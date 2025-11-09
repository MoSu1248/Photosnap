import React from "react";
import "./Footer.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import Navbar from "../Nav/Navbar";
import Facebook from "../../assets/shared/desktop/facebook.svg?react";
import Youtube from "../../assets/shared/desktop/youtube.svg?react";
import Twitter from "../../assets/shared/desktop/twitter.svg?react";
import Pinterest from "../../assets/shared/desktop/pinterest.svg?react";
import Instagram from "../../assets/shared/desktop/instagram.svg?react";
import Button_2 from "../Buttons/Button_2";
import Logo from "../../assets/shared/desktop/logo.svg?react";
import SocialIcon from "../SocialIcon/SocialIcon";

export default function Footer() {
  const socialIcons = [
    { icon: Facebook, alt: "Facebook" },
    { icon: Youtube, alt: "Youtube" },
    { icon: Twitter, alt: "Twitter" },
    { icon: Pinterest, alt: "Pinterest" },
    { icon: Instagram, alt: "Instagram" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-logo">
          <a href="/" className="container__logo">
            <Logo />
          </a>
          <ul className="footer__socials-list">
            {socialIcons.map((link) => (
              <li key={link.alt}>
                <a href="">
                  <SocialIcon Icon={link.icon} alt={link.alt} key={link.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Navbar />
        <div className="footer__copyright">
          <Button_2 text={`Get an invite`} />
          <p className="footer__copyright-text">
            Copyright 2019. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
