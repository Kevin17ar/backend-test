import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { StartWarApiModule } from '../start-war-api/start-war-api.module';
import { MoviesModule } from 'src/movies/movies.module';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [StartWarApiModule, MoviesModule, UtilsModule],
  providers: [TaskService]
})
export class TaskModule {}
