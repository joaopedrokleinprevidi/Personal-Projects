import { AuthOptions } from "next-auth";

//AuthOptions, arquivo responsável por conter nossas configurações de autenticação
export const authOptions: AuthOptions = {
  //Providers, são os provedores, por onde os usuários podem realizar o login, seja google, github, credenciais proprias e etc...
  //Obrigatório configurar ao menos um provedor.
  providers: [],
};
