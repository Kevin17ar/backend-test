import { GetAllMoviesDto, MovieDto } from "../dto";

export const mockGetAllMoviesDto = (): GetAllMoviesDto => {
    return {
        count: 7,
        data: [
            {
                movieId: 1,
                title: "Alien: Covenant",
                director: "Ridley Scott",
                producer: "Kevin",
                releaseDate: "2017-05-11"
            },
            {
                movieId: 5,
                title: "A New Hope",
                director: "George Lucas",
                producer: "Gary Kurtz, Rick McCallum",
                releaseDate: "1977-05-25"
            },
            {
                movieId: 6,
                title: "The Empire Strikes Back",
                director: "Irvin Kershner",
                producer: "Gary Kurtz, Rick McCallum",
                releaseDate: "1980-05-17"
            },
            {
                movieId: 7,
                title: "Return of the Jedi",
                director: "Richard Marquand",
                producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
                releaseDate: "1983-05-25"
            },
            {
                movieId: 8,
                title: "The Phantom Menace",
                director: "George Lucas",
                producer: "Rick McCallum",
                releaseDate: "1999-05-19"
            },
            {
                movieId: 9,
                title: "Attack of the Clones",
                director: "George Lucas",
                producer: "Rick McCallum",
                releaseDate: "2002-05-16"
            },
            {
                movieId: 10,
                title: "Revenge of the Sith",
                director: "George Lucas",
                producer: "Rick McCallum",
                releaseDate: "2005-05-19"
            }
        ]
    }
};

export const mockedMovieDto = (): MovieDto => {
    return {
        movieId: 1,
        title: "Alien: Covenant",
        director: "Ridley Scott",
        producer: "Kevin",
        releaseDate: "2017-05-11"
    }
};