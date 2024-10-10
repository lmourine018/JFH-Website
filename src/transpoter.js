import nodemailer from 'nodemailer';

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // or any email service you are using (like Outlook, Yahoo)
    auth: {
        user: 'wayeta23@gmail.com',
        pass: 'Arya@2023'
    }
});

// Function to send email
async function sendEmail(clientEmail, subject, message) {
    const mailOptions = {
        from: 'wayeta23@gmail.com',
        to: clientEmail,
        subject: subject,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
