export class  userGetterDto {
    readonly _id  : string;
    readonly username: string;

 
    constructor(id , username) {
        this._id = id;
        this.username = username;
    }
}
