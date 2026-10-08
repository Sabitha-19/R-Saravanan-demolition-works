/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { PageLoader } from './components/PageLoader.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { TopBar } from './components/TopBar.tsx';
import { Hero } from './components/Hero.tsx';
import { SectionDivider } from './components/SectionDivider.tsx';
import { AboutStatement } from './components/AboutStatement.tsx';
import { ServicesStacked } from './components/ServicesStacked.tsx';
import { HowWeWork } from './components/HowWeWork.tsx';
import { WhereWeWork } from './components/WhereWeWork.tsx';
import { OurWorkGallery } from './components/OurWorkGallery.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { SiteVisitForm } from './components/SiteVisitForm.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileStickyBar } from './components/MobileStickyBar.tsx';

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [selectedCityForForm, setSelectedCityForForm] = useState<string | undefined>(undefined);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string | undefined>(undefined);

  // Initialize Lenis smooth inertial scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForForm(serviceTitle);
    scrollToSection('request-visit');
  };

  const handleSelectCity = (cityName: string) => {
    setSelectedCityForForm(cityName);
  };

  return (
    <div className="min-h-screen bg-[#0A0908] text-[#9C948A] selection:bg-[#B8873F] selection:text-[#0A0908] flex flex-col font-sans">
      {/* Animated Film Grain / Noise Overlay across the whole site */}
      <div className="film-grain" aria-hidden="true" />

      {/* Editorial Page Loader */}
      <PageLoader onComplete={() => setLoaderDone(true)} />

      {/* Soft Custom Cursor on Desktop */}
      <CustomCursor />

      {/* Top Bar: Wordmark left, Call pill + WhatsApp icon right */}
      <TopBar />

      <main className="flex-1">
        {/* 1. Hero (100vh): Full-bleed dark image, slow zoom, masked headline reveal */}
        <Hero onRequestVisit={() => scrollToSection('request-visit')} />

        <SectionDivider />

        {/* 2. 01 / ABOUT: Large statement paragraph filling word-by-word on scroll */}
        <AboutStatement />

        <SectionDivider />

        {/* 3. 02 / SERVICES: Sticky stacked-card scroll */}
        <ServicesStacked onSelectService={handleSelectService} />

        <SectionDivider />

        {/* 4. 03 / HOW WE WORK: Sticky left title + vertical bronze progress line */}
        <HowWeWork />

        <SectionDivider />

        {/* 5. 04 / WHERE WE WORK: 4 Huge city names with image fade on hover/tap */}
        <WhereWeWork onSelectCity={handleSelectCity} />

        <SectionDivider />

        {/* 6. 05 / OUR WORK: Draggable strip of square image frames + Before/After drag slider */}
        <OurWorkGallery />

        <SectionDivider />

        {/* 7. 06 / PROTOCOLS & FAQ: Clean expandable accordion covering safety, permits & debris removal */}
        <FAQSection onRequestVisit={() => scrollToSection('request-visit')} />

        <SectionDivider />

        {/* 8. 07 / REQUEST A SITE VISIT: Real working form (NO pricing) */}
        <SiteVisitForm
          preselectedCity={selectedCityForForm}
          preselectedWorkType={selectedServiceForForm}
        />
      </main>

      <SectionDivider />

      {/* 8. Footer: Bold uppercase line, CONNECT WITH US, Call/WhatsApp/Email, Back to top */}
      <Footer />

      {/* Mobile Sticky Bar: CALL and WHATSAPP (>= 48px touch targets) */}
      <MobileStickyBar />
    </div>
  );
}
