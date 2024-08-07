"use client"
import React, { useEffect, useState } from 'react';
import './index.css';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky && 'sticky'}`}>
      <a href='/' className='logo'>Portfolio.</a>

      <nav className='navbar'>
        <a href='#home' className='active'>Home</a>
        <a href='#about'>About</a>
        <a href='#services'>Services</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#contact'>Contact</a>
      </nav>

      <div className='bx bx-moon' id='darkMode-icon'>

      </div>
    </header>
  )
}
