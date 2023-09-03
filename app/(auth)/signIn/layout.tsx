import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = async (props: Props) => {
  const session = await getAuthSession();

  if (session?.user) return redirect("/dashboard");

  return <>{props.children}</>;
};

export default AuthLayout;
