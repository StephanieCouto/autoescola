import Image from 'next/image';
import Header from '../components/Header';
import QuoteForm from '../components/QuoteForm';
import Testimonials from '../components/Testimonials';
import FleetGallery from '../components/FleetGallery';
import { advantages, services, fleet, site } from '../data/site';
import { ArrowUpRight, BadgeCheck, Bike, BookOpen, CarFront, Clock3, CreditCard, FileCheck2, MapPin, UserRound } from 'lucide-react';

const advantageIcons = {
  badge: BadgeCheck,
  car: CarFront,
  bike: Bike,
  card: CreditCard,
  book: BookOpen,
  user: UserRound,
  file: FileCheck2,
  clock: Clock3,
  pin: MapPin,
};

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <QuoteForm />

        <section className="section advantages" id="vantagens">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow dark">Por que escolher a Catarina?</span>
              <h2>Venha para a melhor auto escola conquistar sua CNH!</h2>
            </div>
            <div className="advantage-grid">
              {advantages.map(([icon, title, text]) => {
                const Icon = advantageIcons[icon];

                return (
                  <article className="advantage-card" key={title}>
                    <div className="advantage-icon"><Icon aria-hidden="true" /></div>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </article>
                );
              })}
            </div>
            <div className="center"><a className="btn btn-dark" href={site.registration}>Fale conosco · Faça sua matrícula</a></div>
          </div>
        </section>

        <section className="section services" id="servicos">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow dark">Cursos e serviços</span>
              <h2>Escolha o caminho para a sua CNH</h2>
              <p>Na Auto Escola Catarina você tem a certeza de receber o melhor conteúdo e a melhor preparação nas aulas práticas. Veículos novos, salas e material didático de primeira qualidade, além de instrutores preparados para lhe ajudar.</p>
            </div>
            <div className="service-list">
              {services.map(([title], index) => (
                <a className="service-item" href="#atendimento" key={title}>
                  <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="service-title">{title}</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="center"><a className="btn btn-primary" href={site.registration}>Reserve sua matrícula</a></div>
          </div>
        </section>

        <section className="quality-banner">
          <div className="container quality-content">
            <div>
              <span className="eyebrow">Nosso compromisso</span>
              <h2>Qualidade, segurança e respeito em cada etapa.</h2>
            </div>
            <div className="quality-contacts">
              <a href={`tel:+554832597862`}>☎ {site.phone}</a>
              <a href={site.whatsappLink} target="_blank" rel="noreferrer">◉ {site.whatsapp}</a>
            </div>
          </div>
        </section>

        <section className="section fleet" id="nossa-frota">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow dark">Estrutura</span>
              <h2>Conheça nossa frota</h2>
              <p>Investir em qualidade é um dos compromissos assumidos por nós da CFC Catarina. Renovar a frota constantemente faz parte do nosso dia a dia.</p>
            </div>
            <FleetGallery fleet={fleet} />
            <div className="center"><a className="btn btn-dark" href="https://www.autoescolacatarina.com.br/quem-somos.php">Conheça nossa estrutura</a></div>
          </div>
        </section>

        <section className="section testimonials" id="depoimentos">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow dark">Experiências reais</span>
              <h2>Depoimentos</h2>
              <p>Veja o que dizem alguns de nossos alunos</p>
            </div>
            <Testimonials />
          </div>
        </section>

        <section className="map-section" id="container-maps">
          <div className="map-copy">
            <span className="eyebrow dark">Visite a gente</span>
            <h2>Localização</h2>
            <p>Encontre a Auto Escola Catarina e venha conhecer nossa estrutura.</p>
            <a className="btn btn-primary" href={site.whatsappLink} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
          </div>
          <iframe
            title="Localização Auto Escola Catarina"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.813094957051!2d-48.64468618494038!3d-27.599323682836843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274a03c3001573%3A0x465991981b7d1d58!2sAUTO%20ESCOLA%20CATARINA!5e0!3m2!1spt-BR!2sbr!4v1659542466557!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      <footer id="contato">
        <div className="container footer-grid">
          <div className="logo-about">
            <Image src="/logo.png" alt="CFC Catarina" className="footer-logo" width={807} height={309} />
            <h3>Sobre a Auto Escola Catarina</h3>
            <p>A Auto Escola Catarina foi fundada em outubro de 2009, sendo a primeira auto escola de Forquilhinhas. Somos uma empresa consolidada que busca não somente a aprovação junto ao Detran, mas sim formar condutores conscientes para a formação de um trânsito mais seguro e humano.</p>
            <a className="footer-link" href="https://www.autoescolacatarina.com.br/quem-somos.php">Conheça nossa empresa →</a>
          </div>
          <div>
            <h3>Navegue em nosso site</h3>
            <a href="#servicos">Serviços</a><a href="#nossas-unidades">Unidades</a><a href="#container-maps">Localização</a><a href={site.results} target="_blank" rel="noreferrer">Resultados</a><a href="#nossa-frota">Nossa frota</a><a href={site.privacy}>Política de privacidade</a>
          </div>
          <div>
            <h3>Contato</h3>
            <a href="tel:+554832597862">{site.phone}</a>
            <a href={site.whatsappLink} target="_blank" rel="noreferrer">{site.whatsapp}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a className="btn btn-primary footer-btn" href={site.registration}>Matricule-se</a>
          </div>
        </div>
        <div className="copyright">&copy; 2026 · Todos os direitos reservados</div>
      </footer>

      <a className="whatsapp-float" href={site.whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">👋🏼</a>
    </>
  );
}
