import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express = require('express');
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });
  app.use('/avatars', express.static(join(__dirname, '..', 'avatars')));
  await app.listen(3000);
}
bootstrap();
