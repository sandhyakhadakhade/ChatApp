//Create nodemailer to allow easy as cake email sending . 

require('dotenv').config();
const nodemailer = require('nodemailer');
//  configuring our SMTP Server details.
// * SMTP is mail server which is responsible for sending and recieving email.
exports.sendEMailFunction = (url,Email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // user:'sandhyakhadakhade96@gmail.com' ,
            // pass:'sk@js2019'
            user: process.env.userName,
            pass: process.env.Password
        },
    });

    const mailOptions = {
        from: process.env.userName,          // sender address
        to: Email,           // list of receivers
        subject: 'chatApp verification using node js',    // Subject line
        text: 'Your Email verification link is:\n\n' + url
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log('error while sending mails-- ', err);
        else
            console.log('sending mails-- ', info);
    });
}