"use client";

import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainProvider = (props: Props) => {
  return (
    <>
      <SessionProvider>
        <Toaster />

        {props.children}
      </SessionProvider>
    </>
  );
};

export default MainProvider;
