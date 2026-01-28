import React from 'react';
import Navbar from './components/Navbar';
import BrandsSection from './components/BrandsSection';
import EcommerceSection from './components/EcommerceConsulting';
import WholesaleSection from './components/WholesaleSection';
import Footer from './components/Footer';
import bannerImg from './img/banner.png';
import ContactForm from './components/ContactForm';

// WhatsApp
const WHATSAPP_NUMBER = '5511959993968';

const whatsappMessage = encodeURIComponent(
  'Olá! Quero escalar minhas vendas no Mercado Livre e Shopee.\n' +
  'Gostaria de entender como funciona a consultoria em conteúdo e anúncios.\n' 
  
);

const App: React.FC = () => {
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
              Representante Autorizado
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
              Sua Loja em <br />
              <span className="gradient-text">Alta Performance.</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Representação das maiores marcas do setor automotivo e consultoria
              estratégica para dominar Mercado Livre e Shopee. Escalamos seu
              faturamento com inteligência e Ads.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-600/20 hover:scale-105"
              >
                Quero Consultoria
              </a>

              <a
                href="#brands"
                className="px-8 py-4 glass-card border-white/10 hover:bg-white/5 text-white font-bold rounded-xl transition-all hover:scale-105"
              >
                Ver Marcas
              </a>
            </div>

            {/* MÉTRICAS */}
            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5 text-center">
              <div>
                <div className="text-3xl font-black">60+</div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest">
                  Lojistas Parceiros
                </div>
                <p className="text-xs text-zinc-500 mt-2 max-w-xs mx-auto">
                  Lojas atendidas em todo o Brasil com estratégias validadas em
                  Marketplace.
                </p>
              </div>

              <div>
                <div className="text-3xl font-black">15+</div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest">
                  Anos de Experiência
                </div>
                <p className="text-xs text-zinc-500 mt-2 max-w-xs mx-auto">
                  Expertise prática em Mercado Livre, Shopee, Ads e escala
                  operacional.
                </p>
              </div>
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

      {/* MARCAS */}
      <section id="brands">
        <BrandsSection />
      </section>

      {/* CONSULTORIA */}
      <section id="consultoria">
        <EcommerceSection />
        <ContactForm />
      </section>

      {/* ATACADO */}
      <WholesaleSection />

      <Footer />

      {/* WHATSAPP FLOAT */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">
          Conversar Agora
        </span>
      </a>
    </div>
  );
};

export default App;
