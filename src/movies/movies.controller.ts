import { Controller, Post, Body, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.model';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}

    @Get()
    async getMovies(): Promise<Movie[]> {
        return this.moviesService.getMovies();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createTask(@Body() movie: Movie): Promise<Movie> {
        return this.moviesService.addMovie(movie);
    }
}
