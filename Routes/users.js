const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();
router.post("/userContact", (req, res) => {
  const { name, email, subject, message } = req.body;

  const HTMLemail = `
    <h3>New JonGregis.com Contact Form</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Subject: ${subject}</li>
    </ul>
    <h3>Message:</h3>
    <p>${message}</p>`;

  const transporter = nodemailer.createTransport({
    host: "gator3107.hostgator.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.userEmail,
      pass: process.env.emailPassword
    }
  });
  const mailOptions = {
    from: "contact@jongregis.com",
    to: process.env.userEmail,
    replyTo: email,
    subject: "JonGregis.com Contact Form Submission",
    text: message,
    html: HTMLemail
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Message sent: %s", info.message);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  res.json(req.body);
});

module.exports = router;
