import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const living = data.get("living") as string;
    const medical = data.get("medical") as string;
    const concern = data.get("concern") as string;
    const email = data.get("email") as string;

    // 0. Fail Fast Validation (API Optimization)
    if (!living || !medical || !concern || !email) {
      return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ success: false, error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 1. Scoring Logic (Keep existing logic)
    const urgencyScore =
      (living === "alone" ? 2 : 0) +
      (medical === "high" ? 2 : medical === "medium" ? 1 : 0);

    const highFit = urgencyScore >= 3;

    // 2. Email Configuration
    // Note: Users must set EMAIL_USER (their gmail) and EMAIL_PASS (App Password) in .env.local
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    // 3. Email Template (Premium/Clean)
    const mailOptions = {
      from: `"Roots & Care System" <${process.env.EMAIL_USER}>`,
      to: "rootsandcare@gmail.com", // The owner's email
      subject: `New Care Assessment Request - ${highFit ? "URGENT" : "Standard"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0a0a0a; padding: 20px; text-align: center;">
            <h2 style="color: #d4af37; margin: 0; font-family: 'Times New Roman', serif;">New Lead Received</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="color: #555; font-size: 16px;">A new family has requested a care assessment.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #888; font-weight: bold;">User Email</td>
                <td style="padding: 12px 0; color: #333; text-align: right;">${email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #888; font-weight: bold;">Living Situation</td>
                <td style="padding: 12px 0; color: #333; text-align: right;">${living}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #888; font-weight: bold;">Medical Complexity</td>
                <td style="padding: 12px 0; color: #333; text-align: right;">${medical}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #888; font-weight: bold;">Primary Concern</td>
                <td style="padding: 12px 0; color: #333; text-align: right;">${concern}</td>
              </tr>
            </table>

            <div style="margin-top: 30px; padding: 15px; background-color: ${highFit ? '#fff5f5' : '#f9f9f9'}; border-left: 4px solid ${highFit ? '#e53e3e' : '#d4af37'};">
              <p style="margin: 0; color: #333; font-weight: bold;">System Assessment:</p>
              <p style="margin: 5px 0 0 0; color: #555;">
                ${highFit 
                  ? "HIGH PRIORITY. The combination of living alone and medical needs suggests immediate attention is required." 
                  : "STANDARD PRIORITY. The situation appears stable but requires standard vetting."}
              </p>
            </div>
          </div>
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; color: #999; font-size: 12px;">
            Roots & Care Automated System
          </div>
        </div>
      `,
    };

    // 4. Send Email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, highFit }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Email processing error:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to process request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}