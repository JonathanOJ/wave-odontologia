import * as React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, ArrowUp } from 'lucide-react';
import logoBranca from '@/assets/logo-wave-branca.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const numeroWhatsApp = '5541998197571';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const redirectTo = (platform) => {
    const urls = {
      instagram: 'https://www.instagram.com/wave.odontologia/',
      facebook: 'https://www.facebook.com/profile.php?id=61576803860631',
    };
    window.open(urls[platform], '_blank');
  };

  const quickLinks = [
    { label: 'Inicio', href: 'inicio' },
    { label: 'Sobre', href: 'sobre' },
    { label: 'Equipe', href: 'equipe' },
    { label: 'Servicos', href: 'servicos' },
    { label: 'Galeria', href: 'galeria' },
    { label: 'Contato', href: 'contato' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logoBranca}
              className="w-[140px] h-auto mb-6"
              alt="Wave Odontologia Especializada Logo"
            />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Cuidando do seu sorriso com excelencia e dedicacao. 
              Tecnologia de ponta aliada ao atendimento humanizado.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <button
                onClick={() => redirectTo('instagram')}
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => redirectTo('facebook')}
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-6">Links Rapidos</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-background/70 hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-6">Servicos</h4>
            <ul className="space-y-3">
              {['Facetas em Porcelana', 'Implantes Dentarios', 'Clareamento', 'Ortodontia', 'Odontologia Geral'].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-background/70">
                  <p>Rua Manoel Correa, 1837</p>
                  <p>Palmital - Paranagua-PR</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a 
                  href={`tel:+${numeroWhatsApp}`}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  (41) 99819-7571
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-background/70">
                  8h-12h e 14h-18h30
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60 text-center md:text-left">
              &copy; {currentYear} Wave Odontologia Especializada. Todos os direitos reservados.
            </p>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors"
              aria-label="Voltar ao topo"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
