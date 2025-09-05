import React from 'react'
import "./Homepage.css";
import { Link } from "react-scroll"


const Homepage = () => {
  return (
  <>
    <div id='home' className="header">
      <header className="header-content">
        <a href="#logo" className="logo">
          <img
            src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/StudySyn.svg"
            alt="no img"
            className="logo-icon"
          />
          <span className="logo-text">StudySyn</span>
        </a>

        <nav className="nav">
           <Link to="home" smooth={true} duration={600} className="nav-link">Home</Link>
           <Link to="feature" smooth={true} duration={600} className="nav-link">Featured</Link>
           <Link to="blog" smooth={true} duration={600} className="nav-link">Blog</Link>
           <Link to="about" smooth={true} duration={600} className="nav-link">About</Link>
       </nav>

        <Link to="contact" smooth={true} duration={600} className="contact-button">
            Contact Us
       </Link>


        <button type="button" className="menu-button">
          <img
            src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/Hamburger.svg"
            className="menu-icon"
            alt="menubutton"
          />
        </button>
      </header>
    </div>

    <div className="content">
     <section className="main-section">
     <div className="content-left">

      <p className="section-label">
        Very proud to introduce
      </p>
      <h1 className="section-title">
        Seamless Learing for
        Brighter Futures
      </h1>
      <p className="sectionn-description">
        Our innovative platform offers an effortless and sealess approach to
        learing,empowering student of all ages to achieve brighter futures. Join 
        us on a transformative journey to simplify education and unlock your full
        potential.
      </p>

      <div className="button-group">
        <a href="#start" className="start-button"> Start now </a>
        <a href="#tour" className="tour-button"> Take tour </a>
      </div>
    </div>

    <div className="content-right">
      <div className="image-container">
        <img
          src="https://github.com/loveBabbar/CodehelpYTWebDev/blob/main/html_CSS_JS/lecture33/images/usgs-hoS3dzgpHzw-unsplash.jpg?raw=true"
          alt="no img"
          className="section-image"
        />
      </div>
    </div>
  </section>
    </div>

  <div className="company-container">
  <h2>Trusted by the best</h2>
  <div className="company-grid">
    <div className="company-logo">
      <img
        src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/Google.svg"
        className="svg-img"
        alt="no img"
      />
      <span className="logo-text">Google</span>
    </div>

    <div className="company-logo">
      <img
        src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/Microsoft.svg"
        className="svg-img"
        alt=""
      />
      <span className="logo-text">Microsoft</span>
    </div>

    <div className="company-logo">
      <img
        src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/linkedin.svg"
        className="svg-img"
        alt=""
      />
      <span className="logo-text">linkedin</span>
    </div>

    <div className="company-logo">
      <img
        src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/VectorEdu.svg"
        className="svg-img"
        alt=""
      />
      <span className="logo-text">VectorEdu</span>
    </div>
  </div>
  </div>

  <div id='feature' className="feature-container">
  <div className="feature-content">
    <div className="feature-text">
      <h2 className="h2-text">Our competitive advantage</h2>
      <p className="feature-para">
        This is a section of some simple filler text.also know as placeholder
        text.it shares some cahrateristics of real written text but is random or
        otherwise generated.
      </p>
    </div>

    <div className="main-card">
      <div className="feature-cards-1">
        <div className="card-text">
          <img
            src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/PersonalizedLearn.svg"
            className="card-img"
            alt="no img"
          />
          <h3 className="h3-text">Personalized Learning</h3>
          <p className="card-para">
            Offer tailored learning experiences through AI and machine learning
            to cater to individual student needs.
          </p>
        </div>
      </div>

      <div className="feature-cards-2">
        <div className="card-text">
          <img
            src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/Affordability.svg"
            className="card-img"
            alt="no img"
          />
          <h3 className="h3-text">Affordability</h3>
          <p className="card-para">
            Provide high-quality education at an affordability price point,
            making it accessibe to a broder audience.
          </p>
        </div>
      </div>

      <div className="feature-cards-3">
        <div className="card-text">
          <img
            src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/IndustryPatner.svg"
            className="card-img"
            alt="no img"
          />
          <h3 className="h3-text">Industry partnerships</h3>
          <p className="card-para">
            Collabrate with well-known companies and institutions to offer
            accredited coureses and certification,adding credibility to your
            offerings
          </p>
        </div>
      </div>

      <div className="feature-cards-4">
        <div className="card-text">
          <img
            src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/InnovativeTech.svg"
            className="card-img"
            alt="no img"
          />
          <h3 className="h3-text">innovative Technology</h3>
          <p className="card-para">
            Utillize cutting-edge technology,such as augmented reality or
            virtual reality,to create immersive learning experiences.
          </p>
        </div>
      </div>

      <div className="feature-cards-5">
        <div className="card-text">
          <img
            src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/PersonalizedLearn.svg"
            className="card-img"
            alt="no img"
          />
          <h3 className="h3-text">Responsive Support</h3>
          <p className="card-para">
            Provide exceptional customer support and assistance to student and
            educator.
          </p>
        </div>
      </div>

      <div className="feature-cards-6">
        <div className="card-text">
          <img
            src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/Analytics.svg"
            className="card-img"
            alt="no img"
          />
          <h3 className="h3-text">Analytics and Insights</h3>
          <p className="card-para">
            Offer detailed progress tracking and Analytics tp help student and
            teachers monitor performance and make data-driven decisions.
          </p>
        </div>
      </div>
    </div>
  </div>
   </div>

   <div id='about' className="testimonial-container">
    <div className="testimonial-content">
        <h2 className="testimonial-title">
             What Others Say About Us
        </h2>
        <div className="testimonial-main">
            <div className="testimonial-grid">
                <div className="testimonial-text">
                    <p>
                        StudySyn revolutionized my classroom! Enaging content and teacher resources make learing enjoyable.
                        Highly recommended for educators
                    </p>
                </div>
                <div className="testimonial-avatar">
                    <img 
                        src="https://github.com/loveBabbar/CodehelpYTWebDev/blob/main/html_CSS_JS/lecture33/images/avatar1.png?raw=true" 
                        className="testimonial-img1"  
                        alt="no img"
                    />
                </div>
                <div className="testimonial-info">
                    <h3 className="name">Sarah Johnson</h3>
                    <p className="info">8th Grade English Teacher</p>
                </div>
            </div>
            
            <div className="testimonial-grid">
                <div className="testimonial-text">
                    <p>
                        StudySyn Transformed our family's learning. Safe, interactive, and progress tracking features are invaluable for parents
                    </p>
                </div>
                <div className="testimonial-avatar">
                    <img 
                        src="https://github.com/loveBabbar/CodehelpYTWebDev/blob/main/html_CSS_JS/lecture33/images/avatar2.png?raw=true" 
                        className="testimonial-img2" 
                        alt="no img"
                    />
                </div>
                <div className="testimonial-info">
                    <h3 className="name">Mark Davis</h3>
                    <p className="info">Parent</p>
                </div>
            </div>

            <div className="testimonial-grid">
                <div className="testimonial-text">
                    <p>
                        StudySyn a true game-changer! Flexible content, tailored assessment, and excellent support integral to our school district success
                    </p>
                </div>
                <div className="testimonial-avatar">
                    <img 
                        src="https://github.com/loveBabbar/CodehelpYTWebDev/blob/main/html_CSS_JS/lecture33/images/avatar3.png?raw=true" 
                        className="testimonial-img3" 
                        alt="no img"
                    />
                </div>
                <div className="testimonial-info">
                    <h3 className="name">Dr James Carter</h3>
                    <p className="info">School Administrator</p>
                </div>
            </div>
        </div>
    </div>
  </div>

  <div className="newsletter-container">
  <div className="newsletter-content">
    
    <div className="newsletter-leftbox">
      <img 
        src="https://github.com/loveBabbar/CodehelpYTWebDev/blob/main/html_CSS_JS/lecture33/images/img.png?raw=true" 
        className="newsletter-img" 
        alt="no img" 
      />
    </div>

    <div className="newsletter-rightbox">
      <div className="newsletter-info">
        <h2 className="newsletter-title">Get the latest update</h2>
        <p className="newsletter-text">
          Sign up for our newsletter
        </p>
      </div>

      <form className="news-form">
        <input className="news-email" placeholder="Email" />
        <button className="news-send">
          Send
        </button>
      </form>

      <div className="privacy-policy">
        By signing up to our newsletter you agree to our{" "}
        <a href="#" className="news-link">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="news-link">
          Privacy Policy
        </a>
        .
      </div>
    </div>

  </div>
  </div>

  <div id='contact' className="footer-container">
   <footer className="footer">
    <div className="footer-top">
      <div className="comp-logo">
        <a href="#" className="logo-link">
          <img 
            src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/StudySyn.svg" 
            className="logo-svg" 
            alt="logo" 
          />
          <h4>StudySyn</h4>
        </a>
        <p className="filler-text">Seamless learning for Brighter Futures.</p>
        
        <div className="social">
          <a href="Check out Unknown (@AhsanKh73808353): https://x.com/AhsanKh73808353?t=hsG8Xtp_II2akM-_nyhHmg&s=08" className="social-link">
            <img 
              src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/twitter.svg" 
              className="social-icon" 
              alt="twitter" 
            />
          </a>
          <a href="https://www.instagram.com/ahsan.__.16?igsh=YXRkMHlhNmU2aXZ1" className="social-link">
            <img 
              src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/instagram.svg" 
              className="social-icon" 
              alt="instagram" 
            />
          </a>
          <a href="#" className="social-link">
            <img 
              src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/Microsoft.svg" 
              className="social-icon" 
              alt="microsoft" 
            />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-ahsan-69a289348/" className="social-link">
            <img 
              src="https://raw.githubusercontent.com/loveBabbar/CodehelpYTWebDev/5f10c3122a1081eed273bdf54a733d5302540105/html_CSS_JS/lecture33/images/linkedin.svg" 
              className="social-icon" 
              alt="linkedin" 
            />
          </a>
        </div>
      </div>
    </div>

    <div className="footer-grid">
      <div className="footer-grid-column">
        <div className="footer-grid-heading">
          <h5>Products</h5>
        </div>
        <ul className="footer-links-list">
          <li><a href="#overview" className="footer-link">Overview</a></li>
          <li><a href="#solutions" className="footer-link">Solutions</a></li>
          <li><a href="#pricing" className="footer-link">Pricing</a></li>
          <li><a href="#customers" className="footer-link">Customers</a></li>
        </ul>
      </div>

      <div className="footer-grid-column">
        <div className="footer-grid-heading">
          <h5>Company</h5>
        </div>
        <ul className="footer-links-list">
          <li><a href="#about" className="footer-link">About</a></li>
          <li><a href="#investors" className="footer-link">Investor Relations</a></li>
          <li><a href="#jobs" className="footer-link">Jobs</a></li>
          <li><a href="#press" className="footer-link">Press</a></li>
          <li><a href="#blog" className="footer-link">Blog</a></li>
        </ul>
      </div>

      <div className="footer-grid-column">
        <div className="footer-grid-heading">
          <h5>Support</h5>
        </div>
        <ul className="footer-links-list">
          <li><a href="#contact" className="footer-link">Contact</a></li>
          <li><a href="#docs" className="footer-link">Documentation</a></li>
          <li><a href="#chat" className="footer-link">Chat</a></li>
          <li><a href="#faq" className="footer-link">FAQ</a></li>
        </ul>
      </div>

      <div className="footer-grid-column">
        <div className="footer-grid-heading">
          <h5>Legal</h5>
        </div>
        <ul className="footer-links-list">
          <li><a href="#terms" className="footer-link">Terms of Service</a></li>
          <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
          <li><a href="#cookies" className="footer-link">Cookie Settings</a></li>
        </ul>
      </div>
    </div>   
  </footer>

  <div className="footer-copyright">
    <p className="copyright">
      © 2025-present StudySyn. All rights reserved.
    </p> 
  </div>
  </div>




  </>
  )
}

export default Homepage