import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import EnquiryData from "@/models/EnquiryData";

export const runtime = "edge";

export async function GET() {
  try {
    await connectToDatabase();
    const data = await EnquiryData.find().sort({ createdAt: -1 });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
