import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/jwt/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { MyAuthGuard } from 'src/auth/guard/auth.guard';

@Controller('tools')
export class ToolsController {

    constructor(private toolService : ToolsService){

    }
    
    @UseGuards(MyAuthGuard, RolesGuard)
    @Roles('admin')
    @Get()
    async getAllTools(){
        return this.toolService.getAllTools()
    }
    
    @UseGuards(MyAuthGuard)
    @Get("getToolById/:toolId")
    async getToolById(@Param("toolId") toolId  :string){
        return this.toolService.getToolById(toolId)
    }

    @Post()
    async addNewTool(@Body() toolBody){
        return this.toolService.addNewTool(toolBody)
    }
    
    @Put(":toolId")
    async updateToolById(@Param("toolId") toolId  :string,@Body() toolBody){
        return this.toolService.updateTool(toolId,toolBody)
    }

    @Delete(":toolId")
    async deleteToolById(@Param("toolId") toolId  :string){
        return this.toolService.deleteTool(toolId)
    }
}
