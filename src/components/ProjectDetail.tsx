import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { projects } from "../data/projects";
import "./styles/ProjectDetail.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".pd-header-content > *", {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        });

        gsap.from(".pd-image-container", {
          scale: 0.95,
          opacity: 0,
          duration: 1.5,
          delay: 0.5,
          ease: "expo.out"
        });

        gsap.from(".pd-info-block", {
          x: 20,
          opacity: 0,
          duration: 1,
          delay: 1,
          stagger: 0.3,
          ease: "power2.out"
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [id]);

  if (!project) {
    return (
      <div className="pd-error">
        <h2>Project not found</h2>
        <Link to="/" className="pd-back-btn">
          <HiOutlineArrowNarrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  // Set the project accent color as a CSS variable on the container
  const containerStyle = {
    "--project-accent": project.accentColor || "var(--accentColor)"
  } as React.CSSProperties;

  return (
    <div className="project-detail-container" style={containerStyle} ref={containerRef}>
      <header className="pd-header">
        <div className="pd-header-nav">
          <Link to="/" className="pd-back-btn">
            <HiOutlineArrowNarrowLeft /> Back to Home
          </Link>
        </div>
        <div className="pd-hero-section">
          <div className="pd-header-content">
            <span className="pd-category">{project.category}</span>
            <h1 className="pd-title">{project.name}</h1>
            <p className="pd-tagline">{project.description}</p>
          </div>

          <div className="pd-image-section">
            <div className="pd-image-container">
              <img src={project.image} alt={project.name} className="pd-main-image" />
            </div>
          </div>
        </div>
      </header>

      <section className="pd-content">
        <div className="pd-info-grid">
          <div className="pd-main-info">
            <div className="pd-info-block">
              <h3>Overview</h3>
              <p>{project.fullDescription}</p>
            </div>

            {project.problemStatement && (
              <div className="pd-info-block pd-problem-section">
                <h3>Problem Statement</h3>
                <ul className="pd-problem-list">
                  {project.problemStatement.map((problem, index) => (
                    <li key={index}>{problem}</li>
                  ))}
                </ul>
              </div>
            )}


            {project.wireframes && (
              <div className="pd-info-block pd-wireframe-section">
                <h3>Paper Wireframes</h3>
                <div className="pd-wireframe-gallery">
                  {project.wireframes.map((wf, index) => (
                    <div key={index} className="pd-wireframe-item">
                      <img src={wf} alt={`Wireframe ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pd-info-block">
              <h3>Key Features</h3>
              <ul className="pd-features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="pd-sidebar">
            <div className="pd-info-block">
              <h3>Technologies</h3>
              <div className="pd-tech-stack">
                {project.tools.map((tool, index) => (
                  <span key={index} className="pd-tech-tag">{tool}</span>
                ))}
              </div>
            </div>

            <div className="pd-info-block">
              <h3>Links</h3>
              <div className="pd-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="pd-link-item">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="pd-link-item">
                    <FiGithub /> Source Code
                  </a>
                )}
                {!project.link && !project.github && (
                  <p className="pd-link-placeholder">Case study coming soon...</p>
                )}
              </div>
            </div>
          </aside>
        </div>

        {project.uiGallery && (
          <div className="pd-info-block pd-ui-section">
            <div className="pd-section-header">
              <h3>{project.galleryTitle || "High Fidelity Wireframes"}</h3>
              <p className="pd-section-subheader">{project.gallerySubTitle || "High-Fidelity Application Presentation"}</p>
            </div>
            <div className={`pd-ui-grid ${project.galleryLayout === 'vertical' ? 'pd-ui-grid-vertical' : ''}`}>
              {project.uiGallery.map((ui, index) => (
                <div key={index} className="pd-ui-item">
                  <div className="pd-ui-image-container">
                    <img src={ui.image} alt={ui.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectDetail;
