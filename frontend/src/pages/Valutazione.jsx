import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import { sectors, geoAreas, channels, objectives, budgets } from '../data/mock';
import { Checkbox } from '../components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { toast } from 'sonner';

const Valutazione = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    sector: '',
    geoArea: '',
    channels: [],
    objective: '',
    budget: '',
    mainProblem: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleChannelToggle = (channelId) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(channelId)
        ? prev.channels.filter((c) => c !== channelId)
        : [...prev.channels, channelId],
    }));
    if (errors.channels) {
      setErrors((prev) => ({ ...prev, channels: '' }));
    }
  };

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, privacyConsent: checked }));
    if (errors.privacyConsent) {
      setErrors((prev) => ({ ...prev, privacyConsent: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Campo obbligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'Campo obbligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email non valida';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Campo obbligatorio';
    if (!formData.sector) newErrors.sector = 'Seleziona un settore';
    if (!formData.geoArea) newErrors.geoArea = 'Seleziona un\'area geografica';
    if (formData.channels.length === 0) newErrors.channels = 'Seleziona almeno un canale';
    if (!formData.objective) newErrors.objective = 'Seleziona un obiettivo';
    if (!formData.budget) newErrors.budget = 'Seleziona un budget';
    if (!formData.mainProblem.trim()) newErrors.mainProblem = 'Campo obbligatorio';
    if (!formData.privacyConsent) newErrors.privacyConsent = 'Devi accettare per continuare';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Per favore, compila tutti i campi obbligatori');
      return;
    }

    setIsSubmitting(true);

    // Mock submission - will be replaced with actual API call
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Store form data in sessionStorage for confirmation page
      sessionStorage.setItem('valutazioneData', JSON.stringify(formData));
      
      toast.success('Richiesta inviata con successo!');
      navigate('/valutazione/conferma');
    } catch (error) {
      toast.error('Si è verificato un errore. Riprova.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl">
            <span className="text-[#9a9a96] text-sm uppercase tracking-wider mb-4 block">Valutazione Gratuita</span>
            <h1 className="text-[#c8f000] font-bold text-4xl md:text-5xl leading-tight mb-6">Analisi gratuita<br />del tuo marketing</h1>
            <p className="text-[#9a9a96] text-lg leading-relaxed">
              Compila il form e riceverai un report personalizzato con opportunità 
              e raccomandazioni concrete per il tuo business. Nessun impegno.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-[#161716]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="bg-[#2a2c29] p-8 rounded-xl border border-[#343633]">
                  <h3 className="text-xl font-bold text-white mb-6">Informazioni di contatto</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Nome e Cognome <span className="text-[#c8f000]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-[#161716] border rounded-lg text-white placeholder-[#6f716d] focus:outline-none focus:border-[#c8f000] transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-[#343633]'
                        }`}
                        placeholder="Mario Rossi"
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email <span className="text-[#c8f000]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-[#161716] border rounded-lg text-white placeholder-[#6f716d] focus:outline-none focus:border-[#c8f000] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-[#343633]'
                        }`}
                        placeholder="mario@azienda.ch"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Telefono <span className="text-[#6f716d] text-xs">(opzionale)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#161716] border border-[#343633] rounded-lg text-white placeholder-[#6f716d] focus:outline-none focus:border-[#c8f000] transition-colors"
                        placeholder="+41 00 000 00 00"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="bg-[#2a2c29] p-8 rounded-xl border border-[#343633]">
                  <h3 className="text-xl font-bold text-white mb-6">Informazioni aziendali</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Nome Azienda / Brand <span className="text-[#c8f000]">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-[#161716] border rounded-lg text-white placeholder-[#6f716d] focus:outline-none focus:border-[#c8f000] transition-colors ${
                          errors.companyName ? 'border-red-500' : 'border-[#343633]'
                        }`}
                        placeholder="La tua azienda SA"
                      />
                      {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Sito web <span className="text-[#6f716d] text-xs">(opzionale)</span>
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#161716] border border-[#343633] rounded-lg text-white placeholder-[#6f716d] focus:outline-none focus:border-[#c8f000] transition-colors"
                        placeholder="https://www.tuosito.ch"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Settore <span className="text-[#c8f000]">*</span>
                      </label>
                      <Select value={formData.sector} onValueChange={(value) => handleSelectChange('sector', value)}>
                        <SelectTrigger className={`w-full px-4 py-3 h-auto bg-[#161716] border rounded-lg text-white focus:ring-0 focus:ring-offset-0 ${
                          errors.sector ? 'border-red-500' : 'border-[#343633]'
                        }`}>
                          <SelectValue placeholder="Seleziona il settore" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2a2c29] border-[#343633]">
                          {sectors.map((sector) => (
                            <SelectItem key={sector} value={sector} className="text-white hover:bg-[#343633] focus:bg-[#343633] focus:text-[#c8f000]">
                              {sector}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.sector && <p className="text-red-500 text-sm mt-1">{errors.sector}</p>}
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Area geografica <span className="text-[#c8f000]">*</span>
                      </label>
                      <Select value={formData.geoArea} onValueChange={(value) => handleSelectChange('geoArea', value)}>
                        <SelectTrigger className={`w-full px-4 py-3 h-auto bg-[#161716] border rounded-lg text-white focus:ring-0 focus:ring-offset-0 ${
                          errors.geoArea ? 'border-red-500' : 'border-[#343633]'
                        }`}>
                          <SelectValue placeholder="Seleziona l'area" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2a2c29] border-[#343633]">
                          {geoAreas.map((area) => (
                            <SelectItem key={area} value={area} className="text-white hover:bg-[#343633] focus:bg-[#343633] focus:text-[#c8f000]">
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.geoArea && <p className="text-red-500 text-sm mt-1">{errors.geoArea}</p>}
                    </div>
                  </div>
                </div>

                {/* Marketing Info */}
                <div className="bg-[#2a2c29] p-8 rounded-xl border border-[#343633]">
                  <h3 className="text-xl font-bold text-white mb-6">Il tuo marketing attuale</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-4">
                        Canali attualmente utilizzati <span className="text-[#c8f000]">*</span>
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {channels.map((channel) => (
                          <button
                            key={channel.id}
                            type="button"
                            onClick={() => handleChannelToggle(channel.id)}
                            className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                              formData.channels.includes(channel.id)
                                ? 'bg-[#c8f000] text-[#161716] border-[#c8f000]'
                                : 'bg-[#161716] text-[#9a9a96] border-[#343633] hover:border-[#c8f000] hover:text-white'
                            }`}
                          >
                            {channel.label}
                          </button>
                        ))}
                      </div>
                      {errors.channels && <p className="text-red-500 text-sm mt-2">{errors.channels}</p>}
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Obiettivo principale <span className="text-[#c8f000]">*</span>
                        </label>
                        <Select value={formData.objective} onValueChange={(value) => handleSelectChange('objective', value)}>
                          <SelectTrigger className={`w-full px-4 py-3 h-auto bg-[#161716] border rounded-lg text-white focus:ring-0 focus:ring-offset-0 ${
                            errors.objective ? 'border-red-500' : 'border-[#343633]'
                          }`}>
                            <SelectValue placeholder="Cosa vuoi ottenere?" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#2a2c29] border-[#343633]">
                            {objectives.map((obj) => (
                              <SelectItem key={obj} value={obj} className="text-white hover:bg-[#343633] focus:bg-[#343633] focus:text-[#c8f000]">
                                {obj}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.objective && <p className="text-red-500 text-sm mt-1">{errors.objective}</p>}
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Budget marketing mensile <span className="text-[#c8f000]">*</span>
                        </label>
                        <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                          <SelectTrigger className={`w-full px-4 py-3 h-auto bg-[#161716] border rounded-lg text-white focus:ring-0 focus:ring-offset-0 ${
                            errors.budget ? 'border-red-500' : 'border-[#343633]'
                          }`}>
                            <SelectValue placeholder="Seleziona il budget" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#2a2c29] border-[#343633]">
                            {budgets.map((budget) => (
                              <SelectItem key={budget} value={budget} className="text-white hover:bg-[#343633] focus:bg-[#343633] focus:text-[#c8f000]">
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Qual è il tuo problema principale? <span className="text-[#c8f000]">*</span>
                      </label>
                      <textarea
                        name="mainProblem"
                        value={formData.mainProblem}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full px-4 py-3 bg-[#161716] border rounded-lg text-white placeholder-[#6f716d] focus:outline-none focus:border-[#c8f000] transition-colors resize-none ${
                          errors.mainProblem ? 'border-red-500' : 'border-[#343633]'
                        }`}
                        placeholder="Descrivi brevemente la sfida principale che vorresti affrontare con il marketing..."
                      />
                      {errors.mainProblem && <p className="text-red-500 text-sm mt-1">{errors.mainProblem}</p>}
                    </div>
                  </div>
                </div>

                {/* Privacy & Submit */}
                <div className="bg-[#2a2c29] p-8 rounded-xl border border-[#343633]">
                  <div className="flex items-start gap-3 mb-6">
                    <Checkbox
                      id="privacy"
                      checked={formData.privacyConsent}
                      onCheckedChange={handleCheckboxChange}
                      className={`mt-1 border-[#343633] data-[state=checked]:bg-[#c8f000] data-[state=checked]:border-[#c8f000] ${
                        errors.privacyConsent ? 'border-red-500' : ''
                      }`}
                    />
                    <label htmlFor="privacy" className="text-[#9a9a96] text-sm leading-relaxed cursor-pointer">
                      Acconsento al trattamento dei miei dati personali secondo la{' '}
                      <a href="/privacy" className="text-[#c8f000] hover:underline">Privacy Policy</a>{' '}
                      e accetto di essere ricontattato dal team Arxéon per la valutazione richiesta. <span className="text-[#c8f000]">*</span>
                    </label>
                  </div>
                  {errors.privacyConsent && <p className="text-red-500 text-sm mb-4">{errors.privacyConsent}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Invio in corso...
                      </span>
                    ) : (
                      <>
                        Richiedi valutazione gratuita
                        <ArrowRight className="ml-2" size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[#343633] p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-4">Cosa riceverai</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#c8f000] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#161716] text-sm font-bold">1</span>
                      </div>
                      <span className="text-[#9a9a96]">Analisi della tua situazione attuale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#c8f000] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#161716] text-sm font-bold">2</span>
                      </div>
                      <span className="text-[#9a9a96]">Identificazione delle opportunità</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#c8f000] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#161716] text-sm font-bold">3</span>
                      </div>
                      <span className="text-[#9a9a96]">Raccomandazioni concrete</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#c8f000] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#161716] text-sm font-bold">4</span>
                      </div>
                      <span className="text-[#9a9a96]">Proposta del pacchetto ideale</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#2a2c29] p-8 rounded-xl border border-[#343633]">
                  <div className="flex items-start gap-3 mb-4">
                    <Info className="text-[#c8f000] flex-shrink-0 mt-0.5" size={20} />
                    <h4 className="text-white font-semibold">Nessun impegno</h4>
                  </div>
                  <p className="text-[#9a9a96] text-sm">
                    La valutazione è completamente gratuita e senza impegno. 
                    Riceverai il report via email entro 48 ore lavorative.
                  </p>
                </div>

                <div className="bg-[#2a2c29] p-8 rounded-xl border border-[#343633]">
                  <p className="text-[#9a9a96] text-sm mb-4">
                    "La valutazione mi ha aperto gli occhi su opportunità che non avevo considerato."
                  </p>
                  <div>
                    <p className="text-[#c8f000] font-semibold text-sm">Sara T.</p>
                    <p className="text-[#6f716d] text-xs">E-commerce Fashion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Valutazione;
