import React, { useState } from 'react';
import { Home, Compass, Bot, PlusCircle, User, Heart, Sparkles, Filter } from 'lucide-react';
import { ASSETS } from '../assets';

export const AppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'explore' | 'ai' | 'sell' | 'profile' | 'donate'>('home');

  const screens = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'ai', label: 'AI Assistant', icon: Bot },
    { id: 'sell', label: 'Sell', icon: PlusCircle },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'donate', label: 'Donation Hub', icon: Heart },
  ] as const;

  const handleScrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E5EFE7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#235339] mb-3 block">
            The Mobile & Web Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141C17] tracking-tight leading-[1.1] mb-4">
            Meet REUSE.
          </h2>
          <p className="text-[#556459] text-base sm:text-lg">
            One ecosystem. More ways to reuse.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 p-1.5 bg-[#E8F0EA] rounded-full max-w-2xl mx-auto mb-12 overflow-x-auto">
          {screens.map((screen) => {
            const Icon = screen.icon;
            const isActive = activeTab === screen.id;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(screen.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1D3D2C] text-white shadow-xs'
                    : 'text-[#4A594F] hover:text-[#141C17] hover:bg-white/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{screen.label}</span>
              </button>
            );
          })}
        </div>

        {/* Realistic Device Frame Showcase */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#E6EFE9] to-[#D9E6DC] p-4 sm:p-8 rounded-[40px] shadow-xl border border-[#CBDCD0]">
          <div className="bg-[#FAF9F5] rounded-[32px] overflow-hidden shadow-2xl border border-[#D5E1D9] min-h-[500px] flex flex-col justify-between">
            {/* Top Device Bar */}
            <div className="px-6 py-3.5 bg-white border-b border-[#E7EFE9] flex items-center justify-between text-xs text-[#5D6B62]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1D3D2C]" />
                <span className="font-extrabold tracking-tight text-[#141C17]">REUSE App</span>
                <span className="text-[11px] text-[#7E8D83]">· Interface Preview</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium bg-[#E8F0EA] text-[#224E35] px-2.5 py-0.5 rounded-full">
                <span>UI Architecture</span>
              </div>
            </div>

            {/* Screen Content Previews */}
            <div className="p-6 sm:p-8 flex-1">
              {activeTab === 'home' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-[#141C17]">Good afternoon</h4>
                      <p className="text-xs text-[#556358]">Explore curated circular arrivals near you</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#EAF3EC] text-[#235339] text-xs font-semibold">
                      Jakarta Area
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white border border-[#E3ECE6] flex items-center gap-4">
                      <img src={ASSETS.camera} alt="Camera" className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <span className="text-[10px] font-bold text-[#235339] uppercase">Verified Listing</span>
                        <h5 className="text-sm font-bold text-[#141C17]">Mirrorless Camera</h5>
                        <p className="text-xs text-[#5C6A60]">Rp 4.800.000 · Score 92/100</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-[#E3ECE6] flex items-center gap-4">
                      <img src={ASSETS.headphones} alt="Headphones" className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <span className="text-[10px] font-bold text-[#235339] uppercase">Trade Eligible</span>
                        <h5 className="text-sm font-bold text-[#141C17]">Studio Headphones</h5>
                        <p className="text-xs text-[#5C6A60]">Rp 2.650.000 · Score 94/100</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#E8F0EA] border border-[#CFE0D4] flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-[#141C17]">Have something sitting unused?</h5>
                      <p className="text-xs text-[#4F6054]">List it easily with AI condition guidance.</p>
                    </div>
                    <button
                      onClick={() => handleScrollToSection('#ways-to-reuse')}
                      className="px-4 py-2 bg-[#1D3D2C] text-white rounded-full text-xs font-bold shadow-xs cursor-pointer hover:bg-[#28533C]"
                    >
                      View Sell Model
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'explore' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-[#235339]" />
                      <h4 className="text-lg font-bold text-[#141C17]">Marketplace Feed</h4>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white border border-[#DEE6E0] font-medium">All Tech</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white border border-[#DEE6E0] font-medium">Living</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white border border-[#DEE6E0] font-medium">Apparel</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-3.5 bg-white rounded-2xl border border-[#E2EBE5]">
                      <img src={ASSETS.chair} alt="Armchair" className="w-full aspect-square rounded-xl object-cover mb-2" />
                      <h5 className="text-xs font-bold text-[#141C17]">Teak Lounge Chair</h5>
                      <p className="text-xs font-semibold text-[#235339]">Rp 1.850.000</p>
                      <span className="text-[10px] text-[#69796F]">Score 93/100 · Tangerang</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-2xl border border-[#E2EBE5]">
                      <img src={ASSETS.jacket} alt="Jacket" className="w-full aspect-square rounded-xl object-cover mb-2" />
                      <h5 className="text-xs font-bold text-[#141C17]">Sage Chore Coat</h5>
                      <p className="text-xs font-semibold text-[#235339]">Trade or Rp 450.000</p>
                      <span className="text-[10px] text-[#69796F]">Score 96/100 · Jakarta</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-2xl border border-[#E2EBE5]">
                      <img src={ASSETS.knitwear} alt="Sweater" className="w-full aspect-square rounded-xl object-cover mb-2" />
                      <h5 className="text-xs font-bold text-[#141C17]">Wool Knit Bundle</h5>
                      <p className="text-xs font-semibold text-[#235339]">Rp 320.000</p>
                      <span className="text-[10px] text-[#69796F]">Score 90/100 · Bandung</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-[#E8F0EA] border border-[#D0E0D4] flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#235339]" />
                    <div>
                      <h5 className="text-sm font-bold text-[#141C17]">Secondhand Assistant Copilot</h5>
                      <p className="text-xs text-[#526357]">Chat in natural language to find items by condition and price.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#E3ECE5] space-y-3">
                    <div className="text-xs bg-[#F4F8F5] p-3 rounded-xl border border-[#E2ECE4]">
                      <strong>User:</strong> &quot;Find me a sturdy home desk chair in warm wood under Rp2M.&quot;
                    </div>
                    <div className="text-xs bg-white p-3 rounded-xl border border-[#DFE7E1] text-[#28382D]">
                      <strong>AI Assistant:</strong> Found 3 pre-owned wooden armchairs within 15km matching your aesthetic and budget criteria.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'sell' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-5 rounded-2xl bg-white border border-[#E2ECE5]">
                    <h5 className="text-sm font-bold text-[#141C17] mb-1">Create a New Secondhand Listing</h5>
                    <p className="text-xs text-[#5C6A60] mb-4">Photos uploaded are screened for visible scratches and lens wear.</p>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="aspect-square rounded-xl bg-[#F0F5F1] border-2 border-dashed border-[#C5D7CB] flex items-center justify-center text-xs text-[#506456]">
                        Photo 1 (Front)
                      </div>
                      <div className="aspect-square rounded-xl bg-[#F0F5F1] border-2 border-dashed border-[#C5D7CB] flex items-center justify-center text-xs text-[#506456]">
                        Photo 2 (Detail)
                      </div>
                      <div className="aspect-square rounded-xl bg-[#F0F5F1] border-2 border-dashed border-[#C5D7CB] flex items-center justify-center text-xs text-[#506456]">
                        Photo 3 (Label)
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#EAF2EC] text-xs text-[#204732] flex items-center justify-between">
                      <span>Suggested Reference Price Range:</span>
                      <strong className="font-mono">Rp 4.2M - Rp 4.9M</strong>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-5 rounded-2xl bg-white border border-[#E3ECE6] flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#1D3D2C] text-white flex items-center justify-center text-lg font-bold">
                      RD
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-[#141C17]">Rian Danu</h5>
                      <p className="text-xs text-[#637267]">Member since March 2025 · Verified Identity</p>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-[#235339] font-semibold">
                        <span>4 Items Rehomed</span>
                        <span>·</span>
                        <span>340 ReUse Points</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'donate' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-5 rounded-2xl bg-white border border-[#E3ECE6]">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-sm font-bold text-[#141C17]">Donation Hub</h5>
                      <span className="text-xs font-mono font-bold text-[#235339] bg-[#EBF3ED] px-2.5 py-1 rounded-full">
                        ReUse Points Eligible
                      </span>
                    </div>
                    <p className="text-xs text-[#59675E] leading-relaxed mb-4">
                      Directly route functional clothing, children&apos;s books, and working gadgets to vetted community collection points.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-[#F6FAF7] border border-[#E0EBE2]">
                        <span className="font-bold text-[#141C17] block">Donate Now</span>
                        <span className="text-[#647268]">Request pickup or local dropoff</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#F6FAF7] border border-[#E0EBE2]">
                        <span className="font-bold text-[#141C17] block">Donation History</span>
                        <span className="text-[#647268]">Track destination status</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status within Showcase */}
            <div className="px-6 py-4 bg-white/70 border-t border-[#E7EFEA] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#58675E] text-center sm:text-left">
                Interface preview of the connected REUSE application ecosystem.
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1D3D2C] bg-[#E8F0EA] px-3.5 py-1.5 rounded-full">
                <span>Previewing: {screens.find((s) => s.id === activeTab)?.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
