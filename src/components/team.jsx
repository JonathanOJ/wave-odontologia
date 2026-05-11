import * as React from 'react';
import fotoNicolle from '@/assets/foto-nicolle.jpg';
import fotoMurilo from '@/assets/foto-murilo.jpg';
import { Badge } from '@/components/ui/badge.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { GraduationCap } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Dra. Nicolle Trappel',
      role: 'Dentistica Restauradora e Estetica Dental',
      image: fotoNicolle,
      credentials: [
        'Graduada pelo Centro de Ensino Superior dos Campos Gerais',
        'Especialista em Dentistica Restauradora pela ABO',
        'Curso de Aperfeicoamento em Cirurgia Oral Menor',
        'Especializada em estetica dental e protese',
      ],
    },
    {
      name: 'Dr. Murilo Pitlovanciv',
      role: 'Cirurgia Bucomaxilofacial e Implantodontia',
      image: fotoMurilo,
      credentials: [
        'Graduado pela Universidade Estadual de Ponta Grossa',
        'Cirurgiao bucomaxilofacial - Residencia HRCG',
        'Especialista em Implantodontia pela AEL',
        'Realiza procedimentos cirurgicos e implantes',
      ],
    },
  ];

  return (
    <section id="equipe" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
            Nossa Equipe
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
            Profissionais Dedicados ao Seu Bem-Estar
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheca os especialistas que cuidarao do seu sorriso com excelencia e dedicacao
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={member.name} 
              className="card-hover overflow-hidden border-border/50 bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-2/5 relative">
                    <div className="img-zoom-container h-64 sm:h-full sm:absolute sm:inset-0">
                      <img
                        loading="lazy"
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Gradient overlay on mobile */}
                    <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="sm:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-6">
                      {member.role}
                    </p>

                    <div className="space-y-3">
                      {member.credentials.map((credential, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <GraduationCap className="w-3 h-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {credential}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
