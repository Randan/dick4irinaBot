import 'dotenv/config';

const appPort: string = process.env.PORT || '';
const timezone: string = process.env.TIMEZONE || '';
const adminId: string = process.env.ADMIN_TG_ID || '';
const chatId: string = process.env.CHAT_TG_ID || '';
const photostockUri: string = process.env.PHOTOSTOCK_URI || '';
const photostockAppToken: string = process.env.PHOTOSTOCK_APP_TOKEN || '';

export {
  adminId,
  appPort,
  chatId,
  timezone,
  photostockAppToken,
  photostockUri,
};
