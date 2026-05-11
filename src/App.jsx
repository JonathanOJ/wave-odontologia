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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Wave Odontologia | Clinica Odontologica em Paranagua</title>
        <meta
          name="description"
          content="A Wave Odontologia em Paranagua oferece facetas, implantes, clareamento e ortodontia com especialistas. Atendimento humanizado e tecnologia moderna."
        />
        <meta
          name="keywords"
          content="dentista Paranagua, odontologia especializada, faceta de porcelana, implante dentario, clareamento dental, ortodontia"
        />
        <meta name="author" content="Wave Odontologia" />
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <Navbar />
      </header>

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Sobre a Clinica */}
        <About />

        {/* Equipe */}
        <Team />

        {/* Servicos */}
        <Services />

        {/* Contato */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
