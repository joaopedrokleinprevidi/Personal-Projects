"use client"; //só funciona como use client o session provider do next auth
import { SessionProvider } from "next-auth/react";

export default function NextAuthSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}