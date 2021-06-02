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
    entities: ['source/entity/**/*.ts'],
    migrations: ['source/migration/**/*.ts'],
    subscribers: ['source/subscriber/**/*.ts'],
    cli: {
        entitiesDir: 'source/entity',
        migrationsDir: 'source/migration',
        subscribersDir: 'source/subscriber'
    }
};
