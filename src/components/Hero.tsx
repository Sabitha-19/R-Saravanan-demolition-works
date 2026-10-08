import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config.ts';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onRequestVisit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestVisit }) => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] max-h-[1150px] flex flex-col justify-end pb-12 sm:pb-20 px-5 sm:px-10 overflow-hidden bg-[#0A0908]"
      aria-label="Overview"
    >
      {/* Full-Bleed Dark Cinematic Image with Slow Zoom & Vignette */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1.08 }}
        transition={{ duration: 16, ease: 'easeOut' }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <img
          src={CONFIG.images.hero}
          alt="Controlled demolition machinery at dusk in Tamil Nadu"
          className="w-full h-full object-cover bronze-image object-center select-none"
          referrerPolicy="no-referrer"
        />

        {/* Soft Vignette Gradients that fade images into black */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/90 via-[#0A0908]/40 to-[#0A0908]/70" />
        <div className="absolute inset-0 bg-[#0A0908]/25" />
      </motion.div>

      {/* Hero Bottom Content */}
      <div className="relative z-10 max-w-[1320px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        {/* Bottom-Left: Bronze Label + Huge Headline (8 cols on lg) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Bronze Label Above */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B8873F] font-medium"
          >
            DEMOLITION SERVICES / CHENNAI · PUDUCHERRY · VELLORE · ARNI
          </motion.div>

          {/* Huge Headline: "WE CLEAR THE LAND. CAREFULLY." (Line-by-line reveal from mask) */}
          <h1 className="font-display font-extrabold text-[#F5F1EA] tracking-[-0.04em] leading-[0.95] text-[clamp(44px,7.5vw,132px)] uppercase max-w-4xl">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                WE CLEAR
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                THE LAND.
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[#B8873F]"
              >
                CAREFULLY.
              </motion.span>
            </div>
          </h1>
        </div>

        {/* Bottom-Right: Bronze Pill Button & Scroll Cue (4 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-end gap-6"
        >
          {/* Primary CTA: Bronze Pill Button (#B8873F) */}
          <button
            onClick={onRequestVisit}
            className="group px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#B8873F] hover:bg-[#F5F1EA] text-[#0A0908] font-bold text-xs uppercase tracking-[0.2em] shadow-2xl transition-all duration-300 cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8873F]"
          >
            <span>REQUEST A SITE VISIT</span>
          </button>

          {/* Scroll Cue */}
          <a
            href="#about"
            className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#9C948A] hover:text-[#F5F1EA] transition-colors"
          >
            <span>DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#B8873F] group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
