import { Message } from 'node-telegram-bot-api';
import bot from '../bot';
import {
  addCompliment,
  addUser,
  help,
  removeUser,
  sendCompliment,
  sendComplimentAndFlowerToAllUsers,
  sendPhotoFromStock,
} from '../controllers';
import { lib } from '../utils';

const events: Record<string, RegExp> = {
  help: /\/help/,
  start: /\/start/,
  stop: /\/stop/,
  compliment: /\/compliment/,
  complimentToAll: /\/toAll/,
  addCompliment: /\/add/,
  flower: /\/flower/,
  cat: /\/cat/,
  dog: /\/dog/,
};

bot.onText(events.help, (msg: Message): void => help(msg));

bot.onText(events.start, (msg: Message): Promise<void> => addUser(msg));

bot.onText(events.stop, (msg: Message): Promise<void> => removeUser(msg));

bot.onText(events.compliment, (msg: Message): Promise<void> => sendCompliment(msg));

bot.onText(events.complimentToAll, () => sendComplimentAndFlowerToAllUsers());

bot.onText(events.addCompliment, (msg: Message): Promise<void> => addCompliment(msg));

bot.onText(
  events.flower,
  (msg: Message): Promise<void> =>
    sendPhotoFromStock(msg, 'flower', lib.userGotFlower())
);

bot.onText(
  events.cat,
  (msg: Message): Promise<void> =>
    sendPhotoFromStock(msg, 'cat', lib.userGotCat())
);

bot.onText(
  events.dog,
  (msg: Message): Promise<void> =>
    sendPhotoFromStock(msg, 'dog', lib.userGotDog())
);
