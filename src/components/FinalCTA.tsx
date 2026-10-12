import React from 'react';
import { ArrowDown, Play } from 'lucide-react';
import { ASSETS } from '../assets';

interface FinalCTAProps {
  onExploreWays: () => void;
  onSeeHowItWorks: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreWays, onSeeHowItWorks }) => {
  return (
    <section className="relative overflow-hidden bg-[#141C17] text-white py-20 sm:py-24">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#141C17] via-[#1A261F] to-[#141C17]/80 z-10" />

      {/* Decorative item backdrop in the right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 opacity-25 sm:opacity-35 pointer-events-none mix-blend-luminosity overflow-hidden">
        <img
          src={ASSETS.chair}
          alt="REUSE Lifestyle item"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        <div className="max-w-2xl">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#73B38B] mb-3 block">
            Ready to Give Something
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] mb-4">
            a second life?
          </h2>

          <p className="text-[#A2B3A7] text-base sm:text-lg mb-8 leading-relaxed">
            Discover a smarter way to buy, sell, trade, and donate with a platform built for circular living.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreWays}
              className="px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#2A6543] hover:bg-[#347851] active:scale-[0.98] transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Explore Ways to Reuse</span>
              <ArrowDown className="w-4 h-4 opacity-80" />
            </button>

            <button
              onClick={onSeeHowItWorks}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#D4E2D8] bg-white/5 hover:bg-white/10 border border-white/20 transition-all cursor-pointer"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white group-hover:scale-105 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </span>
              <span>See How It Works</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
