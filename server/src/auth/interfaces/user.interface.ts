import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly createTime: string;
  readonly updateTime: string;
  readonly userRights: Number;
  readonly salt: string;
}
