import { AuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";
import { env } from "@/env";

import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { sendVerificationRequest } from "@/lib/emails/auth/send-auth-email";

export const getAuthSession = () => {
  return getServerSession(authOptions);
};

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      sendVerificationRequest: sendVerificationRequest,
    }),
  ],
  pages: {
    signIn: "/signIn",
  },
};
