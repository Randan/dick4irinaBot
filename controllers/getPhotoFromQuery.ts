import { Message } from 'node-telegram-bot-api';
import sendPhotoFromStock from './sendPhotoFromStock';

const getPhotoFromQuery = (msg: Message): void => {
  if (!msg.from) return;

  const photoQuery: string = msg.text?.replace('/getPhoto', '').trim() || '';

  sendPhotoFromStock(msg.chat.id, photoQuery);
};

export default getPhotoFromQuery;
