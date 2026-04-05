import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./styles/Work.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card") as HTMLElement[];
    
    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    });
  }, { scope: sectionRef });

  return (
    <div className="work-section" id="projects" ref={sectionRef}>
      <div className="work-container">
        <div className="work-header">
          <h2 className="work-main-title">Selected <span>Projects</span></h2>
          <p className="work-main-subtitle">A collection of digital products and experiences crafted with precision and purpose.</p>
        </div>

        <div className="projects-vertical-stack">
          {projects.map((project, index) => (
            <div className={`project-card ${index % 2 === 0 ? "even" : "odd"}`} key={index}>
              <div className="project-image-side">
                <Link to={`/project/${project.id}`} className="project-image-link">
                  <div className="project-image-container">
                    <img src={project.image} alt={project.name} className="project-img" />
                    <div className="project-hover-overlay">
                      <span>View Case Study</span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="project-info-side">
                <div className="project-header-small">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="project-tag">{tool}</span>
                  ))}
                </div>

                <Link to={`/project/${project.id}`} className="project-link">
                  View Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
