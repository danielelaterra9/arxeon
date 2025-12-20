import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X } from 'lucide-react';

const Servizi = () => {
  const comparisonData = [
    { label: 'Analisi', basic: '1 al mese', premium: '2 al mese', gold: 'Continua' },
    { label: 'Consulenza strategica', basic: '1 call/mese (20-40 min)', premium: '2 call/mese (20-40 min)', gold: 'Supervisione continua' },
    { label: 'Attività operativa', basic: 'No', premium: 'Sì, 1 ambito', gold: 'Sì, senza limiti' },
    { label: 'Tempo di risposta', basic: 'Standard', premium: 'Entro 24h lavorative', gold: 'Entro 24h' },
    { label: 'Presa in carico', basic: '—', premium: 'Entro 48h lavorative', gold: 'Entro 24h' },
    { label: 'Accesso account', basic: 'No', premium: 'Sì, 1 categoria', gold: 'Sì, completo' },
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
          <p className="text-[#9a9a96] text-center text-lg mb-12 max-w-2xl mx-auto">
            La differenza tra i pacchetti non è cosa facciamo,<br />
            <span className="text-white">ma quanto profondamente entriamo nel tuo marketing.</span>
          </p>
          
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
                        <span className={`text-sm ${row.basic === 'No' || row.basic === '—' ? 'text-[#6f716d]' : 'text-white'}`}>{row.basic}</span>
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
                <p className="text-white text-xl font-medium mb-6">Supporto strategico per chi vuole restare autonomo</p>
                <Link to="/valutazione" className="btn-secondary">
                  Attiva il pacchetto Basic
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
              <div className="bg-[#2a2c29] p-8 rounded-xl border border-[#343633]">
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4">Contenuti:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">Analisi mensile del business e del marketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">Analisi strumenti usati dal cliente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">Analisi dati forniti dal cliente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">1 consulenza strategica mensile (20–40 minuti)</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-[#343633]">
                  <h4 className="text-[#6f716d] font-semibold mb-4">Esclusioni:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <X className="text-[#6f716d] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#6f716d]">Nessuna attività operativa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="text-[#6f716d] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#6f716d]">Nessuna gestione diretta</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="text-[#6f716d] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#6f716d]">Nessun accesso agli account</span>
                    </li>
                  </ul>
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
                <p className="text-white text-xl font-medium mb-6">Gestione guidata di un singolo strumento marketing</p>
                <Link to="/valutazione" className="btn-primary">
                  Attiva il pacchetto Premium
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
              <div className="bg-[#2a2c29] p-8 rounded-xl border-2 border-[#c8f000]">
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4">Contenuti:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">2 analisi mensili</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">2 consulenze mensili (20–40 minuti)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">Risposta entro 24h lavorative</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">Presa in carico operativa entro 48h lavorative</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-[#343633]">
                  <h4 className="text-white font-semibold mb-4">Ambito operativo:</h4>
                  <p className="text-[#c8f000]">Una sola categoria alla volta (sito, social, ads, email, SEO)</p>
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
                <p className="text-white text-xl font-medium mb-6">Collaboratore marketing dedicato al tuo business</p>
                <Link to="/valutazione" className="btn-secondary">
                  Attiva il pacchetto Gold
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
              <div className="bg-[#2a2c29] p-8 rounded-xl border border-[#343633]">
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4">Contenuti:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">Tutti i servizi Premium</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">Gestione operativa senza limitazione di categoria</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">Supervisione strategica continua</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">Risposta entro 24h</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#9a9a96]">Presa in carico entro 24h</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-[#343633]">
                  <h4 className="text-white font-semibold mb-4">Limitazione:</h4>
                  <p className="text-[#c8f000]">Un solo business, un solo settore</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GUIDA ALLA SCELTA */}
      <section className="py-24 bg-[#2a2c29]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[#c8f000] font-bold text-3xl mb-12 text-center">Guida alla scelta</h2>
            
            <div className="space-y-8 mb-12">
              <div className="bg-[#161716] p-6 rounded-xl border border-[#343633]">
                <div className="flex items-start gap-4">
                  <span className="text-[#c8f000] font-bold text-xl">Basic</span>
                  <div>
                    <p className="text-white font-medium mb-2">Per chi vuole restare autonomo</p>
                    <p className="text-[#9a9a96] text-sm">Ideale se gestisci tu il marketing ma vuoi una guida strategica esterna per prendere decisioni più lucide.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#161716] p-6 rounded-xl border border-[#c8f000]">
                <div className="flex items-start gap-4">
                  <span className="text-[#c8f000] font-bold text-xl">Premium</span>
                  <div>
                    <p className="text-white font-medium mb-2">Per chi vuole delegare un ambito specifico</p>
                    <p className="text-[#9a9a96] text-sm">Ideale se hai bisogno di supporto operativo su un singolo canale: social, sito, ads, email o SEO.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#161716] p-6 rounded-xl border border-[#343633]">
                <div className="flex items-start gap-4">
                  <span className="text-[#c8f000] font-bold text-xl">Gold</span>
                  <div>
                    <p className="text-white font-medium mb-2">Per chi vuole un collaboratore marketing dedicato</p>
                    <p className="text-[#9a9a96] text-sm">Ideale se vuoi delegare completamente la gestione marketing con supervisione strategica continua.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[#9a9a96] mb-6">Non sai quale pacchetto fa per te?</p>
              <Link to="/valutazione" className="btn-primary">
                Richiedi una valutazione gratuita
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Servizi;
