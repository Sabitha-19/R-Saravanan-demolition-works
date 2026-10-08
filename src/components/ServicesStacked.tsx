import React from 'react';
import { motion } from 'motion/react';
import { CONFIG, ServiceItem } from '../config.ts';
import { Building2, Hammer, Disc, Warehouse, Truck, Check } from 'lucide-react';

interface ServicesStackedProps {
  onSelectService: (serviceTitle: string) => void;
}

const getIcon = (id: string) => {
  switch (id) {
    case 'house-building-demolition':
      return <Building2 className="w-5 h-5 text-[#B8873F]" strokeWidth={1.5} />;
    case 'interior-strip-out':
      return <Hammer className="w-5 h-5 text-[#B8873F]" strokeWidth={1.5} />;
    case 'slab-rcc-cutting':
      return <Disc className="w-5 h-5 text-[#B8873F]" strokeWidth={1.5} />;
    case 'compound-wall-shed-removal':
      return <Warehouse className="w-5 h-5 text-[#B8873F]" strokeWidth={1.5} />;
    case 'debris-clearing-plot-cleaning':
      return <Truck className="w-5 h-5 text-[#B8873F]" strokeWidth={1.5} />;
    default:
      return <Building2 className="w-5 h-5 text-[#B8873F]" strokeWidth={1.5} />;
  }
};

export const ServicesStacked: React.FC<ServicesStackedProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="relative py-32 sm:py-44 px-5 sm:px-10 bg-[#0A0908] overflow-hidden"
      aria-label="Demolition Services"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B8873F] font-medium mb-4">
            02 / SERVICES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F1EA] tracking-[-0.04em] leading-[0.96] uppercase mb-6">
            CORE DISCIPLINES.
          </h2>
          <p className="text-sm sm:text-base text-[#9C948A] leading-relaxed max-w-xl">
            Controlled dismantling engineered for dense South Indian urban plots, sensitive shared structures, and rapid foundation handovers.
          </p>
        </div>

        {/* Sticky Stacked Cards */}
        <div className="space-y-12 sm:space-y-16">
          {CONFIG.services.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
              className="sticky top-24 sm:top-28 rounded-none bg-[#14110E] border border-[#2A241D] p-7 sm:p-12 lg:p-14 shadow-2xl shadow-black/80 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Side: Service Details (7 cols on lg) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-none bg-[#0A0908] border border-[#2A241D] flex items-center justify-center">
                        {getIcon(service.id)}
                      </div>
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B8873F]">
                        SERVICE {service.number}
                      </span>
                    </div>

                    <span className="text-[11px] uppercase tracking-wider text-[#9C948A] font-mono">
                      {service.equipment.split(',')[0]}
                    </span>
                  </div>

                  {/* Huge Uppercase Title */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#F5F1EA] tracking-[-0.03em] leading-[0.98] uppercase">
                    {service.title}
                  </h3>

                  <p className="text-xs uppercase tracking-[0.2em] text-[#B8873F] font-mono">
                    {service.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-[#9C948A] leading-relaxed max-w-xl">
                    {service.description}
                  </p>

                  {/* Scope Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-[#2A241D]">
                    {service.scope.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F1EA]/85">
                        <Check className="w-3.5 h-3.5 text-[#B8873F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link with tiny diagonal arrow ↗ */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F5F1EA] hover:text-[#B8873F] transition-colors cursor-pointer"
                    >
                      <span className="border-b border-[#2A241D] group-hover:border-[#B8873F] pb-1">
                        REQUEST A SITE VISIT HERE
                      </span>
                      <span className="text-[#B8873F] arrow-hover">↗</span>
                    </button>
                  </div>
                </div>

                {/* Right Side: Large Bronze-Toned Image Frame (Sharp Rectangle, No Rounded Corners) (5 cols on lg) */}
                <div className="lg:col-span-5">
                  <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-none bg-[#0A0908] border border-[#2A241D] overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover bronze-image select-none group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Image bottom tag */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0A0908] to-transparent flex items-center justify-between text-[10px] font-mono uppercase text-[#F5F1EA] tracking-widest">
                      <span>DOC / {service.number}</span>
                      <span className="text-[#B8873F]">FIELD PHOTO</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
