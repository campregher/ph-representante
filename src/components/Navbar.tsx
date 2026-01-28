import React, { useState, useEffect } from 'react';
import logoImg from '../img/logo.png';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../config'; // links globais

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Marcas', href: '#brands' },
    { name: 'Consultoria', href: '#ecommerce' },
    { name: 'Atacado', href: '#wholesale' },
  ];

  // redes sociais agora usando SOCIAL_LINKS
  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: SOCIAL_LINKS.instagram,
      color: 'hover:text-brand-400',
    },
    {
      icon: <FaYoutube />,
      href: SOCIAL_LINKS.youtube,
      color: 'hover:text-red-600',
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center h-16 md:h-20">
          {/* LOGO */}
          <a href="#home" className="flex items-center">
            <img src={logoImg} alt="PH Representações" className="h-8 md:h-10" />
          </a>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://app.floxio.com.br/entrar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-black text-sm font-black rounded-full hover:bg-brand-500 hover:text-white transition-all"
            >
              DROPSHIPPING
            </a>

            {/* REDES SOCIAIS DESKTOP */}
            <div className="flex items-center gap-4 ml-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl text-zinc-400 transition-colors ${social.color} hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl z-50"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } md:hidden`}
      >
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-black uppercase tracking-widest"
          >
            {link.name}
          </a>
        ))}

        <a
          href="https://app.floxio.com.br/entrar"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-6 px-10 py-3 bg-white text-black rounded-full font-black"
        >
          DROPSHIPPING
        </a>

        {/* REDES SOCIAIS MOBILE */}
        <div className="flex gap-6 mt-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl text-zinc-400 transition-colors ${social.color} hover:scale-110`}
              onClick={() => setMenuOpen(false)}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
