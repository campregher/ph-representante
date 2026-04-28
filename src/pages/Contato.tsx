import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface DistribuidorForm {
  nome: string;
  empresa: string;
  cnpj: string;
  email: string;
  whatsapp: string;
  volumeCompra: string;
  mensagem: string;
  aceitoTermos: boolean;
}

interface LojistaForm {
  nome: string;
  email: string;
  whatsapp: string;
  plataforma: string;
  documento: string;
  mensagem: string;
  aceitoTermos: boolean;
}

const Contato: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'distribuidor' | 'lojista'>('distribuidor');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const distribuidorForm = useForm<DistribuidorForm>();
  const lojistaForm = useForm<LojistaForm>();

  const onSubmitDistribuidor = async (data: DistribuidorForm) => {
    if (!data.aceitoTermos) return;

    setLoading(true);
    try {
      // Enviar via Axios para webhook/API
      await axios.post('https://api.example.com/leads/distribuidor', {
        ...data,
        tipo: 'distribuidor'
      });
      setSuccess(true);
      distribuidorForm.reset();
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const onSubmitLojista = async (data: LojistaForm) => {
    if (!data.aceitoTermos) return;

    setLoading(true);
    try {
      await axios.post('https://api.example.com/leads/lojista', {
        ...data,
        tipo: 'lojista'
      });
      setSuccess(true);
      lojistaForm.reset();
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative antialiased bg-zinc-950 text-white">
      <Navbar />

      <section className="pt-28 lg:pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                Entre em Contato
              </h1>
              <p className="text-zinc-400 text-lg">
                Preencha o formulário abaixo para iniciar sua parceria conosco.
              </p>
            </div>

            {/* TABS */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-zinc-800 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('distribuidor')}
                  className={`px-6 py-3 rounded-lg font-bold transition ${
                    activeTab === 'distribuidor' ? 'bg-brand-500 text-white' : 'text-zinc-400'
                  }`}
                >
                  Sou Distribuidor
                </button>
                <button
                  onClick={() => setActiveTab('lojista')}
                  className={`px-6 py-3 rounded-lg font-bold transition ${
                    activeTab === 'lojista' ? 'bg-brand-500 text-white' : 'text-zinc-400'
                  }`}
                >
                  Sou Lojista Online
                </button>
              </div>
            </div>

            {/* FORM DISTRIBUIDOR */}
            {activeTab === 'distribuidor' && (
              <form
                onSubmit={distribuidorForm.handleSubmit(onSubmitDistribuidor)}
                className="glass-card p-8 rounded-3xl space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    {...distribuidorForm.register('nome', { required: true })}
                    type="text"
                    placeholder="Nome completo"
                    className="h-14 rounded-2xl bg-zinc-800 text-white px-5 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <input
                    {...distribuidorForm.register('empresa', { required: true })}
                    type="text"
                    placeholder="Nome da empresa"
                    className="h-14 rounded-2xl bg-zinc-800 text-white px-5 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <input
                    {...distribuidorForm.register('cnpj', { required: true })}
                    type="text"
                    placeholder="CNPJ"
                    className="h-14 rounded-2xl bg-zinc-800 text-white px-5 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <input
                    {...distribuidorForm.register('email', { required: true })}
                    type="email"
                    placeholder="Email"
                    className="h-14 rounded-2xl bg-zinc-800 text-white px-5 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <input
                    {...distribuidorForm.register('whatsapp', { required: true })}
                    type="tel"
                    placeholder="WhatsApp"
                    className="h-14 rounded-2xl bg-zinc-800 text-white px-5 focus:outline-none focus:ring-2 focus:ring-brand-500 md:col-span-2"
                  />
                  <input
                    {...distribuidorForm.register('volumeCompra', { required: true })}
                    type="text"
                    placeholder="Volume de compra mensal estimado"
                    className="h-14 rounded-2xl bg-zinc-800 text-white px-5 focus:outline-none focus:ring-2 focus:ring-brand-500 md:col-span-2"
                  />
                </div>
                <textarea
                  {...distribuidorForm.register('mensagem')}
                  placeholder="Mensagem adicional"
                  rows={4}
                  className="w-full rounded-2xl bg-zinc-800 text-white px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <label className="flex items-center gap-3">
                  <input
                    {...distribuidorForm.register('aceitoTermos', { required: true })}
                    type="checkbox"
                    className="w-5 h-5 accent-brand-500"
                  />
                  <span className="text-sm text-zinc-300">
                    Declaro que sou lojista ou distribuidor. Consumidor final não será atendido.
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-brand-500 hover:bg-brand-400 text-white font-black rounded-2xl transition"
                >
                  {loading ? 'Enviando...' : 'Enviar Cadastro'}
                </button>
              </form>
            )}

            {/* FORM LOJISTA */}
            {activeTab === 'lojista' && (
              <form
                onSubmit={lojistaForm.handleSubmit(onSubmitLojista)}
                className="glass-card p-8 rounded-3xl space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    {...lojistaForm.register('nome', { required: true })}
                    type="text"
                    placeholder="Nome completo"
                    className="h-14 rounded-2xl bg-zinc-800 text-white px-5 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <input
                    {...lojistaForm.register('email', { required: true })}
                    type="email"
                    placeholder="Email"
                    className="h-14 rounded-2xl bg-zinc-800 text-white px-5 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <input
                    {...lojistaForm.register('whatsapp', { required: true })}
                    type="tel"
                    placeholder="WhatsApp"
                    className="h-14 rounded-2xl bg-zinc-800 text-white px-5 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <select
                    {...lojistaForm.register('plataforma', { required: true })}
                    className="h-14 rounded-2xl bg-zinc-800 text-white px-5 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="">Selecione a plataforma</option>
                    <option value="Mercado Livre">Mercado Livre</option>
                    <option value="Shopee">Shopee</option>
                    <option value="Ambas">Ambas</option>
                  </select>
                  <input
                    {...lojistaForm.register('documento', { required: true })}
                    type="text"
                    placeholder="CNPJ/CPF"
                    className="h-14 rounded-2xl bg-zinc-800 text-white px-5 focus:outline-none focus:ring-2 focus:ring-brand-500 md:col-span-2"
                  />
                </div>
                <textarea
                  {...lojistaForm.register('mensagem')}
                  placeholder="Mensagem adicional"
                  rows={4}
                  className="w-full rounded-2xl bg-zinc-800 text-white px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <label className="flex items-center gap-3">
                  <input
                    {...lojistaForm.register('aceitoTermos', { required: true })}
                    type="checkbox"
                    className="w-5 h-5 accent-brand-500"
                  />
                  <span className="text-sm text-zinc-300">
                    Declaro que sou lojista ou distribuidor. Consumidor final não será atendido.
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-brand-500 hover:bg-brand-400 text-white font-black rounded-2xl transition"
                >
                  {loading ? 'Enviando...' : 'Enviar Cadastro'}
                </button>
              </form>
            )}

            {success && (
              <p className="text-green-500 text-center mt-4">
                ✅ Cadastro enviado! Entraremos em contato em breve.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;