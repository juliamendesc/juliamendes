import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const {
  GMAIL_USER,
  OAUTH_REFRESH_TOKEN,
  OAUTH_CLIENT_ID,
  OAUTH_SECRET,
  OAUTH_ACCESS_TOKEN,
} = process.env;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: GMAIL_USER,
    clientId: OAUTH_CLIENT_ID,
    clientSecret: OAUTH_SECRET,
    refreshToken: OAUTH_REFRESH_TOKEN,
    accessToken: OAUTH_ACCESS_TOKEN,
    expires: 3599,
  },
});

export default function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const mailData = {
    from: 'Website Contact Form <contact.juliamendesc@gmail.com>',
    to: 'xulia10@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: `${req.body.message} \n\n Sent from: ${req.body.email}`,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter
    .sendMail(mailData)
    .then(() => {
      res.status(200) && res.json({ message: 'Email sent' });
    })
    .catch((error) => {
      res.status(500);
      res.json({ message: 'Something went wrong', error });
    });
}
