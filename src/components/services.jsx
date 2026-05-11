import * as React from 'react';
import { useState } from 'react';
import facetaPorcelana from '@/assets/faceta-porcelana.jpg';
import facetaResina from '@/assets/faceta-resina.jpg';
import clareamento from '@/assets/clareamento.jpg';
import { 
  Star, Award, Heart, Smile, Shield, Zap, 
  Stethoscope, Activity, Scissors, Eye, X, ZoomIn 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';

export default function Services() {
  const [zoomImage, setZoomImage] = useState(null);

  const services = [
    {
      icon: Smile,
      title: 'Facetas em Resina',
      description: 'Transformacao do sorriso com facetas em resina de alta qualidade.',
    },
    {
      icon: Star,
      title: 'Facetas em Porcelana',
      description: 'Facetas em porcelana para resultados duradouros e naturais.',
    },
    {
      icon: Zap,
      title: 'Clareamento Dental',
      description: 'Clareamento profissional para um sorriso mais branco e radiante.',
    },
    {
      icon: Shield,
      title: 'Implantes Dentarios',
      description: 'Implantes de alta qualidade para reposicao de dentes perdidos.',
    },
    {
      icon: Activity,
      title: 'Aparelho Ortodontico',
      description: 'Correcao do alinhamento dos dentes para um sorriso perfeito.',
    },
    {
      icon: Eye,
      title: 'Alinhadores Invisiveis',
      description: 'Alternativa discreta e confortavel para o alinhamento dos dentes.',
    },
    {
      icon: Stethoscope,
      title: 'Endodontia Mecanizada',
      description: 'Tratamento de canal com tecnologia avancada para maior precisao.',
    },
    {
      icon: Scissors,
      title: 'Tratamento de Canal',
      description: 'Remocao de infeccoes e restauracao da saude do dente.',
    },
    {
      icon: Award,
      title: 'Extracao de Siso',
      description: 'Extracao segura e cuidadosa dos dentes do siso.',
    },
    {
      icon: Heart,
      title: 'Odontologia Geral',
      description: 'Atendimento completo para toda a familia com cuidado especializado.',
    },
  ];

  const gallery = [
    { 
      src: facetaResina, 
      title: 'Facetas em Resina', 
      description: 'Antes e depois' 
    },
    { 
      src: facetaPorcelana, 
      title: 'Facetas em Porcelana', 
      description: 'Resultado natural' 
    },
    { 
      src: clareamento, 
      title: 'Clareamento', 
      description: 'Transformacao do sorriso' 
    },
  ];

  return (
    <section id="servicos">
      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Tratamentos
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
              Nossos Servicos
            </h2>
            <p className="text-muted-foreground text-lg">
              Oferecemos uma gama completa de tratamentos odontologicos especializados 
              para cuidar do seu sorriso
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="card-hover border-border/50 bg-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-5">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
              Resultados
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
              Galeria de Casos
            </h2>
            <p className="text-muted-foreground text-lg">
              Veja alguns dos nossos trabalhos e transformacoes realizadas com excelencia
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {gallery.map((item, index) => (
              <div 
                key={item.title}
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setZoomImage(item.src)}
              >
                <div className="aspect-[4/5] img-zoom-container">
                  <img
                    loading="lazy"
                    src={item.src}
                    alt={`Caso de ${item.title} mostrando antes e depois`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-primary-foreground/70 text-sm mb-1">{item.description}</p>
                    <h3 className="text-primary-foreground font-semibold text-lg">{item.title}</h3>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              alt="Imagem ampliada do caso"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
