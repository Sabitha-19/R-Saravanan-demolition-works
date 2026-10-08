import React from 'react';
import { CONFIG } from '../config.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative pt-24 sm:pt-36 pb-24 sm:pb-28 px-5 sm:px-10 bg-[#0A0908] border-t border-[#2A241D] overflow-hidden"
      aria-label="Contact and Brand Footer"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 sm:pb-28 border-b border-[#2A241D]">
          {/* Left Column: Bold Uppercase Line & Proprietor (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F1EA] tracking-[-0.03em] leading-[1.0] uppercase max-w-2xl">
              {CONFIG.business.footerStatement}
            </h2>

            <div className="pt-2">
              <span className="font-display font-bold text-lg sm:text-xl text-[#B8873F] tracking-wider uppercase block">
                {CONFIG.business.proprietor}
              </span>
              <span className="font-mono text-xs text-[#9C948A] uppercase tracking-widest block">
                PROPRIETOR & CHIEF SITE SUPERVISOR
              </span>
            </div>

            <p className="text-xs text-[#9C948A] max-w-md leading-relaxed pt-2">
              Controlled structural dismantling, selective floor strip-out, and clean soil handover across Northern Tamil Nadu & UT of Puducherry.
            </p>
          </div>

          {/* Right Column: "CONNECT WITH US" Block (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8873F] block">
              CONNECT WITH US
            </span>

            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <a
                  href={CONFIG.contact.telLink}
                  className="group inline-flex items-center gap-2 text-[#F5F1EA] hover:text-[#B8873F] font-display font-bold text-lg sm:text-xl tracking-tight uppercase transition-colors"
                >
                  <span>CALL 98423 45077</span>
                  <span className="text-[#B8873F] arrow-hover">↗</span>
                </a>
                <span className="block text-[11px] font-mono text-[#9C948A]">
                  Direct line: {CONFIG.contact.phoneDisplay}
                </span>
              </div>

              <div>
                <a
                  href={CONFIG.contact.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[#F5F1EA] hover:text-[#B8873F] font-display font-bold text-base sm:text-lg tracking-tight uppercase transition-colors"
                >
                  <span>WHATSAPP</span>
                  <span className="text-[#B8873F] arrow-hover">↗</span>
                </a>
                <span className="block text-[11px] font-mono text-[#9C948A]">
                  Instant site coordination
                </span>
              </div>

              <div>
                <a
                  href={`mailto:${CONFIG.contact.email}`}
                  className="group inline-flex items-center gap-2 text-[#F5F1EA] hover:text-[#B8873F] font-display font-bold text-base sm:text-lg tracking-tight uppercase transition-colors"
                >
                  <span>EMAIL</span>
                  <span className="text-[#B8873F] arrow-hover">↗</span>
                </a>
                <span className="block text-[11px] font-mono text-[#9C948A]">
                  {CONFIG.contact.email}
                </span>
              </div>
            </div>

            {/* Operating Cities */}
            <div className="pt-4 border-t border-[#2A241D]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#B8873F] block mb-2">
                SERVICE HUBS
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-[#9C948A]">
                <span>CHENNAI</span>
                <span className="text-[#2A241D]">/</span>
                <span>PUDUCHERRY</span>
                <span className="text-[#2A241D]">/</span>
                <span>VELLORE</span>
                <span className="text-[#2A241D]">/</span>
                <span>ARNI</span>
              </div>
            </div>

            {/* Quick Index */}
            <div className="pt-4 border-t border-[#2A241D]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#B8873F] block mb-2">
                QUICK DIRECTORY
              </span>
              <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-[#9C948A]">
                <a href="#services" className="hover:text-[#F5F1EA] transition-colors">02 SERVICES</a>
                <span className="text-[#2A241D]">·</span>
                <a href="#how-we-work" className="hover:text-[#F5F1EA] transition-colors">03 PROCESS</a>
                <span className="text-[#2A241D]">·</span>
                <a href="#where-we-work" className="hover:text-[#F5F1EA] transition-colors">04 CITIES</a>
                <span className="text-[#2A241D]">·</span>
                <a href="#faq" className="hover:text-[#F5F1EA] text-[#B8873F] transition-colors">06 PROTOCOLS & FAQ</a>
                <span className="text-[#2A241D]">·</span>
                <a href="#request-visit" className="hover:text-[#F5F1EA] transition-colors">07 SITE AUDIT</a>
              </div>
            </div>
          </div>
        </div>

        {/* Very Bottom: Copyright & BACK TO TOP ↗ */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9C948A]">
          <p>
            © 2025 {CONFIG.business.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#F5F1EA] hover:text-[#B8873F] transition-colors cursor-pointer uppercase tracking-wider"
          >
            <span>BACK TO TOP</span>
            <span className="text-[#B8873F] arrow-hover">↗</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
