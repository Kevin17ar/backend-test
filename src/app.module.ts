import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { config, DatabasePgConfigService } from './config';

import { MoviesModule } from './movies/movies.module';
import { StartWarApiModule } from './start-war-api/start-war-api.module';
import { UtilsModule } from './utils/utils.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      ignoreEnvFile: false,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabasePgConfigService,
      inject: [ConfigService]
    }),
    ScheduleModule.forRoot(),
    MoviesModule,
    StartWarApiModule,
    UtilsModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
