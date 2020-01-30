import * as mongoose from 'mongoose';

export const HouseSchema = new mongoose.Schema({
    title           :  String,
    description     :  String,
    owner           :  String,
    renters         : [String],
    images          : [String],
    created_at      : { type: Date, default: Date.now },
});