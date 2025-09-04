import * as React from 'react';
import fachada from '@/assets/fachada.jpg';
import { Smile, Calendar, Zap, Award, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

export default function Hero() {
  const scrollSmooth = (elementId) => {
    const contato = document.getElementById(elementId);
    if (contato) {
      contato.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio">
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-green-50 py-20 sm:py-30 sm:h-[550px]">
        <div className="container mx-auto px-4">
          <div className="relative items-center">
            <div className="sm:mr-[520px]">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Seu dentista em Paranaguá</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Seu Sorriso Merece o<span className="text-blue-600"> Melhor Cuidado</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Odontologia especializada em Paranaguá com tecnologia de ponta e atendimento humanizado. Aqui você
                encontra qualidade pensada em você e em seu bem-estar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() => scrollSmooth('contato')}
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 cursor-pointer"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
                <Button onClick={() => scrollSmooth('servicos')} size="lg" variant="outline" className="cursor-pointer">
                  <Smile className="w-5 h-5 mr-2" />
                  Conhecer Serviços
                </Button>
              </div>
            </div>

            <div className="sm:flex hidden absolute right-0 top-[-170px]">
              <img
                loading="lazy"
                src={fachada}
                alt="Clínica Wave Odontologia Especializada em Paranaguá - Fachada"
                className="w-[500px] h-[700px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Diferenciais */}
      <section className="py-16 bg-white relative z-[10]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher a Wave?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combinamos tecnologia avançada, equipe especializada e atendimento humanizado para oferecer a melhor
              experiência odontológica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Tecnologia Avançada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Equipamentos de última geração para diagnósticos precisos e tratamentos mais eficazes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Equipe Especializada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Profissionais qualificados e experientes, sempre atualizados com as melhores práticas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Atendimento Humanizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cuidado personalizado e acolhedor, pensando no conforto e bem-estar de cada paciente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </section>
  );
}

