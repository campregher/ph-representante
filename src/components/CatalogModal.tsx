import React from 'react';
import type { Brand } from '../types';

type Product = {
  id: string;
  name: string;
  sku: string;
  image: string;
};

type CatalogModalProps = {
  brand: Brand;
  products: Product[];
  onClose: () => void;
  whatsappNumber: string;
};

const CatalogModal: React.FC<CatalogModalProps> = ({
  brand,
  products,
  onClose,
  whatsappNumber,
}) => {
  const whatsappLink = (product: Product) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar a tabela de preços.\n\nMarca: ${brand.name}\nProduto: ${product.name}\nSKU: ${product.sku}`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-900 w-full max-w-3xl rounded-3xl p-8 relative"
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        {/* Título */}
        <h3 className="text-2xl font-black text-white mb-6">
          Catálogo — {brand.name}
        </h3>

        {/* Grid de produtos com scroll customizado */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 pr-2"
          style={{
            maxHeight: '60vh',
            overflowY: 'auto',
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-800 rounded-2xl p-4 flex flex-col hover:scale-105 transition-transform"
            >
              <div className="w-full aspect-square bg-black rounded-xl mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <p className="text-white font-bold">{product.name}</p>
              <span className="text-xs text-zinc-400 mb-4">
                SKU: {product.sku}
              </span>

              <a
                href={whatsappLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-center text-xs font-bold bg-green-600 hover:bg-green-500 text-white py-2 rounded-xl transition"
              >
                Solicitar tabela de preço
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogModal;
