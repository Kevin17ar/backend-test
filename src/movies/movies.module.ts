import { Module } from '@nestjs/common';
import { MoviesController } from './controllers/movies.controller';
import { MoviesService } from './services/movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { MoviesSerializer } from './serializers/movies.serializer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie])
  ],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesSerializer],
  exports: [MoviesService]
})
export class MoviesModule { }
