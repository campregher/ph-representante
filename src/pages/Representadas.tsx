import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Logos
import topMixLogo from '../img/imagem-1.png';
import ecoflexLogo from '../img/imagem-2.png';
import tigerLogo from '../img/imagem-3.png';
import megaLogo from '../img/imagem-4.png';
import attisLogo from '../img/imagem-5.png';
import sofisticarLogo from '../img/imagem-6.png';
import kitecLogo from '../img/imagem-7.png';
import tevicLogo from '../img/imagem-8.png';

const Representadas: React.FC = () => {
  const brands = [
    {
      name: 'Top Mix Automotive',
      slogan: 'Frisos e Borrachões',
      logo: topMixLogo,
      description: 'Especialista em acessórios externos para veículos, com foco em qualidade e durabilidade.',
    },
    {
      name: 'Ecoflex Automotive',
      slogan: 'Calha de chuva',
      logo: ecoflexLogo,
      description: 'Soluções inovadoras para proteção contra intempéries em automóveis.',
    },
    {
      name: 'Tiger Acessórios',
      slogan: 'Calotas, capas e pingadeiras',
      logo: tigerLogo,
      description: 'Produtos para personalização e proteção de rodas e acessórios externos.',
    },
    {
      name: 'Mega Automotive',
      slogan: 'Engates e protetores de cárter',
      logo: megaLogo,
      description: 'Componentes robustos para reboque e proteção do motor.',
    },
    {
      name: 'Attis Acessórios',
      slogan: 'Aparabarros e tapetes',
      logo: attisLogo,
      description: 'Acessórios para proteção e conforto interno do veículo.',
    },
    {
      name: 'Sofisticar Automotive',
      slogan: 'Apoios, grades e capas',
      logo: sofisticarLogo,
      description: 'Produtos premium para customização e funcionalidade.',
    },
    {
      name: 'Kitec Equipamentos',
      slogan: 'Carregadores e autotransformadores',
      logo: kitecLogo,
      description: 'Equipamentos elétricos para manutenção e emergência automotiva.',
    },
    {
      name: 'Tevic Tapetes',
      slogan: 'Tapetes e Puxa & Empurra',
      logo: tevicLogo,
      description: 'Tapetes personalizados e acessórios para transporte de cargas.',
    },
  ];

  return (
    <div className="relative antialiased bg-zinc-950 text-white">
      <Navbar />

      <section className="pt-28 lg:pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Marcas Representadas
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Trabalhamos com as principais marcas do setor automotivo, garantindo qualidade e confiabilidade para nossos parceiros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-transform"
              >
                <div className="h-16 flex items-center justify-center mb-6">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-12 max-w-[160px] object-contain"
                  />
                </div>

                <div className="text-xl font-black text-white mb-2">
                  {brand.name}
                </div>

                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-4">
                  {brand.slogan}
                </p>

                <p className="text-sm text-zinc-400">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Representadas;