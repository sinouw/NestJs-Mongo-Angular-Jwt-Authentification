export class  userGetterDto {
    readonly _id  : string;
    readonly username: string;
    readonly created_at: Date;

 
    constructor(id , username,created_at) {
        this._id = id;
        this.username = username;
        this.created_at = created_at;
    }
}
