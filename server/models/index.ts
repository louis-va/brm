import mongoose, { Mongoose, Model } from 'mongoose';
import User from "./user.model";
import IUser from "./user.interface";

mongoose.Promise = global.Promise;

interface Database {
    mongoose: Mongoose;
    user: Model<IUser>;
}

const database: Database = {
    mongoose: mongoose,
    user: User
};

export default database;
