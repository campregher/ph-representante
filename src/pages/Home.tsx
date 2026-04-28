import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bannerImg from '../img/banner.png';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_DISTRIBUIDOR = '5511959993968';
const WHATSAPP_LOJISTA = '5511959993968'; // Ajustar se necessário

const Home: React.FC = () => {
  return (
    <div className="relative antialiased bg-zinc-950 text-white">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-28 lg:pt-32 overflow-hidden"
      >
        {/* Glow */}
        <div className="hero-glow -top-20 -left-20"></div>
        <div className="hero-glow -bottom-20 -right-20 opacity-50"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* TEXTO */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Conectamos grandes marcas a grandes oportunidades
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
              Sua Loja em <br />
              <span className="gradient-text">Alta Performance Distribuidora.</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Representamos marcas automotivas com condições especiais para distribuidores,
              atacadistas e revendedores. Estoque garantido, preço de fábrica e aprovação
              rápida para pedido em grande volume.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.22em] text-zinc-300">
                Pedido B2B em 24h
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.22em] text-zinc-300">
                Margem diferenciada
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.22em] text-zinc-300">
                Parceria para distribuidor
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-8">
              <a
                href="/distribuidores"
                className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-600/20 hover:scale-105"
              >
                Sou Distribuidor
              </a>

              <a
                href="/lojistas-online"
                className="px-8 py-4 glass-card border-white/10 hover:bg-white/5 text-white font-bold rounded-xl transition-all hover:scale-105"
              >
                Sou Lojista Online
              </a>
            </div>
          </div>

          {/* BANNER */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative z-10 glass-card rounded-[2rem] p-3 sm:p-4 border-white/10 shadow-2xl w-full max-w-md lg:max-w-none lg:rotate-2">
              <img
                src={bannerImg}
                alt="Automotive Excellence"
                className="rounded-[1.5rem] w-full h-[260px] sm:h-[340px] lg:h-[500px] object-cover"
              />

              <div className="absolute -bottom-5 -left-5 glass-card p-4 sm:p-6 rounded-2xl border-white/20 shadow-xl">
                <div className="text-brand-400 font-black text-2xl sm:text-3xl">
                  Ads 360°
                </div>
                <div className="text-xs sm:text-sm text-zinc-400">
                  Conversão em Massa
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PERFIS */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Dois perfis, uma solução completa
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Atendemos exclusivamente empresas do setor automotivo com modelos de negócio diferenciados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* DISTRIBUIDORES */}
            <div className="glass-card p-8 rounded-3xl border-white/10">
              <h3 className="text-2xl font-black text-white mb-4">Distribuidores</h3>
              <p className="text-zinc-400 mb-6">
                Preços exclusivos de fábrica, condições especiais de pagamento e suporte dedicado para revenda em volume.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                <li>✔ Preços de atacado</li>
                <li>✔ Condições especiais</li>
                <li>✔ Estoque garantido</li>
                <li>✔ Suporte B2B</li>
              </ul>
              <a href="/distribuidores" className="inline-block px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl transition">
                Saiba mais
              </a>
            </div>

            {/* LOJISTAS */}
            <div className="glass-card p-8 rounded-3xl border-white/10">
              <h3 className="text-2xl font-black text-white mb-4">Lojistas Online</h3>
              <p className="text-zinc-400 mb-6">
                Modelo dropshipping sem estoque, integração com marketplaces e anúncios otimizados para conversão.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                <li>✔ Sem estoque</li>
                <li>✔ Dropshipping</li>
                <li>✔ Mercado Livre & Shopee</li>
                <li>✔ Anúncios profissionais</li>
              </ul>
              <a href="/lojistas-online" className="inline-block px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl transition">
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Por que escolher a PH Representante?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-xl font-bold mb-2">Marcas Premium</h4>
              <p className="text-zinc-400">Representamos as melhores marcas do mercado automotivo.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-2">Agilidade</h4>
              <p className="text-zinc-400">Processos otimizados para aprovação rápida de pedidos.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold mb-2">Parceria</h4>
              <p className="text-zinc-400">Relacionamento próximo e suporte contínuo.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;