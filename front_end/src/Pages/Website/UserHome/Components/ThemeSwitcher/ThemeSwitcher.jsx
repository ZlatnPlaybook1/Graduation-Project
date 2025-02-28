import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

const darkTheme = {
  "--primary-bg": "#0f0f0f", 
  "--secondary-bg": "#1b1b1bd0",
  "--primary-text": "#ffffff",
  "--secondary-text": "#c4c2c2",
  "--main-color": "#00e77f",
};

const lightTheme = {
  "--primary-bg": "#ffffff", 
  "--secondary-bg": "#c4c2c2",
  "--primary-text": "#0f0f0f",
  "--secondary-text": "#1b1b1bd0",
  "--main-color": "#00e77f",
};

const ThemeSwitcher = () => {
  // Initialize state from local storage or default to false (light theme)
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'dark' : false;
  });

  useEffect(() => {
    // Save current theme state to local storage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    const theme = isDark ? darkTheme : lightTheme;
    Object.keys(theme).forEach(variable => {
      document.documentElement.style.setProperty(variable, theme[variable]);
    });
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="switch-box">
      <label id="switch" className="switch">
        <input 
          type="checkbox" 
          onChange={toggleTheme} 
          id="slider" 
          checked={isDark} 
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
