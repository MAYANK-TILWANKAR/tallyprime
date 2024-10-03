import { NextResponse } from 'next/server';
import connectToDatabase from "@/lib/mongoose";
import DemoData from "@/models/DemoData";

export const runtime = 'edge';

export async function GET() {
  console.log("GET /api/getDemoEnquiry called");
  try {
    await connectToDatabase();
    console.log("Database connected");

    const data = await DemoData.find({}).sort({ createdAt: -1 });
    console.log(`Fetched ${data.length} demo enquiry records`);

    return NextResponse.json({ success: true, data }, {
      status: 200,
      headers: { 
        'Cache-Control': 'no-store, max-age=0, must-revalidate'
      },
    });
  } catch (e) {
    console.error("Error in getDemoEnquiry:", e);
    return NextResponse.json({ success: false, error: e.message }, {
      status: 500,
      headers: { 
        'Cache-Control': 'no-store, max-age=0, must-revalidate'
      },
    });
  }
}
