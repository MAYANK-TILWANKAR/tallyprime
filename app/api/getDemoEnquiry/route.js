import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import DemoData from "@/models/DemoData";

export const runtime = "edge";

export async function GET(request) {
  try {
    // Check if DemoData exists before trying to access it
    if (!global.DemoData) {
      throw new Error("DemoData is not defined");
    }

    // Now you can safely use DemoData
    const result = global.DemoData.someMethod();

    // ... rest of the function ...
  } catch (error) {
    console.error("Error in GET function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
