import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Send, AlertCircle, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';

export default function Contact() {
  const nomeRef = useRef(null);
  const servicoRef = useRef(null);
  const numeroWhatsApp = '5541998197571';

  const [erros, setErros] = useState({
    nome: false,
    servico: false,
  });

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const enviarParaWhatsApp = () => {
    const nome = nomeRef.current?.value.trim();
    const servico = servicoRef.current?.value;

    const novoErro = {
      nome: !nome,
      servico: servico === 'Selecione um servico',
    };

    if (novoErro.nome || novoErro.servico) {
      setErros(novoErro);
      setNotification({
        type: 'error',
        message: 'Por favor, preencha todos os campos corretamente.',
      });
      return;
    }

    setErros({});
    const mensagem = `Ola, meu nome e ${nome}.\nTenho interesse no servico: ${servico}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const redirectTo = (platform) => {
    const urls = {
      instagram: 'https://www.instagram.com/wave.odontologia/',
      facebook: 'https://www.facebook.com/profile.php?id=61576803860631',
    };
    window.open(urls[platform], '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereco',
      lines: ['Rua Manoel Correa, 1837', 'Palmital - Paranagua-PR'],
    },
    {
      icon: Phone,
      title: 'Telefone',
      lines: ['(41) 99819-7571'],
    },
    {
      icon: Clock,
      title: 'Horario de Funcionamento',
      lines: ['8h-12h e 14h-18h30'],
    },
  ];

  const services = [
    'Selecione um servico',
    'Facetas em Resina',
    'Facetas em Porcelana',
    'Clareamento Dental',
    'Implantes Dentarios',
    'Dentes do Siso',
    'Consulta Geral',
  ];

  return (
    <section id="contato" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Contato
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg">
            Aguardamos voce para proporcionar o que o seu sorriso merece!
          </p>
        </div>

        {/* Map */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.472537024115!2d-48.51823062494421!3d-25.522632136562677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db9a5efa657bb7%3A0xefd13a7332e567a8!2sR.%20Manoel%20Corr%C3%AAa%2C%201837%20-%20Palmital%2C%20Paranagu%C3%A1%20-%20PR%2C%2083206-030!5e0!3m2!1spt-BR!2sbr!4v1753460476647!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao Wave Odontologia"
              className="w-full"
            />
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Informacoes de Contato
            </h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => (
                <div 
                  key={info.title}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{info.title}</p>
                    {info.lines.map((line, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <Button
                  onClick={() => redirectTo('instagram')}
                  variant="outline"
                  size="sm"
                  className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button
                  onClick={() => redirectTo('facebook')}
                  variant="outline"
                  size="sm"
                  className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Agende sua Consulta</CardTitle>
              <CardDescription>
                Preencha o formulario e entraremos em contato via WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  ref={nomeRef}
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    erros.nome ? 'border-destructive ring-1 ring-destructive/50' : 'border-input'
                  }`}
                  placeholder="Seu nome completo"
                />
                {erros.nome && (
                  <p className="text-destructive text-sm mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Nome e obrigatorio
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="servico" className="block text-sm font-medium text-foreground mb-2">
                  Servico de Interesse
                </label>
                <select
                  id="servico"
                  ref={servicoRef}
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    erros.servico ? 'border-destructive ring-1 ring-destructive/50' : 'border-input'
                  }`}
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {erros.servico && (
                  <p className="text-destructive text-sm mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Selecione um servico
                  </p>
                )}
              </div>

              <Button 
                onClick={enviarParaWhatsApp} 
                className="w-full bg-[#25D366] hover:bg-[#20BD5C] text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:shadow-xl"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-in">
          <div className={`flex items-start gap-3 px-5 py-4 rounded-xl shadow-xl border ${
            notification.type === 'error' 
              ? 'bg-destructive/10 border-destructive/20 text-destructive' 
              : 'bg-primary/10 border-primary/20 text-primary'
          }`}>
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{notification.type === 'error' ? 'Erro' : 'Sucesso'}</p>
              <p className="text-sm opacity-90">{notification.message}</p>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="shrink-0 hover:opacity-70 transition-opacity"
              aria-label="Fechar notificacao"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
