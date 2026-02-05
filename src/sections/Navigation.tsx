import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Interiors', href: '#interiors' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Renovation', href: '#renovation' },
  { label: 'Art', href: '#art' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Determine active section
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-display text-xl transition-colors duration-300 ${
              isScrolled ? 'text-[hsl(var(--charcoal))]' : 'text-white'
            }`}
          >
            Shama & Veronie
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm tracking-wider uppercase font-body transition-all duration-300 relative group ${
                  isScrolled
                    ? 'text-[hsl(var(--charcoal))]/70 hover:text-[hsl(var(--charcoal))]'
                    : 'text-white/70 hover:text-white'
                } ${activeSection === link.href.slice(1) ? 'text-[hsl(var(--terracotta))]!' : ''}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                    isScrolled ? 'bg-[hsl(var(--terracotta))]' : 'bg-white'
                  } ${activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[hsl(var(--charcoal))]' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-8">
            <div className="flex-1 space-y-1">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left py-4 text-2xl font-display text-[hsl(var(--charcoal))] hover:text-[hsl(var(--terracotta))] transition-all duration-300 border-b border-[hsl(var(--sand))] ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${100 + index * 50}ms` }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Footer Info */}
            <div className="pt-8 border-t border-[hsl(var(--sand))]">
              <p className="text-[hsl(var(--charcoal))]/50 text-sm font-body mb-2">
                Get in touch
              </p>
              <a
                href="mailto:shamaandveronie@gmail.com"
                className="text-[hsl(var(--charcoal))] font-body hover:text-[hsl(var(--terracotta))] transition-colors"
              >
                shamaandveronie@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
