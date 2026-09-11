# Auto Escola Catarina — Next.js

Redesign moderno mantendo a estrutura e os conteúdos principais do site original enviado.

## Stack
- Next.js 15
- React 19
- CSS puro (sem Tailwind)
- Componentes React
- Layout responsivo
- Imagens com lazy loading no HTML/Browser
- Sem jQuery, Modernizr, Parallax.js ou Lightbox

## Rodar no VS Code

1. Abra esta pasta no VS Code.
2. Abra o terminal.
3. Execute:

```bash
npm install
npm run dev
```

4. Acesse `http://localhost:3000`.

Para produção:

```bash
npm run build
npm start
```

## Observação sobre imagens
O projeto mantém as URLs públicas das imagens atuais do site para preservar o conteúdo visual. Se você quiser tornar o projeto 100% independente do site antigo, copie as imagens para `public/images` e troque as URLs pelos caminhos locais.

## Formulário
O formulário está pronto visualmente e com validação básica do navegador. Ele ainda não envia e-mail por conta própria: basta conectar o `onSubmit` do `components/QuoteForm.js` ao endpoint/API que você utilizar.

## Analytics
Os scripts antigos de Google Tag Manager, Universal Analytics e Facebook Pixel não foram carregados automaticamente. Isso evita scripts bloqueantes e dependências antigas. Se precisar manter rastreamento, recomendo adicionar apenas as versões atuais via `next/script`.
# autoescola
