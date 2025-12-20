import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Servizi = () => {
  const comparisonData = [
    { label: 'Per chi è', basic: 'Professionisti e piccoli business', premium: 'Business in crescita', gold: 'Aziende strutturate' },
    { label: 'Problema che risolve', basic: 'Disordine e mancanza di basi', premium: 'Risultati discontinui', gold: 'Mancanza di visione strategica' },
    { label: 'Livello di supporto', basic: 'Email entro 48h', premium: 'Prioritario entro 24h', gold: 'Dedicato entro 12h' },
    { label: 'Continuità', basic: 'Setup iniziale', premium: 'Gestione continuativa', gold: 'Strategia e ottimizzazione continua' },
    { label: 'Obiettivo', basic: 'Mettere ordine', premium: 'Generare risultati stabili', gold: 'Controllo e crescita scalabile' },
  ];

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="py-24 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[#c8f000] font-bold text-4xl md:text-5xl leading-tight mb-6">
              Servizi marketing strutturati<br />per ogni fase del business.
            </h1>
            <p className="text-[#9a9a96] text-lg leading-relaxed">
              Non tutti i business hanno bisogno dello stesso livello di marketing.<br />
              Per questo abbiamo creato tre pacchetti chiari, comparabili e orientati ai risultati.
            </p>
          </div>
        </div>
      </section>

      {/* TABELLA COMPARATIVA */}
      <section className="py-24 bg-[#1f211f]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <h2 className="text-white font-bold text-2xl md:text-3xl mb-12 text-center">
            Confronta i pacchetti
          </h2>
          
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left text-[#9a9a96] font-medium"></th>
                  <th className="p-6 text-center">
                    <div className="bg-[#2a2c29] rounded-t-xl p-6 border border-[#343633] border-b-0">
                      <span className="text-[#c8f000] font-bold text-2xl">Basic</span>
                    </div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="bg-[#2a2c29] rounded-t-xl p-6 border-2 border-[#c8f000] border-b-0 relative">
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c8f000] text-[#161716] text-xs font-bold px-3 py-1 rounded-full uppercase">
                        Più scelto
                      </span>
                      <span className="text-[#c8f000] font-bold text-2xl">Premium</span>
                    </div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="bg-[#2a2c29] rounded-t-xl p-6 border border-[#343633] border-b-0">
                      <span className="text-[#c8f000] font-bold text-2xl">Gold</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td className="p-4 text-[#9a9a96] font-medium text-sm">{row.label}</td>
                    <td className="p-4">
                      <div className={`bg-[#2a2c29] p-4 border-x border-[#343633] ${index === comparisonData.length - 1 ? 'border-b rounded-b-xl' : ''}`}>
                        <span className="text-white text-sm">{row.basic}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className={`bg-[#2a2c29] p-4 border-x-2 border-[#c8f000] ${index === comparisonData.length - 1 ? 'border-b-2 rounded-b-xl' : ''}`}>
                        <span className="text-white text-sm">{row.premium}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className={`bg-[#2a2c29] p-4 border-x border-[#343633] ${index === comparisonData.length - 1 ? 'border-b rounded-b-xl' : ''}`}>
                        <span className="text-white text-sm">{row.gold}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {['Basic', 'Premium', 'Gold'].map((pkg, pkgIndex) => (
              <div 
                key={pkg} 
                className={`bg-[#2a2c29] rounded-xl p-6 border ${pkg === 'Premium' ? 'border-2 border-[#c8f000] relative' : 'border-[#343633]'}`}
              >
                {pkg === 'Premium' && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c8f000] text-[#161716] text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Più scelto
                  </span>
                )}
                <h3 className="text-[#c8f000] font-bold text-xl mb-4">{pkg}</h3>
                <div className="space-y-3">
                  {comparisonData.map((row, index) => (
                    <div key={index} className="flex justify-between items-start gap-4">
                      <span className="text-[#6f716d] text-sm">{row.label}</span>
                      <span className="text-white text-sm text-right">
                        {pkgIndex === 0 ? row.basic : pkgIndex === 1 ? row.premium : row.gold}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETTAGLIO PACCHETTI */}
      <section className="py-24 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="space-y-16">
            
            {/* BASIC */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[#6f716d] text-sm uppercase tracking-wider mb-2 block">Pacchetto</span>
                <h3 className="text-[#c8f000] font-bold text-3xl mb-4">Basic</h3>
                <p className="text-white text-xl font-medium mb-6">Mettere ordine e basi solide</p>
                <p className="text-[#9a9a96] leading-relaxed mb-8">
                  Pensato per professionisti e piccoli business che vogliono smettere di improvvisare 
                  e costruire una base marketing chiara e funzionale.
                </p>
                <Link to="/valutazione" className="btn-secondary">
                  Attiva il pacchetto Basic
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
              <div className="bg-[#2a2c29] p-8 rounded-xl border border-[#343633]">
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4">Risolve:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">comunicazione disorganizzata</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">assenza di struttura</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">difficoltà a trasformare visibilità in contatti</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-[#343633]">
                  <h4 className="text-white font-semibold mb-2">Risultato atteso:</h4>
                  <p className="text-[#c8f000]">Un marketing più ordinato, comprensibile e utilizzabile.</p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-[#343633]"></div>

            {/* PREMIUM */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[#6f716d] text-sm uppercase tracking-wider mb-2 block">Pacchetto</span>
                <h3 className="text-[#c8f000] font-bold text-3xl mb-4">Premium</h3>
                <p className="text-white text-xl font-medium mb-6">Continuità e risultati nel tempo</p>
                <p className="text-[#9a9a96] leading-relaxed mb-8">
                  Ideale per chi vuole che il marketing lavori in modo costante, 
                  senza dover gestire tutto internamente.
                </p>
                <Link to="/valutazione" className="btn-primary">
                  Attiva il pacchetto Premium
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
              <div className="bg-[#2a2c29] p-8 rounded-xl border-2 border-[#c8f000]">
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4">Risolve:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">risultati discontinui</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">mancanza di strategia continuativa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">scarsa ottimizzazione</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-[#343633]">
                  <h4 className="text-white font-semibold mb-2">Risultato atteso:</h4>
                  <p className="text-[#c8f000]">Un sistema marketing stabile e migliorabile nel tempo.</p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-[#343633]"></div>

            {/* GOLD */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[#6f716d] text-sm uppercase tracking-wider mb-2 block">Pacchetto</span>
                <h3 className="text-[#c8f000] font-bold text-3xl mb-4">Gold</h3>
                <p className="text-white text-xl font-medium mb-6">Controllo, strategia e visione</p>
                <p className="text-[#9a9a96] leading-relaxed mb-8">
                  Pensato per aziende e professionisti che vogliono decisioni basate sui dati, 
                  strategia avanzata e massima priorità.
                </p>
                <Link to="/valutazione" className="btn-secondary">
                  Attiva il pacchetto Gold
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
              <div className="bg-[#2a2c29] p-8 rounded-xl border border-[#343633]">
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4">Risolve:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">mancanza di visione strategica</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">difficoltà a scalare</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">poca leggibilità dei risultati</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-[#343633]">
                  <h4 className="text-white font-semibold mb-2">Risultato atteso:</h4>
                  <p className="text-[#c8f000]">Marketing sotto controllo e decisioni più lucide.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GUIDA ALLA SCELTA */}
      <section className="py-24 bg-[#2a2c29]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[#c8f000] font-bold text-3xl mb-12">Quale pacchetto fa per te?</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-center gap-4">
                <span className="text-[#9a9a96]">Se devi mettere ordine</span>
                <ArrowRight className="text-[#c8f000]" size={20} />
                <span className="text-white font-semibold">Basic</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-[#9a9a96]">Se vuoi continuità</span>
                <ArrowRight className="text-[#c8f000]" size={20} />
                <span className="text-white font-semibold">Premium</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-[#9a9a96]">Se vuoi controllo e visione</span>
                <ArrowRight className="text-[#c8f000]" size={20} />
                <span className="text-white font-semibold">Gold</span>
              </div>
            </div>
            <Link to="/valutazione" className="btn-primary">
              Richiedi una valutazione gratuita
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Servizi;
