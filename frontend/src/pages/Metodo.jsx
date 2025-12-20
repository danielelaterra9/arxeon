import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Eye, BarChart3, Users } from 'lucide-react';
import { methodSteps, stats } from '../data/mock';

const Metodo = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl">
            <span className="text-[#9a9a96] text-sm uppercase tracking-wider mb-4 block">Il Nostro Metodo</span>
            <h1 className="text-[#c8f000] font-bold text-4xl md:text-5xl leading-tight mb-6">Strategia chiara,<br />risultati misurabili</h1>
            <p className="text-[#9a9a96] text-lg leading-relaxed">
              Niente magia, niente promesse vuote. Un processo strutturato che trasforma 
              i tuoi investimenti marketing in crescita reale e documentata.
            </p>
          </div>
        </div>
      </section>

      {/* Method Steps */}
      <section className="py-24 bg-[#2a2c29]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < methodSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-[#343633]" />
                )}
                <div className="text-6xl font-black text-[#343633] mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-[#c8f000] mb-4">{step.title}</h3>
                <p className="text-[#9a9a96]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#9a9a96] text-sm uppercase tracking-wider mb-4 block">Perché sceglierci</span>
            <h2 className="text-[#c8f000] font-bold text-3xl md:text-4xl">Cosa ci distingue</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2a2c29] p-10 rounded-xl border border-[#343633] hover:border-[#c8f000] transition-colors">
              <div className="w-14 h-14 rounded-xl bg-[#343633] flex items-center justify-center mb-6">
                <Eye className="text-[#c8f000]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Trasparenza totale</h3>
              <p className="text-[#9a9a96] leading-relaxed">
                Sai sempre dove vanno i tuoi soldi. Report chiari, metriche comprensibili, 
                nessun gergo tecnico per confonderti. Ogni euro investito è tracciabile.
              </p>
            </div>
            <div className="bg-[#2a2c29] p-10 rounded-xl border border-[#343633] hover:border-[#c8f000] transition-colors">
              <div className="w-14 h-14 rounded-xl bg-[#343633] flex items-center justify-center mb-6">
                <BarChart3 className="text-[#c8f000]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Decisioni data-driven</h3>
              <p className="text-[#9a9a96] leading-relaxed">
                Ogni scelta strategica è basata sui dati, non sulle opinioni. 
                A/B testing, analisi performance, ottimizzazione continua basata su risultati reali.
              </p>
            </div>
            <div className="bg-[#2a2c29] p-10 rounded-xl border border-[#343633] hover:border-[#c8f000] transition-colors">
              <div className="w-14 h-14 rounded-xl bg-[#343633] flex items-center justify-center mb-6">
                <Shield className="text-[#c8f000]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Niente contratti capestro</h3>
              <p className="text-[#9a9a96] leading-relaxed">
                Flessibilità totale. Puoi cambiare pacchetto o disdire con 30 giorni di preavviso. 
                Restiamo perché portiamo risultati, non perché ti abbiamo vincolato.
              </p>
            </div>
            <div className="bg-[#2a2c29] p-10 rounded-xl border border-[#343633] hover:border-[#c8f000] transition-colors">
              <div className="w-14 h-14 rounded-xl bg-[#343633] flex items-center justify-center mb-6">
                <Users className="text-[#c8f000]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Team dedicato</h3>
              <p className="text-[#9a9a96] leading-relaxed">
                Non sei un numero. Hai un account manager dedicato che conosce il tuo business, 
                i tuoi obiettivi e la tua storia. Comunicazione diretta, risposte rapide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Detail */}
      <section className="py-24 bg-[#2a2c29]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9a9a96] text-sm uppercase tracking-wider mb-4 block">Come lavoriamo</span>
              <h2 className="text-[#c8f000] font-bold text-3xl md:text-4xl mb-8">Un processo<br />collaudato</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c8f000] flex items-center justify-center flex-shrink-0 text-[#161716] font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Kick-off call</h4>
                    <p className="text-[#9a9a96] text-sm">
                      Ci conosciamo, capiamo il tuo business, definiamo obiettivi e aspettative.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c8f000] flex items-center justify-center flex-shrink-0 text-[#161716] font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Audit & Analisi</h4>
                    <p className="text-[#9a9a96] text-sm">
                      Analizziamo il tuo marketing attuale, i competitor e il mercato.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c8f000] flex items-center justify-center flex-shrink-0 text-[#161716] font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Piano strategico</h4>
                    <p className="text-[#9a9a96] text-sm">
                      Ti presentiamo la strategia, il piano d'azione e i KPI da raggiungere.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c8f000] flex items-center justify-center flex-shrink-0 text-[#161716] font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Esecuzione</h4>
                    <p className="text-[#9a9a96] text-sm">
                      Implementiamo le attività con report settimanali e call periodiche.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c8f000] flex items-center justify-center flex-shrink-0 text-[#161716] font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Ottimizzazione continua</h4>
                    <p className="text-[#9a9a96] text-sm">
                      Analizziamo i risultati e ottimizziamo costantemente per migliorare le performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#161716] p-10 rounded-xl border border-[#343633]">
              <h3 className="text-2xl font-bold text-[#c8f000] mb-8">I nostri numeri</h3>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-[#6f716d] text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#9a9a96] text-sm uppercase tracking-wider mb-4 block">La nostra promessa</span>
            <h2 className="text-[#c8f000] font-bold text-3xl md:text-4xl mb-6">Risultati o niente</h2>
            <p className="text-[#9a9a96] text-lg leading-relaxed mb-10">
              Non promettiamo miracoli. Promettiamo impegno, trasparenza e un lavoro serio 
              orientato ai tuoi obiettivi. I risultati parlano da soli: il 98% dei nostri clienti 
              rinnova il contratto, non perché è vincolato, ma perché vede il valore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/valutazione" className="btn-primary">
                Richiedi valutazione gratuita
                <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link to="/servizi" className="btn-secondary">
                Vedi i pacchetti
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#343633]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-center">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">Vuoi saperne di più?</h2>
          <p className="text-[#9a9a96] text-lg max-w-2xl mx-auto mb-10">
            Prenota una call di chiarimento strategico. Ti spiegheremo nel dettaglio 
            come possiamo aiutare il tuo business a crescere.
          </p>
          <Link to="/contatti" className="btn-primary text-base px-10 py-4">
            Prenota una call
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Metodo;
