
import { Document } from 'mongoose';

export interface House extends Document {

    readonly title: string;
    readonly description: string;
    readonly images: [string];
    readonly created_at: Date;
}
