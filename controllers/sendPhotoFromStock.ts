import { AxiosResponse } from 'axios';
import bot from '../bot';
import { getPhoto } from '../api';
import { IPexelsResponse } from '../interfaces';

const sendPhotoFromStock = async (
  id: number,
  query: string,
  caption?: string
): Promise<void> => {
  try {
    const response: AxiosResponse<IPexelsResponse> = await getPhoto(query);

    if (response.status >= 200 && response.status < 400) {
      const randomID = Math.floor(Math.random() * (response.data?.per_page || 15) - 1);
      const randomPhotoObj = response.data.photos[randomID];
      const randomPhotoUri = randomPhotoObj.src.medium;

      bot.sendPhoto(id, randomPhotoUri, {
        caption,
      });
    }
  } catch (err: unknown) {
    console.log(err);
  }
};

export default sendPhotoFromStock;
