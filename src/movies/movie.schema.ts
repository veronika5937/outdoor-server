import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
  name: String,
  release_year: Number,
  youtube_url: String,
  age: Number,
  duration: String,
  genre: String,
  description: String,
  date: String,
  time: String,
});
