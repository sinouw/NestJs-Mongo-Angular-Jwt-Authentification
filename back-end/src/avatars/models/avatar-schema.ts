import * as mongoose from 'mongoose';

export const AvatarSchema = new mongoose.Schema({
    _id             :  String,
    url             :  String,
    owner           :  String,
    created_at      : { type: Date, default: Date.now },
});