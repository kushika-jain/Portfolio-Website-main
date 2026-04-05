import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles/Landing.css";

gsap.registerPlugin(useGSAP);

const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "elastic.out(1, 0.75)" } });

    gsap.set(".hero-tag, .hero-title, .hero-cta, .hero-portrait-container", {
      opacity: 0,
      y: 50,
    });

    tl.to(".hero-tag", { opacity: 1, y: 0, duration: 1, delay: 0.3 })
      .to(".hero-title", { opacity: 1, y: 0, duration: 1 }, "-=0.8")
      .to(".hero-cta", { opacity: 1, y: 0, duration: 1 }, "-=0.8")
      .to(".hero-portrait-container", { opacity: 1, y: 0, duration: 1.5, ease: "elastic.out(1, 0.6)" }, "-=0.8");
  }, { scope: containerRef });

  return (
    <div className="landing-section" id="home" ref={containerRef}>

      {/* Background decorations */}
      <div className="bg-glow top-left"></div>
      <div className="bg-glow bottom-right"></div>

      <div className="landing-content">
        <div className="hero-text-block">
          <div className="hero-tag">
            <span>Got an Idea?</span>
          </div>

          <h1 className="hero-title">
            Turning Ideas  <br />Into Creative Designs!
          </h1>


          <a href="#contact" className="hero-cta">
            Let's Connect <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <div className="hero-portrait-container">
        <div className="hero-circle-decoration"></div>
        <img src="/images/home.png" alt="Kushika Jain" className="hero-portrait" />
      </div>

    </div>
  );
};

export default Landing;
