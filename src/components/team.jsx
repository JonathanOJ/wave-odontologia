import * as React from 'react';
import fotoNicolle from '@/assets/foto-nicolle.jpg';
import fotoMurilo from '@/assets/foto-murilo.jpg';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card.jsx';

export default function Team() {
  return (
    <section id="equipe" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Profissionais especializados e dedicados ao seu bem-estar</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="hover:shadow-lg sm:gap-6 gap-4 transition-shadow p-4 flex sm:flex-row flex-column w-full">
            <img
              src={fotoNicolle}
              alt="Dra. Nicolle Trappel"
              className="object-cover sm:w-[300px] w-full sm:h-[375px] h-[250px] rounded-lg shadow-lg"
            />

            <CardContent className="sm:pt-4 px-0">
              <CardTitle className="text-xl">Dra. Nicolle Trappel</CardTitle>
              <CardDescription className="pt-1 pb-4">Dentística Restauradora e Estética Dental</CardDescription>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Graduada pelo Centro de Ensino Superior dos Campos Gerais</p>
                <p>• Especialista em Dentística Restauradora pela ABO</p>
                <p>• Curso de Aperfeiçoamento em Cirurgia Oral Menor</p>
                <p>• Especializada em estética dental e prótese</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg sm:gap-6 gap-4 transition-shadow p-4 flex sm:flex-row flex-column w-full">
            <img
              src={fotoMurilo}
              alt="Dr. Murilo Pitlovanciv"
              className="object-cover sm:w-[300px] w-full sm:h-[375px] h-[250px] rounded-lg shadow-lg"
            />

            <CardContent className="sm:pt-4 px-0">
              <CardTitle className="text-xl">Dr. Murilo Pitlovanciv</CardTitle>
              <CardDescription className="pt-1 pb-4">Cirurgia Bucomaxilofacial e Implantodontia</CardDescription>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Graduado pela Universidade Estadual de Ponta Grossa</p>
                <p>• Cirurgião bucomaxilofacial - Residência HRCG</p>
                <p>• Especialista em Implantodontia pela AEL</p>
                <p>• Realiza procedimentos cirúrgicos e implantes</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

