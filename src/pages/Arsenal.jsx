import { ArrowUpRight, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import Reveal from '../components/Reveal';

const skillGroups = [
  {
    name: 'FRONTEND',
    items: [
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'CSS3',
      'HTML5',
      'Framer Motion',
    ],
  },
  {
    name: 'BACKEND & DATA',
    items: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Socket.IO',
      'REST APIs',
      'SQL',
    ],
  },
  {
    name: 'WORKFLOW',
    items: [
      'Git & GitHub',
      'Vite',
      'Vercel',
      'Responsive Design',
      'Figma basics',
      'Debugging',
    ],
  },
];

export default function Arsenal() {
  return (
    <main className="inner-page section-wrap section-pad">
      <Reveal>
        <div className="section-kicker">
          <span>03</span> / THE ARSENAL
        </div>

        <div className="skills-heading page-title-row">
          <h1>
            TOOLS OF
            <br />
            <span>THE TRADE.</span>
          </h1>
          <p>
            Every mission needs the right gear. Here's what I use to bring
            ideas to life.
          </p>
        </div>
      </Reveal>

      {skillGroups.map((group, groupIndex) => (
        <section className="arsenal-group" key={group.name}>
          <Reveal>
            <h2>
              <span>0{groupIndex + 1}</span> {group.name}
            </h2>
          </Reveal>

          <div className="skills-grid">
            {group.items.map((skill, skillIndex) => (
              <Reveal key={skill} delay={skillIndex * 0.045}>
                <div className="skill-card">
                  <Code2 size={17} />
                  <span>{skill}</span>
                  <b>{String(skillIndex + 1).padStart(2, '0')}</b>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      <div className="page-next">
        <Link to="/missions">
          NEXT: CLASSIFIED MISSIONS <ArrowUpRight />
        </Link>
      </div>
    </main>
  );
}
