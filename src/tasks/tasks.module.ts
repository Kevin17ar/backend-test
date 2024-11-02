import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { StartWarApiModule } from '../start-war-api/start-war-api.module';
import { MoviesModule } from 'src/movies/movies.module';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [StartWarApiModule, MoviesModule, UtilsModule],
  providers: [TasksService]
})
export class TasksModule {}
