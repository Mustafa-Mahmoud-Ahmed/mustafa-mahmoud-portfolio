import { Container } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <div className="footer-content">
          <p>
            Made with using React & Bootstrap
          </p>
          <p className="copyright">
            &copy; {currentYear} Mostafa Portfolio. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
