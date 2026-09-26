import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { VareonLogo } from './VareonLogo';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="group flex items-center transition-transform active:scale-95"
          id="navbar-brand-logo"
        >
          <VareonLogo size={34} showWordmark={true} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('pilares')} 
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Pilares
          </button>
          <button 
            onClick={() => scrollToSection('metodo')} 
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Método
          </button>
          <button 
            onClick={() => scrollToSection('vantagens')} 
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Vantagens
          </button>
        </nav>

        {/* Header Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-white text-black font-medium text-sm transition-colors hover:bg-zinc-200 cursor-pointer"
            id="navbar-cta-button"
          >
            Sessão Estratégica
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white cursor-pointer"
          aria-label="Abrir menu de navegação"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/5 absolute top-full left-0 right-0 p-5 shadow-2xl">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('pilares')} 
              className="text-left text-sm font-medium text-zinc-300 hover:text-white cursor-pointer"
            >
              Pilares
            </button>
            <button 
              onClick={() => scrollToSection('metodo')} 
              className="text-left text-sm font-medium text-zinc-300 hover:text-white cursor-pointer"
            >
              Método
            </button>
            <button 
              onClick={() => scrollToSection('vantagens')} 
              className="text-left text-sm font-medium text-zinc-300 hover:text-white cursor-pointer"
            >
              Vantagens
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="mt-2 w-full flex items-center justify-center h-10 px-4 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 cursor-pointer"
            >
              Sessão Estratégica
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
