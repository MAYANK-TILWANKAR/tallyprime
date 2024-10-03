import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import DemoData from "@/models/DemoData";

export const runtime = "edge";

export async function GET(request) {
  try {
    await connectToDatabase();

    const demoData = await DemoData.find().sort({ createdAt: -1 });

    return NextResponse.json(demoData);
  } catch (error) {
    console.error("Error in GET function:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
