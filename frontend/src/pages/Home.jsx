import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, TrendingUp, Users, Target, Zap } from 'lucide-react';
import { stats, testimonials } from '../data/mock';

const Home = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-[#1a1c1b] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#d9fb06] blur-[150px]" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-[#3f4816] blur-[100px]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 relative z-10">
          <div className="max-w-4xl">
            <span className="caption text-[#d9fb06] mb-6 block">Marketing strategico • Risultati misurabili</span>
            <h1 className="heading-display mb-8">
              Il tuo marketing<br />
              merita risultati,<br />
              <span className="text-white">non promesse.</span>
            </h1>
            <p className="body-large max-w-2xl mb-10">
              Trasformiamo i tuoi investimenti marketing in crescita concreta e misurabile. 
              Strategia, esecuzione e ottimizzazione: tutto orientato al tuo business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/valutazione" className="btn-primary text-base px-8 py-4">
                Richiedi valutazione gratuita
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/servizi" className="btn-secondary text-base px-8 py-4">
                Scopri i pacchetti
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#302f2c] py-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#d9fb06] mb-2">{stat.value}</div>
                <div className="text-[#888680] text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-[#1a1c1b]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="caption text-[#d9fb06] mb-4 block">Il problema</span>
              <h2 className="heading-2 mb-6">Stanco di spendere<br />senza vedere risultati?</h2>
              <div className="space-y-4 text-[#888680]">
                <p className="flex items-start gap-3">
                  <span className="text-[#d9fb06] mt-1">•</span>
                  Budget marketing che svanisce senza ROI chiaro
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#d9fb06] mt-1">•</span>
                  Agenzie che parlano di "engagement" ma non di vendite
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#d9fb06] mt-1">•</span>
                  Strategie generiche che non capiscono il tuo business
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#d9fb06] mt-1">•</span>
                  Report pieni di vanity metrics inutili
                </p>
              </div>
            </div>
            <div className="bg-[#302f2c] p-8 md:p-12 rounded-lg border border-[#3f4816]">
              <span className="caption text-[#d9fb06] mb-4 block">La soluzione</span>
              <h3 className="heading-3 mb-6">Marketing orientato<br />ai risultati reali</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#3f4816] flex items-center justify-center flex-shrink-0">
                    <Check className="text-[#d9fb06]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">KPI chiari e misurabili</h4>
                    <p className="text-[#888680] text-sm">Definiamo insieme gli obiettivi e li tracciamo con precisione.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#3f4816] flex items-center justify-center flex-shrink-0">
                    <Check className="text-[#d9fb06]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Strategia su misura</h4>
                    <p className="text-[#888680] text-sm">Niente template: ogni piano è costruito sul tuo business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#3f4816] flex items-center justify-center flex-shrink-0">
                    <Check className="text-[#d9fb06]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Trasparenza totale</h4>
                    <p className="text-[#888680] text-sm">Sai sempre dove vanno i tuoi soldi e che risultati portano.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#302f2c]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <span className="caption text-[#d9fb06] mb-4 block">Cosa facciamo</span>
            <h2 className="heading-2 mb-4">Soluzioni complete<br />per la tua crescita</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: 'Social Media', desc: 'Gestione professionale dei tuoi canali social' },
              { icon: Target, title: 'Advertising', desc: 'Campagne Google e Meta Ads ottimizzate' },
              { icon: Users, title: 'CRM & Email', desc: 'Automazioni e email marketing strategico' },
              { icon: Zap, title: 'SEO & Content', desc: 'Visibilità organica e contenuti che convertono' },
            ].map((service, index) => (
              <div key={index} className="bg-[#1a1c1b] p-8 rounded-lg border border-[#3f4816] hover:border-[#d9fb06] transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-[#3f4816] flex items-center justify-center mb-6 group-hover:bg-[#d9fb06] transition-colors">
                  <service.icon className="text-[#d9fb06] group-hover:text-[#1a1c1b] transition-colors" size={24} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-[#888680] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/servizi" className="btn-secondary">
              Vedi tutti i pacchetti
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1a1c1b]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <span className="caption text-[#d9fb06] mb-4 block">Risultati reali</span>
            <h2 className="heading-2">Cosa dicono i nostri clienti</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#302f2c] p-8 rounded-lg border border-[#3f4816]">
                <div className="inline-block px-3 py-1 bg-[#3f4816] rounded-full text-[#d9fb06] text-sm font-semibold mb-6">
                  {testimonial.result}
                </div>
                <p className="text-white text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="text-[#d9fb06] font-semibold">{testimonial.author}</p>
                  <p className="text-[#888680] text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#3f4816]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-center">
          <h2 className="heading-2 text-white mb-6">Pronto a far crescere<br />il tuo business?</h2>
          <p className="body-large text-[#888680] max-w-2xl mx-auto mb-10">
            Richiedi una valutazione gratuita del tuo marketing. Analizzeremo la tua situazione 
            e ti mostreremo le opportunità concrete di crescita.
          </p>
          <Link to="/valutazione" className="btn-primary text-base px-10 py-4">
            Richiedi valutazione gratuita
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
