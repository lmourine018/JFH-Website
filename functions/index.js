// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// Initialize Firebase Admin SDK
admin.initializeApp();

// Configure your email transporter using Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "wayeta23@gmail.com",
    pass: "Arya@2023",
  },
});

exports.sendEmailOnContact = functions.database.ref("/contacts/{contactId}")
    .onCreate((snapshot, context) => {
      const contactData = snapshot.val();
      const mailOptions = {
        from: "wayeta23@gmail.com",
        to: "lmourine8@gmail.com",
        subject: `New Contact Form Submission from ${contactData.name}`,
        // eslint-disable-next-line max-len
        text: `You have received a new contact form submission.\n\nName: ${contactData.name}\nEmail: ${contactData.email}\nMessage: ${contactData.message}`,
      };

      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email:", error);
          return;
        }
        console.log("Email sent:", info.response);
      });
    });
