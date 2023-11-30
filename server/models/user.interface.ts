import { Document } from 'mongoose';

interface IUser extends Document {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  role: string;
}

export default IUser