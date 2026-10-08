import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONFIG, FAQItem } from '../config.ts';
import {
  ShieldCheck,
  FileText,
  Truck,
  HelpCircle,
  Search,
  X,
  ChevronDown,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  HardHat,
} from 'lucide-react';

interface FAQSectionProps {
  onRequestVisit?: () => void;
}

type CategoryFilter = 'all' | 'safety' | 'permits' | 'debris';

export const FAQSection: React.FC<FAQSectionProps> = ({ onRequestVisit }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-party-wall']));

  // Filter items based on activeCategory and searchQuery
  const filteredFaqs = useMemo(() => {
    return CONFIG.faq.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const inQuestion = item.question.toLowerCase().includes(query);
      const inAnswer = item.answer.toLowerCase().includes(query);
      const inTakeaway = item.keyTakeaway.toLowerCase().includes(query);
      const inBullets = item.bullets.some((b) => b.toLowerCase().includes(query));

      return inQuestion || inAnswer || inTakeaway || inBullets;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(filteredFaqs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  const allCount = CONFIG.faq.length;
  const safetyCount = CONFIG.faq.filter((f) => f.category === 'safety').length;
  const permitsCount = CONFIG.faq.filter((f) => f.category === 'permits').length;
  const debrisCount = CONFIG.faq.filter((f) => f.category === 'debris').length;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'safety':
        return <ShieldCheck className="w-3.5 h-3.5 text-[#B8873F]" />;
      case 'permits':
        return <FileText className="w-3.5 h-3.5 text-[#B8873F]" />;
      case 'debris':
        return <Truck className="w-3.5 h-3.5 text-[#B8873F]" />;
      default:
        return <HelpCircle className="w-3.5 h-3.5 text-[#B8873F]" />;
    }
  };

  const handleAuditClick = () => {
    if (onRequestVisit) {
      onRequestVisit();
    } else {
      const el = document.getElementById('request-visit');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="faq"
      className="relative py-32 sm:py-44 px-5 sm:px-10 bg-[#0A0908] overflow-hidden"
      aria-label="Frequently Asked Questions: Safety Standards, Demolition Permits, Debris Removal"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B8873F] font-medium mb-4 flex items-center gap-2">
            <span>06 / PROTOCOLS & FAQ</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F1EA] tracking-[-0.04em] leading-[0.96] uppercase mb-6">
            SAFETY, PERMITS & DEBRIS PROCEDURES.
          </h2>

          <p className="text-sm sm:text-base text-[#9C948A] leading-relaxed max-w-2xl">
            Controlled demolition demands engineering discipline. Review our verified operating standards for shared party-wall decoupling, municipal authorizations (GCC, DTCP, PPA), and regulated debris carting across Tamil Nadu and Puducherry.
          </p>
        </div>

        {/* Filter Tabs & Search Bar Container */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#2A241D] mb-10">
          {/* Category Filter Pills (Zero border radius, architectural styling) */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2.5 rounded-none text-xs font-mono uppercase tracking-wider flex items-center gap-2 border transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#B8873F] text-[#0A0908] border-[#B8873F] font-bold'
                  : 'bg-[#14110E] text-[#9C948A] border-[#2A241D] hover:border-[#B8873F] hover:text-[#F5F1EA]'
              }`}
            >
              <span>ALL TOPICS</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 ${
                  activeCategory === 'all' ? 'bg-[#0A0908]/20 text-[#0A0908]' : 'bg-[#2A241D] text-[#9C948A]'
                }`}
              >
                {allCount}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('safety')}
              className={`px-4 py-2.5 rounded-none text-xs font-mono uppercase tracking-wider flex items-center gap-2 border transition-colors cursor-pointer ${
                activeCategory === 'safety'
                  ? 'bg-[#B8873F] text-[#0A0908] border-[#B8873F] font-bold'
                  : 'bg-[#14110E] text-[#9C948A] border-[#2A241D] hover:border-[#B8873F] hover:text-[#F5F1EA]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SAFETY STANDARDS</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 ${
                  activeCategory === 'safety' ? 'bg-[#0A0908]/20 text-[#0A0908]' : 'bg-[#2A241D] text-[#9C948A]'
                }`}
              >
                {safetyCount}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('permits')}
              className={`px-4 py-2.5 rounded-none text-xs font-mono uppercase tracking-wider flex items-center gap-2 border transition-colors cursor-pointer ${
                activeCategory === 'permits'
                  ? 'bg-[#B8873F] text-[#0A0908] border-[#B8873F] font-bold'
                  : 'bg-[#14110E] text-[#9C948A] border-[#2A241D] hover:border-[#B8873F] hover:text-[#F5F1EA]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>DEMOLITION PERMITS</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 ${
                  activeCategory === 'permits' ? 'bg-[#0A0908]/20 text-[#0A0908]' : 'bg-[#2A241D] text-[#9C948A]'
                }`}
              >
                {permitsCount}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('debris')}
              className={`px-4 py-2.5 rounded-none text-xs font-mono uppercase tracking-wider flex items-center gap-2 border transition-colors cursor-pointer ${
                activeCategory === 'debris'
                  ? 'bg-[#B8873F] text-[#0A0908] border-[#B8873F] font-bold'
                  : 'bg-[#14110E] text-[#9C948A] border-[#2A241D] hover:border-[#B8873F] hover:text-[#F5F1EA]'
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>DEBRIS REMOVAL</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 ${
                  activeCategory === 'debris' ? 'bg-[#0A0908]/20 text-[#0A0908]' : 'bg-[#2A241D] text-[#9C948A]'
                }`}
              >
                {debrisCount}
              </span>
            </button>
          </div>

          {/* Search & Bulk Expand/Collapse Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[260px] sm:min-w-[300px]">
              <Search className="w-4 h-4 text-[#9C948A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search party walls, GCC permits, tippers..."
                className="w-full bg-[#14110E] border border-[#2A241D] pl-10 pr-9 py-2.5 text-xs text-[#F5F1EA] placeholder-[#9C948A]/50 focus:outline-none focus:border-[#B8873F] transition-colors rounded-none font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9C948A] hover:text-[#F5F1EA]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Expand / Collapse All */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={expandAll}
                className="flex-1 sm:flex-initial px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-[#9C948A] hover:text-[#F5F1EA] border border-[#2A241D] bg-[#14110E] hover:border-[#B8873F] transition-colors cursor-pointer"
              >
                EXPAND ALL
              </button>
              <button
                onClick={collapseAll}
                className="flex-1 sm:flex-initial px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-[#9C948A] hover:text-[#F5F1EA] border border-[#2A241D] bg-[#14110E] hover:border-[#B8873F] transition-colors cursor-pointer"
              >
                COLLAPSE ALL
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="mb-6 text-xs font-mono text-[#B8873F] flex items-center justify-between">
            <span>
              SHOWING {filteredFaqs.length} OF {allCount} PROTOCOLS FOR "{searchQuery}"
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="underline hover:text-[#F5F1EA] cursor-pointer"
            >
              Reset filter
            </button>
          </div>
        )}

        {/* No Results Fallback */}
        {filteredFaqs.length === 0 && (
          <div className="p-12 text-center bg-[#14110E] border border-[#2A241D] space-y-4 my-8">
            <HelpCircle className="w-10 h-10 text-[#B8873F] mx-auto opacity-70" />
            <h3 className="font-display font-bold text-xl text-[#F5F1EA] uppercase">
              NO MATCHING PROTOCOL FOUND
            </h3>
            <p className="text-xs sm:text-sm text-[#9C948A] max-w-md mx-auto">
              We couldn't find an answer matching "{searchQuery}". For bespoke structural specifications or site questions, speak directly with Mr. Saravanan.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-5 py-2.5 bg-[#B8873F] text-[#0A0908] text-xs font-mono uppercase font-bold cursor-pointer"
              >
                VIEW ALL QUESTIONS
              </button>
            </div>
          </div>
        )}

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((item) => {
            const isOpen = openIds.has(item.id);

            return (
              <div
                key={item.id}
                className={`transition-colors duration-200 border ${
                  isOpen
                    ? 'border-[#B8873F] bg-[#14110E]'
                    : 'border-[#2A241D] bg-[#14110E]/70 hover:border-[#B8873F]/50'
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 sm:gap-6 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B8873F]"
                >
                  <div className="flex items-start gap-4 sm:gap-6 flex-1">
                    {/* Number & Category Badge */}
                    <div className="flex flex-col items-start gap-1.5 shrink-0 pt-0.5">
                      <span className="font-mono text-xs font-bold text-[#B8873F]">
                        {item.number}
                      </span>
                      <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-mono tracking-widest uppercase text-[#9C948A] px-1.5 py-0.5 bg-[#0A0908] border border-[#2A241D]">
                        {getCategoryIcon(item.category)}
                        <span>{item.category.slice(0, 7)}</span>
                      </span>
                    </div>

                    {/* Question Title */}
                    <div className="space-y-1.5 flex-1">
                      <div className="sm:hidden flex items-center gap-1.5 text-[9px] font-mono tracking-widest uppercase text-[#B8873F] mb-1">
                        {getCategoryIcon(item.category)}
                        <span>{item.categoryLabel}</span>
                      </div>
                      <h3
                        className={`font-display font-bold text-base sm:text-xl tracking-tight uppercase transition-colors ${
                          isOpen ? 'text-[#F5F1EA]' : 'text-[#F5F1EA]/90 hover:text-[#F5F1EA]'
                        }`}
                      >
                        {item.question}
                      </h3>
                      {!isOpen && (
                        <p className="text-xs text-[#9C948A] line-clamp-1 hidden md:block pt-1">
                          {item.keyTakeaway}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Toggle Indicator Icon */}
                  <div
                    className={`shrink-0 w-8 h-8 rounded-none border flex items-center justify-center transition-all duration-300 mt-0.5 ${
                      isOpen
                        ? 'bg-[#B8873F] border-[#B8873F] text-[#0A0908]'
                        : 'bg-[#0A0908] border-[#2A241D] text-[#9C948A] group-hover:text-[#F5F1EA]'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#2A241D] sm:ml-16">
                        {/* Detailed Answer */}
                        <p className="text-sm sm:text-base text-[#9C948A] leading-relaxed mb-6 pt-3">
                          {item.answer}
                        </p>

                        {/* Highlight Key Takeaway Callout */}
                        <div className="p-4 sm:p-5 bg-[#0A0908] border-l-2 border-[#B8873F] border-y border-r border-[#2A241D] mb-6">
                          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#B8873F] block mb-1">
                            ENGINEERING STANDARD / PROTOCOL
                          </span>
                          <p className="font-display font-medium text-xs sm:text-sm text-[#F5F1EA] tracking-tight uppercase">
                            {item.keyTakeaway}
                          </p>
                        </div>

                        {/* Deliverables / Checklist Points */}
                        <div className="space-y-2.5">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9C948A] block">
                            ON-SITE EXECUTION CHECKS
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {item.bullets.map((bullet, bIdx) => (
                              <div
                                key={bIdx}
                                className="p-3 bg-[#0A0908]/60 border border-[#2A241D] flex items-start gap-2.5"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8873F] shrink-0 mt-0.5" />
                                <span className="text-xs text-[#9C948A] leading-normal font-sans">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card: Direct consultation with Mr. Saravanan */}
        <div className="mt-16 p-8 sm:p-12 bg-[#14110E] border border-[#2A241D] relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#B8873F]">
                <HardHat className="w-4 h-4 text-[#B8873F]" />
                <span>UNSURE ABOUT YOUR SITE CONDITIONS?</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F1EA] uppercase tracking-tight">
                EVERY STRUCTURE IS DIFFERENT. GET A PERSONAL ON-SITE AUDIT.
              </h3>
              <p className="text-xs sm:text-sm text-[#9C948A] leading-relaxed max-w-2xl">
                Whether you have shared boundary walls in Chennai, heritage setbacks in Puducherry, heavy rock foundations in Vellore, or residential clearings in Arni—Mr. Saravanan will personally inspect structural loads, utility disconnections, and road access.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={handleAuditClick}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#B8873F] text-[#0A0908] hover:bg-[#c9954a] transition-colors font-display font-bold text-xs uppercase tracking-widest cursor-pointer group"
              >
                <span>REQUEST SITE VISIT</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-2 w-full">
                <a
                  href={CONFIG.contact.telLink}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#0A0908] border border-[#2A241D] hover:border-[#B8873F] text-[#F5F1EA] text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B8873F]" />
                  <span>CALL</span>
                </a>
                <a
                  href={CONFIG.contact.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#0A0908] border border-[#2A241D] hover:border-[#B8873F] text-[#B8873F] hover:text-[#F5F1EA] text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
