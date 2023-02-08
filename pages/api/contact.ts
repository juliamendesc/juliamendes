import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const {
  GMAIL_USER,
  OAUTH_REFRESH_TOKEN,
  OAUTH_CLIENT_ID,
  OAUTH_SECRET,
  OAUTH_ACCESS_TOKEN,
  GMAIL_FORWARD_TO,
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
    from: `Website Contact Form <${req.body.email}>`,
    to: GMAIL_FORWARD_TO,
    subject: `${req.body.subject}`,
    text: `${req.body.message} `,
    html: `<div>From: ${req.body.name}</div>\n<div>${req.body.message}</div>`,
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
