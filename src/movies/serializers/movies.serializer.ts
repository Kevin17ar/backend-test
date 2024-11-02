import { Injectable } from "@nestjs/common";
import { MovieEntity } from "../entities/movie.entity";
import { GetAllMoviesDto, MovieDto } from "../dto/get-all-movies.dto";
import { PostCreateMovieDto } from "../dto/post-create-movie.dto";

@Injectable()
export class MoviesSerializer {

    movieToMovieDto(movie: MovieEntity): MovieDto {
        return {
            movieId: movie.id,
            title: movie.title,
            director: movie.director,
            producer: movie.producer,
            releaseDate: movie.releaseDate
        }
    };

    getAllMovies(movies: MovieEntity[]): GetAllMoviesDto {
        return {
            count: movies.length,
            data: movies.map((movie) => this.movieToMovieDto(movie))
        }
    };

    getMovieDetail(movie: MovieEntity): MovieDto {
        return this.movieToMovieDto(movie);
    };

    postCreateMovie(movie: MovieEntity): PostCreateMovieDto {
        return {
            movieId: movie.id,
            title: movie.title
        }
    };
}