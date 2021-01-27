var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

nodemailer.createTransport({
    host: "smtp.example.com", //replace with your email provider
    port: 587,
    auth: {
      user: "username", //replace with the email address
      pass: "password" //replace with the password
    }
  });