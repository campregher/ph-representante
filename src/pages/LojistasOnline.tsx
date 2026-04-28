import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PiStrategy } from "react-icons/pi";
import { PiBoxArrowDownFill } from "react-icons/pi";
import { PiMoney } from "react-icons/pi";

// Logos marketplaces
import mercadoLivreLogo from '../img/mercado-livre.png';
import shopeeLogo from '../img/shopee.png';

const LojistasOnline: React.FC = () => {
  const features = [
    {
      title: 'Sem Estoque',
      desc: 'Você vende sem precisar armazenar produtos. Receba pedidos e nós cuidamos do envio.',
      icon: <PiBoxArrowDownFill className="w-20 h-20"/>,
    },
    {
      title: 'Anúncios Otimizados',
      desc: 'Criamos e gerenciamos anúncios profissionais nos marketplaces para maximizar vendas.',
      icon: <PiStrategy className="w-20 h-20"/>,
    },
    {
      title: 'Gestão Completa',
      desc: 'Cuidamos de tudo: produção, embalagem, envio e atendimento ao cliente.',
      icon: <PiMoney className="w-20 h-20 "/>,
    },
  ];

  return (
    <div className="relative antialiased bg-zinc-950 text-white">
      <Navbar />

      <section className="pt-28 lg:pt-32 pb-24 bg-zinc-900 overflow-hidden relative">
        {/* Blurs decorativos */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* TEXTO */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Dropshipping para Lojistas Online
              </h1>

              <p className="text-zinc-400 text-lg mb-8">
                Modelo de negócio completo para lojistas que querem vender acessórios automotivos
                sem se preocupar com estoque, produção ou logística. Focamos no seu crescimento.
              </p>

              {/* MARKETPLACES */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-yellow-400/10 rounded-xl flex items-center justify-center">
                    <img src={mercadoLivreLogo} alt="Mercado Livre" className="h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold">Mercado Livre</h4>
                    <p className="text-sm text-zinc-500">
                      Anúncios otimizados, SEO técnico e gestão de Product Ads.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-orange-500/10 rounded-xl flex items-center justify-center">
                    <img src={shopeeLogo} alt="Shopee" className="h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold">Shopee</h4>
                    <p className="text-sm text-zinc-500">
                      Conteúdo estratégico, campanhas e aumento de visibilidade.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/contato"
                className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 w-fit"
              >
                Quero começar com dropshipping
              </a>
            </div>

            {/* CARDS */}
            <div className="lg:w-1/2 grid grid-cols-1 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="glass-effect p-8 rounded-3xl hover:border-brand-500/40 transition-colors"
                >
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                  <p className="text-sm text-zinc-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LojistasOnline;