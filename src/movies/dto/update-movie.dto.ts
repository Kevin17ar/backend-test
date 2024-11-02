import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMovieDto {
    @ApiPropertyOptional({
        type: String,
        example: 'Star Wars: Episode IV - A New Hope',
        description: 'MovieEntity title'
    })
    title?: string;

    @ApiPropertyOptional({
        type: String,
        example: 'George Lucas',
        description: 'MovieEntity director'
    })
    director?: string;

    @ApiPropertyOptional({
        type: String,
        example: 'Rick McCallum',
        description: 'MovieEntity producer'
    })
    producer?: string;

    @ApiPropertyOptional({
        type: String,
        example: '2002-05-16',
        description: 'MovieEntity release date'
    })
    releaseDate?: string;
}
