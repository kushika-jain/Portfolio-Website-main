import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".contact-animate", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
      },
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <div className="contact-section" id="contact" ref={containerRef}>
      <div className="contact-container">
        <div className="contact-layout">
          
          <div className="contact-left">
            <h2 className="contact-title contact-animate">
              Let's create <br /> something <span>together.</span>
            </h2>
            
            <p className="contact-intro contact-animate">
              I am currently open for new opportunities. Whether you have a specific project in mind or just want to explore possibilities, I'm here to help bring your ideas to life.
            </p>

            <form className="contact-form contact-animate" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={4} required></textarea>
              </div>
              <button type="submit" className="submit-btn" data-cursor="disable">
                Send Message <MdArrowOutward />
              </button>
            </form>
          </div>

          <div className="contact-right contact-animate">
            <div className="contact-image-wrapper">
              <img src="/images/about.png" alt="Profile" className="contact-profile-img" />
              <div className="contact-badge">
                <p>Open to <br/> Work</p>
              </div>
            </div>

            <div className="contact-details contact-animate">
              <div className="contact-info-block">
                <h5>Email</h5>
                <a href="mailto:jainkushika90@gmail.com" className="contact-email">
                  jainkushika90@gmail.com <MdArrowOutward />
                </a>
              </div>

              <div className="contact-info-block">
                <h5>Location</h5>
                <p>Ujjain</p>
              </div>

            </div>
          </div>

        </div>

        <div className="contact-footer contact-animate">
          <p>© {new Date().getFullYear()} Kushika Jain. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
