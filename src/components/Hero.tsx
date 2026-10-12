import React, { useEffect } from 'react';
import { SylvaHero } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';
import { Logo } from './Logo';

interface HeroProps {
  onExploreFeatures: () => void;
  onSeeHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFeatures, onSeeHowItWorks }) => {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'REUSE_NAVIGATE') {
        const hash = e.data.hash;
        if (hash === '#ways-to-reuse') {
          onExploreFeatures();
        } else if (hash === '#how-it-works') {
          onSeeHowItWorks();
        } else if (hash) {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onExploreFeatures, onSeeHowItWorks]);

  return (
    <section className="relative w-full overflow-hidden bg-[#383b34]">
      {/* Top-Left ReUse Brand Logo */}
      <div className="absolute top-5 left-6 sm:top-7 sm:left-10 z-30 pointer-events-auto">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center transition-opacity hover:opacity-85"
          aria-label="REUSE Home"
        >
          <Logo className="h-7 sm:h-8" isDark={true} />
        </a>
      </div>

      {/* ThreeUI SylvaHero Living Green Scene */}
      <div className="relative w-full h-[100svh] min-h-[700px] max-h-[1020px] lg:h-[880px] xl:h-[920px]">
        {React.createElement(SylvaHero as React.ComponentType<Record<string, unknown>>, {
          variant: 'living-green',
          headingFont: 'lexend',
          bodyFont: 'lexend',
          headingWeight: '300',
          bodyWeight: '300',
          primaryColor: '#ffffff',
          headingSize: 63,
          bodySize: 16.5,
          headingLetterSpacing: -0.006,
        })}
      </div>

      {/* Atmospheric organic transition into the subsequent ReUse content */}
      <div
        className="h-16 sm:h-24 w-full -mt-10 sm:-mt-14 relative z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(56,59,52,0) 0%, rgba(29,61,44,0.35) 45%, #FAF9F5 100%)',
        }}
        aria-hidden="true"
      />
    </section>
  );
};
