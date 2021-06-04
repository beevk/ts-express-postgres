import { Connection, createConnection, useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import { logError, logInfo } from '../utils/logging';

export default async (): Promise<Connection | void> => {
    useContainer(Container);
    try {
        logInfo('Initializing DB connection...');
        return await createConnection();
    } catch (err) {
        return logError(`Connecting to DB failed: ${err}`);
    }
};
