import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const SectionDivider: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start end', 'end start'],
  });

  const width = useTransform(scrollYProgress, [0, 1], ['0px', '160px']);

  return (
    <div ref={lineRef} className="relative w-full h-[1px] bg-[#2A241D] my-0 overflow-hidden" aria-hidden="true">
      {/* Short bronze progress segment on the left that grows on scroll */}
      <motion.div
        style={{ width }}
        className="absolute left-0 top-0 bottom-0 bg-[#B8873F]"
      />
    </div>
  );
};
