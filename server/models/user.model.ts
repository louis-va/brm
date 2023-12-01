import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  role: "admin" | "user";
}

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  role: String
});

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export { IUser, User }