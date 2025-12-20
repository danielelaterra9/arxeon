import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { packages, faqs } from '../data/mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Servizi = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl">
            <span className="text-[#9a9a96] text-sm uppercase tracking-wider mb-4 block">Servizi & Pacchetti</span>
            <h1 className="text-[#c8f000] font-bold text-4xl md:text-5xl leading-tight mb-6">Scegli il pacchetto<br />giusto per te</h1>
            <p className="text-[#9a9a96] text-lg leading-relaxed">
              Tre soluzioni pensate per esigenze diverse. Dalla struttura di base alla strategia completa, 
              trova il piano che fa crescere il tuo business.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-xl border ${
                  pkg.highlighted
                    ? 'border-[#c8f000] bg-[#2a2c29] relative'
                    : 'border-[#343633] bg-[#2a2c29]/50'
                } p-8 flex flex-col`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#c8f000] text-[#161716] text-xs font-bold uppercase px-4 py-2 rounded-full">
                      Più scelto
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <span className="text-[#6f716d] text-sm uppercase tracking-wider block mb-2">{pkg.subtitle}</span>
                  <h3 className="text-3xl font-bold text-[#c8f000] mb-2">{pkg.name}</h3>
                  <p className="text-[#9a9a96] text-sm">{pkg.description}</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">CHF {pkg.price}</span>
                  <span className="text-[#6f716d]">{pkg.period}</span>
                </div>
                <div className="flex-grow">
                  <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Incluso:</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="text-[#c8f000] flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-[#9a9a96] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.notIncluded.length > 0 && (
                    <>
                      <p className="text-[#6f716d] font-semibold mb-4 text-sm uppercase tracking-wider">Non incluso:</p>
                      <ul className="space-y-3">
                        {pkg.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <X className="text-[#6f716d]/50 flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-[#6f716d]/50 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <div className="mt-8">
                  <Link
                    to="/valutazione"
                    className={`w-full text-center ${
                      pkg.highlighted ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-16 bg-[#2a2c29]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-white font-bold text-2xl mb-4">Non sai quale scegliere?</h3>
            <p className="text-[#9a9a96] mb-8">
              Richiedi una valutazione gratuita. Analizzeremo la tua situazione e ti consiglieremo 
              il pacchetto più adatto ai tuoi obiettivi e al tuo budget.
            </p>
            <Link to="/valutazione" className="btn-primary">
              Richiedi valutazione gratuita
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Detail */}
      <section className="py-24 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#9a9a96] text-sm uppercase tracking-wider mb-4 block">Dettagli</span>
            <h2 className="text-[#c8f000] font-bold text-3xl md:text-4xl">Cosa include ogni pacchetto</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#2a2c29] p-8 rounded-lg border border-[#343633]">
              <h4 className="text-[#c8f000] font-bold text-lg mb-4">Social Media Management</h4>
              <p className="text-[#9a9a96] text-sm">
                Gestione professionale dei tuoi profili social. Pianificazione editoriale, 
                creazione contenuti, grafiche professionali e community management.
              </p>
            </div>
            <div className="bg-[#2a2c29] p-8 rounded-lg border border-[#343633]">
              <h4 className="text-[#c8f000] font-bold text-lg mb-4">Advertising (Gold)</h4>
              <p className="text-[#9a9a96] text-sm">
                Gestione campagne Google Ads e Meta Ads. Setup, ottimizzazione continua, 
                A/B testing e reporting dettagliato. Budget pubblicitario escluso.
              </p>
            </div>
            <div className="bg-[#2a2c29] p-8 rounded-lg border border-[#343633]">
              <h4 className="text-[#c8f000] font-bold text-lg mb-4">CRM & Automazioni</h4>
              <p className="text-[#9a9a96] text-sm">
                Setup e configurazione CRM (HubSpot/Pipedrive). Automazioni email per lead 
                nurturing, welcome sequence e follow-up automatici.
              </p>
            </div>
            <div className="bg-[#2a2c29] p-8 rounded-lg border border-[#343633]">
              <h4 className="text-[#c8f000] font-bold text-lg mb-4">Email Marketing</h4>
              <p className="text-[#9a9a96] text-sm">
                Campagne email strategiche. Newsletter, promozioni, comunicazioni automatiche. 
                Segmentazione audience e analisi performance.
              </p>
            </div>
            <div className="bg-[#2a2c29] p-8 rounded-lg border border-[#343633]">
              <h4 className="text-[#c8f000] font-bold text-lg mb-4">SEO & Content (Gold)</h4>
              <p className="text-[#9a9a96] text-sm">
                Ottimizzazione on-page, keyword research, contenuti ottimizzati per i motori 
                di ricerca. Landing page dedicate per le campagne.
              </p>
            </div>
            <div className="bg-[#2a2c29] p-8 rounded-lg border border-[#343633]">
              <h4 className="text-[#c8f000] font-bold text-lg mb-4">Reporting & Analytics</h4>
              <p className="text-[#9a9a96] text-sm">
                Report personalizzati con metriche che contano. Dashboard KPI, analisi 
                performance e raccomandazioni strategiche basate sui dati.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#2a2c29]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#9a9a96] text-sm uppercase tracking-wider mb-4 block">FAQ</span>
              <h2 className="text-[#c8f000] font-bold text-3xl md:text-4xl mb-6">Domande frequenti</h2>
              <p className="text-[#9a9a96] mb-8">
                Non trovi la risposta che cerchi? Prenota una call di chiarimento strategico, 
                senza impegno.
              </p>
              <Link to="/contatti" className="btn-secondary">
                Prenota una call
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-[#161716] border border-[#343633] rounded-lg px-6 data-[state=open]:border-[#c8f000]"
                  >
                    <AccordionTrigger className="text-white hover:text-[#c8f000] text-left py-5 text-base font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#9a9a96] pb-5 text-sm leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#343633]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-center">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">Inizia oggi stesso</h2>
          <p className="text-[#9a9a96] text-lg max-w-2xl mx-auto mb-10">
            Il primo passo è semplice: richiedi una valutazione gratuita. 
            Ti mostreremo esattamente come possiamo aiutarti.
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

export default Servizi;
