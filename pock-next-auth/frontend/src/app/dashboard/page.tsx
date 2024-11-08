import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="mb-5 font-bold text-2xl">Dashboard</p>
      <p className="text-lg">
        Olá <strong>{session?.user?.name}!</strong>
      </p>
    </div>
  );
}
