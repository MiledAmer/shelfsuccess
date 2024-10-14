import MailerLite from '@mailerlite/mailerlite-nodejs';

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;

export const mailerlite = new MailerLite({
  api_key: MAILERLITE_API_KEY!,
});
