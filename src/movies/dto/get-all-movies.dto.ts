import { ApiProperty } from "@nestjs/swagger";

export class MovieDto {
    @ApiProperty({ type: Number, example: 2, description: 'Movie id' })
    movieId: number;

    @ApiProperty({ type: String, example: 'Star Wars: Episode IV - A New Hope', description: 'Movie title' })
    title: string;

    @ApiProperty({ type: String, example: 'George Lucas', description: 'Movie director' })
    director: string;

    @ApiProperty({ type: String, example: 'Rick McCallum', description: 'Movie producer' })
    producer: string;

    @ApiProperty({ type: String, example: '2002-05-16', description: 'Movie release date' })
    releaseDate: string;
}

export class GetAllMoviesDto {
    @ApiProperty({ type: Number, example: 2 })
    count: number

    @ApiProperty({ type: [MovieDto] })
    data: MovieDto[]
}
