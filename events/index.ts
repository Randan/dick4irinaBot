import { Message } from 'node-telegram-bot-api';
import bot from '../bot';
import { sendPhotoFromStock } from '../controllers';

const events: Record<string, RegExp> = {
  flower: /\/flower/,
  penis: /\/penis/,
};

bot.onText(
  events.flower,
  (msg: Message): Promise<void> => sendPhotoFromStock(msg.chat.id || 0, 'flower')
);

bot.onText(
  events.penis,
  (msg: Message): Promise<void> => sendPhotoFromStock(msg.chat.id || 0, 'penis', '🌭 🍆 🍌')
);
