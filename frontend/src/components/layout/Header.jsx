import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Valutazione gratuita', path: '/valutazione' },
    { name: 'Metodo', path: '/metodo' },
    { name: 'Contatti', path: '/contatti' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1c1b]/95 backdrop-blur-sm border-b border-[#3f4816]/50">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#d9fb06] tracking-tight">Arxéon</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  isActive(link.path)
                    ? 'text-[#1a1c1b] bg-[#d9fb06]'
                    : 'text-white hover:text-[#d9fb06]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/valutazione"
              className="btn-primary text-sm"
            >
              Valutazione Gratuita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#d9fb06] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1a1c1b] border-t border-[#3f4816]/50">
          <nav className="flex flex-col p-5 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium transition-colors duration-300 rounded-lg ${
                  isActive(link.path)
                    ? 'text-[#1a1c1b] bg-[#d9fb06]'
                    : 'text-white hover:bg-[#302f2c]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/valutazione"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mt-4 text-center"
            >
              Valutazione Gratuita
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
