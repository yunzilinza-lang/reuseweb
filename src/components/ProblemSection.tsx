import React from 'react';
import { Search, Eye, Tag, Heart } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Hard to Find',
      description: 'Finding the right item across different listings can take time.',
      icon: Search,
    },
    {
      title: 'Hard to Judge',
      description: 'Photos and descriptions do not always make condition easy to understand.',
      icon: Eye,
    },
    {
      title: 'Hard to Price',
      description: 'Sellers often need a better reference for setting a reasonable price.',
      icon: Tag,
    },
    {
      title: 'Hard to Let Go',
      description: 'Useful items can be forgotten instead of finding their next owner.',
      icon: Heart,
    },
  ];

  return (
    <section id="the-problem" className="py-24 sm:py-32 border-t border-[#E8EEEA]/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5">
            <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#235339] mb-3 block">
              The Secondhand Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141C17] tracking-tight leading-[1.15] mb-5">
              Secondhand should feel smarter.
            </h2>
            <p className="text-[#556158] text-base sm:text-[17px] leading-relaxed">
              Finding the right item is only part of the challenge. You also need to understand its condition, compare options, estimate a fair price, and know what to do with things you no longer need.
            </p>
          </div>

          {/* Right Column: 4 Clean Problem Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {problems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group p-6 sm:p-7 rounded-2xl bg-[#F4F7F4]/70 hover:bg-[#EEF4F0] border border-[#DEE7E1] hover:border-[#CAD8CE] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E1EDE4] flex items-center justify-center text-[#235339] mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#141C17] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5C6A61] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
