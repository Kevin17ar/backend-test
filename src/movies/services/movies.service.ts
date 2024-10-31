import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { Movie } from '../entities/movie.entity';
import { MoviesSerializer } from '../serializers/movies.serializer';
import { MovieDto, PostCreateMovieDto } from '../dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesRepository: Repository<Movie>,
    private readonly moviesSerializer: MoviesSerializer,
  ) { }

  async getAllMovies() {
    const movies = await this.find();
    return this.moviesSerializer.getAllMovies(movies);
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<PostCreateMovieDto> {
    try {
      const movie = await this.save(createMovieDto);
      return this.moviesSerializer.postCreateMovie(movie);
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException(`Movie already exists. ${error.detail}`);
      }
      throw error;
    }
  }

  async getMovieDetail(whereConditions: FindOptionsWhere<Movie>): Promise<MovieDto> {
    const movie = await this.findOne(whereConditions);
    if (!movie) {
      throw new NotFoundException(`Movie with conditions ${JSON.stringify(whereConditions)} not found`);
    }

    return this.moviesSerializer.getMovieDetail(movie);
  }

  async updateMovie(id: number, updateMovieDto: UpdateMovieDto): Promise<MovieDto> {
    const movie = await this.moviesRepository.preload({
      id: id,
      ...updateMovieDto,
    });

    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    const updatedMovie = await this.moviesRepository.save(movie);
    return this.moviesSerializer.getMovieDetail(updatedMovie);
  }

  async deleteMovieById(id: number): Promise<void> {
    const deleteResult = await this.moviesRepository.delete({ id });
    if (!deleteResult.affected) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    };
  }

  async save(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesRepository.save(createMovieDto);
  }

  async find(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  async findOne(whereConditions: FindOptionsWhere<Movie>): Promise<Movie> {
    if (!whereConditions || Object.keys(whereConditions).length === 0) {
      throw new BadRequestException(`Not check with conditions. ${JSON.stringify(whereConditions)}`);
    }

    return this.moviesRepository.findOne({ where: whereConditions });

  }
}