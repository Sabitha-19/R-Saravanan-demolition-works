import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CONFIG } from '../config.ts';

const STATEMENT =
  "WE TAKE IT DOWN WITHOUT COLLATERAL DAMAGE. IN DENSE STREETS AND BESIDE SHARED BRICKWORK, DEMOLITION IS A CONTROLLED STRUCTURAL CRAFT. R. SARAVANAN LEADS EVERY SITE AUDIT PERSONALLY ACROSS CHENNAI, PUDUCHERRY, VELLORE, AND ARNI — PROTECTING ADJOINING HOMES, SAFELY STRIPPING INTERNAL FLOORS, HAULING ALL RUBBLE, AND RETURNING COMPACTED LEVEL GROUND READY FOR YOUR ARCHITECT.";

const words = STATEMENT.split(' ');

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em] transition-opacity">
      {children}
    </motion.span>
  );
};

export const AboutStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.45'],
  });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 sm:py-44 px-5 sm:px-10 bg-[#0A0908] overflow-hidden"
      aria-label="About the Contractor"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Section Marker */}
        <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B8873F] font-medium mb-10 sm:mb-14">
          01 / ABOUT
        </div>

        {/* Very Large Headline Paragraph Filling Word by Word on Scroll */}
        <div className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#F5F1EA] leading-[1.08] tracking-[-0.03em] uppercase max-w-5xl mb-16 sm:mb-20">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>

        {/* Honest Credentials & Pricing Policy Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-10 border-t border-[#2A241D] items-start">
          <div className="md:col-span-5 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B8873F] font-medium block">
              ON-SITE ACCOUNTABILITY
            </span>
            <h3 className="font-display font-extrabold text-lg text-[#F5F1EA] uppercase">
              PROP. {CONFIG.business.proprietor}
            </h3>
            <p className="text-xs text-[#9C948A] leading-relaxed max-w-sm">
              Hands-on oversight on every critical structural cut. No commission brokers or remote subcontractors.
            </p>
          </div>

          <div className="md:col-span-7 p-6 rounded-none bg-[#14110E] border border-[#2A241D] space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B8873F] font-medium block">
              PRICING PROTOCOL
            </span>
            <p className="text-sm sm:text-base text-[#F5F1EA] leading-relaxed">
              "{CONFIG.business.pricingStatement}"
            </p>
            <p className="text-xs text-[#9C948A] pt-1">
              {CONFIG.placeholders.experienceProof}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
