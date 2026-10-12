import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky navbar once scrolled past the top hero dock (past 90px)
      setIsScrolled(window.scrollY > 90);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'AI', href: '#ai' },
    { label: 'Ways to Reuse', href: '#ways-to-reuse' },
    { label: 'Impact', href: '#impact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'opacity-100 translate-y-0 bg-[#FAF9F5]/95 backdrop-blur-md py-3 shadow-xs border-b border-[#121814]/5 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none py-3'
      }`}
      aria-hidden={!isScrolled}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Official Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center transition-opacity hover:opacity-85"
          aria-label="REUSE Home"
        >
          <Logo className="h-7 sm:h-8" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#465049]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#161D19] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1D3D2C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#ways-to-reuse"
            onClick={(e) => handleLinkClick(e, '#ways-to-reuse')}
            className="px-4 py-1.5 rounded-full bg-[#1D3D2C] text-white hover:bg-[#28533C] transition-all text-[13px] font-semibold"
          >
            Explore Marketplace
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#161D19] hover:bg-[#EBF1EC] transition-colors focus-visible:outline-2 focus-visible:outline-[#1D3D2C]"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-[#121814]/10 px-6 py-6 animate-fadeIn shadow-lg">
          <nav className="flex flex-col gap-4 text-[16px] font-medium text-[#29322D]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2 border-b border-[#121814]/5 hover:text-[#1D3D2C] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ways-to-reuse"
              onClick={(e) => handleLinkClick(e, '#ways-to-reuse')}
              className="py-2.5 text-center rounded-full bg-[#1D3D2C] text-white hover:bg-[#28533C] transition-all text-[14px] font-semibold mt-2"
            >
              Explore Marketplace
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
