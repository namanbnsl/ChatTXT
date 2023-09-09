import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { UserAvatar } from "@/components/dashboard/nav/user-avatar";
import { getAuthSession } from "@/lib/auth";

const DashboardSidebar = async () => {
  type TLinks = { name: string; href: string }[];

  const chats: TLinks = [
    {
      name: "5-day-schedule",
      href: "/dashboard/chats/5-day-schedule",
    },
    {
      name: "batman",
      href: "/dashboard/chats/batman",
    },
  ];

  const session = await getAuthSession();

  return (
    <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 border-r">
      <div className="space-y-4 py-4 flex flex-col h-full">
        <div className="px-3 py-2 flex-1">
          <Link href="/dashboard" className="flex items-center pl-3 mb-14">
            <h1 className="text-2xl font-bold">text-ai</h1>
          </Link>
          <div className="space-y-1">
            {chats.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-500/10 rounded-lg transition"
                }
              >
                <div className="flex items-center flex-1">
                  <MessageCircle className={"h-5 w-5 mr-3"} />
                  {route.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-8 flex items-center gap-x-2">
        <span className="font-bold">You: </span>
        <UserAvatar url={session?.user?.image!} name={session?.user?.name!} />
      </div>
    </div>
  );
};

export default DashboardSidebar;
