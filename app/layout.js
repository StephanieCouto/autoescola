import './globals.css';

export const metadata = {
  title: 'Auto Escola Catarina',
  description: 'Auto Escola Catarina, em Forquilhinhas, São José/SC. Cursos para CNH, renovação, reciclagem e aulas para habilitados.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
