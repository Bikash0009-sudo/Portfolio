import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

import Reveal from '../components/Reveal';

export default function Contact() {
  return (
    <main className="inner-page section-wrap section-pad">
      <Reveal>
        <div className="section-kicker">
          <span>05</span> / OPEN CHANNEL
        </div>

        <div className="contact-grid page-contact">
          <div>
            <h1>
              GOT A
              <br />
              <span>MISSION?</span>
            </h1>

            <p className="contact-copy">
              Have an idea, an opportunity, or just want to talk tech? My inbox
              is always open. Let's build something worth remembering.
            </p>

            <div className="contact-bat">
              <span>THE SIGNAL IS ON.</span>
              <div className="signal-orb">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>

          <div className="contact-links">
            <a href="mailto:bikashchoudhury.dev@gmail.com">
              <span>
                <Mail size={19} /> EMAIL
              </span>
              <ArrowUpRight />
            </a>

            <a
              href="https://linkedin.com/in/bikash-choudhury-0769a9395"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <Linkedin size={19} /> LINKEDIN
              </span>
              <ArrowUpRight />
            </a>

            <a
              href="https://github.com/Bikash0009-sudo"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <Github size={19} /> GITHUB
              </span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </Reveal>

      <div className="contact-bottom">
        <span>GOTHAM STANDARD / 001</span>
        <span>RESPONSIVE BY DESIGN. BUILT WITH INTENT.</span>
      </div>
    </main>
  );
}
