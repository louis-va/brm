import mongoose, { Model, Schema } from 'mongoose';
import UserInterface from "./user.interface";

// Define schema using Mongoose Schema
const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  role: String
});

// Create a model with IUser interface
const UserModel: Model<UserInterface> = mongoose.model<UserInterface>('User', UserSchema);

export default UserModel;