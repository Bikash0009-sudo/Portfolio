import { Link } from 'react-router-dom';

import BatMark from './BatMark';

export default function Footer() {
  return (
    <footer className="footer section-wrap">
      <Link to="/" className="footer-brand">
        <BatMark />
        BC.
      </Link>

      <span>© 2026 BIKASH CHOUDHURY. BUILT IN THE SHADOWS.</span>

      <a href="#top">BACK TO TOP ↑</a>
    </footer>
  );
}
