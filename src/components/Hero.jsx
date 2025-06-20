import React from "react";
import "./Hero.css";
import wave from "../assets/Wave.svg";
import vector from "../assets/Vector 1.webp";
import profile from "../assets/Hero Image.webp";
export default function Hero() {
  return (
    <section className="hero-section hero-space">
      <div className="row">
        <div className="col-lg-6">
          <h5 className="hello-text">Hello!</h5>
          <h1 className="hero-heading">
            I’m <span className="highlight">Anish</span>{" "}
            <span>
              <img src={wave} alt="wave" className="wave-img" />
            </span>
          </h1>
          <p className="hero-description">
            UI/UX Designer, Front-End Developer & Thinker. <br /> Based in
            India.
          </p>
          <div className="hero-buttons d-flex gap-3 justify-content-center justify-content-lg-start">
            <a href="#" className="btn-cv">
              Download CV
            </a>
            <a href="#" className="btn-touch">
              Get in Touch!
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={vector} alt="vector" className="vector-img" />
          <img src={profile} alt="anish" className="profile-img" />
        </div>
      </div>
    </section>
  );
}
