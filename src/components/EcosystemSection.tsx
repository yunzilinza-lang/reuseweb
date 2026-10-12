import React from 'react';
import { Compass, GitCompare, Camera, RefreshCcw, Gift, Award } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const ecosystemFeatures = [
    {
      label: 'DISCOVER',
      title: 'Filter by real condition & location',
      description: 'Search and explore secondhand products using categories, filters, condition information, price, and location.',
      icon: Compass,
    },
    {
      label: 'COMPARE',
      title: 'Side-by-side spec & wear breakdown',
      description: 'Evaluate available options using product details, price, condition, and seller information.',
      icon: GitCompare,
    },
    {
      label: 'SELL',
      title: 'Guided visual check & price bounds',
      description: 'Upload photos, run an AI Quality Check, receive pricing references, edit your listing, and publish.',
      icon: Camera,
    },
    {
      label: 'TRADE',
      title: 'Direct barter matching',
      description: 'Find potential exchange opportunities based on what you have and what you want without middleman friction.',
      icon: RefreshCcw,
    },
    {
      label: 'DONATE',
      title: 'Meaningful pass-forward pathways',
      description: 'Pass usable items forward through the Donation Hub directly to verified social and community initiatives.',
      icon: Gift,
    },
    {
      label: 'REUSE POINTS',
      title: 'Recognized circular contributions',
      description: 'Track eligible donation contributions through ReUse Points that unlock community recognition and platform privileges.',
      icon: Award,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F4F7F4]/60 border-t border-[#E2EBE5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#235339] mb-3 block">
            Integrated Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141C17] tracking-tight leading-[1.1] mb-5">
            Everything you need to make secondhand easier.
          </h2>
          <p className="text-[#556358] text-base sm:text-lg leading-relaxed">
            From discovering rare gems to gifting unused goods, all parts of the REUSE platform share a single intuitive flow.
          </p>
        </div>

        {/* 6 Connected Ecosystem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-7 rounded-3xl bg-white border border-[#DFE7E2] hover:border-[#CAD7CF] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#2E6646] bg-[#EAF2EC] px-3 py-1 rounded-full">
                      {item.label}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F0F5F1] text-[#235339] flex items-center justify-center">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#141C17] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#57665B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
