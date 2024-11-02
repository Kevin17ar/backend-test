import { ApiProperty } from "@nestjs/swagger";

export class MovieDto {
    @ApiProperty({ type: Number, example: 2, description: 'MovieEntity id' })
    movieId: number;

    @ApiProperty({ type: String, example: 'Star Wars: Episode IV - A New Hope', description: 'MovieEntity title' })
    title: string;

    @ApiProperty({ type: String, example: 'George Lucas', description: 'MovieEntity director' })
    director: string;

    @ApiProperty({ type: String, example: 'Rick McCallum', description: 'MovieEntity producer' })
    producer: string;

    @ApiProperty({ type: String, example: '2002-05-16', description: 'MovieEntity release date' })
    releaseDate: string;
}

export class GetAllMoviesDto {
    @ApiProperty({ type: Number, example: 2 })
    count: number

    @ApiProperty({ type: [MovieDto] })
    data: MovieDto[]
}
