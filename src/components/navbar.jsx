import * as React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import logoBranca from '@/assets/logo-wave-branca.png';

export default function Navbar() {
  const numeroWhatsApp = '5541998197571';

  const redirectToWpp = () => {
    const mensagem = 'Olá, gostaria de agendar uma consulta.';
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.open(url, '_blank');
  };

  return (
    <nav className="container mx-auto px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            loading="lazy"
            src={logoBranca}
            className="w-[150px] h-[75px]"
            alt="Wave Odontologica Especializada Logo"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-white cursor-pointer text-gray-700 hover:text-blue-600 transition-colors">
            Início
          </a>
          <a href="#sobre" className="text-white cursor-pointer text-gray-700 hover:text-blue-600 transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="text-white cursor-pointer text-gray-700 hover:text-blue-600 transition-colors">
            Serviços
          </a>
          <a href="#equipe" className="text-white cursor-pointer text-gray-700 hover:text-blue-600 transition-colors">
            Equipe
          </a>
          <a href="#galeria" className="text-white cursor-pointer text-gray-700 hover:text-blue-600 transition-colors">
            Galeria
          </a>
          <a href="#contato" className="text-white cursor-pointer text-gray-700 hover:text-blue-600 transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 text-sm text-white">
            <Phone className="w-4 h-4" />
            <span>(41) 99819-7571</span>
          </div>
          <Button onClick={() => redirectToWpp()} className="bg-orange-500 hover:bg-orange-600 cursor-pointer">
            <Calendar className="w-4 h-4 mr-2" />
            Agendar Consulta
          </Button>
        </div>
      </div>
    </nav>
  );
}

