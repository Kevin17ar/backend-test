import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { MovieEntity } from '../entities/movie.entity';
import { MoviesSerializer } from '../serializers/movies.serializer';
import { MovieDto, PostCreateMovieDto } from '../dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly moviesRepository: Repository<MovieEntity>,
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
        throw new BadRequestException(`MovieEntity already exists. ${error.detail}`);
      }
      throw error;
    }
  }

  async getMovieDetail(whereConditions: FindOptionsWhere<MovieEntity>): Promise<MovieDto> {
    const movie = await this.findOne(whereConditions);
    if (!movie) {
      throw new NotFoundException(`MovieEntity with conditions ${JSON.stringify(whereConditions)} not found`);
    }

    return this.moviesSerializer.getMovieDetail(movie);
  }

  async updateMovie(id: number, updateMovieDto: UpdateMovieDto): Promise<MovieDto> {
    const movie = await this.moviesRepository.preload({
      id: id,
      ...updateMovieDto,
    });

    if (!movie) {
      throw new NotFoundException(`MovieEntity with ID ${id} not found`);
    }
    const updatedMovie = await this.moviesRepository.save(movie);
    return this.moviesSerializer.getMovieDetail(updatedMovie);
  }

  async deleteMovieById(id: number): Promise<void> {
    const deleteResult = await this.moviesRepository.delete({ id });
    if (!deleteResult.affected) {
      throw new NotFoundException(`MovieEntity with ID ${id} not found`);
    };
  }

  async save(createMovieDto: CreateMovieDto): Promise<MovieEntity> {
    return this.moviesRepository.save(createMovieDto);
  }

  async find(): Promise<MovieEntity[]> {
    return this.moviesRepository.find();
  }

  async findOne(whereConditions: FindOptionsWhere<MovieEntity>): Promise<MovieEntity> {
    if (!whereConditions || Object.keys(whereConditions).length === 0) {
      throw new BadRequestException(`Not check with conditions. ${JSON.stringify(whereConditions)}`);
    }

    return this.moviesRepository.findOne({ where: whereConditions });
  }
}