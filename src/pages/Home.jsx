import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

import BatMark from '../components/BatMark';
import Reveal from '../components/Reveal';

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <>
      <section className="hero section-wrap" id="top">
        <div className="spotlight" />
        <div className="hero-gridline" />

        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            className="status"
          >
            <span className="status-dot" />
            AVAILABLE FOR INTERNSHIPS & PROJECTS
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="eyebrow"
          >
            THE CITY NEEDS A DEVELOPER.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I BUILD
            <br />
            <span>DIGITAL</span>
            <br />
            LEGENDS<span className="period">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hero-description"
          >
            I'm <strong>Bikash Choudhury</strong> — a developer turning ideas
            into immersive, responsive web experiences. Clean code is my
            superpower. The browser is my Gotham.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="hero-actions"
          >
            <Link className="btn-primary" to="/missions">
              EXPLORE MY WORK <ArrowUpRight size={17} />
            </Link>
            <Link className="btn-ghost" to="/contact">
              LET'S CONNECT <span>↗</span>
            </Link>
          </motion.div>

          <div className="hero-social">
            <a
              href="https://github.com/Bikash0009-sudo"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GITHUB
            </a>
            <a
              href="https://linkedin.com/in/bikash-choudhury-0769a9395"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} /> LINKEDIN
            </a>
          </div>
        </div>

        <motion.div style={{ y: heroY }} className="hero-art">
          <div className="moon" />
          <div className="bat-signal-beam" />
          <div className="city city-back" />
          <div className="city city-front" />
          <div className="bat-silhouette">
            <BatMark />
          </div>

          <div className="cape-figure">
            <div className="figure-head" />
            <div className="figure-cape" />
          </div>

          <div className="hero-caption">
            <span>01 / THE BEGINNING</span>
            <span>INDIA · 2026</span>
          </div>

          <div className="vertical-label">DISCIPLINE. FOCUS. CODE.</div>
        </motion.div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={16} />
          <span className="hero-bottom-line" />
        </div>
      </section>

      <section className="home-brief section-wrap section-pad">
        <Reveal>
          <div className="section-kicker">
            <span>01</span> / THE ORIGIN STORY
          </div>

          <div className="brief-grid">
            <h2>
              NOT JUST
              <br />
              ANOTHER
              <br />
              <span>PORTFOLIO.</span>
            </h2>

            <div>
              <p className="lead">
                A little mystery. A lot of curiosity. And code that brings
                ideas to life.
              </p>
              <p>
                I’m a Computer Science student focused on frontend development,
                building responsive interfaces and exploring full-stack
                technologies.
              </p>
              <Link className="project-link" to="/about">
                MEET THE DEVELOPER <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="home-signal section-wrap">
        <div className="signal-bat">
          <BatMark />
        </div>
        <p className="signal-kicker">THE NIGHT IS YOUNG. THE CODE IS READY.</p>
        <h2>
          READY FOR
          <br />
          <span>THE NEXT</span>
          <br />
          MISSION?
        </h2>
        <Link to="/missions" className="signal-link">
          VIEW CLASSIFIED MISSIONS <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}
