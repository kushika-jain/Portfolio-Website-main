import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaQuoteLeft, 
  FaArrowRight, 
  FaLaptopCode,
  FaPencilRuler,
  FaSeedling,
  FaBullseye,
  FaHeart
} from "react-icons/fa";
import "./styles/DetailedAbout.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const DetailedAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Editorial Mask Revel for Titles
    const masks = gsap.utils.toArray(".elite-mask");
    masks.forEach((mask: any) => {
      gsap.from(mask.querySelector(".elite-inner"), {
        scrollTrigger: {
          trigger: mask,
          start: "top 85%",
        },
        yPercent: 100,
        duration: 1.5,
        ease: "power4.out",
      });
    });

    // 2. Timeline Progression
    gsap.from(".timeline-item", {
      scrollTrigger: {
        trigger: ".vertical-timeline",
        start: "top 70%",
      },
      opacity: 0,
      x: -50,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
    });

    // 3. Synergy Pillar Fades
    gsap.from(".synergy-pillar", {
      scrollTrigger: {
        trigger: ".section-elite-synergy",
        start: "top 60%",
      },
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.4,
      ease: "power3.out",
    });

    // 4. Image Mask reveal
    gsap.from(".elite-image-mask", {
      scrollTrigger: {
        trigger: ".singer-elite-section",
        start: "top 60%",
      },
      clipPath: "inset(0 100% 0 0)",
      duration: 2,
      ease: "power4.inOut",
    });

    // 4. Parallax on stage image
    gsap.to(".masked-singer-img", {
      scrollTrigger: {
        trigger: ".singer-elite-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 20,
    });

  }, { scope: containerRef });

  return (
    <div className="detailed-about-page elite-editorial" ref={containerRef}>
      {/* 1. HERO - INTRODUCTION */}
      <section className="section-elite-hero">
        <div className="container-elite">
          <div className="elite-hero-grid">
            <div className="elite-hero-content">
              <div className="elite-label about-fade-in">ABOUT ME</div>
              <div className="elite-mask h1-mask">
                <h1 className="elite-inner serif-title">
                  Creative Developer <span>& UI/UX Designer.</span>
                </h1>
              </div>
              <p className="elite-hero-bio about-fade-in">
                Hi, I’m Kushika — a Computer Science student who enjoys blending creativity with technology. 
                For me, design is not just about how things look, but how they work and how people interact with them. 
                I love building digital experiences that feel simple, intuitive, and visually appealing.
              </p>
            </div>
            <div className="elite-hero-visual about-fade-in">
              <div className="asymmetric-image-frame">
                <img src="/images/work.png" alt="Creative Interface Design" />
                <div className="frame-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHRONICLE (My Journey) */}
      <section className="section-elite-timeline container-elite">
        <div className="elite-mask section-title-mask">
          <h2 className="elite-inner serif-title">My Journey.</h2>
        </div>
        <div className="vertical-timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-year">Curiosity</div>
            <div className="timeline-content">
              <h3>The Spark</h3>
              <p>My journey started with curiosity — wondering how websites are built and operated. Learning HTML and CSS slowly turned that curiosity into a genuine interest in development.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-year">Discovery</div>
            <div className="timeline-content">
              <h3>Designing the Experience</h3>
              <p>I explored tools like Figma for wireframing and prototyping. This helped me understand how to map out designs that are practical, attractive, and deeply user-friendly.</p>
            </div>
          </div>
          <div className="timeline-item highlight">
            <div className="timeline-dot dot-lion"></div>
            <div className="timeline-year">Execution</div>
            <div className="timeline-content">
              <h3>Bringing Ideas to Life</h3>
              <p>I began building real projects, like a responsive news website and an instrument rental platform, continuously bridging the gap between design and functional frontend development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SYNERGY (What I Do) */}
      <section className="section-elite-synergy">
        <div className="container-elite">
          <div className="elite-mask section-title-mask margin-bottom-medium">
            <h2 className="elite-inner serif-title">What I Do.</h2>
          </div>
          <div className="synergy-grid">
            <div className="synergy-pillar technical">
              <div className="pillar-header">
                <FaLaptopCode className="pillar-icon" />
                <h3>Frontend Development</h3>
              </div>
              <p>
                Building responsive web interfaces that are as functional as they are beautiful. 
                I enjoy turning ideas into clean interfaces with a focus on usability and strong user experience.
              </p>
              <ul className="pillar-list">
                <li>HTML & CSS</li>
                <li>React Exploration</li>
                <li>Responsive Layouts</li>
                <li>Usability Focus</li>
              </ul>
            </div>
            
            <div className="synergy-pillar divider-pillar"></div>

            <div className="synergy-pillar ui-based">
              <div className="pillar-header">
                <FaPencilRuler className="pillar-icon" />
                <h3>UI/UX Design</h3>
              </div>
              <p>
                Designing clean, modern user interfaces. I pay attention to the small details 
                that make a big difference—smooth navigation, intentional layouts, and thoughtful design choices.
              </p>
              <ul className="pillar-list">
                <li>Wireframing</li>
                <li>Figma Prototyping</li>
                <li>User-Centric flow</li>
                <li>Visual Composition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE SOLUTIONS (Growth & Vision) */}
      <section className="section-elite-services">
        <div className="container-elite">
          <div className="elite-mask section-title-mask margin-bottom-large">
            <h2 className="elite-inner serif-title">Growth & Vision.</h2>
          </div>
          <div className="elite-service-grid">
            <div className="service-card about-fade-in">
              <FaSeedling className="service-icon" />
              <h3>Currently Growing</h3>
              <p>Focusing on improving my frontend development skills, learning advanced UI/UX concepts, and constantly exploring meaningful design trends.</p>
            </div>
            <div className="service-card about-fade-in">
              <FaBullseye className="service-icon" />
              <h3>My Goal</h3>
              <p>Aiming to become a highly skilled UI/UX designer and frontend developer. I’m always open to learning, collaborating, and growing through new projects.</p>
            </div>
            <div className="service-card about-fade-in">
              <FaHeart className="service-icon" />
              <h3>Personal Pursuits</h3>
              <p>When I’m not designing or coding, you’ll find me exploring fresh design inspirations and trying out creative ideas that help me improve personally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE VOCALIST (Immersive Reveal) */}
      <section className="singer-elite-section">
        <div className="container-elite singer-flex">
          <div className="singer-elite-visual">
            <div className="elite-image-mask">
              <img src="/images/singer_stage.png" alt="Vocal Artist" className="masked-singer-img" />
            </div>
            <div className="mask-caption">BEYOND DESIGN // THE PERFORMANCE</div>
          </div>
          <div className="singer-elite-text">
            <FaQuoteLeft className="quote-icon-elite" />
            <h2 className="serif-title">Connecting through <span>performance.</span></h2>
            <p>
              Beyond design and development, I have a deep passion for singing and performing. 
              Being on stage has taught me confidence, expression, and the importance of connecting with an audience.
              <br/><br/>
              These experiences have shaped the way I approach my work — with focus, clarity, and attention to detail. 
              Whether it’s performing or designing, I believe in creating an experience that truly connects with people.
            </p>
            <div className="elite-signature">KUSHIKA JAIN</div>
          </div>
        </div>
      </section>

      {/* 6. ELITE FOOTER */}
      <footer className="footer-elite container-elite">
        <div className="footer-accent-line"></div>
        <div className="footer-content-elite">
          <div className="footer-callout">
            <h3 className="serif-title">Let's work together.</h3>
            <p>I love turning ideas into simple, beautiful, and meaningful digital experiences.</p>
          </div>
          <a href="/#contact" className="elite-cta-circle">
            Let's <br /> Connect <FaArrowRight />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default DetailedAbout;
