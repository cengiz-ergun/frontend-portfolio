import { NextRequest, NextResponse } from "next/server";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const f = formData.get("file");

  if (!f) {
    return NextResponse.json({}, { status: 400 });
  }

  const file = f as File;

  if(!file.type.startsWith("image")){
    return NextResponse.json(
      {
        message: "File type must be an image"
      }, {
        status: 400,
      }
    )
  }

  if(file.size > 500000){
    return NextResponse.json(
      {
        message: "File size must be lower than 500kb"
      }, {
        status: 400,
      }
    )
  }

  const destinationDirPath = path.join("public","uploads");

  const fileArrayBuffer = await file.arrayBuffer();

  if (!existsSync(destinationDirPath)) {
    await fs.mkdir(destinationDirPath, { recursive: true });
  }
  await fs.writeFile(
    path.join(destinationDirPath, file.name),
    Buffer.from(fileArrayBuffer)
  );

  return NextResponse.json({
    fileName: file.name,
    size: file.size
  });
}