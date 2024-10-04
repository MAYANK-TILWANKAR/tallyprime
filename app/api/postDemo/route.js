import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongoose";
import DemoData from "@/models/DemoData";

export async function POST(req) {
  try {
    await connectToDatabase();

    const data = await req.json(); // Get form data from request
    const newData = new DemoData(data);
    await newData.save(); // Save to MongoDB

    // Set up Nodemailer to send email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME, // Use your verified sender email
      to: "icaglobal.in@gmail.com", // Recipient's email
      subject: `New Demo Class Booking From ${data.name}!`, // Email subject
      text: `You have received a new demo enquiry.\n\nName: ${data.name}\nEmail: ${data.email}\nMobile:${data.mobile}\nCourse: ${data.course}`,
    };

    await transporter.sendMail(mailOptions); // Send the email

    // Respond with success
    return new Response(JSON.stringify(newData), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Server error", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
