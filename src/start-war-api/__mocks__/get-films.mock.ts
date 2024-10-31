import { AxiosRequestConfig, AxiosResponse, } from "axios";

export const mockedGetFilms = (): AxiosResponse<any, any> => {
    const config: AxiosRequestConfig = {
        method: "GET",
    };
    return {
        data: {
            count: 2,
            next: null,
            previous: null,
            results: [
                {
                    title: "A New Hope",
                    episode_id: 4,
                    opening_crawl: "It is a period of civil war. Rebel military forces have...",
                    producer: "Gary Kurtz, Rick McCallum",
                    release_date: "1977-05-25",
                    characters: [
                        "https://swapi.dev/api/people/1/",
                        "https://swapi.dev/api/people/2/",
                        "https://swapi.dev/api/people/3/",
                        "https://swapi.dev/api/people/4/",
                        "https://swapi.dev/api/people/5/",
                        "https://swapi.dev/api/people/6/",
                        "https://swapi.dev/api/people/7/",
                        "https://swapi.dev/api/people/8/",
                        "https://swapi.dev/api/people/9/",
                        "https://swapi.dev/api/people/10/",
                        "https://swapi.dev/api/people/12/",
                        "https://swapi.dev/api/people/13/",
                        "https://swapi.dev/api/people/14/",
                        "https://swapi.dev/api/people/15/",
                        "https://swapi.dev/api/people/16/",
                        "https://swapi.dev/api/people/18/",
                        "https://swapi.dev/api/people/19/",
                        "https://swapi.dev/api/people/81/"
                    ],
                    planets: [
                        "https://swapi.dev/api/planets/1/",
                        "https://swapi.dev/api/planets/2/",
                        "https://swapi.dev/api/planets/3/"
                    ],
                    starships: [
                        "https://swapi.dev/api/starships/2/",
                        "https://swapi.dev/api/starships/3/",
                        "https://swapi.dev/api/starships/5/",
                        "https://swapi.dev/api/starships/9/",
                        "https://swapi.dev/api/starships/10/",
                        "https://swapi.dev/api/starships/11/",
                        "https://swapi.dev/api/starships/12/",
                        "https://swapi.dev/api/starships/13/"
                    ],
                    vehicles: [
                        "https://swapi.dev/api/vehicles/4/",
                        "https://swapi.dev/api/vehicles/6/",
                        "https://swapi.dev/api/vehicles/7/",
                        "https://swapi.dev/api/vehicles/8/"
                    ],
                    species: [
                        "https://swapi.dev/api/species/1/",
                        "https://swapi.dev/api/species/2/",
                        "https://swapi.dev/api/species/3/",
                        "https://swapi.dev/api/species/4/",
                        "https://swapi.dev/api/species/5/"
                    ],
                    created: "2014-12-10T14:23:31.880000Z",
                    edited: "2014-12-20T19:49:45.256000Z",
                    url: "https://swapi.dev/api/films/1/"
                },
                {
                    title: "The Empire Strikes Back",
                    episode_id: 5,
                    opening_crawl: "It is a dark time for the Rebellion. Because the Jedi have voice...",
                    director: "Irvin Kershner",
                    producer: "Gary Kurtz, Rick McCallum",
                    release_date: "1980-05-17",
                    characters: [
                        "https://swapi.dev/api/people/1/",
                        "https://swapi.dev/api/people/2/",
                        "https://swapi.dev/api/people/3/",
                        "https://swapi.dev/api/people/4/",
                        "https://swapi.dev/api/people/5/",
                        "https://swapi.dev/api/people/10/",
                        "https://swapi.dev/api/people/13/",
                        "https://swapi.dev/api/people/14/",
                        "https://swapi.dev/api/people/18/",
                        "https://swapi.dev/api/people/20/",
                        "https://swapi.dev/api/people/21/",
                        "https://swapi.dev/api/people/22/",
                        "https://swapi.dev/api/people/23/",
                        "https://swapi.dev/api/people/24/",
                        "https://swapi.dev/api/people/25/",
                        "https://swapi.dev/api/people/26/"
                    ],
                    planets: [
                        "https://swapi.dev/api/planets/4/",
                        "https://swapi.dev/api/planets/5/",
                        "https://swapi.dev/api/planets/6/",
                        "https://swapi.dev/api/planets/27/"
                    ],
                    starships: [
                        "https://swapi.dev/api/starships/3/",
                        "https://swapi.dev/api/starships/10/",
                        "https://swapi.dev/api/starships/11/",
                        "https://swapi.dev/api/starships/12/",
                        "https://swapi.dev/api/starships/15/",
                        "https://swapi.dev/api/starships/17/",
                        "https://swapi.dev/api/starships/21/",
                        "https://swapi.dev/api/starships/22/",
                        "https://swapi.dev/api/starships/23/"
                    ],
                    vehicles: [
                        "https://swapi.dev/api/vehicles/8/",
                        "https://swapi.dev/api/vehicles/14/",
                        "https://swapi.dev/api/vehicles/16/",
                        "https://swapi.dev/api/vehicles/18/",
                        "https://swapi.dev/api/vehicles/19/",
                        "https://swapi.dev/api/vehicles/20/"
                    ],
                    species: [
                        "https://swapi.dev/api/species/1/",
                        "https://swapi.dev/api/species/2/",
                        "https://swapi.dev/api/species/3/",
                        "https://swapi.dev/api/species/6/",
                        "https://swapi.dev/api/species/7/"
                    ],
                    created: "2014-12-12T11:26:24.656000Z",
                    edited: "2014-12-15T13:07:53.386000Z",
                    url: "https://swapi.dev/api/films/2/"
                }
            ]
        },
        status: 200,
        statusText: "OK",
        headers: {
            contentType: "application/json",
        },
        config
    } as AxiosResponse<any, any>;
};