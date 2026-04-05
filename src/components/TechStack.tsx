import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  FaFigma, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare,
  FaPencilRuler,
  FaProjectDiagram,
  FaBezierCurve,
  FaGithub,
  FaTools
} from "react-icons/fa";
import { SiCanva, SiMysql } from "react-icons/si";
import "./styles/TechStack.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

    const skills = [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "React Js", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Wireframing", icon: <FaPencilRuler /> },
      { name: "Userflow", icon: <FaProjectDiagram /> },
      { name: "Prototyping", icon: <FaTools /> },
      { name: "Graphics", icon: <FaBezierCurve /> },
      { name: "GitHub", icon: <FaGithub /> },
    ];

  useGSAP(() => {
    // Staggered entrance for cards
    gsap.from(".skill-card", {
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    });

  }, { scope: containerRef });

  return (
    <div className="techstack-section" id="skills" ref={containerRef}>
      <div className="techstack-container">
        <div className="techstack-header">
          <h2 className="techstack-title">My Work <span>Skills</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h4 className="skill-name">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
