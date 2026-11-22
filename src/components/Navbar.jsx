import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

import BatMark from './BatMark';

const navigationLinks = [
  ['HOME', '/'],
  ['ABOUT', '/about'],
  ['ARSENAL', '/arsenal'],
  ['MISSIONS', '/missions'],
  ['CONTACT', '/contact'],
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="topbar">
      <Link to="/" className="brand" onClick={closeMenu}>
        <span className="brand-mark">
          <BatMark />
        </span>
        <span>
          BC<span className="brand-dot">.</span>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navigationLinks.map(([label, path]) => (
          <NavLink end key={path} to={path}>
            {label}
          </NavLink>
        ))}
      </nav>

      <Link to="/contact" className="top-cta">
        HIRE ME <ArrowUpRight size={15} />
      </Link>

      <button
        type="button"
        className="mobile-toggle"
        onClick={() => setIsMenuOpen((current) => !current)}
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {isMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigationLinks.map(([label, path]) => (
            <NavLink end key={path} to={path} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
