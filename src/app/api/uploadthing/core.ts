import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "1MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url);
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;