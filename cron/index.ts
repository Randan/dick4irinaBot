import 'dotenv/config';
import cron from 'node-cron';
import { sendPhotoFromStock } from '../controllers';
import { chatId } from '../utils';

const cronOptions = {
  scheduled: true,
  timezone: process.env.TIMEZONE
};

cron.schedule('0 10 * * *', () => {
  sendPhotoFromStock(Number(chatId), 'penis', '@irinamysiuk, увімкни уяву і не забувай, що тебе тут чекають =)');
}, cronOptions);
