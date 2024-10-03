import connectToDatabase from "@/lib/mongoose";
import EnquiryData from "@/models/EnquiryData";

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch the data from a collection
    const data = await EnquiryData.find({}).sort({ createdAt: -1 }); // Sort by creation date, newest first

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error fetching enquiry data:", e);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to fetch enquiry data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
