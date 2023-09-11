import { prisma } from "@/lib/db";
import { StepBack } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = { params: { name: string } };

const ChatPage = async (props: Props) => {
  const chat = await prisma.chat.findUnique({
    where: { name: props.params.name },
  });

  if (!chat) return redirect("/dashboard");

  return (
    <div>
      <div className="h-20 w-full flex items-center justify-center gap-x-2">
        <Link href={"/dashboard"} className="hover:text-blue-400">
          <StepBack className="w-6 h-6" />
        </Link>
        <span className="text-2xl font-bold">{chat.name}</span>
      </div>
    </div>
  );
};

export default ChatPage;
