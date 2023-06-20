import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // const formData = await req.formData();
    // const info = formData.get("info") as any;
    // console.log(req.json())
    const formData = await req.formData();
    const info = formData.get("info");
    console.log(info)
    return NextResponse.json({});
}