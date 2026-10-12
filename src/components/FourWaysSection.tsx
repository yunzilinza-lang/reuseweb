import React, { useState } from 'react';
import { ShoppingBag, Upload, RefreshCw, Heart, ArrowUpRight, X } from 'lucide-react';
import { ASSETS } from '../assets';

interface FourWaysSectionProps {
  onLearnMoreAction?: () => void;
}

export const FourWaysSection: React.FC<FourWaysSectionProps> = ({ onLearnMoreAction }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const ways = [
    {
      id: 'buy',
      title: 'BUY',
      description: 'Find secondhand items that fit your needs.',
      image: ASSETS.camera,
      icon: ShoppingBag,
      tagline: 'Curated & Verified',
      details: [
        'Explore verified listings across tech, audio, furniture, and apparel.',
        'View AI-assisted visual condition checks and seller credibility ratings.',
        'Filter by condition score, location, price, and trade eligibility.',
      ],
    },
    {
      id: 'sell',
      title: 'SELL',
      description: 'Turn unused items into value.',
      image: ASSETS.laptop,
      icon: Upload,
      tagline: 'Effortless Listing',
      details: [
        'Snap a few photos and let AI assist with listing titles and condition detection.',
        'Get market-informed reference price ranges so you can price confidently.',
        'You always stay in full control of your final price and listing descriptions.',
      ],
    },
    {
      id: 'trade',
      title: 'TRADE',
      description: 'Exchange what you have for what you want.',
      image: ASSETS.headphones,
      icon: RefreshCw,
      tagline: 'Item-for-Item Swap',
      details: [
        'Propose direct swaps without having to cash out first.',
        'Match with collectors and everyday users looking for what you own.',
        'Compare estimated condition scores to ensure balanced exchanges.',
      ],
    },
    {
      id: 'donate',
      title: 'DONATE',
      description: 'Give usable items a meaningful next destination.',
      image: ASSETS.knitwear,
      icon: Heart,
      tagline: 'Community Hub',
      details: [
        'Pass forward functional items to people and community initiatives.',
        'Earn ReUse Points for verified contributions without monetary cost.',
        'Keep good things circulating in the community instead of being thrown away.',
      ],
    },
  ];

  const currentItem = ways.find((w) => w.id === activeModal);

  const handleModalSeeJourney = () => {
    setActiveModal(null);
    if (onLearnMoreAction) {
      onLearnMoreAction();
    } else {
      const el = document.querySelector('#how-it-works');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="ways-to-reuse" className="py-24 sm:py-32 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="mb-14 sm:mb-16">
          <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#235339] mb-3 block">
            One Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141C17] tracking-tight leading-[1.1]">
            Four ways to keep things moving.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ways.map((way) => {
            const Icon = way.icon;
            return (
              <div
                key={way.id}
                onClick={() => setActiveModal(way.id)}
                className="group cursor-pointer flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#EDF3EE] to-[#E5EFE7] border border-[#D7E3DB] hover:border-[#BED0C4] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
              >
                <div>
                  {/* Top: Icon */}
                  <div className="w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#235339] shadow-2xs mb-5">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-[#141C17] tracking-tight mb-2">
                    {way.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4E5C53] leading-relaxed mb-6 font-normal">
                    {way.description}
                  </p>
                </div>

                {/* Product Image & Arrow */}
                <div className="relative mt-2">
                  <div className="w-full aspect-4/3 rounded-2xl overflow-hidden bg-white/70 shadow-2xs border border-white/60">
                    <img
                      src={way.image}
                      alt={way.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Action arrow button */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#1D3D2C] group-hover:bg-[#28533C] text-white flex items-center justify-center shadow-md transition-all group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#FAF9F5] border border-[#DEE7E1] rounded-3xl max-w-lg w-full p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#6E7B73] hover:text-[#141C17] hover:bg-[#EBF1EC] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E1EDE4] flex items-center justify-center text-[#235339]">
                <currentItem.icon className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D6043]">
                  {currentItem.tagline}
                </span>
                <h3 className="text-2xl font-black text-[#141C17]">{currentItem.title}</h3>
              </div>
            </div>

            <p className="text-[#4E5C53] mb-6 leading-relaxed">
              {currentItem.description}
            </p>

            <div className="space-y-3 mb-8">
              {currentItem.details.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 text-sm text-[#38433C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#235339] mt-2 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleModalSeeJourney}
                className="flex-1 py-3.5 rounded-full bg-[#1D3D2C] hover:bg-[#28533C] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                See How It Works
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-3.5 rounded-full bg-[#E5ECE7] hover:bg-[#D9E3DC] text-[#141C17] font-semibold text-sm transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
