export class CreateHouseDto {
    readonly _id            : string;
    readonly title          : string;
    readonly description    : string;
    readonly owner          : string;
    readonly renters         : string[]; 
    readonly images         : string[]; 
    readonly created_at     : Date;

}
