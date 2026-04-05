import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="navbar-container" ref={navRef}>
      <div className="navbar-pill">
        <a href="/#" className="navbar-logo">
          <img src="/images/logo copy.png" alt="Logo" className="navbar-logo-img" />
        </a>
        
        <ul className="navbar-links">
          <li><Link to="/"><HoverLinks text="Home" /></Link></li>
          <li><Link to="/about-detailed"><HoverLinks text="About" /></Link></li>
          <li><a href="/#skills"><HoverLinks text="Skills" /></a></li>
          <li><a href="/#projects"><HoverLinks text="Projects" /></a></li>
          <li><a href="/#contact"><HoverLinks text="Contact" /></a></li>
        </ul>

        <div className="navbar-action">
          <a href="https://drive.google.com/uc?export=download&id=1r7OZQsYYri9NPO8gKjzxq5WxbFLzHiww" className="btn-primary" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
