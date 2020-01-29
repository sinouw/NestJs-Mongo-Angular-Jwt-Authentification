export class CreateHouseDto {
    readonly _id  : string;
    readonly title: string;
    readonly description: string;
    readonly images   : string[]; 
    readonly created_at: Date;
}
