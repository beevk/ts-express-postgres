import { Connection, createConnection, useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import { logError, logInfo } from '../utils/logging';

export default async (): Promise<Connection | void> => {
    useContainer(Container);
    try {
        logInfo('Initializing DB connection...');
        const connection = await createConnection();
        logInfo('DB Connected!');

        logInfo('Running migrations...');
        // runs all the pending migrations
        await connection.runMigrations();
        logInfo('Migration complete');

        return connection;
    } catch (err) {
        logError(`Connecting to DB failed: ${err}`);
        return process.exit(1);
        // throw new DBConnectionError();
    }
};
