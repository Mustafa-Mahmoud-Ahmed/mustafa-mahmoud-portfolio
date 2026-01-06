import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

function Projects({ darkMode }) {
  const projectsData = [
    {
      id: 1,
      title: 'Mobile Masr E-Commerce Clone',
      description: 'Full-scale e-commerce platform with AI-powered chat, intelligent search, and product comparison. Features customer website (React), admin dashboard (Angular), and robust backend.',
      tech: ['React', 'Angular', 'Node.js', 'MongoDB', 'OpenAI API'],
      github: 'https://github.com/Mustafa-Mahmoud-Ahmed/Mobile-Masr',
      link: 'https://mobile-masr.vercel.app/'
    },
    {
      id: 2,
      title: 'E-commerce Black Friday Website',
      description: ' Developed a fully functional e-commerce website showcasing multiple product categories and details. Implemented responsive design and interactive UI components using Bootstrap.',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com',
      link: 'https://example.com'
    },
    {
      id: 4,
      title: 'Medical System',
      description: 'Healthcare management system that simplified administrative and patient-related processes with dynamic interfaces connected to backend APIs.',
      tech: ['TypeScript', 'Angular', 'REST API'],
      github: 'https://github.com/Mustafa-Mahmoud-Ahmed/Medica',
      link: 'https://example.com'
    },
    {
      id: 5,
      title: 'Meeting Management System',
      description: 'Web-based system for organizing and managing meetings efficiently with role-based access and scheduling features.',
      tech: ['React', 'JavaScript'],
      github: 'https://github.com/Mustafa-Mahmoud-Ahmed/Meeting-Management-System',
      link: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className={`projects ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <h2 className="section-title">Projects</h2>
        <Row className="projects-grid">
          {projectsData.map((project) => (
            <Col md={6} lg={6} key={project.id} className="mb-4">
              <Card className={`project-card ${darkMode ? 'dark' : 'light'}`}>
                <Card.Body>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">{project.description}</Card.Text>
                  <div className="tech-stack">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> website
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
