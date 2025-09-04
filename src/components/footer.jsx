import * as React from 'react';
import logoBranca from '@/assets/logo-wave-branca.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoBranca} className="w-[150px] h-[75px] rounded-lg" alt="Wave Odontologica Especializada" />
            </div>
            <p className="text-gray-400 text-sm">Cuidando do seu sorriso com excelência e dedicação.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2 text-sm">
              <a href="#inicio" className="text-gray-400 hover:text-white block">
                Início
              </a>
              <a href="#sobre" className="text-gray-400 hover:text-white block">
                Sobre
              </a>
              <a href="#servicos" className="text-gray-400 hover:text-white block">
                Serviços
              </a>
              <a href="#equipe" className="text-gray-400 hover:text-white block">
                Equipe
              </a>
              <a href="#contato" className="text-gray-400 hover:text-white block">
                Contato
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Rua Manoel Corrêa, 1837</p>
              <p>Palmital - Paranaguá-PR</p>
              <p>(41) 99819-7571</p>
              <p>8h-12h e 14h-18h30</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Wave Odontologia Especializada. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

