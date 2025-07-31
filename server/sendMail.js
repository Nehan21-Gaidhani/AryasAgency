const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/contact", async (req, res) => {
  const { name, email, contact, interest } = req.body;
  if (!name || !email || !contact || !interest) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: "New Contact Form Submission",
    html: `
      <h3>Contact Form Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${contact}</p>
      <p><strong>Interest Area:</strong> ${interest}</p>
    `,
  };
  try {
      console.log(process.env.EMAIL_USER);
      const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.response); // <-- IMPORTANT
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Error sending email:', error); // <-- IMPORTANT
    res.status(500).json({ message: 'Failed to send email' });
  }
}
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
