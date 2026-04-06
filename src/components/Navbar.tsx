import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useGSAP(() => {
    // Spring bouncy animation for the pill
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      delay: 0.2
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      // If we are on a different page (like about-detailed), we handle it separately
      if (location.pathname === "/about-detailed") {
        setActiveSection("about");
        return;
      }
      
      const sections = ["home", "about", "skills", "projects", "contact"];
      let current = "home"; // default

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section's top is near the top of the viewport (with some offset)
          if (rect.top <= 250 && rect.bottom >= 250) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    // Run on mount and on scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className="navbar-container" ref={navRef}>
      <div className="navbar-pill">
        <a href="/#" className="navbar-logo">
          <img src="/images/logo copy.png" alt="Logo" className="navbar-logo-img" />
        </a>
        <ul className={`navbar-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
          <li><Link to="/" onClick={closeMobileMenu} className={activeSection === "home" ? "active-link" : ""}><HoverLinks text="Home" /></Link></li>
          <li><Link to="/about-detailed" onClick={closeMobileMenu} className={activeSection === "about" ? "active-link" : ""}><HoverLinks text="About" /></Link></li>
          <li><a href="/#skills" onClick={closeMobileMenu} className={activeSection === "skills" ? "active-link" : ""}><HoverLinks text="Skills" /></a></li>
          <li><a href="/#projects" onClick={closeMobileMenu} className={activeSection === "projects" ? "active-link" : ""}><HoverLinks text="Projects" /></a></li>
          <li><a href="/#contact" onClick={closeMobileMenu} className={activeSection === "contact" ? "active-link" : ""}><HoverLinks text="Contact" /></a></li>
        </ul>

        <div className="navbar-action-group" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div className="navbar-action">
            <a href="https://drive.google.com/uc?export=download&id=1r7OZQsYYri9NPO8gKjzxq5WxbFLzHiww" className="btn-primary" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>

          <div 
            className="hamburger-icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
