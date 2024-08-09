"use client";
import React, { useEffect, useState } from "react";
import "./index.css";

export default function Navbar({ activeSection }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <a href="/" className="logo">
        Portfolio.
      </a>

      <nav className="navbar">
        <a href="#home" className={activeSection === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          About
        </a>
        <a
          href="#services"
          className={activeSection === "services" ? "active" : ""}
        >
          Services
        </a>
        <a
          href="#portfolio"
          className={activeSection === "portfolio" ? "active" : ""}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </nav>

      <div className="bx bx-moon" id="darkMode-icon"></div>
    </header>
  );
}
