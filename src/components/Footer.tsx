import React from 'react';
import logoImg from '../img/logo.png'; // coloque seu logo em src/img/logo.png
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../config'; // importando os links globais

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* LOGO + DESCRIÇÃO */}
          <div className="col-span-1 md:col-span-2 space-y-6 flex flex-col items-start md:items-start">
            <img 
              src={logoImg} 
              alt="PH Logo" 
              className="w-40 h-40 object-contain rounded-2xl" 
            />
            <p className="text-zinc-500 max-w-sm mt-4">
              Especialistas em conectar indústrias de elite ao varejo automotivo de alta performance. Sua ponte para o sucesso comercial.
            </p>

            {/* REDES SOCIAIS */}
            <div className="flex gap-4 mt-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-brand-400 text-3xl transition-transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-red-600 text-3xl transition-transform hover:scale-110"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          
          {/* LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Links</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#home" className="hover:text-brand-400">Início</a></li>
              <li><a href="#brands" className="hover:text-brand-400">Marcas</a></li>
              <li><a href="#ecommerce" className="hover:text-brand-400">Consultoria</a></li>
              <li><a href="#wholesale" className="hover:text-brand-400">Atacado</a></li>
            </ul>
          </div>
          
          {/* CONTATO */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contato</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li>Bixiga, São Paulo - SP, Brasil</li>
              <li className="text-brand-400 font-bold">(11) 9 5999-3968</li>
              <li>contato@phrepresentante.com.br</li>
            </ul>
          </div>
        </div>
        
        {/* COPYRIGHT */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} PH Representante Automotivo. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
