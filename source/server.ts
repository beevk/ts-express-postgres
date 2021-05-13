import http from 'http';

import app from './app';
import config from './config';
import { logInfo } from './config/logging';

const { server } = config;
const { port, hostname } = server;

const httpServer = http.createServer(app);
httpServer.listen(port, () => logInfo(`Server ${hostname} running at PORT: ${port}`));
