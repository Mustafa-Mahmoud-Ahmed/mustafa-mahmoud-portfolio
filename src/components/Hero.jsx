import { FaArrowDown } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import './Hero.css';

function Hero({ darkMode }) {
  return (
    <section id="home" className={`hero ${darkMode ? 'dark' : 'light'}`}>
      <Container className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Mustafa</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer | React & Angular Specialist | Node js Enthusiast
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary btn-lg">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img src="/mostafa official.jpeg" alt="Profile" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
