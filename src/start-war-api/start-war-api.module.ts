import { Module } from '@nestjs/common';
import { StartWarApiService } from './services/start-war-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [StartWarApiService],
  exports: [StartWarApiService],
})
export class StartWarApiModule {}
