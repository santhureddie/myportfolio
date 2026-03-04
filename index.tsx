
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const resumeData = {
  name: "Santhosh Kumar Reddy Jampana",
  shortName: "Santhosh J",
  title: "Software Engineer",
  heroHeadline: "Software Engineer & AI Enthusiast", 
  contact: {
    email: "santhoshkumarreddyjampana@gmail.com",
    phone: "(913) 263-8981",
    linkedin: "https://linkedin.com/in/santhoshjampana",
    github: "https://github.com/santhureddie", 
    location: "Memphis, TN, 38119",
    resumeLink: "https://drive.google.com/file/d/1fXux9_e1O1OExt7AYHNOV0iZ-g4Y9ZW_/view?usp=sharing" 
  },
  professionalSummary: "A passionate Software Engineer with over 2 years of experience specializing in scalable backend services, real-time systems, and cloud-native applications. I thrive on optimizing system reliability and performance, reducing latency, and delivering features that impact thousands. My expertise lies in translating complex technical challenges into elegant and efficient solutions using Python, Java, and AWS technologies.",
  technicalSkills: [
    { category: "Languages", skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Shell"] },
    { category: "Frameworks & Libraries", skills: ["FastAPI", "Django", "Node.js", "React", "Bootstrap", "GraphQL"] },
    { category: "Web Technologies", skills: ["HTML5", "CSS", "Responsive Design", "WebRTC"] },
    { category: "Databases", skills: ["PostgreSQL", "MongoDB", "SQLite", "SQL/NoSQL"] },
    { category: "Cloud Platforms", skills: ["AWS (EC2, Lambda, S3, CloudWatch)"] },
    { category: "DevOps", skills: ["Docker", "Kubernetes", "Jenkins", "Git", "GitHub", "CI/CD"] },
    { category: "Monitoring & Tools", skills: ["CloudWatch", "Wireshark", "Prometheus (basic)", "Logging Systems"] },
    { category: "Methodologies", skills: ["SDLC", "OOP", "Unit Testing", "Agile/Scrum", "Code Reviews"] }
  ],
  professionalExperience: [
    {
      company: "Voicy Labs",
      title: "Software Engineer",
      dates: "Feb 2025 – Present",
      responsibilities: [
        "Engineered an LLM-integrated voice assistant for live call transcription and response, simulating SaaS automation.",
        "Achieved a 40% reduction in end-to-end latency through optimized async streaming and WebSocket handling.",
        "Ensured scalability and performance using Dockerized microservices on AWS with CloudWatch monitoring."
      ]
    },
    {
      company: "Tata Consultancy Services",
      title: "Software Engineer",
      dates: "May 2021 – Dec 2022",
      responsibilities: [
        "Architected and developed scalable backend microservices (Python, Java), boosting simulation throughput by 30% for telecom protocol testing.",
        "Enhanced system reliability by 30% through implementing real-time diagnostics using Wireshark and Erlang log analysis.",
        "Streamlined deployment processes by 40% via Docker containerization and CI/CD pipelines with Jenkins.",
        "Championed Agile practices, contributing to 50+ sprint tickets and improving team velocity through clear documentation and code reviews."
      ]
    },
    {
      company: "VB Engineering Pvt Ltd",
      title: "Software Developer Intern",
      dates: "Sep 2020 – May 2021",
      responsibilities: [
        "Designed and launched a geolocation-based alert Android app (Java, Firebase, Google Maps API) achieving 10,000+ downloads.",
        "Improved app load times by 35% by implementing SQLite for offline data caching.",
        "Integrated RESTful APIs and Firebase Cloud Messaging, boosting notification delivery reliability by 15%.",
      ]
    }
  ],
  projects: [
    {
      name: "Skills Highlighter",
      techStack: ["Typescript", "CSS", "Regex", "HTML"],
      descriptionPoints: [
        "Developed a browser extension that highlights skills in job descriptions using regex patterns.",
        "Reduced personal application review time by 40%, improving personal productivity using browser automation",
        "Ensured cross-browser compatibility and performance optimization."
      ],
      links: { github: "https://github.com/santhureddie/Skill-Highlighter", live: "#" } 
    },
    {
      name: "Mindful Note Keeper",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      descriptionPoints: [
        "Developed a fully responsive, real-time note-taking application with user authentication using Supabase and a Vite-React-Tailwind stack.",
        "Integrated secure login and dynamic note syncing features to provide seamless cross-session user experience.",
        "Designed a clean, distraction-free UI with dark mode support to enhance user focus and accessibility.",
        "Automated deployment with GitHub Actions and hosted the app on GitHub Pages, ensuring fast and reliable access."
      ],
      links: { github: "https://github.com/santhureddie/mindful-note-keeper", live: "https://santhureddie.github.io/mindful-note-keeper/" } 
    },
     {
      name: "Portfolio Website",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      descriptionPoints: [
        "Built a responsive and performant portfolio site using React, TypeScript, Vite, Tailwind CSS, and shadcn/ui to highlight key projects and skills.",
        "Implemented clean UI/UX design principles and mobile-first responsiveness to optimize user experience across all devices.",
        "Showcases detailed project summaries, technology stacks, and live demos to demonstrate technical breadth and frontend capabilities.",
        "Deployed with GitHub Pages and integrated GitHub Actions for continuous deployment and maintenance."
      ],
      links: { github: "https://github.com/santhureddie/myportfolio", live: "https://santhureddie.github.io/myportfolio/" } 
    },
    {
      name: "AI Voice Agent – Real-Time Conversational System",
      techStack: ["Python", "FastAPI", "LiveKit", "WebRTC", "STT/TTS", "AWS", "Docker"],
      descriptionPoints: [
        "Engineered an LLM-integrated voice assistant for live call transcription and response, simulating SaaS automation.",
        "Achieved a 40% reduction in end-to-end latency through optimized async streaming and WebSocket handling.",
        "Ensured scalability and performance using Dockerized microservices on AWS with CloudWatch monitoring."
      ],
      links: { github: "#", live: "#" } 
    },
    {
      name: "Munchies - Cloud Based Food Ordering App", // UPDATED
      techStack: ["Django", "React", "PostgreSQL", "AWS", "TypeScript"],
      descriptionPoints: [
        "Developed a secure, full-stack SaaS platform with real-time order tracking and role-based access.",
        "Reduced backend response latency by 30% via API optimization and efficient data indexing techniques.",
        "Maintained high code quality with comprehensive test coverage and robust backend observability."
      ],
      links: { 
        github: "https://github.com/santhureddie/munchie-quick-order", // Assuming this is still a placeholder
        live: "https://santhureddie.github.io/munchie-quick-order/" // UPDATED
      }
    },
    {
      name: "SURAKSHA: Emergency Response App",
      techStack: ["Java", "Firebase", "SQLite", "Google Maps API"],
      descriptionPoints: [
        "Created an Android app delivering real-time safety alerts and location-based emergency services with offline-first capabilities.",
        "Enhanced usability in constrained networks by 35% through strategic caching and data synchronization.",
      ],
      links: { github: "#", live: "#" } // Assuming placeholders
    }
  ],
  education: [
    {
      institution: "University of Central Missouri",
      degree: "Master of Science (M.S.) in Computer Science",
      details: "GPA: 3.7/4.0",
      dates: "Jan 2023 – Dec 2024"
    },
    {
      institution: "Vidya Jyothi Institute of Technology",
      degree: "Bachelor of Engineering (B.E.) in Electronics and Communication Engineering",
      details: "GPA: 3.6/4.0",
      dates: "Aug 2017 – May 2021"
    }
  ],
  certifications: [
    { name: "On-The-Spot Award, TCS", description: "Recognized for resolving a critical production outage with rapid root cause diagnostics and fix implementation." },
    { name: "Winner, National COVID-19 Hackathon", description: "Led development of a mobile safety solution from concept to prototype in 72 hours." }
  ]
};


interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  currentSection: string;
  onClick?: () => void; 
  isButton?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, currentSection, onClick, isButton }) => {
  const sectionIdFromHref = href.startsWith('#') ? href.substring(1) : '';
  const isActive = currentSection === sectionIdFromHref;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) { 
      e.preventDefault();
    }
    if (onClick) {
      onClick(); 
    }
  };

  if (isButton) {
    return (
      <a 
        href={href} 
        className="nav-button" 
        onClick={handleClick} 
        target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : '_self'} 
        rel={href.startsWith('http') || href.startsWith('mailto') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <li>
      <a 
        href={href} 
        className={isActive ? 'active' : ''} 
        onClick={handleClick}
      >
        {children}
      </a>
    </li>
  );
};

