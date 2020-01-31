import { Controller, Get, Res, HttpStatus, Post, Body, Put, NotFoundException, Delete, Param } from '@nestjs/common';
import { CreateAvatarDto } from './models/create-avatar-dto';
import { AvatarService } from './avatar.service';

@Controller('avatars')
export class AvatarController {
    constructor(private avatarService: AvatarService) { }

    // add a avatar
    @Post('create')
    async addAvatar(@Res() res, @Body() createAvatarDto: CreateAvatarDto) {
        const avatar = await this.avatarService.addAvatar(createAvatarDto);
        return res.status(HttpStatus.OK).json({
            message: "Avatar has been created successfully",
            avatar
        })
    }

    // Retrieve avatars list
    @Get('getAll')
    async getAllAvatar(@Res() res) {
        const avatars = await this.avatarService.getAllAvatar();
        return res.status(HttpStatus.OK).json(avatars);
    }

    // Retrieve avatars list
    @Get('getByUserId/:userID')
    async getAvatarsByUserId(@Res() res, @Param('userID') userID) {
        const avatars = await this.avatarService.getAvatarsByUserId(userID);
        return res.status(HttpStatus.OK).json(avatars);
    }

    // Fetch a particular avatar using ID
    @Get(':avatarID')
    async getAvatar(@Res() res, @Param('avatarID') avatarID) {
        const avatar = await this.avatarService.getAvatar(avatarID);
        if (!avatar) throw new NotFoundException('Avatar does not exist!');
        return res.status(HttpStatus.OK).json(avatar);
    }

    // Fetch a particular avatar using ID
    @Get('check/:avatarID')
    async AvatarExists(@Res() res, @Param('avatarID') avatarID) {
        const result = await this.avatarService.AvatarExists(avatarID);
        if (result==false) throw new NotFoundException('Avatar does not exist!');
        return res.status(HttpStatus.OK).json(true);
    }

    // Update a avatar's details
    @Put('update/:avatarID')
    async updateAvatar(@Res() res, @Param('avatarID') avatarID, @Body() createAvatarDTO: CreateAvatarDto) {
        const avatar = await this.avatarService.updateAvatar(avatarID, createAvatarDTO);
        if (!avatar) throw new NotFoundException('Avatar does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Avatar has been successfully updated',
            avatar
        });
    }

    // Delete a avatar
    @Delete('delete/:avatarID')
    async deleteAvatar(@Res() res, @Param('avatarID') avatarID) {
        const avatar = await this.avatarService.deleteAvatar(avatarID);
        if (!avatar) throw new NotFoundException('Avatar does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Avatar has been deleted',
            avatar
        })
    }



}
