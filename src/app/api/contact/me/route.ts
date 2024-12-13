import { NextResponse as res, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return res.json({ error: "All fields are required." }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail service
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your app password
      },
    });

    // Configure the email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender's name and email
      to: "marthaolung@gmail.com", // Your email
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully.");
    return res.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.json(
      { error: "Failed to send the message. Please try again later." },
      { status: 500 }
    );
  }
};
