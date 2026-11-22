import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import BatMark from '../components/BatMark';
import Reveal from '../components/Reveal';

const projects = [
  {
    number: '01',
    title: 'CHATON',
    type: 'REAL-TIME COMMUNICATION',
    description:
      'A full-stack chat experience with one-to-one random conversations and live chat rooms, powered by Socket.IO.',
    technologies: [
      'React',
      'Node.js',
      'Socket.IO',
      'PostgreSQL',
      'Tailwind',
    ],
    link: 'https://github.com/Bikash0009-sudo',
    theme: 'chat',
    label: 'LIVE CONNECTION',
  },
  {
    number: '02',
    title: 'STUDYMATE AI',
    type: 'AI-POWERED LEARNING',
    description:
      'An AI study companion designed to turn study material into notes, quizzes, flashcards and focused plans.',
    technologies: ['React', 'Express', 'Gemini API', 'Tailwind'],
    link: 'https://github.com/Bikash0009-sudo',
    theme: 'study',
    label: 'INTELLIGENCE',
  },
  {
    number: '03',
    title: 'EAGLE BUILDING',
    type: 'CLIENT WEBSITE',
    description:
      'A responsive business website built to establish a strong online presence and make customer enquiries easier.',
    technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
    link: 'https://eaglebuildingconstruction.com/',
    theme: 'eagle',
    label: 'CLIENT DEPLOYMENT',
  },
];

export default function Missions() {
  return (
    <main className="inner-page section-wrap section-pad">
      <Reveal>
        <div className="section-kicker">
          <span>04</span> / CLASSIFIED MISSIONS
        </div>

        <div className="skills-heading page-title-row">
          <h1>
            THE WORK
            <br />
            <span>SPEAKS.</span>
          </h1>
          <p>
            A few things I've designed, developed and shipped into the world.
          </p>
        </div>
      </Reveal>

      <div className="project-list">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className={`project-card ${project.theme}`}
            initial={{ opacity: 0, y: 65, rotateX: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            whileHover={{ y: -7 }}
          >
            <div className="project-number">
              {project.number}{' '}
              <span>— CASE FILE / {project.label}</span>
            </div>

            <div className="project-main">
              <div className="project-art">
                <div className="project-art-inner">
                  <BatMark />
                  <span>{project.title}</span>
                </div>
                <div className="art-crosshair">+</div>
                <div className="scan-line" />
              </div>

              <div className="project-info">
                <p className="project-type">{project.type}</p>
                <h2>{project.title}</h2>
                <p className="project-desc">{project.description}</p>

                <div className="tag-row">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW PROJECT <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
