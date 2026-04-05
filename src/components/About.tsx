import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/About.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".about-heading", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    })
      .from(".about-subtext", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .from(".about-image-wrapper", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.75)"
      }, "-=1");

  }, { scope: containerRef });

  return (
    <div className="about-section" id="about" ref={containerRef}>
      <div className="about-container">
        <div className="about-content-left">
          <h1 className="about-heading" data-cursor="disable">
            HELLO, I'M <br /> KUSHIKA <br /> JAIN
          </h1>
          <div className="about-subtext">
            <p className="para">
              I am a Computer Science undergraduate with a strong interest in UI/UX design and frontend development. I focus on creating intuitive, user-friendly, and visually engaging digital experiences. With hands-on experience in HTML, CSS, and basic React, I enjoy turning ideas into clean and functional interfaces.
            </p>
            <p className="para secondary">
              I am passionate about solving real-world problems through design and continuously learning new technologies to improve my skills and deliver better user experiences.
            </p>
          </div>
        </div>

        <div className="about-content-right">
          <div className="about-image-wrapper">
            <div className="about-image-decoration"></div>
            <img
              src="/images/about.png"
              alt="Kushika Jain"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
