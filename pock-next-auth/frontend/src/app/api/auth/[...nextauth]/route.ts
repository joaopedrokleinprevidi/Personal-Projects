import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
// Responsável por introduzir o NextAuth no projeto, e permitir as configurações
const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
});
//Aqui dizemos tmb as opçõs de autenticação, ou seja, nossas configurações, e tudo mais, como ira ser feito o login, quais as formas e etc
// Para funcionar corretamente, precisa ter essa estruturação de pastas, exatamente como foi feito o caminho até aqui.

export { handler as GET, handler as POST };
//Este handler, meio que "diz", que iremos usar o NextAuth como GET, e como POST.
//Ele é obrigatório tmb, tudo aqui é obrigatório.
