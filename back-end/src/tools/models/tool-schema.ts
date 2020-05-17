import * as mongoose from 'mongoose';

export const ToolSchema = new mongoose.Schema({
    title           :  String,
    description     :  String,
    price           :  String,
    rate            :  String,
    category        :  String,
},{ timestamps: true });