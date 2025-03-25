
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-brand-700 font-bold text-2xl">
              ReviewUp
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              Hoe het werkt
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              Voordelen
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              Tarieven
            </a>
            <a href="#faq" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="btn-primary">
              Vraag demo aan
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out transform',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6">
          <a 
            href="#how-it-works" 
            className="text-gray-800 hover:text-brand-600 font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hoe het werkt
          </a>
          <a 
            href="#benefits" 
            className="text-gray-800 hover:text-brand-600 font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Voordelen
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-800 hover:text-brand-600 font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="text-gray-800 hover:text-brand-600 font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tarieven
          </a>
          <a 
            href="#faq" 
            className="text-gray-800 hover:text-brand-600 font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#contact" 
            className="btn-primary mt-4 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Vraag demo aan
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
