import connectToDatabase from "@/lib/mongoose";
import EnquiryData from "@/models/EnquiryData";

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch the data from the EnquiryData collection
    const data = await EnquiryData.find({}).sort({ createdAt: -1 });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0, must-revalidate'
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ success: false, error: "An error occurred while fetching data" }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0, must-revalidate'
      },
    });
  }
}
