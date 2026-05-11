import React from 'react';

const frontendSkills = [
  { name: 'React.js', pct: 92, cls: 'fill-c' },
  { name: 'JavaScript ES6+', pct: 90, cls: 'fill-c' },
  { name: 'CSS3 / SASS', pct: 88, cls: 'fill-c' },
  { name: 'HTML5', pct: 95, cls: 'fill-c' },
  { name: 'Responsive Design', pct: 93, cls: 'fill-c' },
];

const backendSkills = [
  { name: 'Node.js', pct: 78, cls: 'fill-p' },
  { name: 'REST APIs', pct: 85, cls: 'fill-p' },
  { name: 'MongoDB', pct: 72, cls: 'fill-p' },
  { name: 'Firebase', pct: 75, cls: 'fill-p' },
  { name: 'MySQL / PostgreSQL', pct: 68, cls: 'fill-p' },
];

const toolsSkills = [
  { name: 'Git / GitHub', pct: 90, cls: 'fill-g' },
  { name: 'Docker', pct: 65, cls: 'fill-g' },
  { name: 'Figma / UI Design', pct: 80, cls: 'fill-g' },
  { name: 'Vercel / Netlify', pct: 88, cls: 'fill-g' },
  { name: 'Testing / Jest', pct: 70, cls: 'fill-g' },
];

const techPills = [
  'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'GraphQL', 'Vite',
  'React Router', 'Axios', 'Framer Motion', 'Styled Components',
  'Webpack', 'ESLint', 'Prettier', 'Postman', 'VS Code',
];

function SkillBar({ name, pct, cls }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-top">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div className={`skill-bar-fill ${cls}`} data-width={pct}></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '55px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Stack Tecnológico</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Mis <span>habilidades</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Dominio profundo de las tecnologías más demandadas del ecosistema web moderno.</p>
        </div>
        <div className="skills-grid">
          <div className="skill-category reveal">
            <div className="skill-cat-header">
              <div className="skill-cat-icon fe"><i className="fas fa-palette"></i></div>
              <h3>Frontend</h3>
            </div>
            <div className="skill-bars">
              {frontendSkills.map(s => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
          <div className="skill-category reveal" style={{ transitionDelay: '.1s' }}>
            <div className="skill-cat-header">
              <div className="skill-cat-icon be"><i className="fas fa-server"></i></div>
              <h3>Backend & DB</h3>
            </div>
            <div className="skill-bars">
              {backendSkills.map(s => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
          <div className="skill-category reveal" style={{ transitionDelay: '.2s' }}>
            <div className="skill-cat-header">
              <div className="skill-cat-icon to"><i className="fas fa-tools"></i></div>
              <h3>DevOps & Tools</h3>
            </div>
            <div className="skill-bars">
              {toolsSkills.map(s => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
        </div>
        <div className="tech-cloud-wrap reveal" style={{ transitionDelay: '.3s' }}>
          <h3>También trabajo con</h3>
          <div className="tech-cloud">
            {techPills.map(p => <span key={p} className="tech-pill">{p}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
