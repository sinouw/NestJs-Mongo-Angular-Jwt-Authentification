import { Module } from '@nestjs/common';
import { HousesService } from './houses.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseSchema } from './models/house-schema';
import { HousesController } from './houses/houses.controller';

@Module({
  imports : [
    MongooseModule.forFeature([{ name: 'House', schema: HouseSchema }]),

  ],
  providers: [HousesService],
  controllers: [HousesController]
})
export class HousesModule {}
