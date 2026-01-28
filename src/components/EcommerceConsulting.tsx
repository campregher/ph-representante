import React from 'react';

// Logos marketplaces
import mercadoLivreLogo from '../img/mercado-livre.png';
import shopeeLogo from '../img/shopee.png';

const WHATSAPP_NUMBER = '5511959993968';

const whatsappMessage = encodeURIComponent(
  'Olá! Quero escalar minhas vendas no Mercado Livre e Shopee.\n' +
  'Gostaria de entender como funciona a consultoria em conteúdo e anúncios.'
);

const EcommerceConsulting: React.FC = () => {
  const features = [
    {
      title: 'Conteúdo que Converte',
      desc: 'Criação estratégica de títulos, descrições e imagens pensadas para ranquear e vender.',
      icon: '✍️',
    },
    {
      title: 'Anúncios em Massa',
      desc: 'Publicação e padronização de grandes catálogos com foco em escala e consistência.',
      icon: '📦',
    },
    {
      title: 'Gestão Profissional de Ads',
      desc: 'Product Ads orientado a dados, ROAS e giro de estoque.',
      icon: '📈',
    },
    {
      title: 'SEO para Marketplaces',
      desc: 'Palavras-chave, variações e estrutura que dominam os resultados de busca.',
      icon: '🔎',
    },
  ];

  return (
    <section id="ecommerce" className="py-24 bg-zinc-900 overflow-hidden relative">
      {/* Blurs decorativos */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* TEXTO */}
          <div className="lg:w-1/2">
            <h2 className="text-brand-500 font-bold tracking-widest uppercase mb-2 text-sm">
              Consultoria em Marketplaces
            </h2>

            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Conteúdo, anúncios e estratégia para escalar vendas
            </h3>

            <p className="text-zinc-400 text-lg mb-8">
              Atuamos diretamente na criação de anúncios, conteúdo e campanhas pagas.
              Tudo é pensado para gerar tráfego qualificado, conversão e crescimento sustentável
              dentro dos marketplaces.
            </p>

            {/* MARKETPLACES */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center">
                  <img src={mercadoLivreLogo} alt="Mercado Livre" className="h-6 object-contain" />
                </div>
                <div>
                  <h4 className="font-bold">Mercado Livre</h4>
                  <p className="text-sm text-zinc-500">
                    Anúncios otimizados, SEO técnico e gestão de Product Ads.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <img src={shopeeLogo} alt="Shopee" className="h-6 object-contain" />
                </div>
                <div>
                  <h4 className="font-bold">Shopee</h4>
                  <p className="text-sm text-zinc-500">
                    Conteúdo estratégico, campanhas e aumento de visibilidade.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA WHATSAPP */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 w-fit"
            >
              Quero escalar minhas vendas
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* CARDS */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
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
  );
};

export default EcommerceConsulting;
