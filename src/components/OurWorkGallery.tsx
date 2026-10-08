import React, { useState, useRef, useCallback } from 'react';
import { CONFIG } from '../config.ts';
import { ArrowLeftRight, MoveHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

export const OurWorkGallery: React.FC = () => {
  // If the array is empty, hide the section as requested
  if (!CONFIG.gallery || CONFIG.gallery.length === 0) {
    return null;
  }

  // Before & After Slider State
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Horizontal Gallery Strip Ref
  const galleryStripRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleSliderMove(e.clientX);
    }
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    if (!galleryStripRef.current) return;
    const amount = direction === 'left' ? -340 : 340;
    galleryStripRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section
      id="our-work"
      className="relative py-32 sm:py-44 px-5 sm:px-10 bg-[#0A0908] overflow-hidden"
      aria-label="Delivered Demolition Sites"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B8873F] font-medium mb-4">
            05 / OUR WORK
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F1EA] tracking-[-0.04em] leading-[0.96] uppercase mb-6">
            DELIVERED SITES.
          </h2>
          <p className="text-sm sm:text-base text-[#9C948A] leading-relaxed max-w-xl">
            Controlled down-taking and complete site clearing across commercial and residential plots in Tamil Nadu & Puducherry.
          </p>
        </div>

        {/* 1. BEFORE & AFTER INTERACTIVE DRAG SLIDER (Sharp Rectangles) */}
        <div className="mb-24">
          <div className="flex items-center justify-between font-mono text-xs text-[#B8873F] mb-4 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <MoveHorizontal className="w-3.5 h-3.5" />
              <span>BEFORE & AFTER SITE COMPARISON (DRAG HANDLE)</span>
            </span>
            <span className="text-[#9C948A]">
              SPLIT {Math.round(sliderPos)}% / {100 - Math.round(sliderPos)}%
            </span>
          </div>

          <div
            ref={sliderRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleSliderMove(e.clientX)}
            className="relative w-full h-[400px] sm:h-[520px] rounded-none bg-[#14110E] border border-[#2A241D] overflow-hidden cursor-ew-resize select-none shadow-2xl shadow-black/80"
          >
            {/* AFTER LAYER: Cleared Flat Handover Plot */}
            <div className="absolute inset-0">
              <img
                src="/images/card-debris.jpg"
                alt="Cleared plot handover"
                className="w-full h-full object-cover bronze-image select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]/40" />

              <div className="absolute bottom-6 right-6 text-right z-10 max-w-sm">
                <span className="px-3 py-1 bg-[#14110E]/90 border border-[#B8873F] font-mono text-[10px] uppercase text-[#F5F1EA] tracking-widest block mb-2 w-fit ml-auto">
                  AFTER / CLEARED PLOT HANDOVER
                </span>
                <p className="text-xs text-[#9C948A] leading-relaxed">
                  100% rubble carted. Sub-grade stones excavated and compacted flat for new foundation piling.
                </p>
              </div>
            </div>

            {/* BEFORE LAYER: Clipped by sliderPos */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="/images/card-house.jpg"
                alt="Initial dilapidated house before demolition"
                className="absolute inset-0 w-full h-full object-cover bronze-image select-none max-w-none"
                style={{ width: sliderRef.current?.clientWidth || '100%' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]/40" />

              <div className="absolute bottom-6 left-6 text-left z-10 max-w-sm">
                <span className="px-3 py-1 bg-[#14110E]/90 border border-[#2A241D] font-mono text-[10px] uppercase text-[#B8873F] tracking-widest block mb-2 w-fit">
                  BEFORE / INITIAL CONDITION
                </span>
                <p className="text-xs text-[#9C948A] leading-relaxed">
                  Old multi-floor structure with fragile party wall and tight municipal street access.
                </p>
              </div>
            </div>

            {/* Slider Dividing Vertical Line & Bronze Knob */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#B8873F] shadow-[0_0_12px_rgba(184,135,63,0.8)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-none bg-[#B8873F] text-[#0A0908] shadow-2xl flex items-center justify-center border border-[#0A0908]">
                <ArrowLeftRight className="w-4 h-4 text-[#0A0908]" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. HORIZONTAL DRAGGABLE STRIP OF SQUARE BRONZE-TONED IMAGE FRAMES */}
        <div>
          <div className="flex items-center justify-between font-mono text-xs text-[#B8873F] mb-6 uppercase tracking-widest">
            <span>SITE PHOTO ARCHIVE ({CONFIG.gallery.length} RECORDS)</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollGallery('left')}
                className="w-8 h-8 rounded-none bg-[#14110E] border border-[#2A241D] hover:border-[#B8873F] flex items-center justify-center text-[#F5F1EA] transition-colors cursor-pointer"
                aria-label="Previous gallery image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollGallery('right')}
                className="w-8 h-8 rounded-none bg-[#14110E] border border-[#2A241D] hover:border-[#B8873F] flex items-center justify-center text-[#F5F1EA] transition-colors cursor-pointer"
                aria-label="Next gallery image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Draggable Strip */}
          <div
            ref={galleryStripRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
          >
            {CONFIG.gallery.map((item) => (
              <div
                key={item.id}
                className="shrink-0 w-64 sm:w-80 rounded-none bg-[#14110E] border border-[#2A241D] overflow-hidden group snap-start"
              >
                {/* Square Image Frame */}
                <div className="relative w-full aspect-square overflow-hidden bg-[#0A0908]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover bronze-image group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-80" />
                </div>

                {/* Details */}
                <div className="p-5 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#B8873F] tracking-widest">
                    <span>{item.category}</span>
                    <span>{item.location}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#F5F1EA] uppercase truncate">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
