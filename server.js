const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' })

let app = express();
app.use(cors())
app.use(express.json())
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});

app.post('/api/v1/mail', (req, res) => {
  const { from, subject, text } = req.body;

  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });

  let mailOptions = {
    to: process.env.NODEMAILER_TO,
    subject,
    text: `${from}: ${text}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json(`Error! Your message was not sent.`);
    }
    else res.status(200).json('Your message was sent successfully!');
  });
});