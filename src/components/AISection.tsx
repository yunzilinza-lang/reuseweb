import React, { useState } from 'react';
import { Info, Sparkles, Scan, TrendingUp, MessageSquare, Check, ShieldAlert } from 'lucide-react';
import { ASSETS } from '../assets';

export const AISection: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<number>(0);
  const [activeQualityModal, setActiveQualityModal] = useState<boolean>(false);

  const scenarios = [
    {
      label: 'Compact Camera',
      query: "I'm looking for a compact camera under Rp5 million, preferably in very good condition.",
      response: 'Here are a few options that match your budget, category, and condition preference.',
      items: [
        {
          name: 'Sony ZV-1',
          price: 'Rp 4.800.000',
          score: '92/100',
          location: 'Jakarta',
          img: ASSETS.camera,
        },
        {
          name: 'Fujifilm X-A5',
          price: 'Rp 4.200.000',
          score: '88/100',
          location: 'Bandung',
          img: ASSETS.camera,
        },
        {
          name: 'Canon EOS M50',
          price: 'Rp 4.700.000',
          score: '90/100',
          location: 'Jakarta',
          img: ASSETS.camera,
        },
      ],
    },
    {
      label: 'Audio Gear',
      query: 'Looking for wireless noise-canceling over-ear headphones with gentle wear.',
      response: 'Found 3 verified listings with detailed acoustic and cosmetic photo evaluations.',
      items: [
        {
          name: 'Sony WH-1000XM4',
          price: 'Rp 2.650.000',
          score: '94/100',
          location: 'Surabaya',
          img: ASSETS.headphones,
        },
        {
          name: 'Bose QuietComfort 45',
          price: 'Rp 3.100.000',
          score: '91/100',
          location: 'Jakarta',
          img: ASSETS.headphones,
        },
        {
          name: 'Sennheiser Momentum 4',
          price: 'Rp 3.450.000',
          score: '89/100',
          location: 'Yogyakarta',
          img: ASSETS.headphones,
        },
      ],
    },
    {
      label: 'Living & Furniture',
      query: 'Need an ergonomic wooden accent chair in natural wood tone under Rp2 million.',
      response: 'These pre-owned armchairs feature solid woodwork and documented fabric condition.',
      items: [
        {
          name: 'Nordic Teak Lounge Chair',
          price: 'Rp 1.850.000',
          score: '93/100',
          location: 'Tangerang',
          img: ASSETS.chair,
        },
        {
          name: 'Mid-Century Leather Seat',
          price: 'Rp 1.950.000',
          score: '87/100',
          location: 'Jakarta',
          img: ASSETS.chair,
        },
        {
          name: 'Minimal Oak Armchair',
          price: 'Rp 1.400.000',
          score: '91/100',
          location: 'Bandung',
          img: ASSETS.chair,
        },
      ],
    },
  ];

  const current = scenarios[activeScenario];

  return (
    <section id="ai" className="py-24 sm:py-32 bg-[#F6F9F6]/80 border-y border-[#E3EDE6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#235339] mb-3 block">
            Smarter With AI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141C17] tracking-tight leading-[1.1] mb-5">
            Secondhand, with a little more intelligence.
          </h2>
          <p className="text-[#526156] text-base sm:text-lg leading-relaxed">
            REUSE uses AI to make secondhand discovery and selling easier — from finding relevant items to understanding visible condition and getting pricing references.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: AI Interface Visualization */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Interactive Scenario Filter Buttons */}
            <div className="flex items-center gap-2 p-1.5 bg-[#E6EFE8] rounded-full w-fit">
              {scenarios.map((sc, i) => (
                <button
                  key={sc.label}
                  onClick={() => setActiveScenario(i)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                    activeScenario === i
                      ? 'bg-white text-[#1D3D2C] shadow-xs'
                      : 'text-[#506155] hover:text-[#141C17]'
                  }`}
                >
                  {sc.label}
                </button>
              ))}
            </div>

            {/* Conceptual Mockup Device / Chat Frame */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-md border border-[#DEE7E0] flex flex-col gap-5">
              {/* User Bubble */}
              <div className="flex justify-end">
                <div className="max-w-md bg-[#E8F0EA] text-[#1E2E23] text-sm sm:text-[15px] font-medium px-5 py-3.5 rounded-2xl rounded-tr-xs shadow-2xs leading-relaxed">
                  {current.query}
                </div>
              </div>

              {/* AI Bubble */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1D3D2C] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                  AI
                </div>
                <div className="bg-[#FAF9F5] border border-[#E4ECE6] text-[#29362E] text-sm sm:text-[15px] px-5 py-3.5 rounded-2xl rounded-tl-xs shadow-2xs max-w-lg leading-relaxed">
                  {current.response}
                </div>
              </div>

              {/* 3 Product Cards Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                {current.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E3ECE5] hover:border-[#BED3C5] transition-all hover:shadow-xs flex flex-col justify-between"
                  >
                    <div className="aspect-square w-full rounded-xl overflow-hidden bg-white mb-2.5 p-1 border border-[#EDF2EE]">
                      <img
                        src={item.img}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#141C17] truncate">{item.name}</h4>
                      <p className="text-xs font-semibold text-[#235339] mt-0.5">{item.price}</p>
                      <div className="flex items-center justify-between text-[11px] text-[#637267] mt-1 pt-1 border-t border-[#E8ECE9]">
                        <span className="font-semibold text-[#1D3D2C]">{item.score}</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mandatory Transparency Note */}
            <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-[#EAF2EC] border border-[#D0E2D5] text-[#2F4637]">
              <Info className="w-5 h-5 text-[#235339] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-[13px] leading-relaxed">
                <strong className="font-semibold">Transparency note: </strong>
                AI results are estimates based on available information. Always review the listing and product details before making a decision.
              </p>
            </div>
          </div>

          {/* Right Column: 3 AI Capabilities */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-6">
            {/* Capability 01 */}
            <div className="group flex items-start gap-5">
              <div className="text-2xl font-black text-[#85988C] group-hover:text-[#235339] transition-colors tabular-nums">
                01
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#141C17] mb-2 flex items-center gap-2">
                  <span>AI Marketplace Assistant</span>
                </h3>
                <p className="text-sm text-[#506155] leading-relaxed">
                  Describe what you need naturally and get relevant recommendations based on condition, pricing, and availability.
                </p>
              </div>
            </div>

            {/* Capability 02 */}
            <div className="group flex items-start gap-5">
              <div className="text-2xl font-black text-[#85988C] group-hover:text-[#235339] transition-colors tabular-nums">
                02
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#141C17] mb-2">
                  AI Quality Check
                </h3>
                <p className="text-sm text-[#506155] leading-relaxed mb-3">
                  Upload item photos and receive an AI-assisted visual condition assessment that highlights visible scuffs, screen clarity, and wear.
                </p>
                <button
                  onClick={() => setActiveQualityModal(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#235339] hover:text-[#173726] underline underline-offset-4 cursor-pointer"
                >
                  <Scan className="w-3.5 h-3.5" />
                  <span>How Visual Quality Check works</span>
                </button>
              </div>
            </div>

            {/* Capability 03 */}
            <div className="group flex items-start gap-5">
              <div className="text-2xl font-black text-[#85988C] group-hover:text-[#235339] transition-colors tabular-nums">
                03
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#141C17] mb-2">
                  AI Price Suggestion
                </h3>
                <p className="text-sm text-[#506155] leading-relaxed">
                  Get a reference price based on available product and market information, helping sellers price reasonably while leaving final control in their hands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Check Explanation Dialog */}
      {activeQualityModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-xs p-4"
          onClick={() => setActiveQualityModal(false)}
        >
          <div
            className="bg-[#FAF9F5] border border-[#DEE7E1] rounded-3xl max-w-lg w-full p-7 shadow-2xl relative animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E1EDE4] flex items-center justify-center text-[#235339]">
                <Scan className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#141C17]">AI Quality Check Standards</h3>
            </div>

            <p className="text-sm text-[#4E5C53] mb-4 leading-relaxed">
              Our computer vision model assists buyers and sellers by examining multiple high-resolution photos against documented condition tiers.
            </p>

            <div className="space-y-2.5 text-xs text-[#2A372E] mb-6">
              <div className="flex items-start gap-2 p-2.5 bg-white rounded-xl border border-[#E3ECE6]">
                <Check className="w-4 h-4 text-[#235339] shrink-0 mt-0.5" />
                <span><strong>Evaluates visible surface:</strong> Scratches, cosmetic wear, bezel condition, lens clarity, and fabric texture.</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 bg-[#FFF9E6] rounded-xl border border-[#F0E4B8] text-[#695315]">
                <ShieldAlert className="w-4 h-4 text-[#A17C1E] shrink-0 mt-0.5" />
                <span><strong>Honest limit:</strong> Does not claim to verify internal battery health or hidden circuits that cannot be seen visually.</span>
              </div>
            </div>

            <button
              onClick={() => setActiveQualityModal(false)}
              className="w-full py-3 rounded-full bg-[#1D3D2C] hover:bg-[#28533C] text-white font-semibold text-xs cursor-pointer"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
