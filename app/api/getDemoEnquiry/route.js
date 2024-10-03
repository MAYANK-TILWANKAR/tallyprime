import connectToDatabase from "@/lib/mongoose";
import DemoData from "@/models/DemoData";

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch the data from the DemoData collection and sort by createdAt in descending order
    const data = await DemoData.find({}).sort({ createdAt: -1 });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({ success: false, error: "An error occurred while fetching data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
