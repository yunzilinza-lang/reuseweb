import React from 'react';
import { Heart, Gift, Award, Clock, ArrowRight } from 'lucide-react';

interface DonationImpactProps {
  onLearnMore?: () => void;
}

export const DonationImpact: React.FC<DonationImpactProps> = ({ onLearnMore }) => {
  const handleScrollToDonate = () => {
    if (onLearnMore) {
      onLearnMore();
    } else {
      const el = document.querySelector('#ways-to-reuse');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="impact" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E3EDE6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#235339] mb-3 block">
              Keep Good Things Moving
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141C17] tracking-tight leading-[1.1] mb-6">
              Reuse is bigger than a transaction.
            </h2>
            <p className="text-[#556459] text-base sm:text-lg leading-relaxed mb-8">
              Some things are worth more when they are passed forward. REUSE helps turn usable items into opportunities for someone else, while giving users a way to track eligible contributions through ReUse Points.
            </p>

            <button
              onClick={handleScrollToDonate}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#1D3D2C] hover:bg-[#28533C] transition-all shadow-md cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current opacity-80" />
              <span>Learn About Donation Model</span>
            </button>
          </div>

          {/* Right Column: Donation Hub Preview (Strictly No Invented Metrics) */}
          <div className="lg:col-span-7 bg-[#EDF4EF] border border-[#D5E3DA] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-6 border-b border-[#D6E3DB]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white text-[#235339] flex items-center justify-center shadow-2xs">
                  <Heart className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#141C17]">Donation Hub</h3>
                  <p className="text-xs text-[#5E6D63]">Verified community recirculation pathways</p>
                </div>
              </div>
              <span className="text-xs font-mono font-semibold text-[#204933] bg-white px-3 py-1 rounded-full border border-[#D3E1D7]">
                Community Tier
              </span>
            </div>

            {/* 4 Hub Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {/* Pillar 1: Donate Now */}
              <div className="p-5 rounded-2xl bg-white border border-[#DEE7E1] hover:border-[#BED0C4] transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#E8F1EB] text-[#235339] flex items-center justify-center mb-3">
                  <Gift className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#141C17] mb-1">Donate Model</h4>
                <p className="text-xs text-[#5D6B62] leading-relaxed">
                  List items with zero fees for verified community groups, schools, and local shelters.
                </p>
              </div>

              {/* Pillar 2: Donation History */}
              <div className="p-5 rounded-2xl bg-white border border-[#DEE7E1] hover:border-[#BED0C4] transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#E8F1EB] text-[#235339] flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#141C17] mb-1">Pass-Forward Tracking</h4>
                <p className="text-xs text-[#5D6B62] leading-relaxed">
                  Follow the journey of your passed-forward items from handover to receiver confirmation.
                </p>
              </div>

              {/* Pillar 3: ReUse Points */}
              <div className="p-5 rounded-2xl bg-white border border-[#DEE7E1] hover:border-[#BED0C4] transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#E8F1EB] text-[#235339] flex items-center justify-center mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#141C17] mb-1">ReUse Points</h4>
                <p className="text-xs text-[#5D6B62] leading-relaxed">
                  Earn circular points for every accepted donation item to unlock community badge recognition.
                </p>
              </div>

              {/* Pillar 4: Donation Leaderboard */}
              <div className="p-5 rounded-2xl bg-white border border-[#DEE7E1] hover:border-[#BED0C4] transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#E8F1EB] text-[#235339] flex items-center justify-center mb-3">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#141C17] mb-1">Community Leaderboard</h4>
                <p className="text-xs text-[#5D6B62] leading-relaxed">
                  Celebrate neighborhood contributors and active circular stewards leading the reuse movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
