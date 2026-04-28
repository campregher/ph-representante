import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import bannerImg from '../assets/banner.jpg'; // ajuste se necessário

import BrandsSection from '../components/BrandsSection';
import EcommerceSection from '../components/EcommerceSection';
import ContactForm from '../components/ContactForm';
import WholesaleSection from '../components/WholesaleSection';
import Footer from '../components/Footer';

const WHATSAPP_NUMBER = '5511999999999'; // troque pelo seu número
const whatsappMessage = encodeURIComponent(
  'Olá! Vim pelo site e quero saber mais sobre a representação.'
);

const Home: React.FC = () => {
  return (
    <div className="relative">

      {/* HERO */}
      <section className="relative px-6 py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight">
              Representação Comercial
              <span className="block text-brand-500">Automotiva B2B</span>
            </h1>

            <p className="mt-6 text-zinc-400 max-w-xl">
              Conectamos distribuidores e lojistas online às melhores marcas do
              setor automotivo com estratégia, escala e performance.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl transition-all hover:scale-105"
              >
                Falar no WhatsApp
              </a>

              <a
                href="#brands"
                className="px-8 py-4 glass-card border-white/10 hover:bg-white/5 text-white font-bold rounded-xl transition-all hover:scale-105"
              >
                Ver Marcas
              </a>
            </div>

            {/* MÉTRICAS */}
            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5 text-center mt-10">
              <div>
                <div className="text-3xl font-black">60+</div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest">
                  Lojistas Parceiros
                </div>
                <p className="text-xs text-zinc-500 mt-2">
                  Lojas atendidas em todo o Brasil com estratégias validadas.
                </p>
              </div>

              <div>
                <div className="text-3xl font-black">15+</div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest">
                  Anos de Experiência
                </div>
                <p className="text-xs text-zinc-500 mt-2">
                  Expertise em marketplaces e escala operacional.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 glass-card rounded-[2rem] p-4 border-white/10 shadow-2xl w-full max-w-md lg:rotate-2">

              <img
                src={bannerImg}
                alt="Automotive"
                className="rounded-[1.5rem] w-full h-[300px] lg:h-[500px] object-cover"
              />

              <div className="absolute -bottom-5 -left-5 glass-card p-5 rounded-2xl border-white/20 shadow-xl">
                <div className="text-brand-500 font-black text-2xl">
                  Ads 360°
                </div>
                <div className="text-sm text-zinc-400">
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

      {/* FOOTER */}
      <Footer />

      {/* BOTÃO WHATSAPP FIXO */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="
          fixed bottom-6 right-6 z-[9999]
          bg-[#25D366] text-white
          p-4 rounded-full
          shadow-2xl
          hover:scale-110 transition
          flex items-center gap-2 group
        "
      >
        <FaWhatsapp className="w-7 h-7" />

        <span className="
          hidden md:inline-block
          max-w-0 overflow-hidden
          group-hover:max-w-xs
          transition-all duration-300
          whitespace-nowrap font-bold
        ">
          Conversar
        </span>
      </a>

    </div>
  );
};

export default Home;
