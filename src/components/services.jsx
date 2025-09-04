import * as React from 'react';
import facetaPorcelana from '@/assets/faceta-porcelana.jpg';
import facetaResina from '@/assets/faceta-resina.jpg';
import clareamento from '@/assets/clareamento.jpg';
import { useState } from 'react';
import { Star, Award, Heart, Smile, Shield, Zap, Stethoscope, Activity, Scissors, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

export default function Services() {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <section id="servicos">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de tratamentos odontológicos especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smile className="w-5 h-5 mr-2 text-blue-600" />
                  Facetas em Resina
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Transformação do sorriso com facetas em resina de alta qualidade.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-blue-600" />
                  Facetas em Porcelana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Facetas em porcelana para resultados duradouros e naturais.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-600" />
                  Clareamento Dental
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Clareamento profissional para um sorriso mais branco e radiante.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Implantes Dentários
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Implantes de alta qualidade para reposição de dentes perdidos.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-blue-600" />
                  Aparelho Ortodôntico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Correção do alinhamento dos dentes para um sorriso perfeito.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-blue-600" />
                  Alinhadores Invisíveis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Alternativa discreta e confortável para o alinhamento dos dentes.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
                  Endodontia Mecanizada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Tratamento de canal com tecnologia avançada para maior precisão.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scissors className="w-5 h-5 mr-2 text-blue-600" />
                  Tratamento de Canal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Remoção de infecções e restauração da saúde do dente.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Extração de Siso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Extração segura e cuidadosa dos dentes do siso.</p>
              </CardContent>
            </Card>

            <div></div>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-blue-600" />
                  Odontologia Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Atendimento completo para toda a família com cuidado especializado.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeria de Casos */}
      <section id="galeria" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Galeria de Casos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja alguns dos nossos trabalhos e transformações realizadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Facetas em Resina</h4>
                <div className="space-y-2">
                  <img
                    loading="lazy"
                    onClick={() => setZoomImage(facetaResina)}
                    src={facetaResina}
                    alt="Caso de Facetas em Resina mostrando antes e depois"
                    className="w-full rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Facetas em Porcelana</h4>
                <div className="space-y-2">
                  <img
                    loading="lazy"
                    onClick={() => setZoomImage(facetaPorcelana)}
                    src={facetaPorcelana}
                    alt="Mostrando o antes e depois das facetas em porcelana"
                    className="w-full rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Clareamento</h4>
                <div className="space-y-2">
                  <img
                    loading="lazy"
                    onClick={() => setZoomImage(clareamento)}
                    src={clareamento}
                    alt="Mostrando o antes e depois do clareamento dental"
                    className="w-full rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              alt="Zoom"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg transition-transform duration-300 transform scale-100"
            />
          </div>
        </div>
      )}
    </section>
  );
}

