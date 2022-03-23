import config from './src/config';

const { db } = config;
const { type, host, port, username, password, database, sync, logging } = db;

export default {
    type,
    host,
    port,
    username,
    password,
    database,
    synchronize: sync,
    logging,
    entities: ['src/entities/**/*.ts', './entities/**/*.js'],
    migrations: ['src/migrations/**/*.ts', './migrations/**/*.js'],
    subscribers: ['src/subscribers/**/*.ts', './subscribers/**/*.js'],
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migrations',
        subscribersDir: 'src/subscribers'
    }
};
