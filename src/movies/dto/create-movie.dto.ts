import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateMovieDto {
    @ApiProperty({
        type: String,
        example: 'Star Wars: Episode IV - A New Hope',
        description: 'MovieEntity title'
    })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        type: String,
        example: 'George Lucas',
        description: 'MovieEntity director'
    })
    @IsString()
    @IsNotEmpty()
    director: string;

    @ApiProperty({
        type: String,
        example: 'Rick McCallum',
        description: 'MovieEntity producer'
    })
    @IsString()
    @IsNotEmpty()
    producer: string;

    @ApiProperty({
        type: String,
        example: '2002-05-16',
        description: 'MovieEntity release date'
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, {
        message: 'La fecha debe tener el formato YYYY-MM-DD'
    })
    releaseDate: string;
}
