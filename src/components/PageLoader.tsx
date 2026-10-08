import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONFIG } from '../config.ts';

export const PageLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 750);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#0A0908] flex flex-col justify-between p-8 sm:p-12 pointer-events-none"
        >
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#B8873F]">
            <span>DEMOLITION ARCHIVE / TN · PY</span>
            <span>2025</span>
          </div>

          <div className="max-w-xl">
            <span className="block font-mono text-xs uppercase tracking-[0.25em] text-[#9C948A] mb-2">
              PROP. {CONFIG.business.proprietor}
            </span>
            <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-[#F5F1EA] tracking-tight uppercase">
              {CONFIG.business.name}
            </h1>
            <div className="w-16 h-0.5 bg-[#B8873F] mt-4 animate-pulse" />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono uppercase text-[#9C948A]/60 tracking-widest">
            <span>CHENNAI · PUDUCHERRY · VELLORE · ARNI</span>
            <span>INITIALIZING...</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
