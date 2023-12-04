import mongoose, { Document, Model, Schema, Types } from 'mongoose';
import { IScreening } from './screening.model';
import { IUser } from './user.model';

interface ITicket {
  rate: "Adulte" | "Étudiant" | "-18 ans",
  amount: number
}

interface ISnack {
  name: string,
  amount: number
}

interface IBooking extends Document {
  screening_id: Types.ObjectId | IScreening,
  user_id: Types.ObjectId | IUser,
  seats: string[],
  tickets: ITicket[]
  snacks: ISnack[]
}

const TicketSchema = new Schema({
  rate: {
    type: String,
    enum: ["Adulte", "Étudiant", "-18 ans"]
  },
  amount: Number
})

const SnackSchema = new Schema({
  name: String,
  amount: Number
})

const BookingSchema = new Schema({
  screening_id: {
    type: Schema.Types.ObjectId,
    ref: 'Screening'
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  seats: [String],
  tickets: [TicketSchema],
  snacks: [SnackSchema]
});

const Booking: Model<IBooking> = mongoose.model<IBooking>('Booking', BookingSchema);

export { IBooking, Booking }