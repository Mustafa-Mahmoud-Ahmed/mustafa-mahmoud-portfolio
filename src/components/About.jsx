import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

function About({ darkMode }) {
  return (
    <section id="about" className={`about ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <h2 className="section-title">انا مين</h2>
        <Row className="align-items-center">
          <Col md={6} className="about-text">
            <p>
              أنا مطور ويب شغوف بإنشاء تطبيقات ويب حديثة وفعالة. مع خبرة في تطوير الواجهات الأمامية والخلفية،
              أسعى دائماً لتقديم حلول تقنية متقدمة وتجربة مستخدم استثنائية.
            </p>
            <p>
              متخصص في استخدام React و Angular و Node.js وقواعد البيانات المختلفة. أحب التعاون مع فريق متحمس لإنجاز مشاريع عظيمة.
            </p>
            <p>
              خارج مجال البرمجة، أستمتع بقراءة المقالات التقنية وتعلم تقنيات جديدة والمساهمة في مشاريع مفتوحة المصدر.
            </p>
          </Col>
          <Col md={6} className="about-stats">
            <div className="stat-card">
              <h3>9+</h3>
              <p>المشاريع المنجزة</p>
            </div>
            <div className="stat-card">
              <h3>3+</h3>
              <p>سنوات الخبرة</p>
            </div>
            <div className="stat-card">
              <h3>7+</h3>
              <p>العملاء الراضين</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
