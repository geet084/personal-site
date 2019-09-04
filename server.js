const express = require('express');
const serveStatic = require('serve-static');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: __dirname + '/.env' })

let app = express();
app.use(cors())
app.use(express.json())
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});

const transporter = nodemailer.createTransport({
  service: process.env.NODEMAILER_SERVICE,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS
  }
});

app.post('/api/v1/mail', (req, res) => {
  const { sender, subject, message } = req.body;

  let mailOptions = {
    to: process.env.NODEMAILER_TO,
    subject,
    text: `${sender}: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json(`Oops! Your email was not sent...`);
    } else res.status(200).json('Success! Your email was sent!');
  });
});