import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config.ts';
import { Phone, MessageSquare } from 'lucide-react';

export const TopBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0908]/90 backdrop-blur-md border-b border-[#2A241D] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10 flex items-center justify-between">
        {/* Wordmark Left (Wide heavy uppercase) */}
        <a
          href="#"
          className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B8873F]"
          aria-label={`${CONFIG.business.name} - Home`}
        >
          <span className="font-display font-extrabold text-xs sm:text-sm md:text-base tracking-[0.08em] text-[#F5F1EA] group-hover:text-[#B8873F] transition-colors uppercase">
            {CONFIG.business.name}
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#9C948A] uppercase font-mono hidden sm:inline">
            CHENNAI · PUDUCHERRY · VELLORE · ARNI
          </span>
        </a>

        {/* Right: "Call" pill with small circular icon + WhatsApp icon link */}
        <div className="flex items-center gap-3">
          {/* Call pill with small circular icon */}
          <a
            href={CONFIG.contact.telLink}
            className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#14110E] border border-[#2A241D] hover:border-[#B8873F] text-[#F5F1EA] hover:text-[#B8873F] transition-all text-xs tracking-[0.15em] uppercase font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B8873F]"
            aria-label={`Call ${CONFIG.business.proprietor}`}
          >
            <span className="w-5 h-5 rounded-full bg-[#2A241D] group-hover:bg-[#B8873F] flex items-center justify-center transition-colors">
              <Phone className="w-2.5 h-2.5 text-[#F5F1EA] group-hover:text-[#0A0908] transition-colors" />
            </span>
            <span className="hidden sm:inline">CALL {CONFIG.contact.phoneDisplay}</span>
            <span className="sm:hidden">CALL</span>
          </a>

          {/* WhatsApp Icon Link */}
          <a
            href={CONFIG.contact.whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#14110E] border border-[#2A241D] hover:border-[#B8873F] flex items-center justify-center text-[#B8873F] hover:text-[#F5F1EA] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B8873F]"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
