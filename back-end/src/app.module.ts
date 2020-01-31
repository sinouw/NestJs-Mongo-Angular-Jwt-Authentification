import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HousesModule } from './houses/houses.module';
import { AvatarModule } from './avatars/avatar.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/authNestJs'),
    AuthModule,
    UsersModule,
    HousesModule,
    AvatarModule,
  ],
  controllers: [AppController],
  providers: [
  ],
})
export class AppModule {}
