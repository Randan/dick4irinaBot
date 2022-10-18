import { Message } from 'node-telegram-bot-api';
import bot from '../bot';
import { sendPhotoFromStock } from '../controllers';

const events: Record<string, RegExp> = {
  flowers: /\/flowers/,
};

bot.onText(
  events.flowers,
  (msg: Message): Promise<void> => sendPhotoFromStock(msg.chat.id || 0, 'flowers')
);

bot.onText(/111/, (msg: Message): void => console.log(msg));
