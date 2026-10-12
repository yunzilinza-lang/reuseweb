import React from 'react';
import { Search, Brain, RefreshCw, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Find or list',
      description: 'Discover something you need or upload something you no longer use.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Make a smarter decision',
      description: 'Use available product information and AI-assisted insights to understand your options.',
      icon: Brain,
    },
    {
      num: '03',
      title: 'Give it another life',
      description: 'Buy, sell, trade, or donate and keep useful things moving.',
      icon: RefreshCw,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#235339] mb-3 block">
            How REUSE Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141C17] tracking-tight leading-[1.1]">
            From unused to reused.
          </h2>
        </div>

        {/* 3 Steps Continuous Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.num} className="relative flex flex-col items-start group">
                {/* Step Top Bar: Icon + Number */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#E1EDE4] text-[#1D3D2C] flex items-center justify-center shadow-xs border border-[#D3E2D7] group-hover:bg-[#1D3D2C] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#6D7D72] bg-[#E8EFEA] px-2.5 py-1 rounded-md">
                    {step.num}
                  </span>
                </div>

                {/* Connector Arrow (Desktop only) */}
                {!isLast && (
                  <div className="hidden md:flex absolute top-7 left-[calc(100%-24px)] z-10 text-[#A6BAAD] items-center">
                    <div className="w-8 border-t-2 border-dashed border-[#BAC9BF]" />
                    <ArrowRight className="w-4 h-4 -ml-1 text-[#869B8E]" />
                  </div>
                )}

                {/* Step Title */}
                <h3 className="text-xl font-bold text-[#141C17] mb-2.5 tracking-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm sm:text-[15px] text-[#556459] leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
