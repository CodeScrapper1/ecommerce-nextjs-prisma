import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

const auth = (req) => ({ id: "fakeId" });

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: "50MB", maxFileCount: 4 },
  })
    .middleware(async ({ req }) => {
      const user = await auth(req);
      if (!user) throw new Error("unauthenticated");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
};
