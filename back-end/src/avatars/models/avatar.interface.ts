
import { Document } from 'mongoose';

export interface Avatar extends Document {

    readonly url          : string;
    readonly owner          : string;
    readonly created_at     : Date;
}
