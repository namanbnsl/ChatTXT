"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: ReactNode;
};

const AuthProvider = (props: Props) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default AuthProvider;
