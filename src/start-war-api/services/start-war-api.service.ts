import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { IFilm, IGetFilms } from '../interfaces/films.interface';
import { ConfigType } from '@nestjs/config';
import { config } from '../../config';

@Injectable()
export class StartWarApiService {
    private readonly startWarsApi: string;

    constructor(
        @Inject(config.KEY)
        private readonly configuration: ConfigType<typeof config>,
        private readonly httpService: HttpService,
    ) {
        this.startWarsApi = this.configuration.services.startWarApi;
    }

    async getAllFilms(): Promise<IGetFilms> {
        const host = `${this.startWarsApi}/films`;
        const { data } = await this.httpService.axiosRef.get<IGetFilms>(host);
        return data;
    };
}
