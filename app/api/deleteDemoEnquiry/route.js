import connectToDatabase from "@/lib/mongoose";
import DemoData from "@/models/DemoData";

export async function DELETE(request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { id } = body;

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, error: "ID is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const deletedEntry = await DemoData.findByIdAndDelete(id);

    if (!deletedEntry) {
      return new Response(
        JSON.stringify({ success: false, error: "Demo entry not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Demo entry deleted successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    console.error(e);
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
