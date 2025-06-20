import React from "react";
import "./SocialLinks.css";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import twitter from "../assets/Twitter.svg";
import github from "../assets/GitHub.svg";
import linkedin from "../assets/LinkedIn.svg";
import telegram from "../assets/Telegram.svg";
import koo from "../assets/Koo.svg";
export default function SocialLinks() {
  return (
    <div className="social-links d-none d-lg-flex flex-column  ">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="LinkedIn" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="LinkedIn" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Twitter" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="LinkedIn" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="Twitter" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={telegram} alt="GitHub" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={koo} alt="LinkedIn" />
      </a>
       <span className="email-text">sinhaanishkumar@outlook.com</span>
    </div>
  );
}
