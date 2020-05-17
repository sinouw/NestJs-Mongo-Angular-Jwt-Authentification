import { CreateToolDto } from './models/create-tool-dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tool } from './models/tool.interface';
import { Model } from 'mongoose';

@Injectable()
export class ToolsService {

    constructor(@InjectModel('Tool') private readonly toolModel: Model<Tool>) { }
    

    async getAllTools(){
        return await this.toolModel.find();
        
    }

    async getToolById(id){
        return await this.toolModel.findOne({ _id : id })
    }

    async addNewTool(toolBody){
        return  await this.toolModel(toolBody).save()   
    }

    async updateTool(toolId, createToolDTO: CreateToolDto): Promise<Tool> {
        const updatedTool = await this.toolModel.findByIdAndUpdate(toolId, createToolDTO, { new: true });
        return updatedTool;
    }
    // Delete a Tool
    async deleteTool(toolId): Promise<any> {
        const deletedTool = await this.toolModel.findByIdAndRemove(toolId);
        return deletedTool;
    }

}
