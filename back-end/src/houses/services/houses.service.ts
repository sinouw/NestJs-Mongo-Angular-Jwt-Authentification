import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { House } from '../models/house.interface';
import { CreateHouseDto } from '../models/create-house-dto';

@Injectable()
export class HousesService {
    constructor(@InjectModel('House') private readonly houseModel: Model<House>) { }

    // fetch all houses
    async getAllHouse(): Promise<House[]> {
        const houses = await this.houseModel.find().exec();
        return houses;
    }

    // fetch houses by userId
    async getHousesByUserId(userId : string): Promise<House[]> {
        const houses = await this.houseModel.find({ owner : userId}).select().exec();
        return houses;
    }
    
    // Get a single house
    async getHouse(houseID): Promise<House> {
        const house = await this.houseModel.findById(houseID).exec();
        return house;
    }

    // Check if house exists
    async HouseExists(houseID): Promise<boolean> {
        const house = await this.houseModel.findById(houseID).exec();
        return house==null?false:true;
    }

    // post a single house
    async addHouse(createHouseDTO: CreateHouseDto): Promise<House> {
        const newHouse = await this.houseModel(createHouseDTO);
        return newHouse.save();
    }
    // Edit house details
    async updateHouse(houseID, createHouseDTO: CreateHouseDto): Promise<House> {
        const updatedHouse = await this.houseModel
            .findByIdAndUpdate(houseID, createHouseDTO, { new: true });
        return updatedHouse;
    }
    // Delete a house
    async deleteHouse(houseID): Promise<any> {
        const deletedHouse = await this.houseModel.findByIdAndRemove(houseID);
        return deletedHouse;
    }

}