const App: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero'); 
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education"},
    { id: "contact", label: "Contact" },
  ];
  
  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  const handleNavClick = (sectionId: string) => {
    setCurrentSection(sectionId);
    closeMobileNav(); 

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0); 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const varHeaderHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 80;
      if (currentScrollY < varHeaderHeight || currentScrollY < lastScrollY || currentScrollY === 0) { 
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
      setLastScrollY(currentScrollY);

      if (isMobileNavOpen && Math.abs(currentScrollY - lastScrollY) > 30) {
        closeMobileNav();
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileNavOpen]);


  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: "-40% 0px -60% 0px", 
      threshold: 0.01 
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const heroElement = sectionRefs.current['hero'];
          if (heroElement && heroElement.contains(entry.target) && window.scrollY < window.innerHeight * 0.5) {
             setCurrentSection('hero');
          } else {
             setCurrentSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionsToObserve = ['hero', ...navItems.map(item => item.id)];
    
    sectionsToObserve.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });
    
    return () => {
      sectionsToObserve.forEach(id => {
        const el = sectionRefs.current[id];
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, [navItems]);

  return (
    <>
      <header style={{ top: isHeaderVisible ? '0' : `-${getComputedStyle(document.documentElement).getPropertyValue('--header-height')}` }}>
        <div className="container">
          <div className="logo">
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>{resumeData.shortName}</a>
          </div>
          <nav className="desktop-nav">
            <ul>
              {navItems.map((item, index) => (
                <NavLink 
                  key={item.id} 
                  href={`#${item.id}`} 
                  currentSection={currentSection} 
                  onClick={() => handleNavClick(item.id)}
                >
                  <span style={{color: 'var(--accent-color)', marginRight: '5px'}}>0{index+1}.</span>{item.label}
                </NavLink>
              ))}
              <li>
                <NavLink 
                  href={resumeData.contact.resumeLink} 
                  isButton={true} 
                  currentSection={currentSection} 
                  onClick={closeMobileNav} 
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className={`hamburger ${isMobileNavOpen ? 'active' : ''}`} onClick={toggleMobileNav} aria-label="Toggle navigation" aria-expanded={isMobileNavOpen}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </header>
      
      <div className={`mobile-nav ${isMobileNavOpen ? 'active' : ''}`}>
        <ul>
          {navItems.map((item, index) => (
             <NavLink 
                key={item.id} 
                href={`#${item.id}`} 
                currentSection={currentSection} 
                onClick={() => handleNavClick(item.id)}
              >
                <span style={{color: 'var(--accent-color)', display: 'block', fontSize: '0.9rem'}}>0{index+1}.</span>{item.label}
            </NavLink>
          ))}
           <li>
             <NavLink 
                href={resumeData.contact.resumeLink} 
                isButton={true} 
                currentSection={currentSection}
                onClick={closeMobileNav}
              >
                Resume
              </NavLink>
            </li>
        </ul>
      </div>


      <main>
        <section className="hero section" id="hero">
          <div className="space-background-elements-hero">
            <div className="planet planet-large-brown"></div>
            <div className="planet planet-medium-gray"></div>
            <div className="planet planet-small-yellow"></div>
          </div>
          <div className="container">
            <h1>Hi, I'm</h1>
            <h2>{resumeData.name}.</h2>
            <h3>{resumeData.heroHeadline}</h3>
            <p>{resumeData.professionalSummary.substring(0, resumeData.professionalSummary.indexOf('.') + 1)}</p>
            <div className="hero-button-group">
                <a href={resumeData.contact.resumeLink} className="hero-button" target="_blank" rel="noopener noreferrer">Download Resume</a>
                <a href="#contact" className="hero-button" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Get In Touch</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="section-content about-text">
               <p>{resumeData.professionalSummary}</p>
               <p>Here are a few technologies I’ve been working with recently:</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
            <div className="container">
                <div className="skills-list">
                {resumeData.technicalSkills.map(category => (
                  <React.Fragment key={category.category}>
                    <h4 className="skill-category-title">{category.category}</h4>
                    <ul>
                      {category.skills.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                  </React.Fragment>
                ))}
              </div>
            </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <h2 className="section-title">Where I’ve Worked</h2>
            {resumeData.professionalExperience.map(exp => (
              <div key={exp.company} className="experience-item">
                <h3>{exp.title} <span className="company">@ {exp.company}</span></h3>
                <p className="dates">{exp.dates}</p>
                <ul>
                  {exp.responsibilities.map((resp, index) => <li key={index}>{resp}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Some Things I’ve Built</h2>
            <div className="projects-grid">
              {resumeData.projects.map(proj => (
                <div key={proj.name} className="project-card">
                  <div className="project-card-top">
                    <div className="project-folder-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-labelledby={`folder-title-${proj.name.replace(/\s+/g, '-').toLowerCase()}`}><title id={`folder-title-${proj.name.replace(/\s+/g, '-').toLowerCase()}`}>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <div className="project-external-links">
                      {proj.links.github && proj.links.github !== '#' && (
                        <a href={proj.links.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub link for ${proj.name}`} title="GitHub">
                          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-labelledby={`github-title-${proj.name.replace(/\s+/g, '-').toLowerCase()}`}><title id={`github-title-${proj.name.replace(/\s+/g, '-').toLowerCase()}`}>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                      )}
                      {proj.links.live && proj.links.live !== '#' && (
                        <a href={proj.links.live} target="_blank" rel="noopener noreferrer" aria-label={`Live link for ${proj.name}`} title="View Live">
                          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-labelledby={`live-title-${proj.name.replace(/\s+/g, '-').toLowerCase()}`}><title id={`live-title-${proj.name.replace(/\s+/g, '-').toLowerCase()}`}>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="project-name">
                    {(proj.links.live && proj.links.live !== '#') || (proj.links.github && proj.links.github !== '#') ? (
                      <a href={(proj.links.live && proj.links.live !== '#') ? proj.links.live : proj.links.github!} target="_blank" rel="noopener noreferrer">
                        {proj.name}
                      </a>
                    ) : (
                      proj.name
                    )}
                  </h4>
                  <div className="project-description">
                    <ul>
                      {proj.descriptionPoints.map((desc, index) => <li key={index}>{desc}</li>)}
                    </ul>
                  </div>
                  <ul className="project-tech-stack">
                    {proj.techStack.map(tech => <li key={tech}>{tech}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="education" className="section">
          <div className="container">
            <h2 className="section-title">Education & Certifications</h2>
            <div className="education-list">
              {resumeData.education.map(edu => (
                <div key={edu.institution} className="education-item">
                  <h3>{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                  <p className="details">{edu.details}</p>
                  <p className="dates">{edu.dates}</p>
                </div>
              ))}
            </div>
            <br/>
            <div className="certifications-list">
                 {resumeData.certifications.map(cert => (
                <div key={cert.name} className="certification-item">
                  <h4>{cert.name}</h4>
                  <p>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title" style={{counterReset: 'section-counter 4'}}>What's Next?</h2>
            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-text">
              I'm currently seeking new opportunities and would love to hear about roles where I can contribute to exciting projects and continue to grow as a software engineer. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a href={`mailto:${resumeData.contact.email}`} className="cta-button">Say Hello</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="social-links">
             {resumeData.contact.github && <a href={`https://github.com/santhureddie/`} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="24" width="24"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
             </a>}
             {resumeData.contact.linkedin && <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="24" width="24"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>}
          </div>
          <p>
            Made with ❤️ by {resumeData.name}<br/>
            
          </p>
          <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<React.StrictMode><App /></React.StrictMode>);
} else {
  console.error("Failed to find the root element");
}
