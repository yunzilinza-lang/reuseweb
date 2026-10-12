/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FourWaysSection } from './components/FourWaysSection';
import { AISection } from './components/AISection';
import { HowItWorks } from './components/HowItWorks';
import { EcosystemSection } from './components/EcosystemSection';
import { AppShowcase } from './components/AppShowcase';
import { DonationImpact } from './components/DonationImpact';
import { CircularEconomy } from './components/CircularEconomy';
import { TrustTransparency } from './components/TrustTransparency';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const handleNavigate = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141C17] flex flex-col font-sans selection:bg-[#1D3D2C] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreFeatures={() => handleNavigate('#ways-to-reuse')}
          onSeeHowItWorks={() => handleNavigate('#how-it-works')}
        />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. The REUSE Solution (4 Ways) */}
        <FourWaysSection onLearnMoreAction={() => handleNavigate('#how-it-works')} />

        {/* 4. AI Section */}
        <AISection />

        {/* 5. How REUSE Works */}
        <HowItWorks />

        {/* 6. Product Ecosystem Section */}
        <EcosystemSection />

        {/* 7. App Visual Showcase */}
        <AppShowcase />

        {/* 8. Donation + Impact Section */}
        <DonationImpact onLearnMore={() => handleNavigate('#ways-to-reuse')} />

        {/* 9. Circular Economy Visual Model */}
        <CircularEconomy />

        {/* 10. Trust + Transparency */}
        <TrustTransparency />

        {/* 11. Final CTA */}
        <FinalCTA
          onExploreWays={() => handleNavigate('#ways-to-reuse')}
          onSeeHowItWorks={() => handleNavigate('#how-it-works')}
        />
      </main>

      {/* 12. Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
