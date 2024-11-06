import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      //chaves necessarias para fazer login pelo gihub, o name aqui deste provider é "github"
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    Credentials({
      name: "credentials", // obrigatório passar o nome aqui, e quando usar este metodo para fazer login, chamar este nome no metodo signin, o primeiro parametro
      credentials: {
        // aqui estou dizendo o que vou receber para fazer o login (o que vai ter no campo input)
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Senha", type: "password", placeholder: "Senha" },
      },
      async authorize(credentials) {
        console.log(credentials);
        // método onde implementamos de fato a chamada para a API onde vamos fazer a autenticação, ou podemos consultar também diretamente no DB, com o Next
        const response = await fetch("http://localhost:3003/login", {
          method: "POST", // método para login (enviar dados)
          headers: {
            "Content-Type": "application/json", // para autorizar JSON
          },
          body: JSON.stringify({
            // manda os dados que o usuário preencheu para o login
            username: credentials?.username,
            password: credentials?.password,
          }),
        });
        const user = await response.json(); // dados retornados após ter feito o login

        console.log(user);
        if (user && response.ok) {
          // verifica se o login ocorreu com sucesso
          return user.data;
        } else {
          throw new Error("Ocorreu um erro ao fazer o login."); // lança um erro se o login falhar
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log("JWT token ", token);
      console.log("JWT session ", session);
      if (token) {
        session.user.sub = token.sub;
        session.user.username = token.username;
        session.user.token = token.token;
      }
      return session;
    },
  },
  pages: {
    signIn: "/", // página onde o usuário vai se autenticar (pagina de login)
  },
  redirect({ baseUrl }) {
    //redireciona o usuario usando a baseUrl que foi definida em session provider
    return `${baseUrl}/dashboard`;
  },

  // Lembrando que para o next auth funcionar, eu preciso ter algumas variaveis .ENV configuradas, como NEXTAUTH_URL, NEXTAUTH_SECRET, e se usarmos algum provider que precise, como github, as variaveis de ambiente deles tambem sao necessarias
};
