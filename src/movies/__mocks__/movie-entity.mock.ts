import { Movie } from "../entities/movie.entity"

export const mockedMovieEntity = (): Movie => {
    return {
        id: 1,
        title: "Alien: Covenant",
        director: "Ridley Scott",
        producer: "Kevin",
        releaseDate: "2017-05-11",
        createdAt: new Date(),
        updateAt: new Date(),
    }
}

export const mockedMovieEntityList = (): Movie[] => {
    return [
        {
            id: 1,
            title: "Alien: Covenant",
            director: "Ridley Scott",
            producer: "Kevin",
            releaseDate: "2017-05-11",
            createdAt: new Date(),
            updateAt: new Date(),
        },
        {
            id: 2,
            title: "Star Wars: Episode IV - A New Hope",
            director: "George Lucas",
            producer: "Gary Kurtz, Rick McCallum",
            releaseDate: "1977-05-25",
            createdAt: new Date(),
            updateAt: new Date(),
        },
    ]
};