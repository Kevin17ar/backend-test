import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { StartWarApiModule } from '../start-war-api/start-war-api.module';
import { MoviesModule } from '../movies/movies.module';
import { UtilsModule } from '../utils/utils.module';

@Module({
  imports: [StartWarApiModule, MoviesModule, UtilsModule],
  providers: [TasksService]
})
export class TasksModule {}
