import React from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import About from './components/about';
import Team from './components/team';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Wave Odontologia | Clínica Odontológica em Paranaguá</title>
        <meta
          name="description"
          content="A Wave Odontologia em Paranaguá oferece facetas, implantes, clareamento e ortodontia com especialistas. Atendimento humanizado e tecnologia moderna."
        />
        <meta
          name="keywords"
          content="dentista Paranaguá, odontologia especializada, faceta de porcelana, implante dentário, clareamento dental, ortodontia"
        />
        <meta name="author" content="Wave Odontologia" />
      </Helmet>

      {/* Header */}
      <header className="bg-[#9b9b9b] shadow-sm border-b sticky top-0 z-50">
        <Navbar />
      </header>

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Sobre a Clínica */}
        <About />

        {/* Equipe */}
        <Team />

        {/* Serviços */}
        <Services />

        {/* Contato */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;

