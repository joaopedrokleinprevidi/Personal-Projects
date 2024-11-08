"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleLoginGitHub() {
    signIn("github", { callbackUrl: "/dashboard" });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleLoginCredentials(event: SyntheticEvent) {
    event.preventDefault();
    signIn("credentials", {
      username: user,
      password: password,
    });
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-3 items-center justify-center bg-blue-400">
      <button
        className="bg-green-300 text-black rounded-[6px] hover:bg-green-400  font-bold py-2 px-4  flex items-center justify-center"
        onClick={handleLoginGitHub}
      >
        Login com GitHub
      </button>

      <form
        onSubmit={handleLoginCredentials}
        className="flex flex-col gap-2 mt-5"
      >
        <input
          type="text"
          id="user"
          placeholder="User"
          onChange={(e) => setUser(e.target.value)}
          className="p-2 rounded-[6px] border-2 border-black"
        />
        <input
          type="password"
          id="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded-[6px] border-2 border-black"
        />
        <button
          className="bg-green-300 text-black rounded-[6px] hover:bg-green-400  font-bold py-2 px-4  flex items-center justify-center"
          onClick={handleLoginCredentials}
          type="submit"
        >
          Login com Credenciais
        </button>
      </form>
    </div>
  );
}
