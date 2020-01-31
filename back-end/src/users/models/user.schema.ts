import * as mongoose from 'mongoose';

    
export const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatarUrl: { type: String, default: "" },
    created_at: { type: Date, default: Date.now },
    roles   : [String]
});