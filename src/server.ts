import http from 'http';

import app from './app';
import config from './config/index';
import { logInfo } from './utils/logging';

const { server } = config;
const { port, hostname } = server;

const startServer = async () => {
    const appInstance = await app();
    const httpServer = http.createServer(appInstance);
    httpServer.listen(port, () => logInfo(`Server ${hostname} running at PORT: ${port}`));
};

startServer();
