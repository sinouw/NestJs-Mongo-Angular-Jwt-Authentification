import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Avatar } from './models/avatar.interface';
import { Model } from 'mongoose';
import { CreateAvatarDto } from './models/create-avatar-dto';

@Injectable()
export class AvatarService {
    constructor(@InjectModel('Avatar') private readonly avatarModel: Model<Avatar>) { }

    // fetch all avatars
    async getAllAvatar(): Promise<Avatar[]> {
        const avatars = await this.avatarModel.find().exec();
        return avatars;
    }

    // fetch avatars by userId
    async getAvatarsByUserId(userId : string): Promise<Avatar[]> {
        const avatars = await this.avatarModel.find({ owner : userId}).select().exec();
        return avatars;
    }
    
    // Get a single avatar
    async getAvatar(avatarID): Promise<Avatar> {
        const avatar = await this.avatarModel.findById(avatarID).exec();
        return avatar;
    }

    // Check if avatar exists
    async AvatarExists(avatarID): Promise<boolean> {
        const avatar = await this.avatarModel.findById(avatarID).exec();
        return avatar==null?false:true;
    }

    // post a single avatar
    async addAvatar(createAvatarDTO: CreateAvatarDto): Promise<Avatar> {
        const newAvatar = await this.avatarModel(createAvatarDTO);
        return newAvatar.save();
    }
    // Edit avatar details
    async updateAvatar(avatarID, createAvatarDTO: CreateAvatarDto): Promise<Avatar> {
        const updatedAvatar = await this.avatarModel
            .findByIdAndUpdate(avatarID, createAvatarDTO, { new: true });
        return updatedAvatar;
    }
    // Delete a avatar
    async deleteAvatar(avatarID): Promise<any> {
        const deletedAvatar = await this.avatarModel.findByIdAndRemove(avatarID);
        return deletedAvatar;
    }

}
