import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

function Experience({ darkMode }) {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Development Trainee',
      company: 'Information Technology Institute (ITI)',
      location: 'Egypt',
      period: 'July 2025 – November 2025',
      description: [
        'Enrolled in a 4-month Full Stack Developer training program focused on modern web technologies',
        'Working on full stack projects that combine frontend and backend technologies in real-world applications'
      ]
    },
    {
      id: 2,
      title: 'Technical Support Engineer',
      company: '22eSim',
      location: 'Kuwait',
      period: 'July 2024 – September 2024',
      description: [
        'Provided technical support for eSIM services, assisting customers in installation and activation processes',
        'Diagnosed and resolved connectivity issues, ensuring a seamless customer experience',
        'Collaborated with other departments to improve service efficiency and user satisfaction'
      ]
    },
    {
      id: 3,
      title: 'IT Intern',
      company: 'Information Technology Institute (ITI)',
      location: 'Qena, Egypt',
      period: 'June 2023 – August 2023',
      description: [
        'Participated in an intensive training program focused on networking, databases, and system administration',
        'Contributed to practical projects aimed at improving technical and problem-solving skills'
      ]
    }
  ];

  return (
    <section id="experience" className={`experience ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className={`experience-card ${darkMode ? 'dark' : 'light'}`}>
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="company">
                      <FaBriefcase /> {exp.company}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                    <span className="period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
