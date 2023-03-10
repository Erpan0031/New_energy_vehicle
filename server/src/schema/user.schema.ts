import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createTime: String,
  updateTime: String,
  userRights: Number,
  salt: String,
});
