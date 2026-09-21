import connectDB from "@/lib/db";

export async function GET() {
  try {
    await connectDB();

    return Response.json({
      message: "MongoDB connection successful",
    });
  } catch (error) {
    return Response.json(
      {
        message: "MongoDB connection failed",
      },
      { status: 500 }
    );
  }
}