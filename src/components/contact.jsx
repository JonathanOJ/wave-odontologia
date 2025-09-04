import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
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

  const [errorModal, setErrorModal] = useState(null);

  useEffect(() => {
    if (errorModal) {
      const timer = setTimeout(() => setErrorModal(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorModal]);

  const enviarParaWhatsApp = () => {
    const nome = nomeRef.current?.value.trim();
    const servico = servicoRef.current?.value;

    const novoErro = {
      nome: !nome,
      servico: servico === 'Selecione um serviço',
    };

    if (novoErro.nome || novoErro.servico) {
      setErros(novoErro);
      setErrorModal('Por favor, preencha todos os campos corretamente antes de continuar.');
      return;
    }

    setErros({});
    const mensagem = `Olá, meu nome é ${nome}%0A` + `Tenho interesse no serviço: ${servico}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.open(url, '_blank');
  };

  const redirectTo = (platform) => {
    const urls = {
      instagram: 'https://www.instagram.com/wave.odontologia/',
      facebook: 'https://www.facebook.com/profile.php?id=61576803860631#',
    };
    window.open(urls[platform], '_blank');
  };

  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
          <p className=" max-w-2xl mx-auto">Aguardamos você, para proporcionar o que o seu sorriso merece!</p>
        </div>

        <div className="sm:w-[60%] w-full h-[450px] rounded-lg overflow-hidden shadow-lg mx-auto mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.472537024115!2d-48.51823062494421!3d-25.522632136562677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db9a5efa657bb7%3A0xefd13a7332e567a8!2sR.%20Manoel%20Corr%C3%AAa%2C%201837%20-%20Palmital%2C%20Paranagu%C3%A1%20-%20PR%2C%2083206-030!5e0!3m2!1spt-BR!2sbr!4v1753460476647!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <p>Rua Manoel Corrêa, 1837</p>
                  <p>Palmital - Paranaguá-PR</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <p>(41) 99819-7571</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="font-medium">Horário de Funcionamento</p>
                  <p>8h-12h e 14h-18h30</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Button
                  onClick={() => redirectTo('instagram')}
                  variant="outline"
                  size="sm"
                  className="text-blue-600 cursor-pointer border-white hover:bg-white"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button
                  onClick={() => redirectTo('facebook')}
                  variant="outline"
                  size="sm"
                  className="text-blue-600 cursor-pointer border-white hover:bg-white"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle>Agende sua Consulta</CardTitle>
                <CardDescription>Preencha o formulário ou entre em contato via WhatsApp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome</label>
                  <input
                    type="text"
                    ref={nomeRef}
                    className={`w-full p-2 border rounded-md ${erros.nome ? 'border-red-500' : ''}`}
                    placeholder="Seu nome completo"
                  />
                  {erros.nome && <p className="text-red-500 text-sm mt-1">Nome é obrigatório</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Serviço de Interesse</label>
                  <select
                    ref={servicoRef}
                    className={`w-full p-2 border rounded-md ${erros.servico ? 'border-red-500' : ''}`}
                  >
                    <option>Selecione um serviço</option>
                    <option>Facetas em Resina</option>
                    <option>Facetas em Porcelana</option>
                    <option>Clareamento Dental</option>
                    <option>Implantes Dentários</option>
                    <option>Dentes do Siso</option>
                    <option>Consulta Geral</option>
                  </select>
                  {erros.servico && <p className="text-red-500 text-sm mt-1">Selecione um serviço</p>}
                </div>

                <Button onClick={enviarParaWhatsApp} className="w-full bg-green-600 hover:bg-green-700 cursor-pointer">
                  <Phone className="w-4 h-4 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {errorModal && (
        <div className="fixed bottom-4 right-4 z-50 animate-slide-in">
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md relative min-w-[300px]">
            <button
              onClick={() => setErrorModal(null)}
              className="absolute cursor-pointer top-2 right-3 text-red-600 hover:text-red-800 text-lg"
            >
              &times;
            </button>
            <h2 className="font-semibold text-lg mb-1">Erro</h2>
            <p>{errorModal}</p>
          </div>
        </div>
      )}
    </section>
  );
}

