import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import MainProvider from "@/components/providers/MainProvider";

const font = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatTXT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
