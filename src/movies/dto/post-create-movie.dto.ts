import { ApiProperty } from "@nestjs/swagger";

export class PostCreateMovieDto {
    @ApiProperty({ type: Number, example: 2, description: 'Movie id' })
    movieId: number;

    @ApiProperty({ type: String, example: 'Star Wars: Episode IV - A New Hope', description: 'Movie title' })
    title: string;
}