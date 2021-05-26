# TS-Express-PostgreSQL Boilerplate

[![Dependency Status](https://status.david-dm.org/gh/beevk/ts-express-postgres.svg)](https://status.david-dm.org/gh/beevk/ts-express-postgres)
[![devDependency Status](https://status.david-dm.org/gh/beevk/ts-express-postgres.svg?type=dev)](https://status.david-dm.org/gh/beevk/ts-express-postgres?type=dev)
[![Github issues](https://img.shields.io/github/issues/beevk/ts-express-postgres.svg)](https://github.com/beevk/ts-express-postgres/issues)
[![Github Discussions](https://img.shields.io/badge/Github%20Discussions%20%26%20Support-Chat%20now!-blue)](https://github.com/beevk/ts-express-postgres/discussions)

[comment]: <> ([![Codacy Badge]&#40;https://api.codacy.com/project/badge/Coverage/b3eb80984adc4671988ffb22d6ad83df&#41;]&#40;https://www.codacy.com/manual/maitraysuthar/rest-api-nodejs-mongodb?utm_source=github.com&utm_medium=referral&utm_content=maitraysuthar/rest-api-nodejs-mongodb&utm_campaign=Badge_Coverage&#41;)
[comment]: <> ([![Codacy Badge]&#40;https://api.codacy.com/project/badge/Grade/b3eb80984adc4671988ffb22d6ad83df&#41;]&#40;https://www.codacy.com/manual/maitraysuthar/rest-api-nodejs-mongodb?utm_source=github.com&utm_medium=referral&utm_content=maitraysuthar/rest-api-nodejs-mongodb&utm_campaign=Badge_Grade&#41;)
___

##### Express API Boilerplate
A ready-to-use boilerplate for REST API Development with Node.js, Express, TypeScript and PostgreSQL.

[<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="typescript" width="100px" />](https://www.typescriptlang.org/)
[<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="typescript" width="300px" />](https://expressjs.com/)
[<img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="typescript" width="100px" />](https://www.postgresql.org/)

## Features

- [x] **Dependency management**: with [npm](https://www.npmjs.com/package/npm)
- [x] **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- [x] **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- [x] **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)
- [x] **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- [x] **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- [x] **Logging**: using [morgan](https://github.com/expressjs/morgan) and [chalk]()
- [ ] **SQL database**: [PostgreSQL](https://www.postgresql.org/) with [TypeORM](https://typeorm.io/)
- [ ] **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- [ ] **Testing**: unit and integration tests using [Jest](https://jestjs.io) and [SuperTest]()
- [ ] **Error handling**: centralized error handling mechanism
- [ ] **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- [ ] **Sanitizing**: sanitize request data against xss and query injection
- [ ] **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- [ ] **CI / CD**: continuous integration and deployment with [Github Action]()
- [ ] **Docker support**
- [ ] **Code coverage**: using [coveralls](https://coveralls.io)
- [ ] **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)
- [ ] **Authentication and authorization**: using [passport](http://www.passportjs.org)

## Libraries
This boilerplate uses the following libraries and tools:

#### Core Dependencies
- [Express.js](https://www.npmjs.com/package/express)
- [PG](https://www.npmjs.com/package/pg)
- [TypeORM](https://typeorm.io/)
- [dotEnv](https://www.npmjs.com/package/dotenv)
- [Morgan](https://www.npmjs.com/package/morgan)

#### Dev Dependencies
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://github.com/eslint/eslint) for linting.
- [Prettier]()
- [Husky]()
- [CommitLint]()
- [nodemon]()
- [nodemon]()
- [jest]()
- [supertest]()

#### ToDos
- [x] Prettier with EsLint
- [ ] Setup test env.
- [ ] Sentry for error logs
- [ ] DB - Local with docker
- [ ] DI
- [ ] Docker
- [ ] Github actions - CI / CD

## Directory Structure (todo)
```bash
.
├── .husky                      # Github hooks for husky
├── build                       # Built, ready to serve app.
├── config                      # Root folder for configurations.
│   └── index.ts                # App configurations.
├── node_modules                # Node Packages.
├── source                      # Source code.
│   ├── bootstrap               # Root folder for bootstrapping the app.
│   │   ├── index.ts            # Sets up basic middleware
│   │   └── db.config.ts        # Sets up DB
│   ├── route                   # Folder for app routes.
│   │   └── index.ts            # Root level routes
│   ├── interface               # Folder for interface.
│   │   └── user.interface.ts   # User interface
│   ├── service                 # Folder for services.
│   │   ├── index.ts            # Common place to export other services
│   │   └── auth.service.ts     # Auth service layer
│   └── middleware              # Folder to hold all middleware functions
│       └── logging.ts          # Middleware for logging to console
├── .dockerignore               # Tells docker which files to ignore.
├── .gitignore                  # Tells git which files to ignore.
├── .prettierignore             # Tells prettier which files to ignore
├── .eslintrc.js                # Eslint configuration
├── .prettierrc                 # Prettier configuration
├── commitlint.config.js        # commitlint configuration for husky
├── Dockerfile                  # Dockerfile.
├── LICENSE                     # License file
├── package.json                # Package configuration.
├── package-lock.json           # Package lock
├── README.md                   # This file
└── tsconfig.json               # TypeScript transpiler configuration.
```

## Installation
You can clone from this repository and use main branch.

```bash
$ git clone https://github.com/beevk/ts-express-postgres.git projectName
$ cd projectName
$ npm i
```

## Usage

All commands defaults to development environment. You can set `NODE_ENV` to `production` or use the shortcuts below.

```bash
# Running

$ npm run dev # This starts the app in development mode

# Starting it with the production build (todo)
$ NODE_ENV=production npm run start # or

# Building (todo)
$ npm run build # This builds the app in development mode

# Commands below builds the production build (todo)
$ NODE_ENV=production npm run build # or
$ npm run build:prod

# Testing (todo)
$ npm run test

# Testing with watch mode(todo)
$ npm run test:watch

# Too check test coverage (todo)
$ npm run coverage
```

## License

This boilerplate is released under the [MIT license](https://opensource.org/licenses/MIT).

___
