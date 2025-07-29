"use client";
import { useState, useEffect } from 'react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <div className="theme-toggle-wrapper">
      <div className="toggle-container">
        <div 
          className="togglebutton" 
          onClick={() => setIsDark(!isDark)}
        >
          <div className={`toggle-Slider ${isDark ? 'dark' : 'light'}`}>
            <div className="toggle-circle">
              {isDark ? '🌙' : '☀️'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}