import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [perfil, setPerfil] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const togglePerfil = (value: string) => {
    setPerfil((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_ygig5xh',
        'template_mah76qy',
        {
          name,
          email,
          whatsapp,
          perfil: perfil.join(', '),
          origem: 'Formulário Atacadista / Dropshipper',
        },
        '20erqmEjvwLrWapBE'
      );

      setSuccess(true);
      setName('');
      setEmail('');
      setWhatsapp('');
      setPerfil([]);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 p-8 md:p-10 shadow-2xl">

          {/* Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">

            {/* TEXTO (MANTIDO) */}
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Receba <span className="text-brand-500">tabelas exclusivas</span> direto no WhatsApp
              </h2>

              <p className="text-base text-zinc-400 mt-3">
                Fornecedores homologados, alto giro e condições especiais para
                atacadistas e dropshippers.
              </p>

              <ul className="mt-4 space-y-1 text-sm text-zinc-500">
                <li>✔ Sem mensalidade</li>
                <li>✔ Sem contrato</li>
                <li>✔ Atendimento rápido</li>
              </ul>
            </div>

            {/* FORMULÁRIO */}
            <form
              onSubmit={handleSubmit}
              className="w-full lg:max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                required
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-14 rounded-2xl bg-zinc-800 text-white px-5 text-base focus:outline-none focus:ring-2 focus:ring-brand-500"
              />

              <input
                type="email"
                required
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 rounded-2xl bg-zinc-800 text-white px-5 text-base focus:outline-none focus:ring-2 focus:ring-brand-500"
              />

              <input
                type="tel"
                required
                placeholder="WhatsApp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="h-14 md:col-span-2 rounded-2xl bg-zinc-800 text-white px-5 text-base focus:outline-none focus:ring-2 focus:ring-brand-500"
              />

              {/* PERFIL */}
              <div className="md:col-span-2">
                <p className="text-sm font-bold text-white mb-2">
                  Você é:
                </p>

                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={perfil.includes('Distribuidor')}
                      onChange={() => togglePerfil('Distribuidor')}
                      className="w-5 h-5 accent-brand-500"
                    />
                    <span className="text-zinc-300">
                      Distribuidor
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={perfil.includes('Lojista (e-commerce)')}
                      onChange={() => togglePerfil('Lojista (e-commerce)')}
                      className="w-5 h-5 accent-brand-500"
                    />
                    <span className="text-zinc-300">
                      Lojista (e-commerce)
                    </span>
                  </label>
                </div>
              </div>

              <button
  type="submit"
  disabled={loading}
  className="h-14 md:col-span-2 bg-brand-500 hover:bg-brand-400 text-white hover:text-black font-black rounded-2xl text-base transition"
>
  {loading ? 'Enviando...' : 'Solicitar tabela de preços'}
</button>


              {success && (
                <p className="md:col-span-2 text-green-500 text-sm text-center mt-2">
                  ✅ Cadastro enviado! Em breve entraremos em contato.
                </p>
              )}

              <p className="md:col-span-2 text-xs text-zinc-500 text-center mt-2">
                Seus dados estão seguros • Uso exclusivo comercial
              </p>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
