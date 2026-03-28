import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>OOP in C++ Specialization</h4>
                <h5>Coursera & Goldsmiths, University of London</h5>
              </div>
              <h3>Mar 2026</h3>
            </div>
            <p>
              Successfully completed a comprehensive 5-course specialization
              focused on developing object-oriented C++ programming skills,
              culminating in an extensive final project.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hacking & Hardening Workshop</h4>
                <h5>Charusat (CognizanceX '26)</h5>
              </div>
              <h3>Feb 2026</h3>
            </div>
            <p>
              Actively participated in a hands-on workshop focused on Web
              Vulnerabilities and Web Application Firewalls (WAF) organized
              by the Faculty of Technology and Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>THINKX Hackathon Participant</h4>
                <h5>DEPSTAR, Charusat</h5>
              </div>
              <h3>Feb 2026</h3>
            </div>
            <p>
              Participated in the "THINKX" Hackathon organized by the Devang
              Patel Institute of Advance Technology and Research (DEPSTAR) at
              Charusat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
