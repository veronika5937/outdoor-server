import { IsString, IsMongoId, IsNumber, IsOptional } from 'class-validator';

export class Movie {
    @IsOptional() @IsString() @IsMongoId() _id: string;

    @IsString()name: string;
    @IsNumber()release_year: number;
    @IsString()youtube_url: string;
    @IsNumber()age: number;
    @IsString() duration: string;
    @IsOptional() @IsString()genre: string;
    @IsString()description: string;
    @IsString()date: string;
    @IsString()time: string;
}
