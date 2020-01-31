import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HousesModule } from './houses/houses.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/authNestJs'),
    AuthModule,
    UsersModule,
    HousesModule,
  ],
  controllers: [AppController],
  providers: [
  ],
})
export class AppModule {}
