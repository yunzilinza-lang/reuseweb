import React from 'react';
import { ShoppingBag, Upload, RefreshCw, Heart } from 'lucide-react';
import { Logo } from './Logo';

export const CircularEconomy: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F6F9F6] border-t border-[#E3ECE6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Conceptual Circular Orbit Diagram */}
        <div className="relative w-72 h-72 sm:w-88 sm:h-88 mx-auto mb-14 flex items-center justify-center select-none">
          {/* Subtle Outer Animated Circular Track */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#5B8D6F]/40 animate-spin-slow" />
          <div className="absolute inset-6 rounded-full border border-[#D5E3D9]" />

          {/* Center Brand */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white shadow-lg border border-[#D7E3DA] flex flex-col items-center justify-center z-10 p-3">
            <Logo className="h-6 sm:h-7" />
            <span className="text-[10px] font-semibold text-[#2D6043] uppercase tracking-wider mt-1">Continuous</span>
          </div>

          {/* Node 1: BUY (Top) */}
          <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-md border border-[#D9E6DD] text-xs font-bold text-[#141C17]">
              <ShoppingBag className="w-3.5 h-3.5 text-[#235339]" />
              <span>BUY</span>
            </div>
          </div>

          {/* Node 2: SELL (Right) */}
          <div className="absolute top-1/2 -right-4 sm:-right-5 -translate-y-1/2 flex flex-col items-center">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-md border border-[#D9E6DD] text-xs font-bold text-[#141C17]">
              <Upload className="w-3.5 h-3.5 text-[#235339]" />
              <span>SELL</span>
            </div>
          </div>

          {/* Node 3: DONATE (Bottom) */}
          <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-md border border-[#D9E6DD] text-xs font-bold text-[#141C17]">
              <Heart className="w-3.5 h-3.5 text-[#235339]" />
              <span>DONATE</span>
            </div>
          </div>

          {/* Node 4: TRADE (Left) */}
          <div className="absolute top-1/2 -left-4 sm:-left-5 -translate-y-1/2 flex flex-col items-center">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-md border border-[#D9E6DD] text-xs font-bold text-[#141C17]">
              <RefreshCw className="w-3.5 h-3.5 text-[#235339]" />
              <span>TRADE</span>
            </div>
          </div>
        </div>

        {/* Text underneath */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141C17] tracking-tight leading-[1.15] mb-5">
            One item. <br />
            <span className="text-[#235339]">More possibilities.</span>
          </h2>
          <p className="text-[#526156] text-base sm:text-lg leading-relaxed">
            REUSE makes it easier for products to move from one person to the next instead of being left unused.
          </p>
        </div>
      </div>
    </section>
  );
};
