import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { CONFIG } from '../config.ts';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="how-we-work"
      ref={containerRef}
      className="relative py-32 sm:py-44 px-5 sm:px-10 bg-[#0A0908] overflow-hidden"
      aria-label="Execution Protocol"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky Left Column: Title (5 cols on lg) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-6">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B8873F] font-medium">
              03 / HOW WE WORK
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F1EA] tracking-[-0.04em] leading-[0.96] uppercase">
              CONTROLLED SEQUENCE.
            </h2>

            <p className="text-sm sm:text-base text-[#9C948A] leading-relaxed max-w-md">
              Demolition without haste. Five systematic phases ensure neighboring walls remain undisturbed, salvage value is credited, and the site is handed over clean.
            </p>

            <div className="p-6 rounded-none bg-[#14110E] border border-[#2A241D] max-w-md space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#B8873F] font-mono">
                <ShieldCheck className="w-4 h-4 text-[#B8873F]" />
                <span>BINDING WRITTEN QUOTE</span>
              </div>
              <p className="text-xs text-[#9C948A] leading-relaxed">
                "{CONFIG.business.pricingStatement}"
              </p>
            </div>
          </div>

          {/* Right Column: Steps Along Vertical Bronze Line (7 cols on lg) */}
          <div className="lg:col-span-7 relative pl-8 sm:pl-12">
            {/* Background Track Line */}
            <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-8 w-[1px] bg-[#2A241D]" />

            {/* Vertical Bronze Line That Fills on Scroll */}
            <motion.div
              style={{ scaleY }}
              className="absolute left-[11px] sm:left-[15px] top-4 bottom-8 w-[1.5px] bg-[#B8873F] origin-top shadow-[0_0_10px_rgba(184,135,63,0.6)]"
            />

            {/* 5 Steps */}
            <div className="space-y-12 sm:space-y-16">
              {CONFIG.processSteps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="relative group"
                >
                  {/* Step Marker Node (Sharp square) */}
                  <div className="absolute -left-8 sm:-left-12 top-0 -translate-x-1/2 w-6 h-6 rounded-none bg-[#0A0908] border border-[#B8873F] flex items-center justify-center">
                    <span className="font-mono text-[9px] text-[#B8873F] font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Box */}
                  <div className="p-7 sm:p-9 rounded-none bg-[#14110E] border border-[#2A241D] hover:border-[#B8873F] transition-colors space-y-4">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#F5F1EA] tracking-tight uppercase">
                        {step.title}
                      </h3>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#B8873F]">
                        PHASE {step.number}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#9C948A] leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-3 border-t border-[#2A241D] flex items-center gap-2 text-xs font-mono text-[#F5F1EA]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8873F] shrink-0" />
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
