// Nodemailer, envio de mails

const nodemailer = require("nodemailer");
require("dotenv").config();

let nodemailerAssets = (req) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });
  const output = `
                <h3>Detalles de contacto:</h3> 
                <ul>
                <li>Nombre: ${req.body.nombre}</li>
                <li>Email: ${req.body.email}</li>
                </ul>
                <h3>Mensaje:</h3>
                ${req.body.message}
                `;
  let mailOptions = {
    replyTo: req.body.email,
    to: process.env.email,
    subject: req.body.subject,
    html: output,
  };
  return { transporter, mailOptions };
};

module.exports = nodemailerAssets;
