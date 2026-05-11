import * as React from 'react';
import { useState } from 'react';
import recepcao from '@/assets/recepcao.jpg';
import salaNicolle from '@/assets/sala-nicolle.jpg';
import salaMurilo from '@/assets/sala-murilo.jpg';
import fotoLoja from '@/assets/foto-loja.jpg';
import { Badge } from '@/components/ui/badge.jsx';
import { Phone, MapPin, Clock, X } from 'lucide-react';

export default function About() {
  const [zoomImage, setZoomImage] = useState(null);

  const images = [
    { src: fotoLoja, alt: 'Fachada da clinica Wave Odontologia', className: '' },
    { src: recepcao, alt: 'Recepcao da clinica', className: 'mt-8' },
    { src: salaNicolle, alt: 'Consultorio Dra. Nicolle', className: '-mt-8' },
    { src: salaMurilo, alt: 'Consultorio Dr. Murilo', className: '' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Endereco',
      value: 'Rua Manoel Correa 1837, Palmital - Paranagua',
      color: 'text-primary',
    },
    {
      icon: Clock,
      label: 'Horario',
      value: '8h-12h e 14h-18h30',
      color: 'text-primary',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '(41) 99819-7571',
      color: 'text-primary',
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Sobre Nos
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
              Invista em seu sorriso
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Aqui na Wave Odontologia Especializada contamos com uma equipe de dentistas 
              especialistas, prontos para dar o melhor atendimento para voce e sua familia!
            </p>
            
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Estamos localizados no endereco Rua Manoel Correa 1837, bairro Palmital em Paranagua, 
              com atendimento das 8h-12h e 14h-18h30. Nossa clinica foi projetada para oferecer 
              conforto e tranquilidade durante seu tratamento.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div 
                  key={info.label}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50 transition-all duration-200 hover:shadow-md hover:border-primary/20"
                >
                  <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`img-zoom-container rounded-xl overflow-hidden shadow-lg cursor-pointer ${image.className}`}
                  onClick={() => setZoomImage(image.src)}
                >
                  <img
                    loading="lazy"
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-foreground/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-4xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-background hover:text-primary transition-colors p-2"
              onClick={() => setZoomImage(null)}
              aria-label="Fechar imagem"
            >
              <X className="w-8 h-8" />
            </button>

            <img
              src={zoomImage}
              alt="Imagem ampliada"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
