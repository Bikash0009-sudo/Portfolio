import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import BatMark from '../components/BatMark';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <main className="inner-page section-wrap section-pad">
      <Reveal>
        <div className="section-kicker">
          <span>02</span> / THE MAN BEHIND THE MASK
        </div>

        <div className="page-heading">
          <h1>
            THE STORY
            <br />
            <span>SO FAR.</span>
          </h1>

          <div className="profile-emblem">
            <div className="profile-moon" />
            <BatMark />
          </div>
        </div>
      </Reveal>

      <div className="about-grid page-about">
        <Reveal>
          <h2>
            NOT EVERY
            <br />
            HERO WEARS
            <br />
            <span>A CAPE.</span>
          </h2>
        </Reveal>

        <Reveal className="about-text">
          <p className="lead">
            Some build the things that move the world forward.
          </p>
          <p>
            I'm a Computer Science student and web developer who enjoys
            crafting thoughtful digital experiences. I work mainly with React
            on the frontend and explore backend technologies to understand the
            whole picture — from a polished interface to the logic that powers
            it.
          </p>
          <p>
            I'm always learning, always building, and always looking for the
            next challenge worth solving.
          </p>

          <div className="about-facts">
            <div>
              <strong>2027</strong>
              <span>GRADUATION</span>
            </div>
            <div>
              <strong>REACT</strong>
              <span>MAIN WEAPON</span>
            </div>
            <div>
              <strong>INDIA</strong>
              <span>BASE OF OPS</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="quote-panel">
        <span>FIELD NOTE / 001</span>
        <p>
          “It’s not who I am underneath, but what I do that defines me.”
        </p>
        <small>— A PRINCIPLE FOR EVERY BUILD</small>
      </Reveal>

      <div className="page-next">
        <Link to="/arsenal">
          NEXT: THE ARSENAL <ArrowUpRight />
        </Link>
      </div>
    </main>
  );
}
