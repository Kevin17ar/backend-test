import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { FindOptionsWhere } from 'typeorm';

import { MoviesController } from './movies.controller';
import { MoviesService } from '../services/movies.service';
import { MoviesSerializer } from '../serializers/movies.serializer';
import { CreateMovieDto, GetAllMoviesDto } from '../dto';
import { mockPostCreateMovieDto } from '../__mocks__/post-create-movie.mock';
import { mockedMovieDto, mockGetAllMoviesDto } from '../__mocks__/get-all-movies.mock';
import { Movie } from '../entities/movie.entity';

describe('MoviesController', () => {
  let controller: MoviesController;
  let moviesService: MoviesService;

  const mockResultCreateMovie = mockPostCreateMovieDto();
  const mockResultGetAllMovies = mockGetAllMoviesDto();
  const mockResultMovie = mockedMovieDto();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [
        {
          provide: MoviesService,
          useValue: {
            createMovie: jest.fn(),
            getAllMovies: jest.fn(),
            getMovieDetail: jest.fn(),
            updateMovie: jest.fn(),
            deleteMovieById: jest.fn(),
          },
        }
      ],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
    moviesService = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createMovie', () => {
    it('should create a movie and return the result', async () => {
      const createMovieDto: CreateMovieDto = {
        title: 'Star Wars: Episode IV - A New Hope',
        director: 'George Lucas',
        producer: 'Rick McCallum',
        releaseDate: '2002-05-16',
      };

      jest.spyOn(moviesService, 'createMovie').mockResolvedValue(mockResultCreateMovie);

      const result = await controller.createMovie(createMovieDto);

      expect(moviesService.createMovie).toHaveBeenCalledWith(createMovieDto);
      expect(result).toEqual(mockResultCreateMovie);
      expect(result.title).toEqual(mockResultCreateMovie.title);
    });
  });

  describe('getAllMovies', () => {
    it('should return all movies and count', async () => {
      jest.spyOn(moviesService, 'getAllMovies').mockResolvedValue(mockResultGetAllMovies);

      const result = await controller.getAllMovies();

      expect(moviesService.getAllMovies).toHaveBeenCalled();
      expect(moviesService.getAllMovies).toHaveBeenCalledTimes(1);
      expect(result).toBe(mockResultGetAllMovies);
    });

    it('should return empty array when no movies exist', async () => {
      const mockEmptyMovies: GetAllMoviesDto = {
        data: [],
        count: 0
      };

      jest.spyOn(moviesService, 'getAllMovies').mockResolvedValue(mockEmptyMovies);

      const result = await controller.getAllMovies();

      expect(moviesService.getAllMovies).toHaveBeenCalled();
      expect(moviesService.getAllMovies).toHaveBeenCalledTimes(1);
      expect(result.data).toHaveLength(0);
      expect(result.count).toBe(0);
    });

    it('should handle moviesService errors', async () => {
      const errorMessage = 'Database error';
      jest.spyOn(moviesService, 'getAllMovies').mockRejectedValue(new Error(errorMessage));

      await expect(controller.getAllMovies()).rejects.toThrow(errorMessage);
      expect(moviesService.getAllMovies).toHaveBeenCalled();
    });
  });

  describe('getMovideDetail', () => {
    it('should return a movie by id', async () => {
      const movieId = '1';
      const whereConditions: FindOptionsWhere<Movie> = {
        id: +movieId
      };


      jest.spyOn(moviesService, 'getMovieDetail').mockResolvedValue(mockResultMovie);

      const result = await controller.getMovideDetail(movieId);

      expect(moviesService.getMovieDetail).toHaveBeenCalledWith(whereConditions);
      expect(moviesService.getMovieDetail).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockResultMovie);
      expect(movieId).toBe(mockResultMovie.movieId.toString());
    });

    it('should handle non-numeric id', async () => {
      const invalidId = 'abc';
      const whereConditions: FindOptionsWhere<Movie> = {
        id: +invalidId // NaN
      };

      jest.spyOn(moviesService, 'getMovieDetail').mockResolvedValue(null);

      const result = await controller.getMovideDetail(invalidId);

      expect(moviesService.getMovieDetail).toHaveBeenCalledWith(whereConditions);
      expect(result).toBeNull();
    });

    it('should handle movie not found', async () => {
      const nonExistentId = '999';
      const whereConditions: FindOptionsWhere<Movie> = {
        id: +nonExistentId
      };
      const error = new NotFoundException(`Movie with conditions ${JSON.stringify(whereConditions)} not found`)

      jest.spyOn(moviesService, 'getMovieDetail').mockRejectedValue(error);

      await expect(controller.getMovideDetail(nonExistentId)).rejects.toThrow(error);
      expect(moviesService.getMovieDetail).toHaveBeenCalledWith(whereConditions);
    });
  });
});
