import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './movie.model';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class MoviesService {
    constructor(@InjectModel('Movie') private movieModel: Model<Movie>) {}

    async getMovies(): Promise<Movie[]> {
        return this.movieModel.find();
    }

    async addMovie(movie): Promise<Movie> {
        return this.movieModel.create(movie);
    }

    async deleteMovie(id) {
        return await this.movieModel.deleteOne({_id : id});
    }

    async deleteAllMovies() {
        return await this.movieModel.remove();
    }
}
