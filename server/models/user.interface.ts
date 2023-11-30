import { Document } from 'mongoose';

interface IUser extends Document {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  role: "admin" | "user";
}

export default IUser