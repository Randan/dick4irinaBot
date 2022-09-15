import { Message } from 'node-telegram-bot-api';
import bot from '../bot';
import { sendPhotoFromStock } from '../controllers';

const events: Record<string, RegExp> = {
  penis: /\/penis/,
};

bot.onText(
  events.penis,
  (msg: Message): Promise<void> => sendPhotoFromStock(msg.chat.id || 0, 'penis')
);

bot.onText(/111/, (msg: Message): void => console.log(msg));
