import React from "react";
import "./Header.css";
import logo from "../assets/Logo.svg";
import logo2 from "../assets/ANISH KUMAR SINHA.svg";
import sun from "../assets/Group 21.svg";
import moon from "../assets/Moon.svg";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark" : "navbar-light py-4"
      }`}
    >
      <div
        className="container-fluid d-flex justify-content-between align-items-center"
        style={{ paddingLeft: "60px", paddingRight: "60px" }}
      >
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={logo} alt="Logo" className="logo" />
          <img src={logo2} alt="Logo" className="logo-name" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-lg-end justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center flex-lg-row flex-column text-center gap-lg-3 gap-2 mt-3 mt-lg-0 navbar-list">
            <li className="nav-item">
              <a className="nav-link " href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-sm"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? sun : moon}
                  alt="Toggle theme"
                  className="theme-icon"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}