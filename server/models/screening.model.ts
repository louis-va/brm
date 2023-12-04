import mongoose, { Document, Model, Schema } from 'mongoose';

interface IMovie {
  title: string,
  director: string,
  casting: string[],
  genres: string[],
  synopsis: string,
  poster: string,
  trailer: string,
  score: string,
  length: string,
  release: Date
}

interface IScreening extends Document {
  movie: IMovie
  date: Date
}

const ScreeningSchema = new Schema({
  movie: {
    title: String,
    director: String,
    casting: [String],
    genres: [String],
    synopsis: String,
    poster: String,
    trailer: String,
    score: String,
    length: String,
    release: Date
  },
  date: Date
});

const Screening: Model<IScreening> = mongoose.model<IScreening>('Screening', ScreeningSchema);

export { IScreening, Screening }