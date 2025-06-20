import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SocialLinks from "./components/SocialLink";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="main-content d-flex">
          <SocialLinks />
          <div className="content flex-grow-1">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
