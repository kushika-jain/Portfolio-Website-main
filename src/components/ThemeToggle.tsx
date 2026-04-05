import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./styles/ThemeToggle.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage for theme
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDark(false);
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("portfolio-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("portfolio-theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button 
      className={`theme-toggle ${isDark ? "dark" : ""}`} 
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
    >
      <div className="toggle-thumb">
        {isDark ? <FaMoon className="icon moon" /> : <FaSun className="icon sun" />}
      </div>
    </button>
  );
};

export default ThemeToggle;
