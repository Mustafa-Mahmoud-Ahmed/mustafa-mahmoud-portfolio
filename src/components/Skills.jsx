import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaReact, FaNode, FaDatabase, FaGitAlt } from 'react-icons/fa';
import './Skills.css';

function Skills({ darkMode }) {
  const skillsData = [
    { category: 'Frontend', icon: FaReact, skills: ['React.js', 'Angular', 'Next.js', 'Bootstrap', 'Sass', 'Tailwind CSS'] },
    { category: 'Backend', icon: FaNode, skills: ['Node.js', 'Express.js', 'Nest.js', 'REST APIs'] },
    { category: 'Database', icon: FaDatabase, skills: ['MongoDB', 'MySQL'] },
    { category: 'Tools & Other', icon: FaGitAlt, skills: ['Git', 'GitHub', 'PWA', 'Generative AI', 'Unit Testing'] }
  ];

  const technicalSkills = [
    { name: 'React.js / Angular', level: 80 },
    { name: 'JavaScript / TypeScript', level: 95 },
    { name: 'Python / C++', level: 50 },
    { name: 'Node.js / Express.js', level: 80 },
    { name: 'HTML / CSS / Sass', level: 100 },
    { name: 'MongoDB / MySQL', level: 85 },
    { name: 'Git / GitHub', level: 90 },
    { name: 'REST APIs', level: 70 }
  ];

  return (
    <section id="skills" className={`skills ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <h2 className="section-title">Skills</h2>
        
        <Row className="mb-5">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div className={`skill-card ${darkMode ? 'dark' : 'light'}`}>
                  <IconComponent className="skill-icon" />
                  <h4 className="skill-category">{skill.category}</h4>
                  <ul className="skill-list">
                    {skill.skills.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            );
          })}
        </Row>

        <div className="technical-skills">
          <h3 className="subsection-title">Technical Skills Proficiency</h3>
          <Row>
            {technicalSkills.map((skill, index) => (
              <Col md={6} key={index} className="mb-4">
                <div className="skill-progress">
                  <div className="skill-name">{skill.name}</div>
                  <ProgressBar now={skill.level} className="progress-bar-custom" />
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
