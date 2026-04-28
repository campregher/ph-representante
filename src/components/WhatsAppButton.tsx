import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDistribuidor = () => {
    const message = encodeURIComponent('Olá! Sou distribuidor e gostaria de solicitar a tabela de preços para atacado.');
    window.open(`https://wa.me/5511959993968?text=${message}`, '_blank');
    setShowOptions(false);
  };

  const handleLojista = () => {
    const message = encodeURIComponent('Olá! Sou lojista online e gostaria de saber mais sobre o modelo dropshipping.');
    window.open(`https://wa.me/5511959993968?text=${message}`, '_blank');
    setShowOptions(false);
  };

  return (
    <>
      {/* BOTÃO PRINCIPAL */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        style={{
          bottom: 'max(1.5rem, env(safe-area-inset-bottom))',
          right: 'max(1.5rem, env(safe-area-inset-right))'
        }}
      >
        <FaWhatsapp className="w-7 h-7" />
      </button>

      {/* OPÇÕES */}
      {showOptions && (
        <div className="fixed bottom-24 right-6 z-[9998] flex flex-col gap-3">
          <button
            onClick={handleDistribuidor}
            className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5" />
            Sou Distribuidor
          </button>
          <button
            onClick={handleLojista}
            className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-700 transition flex items-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5" />
            Sou Lojista Online
          </button>
        </div>
      )}

      {/* OVERLAY */}
      {showOptions && (
        <div
          className="fixed inset-0 z-[9997] bg-black/20"
          onClick={() => setShowOptions(false)}
        />
      )}
    </>
  );
};

export default WhatsAppButton;