import React from 'react';
import { Eye, HelpCircle, Sliders } from 'lucide-react';

export const TrustTransparency: React.FC = () => {
  const principles = [
    {
      title: 'VISIBLE',
      icon: Eye,
      description:
        'AI Quality Check focuses on conditions that can be observed from available photos and information.',
    },
    {
      title: 'TRANSPARENT',
      icon: HelpCircle,
      description:
        'AI scores and price suggestions are estimates, not guarantees.',
    },
    {
      title: 'IN CONTROL',
      icon: Sliders,
      description:
        'Sellers control their listings and prices. Buyers and traders remain responsible for reviewing information and agreeing to transactions.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E3ECE6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#235339] mb-3 block">
            Our Principles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141C17] tracking-tight leading-[1.1] mb-5">
            Smarter doesn&apos;t mean automatic.
          </h2>
          <p className="text-[#556459] text-base sm:text-lg leading-relaxed">
            AI helps you make better-informed decisions, but it does not replace your judgment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#F4F7F4]/80 border border-[#DEE7E1] hover:border-[#CAD8CE] transition-all"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#E1EDE4] text-[#235339] flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-[#141C17] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#57665B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
