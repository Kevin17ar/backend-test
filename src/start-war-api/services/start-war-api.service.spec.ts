import { Config } from './../../../node_modules/@sqltools/formatter/lib/core/types.d';
import { Test, TestingModule } from '@nestjs/testing';
import { StartWarApiService } from './start-war-api.service';
import { ConfigModule } from '@nestjs/config';
import { config } from '../../config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { IGetFilms } from '../interfaces/films.interface';
import { mockedGetFilms } from '../__mocks__/get-films.mock';

describe('StartWarApiService tests', () => {
  let startWarApiService: StartWarApiService;
  let httpService: HttpService;

  const mockedGetFilmsData = mockedGetFilms();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env.test',
          ignoreEnvFile: true,
          isGlobal: true,
          load: [config],
        }),
        HttpModule
      ],
      providers: [
        StartWarApiService,
      ],
    }).compile();

    startWarApiService = module.get<StartWarApiService>(StartWarApiService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(startWarApiService).toBeDefined();
  });

  describe('getAllFilms', () => {
    it('should return data on successful API call', async () => {
      jest.spyOn(httpService.axiosRef, 'get').mockResolvedValue(mockedGetFilmsData);

      const result = await startWarApiService.getAllFilms();
      expect(result).toEqual(mockedGetFilmsData.data);
    });
  });
});
