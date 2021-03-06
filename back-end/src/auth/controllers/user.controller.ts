import { Controller, Get, Res, HttpStatus, Post, Body, Put, NotFoundException, Delete, Param } from '@nestjs/common';

import { DbUserService } from '../../users/services/dbusers.service';
import { CreateUserDto } from '../../users/models/create-user.dto';
import { UseInterceptors,  UploadedFile } from  '@nestjs/common';
import { FileInterceptor } from  '@nestjs/platform-express';
import { diskStorage } from  'multer';
import { extname } from  'path';
import { SERVER_URL } from 'src/Data/BaseUrl.data';

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

    @Post('avatar/:userid')
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
    async uploadAvatar(@Res() res,@Param('userid') userId, @UploadedFile() file) {
        const user = await this.userService.getUser(userId);
        if (!user) throw new NotFoundException('User does not exist!');
       
        let originalpath = SERVER_URL+file.path
        console.log();
        
        let useravatar = file.path.split("\\")[1]
        console.log(useravatar);
        
        let userBody = {
            avatarUrl : `${useravatar}`
        }
        
        
        this.userService.updateUser(userId,userBody);
        
        return res.status(HttpStatus.OK).json({
          message: 'User has been successfully updated',
          originalpath
      });
    }

    @Get('avatars/:userId')
    async serveAvatar(@Param('userId') userId, @Res() res): Promise<any> {
        const user = await this.userService.getUser(userId);
        if (!user) throw new NotFoundException('User does not exist!');
        res.sendFile(user.avatarUrl, { root: 'avatars'});

    }

    @Get('avatars/url/:userId')
    async serveAvatar2(@Param('userId') userId, @Res() res): Promise<any> {
        const user = await this.userService.getUser(userId);
        if (!user) throw new NotFoundException('User does not exist!');
        let x =`${SERVER_URL}`+"avatars/"+user.avatarUrl; 
        console.log(x);
        
        return res.status(HttpStatus.OK).json(x);

    }
}