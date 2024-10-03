import connectToDatabase from "@/lib/mongoose";
import EnquiryData from "@/models/EnquiryData";

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch the data from the EnquiryData collection
    const data = await EnquiryData.find({}).lean();
    
    console.log("Fetched data:", data); // Add this line for debugging

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0"
      },
    });
  } catch (e) {
    console.error("Detailed error in GET /api/getEnquiry:", e);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server error",
        details: e.message,
        stack: e.stack, // Be cautious about exposing this in production
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
