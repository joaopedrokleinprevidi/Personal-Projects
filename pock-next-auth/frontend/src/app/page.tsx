"use client";
import { signIn } from "next-auth/react";

export default function Home() {
  function handleLogin() {
    signIn("github", { callbackUrl: "/dashboard" });
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <button
        className="bg-green-300 text-black rounded-[6px] hover:bg-green-400  font-bold py-2 px-4  flex items-center justify-center"
        onClick={handleLogin}
      >
        Login com GitHub
      </button>
    </div>
  );
}
