import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

// Responsável por introduzir o NextAuth no projeto, e permitir as configurações
//Aqui dizemos tmb as opçõs de autenticação, ou seja, nossas configurações, e tudo mais, como ira ser feito o login, quais as formas e etc
// Para funcionar corretamente, precisa ter essa estruturação de pastas, exatamente como foi feito o caminho até aqui.
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
//Este handler, meio que "diz", que iremos usar o NextAuth como GET, e como POST.
//Ele é obrigatório tmb, tudo aqui é obrigatório.
