import connectToDatabase from "@/lib/mongoose";
import EnquiryData from "@/models/EnquiryData";

export async function GET() {
  console.log("GET /api/getEnquiry called");
  try {
    await connectToDatabase();
    console.log("Database connected");

    // Fetch the data from the EnquiryData collection
    const data = await EnquiryData.find({}).lean();
    
    console.log("Fetched data:", data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0"
      },
    });
  } catch (e) {
    console.error("Error in GET /api/getEnquiry:", e);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server error",
        details: e.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}