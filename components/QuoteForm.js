'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="quote-section" id="atendimento">
      <div className="container quote-grid">
        <div>
          <span className="eyebrow dark">Atendimento</span>
          <h2>Faça um orçamento</h2>
          <p>Preencha seus dados e conte para a gente qual curso você procura. Nossa equipe pode orientar você.</p>
          <div className="quote-highlight">
            <strong>Atendimento rápido</strong>
            <span>Segunda a sábado · Fale conosco pelo WhatsApp</span>
          </div>
        </div>

        <form className="quote-card" onSubmit={submit}>
          <div className="form-grid">
            <label>Nome<input name="name" required placeholder="Seu nome" /></label>
            <label>E-mail<input name="email" type="email" required placeholder="seu@email.com" /></label>
            <label>Telefone<input name="phone" required placeholder="(48) 99999-9999" /></label>
            <label>Cidade<select name="city" defaultValue="SÃO JOSÉ"><option>São José - SC</option><option>Palhoça - SC</option><option>Florianópolis - SC</option><option>Biguaçu - SC</option></select></label>
            <label className="full">Curso de seu interesse<select name="service" required defaultValue=""><option value="" disabled>Selecione um curso</option><option>Habilitação para carro</option><option>Habilitação para moto</option><option>Habilitação para carro e moto</option><option>Renovação da CNH</option><option>Retirada permissão</option><option>Reciclagem</option><option>Adição de categoria carro</option><option>Adição de categoria moto</option><option>Mudança de categoria</option><option>CNH para portador de deficiência física</option><option>Reabilitação</option><option>Aulas para habilitados</option></select></label>
            <label className="full">Mensagem<textarea name="message" maxLength="300" placeholder="Como podemos ajudar?" /></label>
          </div>
          {sent && <div className="form-success">Mensagem preparada! Em produção, conecte este formulário ao seu endpoint/e-mail.</div>}
          <button className="btn btn-primary submit" type="submit">Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
}
