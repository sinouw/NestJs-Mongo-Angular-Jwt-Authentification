import { Controller, Get, Res, HttpStatus, Post, Body, Put, NotFoundException, Delete, Param } from '@nestjs/common';

import { DbUserService } from '../../users/services/dbusers.service';
import { CreateUserDto } from '../../users/models/create-user.dto';
import { UseInterceptors,  UploadedFile } from  '@nestjs/common';
import { FileInterceptor } from  '@nestjs/platform-express';
import { diskStorage } from  'multer';
import { extname } from  'path';
import { SERVER_URL } from 'src/models/BaseUrl.data';

@Controller('user')
export class UserController {
    constructor(private userService: DbUserService) { }

    // add a user
    @Post('create')
    async addUser(@Res() res, @Body() createUserDto: CreateUserDto) {
        const user = await this.userService.addUser(createUserDto);
        return res.status(HttpStatus.OK).json({
            message: "User has been created successfully",
            user
        })
    }

    // Retrieve users list
    @Get('users')
    async getAllUser(@Res() res) {
        const users = await this.userService.getAllUser();
        return res.status(HttpStatus.OK).json(users);
    }
    
    @Get('usersSmallerDto')
    async getAllUserSmallerDto(@Res() res) {
        const users = await this.userService.getAllUserSmallerDto();
        return res.status(HttpStatus.OK).json(users);
    }

    // Fetch a particular user using ID
    @Get(':userID')
    async getUser(@Res() res, @Param('userID') userID) {
        const user = await this.userService.getUser(userID);
        if (!user) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json(user);
    }

    // Fetch a particular user using ID
    @Get('check/:userID')
    async UserExists(@Res() res, @Param('userID') userID) {
        const result = await this.userService.UserExists(userID);
        if (result==false) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json(true);
    }

    // Update a user's details
    @Put('update/:userID')
    async updateUser(@Res() res, @Param('userID') userID, @Body() createUserDTO: CreateUserDto) {
        const user = await this.userService.updateUser(userID, createUserDTO);
        if (!user) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User has been successfully updated',
            user
        });
    }

    // Delete a user
    @Delete('delete/:userID')
    async deleteUser(@Res() res, @Param('userID') userID) {
        const user = await this.userService.deleteUser(userID);
        if (!user) throw new NotFoundException('User does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'User has been deleted',
            user
        })
    }

    @Post(':userid/avatar')
    @UseInterceptors(FileInterceptor('file',
      {
        storage: diskStorage({
          destination: './avatars', 
          filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}${extname(file.originalname)}`)
        }
        })
      }
    ))
    uploadAvatar(@Param('userid') userId, @UploadedFile() file) {
      this.userService.setAvatar(Number(userId), `${SERVER_URL}${file.path}`);
    }

    @Get('avatars/:fileId')
    async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
      res.sendFile(fileId, { root: 'avatars'});
    }
    


}