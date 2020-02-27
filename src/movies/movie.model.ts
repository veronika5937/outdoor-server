import { IsString, IsMongoId, IsNumber } from 'class-validator';

export class Movie {
    @IsString() @IsMongoId() _id: string;

    @IsString()name: string;
    @IsNumber()release_year: number;
    @IsString()youtube_url: string;
    @IsNumber()age: number;
    @IsString() duration: string;
    @IsString()genre: string;
    @IsString()description: string;
    @IsString()date: string;
    @IsString()time: string;
}
