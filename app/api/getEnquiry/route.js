import connectToDatabase from "@/lib/mongoose";
import EnquiryData from "@/models/EnquiryData";

export async function GET(req) {
  try {
    await connectToDatabase();

    // Fetch the data from the EnquiryData collection
    const data = await EnquiryData.find({});

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Database connection error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
