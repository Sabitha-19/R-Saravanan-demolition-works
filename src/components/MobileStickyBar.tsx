import React from 'react';
import { CONFIG } from '../config.ts';
import { Phone, MessageSquare } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0A0908]/95 backdrop-blur-md border-t border-[#2A241D] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Mobile quick actions"
    >
      <div className="flex items-center gap-3">
        {/* CALL - min 48px touch target */}
        <a
          href={CONFIG.contact.telLink}
          className="flex-1 min-h-[48px] flex items-center justify-center gap-2 px-4 rounded-none bg-[#B8873F] text-[#0A0908] font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform"
          aria-label={`Call ${CONFIG.business.proprietor}`}
        >
          <Phone className="w-3.5 h-3.5 text-[#0A0908]" />
          <span>CALL</span>
        </a>

        {/* WHATSAPP - min 48px touch target */}
        <a
          href={CONFIG.contact.whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[48px] flex items-center justify-center gap-2 px-4 rounded-none bg-[#14110E] border border-[#2A241D] text-[#F5F1EA] font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform"
          aria-label="Chat with R. Saravanan on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#B8873F]" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  );
};
