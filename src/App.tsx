import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Representadas from './pages/Representadas';
import Distribuidores from './pages/Distribuidores';
import LojistasOnline from './pages/LojistasOnline';
import Contato from './pages/Contato';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/representadas" element={<Representadas />} />
          <Route path="/distribuidores" element={<Distribuidores />} />
          <Route path="/lojistas-online" element={<LojistasOnline />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
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
  style={{
    bottom: 'max(1.5rem, env(safe-area-inset-bottom))',
    right: 'max(1.5rem, env(safe-area-inset-right))'
  }}
  className="
    fixed z-[9999]
    bg-[#25D366] text-white
    p-4 rounded-full
    shadow-2xl
    transition-all duration-300
    hover:scale-110
    flex items-center gap-2
    group
    animate-pulse hover:animate-none
  "
>
  {/* ÍCONE */}
  <FaWhatsapp className="w-7 h-7" />

  {/* TEXTO (SÓ DESKTOP / HOVER) */}
  <span
    className="
      hidden md:inline-block
      max-w-0 overflow-hidden
      group-hover:max-w-xs
      transition-all duration-300
      whitespace-nowrap
      font-bold
    "
  >
    Conversar no WhatsApp
  </span>
</a>

    </div>
  );
};

export default App;
