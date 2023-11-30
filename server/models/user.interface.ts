import { Document } from 'mongoose';

interface UserInterface extends Document {
  username: string,
  email: string,
  password: string,
  role: "user" | "admin";
}

export default UserInterface