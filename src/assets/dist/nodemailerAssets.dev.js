"use strict";

// Nodemailer, envio de mails
var nodemailer = require('nodemailer');

require('dotenv').config();

var nodemailerAssets = function nodemailerAssets(req) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password
    }
  });
  var output = "\n                <h3>Detalles de contacto:</h3> \n                <ul>\n                <li>Nombre: ".concat(req.body.nombre, "</li>\n                <li>Email: ").concat(req.body.email, "</li>\n                </ul>\n                <h3>Mensaje:</h3>\n                ").concat(req.body.message, "\n                ");
  var mailOptions = {
    replyTo: req.body.email,
    to: process.env.email,
    subject: req.body.subject,
    html: output
  };
  return {
    transporter: transporter,
    mailOptions: mailOptions
  };
};

module.exports = nodemailerAssets;