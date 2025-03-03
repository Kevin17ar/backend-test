<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Description

Movie management application

## Prerequisites

- Node " >=20.0.0 "
- Npm " >=10.7.0 "
- PostgreSql

## Installation

```bash
$ npm install
```

## PostgreSQL Dev with Docker

```bash
# run
$ docker-compose up -d

# stop
$ docker-compose down

# check state of containers
$ docker ps
```

## Preview run app

- Create the .env file
- Copy all variables from .env.example to the newly created .env file.
- Fill in the "xxxx" values.
- Configure the Cron settings (CRON_TASK_SYNC_FILMS_START_WARS) as needed, you can use this link for help: (https://crontab.cronhub.io/).

## Running the app

```bash
# development mode
$ npm run start

# development watch mode 
$ npm run start:dev

# production mode
$ npm run start:prod
```

## First-time Deployment Setup

- Create the roles "ADMIN" and "REGULAR".

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Documentation (Swagger)

- To access the Swagger documentation, go to the following link. (http://localhost:3000/docs)
- To access the swagger json, go to the followung link. (http://localhost:3000/docs-json)