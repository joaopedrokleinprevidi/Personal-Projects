import NextAuthSessionProvider from "@/providers/sessionProviders";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>{" "}
        {/* aqui dou acesso a toda minha aplicaçao, ao contexto do next auth, assim consigo acessar em qualquer parte dados da sessão do usuario */}
      </body>
    </html>
  );
}
