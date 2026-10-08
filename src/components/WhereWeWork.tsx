import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONFIG, CityItem } from '../config.ts';

interface WhereWeWorkProps {
  onSelectCity: (cityName: string) => void;
}

export const WhereWeWork: React.FC<WhereWeWorkProps> = ({ onSelectCity }) => {
  const [activeCityId, setActiveCityId] = useState<string>('chennai');

  const activeCity =
    CONFIG.cities.find((c) => c.id === activeCityId) || CONFIG.cities[0];

  const handleCitySelect = (city: CityItem) => {
    onSelectCity(city.name);
    const formEl = document.getElementById('request-visit');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="where-we-work"
      className="relative py-32 sm:py-44 px-5 sm:px-10 bg-[#0A0908] overflow-hidden"
      aria-label="Service Territories"
    >
      {/* Background Image That Fades in based on hovered/tapped city */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.28, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={activeCity.image}
              alt={activeCity.name}
              className="w-full h-full object-cover bronze-image object-center select-none"
              referrerPolicy="no-referrer"
            />
            {/* Dark vignettes */}
            <div className="absolute inset-0 bg-[#0A0908]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B8873F] font-medium mb-4">
            04 / WHERE WE WORK
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F1EA] tracking-[-0.04em] leading-[0.96] uppercase mb-6">
            OPERATIONAL TERRITORIES.
          </h2>
          <p className="text-sm sm:text-base text-[#9C948A] leading-relaxed max-w-xl">
            Heavy breaker machinery, carting tippers, and demolition crews deployed directly across four regional corridors.
          </p>
        </div>

        {/* Four Huge Uppercase City Names in a List */}
        <div className="divide-y divide-[#2A241D] border-y border-[#2A241D]">
          {CONFIG.cities.map((city, idx) => {
            const isSelected = activeCityId === city.id;

            return (
              <div
                key={city.id}
                onMouseEnter={() => setActiveCityId(city.id)}
                onClick={() => setActiveCityId(city.id)}
                className={`py-8 sm:py-12 px-2 transition-colors duration-300 cursor-pointer ${
                  isSelected ? 'bg-[#14110E]/40' : 'hover:bg-[#14110E]/20'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* City Index & Name */}
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-mono text-xs sm:text-sm text-[#B8873F]">
                      0{idx + 1} /
                    </span>
                    <h3
                      className={`font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] uppercase transition-colors ${
                        isSelected ? 'text-[#F5F1EA]' : 'text-[#9C948A]/50 hover:text-[#F5F1EA]'
                      }`}
                    >
                      {city.name}
                    </h3>
                    <span className="font-mono text-xs sm:text-sm text-[#B8873F]/70 hidden sm:inline">
                      ({city.nativeName})
                    </span>
                  </div>

                  {/* Right side: Description & Action */}
                  <div className="lg:max-w-md flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
                    <p className="text-xs text-[#9C948A] leading-relaxed">
                      {city.description}
                    </p>

                    {/* "REQUEST A SITE VISIT HERE ↗" button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCitySelect(city);
                      }}
                      className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F5F1EA] hover:text-[#B8873F] transition-colors whitespace-nowrap cursor-pointer pt-1"
                    >
                      <span className="border-b border-[#2A241D] group-hover:border-[#B8873F] pb-0.5">
                        REQUEST A SITE VISIT HERE
                      </span>
                      <span className="text-[#B8873F] arrow-hover">↗</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
