import { getAuthSession } from "@/lib/auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const auth = async () => {
  const session = await getAuthSession();
  if (!session?.user) throw new Error("Unauthorized");

  return { user: session?.user };
};

export const appFileRouter = {
  chatText: f({ text: { maxFileCount: 1 } })
    .middleware(() => auth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type AppFileRouter = typeof appFileRouter;
