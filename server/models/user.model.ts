import mongoose, { Model, Schema } from 'mongoose';
import IUser from "./user.interface";

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  role: String
});

// Create a model with IUser interface
const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default User;