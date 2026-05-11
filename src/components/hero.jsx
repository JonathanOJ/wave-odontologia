import * as React from 'react';
import fachada from '@/assets/fachada.jpg';
import { Smile, Calendar, Zap, Award, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';

export default function Hero() {
  const numeroWhatsApp = '5541998197571';

  const scrollSmooth = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const redirectToWpp = () => {
    const mensagem = 'Ola, gostaria de agendar uma consulta.';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const highlights = [
    'Tecnologia de ponta',
    'Atendimento humanizado',
    'Especialistas qualificados',
  ];

  const differentials = [
    {
      icon: Zap,
      title: 'Tecnologia Avancada',
      description: 'Equipamentos de ultima geracao para diagnosticos precisos e tratamentos mais eficazes.',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Award,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e experientes, sempre atualizados com as melhores praticas.',
      color: 'bg-accent/20 text-accent-foreground',
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Cuidado personalizado e acolhedor, pensando no conforto e bem-estar de cada paciente.',
      color: 'bg-secondary text-secondary-foreground',
    },
  ];

  return (
    <section id="inicio" className="relative">
      {/* Hero Main */}
      <div className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
        
        {/* Content Side */}
        <div className="relative z-10 flex items-center w-full lg:w-[45%] pt-24 pb-8 lg:py-0 px-4 lg:px-8 xl:px-16">
          <div className="max-w-xl mx-auto lg:mx-0 animate-fade-in-up">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
              Seu dentista em Paranagua
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
              Seu Sorriso Merece o{' '}
              <span className="text-primary">Melhor Cuidado</span>
            </h1>
            
            <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
              Odontologia especializada em Paranagua com tecnologia de ponta e atendimento humanizado. 
              Aqui voce encontra qualidade pensada em voce e em seu bem-estar.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={redirectToWpp}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={() => scrollSmooth('servicos')} 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-secondary hover:text-secondary-foreground"
              >
                <Smile className="w-5 h-5 mr-2" />
                Conhecer Servicos
              </Button>
            </div>

            {/* Stats - visible on mobile */}
            <div className="flex gap-6 mt-8 lg:hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">+500</p>
                  <p className="text-xs text-muted-foreground">Pacientes</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">10+ Anos</p>
                  <p className="text-xs text-muted-foreground">Experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Side - Takes more space */}
        <div className="relative w-full lg:w-[55%] h-[50vh] sm:h-[60vh] lg:h-screen animate-fade-in">
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl translate-x-1/2" />
          
          {/* Main Image Container */}
          <div className="relative h-full">
            <img
              src={fachada}
              alt="Equipe Wave Odontologia - Dentistas especializados e fachada da clinica em Paranagua"
              className="w-full h-full object-cover lg:rounded-l-3xl"
            />
            {/* Subtle overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent lg:rounded-l-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent lg:rounded-l-3xl" />
          </div>

          {/* Floating Card - Desktop only */}
          <div className="hidden lg:block absolute bottom-12 left-8 bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl p-5 border border-border animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-xl">+500</p>
                <p className="text-sm text-muted-foreground">Pacientes satisfeitos</p>
              </div>
            </div>
          </div>

          {/* Second Floating Card */}
          <div className="hidden lg:block absolute top-24 left-8 bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-border animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">10+ Anos</p>
                <p className="text-xs text-muted-foreground">de experiencia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block animate-bounce z-20">
          <button 
            onClick={() => scrollSmooth('sobre')}
            className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 bg-background/50 backdrop-blur-sm flex items-start justify-center p-2"
            aria-label="Rolar para baixo"
          >
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
          </button>
        </div>
      </div>

      {/* Differentials Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
              Diferenciais
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
              Por que escolher a Wave?
            </h2>
            <p className="text-muted-foreground text-lg">
              Combinamos tecnologia avancada, equipe especializada e atendimento humanizado 
              para oferecer a melhor experiencia odontologica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {differentials.map((item, index) => (
              <Card 
                key={item.title} 
                className={`card-hover border-border/50 bg-card animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
