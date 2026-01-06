import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Navbar as BSNavbar, Nav } from 'react-bootstrap';
import './Navbar.css';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <BSNavbar expand="lg" className={`navbar-custom ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <BSNavbar.Brand href="#home" className="brand-name">
          <span className="brand-text">Mustafa</span>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#experience" className="nav-link">
              Experience
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-link">
              Projects
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Contact
            </Nav.Link>
            <Nav.Link href="/Mostafa_Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">
              Resume
            </Nav.Link>
            <Nav.Link href="https://github.com/Mustafa-Mahmoud-Ahmed" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/mustafa-mahmoud-7125393a2/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </Nav.Link>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
