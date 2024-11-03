import { FindOptionsWhere } from 'typeorm';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';

import { MoviesService } from '../services/movies.service';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { GlobalSwagger } from '../../common/decorators/global-swagger.decorator';
import { GetAllMoviesDto, MovieDto, PostCreateMovieDto } from '../dto';
import { MovieEntity } from '../entities/movie.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) { }

  @GlobalSwagger(
    'Create new movie',
    'This service creates new movie',
    PostCreateMovieDto,
    201
  )
  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto): Promise<PostCreateMovieDto> {
    return this.moviesService.createMovie(createMovieDto);
  }

  @GlobalSwagger(
    'Get all movies',
    'This service returns all movies and count of movies in database',
    GetAllMoviesDto)
  @Get()
  getAllMovies(): Promise<GetAllMoviesDto> {
    return this.moviesService.getAllMovies();
  }

  @GlobalSwagger(
    'Get movie by id',
    'This service returns movie by id',
    MovieDto
  )
  @Get(':id')
  getMovideDetail(@Param('id') id: string) {
    const whereConditions: FindOptionsWhere<MovieEntity> = {
      id: +id
    };

    return this.moviesService.getMovieDetail(whereConditions);
  }

  @GlobalSwagger(
    'Update movie by id',
    'This service updates movie by id',
    MovieDto
  )
  @Patch(':id')
  updateMovie(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto): Promise<MovieDto> {
    return this.moviesService.updateMovie(+id, updateMovieDto);
  }

  @GlobalSwagger(
    'Delete movie by id',
    'This service deletes movie by id',
  )
  @Delete(':id')
  deleteMovieById(@Param('id') id: string): Promise<void> {
    return this.moviesService.deleteMovieById(+id);
  }
}
