
import { Document } from 'mongoose';

export interface Tool {
    readonly title           :  string;
    readonly description     :  string;
    readonly price           :  string;
    readonly rate            :  string;
    readonly category        :  string;
}
