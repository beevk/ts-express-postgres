import config from './source/config';

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
    entities: ['source/entities/**/*.ts'],
    migrations: ['source/migrations/**/*.ts'],
    subscribers: ['source/subscribers/**/*.ts'],
    cli: {
        entitiesDir: 'source/entities',
        migrationsDir: 'source/migrations',
        subscribersDir: 'source/subscribers'
    }
};
