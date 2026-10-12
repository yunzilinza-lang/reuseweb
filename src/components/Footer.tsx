import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#121915] text-[#86958A] pt-16 pb-12 border-t border-[#222E26]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#222F26]">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="mb-4 inline-block">
              <Logo isDark={true} className="h-8" showTagline={true} />
            </a>
            <p className="text-sm text-[#849488] leading-relaxed max-w-sm">
              An AI-assisted secondhand marketplace built to help people buy, sell, trade, and donate.
            </p>
          </div>

          {/* Nav Columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            {/* Column 1: PRODUCT */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
                Product
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => onNavigate('#ways-to-reuse')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Explore
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('#ai')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    AI Assistant
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('#ways-to-reuse')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Sell
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('#ways-to-reuse')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Trade
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('#impact')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Donate
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: ABOUT */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
                About
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => onNavigate('#ways-to-reuse')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Our Vision
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('#how-it-works')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('#impact')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Impact
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: SUPPORT */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
                Support
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => onNavigate('#how-it-works')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('#ai')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Safety & AI Limits
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('#the-problem')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Principles
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7970] gap-4">
          <div>
            © 2026 REUSE
          </div>
          <div className="italic text-[#7E8F83]">
            &quot;Give Every Item a Second Life.&quot;
          </div>
        </div>
      </div>
    </footer>
  );
};
