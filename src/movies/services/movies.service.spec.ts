import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';

import { MoviesService } from './movies.service';
import { Movie } from '../entities/movie.entity';
import { MoviesSerializer } from '../serializers/movies.serializer';
import { mockedMovieEntity, mockedMovieEntityList } from '../__mocks__/movie-entity.mock';
import { mock } from 'node:test';
import { GetAllMoviesDto } from '../dto';

describe('MoviesService tests', () => {
  let service: MoviesService;
  let moviesSerializer: MoviesSerializer;
  let moviesRepository: Repository<Movie>;

  const mockedResultMovieEntity = mockedMovieEntity();
  const mockedResultMoviesEntity = mockedMovieEntityList();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        MoviesSerializer,
        {
          provide: getRepositoryToken(Movie),
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            delete: jest.fn(),
          }
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    moviesSerializer = module.get<MoviesSerializer>(MoviesSerializer);
    moviesRepository = module.get<Repository<Movie>>(getRepositoryToken(Movie));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllMovies', () => {
    it('should return serialized movies', async () => {
      const expectedResult: GetAllMoviesDto = {
        count: 2,
        data: [
          {
            movieId: 1,
            title: "Alien: Covenant",
            director: "Ridley Scott",
            producer: "Kevin",
            releaseDate: "2017-05-11",
          },
          {
            movieId: 2,
            title: "Star Wars: Episode IV - A New Hope",
            director: "George Lucas",
            producer: "Gary Kurtz, Rick McCallum",
            releaseDate: "1977-05-25",
          },
        ]
      }
      jest.spyOn(moviesRepository, 'find').mockResolvedValue(mockedResultMoviesEntity);

      const result = await service.getAllMovies();

      expect(moviesRepository.find).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });

    it('should handle empty movies array', async () => {
      const mockMovies: Movie[] = [];

      jest.spyOn(moviesRepository, 'find').mockResolvedValue(mockMovies);

      const result = await service.getAllMovies();

      expect(moviesRepository.find).toHaveBeenCalled();
      expect(result.data).toHaveLength(0);
      expect(result.count).toBe(0);
    });
  });
});
