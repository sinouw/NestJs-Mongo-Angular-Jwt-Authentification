import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { HousesService } from './houses.service';
import { CreateHouseDto } from './models/create-house-dto';


@Controller('houses')
export class HousesController {
    constructor(private houseService: HousesService) { }

    // add a house
    @Post('create')
    async addHouse(@Res() res, @Body() createHouseDto: CreateHouseDto) {
        const house = await this.houseService.addHouse(createHouseDto);
        return res.status(HttpStatus.OK).json({
            message: "House has been created successfully",
            house
        })
    }

    // Retrieve houses list
    @Get('getAll')
    async getAllHouse(@Res() res) {
        const houses = await this.houseService.getAllHouse();
        return res.status(HttpStatus.OK).json(houses);
    }

    // Fetch a particular house using ID
    @Get(':houseID')
    async getHouse(@Res() res, @Param('houseID') houseID) {
        const house = await this.houseService.getHouse(houseID);
        if (!house) throw new NotFoundException('House does not exist!');
        return res.status(HttpStatus.OK).json(house);
    }

    // Fetch a particular house using ID
    @Get('check/:houseID')
    async HouseExists(@Res() res, @Param('houseID') houseID) {
        const result = await this.houseService.HouseExists(houseID);
        if (result==false) throw new NotFoundException('House does not exist!');
        return res.status(HttpStatus.OK).json(true);
    }

    // Update a house's details
    @Put('update/:houseID')
    async updateHouse(@Res() res, @Param('houseID') houseID, @Body() createHouseDTO: CreateHouseDto) {
        const house = await this.houseService.updateHouse(houseID, createHouseDTO);
        if (!house) throw new NotFoundException('House does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'House has been successfully updated',
            house
        });
    }

    // Delete a house
    @Delete('delete/:houseID')
    async deleteHouse(@Res() res, @Param('houseID') houseID) {
        const house = await this.houseService.deleteHouse(houseID);
        if (!house) throw new NotFoundException('House does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'House has been deleted',
            house
        })
    }

}
