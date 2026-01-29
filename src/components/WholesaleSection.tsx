
import React from 'react';
import { RiVipDiamondLine } from "react-icons/ri";
const WholesaleSection: React.FC = () => {
  return (
    <section id="wholesale" className="py-24 bg-brand-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-white/80 font-black uppercase tracking-widest mb-4">Negócio de Gente Grande</h2>
        <h3 className="text-4xl md:text-6xl font-black text-white mb-8">Atendimento no Atacado</h3>
        <p className="text-brand-100 text-xl max-w-2xl mx-auto mb-12">
          Preços de fábrica e condições exclusivas de faturamento. Seja um revendedor autorizado das marcas mais desejadas do mercado.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-black/20 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            <div className="text-3xl mb-4">💎</div>
            <h4 className="text-xl font-bold mb-2">Tabelas Exclusivas</h4>
            <p className="text-sm text-brand-100/70">As melhores margens para o lojista crescer com segurança.</p>
          </div>
          <div className="bg-black/20 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            <div className="text-3xl mb-4">🚚</div>
            <h4 className="text-xl font-bold mb-2">Logística Ágil</h4>
            <p className="text-sm text-brand-100/70">Despacho imediato e acompanhamento total do pedido.</p>
          </div>
          <div className="bg-black/20 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            <div className="text-3xl mb-4">🧑‍💼</div>
            <h4 className="text-xl font-bold mb-2">Pós-venda Direto</h4>
            <p className="text-sm text-brand-100/70">Garantia facilitada e suporte técnico em tempo real.</p>
          </div>
          <div className="bg-black/20 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            <div className="text-3xl mb-4">💰</div>
            <h4 className="text-xl font-bold mb-2">Condições de Pagamentos</h4>
            <p className="text-sm text-brand-100/70">Mais flexibilidade para seu financeiro.</p>
          </div>
        </div>
        
        <a
  href={`https://wa.me/5511959993968?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar a tabela de preços para atacado. Venho do site phrepresentante.com.br"
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-12 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl"
>
  Solicitar Tabela de Preços
</a>

      </div>
    </section>
  );
};

export default WholesaleSection;
