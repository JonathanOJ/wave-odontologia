import * as React from 'react';
import { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import logoBranca from '@/assets/logo-wave-branca.png';
import logoPreta from '@/assets/logo-wave-preta.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const numeroWhatsApp = '5541998197571';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const redirectToWpp = () => {
    const mensagem = 'Ola, gostaria de agendar uma consulta.';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Inicio', href: 'inicio' },
    { label: 'Sobre', href: 'sobre' },
    { label: 'Equipe', href: 'equipe' },
    { label: 'Servicos', href: 'servicos' },
    { label: 'Galeria', href: 'galeria' },
    { label: 'Contato', href: 'contato' },
  ];

  return (
    <>
      <nav className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex items-center focus:outline-none"
              aria-label="Ir para o inicio"
            >
              <img
                src={isScrolled ? logoPreta : logoPreta}
                className="w-[130px] h-auto transition-all duration-300"
                alt="Wave Odontologia Especializada Logo"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navegacao principal">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-foreground/80 hover:text-primary font-medium text-sm tracking-wide transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Side - Contact & CTA */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href={`tel:+${numeroWhatsApp}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">(41) 99819-7571</span>
              </a>
              
              <Button 
                onClick={redirectToWpp} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Consulta
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-lg border-b border-border shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-col gap-4" aria-label="Navegacao mobile">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left py-2 text-foreground/80 hover:text-primary font-medium text-base transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-6 pt-6 border-t border-border">
            <a
              href={`tel:+${numeroWhatsApp}`}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
            >
              <Phone className="w-4 h-4" />
              <span>(41) 99819-7571</span>
            </a>
            
            <Button 
              onClick={redirectToWpp} 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
