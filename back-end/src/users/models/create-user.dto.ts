export class  CreateUserDto {
    readonly _id  : string;
    readonly username: string;
    readonly password: string;
    readonly avatar: string;
    readonly created_at: Date;
    readonly roles   : string[]; 
}
