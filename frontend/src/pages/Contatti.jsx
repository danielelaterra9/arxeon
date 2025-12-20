import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight, Calendar } from 'lucide-react';

const Contatti = () => {
  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl">
            <span className="text-[#9a9a96] text-sm uppercase tracking-wider mb-4 block">Contatti</span>
            <h1 className="text-[#c8f000] font-bold text-4xl md:text-5xl leading-tight mb-6">Parliamo del tuo<br />progetto</h1>
            <p className="text-[#9a9a96] text-lg leading-relaxed">
              Prenota una call di chiarimento strategico o contattaci direttamente. 
              Siamo qui per rispondere alle tue domande, senza impegno.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Calendly Embed */}
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-[#c8f000]" size={24} />
                  <h2 className="text-2xl font-bold text-white">Prenota una call</h2>
                </div>
                <p className="text-[#9a9a96]">
                  30 minuti per capire insieme come possiamo aiutarti. 
                  Nessun impegno, nessuna vendita aggressiva.
                </p>
              </div>
              <div 
                className="calendly-inline-widget rounded-xl overflow-hidden border border-[#343633]" 
                data-url="https://calendly.com/arxeon/30min?hide_gdpr_banner=1&background_color=161716&text_color=ffffff&primary_color=c8f000" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-8">Contatti diretti</h2>
                <div className="space-y-6">
                  <a 
                    href="mailto:info@arxeon.ch" 
                    className="flex items-start gap-4 p-6 bg-[#2a2c29] rounded-xl border border-[#343633] hover:border-[#c8f000] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#343633] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c8f000] transition-colors">
                      <Mail className="text-[#c8f000] group-hover:text-[#161716] transition-colors" size={22} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <p className="text-[#c8f000]">info@arxeon.ch</p>
                      <p className="text-[#6f716d] text-sm mt-1">Rispondiamo entro 24 ore lavorative</p>
                    </div>
                  </a>
                  <a 
                    href="tel:+41000000000" 
                    className="flex items-start gap-4 p-6 bg-[#2a2c29] rounded-xl border border-[#343633] hover:border-[#c8f000] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#343633] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c8f000] transition-colors">
                      <Phone className="text-[#c8f000] group-hover:text-[#161716] transition-colors" size={22} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Telefono</h3>
                      <p className="text-[#c8f000]">+41 00 000 00 00</p>
                      <p className="text-[#6f716d] text-sm mt-1">Lun-Ven, 9:00-18:00</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-6 bg-[#2a2c29] rounded-xl border border-[#343633]">
                    <div className="w-12 h-12 rounded-xl bg-[#343633] flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#c8f000]" size={22} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Sede</h3>
                      <p className="text-[#9a9a96]">Lugano, Svizzera</p>
                      <p className="text-[#6f716d] text-sm mt-1">Operiamo in tutta la Svizzera</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-[#2a2c29] p-8 rounded-xl border border-[#343633]">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-[#c8f000]" size={22} />
                  <h3 className="text-xl font-bold text-white">Orari di lavoro</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#9a9a96]">Lunedì - Venerdì</span>
                    <span className="text-white">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9a9a96]">Sabato</span>
                    <span className="text-white">Su appuntamento</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9a9a96]">Domenica</span>
                    <span className="text-[#6f716d]">Chiuso</span>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-8 p-8 bg-[#343633] rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Preferisci una valutazione scritta?</h3>
                <p className="text-[#9a9a96] mb-6">
                  Compila il form di valutazione gratuita e riceverai un report dettagliato 
                  via email con le nostre raccomandazioni.
                </p>
                <Link to="/valutazione" className="btn-primary w-full justify-center">
                  Richiedi valutazione gratuita
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info */}
      <section className="py-16 bg-[#2a2c29]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-2xl mb-4">Lavoriamo in tutta la Svizzera</h3>
            <p className="text-[#9a9a96]">
              La nostra sede è a Lugano, ma serviamo clienti in tutta la Svizzera. 
              Le call e le riunioni avvengono principalmente online, per la massima 
              flessibilità e comodità.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contatti;
