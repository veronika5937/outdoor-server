import { Controller, Post, Body, UsePipes, ValidationPipe, Get, Delete, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.model';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) { }

    @Get()
    async getMovies(): Promise<Movie[]> {
        return this.moviesService.getMovies();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createTask(@Body() movie: Movie): Promise<Movie> {
        return this.moviesService.addMovie(movie);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.moviesService.deleteMovie(id);
    }

    @Delete('/all')
    async deleteAll() {
        await this.moviesService.deleteAllMovies();
    }

}
