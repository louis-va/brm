import mongoose, { Mongoose, Model } from 'mongoose';
import UserModel from "./user.model";
import UserInterface from "./user.interface";

mongoose.Promise = global.Promise;

interface Database {
    mongoose: Mongoose;
    user: Model<UserInterface>;
}

const database: Database = {
    mongoose: mongoose,
    user: UserModel
};

export default database;
