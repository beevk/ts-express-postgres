import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const DB_TYPE = process.env.DB_TYPE || 'postgres';
const DB_HOSTNAME = process.env.DB_HOSTNAME || 'localhost';
const DB_PORT = process.env.DB_PORT || 5432;
const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
const DB_NAME = process.env.DB_NAME || 'postgres';
const DB_SYNC = process.env.DB_SYNC || true;
const DB_LOGGING = process.env.DB_LOGGING || true;

const DB = {
    type: DB_TYPE,
    host: DB_HOSTNAME,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    sync: DB_SYNC,
    logging: DB_LOGGING
};

const index = {
    server: SERVER,
    db: DB
};

export default index;
