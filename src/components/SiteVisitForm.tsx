import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONFIG } from '../config.ts';
import { MessageSquare, Mail, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface SiteVisitFormProps {
  preselectedCity?: string;
  preselectedWorkType?: string;
}

export const SiteVisitForm: React.FC<SiteVisitFormProps> = ({
  preselectedCity,
  preselectedWorkType,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: preselectedCity || 'CHENNAI',
    workType: preselectedWorkType || CONFIG.services[0].title,
    siteDetails: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  React.useEffect(() => {
    if (preselectedCity) {
      setFormData((prev) => ({ ...prev, city: preselectedCity }));
    }
  }, [preselectedCity]);

  React.useEffect(() => {
    if (preselectedWorkType) {
      setFormData((prev) => ({ ...prev, workType: preselectedWorkType }));
    }
  }, [preselectedWorkType]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'PLEASE PROVIDE YOUR NAME';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'PLEASE PROVIDE A VALID 10-DIGIT MOBILE NUMBER';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Mr. R. Saravanan,\n\nI would like to request an on-site inspection for demolition work:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Mobile: ${formData.phone}\n` +
      `• City / Territory: ${formData.city}\n` +
      `• Scope of Work: ${formData.workType}\n` +
      (formData.siteDetails ? `• Site Details: ${formData.siteDetails}\n` : '') +
      `\nPlease let me know your availability for a site inspection.`
    );
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Site Inspection Request - ${formData.city} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Dear Mr. R. Saravanan,\n\n` +
      `I am requesting a site inspection and written quote for demolition works:\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `City: ${formData.city}\n` +
      `Service: ${formData.workType}\n` +
      `Site Details:\n${formData.siteDetails || 'Inspection requested.'}\n\n` +
      `Regards,\n${formData.name}`
    );
    return `mailto:${CONFIG.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const waUrl = `https://wa.me/${CONFIG.contact.whatsAppRaw}?text=${generateWhatsAppMessage()}`;
      window.open(waUrl, '_blank');
    }, 450);
  };

  return (
    <section
      id="request-visit"
      className="relative py-32 sm:py-44 px-5 sm:px-10 bg-[#0A0908] overflow-hidden"
      aria-label="Request a Site Visit"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Information (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B8873F] font-medium">
              07 / REQUEST A SITE VISIT
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F1EA] tracking-[-0.04em] leading-[0.96] uppercase">
              DIRECT SITE AUDIT.
            </h2>

            <p className="text-sm sm:text-base text-[#9C948A] leading-relaxed max-w-md">
              Demolition is site-specific. Road accessibility, neighboring party walls, and salvage value are appraised in person before any commitment.
            </p>

            <div className="p-6 rounded-none bg-[#14110E] border-l-2 border-[#B8873F] border-y border-r border-[#2A241D] space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#B8873F] block">
                NO GUESSWORK PRICING
              </span>
              <p className="text-xs sm:text-sm text-[#F5F1EA] leading-relaxed">
                "{CONFIG.business.pricingStatement}"
              </p>
            </div>
          </div>

          {/* Right Column: Working Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="rounded-none bg-[#14110E] border border-[#2A241D] p-8 sm:p-12 shadow-2xl shadow-black/80">
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Animated Success State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-none bg-[#0A0908] border border-[#B8873F] flex items-center justify-center text-[#B8873F]">
                      <CheckCircle2 className="w-8 h-8 text-[#B8873F]" />
                    </div>

                    <div className="max-w-md">
                      <h3 className="font-display font-extrabold text-2xl text-[#F5F1EA] uppercase mb-2">
                        REQUEST PREPARED
                      </h3>
                      <p className="text-xs sm:text-sm text-[#9C948A] leading-relaxed mb-6">
                        WhatsApp has launched with your project details formatted directly for Mr. Saravanan. 
                        If WhatsApp did not open automatically, click below.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
                      <a
                        href={`https://wa.me/${CONFIG.contact.whatsAppRaw}?text=${generateWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-none bg-[#B8873F] text-[#0A0908] font-bold text-xs uppercase tracking-widest hover:bg-[#F5F1EA] transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 text-[#0A0908]" />
                        <span>OPEN WHATSAPP CHAT</span>
                      </a>

                      <a
                        href={generateMailtoUrl()}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-none bg-[#0A0908] border border-[#2A241D] hover:border-[#B8873F] text-[#F5F1EA] font-mono text-xs uppercase tracking-widest transition-colors"
                      >
                        <Mail className="w-4 h-4 text-[#B8873F]" />
                        <span>SEND VIA EMAIL</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="font-mono text-xs uppercase tracking-widest text-[#B8873F] hover:text-[#F5F1EA] mt-4 underline cursor-pointer"
                    >
                      SUBMIT ANOTHER REQUEST
                    </button>
                  </motion.div>
                ) : (
                  /* Form Fields (No Photo Upload!) */
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-widest text-[#B8873F] mb-2">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          placeholder="e.g. Suresh Kumar"
                          className={`w-full px-4 py-3.5 rounded-none bg-[#0A0908] border text-[#F5F1EA] placeholder-[#9C948A]/40 text-sm focus:outline-none transition-colors ${
                            errors.name
                              ? 'border-red-400 focus:border-red-400'
                              : 'border-[#2A241D] focus:border-[#B8873F]'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-widest text-[#B8873F] mb-2">
                          MOBILE NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3.5 rounded-none bg-[#0A0908] border text-[#F5F1EA] placeholder-[#9C948A]/40 text-sm focus:outline-none transition-colors ${
                            errors.phone
                              ? 'border-red-400 focus:border-red-400'
                              : 'border-[#2A241D] focus:border-[#B8873F]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* City */}
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-widest text-[#B8873F] mb-2">
                          CITY / TERRITORY
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-none bg-[#0A0908] border border-[#2A241D] text-[#F5F1EA] text-sm focus:outline-none focus:border-[#B8873F] cursor-pointer"
                        >
                          {CONFIG.cities.map((city) => (
                            <option key={city.id} value={city.name} className="bg-[#0A0908]">
                              {city.name} ({city.shortName})
                            </option>
                          ))}
                          <option value="OTHER REGION" className="bg-[#0A0908]">
                            OTHER TAMIL NADU REGION
                          </option>
                        </select>
                      </div>

                      {/* Type of Work */}
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-widest text-[#B8873F] mb-2">
                          TYPE OF WORK
                        </label>
                        <select
                          value={formData.workType}
                          onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-none bg-[#0A0908] border border-[#2A241D] text-[#F5F1EA] text-sm focus:outline-none focus:border-[#B8873F] cursor-pointer"
                        >
                          {CONFIG.services.map((svc) => (
                            <option key={svc.id} value={svc.title} className="bg-[#0A0908]">
                              {svc.title}
                            </option>
                          ))}
                          <option value="COMPLETE PLOT DOWN-TAKING & CLEAR" className="bg-[#0A0908]">
                            COMPLETE PLOT DOWN-TAKING & CLEAR
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Approximate Site Details (Text) */}
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-widest text-[#B8873F] mb-2">
                        APPROXIMATE SITE DETAILS (BUILT-UP AREA, STREET WIDTH, ADJOINING WALLS)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.siteDetails}
                        onChange={(e) => setFormData({ ...formData, siteDetails: e.target.value })}
                        placeholder="e.g. 2-storey house approx 2,200 sq ft, shared party wall on left, 20-foot road access..."
                        className="w-full px-4 py-3.5 rounded-none bg-[#0A0908] border border-[#2A241D] text-[#F5F1EA] placeholder-[#9C948A]/40 text-sm focus:outline-none focus:border-[#B8873F] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-10 py-4 sm:py-5 rounded-none bg-[#B8873F] hover:bg-[#F5F1EA] text-[#0A0908] font-bold text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer active:scale-95"
                      >
                        <span>{isSubmitting ? 'FORMATTING...' : 'SUBMIT REQUEST'}</span>
                        <ArrowRight className="w-4 h-4 text-[#0A0908]" />
                      </button>
                    </div>

                    {/* MANDATORY NOTES SPECIFIED IN PROMPT UNDER BUTTON */}
                    <div className="pt-4 border-t border-[#2A241D] space-y-2 text-xs text-[#9C948A]">
                      <p className="flex items-start gap-2">
                        <span className="text-[#B8873F] font-bold font-mono">1.</span>
                        <span>
                          After sending, share photos of the site on the WhatsApp chat so Mr. Saravanan can plan the visit.
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-[#B8873F] font-bold font-mono">2.</span>
                        <span className="text-[#F5F1EA]/90">
                          Every site is different. Mr. Saravanan visits the site and gives you a clear written quote.
                        </span>
                      </p>
                    </div>

                    {/* Mailto Fallback Link */}
                    <div className="pt-2">
                      <a
                        href={generateMailtoUrl()}
                        className="text-xs uppercase font-mono tracking-wider text-[#9C948A] hover:text-[#B8873F] underline inline-flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>PREFER EMAIL? CLICK FOR DIRECT MAILTO FALLBACK</span>
                      </a>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
