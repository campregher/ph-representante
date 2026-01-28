import React, { useState } from 'react';
import type { Brand } from '../types';
import CatalogModal from './CatalogModal';

// Logos
import topMixLogo from '../img/imagem-1.png';
import ecoflexLogo from '../img/imagem-2.png';
import tigerLogo from '../img/imagem-3.png';
import megaLogo from '../img/imagem-4.png';
import attisLogo from '../img/imagem-5.png';
import sofisticarLogo from '../img/imagem-6.png';
import tevicLogo from '../img/imagem-7.png';
import kitecLogo from '../img/imagem-8.png';

// Produtos Top Mix
import topMixImgFriso from '../img/products/friso.png';
import topMixImgBorrachao from '../img/products/borrachao.png';
import topMixImgPestana from '../img/products/pestana.png';
import topMixImgPingadeira from '../img/products/pingadeira.png';

//Produtos Ecoflex
import ecoflexImgCalha from '../img/products/calha-de-chuva.png';

//Produtos  Tiger
import tigerImgCalota from '../img/products/calota.png';
import tigerImgCapaEstepe from '../img/products/capa-estepe.png';
import tigerImgFrisUniversal from '../img/products/universal.png';

// Produtos Mega
import megaImgEngate from '../img/products/engate.jpg';
import megaImgProtetorCarter from '../img/products/protetor-carter.png';
import megaImgEngateRemovivel from '../img/products/engate-removivel.png';


// Produtos Attis
import attisImgAparaBarro from '../img/products/aparabarro.jpg';
import attisImgTapeteBandeja  from '../img/products/tapete-bandeja.png';

// Produtos Sofisticar
import sofisticarImgApoio from '../img/products/apoio.jpg';
import sofisticarImgGrade from '../img/products/grade.png';
import sofisticarImgLente from '../img/products/lente.jpeg';
import sofisticarImgCapa from '../img/products/capa.png';
import sofisticarImgBanco from '../img/products/banco.png';

// Produtos kitec
import kitecImgCarregador from '../img/products/carregador.png';
import kitecImgAutotransformador from '../img/products/autotransformador.png';
import kitecImgRegua from '../img/products/regua.png';

// Produtos Tevic
import tevicImgTapete from '../img/products/tapete.png';
import tevicImgPuxaEmpurra from '../img/products/puxa-empurra.png';

type Product = {
  id: string;
  name: string;
  sku: string;
  image: string;
};

const WHATSAPP_NUMBER = '5511959993968';

const BrandsSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const brands: Brand[] = [
    { id: '1', name: 'Top Mix Automotive', slogan: 'Frisos e Borrachões', accent: 'bg-red-600', logo: topMixLogo },
    { id: '2', name: 'Ecoflex Automotive', slogan: 'Calha de chuva', accent: 'bg-green-500', logo: ecoflexLogo },
    { id: '3', name: 'Tiger Acessórios', slogan: 'Calotas, capas e pingadeiras', accent: 'bg-orange-500', logo: tigerLogo },
    { id: '4', name: 'Mega Automotive', slogan: 'Engates e protetores de cárter', accent: 'bg-indigo-600', logo: megaLogo },
    { id: '5', name: 'Attis Acessórios', slogan: 'Aparabarros e tapetes', accent: 'bg-yellow-400', logo: attisLogo },
    { id: '6', name: 'Sofisticar Automotive', slogan: 'Apoios, grades, lentes, etc.', accent: 'bg-yellow-400', logo: sofisticarLogo },
    { id: '7', name: 'Kitec Equipamentos', slogan: 'Carregadores e Autotransformadores', accent: 'bg-yellow-400', logo: tevicLogo },
    { id: '8', name: 'Tevic Tapetes', slogan: 'Tapetes, Puxa & Empurra', accent: 'bg-yellow-400', logo: kitecLogo },
  ];

  const productsByBrand: Record<string, Product[]> = {
    '1': [
      { id: 'p1', name: 'Friso pintado', sku: 'TMX-001', image: topMixImgFriso },
      { id: 'p2', name: 'Borrachões de porta', sku: 'TMX-002', image: topMixImgBorrachao },
      { id: 'p3', name: 'Pestana', sku: 'ECF-101', image: topMixImgPestana },
      { id: 'p4', name: 'Pingadeira', sku: 'ECF-101', image: topMixImgPingadeira },
    ],
    '2': [
      { id: 'p5', name: 'Calha de chuva', sku: 'ECF-101', image: ecoflexImgCalha },
    ],
    '3': [
      { id: 'p6', name: 'Calota', sku: 'ECF-101', image: tigerImgCalota },
      { id: 'p7', name: 'Capa de estepe rígida', sku: 'ECF-101', image: tigerImgCapaEstepe },
      { id: 'p8', name: 'Friso universal', sku: 'ECF-101', image: tigerImgFrisUniversal },
    ],
    '4': [
      { id: 'p9', name: 'Engate fixo', sku: 'ECF-101', image: megaImgEngate },
      { id: 'p10', name: 'Engate removível', sku: 'ECF-101', image: megaImgEngateRemovivel },
      { id: 'p11', name: 'Protetor de cárter', sku: 'ECF-101', image: megaImgProtetorCarter },
    ],
    '5': [
      { id: 'p12', name: 'Tapete bandeja', sku: 'ECF-101', image: attisImgTapeteBandeja },
      { id: 'p13', name: 'Aparabarro de roda', sku: 'ECF-101', image: attisImgAparaBarro},
      
    ],
    '6': [
      { id: 'p14', name: 'Apoio de braço', sku: 'ECF-101', image: sofisticarImgApoio },
      { id: 'p15', name: 'Grade frontal', sku: 'ECF-101', image: sofisticarImgGrade },
      { id: 'p16', name: 'Lentes para retrovisores', sku: 'ECF-101', image: sofisticarImgLente },
      { id: 'p17', name: 'Capa de cobrir', sku: 'ECF-101', image: sofisticarImgCapa },
      { id: 'p18', name: 'Capa de banco', sku: 'ECF-101', image: sofisticarImgBanco }
    ],
    '7': [
      { id: 'p19', name: 'Autotransformadores', sku: 'ECF-101', image: kitecImgAutotransformador },
      { id: 'p20', name: 'Recarregador de baterias', sku: 'ECF-101', image: kitecImgCarregador },
      { id: 'p21', name: 'Régua para tomadas', sku: 'ECF-101', image: kitecImgRegua },
    ],
    '8': [
      { id: 'p22', name: 'Tapete Carpete', sku: 'ECF-101', image: tevicImgTapete },
      { id: 'p23', name: 'Puxa & Empurra', sku: 'ECF-101', image: tevicImgPuxaEmpurra },
      
    ],
  };

  return (
    <>
      <section id="brands" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-brand-500 font-black uppercase tracking-[0.3em] mb-4">
              Marcas de Elite
            </h2>
            <p className="text-3xl md:text-5xl font-black text-white">
              Qualidade que sua loja merece.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-transform"
              >
                <div className="h-16 w-full flex items-center justify-center mb-6">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-12 max-w-[160px] object-contain"
                  />
                </div>
                <div className="text-xl font-black text-white mb-2">{brand.name}</div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{brand.slogan}</p>
                <div className="mt-6">
                  <button
                    onClick={() => setSelectedBrand(brand)}
                    className="text-xs font-bold text-brand-400 hover:text-white underline"
                  >
                    Ver Catálogo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedBrand && (
        <CatalogModal
          brand={selectedBrand}
          products={productsByBrand[selectedBrand.id] || []}
          onClose={() => setSelectedBrand(null)}
          whatsappNumber={WHATSAPP_NUMBER}
        />
      )}
    </>
  );
};

export default BrandsSection;
