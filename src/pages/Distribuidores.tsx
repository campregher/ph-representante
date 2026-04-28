import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { RiVipDiamondLine } from "react-icons/ri";

const Distribuidores: React.FC = () => {
  return (
    <div className="relative antialiased bg-zinc-950 text-white">
      <Navbar />

      <section className="pt-28 lg:pt-32 pb-24 bg-brand-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8">
              Atendimento Premium para Distribuição
            </h1>
            <p className="text-brand-100 text-xl mb-12">
              Fornecemos condições exclusivas para distribuidores: margem competitiva, faturamento B2B,
              estoque direto de fábrica e agilidade no pedido para você vender mais rápido.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-black/20 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <div className="text-3xl mb-4">💎</div>
                <h4 className="text-xl font-bold mb-2">Tabela para Distribuidor</h4>
                <p className="text-sm text-brand-100/70">Preço de atacado e condições para compra em volume.</p>
              </div>
              <div className="bg-black/20 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <div className="text-3xl mb-4">🚚</div>
                <h4 className="text-xl font-bold mb-2">Entrega Prioritária</h4>
                <p className="text-sm text-brand-100/70">Logística rápida com controle total dos pedidos.</p>
              </div>
              <div className="bg-black/20 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <div className="text-3xl mb-4">🧑‍💼</div>
                <h4 className="text-xl font-bold mb-2">Suporte para Revenda</h4>
                <p className="text-sm text-brand-100/70">Atendimento exclusivo para distribuidor e pós-venda dedicado.</p>
              </div>
              <div className="bg-black/20 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <div className="text-3xl mb-4">💰</div>
                <h4 className="text-xl font-bold mb-2">Condições Flexíveis</h4>
                <p className="text-sm text-brand-100/70">Parcelamentos e crédito para impulsionar seu estoque.</p>
              </div>
            </div>

            <a
              href="/contato"
              className="inline-block px-12 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl"
            >
              Solicitar Cadastro Distribuidor
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Distribuidores;