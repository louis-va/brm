import mongoose, { Document, Model, Schema } from 'mongoose';

interface IScreening extends Document {
  movie: {
    title: string,
    director: string,
    casting: Array<string>,
    genres: Array<string>,
    synopsis: string,
    poster: string,
    trailer: string,
    score: string,
    length: string,
    release: Date
  },
  date: Date,
  seats: Array<string>
}

const ScreeningSchema = new Schema({
  movie: {
    title: String,
    director: String,
    casting: Array,
    genres: Array,
    synopsis: String,
    poster: String,
    trailer: String,
    score: String,
    length: String,
    release: String
  },
  date: Date,
  seats: Array
});

const Screening: Model<IScreening> = mongoose.model<IScreening>('Screening', ScreeningSchema);

export { IScreening, Screening }