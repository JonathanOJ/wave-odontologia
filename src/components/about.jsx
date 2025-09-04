import * as React from 'react';
import recepcao from '@/assets/recepcao.jpg';
import salaNicolle from '@/assets/sala-nicolle.jpg';
import salaMurilo from '@/assets/sala-murilo.jpg';
import fotoLoja from '@/assets/foto-loja.jpg';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge.jsx';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function About() {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-green-100 text-green-800">Sobre Nós</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Invista em seu sorriso</h2>
            <p className="text-lg text-gray-600 mb-6">
              Aqui na Wave Odontologia Especializada contamos com uma equipe de dentistas especialistas, prontos para
              dar o melhor atendimento para você e sua família!
            </p>
            <p className="text-gray-600 mb-8">
              Estamos localizados no endereço Rua Manoel Corrêa 1837, bairro Palmital em Paranaguá, com atendimento das
              8h-12h e 14h-18h30.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Rua Manoel Corrêa 1837, Palmital - Paranaguá</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">8h-12h e 14h-18h30</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700">(41) 99819-7571</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              loading="lazy"
              src={fotoLoja}
              alt="Fachada da clínica"
              className="rounded-lg shadow-md cursor-pointer"
              onClick={() => setZoomImage(fotoLoja)}
            />
            <img
              loading="lazy"
              src={recepcao}
              alt="Interior da clínica"
              className="rounded-lg shadow-md mt-8 cursor-pointer"
              onClick={() => setZoomImage(recepcao)}
            />
            <img
              loading="lazy"
              src={salaNicolle}
              alt="Consultório"
              className="rounded-lg shadow-md -mt-8 cursor-pointer"
              onClick={() => setZoomImage(salaNicolle)}
            />
            <img
              loading="lazy"
              src={salaMurilo}
              alt="Equipamentos"
              className="rounded-lg shadow-md cursor-pointer"
              onClick={() => setZoomImage(salaMurilo)}
            />
          </div>
        </div>
      </div>

      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute cursor-pointer top-0 right-2 text-white text-3xl font-bold z-50 hover:text-red-500 transition-colors"
              onClick={() => setZoomImage(null)}
            >
              &times;
            </button>

            <img
              loading="lazy"
              src={zoomImage}
              alt="Zoom da imagem selecionada"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg transition-transform duration-300 transform scale-100"
            />
          </div>
        </div>
      )}
    </section>
  );
}

