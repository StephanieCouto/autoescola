'use client';

import { useEffect, useState } from 'react';
import { site } from '../data/site';
import Image from 'next/image';

const links = [
  ['Serviços', '#servicos'],
  ['Matricule-se', site.registration],
  ['Unidades', '#nossas-unidades'],
  ['Localização', '#container-maps'],
  ['Nossa frota', '#nossa-frota'],
  ['Resultados', site.results],
  ['Fale conosco', '#contato'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 42);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="contact-list">
            <a href={`tel:+554832597862`}>{site.phone}</a>
            <a href={site.whatsappLink} target="_blank" rel="noreferrer">{site.whatsapp}</a>
            <a className="desktop-only" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="social desktop-only">
            <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      <div className={scrolled ? 'nav-wrap is-scrolled' : 'nav-wrap'}>
        <div className="container nav">
          <Image src="/logo.png" alt="CFC Catarina" className="logo" width={807} height={309} />

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            <span></span><span></span><span></span>
          </button>

          <nav className={open ? 'nav-links open' : 'nav-links'}>
            {links.map(([label, href]) => (
              <a key={label} className={label === 'Matricule-se' ? 'nav-cta' : ''} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow">CFC Catarina · São José/SC</span>
              <h1>Seu caminho para a CNH começa <em>aqui.</em></h1>
              <p>Preparação de verdade, veículos novos e uma equipe pronta para ajudar você a dirigir com segurança.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={site.registration}>Faça sua matrícula</a>
                <a className="btn btn-ghost" href="#servicos">Conheça os cursos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
