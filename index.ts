/* eslint-disable import/first */
import express, { Express } from 'express';
import { appPort } from './utils';

const app: Express = express();

import './events';

app.listen(appPort, () => {
  console.log(`⚡⚡⚡ Dick4IraBot Alive on PORT: ${appPort}`);
});

import './cron';
