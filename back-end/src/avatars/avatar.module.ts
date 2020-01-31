import { Module } from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AvatarSchema } from './models/avatar-schema';
import { AvatarController } from './avatar/avatar.controller';

@Module({
  imports : [
    MongooseModule.forFeature([{ name: 'Avatar', schema: AvatarSchema }]),
  ],
  providers: [AvatarService],
  controllers: [AvatarController]
})
export class AvatarModule {}
