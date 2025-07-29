"use client";
import { useState } from 'react';
import Link from 'next/link';
import './Hamburger.css';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <div 
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <Link href="/home" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </div>
  );
}