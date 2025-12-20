import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1c1b] border-t border-[#3f4816]/50">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-[#d9fb06] tracking-tight">Arxéon</span>
            </Link>
            <p className="text-[#888680] text-sm leading-relaxed mb-6">
              Marketing strategico orientato ai risultati. Trasformiamo i tuoi investimenti in crescita misurabile.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#3f4816] flex items-center justify-center text-[#888680] hover:text-[#d9fb06] hover:border-[#d9fb06] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#3f4816] flex items-center justify-center text-[#888680] hover:text-[#d9fb06] hover:border-[#d9fb06] transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigazione</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
                  Servizi & Pacchetti
                </Link>
              </li>
              <li>
                <Link to="/metodo" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
                  Il Nostro Metodo
                </Link>
              </li>
              <li>
                <Link to="/valutazione" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
                  Valutazione Gratuita
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Servizi</h4>
            <ul className="space-y-3">
              <li className="text-[#888680] text-sm">Social Media Marketing</li>
              <li className="text-[#888680] text-sm">Google & Meta Ads</li>
              <li className="text-[#888680] text-sm">Email Marketing</li>
              <li className="text-[#888680] text-sm">CRM & Automazioni</li>
              <li className="text-[#888680] text-sm">SEO & Content</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#d9fb06] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@arxeon.ch" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
                  info@arxeon.ch
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#d9fb06] mt-0.5 flex-shrink-0" />
                <a href="tel:+41000000000" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
                  +41 00 000 00 00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#d9fb06] mt-0.5 flex-shrink-0" />
                <span className="text-[#888680] text-sm">
                  Lugano, Svizzera
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#3f4816]/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#888680] text-sm">
            © {currentYear} Arxéon. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/termini" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
              Termini di Servizio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
