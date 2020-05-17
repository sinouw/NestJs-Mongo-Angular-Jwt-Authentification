import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolSchema } from './models/tool-schema';

@Module({
  imports : [
    MongooseModule.forFeature([{ name: 'Tool', schema: ToolSchema }]),
  ],
  providers: [ToolsService],
  controllers: [ToolsController]
})
export class ToolsModule {}
