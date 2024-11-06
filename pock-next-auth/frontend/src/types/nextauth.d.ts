// nextauth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    error?: string;
    user?: {
      username: string;
      token: string;
      sub: string;
    } & DefaultSession["user"];
  }
}
