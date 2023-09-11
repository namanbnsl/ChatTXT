import { env } from "@/env";
import AuthEmail from "@/lib/emails/auth/auth-email";
import { SendVerificationRequestParams } from "next-auth/providers/index";
import { Resend } from "resend";

export async function sendVerificationRequest(
  params: SendVerificationRequestParams
) {
  const { identifier, url, provider } = params;
  const { host } = new URL(url);

  const resend = new Resend(env.RESEND_API_KEY);

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: identifier,
    subject: "Get started with ChatTXT",
    react: <AuthEmail validationLink={url} />,
    text: text({ url, host }),
  });
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}
