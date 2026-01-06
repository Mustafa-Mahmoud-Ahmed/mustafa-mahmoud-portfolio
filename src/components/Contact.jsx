import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import './Contact.css';

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message received.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`contact ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <Row>
          <Col md={6} className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <p className="info-label">Email</p>
                <p>Moustafa.mahnoud2024@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <p className="info-label">Phone</p>
                <p>+201066405617</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <p className="info-label">Location</p>
                <p>Cairo, Egypt</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/Mustafa-Mahmoud-Ahmed" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mustafa-mahmoud-7125393a2/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaLinkedin />
              </a>
              <a href="https://x.com/Mustafa97078329" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaTwitter />
              </a>
            </div>
          </Col>
          <Col md={6} className="contact-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message here"
                />
              </Form.Group>
              <Button type="submit" className="submit-btn">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
